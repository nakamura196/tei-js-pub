(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{313:function(t,e,o){"use strict";o.r(e);o(213);var r=o(14),n=o(25),l=o(23),c=o(17),f=o(11),d=o(13),m=o(115),v=o(152),h=o.n(v);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var y=function(t,e,o,desc){var r,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(n<3?r(l):n>3?r(e,o,l):r(e,o))||l);return n>3&&l&&Object.defineProperty(e,o,l),l},x=function(t){Object(l.a)(o,t);var e=w(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).model=0,t}return Object(n.a)(o,[{key:"scroll",value:function(t){var e=document.querySelector("#"+t).getBoundingClientRect(),o={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+e.width,x:!0};h.a.scrollTo("#"+t,0,o)}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"items",get:function(){var t=this.xml;if(!t)return[];for(var e=[],o=t.querySelectorAll("div"),i=0;i<o.length;i++)for(var div=o[i],r=div.children,n=0;n<r.length;n++){var l=r[n];if("head"===l.nodeName){var c=div.attributes["xml:id"].value;e.push({label:l.textContent,id:c}),this.id===c&&(this.model=e.length-1)}}return e}}]),o}(m.Vue);y([Object(m.Prop)()],x.prototype,"id",void 0);var _=x=y([Object(m.Component)({})],x),j=o(65),O=o(94),k=o.n(O),R=o(360),$=o(341),V=o(365),C=o(311),P=o(393),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",[o("v-list-item",{staticClass:"mt-5"},[o("v-list-item-title",[o("h3",[t._v(t._s(t.$t("コンテンツ")))])])],1),t._v(" "),o("v-list-item-group",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(e,r){return o("v-list-item",{key:r,attrs:{link:""},on:{click:function(o){return t.scroll(e.id)}}},[o("v-list-item-action"),t._v(" "),o("v-list-item-content",[t._v(" "+t._s(e.label)+" ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VList:R.a,VListItem:$.a,VListItemAction:V.a,VListItemContent:C.a,VListItemGroup:P.a,VListItemTitle:C.b})},316:function(t,e,o){"use strict";o.r(e);o(213);var r=o(14),n=o(25),l=o(23),c=o(17),f=o(11),d=o(13),m=o(115);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var h=function(t,e,o,desc){var r,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(n<3?r(l):n>3?r(e,o,l):r(e,o))||l);return n>3&&l&&Object.defineProperty(e,o,l),l},w=function(t){Object(l.a)(o,t);var e=v(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(n.a)(o,[{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"title",get:function(){var t=this.xml;return t?t.querySelector("tei-title").textContent:"TEI Viewer"}}]),o}(m.Vue),y=w=h([Object(m.Component)({})],w),x=o(65),component=Object(x.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,o){"use strict";o.r(e);o(213);var r=o(14),n=o(25),l=o(23),c=o(17),f=o(11),d=o(13),m=o(115);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var h=function(t,e,o,desc){var r,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(n<3?r(l):n>3?r(e,o,l):r(e,o))||l);return n>3&&l&&Object.defineProperty(e,o,l),l},w=function(t){Object(l.a)(o,t);var e=v(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(n.a)(o,[{key:"canvas",get:function(){return this.$store.getters.canvas},set:function(t){this.$store.commit("setCanvas",t)}},{key:"facs",get:function(){return this.$store.getters.getFacs},set:function(t){this.$store.commit("setFacs",t)}}]),o}(m.Vue);h([Object(m.Prop)({})],w.prototype,"element",void 0);var y=w=h([Object(m.Component)({components:{aaa:k},name:"aaa"})],w),x=o(65),_=o(94),j=o.n(_),O=o(368),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.element.name||"span",{tag:"component"},[t._v("\n  "+t._s(t.element.text)+"\n\n  "),"tei-pb"==t.element.name&&t.element.attributes&&t.element.attributes.corresp?[o("v-icon",{staticClass:"ma-1",attrs:{color:"purple"},on:{click:function(e){t.canvas=t.facs[t.element.attributes.corresp.replace("#","")]}}},[t._v("mdi-image")]),t._v(" "),o("span",{staticClass:"ma-1",staticStyle:{color:"grey"}},[t._v("[Page @"+t._s(t.element.attributes.corresp)+"]")])]:t._e(),t._v(" "),t._l(t.element.elements,(function(t,e){return o("aaa",{key:e,attrs:{element:t}})}))],2)}),[],!1,null,null,null),k=e.default=component.exports;j()(component,{Aaa:o(321).default}),j()(component,{VIcon:O.a})},351:function(t,e){},352:function(t,e){},359:function(t,e,o){"use strict";o(213);var r=o(14),n=o(25),l=o(23),c=o(17),f=o(11),d=o(13),m=o(115);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var h=function(t,e,o,desc){var r,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(n<3?r(l):n>3?r(e,o,l):r(e,o))||l);return n>3&&l&&Object.defineProperty(e,o,l),l},w=function(t){Object(l.a)(o,t);var e=v(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(n.a)(o,[{key:"id",get:function(){return this.$store.getters.getId},set:function(t){this.$store.commit("setId",t)}}]),o}(m.Vue);h([Object(m.Prop)()],w.prototype,"items",void 0);var y=w=h([Object(m.Component)({})],w),x=o(65),_=o(94),j=o.n(_),O=o(360),k=o(366),R=o(341),$=o(311),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",[o("v-list-item",{staticClass:"mt-5"},[o("v-list-item-title",[o("h3",[t._v(t._s(t.$t("コンテンツ")))])])],1),t._v(" "),t._l(t.items,(function(e,r){return o("v-list-group",{key:r,attrs:{"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",{on:{click:function(o){t.id=e.id}}},[o("v-list-item-title",[t._v(t._s(e.label))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,r){return[e.label?o("v-list-item",{key:r,on:{click:function(o){t.id=e.id}}},[o("v-list-item-title",[t._v(t._s(e.label))])],1):t._e()]}))],2)}))],2)}),[],!1,null,null,null);e.a=component.exports;j()(component,{VList:O.a,VListGroup:k.a,VListItem:R.a,VListItemContent:$.a,VListItemTitle:$.b})},389:function(t,e,o){var content=o(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("2c53dd0c",content,!0,{sourceMap:!1})},461:function(t,e,o){"use strict";o(389)},462:function(t,e,o){(e=o(57)(!1)).push([t.i,'.scroll{overflow-y:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}tei-persName{background-color:#ffccbc}tei-placeName{background-color:#c8e6c9}tei-date{background-color:#bbdefb}tei-time{background-color:#fff9c4}tei-head{margin:20px;font-size:large!important;font-weight:700}[tooltip]{position:relative}[tooltip]:after,[tooltip]:before{text-transform:none;font-size:15px;font-weight:400;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;display:none;opacity:0}[tooltip]:before{content:"";border:5px solid transparent;z-index:1001}[tooltip]:after{content:attr(tooltip);font-family:Helvetica,sans-serif;text-align:center;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:1.5ch;border-radius:.3ch;box-shadow:0 1em 2em -.5em rgba(0,0,0,.35);background:#333;color:#fff;z-index:1000}[tooltip]:hover:after,[tooltip]:hover:before{display:block}[tooltip=""]:after,[tooltip=""]:before{display:none!important}[tooltip]:not([flow]):before,[tooltip][flow^=up]:before{bottom:100%;border-bottom-width:0;border-top-color:#333}[tooltip]:not([flow]):after,[tooltip][flow^=up]:after{bottom:calc(100% + 5px)}[tooltip]:not([flow]):after,[tooltip]:not([flow]):before,[tooltip][flow^=up]:after,[tooltip][flow^=up]:before{left:50%;transform:translate(-50%,-.5em)}[tooltip][flow^=down]:before{top:100%;border-top-width:0;border-bottom-color:#333}[tooltip][flow^=down]:after{top:calc(100% + 5px)}[tooltip][flow^=down]:after,[tooltip][flow^=down]:before{left:50%;transform:translate(-50%,.5em)}[tooltip][flow^=left]:before{top:50%;border-right-width:0;border-left-color:#333;left:-5px;transform:translate(-.5em,-50%)}[tooltip][flow^=left]:after{top:50%;right:calc(100% + 5px);transform:translate(-.5em,-50%)}[tooltip][flow^=right]:before{top:50%;border-left-width:0;border-right-color:#333;right:-5px;transform:translate(.5em,-50%)}[tooltip][flow^=right]:after{top:50%;left:calc(100% + 5px);transform:translate(.5em,-50%)}@-webkit-keyframes tooltips-vert{to{opacity:.9;transform:translate(-50%)}}@keyframes tooltips-vert{to{opacity:.9;transform:translate(-50%)}}@-webkit-keyframes tooltips-horz{to{opacity:.9;transform:translateY(-50%)}}@keyframes tooltips-horz{to{opacity:.9;transform:translateY(-50%)}}[tooltip]:not([flow]):hover:after,[tooltip]:not([flow]):hover:before,[tooltip][flow^=down]:hover:after,[tooltip][flow^=down]:hover:before,[tooltip][flow^=up]:hover:after,[tooltip][flow^=up]:hover:before{-webkit-animation:tooltips-vert .3s ease-out forwards;animation:tooltips-vert .3s ease-out forwards}[tooltip][flow^=left]:hover:after,[tooltip][flow^=left]:hover:before,[tooltip][flow^=right]:hover:after,[tooltip][flow^=right]:hover:before{-webkit-animation:tooltips-horz .3s ease-out forwards;animation:tooltips-horz .3s ease-out forwards}',""]),t.exports=e},475:function(t,e,o){"use strict";o.r(e);o(59);var r=o(322),n=o(152),l=o.n(n),c=o(357),f=o.n(c),d=o(359),m=o(316),v=o(321),h=o(348),w={components:{Menu:d.a,Title:m.default,aaa:v.default},data:function(){return{baseUrl:"https://nakamura196.github.io/tei-js-pub",siteName:"TEI Viewer",github:"https://github.com/shibusawa-lab/lab1",loading:!1,width:window.innerWidth,height:window.innerHeight,drawer:!1,drawer2:!1,manifest:null,index:0,divs:[],ids:{},ids2:{},divs2:[]}},head:function(){return{titleTemplate:null,title:this.$t(this.siteName)}},computed:{style:{get:function(){return this.$store.getters.getStyle},set:function(t){this.$store.commit("setStyle",t)}},xml:{get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},facs:{get:function(){return this.$store.getters.getFacs},set:function(t){this.$store.commit("setFacs",t)}},canvas:{get:function(){return this.$store.getters.getCanvas},set:function(t){this.$store.commit("setCanvas",t)}},id:{get:function(){return this.$store.getters.getId},set:function(t){this.$store.commit("setId",t)}}},watch:{id:function(t){t&&(this.$router.push(this.localePath({name:"light2",query:{u:this.$route.query.u,id:t}}),(function(){}),(function(){})),this.index=this.ids[t])},index:function(t){this.id=this.ids2[t]}},mounted:function(){this.loading=!0,window.addEventListener("resize",this.handleResize);var t=this.$route.query.u||"data/small.xml",e=new r.a,o=this.$route.query.id,n=this;console.log("1"),e.getHTML5(t,(function(data){console.log("2"),n.xml=data;for(var t=f()(data).find("tei-div"),e=[],r={},l={},i=0;i<t.length;i++){var div=t[i];e.push(div),f()(div).attr("xml:id")?(r[f()(div).attr("xml:id")]=i,l[i]=f()(div).attr("xml:id")):(r[i]=i,l[i]=i),o&&(n.index=r[o])}for(var c=f()(data).find("tei-source"),d={},m=0;m<c.length;m++){var source=c[m];d[f()(source).attr("xml:id")]=f()(source).attr("source")}n.facs=d,n.divs=[],n.divs2=e,n.ids=r,n.ids2=l,console.log("3");var v=f()(data).find("tei-facsimile").attr("source");n.manifest=v,n.loading=!1,console.log("4")}))},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight},bbb:function(data){if(!data)return{};var t=h.xml2json(data.outerHTML,{compact:!1,spaces:4});return JSON.parse(t).elements[0]},scroll:function(){var t=this.$route.query;if(t.id){var e=t.id,o={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width,x:!0};l.a.scrollTo("#"+e,0,o)}}}},y=(o(461),o(65)),x=o(94),_=o.n(x),j=o(477),O=o(347),k=o(476),R=o(430),$=o(310),V=o(368),C=o(360),P=o(341),L=o(311),I=o(468),S=o(469),T=o(373),z=o(435),D=o(466),E=o(319),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("v-navigation-drawer",{staticStyle:{"z-index":"100000"},attrs:{app:"",temporary:!0,width:384},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("Menu",{attrs:{id:t.$route.query.id}})],1),t._v(" "),o("v-app-bar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[o("v-icon",[t._v("mdi-view-list")])],1),t._v(" "),o("v-toolbar-title",[o("Title")],1),t._v(" "),o("v-spacer"),t._v(" "),o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{depressed:"",btn:"",color:"primary"}},r),[o("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")])],1)]}}])},[t._v(" "),o("v-list",[o("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[o("v-list-item-title",[t._v("日本語")])],1),t._v(" "),o("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[o("v-list-item-title",[t._v("English")])],1)],1)],1)],1)],1),t._v(" "),t.loading?[o("div",{staticClass:"pa-10 text-center"},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:t._e(),t._v(" "),o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{on:{click:function(e){t.index-=1}}},[o("v-btn",{attrs:{fab:"",dark:"",small:""}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-menu-left ")])],1)],1),t._v(" "),o("v-col",{staticClass:"text-right",on:{click:function(e){t.index+=1}}},[o("v-btn",{attrs:{fab:"",dark:"",small:""}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-menu-right ")])],1)],1)],1),t._v(" "),o("v-row",{staticClass:"mt-2"},[o("v-col",{attrs:{cols:"12",sm:t.manifest?6:12}},[o("v-card",{staticClass:"scroll vertical",style:"height: "+.85*t.height+"px; width: "+(t.manifest?t.width/2:t.width)+"px;",attrs:{id:"container",flat:"",outlined:""}},[o("div",{staticClass:"pa-4 px-5"},[t.divs2.length>0?o("aaa",{attrs:{element:t.bbb(t.divs2[t.index])}}):t._e()],1)])],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:t.manifest?6:12}},[t.manifest?o("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],style:"height: "+.85*t.height+"px;",attrs:{src:"curation/?manifest="+t.manifest+"&canvas="+t.canvas,width:"100%",allowfullscreen:"allowfullscreen",frameborder:"0"}}):t._e()])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;_()(component,{Menu:o(313).default,Title:o(316).default,Aaa:o(321).default}),_()(component,{VAppBar:j.a,VBtn:O.a,VCard:k.a,VCol:R.a,VContainer:$.a,VIcon:V.a,VList:C.a,VListItem:P.a,VListItemTitle:L.b,VMenu:I.a,VNavigationDrawer:S.a,VProgressCircular:T.a,VRow:z.a,VSpacer:D.a,VToolbarTitle:E.a})}}]);