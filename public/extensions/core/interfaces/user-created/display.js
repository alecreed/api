parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"IQAD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../../mixins/interface"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o={mixins:[t.default],computed:{userInfo:function(){return this.value?"object"===r(this.value)?this.value:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}};exports.default=o;
(function(){var a=exports.default||module.exports;"function"==typeof a&&(a=a.options),Object.assign(a,{render:function(){var a=this,s=a.$createElement,e=a._self._c||s;return a.userInfo?e("div",["name"!==a.options.display?e("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===a.options.display?a.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"display-user",attrs:{size:28,src:a.src,alt:a.displayValue,color:"light-gray"}}):a._e(),a._v(" "),"avatar"!==a.options.display?e("span",{staticClass:"label"},[e("div",[a._v(a._s(a.displayValue))])]):a._e()],1):a._e()},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-9ff4da",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["IQAD"], "__DirectusExtension__")