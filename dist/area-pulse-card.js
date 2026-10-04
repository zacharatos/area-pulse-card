function e(e,t,i,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const a=n.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,n){if(void 0!==e){const a=this.constructor;if(!1===o&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??y)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,A=$.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+E,O=`<${P}>`,M=document,N=()=>M.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,L="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,T=/>/g,j=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,J=M.createTreeWalker(M,129);function G(e,t){if(!H(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,o=[];let n,a=2===t?"<svg>":3===t?"<math>":"",s=U;for(let t=0;t<i;t++){const i=e[t];let r,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===U?"!--"===c[1]?s=D:void 0!==c[1]?s=T:void 0!==c[2]?(q.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=n??U,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,r=c[1],s=void 0===c[3]?j:'"'===c[3]?I:R):s===I||s===R?s=j:s===D||s===T?s=U:(s=j,n=void 0);const p=s===j&&e[t+1].startsWith("/>")?" ":"";a+=s===U?i+O:l>=0?(o.push(r),i.slice(0,l)+S+i.slice(l)+E+p):i+E+(-2===l?t:p)}return[G(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Z{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,a=0;const s=e.length-1,r=this.parts,[c,l]=Y(e,t);if(this.el=Z.createElement(c,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=J.nextNode())&&r.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=l[a++],i=o.getAttribute(e).split(E),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(E)&&(r.push({type:6,index:n}),o.removeAttribute(e));if(q.test(o.tagName)){const e=o.textContent.split(E),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],N()),J.nextNode(),r.push({type:2,index:++n});o.append(e[t],N())}}}else if(8===o.nodeType)if(o.data===P)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(E,e+1));)r.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,o){if(t===F)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const a=z(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??M).importNode(t,!0);J.currentNode=o;let n=J.nextNode(),a=0,s=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new X(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new ne(n,this,e)),this._$AV.push(t),r=i[++s]}a!==r?.index&&(n=J.nextNode(),a++)}return J.currentNode=M,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),z(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>H(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}k(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new X(this.O(N()),this.O(N()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const n=this.strings;let a=!1;if(void 0===n)e=K(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const o=e;let s,r;for(e=n[0],s=0;s<n.length-1;s++)r=K(this,o[i+s],t,s),r===F&&(r=this._$AH[s]),a||=!z(r)||r!==this._$AH[s],r===W?e=W:e!==W&&(e+=(r??"")+n[s+1]),this._$AH[s]=r}a&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??W)===F)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(Z,X),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let re=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new X(t.insertBefore(N(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};re._$litElement$=!0,re.finalized=!0,se.litElementHydrateSupport?.({LitElement:re});const ce=se.litElementPolyfillSupport;ce?.({LitElement:re}),(se.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},de=(e=le,t,i)=>{const{kind:o,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function he(e){return pe({...e,state:!0,attribute:!1})}const _e=1,ue=6,me=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ge=me(class extends fe{constructor(e){if(super(e),e.type!==_e||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return F}}),ve="important",be=" !"+ve,ye=me(class extends fe{constructor(e){if(super(e),e.type!==_e||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(be);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?ve:""):i[e]=o}}return F}}),we={active:!1,include:new Set,exclude:new Set,match:"any",fromDevice:!0,includeNames:[]};function xe(e){return(Array.isArray(e)?e:null==e?[]:[e]).map(e=>String(e).trim()).filter(Boolean)}function $e(e){return!!e&&(xe(e.include).length>0||xe(e.exclude).length>0)}function ke(e,t){if(!t)return e;const i=t.find(t=>t.label_id===e);if(i)return i.label_id;const o=e.toLowerCase(),n=t.find(e=>e.name.toLowerCase()===o);return n?n.label_id:e}function Ae(e,t){if(!$e(e))return we;const i=xe(e.include),o=xe(e.exclude);return{active:!0,include:new Set(i.map(e=>ke(e,t))),exclude:new Set(o.map(e=>ke(e,t))),match:"all"===e.match?"all":"any",fromDevice:!1!==e.from_device,includeNames:i}}function Ce(e,t,i){if(!i.active)return!0;const o=new Set(e??[]);if(i.fromDevice)for(const e of t??[])o.add(e);for(const e of i.exclude)if(o.has(e))return!1;if(0===i.include.size)return!0;const n=[...i.include];return"all"===i.match?n.every(e=>o.has(e)):n.some(e=>o.has(e))}let Se;const Ee=["moisture","smoke","gas","carbon_monoxide","safety","problem","tamper"],Pe=["alerts","motion","doors","windows","climate","lights","switches","fans","covers","locks","media","batteries"],Oe=["motion","doors","windows"],Me=["illuminance","carbon_dioxide","pm25","volatile_organic_compounds","pressure","power","energy","sound_pressure"],Ne=new Set(["power","energy","gas","water","current"]),ze=new Set(["unavailable","unknown"]);function He(e,t,i=[],o=we){const n=[],a=[];let s=0;const r=new Set(i);for(const i of Object.values(e.entities||{})){if(i.hidden||r.has(i.entity_id))continue;if(!e.states[i.entity_id])continue;const c=i.device_id?e.devices?.[i.device_id]:void 0;if((i.area_id??c?.area_id)!==t)continue;if("config"===i.entity_category)continue;const l="diagnostic"!==i.entity_category;l&&s++,Ce(i.labels,c?.labels,o)&&(a.push(i.entity_id),l&&n.push(i.entity_id))}return{primary:n,withDiagnostic:a,unfilteredCount:s}}const Le=e=>e.split(".")[0],Ue=e=>e.attributes.device_class,De=e=>!!e&&!ze.has(e.state);function Te(e,t,i){return t.filter(t=>{const o=e.states[t];return"binary_sensor"===Le(t)&&!!o&&i.includes(Ue(o)??"")})}function je(e,t,i,o){const n=i.filter(t=>{const i=e.states[t];return De(i)&&o(i)});let a;for(const t of i){const i=Date.parse(e.states[t]?.last_changed??"");!Number.isNaN(i)&&(void 0===a||i>a)&&(a=i)}return{id:t,entities:i,active:n,lastChanged:a}}function Re(e,t,i){const o=i.primary,n=e=>o.filter(t=>Le(t)===e),a={},s=e=>{e.entities.length&&(a[e.id]=e)},r=t.presence_entities?.length?t.presence_entities.filter(t=>e.states[t]):Te(e,o,["occupancy","presence"]),c=Te(e,o,["motion"]);s(je(e,"presence",r.length?r:c,e=>["on","home","detected"].includes(e.state))),s(je(e,"motion",c,e=>"on"===e.state)),s(je(e,"doors",Te(e,o,["door","garage_door","opening"]),e=>"on"===e.state)),s(je(e,"windows",Te(e,o,["window"]),e=>"on"===e.state)),s(je(e,"covers",n("cover"),e=>["open","opening"].includes(e.state))),s(je(e,"locks",n("lock"),e=>["unlocked","open","opening","jammed"].includes(e.state))),s(je(e,"lights",n("light"),e=>"on"===e.state)),s(je(e,"fans",n("fan"),e=>"on"===e.state)),s(je(e,"switches",n("switch"),e=>"on"===e.state)),s(je(e,"media",n("media_player"),e=>"playing"===e.state)),s(je(e,"climate",n("climate"),e=>["heating","cooling","drying","fan"].includes(String(e.attributes.hvac_action??""))||!e.attributes.hvac_action&&"off"!==e.state)),s(je(e,"alerts",Te(e,o,t.alert_classes??Ee),e=>"on"===e.state));const l=t.battery_threshold??20,d=i.withDiagnostic.filter(t=>{const i=e.states[t];return"battery"===Ue(i)&&("sensor"===Le(t)||"binary_sensor"===Le(t))});return s(je(e,"batteries",d,e=>"binary_sensor"===Le(e.entity_id)?"on"===e.state:Number(e.state)<=l)),a}function Ie(e,t,i,o){if(o&&e.states[o]){const t=e.states[o],n=Number(t.state);if(!De(t)||Number.isNaN(n))return;return{deviceClass:i,value:n,unit:String(t.attributes.unit_of_measurement??""),entities:[o]}}const n=t.primary.map(t=>e.states[t]).filter(e=>"sensor"===Le(e.entity_id)&&Ue(e)===i&&De(e)&&!Number.isNaN(Number(e.state)));if(!n.length)return;const a=String(n[0].attributes.unit_of_measurement??""),s=n.filter(e=>String(e.attributes.unit_of_measurement??"")===a),r=s.map(e=>Number(e.state)),c=Ne.has(i)?r.reduce((e,t)=>e+t,0):function(e){const t=[...e].sort((e,t)=>e-t),i=Math.floor(t.length/2);return t.length%2?t[i]:(t[i-1]+t[i])/2}(r);return{deviceClass:i,value:c,unit:a,entities:s.map(e=>e.entity_id)}}function qe(e,t,i){const[o,n]=Array.isArray(t)?t:[t?.min??i[0],t?.max??i[1]];return e<o?"low":e>n?"high":"ok"}const Be=/ceiling|main|overhead|central|chandelier|κεντρικ|ταβάν|οροφ/i;function Fe(e){if(!e||"on"!==e.state)return;const t=e.attributes.rgb_color;if(Array.isArray(t)&&3===t.length)return[t[0],t[1],t[2]];const i=e.attributes.color_temp_kelvin;if("number"==typeof i)return function(e){const t=e/100,i=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592),o=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492),n=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[We(i),We(o),We(n)]}(i);const o=e.attributes.hs_color;return Array.isArray(o)&&2===o.length?function(e,t){const i=t/100,o=t=>{const o=(t+e/60)%6;return 255*(1-i*Math.max(0,Math.min(o,4-o,1)))};return[We(o(5)),We(o(3)),We(o(1))]}(o[0],o[1]):void 0}function We(e){return Math.max(0,Math.min(255,Math.round(e)))}const Ve={occupied:"Occupied",clear:"Clear",motion:"Motion",no_motion:"No motion",door_open:"{n} door open",doors_open:"{n} doors open",doors_closed:"Doors closed",window_open:"{n} window open",windows_open:"{n} windows open",windows_closed:"Windows closed",cover_open:"{n} cover open",covers_open_n:"{n} covers open",covers_closed:"Covers closed",lock_unlocked:"{n} unlocked",locks_locked:"Locked",light_on:"{n} light on",lights_on_n:"{n} lights on",lights_off_all:"Lights off",fan_on:"{n} fan on",fans_on_n:"{n} fans on",fans_off_all:"Fans off",media_playing:"Playing",media_idle:"Media idle",climate_heating:"Heating",climate_cooling:"Cooling",climate_drying:"Drying",climate_fan:"Fan",climate_idle:"Idle",climate_off:"Climate off",alert:"Alert",alerts_n:"{n} alerts",battery_low:"{n} low battery",batteries_low:"{n} low batteries",for:"for {t}",since_now:"just now",area_not_found:'Area "{area}" was not found.',no_label_match:"No entity in this area has the label {labels}. Add it in Settings → Areas, labels & zones → Labels.",pick_area:"Pick an area in the card editor.",switch_on:"{n} switch on",switches_on_n:"{n} switches on",switches_off_all:"Switches off",turn_all_on:"All on",turn_all_off:"All off",open_all:"Open all",close_all:"Close all",pause_all:"Pause all",n_of_m_active:"{n} of {m} active",close:"Close",toggle_light:"Toggle {name}",ed_section_labels:"Filter by labels",ed_label_include:"Only show entities with these labels",ed_label_exclude:"Hide entities with these labels",ed_label_match:"An entity needs",ed_label_match_any:"At least one of the labels",ed_label_match_all:"All of the labels",ed_label_from_device:"Also use the device's labels",ed_main_light:"Main light (default: auto-detect)",ed_link_main_light:"Area icon toggles the main light",ed_top_groups:"First row (the rest go in the second row)",ed_color_temp_low:"Cold temperature color",ed_color_temp_high:"Warm temperature color",ed_color_hum_low:"Dry air color",ed_color_hum_high:"Humid air color",g_switches:"Switches & plugs",preset_lights_toggle:"Lights",preset_lights_on:"Lights on",preset_lights_off:"Lights off",preset_covers_open:"Open covers",preset_covers_close:"Close covers",preset_fans_off:"Fans off",preset_media_stop:"Stop media",preset_vacuum_area:"Vacuum",preset_everything_off:"All off",confirm_vacuum:"Send the vacuum to clean {area}?",confirm_everything_off:"Turn off everything in {area}?",ed_area:"Area",ed_name:"Name",ed_icon:"Icon",ed_color:"Accent color",ed_layout:"Layout",ed_layout_default:"Default",ed_layout_compact:"Compact",ed_show_picture:"Show area picture",ed_show_inactive:'Show inactive groups (e.g. "Windows closed")',ed_section_climate:"Climate & sensors",ed_section_status:"Status & alerts",ed_section_interactions:"Card interactions",ed_section_actions:"Quick actions",ed_temperature_entity:"Temperature sensor (default: area setting or median)",ed_humidity_entity:"Humidity sensor (default: area setting or median)",ed_sensor_classes:"Extra sensor readings",ed_comfort_temp_min:"Comfort temperature min",ed_comfort_temp_max:"Comfort temperature max",ed_comfort_hum_min:"Comfort humidity min",ed_comfort_hum_max:"Comfort humidity max",ed_groups:"Status groups",ed_alert_classes:"Alert device classes",ed_presence_entities:"Presence entities (default: auto-detect)",ed_exclude_entities:"Exclude entities",ed_battery_threshold:"Low battery threshold (%)",ed_tap_action:"Tap action",ed_hold_action:"Hold action",ed_double_tap_action:"Double tap action",ed_preset:"Preset",ed_preset_none:"Custom",ed_entity:"Entity",ed_add_action:"Add quick action",ed_remove:"Remove",ed_move_up:"Move up",ed_move_down:"Move down",ed_action_n:"Action {n}",ed_vacuum_hint:"Pick the vacuum entity. Uses vacuum.clean_area (HA 2026.3+), so map the vacuum's segments to areas first.",g_presence:"Presence",g_motion:"Motion",g_doors:"Doors",g_windows:"Windows",g_covers:"Covers",g_locks:"Locks",g_lights:"Lights",g_fans:"Fans",g_media:"Media",g_climate:"Climate",g_alerts:"Safety alerts",g_batteries:"Batteries"},Je={en:Ve,el:{occupied:"Κατειλημμένο",clear:"Άδειο",motion:"Κίνηση",no_motion:"Χωρίς κίνηση",door_open:"{n} πόρτα ανοιχτή",doors_open:"{n} πόρτες ανοιχτές",doors_closed:"Πόρτες κλειστές",window_open:"{n} παράθυρο ανοιχτό",windows_open:"{n} παράθυρα ανοιχτά",windows_closed:"Παράθυρα κλειστά",cover_open:"{n} ρολό ανοιχτό",covers_open_n:"{n} ρολά ανοιχτά",covers_closed:"Ρολά κλειστά",lock_unlocked:"{n} ξεκλείδωτη",locks_locked:"Κλειδωμένο",light_on:"{n} φως αναμμένο",lights_on_n:"{n} φώτα αναμμένα",lights_off_all:"Φώτα σβηστά",fan_on:"{n} ανεμιστήρας",fans_on_n:"{n} ανεμιστήρες",fans_off_all:"Ανεμιστήρες off",media_playing:"Αναπαραγωγή",media_idle:"Media σε αναμονή",climate_heating:"Θέρμανση",climate_cooling:"Ψύξη",climate_drying:"Αφύγρανση",climate_fan:"Ανεμιστήρας",climate_idle:"Αδρανές",climate_off:"Κλιματισμός off",alert:"Συναγερμός",alerts_n:"{n} ειδοποιήσεις",battery_low:"{n} χαμηλή μπαταρία",batteries_low:"{n} χαμηλές μπαταρίες",for:"εδώ και {t}",since_now:"μόλις τώρα",area_not_found:'Ο χώρος "{area}" δεν βρέθηκε.',no_label_match:"Καμία οντότητα σε αυτόν τον χώρο δεν έχει την ετικέτα {labels}. Πρόσθεσέ την από Ρυθμίσεις → Χώροι, ετικέτες & ζώνες → Ετικέτες.",pick_area:"Επίλεξε χώρο στον επεξεργαστή της κάρτας.",switch_on:"{n} διακόπτης on",switches_on_n:"{n} διακόπτες on",switches_off_all:"Διακόπτες off",turn_all_on:"Όλα on",turn_all_off:"Όλα off",open_all:"Άνοιγμα όλων",close_all:"Κλείσιμο όλων",pause_all:"Παύση όλων",n_of_m_active:"{n} από {m} ενεργά",close:"Κλείσιμο",toggle_light:"Εναλλαγή {name}",g_switches:"Διακόπτες & πρίζες",preset_lights_toggle:"Φώτα",preset_lights_on:"Άναμμα φώτων",preset_lights_off:"Σβήσιμο φώτων",preset_covers_open:"Άνοιγμα ρολών",preset_covers_close:"Κλείσιμο ρολών",preset_fans_off:"Ανεμιστήρες off",preset_media_stop:"Stop media",preset_vacuum_area:"Σκούπισμα",preset_everything_off:"Όλα off",confirm_vacuum:"Να σκουπίσει η σκούπα τον χώρο {area};",confirm_everything_off:"Να σβήσουν όλα στον χώρο {area};",g_presence:"Παρουσία",g_motion:"Κίνηση",g_doors:"Πόρτες",g_windows:"Παράθυρα",g_covers:"Ρολά",g_locks:"Κλειδαριές",g_lights:"Φώτα",g_fans:"Ανεμιστήρες",g_media:"Media",g_climate:"Κλιματισμός",g_alerts:"Ειδοποιήσεις ασφαλείας",g_batteries:"Μπαταρίες"}};function Ge(e,t,i={}){const o=(e?.locale?.language||e?.language||"en").split("-")[0];let n=Je[o]?.[t]??Ve[t]??t;for(const[e,t]of Object.entries(i))n=n.replace(`{${e}}`,String(t));return n}const Ye=["lights_toggle","lights_on","lights_off","covers_open","covers_close","fans_off","media_stop","vacuum_area","everything_off"],Ze=new Set(["on","open","opening","playing","unlocked","cleaning","heat","cool","auto","heat_cool","dry","fan_only"]);function Ke(e,t,i={}){return{action:"perform-action",perform_action:e,target:{area_id:t},...i}}const Qe=new Set(["light","switch","fan","media_player","input_boolean","climate"]);function Xe(e){const t=e.split(".")[0];return"scene"===t||"script"===t?{action:"perform-action",perform_action:`${t}.turn_on`,target:{entity_id:e}}:"button"===t||"input_button"===t?{action:"perform-action",perform_action:`${t}.press`,target:{entity_id:e}}:"vacuum"===t?{action:"more-info",entity:e}:{action:"toggle",entity:e}}const et={light:"mdi:lightbulb",switch:"mdi:toggle-switch-variant",fan:"mdi:fan",cover:"mdi:window-shutter",scene:"mdi:palette",script:"mdi:script-text-play",media_player:"mdi:speaker",vacuum:"mdi:robot-vacuum",climate:"mdi:thermostat",lock:"mdi:lock",button:"mdi:gesture-tap-button"};function tt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function it(e){return/^(#|rgb|hsl|var\()/i.test(e)?e:"primary"===e||"accent"===e?`var(--${e}-color)`:`var(--${e}-color, ${e})`}const ot=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw new Error("actionHandler must be used on an element")}update(e,[t]){const i=e.element;return i.__apcOptions=t??{},function(e){if(e.__apcBound)return;let t,i;e.__apcBound=!0;let o=!1,n=0,a=0;const s=t=>e.dispatchEvent(new CustomEvent("apc-action",{detail:{action:t},bubbles:!1,composed:!1})),r=()=>{t&&window.clearTimeout(t),t=void 0};e.addEventListener("pointerdown",i=>{e.__apcOptions?.disabled||0!==i.button||(o=!1,n=i.clientX,a=i.clientY,e.__apcOptions?.hasHold&&(t=window.setTimeout(()=>{o=!0,t=void 0,navigator.vibrate&&navigator.vibrate(30),s("hold")},500)))}),e.addEventListener("pointermove",e=>{t&&(Math.abs(e.clientX-n)>10||Math.abs(e.clientY-a)>10)&&r()}),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r),e.addEventListener("contextmenu",t=>{e.__apcOptions?.hasHold&&t.preventDefault()}),e.addEventListener("pointerup",n=>{if(e.__apcOptions?.disabled||0!==n.button)return;const a=!!t;r(),o?o=!1:!a&&e.__apcOptions?.hasHold||(e.__apcOptions?.hasDoubleTap?i?(window.clearTimeout(i),i=void 0,s("double_tap")):i=window.setTimeout(()=>{i=void 0,s("tap")},250):s("tap"))}),e.addEventListener("keydown",t=>{e.__apcOptions?.disabled||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),s("tap"))})}(i),F}render(e){return F}}),nt=s`
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
`,at=s`
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
  }
  @media (max-width: 360px) {
    .popup-grid { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog.apc-popup[open] .popup-surface { animation: none; }
  }
`,st=[...Ee,"vibration","cold","heat","sound","light"];function rt(e){const t={};for(const[i,o]of Object.entries(e))null!=o&&""!==o&&(Array.isArray(o)&&0===o.length||(t[i]=o));return t}class ct extends re{constructor(){super(...arguments),this._open=new Set,this._ready=!1,this._t=(e,t)=>Ge(this.hass,e,t),this._label=e=>{const t={area:"ed_area",name:"ed_name",icon:"ed_icon",color:"ed_color",layout:"ed_layout",show_picture:"ed_show_picture",show_inactive:"ed_show_inactive",temperature_entity:"ed_temperature_entity",humidity_entity:"ed_humidity_entity",sensor_classes:"ed_sensor_classes",comfort_temp_min:"ed_comfort_temp_min",comfort_temp_max:"ed_comfort_temp_max",comfort_hum_min:"ed_comfort_hum_min",comfort_hum_max:"ed_comfort_hum_max",groups:"ed_groups",top_groups:"ed_top_groups",label_include:"ed_label_include",label_exclude:"ed_label_exclude",label_match:"ed_label_match",label_from_device:"ed_label_from_device",main_light:"ed_main_light",link_main_light:"ed_link_main_light",color_temp_low:"ed_color_temp_low",color_temp_high:"ed_color_temp_high",color_hum_low:"ed_color_hum_low",color_hum_high:"ed_color_hum_high",alert_classes:"ed_alert_classes",presence_entities:"ed_presence_entities",exclude_entities:"ed_exclude_entities",battery_threshold:"ed_battery_threshold",tap_action:"ed_tap_action",hold_action:"ed_hold_action",double_tap_action:"ed_double_tap_action",preset:"ed_preset",entity:"ed_entity"};return t[e.name]?this._t(t[e.name]):e.name}}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-form")||!customElements.get("ha-selector"))try{const e=await(window.loadCardHelpers?.()),t=await(e?.createCardElement({type:"entities",entities:[]}));await(t?.constructor?.getConfigElement?.())}catch{}}().then(()=>this._ready=!0)}setConfig(e){this._config=e}_mainSchema(){const e=this._t;return[{name:"area",required:!0,selector:{area:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{type:"grid",name:"",schema:[{name:"color",selector:{ui_color:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:e("ed_layout_default")},{value:"compact",label:e("ed_layout_compact")}]}}}]},{name:"show_picture",selector:{boolean:{}}},{name:"link_main_light",selector:{boolean:{}}},{name:"main_light",selector:{entity:{filter:{domain:"light"}}}},{type:"expandable",name:"",title:e("ed_section_climate"),icon:"mdi:thermometer",flatten:!0,schema:[{name:"temperature_entity",selector:{entity:{filter:{domain:"sensor",device_class:"temperature"}}}},{name:"humidity_entity",selector:{entity:{filter:{domain:"sensor",device_class:"humidity"}}}},{type:"grid",name:"",schema:[{name:"comfort_temp_min",selector:{number:{mode:"box",step:.5}}},{name:"comfort_temp_max",selector:{number:{mode:"box",step:.5}}},{name:"comfort_hum_min",selector:{number:{mode:"box",min:0,max:100}}},{name:"comfort_hum_max",selector:{number:{mode:"box",min:0,max:100}}}]},{type:"grid",name:"",schema:[{name:"color_temp_low",selector:{ui_color:{}}},{name:"color_temp_high",selector:{ui_color:{}}},{name:"color_hum_low",selector:{ui_color:{}}},{name:"color_hum_high",selector:{ui_color:{}}}]},{name:"sensor_classes",selector:{select:{multiple:!0,mode:"list",options:Me.map(e=>({value:e,label:e.replace(/_/g," ")}))}}}]},{type:"expandable",name:"",title:e("ed_section_status"),icon:"mdi:list-status",flatten:!0,schema:[{name:"show_inactive",selector:{boolean:{}}},{name:"groups",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:Pe.filter(e=>"presence"!==e).map(t=>({value:t,label:e(`g_${t}`)}))}}},{name:"top_groups",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:Pe.filter(e=>"presence"!==e&&"alerts"!==e).map(t=>({value:t,label:e(`g_${t}`)}))}}},{name:"alert_classes",selector:{select:{multiple:!0,mode:"dropdown",options:st.map(e=>({value:e,label:e.replace(/_/g," ")}))}}},{name:"presence_entities",selector:{entity:{multiple:!0,filter:[{domain:"binary_sensor"},{domain:"person"},{domain:"input_boolean"}]}}},{name:"exclude_entities",selector:{entity:{multiple:!0}}},{name:"battery_threshold",selector:{number:{min:1,max:100,mode:"slider",unit_of_measurement:"%"}}}]},{type:"expandable",name:"",title:e("ed_section_labels"),icon:"mdi:label-multiple-outline",flatten:!0,schema:[{name:"label_include",selector:{label:{multiple:!0}}},{name:"label_exclude",selector:{label:{multiple:!0}}},{name:"label_match",selector:{select:{mode:"dropdown",options:[{value:"any",label:e("ed_label_match_any")},{value:"all",label:e("ed_label_match_all")}]}}},{name:"label_from_device",selector:{boolean:{}}}]},{type:"expandable",name:"",title:e("ed_section_interactions"),icon:"mdi:gesture-tap",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}]}_actionSchema(e){const t=this._t;return[{name:"preset",selector:{select:{mode:"dropdown",options:[{value:"",label:t("ed_preset_none")},...Ye.map(e=>({value:e,label:t(`preset_${e}`)}))]}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"entity",selector:{entity:"vacuum_area"===e.preset?{filter:{domain:"vacuum"}}:{}}},{name:"color",selector:{ui_color:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}]}_formData(){const e=this._config,t=e=>Array.isArray(e)?{min:e[0],max:e[1]}:e??{},i=t(e.comfort_temperature),o=t(e.comfort_humidity);return{layout:"default",show_picture:!0,show_inactive:!1,battery_threshold:20,link_main_light:!0,top_groups:Oe,...e,label_include:xe(e.label_filter?.include),label_exclude:xe(e.label_filter?.exclude),label_match:e.label_filter?.match??"any",label_from_device:e.label_filter?.from_device??!0,color_temp_low:e.colors?.temperature_low,color_temp_high:e.colors?.temperature_high,color_hum_low:e.colors?.humidity_low,color_hum_high:e.colors?.humidity_high,comfort_temp_min:i.min,comfort_temp_max:i.max,comfort_hum_min:o.min,comfort_hum_max:o.max}}_mainChanged(e){e.stopPropagation();const t={...e.detail.value},i=(e,t)=>void 0===e&&void 0===t?void 0:rt({min:e,max:t}),o=i(t.comfort_temp_min,t.comfort_temp_max),n=i(t.comfort_hum_min,t.comfort_hum_max);delete t.comfort_temp_min,delete t.comfort_temp_max,delete t.comfort_hum_min,delete t.comfort_hum_max;const a=rt({temperature_low:t.color_temp_low,temperature_high:t.color_temp_high,humidity_low:t.color_hum_low,humidity_high:t.color_hum_high});for(const e of["color_temp_low","color_temp_high","color_hum_low","color_hum_high"])delete t[e];const s=rt({include:t.label_include,exclude:t.label_exclude,match:"all"===t.label_match?"all":void 0,from_device:!1!==t.label_from_device&&void 0});for(const e of["label_include","label_exclude","label_match","label_from_device"])delete t[e];t.label_filter=Object.keys(s).length?s:void 0,t.colors=Object.keys(a).length?a:void 0,JSON.stringify(t.top_groups)===JSON.stringify(Oe)&&delete t.top_groups;const r=rt({...t,comfort_temperature:o&&Object.keys(o).length?o:void 0,comfort_humidity:n&&Object.keys(n).length?n:void 0,actions:this._config?.actions});"default"===r.layout&&delete r.layout,!0===r.show_picture&&delete r.show_picture,!1===r.show_inactive&&delete r.show_inactive,20===r.battery_threshold&&delete r.battery_threshold,!0===r.link_main_light&&delete r.link_main_light,this._commit(r)}_actionChanged(e,t){t.stopPropagation();const i=[...this._config?.actions??[]];i[e]=rt({...t.detail.value}),this._commit({...this._config,actions:i})}_addAction(){const e=[...this._config?.actions??[],{preset:"lights_toggle"}];this._open=new Set([...this._open,e.length-1]),this._commit({...this._config,actions:e})}_removeAction(e){const t=[...this._config?.actions??[]];t.splice(e,1),this._open=new Set,this._commit(rt({...this._config,actions:t}))}_moveAction(e,t){const i=[...this._config?.actions??[]],o=e+t;o<0||o>=i.length||([i[e],i[o]]=[i[o],i[e]],this._open=new Set,this._commit({...this._config,actions:i}))}_toggleOpen(e){const t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t}_commit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config||!this._ready)return W;const e=this._config.actions??[];return B`
      <ha-form
        .hass=${this.hass}
        .data=${this._formData()}
        .schema=${this._mainSchema()}
        .computeLabel=${this._label}
        @value-changed=${this._mainChanged}
      ></ha-form>

      <div class="section">
        <div class="section-title"><ha-icon icon="mdi:gesture-tap-button"></ha-icon>${this._t("ed_section_actions")}</div>
        ${e.map((t,i)=>this._renderAction(t,i,e.length))}
        <button class="add" @click=${this._addAction}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("ed_add_action")}
        </button>
      </div>
    `}_renderAction(e,t,i){const o=this._open.has(t),n=e.name||(e.preset?this._t(`preset_${e.preset}`):e.entity)||this._t("ed_action_n",{n:t+1});return B`
      <div class="action-item">
        <div class="action-head">
          <button class="head-main" @click=${()=>this._toggleOpen(t)} aria-expanded=${String(o)}>
            <ha-icon .icon=${o?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            <span>${n}</span>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_up")} ?disabled=${0===t} @click=${()=>this._moveAction(t,-1)}>
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_down")} ?disabled=${t===i-1} @click=${()=>this._moveAction(t,1)}>
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
          <button class="icon-btn danger" title=${this._t("ed_remove")} @click=${()=>this._removeAction(t)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${o?B`
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
    `}}ct.styles=s`
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
  `,e([pe({attribute:!1})],ct.prototype,"hass",void 0),e([he()],ct.prototype,"_config",void 0),e([he()],ct.prototype,"_open",void 0),e([he()],ct.prototype,"_ready",void 0),customElements.get("area-pulse-card-editor")||customElements.define("area-pulse-card-editor",ct);const lt={presence:{icon:"mdi:account",iconOff:"mdi:account-outline",color:"var(--apc-green)"},motion:{icon:"mdi:motion-sensor",iconOff:"mdi:motion-sensor-off",color:"var(--apc-cyan)"},doors:{icon:"mdi:door-open",iconOff:"mdi:door-closed",color:"var(--apc-orange)"},windows:{icon:"mdi:window-open-variant",iconOff:"mdi:window-closed-variant",color:"var(--apc-orange)"},covers:{icon:"mdi:window-shutter-open",iconOff:"mdi:window-shutter",color:"var(--apc-purple)"},locks:{icon:"mdi:lock-open-variant",iconOff:"mdi:lock",color:"var(--apc-deep-orange)"},lights:{icon:"mdi:lightbulb-on",iconOff:"mdi:lightbulb-outline",color:"var(--apc-amber)"},fans:{icon:"mdi:fan",iconOff:"mdi:fan-off",color:"var(--apc-light-blue)"},switches:{icon:"mdi:power-socket-eu",iconOff:"mdi:power-plug-off-outline",color:"var(--apc-teal)"},media:{icon:"mdi:play-circle",iconOff:"mdi:speaker",color:"var(--apc-indigo)"},climate:{icon:"mdi:thermostat",iconOff:"mdi:thermostat",color:"var(--apc-deep-orange)"},alerts:{icon:"mdi:alert",iconOff:"mdi:shield-check",color:"var(--apc-red)"},batteries:{icon:"mdi:battery-alert-variant-outline",iconOff:"mdi:battery",color:"var(--apc-red)"}},dt={illuminance:"mdi:brightness-5",carbon_dioxide:"mdi:molecule-co2",pm25:"mdi:blur",pm10:"mdi:blur-radial",volatile_organic_compounds:"mdi:air-filter",volatile_organic_compounds_parts:"mdi:air-filter",pressure:"mdi:gauge",power:"mdi:flash",energy:"mdi:lightning-bolt",sound_pressure:"mdi:waveform",temperature:"mdi:thermometer",humidity:"mdi:water-percent"};class pt extends re{constructor(){super(...arguments),this.layout="default",this.dark=!1,this._onDialogClosed=()=>{if(this._reopen){const e=this._reopen;this._reopen=void 0,this._openPopup(e)}},this._labelsRequested=!1,this._indexDeps=[],this._watched=new Set,this._stop=e=>e.stopPropagation()}static getConfigElement(){return document.createElement("area-pulse-card-editor")}static getStubConfig(e){const t=Object.values(e?.areas??{});return{area:t[0]?.area_id??"",actions:[{preset:"lights_toggle"},{preset:"everything_off"}]}}setConfig(e){if(!e)throw new Error("Invalid configuration");if(e.actions&&!Array.isArray(e.actions))throw new Error("`actions` must be a list");if(e.label_filter&&("object"!=typeof e.label_filter||Array.isArray(e.label_filter)))throw new Error("`label_filter` must be a map with `include` and/or `exclude`");this._config={...e},this.layout="compact"===e.layout?"compact":"default",this._popup=void 0,this._indexDeps=[]}getCardSize(){const e=this._config?.actions?.length?1:0;return"compact"===this.layout?2+e:3+e}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),this._ticker=window.setInterval(()=>this.requestUpdate(),3e4),window.addEventListener("dialog-closed",this._onDialogClosed)}disconnectedCallback(){super.disconnectedCallback(),this._ticker&&window.clearInterval(this._ticker),window.removeEventListener("dialog-closed",this._onDialogClosed)}shouldUpdate(e){if(!this._config)return!1;if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass"),i=this.hass;if(i&&this._tiles)for(const e of this._tiles)e.hass=i;if(!t||!i)return!0;if(t.entities!==i.entities||t.devices!==i.devices||t.areas!==i.areas||t.locale!==i.locale||t.language!==i.language||t.themes!==i.themes)return!0;for(const e of this._watched)if(t.states[e]!==i.states[e])return!0;return!1}willUpdate(){const e=this.hass,t=this._config;if(!e||!t)return;this.dark=!!e.themes?.darkMode,this._ensureLabelRegistry();const i=[e.entities,e.devices,e.areas,t,this._labelRegistry];if(!this._index||i.some((e,t)=>e!==this._indexDeps[t])){this._labelFilter=Ae(t.label_filter,this._labelRegistry),this._index=He(e,t.area,t.exclude_entities??[],this._labelFilter),this._indexDeps=i;const o=e.areas?.[t.area];this._watched=function(e,t){const i=new Set(t.withDiagnostic);for(const t of[e.temperature_entity,e.humidity_entity,e.main_light,...e.presence_entities??[]])t&&i.add(t);for(const t of e.actions??[])t.entity&&i.add(t.entity);return i}(t,this._index),o?.temperature_entity_id&&this._watched.add(o.temperature_entity_id),o?.humidity_entity_id&&this._watched.add(o.humidity_entity_id)}}_ensureLabelRegistry(){var e;!this._labelsRequested&&this.hass&&$e(this._config?.label_filter)&&(this._labelsRequested=!0,(e=this.hass,Se||(Se=e.callWS({type:"config/label_registry/list"}).catch(e=>{throw Se=void 0,e})),Se).then(e=>this._labelRegistry=e).catch(()=>{}))}_getIndex(){const{hass:e,_config:t}=this;return this._index??He(e,t.area,t.exclude_entities??[],Ae(t.label_filter,this._labelRegistry))}render(){const e=this.hass,t=this._config;if(!e||!t)return W;if(!t.area)return this._warning(Ge(e,"pick_area"));const i=e.areas?.[t.area];if(!i)return this._warning(Ge(e,"area_not_found",{area:t.area}));const o=this._getIndex(),n=Re(e,t,o),a=Ie(e,o,"temperature",t.temperature_entity??i.temperature_entity_id),s=Ie(e,o,"humidity",t.humidity_entity??i.humidity_entity_id),r=(t.sensor_classes??[]).map(t=>Ie(e,o,t)).filter(e=>!!e),c=(t.actions??[]).map(t=>function(e,t,i,o,n,a=!1){const s=i.name,r=(e,t,n={})=>a?{action:"perform-action",perform_action:e,target:{entity_id:[...o[t]?.entities??[]]},...n}:Ke(e,i.area_id,n),c=(o.lights?.active.length??0)>0,l=t.entity?e.states[t.entity]:void 0;let d;switch(t.preset){case"lights_toggle":d={name:Ge(e,"preset_lights_toggle"),icon:c?"mdi:lightbulb-group":"mdi:lightbulb-group-off-outline",active:c,color:"var(--apc-amber)",disabled:!o.lights,tap_action:r(c?"light.turn_off":"light.turn_on","lights")};break;case"lights_on":d={name:Ge(e,"preset_lights_on"),icon:"mdi:lightbulb-on-outline",active:!1,color:"var(--apc-amber)",disabled:!o.lights,tap_action:r("light.turn_on","lights")};break;case"lights_off":d={name:Ge(e,"preset_lights_off"),icon:"mdi:lightbulb-off-outline",active:!1,color:"var(--apc-amber)",disabled:!o.lights,tap_action:r("light.turn_off","lights")};break;case"covers_open":d={name:Ge(e,"preset_covers_open"),icon:"mdi:window-shutter-open",active:!1,color:"var(--apc-purple)",disabled:!o.covers,tap_action:r("cover.open_cover","covers")};break;case"covers_close":d={name:Ge(e,"preset_covers_close"),icon:"mdi:window-shutter",active:!1,color:"var(--apc-purple)",disabled:!o.covers,tap_action:r("cover.close_cover","covers")};break;case"fans_off":d={name:Ge(e,"preset_fans_off"),icon:"mdi:fan-off",active:!1,color:"var(--apc-cyan)",disabled:!o.fans,tap_action:r("fan.turn_off","fans")};break;case"media_stop":d={name:Ge(e,"preset_media_stop"),icon:"mdi:stop-circle-outline",active:(o.media?.active.length??0)>0,color:"var(--apc-indigo)",disabled:!o.media,tap_action:r("media_player.media_stop","media")};break;case"vacuum_area":{const o="cleaning"===l?.state;d={name:Ge(e,"preset_vacuum_area"),icon:o?"mdi:robot-vacuum-variant":"mdi:robot-vacuum",active:o,color:"var(--apc-teal)",disabled:!t.entity,tap_action:{action:"perform-action",perform_action:"vacuum.clean_area",target:{entity_id:t.entity},data:{cleaning_area_id:[i.area_id]},confirmation:{text:Ge(e,"confirm_vacuum",{area:s})}}};break}case"everything_off":d={name:Ge(e,"preset_everything_off"),icon:"mdi:power",active:!1,color:"var(--apc-red)",disabled:!1,tap_action:{...a?{action:"perform-action",perform_action:"homeassistant.turn_off",target:{entity_id:n.primary.filter(e=>Qe.has(e.split(".")[0]))}}:Ke("homeassistant.turn_off",i.area_id),confirmation:{text:Ge(e,"confirm_everything_off",{area:s})}}};break;default:{const e=t.entity?.split(".")[0]??"";d={name:l?.attributes.friendly_name?.replace(new RegExp(`^${tt(s)}\\s*`,"i"),"")||t.entity||"Action",icon:l?.attributes.icon||et[e]||"mdi:gesture-tap",active:!!l&&Ze.has(l.state),color:"var(--apc-accent)",disabled:!(!t.entity||l&&"unavailable"!==l.state),tap_action:t.entity?Xe(t.entity):{action:"none"}}}}return{...d,name:t.name??d.name,icon:t.icon??d.icon,color:t.color?it(t.color):d.color,tap_action:t.tap_action??d.tap_action,hold_action:t.hold_action??(t.entity?{action:"more-info",entity:t.entity}:void 0),double_tap_action:t.double_tap_action,entity:t.entity}}(e,t,i,n,o,!!this._labelFilter?.active)),l=n.presence,d=!!l?.active.length,p=n.alerts?.active??[],h=t.color?it(t.color):void 0,_=!1!==t.show_picture&&!!i.picture,u=this._hasAction(t.tap_action)||this._hasAction(t.hold_action),m=function(e,t,i){if(!1===t.link_main_light)return;if(t.main_light)return e.states[t.main_light]?t.main_light:void 0;const o=i.primary.filter(e=>"light"===Le(e));return 1===o.length?o[0]:o.find(t=>Be.test(`${t} ${e.states[t]?.attributes.friendly_name??""}`))}(e,t,o),f=m?e.states[m]:void 0,g="on"===f?.state,v=g?f:(n.lights?.active??[]).map(t=>e.states[t]).find(e=>!!e),b=v?Fe(v)??[255,193,7]:void 0,y=Number(v?.attributes.brightness??255),w=.1+.12*Math.min(1,Math.max(0,y/255)),x=g?Fe(f)??[255,193,7]:void 0,$={};h&&($["--apc-accent"]=h),b&&($["--apc-glow-rgb"]=b.join(","),$["--apc-glow-alpha"]=w.toFixed(3)),x&&($["--apc-light-rgb"]=x.join(","));const k=t.colors??{};k.temperature_low&&($["--apc-temp-low"]=it(k.temperature_low)),k.temperature_high&&($["--apc-temp-high"]=it(k.temperature_high)),k.humidity_low&&($["--apc-hum-low"]=it(k.humidity_low)),k.humidity_high&&($["--apc-hum-high"]=it(k.humidity_high));const A={"area-icon":!0,occupied:d&&!m,linked:!!m,"light-on":g},C=B`<ha-icon .icon=${t.icon||i.icon||"mdi:texture-box"}></ha-icon>`,S=d?B`<span class="presence-dot"></span>`:W;return B`
      <ha-card class=${ge({alerting:p.length>0})} style=${ye($)}>
        ${_?B`<div class="picture" style=${ye({backgroundImage:`url("${i.picture}")`})}></div>`:W}
        <div class=${ge({glow:!0,on:!!b})}></div>
        <div class="content">
          <div
            class=${ge({header:!0,clickable:u})}
            role=${u?"button":W}
            tabindex=${u?"0":W}
            ${ot({hasHold:this._hasAction(t.hold_action),hasDoubleTap:this._hasAction(t.double_tap_action),disabled:!u})}
            @apc-action=${e=>this._cardAction(e.detail.action)}
          >
            ${m?B`<div
                  class=${ge(A)}
                  role="button"
                  tabindex="0"
                  aria-pressed=${String(g)}
                  aria-label=${Ge(e,"toggle_light",{name:this._entityName(f)})}
                  title=${this._entityName(f)}
                  ${ot({hasHold:!0})}
                  @apc-action=${e=>this._mainLightAction(m,e.detail.action)}
                  @pointerdown=${this._stop}
                  @pointerup=${this._stop}
                  @click=${this._stop}
                  @keydown=${this._stop}
                >
                  ${C}${S}
                </div>`:B`<div class=${ge(A)}>${C}${S}</div>`}
            <div class="titles">
              <div class="name">${t.name||i.name}</div>
              <div class="secondary">${this._secondary(n)}</div>
            </div>
            ${this._renderClimate(a,s)}
          </div>
          ${this._renderLabelHint(o)}
          ${p.length?this._renderAlertBanner(p):W}
          ${this._renderChips(n,r)}
          ${c.length?this._renderActions(c):W}
        </div>
      </ha-card>
      ${this._popup&&n[this._popup]?this._renderPopup(n[this._popup],i):W}
    `}_renderLabelHint(e){const t=this._labelFilter;return t?.active&&0!==t.include.size?e.primary.length>0||0===e.unfilteredCount?W:B`
      <div class="hint">
        <ha-icon icon="mdi:label-off-outline"></ha-icon>
        <span>${Ge(this.hass,"no_label_match",{labels:t.includeNames.join(", ")})}</span>
      </div>
    `:W}_warning(e){return B`<ha-card><div class="warning"><ha-icon icon="mdi:alert-outline"></ha-icon>${e}</div></ha-card>`}_secondary(e){const t=this.hass,i=[],o=e.presence;if(o){const e=o.active.length>0,n=this._lastChange(e?o.active:o.entities),a=Ge(t,e?"occupied":"clear");i.push(void 0!==n?`${a} ${Ge(t,"for",{t:this._ago(n)})}`:a)}const n=e.lights;if(n?.active.length&&i.push(Ge(t,1===n.active.length?"light_on":"lights_on_n",{n:n.active.length})),!i.length){const o=e.media;o?.active.length&&i.push(Ge(t,"media_playing"))}return i.map((e,t)=>B`${t?B`<span class="dot">·</span>`:W}${e}`)}_renderClimate(e,t){if(!e&&!t)return W;const i=this._config,o=e?.unit||"°",n=e?qe(e.value,i.comfort_temperature,o.includes("F")?[68,76]:[19,25]):"ok",a=t?qe(t.value,i.comfort_humidity,[35,65]):"ok";return B`
      <div class="climate">
        ${e?B`<div
              class="temp ${n}"
              title=${e.entities.length>1?`Median of ${e.entities.length} sensors`:""}
              @click=${t=>this._moreInfo(e.entities[0],t)}
            >
              ${this._num(e.value,1)}<span class="unit">${o}</span>
            </div>`:W}
        ${t?B`<div class="hum ${a}" @click=${e=>this._moreInfo(t.entities[0],e)}>
              <ha-icon .icon=${"low"===a?"mdi:water-percent-alert":"mdi:water-percent"}></ha-icon>${this._num(t.value,0)}${t.unit}
            </div>`:W}
      </div>
    `}_renderAlertBanner(e){const t=this.hass,i=t.states[e[0]],o=1===e.length?`${this._entityName(i)} · ${this._formatState(i)}`:`${Ge(t,"alerts_n",{n:e.length})}: ${e.map(e=>this._entityName(t.states[e])).join(", ")}`;return B`
      <div
        class="alert-banner"
        role="alert"
        @click=${()=>1===e.length?this._moreInfo(e[0]):this._openPopup("alerts")}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="text">${o}</span>
      </div>
    `}_renderChips(e,t){const i=this._config,o=(i.groups??Pe).filter(e=>"presence"!==e),n=new Set(i.top_groups??Oe),a=!0===i.show_inactive,s=[],r=[];for(const t of o){const i=e[t];i&&(("alerts"!==t||"compact"===this.layout&&i.active.length)&&("batteries"!==t||i.active.length)&&(i.active.length||a)&&(n.has(t)?s:r).push(this._groupChip(i)))}for(const e of t)r.push(this._statChip(e));return s.length||r.length?B`
      <div class="chip-rows">
        ${s.length?B`<div class="chips">${s}</div>`:W}
        ${r.length?B`<div class="chips">${r}</div>`:W}
      </div>
    `:W}_statChip(e){let t="";"carbon_dioxide"===e.deviceClass&&(t=e.value>=1500?"bad":e.value>=1e3?"warn":""),"pm25"===e.deviceClass&&(t=e.value>=35?"bad":e.value>=12?"warn":"");const i=Math.abs(e.value)>=100?0:1;return B`
      <button class="chip stat ${t}" @click=${()=>this._moreInfo(e.entities[0])}>
        <ha-icon .icon=${dt[e.deviceClass]??"mdi:gauge"}></ha-icon>
        <span class="label">${this._num(e.value,i)} ${e.unit}</span>
      </button>
    `}_groupChip(e){const t=lt[e.id],i=e.active.length>0;let o=t.color,n=i?t.icon:t.iconOff,a=this._groupLabel(e);if("climate"===e.id){const t=this.hass.states[e.active[0]??e.entities[0]],i=String(t?.attributes.hvac_action??("off"===t?.state?"off":"idle"));"cooling"===i?(o="var(--apc-blue)",n="mdi:snowflake"):"heating"===i?n="mdi:fire":"drying"===i?(o="var(--apc-amber)",n="mdi:water-percent"):"fan"===i&&(o="var(--apc-light-blue)",n="mdi:fan"),a=this._climateLabel(t,i)}return B`
      <button
        class=${ge({chip:!0,active:i,selected:this._popup===e.id})}
        style=${ye({"--c":o})}
        aria-haspopup=${e.entities.length>1?"dialog":W}
        @click=${()=>this._chipClick(e)}
      >
        <ha-icon .icon=${n}></ha-icon>
        <span class="label">${a}</span>
      </button>
    `}_groupLabel(e){const t=this.hass,i=e.active.length,o=(e,o,n)=>0===i?Ge(t,n):Ge(t,1===i?e:o,{n:i});switch(e.id){case"motion":return Ge(t,i?"motion":"no_motion");case"doors":return o("door_open","doors_open","doors_closed");case"windows":return o("window_open","windows_open","windows_closed");case"covers":return o("cover_open","covers_open_n","covers_closed");case"locks":return o("lock_unlocked","lock_unlocked","locks_locked");case"lights":return o("light_on","lights_on_n","lights_off_all");case"fans":return o("fan_on","fans_on_n","fans_off_all");case"switches":return o("switch_on","switches_on_n","switches_off_all");case"media":{if(!i)return Ge(t,"media_idle");const o=t.states[e.active[0]].attributes.media_title;return 1===i&&o?o:Ge(t,"media_playing")}case"alerts":return 1===i?Ge(t,"alert"):Ge(t,"alerts_n",{n:i});case"batteries":return Ge(t,1===i?"battery_low":"batteries_low",{n:i});default:return""}}_climateLabel(e,t){const i=this.hass;if(!e)return"";const o=`climate_${t}`,n=["heating","cooling","drying","fan","idle","off"].includes(t)?Ge(i,o):this._formatState(e),a=e.attributes.temperature,s=e.attributes.target_temp_low,r=e.attributes.target_temp_high;return"off"===e.state?n:"number"==typeof a?`${n} · ${this._num(a,1)}°`:"number"==typeof s&&"number"==typeof r?`${n} · ${this._num(s,0)}–${this._num(r,0)}°`:n}_renderActions(e){return B`
      <div class=${ge({actions:!0,dense:e.length>=4})}>
        ${e.map(e=>B`
            <button
              class=${ge({action:!0,active:e.active})}
              style=${ye({"--c":e.color})}
              title=${e.name}
              aria-label=${e.name}
              ?disabled=${e.disabled}
              ${ot({hasHold:this._hasAction(e.hold_action),hasDoubleTap:this._hasAction(e.double_tap_action),disabled:e.disabled})}
              @apc-action=${t=>this._quickAction(e,t.detail.action)}
            >
              <ha-icon .icon=${e.icon}></ha-icon>
              <span class="label">${e.name}</span>
            </button>
          `)}
      </div>
    `}_hasAction(e){return!!e&&"none"!==e.action}_chipClick(e){1!==e.entities.length?this._openPopup(e.id):this._moreInfo(e.entities[0])}_mainLightAction(e,t){"hold"===t?this._moreInfo(e):this._fireAction({entity:e,tap_action:{action:"toggle"}},"tap")}_cardAction(e){const t=this._config;this._fireAction({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},e)}_quickAction(e,t){this._fireAction({entity:e.entity,tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},t)}_fireAction(e,t){const i=e[`${t}_action`];this._hasAction(i)&&this.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:e,action:t}}))}_moreInfo(e,t){t?.stopPropagation(),e&&(this._popup&&this._onPopupMoreInfo(),this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}})))}_currentGroups(){return this.hass&&this._config?Re(this.hass,this._config,this._getIndex()):{}}_sortedEntities(e){return[...e.entities].sort((t,i)=>Number(e.active.includes(i))-Number(e.active.includes(t))||this._entityName(this.hass.states[t]).localeCompare(this._entityName(this.hass.states[i])))}async _openPopup(e){const t=this._currentGroups()[e];if(!t)return;let i;this._popup=e,this._tiles=void 0;try{i=await(window.loadCardHelpers?.())}catch{i=void 0}if(this._popup!==e)return;if(!i)return void(this._tiles=null);const o=await Promise.all(this._sortedEntities(t).map(async e=>{const t=await i.createCardElement(this._tileConfig(e));return t.hass=this.hass,t}));this._popup===e&&(this._tiles=o)}_tileConfig(e){const t=this.hass.states[e],i=e.split(".")[0],o=[];if("light"===i){(t?.attributes.supported_color_modes??[]).some(e=>"onoff"!==e)&&o.push({type:"light-brightness"})}else"cover"===i?o.push({type:"cover-open-close"}):"climate"===i&&o.push({type:"target-temperature"});return{type:"tile",entity:e,name:this._entityName(t),...o.length?{features:o,features_position:"bottom"}:{}}}_closePopup(){this.renderRoot.querySelector("dialog.apc-popup")?.close()}_onPopupClosed(){this._popup=void 0,this._tiles=void 0}_onPopupClick(e){e.target===e.currentTarget&&this._closePopup()}_onPopupMoreInfo(){this._reopen=this._popup,this._closePopup()}updated(){const e=this.renderRoot.querySelector("dialog.apc-popup");if(e&&!e.open)try{e.showModal()}catch{e.setAttribute("open","")}}_bulkActions(e){const t=e.active.length>0,i=e=>Ge(this.hass,e);switch(e.id){case"lights":return[t?{label:i("turn_all_off"),icon:"mdi:lightbulb-group-off-outline",service:"light.turn_off"}:{label:i("turn_all_on"),icon:"mdi:lightbulb-group",service:"light.turn_on"}];case"switches":return[t?{label:i("turn_all_off"),icon:"mdi:power-plug-off-outline",service:"switch.turn_off"}:{label:i("turn_all_on"),icon:"mdi:power-plug-outline",service:"switch.turn_on"}];case"fans":return[t?{label:i("turn_all_off"),icon:"mdi:fan-off",service:"fan.turn_off"}:{label:i("turn_all_on"),icon:"mdi:fan",service:"fan.turn_on"}];case"covers":return[{label:i("open_all"),icon:"mdi:arrow-up",service:"cover.open_cover"},{label:i("close_all"),icon:"mdi:arrow-down",service:"cover.close_cover"}];case"media":return t?[{label:i("pause_all"),icon:"mdi:pause",service:"media_player.media_pause"}]:[];default:return[]}}_bulk(e,t){this._fireAction({tap_action:{action:"perform-action",perform_action:t,target:{entity_id:[...e.entities]}}},"tap")}_renderPopup(e,t){const i=this.hass,o=lt[e.id],n=e.active.length>0,a="alerts"===e.id?Ge(i,"g_alerts"):Ge(i,`g_${e.id}`),s=`${this._config.name||t.name} · ${Ge(i,"n_of_m_active",{n:e.active.length,m:e.entities.length})}`;return B`
      <dialog
        class="apc-popup"
        aria-label=${a}
        style=${ye({"--c":o.color})}
        @close=${this._onPopupClosed}
        @click=${this._onPopupClick}
        @hass-more-info=${this._onPopupMoreInfo}
      >
        <div class="popup-surface">
          <header class="popup-head">
            <div class=${ge({"popup-icon":!0,active:n})}>
              <ha-icon .icon=${n?o.icon:o.iconOff}></ha-icon>
            </div>
            <div class="popup-titles">
              <div class="popup-title">${a}</div>
              <div class="popup-sub">${s}</div>
            </div>
            <button class="popup-close" aria-label=${Ge(i,"close")} @click=${()=>this._closePopup()}>
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
    `}_fallbackTile(e,t){const i=this.hass,o=i.states[e];if(!o)return W;const n=t.active.includes(e),a=e.startsWith("light.")?Fe(o):void 0,s=a?`rgb(${a.join(",")})`:lt[t.id].color,r=Date.parse(o.last_changed),c=["light","switch","fan","input_boolean","cover","media_player","lock"].includes(e.split(".")[0]);return B`
      <div
        class=${ge({"mini-tile":!0,active:n})}
        style=${ye({"--c":s})}
        role="button"
        tabindex="0"
        ${ot({hasHold:!0})}
        @apc-action=${t=>{"hold"!==t.detail.action&&c?this._fireAction({entity:e,tap_action:{action:"toggle"}},"tap"):this._moreInfo(e)}}
      >
        <div class="mt-icon"><ha-state-icon .hass=${i} .stateObj=${o}></ha-state-icon></div>
        <div class="mt-text">
          <div class="mt-name">${this._entityName(o)}</div>
          <div class="mt-state">${this._formatState(o)}${Number.isNaN(r)?"":` · ${this._ago(r)}`}</div>
        </div>
      </div>
    `}_lang(){return this.hass?.locale?.language||this.hass?.language||"en"}_num(e,t){return new Intl.NumberFormat(this._lang(),{maximumFractionDigits:t}).format(e)}_lastChange(e){let t;for(const i of e){const e=Date.parse(this.hass.states[i]?.last_changed??"");!Number.isNaN(e)&&(void 0===t||e>t)&&(t=e)}return t}_ago(e){const t=Math.max(0,(Date.now()-e)/1e3),i=this._lang(),o=(e,t)=>new Intl.NumberFormat(i,{style:"unit",unit:t,unitDisplay:"short"}).format(e);return t<60?Ge(this.hass,"since_now"):t<3600?o(Math.floor(t/60),"minute"):t<86400?o(Math.floor(t/3600),"hour"):o(Math.floor(t/86400),"day")}_formatState(e){try{return this.hass?.formatEntityState?.(e)??e.state}catch{return e.state}}_entityName(e){if(!e)return"";const t=e.attributes.friendly_name??e.entity_id,i=this.hass?.areas?.[this._config.area]?.name;if(i&&t.toLowerCase().startsWith(i.toLowerCase()+" ")){const e=t.slice(i.length+1).trim();return e?e.charAt(0).toUpperCase()+e.slice(1):t}return t}}pt.styles=[nt,at],e([pe({attribute:!1})],pt.prototype,"hass",void 0),e([pe({reflect:!0})],pt.prototype,"layout",void 0),e([pe({type:Boolean,reflect:!0})],pt.prototype,"dark",void 0),e([he()],pt.prototype,"_config",void 0),e([he()],pt.prototype,"_popup",void 0),e([he()],pt.prototype,"_tiles",void 0),e([he()],pt.prototype,"_labelRegistry",void 0),customElements.get("area-pulse-card")||(customElements.define("area-pulse-card",pt),window.customCards=window.customCards||[],window.customCards.push({type:"area-pulse-card",name:"Area Pulse Card",description:"Presence, climate, openings, alerts and quick actions for an area.",preview:!0}),console.info("%c AREA-PULSE-CARD %c v1.1.0 ","color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px","color:#03a9f4;background:#fff0;font-weight:700;padding:2px 4px"));export{pt as AreaPulseCard};
