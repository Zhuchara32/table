(function(e){function t(t){for(var s,u,i=t[0],c=t[1],r=t[2],v=0,d=[];v<i.length;v++)u=i[v],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var s={},a={app:0},o=[];function u(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=s,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)u.d(n,s,function(t){return e[t]}.bind(null,s));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/table/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-col",{attrs:{offset:"1",cols:"10"}},[n("h1",{staticClass:"text-uppercase grey--text"},[e._v("set schedule")]),n("Table"),n("div",{staticClass:"appBtn"},[n("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:e.clearTable}},[e._v(" Clear ")]),n("v-btn",{staticClass:"ml-5 white--text",attrs:{color:"green"},on:{click:e.saveLocalSt}},[e._v(" Save changes ")])],1)],1)],1)],1)},o=[],u=n("5530"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",[n("table",{staticClass:"table tableMain",attrs:{border:"1"}},[n("tbody",[n("tr",[n("td",{staticClass:"zeroTd"}),n("td",{staticClass:"text-uppercase col-1",attrs:{align:"center"}},[e._v("all day")]),n("td",[e._v("00:00")]),n("td",[e._v("03:00")]),n("td",[e._v("06:00")]),n("td",[e._v("09:00")]),n("td",[e._v("12:00")]),n("td",[e._v("15:00")]),n("td",[e._v("18:00")]),n("td",[e._v("21:00")])]),e._l(e.mainObj,(function(t,s){return n("tr",{key:s,staticClass:"tr"},[n("td",{staticClass:"text-uppercase",class:{active:t.length>1},attrs:{align:"center"}},[e._v(e._s(s))]),n("td",{attrs:{align:"center"},on:{click:function(n){return e.chooseAll(t,s)}}},[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t[t.length-1].active,expression:"value[value.length - 1].active"}]},[e._v("mdi-check-bold")])],1),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,0)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,59,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,0)},mousemove:function(n){return e.saveMouseMove(t,59,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,60)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,119,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,60)},mousemove:function(n){return e.saveMouseMove(t,119,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,120)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,179,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,120)},mousemove:function(n){return e.saveMouseMove(t,179,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,180)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,239,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,180)},mousemove:function(n){return e.saveMouseMove(t,239,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,240)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,299,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,240)},mousemove:function(n){return e.saveMouseMove(t,299,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,300)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,359,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,300)},mousemove:function(n){return e.saveMouseMove(t,359,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,360)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,419,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,360)},mousemove:function(n){return e.saveMouseMove(t,419,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,420)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,479,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,420)},mousemove:function(n){return e.saveMouseMove(t,479,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,480)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,539,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,480)},mousemove:function(n){return e.saveMouseMove(t,539,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,540)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,599,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,540)},mousemove:function(n){return e.saveMouseMove(t,599,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,600)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,659,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,600)},mousemove:function(n){return e.saveMouseMove(t,659,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,660)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,719,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,660)},mousemove:function(n){return e.saveMouseMove(t,719,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,720)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,779,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,720)},mousemove:function(n){return e.saveMouseMove(t,779,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,780)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,839,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,780)},mousemove:function(n){return e.saveMouseMove(t,839,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,840)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,899,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,840)},mousemove:function(n){return e.saveMouseMove(t,899,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,900)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,959,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,900)},mousemove:function(n){return e.saveMouseMove(t,959,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,960)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1019,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,960)},mousemove:function(n){return e.saveMouseMove(t,1019,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1020)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1079,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1020)},mousemove:function(n){return e.saveMouseMove(t,1079,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1080)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1139,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1080)},mousemove:function(n){return e.saveMouseMove(t,1139,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1140)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1199,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1140)},mousemove:function(n){return e.saveMouseMove(t,1199,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1200)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1259,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1200)},mousemove:function(n){return e.saveMouseMove(t,1259,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])]),n("td",[n("table",{staticClass:"table",attrs:{width:"100%"}},[n("tbody",[n("tr",[n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1260)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1319,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1260)},mousemove:function(n){return e.saveMouseMove(t,1319,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1320)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1379,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1320)},mousemove:function(n){return e.saveMouseMove(t,1379,s)},mouseup:e.saveMouseUp}}),n("td",{staticClass:"trInside",class:{active:e.changeDesign(t,1380)},attrs:{width:"33%"},on:{click:function(n){return e.clickChange(t,1439,s)},mousedown:function(n){return n.preventDefault(),e.saveMouseDown(t,1380)},mousemove:function(n){return e.saveMouseMove(t,1439,s)},mouseup:e.saveMouseUp}},[e._v(" ")])])])])])])}))],2)])])},c=[],r=(n("7db0"),n("d3b7"),n("2f62")),l={name:"Table",computed:Object(r["c"])(["mainObj"]),methods:Object(u["a"])(Object(u["a"])({},Object(r["b"])(["clickTd","chooseAll","saveMouseDown","saveMouseUp"])),{},{changeDesign:function(e,t){if(0===t){var n=e.find((function(e){return 0===e.bt}));return void 0!==n}if(t>0){var s=e.find((function(e){return e.bt<=t&&e.et>t}));return void 0!==s}},clickChange:function(e,t,n){this.$store.dispatch("clickTd",{value:e,arg:t,prop:n})},chooseAll:function(e,t){this.$store.dispatch("chooseAll",{value:e,prop:t})},saveMouseDown:function(e,t){this.$store.dispatch("saveMouseDown",{value:e,arg:t})},saveMouseMove:function(e,t,n){this.$store.dispatch("saveMouseMove",{value:e,arg:t,prop:n})}})},v=l,d=n("2877"),f=n("6544"),p=n.n(f),m=n("132d"),h=n("1f4f"),b=Object(d["a"])(v,i,c,!1,null,null,null),g=b.exports;p()(b,{VIcon:m["a"],VSimpleTable:h["a"]});var M={name:"App",components:{Table:g},created:function(){this.addProp()},methods:Object(u["a"])({},Object(r["b"])(["addProp","clearTable","saveLocalSt"]))},w=M,D=(n("5c0b"),n("7496")),C=n("8336"),k=n("62ad"),O=n("f6c4"),j=Object(d["a"])(w,a,o,!1,null,null,null),_=j.exports;p()(j,{VApp:D["a"],VBtn:C["a"],VCol:k["a"],VMain:O["a"]});n("07ac"),n("c740"),n("a434"),n("e9c4");s["a"].use(r["a"]);var I=new r["a"].Store({state:{mainObj:{mo:[{bt:0,et:779}],tu:[{bt:240,et:779},{bt:1140,et:1319}],we:[{bt:1140,et:1439}],th:[],fr:[],sa:[],su:[]},mauseDownObj:{nameArr:null,td:null}},getters:{mainObj:function(e){return e.mainObj}},mutations:{addProp:function(e){for(var t=Object.values(e.mainObj),n=0;n<t.length;n++)t[n].push({active:!1})},clickTd:function(e,t){var n=t.value,s=t.arg,a=t.prop,o=n.find((function(e){return e.bt<s&&e.et>=s})),u=n.findIndex((function(e){return e.bt<s&&e.et>=s}));if(void 0===o){var i=n.find((function(e){return e.et===s-60})),c=n.findIndex((function(e){return e.et===s-60})),r=n.find((function(e){return e.bt===s+1})),l=n.findIndex((function(e){return e.bt===s+1}));if(void 0!==i&&void 0!==r){var v={bt:i.bt,et:r.et};e.mainObj[a].splice(c,1,v),e.mainObj[a].splice(l,1)}else if(void 0!==i){var d={bt:i.bt,et:s};e.mainObj[a].splice(c,1,d)}else if(void 0!==r){var f={bt:s-59,et:r.et};e.mainObj[a].splice(l,1,f)}else{var p={bt:s-59,et:s};e.mainObj[a].unshift(p)}}if(void 0!==o)if(s===o.et&&s-59>o.bt){o.et-=60;var m=Object.assign(o);e.mainObj[a].splice(u,1,m)}else if(s===o.et&&s-59===o.bt)e.mainObj[a].splice(u,1);else if(s-59===o.bt&&s<o.et){o.bt+=60;var h=Object.assign(o);e.mainObj[a].splice(u,1,h)}else{var b=Object.assign(o),g={bt:b.bt,et:s-60},M={bt:s+1,et:b.et};e.mainObj[a].splice(u,1,g,M)}},chooseAll:function(e,t){var n=t.value,s=t.prop;if(!1===n[n.length-1].active){var a={bt:0,et:1439};n[n.length-1].active=!0,e.mainObj[s].splice(0,e.mainObj[s].length-1,a)}else n[n.length-1].active=!1,e.mainObj[s].splice(0,e.mainObj[s].length-1)},clearTable:function(e){for(var t in e.mainObj)e.mainObj[t].splice(0,e.mainObj[t].length-1)},saveLocalSt:function(e){var t=JSON.stringify(e.mainObj);localStorage.setItem("mainObj",t)},saveMouseDown:function(e,t){var n=t.value,s=t.arg,a=n.find((function(e){return e.bt<s&&e.et>=s}));void 0===a&&(e.mauseDownObj={nameArr:n,td:s})},saveMouseMove:function(e,t){var n=t.value,s=t.arg;t.prop;if(null!==e.mauseDownObj.nameArr)if(e.mauseDownObj.td<s){var a={bt:e.mauseDownObj.td,et:s},o=Object.values(e.mainObj),u=o.findIndex((function(t){return t===e.mauseDownObj.nameArr})),i=o.findIndex((function(e){return e===n}));if(u<i)for(var c=u;c<=i;c++)o[c].unshift(a);else for(var r=i;r<=u;r++)o[r].unshift(a)}else{var l={bt:s-59,et:e.mauseDownObj.td+1},v=Object.values(e.mainObj),d=v.findIndex((function(t){return t===e.mauseDownObj.nameArr})),f=v.findIndex((function(e){return e===n}));if(d<f)for(var p=d;p<=f;p++)v[p].unshift(l);else for(var m=f;m<=d;m++)v[m].unshift(l)}},saveMouseUp:function(e){e.mauseDownObj={nameArr:null,td:null}},checkChoiseAll:function(e,t){var n=e.mainObj[t].find((function(e){return 0===e.bt&&1439===e.et}));void 0!==n&&(e.mainObj[t][e.mainObj[t].length-1].active=!0)}},actions:{addProp:function(e){e.commit("addProp")},clickTd:function(e,t){var n=t.value,s=t.arg,a=t.prop;e.commit("clickTd",{value:n,arg:s,prop:a}),e.dispatch("checkChoiseAll",a)},chooseAll:function(e,t){var n=t.value,s=t.prop;e.commit("chooseAll",{value:n,prop:s})},clearTable:function(e){e.commit("clearTable")},saveLocalSt:function(e){e.commit("saveLocalSt")},saveMouseDown:function(e,t){var n=t.value,s=t.arg;e.commit("saveMouseDown",{value:n,arg:s})},saveMouseMove:function(e,t){var n=t.value,s=t.arg,a=t.prop;e.commit("saveMouseMove",{value:n,arg:s,prop:a}),e.dispatch("checkChoiseAll",a)},saveMouseUp:function(e){e.commit("saveMouseUp")},checkChoiseAll:function(e,t){e.commit("checkChoiseAll",t)}}}),y=n("f309");s["a"].use(y["a"]);var U=new y["a"]({});s["a"].config.productionTip=!1,new s["a"]({store:I,vuetify:U,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.e05fda8b.js.map