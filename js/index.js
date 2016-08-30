!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("regularjs")):"function"==typeof define&&define.amd?define(["Regular"],t):"object"==typeof exports?exports.RGUI=t(require("regularjs")):e.RGUI=t(e.Regular)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var r=n(8);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t._=t.Component=void 0;var r=n(3),s=o(r),a=n(7),c=o(a);t.Component=s["default"],t._=c["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=o(r),a=n(5),c=o(a),i=n(6),u=o(i),d=n(7),l=o(d),f=s["default"].extend({config:function(){this.defaults({readonly:!1,disabled:!1,visible:!0,"class":""}),this.supr()},defaults:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l["default"].defaults.apply(l["default"],[this.data].concat(t))},watch:function(){}}).filter(c["default"]).directive(u["default"]);t["default"]=f},function(t,n){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};n.dateFormat=function(){var e=function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e+="",e.length<=1?"0"+e:e},t={yyyy:function(e){return e.getFullYear()},MM:function(t){return e(t.getMonth()+1)},dd:function(t){return e(t.getDate())},HH:function(t){return e(t.getHours())},mm:function(t){return e(t.getMinutes())},ss:function(t){return e(t.getSeconds())}},n=new RegExp(Object.keys(t).join("|"),"g");return function(e){var o=arguments.length<=1||void 0===arguments[1]?"yyyy-MM-dd HH:mm":arguments[1];return e?(e=new Date(e),o.replace(n,function(n){return t[n]?t[n](e):""})):""}}(),n.format=function(e,t){for(var o=arguments.length,r=Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return n[t+"Format"].apply(n,[e].concat(r))},t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),s=o(r),a={};a["z-crt"]=s["default"].createBoolClassDirective("z-crt"),a["z-sel"]=s["default"].createBoolClassDirective("z-sel"),a["z-chk"]=s["default"].createBoolClassDirective("z-chk"),a["z-act"]=s["default"].createBoolClassDirective("z-act"),a["z-dis"]=s["default"].createBoolClassDirective("z-dis"),a["r-show"]=s["default"].createBoolDirective(function(e,t){e.style.display=t?"block":""}),a["r-autofocus"]=s["default"].createBoolDirective(function(e,t){t&&setTimeout(function(){return e.focus()},0)}),t["default"]=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=n(4),s={defaults:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return n.forEach(function(t){for(var n in t)t.hasOwnProperty(n)&&void 0===e[n]&&(e[n]=t[n])}),e},createBoolDirective:function(e){return function(t,n){var r=this;"object"===("undefined"==typeof n?"undefined":o(n))&&"expression"===n.type?this.$watch(n,function(n,o){!n!=!o&&e.call(r,t,n)}):(n||""===n)&&e.call(this,t,!0)}},createBoolClassDirective:function(e){return s.createBoolDirective(function(t,n){r.dom[n?"addClass":"delClass"](t,e)})}};t["default"]=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=n(9),s=o(r);t.Overlay=s["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=n(10),a=o(s),c=n(11),i=o(c),u=n(12),d=o(u),l=n(4),f=r.Component.extend({name:"overlay",template:a["default"],config:function(){this.defaults({open:!1,trigger:"click",direction:"bottom-left"}),this.supr(),this.watch()},watch:function(){var e=this;this.$watch("open",function(t,n){var o=f.opens.indexOf(e);t&&o<0?f.opens.push(e):!t&&o>=0&&f.opens.splice(o,1),e.$emit("change",{sender:e,open:t,trigger:e.data.trigger,direction:e.data.direction})})},destroy:function(){var e=f.opens.indexOf(this);e>=0&&f.opens.splice(e,1),this.supr()},toggle:function(e){this.data.disabled||(void 0===e&&(e=!this.data.open),this.data.open=e,this.$emit("toggle",{sender:this,open:e,trigger:this.data.trigger,direction:this.data.direction}))}});f.opens=[],l.dom.on(document,"click",function(e){f.opens.forEach(function(t,n){for(var o=t.$refs.element,r=e.target;r;){if(o===r)return;r=r.parentElement}t.toggle(!1),t.$update()})}),f.Head=r.Component.extend({name:"overlay.head",template:i["default"]}),f.Body=r.Component.extend({name:"overlay.body",template:d["default"]}),t["default"]=f},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:{type:"expression",body:"['u-overlay u-overlay-',c._sg_('direction', d, e),' ',c._sg_('class', d, e)].join('')",constant:!1,setbody:!1}},{type:"attribute",name:"z-dis",value:{type:"expression",body:"c._sg_('disabled', d, e)",constant:!1,setbody:"c._ss_('disabled',p_,d, '=', 1)"}},{type:"attribute",name:"r-hide",value:{type:"expression",body:"(!c._sg_('visible', d, e))",constant:!1,setbody:!1}},{type:"attribute",name:"ref",value:"element"},{type:"if",test:{type:"expression",body:"c._sg_('trigger', d, e)==='hover'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-mouseleave",value:{type:"expression",body:"c['toggle'](false)",constant:!1,setbody:!1}}]],alternate:[]}],children:[{type:"text",text:"\n    "},{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}},{type:"text",text:"\n"}]}]},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:"overlay_hd"},{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='click'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-click",value:{type:"expression",body:"c._sg_('$outer', c)['toggle']()",constant:!1,setbody:!1}}]],alternate:[{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='dblclick'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-dblclick",value:{type:"expression",body:"c._sg_('$outer', c)['toggle']()",constant:!1,setbody:!1}}]],alternate:[{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='hover'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-mouseenter",value:{type:"expression",body:"c._sg_('$outer', c)['toggle'](true)",constant:!1,setbody:!1}}]],alternate:[]}]}]}],children:[{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}}]}]},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:"overlay_bd"},{type:"attribute",name:"r-show",value:{type:"expression",body:"c._sg_('open', c._sg_('data', c._sg_('$outer', c)))",constant:!1,setbody:"c._ss_('open',p_,c._sg_('data', c._sg_('$outer', c)), '=', 0)"}}],children:[{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}}]}]}])});