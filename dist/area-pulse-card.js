function e(e,t,o,i){var a,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(n<3?a(s):n>3?a(t,o,s):a(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new n(o,e,i)},r=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},y=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o,i=!1,a){if(void 0!==e){const n=this.constructor;if(!1===i&&(a=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??y)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,A=$.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+E,P=`<${O}>`,M=document,N=()=>M.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,H=/>/g,j=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,J=M.createTreeWalker(M,129);function G(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Y=(e,t)=>{const o=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",s=U;for(let t=0;t<o;t++){const o=e[t];let r,c,l=-1,d=0;for(;d<o.length&&(s.lastIndex=d,c=s.exec(o),null!==c);)d=s.lastIndex,s===U?"!--"===c[1]?s=L:void 0!==c[1]?s=H:void 0!==c[2]?(q.test(c[2])&&(a=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=a??U,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,r=c[1],s=void 0===c[3]?j:'"'===c[3]?I:D):s===I||s===D?s=j:s===L||s===H?s=U:(s=j,a=void 0);const p=s===j&&e[t+1].startsWith("/>")?" ":"";n+=s===U?o+P:l>=0?(i.push(r),o.slice(0,l)+C+o.slice(l)+E+p):o+E+(-2===l?t:p)}return[G(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Z{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let a=0,n=0;const s=e.length-1,r=this.parts,[c,l]=Y(e,t);if(this.el=Z.createElement(c,o),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=J.nextNode())&&r.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(C)){const t=l[n++],o=i.getAttribute(e).split(E),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:a,name:s[2],strings:o,ctor:"."===s[1]?te:"?"===s[1]?oe:"@"===s[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(E)&&(r.push({type:6,index:a}),i.removeAttribute(e));if(q.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=A?A.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],N()),J.nextNode(),r.push({type:2,index:++a});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===O)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)r.push({type:7,index:a}),e+=E.length-1}a++}}static createElement(e,t){const o=M.createElement("template");return o.innerHTML=e,o}}function K(e,t,o=e,i){if(t===F)return t;let a=void 0!==i?o._$Co?.[i]:o._$Cl;const n=z(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=a:o._$Cl=a),void 0!==a&&(t=K(e,a._$AS(e,t.values),a,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??M).importNode(t,!0);J.currentNode=i;let a=J.nextNode(),n=0,s=0,r=o[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new X(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new ae(a,this,e)),this._$AV.push(t),r=o[++s]}n!==r?.index&&(a=J.nextNode(),n++)}return J.currentNode=M,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),z(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Z.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const a of e)i===t.length?t.push(o=new X(this.O(N()),this.O(N()),this,this.options)):o=t[i],o._$AI(a),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(e,t=this,o,i){const a=this.strings;let n=!1;if(void 0===a)e=K(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const i=e;let s,r;for(e=a[0],s=0;s<a.length-1;s++)r=K(this,i[o+s],t,s),r===F&&(r=this._$AH[s]),n||=!z(r)||r!==this._$AH[s],r===W?e=W:e!==W&&(e+=(r??"")+a[s+1]),this._$AH[s]=r}n&&!i&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ie extends ee{constructor(e,t,o,i,a){super(e,t,o,i,a),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??W)===F)return;const o=this._$AH,i=e===W&&o!==W||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==W&&(o===W||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(Z,X),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let re=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=o?.renderBefore??null;i._$litPart$=a=new X(t.insertBefore(N(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};re._$litElement$=!0,re.finalized=!0,se.litElementHydrateSupport?.({LitElement:re});const ce=se.litElementPolyfillSupport;ce?.({LitElement:re}),(se.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},de=(e=le,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,a,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];t.call(this,o),this.requestUpdate(i,a,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function pe(e){return(t,o)=>"object"==typeof o?de(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function he(e){return pe({...e,state:!0,attribute:!1})}const ue=1,_e=6,me=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ge=me(class extends fe{constructor(e){if(super(e),e.type!==ue||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return F}}),be="important",ve=" !"+be,ye=me(class extends fe{constructor(e){if(super(e),e.type!==ue||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ve);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?be:""):o[e]=i}}return F}}),xe={active:!1,include:new Set,exclude:new Set,match:"any",fromDevice:!0,includeNames:[]};function we(e){return(Array.isArray(e)?e:null==e?[]:[e]).map(e=>String(e).trim()).filter(Boolean)}function $e(e){return!!e&&(we(e.include).length>0||we(e.exclude).length>0)}function ke(e,t){if(!t)return e;const o=t.find(t=>t.label_id===e);if(o)return o.label_id;const i=e.toLowerCase(),a=t.find(e=>e.name.toLowerCase()===i);return a?a.label_id:e}function Ae(e,t){if(!$e(e))return xe;const o=we(e.include),i=we(e.exclude);return{active:!0,include:new Set(o.map(e=>ke(e,t))),exclude:new Set(i.map(e=>ke(e,t))),match:"all"===e.match?"all":"any",fromDevice:!1!==e.from_device,includeNames:o}}function Se(e,t,o){if(!o.active)return!0;const i=new Set(e??[]);if(o.fromDevice)for(const e of t??[])i.add(e);for(const e of o.exclude)if(i.has(e))return!1;if(0===o.include.size)return!0;const a=[...o.include];return"all"===o.match?a.every(e=>i.has(e)):a.some(e=>i.has(e))}let Ce;const Ee=["moisture","smoke","gas","carbon_monoxide","safety","problem","tamper"],Oe=["alerts","motion","doors","windows","climate","lights","switches","fans","covers","locks","media","batteries"],Pe=["motion","doors","windows"],Me=["illuminance","carbon_dioxide","pm25","volatile_organic_compounds","pressure","power","energy","sound_pressure"],Ne=new Set(["power","energy","gas","water","current"]),ze=new Set(["unavailable","unknown"]);function Re(e,t,o=[],i=xe){const a=[],n=[];let s=0;const r=new Set(o);for(const o of Object.values(e.entities||{})){if(o.hidden||r.has(o.entity_id))continue;if(!e.states[o.entity_id])continue;const c=o.device_id?e.devices?.[o.device_id]:void 0;if((o.area_id??c?.area_id)!==t)continue;if("config"===o.entity_category)continue;const l="diagnostic"!==o.entity_category;l&&s++,Se(o.labels,c?.labels,i)&&(n.push(o.entity_id),l&&a.push(o.entity_id))}return{primary:a,withDiagnostic:n,unfilteredCount:s}}const Te=e=>e.split(".")[0],Ue=e=>e.attributes.device_class,Le=e=>!!e&&!ze.has(e.state);function He(e,t,o){return t.filter(t=>{const i=e.states[t];return"binary_sensor"===Te(t)&&!!i&&o.includes(Ue(i)??"")})}function je(e,t,o,i){const a=o.filter(t=>{const o=e.states[t];return Le(o)&&i(o)});let n;for(const t of o){const o=Date.parse(e.states[t]?.last_changed??"");!Number.isNaN(o)&&(void 0===n||o>n)&&(n=o)}return{id:t,entities:o,active:a,lastChanged:n}}function De(e,t,o){const i=o.primary,a=e=>i.filter(t=>Te(t)===e),n={},s=e=>{e.entities.length&&(n[e.id]=e)},r=t.presence_entities?.length?t.presence_entities.filter(t=>e.states[t]):He(e,i,["occupancy","presence"]),c=He(e,i,["motion"]);s(je(e,"presence",r.length?r:c,e=>["on","home","detected"].includes(e.state))),s(je(e,"motion",c,e=>"on"===e.state)),s(je(e,"doors",He(e,i,["door","garage_door","opening"]),e=>"on"===e.state)),s(je(e,"windows",He(e,i,["window"]),e=>"on"===e.state)),s(je(e,"covers",a("cover"),e=>["open","opening"].includes(e.state))),s(je(e,"locks",a("lock"),e=>["unlocked","open","opening","jammed"].includes(e.state))),s(je(e,"lights",a("light"),e=>"on"===e.state)),s(je(e,"fans",a("fan"),e=>"on"===e.state)),s(je(e,"switches",a("switch"),e=>"on"===e.state)),s(je(e,"media",a("media_player"),e=>"playing"===e.state)),s(je(e,"climate",a("climate"),e=>["heating","cooling","drying","fan"].includes(String(e.attributes.hvac_action??""))||!e.attributes.hvac_action&&"off"!==e.state)),s(je(e,"alerts",He(e,i,t.alert_classes??Ee),e=>"on"===e.state));const l=t.battery_threshold??20,d=o.withDiagnostic.filter(t=>{const o=e.states[t];return"battery"===Ue(o)&&("sensor"===Te(t)||"binary_sensor"===Te(t))});return s(je(e,"batteries",d,e=>"binary_sensor"===Te(e.entity_id)?"on"===e.state:Number(e.state)<=l)),n}function Ie(e,t,o,i){if(i&&e.states[i]){const t=e.states[i],a=Number(t.state);if(!Le(t)||Number.isNaN(a))return;return{deviceClass:o,value:a,unit:String(t.attributes.unit_of_measurement??""),entities:[i]}}const a=t.primary.map(t=>e.states[t]).filter(e=>"sensor"===Te(e.entity_id)&&Ue(e)===o&&Le(e)&&!Number.isNaN(Number(e.state)));if(!a.length)return;const n=String(a[0].attributes.unit_of_measurement??""),s=a.filter(e=>String(e.attributes.unit_of_measurement??"")===n),r=s.map(e=>Number(e.state)),c=Ne.has(o)?r.reduce((e,t)=>e+t,0):function(e){const t=[...e].sort((e,t)=>e-t),o=Math.floor(t.length/2);return t.length%2?t[o]:(t[o-1]+t[o])/2}(r);return{deviceClass:o,value:c,unit:n,entities:s.map(e=>e.entity_id)}}function qe(e,t,o){const[i,a]=Array.isArray(t)?t:[t?.min??o[0],t?.max??o[1]];return e<i?"low":e>a?"high":"ok"}const Be=/ceiling|main|overhead|central|chandelier|κεντρικ|ταβάν|οροφ/i;function Fe(e,t,o){if(!1===t.link_main_light)return;if(t.main_light)return e.states[t.main_light]?t.main_light:void 0;const i=o.primary.filter(e=>"light"===Te(e));return 1===i.length?i[0]:i.find(t=>Be.test(`${t} ${e.states[t]?.attributes.friendly_name??""}`))}function We(e){if(!e||"on"!==e.state)return;const t=e.attributes.rgb_color;if(Array.isArray(t)&&3===t.length)return[t[0],t[1],t[2]];const o=e.attributes.color_temp_kelvin;if("number"==typeof o)return function(e){const t=e/100,o=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592),i=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492),a=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[Ve(o),Ve(i),Ve(a)]}(o);const i=e.attributes.hs_color;return Array.isArray(i)&&2===i.length?function(e,t){const o=t/100,i=t=>{const i=(t+e/60)%6;return 255*(1-o*Math.max(0,Math.min(i,4-i,1)))};return[Ve(i(5)),Ve(i(3)),Ve(i(1))]}(i[0],i[1]):void 0}function Ve(e){return Math.max(0,Math.min(255,Math.round(e)))}const Je={occupied:"Occupied",clear:"Clear",motion:"Motion",no_motion:"No motion",door_open:"{n} door open",doors_open:"{n} doors open",doors_closed:"Doors closed",window_open:"{n} window open",windows_open:"{n} windows open",windows_closed:"Windows closed",cover_open:"{n} cover open",covers_open_n:"{n} covers open",covers_closed:"Covers closed",lock_unlocked:"{n} unlocked",locks_locked:"Locked",light_on:"{n} light on",lights_on_n:"{n} lights on",lights_off_all:"Lights off",fan_on:"{n} fan on",fans_on_n:"{n} fans on",fans_off_all:"Fans off",media_playing:"Playing",media_idle:"Media idle",climate_heating:"Heating",climate_cooling:"Cooling",climate_drying:"Drying",climate_fan:"Fan",climate_idle:"Idle",climate_off:"Climate off",alert:"Alert",alerts_n:"{n} alerts",battery_low:"{n} low battery",batteries_low:"{n} low batteries",for:"for {t}",since_now:"just now",area_not_found:'Area "{area}" was not found.',no_label_match:"No entity in this area has the label {labels}. Add it in Settings → Areas, labels & zones → Labels.",pick_area:"Pick an area in the card editor.",switch_on:"{n} switch on",switches_on_n:"{n} switches on",switches_off_all:"Switches off",turn_all_on:"All on",turn_all_off:"All off",open_all:"Open all",close_all:"Close all",pause_all:"Pause all",n_of_m_active:"{n} of {m} active",close:"Close",toggle_light:"Toggle {name}",ed_section_labels:"Filter by labels",ed_label_include:"Only show entities with these labels",ed_label_exclude:"Hide entities with these labels",ed_label_match:"An entity needs",ed_label_match_any:"At least one of the labels",ed_label_match_all:"All of the labels",ed_label_from_device:"Also use the device's labels",ed_main_light:"Main light (default: auto-detect)",ed_link_main_light:"Area icon toggles the main light",ed_top_groups:"First row (the rest go in the second row)",ed_color_temp_low:"Cold temperature color",ed_color_temp_high:"Warm temperature color",ed_color_hum_low:"Dry air color",ed_color_hum_high:"Humid air color",g_switches:"Switches & plugs",preset_lights_toggle:"Lights",preset_lights_on:"Lights on",preset_lights_off:"Lights off",preset_covers_open:"Open covers",preset_covers_close:"Close covers",preset_fans_off:"Fans off",preset_media_stop:"Stop media",preset_vacuum_area:"Vacuum",preset_everything_off:"All off",confirm_vacuum:"Send the vacuum to clean {area}?",confirm_everything_off:"Turn off everything in {area}?",ed_area:"Area",ed_name:"Name",ed_icon:"Icon",ed_color:"Accent color",ed_layout:"Layout",ed_layout_default:"Default",ed_layout_compact:"Compact",ed_show_picture:"Show area picture",ed_show_inactive:'Show inactive groups (e.g. "Windows closed")',ed_section_climate:"Climate & sensors",ed_section_status:"Status & alerts",ed_section_interactions:"Card interactions",ed_section_actions:"Quick actions",ed_temperature_entity:"Temperature sensor (default: area setting or median)",ed_humidity_entity:"Humidity sensor (default: area setting or median)",ed_sensor_classes:"Extra sensor readings",ed_comfort_temp_min:"Comfort temperature min",ed_comfort_temp_max:"Comfort temperature max",ed_comfort_hum_min:"Comfort humidity min",ed_comfort_hum_max:"Comfort humidity max",ed_groups:"Status groups",ed_alert_classes:"Alert device classes",ed_presence_entities:"Presence entities (default: auto-detect)",ed_exclude_entities:"Exclude entities",ed_battery_threshold:"Low battery threshold (%)",ed_tap_action:"Tap action",ed_hold_action:"Hold action",ed_double_tap_action:"Double tap action",ed_preset:"Preset",ed_preset_none:"Custom",ed_entity:"Entity",ed_add_action:"Add quick action",ed_remove:"Remove",ed_move_up:"Move up",ed_move_down:"Move down",ed_action_n:"Action {n}",ed_vacuum_hint:"Pick the vacuum entity. Uses vacuum.clean_area (HA 2026.3+), so map the vacuum's segments to areas first.",room_attention:"Needs attention",room_status:"Presence & openings",room_sensors:"Sensors",room_other:"Other",room_search:"Search this room",room_clear_search:"Clear search",room_show_more:"Show {n} more",room_show_less:"Show less",room_no_results:"Nothing matches “{q}”",room_empty:"No entities to show in this room.",reason_low_battery:"Low battery",reason_unavailable:"Unavailable",ed_room_popup:"Open the room popup when the card is tapped",g_presence:"Presence",g_motion:"Motion",g_doors:"Doors",g_windows:"Windows",g_covers:"Covers",g_locks:"Locks",g_lights:"Lights",g_fans:"Fans",g_media:"Media",g_climate:"Climate",g_alerts:"Safety alerts",g_batteries:"Batteries"},Ge={en:Je,el:{occupied:"Κατειλημμένο",clear:"Άδειο",motion:"Κίνηση",no_motion:"Χωρίς κίνηση",door_open:"{n} πόρτα ανοιχτή",doors_open:"{n} πόρτες ανοιχτές",doors_closed:"Πόρτες κλειστές",window_open:"{n} παράθυρο ανοιχτό",windows_open:"{n} παράθυρα ανοιχτά",windows_closed:"Παράθυρα κλειστά",cover_open:"{n} ρολό ανοιχτό",covers_open_n:"{n} ρολά ανοιχτά",covers_closed:"Ρολά κλειστά",lock_unlocked:"{n} ξεκλείδωτη",locks_locked:"Κλειδωμένο",light_on:"{n} φως αναμμένο",lights_on_n:"{n} φώτα αναμμένα",lights_off_all:"Φώτα σβηστά",fan_on:"{n} ανεμιστήρας",fans_on_n:"{n} ανεμιστήρες",fans_off_all:"Ανεμιστήρες off",media_playing:"Αναπαραγωγή",media_idle:"Media σε αναμονή",climate_heating:"Θέρμανση",climate_cooling:"Ψύξη",climate_drying:"Αφύγρανση",climate_fan:"Ανεμιστήρας",climate_idle:"Αδρανές",climate_off:"Κλιματισμός off",alert:"Συναγερμός",alerts_n:"{n} ειδοποιήσεις",battery_low:"{n} χαμηλή μπαταρία",batteries_low:"{n} χαμηλές μπαταρίες",for:"εδώ και {t}",since_now:"μόλις τώρα",area_not_found:'Ο χώρος "{area}" δεν βρέθηκε.',no_label_match:"Καμία οντότητα σε αυτόν τον χώρο δεν έχει την ετικέτα {labels}. Πρόσθεσέ την από Ρυθμίσεις → Χώροι, ετικέτες & ζώνες → Ετικέτες.",pick_area:"Επίλεξε χώρο στον επεξεργαστή της κάρτας.",switch_on:"{n} διακόπτης on",switches_on_n:"{n} διακόπτες on",switches_off_all:"Διακόπτες off",turn_all_on:"Όλα on",turn_all_off:"Όλα off",open_all:"Άνοιγμα όλων",close_all:"Κλείσιμο όλων",pause_all:"Παύση όλων",n_of_m_active:"{n} από {m} ενεργά",close:"Κλείσιμο",toggle_light:"Εναλλαγή {name}",g_switches:"Διακόπτες & πρίζες",preset_lights_toggle:"Φώτα",preset_lights_on:"Άναμμα φώτων",preset_lights_off:"Σβήσιμο φώτων",preset_covers_open:"Άνοιγμα ρολών",preset_covers_close:"Κλείσιμο ρολών",preset_fans_off:"Ανεμιστήρες off",preset_media_stop:"Stop media",preset_vacuum_area:"Σκούπισμα",preset_everything_off:"Όλα off",confirm_vacuum:"Να σκουπίσει η σκούπα τον χώρο {area};",confirm_everything_off:"Να σβήσουν όλα στον χώρο {area};",room_attention:"Χρειάζονται προσοχή",room_status:"Παρουσία & ανοίγματα",room_sensors:"Αισθητήρες",room_other:"Άλλα",room_search:"Αναζήτηση στον χώρο",room_clear_search:"Καθαρισμός αναζήτησης",room_show_more:"Εμφάνιση άλλων {n}",room_show_less:"Λιγότερα",room_no_results:"Κανένα αποτέλεσμα για «{q}»",room_empty:"Δεν υπάρχουν οντότητες για εμφάνιση σε αυτόν τον χώρο.",reason_low_battery:"Χαμηλή μπαταρία",reason_unavailable:"Μη διαθέσιμο",g_presence:"Παρουσία",g_motion:"Κίνηση",g_doors:"Πόρτες",g_windows:"Παράθυρα",g_covers:"Ρολά",g_locks:"Κλειδαριές",g_lights:"Φώτα",g_fans:"Ανεμιστήρες",g_media:"Media",g_climate:"Κλιματισμός",g_alerts:"Ειδοποιήσεις ασφαλείας",g_batteries:"Μπαταρίες"}};function Ye(e,t,o={}){const i=(e?.locale?.language||e?.language||"en").split("-")[0];let a=Ge[i]?.[t]??Je[t]??t;for(const[e,t]of Object.entries(o))a=a.replace(`{${e}}`,String(t));return a}const Ze=["lights_toggle","lights_on","lights_off","covers_open","covers_close","fans_off","media_stop","vacuum_area","everything_off"],Ke=new Set(["on","open","opening","playing","unlocked","cleaning","heat","cool","auto","heat_cool","dry","fan_only"]);function Qe(e,t,o={}){return{action:"perform-action",perform_action:e,target:{area_id:t},...o}}const Xe=new Set(["light","switch","fan","media_player","input_boolean","climate"]);function et(e){const t=e.split(".")[0];return"scene"===t||"script"===t?{action:"perform-action",perform_action:`${t}.turn_on`,target:{entity_id:e}}:"button"===t||"input_button"===t?{action:"perform-action",perform_action:`${t}.press`,target:{entity_id:e}}:"vacuum"===t?{action:"more-info",entity:e}:{action:"toggle",entity:e}}const tt={light:"mdi:lightbulb",switch:"mdi:toggle-switch-variant",fan:"mdi:fan",cover:"mdi:window-shutter",scene:"mdi:palette",script:"mdi:script-text-play",media_player:"mdi:speaker",vacuum:"mdi:robot-vacuum",climate:"mdi:thermostat",lock:"mdi:lock",button:"mdi:gesture-tap-button"};function ot(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function it(e){return/^(#|rgb|hsl|var\()/i.test(e)?e:"primary"===e||"accent"===e?`var(--${e}-color)`:`var(--${e}-color, ${e})`}const at=["attention","lights","climate","media","covers","locks","fans","switches","other","status","sensors"],nt={light:"lights",climate:"climate",humidifier:"climate",water_heater:"climate",media_player:"media",cover:"covers",valve:"covers",lock:"locks",fan:"fans",switch:"switches",binary_sensor:"status",person:"status",device_tracker:"status",sensor:"sensors"},st=new Set(["update","automation","event","conversation","tts","stt","wake_word","todo","notify","ai_task"]),rt=e=>e.split(".")[0],ct=e=>e?.attributes.device_class;function lt(e){return!!e&&["on","playing","open","opening","closing","unlocked","cleaning","heat","cool","heat_cool","auto","dry","fan_only","home","detected"].includes(e.state)}const dt={occupancy:0,presence:0,motion:0,door:1,garage_door:1,window:1,opening:1},pt=["temperature","humidity","carbon_dioxide","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","illuminance","pressure","sound_pressure","power","energy"];function ht(e,t){return e.states[t]?.attributes.friendly_name??t}const ut=e=>(t,o)=>ht(e,t).localeCompare(ht(e,o),void 0,{numeric:!0,sensitivity:"base"});function _t(e,t){const o=ut(e),i=t=>Number(lt(e.states[t]));switch(t.kind){case"tiles":t.entities.sort((e,t)=>i(t)-i(e)||o(e,t));break;case"status":{const a=t=>dt[ct(e.states[t])??""]??2;t.entities.sort((e,t)=>i(t)-i(e)||a(e)-a(t)||o(e,t));break}case"stats":{const i=t=>{const o=e.states[t],i=pt.indexOf(ct(o)??"");return((e=>""!==e.state.trim()&&!Number.isNaN(Number(e.state)))(o)?0:100)+(-1===i?pt.length:i)};t.entities.sort((e,t)=>i(e)-i(t)||o(e,t));break}}}function mt(e,t){if(!e||"battery"!==ct(e))return!1;if("binary_sensor"===rt(e.entity_id))return"on"===e.state;if("sensor"!==rt(e.entity_id))return!1;const o=Number(e.state);return!Number.isNaN(o)&&""!==e.state.trim()&&o<=t}function ft(e,t){if(!t)return e;const o=t.trim();if(!o||e.length<=o.length)return e;if(e.toLowerCase().startsWith(o.toLowerCase())&&/[\s:\-–]/.test(e.charAt(o.length))){const t=e.slice(o.length).replace(/^[\s:\-–]+/,"").trim();return t?(e=>e?e.charAt(0).toUpperCase()+e.slice(1):e)(t):e}return e}function gt(e,t,o,i){const a=e.areas?.[t]?.name,n={};for(const t of i)n[t]={name:ft(ht(e,t),a)};const s=o.map(t=>{const o=ft(ht(e,t),a),i=(t=>{const o=e.entities?.[t]?.device_id,i=o?e.devices?.[o]:void 0;return i?.name_by_user??i?.name??void 0})(t);return{id:t,short:ft(o,i),noArea:o,device:i}}),r=new Map;for(const e of s)r.set(e.short.toLowerCase(),(r.get(e.short.toLowerCase())??0)+1);for(const e of s){const t=(r.get(e.short.toLowerCase())??0)>1;n[e.id]=t&&e.device&&e.short!==e.noArea?{name:e.short,sub:e.device}:{name:t?e.noArea:e.short}}return n}const bt=me(class extends fe{constructor(e){if(super(e),e.type!==_e)throw new Error("actionHandler must be used on an element")}update(e,[t]){const o=e.element;return o.__apcOptions=t??{},function(e){if(e.__apcBound)return;let t,o;e.__apcBound=!0;let i=!1,a=0,n=0;const s=t=>e.dispatchEvent(new CustomEvent("apc-action",{detail:{action:t},bubbles:!1,composed:!1})),r=()=>{t&&window.clearTimeout(t),t=void 0};e.addEventListener("pointerdown",o=>{e.__apcOptions?.disabled||0!==o.button||(i=!1,a=o.clientX,n=o.clientY,e.__apcOptions?.hasHold&&(t=window.setTimeout(()=>{i=!0,t=void 0,navigator.vibrate&&navigator.vibrate(30),s("hold")},500)))}),e.addEventListener("pointermove",e=>{t&&(Math.abs(e.clientX-a)>10||Math.abs(e.clientY-n)>10)&&r()}),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r),e.addEventListener("contextmenu",t=>{e.__apcOptions?.hasHold&&t.preventDefault()}),e.addEventListener("pointerup",a=>{if(e.__apcOptions?.disabled||0!==a.button)return;const n=!!t;r(),i?i=!1:!n&&e.__apcOptions?.hasHold||(e.__apcOptions?.hasDoubleTap?o?(window.clearTimeout(o),o=void 0,s("double_tap")):o=window.setTimeout(()=>{o=void 0,s("tap")},250):s("tap"))}),e.addEventListener("keydown",t=>{e.__apcOptions?.disabled||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),s("tap"))})}(o),F}render(e){return F}}),vt=s`
  :host {
    /* Colour tokens map onto Home Assistant's own palette so themes keep working. */
    --apc-accent: var(--primary-color);
    --apc-amber: var(--amber-color, #ffc107);
    --apc-orange: var(--orange-color, #ff9800);
    --apc-deep-orange: var(--deep-orange-color, #ff6f22);
    --apc-red: var(--red-color, #f44336);
    --apc-green: var(--green-color, #4caf50);
    --apc-blue: var(--blue-color, #2196f3);
    --apc-light-blue: var(--light-blue-color, #03a9f4);
    --apc-cyan: var(--cyan-color, #00bcd4);
    --apc-teal: var(--teal-color, #009688);
    --apc-indigo: var(--indigo-color, #3f51b5);
    --apc-purple: var(--purple-color, #926bc7);
    /* Climate colouring: cold blue / warm red, dry white / humid blue. */
    --apc-temp-low: var(--apc-blue);
    --apc-temp-high: var(--apc-red);
    --apc-hum-low: #8fa4ae; /* white is invisible on a light card, so light themes get a pale blue-grey */
    --apc-hum-high: var(--apc-blue);
    --apc-glow-rgb: 255, 193, 7;
    --apc-glow-alpha: 0.16;
    --apc-neutral-bg: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --apc-neutral-bg-hover: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
    --apc-radius: var(--ha-card-border-radius, 12px);
    --apc-control-radius: var(--ha-card-features-border-radius, var(--feature-border-radius, 12px));
    display: block;
    height: 100%;
  }
  :host([dark]) {
    --apc-hum-low: #ffffff;
  }

  ha-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    container-type: inline-size;
    transition: box-shadow 300ms ease, border-color 300ms ease;
  }
  ha-card.alerting {
    border-color: var(--apc-red);
    box-shadow: 0 0 0 1px var(--apc-red), var(--ha-card-box-shadow, none);
  }

  /* Ambient layers */
  .picture {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.32;
    -webkit-mask-image: linear-gradient(to left, #000 0%, transparent 75%);
    mask-image: linear-gradient(to left, #000 0%, transparent 75%);
    pointer-events: none;
  }
  .glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 600ms ease;
    background: radial-gradient(
      140% 100% at 0% 0%,
      rgba(var(--apc-glow-rgb), var(--apc-glow-alpha)) 0%,
      transparent 58%
    );
  }
  .glow.on {
    opacity: 1;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }

  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    border-radius: var(--apc-control-radius);
    outline: none;
  }
  .header.clickable {
    cursor: pointer;
  }
  .header.clickable:focus-visible {
    box-shadow: 0 0 0 2px var(--apc-accent);
  }
  .area-icon {
    position: relative;
    flex: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
    transition: background-color 300ms ease, color 300ms ease;
    --mdc-icon-size: 24px;
  }
  .area-icon.occupied {
    background: color-mix(in srgb, var(--apc-accent) 20%, transparent);
    color: var(--apc-accent);
  }
  .area-icon.linked {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 300ms ease, color 300ms ease, transform 120ms ease;
  }
  .area-icon.linked:hover { background: var(--apc-neutral-bg-hover); }
  .area-icon.linked:active { transform: scale(0.94); }
  .area-icon.linked:focus-visible { box-shadow: 0 0 0 2px var(--apc-accent); }
  .area-icon.light-on,
  .area-icon.light-on:hover {
    background: rgba(var(--apc-light-rgb), 0.24);
    color: rgb(var(--apc-light-rgb));
  }
  .presence-dot {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--apc-green);
    border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
    box-sizing: border-box;
  }
  .presence-dot::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px solid var(--apc-green);
    animation: apc-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes apc-ping {
    0% { transform: scale(1); opacity: 0.7; }
    80%, 100% { transform: scale(2.2); opacity: 0; }
  }
  .titles {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .name {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .secondary {
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .secondary .dot {
    margin: 0 4px;
    opacity: 0.6;
  }

  .climate {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    font-variant-numeric: tabular-nums;
  }
  .temp {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: -0.5px;
    color: var(--primary-text-color);
    cursor: pointer;
  }
  .temp .unit {
    font-size: 13px;
    line-height: 18px;
    margin-left: 1px;
    color: var(--secondary-text-color);
    letter-spacing: 0;
  }
  .temp.low { color: var(--apc-temp-low); }
  .temp.high { color: var(--apc-temp-high); }
  .hum {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
    cursor: pointer;
    --mdc-icon-size: 14px;
  }
  .hum.low { color: var(--apc-hum-low); }
  .hum.high { color: var(--apc-hum-high); }

  /* Alert banner */
  .alert-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: var(--apc-control-radius);
    background: color-mix(in srgb, var(--apc-red) 14%, transparent);
    color: var(--apc-red);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    --mdc-icon-size: 20px;
  }
  .alert-banner ha-icon {
    animation: apc-blink 1.4s ease-in-out infinite;
  }
  .alert-banner .text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @keyframes apc-blink {
    50% { opacity: 0.35; }
  }

  /* Status chips: two invisible rows (openings & motion, then everything else) */
  .chip-rows {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    --c: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 12px 0 9px;
    border-radius: 15px;
    border: none;
    font: inherit;
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    background: var(--apc-neutral-bg);
    cursor: pointer;
    white-space: nowrap;
    max-width: 100%;
    box-sizing: border-box;
    transition: background-color 200ms ease, color 200ms ease, transform 120ms ease;
    --mdc-icon-size: 16px;
  }
  .chip:hover { background: var(--apc-neutral-bg-hover); }
  .chip:active { transform: scale(0.96); }
  .chip:focus-visible { outline: 2px solid var(--c); outline-offset: 1px; }
  .chip.active {
    /* Pull the hue toward the text colour so labels stay legible in light and dark themes. */
    color: color-mix(in srgb, var(--c) 72%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 16%, transparent);
  }
  .chip.active:hover { background: color-mix(in srgb, var(--c) 24%, transparent); }
  .chip.selected { box-shadow: inset 0 0 0 1.5px var(--c); }
  .chip.stat { cursor: pointer; color: var(--primary-text-color); }
  .chip.stat ha-icon { color: var(--secondary-text-color); }
  .chip.stat.warn ha-icon, .chip.stat.warn { color: var(--apc-orange); }
  .chip.stat.bad ha-icon, .chip.stat.bad { color: var(--apc-red); }
  .chip .label {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Quick actions */
  .actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    gap: 8px;
  }
  .action {
    --c: var(--apc-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 42px;
    padding: 0 10px;
    border: none;
    border-radius: var(--apc-control-radius);
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--apc-neutral-bg);
    cursor: pointer;
    min-width: 0;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    transition: background-color 200ms ease, color 200ms ease, transform 120ms ease;
    --mdc-icon-size: 20px;
  }
  .action ha-icon { color: var(--c); flex: none; }
  .action:hover { background: var(--apc-neutral-bg-hover); }
  .action:active { transform: scale(0.96); }
  .action:focus-visible { outline: 2px solid var(--c); outline-offset: 1px; }
  .action.active {
    background: color-mix(in srgb, var(--c) 20%, transparent);
    color: color-mix(in srgb, var(--c) 72%, var(--primary-text-color));
  }
  .action[disabled] { opacity: 0.4; cursor: default; pointer-events: none; }
  .action .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Four or more actions: stacked icon-over-label buttons so a row of 4–5 fits */
  .actions.dense { grid-template-columns: repeat(auto-fit, minmax(64px, 1fr)); gap: 6px; }
  .actions.dense .action {
    flex-direction: column;
    height: 58px;
    gap: 3px;
    padding: 0 4px;
    font-size: 11px;
  }
  .actions.dense .action .label { max-width: 100%; }

  /* Narrow cards: icon-only actions */
  @container (max-width: 300px) {
    .actions, .actions.dense { grid-template-columns: repeat(auto-fit, minmax(44px, 1fr)); }
    .action, .actions.dense .action { height: 42px; }
    .action .label { display: none; }
  }

  /* Compact layout */
  :host([layout="compact"]) .content { gap: 8px; padding: 10px; }
  :host([layout="compact"]) .area-icon { width: 36px; height: 36px; --mdc-icon-size: 20px; }
  :host([layout="compact"]) .name { font-size: 14px; line-height: 20px; }
  :host([layout="compact"]) .temp { font-size: 18px; line-height: 20px; }
  :host([layout="compact"]) .chip { height: 26px; padding: 0 9px 0 7px; }
  :host([layout="compact"]) .chip:not(.active) .label { display: none; }
  :host([layout="compact"]) .chip:not(.active) { padding: 0 6px; }
  :host([layout="compact"]) .action { height: 36px; }
  :host([layout="compact"]) .actions,
  :host([layout="compact"]) .actions.dense { grid-template-columns: repeat(auto-fit, minmax(40px, 1fr)); }
  :host([layout="compact"]) .actions.dense .action { height: 36px; }
  :host([layout="compact"]) .action .label { display: none; }

  .hint {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: var(--apc-control-radius);
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
    font-size: 12px;
    line-height: 16px;
    --mdc-icon-size: 18px;
  }
  .hint ha-icon { flex: none; }

  .warning {
    padding: 16px;
    color: var(--warning-color, #ffa600);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .presence-dot::after, .alert-banner ha-icon { animation: none; }
  }
`,yt=s`
  dialog.apc-popup {
    --c: var(--apc-accent);
    padding: 0;
    border: none;
    background: transparent;
    width: min(640px, calc(100vw - 32px));
    max-width: none;
    max-height: min(80vh, 760px);
    color: var(--primary-text-color);
    overflow: visible;
  }
  dialog.apc-popup::backdrop {
    background: rgba(0, 0, 0, 0.45);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  dialog.apc-popup[open] .popup-surface {
    animation: apc-pop 200ms cubic-bezier(0.2, 0.9, 0.3, 1.1);
  }
  @keyframes apc-pop {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
  }
  .popup-surface {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: min(80vh, 760px);
    padding: 20px;
    box-sizing: border-box;
    border-radius: var(--ha-dialog-border-radius, 28px);
    background: var(--ha-dialog-surface-background, var(--mdc-theme-surface, var(--card-background-color, #fff)));
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
  .popup-head {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .popup-icon {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
    --mdc-icon-size: 22px;
  }
  .popup-icon.active {
    background: color-mix(in srgb, var(--c) 18%, transparent);
    color: var(--c);
  }
  .popup-titles { flex: 1; min-width: 0; }
  .popup-title { font-size: 20px; line-height: 26px; font-weight: 500; }
  .popup-sub { font-size: 13px; color: var(--secondary-text-color); }
  .popup-close {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    --mdc-icon-size: 22px;
  }
  .popup-close:hover { background: var(--apc-neutral-bg); }
  .popup-bulk { display: flex; gap: 8px; flex-wrap: wrap; }
  .bulk {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 14px 0 10px;
    border: none;
    border-radius: 18px;
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    color: color-mix(in srgb, var(--c) 72%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 16%, transparent);
    cursor: pointer;
    --mdc-icon-size: 18px;
  }
  .bulk:hover { background: color-mix(in srgb, var(--c) 24%, transparent); }
  .popup-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
    gap: 8px;
    overflow-y: auto;
    padding: 2px;
    margin: -2px;
  }

  /* Fallback tiles (only when HA's card helpers are unavailable) */
  .mini-tile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--divider-color);
    background: var(--ha-card-background, var(--card-background-color));
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    outline: none;
    --mdc-icon-size: 20px;
  }
  .mini-tile:focus-visible { box-shadow: 0 0 0 2px var(--c); }
  .mt-icon {
    flex: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
  }
  .mini-tile.active .mt-icon {
    background: color-mix(in srgb, var(--c) 20%, transparent);
    color: var(--c);
  }
  .mt-text { min-width: 0; }
  .mt-name, .mt-state { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mt-name { font-size: 14px; font-weight: 500; line-height: 20px; }
  .mt-state { font-size: 12px; color: var(--secondary-text-color); line-height: 16px; }


  /* ---- Room popup -------------------------------------------------------- */
  dialog.apc-popup.room {
    width: min(760px, calc(100vw - 32px));
    max-height: none;
    height: min(88vh, 880px);
  }
  .room-surface {
    height: 100%;
    max-height: none;
    padding: 0;
    gap: 0;
    overflow: hidden;
  }
  .sheet-handle { display: none; }
  .room-head {
    flex: none;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 12px 12px 20px;
  }
  .room-icon {
    flex: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
    --mdc-icon-size: 24px;
  }
  .room-icon.light-on {
    color: rgb(var(--room-rgb, 255, 193, 7));
    background: rgba(var(--room-rgb, 255, 193, 7), 0.18);
  }
  .room-head .climate { flex: none; }
  .room-head .popup-close { width: 44px; height: 44px; }
  .popup-sub .dot { margin: 0 4px; }

  .room-search {
    flex: none;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 20px 8px;
    height: 44px;
    border-radius: 22px;
    background: var(--apc-neutral-bg);
    color: var(--secondary-text-color);
    --mdc-icon-size: 20px;
  }
  .room-search > ha-icon { position: absolute; left: 14px; pointer-events: none; }
  .room-search input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0 44px 0 44px;
    font: inherit;
    font-size: 15px;
    color: var(--primary-text-color);
    -webkit-appearance: none;
    appearance: none;
  }
  .room-search input::-webkit-search-cancel-button { display: none; }
  .room-search:focus-within { box-shadow: 0 0 0 2px color-mix(in srgb, var(--apc-accent) 70%, transparent); }
  .search-clear {
    position: absolute;
    right: 2px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .room-body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 0 20px 20px;
    -webkit-overflow-scrolling: touch;
  }
  .room-empty {
    padding: 40px 12px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  .room-sec { padding-bottom: 8px; }
  .sec-head {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    background: var(--ha-dialog-surface-background, var(--mdc-theme-surface, var(--card-background-color, #fff)));
  }
  .sec-toggle {
    flex: 1;
    min-width: 0;
    min-height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 4px 0 0;
    border: none;
    background: none;
    font: inherit;
    color: var(--primary-text-color);
    text-align: left;
    cursor: pointer;
    border-radius: 8px;
    --mdc-icon-size: 20px;
  }
  .sec-toggle:focus-visible { outline: 2px solid var(--c); outline-offset: 2px; }
  .sec-icon { color: var(--c); flex: none; }
  .sec-title { font-size: 15px; font-weight: 500; letter-spacing: 0.01em; }
  .sec-count { font-size: 12px; color: var(--secondary-text-color); }
  .sec-chevron { margin-left: auto; color: var(--secondary-text-color); flex: none; }
  .bulk.small { height: 32px; padding: 0 12px 0 8px; font-size: 12px; flex: none; --mdc-icon-size: 16px; }

  .sec-grid { display: grid; gap: 8px; padding: 2px 0 4px; }
  .sec-grid.tiles { grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr)); }
  .sec-grid.status { grid-template-columns: repeat(auto-fill, minmax(min(230px, 100%), 1fr)); }
  .sec-grid.stats { grid-template-columns: repeat(auto-fill, minmax(min(140px, 100%), 1fr)); }
  .sec-grid.status .mini-tile { padding: 6px 10px; min-height: 44px; box-sizing: border-box; }
  .sec-grid.status .mt-icon { width: 32px; height: 32px; }
  .tile-skel {
    min-height: 56px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--apc-neutral-bg);
    animation: apc-pulse 1.2s ease-in-out infinite alternate;
  }
  @keyframes apc-pulse { to { opacity: 0.5; } }
  .sec-more {
    display: block;
    width: 100%;
    min-height: 40px;
    margin-top: 4px;
    border: none;
    border-radius: 12px;
    background: none;
    color: var(--apc-accent);
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .sec-more:hover { background: var(--apc-neutral-bg); }

  /* Stat cells: the value is what you look for. */
  .stat-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-height: 64px;
    padding: 8px 12px;
    box-sizing: border-box;
    border: none;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--apc-neutral-bg);
    color: var(--primary-text-color);
    font: inherit;
    text-align: left;
    cursor: pointer;
    min-width: 0;
    --mdc-icon-size: 16px;
  }
  .stat-cell:hover { background: var(--apc-neutral-bg-hover); }
  .stat-cell:focus-visible { outline: 2px solid var(--apc-accent); outline-offset: 1px; }
  .sc-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
    min-width: 0;
  }
  .sc-label ha-state-icon { flex: none; }
  .sc-name, .sc-sub, .sc-value { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sc-value { font-size: 18px; line-height: 24px; font-weight: 500; font-variant-numeric: tabular-nums; }
  .sc-sub { font-size: 11px; line-height: 14px; color: var(--secondary-text-color); opacity: 0.8; }
  .stat-cell.t-low .sc-value { color: var(--apc-temp-low); }
  .stat-cell.t-high .sc-value { color: var(--apc-temp-high); }
  .stat-cell.h-low .sc-value { color: var(--apc-hum-low); }
  .stat-cell.h-high .sc-value { color: var(--apc-hum-high); }
  .stat-cell.warn .sc-value { color: var(--apc-orange); }
  .stat-cell.bad .sc-value { color: var(--apc-red); }

  /* Phones: bottom sheet */
  @media (max-width: 600px) {
    dialog.apc-popup {
      width: 100vw;
      max-height: 85vh;
      margin: auto 0 0 0;
    }
    .popup-surface {
      max-height: 85vh;
      border-radius: var(--ha-dialog-border-radius, 28px) var(--ha-dialog-border-radius, 28px) 0 0;
      padding-bottom: calc(20px + env(safe-area-inset-bottom));
    }
    .popup-grid { grid-template-columns: 1fr 1fr; }

    /* Room popup: nearly full height, one column of controls, two columns of sensor values. */
    dialog.apc-popup.room {
      width: 100vw;
      height: 92vh;
      height: 92dvh;
      max-height: none;
      margin: auto 0 0 0;
    }
    .room-surface { padding-bottom: 0; border-radius: var(--ha-dialog-border-radius, 28px) var(--ha-dialog-border-radius, 28px) 0 0; }
    .sheet-handle {
      display: block;
      flex: none;
      width: 36px;
      height: 4px;
      margin: 8px auto 0;
      border-radius: 2px;
      background: var(--divider-color);
    }
    .room-head { padding: 8px 8px 8px 16px; gap: 8px; }
    .room-head .temp { font-size: 20px; line-height: 22px; }
    .room-search { margin: 0 16px 8px; }
    .room-body { padding: 0 16px calc(16px + env(safe-area-inset-bottom)); }
    .sec-grid.tiles, .sec-grid.status { grid-template-columns: 1fr; }
    .sec-grid.stats { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 360px) {
    .popup-grid { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog.apc-popup[open] .popup-surface { animation: none; }
  }
`,xt=[...Ee,"vibration","cold","heat","sound","light"];function wt(e){const t={};for(const[o,i]of Object.entries(e))null!=i&&""!==i&&(Array.isArray(i)&&0===i.length||(t[o]=i));return t}class $t extends re{constructor(){super(...arguments),this._open=new Set,this._ready=!1,this._t=(e,t)=>Ye(this.hass,e,t),this._label=e=>{const t={area:"ed_area",name:"ed_name",icon:"ed_icon",color:"ed_color",layout:"ed_layout",show_picture:"ed_show_picture",room_popup:"ed_room_popup",show_inactive:"ed_show_inactive",temperature_entity:"ed_temperature_entity",humidity_entity:"ed_humidity_entity",sensor_classes:"ed_sensor_classes",comfort_temp_min:"ed_comfort_temp_min",comfort_temp_max:"ed_comfort_temp_max",comfort_hum_min:"ed_comfort_hum_min",comfort_hum_max:"ed_comfort_hum_max",groups:"ed_groups",top_groups:"ed_top_groups",label_include:"ed_label_include",label_exclude:"ed_label_exclude",label_match:"ed_label_match",label_from_device:"ed_label_from_device",main_light:"ed_main_light",link_main_light:"ed_link_main_light",color_temp_low:"ed_color_temp_low",color_temp_high:"ed_color_temp_high",color_hum_low:"ed_color_hum_low",color_hum_high:"ed_color_hum_high",alert_classes:"ed_alert_classes",presence_entities:"ed_presence_entities",exclude_entities:"ed_exclude_entities",battery_threshold:"ed_battery_threshold",tap_action:"ed_tap_action",hold_action:"ed_hold_action",double_tap_action:"ed_double_tap_action",preset:"ed_preset",entity:"ed_entity"};return t[e.name]?this._t(t[e.name]):e.name}}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-form")||!customElements.get("ha-selector"))try{const e=await(window.loadCardHelpers?.()),t=await(e?.createCardElement({type:"entities",entities:[]}));await(t?.constructor?.getConfigElement?.())}catch{}}().then(()=>this._ready=!0)}setConfig(e){this._config=e}_mainSchema(){const e=this._t;return[{name:"area",required:!0,selector:{area:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{type:"grid",name:"",schema:[{name:"color",selector:{ui_color:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:e("ed_layout_default")},{value:"compact",label:e("ed_layout_compact")}]}}}]},{name:"show_picture",selector:{boolean:{}}},{name:"room_popup",selector:{boolean:{}}},{name:"link_main_light",selector:{boolean:{}}},{name:"main_light",selector:{entity:{filter:{domain:"light"}}}},{type:"expandable",name:"",title:e("ed_section_climate"),icon:"mdi:thermometer",flatten:!0,schema:[{name:"temperature_entity",selector:{entity:{filter:{domain:"sensor",device_class:"temperature"}}}},{name:"humidity_entity",selector:{entity:{filter:{domain:"sensor",device_class:"humidity"}}}},{type:"grid",name:"",schema:[{name:"comfort_temp_min",selector:{number:{mode:"box",step:.5}}},{name:"comfort_temp_max",selector:{number:{mode:"box",step:.5}}},{name:"comfort_hum_min",selector:{number:{mode:"box",min:0,max:100}}},{name:"comfort_hum_max",selector:{number:{mode:"box",min:0,max:100}}}]},{type:"grid",name:"",schema:[{name:"color_temp_low",selector:{ui_color:{}}},{name:"color_temp_high",selector:{ui_color:{}}},{name:"color_hum_low",selector:{ui_color:{}}},{name:"color_hum_high",selector:{ui_color:{}}}]},{name:"sensor_classes",selector:{select:{multiple:!0,mode:"list",options:Me.map(e=>({value:e,label:e.replace(/_/g," ")}))}}}]},{type:"expandable",name:"",title:e("ed_section_status"),icon:"mdi:list-status",flatten:!0,schema:[{name:"show_inactive",selector:{boolean:{}}},{name:"groups",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:Oe.filter(e=>"presence"!==e).map(t=>({value:t,label:e(`g_${t}`)}))}}},{name:"top_groups",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:Oe.filter(e=>"presence"!==e&&"alerts"!==e).map(t=>({value:t,label:e(`g_${t}`)}))}}},{name:"alert_classes",selector:{select:{multiple:!0,mode:"dropdown",options:xt.map(e=>({value:e,label:e.replace(/_/g," ")}))}}},{name:"presence_entities",selector:{entity:{multiple:!0,filter:[{domain:"binary_sensor"},{domain:"person"},{domain:"input_boolean"}]}}},{name:"exclude_entities",selector:{entity:{multiple:!0}}},{name:"battery_threshold",selector:{number:{min:1,max:100,mode:"slider",unit_of_measurement:"%"}}}]},{type:"expandable",name:"",title:e("ed_section_labels"),icon:"mdi:label-multiple-outline",flatten:!0,schema:[{name:"label_include",selector:{label:{multiple:!0}}},{name:"label_exclude",selector:{label:{multiple:!0}}},{name:"label_match",selector:{select:{mode:"dropdown",options:[{value:"any",label:e("ed_label_match_any")},{value:"all",label:e("ed_label_match_all")}]}}},{name:"label_from_device",selector:{boolean:{}}}]},{type:"expandable",name:"",title:e("ed_section_interactions"),icon:"mdi:gesture-tap",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}]}_actionSchema(e){const t=this._t;return[{name:"preset",selector:{select:{mode:"dropdown",options:[{value:"",label:t("ed_preset_none")},...Ze.map(e=>({value:e,label:t(`preset_${e}`)}))]}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"entity",selector:{entity:"vacuum_area"===e.preset?{filter:{domain:"vacuum"}}:{}}},{name:"color",selector:{ui_color:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}]}_formData(){const e=this._config,t=e=>Array.isArray(e)?{min:e[0],max:e[1]}:e??{},o=t(e.comfort_temperature),i=t(e.comfort_humidity);return{layout:"default",show_picture:!0,room_popup:!0,show_inactive:!1,battery_threshold:20,link_main_light:!0,top_groups:Pe,...e,label_include:we(e.label_filter?.include),label_exclude:we(e.label_filter?.exclude),label_match:e.label_filter?.match??"any",label_from_device:e.label_filter?.from_device??!0,color_temp_low:e.colors?.temperature_low,color_temp_high:e.colors?.temperature_high,color_hum_low:e.colors?.humidity_low,color_hum_high:e.colors?.humidity_high,comfort_temp_min:o.min,comfort_temp_max:o.max,comfort_hum_min:i.min,comfort_hum_max:i.max}}_mainChanged(e){e.stopPropagation();const t={...e.detail.value},o=(e,t)=>void 0===e&&void 0===t?void 0:wt({min:e,max:t}),i=o(t.comfort_temp_min,t.comfort_temp_max),a=o(t.comfort_hum_min,t.comfort_hum_max);delete t.comfort_temp_min,delete t.comfort_temp_max,delete t.comfort_hum_min,delete t.comfort_hum_max;const n=wt({temperature_low:t.color_temp_low,temperature_high:t.color_temp_high,humidity_low:t.color_hum_low,humidity_high:t.color_hum_high});for(const e of["color_temp_low","color_temp_high","color_hum_low","color_hum_high"])delete t[e];const s=wt({include:t.label_include,exclude:t.label_exclude,match:"all"===t.label_match?"all":void 0,from_device:!1!==t.label_from_device&&void 0});for(const e of["label_include","label_exclude","label_match","label_from_device"])delete t[e];t.label_filter=Object.keys(s).length?s:void 0,t.colors=Object.keys(n).length?n:void 0,JSON.stringify(t.top_groups)===JSON.stringify(Pe)&&delete t.top_groups;const r=wt({...t,comfort_temperature:i&&Object.keys(i).length?i:void 0,comfort_humidity:a&&Object.keys(a).length?a:void 0,actions:this._config?.actions});"default"===r.layout&&delete r.layout,!0===r.show_picture&&delete r.show_picture,!0===r.room_popup&&delete r.room_popup,!1===r.show_inactive&&delete r.show_inactive,20===r.battery_threshold&&delete r.battery_threshold,!0===r.link_main_light&&delete r.link_main_light,this._commit(r)}_actionChanged(e,t){t.stopPropagation();const o=[...this._config?.actions??[]];o[e]=wt({...t.detail.value}),this._commit({...this._config,actions:o})}_addAction(){const e=[...this._config?.actions??[],{preset:"lights_toggle"}];this._open=new Set([...this._open,e.length-1]),this._commit({...this._config,actions:e})}_removeAction(e){const t=[...this._config?.actions??[]];t.splice(e,1),this._open=new Set,this._commit(wt({...this._config,actions:t}))}_moveAction(e,t){const o=[...this._config?.actions??[]],i=e+t;i<0||i>=o.length||([o[e],o[i]]=[o[i],o[e]],this._open=new Set,this._commit({...this._config,actions:o}))}_toggleOpen(e){const t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t}_commit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config||!this._ready)return W;const e=this._config.actions??[];return B`
      <ha-form
        .hass=${this.hass}
        .data=${this._formData()}
        .schema=${this._mainSchema()}
        .computeLabel=${this._label}
        @value-changed=${this._mainChanged}
      ></ha-form>

      <div class="section">
        <div class="section-title"><ha-icon icon="mdi:gesture-tap-button"></ha-icon>${this._t("ed_section_actions")}</div>
        ${e.map((t,o)=>this._renderAction(t,o,e.length))}
        <button class="add" @click=${this._addAction}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("ed_add_action")}
        </button>
      </div>
    `}_renderAction(e,t,o){const i=this._open.has(t),a=e.name||(e.preset?this._t(`preset_${e.preset}`):e.entity)||this._t("ed_action_n",{n:t+1});return B`
      <div class="action-item">
        <div class="action-head">
          <button class="head-main" @click=${()=>this._toggleOpen(t)} aria-expanded=${String(i)}>
            <ha-icon .icon=${i?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            <span>${a}</span>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_up")} ?disabled=${0===t} @click=${()=>this._moveAction(t,-1)}>
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_down")} ?disabled=${t===o-1} @click=${()=>this._moveAction(t,1)}>
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
          <button class="icon-btn danger" title=${this._t("ed_remove")} @click=${()=>this._removeAction(t)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${i?B`
              <div class="action-body">
                ${"vacuum_area"===e.preset?B`<p class="hint">${this._t("ed_vacuum_hint")}</p>`:W}
                <ha-form
                  .hass=${this.hass}
                  .data=${{preset:"",...e}}
                  .schema=${this._actionSchema(e)}
                  .computeLabel=${this._label}
                  @value-changed=${e=>this._actionChanged(t,e)}
                ></ha-form>
              </div>
            `:W}
      </div>
    `}}$t.styles=s`
    :host { display: block; }
    .section { margin-top: 24px; display: flex; flex-direction: column; gap: 8px; }
    .section-title {
      display: flex; align-items: center; gap: 8px;
      font-weight: 500; font-size: 15px; color: var(--primary-text-color);
      --mdc-icon-size: 20px;
    }
    .section-title ha-icon { color: var(--secondary-text-color); }
    .action-item {
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      overflow: hidden;
    }
    .action-head { display: flex; align-items: center; gap: 2px; padding: 4px; }
    button {
      font: inherit; color: var(--primary-text-color); background: none; border: none; cursor: pointer;
      border-radius: 8px; --mdc-icon-size: 20px;
    }
    button:hover:not([disabled]) { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
    button[disabled] { opacity: 0.35; cursor: default; }
    .head-main {
      flex: 1; display: flex; align-items: center; gap: 6px; padding: 8px; text-align: left; min-width: 0;
    }
    .head-main span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
    .icon-btn.danger ha-icon { color: var(--error-color, #db4437); }
    .action-body { padding: 4px 12px 12px; border-top: 1px solid var(--divider-color); }
    .hint { margin: 8px 0; font-size: 13px; color: var(--secondary-text-color); }
    .add {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 10px; border: 1px dashed var(--divider-color); border-radius: 12px; color: var(--primary-color);
      font-weight: 500;
    }
  `,e([pe({attribute:!1})],$t.prototype,"hass",void 0),e([he()],$t.prototype,"_config",void 0),e([he()],$t.prototype,"_open",void 0),e([he()],$t.prototype,"_ready",void 0),customElements.get("area-pulse-card-editor")||customElements.define("area-pulse-card-editor",$t);const kt={presence:{icon:"mdi:account",iconOff:"mdi:account-outline",color:"var(--apc-green)"},motion:{icon:"mdi:motion-sensor",iconOff:"mdi:motion-sensor-off",color:"var(--apc-cyan)"},doors:{icon:"mdi:door-open",iconOff:"mdi:door-closed",color:"var(--apc-orange)"},windows:{icon:"mdi:window-open-variant",iconOff:"mdi:window-closed-variant",color:"var(--apc-orange)"},covers:{icon:"mdi:window-shutter-open",iconOff:"mdi:window-shutter",color:"var(--apc-purple)"},locks:{icon:"mdi:lock-open-variant",iconOff:"mdi:lock",color:"var(--apc-deep-orange)"},lights:{icon:"mdi:lightbulb-on",iconOff:"mdi:lightbulb-outline",color:"var(--apc-amber)"},fans:{icon:"mdi:fan",iconOff:"mdi:fan-off",color:"var(--apc-light-blue)"},switches:{icon:"mdi:power-socket-eu",iconOff:"mdi:power-plug-off-outline",color:"var(--apc-teal)"},media:{icon:"mdi:play-circle",iconOff:"mdi:speaker",color:"var(--apc-indigo)"},climate:{icon:"mdi:thermostat",iconOff:"mdi:thermostat",color:"var(--apc-deep-orange)"},alerts:{icon:"mdi:alert",iconOff:"mdi:shield-check",color:"var(--apc-red)"},batteries:{icon:"mdi:battery-alert-variant-outline",iconOff:"mdi:battery",color:"var(--apc-red)"}},At={illuminance:"mdi:brightness-5",carbon_dioxide:"mdi:molecule-co2",pm25:"mdi:blur",pm10:"mdi:blur-radial",volatile_organic_compounds:"mdi:air-filter",volatile_organic_compounds_parts:"mdi:air-filter",pressure:"mdi:gauge",power:"mdi:flash",energy:"mdi:lightning-bolt",sound_pressure:"mdi:waveform",temperature:"mdi:thermometer",humidity:"mdi:water-percent"},St="mdi:texture-box";class Ct extends re{constructor(){super(...arguments),this.layout="default",this.dark=!1,this._onDialogClosed=()=>{if(this._reopen){const e=this._reopen;this._reopen=void 0,"room"===e?this._openRoom(!0):this._openPopup(e)}},this._room=!1,this._roomLabels={},this._roomUi={query:"",collapsed:new Set,expanded:new Set},this._roomScroll=0,this._labelsRequested=!1,this._indexDeps=[],this._watched=new Set,this._stop=e=>e.stopPropagation()}static getConfigElement(){return document.createElement("area-pulse-card-editor")}static getStubConfig(e){const t=Object.values(e?.areas??{});return{area:t[0]?.area_id??"",actions:[{preset:"lights_toggle"},{preset:"everything_off"}]}}setConfig(e){if(!e)throw new Error("Invalid configuration");if(e.actions&&!Array.isArray(e.actions))throw new Error("`actions` must be a list");if(e.label_filter&&("object"!=typeof e.label_filter||Array.isArray(e.label_filter)))throw new Error("`label_filter` must be a map with `include` and/or `exclude`");this._config={...e},this.layout="compact"===e.layout?"compact":"default",this._popup=void 0,this._room=!1,this._indexDeps=[]}getCardSize(){const e=this._config?.actions?.length?1:0;return"compact"===this.layout?2+e:3+e}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),this._ticker=window.setInterval(()=>this.requestUpdate(),3e4),window.addEventListener("dialog-closed",this._onDialogClosed)}disconnectedCallback(){super.disconnectedCallback(),this._ticker&&window.clearInterval(this._ticker),window.removeEventListener("dialog-closed",this._onDialogClosed)}shouldUpdate(e){if(!this._config)return!1;if(e.has("hass")&&this.hass){const e=this.hass;for(const t of this._tiles??[])t.hass=e;for(const t of this._roomTiles?.values()??[])t.hass=e}if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;if(t.entities!==o.entities||t.devices!==o.devices||t.areas!==o.areas||t.locale!==o.locale||t.language!==o.language||t.themes!==o.themes)return!0;for(const e of this._watched)if(t.states[e]!==o.states[e])return!0;return!1}willUpdate(){const e=this.hass,t=this._config;if(!e||!t)return;this.dark=!!e.themes?.darkMode,this._ensureLabelRegistry();const o=[e.entities,e.devices,e.areas,t,this._labelRegistry];if(!this._index||o.some((e,t)=>e!==this._indexDeps[t])){this._labelFilter=Ae(t.label_filter,this._labelRegistry),this._index=Re(e,t.area,t.exclude_entities??[],this._labelFilter),this._indexDeps=o;const i=e.areas?.[t.area];this._watched=function(e,t){const o=new Set(t.withDiagnostic);for(const t of[e.temperature_entity,e.humidity_entity,e.main_light,...e.presence_entities??[]])t&&o.add(t);for(const t of e.actions??[])t.entity&&o.add(t.entity);return o}(t,this._index),i?.temperature_entity_id&&this._watched.add(i.temperature_entity_id),i?.humidity_entity_id&&this._watched.add(i.humidity_entity_id)}}_ensureLabelRegistry(){var e;!this._labelsRequested&&this.hass&&$e(this._config?.label_filter)&&(this._labelsRequested=!0,(e=this.hass,Ce||(Ce=e.callWS({type:"config/label_registry/list"}).catch(e=>{throw Ce=void 0,e})),Ce).then(e=>this._labelRegistry=e).catch(()=>{}))}_getIndex(){const{hass:e,_config:t}=this;return this._index??Re(e,t.area,t.exclude_entities??[],Ae(t.label_filter,this._labelRegistry))}render(){const e=this.hass,t=this._config;if(!e||!t)return W;if(!t.area)return this._warning(Ye(e,"pick_area"));const o=e.areas?.[t.area];if(!o)return this._warning(Ye(e,"area_not_found",{area:t.area}));const i=this._getIndex(),a=De(e,t,i),n=Ie(e,i,"temperature",t.temperature_entity??o.temperature_entity_id),s=Ie(e,i,"humidity",t.humidity_entity??o.humidity_entity_id),r=(t.sensor_classes??[]).map(t=>Ie(e,i,t)).filter(e=>!!e),c=(t.actions??[]).map(t=>function(e,t,o,i,a,n=!1){const s=o.name,r=(e,t,a={})=>n?{action:"perform-action",perform_action:e,target:{entity_id:[...i[t]?.entities??[]]},...a}:Qe(e,o.area_id,a),c=(i.lights?.active.length??0)>0,l=t.entity?e.states[t.entity]:void 0;let d;switch(t.preset){case"lights_toggle":d={name:Ye(e,"preset_lights_toggle"),icon:c?"mdi:lightbulb-group":"mdi:lightbulb-group-off-outline",active:c,color:"var(--apc-amber)",disabled:!i.lights,tap_action:r(c?"light.turn_off":"light.turn_on","lights")};break;case"lights_on":d={name:Ye(e,"preset_lights_on"),icon:"mdi:lightbulb-on-outline",active:!1,color:"var(--apc-amber)",disabled:!i.lights,tap_action:r("light.turn_on","lights")};break;case"lights_off":d={name:Ye(e,"preset_lights_off"),icon:"mdi:lightbulb-off-outline",active:!1,color:"var(--apc-amber)",disabled:!i.lights,tap_action:r("light.turn_off","lights")};break;case"covers_open":d={name:Ye(e,"preset_covers_open"),icon:"mdi:window-shutter-open",active:!1,color:"var(--apc-purple)",disabled:!i.covers,tap_action:r("cover.open_cover","covers")};break;case"covers_close":d={name:Ye(e,"preset_covers_close"),icon:"mdi:window-shutter",active:!1,color:"var(--apc-purple)",disabled:!i.covers,tap_action:r("cover.close_cover","covers")};break;case"fans_off":d={name:Ye(e,"preset_fans_off"),icon:"mdi:fan-off",active:!1,color:"var(--apc-cyan)",disabled:!i.fans,tap_action:r("fan.turn_off","fans")};break;case"media_stop":d={name:Ye(e,"preset_media_stop"),icon:"mdi:stop-circle-outline",active:(i.media?.active.length??0)>0,color:"var(--apc-indigo)",disabled:!i.media,tap_action:r("media_player.media_stop","media")};break;case"vacuum_area":{const i="cleaning"===l?.state;d={name:Ye(e,"preset_vacuum_area"),icon:i?"mdi:robot-vacuum-variant":"mdi:robot-vacuum",active:i,color:"var(--apc-teal)",disabled:!t.entity,tap_action:{action:"perform-action",perform_action:"vacuum.clean_area",target:{entity_id:t.entity},data:{cleaning_area_id:[o.area_id]},confirmation:{text:Ye(e,"confirm_vacuum",{area:s})}}};break}case"everything_off":d={name:Ye(e,"preset_everything_off"),icon:"mdi:power",active:!1,color:"var(--apc-red)",disabled:!1,tap_action:{...n?{action:"perform-action",perform_action:"homeassistant.turn_off",target:{entity_id:a.primary.filter(e=>Xe.has(e.split(".")[0]))}}:Qe("homeassistant.turn_off",o.area_id),confirmation:{text:Ye(e,"confirm_everything_off",{area:s})}}};break;default:{const e=t.entity?.split(".")[0]??"";d={name:l?.attributes.friendly_name?.replace(new RegExp(`^${ot(s)}\\s*`,"i"),"")||t.entity||"Action",icon:l?.attributes.icon||tt[e]||"mdi:gesture-tap",active:!!l&&Ke.has(l.state),color:"var(--apc-accent)",disabled:!(!t.entity||l&&"unavailable"!==l.state),tap_action:t.entity?et(t.entity):{action:"none"}}}}return{...d,name:t.name??d.name,icon:t.icon??d.icon,color:t.color?it(t.color):d.color,tap_action:t.tap_action??d.tap_action,hold_action:t.hold_action??(t.entity?{action:"more-info",entity:t.entity}:void 0),double_tap_action:t.double_tap_action,entity:t.entity}}(e,t,o,a,i,!!this._labelFilter?.active)),l=a.presence,d=!!l?.active.length,p=a.alerts?.active??[],h=t.color?it(t.color):void 0,u=!1!==t.show_picture&&!!o.picture,_=this._roomEnabled(i),m=this._hasAction(t.tap_action)||this._hasAction(t.hold_action)||_&&!t.tap_action,f=Fe(e,t,i),g=f?e.states[f]:void 0,b="on"===g?.state,v=b?g:(a.lights?.active??[]).map(t=>e.states[t]).find(e=>!!e),y=v?We(v)??[255,193,7]:void 0,x=Number(v?.attributes.brightness??255),w=.1+.12*Math.min(1,Math.max(0,x/255)),$=b?We(g)??[255,193,7]:void 0,k={};h&&(k["--apc-accent"]=h),y&&(k["--apc-glow-rgb"]=y.join(","),k["--apc-glow-alpha"]=w.toFixed(3)),$&&(k["--apc-light-rgb"]=$.join(","));const A=t.colors??{};A.temperature_low&&(k["--apc-temp-low"]=it(A.temperature_low)),A.temperature_high&&(k["--apc-temp-high"]=it(A.temperature_high)),A.humidity_low&&(k["--apc-hum-low"]=it(A.humidity_low)),A.humidity_high&&(k["--apc-hum-high"]=it(A.humidity_high));const S={"area-icon":!0,occupied:d&&!f,linked:!!f,"light-on":b},C=B`<ha-icon .icon=${t.icon||o.icon||St}></ha-icon>`,E=d?B`<span class="presence-dot"></span>`:W;return B`
      <ha-card class=${ge({alerting:p.length>0})} style=${ye(k)}>
        ${u?B`<div class="picture" style=${ye({backgroundImage:`url("${o.picture}")`})}></div>`:W}
        <div class=${ge({glow:!0,on:!!y})}></div>
        <div class="content">
          <div
            class=${ge({header:!0,clickable:m})}
            role=${m?"button":W}
            tabindex=${m?"0":W}
            ${bt({hasHold:this._hasAction(t.hold_action),hasDoubleTap:this._hasAction(t.double_tap_action),disabled:!m})}
            @apc-action=${e=>this._cardAction(e.detail.action)}
          >
            ${f?B`<div
                  class=${ge(S)}
                  role="button"
                  tabindex="0"
                  aria-pressed=${String(b)}
                  aria-label=${Ye(e,"toggle_light",{name:this._entityName(g)})}
                  title=${this._entityName(g)}
                  ${bt({hasHold:!0})}
                  @apc-action=${e=>this._mainLightAction(f,e.detail.action)}
                  @pointerdown=${this._stop}
                  @pointerup=${this._stop}
                  @click=${this._stop}
                  @keydown=${this._stop}
                >
                  ${C}${E}
                </div>`:B`<div class=${ge(S)}>${C}${E}</div>`}
            <div class="titles">
              <div class="name">${t.name||o.name}</div>
              <div class="secondary">${this._secondary(a)}</div>
            </div>
            ${this._renderClimate(n,s)}
          </div>
          ${this._renderLabelHint(i)}
          ${p.length?this._renderAlertBanner(p):W}
          ${this._renderChips(a,r)}
          ${c.length?this._renderActions(c):W}
        </div>
      </ha-card>
      ${this._popup&&a[this._popup]?this._renderPopup(a[this._popup],o):W}
      ${this._room?this._renderRoom(o,a,n,s):W}
    `}_renderLabelHint(e){const t=this._labelFilter;return t?.active&&0!==t.include.size?e.primary.length>0||0===e.unfilteredCount?W:B`
      <div class="hint">
        <ha-icon icon="mdi:label-off-outline"></ha-icon>
        <span>${Ye(this.hass,"no_label_match",{labels:t.includeNames.join(", ")})}</span>
      </div>
    `:W}_warning(e){return B`<ha-card><div class="warning"><ha-icon icon="mdi:alert-outline"></ha-icon>${e}</div></ha-card>`}_secondary(e){const t=this.hass,o=[],i=e.presence;if(i){const e=i.active.length>0,a=this._lastChange(e?i.active:i.entities),n=Ye(t,e?"occupied":"clear");o.push(void 0!==a?`${n} ${Ye(t,"for",{t:this._ago(a)})}`:n)}const a=e.lights;if(a?.active.length&&o.push(Ye(t,1===a.active.length?"light_on":"lights_on_n",{n:a.active.length})),!o.length){const i=e.media;i?.active.length&&o.push(Ye(t,"media_playing"))}return o.map((e,t)=>B`${t?B`<span class="dot">·</span>`:W}${e}`)}_renderClimate(e,t){if(!e&&!t)return W;const o=this._config,i=e?.unit||"°",a=e?qe(e.value,o.comfort_temperature,i.includes("F")?[68,76]:[19,25]):"ok",n=t?qe(t.value,o.comfort_humidity,[35,65]):"ok";return B`
      <div class="climate">
        ${e?B`<div
              class="temp ${a}"
              title=${e.entities.length>1?`Median of ${e.entities.length} sensors`:""}
              @click=${t=>this._moreInfo(e.entities[0],t)}
            >
              ${this._num(e.value,1)}<span class="unit">${i}</span>
            </div>`:W}
        ${t?B`<div class="hum ${n}" @click=${e=>this._moreInfo(t.entities[0],e)}>
              <ha-icon .icon=${"low"===n?"mdi:water-percent-alert":"mdi:water-percent"}></ha-icon>${this._num(t.value,0)}${t.unit}
            </div>`:W}
      </div>
    `}_renderAlertBanner(e){const t=this.hass,o=t.states[e[0]],i=1===e.length?`${this._entityName(o)} · ${this._formatState(o)}`:`${Ye(t,"alerts_n",{n:e.length})}: ${e.map(e=>this._entityName(t.states[e])).join(", ")}`;return B`
      <div
        class="alert-banner"
        role="alert"
        @click=${()=>1===e.length?this._moreInfo(e[0]):this._openPopup("alerts")}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="text">${i}</span>
      </div>
    `}_renderChips(e,t){const o=this._config,i=(o.groups??Oe).filter(e=>"presence"!==e),a=new Set(o.top_groups??Pe),n=!0===o.show_inactive,s=[],r=[];for(const t of i){const o=e[t];o&&(("alerts"!==t||"compact"===this.layout&&o.active.length)&&("batteries"!==t||o.active.length)&&(o.active.length||n)&&(a.has(t)?s:r).push(this._groupChip(o)))}for(const e of t)r.push(this._statChip(e));return s.length||r.length?B`
      <div class="chip-rows">
        ${s.length?B`<div class="chips">${s}</div>`:W}
        ${r.length?B`<div class="chips">${r}</div>`:W}
      </div>
    `:W}_statChip(e){let t="";"carbon_dioxide"===e.deviceClass&&(t=e.value>=1500?"bad":e.value>=1e3?"warn":""),"pm25"===e.deviceClass&&(t=e.value>=35?"bad":e.value>=12?"warn":"");const o=Math.abs(e.value)>=100?0:1;return B`
      <button class="chip stat ${t}" @click=${()=>this._moreInfo(e.entities[0])}>
        <ha-icon .icon=${At[e.deviceClass]??"mdi:gauge"}></ha-icon>
        <span class="label">${this._num(e.value,o)} ${e.unit}</span>
      </button>
    `}_groupChip(e){const t=kt[e.id],o=e.active.length>0;let i=t.color,a=o?t.icon:t.iconOff,n=this._groupLabel(e);if("climate"===e.id){const t=this.hass.states[e.active[0]??e.entities[0]],o=String(t?.attributes.hvac_action??("off"===t?.state?"off":"idle"));"cooling"===o?(i="var(--apc-blue)",a="mdi:snowflake"):"heating"===o?a="mdi:fire":"drying"===o?(i="var(--apc-amber)",a="mdi:water-percent"):"fan"===o&&(i="var(--apc-light-blue)",a="mdi:fan"),n=this._climateLabel(t,o)}return B`
      <button
        class=${ge({chip:!0,active:o,selected:this._popup===e.id})}
        style=${ye({"--c":i})}
        aria-haspopup=${e.entities.length>1?"dialog":W}
        @click=${()=>this._chipClick(e)}
      >
        <ha-icon .icon=${a}></ha-icon>
        <span class="label">${n}</span>
      </button>
    `}_groupLabel(e){const t=this.hass,o=e.active.length,i=(e,i,a)=>0===o?Ye(t,a):Ye(t,1===o?e:i,{n:o});switch(e.id){case"motion":return Ye(t,o?"motion":"no_motion");case"doors":return i("door_open","doors_open","doors_closed");case"windows":return i("window_open","windows_open","windows_closed");case"covers":return i("cover_open","covers_open_n","covers_closed");case"locks":return i("lock_unlocked","lock_unlocked","locks_locked");case"lights":return i("light_on","lights_on_n","lights_off_all");case"fans":return i("fan_on","fans_on_n","fans_off_all");case"switches":return i("switch_on","switches_on_n","switches_off_all");case"media":{if(!o)return Ye(t,"media_idle");const i=t.states[e.active[0]].attributes.media_title;return 1===o&&i?i:Ye(t,"media_playing")}case"alerts":return 1===o?Ye(t,"alert"):Ye(t,"alerts_n",{n:o});case"batteries":return Ye(t,1===o?"battery_low":"batteries_low",{n:o});default:return""}}_climateLabel(e,t){const o=this.hass;if(!e)return"";const i=`climate_${t}`,a=["heating","cooling","drying","fan","idle","off"].includes(t)?Ye(o,i):this._formatState(e),n=e.attributes.temperature,s=e.attributes.target_temp_low,r=e.attributes.target_temp_high;return"off"===e.state?a:"number"==typeof n?`${a} · ${this._num(n,1)}°`:"number"==typeof s&&"number"==typeof r?`${a} · ${this._num(s,0)}–${this._num(r,0)}°`:a}_renderActions(e){return B`
      <div class=${ge({actions:!0,dense:e.length>=4})}>
        ${e.map(e=>B`
            <button
              class=${ge({action:!0,active:e.active})}
              style=${ye({"--c":e.color})}
              title=${e.name}
              aria-label=${e.name}
              ?disabled=${e.disabled}
              ${bt({hasHold:this._hasAction(e.hold_action),hasDoubleTap:this._hasAction(e.double_tap_action),disabled:e.disabled})}
              @apc-action=${t=>this._quickAction(e,t.detail.action)}
            >
              <ha-icon .icon=${e.icon}></ha-icon>
              <span class="label">${e.name}</span>
            </button>
          `)}
      </div>
    `}_hasAction(e){return!!e&&"none"!==e.action}_chipClick(e){1!==e.entities.length?this._openPopup(e.id):this._moreInfo(e.entities[0])}_mainLightAction(e,t){"hold"===t?this._moreInfo(e):this._fireAction({entity:e,tap_action:{action:"toggle"}},"tap")}_cardAction(e){const t=this._config;"tap"!==e||t.tap_action||!this._roomEnabled(this._getIndex())?this._fireAction({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},e):this._openRoom()}_quickAction(e,t){this._fireAction({entity:e.entity,tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},t)}_fireAction(e,t){const o=e[`${t}_action`];this._hasAction(o)&&this.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:e,action:t}}))}_moreInfo(e,t){t?.stopPropagation(),e&&((this._popup||this._room)&&this._onPopupMoreInfo(),this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}})))}_currentGroups(){return this.hass&&this._config?De(this.hass,this._config,this._getIndex()):{}}_sortedEntities(e){return[...e.entities].sort((t,o)=>Number(e.active.includes(o))-Number(e.active.includes(t))||this._entityName(this.hass.states[t]).localeCompare(this._entityName(this.hass.states[o])))}async _loadHelpers(){try{return await(window.loadCardHelpers?.())??void 0}catch{return}}async _openPopup(e){const t=this._currentGroups()[e];if(!t)return;this._popup=e,this._room=!1,this._tiles=void 0;const o=await this._loadHelpers();if(this._popup!==e)return;if(!o)return void(this._tiles=null);const i=await Promise.all(this._sortedEntities(t).map(async e=>{const t=await o.createCardElement(this._tileConfig(e));return t.hass=this.hass,t}));this._popup===e&&(this._tiles=i)}_tileConfig(e,t){const o=this.hass.states[e],i=e.split(".")[0],a=[];if("light"===i){(o?.attributes.supported_color_modes??[]).some(e=>"onoff"!==e)&&a.push({type:"light-brightness"})}else"cover"===i?a.push({type:"cover-open-close"}):"climate"===i?a.push({type:"target-temperature"}):"media_player"===i&&a.push({type:"media-player-playback"});return{type:"tile",entity:e,name:t??this._entityName(o),...a.length?{features:a,features_position:"light"===i||"climate"===i?"inline":"bottom"}:{}}}_closePopup(){this.renderRoot.querySelector("dialog.apc-popup")?.close()}_onPopupClosed(){this._popup=void 0,this._tiles=void 0,this._room=!1,this._roomTiles=void 0,this._roomModel=void 0}_onPopupClick(e){e.target===e.currentTarget&&this._closePopup()}_onPopupMoreInfo(){this._room?(this._roomScroll=this.renderRoot.querySelector(".room-body")?.scrollTop??0,this._reopen="room"):this._reopen=this._popup,this._closePopup()}updated(){const e=this.renderRoot.querySelector("dialog.apc-popup");if(e&&!e.open){try{e.showModal()}catch{e.setAttribute("open","")}if(this._room&&this._roomScroll){const t=e.querySelector(".room-body");t&&(t.scrollTop=this._roomScroll),this._roomScroll=0}}}_bulkActions(e){const t=e.active.length>0,o=e=>Ye(this.hass,e);switch(e.id){case"lights":return[t?{label:o("turn_all_off"),icon:"mdi:lightbulb-group-off-outline",service:"light.turn_off"}:{label:o("turn_all_on"),icon:"mdi:lightbulb-group",service:"light.turn_on"}];case"switches":return[t?{label:o("turn_all_off"),icon:"mdi:power-plug-off-outline",service:"switch.turn_off"}:{label:o("turn_all_on"),icon:"mdi:power-plug-outline",service:"switch.turn_on"}];case"fans":return[t?{label:o("turn_all_off"),icon:"mdi:fan-off",service:"fan.turn_off"}:{label:o("turn_all_on"),icon:"mdi:fan",service:"fan.turn_on"}];case"covers":return[{label:o("open_all"),icon:"mdi:arrow-up",service:"cover.open_cover"},{label:o("close_all"),icon:"mdi:arrow-down",service:"cover.close_cover"}];case"media":return t?[{label:o("pause_all"),icon:"mdi:pause",service:"media_player.media_pause"}]:[];default:return[]}}_bulk(e,t){this._fireAction({tap_action:{action:"perform-action",perform_action:t,target:{entity_id:[...e.entities]}}},"tap")}_renderPopup(e,t){const o=this.hass,i=kt[e.id],a=e.active.length>0,n="alerts"===e.id?Ye(o,"g_alerts"):Ye(o,`g_${e.id}`),s=`${this._config.name||t.name} · ${Ye(o,"n_of_m_active",{n:e.active.length,m:e.entities.length})}`;return B`
      <dialog
        class="apc-popup"
        aria-label=${n}
        style=${ye({"--c":i.color})}
        @close=${this._onPopupClosed}
        @click=${this._onPopupClick}
        @hass-more-info=${this._onPopupMoreInfo}
      >
        <div class="popup-surface">
          <header class="popup-head">
            <div class=${ge({"popup-icon":!0,active:a})}>
              <ha-icon .icon=${a?i.icon:i.iconOff}></ha-icon>
            </div>
            <div class="popup-titles">
              <div class="popup-title">${n}</div>
              <div class="popup-sub">${s}</div>
            </div>
            <button class="popup-close" aria-label=${Ye(o,"close")} @click=${()=>this._closePopup()}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          ${this._bulkActions(e).length?B`<div class="popup-bulk">
                ${this._bulkActions(e).map(t=>B`<button class="bulk" @click=${()=>this._bulk(e,t.service)}>
                    <ha-icon .icon=${t.icon}></ha-icon>${t.label}
                  </button>`)}
              </div>`:W}
          <div class="popup-grid">
            ${void 0===this._tiles?W:null===this._tiles?this._sortedEntities(e).map(t=>this._fallbackTile(t,e)):this._tiles}
          </div>
        </div>
      </dialog>
    `}_fallbackTile(e,t){return this._miniTile(e,{color:kt[t.id].color,active:t.active.includes(e)})}_miniTile(e,t){const o=this.hass,i=o.states[e];if(!i)return W;const a=e.startsWith("light.")?We(i):void 0,n=a?`rgb(${a.join(",")})`:t.color,s=Date.parse(i.last_changed),r=["light","switch","fan","input_boolean","cover","media_player","lock"].includes(e.split(".")[0]),c=t.sub??`${this._formatState(i)}${Number.isNaN(s)?"":` · ${this._ago(s)}`}`;return B`
      <div
        class=${ge({"mini-tile":!0,active:t.active})}
        style=${ye({"--c":n})}
        role="button"
        tabindex="0"
        ${bt({hasHold:!0})}
        @apc-action=${t=>{"hold"!==t.detail.action&&r?this._fireAction({entity:e,tap_action:{action:"toggle"}},"tap"):this._moreInfo(e)}}
      >
        <div class="mt-icon"><ha-state-icon .hass=${o} .stateObj=${i}></ha-state-icon></div>
        <div class="mt-text">
          <div class="mt-name" title=${this._entityName(i)}>${t.name??this._entityName(i)}</div>
          <div class="mt-state">${c}</div>
        </div>
      </div>
    `}_roomEnabled(e){return!1!==this._config?.room_popup&&e.primary.length>0}async _openRoom(e=!1){const{hass:t,_config:o}=this;if(!t||!o)return;e||(this._roomUi={query:"",collapsed:new Set,expanded:new Set});const i=function(e,t,o){const i=new Set(t.alert_classes??Ee),a=t.battery_threshold??20,n=new Map,s=(e,t)=>{let o=n.get(e);return o||(o={id:e,kind:t,entities:[]},n.set(e,o)),o},r={},c=[],l=[],d=[];for(const t of o.withDiagnostic)mt(e.states[t],a)&&(l.push(t),r[t]="battery");for(const t of o.primary){const o=e.states[t];if(!o||r[t])continue;const a=rt(t);if(st.has(a))continue;if("unavailable"===o.state){d.push(t),r[t]="unavailable";continue}if("binary_sensor"===a&&"on"===o.state&&i.has(ct(o)??"")){c.push(t),r[t]="alert";continue}const n=nt[a]??"other";s(n,"status"===n?"status":"sensors"===n?"stats":"tiles").entities.push(t)}const p=ut(e),h=s("attention","status");h.entities=[...c.sort(p),...l.sort(p),...d.sort(p)],h.reasons=r;const u=[];for(const t of at){const o=n.get(t);o&&0!==o.entities.length&&("attention"!==t&&_t(e,o),u.push(o))}return{sections:u,total:u.reduce((e,t)=>e+t.entities.length,0)}}(t,o,this._getIndex()),a=e=>i.sections.filter(t=>t.kind===e).flatMap(e=>e.entities);this._roomModel=i,this._roomLabels=gt(t,o.area,a("stats"),[...a("tiles"),...a("status")]),this._popup=void 0,this._tiles=void 0,this._roomTiles=void 0,this._room=!0,this._helpers=await this._loadHelpers(),this._room&&this._roomModel===i&&(this._helpers?(this._roomTiles=new Map,await this._ensureRoomTiles()):this._roomTiles=null)}_roomName(e){return this._roomLabels[e]?.name??this._entityName(this.hass?.states[e])}_roomMatches(e){const t=this._roomUi.query;if(!t.trim())return!0;const o=this.hass?.states[e];return function(e,...t){const o=e.trim().toLowerCase();return!o||o.split(/\s+/).every(e=>t.some(t=>!!t&&t.toLowerCase().includes(e)))}(t,this._roomName(e),o?.attributes.friendly_name,e,this._roomLabels[e]?.sub)}_roomVisible(e){return this._roomUi.query.trim()?e.entities.filter(e=>this._roomMatches(e)):this._roomUi.expanded.has(e.id)?e.entities:e.entities.slice(0,Ct.ROOM_LIMIT)}async _ensureRoomTiles(){const e=this._roomTiles,t=this._helpers;if(!(e&&t&&this._roomModel&&this.hass))return;const o=!!this._roomUi.query.trim(),i=[];for(const t of this._roomModel.sections)if("tiles"===t.kind&&(o||!this._roomUi.collapsed.has(t.id)))for(const o of this._roomVisible(t))e.has(o)||i.push(o);if(!i.length)return;const a=await Promise.all(i.map(async e=>{const o=await t.createCardElement(this._tileConfig(e,this._roomName(e)));return o.hass=this.hass,[e,o]}));if(this._roomTiles===e){for(const[t,o]of a)e.has(t)||e.set(t,o);this.requestUpdate()}}_updateRoomUi(e){this._roomUi={...this._roomUi,...e},this._ensureRoomTiles()}_toggleIn(e,t){const o=new Set(e);return o.delete(t)||o.add(t),o}_sectionMeta(e){const t=e=>Ye(this.hass,e);switch(e){case"attention":return{icon:"mdi:alert-circle-outline",color:"var(--apc-red)",title:t("room_attention")};case"status":return{icon:"mdi:motion-sensor",color:"var(--apc-green)",title:t("room_status")};case"sensors":return{icon:"mdi:gauge",color:"var(--apc-blue)",title:t("room_sensors")};case"other":return{icon:"mdi:dots-grid",color:"var(--apc-accent)",title:t("room_other")};default:{const o=kt[e];return{icon:o.icon,color:o.color,title:t(`g_${e}`)}}}}_statusColor(e,t){if("alert"===t)return"var(--apc-red)";if("battery"===t)return"var(--apc-orange)";if("unavailable"===t)return"var(--secondary-text-color)";switch(this.hass?.states[e]?.attributes.device_class){case"motion":case"occupancy":case"presence":return"var(--apc-green)";case"door":case"garage_door":case"window":case"opening":return"var(--apc-orange)";default:return"var(--apc-accent)"}}_renderRoom(e,t,o,i){const a=this.hass,n=this._config,s=this._roomModel;if(!s)return W;const r=this._roomUi,c=!!r.query.trim(),l=n.name||e.name,d=Fe(a,n,this._getIndex()),p=d?We(a.states[d]):void 0,h=s.sections.map(e=>this._renderRoomSection(e,t)).filter(e=>e!==W);return B`
      <dialog
        class="apc-popup room"
        aria-label=${l}
        style=${ye(p?{"--room-rgb":p.join(",")}:{})}
        @close=${this._onPopupClosed}
        @click=${this._onPopupClick}
        @hass-more-info=${this._onPopupMoreInfo}
      >
        <div class="popup-surface room-surface">
          <div class="sheet-handle" aria-hidden="true"></div>
          <header class="room-head">
            <div class=${ge({"room-icon":!0,"light-on":!!p})}>
              <ha-icon .icon=${n.icon||e.icon||St}></ha-icon>
            </div>
            <div class="popup-titles">
              <div class="popup-title">${l}</div>
              <div class="popup-sub">${this._secondary(t)}</div>
            </div>
            ${this._renderClimate(o,i)}
            <button class="popup-close" aria-label=${Ye(a,"close")} @click=${()=>this._closePopup()}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          ${s.total>12?B`<div class="room-search">
                <ha-icon icon="mdi:magnify"></ha-icon>
                <input
                  type="search"
                  enterkeyhint="search"
                  autocomplete="off"
                  spellcheck="false"
                  placeholder=${Ye(a,"room_search")}
                  aria-label=${Ye(a,"room_search")}
                  .value=${r.query}
                  @input=${e=>this._updateRoomUi({query:e.target.value})}
                />
                ${c?B`<button
                      class="search-clear"
                      aria-label=${Ye(a,"room_clear_search")}
                      @click=${()=>this._updateRoomUi({query:""})}
                    >
                      <ha-icon icon="mdi:close-circle"></ha-icon>
                    </button>`:W}
              </div>`:W}
          <div class="room-body">
            ${h.length?h:B`<div class="room-empty">
                  ${c?Ye(a,"room_no_results",{q:r.query.trim()}):Ye(a,"room_empty")}
                </div>`}
          </div>
        </div>
      </dialog>
    `}_renderRoomSection(e,t){const o=this.hass,i=this._roomUi,a=!!i.query.trim(),n=this._roomVisible(e);if(a&&!n.length)return W;const s=this._sectionMeta(e.id),r=!a&&i.collapsed.has(e.id),c=e.entities.length,l=e.entities.filter(e=>lt(o.states[e])).length,d=a?String(n.length):("tiles"===e.kind||"status"===e.kind)&&"attention"!==e.id&&l>0?Ye(o,"n_of_m_active",{n:l,m:c}):String(c),p=t[e.id],h=p&&"tiles"===e.kind&&!r?this._bulkActions(p):[],u=c>Ct.ROOM_LIMIT&&!a,_=i.expanded.has(e.id);return B`
      <section class="room-sec" style=${ye({"--c":s.color})} data-section=${e.id}>
        <div class="sec-head">
          <button
            class="sec-toggle"
            aria-expanded=${String(!r)}
            @click=${()=>this._updateRoomUi({collapsed:this._toggleIn(i.collapsed,e.id)})}
          >
            <ha-icon class="sec-icon" .icon=${s.icon}></ha-icon>
            <span class="sec-title">${s.title}</span>
            <span class="sec-count">${d}</span>
            <ha-icon class="sec-chevron" .icon=${r?"mdi:chevron-down":"mdi:chevron-up"}></ha-icon>
          </button>
          ${h.map(e=>B`<button class="bulk small" @click=${()=>this._bulk(p,e.service)}>
              <ha-icon .icon=${e.icon}></ha-icon>${e.label}
            </button>`)}
        </div>
        ${r?W:B`<div class=${`sec-grid ${e.kind}`}>${n.map(t=>this._renderRoomItem(e,t))}</div>
              ${u?B`<button
                    class="sec-more"
                    @click=${()=>this._updateRoomUi({expanded:this._toggleIn(i.expanded,e.id)})}
                  >
                    ${_?Ye(o,"room_show_less"):Ye(o,"room_show_more",{n:c-Ct.ROOM_LIMIT})}
                  </button>`:W}`}
      </section>
    `}_renderRoomItem(e,t){const o=this.hass,i=o.states[t];if(!i)return W;const a=this._roomName(t);if("stats"===e.kind)return this._statCell(t);if("status"===e.kind){const n=e.reasons?.[t];let s;return"battery"===n?s=`${Ye(o,"reason_low_battery")} · ${this._formatState(i)}`:"unavailable"===n&&(s=Ye(o,"reason_unavailable")),this._miniTile(t,{color:this._statusColor(t,n),active:n?"unavailable"!==n:lt(i),name:a,sub:s})}const n=this._roomTiles,s=n?.get(t);if(s)return s;if(null===n){const o=kt[e.id];return this._miniTile(t,{color:o?.color??"var(--apc-accent)",active:lt(i),name:a})}return B`<div class="tile-skel" aria-hidden="true"></div>`}_statCell(e){const t=this.hass,o=t.states[e],i=this._roomLabels[e]??{name:this._entityName(o)},a=this._config,n=Number(o.state),s=""!==o.state.trim()&&!Number.isNaN(n),r=o.attributes.device_class;let c="";if(s&&"temperature"===r){const e=String(o.attributes.unit_of_measurement??""),t=qe(n,a.comfort_temperature,e.includes("F")?[68,76]:[19,25]);c="ok"===t?"":`t-${t}`}else if(s&&"humidity"===r){const e=qe(n,a.comfort_humidity,[35,65]);c="ok"===e?"":`h-${e}`}else s&&"carbon_dioxide"===r?c=n>=1500?"bad":n>=1e3?"warn":"":s&&"pm25"===r&&(c=n>=35?"bad":n>=12?"warn":"");return B`
      <button
        class=${ge({"stat-cell":!0,[c]:!!c})}
        title=${o.attributes.friendly_name??e}
        @click=${()=>this._moreInfo(e)}
      >
        <span class="sc-label">
          <ha-state-icon .hass=${t} .stateObj=${o}></ha-state-icon>
          <span class="sc-name">${i.name}</span>
        </span>
        <span class="sc-value">${this._formatState(o)}</span>
        ${i.sub?B`<span class="sc-sub">${i.sub}</span>`:W}
      </button>
    `}_lang(){return this.hass?.locale?.language||this.hass?.language||"en"}_num(e,t){return new Intl.NumberFormat(this._lang(),{maximumFractionDigits:t}).format(e)}_lastChange(e){let t;for(const o of e){const e=Date.parse(this.hass.states[o]?.last_changed??"");!Number.isNaN(e)&&(void 0===t||e>t)&&(t=e)}return t}_ago(e){const t=Math.max(0,(Date.now()-e)/1e3),o=this._lang(),i=(e,t)=>new Intl.NumberFormat(o,{style:"unit",unit:t,unitDisplay:"short"}).format(e);return t<60?Ye(this.hass,"since_now"):t<3600?i(Math.floor(t/60),"minute"):t<86400?i(Math.floor(t/3600),"hour"):i(Math.floor(t/86400),"day")}_formatState(e){try{return this.hass?.formatEntityState?.(e)??e.state}catch{return e.state}}_entityName(e){if(!e)return"";const t=e.attributes.friendly_name??e.entity_id,o=this.hass?.areas?.[this._config.area]?.name;if(o&&t.toLowerCase().startsWith(o.toLowerCase()+" ")){const e=t.slice(o.length+1).trim();return e?e.charAt(0).toUpperCase()+e.slice(1):t}return t}}Ct.styles=[vt,yt],Ct.ROOM_LIMIT=8,e([pe({attribute:!1})],Ct.prototype,"hass",void 0),e([pe({reflect:!0})],Ct.prototype,"layout",void 0),e([pe({type:Boolean,reflect:!0})],Ct.prototype,"dark",void 0),e([he()],Ct.prototype,"_config",void 0),e([he()],Ct.prototype,"_popup",void 0),e([he()],Ct.prototype,"_tiles",void 0),e([he()],Ct.prototype,"_room",void 0),e([he()],Ct.prototype,"_roomTiles",void 0),e([he()],Ct.prototype,"_roomUi",void 0),e([he()],Ct.prototype,"_labelRegistry",void 0),customElements.get("area-pulse-card")||(customElements.define("area-pulse-card",Ct),window.customCards=window.customCards||[],window.customCards.push({type:"area-pulse-card",name:"Area Pulse Card",description:"Presence, climate, openings, alerts and quick actions for an area.",preview:!0}),console.info("%c AREA-PULSE-CARD %c v1.1.0 ","color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px","color:#03a9f4;background:#fff0;font-weight:700;padding:2px 4px"));export{Ct as AreaPulseCard};
