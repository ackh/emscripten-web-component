#pragma once

#include <emscripten.h>
#include <emscripten/bind.h>
#include <emscripten/html5.h>

#include <EGL/egl.h>
#include <GLES2/gl2.h>
#include <GLES2/gl2ext.h>

#include <cstdint>
#include <string>

namespace EmscriptenWebComponent
{
  class ColorTriangle
  {
  public:
    ColorTriangle(std::string canvasIdentifier, uint8_t red, uint8_t green, uint8_t blue);
    ~ColorTriangle();
    void SetSize(float width, float height);
    void StartRenderingLoop();
    void StopRenderingLoop();
    void SetRed(uint8_t red);
    void SetGreen(uint8_t green);
    void SetBlue(uint8_t blue);
    uint8_t GetRed() const;
    uint8_t GetGreen() const;
    uint8_t GetBlue() const;

  private:
    static constexpr float vertices[] =
    {
       0.0f,  0.4f, 0.0f,
      -0.4f, -0.4f, 0.0f,
       0.4f, -0.4f, 0.0f,
    };

    EMSCRIPTEN_WEBGL_CONTEXT_HANDLE _context;

    uint8_t _red;
    uint8_t _green;
    uint8_t _blue;

    GLuint _program      = 0;
    GLuint _vertexBuffer = 0;

    GLint _coordinateAttribLocation;
    GLint _colorUniformLocation;

    GLuint CompileShader(GLenum type, const std::string& source);
    GLuint CompileProgram(const std::string& vertexShaderSource, const std::string& fragmentShaderSource);

    void Initialize(std::string canvasIdentifier);
    void Destroy();
    void ConfigureOpenGL();
    void CreateShaders();
    void CreateBuffer();
    void UpdateColor();
    void RenderFrame();
    void ColorChangedCallback();

    static void Render(void* arg);

    const std::string vertexShaderSource = R"(
attribute vec3 aCoordinate;
uniform vec3 uColor;
varying vec4 vColor;

void main()
{
  gl_Position = vec4(aCoordinate.x, aCoordinate.y, aCoordinate.z, 1.0);
  vColor = vec4(uColor, 1.0);
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
      .smart_ptr_constructor("ColorTriangle", &std::make_shared<ColorTriangle, std::string, uint8_t, uint8_t, uint8_t>)
      .function("setSize"           , &ColorTriangle::SetSize)
      .function("startRenderingLoop", &ColorTriangle::StartRenderingLoop)
      .function("stopRenderingLoop" , &ColorTriangle::StopRenderingLoop)
      .property("red"               , &ColorTriangle::GetRed  , &ColorTriangle::SetRed)
      .property("green"             , &ColorTriangle::GetGreen, &ColorTriangle::SetGreen)
      .property("blue"              , &ColorTriangle::GetBlue , &ColorTriangle::SetBlue)
      ;
  }
}
