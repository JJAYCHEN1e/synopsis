module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({0:function(e,t){e.exports=flarum.core.compat.app},11:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);o.a.initializers.add("ianm-koobid",(function(){o.a.extensionData.for("ianm-koobid").registerSetting({label:o.a.translator.trans("ianm-koobid.admin.settings.excerpt-label"),setting:"ianm-koobid.excerpt_length",type:"number"}).registerSetting({label:o.a.translator.trans("ianm-koobid.admin.settings.rich-excerpts"),setting:"ianm-koobid.rich-excerpts",type:"boolean"}).registerSetting({label:o.a.translator.trans("ianm-koobid.admin.settings.excerpt-type"),setting:"ianm-koobid.excerpt-type",options:["first","last"].reduce((function(e,t){return e[t]=o.a.translator.trans("ianm-koobid.admin.settings."+t+"-label"),e}),{}),type:"select"})}))}});
//# sourceMappingURL=admin.js.map