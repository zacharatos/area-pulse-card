function t(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new a(i,t,o)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const a=o?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o;const a=n.fromAttribute(e,t.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,i,o=!1,n){if(void 0!==t){const a=this.constructor;if(!1===o&&(n=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,A=t=>t,k=$.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+S,P=`<${O}>`,N=document,M=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,H="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,L=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,Y=N.createTreeWalker(N,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let n,a=2===e?"<svg>":3===e?"<math>":"",s=z;for(let e=0;e<i;e++){const i=t[e];let r,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===z?"!--"===c[1]?s=T:void 0!==c[1]?s=L:void 0!==c[2]?(B.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=n??z,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,r=c[1],s=void 0===c[3]?j:'"'===c[3]?I:R):s===I||s===R?s=j:s===T||s===L?s=z:(s=j,n=void 0);const p=s===j&&t[e+1].startsWith("/>")?" ":"";a+=s===z?i+P:l>=0?(o.push(r),i.slice(0,l)+C+i.slice(l)+S+p):i+S+(-2===l?e:p)}return[Z(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class K{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0;const s=t.length-1,r=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Y.nextNode())&&r.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[a++],i=o.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:n}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],M()),Y.nextNode(),r.push({type:2,index:++n});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===O)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)r.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===W)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const a=U(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??N).importNode(e,!0);Y.currentNode=o;let n=Y.nextNode(),a=0,s=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new G(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new nt(n,this,t)),this._$AV.push(e),r=i[++s]}a!==r?.index&&(n=Y.nextNode(),a++)}return Y.currentNode=N,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new G(this.O(M()),this.O(M()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,o){const n=this.strings;let a=!1;if(void 0===n)t=Q(this,t,e,0),a=!U(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const o=t;let s,r;for(t=n[0],s=0;s<n.length-1;s++)r=Q(this,o[i+s],e,s),r===W&&(r=this._$AH[s]),a||=!U(r)||r!==this._$AH[s],r===F?t=F:t!==F&&(t+=(r??"")+n[s+1]),this._$AH[s]=r}a&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class ot extends tt{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??F)===W)return;const i=this._$AH,o=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=$.litHtmlPolyfillSupport;at?.(K,G),($.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;let rt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new G(e.insertBefore(M(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const ct=st.litElementPolyfillSupport;ct?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},dt=(t=lt,e,i)=>{const{kind:o,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return pt({...t,state:!0,attribute:!1})}const ut=1,_t=6,mt=t=>(...e)=>({_$litDirective$:t,values:e});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const gt=mt(class extends ft{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),vt="important",bt=" !"+vt,yt=mt(class extends ft{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(bt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?vt:""):i[t]=o}}return W}}),wt=["moisture","smoke","gas","carbon_monoxide","safety","problem","tamper"],xt=["alerts","presence","doors","windows","covers","locks","lights","fans","media","climate","batteries"],$t=["illuminance","carbon_dioxide","pm25","volatile_organic_compounds","pressure","power","energy","sound_pressure"],At=new Set(["power","energy","gas","water","current"]),kt=new Set(["unavailable","unknown"]);function Et(t,e,i=[]){const o=[],n=[],a=new Set(i);for(const i of Object.values(t.entities||{})){if(i.hidden||a.has(i.entity_id))continue;if(!t.states[i.entity_id])continue;(i.area_id??(i.device_id?t.devices?.[i.device_id]?.area_id:void 0))===e&&("config"!==i.entity_category&&(n.push(i.entity_id),"diagnostic"!==i.entity_category&&o.push(i.entity_id)))}return{primary:o,withDiagnostic:n}}const Ct=t=>t.split(".")[0],St=t=>t.attributes.device_class,Ot=t=>!!t&&!kt.has(t.state);function Pt(t,e,i){return e.filter(e=>{const o=t.states[e];return"binary_sensor"===Ct(e)&&!!o&&i.includes(St(o)??"")})}function Nt(t,e,i,o){const n=i.filter(e=>{const i=t.states[e];return Ot(i)&&o(i)});let a;for(const e of i){const i=Date.parse(t.states[e]?.last_changed??"");!Number.isNaN(i)&&(void 0===a||i>a)&&(a=i)}return{id:e,entities:i,active:n,lastChanged:a}}function Mt(t,e,i,o){if(o&&t.states[o]){const e=t.states[o],n=Number(e.state);if(!Ot(e)||Number.isNaN(n))return;return{deviceClass:i,value:n,unit:String(e.attributes.unit_of_measurement??""),entities:[o]}}const n=e.primary.map(e=>t.states[e]).filter(t=>"sensor"===Ct(t.entity_id)&&St(t)===i&&Ot(t)&&!Number.isNaN(Number(t.state)));if(!n.length)return;const a=String(n[0].attributes.unit_of_measurement??""),s=n.filter(t=>String(t.attributes.unit_of_measurement??"")===a),r=s.map(t=>Number(t.state)),c=At.has(i)?r.reduce((t,e)=>t+e,0):function(t){const e=[...t].sort((t,e)=>t-e),i=Math.floor(e.length/2);return e.length%2?e[i]:(e[i-1]+e[i])/2}(r);return{deviceClass:i,value:c,unit:a,entities:s.map(t=>t.entity_id)}}function Ut(t,e,i){const[o,n]=Array.isArray(e)?e:[e?.min??i[0],e?.max??i[1]];return t<o?"low":t>n?"high":"ok"}const Dt={occupied:"Occupied",clear:"Clear",motion:"Motion",no_motion:"No motion",door_open:"{n} door open",doors_open:"{n} doors open",doors_closed:"Doors closed",window_open:"{n} window open",windows_open:"{n} windows open",windows_closed:"Windows closed",cover_open:"{n} cover open",covers_open_n:"{n} covers open",covers_closed:"Covers closed",lock_unlocked:"{n} unlocked",locks_locked:"Locked",light_on:"{n} light on",lights_on_n:"{n} lights on",lights_off_all:"Lights off",fan_on:"{n} fan on",fans_on_n:"{n} fans on",fans_off_all:"Fans off",media_playing:"Playing",media_idle:"Media idle",climate_heating:"Heating",climate_cooling:"Cooling",climate_drying:"Drying",climate_fan:"Fan",climate_idle:"Idle",climate_off:"Climate off",alert:"Alert",alerts_n:"{n} alerts",battery_low:"{n} low battery",batteries_low:"{n} low batteries",for:"for {t}",since_now:"just now",area_not_found:'Area "{area}" was not found.',pick_area:"Pick an area in the card editor.",preset_lights_toggle:"Lights",preset_lights_on:"Lights on",preset_lights_off:"Lights off",preset_covers_open:"Open covers",preset_covers_close:"Close covers",preset_fans_off:"Fans off",preset_media_stop:"Stop media",preset_vacuum_area:"Vacuum",preset_everything_off:"All off",confirm_vacuum:"Send the vacuum to clean {area}?",confirm_everything_off:"Turn off everything in {area}?",ed_area:"Area",ed_name:"Name",ed_icon:"Icon",ed_color:"Accent color",ed_layout:"Layout",ed_layout_default:"Default",ed_layout_compact:"Compact",ed_show_picture:"Show area picture",ed_show_inactive:'Show inactive groups (e.g. "Windows closed")',ed_section_climate:"Climate & sensors",ed_section_status:"Status & alerts",ed_section_interactions:"Card interactions",ed_section_actions:"Quick actions",ed_temperature_entity:"Temperature sensor (default: area setting or median)",ed_humidity_entity:"Humidity sensor (default: area setting or median)",ed_sensor_classes:"Extra sensor readings",ed_comfort_temp_min:"Comfort temperature min",ed_comfort_temp_max:"Comfort temperature max",ed_comfort_hum_min:"Comfort humidity min",ed_comfort_hum_max:"Comfort humidity max",ed_groups:"Status groups",ed_alert_classes:"Alert device classes",ed_presence_entities:"Presence entities (default: auto-detect)",ed_exclude_entities:"Exclude entities",ed_battery_threshold:"Low battery threshold (%)",ed_tap_action:"Tap action",ed_hold_action:"Hold action",ed_double_tap_action:"Double tap action",ed_preset:"Preset",ed_preset_none:"Custom",ed_entity:"Entity",ed_add_action:"Add quick action",ed_remove:"Remove",ed_move_up:"Move up",ed_move_down:"Move down",ed_action_n:"Action {n}",ed_vacuum_hint:"Pick the vacuum entity. Uses vacuum.clean_area (HA 2026.3+), so map the vacuum's segments to areas first.",g_presence:"Presence",g_motion:"Motion",g_doors:"Doors",g_windows:"Windows",g_covers:"Covers",g_locks:"Locks",g_lights:"Lights",g_fans:"Fans",g_media:"Media",g_climate:"Climate",g_alerts:"Safety alerts",g_batteries:"Batteries"},Ht={en:Dt,el:{occupied:"Κατειλημμένο",clear:"Άδειο",motion:"Κίνηση",no_motion:"Χωρίς κίνηση",door_open:"{n} πόρτα ανοιχτή",doors_open:"{n} πόρτες ανοιχτές",doors_closed:"Πόρτες κλειστές",window_open:"{n} παράθυρο ανοιχτό",windows_open:"{n} παράθυρα ανοιχτά",windows_closed:"Παράθυρα κλειστά",cover_open:"{n} ρολό ανοιχτό",covers_open_n:"{n} ρολά ανοιχτά",covers_closed:"Ρολά κλειστά",lock_unlocked:"{n} ξεκλείδωτη",locks_locked:"Κλειδωμένο",light_on:"{n} φως αναμμένο",lights_on_n:"{n} φώτα αναμμένα",lights_off_all:"Φώτα σβηστά",fan_on:"{n} ανεμιστήρας",fans_on_n:"{n} ανεμιστήρες",fans_off_all:"Ανεμιστήρες off",media_playing:"Αναπαραγωγή",media_idle:"Media σε αναμονή",climate_heating:"Θέρμανση",climate_cooling:"Ψύξη",climate_drying:"Αφύγρανση",climate_fan:"Ανεμιστήρας",climate_idle:"Αδρανές",climate_off:"Κλιματισμός off",alert:"Συναγερμός",alerts_n:"{n} ειδοποιήσεις",battery_low:"{n} χαμηλή μπαταρία",batteries_low:"{n} χαμηλές μπαταρίες",for:"εδώ και {t}",since_now:"μόλις τώρα",area_not_found:'Ο χώρος "{area}" δεν βρέθηκε.',pick_area:"Επίλεξε χώρο στον επεξεργαστή της κάρτας.",preset_lights_toggle:"Φώτα",preset_lights_on:"Άναμμα φώτων",preset_lights_off:"Σβήσιμο φώτων",preset_covers_open:"Άνοιγμα ρολών",preset_covers_close:"Κλείσιμο ρολών",preset_fans_off:"Ανεμιστήρες off",preset_media_stop:"Stop media",preset_vacuum_area:"Σκούπισμα",preset_everything_off:"Όλα off",confirm_vacuum:"Να σκουπίσει η σκούπα τον χώρο {area};",confirm_everything_off:"Να σβήσουν όλα στον χώρο {area};",g_presence:"Παρουσία",g_motion:"Κίνηση",g_doors:"Πόρτες",g_windows:"Παράθυρα",g_covers:"Ρολά",g_locks:"Κλειδαριές",g_lights:"Φώτα",g_fans:"Ανεμιστήρες",g_media:"Media",g_climate:"Κλιματισμός",g_alerts:"Ειδοποιήσεις ασφαλείας",g_batteries:"Μπαταρίες"}};function zt(t,e,i={}){const o=(t?.locale?.language||t?.language||"en").split("-")[0];let n=Ht[o]?.[e]??Dt[e]??e;for(const[t,e]of Object.entries(i))n=n.replace(`{${t}}`,String(e));return n}const Tt=["lights_toggle","lights_on","lights_off","covers_open","covers_close","fans_off","media_stop","vacuum_area","everything_off"],Lt=new Set(["on","open","opening","playing","unlocked","cleaning","heat","cool","auto","heat_cool","dry","fan_only"]);function jt(t,e,i={}){return{action:"perform-action",perform_action:t,target:{area_id:e},...i}}function Rt(t){const e=t.split(".")[0];return"scene"===e||"script"===e?{action:"perform-action",perform_action:`${e}.turn_on`,target:{entity_id:t}}:"button"===e||"input_button"===e?{action:"perform-action",perform_action:`${e}.press`,target:{entity_id:t}}:"vacuum"===e?{action:"more-info",entity:t}:{action:"toggle",entity:t}}const It={light:"mdi:lightbulb",switch:"mdi:toggle-switch-variant",fan:"mdi:fan",cover:"mdi:window-shutter",scene:"mdi:palette",script:"mdi:script-text-play",media_player:"mdi:speaker",vacuum:"mdi:robot-vacuum",climate:"mdi:thermostat",lock:"mdi:lock",button:"mdi:gesture-tap-button"};function Bt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qt(t){return/^(#|rgb|hsl|var\()/i.test(t)?t:"primary"===t||"accent"===t?`var(--${t}-color)`:`var(--${t}-color, ${t})`}const Wt=mt(class extends ft{constructor(t){if(super(t),t.type!==_t)throw new Error("actionHandler must be used on an element")}update(t,[e]){const i=t.element;return i.__apcOptions=e??{},function(t){if(t.__apcBound)return;let e,i;t.__apcBound=!0;let o=!1,n=0,a=0;const s=e=>t.dispatchEvent(new CustomEvent("apc-action",{detail:{action:e},bubbles:!1,composed:!1})),r=()=>{e&&window.clearTimeout(e),e=void 0};t.addEventListener("pointerdown",i=>{t.__apcOptions?.disabled||0!==i.button||(o=!1,n=i.clientX,a=i.clientY,t.__apcOptions?.hasHold&&(e=window.setTimeout(()=>{o=!0,e=void 0,navigator.vibrate&&navigator.vibrate(30),s("hold")},500)))}),t.addEventListener("pointermove",t=>{e&&(Math.abs(t.clientX-n)>10||Math.abs(t.clientY-a)>10)&&r()}),t.addEventListener("pointercancel",r),t.addEventListener("pointerleave",r),t.addEventListener("contextmenu",e=>{t.__apcOptions?.hasHold&&e.preventDefault()}),t.addEventListener("pointerup",n=>{if(t.__apcOptions?.disabled||0!==n.button)return;const a=!!e;r(),o?o=!1:!a&&t.__apcOptions?.hasHold||(t.__apcOptions?.hasDoubleTap?i?(window.clearTimeout(i),i=void 0,s("double_tap")):i=window.setTimeout(()=>{i=void 0,s("tap")},250):s("tap"))}),t.addEventListener("keydown",e=>{t.__apcOptions?.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s("tap"))})}(i),W}render(t){return W}}),Ft=s`
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
    --apc-neutral-bg: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --apc-neutral-bg-hover: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
    --apc-radius: var(--ha-card-border-radius, 12px);
    --apc-control-radius: var(--ha-card-features-border-radius, var(--feature-border-radius, 12px));
    display: block;
    height: 100%;
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
      color-mix(in srgb, var(--apc-amber) 13%, transparent) 0%,
      transparent 55%
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
  .temp.low { color: var(--apc-light-blue); }
  .temp.high { color: var(--apc-deep-orange); }
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
  .hum.low, .hum.high { color: var(--apc-orange); }

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

  /* Status chips */
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

  /* Detail drawer */
  .drawer {
    display: flex;
    flex-direction: column;
    padding: 4px;
    border-radius: var(--apc-control-radius);
    background: var(--apc-neutral-bg);
    animation: apc-drawer 180ms ease-out;
  }
  @keyframes apc-drawer {
    from { opacity: 0; transform: translateY(-4px); }
  }
  .row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    border-radius: calc(var(--apc-control-radius) - 4px);
    cursor: pointer;
    min-width: 0;
    --mdc-icon-size: 20px;
  }
  .row:hover { background: var(--apc-neutral-bg); }
  .row ha-state-icon, .row ha-icon { color: var(--secondary-text-color); flex: none; }
  .row.active ha-state-icon, .row.active ha-icon { color: var(--c, var(--apc-accent)); }
  .row .row-name {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row .row-state {
    flex: none;
    font-size: 12px;
    color: var(--secondary-text-color);
    text-align: right;
  }
  .row .row-state .ago { display: block; font-size: 11px; opacity: 0.75; }

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

  .warning {
    padding: 16px;
    color: var(--warning-color, #ffa600);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .presence-dot::after, .alert-banner ha-icon { animation: none; }
    .drawer { animation: none; }
  }
`,Vt=[...wt,"vibration","cold","heat","sound","light"];function Yt(t){const e={};for(const[i,o]of Object.entries(t))null!=o&&""!==o&&(Array.isArray(o)&&0===o.length||(e[i]=o));return e}class Zt extends rt{constructor(){super(...arguments),this._open=new Set,this._ready=!1,this._t=(t,e)=>zt(this.hass,t,e),this._label=t=>{const e={area:"ed_area",name:"ed_name",icon:"ed_icon",color:"ed_color",layout:"ed_layout",show_picture:"ed_show_picture",show_inactive:"ed_show_inactive",temperature_entity:"ed_temperature_entity",humidity_entity:"ed_humidity_entity",sensor_classes:"ed_sensor_classes",comfort_temp_min:"ed_comfort_temp_min",comfort_temp_max:"ed_comfort_temp_max",comfort_hum_min:"ed_comfort_hum_min",comfort_hum_max:"ed_comfort_hum_max",groups:"ed_groups",alert_classes:"ed_alert_classes",presence_entities:"ed_presence_entities",exclude_entities:"ed_exclude_entities",battery_threshold:"ed_battery_threshold",tap_action:"ed_tap_action",hold_action:"ed_hold_action",double_tap_action:"ed_double_tap_action",preset:"ed_preset",entity:"ed_entity"};return e[t.name]?this._t(e[t.name]):t.name}}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-form")||!customElements.get("ha-selector"))try{const t=await(window.loadCardHelpers?.()),e=await(t?.createCardElement({type:"entities",entities:[]}));await(e?.constructor?.getConfigElement?.())}catch{}}().then(()=>this._ready=!0)}setConfig(t){this._config=t}_mainSchema(){const t=this._t;return[{name:"area",required:!0,selector:{area:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{type:"grid",name:"",schema:[{name:"color",selector:{ui_color:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:t("ed_layout_default")},{value:"compact",label:t("ed_layout_compact")}]}}}]},{name:"show_picture",selector:{boolean:{}}},{type:"expandable",name:"",title:t("ed_section_climate"),icon:"mdi:thermometer",flatten:!0,schema:[{name:"temperature_entity",selector:{entity:{filter:{domain:"sensor",device_class:"temperature"}}}},{name:"humidity_entity",selector:{entity:{filter:{domain:"sensor",device_class:"humidity"}}}},{type:"grid",name:"",schema:[{name:"comfort_temp_min",selector:{number:{mode:"box",step:.5}}},{name:"comfort_temp_max",selector:{number:{mode:"box",step:.5}}},{name:"comfort_hum_min",selector:{number:{mode:"box",min:0,max:100}}},{name:"comfort_hum_max",selector:{number:{mode:"box",min:0,max:100}}}]},{name:"sensor_classes",selector:{select:{multiple:!0,mode:"list",options:$t.map(t=>({value:t,label:t.replace(/_/g," ")}))}}}]},{type:"expandable",name:"",title:t("ed_section_status"),icon:"mdi:list-status",flatten:!0,schema:[{name:"show_inactive",selector:{boolean:{}}},{name:"groups",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:xt.filter(t=>"presence"!==t).map(e=>({value:e,label:t(`g_${e}`)}))}}},{name:"alert_classes",selector:{select:{multiple:!0,mode:"dropdown",options:Vt.map(t=>({value:t,label:t.replace(/_/g," ")}))}}},{name:"presence_entities",selector:{entity:{multiple:!0,filter:[{domain:"binary_sensor"},{domain:"person"},{domain:"input_boolean"}]}}},{name:"exclude_entities",selector:{entity:{multiple:!0}}},{name:"battery_threshold",selector:{number:{min:1,max:100,mode:"slider",unit_of_measurement:"%"}}}]},{type:"expandable",name:"",title:t("ed_section_interactions"),icon:"mdi:gesture-tap",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}]}_actionSchema(t){const e=this._t;return[{name:"preset",selector:{select:{mode:"dropdown",options:[{value:"",label:e("ed_preset_none")},...Tt.map(t=>({value:t,label:e(`preset_${t}`)}))]}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"entity",selector:{entity:"vacuum_area"===t.preset?{filter:{domain:"vacuum"}}:{}}},{name:"color",selector:{ui_color:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}]}_formData(){const t=this._config,e=t=>Array.isArray(t)?{min:t[0],max:t[1]}:t??{},i=e(t.comfort_temperature),o=e(t.comfort_humidity);return{layout:"default",show_picture:!0,show_inactive:!1,battery_threshold:20,...t,comfort_temp_min:i.min,comfort_temp_max:i.max,comfort_hum_min:o.min,comfort_hum_max:o.max}}_mainChanged(t){t.stopPropagation();const e={...t.detail.value},i=(t,e)=>void 0===t&&void 0===e?void 0:Yt({min:t,max:e}),o=i(e.comfort_temp_min,e.comfort_temp_max),n=i(e.comfort_hum_min,e.comfort_hum_max);delete e.comfort_temp_min,delete e.comfort_temp_max,delete e.comfort_hum_min,delete e.comfort_hum_max;const a=Yt({...e,comfort_temperature:o&&Object.keys(o).length?o:void 0,comfort_humidity:n&&Object.keys(n).length?n:void 0,actions:this._config?.actions});"default"===a.layout&&delete a.layout,!0===a.show_picture&&delete a.show_picture,!1===a.show_inactive&&delete a.show_inactive,20===a.battery_threshold&&delete a.battery_threshold,this._commit(a)}_actionChanged(t,e){e.stopPropagation();const i=[...this._config?.actions??[]];i[t]=Yt({...e.detail.value}),this._commit({...this._config,actions:i})}_addAction(){const t=[...this._config?.actions??[],{preset:"lights_toggle"}];this._open=new Set([...this._open,t.length-1]),this._commit({...this._config,actions:t})}_removeAction(t){const e=[...this._config?.actions??[]];e.splice(t,1),this._open=new Set,this._commit(Yt({...this._config,actions:e}))}_moveAction(t,e){const i=[...this._config?.actions??[]],o=t+e;o<0||o>=i.length||([i[t],i[o]]=[i[o],i[t]],this._open=new Set,this._commit({...this._config,actions:i}))}_toggleOpen(t){const e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e}_commit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config||!this._ready)return F;const t=this._config.actions??[];return q`
      <ha-form
        .hass=${this.hass}
        .data=${this._formData()}
        .schema=${this._mainSchema()}
        .computeLabel=${this._label}
        @value-changed=${this._mainChanged}
      ></ha-form>

      <div class="section">
        <div class="section-title"><ha-icon icon="mdi:gesture-tap-button"></ha-icon>${this._t("ed_section_actions")}</div>
        ${t.map((e,i)=>this._renderAction(e,i,t.length))}
        <button class="add" @click=${this._addAction}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("ed_add_action")}
        </button>
      </div>
    `}_renderAction(t,e,i){const o=this._open.has(e),n=t.name||(t.preset?this._t(`preset_${t.preset}`):t.entity)||this._t("ed_action_n",{n:e+1});return q`
      <div class="action-item">
        <div class="action-head">
          <button class="head-main" @click=${()=>this._toggleOpen(e)} aria-expanded=${String(o)}>
            <ha-icon .icon=${o?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            <span>${n}</span>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_up")} ?disabled=${0===e} @click=${()=>this._moveAction(e,-1)}>
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_down")} ?disabled=${e===i-1} @click=${()=>this._moveAction(e,1)}>
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
          <button class="icon-btn danger" title=${this._t("ed_remove")} @click=${()=>this._removeAction(e)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${o?q`
              <div class="action-body">
                ${"vacuum_area"===t.preset?q`<p class="hint">${this._t("ed_vacuum_hint")}</p>`:F}
                <ha-form
                  .hass=${this.hass}
                  .data=${{preset:"",...t}}
                  .schema=${this._actionSchema(t)}
                  .computeLabel=${this._label}
                  @value-changed=${t=>this._actionChanged(e,t)}
                ></ha-form>
              </div>
            `:F}
      </div>
    `}}Zt.styles=s`
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
  `,t([pt({attribute:!1})],Zt.prototype,"hass",void 0),t([ht()],Zt.prototype,"_config",void 0),t([ht()],Zt.prototype,"_open",void 0),t([ht()],Zt.prototype,"_ready",void 0),customElements.get("area-pulse-card-editor")||customElements.define("area-pulse-card-editor",Zt);const Jt={presence:{icon:"mdi:account",iconOff:"mdi:account-outline",color:"var(--apc-green)"},motion:{icon:"mdi:motion-sensor",iconOff:"mdi:motion-sensor-off",color:"var(--apc-cyan)"},doors:{icon:"mdi:door-open",iconOff:"mdi:door-closed",color:"var(--apc-orange)"},windows:{icon:"mdi:window-open-variant",iconOff:"mdi:window-closed-variant",color:"var(--apc-orange)"},covers:{icon:"mdi:window-shutter-open",iconOff:"mdi:window-shutter",color:"var(--apc-purple)"},locks:{icon:"mdi:lock-open-variant",iconOff:"mdi:lock",color:"var(--apc-deep-orange)"},lights:{icon:"mdi:lightbulb-on",iconOff:"mdi:lightbulb-outline",color:"var(--apc-amber)"},fans:{icon:"mdi:fan",iconOff:"mdi:fan-off",color:"var(--apc-light-blue)"},media:{icon:"mdi:play-circle",iconOff:"mdi:speaker",color:"var(--apc-indigo)"},climate:{icon:"mdi:thermostat",iconOff:"mdi:thermostat",color:"var(--apc-deep-orange)"},alerts:{icon:"mdi:alert",iconOff:"mdi:shield-check",color:"var(--apc-red)"},batteries:{icon:"mdi:battery-alert-variant-outline",iconOff:"mdi:battery",color:"var(--apc-red)"}},Kt={illuminance:"mdi:brightness-5",carbon_dioxide:"mdi:molecule-co2",pm25:"mdi:blur",pm10:"mdi:blur-radial",volatile_organic_compounds:"mdi:air-filter",volatile_organic_compounds_parts:"mdi:air-filter",pressure:"mdi:gauge",power:"mdi:flash",energy:"mdi:lightning-bolt",sound_pressure:"mdi:waveform",temperature:"mdi:thermometer",humidity:"mdi:water-percent"};class Qt extends rt{constructor(){super(...arguments),this.layout="default",this._indexDeps=[],this._watched=new Set}static getConfigElement(){return document.createElement("area-pulse-card-editor")}static getStubConfig(t){const e=Object.values(t?.areas??{});return{area:e[0]?.area_id??"",actions:[{preset:"lights_toggle"},{preset:"everything_off"}]}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(t.actions&&!Array.isArray(t.actions))throw new Error("`actions` must be a list");this._config={...t},this.layout="compact"===t.layout?"compact":"default",this._expanded=void 0,this._indexDeps=[]}getCardSize(){const t=this._config?.actions?.length?1:0;return"compact"===this.layout?2+t:3+t}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),this._ticker=window.setInterval(()=>this.requestUpdate(),3e4)}disconnectedCallback(){super.disconnectedCallback(),this._ticker&&window.clearInterval(this._ticker)}shouldUpdate(t){if(!this._config)return!1;if(!t.has("hass")||t.size>1)return!0;const e=t.get("hass"),i=this.hass;if(!e||!i)return!0;if(e.entities!==i.entities||e.devices!==i.devices||e.areas!==i.areas||e.locale!==i.locale||e.language!==i.language||e.themes!==i.themes)return!0;for(const t of this._watched)if(e.states[t]!==i.states[t])return!0;return!1}willUpdate(){const t=this.hass,e=this._config;if(!t||!e)return;const i=[t.entities,t.devices,t.areas,e];if(!this._index||i.some((t,e)=>t!==this._indexDeps[e])){this._index=Et(t,e.area,e.exclude_entities??[]),this._indexDeps=i;const o=t.areas?.[e.area];this._watched=function(t,e){const i=new Set(e.withDiagnostic);for(const e of[t.temperature_entity,t.humidity_entity,...t.presence_entities??[]])e&&i.add(e);for(const e of t.actions??[])e.entity&&i.add(e.entity);return i}(e,this._index),o?.temperature_entity_id&&this._watched.add(o.temperature_entity_id),o?.humidity_entity_id&&this._watched.add(o.humidity_entity_id)}}render(){const t=this.hass,e=this._config;if(!t||!e)return F;if(!e.area)return this._warning(zt(t,"pick_area"));const i=t.areas?.[e.area];if(!i)return this._warning(zt(t,"area_not_found",{area:e.area}));const o=this._index??Et(t,e.area,e.exclude_entities??[]),n=function(t,e,i){const o=i.primary,n=t=>o.filter(e=>Ct(e)===t),a={},s=t=>{t.entities.length&&(a[t.id]=t)},r=e.presence_entities?.length?e.presence_entities.filter(e=>t.states[e]):Pt(t,o,["occupancy","presence"]),c=Pt(t,o,["motion"]);s(Nt(t,"presence",r.length?r:c,t=>["on","home","detected"].includes(t.state))),r.length&&s(Nt(t,"motion",c,t=>"on"===t.state)),s(Nt(t,"doors",Pt(t,o,["door","garage_door","opening"]),t=>"on"===t.state)),s(Nt(t,"windows",Pt(t,o,["window"]),t=>"on"===t.state)),s(Nt(t,"covers",n("cover"),t=>["open","opening"].includes(t.state))),s(Nt(t,"locks",n("lock"),t=>["unlocked","open","opening","jammed"].includes(t.state))),s(Nt(t,"lights",n("light"),t=>"on"===t.state)),s(Nt(t,"fans",n("fan"),t=>"on"===t.state)),s(Nt(t,"media",n("media_player"),t=>"playing"===t.state)),s(Nt(t,"climate",n("climate"),t=>["heating","cooling","drying","fan"].includes(String(t.attributes.hvac_action??""))||!t.attributes.hvac_action&&"off"!==t.state)),s(Nt(t,"alerts",Pt(t,o,e.alert_classes??wt),t=>"on"===t.state));const l=e.battery_threshold??20,d=i.withDiagnostic.filter(e=>{const i=t.states[e];return"battery"===St(i)&&("sensor"===Ct(e)||"binary_sensor"===Ct(e))});return s(Nt(t,"batteries",d,t=>"binary_sensor"===Ct(t.entity_id)?"on"===t.state:Number(t.state)<=l)),a}(t,e,o),a=Mt(t,o,"temperature",e.temperature_entity??i.temperature_entity_id),s=Mt(t,o,"humidity",e.humidity_entity??i.humidity_entity_id),r=(e.sensor_classes??[]).map(e=>Mt(t,o,e)).filter(t=>!!t),c=(e.actions??[]).map(e=>function(t,e,i,o){const n=i.name,a=(o.lights?.active.length??0)>0,s=e.entity?t.states[e.entity]:void 0;let r;switch(e.preset){case"lights_toggle":r={name:zt(t,"preset_lights_toggle"),icon:a?"mdi:lightbulb-group":"mdi:lightbulb-group-off-outline",active:a,color:"var(--apc-amber)",disabled:!o.lights,tap_action:jt(a?"light.turn_off":"light.turn_on",i.area_id)};break;case"lights_on":r={name:zt(t,"preset_lights_on"),icon:"mdi:lightbulb-on-outline",active:!1,color:"var(--apc-amber)",disabled:!o.lights,tap_action:jt("light.turn_on",i.area_id)};break;case"lights_off":r={name:zt(t,"preset_lights_off"),icon:"mdi:lightbulb-off-outline",active:!1,color:"var(--apc-amber)",disabled:!o.lights,tap_action:jt("light.turn_off",i.area_id)};break;case"covers_open":r={name:zt(t,"preset_covers_open"),icon:"mdi:window-shutter-open",active:!1,color:"var(--apc-purple)",disabled:!o.covers,tap_action:jt("cover.open_cover",i.area_id)};break;case"covers_close":r={name:zt(t,"preset_covers_close"),icon:"mdi:window-shutter",active:!1,color:"var(--apc-purple)",disabled:!o.covers,tap_action:jt("cover.close_cover",i.area_id)};break;case"fans_off":r={name:zt(t,"preset_fans_off"),icon:"mdi:fan-off",active:!1,color:"var(--apc-cyan)",disabled:!o.fans,tap_action:jt("fan.turn_off",i.area_id)};break;case"media_stop":r={name:zt(t,"preset_media_stop"),icon:"mdi:stop-circle-outline",active:(o.media?.active.length??0)>0,color:"var(--apc-indigo)",disabled:!o.media,tap_action:jt("media_player.media_stop",i.area_id)};break;case"vacuum_area":{const o="cleaning"===s?.state;r={name:zt(t,"preset_vacuum_area"),icon:o?"mdi:robot-vacuum-variant":"mdi:robot-vacuum",active:o,color:"var(--apc-teal)",disabled:!e.entity,tap_action:{action:"perform-action",perform_action:"vacuum.clean_area",target:{entity_id:e.entity},data:{cleaning_area_id:[i.area_id]},confirmation:{text:zt(t,"confirm_vacuum",{area:n})}}};break}case"everything_off":r={name:zt(t,"preset_everything_off"),icon:"mdi:power",active:!1,color:"var(--apc-red)",disabled:!1,tap_action:jt("homeassistant.turn_off",i.area_id,{confirmation:{text:zt(t,"confirm_everything_off",{area:n})}})};break;default:{const t=e.entity?.split(".")[0]??"";r={name:s?.attributes.friendly_name?.replace(new RegExp(`^${Bt(n)}\\s*`,"i"),"")||e.entity||"Action",icon:s?.attributes.icon||It[t]||"mdi:gesture-tap",active:!!s&&Lt.has(s.state),color:"var(--apc-accent)",disabled:!(!e.entity||s&&"unavailable"!==s.state),tap_action:e.entity?Rt(e.entity):{action:"none"}}}}return{...r,name:e.name??r.name,icon:e.icon??r.icon,color:e.color?qt(e.color):r.color,tap_action:e.tap_action??r.tap_action,hold_action:e.hold_action??(e.entity?{action:"more-info",entity:e.entity}:void 0),double_tap_action:e.double_tap_action,entity:e.entity}}(t,e,i,n)),l=n.presence,d=!!l?.active.length,p=n.alerts?.active??[],h=!!n.lights?.active.length,u=e.color?qt(e.color):void 0,_=!1!==e.show_picture&&!!i.picture,m=this._hasAction(e.tap_action)||this._hasAction(e.hold_action);return q`
      <ha-card
        class=${gt({alerting:p.length>0})}
        style=${yt(u?{"--apc-accent":u}:{})}
      >
        ${_?q`<div class="picture" style=${yt({backgroundImage:`url("${i.picture}")`})}></div>`:F}
        <div class=${gt({glow:!0,on:h})}></div>
        <div class="content">
          <div
            class=${gt({header:!0,clickable:m})}
            role=${m?"button":F}
            tabindex=${m?"0":F}
            ${Wt({hasHold:this._hasAction(e.hold_action),hasDoubleTap:this._hasAction(e.double_tap_action),disabled:!m})}
            @apc-action=${t=>this._cardAction(t.detail.action)}
          >
            <div class=${gt({"area-icon":!0,occupied:d})}>
              <ha-icon .icon=${e.icon||i.icon||"mdi:texture-box"}></ha-icon>
              ${d?q`<span class="presence-dot"></span>`:F}
            </div>
            <div class="titles">
              <div class="name">${e.name||i.name}</div>
              <div class="secondary">${this._secondary(n)}</div>
            </div>
            ${this._renderClimate(a,s)}
          </div>
          ${p.length?this._renderAlertBanner(p):F}
          ${this._renderChips(n,r)}
          ${this._expanded&&n[this._expanded]?this._renderDrawer(n[this._expanded]):F}
          ${c.length?this._renderActions(c):F}
        </div>
      </ha-card>
    `}_warning(t){return q`<ha-card><div class="warning"><ha-icon icon="mdi:alert-outline"></ha-icon>${t}</div></ha-card>`}_secondary(t){const e=this.hass,i=[],o=t.presence;if(o){const t=o.active.length>0,n=this._lastChange(t?o.active:o.entities),a=zt(e,t?"occupied":"clear");i.push(void 0!==n?`${a} ${zt(e,"for",{t:this._ago(n)})}`:a)}const n=t.lights;if(n?.active.length&&i.push(zt(e,1===n.active.length?"light_on":"lights_on_n",{n:n.active.length})),!i.length){const o=t.media;o?.active.length&&i.push(zt(e,"media_playing"))}return i.map((t,e)=>q`${e?q`<span class="dot">·</span>`:F}${t}`)}_renderClimate(t,e){if(!t&&!e)return F;const i=this._config,o=t?.unit||"°",n=t?Ut(t.value,i.comfort_temperature,o.includes("F")?[68,76]:[19,25]):"ok",a=e?Ut(e.value,i.comfort_humidity,[35,65]):"ok";return q`
      <div class="climate">
        ${t?q`<div
              class="temp ${n}"
              title=${t.entities.length>1?`Median of ${t.entities.length} sensors`:""}
              @click=${e=>this._moreInfo(t.entities[0],e)}
            >
              ${this._num(t.value,1)}<span class="unit">${o}</span>
            </div>`:F}
        ${e?q`<div class="hum ${a}" @click=${t=>this._moreInfo(e.entities[0],t)}>
              <ha-icon icon="mdi:water-percent"></ha-icon>${this._num(e.value,0)}${e.unit}
            </div>`:F}
      </div>
    `}_renderAlertBanner(t){const e=this.hass,i=e.states[t[0]],o=1===t.length?`${this._entityName(i)} · ${this._formatState(i)}`:`${zt(e,"alerts_n",{n:t.length})}: ${t.map(t=>this._entityName(e.states[t])).join(", ")}`;return q`
      <div
        class="alert-banner"
        role="alert"
        @click=${()=>1===t.length?this._moreInfo(t[0]):this._toggleExpanded("alerts")}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="text">${o}</span>
      </div>
    `}_renderChips(t,e){const i=this._config,o=(i.groups??xt).filter(t=>"presence"!==t),n=!0===i.show_inactive,a=[];for(const t of e)a.push(this._statChip(t));for(const e of o){const i=t[e];if(!i)continue;if("alerts"===e&&("compact"!==this.layout||!i.active.length))continue;if("batteries"===e&&!i.active.length)continue;(i.active.length>0||n)&&a.push(this._groupChip(i))}return a.length?q`<div class="chips">${a}</div>`:F}_statChip(t){let e="";"carbon_dioxide"===t.deviceClass&&(e=t.value>=1500?"bad":t.value>=1e3?"warn":""),"pm25"===t.deviceClass&&(e=t.value>=35?"bad":t.value>=12?"warn":"");const i=Math.abs(t.value)>=100?0:1;return q`
      <button class="chip stat ${e}" @click=${()=>this._moreInfo(t.entities[0])}>
        <ha-icon .icon=${Kt[t.deviceClass]??"mdi:gauge"}></ha-icon>
        <span class="label">${this._num(t.value,i)} ${t.unit}</span>
      </button>
    `}_groupChip(t){const e=Jt[t.id],i=t.active.length>0;let o=e.color,n=i?e.icon:e.iconOff,a=this._groupLabel(t);if("climate"===t.id){const e=this.hass.states[t.active[0]??t.entities[0]],i=String(e?.attributes.hvac_action??("off"===e?.state?"off":"idle"));"cooling"===i?(o="var(--apc-blue)",n="mdi:snowflake"):"heating"===i?n="mdi:fire":"drying"===i?(o="var(--apc-amber)",n="mdi:water-percent"):"fan"===i&&(o="var(--apc-light-blue)",n="mdi:fan"),a=this._climateLabel(e,i)}return q`
      <button
        class=${gt({chip:!0,active:i,selected:this._expanded===t.id})}
        style=${yt({"--c":o})}
        aria-expanded=${t.entities.length>1?String(this._expanded===t.id):F}
        @click=${()=>this._chipClick(t)}
      >
        <ha-icon .icon=${n}></ha-icon>
        <span class="label">${a}</span>
      </button>
    `}_groupLabel(t){const e=this.hass,i=t.active.length,o=(t,o,n)=>0===i?zt(e,n):zt(e,1===i?t:o,{n:i});switch(t.id){case"motion":return zt(e,i?"motion":"no_motion");case"doors":return o("door_open","doors_open","doors_closed");case"windows":return o("window_open","windows_open","windows_closed");case"covers":return o("cover_open","covers_open_n","covers_closed");case"locks":return o("lock_unlocked","lock_unlocked","locks_locked");case"lights":return o("light_on","lights_on_n","lights_off_all");case"fans":return o("fan_on","fans_on_n","fans_off_all");case"media":{if(!i)return zt(e,"media_idle");const o=e.states[t.active[0]].attributes.media_title;return 1===i&&o?o:zt(e,"media_playing")}case"alerts":return 1===i?zt(e,"alert"):zt(e,"alerts_n",{n:i});case"batteries":return zt(e,1===i?"battery_low":"batteries_low",{n:i});default:return""}}_climateLabel(t,e){const i=this.hass;if(!t)return"";const o=`climate_${e}`,n=["heating","cooling","drying","fan","idle","off"].includes(e)?zt(i,o):this._formatState(t),a=t.attributes.temperature,s=t.attributes.target_temp_low,r=t.attributes.target_temp_high;return"off"===t.state?n:"number"==typeof a?`${n} · ${this._num(a,1)}°`:"number"==typeof s&&"number"==typeof r?`${n} · ${this._num(s,0)}–${this._num(r,0)}°`:n}_renderDrawer(t){const e=this.hass,i=Jt[t.id],o=[...t.entities].sort((e,i)=>Number(t.active.includes(i))-Number(t.active.includes(e)));return q`
      <div class="drawer" style=${yt({"--c":i.color})}>
        ${o.map(i=>{const o=e.states[i];if(!o)return F;const n=Date.parse(o.last_changed);return q`
            <div
              class=${gt({row:!0,active:t.active.includes(i)})}
              role="button"
              tabindex="0"
              @click=${()=>this._moreInfo(i)}
              @keydown=${t=>"Enter"===t.key&&this._moreInfo(i)}
            >
              <ha-state-icon .hass=${e} .stateObj=${o}></ha-state-icon>
              <span class="row-name">${this._entityName(o)}</span>
              <span class="row-state">
                ${this._formatState(o)}
                ${Number.isNaN(n)?F:q`<span class="ago">${this._ago(n)}</span>`}
              </span>
            </div>
          `})}
      </div>
    `}_renderActions(t){return q`
      <div class=${gt({actions:!0,dense:t.length>=4})}>
        ${t.map(t=>q`
            <button
              class=${gt({action:!0,active:t.active})}
              style=${yt({"--c":t.color})}
              title=${t.name}
              aria-label=${t.name}
              ?disabled=${t.disabled}
              ${Wt({hasHold:this._hasAction(t.hold_action),hasDoubleTap:this._hasAction(t.double_tap_action),disabled:t.disabled})}
              @apc-action=${e=>this._quickAction(t,e.detail.action)}
            >
              <ha-icon .icon=${t.icon}></ha-icon>
              <span class="label">${t.name}</span>
            </button>
          `)}
      </div>
    `}_hasAction(t){return!!t&&"none"!==t.action}_chipClick(t){1!==t.entities.length?this._toggleExpanded(t.id):this._moreInfo(t.entities[0])}_toggleExpanded(t){this._expanded=this._expanded===t?void 0:t}_cardAction(t){const e=this._config;this._fireAction({tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},t)}_quickAction(t,e){this._fireAction({entity:t.entity,tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},e)}_fireAction(t,e){const i=t[`${e}_action`];this._hasAction(i)&&this.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:t,action:e}}))}_moreInfo(t,e){e?.stopPropagation(),t&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_lang(){return this.hass?.locale?.language||this.hass?.language||"en"}_num(t,e){return new Intl.NumberFormat(this._lang(),{maximumFractionDigits:e}).format(t)}_lastChange(t){let e;for(const i of t){const t=Date.parse(this.hass.states[i]?.last_changed??"");!Number.isNaN(t)&&(void 0===e||t>e)&&(e=t)}return e}_ago(t){const e=Math.max(0,(Date.now()-t)/1e3),i=this._lang(),o=(t,e)=>new Intl.NumberFormat(i,{style:"unit",unit:e,unitDisplay:"short"}).format(t);return e<60?zt(this.hass,"since_now"):e<3600?o(Math.floor(e/60),"minute"):e<86400?o(Math.floor(e/3600),"hour"):o(Math.floor(e/86400),"day")}_formatState(t){try{return this.hass?.formatEntityState?.(t)??t.state}catch{return t.state}}_entityName(t){if(!t)return"";const e=t.attributes.friendly_name??t.entity_id,i=this.hass?.areas?.[this._config.area]?.name;if(i&&e.toLowerCase().startsWith(i.toLowerCase()+" ")){const t=e.slice(i.length+1).trim();return t?t.charAt(0).toUpperCase()+t.slice(1):e}return e}}Qt.styles=Ft,t([pt({attribute:!1})],Qt.prototype,"hass",void 0),t([pt({reflect:!0})],Qt.prototype,"layout",void 0),t([ht()],Qt.prototype,"_config",void 0),t([ht()],Qt.prototype,"_expanded",void 0),customElements.get("area-pulse-card")||(customElements.define("area-pulse-card",Qt),window.customCards=window.customCards||[],window.customCards.push({type:"area-pulse-card",name:"Area Pulse Card",description:"Presence, climate, openings, alerts and quick actions for an area.",preview:!0}),console.info("%c AREA-PULSE-CARD %c v1.0.0 ","color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px","color:#03a9f4;background:#fff0;font-weight:700;padding:2px 4px"));export{Qt as AreaPulseCard};
