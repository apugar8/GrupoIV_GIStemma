"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[40353],{52946:(e,a,t)=>{t.d(a,{a:()=>r});const r={BingMapsLayer:async()=>(await t.e(82549).then(t.bind(t,82549))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(44459),t.e(51505),t.e(12135),t.e(21002)]).then(t.bind(t,21002))).default,CSVLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(44459),t.e(25166)]).then(t.bind(t,7344))).default,ElevationLayer:async()=>(await Promise.all([t.e(33896),t.e(89289),t.e(94935),t.e(59039)]).then(t.bind(t,36550))).default,FeatureLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(44459),t.e(71786)]).then(t.bind(t,44459)).then((function(e){return e.F}))).default,GroupLayer:async()=>(await t.e(7529).then(t.bind(t,7529))).default,GeoRSSLayer:async()=>(await t.e(89740).then(t.bind(t,89740))).default,ImageryLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(78899),t.e(88768),t.e(25012),t.e(50935)]).then(t.bind(t,50935))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(37085),t.e(89289),t.e(74970),t.e(19601),t.e(94935),t.e(88768),t.e(25012),t.e(80806)]).then(t.bind(t,80806))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(33896),t.e(74970),t.e(19601),t.e(51505),t.e(40865)]).then(t.bind(t,40865))).default,KMLLayer:async()=>(await Promise.all([t.e(37085),t.e(23194)]).then(t.bind(t,23194))).default,MapImageLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(78624),t.e(81345),t.e(2807),t.e(8079),t.e(23110)]).then(t.bind(t,8079))).default,MapNotesLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(74970),t.e(44459),t.e(19601),t.e(84299)]).then(t.bind(t,60587))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(12242),t.e(41081)]).then(t.bind(t,41081))).default,PointCloudLayer:async()=>(await Promise.all([t.e(33896),t.e(86779)]).then(t.bind(t,86779))).default,RouteLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(44459),t.e(98483)]).then(t.bind(t,58298))).default,SceneLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(89289),t.e(78624),t.e(81345),t.e(44459),t.e(51505),t.e(12135),t.e(72063)]).then(t.bind(t,72063))).default,StreamLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(78624),t.e(81345),t.e(95501)]).then(t.bind(t,95501))).default,TileLayer:async()=>(await Promise.all([t.e(33896),t.e(37085),t.e(78624),t.e(81345),t.e(94935),t.e(2807),t.e(41570)]).then(t.bind(t,41570))).default,UnknownLayer:async()=>(await t.e(51239).then(t.bind(t,51239))).default,UnsupportedLayer:async()=>(await t.e(9137).then(t.bind(t,9137))).default,VectorTileLayer:async()=>(await Promise.all([t.e(33896),t.e(94935),t.e(10661),t.e(3506)]).then(t.bind(t,3506))).default,WebTileLayer:async()=>(await t.e(12242).then(t.bind(t,12242)).then((function(e){return e.W}))).default,WMSLayer:async()=>(await t.e(80670).then(t.bind(t,80670))).default,WMTSLayer:async()=>(await Promise.all([t.e(12242),t.e(75749)]).then(t.bind(t,75749))).default}},40353:(e,a,t)=>{t.r(a),t.d(a,{p:()=>f,t:()=>i,u:()=>s});var r=t(47817),n=t(72304),l=t(52946);function i(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}function s(e){switch(e.type){case"Map Service":return function(e){return function(e){return m(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return o(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),i(e,"Map Notes")?{className:"MapNotesLayer"}:i(e,"Route Layer")?{className:"RouteLayer"}:1===d(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return o(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(-1!==e.typeKeywords.indexOf(t))return{className:a[t]}}return m(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,t,r;await e.load();const n=null!=(a=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(r=(await m(e.url)).cacheType)?void 0:r.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.s("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function c(e){return(0,l.a[e.className])().then((a=>({constructor:a,properties:e.properties})))}function o(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((a=>d(a)>0?u(a):m(e.url).then(u)))}function u(e){return 1===d(e)&&{id:(0,r.I)(y(e))}}function y(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function d(e){var a,t,r,n;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(r=null==e||null==(n=e.tables)?void 0:n.length)?r:0)}function m(e){return(0,r.U)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}const f=Object.freeze({__proto__:null,fromItem:function(e){return!e.portalItem||e.portalItem instanceof n.default||(e={...e,portalItem:new n.default(e.portalItem)}),function(e){return e.load().then(s).then(c)}(e.portalItem).then((a=>{const t={portalItem:e.portalItem,...a.properties},r=a.constructor;return Promise.resolve(new r(t))}))},selectLayerClassPath:s})}}]);