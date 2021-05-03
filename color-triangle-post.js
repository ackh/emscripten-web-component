"use strict";

const webComponentName = "color-triangle";
const canvasIdentifier = "canvas";
const eventModuleReady = "onmoduleready";

var module;

class ColorTriangle extends HTMLElement {
  constructor() {
    super();
    this.resizeObserver = new ResizeObserver(this.resizeHandler.bind(this));
    this.canvas         = null;
    this.colorTriangle  = null;
  }

  static get observedAttributes() {
    return [colorAttribute];
  }

  connectedCallback() {
    document.addEventListener(eventModuleReady, this.createInstance.bind(this));
    this.resizeObserver.observe(this, { box: "content-box" });
    this.style.display        = "flex";
    this.style.justifyContent = "center";
    this.style.alignItems     = "center";
    this.canvas               = document.createElement("canvas");
    this.canvas.id            = canvasIdentifier;
    this.canvas.oncontextmenu = this.contextMenuHandler;
    this.canvas.style.width   = "100%";
    this.canvas.style.height  = "100%";
    this.appendChild(this.canvas);
    this.resizeCanvasBuffer();
    this.createInstance();
  }

  createInstance() {
    if(module && !this.colorTriangle) {
      this.colorTriangle = new module.ColorTriangle(canvasIdentifier);
      this.colorTriangle.startRenderingLoop();
    }
  }

  resizeCanvasBuffer() {
    this.canvas.width  = this.offsetWidth;
    this.canvas.height = this.offsetHeight;
  }

  resizeHandler(entries) {
    if(this.colorTriangle) {
      this.resizeCanvasBuffer();
      this.colorTriangle.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }
  }

  contextMenuHandler(event) {
    event.preventDefault();
  }
}

if(!customElements.get(webComponentName)) {
  customElements.define(webComponentName, ColorTriangle);
}

createModule().then(instance => {
  module = instance;
  document.dispatchEvent(new CustomEvent(eventModuleReady));
});
