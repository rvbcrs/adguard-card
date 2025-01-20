/*! For license information please see adguard-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,t,s)},r=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,$=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);n.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,m?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,U=document,O=()=>U.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=I(1),q=(I(2),I(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,Z=U.createTreeWalker(U,129);function F(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===R?"!--"===h[1]?r=M:void 0!==h[1]?r=z:void 0!==h[2]?(D.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=j):void 0!==h[3]&&(r=j):r===j?">"===h[0]?(r=n??R,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?j:'"'===h[3]?L:B):r===L||r===B?r=j:r===M||r===z?r=R:(r=j,n=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";o+=r===R?s+P:l>=0?(i.push(a),s.slice(0,l)+x+s.slice(l)+C+d):s+C+(-2===l?e:d)}return[F(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[h,l]=J(t,e);if(this.el=K.createElement(h,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=l[o++],s=i.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(D.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),Z.nextNode(),a.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===q)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=H(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);Z.currentNode=i;let n=Z.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=Z.nextNode(),o++)}return Z.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),H(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Y(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=G}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Q(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Q(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),o||=!H(a)||a!==this._$AH[r],a===G?t=G:t!==G&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class it extends tt{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??G)===q)return;const s=this._$AH,i=t===G&&s!==G||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==G&&(s===G||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,Y),(w.litHtmlVersions??=[]).push("3.2.1");class rt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Y(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const at=globalThis.litElementPolyfillSupport;if(at?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1"),console.log("AdGuard Card is being loaded..."),!customElements.get("adguard-card")){class t extends rt{static get properties(){return{hass:{type:Object},config:{type:Object},_expanded:{type:Boolean}}}constructor(){super(),this._expanded=!1}static get styles(){return o`
        :host {
          display: block;
          padding: 16px;
        }
        ha-card {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          padding: 0 16px 16px;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .stat-content {
          display: flex;
          flex-direction: column;
        }
        .stat-label {
          font-size: 0.875rem;
          color: var(--secondary-text-color);
        }
        .stat-value {
          font-size: 1.25rem;
          font-weight: 500;
        }
        .switches {
          border-top: 1px solid var(--divider-color);
          padding: 16px;
        }
        .switch-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        .switch-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .expand-button {
          width: 100%;
          padding: 16px;
          background: none;
          border: none;
          border-top: 1px solid var(--divider-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: var(--primary-text-color);
        }
        .rotate {
          transform: rotate(180deg);
        }
      `}render(){if(!this.hass||!this.config)return V``;const t=this.hass.states["sensor.adguard_home_dns_query_s"]?.state||"0",e=this.hass.states["sensor.adguard_home_aantal_dns_query_s_geblokkeerd"]?.state||"0",s=this.hass.states["sensor.adguard_home_dns_query_s_geblokkeerd_ratio"]?.state||"0",i=this.hass.states["sensor.adguard_home_gemiddelde_verwerkingssnelheid"]?.state||"0",n={protection:"on"===this.hass.states["switch.adguard_home_bescherming"]?.state,filtering:"on"===this.hass.states["switch.adguard_home_filteren"]?.state,parental:"on"===this.hass.states["switch.adguard_home_ouderlijk_toezicht"]?.state,queryLog:"on"===this.hass.states["switch.adguard_home_query_logboek"]?.state,safeBrowsing:"on"===this.hass.states["switch.adguard_home_veilig_browsen"]?.state,safeSearch:"on"===this.hass.states["switch.adguard_home_veilig_zoeken"]?.state};return V`
        <ha-card>
          <div class="card-header">
            <ha-icon icon="mdi:shield"></ha-icon>
            <h2>AdGuard Home</h2>
          </div>

          <div class="stats-grid">
            <div class="stat-item">
              <ha-icon
                icon="mdi:chart-line"
                style="color: var(--success-color)"
              ></ha-icon>
              <div class="stat-content">
                <span class="stat-label">DNS Queries</span>
                <span class="stat-value">${t}</span>
              </div>
            </div>
            <div class="stat-item">
              <ha-icon
                icon="mdi:block-helper"
                style="color: var(--error-color)"
              ></ha-icon>
              <div class="stat-content">
                <span class="stat-label">Geblokkeerd</span>
                <span class="stat-value">${e}</span>
              </div>
            </div>
            <div class="stat-item">
              <ha-icon
                icon="mdi:shield"
                style="color: var(--info-color)"
              ></ha-icon>
              <div class="stat-content">
                <span class="stat-label">Blokkerings Ratio</span>
                <span class="stat-value">${s}%</span>
              </div>
            </div>
            <div class="stat-item">
              <ha-icon
                icon="mdi:clock"
                style="color: var(--warning-color)"
              ></ha-icon>
              <div class="stat-content">
                <span class="stat-label">Verwerkingssnelheid</span>
                <span class="stat-value">${i}ms</span>
              </div>
            </div>
          </div>

          <div class="switches">
            ${this._renderSwitch("Bescherming","mdi:shield","protection",n.protection)}
            ${this._renderSwitch("Filteren","mdi:block-helper","filtering",n.filtering)}
            ${this._renderSwitch("Ouderlijk toezicht","mdi:account-child","parental",n.parental)}
            ${this._renderSwitch("Query logboek","mdi:book-open","queryLog",n.queryLog)}
            ${this._renderSwitch("Veilig browsen","mdi:shield-check","safeBrowsing",n.safeBrowsing)}
            ${this._renderSwitch("Veilig zoeken","mdi:magnify","safeSearch",n.safeSearch)}
          </div>

          <button class="expand-button" @click=${this._toggleExpanded}>
            <span>Extra Statistieken</span>
            <ha-icon
              icon="mdi:chevron-down"
              class="${this._expanded?"rotate":""}"
            ></ha-icon>
          </button>

          ${this._expanded?this._renderExtraStats():""}
        </ha-card>
      `}_renderSwitch(t,e,s,i){return V`
        <div class="switch-row">
          <div class="switch-label">
            <ha-icon icon="${e}"></ha-icon>
            <span>${t}</span>
          </div>
          <ha-switch
            .checked=${i}
            @change=${t=>this._toggleSwitch(s,t.target.checked)}
          ></ha-switch>
        </div>
      `}_renderExtraStats(){const t=this.hass.states["sensor.adguard_home_aantal_regels"]?.state||"0",e=this.hass.states["sensor.adguard_home_ouderlijk_toezicht_geblokkeerd"]?.state||"0",s=this.hass.states["sensor.adguard_home_veilig_zoeken_afgedwongen"]?.state||"0",i=this.hass.states["sensor.adguard_home_veilig_zoeken_geblokkeerd"]?.state||"0";return V`
        <div class="stats-grid" style="padding-top: 16px;">
          <div class="stat-item">
            <ha-icon icon="mdi:format-list-numbered"></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Aantal Regels</span>
              <span class="stat-value">${t}</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon icon="mdi:account-child-outline"></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Ouderlijk Toezicht Geblokkeerd</span>
              <span class="stat-value">${e}</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon icon="mdi:magnify-scan"></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Veilig Zoeken Afgedwongen</span>
              <span class="stat-value">${s}</span>
            </div>
          </div>
          <div class="stat-item">
            <ha-icon icon="mdi:magnify-close"></ha-icon>
            <div class="stat-content">
              <span class="stat-label">Veilig Zoeken Geblokkeerd</span>
              <span class="stat-value">${i}</span>
            </div>
          </div>
        </div>
      `}_toggleExpanded(){this._expanded=!this._expanded}_toggleSwitch(t,e){const s=e?"turn_on":"turn_off",i=`switch.adguard_home_${t}`;this.hass.callService("switch",s,{entity_id:i})}setConfig(t){this.config=t}getCardSize(){return 6}}window.customElements.define("adguard-card",t),console.log("AdGuard Card has been registered!")}window.customCards=window.customCards||[],window.customCards.push({type:"adguard-card",name:"AdGuard Card",description:"A custom card for AdGuard Home stats and controls"})})();
//# sourceMappingURL=adguard-card.js.map