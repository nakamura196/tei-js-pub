(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{314:function(t,e,r){"use strict";r.r(e);r(213);var n=r(14),o=r(25),c=r(23),l=r(17),d=r(11),f=r(13),v=r(115),m=r(152),h=r.n(m);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=w(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).model=0,t}return Object(o.a)(r,[{key:"scroll",value:function(t){var e=document.querySelector("#"+t).getBoundingClientRect(),r={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+e.width,x:!0};h.a.scrollTo("#"+t,0,r)}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"items",get:function(){var t=this.xml;if(!t)return[];for(var e=[],r=t.querySelectorAll("div"),i=0;i<r.length;i++)for(var div=r[i],n=div.children,o=0;o<n.length;o++){var c=n[o];if("head"===c.nodeName){var l=div.attributes["xml:id"].value;e.push({label:c.textContent,id:l}),this.id===l&&(this.model=e.length-1)}}return e}}]),r}(v.Vue);y([Object(v.Prop)()],_.prototype,"id",void 0);var x=_=y([Object(v.Component)({})],_),j=r(65),O=r(94),R=r.n(O),k=r(354),V=r(340),L=r(359),T=r(311),C=r(389),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",[r("v-list-item",{staticClass:"mt-5"},[r("v-list-item-title",[r("h3",[t._v(t._s(t.$t("コンテンツ")))])])],1),t._v(" "),r("v-list-item-group",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(e,n){return r("v-list-item",{key:n,attrs:{link:""},on:{click:function(r){return t.scroll(e.id)}}},[r("v-list-item-action"),t._v(" "),r("v-list-item-content",[t._v(" "+t._s(e.label)+" ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VList:k.a,VListItem:V.a,VListItemAction:L.a,VListItemContent:T.a,VListItemGroup:C.a,VListItemTitle:T.b})},329:function(t,e,r){"use strict";r.r(e);r(213);var n=r(14),o=r(25),c=r(23),l=r(17),d=r(11),f=r(13),v=r(115);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},w=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"metadata",get:function(){var t=this.xml;if(!t)return"";var header=t.querySelector("teiHeader");return(new XMLSerializer).serializeToString(header)}}]),r}(v.Vue);h([Object(v.Prop)({})],w.prototype,"xml",void 0);var y=w=h([Object(v.Component)({})],w),_=r(65),component=Object(_.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pa-5"},[e("h3",{staticClass:"my-5"},[this._v(this._s(this.$t("metadata")))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.metadata)}})])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,r){var content=r(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("1be22f28",content,!0,{sourceMap:!1})},453:function(t,e,r){"use strict";r(384)},454:function(t,e,r){(e=r(57)(!1)).push([t.i,".scroll{overflow-y:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}tei-persName{background-color:#ffccbc}tei-placeName{background-color:#c8e6c9}tei-date{background-color:#bbdefb}tei-time{background-color:#fff9c4}tei-head{margin:20px;font-size:large!important;font-weight:700}",""]),t.exports=e},467:function(t,e,r){"use strict";r.r(e);r(67),r(33);var n=r(7),o=r(87),c=r.n(o),l=r(321),d=r(152),f=r.n(d),v=r(314),m=r(329),h={components:{Menu:v.default,Metadata:m.default},data:function(){return{baseUrl:"https://nakamura196.github.io/tei-js-pub",siteName:"TEI Viewer",github:"https://github.com/shibusawa-lab/lab1",loading:!1,width:window.innerWidth,height:window.innerHeight,drawer:!1,drawer2:!1,df:{},xmlStr:"",teiHTML:null}},head:function(){return{titleTemplate:null,title:this.$t(this.siteName)}},computed:{style:{get:function(){return this.$store.getters.getStyle},set:function(t){this.$store.commit("setStyle",t)}},xml:{get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,style,o,u,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.$route.query,n=Date.now(),style=r.style||"data/shibusawa.json",e.next=6,c.a.get(style);case 6:o=e.sent,t.style=o.data,u=r.u||"data/small.xml",d=new l.a,f=t,d.getHTML5(u,(function(data){f.teiHTML=data.outerHTML,f.loading=!1,window.setTimeout((function(){f.loading=!1,f.scroll()}),0)})),c.a.get(u).then((function(t){var e=Date.now();console.log("downloaded",e-n);var r=t.data;"string"==typeof r&&(r=(new DOMParser).parseFromString(r,"text/xml"));f.xml=r})).catch((function(t){console.log(t)}));case 13:case"end":return e.stop()}}),e)})))()},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight},scroll:function(){var t=this.$route.query;if(t.id){var e=t.id,r=document.querySelector("#"+e).getBoundingClientRect(),n={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+r.width,x:!0};f.a.scrollTo("#"+e,0,n)}}}},w=(r(453),r(65)),y=r(94),_=r.n(y),x=r(470),j=r(381),O=r(345),R=r(469),k=r(361),V=r(354),L=r(340),T=r(311),C=r(463),M=r(464),S=r(366),P=r(460),$=r(319),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("v-navigation-drawer",{attrs:{app:"",temporary:!0,width:384},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("Menu",{attrs:{id:t.$route.query.id}})],1),t._v(" "),r("v-navigation-drawer",{attrs:{app:"",temporary:!0,right:"",width:512},model:{value:t.drawer2,callback:function(e){t.drawer2=e},expression:"drawer2"}},[t.xml?r("Metadata",{attrs:{xml:t.xml}}):t._e()],1),t._v(" "),r("v-app-bar",{attrs:{color:"primary",dark:""}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[r("v-icon",[t._v("mdi-view-list")])],1),t._v(" "),r("v-toolbar-title",[t._v("\n        "+t._s("渋沢栄一伝記資料別巻第一日記のTEIマークアップ")+"\n      ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",btn:"",color:"primary"}},n),[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[r("v-list-item-title",[t._v("日本語")])],1),t._v(" "),r("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[r("v-list-item-title",[t._v("English")])],1)],1)],1),t._v(" "),r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer2=!t.drawer2}}})],1)],1),t._v(" "),t.loading?[r("div",{staticClass:"pa-10 text-center"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:t._e(),t._v(" "),r("div",{staticClass:"px-10 pt-10",style:"width: "+t.width+"px;"},[r("v-card",{staticClass:"scroll vertical pa-5",style:"height: "+.85*t.height+"px;",attrs:{id:"container",outlined:"",flat:""}},[r("div",{attrs:{id:"tei"},domProps:{innerHTML:t._s(t.teiHTML)}})])],1)],2)}),[],!1,null,null,null);e.default=component.exports;_()(component,{Menu:r(314).default,Metadata:r(329).default}),_()(component,{VAppBar:x.a,VAppBarNavIcon:j.a,VBtn:O.a,VCard:R.a,VIcon:k.a,VList:V.a,VListItem:L.a,VListItemTitle:T.b,VMenu:C.a,VNavigationDrawer:M.a,VProgressCircular:S.a,VSpacer:P.a,VToolbarTitle:$.a})}}]);