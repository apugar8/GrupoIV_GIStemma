define(["exports","./index-86304dcd","./index2-600fb1b2"],(function(e,t,s){"use strict";const i=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisDatasetInputPopoverClose=t.createEvent(this,"analysisDatasetInputPopoverClose",7),this.analysisDatasetInputPopoverSelectionChange=t.createEvent(this,"analysisDatasetInputPopoverSelectionChange",7),this.buildPickListItem=e=>t.h("calcite-pick-list-item",{key:e.id,value:e.id,label:e.name,description:e.description,selected:void 0!==this.selectedDatasetIds&&this.selectedDatasetIds.includes(e.id),onClick:this.onPickListChange}),this.onPickListChange=async()=>{var e,t;const s=await(null===(e=this.picklist)||void 0===e?void 0:e.getSelectedItems()),i=Array.from(null!==(t=null==s?void 0:s.keys())&&void 0!==t?t:[]);this.analysisDatasetInputPopoverSelectionChange.emit({selectedDatasetIds:i}),"multi"!==this.selectionMode&&(this.open=!1)},this.analysisDatasets=void 0,this.selectionMode=void 0,this.referenceElement=void 0,this.placement="auto",this.open=void 0,this.selectedDatasetIds=void 0,this.popoverWidth=void 0}async componentWillLoad(){({strings:this.strings}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}componentDidLoad(){setTimeout((()=>requestAnimationFrame((()=>{var e;return null===(e=this.popoverElement)||void 0===e?void 0:e.setFocus()}))),1),setTimeout((()=>{var e,t;null===(t=null===(e=this.popoverElement)||void 0===e?void 0:e.reposition)||void 0===t||t.call(e)}),s.UIDefaults.PopoverTimer)}async reposition(){var e,t;await(null===(t=null===(e=this.popoverElement)||void 0===e?void 0:e.reposition)||void 0===t?void 0:t.call(e))}render(){var e,s,i,o;const n=null!==(e=this.popoverWidth)&&void 0!==e?e:null===(s=this.referenceElement)||void 0===s?void 0:s.getBoundingClientRect().width;return t.h(t.Host,{class:"analysis-popover js-app-flyout"},t.h("calcite-popover",{ref:e=>{this.popoverElement=e},autoClose:!0,referenceElement:null!==(i=this.referenceElement)&&void 0!==i?i:"analysis-dataset-input",placement:this.placement,open:this.open,closable:!0,heading:this.strings.heading,label:this.strings.heading,focusTrapDisabled:!0,onCalcitePopoverClose:()=>this.analysisDatasetInputPopoverClose.emit()},t.h("calcite-panel",{style:{width:void 0!==n?`${n}px`:void 0}},t.h("calcite-pick-list",{class:"popover-content",multiple:"multi"===this.selectionMode,filterEnabled:!0,ref:e=>{this.picklist=e}},null===(o=this.analysisDatasets)||void 0===o?void 0:o.map(this.buildPickListItem)))))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex}.popover-content{height:var(--analysis-popover-content-height)}"}},[1,"analysis-dataset-input-popover",{analysisDatasets:[16],selectionMode:[513,"selection-mode"],referenceElement:[16],placement:[513],open:[1540],selectedDatasetIds:[16],popoverWidth:[514,"popover-width"],reposition:[64]}]);function o(){"undefined"!=typeof customElements&&["analysis-dataset-input-popover"].forEach((e=>{"analysis-dataset-input-popover"===e&&(customElements.get(e)||customElements.define(e,i))}))}o(),e.AnalysisDatasetInputPopover=i,e.defineCustomElement=o}));