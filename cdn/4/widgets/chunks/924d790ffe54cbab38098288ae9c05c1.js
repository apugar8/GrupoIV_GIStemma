/*! For license information please see 924d790ffe54cbab38098288ae9c05c1.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[52747],{52747:(e,t,i)=>{i.r(t),i.d(t,{calcite_rating:()=>d});var a=i(30396),n=i(56214),s=i(31964),o=i(32544),l=i(37145),c=i(29340),r=i(36578),u=i(39351);const h=({full:e,scale:t,partial:i})=>(0,a.h)("calcite-icon",{class:i?void 0:"icon",icon:e?"star-f":"star",scale:t}),d=class{constructor(e){(0,a.r)(this,e),this.calciteRatingChange=(0,a.c)(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null,this.focusValue=null,this.hasFocus=!1},this.handleRatingFocusIn=()=>{const e=this.value>0?this.value-1:0,t=this.inputRefs[e],i=Number(t.value);t.select(),this.focusValue=i,this.hoverValue=i,this.hasFocus=!0},this.handleRatingFocusLeave=()=>{this.focusValue=null,this.hoverValue=null,this.hasFocus=!1},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleInputKeyDown=e=>{const t=e.currentTarget,i=Number(t.value),a=e.key,n=" "==a?void 0:Number(a);if(this.emit=!0,isNaN(n))switch(a){case"Enter":case" ":this.value=this.required||this.value!==i?i:0;break;case"ArrowLeft":this.value=i-1;break;case"ArrowRight":this.value=i+1;break;case"Tab":this.hasFocus&&(this.hasFocus=!1,this.focusValue=null,this.hoverValue=null)}else(!this.required&&n>=0&&n<=this.max||this.required&&n>0&&n<=this.max)&&(this.value=n)},this.handleInputChange=e=>{if(!0===this.isKeyboardInteraction){const t=Number(e.target.value);this.focusValue=t,this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{const t=e.currentTarget,i=Number(t.firstChild.value||0);this.hoverValue=i,this.focusValue=null},this.handleLabelPointerDown=e=>{const t=e.currentTarget,i=Number(t.firstChild.value||0);this.focusValue=null,this.hoverValue=null,this.emit=!0,this.value=this.required||this.value!==i?i:0},this.emit=!1,this.guid=`calcite-ratings-${(0,s.g)()}`,this.isKeyboardInteraction=!0,this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0,this.focusValue=void 0,this.hasFocus=void 0}onMessagesChange(){}handleValueUpdate(e){this.hoverValue=e,this.focusValue=e,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,u.c)(this),(0,l.c)(this),(0,n.c)(this)}async componentWillLoad(){await(0,u.s)(this),(0,c.a)(this),this.inputRefs=Array(this.max)}componentWillRender(){this.starsMap=Array.from({length:this.max},((e,t)=>{const i=t+1,a=!this.focusValue&&!this.hoverValue&&this.average&&!this.value&&i<=this.average,n=i===this.value,s=this.isKeyboardInteraction&&this.hasFocus&&this.focusValue===i,o=this.average&&this.average+1-i,l=i<=this.hoverValue;return{average:a,checked:n,focused:s,fraction:o,hovered:l,id:`${this.guid}-${i}`,idx:t,partial:!this.focusValue&&!this.hoverValue&&!this.value&&!l&&o>0&&o<1,selected:this.value>=i,value:i}}))}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){(0,r.d)(this),(0,u.d)(this),(0,l.d)(this),(0,n.d)(this)}componentDidRender(){(0,o.u)(this)}render(){return(0,a.h)(a.H,{onBlur:this.handleRatingFocusLeave,onFocus:this.handleRatingFocusIn,onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},(0,a.h)("span",{class:"wrapper"},(0,a.h)("fieldset",{class:"fieldset",disabled:this.disabled},(0,a.h)("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:e,checked:t,focused:i,fraction:n,hovered:s,id:o,idx:l,partial:c,selected:r,value:u})=>(0,a.h)("label",{class:{star:!0,focused:i,selected:r,hovered:s,average:e,partial:c},htmlFor:o,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver},(0,a.h)("input",{checked:t,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:o,name:this.guid,onChange:this.handleInputChange,onKeyDown:this.handleInputKeyDown,ref:e=>(this.inputRefs[l]=e,(1===u||u===this.value)&&(this.inputFocusRef=e)),type:"radio",value:u}),(0,a.h)(h,{full:r||e,scale:this.scale}),c&&(0,a.h)("div",{class:"fraction",style:{width:100*n+"%"}},(0,a.h)(h,{full:!0,partial:!0,scale:this.scale})),(0,a.h)("span",{class:"visually-hidden"},this.messages.stars.replace("${num}",`${u}`))))),(this.count||this.average)&&this.showChip?(0,a.h)("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&(0,a.h)("span",{class:"number--average"},this.average.toString()),!!this.count&&(0,a.h)("span",{class:"number--count"},"(",this.count?.toString(),")")):null),(0,a.h)(n.H,{component:this})))}onLabelClick(){this.setFocus()}async setFocus(){await(0,c.c)(this),this.inputFocusRef?.focus()}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([read-only]){pointer-events:none}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},56214:(e,t,i)=>{i.d(t,{H:()=>b,a:()=>f,c:()=>h,d:()=>m,r:()=>u,s:()=>r});var a=i(9615),n=i(30396);const s="hidden-form-input";function o(e){return"checked"in e}const l=new WeakMap,c=new WeakSet;function r(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function u(e){e.formEl?.reset()}function h(e){const{el:t,value:i}=e,n=(0,a.c)(t,"form");if(!n||function(e,t){const i="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(i,(e=>{a=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),a}(n,t))return;e.formEl=n,e.defaultValue=i,o(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||d).bind(e);n.addEventListener("reset",s),l.set(e.el,s),c.add(t)}function d(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const a=l.get(t);i.removeEventListener("reset",a),l.delete(t),e.formEl=null,c.delete(t)}function f(e,t){e.defaultValue=t}const v=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},p=e=>e.removeEventListener("change",v);function g(e,t,i){const{defaultValue:a,disabled:n,name:s,required:l}=e;t.defaultValue=a,t.disabled=n,t.name=s,t.required=l,t.tabIndex=-1,o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const b=({component:e})=>(function(e){const{el:t,formEl:i,name:a,value:n}=e,{ownerDocument:o}=t,l=t.querySelectorAll(`input[slot="${s}"]`);if(!i||!a)return void l.forEach((e=>{p(e),e.remove()}));const c=Array.isArray(n)?n:[n],r=[],u=new Set;let h;l.forEach((t=>{const i=c.find((e=>e==t.value));null!=i?(u.add(i),g(e,t,i)):r.push(t)})),c.forEach((t=>{if(u.has(t))return;let i=r.pop();i||(i=o.createElement("input"),i.slot=s),h||(h=o.createDocumentFragment()),h.append(i),i.addEventListener("change",v),g(e,i,t)})),h&&t.append(h),r.forEach((e=>{p(e),e.remove()}))}(e),(0,n.h)("slot",{name:s}))},32544:(e,t,i)=>{function a(){}function n(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=a);e.el.click=HTMLElement.prototype.click,"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}i.d(t,{u:()=>n})},37145:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>m,d:()=>f,g:()=>v,l:()=>s});var a=i(9615);const n="calciteInternalLabelClick",s="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",l="calcite-label",c=new WeakMap,r=new WeakMap,u=new WeakMap,h=new Set,d=e=>{const{id:t}=e,i=t&&(0,a.q)(e,{selector:`${l}[for="${t}"]`});if(i)return i;const n=(0,a.c)(e,l);return!n||function(e,t){let i;const a="custom-element-ancestor-check",n=a=>{a.stopImmediatePropagation();const n=a.composedPath();i=n.slice(n.indexOf(t),n.indexOf(e))};e.addEventListener(a,n,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,n);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(n,e)?null:n};function m(e){const t=d(e.el);if(c.has(t)||!t&&h.has(e))return;const i=b.bind(e);if(t){e.labelEl=t;const a=p.bind(e);c.set(e.labelEl,a),e.labelEl.addEventListener(n,a),h.delete(e),document.removeEventListener(s,r.get(e)),u.set(e,i),document.addEventListener(o,i)}else h.has(e)||(i(),document.removeEventListener(o,u.get(e)))}function f(e){if(h.delete(e),document.removeEventListener(s,r.get(e)),document.removeEventListener(o,u.get(e)),r.delete(e),u.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);e.labelEl.removeEventListener(n,t),c.delete(e.labelEl)}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function p(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function g(){h.has(this)&&m(this)}function b(){h.add(this);const e=r.get(this)||g.bind(this);r.set(this,e),document.addEventListener(s,e)}},29340:(e,t,i)=>{i.d(t,{a:()=>s,c:()=>l,s:()=>o});const a=new WeakMap,n=new WeakMap;function s(e){n.set(e,new Promise((t=>a.set(e,t))))}function o(e){a.get(e)()}function l(e){return n.get(e)}},39351:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>d,s:()=>c,u:()=>u});var a=i(30396),n=i(36578);const s={};function o(){throw new Error("could not fetch component message bundle")}function l(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await r(e,e.effectiveLocale),l(e)}async function r(e,t){const{el:i}=e,l=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return s[i]||(s[i]=fetch((0,a.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||o(),e.json()))).catch((()=>o()))),s[i]}((0,n.g)(t,"t9n"),l)}async function u(e,t){e.defaultMessages=await r(e,t),l(e)}function h(e){e.onMessagesChange=m}function d(e){e.onMessagesChange=void 0}function m(){l(this)}}}]);