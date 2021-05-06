
var createModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(createModule) {
  createModule = createModule || {};


var f;f||(f=typeof createModule !== 'undefined' ? createModule : {});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var ca={},q;for(q in f)f.hasOwnProperty(q)&&(ca[q]=f[q]);function da(a,b){throw b;}var ea=!1,t=!1,fa=!1,ha=!1;ea="object"===typeof window;t="function"===typeof importScripts;fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ha=!ea&&!fa&&!t;var v="",ia,ka,la,ma,na;
if(fa)v=t?require("path").dirname(v)+"/":__dirname+"/",ia=function(a,b){ma||(ma=require("fs"));na||(na=require("path"));a=na.normalize(a);return ma.readFileSync(a,b?null:"utf8")},la=function(a){a=ia(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof oa))throw a;}),process.on("unhandledRejection",A),da=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};
else if(ha)"undefined"!=typeof read&&(ia=function(a){return read(a)}),la=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"function"===typeof quit&&(da=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ea||t)t?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&
(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+1):v="",ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(la=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ka=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?
b(d.response):c()};d.onerror=c;d.send(null)};var pa=f.print||console.log.bind(console),B=f.printErr||console.warn.bind(console);for(q in ca)ca.hasOwnProperty(q)&&(f[q]=ca[q]);ca=null;f.quit&&(da=f.quit);function qa(a){ra||(ra={});ra[a]||(ra[a]=1,B(a))}var ra,sa;f.wasmBinary&&(sa=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ta,ua=!1,va;function assert(a,b){a||A("Assertion failed: "+b)}
var wa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function xa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&wa)return wa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var h=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|h:(e&7)<<18|g<<12|h<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function ya(a,b){return a?xa(C,a,b):""}
function za(a,b,c){var d=C;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var k=a.charCodeAt(++g);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(b>=c)break;d[b++]=h}else{if(2047>=h){if(b+1>=c)break;d[b++]=192|h>>6}else{if(65535>=h){if(b+2>=c)break;d[b++]=224|h>>12}else{if(b+3>=c)break;d[b++]=240|h>>18;d[b++]=128|h>>12&63}d[b++]=128|h>>6&63}d[b++]=128|h&63}}d[b]=0;return b-e}
var Aa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Ba(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&Ca[c];)++c;c<<=1;if(32<c-a&&Aa)return Aa.decode(C.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=Da[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function Ea(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)Da[b>>1]=a.charCodeAt(e),b+=2;Da[b>>1]=0;return b-d}function Fa(a){return 2*a.length}
function Ga(a,b){for(var c=0,d="";!(c>=b/4);){var e=D[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function Ha(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var h=a.charCodeAt(++e);g=65536+((g&1023)<<10)|h&1023}D[b>>2]=g;b+=4;if(b+4>c)break}D[b>>2]=0;return b-d}
function Ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Ja,Ka,C,Da,Ca,D,F,La,Ma;function Na(){var a=ta.buffer;Ja=a;f.HEAP8=Ka=new Int8Array(a);f.HEAP16=Da=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=Ca=new Uint16Array(a);f.HEAPU32=F=new Uint32Array(a);f.HEAPF32=La=new Float32Array(a);f.HEAPF64=Ma=new Float64Array(a)}var Oa,Pa=[],Qa=[],Ra=[],Sa=[];function Ta(){var a=f.preRun.shift();Pa.unshift(a)}
var G=0,Ua=null,Va=null;f.preloadedImages={};f.preloadedAudios={};function A(a){if(f.onAbort)f.onAbort(a);B(a);ua=!0;va=1;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Wa(a){var b=H;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Xa(){return Wa("data:application/octet-stream;base64,")}var H="color-triangle.wasm";if(!Xa()){var Ya=H;H=f.locateFile?f.locateFile(Ya,v):v+Ya}
function Za(){var a=H;try{if(a==H&&sa)return new Uint8Array(sa);if(la)return la(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function $a(){if(!sa&&(ea||t)){if("function"===typeof fetch&&!Wa("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Za()});if(ka)return new Promise(function(a,b){ka(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Za()})}var ab={6024:function(a,b){onColorChanged(a,b)}};
function bb(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Sa;"number"===typeof c?void 0===b.za?Oa.get(c)():Oa.get(c)(b.za):c(void 0===b.za?null:b.za)}}}function cb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var db=void 0;function I(a){for(var b="";C[a];)b+=db[C[a++]];return b}var eb={},J={},fb={};
function gb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function hb(a,b){a=gb(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function ib(a){var b=Error,c=hb(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var jb=void 0;function K(a){throw new jb(a);}var kb=void 0;function lb(a){throw new kb(a);}
function L(a,b,c){function d(k){k=c(k);k.length!==a.length&&lb("Mismatched type converter count");for(var l=0;l<a.length;++l)M(a[l],k[l])}a.forEach(function(k){fb[k]=b});var e=Array(b.length),g=[],h=0;b.forEach(function(k,l){J.hasOwnProperty(k)?e[l]=J[k]:(g.push(k),eb.hasOwnProperty(k)||(eb[k]=[]),eb[k].push(function(){e[l]=J[k];++h;h===g.length&&d(e)}))});0===g.length&&d(e)}
function M(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||K('type "'+d+'" must have a positive integer typeid pointer');if(J.hasOwnProperty(a)){if(c.Wa)return;K("Cannot register type '"+d+"' twice")}J[a]=b;delete fb[a];eb.hasOwnProperty(a)&&(b=eb[a],delete eb[a],b.forEach(function(e){e()}))}function mb(a){K(a.$$.la.ka.name+" instance already deleted")}var nb=!1;function ob(){}
function pb(a){--a.count.value;0===a.count.value&&(a.ma?a.na.ta(a.ma):a.la.ka.ta(a.ptr))}function qb(a){if("undefined"===typeof FinalizationGroup)return qb=function(b){return b},a;nb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.ptr?pb(c):console.warn("object already deleted: "+c.ptr)});qb=function(b){nb.register(b,b.$$,b.$$);return b};ob=function(b){nb.unregister(b.$$)};return qb(a)}var rb=void 0,sb=[];
function tb(){for(;sb.length;){var a=sb.pop();a.$$.ua=!1;a["delete"]()}}function N(){}var ub={};function vb(a,b,c){if(void 0===a[b].pa){var d=a[b];a[b]=function(){a[b].pa.hasOwnProperty(arguments.length)||K("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].pa+")!");return a[b].pa[arguments.length].apply(this,arguments)};a[b].pa=[];a[b].pa[d.Aa]=d}}
function wb(a,b){f.hasOwnProperty(a)?(K("Cannot register public name '"+a+"' twice"),vb(f,a,a),f.hasOwnProperty(void 0)&&K("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),f[a].pa[void 0]=b):f[a]=b}function xb(a,b,c,d,e,g,h,k){this.name=a;this.constructor=b;this.ra=c;this.ta=d;this.oa=e;this.Ta=g;this.ya=h;this.Qa=k;this.Za=[]}
function yb(a,b,c){for(;b!==c;)b.ya||K("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.ya(a),b=b.oa;return a}function zb(a,b){if(null===b)return this.Fa&&K("null is not a valid "+this.name),0;b.$$||K('Cannot pass "'+Ab(b)+'" as a '+this.name);b.$$.ptr||K("Cannot pass deleted object as a pointer of type "+this.name);return yb(b.$$.ptr,b.$$.la.ka,this.ka)}
function Bb(a,b){if(null===b){this.Fa&&K("null is not a valid "+this.name);if(this.Ca){var c=this.ab();null!==a&&a.push(this.ta,c);return c}return 0}b.$$||K('Cannot pass "'+Ab(b)+'" as a '+this.name);b.$$.ptr||K("Cannot pass deleted object as a pointer of type "+this.name);!this.Ba&&b.$$.la.Ba&&K("Cannot convert argument of type "+(b.$$.na?b.$$.na.name:b.$$.la.name)+" to parameter type "+this.name);c=yb(b.$$.ptr,b.$$.la.ka,this.ka);if(this.Ca)switch(void 0===b.$$.ma&&K("Passing raw pointer to smart pointer is illegal"),
this.cb){case 0:b.$$.na===this?c=b.$$.ma:K("Cannot convert argument of type "+(b.$$.na?b.$$.na.name:b.$$.la.name)+" to parameter type "+this.name);break;case 1:c=b.$$.ma;break;case 2:if(b.$$.na===this)c=b.$$.ma;else{var d=b.clone();c=this.bb(c,Cb(function(){d["delete"]()}));null!==a&&a.push(this.ta,c)}break;default:K("Unsupporting sharing policy")}return c}
function Db(a,b){if(null===b)return this.Fa&&K("null is not a valid "+this.name),0;b.$$||K('Cannot pass "'+Ab(b)+'" as a '+this.name);b.$$.ptr||K("Cannot pass deleted object as a pointer of type "+this.name);b.$$.la.Ba&&K("Cannot convert argument of type "+b.$$.la.name+" to parameter type "+this.name);return yb(b.$$.ptr,b.$$.la.ka,this.ka)}function Eb(a){return this.fromWireType(F[a>>2])}
function Fb(a,b,c){if(b===c)return a;if(void 0===c.oa)return null;a=Fb(a,b,c.oa);return null===a?null:c.Qa(a)}var Gb={};function Hb(a,b){for(void 0===b&&K("ptr should not be undefined");a.oa;)b=a.ya(b),a=a.oa;return Gb[b]}function Ib(a,b){b.la&&b.ptr||lb("makeClassHandle requires ptr and ptrType");!!b.na!==!!b.ma&&lb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return qb(Object.create(a,{$$:{value:b}}))}
function P(a,b,c,d,e,g,h,k,l,m,n){this.name=a;this.ka=b;this.Fa=c;this.Ba=d;this.Ca=e;this.Ya=g;this.cb=h;this.Na=k;this.ab=l;this.bb=m;this.ta=n;e||void 0!==b.oa?this.toWireType=Bb:(this.toWireType=d?zb:Db,this.qa=null)}function Jb(a,b){f.hasOwnProperty(a)||lb("Replacing nonexistant public symbol");f[a]=b;f[a].Aa=void 0}
function Kb(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];-1!=a.indexOf("j")?(d=f["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=Oa.get(b).apply(null,c);return d}}function Q(a,b){a=I(a);var c=-1!=a.indexOf("j")?Kb(a,b):Oa.get(b);"function"!==typeof c&&K("unknown function pointer with signature "+a+": "+b);return c}var Lb=void 0;function Mb(a){a=Nb(a);var b=I(a);R(a);return b}
function Ob(a,b){function c(g){e[g]||J[g]||(fb[g]?fb[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new Lb(a+": "+d.map(Mb).join([", "]));}function Pb(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}function Qb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function Rb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=hb(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Sb(a,b,c){a instanceof Object||K(c+' with invalid "this": '+a);a instanceof b.ka.constructor||K(c+' incompatible with "this" of type '+a.constructor.name);a.$$.ptr||K("cannot call emscripten binding method "+c+" on deleted object");return yb(a.$$.ptr,a.$$.la.ka,b.ka)}var Tb=[],S=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ub(a){4<a&&0===--S[a].Ha&&(S[a]=void 0,Tb.push(a))}
function Cb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Tb.length?Tb.pop():S.length;S[b]={Ha:1,value:a};return b}}function Ab(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Vb(a,b){switch(b){case 2:return function(c){return this.fromWireType(La[c>>2])};case 3:return function(c){return this.fromWireType(Ma[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Wb(a,b,c){switch(b){case 0:return c?function(d){return Ka[d]}:function(d){return C[d]};case 1:return c?function(d){return Da[d>>1]}:function(d){return Ca[d>>1]};case 2:return c?function(d){return D[d>>2]}:function(d){return F[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Xb(a,b){var c=J[a];void 0===c&&K(b+" has unknown type "+Mb(a));return c}
function Yb(a,b){Zb=a;$b=b;if(ac)if(bc||(bc=!0),0==a)T=function(){var d=Math.max(0,cc+b-dc())|0;setTimeout(ec,d)};else if(1==a)T=function(){fc(ec)};else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(d){if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);setImmediate=function(d){c.push(d);t?(void 0===f.setImmediates&&(f.setImmediates=[]),f.setImmediates.push(d),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}T=function(){setImmediate(ec)}}}var dc;fa?dc=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?dc=dateNow:dc=function(){return performance.now()};
function hc(a,b,c,d,e){function g(){if(h<ic){if(!noExitRuntime)try{var k=va;va=k;if(!noExitRuntime){if(f.onExit)f.onExit(k);ua=!0}da(k,new oa(k))}catch(l){if(!(l instanceof oa))throw l;}return!1}return!0}assert(!ac,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");ac=a;jc=d;var h=ic;bc=!1;ec=function(){if(!ua)if(0<kc.length){var k=Date.now(),l=kc.shift();l.Sa(l.za);
if(lc){var m=lc,n=0==m%1?m-1:Math.floor(m);lc=l.gb?n:(8*m+(n+.5))/9}console.log('main loop blocker "'+l.name+'" took '+(Date.now()-k)+" ms");f.setStatus&&(k=f.statusMessage||"Please wait...",l=lc,m=mc.ib,l?l<m?f.setStatus(k+" ("+(m-l)+"/"+m+")"):f.setStatus(k):f.setStatus(""));g()&&setTimeout(ec,0)}else g()&&(nc=nc+1|0,1==Zb&&1<$b&&0!=nc%$b?T():(0==Zb&&(cc=dc()),ua||f.preMainLoop&&!1===f.preMainLoop()||(oc(a),f.postMainLoop&&f.postMainLoop()),g()&&("object"===typeof SDL&&SDL.audio&&SDL.audio.$a&&
SDL.audio.$a(),T())))};e||(b&&0<b?Yb(0,1E3/b):Yb(1,1),T());if(c)throw"unwind";}function oc(a){try{a()}catch(b){if(!(b instanceof oa)&&"unwind"!==b)throw b&&"object"===typeof b&&b.stack&&B("exception thrown: "+[b,b.stack]),b;}}var bc=!1,T=null,ic=0,ac=null,jc=0,Zb=0,$b=0,nc=0,kc=[],mc={},cc,ec,lc,pc=!1,qc=!1,rc=[];
function sc(){function a(){qc=document.pointerLockElement===f.canvas||document.mozPointerLockElement===f.canvas||document.webkitPointerLockElement===f.canvas||document.msPointerLockElement===f.canvas}f.preloadPlugins||(f.preloadPlugins=[]);if(!tc){tc=!0;try{uc=!0}catch(c){uc=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}vc="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:uc?null:console.log("warning: no BlobBuilder");
yc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;f.Ma||"undefined"!==typeof yc||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),f.Ma=!0);f.preloadPlugins.push({canHandle:function(c){return!f.Ma&&/\.(jpg|jpeg|png|bmp)$/i.test(c)},handle:function(c,d,e,g){var h=null;if(uc)try{h=new Blob([c],{type:zc(d)}),h.size!==c.length&&(h=new Blob([(new Uint8Array(c)).buffer],{type:zc(d)}))}catch(m){qa("Blob constructor present but fails: "+
m+"; falling back to blob builder")}h||(h=new vc,h.append((new Uint8Array(c)).buffer),h=h.getBlob());var k=yc.createObjectURL(h),l=new Image;l.onload=function(){assert(l.complete,"Image "+d+" could not be decoded");var m=document.createElement("canvas");m.width=l.width;m.height=l.height;m.getContext("2d").drawImage(l,0,0);f.preloadedImages[d]=m;yc.revokeObjectURL(k);e&&e(c)};l.onerror=function(){console.log("Image "+k+" could not be decoded");g&&g()};l.src=k}});f.preloadPlugins.push({canHandle:function(c){return!f.nb&&
c.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(c,d,e,g){function h(p){l||(l=!0,f.preloadedAudios[d]=p,e&&e(c))}function k(){l||(l=!0,f.preloadedAudios[d]=new Audio,g&&g())}var l=!1;if(uc){try{var m=new Blob([c],{type:zc(d)})}catch(p){return k()}m=yc.createObjectURL(m);var n=new Audio;n.addEventListener("canplaythrough",function(){h(n)},!1);n.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+d+", trying slower base64 approach");for(var p="",r=0,x=0,
w=0;w<c.length;w++)for(r=r<<8|c[w],x+=8;6<=x;){var y=r>>x-6&63;x-=6;p+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y]}2==x?(p+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r&3)<<4],p+="=="):4==x&&(p+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r&15)<<2],p+="=");n.src="data:audio/x-"+d.substr(-3)+";base64,"+p;h(n)}};n.src=m;Ac(function(){h(n)})}else return k()}});var b=f.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),f.elementPointerLock&&
b.addEventListener("click",function(c){!qc&&f.canvas.requestPointerLock&&(f.canvas.requestPointerLock(),c.preventDefault())},!1))}}
function Bc(a,b,c,d){if(b&&f.Ea&&a==f.canvas)return f.Ea;var e;if(b){var g={antialias:!1,alpha:!1,La:1};if(d)for(var h in d)g[h]=d[h];if("undefined"!==typeof Cc&&(e=Dc(a,g)))var k=Ec[e].Da}else k=a.getContext("2d");if(!k)return null;c&&(b||assert("undefined"===typeof U,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),f.Ea=k,b&&Fc(e),f.qb=b,rc.forEach(function(l){l()}),sc());return k}var Gc=!1,Hc=void 0,Ic=void 0;
function Jc(a,b){function c(){pc=!1;var g=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===g?(d.exitFullscreen=Kc,Hc&&d.requestPointerLock(),pc=!0,Ic?("undefined"!=typeof SDL&&(D[SDL.screen>>2]=F[SDL.screen>>2]|8388608),Lc(f.canvas),Mc()):Lc(d)):(g.parentNode.insertBefore(d,g),g.parentNode.removeChild(g),Ic?("undefined"!=typeof SDL&&(D[SDL.screen>>2]=F[SDL.screen>>2]&
-8388609),Lc(f.canvas),Mc()):Lc(d));if(f.onFullScreen)f.onFullScreen(pc);if(f.onFullscreen)f.onFullscreen(pc)}Hc=a;Ic=b;"undefined"===typeof Hc&&(Hc=!0);"undefined"===typeof Ic&&(Ic=!1);var d=f.canvas;Gc||(Gc=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var e=document.createElement("div");d.parentNode.insertBefore(e,d);e.appendChild(d);
e.requestFullscreen=e.requestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen||(e.webkitRequestFullscreen?function(){e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(e.webkitRequestFullScreen?function(){e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);e.requestFullscreen()}
function Kc(){if(!pc)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]);return!0}var Nc=0;function fc(a){if("function"===typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===Nc)Nc=b+1E3/60;else for(;b+2>=Nc;)Nc+=1E3/60;setTimeout(a,Math.max(Nc-b,0))}}function Ac(a){setTimeout(function(){oc(a)},1E4)}
function zc(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var Oc=[];function Mc(){var a=f.canvas;Oc.forEach(function(b){b(a.width,a.height)})}
function Lc(a,b,c){b&&c?(a.eb=b,a.Va=c):(b=a.eb,c=a.Va);var d=b,e=c;f.forcedAspectRatio&&0<f.forcedAspectRatio&&(d/e<f.forcedAspectRatio?d=Math.round(e*f.forcedAspectRatio):e=Math.round(d/f.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/e);d=Math.round(d*g);e=Math.round(e*
g)}Ic?(a.width!=d&&(a.width=d),a.height!=e&&(a.height=e),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||e!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",e+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}
var tc,uc,vc,yc,Pc=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Qc(a){a=2<a?ya(a):a;return Pc[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Rc(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,h){b.drawElementsInstancedANGLE(c,d,e,g,h)})}
function Sc(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function Tc(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var Uc=1,Vc=[],V=[],Wc=[],W=[],Ec=[],Xc={};function Z(a){Yc||(Yc=a)}
function Zc(a){for(var b=Uc++,c=a.length;c<b;c++)a[c]=null;return b}function Dc(a,b){a.Ka||(a.Ka=a.getContext,a.getContext=function(d,e){e=a.Ka(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?$c(c,b):0}function $c(a,b){var c=Zc(Ec),d={jb:c,attributes:b,version:b.La,Da:a};a.canvas&&(a.canvas.fb=d);Ec[c]=d;("undefined"===typeof b.Ja||b.Ja)&&ad(d);return c}function Fc(a){bd=Ec[a];f.Ea=U=bd&&bd.Da;return!(a&&!U)}
function ad(a){a||(a=bd);if(!a.Xa){a.Xa=!0;var b=a.Da;Rc(b);Sc(b);Tc(b);b.hb=b.getExtension("EXT_disjoint_timer_query");b.mb=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Cc={},Yc,bd,cd=["default","low-power","high-performance"];function dd(a){return Fc(a)?0:-5}f._emscripten_webgl_make_context_current=dd;for(var ed=[null,[],[]],fd=[],gd=Array(256),hd=0;256>hd;++hd)gd[hd]=String.fromCharCode(hd);
db=gd;jb=f.BindingError=ib("BindingError");kb=f.InternalError=ib("InternalError");N.prototype.isAliasOf=function(a){if(!(this instanceof N&&a instanceof N))return!1;var b=this.$$.la.ka,c=this.$$.ptr,d=a.$$.la.ka;for(a=a.$$.ptr;b.oa;)c=b.ya(c),b=b.oa;for(;d.oa;)a=d.ya(a),d=d.oa;return b===d&&c===a};
N.prototype.clone=function(){this.$$.ptr||mb(this);if(this.$$.xa)return this.$$.count.value+=1,this;var a=qb,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.$$;a=a(c.call(b,d,{$$:{value:{count:e.count,ua:e.ua,xa:e.xa,ptr:e.ptr,la:e.la,ma:e.ma,na:e.na}}}));a.$$.count.value+=1;a.$$.ua=!1;return a};N.prototype["delete"]=function(){this.$$.ptr||mb(this);this.$$.ua&&!this.$$.xa&&K("Object already scheduled for deletion");ob(this);pb(this.$$);this.$$.xa||(this.$$.ma=void 0,this.$$.ptr=void 0)};
N.prototype.isDeleted=function(){return!this.$$.ptr};N.prototype.deleteLater=function(){this.$$.ptr||mb(this);this.$$.ua&&!this.$$.xa&&K("Object already scheduled for deletion");sb.push(this);1===sb.length&&rb&&rb(tb);this.$$.ua=!0;return this};P.prototype.Ua=function(a){this.Na&&(a=this.Na(a));return a};P.prototype.Ia=function(a){this.ta&&this.ta(a)};P.prototype.argPackAdvance=8;P.prototype.readValueFromPointer=Eb;P.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
P.prototype.fromWireType=function(a){function b(){return this.Ca?Ib(this.ka.ra,{la:this.Ya,ptr:c,na:this,ma:a}):Ib(this.ka.ra,{la:this,ptr:a})}var c=this.Ua(a);if(!c)return this.Ia(a),null;var d=Hb(this.ka,c);if(void 0!==d){if(0===d.$$.count.value)return d.$$.ptr=c,d.$$.ma=a,d.clone();d=d.clone();this.Ia(a);return d}d=this.ka.Ta(c);d=ub[d];if(!d)return b.call(this);d=this.Ba?d.Pa:d.pointerType;var e=Fb(c,this.ka,d.ka);return null===e?b.call(this):this.Ca?Ib(d.ka.ra,{la:d,ptr:e,na:this,ma:a}):Ib(d.ka.ra,
{la:d,ptr:e})};f.getInheritedInstanceCount=function(){return Object.keys(Gb).length};f.getLiveInheritedInstances=function(){var a=[],b;for(b in Gb)Gb.hasOwnProperty(b)&&a.push(Gb[b]);return a};f.flushPendingDeletes=tb;f.setDelayFunction=function(a){rb=a;sb.length&&rb&&rb(tb)};Lb=f.UnboundTypeError=ib("UnboundTypeError");f.count_emval_handles=function(){for(var a=0,b=5;b<S.length;++b)void 0!==S[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<S.length;++a)if(void 0!==S[a])return S[a];return null};
f.requestFullscreen=function(a,b){Jc(a,b)};f.requestAnimationFrame=function(a){fc(a)};f.setCanvasSize=function(a,b,c){Lc(f.canvas,a,b);c||Mc()};f.pauseMainLoop=function(){T=null;ic++};f.resumeMainLoop=function(){ic++;var a=Zb,b=$b,c=ac;ac=null;hc(c,0,!1,jc,!0);Yb(a,b);T()};f.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};f.createContext=function(a,b,c,d){return Bc(a,b,c,d)};
var U,jd={B:function(a,b,c,d,e){var g=cb(c);b=I(b);M(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=Ka;else if(2===c)k=Da;else if(4===c)k=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},qa:null})},ba:function(a,b,c,d,e,g,h,k,l,m,n,p,r){n=I(n);g=Q(e,g);k&&(k=Q(h,k));m&&(m=Q(l,m));r=Q(p,r);var x=gb(n);wb(x,function(){Ob("Cannot construct "+n+" due to unbound types",
[d])});L([a,b,c],d?[d]:[],function(w){w=w[0];if(d){var y=w.ka;var u=y.ra}else u=N.prototype;w=hb(x,function(){if(Object.getPrototypeOf(this)!==E)throw new jb("Use 'new' to construct "+n);if(void 0===z.sa)throw new jb(n+" has no accessible constructor");var X=z.sa[arguments.length];if(void 0===X)throw new jb("Tried to invoke ctor of "+n+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(z.sa).toString()+") parameters instead!");return X.apply(this,arguments)});var E=
Object.create(u,{constructor:{value:w}});w.prototype=E;var z=new xb(n,w,E,r,y,g,k,m);y=new P(n,z,!0,!1,!1);u=new P(n+"*",z,!1,!1,!1);var O=new P(n+" const*",z,!1,!0,!1);ub[a]={pointerType:u,Pa:O};Jb(x,w);return[y,u,O]})},S:function(a,b,c,d,e,g){assert(0<b);var h=Pb(b,c);e=Q(d,e);var k=[g],l=[];L([],[a],function(m){m=m[0];var n="constructor "+m.name;void 0===m.ka.sa&&(m.ka.sa=[]);if(void 0!==m.ka.sa[b-1])throw new jb("Cannot register multiple constructors with identical number of parameters ("+(b-
1)+") for class '"+m.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");m.ka.sa[b-1]=function(){Ob("Cannot construct "+m.name+" due to unbound types",h)};L([],h,function(p){m.ka.sa[b-1]=function(){arguments.length!==b-1&&K(n+" called with "+arguments.length+" arguments, expected "+(b-1));l.length=0;k.length=b;for(var r=1;r<b;++r)k[r]=p[r].toWireType(l,arguments[r-1]);r=e.apply(null,k);Qb(l);return p[0].fromWireType(r)};return[]});return[]})},
k:function(a,b,c,d,e,g,h,k){var l=Pb(c,d);b=I(b);g=Q(e,g);L([],[a],function(m){function n(){Ob("Cannot call "+p+" due to unbound types",l)}m=m[0];var p=m.name+"."+b;k&&m.ka.Za.push(b);var r=m.ka.ra,x=r[b];void 0===x||void 0===x.pa&&x.className!==m.name&&x.Aa===c-2?(n.Aa=c-2,n.className=m.name,r[b]=n):(vb(r,b,p),r[b].pa[c-2]=n);L([],l,function(w){var y=p,u=m,E=g,z=w.length;2>z&&K("argTypes array size mismatch! Must at least get return value and 'this' types!");var O=null!==w[1]&&null!==u,X=!1;for(u=
1;u<w.length;++u)if(null!==w[u]&&void 0===w[u].qa){X=!0;break}var wc="void"!==w[0].name,Y="",ja="";for(u=0;u<z-2;++u)Y+=(0!==u?", ":"")+"arg"+u,ja+=(0!==u?", ":"")+"arg"+u+"Wired";y="return function "+gb(y)+"("+Y+") {\nif (arguments.length !== "+(z-2)+") {\nthrowBindingError('function "+y+" called with ' + arguments.length + ' arguments, expected "+(z-2)+" args!');\n}\n";X&&(y+="var destructors = [];\n");var xc=X?"destructors":"null";Y="throwBindingError invoker fn runDestructors retType classParam".split(" ");
E=[K,E,h,Qb,w[0],w[1]];O&&(y+="var thisWired = classParam.toWireType("+xc+", this);\n");for(u=0;u<z-2;++u)y+="var arg"+u+"Wired = argType"+u+".toWireType("+xc+", arg"+u+"); // "+w[u+2].name+"\n",Y.push("argType"+u),E.push(w[u+2]);O&&(ja="thisWired"+(0<ja.length?", ":"")+ja);y+=(wc?"var rv = ":"")+"invoker(fn"+(0<ja.length?", ":"")+ja+");\n";if(X)y+="runDestructors(destructors);\n";else for(u=O?1:2;u<w.length;++u)z=1===u?"thisWired":"arg"+(u-2)+"Wired",null!==w[u].qa&&(y+=z+"_dtor("+z+"); // "+w[u].name+
"\n",Y.push(z+"_dtor"),E.push(w[u].qa));wc&&(y+="var ret = retType.fromWireType(rv);\nreturn ret;\n");Y.push(y+"}\n");w=Rb(Y).apply(null,E);void 0===r[b].pa?(w.Aa=c-2,r[b]=w):r[b].pa[c-2]=w;return[]});return[]})},j:function(a,b,c,d,e,g,h,k,l,m){b=I(b);e=Q(d,e);L([],[a],function(n){n=n[0];var p=n.name+"."+b,r={get:function(){Ob("Cannot access "+p+" due to unbound types",[c,h])},enumerable:!0,configurable:!0};l?r.set=function(){Ob("Cannot access "+p+" due to unbound types",[c,h])}:r.set=function(){K(p+
" is a read-only property")};Object.defineProperty(n.ka.ra,b,r);L([],l?[c,h]:[c],function(x){var w=x[0],y={get:function(){var E=Sb(this,n,p+" getter");return w.fromWireType(e(g,E))},enumerable:!0};if(l){l=Q(k,l);var u=x[1];y.set=function(E){var z=Sb(this,n,p+" setter"),O=[];l(m,z,u.toWireType(O,E));Qb(O)}}Object.defineProperty(n.ka.ra,b,y);return[]});return[]})},A:function(a,b){b=I(b);M(a,{name:b,fromWireType:function(c){var d=S[c].value;Ub(c);return d},toWireType:function(c,d){return Cb(d)},argPackAdvance:8,
readValueFromPointer:Eb,qa:null})},o:function(a,b,c){c=cb(c);b=I(b);M(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+Ab(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Vb(b,c),qa:null})},c:function(a,b,c,d,e){function g(m){return m}b=I(b);-1===e&&(e=4294967295);var h=cb(c);if(0===d){var k=32-8*c;g=function(m){return m<<k>>>k}}var l=-1!=b.indexOf("unsigned");M(a,{name:b,
fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+Ab(n)+'" to '+this.name);if(n<d||n>e)throw new TypeError('Passing a number "'+Ab(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return l?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Wb(b,h,0!==d),qa:null})},a:function(a,b,c){function d(g){g>>=2;var h=F;return new e(Ja,h[g+1],h[g])}var e=[Int8Array,Uint8Array,
Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=I(c);M(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Wa:!0})},aa:function(a,b,c,d,e,g,h,k,l,m,n,p){c=I(c);g=Q(e,g);k=Q(h,k);m=Q(l,m);p=Q(n,p);L([a],[b],function(r){r=r[0];return[new P(c,r.ka,!1,!1,!0,r,d,g,k,m,p)]})},p:function(a,b){b=I(b);var c="std::string"===b;M(a,{name:b,fromWireType:function(d){var e=F[d>>2];if(c)for(var g=d+4,h=0;h<=e;++h){var k=d+4+h;if(h==e||0==C[k]){g=ya(g,k-g);if(void 0===
l)var l=g;else l+=String.fromCharCode(0),l+=g;g=k+1}}else{l=Array(e);for(h=0;h<e;++h)l[h]=String.fromCharCode(C[d+4+h]);l=l.join("")}R(d);return l},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||K("Cannot pass non-string to std::string");var h=(c&&g?function(){for(var m=0,n=0;n<e.length;++n){var p=e.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|e.charCodeAt(++n)&
1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return e.length})(),k=id(4+h+1);F[k>>2]=h;if(c&&g)za(e,k+4,h+1);else if(g)for(g=0;g<h;++g){var l=e.charCodeAt(g);255<l&&(R(k),K("String has UTF-16 code units that do not fit in 8 bits"));C[k+4+g]=l}else for(g=0;g<h;++g)C[k+4+g]=e[g];null!==d&&d.push(R,k);return k},argPackAdvance:8,readValueFromPointer:Eb,qa:function(d){R(d)}})},i:function(a,b,c){c=I(c);if(2===b){var d=Ba;var e=Ea;var g=Fa;var h=function(){return Ca};var k=1}else 4===
b&&(d=Ga,e=Ha,g=Ia,h=function(){return F},k=2);M(a,{name:c,fromWireType:function(l){for(var m=F[l>>2],n=h(),p,r=l+4,x=0;x<=m;++x){var w=l+4+x*b;if(x==m||0==n[w>>k])r=d(r,w-r),void 0===p?p=r:(p+=String.fromCharCode(0),p+=r),r=w+b}R(l);return p},toWireType:function(l,m){"string"!==typeof m&&K("Cannot pass non-string to C++ string type "+c);var n=g(m),p=id(4+n+b);F[p>>2]=n>>k;e(m,p+4,n+b);null!==l&&l.push(R,p);return p},argPackAdvance:8,readValueFromPointer:Eb,qa:function(l){R(l)}})},C:function(a,b){b=
I(b);M(a,{kb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},D:function(a,b,c,d){a||K("Cannot use deleted val. handle = "+a);a=S[a].value;for(var e=Array(b),g=0;g<b;++g)e[g]=Xb(D[(c>>2)+g],"parameter "+g);c=Array(b);for(g=0;g<b;++g){var h=e[g];c[g]=h.readValueFromPointer(d);d+=h.argPackAdvance}b=a.apply(void 0,c);return Cb(b)},b:Ub,q:function(a){4<a&&(S[a].Ha+=1)},E:function(a,b){a=Xb(a,"_emval_take_value");a=a.readValueFromPointer(b);return Cb(a)},m:function(){A()},
h:function(a,b,c){fd.length=0;var d;for(c>>=2;d=C[b++];)(d=105>d)&&c&1&&c++,fd.push(d?Ma[c++>>1]:D[c]),++c;return ab[a].apply(null,fd)},v:function(){T=null;ic++;ac=null},Z:function(a,b,c){a=Qc(a);if(!a)return-4;D[b>>2]=a.width;D[c>>2]=a.height},y:function(a,b,c){C.copyWithin(a,b,b+c)},z:function(a){var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ta.grow(Math.min(2147483648,d)-Ja.byteLength+
65535>>>16);Na();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},w:function(a,b,c,d){hc(function(){Oa.get(a)(b)},c,d,b)},$:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:cd[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],La:D[b+8],lb:D[b+9],Ja:D[b+10],Ra:D[b+11],ob:D[b+12],pb:D[b+13]};a=Qc(a);return!a||b.Ra?0:Dc(a,b)},_:dd,l:function(a,b,c,d){for(var e=0,g=0;g<c;g++){for(var h=
D[b+8*g>>2],k=D[b+(8*g+4)>>2],l=0;l<k;l++){var m=C[h+l],n=ed[a];0===m||10===m?((1===a?pa:B)(xa(n,0)),n.length=0):n.push(m)}e+=k}D[d>>2]=e;return 0},s:function(a,b){U.attachShader(V[a],W[b])},R:function(a,b){U.bindBuffer(a,Vc[b])},Q:function(a,b,c,d){U.bufferData(a,c?C.subarray(c,c+b):b,d)},N:function(a){U.clear(a)},X:function(a,b,c,d){U.clearColor(a,b,c,d)},J:function(a){U.compileShader(W[a])},H:function(){var a=Zc(V),b=U.createProgram();b.name=a;V[a]=b;return a},L:function(a){var b=Zc(W);W[b]=U.createShader(a);
return b},g:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Vc[d];e&&(U.deleteBuffer(e),e.name=0,Vc[d]=null)}},d:function(a){if(a){var b=V[a];b?(U.deleteProgram(b),b.name=0,V[a]=null,Xc[a]=null):Z(1281)}},f:function(a){if(a){var b=W[a];b?(U.deleteShader(b),W[a]=null):Z(1281)}},Y:function(a){U.disable(a)},M:function(a,b,c){U.drawArrays(a,b,c)},u:function(a){U.enable(a)},P:function(a){U.enableVertexAttribArray(a)},T:function(a,b){for(var c=0;c<a;c++){var d=U.createBuffer(),e=d&&Zc(Vc);d?(d.name=
e,Vc[e]=d):Z(1282);D[b+4*c>>2]=e}},W:function(a,b){return U.getAttribLocation(V[a],ya(b))},F:function(a,b,c,d){a=U.getProgramInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?za(a,d,b):0;c&&(D[c>>2]=b)},r:function(a,b,c){if(c)if(a>=Uc)Z(1281);else{var d=Xc[a];if(d)if(35716==b)a=U.getProgramInfoLog(V[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b)D[c>>2]=d.Ga;else if(35722==b){if(-1==d.va){a=V[a];var e=U.getProgramParameter(a,35721);for(b=d.va=0;b<e;++b)d.va=Math.max(d.va,
U.getActiveAttrib(a,b).name.length+1)}D[c>>2]=d.va}else if(35381==b){if(-1==d.wa)for(a=V[a],e=U.getProgramParameter(a,35382),b=d.wa=0;b<e;++b)d.wa=Math.max(d.wa,U.getActiveUniformBlockName(a,b).length+1);D[c>>2]=d.wa}else D[c>>2]=U.getProgramParameter(V[a],b);else Z(1282)}else Z(1281)},I:function(a,b,c,d){a=U.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?za(a,d,b):0;c&&(D[c>>2]=b)},t:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?
a.length+1:0):35720==b?(a=U.getShaderSource(W[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=U.getShaderParameter(W[a],b):Z(1281)},V:function(a,b){b=ya(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Xc[a]&&Xc[a].Oa[b])&&0<=c&&c<a[0]?a[1]+c:-1},G:function(a){U.linkProgram(V[a]);var b=V[a];a=Xc[a]={Oa:{},Ga:0,va:-1,wa:-1};for(var c=a.Oa,d=U.getProgramParameter(b,35718),e=0;e<d;++e){var g=U.getActiveUniform(b,e),h=g.name;a.Ga=Math.max(a.Ga,
h.length+1);"]"==h.slice(-1)&&(h=h.slice(0,h.lastIndexOf("[")));var k=U.getUniformLocation(b,h);if(k){var l=Zc(Wc);c[h]=[g.size,l];Wc[l]=k;for(var m=1;m<g.size;++m)k=U.getUniformLocation(b,h+"["+m+"]"),l=Zc(Wc),Wc[l]=k}}},K:function(a,b,c,d){for(var e="",g=0;g<b;++g){var h=d?D[d+4*g>>2]:-1;e+=ya(D[c+4*g>>2],0>h?void 0:h)}U.shaderSource(W[a],e)},e:function(a,b,c,d){U.uniform3f(Wc[a],b,c,d)},U:function(a){U.useProgram(V[a])},O:function(a,b,c,d,e,g){U.vertexAttribPointer(a,b,c,!!d,e,g)},n:function(a,
b,c,d){U.viewport(a,b,c,d)},x:function(){}};
(function(){function a(e){f.asm=e.exports;ta=f.asm.ca;Na();Oa=f.asm.ea;Qa.unshift(f.asm.da);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==Ua&&(clearInterval(Ua),Ua=null),Va&&(e=Va,Va=null,e()))}function b(e){a(e.instance)}function c(e){return $a().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){B("failed to asynchronously prepare wasm: "+g);A(g)})}var d={a:jd};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return sa||"function"!==typeof WebAssembly.instantiateStreaming||Xa()||Wa("file://")||"function"!==typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){B("wasm streaming compile failed: "+g);B("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.da).apply(null,arguments)};var Nb=f.___getTypeName=function(){return(Nb=f.___getTypeName=f.asm.fa).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.ga).apply(null,arguments)};var id=f._malloc=function(){return(id=f._malloc=f.asm.ha).apply(null,arguments)},R=f._free=function(){return(R=f._free=f.asm.ia).apply(null,arguments)};
f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.ja).apply(null,arguments)};var kd;function oa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Va=function ld(){kd||md();kd||(Va=ld)};
function md(){function a(){if(!kd&&(kd=!0,f.calledRun=!0,!ua)){bb(Qa);bb(Ra);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Sa.unshift(b)}bb(Sa)}}if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ta();bb(Pa);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}
f.run=md;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();md();


  return createModule.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = createModule;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return createModule; });
else if (typeof exports === 'object')
  exports["createModule"] = createModule;
"use strict";

const webComponentName  = "color-triangle";
const canvasIdentifier  = "canvas";
const eventModuleReady  = "onmoduleready";
const eventColorChanged = "oncolorchanged";
const attributeRed      = "red";
const attributeGreen    = "green";
const attributeBlue     = "blue";

var module;

export default class ColorTriangle extends HTMLElement {
  constructor() {
    super();
    this.resizeObserver = new ResizeObserver(this.resizeHandler.bind(this));
    this.canvas         = null;
    this.colorTriangle  = null;
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
    document.addEventListener(eventModuleReady , this.createInstance.bind(this));
    document.addEventListener(eventColorChanged, this.colorChangedHandler.bind(this));
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

  createInstance() {
    if(module && !this.colorTriangle) {
      let red            = parseInt(this.getAttribute(attributeRed))   || 0;
      let green          = parseInt(this.getAttribute(attributeGreen)) || 0;
      let blue           = parseInt(this.getAttribute(attributeBlue))  || 0;
      this.colorTriangle = new module.ColorTriangle(canvasIdentifier, red, green, blue);
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

  colorChangedHandler(event) {
    if(this.colorTriangle.$$.ptr == event.detail.sender) {
      this.dispatchEvent(new CustomEvent(eventColorChanged, { detail: { color: event.detail.color }}));
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

createModule().then(instance => {
  module = instance;
  document.dispatchEvent(new CustomEvent(eventModuleReady));
});

