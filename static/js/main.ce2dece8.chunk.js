(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{1:function(e,a,t){e.exports={btn:"components_btn__3KGA_",disabled:"components_disabled__15KGD",inputWrapper:"components_inputWrapper__3usDm",wrapper:"components_wrapper__W4cUA",btnWrapper:"components_btnWrapper__1MmJY",displayCounter:"components_displayCounter__27Cnl",red:"components_red__2_D-U",displayTuner:"components_displayTuner__31M_f",error:"components_error__POgVn",number:"components_number__cJbDt"}},11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},17:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),u=t(5),l=t.n(u),c=(t(16),t(17),t(1)),o=t.n(c);var s=function(e){return n.a.createElement("div",null,e.value)};var i=function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:e.disabled?"".concat(o.a.btn," ").concat(o.a.disabled):o.a.btn,disabled:e.disabled,onClick:e.counter},e.name))},m=t(3),p=t(2),v={maxValue:5,value:"enter values and press 'set'",startValue:0,error:!1};var d=function(){var e=Object(m.c)((function(e){return e.app})),a=Object(m.b)(),t=!1;return"string"===typeof e.value&&(t=!0),n.a.createElement("div",{className:o.a.wrapper},n.a.createElement("div",{className:"".concat("number"==typeof e.value?"".concat(o.a.number):""," ").concat(e.error||e.value===e.maxValue?"".concat(o.a.red," ").concat(o.a.displayCounter):o.a.displayCounter)},n.a.createElement(s,{value:e.value})),n.a.createElement("div",{className:o.a.btnWrapper},n.a.createElement(i,{counter:function(){a({type:"NEW_COUNT"})},disabled:t||e.value===e.maxValue,name:"Inc"}),n.a.createElement(i,{counter:function(){a({type:"SAVE_VALUE"})},disabled:t,name:"Reset"})))},b=function(e){return n.a.createElement("div",{className:o.a.inputWrapper},n.a.createElement("div",null,"max value: "),n.a.createElement("input",{className:e.error?o.a.error:"",type:"number",value:e.value,onChange:function(a){e.addValue(+a.currentTarget.value)}}))},_=function(e){return n.a.createElement("div",{className:o.a.inputWrapper},n.a.createElement("div",null,"start value: "),n.a.createElement("input",{className:e.value<0||e.error?o.a.error:"",type:"number",value:e.value,onChange:function(a){e.addValue(+a.currentTarget.value)}}))};var E=function(){var e=Object(m.c)((function(e){return e.app})),a=Object(m.b)(),t=!1;return"number"===typeof e.value&&(t=!0),(e.startValue<0||e.maxValue<0||e.startValue>=e.maxValue)&&(t=!0),n.a.createElement("div",{className:o.a.wrapper},n.a.createElement("div",{className:o.a.displayTuner},n.a.createElement(b,{error:e.startValue>=e.maxValue,value:e.maxValue,addValue:function(e){a(function(e){return{type:"ADD_MAX_VALUE",value:e}}(e))}}),n.a.createElement(_,{error:e.error,value:e.startValue,addValue:function(e){a(function(e){return{type:"ADD_MIN_VALUE",value:e}}(e))}})),n.a.createElement("div",{className:o.a.btnWrapper},n.a.createElement(i,{counter:function(){a({type:"SAVE_VALUE"})},disabled:t,name:"Set"})))};var V=function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(E,null),n.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=t(4),y=Object(f.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MAX_VALUE":return a.value<=e.startValue||e.startValue<0?Object(p.a)(Object(p.a)({},e),{},{value:"Incorrect value!",maxValue:a.value,error:!0}):Object(p.a)(Object(p.a)({},e),{},{value:"enter values and press 'set'",maxValue:a.value,error:!1});case"ADD_MIN_VALUE":return a.value<0||a.value>=e.maxValue?Object(p.a)(Object(p.a)({},e),{},{value:"Incorrect value!",startValue:a.value,error:!0}):Object(p.a)(Object(p.a)({},e),{},{value:"enter values and press 'set'",startValue:a.value,error:!1});case"SAVE_VALUE":return Object(p.a)(Object(p.a)({},e),{},{value:e.startValue});case"NEW_COUNT":return"number"===typeof e.value?Object(p.a)(Object(p.a)({},e),{},{value:++e.value}):e;default:return e}}}),O=Object(f.c)(y);window.store=O;var j=O;l.a.render(n.a.createElement(m.a,{store:j},n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ce2dece8.chunk.js.map