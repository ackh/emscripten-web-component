#pragma once

#include <emscripten.h>
#include <emscripten/bind.h>
#include <emscripten/html5.h>

#include <EGL/egl.h>
#include <GLES2/gl2.h>
#include <GLES2/gl2ext.h>

#include <string>

namespace EmscriptenWebComponent
{
  class ColorTriangle
  {
  public:
    ColorTriangle(std::string canvasIdentifier);
    ~ColorTriangle();
    void SetSize(float width, float height);
    void StartRenderingLoop();
    void StopRenderingLoop();

  private:
    static constexpr float vertices[] =
    {
       0.0f,  0.4f, 0.0f, // coordinate
       1.0f,  0.0f, 0.0f, // color
      -0.4f, -0.4f, 0.0f, // coordinate
       0.0f,  1.0f, 0.0f, // color
       0.4f, -0.4f, 0.0f, // coordinate
       0.0f,  0.0f, 1.0f, // color
    };

    EMSCRIPTEN_WEBGL_CONTEXT_HANDLE _context;

    GLuint _program      = 0;
    GLuint _vertexBuffer = 0;

    GLint _coordinateAttribLocation;
    GLint _colorAttribLocation;

    GLuint CompileShader(GLenum type, const std::string& source);
    GLuint CompileProgram(const std::string& vertexShaderSource, const std::string& fragmentShaderSource);

    void Initialize(std::string canvasIdentifier);
    void Destroy();
    void ConfigureOpenGL();
    void CreateShaders();
    void CreateBuffer();
    void RenderFrame();

    static void Render(void* arg);

    const std::string vertexShaderSource = R"(
attribute vec3 aCoordinate;
attribute vec3 aColor;
varying vec4 vColor;

void main()
{
  gl_Position = vec4(aCoordinate.x, aCoordinate.y, aCoordinate.z, 1.0);
  vColor = vec4(aColor, 1.0);
}
)";

    const std::string fragmentShaderSource = R"(
precision mediump float;
varying vec4 vColor;

void main()
{
  gl_FragColor = vColor;
}
)";
  };

  EMSCRIPTEN_BINDINGS(ColorTriangle)
  {
    emscripten::class_<ColorTriangle>("ColorTriangle")
      .smart_ptr_constructor("ColorTriangle", &std::make_shared<ColorTriangle, std::string>)
      .function("setSize"           , &ColorTriangle::SetSize)
      .function("startRenderingLoop", &ColorTriangle::StartRenderingLoop)
      .function("stopRenderingLoop" , &ColorTriangle::StopRenderingLoop)
      ;
  }
}
