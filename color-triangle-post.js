const webComponentName  = "color-triangle";
const eventColorChanged = "colorchanged";
const attributeRed      = "red";
const attributeGreen    = "green";
const attributeBlue     = "blue";

export default class ColorTriangle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.resizeObserver       = new ResizeObserver(this.resizeHandler.bind(this));
    this.module               = null;
    this.colorTriangle        = null;
    this.style.display        = "flex";
    this.style.justifyContent = "center";
    this.style.alignItems     = "center";
    this.canvas               = document.createElement("canvas");
    this.canvas.oncontextmenu = this.contextMenuHandler;
    this.canvas.style.width   = "100%";
    this.canvas.style.height  = "100%";
    this.shadowRoot.appendChild(this.canvas);
    this.resizeCanvasBuffer();
    this.createModuleInstance();
    document.addEventListener(eventColorChanged, this.colorChangedHandler.bind(this));
  }

  static get observedAttributes() {
    return [attributeRed, attributeGreen, attributeBlue];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if(this.colorTriangle) {
      switch(attributeName) {
        case attributeRed:
        case attributeGreen:
        case attributeBlue:
          this.colorTriangle[attributeName] = parseInt(newValue);
          break;
      }
    }
  }

  connectedCallback() {
    this.resizeObserver.observe(this, { box: "content-box" });
  }

  set red(value) {
    this.setAttribute(attributeRed, value)
  }

  get red() {
    return this.colorTriangle ? this.colorTriangle.red : undefined;
  }

  set green(value) {
    this.setAttribute(attributeGreen, value)
  }

  get green() {
    return this.colorTriangle ? this.colorTriangle.green : undefined;
  }

  set blue(value) {
    this.setAttribute(attributeBlue, value)
  }

  get blue() {
    return this.colorTriangle ? this.colorTriangle.blue : undefined;
  }

  createModuleInstance() {
    createModule({ canvas: this.canvas }).then(instance => {
      let red            = parseInt(this.getAttribute(attributeRed))   || 0;
      let green          = parseInt(this.getAttribute(attributeGreen)) || 0;
      let blue           = parseInt(this.getAttribute(attributeBlue))  || 0;
      this.module        = instance;
      this.colorTriangle = new this.module.ColorTriangle("#canvas", red, green, blue);
      this.colorTriangle.startRenderingLoop();
      this.shadowRoot.dispatchEvent(new CustomEvent("load", { bubbles: true, composed: true }));
    });
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

  colorChangedHandler(event) {
    if(this.colorTriangle.$$.ptr == event.detail.sender) {
      this.shadowRoot.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true, detail: { color: event.detail.color }}));
    }
  }

  contextMenuHandler(event) {
    event.preventDefault();
  }
}

if(!customElements.get(webComponentName)) {
  customElements.define(webComponentName, ColorTriangle);
}

function intToHexColor(number) {
  return "#" + (number & 0x00FFFFFF).toString(16).padStart(6, "0");
}

function onColorChanged(sender, color) {
  document.dispatchEvent(new CustomEvent(eventColorChanged, { detail: { sender: sender, color: intToHexColor(color) }}));
}
