#include "ColorTriangle.h"

#include <memory>
#include <vector>

using namespace emscripten;
using namespace EmscriptenWebComponent;


ColorTriangle::ColorTriangle(std::string canvasIdentifier, uint8_t red, uint8_t green, uint8_t blue)
{
  _red   = red;
  _green = green;
  _blue  = blue;
  int width, height;
  Initialize(canvasIdentifier);
  emscripten_get_canvas_element_size(canvasIdentifier.c_str(), &width, &height);
  SetSize(width, height);
  ConfigureOpenGL();
  CreateShaders();
  CreateBuffer();
  UpdateColor();
}


ColorTriangle::~ColorTriangle()
{
  if(_program != 0)
  {
    glDeleteProgram(_program);
    _program = 0;
  }

  if(_vertexBuffer != 0)
  {
    glDeleteBuffers(1, &_vertexBuffer);
    _vertexBuffer = 0;
  }
}


void ColorTriangle::SetSize(float width, float height)
{
  glViewport(0, 0, width, height);
}


void ColorTriangle::StartRenderingLoop()
{
  emscripten_set_main_loop_arg(&ColorTriangle::Render, this, -1, 0);
}


void ColorTriangle::StopRenderingLoop()
{
  emscripten_cancel_main_loop();
}


void ColorTriangle::SetRed(uint8_t red)
{
  _red = red;
  UpdateColor();
  ColorChangedCallback();
}


void ColorTriangle::SetGreen(uint8_t green)
{
  _green = green;
  UpdateColor();
  ColorChangedCallback();
}


void ColorTriangle::SetBlue(uint8_t blue)
{
  _blue = blue;
  UpdateColor();
  ColorChangedCallback();
}


uint8_t ColorTriangle::GetRed() const
{
  return _red;
}


uint8_t ColorTriangle::GetGreen() const
{
  return _green;
}


uint8_t ColorTriangle::GetBlue() const
{
  return _blue;
}


GLuint ColorTriangle::CompileShader(GLenum type, const std::string& source)
{
  GLint  compilationSuccessful;
  GLuint shader = glCreateShader(type);

  const char* shaderSource = source.c_str();
  glShaderSource(shader, 1, &shaderSource, NULL);
  glCompileShader(shader);
  glGetShaderiv(shader, GL_COMPILE_STATUS, &compilationSuccessful);

  if(!compilationSuccessful)
  {
    GLint infoLogLength;
    glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &infoLogLength);
    std::vector<GLchar> infoLog(infoLogLength);
    glGetShaderInfoLog(shader, static_cast<GLsizei>(infoLog.size()), NULL, infoLog.data());
    std::string errorMessage = std::string("Error compiling ") + (type == GL_VERTEX_SHADER ? "vertex" : "fragment") + " shader: ";
    errorMessage += std::string(infoLog.begin(), infoLog.end());
    printf("%s\n", errorMessage.c_str());
  }

  return shader;
}


GLuint ColorTriangle::CompileProgram(const std::string& vertexShaderSource, const std::string& fragmentShaderSource)
{
  GLint  linkingSuccessful;
  GLuint program = glCreateProgram();

  if(program == 0)
  {
    printf("Error creating OpenGL program, return value = %u\n", program);
  }

  GLuint vertexShader   = CompileShader(GL_VERTEX_SHADER, vertexShaderSource);
  GLuint fragmentShader = CompileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);

  if(vertexShader == 0 || fragmentShader == 0)
  {
    glDeleteShader(fragmentShader);
    glDeleteShader(vertexShader);
    glDeleteProgram(program);
    return 0;
  }

  glAttachShader(program, vertexShader);
  glDeleteShader(vertexShader);
  glAttachShader(program, fragmentShader);
  glDeleteShader(fragmentShader);
  glLinkProgram(program);
  glGetProgramiv(program, GL_LINK_STATUS, &linkingSuccessful);

  if(!linkingSuccessful)
  {
    GLint infoLogLength;
    glGetProgramiv(program, GL_INFO_LOG_LENGTH, &infoLogLength);
    std::vector<GLchar> infoLog(infoLogLength);
    glGetProgramInfoLog(program, static_cast<GLsizei>(infoLog.size()), NULL, infoLog.data());
    std::string errorMessage = std::string("Error linking the OpenGL program: ");
    errorMessage += std::string(infoLog.begin(), infoLog.end());
    printf("%s\n", errorMessage.c_str());
  }

  return program;
}


void ColorTriangle::Initialize(std::string canvasIdentifier)
{
  EmscriptenWebGLContextAttributes contextAttributes;
  contextAttributes.alpha               = EM_TRUE;
  contextAttributes.depth               = EM_TRUE;
  contextAttributes.stencil             = EM_TRUE;
  contextAttributes.antialias           = EM_TRUE;
  contextAttributes.explicitSwapControl = EM_FALSE;
  contextAttributes.majorVersion        = 2;
  contextAttributes.minorVersion        = 0;
  _context                              = emscripten_webgl_create_context(canvasIdentifier.c_str(), &contextAttributes);
  emscripten_webgl_make_context_current(_context);
}


void ColorTriangle::Destroy()
{
  emscripten_webgl_destroy_context(_context);
}


void ColorTriangle::ConfigureOpenGL()
{
  glDisable(GL_DITHER);
  glEnable(GL_CULL_FACE);
  glEnable(GL_DEPTH_TEST);
  glClearColor(1.0f, 1.0f, 1.0f, 0.0f);
}


void ColorTriangle::CreateShaders()
{
  _program                  = CompileProgram(vertexShaderSource, fragmentShaderSource);
  _coordinateAttribLocation = glGetAttribLocation(_program, "aCoordinate");
  _colorUniformLocation     = glGetUniformLocation(_program, "uColor");
  glUseProgram(_program);
}


void ColorTriangle::CreateBuffer()
{
  glGenBuffers(1, &_vertexBuffer);
  glBindBuffer(GL_ARRAY_BUFFER, _vertexBuffer);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glEnableVertexAttribArray(_coordinateAttribLocation);
  glVertexAttribPointer(_coordinateAttribLocation, 3, GL_FLOAT, GL_FALSE, sizeof(float) * 3, reinterpret_cast<GLvoid*>(0));
}


void ColorTriangle::UpdateColor()
{
  glUniform3f(_colorUniformLocation, _red / 255.0f, _green / 255.0f, _blue / 255.0f);
}


void ColorTriangle::RenderFrame()
{
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
  glDrawArrays(GL_TRIANGLES, 0, 3);
}


void ColorTriangle::ColorChangedCallback()
{
  uint32_t color = static_cast<uint32_t>(_red) << 16 | static_cast<uint32_t>(_green) << 8 | static_cast<uint32_t>(_blue);
  EM_ASM_ARGS(onColorChanged($0, $1), this, color);
}


void ColorTriangle::Render(void* arg)
{
  static_cast<ColorTriangle*>(arg)->RenderFrame();
}
