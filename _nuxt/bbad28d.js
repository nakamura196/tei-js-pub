(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{320:function(t,e,n){"use strict";n.r(e);n(213);var r=n(13),o=n(27),c=n(23),l=n(18),f=n(11),d=n(12),v=n(115);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"metadata",get:function(){var t=this.xml;if(!t)return"";var header=t.querySelector("teiHeader");return(new XMLSerializer).serializeToString(header)}}]),n}(v.Vue);m([Object(v.Prop)({})],y.prototype,"xml",void 0);var w=y=m([Object(v.Component)({})],y),_=n(67),component=Object(_.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pa-5"},[e("h3",{staticClass:"my-5"},[this._v(this._s(this.$t("metadata")))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.metadata)}})])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(213);var r=n(13),o=n(27),c=n(23),l=n(18),f=n(11),d=n(12),v=n(115),h=n(155),m=n.n(h);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"scroll",value:function(t){var e=document.querySelector("#"+t).getBoundingClientRect(),n={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+e.width,x:!0};m.a.scrollTo("#"+t,0,n)}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"items",get:function(){var t=this.xml;if(!t)return[];for(var e=[],n=t.querySelectorAll("div"),i=0;i<n.length;i++)for(var div=n[i],r=div.children,o=0;o<r.length;o++){var c=r[o];"head"===c.nodeName&&e.push({label:c.textContent,id:div.attributes["xml:id"].value})}return e}}]),n}(v.Vue),j=_=w([Object(v.Component)({})],_),O=n(67),R=n(95),x=n.n(R),k=n(349),V=n(332),C=n(354),S=n(311),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-item",{staticClass:"mt-5"},[n("v-list-item-title",[n("h3",[t._v(t._s(t.$t("コンテンツ")))])])],1),t._v(" "),t._l(t.items,(function(e,r){return n("v-list-item",{key:r,attrs:{link:""},on:{click:function(n){return t.scroll(e.id)}}},[n("v-list-item-action"),t._v(" "),n("v-list-item-content",[t._v(" "+t._s(e.label)+" ")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VList:k.a,VListItem:V.a,VListItemAction:C.a,VListItemContent:S.a,VListItemTitle:S.b})},345:function(t,e,n){"use strict";n.r(e);n(21),n(69),n(213);var r=n(13),o=n(27),c=n(23),l=n(18),f=n(11),d=n(12),v=n(115);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"getType",value:function(data){return data?data.type:null}},{key:"getStyle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],r=t;e&&(r+='[type="'.concat(e,'"]'));var style=this.style;if(style[r]){var o=style[r];for(var c in o)n.push("".concat(c,": ").concat(o[c]))}return n.join("; ")}},{key:"style",get:function(){return this.$store.getters.getStyle},set:function(t){this.$store.commit("setStyle",t)}}]),n}(v.Vue);m([Object(v.Prop)({})],y.prototype,"elements",void 0);var w=y=m([Object(v.Component)({components:{Main:j},name:"Main"})],y),_=n(67),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._l(t.elements,(function(e,r){return["text"==e.type?[n("span",{key:r},[t._v(t._s(e.text))])]:[n("span",{key:r,class:"tei-"+e.name,style:t.getStyle(e.name,t.getType(e.attributes)),attrs:{id:e.attributes?e.attributes["xml:id"]:null,type:t.getType(e.attributes)}},[n("Main",{key:r,attrs:{elements:e.elements}})],1)]]}))],2)}),[],!1,null,null,null),j=e.default=component.exports;installComponents(component,{Main:n(345).default})},372:function(t,e,n){var content=n(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1b7833da",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);n(213);var r=n(13),o=n(27),c=n(23),l=n(18),f=n(11),d=n(12),v=n(115);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/tei-js-pub",t}return Object(o.a)(n,[{key:"result",get:function(){return this.$store.getters.getResult},set:function(t){this.$store.commit("setResult",t)}},{key:"title",get:function(){return this.result.label||"TEI Viewer"}}]),n}(v.Vue),w=y=m([Object(v.Component)({})],y),_=n(67),j=n(95),O=n.n(j),R=n(457),x=n(406),k=n(456),V=n(446),C=n(310),S=n(447),P=n(356),$=n(349),D=n(332),M=n(311),T=n(452),L=n(448),I=n(449),E=n(338),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{color:"primary",dark:""}},[n("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:"",color:"primary"}},r),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],1),t._v(" "),n("v-container",{staticClass:"pa-10"},[n("v-row",t._l(t.result.members,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:3}},[n("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[n("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px","text-decoration":"none"}},[n("v-icon",{attrs:{size:"75"}},[t._v("mdi-file")])],1),t._v(" "),n("div",{staticClass:"pa-4"},[n("a",{attrs:{href:t.localePath({name:"light",query:{u:e["@id"]}})}},[n("h4",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v("\n              "+t._s(e.description)+"\n            ")]):t._e()])])],1)})),1)],1),t._v(" "),n("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[n("v-container",{staticClass:"text-center my-5"},[n("p",[n("nuxt-link",{staticStyle:{color:"white"},attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t(t.siteName)))])],1),t._v(" "),n("p",[n("a",{attrs:{href:t.github}},[n("v-icon",[t._v("mdi-github")])],1)])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VAppBar:R.a,VBtn:x.a,VCard:k.a,VCol:V.a,VContainer:C.a,VFooter:S.a,VIcon:P.a,VList:$.a,VListItem:D.a,VListItemTitle:M.b,VMenu:T.a,VRow:L.a,VSpacer:I.a,VToolbarTitle:E.a})},424:function(t,e){},426:function(t,e){},435:function(t,e,n){"use strict";n(372)},436:function(t,e,n){(e=n(57)(!1)).push([t.i,".scroll{overflow-y:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}",""]),t.exports=e},455:function(t,e,n){"use strict";n.r(e);n(213),n(65),n(33);var r=n(6),o=n(13),c=n(27),l=n(23),f=n(18),d=n(11),v=n(12),h=n(115),m=n(87),y=n.n(m),w=n(155),_=n.n(w),j=n(345),O=n(321),R=n(320),x=n(374);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var V=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},C=n(419),S=function(t){Object(l.a)(f,t);var e,n=k(f);function f(){var t;return Object(o.a)(this,f),(t=n.apply(this,arguments)).baseUrl="https://nakamura196.github.io/tei-js-pub",t.siteName="TEI Viewer",t.github="https://github.com/shibusawa-lab/lab1",t.collectionFlag=!1,t.itemFlag=!1,t.loading=!1,t.width=window.innerWidth,t.height=window.innerHeight,t.drawer=!1,t.drawer2=!1,t.df={},t.xmlStr="",t.teiHTML=null,t}return Object(c.a)(f,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,style,r,u,o,c,l,f,d,v,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$route.query,n=Date.now(),style=e.style||"data/shibusawa.json",t.next=6,y.a.get(style);case 6:return r=t.sent,this.style=r.data,u=e.u||"data/small.xml",t.next=11,y.a.get(u);case 11:if(o=t.sent,this.result=o.data,!o.data["@context"]){t.next=16;break}return this.collectionFlag=!0,t.abrupt("return");case 16:this.itemFlag=!0,c=Date.now(),console.log("downloaded",c-n),"string"==typeof(l=o.data)&&(f=new DOMParser,l=f.parseFromString(l,"text/xml")),this.xml=l,d=(new XMLSerializer).serializeToString(l),this.xmlStr=d,c=Date.now(),console.log("converted to xml string",c-n),v=C.xml2json(d,{compact:!1,spaces:4}),h=JSON.parse(v),this.df=h,c=Date.now(),console.log("converted to json",c-n),m=this,window.setTimeout((function(){m.loading=!1,m.scroll(),c=Date.now(),console.log("loaded",c-n)}),0);case 33:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"mounted",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight}},{key:"scroll",value:function(){var t=this.$route.query;if(t.id){var e=t.id,n=document.querySelector("#"+e).getBoundingClientRect(),r={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+n.width,x:!0};_.a.scrollTo("#"+e,0,r)}}},{key:"head",value:function(){return{titleTemplate:null,title:this.$t(this.siteName)}}},{key:"style",get:function(){return this.$store.getters.getStyle},set:function(t){this.$store.commit("setStyle",t)}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"result",get:function(){return this.$store.getters.getResult},set:function(t){this.$store.commit("setResult",t)}}]),f}(h.Vue),P=S=V([Object(h.Component)({components:{Main:j.default,Menu:O.default,Metadata:R.default,Collection:x.default}})],S),$=(n(435),n(67)),D=n(95),M=n.n(D),T=n(457),L=n(450),I=n(406),E=n(456),B=n(356),z=n(349),F=n(332),N=n(311),X=n(452),A=n(453),H=n(361),J=n(449),U=n(338),component=Object($.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.collectionFlag?[n("Collection")]:t._e(),t._v(" "),t.itemFlag?[n("v-navigation-drawer",{attrs:{app:"",temporary:!0,width:384},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Menu")],1),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",temporary:!0,right:"",width:512},model:{value:t.drawer2,callback:function(e){t.drawer2=e},expression:"drawer2"}},[t.xml?n("Metadata",{attrs:{xml:t.xml}}):t._e()],1),t._v(" "),n("v-app-bar",{attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-view-list")])],1),t._v(" "),n("v-toolbar-title",[t._v("\n        "+t._s("渋沢栄一伝記資料別巻第一日記のTEIマークアップ")+"\n      ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:"",color:"primary"}},r),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")])],1)]}}],null,!1,2908842242)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1),t._v(" "),n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer2=!t.drawer2}}})],1),t._v(" "),t.loading?[n("div",{staticClass:"pa-10 text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:t._e(),t._v(" "),n("div",{staticClass:"px-10 pt-10",style:"width: "+t.width+"px;"},[n("v-card",{staticClass:"scroll vertical pa-5",style:"height: "+.85*t.height+"px;",attrs:{id:"container",outlined:"",flat:""}},[n("Main",{attrs:{elements:t.df.elements}})],1)],1)]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports;M()(component,{Collection:n(374).default,Menu:n(321).default,Metadata:n(320).default,Main:n(345).default}),M()(component,{VAppBar:T.a,VAppBarNavIcon:L.a,VBtn:I.a,VCard:E.a,VIcon:B.a,VList:z.a,VListItem:F.a,VListItemTitle:N.b,VMenu:X.a,VNavigationDrawer:A.a,VProgressCircular:H.a,VSpacer:J.a,VToolbarTitle:U.a})}}]);