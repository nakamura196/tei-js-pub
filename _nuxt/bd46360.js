(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{320:function(e,t,n){"use strict";n.r(t);n(213);var r=n(13),o=n(27),l=n(23),c=n(18),d=n(11),h=n(12),f=n(115);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(e,t,n,desc){var r,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(o<3?r(l):o>3?r(t,n,l):r(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l},w=function(e){Object(l.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"metadata",get:function(){var e=this.xml;if(!e)return"";var header=e.querySelector("teiHeader");return(new XMLSerializer).serializeToString(header)}}]),n}(f.Vue);v([Object(f.Prop)({})],w.prototype,"xml",void 0);var y=w=v([Object(f.Component)({})],w),E=n(67),component=Object(E.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pa-5"},[t("h3",{staticClass:"my-5"},[this._v(this._s(this.$t("metadata")))]),this._v(" "),t("div",{domProps:{innerHTML:this._s(this.metadata)}})])}),[],!1,null,null,null);t.default=component.exports},321:function(e,t,n){"use strict";n.r(t);n(213);var r=n(13),o=n(27),l=n(23),c=n(18),d=n(11),h=n(12),f=n(115),m=n(155),v=n.n(m);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(o<3?r(l):o>3?r(t,n,l):r(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l},E=function(e){Object(l.a)(n,e);var t=w(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"scroll",value:function(e){var t=document.querySelector("#"+e).getBoundingClientRect(),n={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+t.width,x:!0};v.a.scrollTo("#"+e,0,n)}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(e){this.$store.commit("setXml",e)}},{key:"items",get:function(){var e=this.xml;if(!e)return[];for(var t=[],n=e.querySelectorAll("div"),i=0;i<n.length;i++)for(var div=n[i],r=div.children,o=0;o<r.length;o++){var l=r[o];"head"===l.nodeName&&t.push({label:l.textContent,id:div.attributes["xml:id"].value})}return t}}]),n}(f.Vue),A=E=y([Object(f.Component)({})],E),N=n(67),T=n(95),x=n.n(T),L=n(349),M=n(332),_=n(354),O=n(311),component=Object(N.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[n("v-list-item",{staticClass:"mt-5"},[n("v-list-item-title",[n("h3",[e._v(e._s(e.$t("コンテンツ")))])])],1),e._v(" "),e._l(e.items,(function(t,r){return n("v-list-item",{key:r,attrs:{link:""},on:{click:function(n){return e.scroll(t.id)}}},[n("v-list-item-action"),e._v(" "),n("v-list-item-content",[e._v(" "+e._s(t.label)+" ")])],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VList:L.a,VListItem:M.a,VListItemAction:_.a,VListItemContent:O.a,VListItemTitle:O.b})},373:function(e,t,n){var content=n(442);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("01daf75a",content,!0,{sourceMap:!1})},441:function(e,t,n){"use strict";n(373)},442:function(e,t,n){(t=n(57)(!1)).push([e.i,".scroll{overflow-y:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}",""]),e.exports=t},451:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getOrdinality",(function(){return h})),n.d(r,"copyAndReset",(function(){return f})),n.d(r,"first",(function(){return m})),n.d(r,"hideContent",(function(){return v})),n.d(r,"normalizeURI",(function(){return w})),n.d(r,"repeat",(function(){return y})),n.d(r,"resolveURI",(function(){return E})),n.d(r,"getPrefixDef",(function(){return A})),n.d(r,"rw",(function(){return N})),n.d(r,"serialize",(function(){return T})),n.d(r,"unEscapeEntities",(function(){return x}));n(65),n(33);var o=n(6),l=n(87),c=n.n(l),d={namespaces:{tei:"http://www.tei-c.org/ns/1.0",teieg:"http://www.tei-c.org/ns/Examples",rng:"http://relaxng.org/ns/structure/1.0"},tei:{eg:["<pre>","</pre>"],ptr:['<a href="$rw@target">$@target</a>'],ref:[["[target]",['<a href="$rw@target">',"</a>"]]],graphic:function(e){let content=new Image;return content.src=this.rw(e.getAttribute("url")),e.hasAttribute("width")&&content.setAttribute("width",e.getAttribute("width")),e.hasAttribute("height")&&content.setAttribute("height",e.getAttribute("height")),content},list:[["[type=gloss]",function(e){let dl=document.createElement("dl");for(let t of Array.from(e.children))if(t.nodeType==Node.ELEMENT_NODE){if("tei-label"==t.localName){let dt=document.createElement("dt");dt.innerHTML=t.innerHTML,dl.appendChild(dt)}if("tei-item"==t.localName){let dd=document.createElement("dd");dd.innerHTML=t.innerHTML,dl.appendChild(dd)}}return dl}]],note:[["[place=end]",function(e){this.noteIndex?this.noteIndex++:this.noteIndex=1;let t="_note_"+this.noteIndex,link=document.createElement("a");link.setAttribute("id","src"+t),link.setAttribute("href","#"+t),link.innerHTML=this.noteIndex;let content=document.createElement("sup");content.appendChild(link);let n=this.dom.querySelector("ol.notes");n||(n=document.createElement("ol"),n.setAttribute("class","notes"),this.dom.appendChild(n));let r=document.createElement("li");return r.id=t,r.innerHTML=e.innerHTML,n.appendChild(r),content}],["_",["(",")"]]],teiHeader:function(e){this.hideContent(e,!1)},title:[["tei-titlestmt>tei-title",function(e){let title=document.createElement("title");title.innerHTML=e.innerText,document.querySelector("head").appendChild(title)}]],cell:[["[cols]",function(e){e.setAttribute("style","grid-column: "+this.getOrdinality(e)+" / span "+e.getAttribute("cols")+";")}]]},teieg:{egXML:function(e){let pre=document.createElement("pre"),content=this.serialize(e,!0).replace(/</g,"&lt;"),t=content.match(/^[\t ]+/);return t&&(content=content.replace(new RegExp("^"+t[0],"mg"),"")),pre.innerHTML=content,pre}}};function h(e,t){let n=1,r=e;for(;r&&null!==r.previousElementSibling&&(!t||r.previousElementSibling.localName==t)&&(n++,r=r.previousElementSibling,r.previousElementSibling););return n}function f(e){let t=e=>{let n=e.nodeType===Node.ELEMENT_NODE?document.createElement(e.nodeName):e.cloneNode(!0);if(e.attributes)for(let t of Array.from(e.attributes))"data-processed"!==t.name&&n.setAttribute(t.name,t.value);for(let r of Array.from(e.childNodes))if(r.nodeType==Node.ELEMENT_NODE){if(!e.hasAttribute("data-empty")){if(r.hasAttribute("data-original")){for(let e of Array.from(r.childNodes)){let r=n.appendChild(t(e));r.nodeType===Node.ELEMENT_NODE&&r.hasAttribute("data-origid")&&(r.setAttribute("id",r.getAttribute("data-origid")),r.removeAttribute("data-origid"))}return n}n.appendChild(t(r))}}else n.appendChild(r.cloneNode());return n};return t(e)}function m(e){return e.replace(/ .*$/,"")}function v(e,t=!0){if(e.childNodes.length>0){let n=document.createElement("span");e.appendChild(n),n.setAttribute("hidden",""),n.setAttribute("data-original","");for(let t of Array.from(e.childNodes))t!==n&&n.appendChild(e.removeChild(t));if(t)for(let e of Array.from(n.querySelectorAll("*")))e.hasAttribute("id")&&(e.setAttribute("data-origid",e.getAttribute("id")),e.removeAttribute("id"))}}function w(e){return this.rw(this.first(e))}function y(e,t){let n="";for(let i=0;i<t;i++)n+=e;return n}function E(e){let t=this.prefixDefs[e.substring(0,e.indexOf(":"))];return e.replace(new RegExp(t.matchPattern),t.replacementPattern)}function A(e){return this.prefixDefs[e]}function N(e){return e.match(/^(?:http|mailto|file|\/|#).*$/)?e:this.base+this.utilities.first(e)}function T(e,t,n){let r="",o=e=>!/[^\t\n\r ]/.test(e);if(!t&&e.nodeType==Node.ELEMENT_NODE){r+="string"==typeof n&&""!==n?"\n"+n+"<":"<",r+=e.getAttribute("data-origname");let t=e.hasAttribute("data-origatts")?e.getAttribute("data-origatts").split(" "):[];for(let n of Array.from(e.attributes))n.name.startsWith("data-")||["id","lang","class"].includes(n.name)||(r+=" "+t.find((function(e){return e.toLowerCase()==n.name}))+'="'+n.value+'"'),"data-xmlns"==n.name&&(r+=' xmlns="'+n.value+'"');e.childNodes.length>0?r+=">":r+="/>"}for(let l of Array.from(e.childNodes))switch(l.nodeType){case Node.ELEMENT_NODE:r+="string"==typeof n?this.serialize(l,!1,n+"  "):this.serialize(l,!1,n);break;case Node.PROCESSING_INSTRUCTION_NODE:r+="<?"+l.nodeValue+"?>";break;case Node.COMMENT_NODE:r+="\x3c!--"+l.nodeValue+"--\x3e";break;default:if(t&&o(l.nodeValue)&&(r+=l.nodeValue.replace(/^\s*\n/,"")),"string"==typeof n&&o(l.nodeValue))break;r+=l.nodeValue}return!t&&e.childNodes.length>0&&(r+="string"==typeof n?"\n"+n+"</":"</",r+=e.getAttribute("data-origname")+">"),r}function x(e){return e.replace(/&gt;/,">").replace(/&quot;/,'"').replace(/&apos;/,"'").replace(/&amp;/,"&")}function L(e){if(e.namespaces)for(let t of Object.keys(e.namespaces))this.namespaces.has(e.namespaces[t])||Array.from(this.namespaces.values()).includes(t)||this.namespaces.set(e.namespaces[t],t);for(let t of this.namespaces.values())if(e[t])for(let b of Object.keys(e[t]))this.behaviors[`${t}:${b}`]=e[t][b];e.handlers&&console.log("Behavior handlers are no longer used."),e.fallbacks&&console.log("Fallback behaviors are no longer used.")}function M(e,element,b){let p;if(e===Object(e))for(let t of Object.keys(e))this.namespaces.has(e[t])||(this.namespaces.set(e[t],t),p=t);else p=e;this.behaviors[`${p}:${element}`]=b}function _(e,element){let p;if(e===Object(e))for(let t of Object.keys(e))this.namespaces.has(e[t])||(this.namespaces.set(e[t],t),p=t);else p=e;delete this.behaviors[`${p}:${element}`]}function O(){window.customElements?this.define.call(this,this.els):this.fallback.call(this,this.els)}class C{constructor(e){this.options=e||{},this.addBehaviors=L.bind(this),this.addBehavior=M.bind(this),this.applyBehaviors=O.bind(this),this.removeBehavior=_.bind(this),this.utilities={};for(const u of Object.keys(r))["getPrefixDef","rw","resolveURI"].includes(u)?this.utilities[u]=r[u].bind(this):this.utilities[u]=r[u];if(this.els=[],this.namespaces=new Map,this.behaviors={},this.hasStyle=!1,this.prefixDefs=[],this.debug=!0===this.options.debug,this.options.base)this.base=this.options.base;else try{window&&(this.base=window.location.href.replace(/\/[^\/]*$/,"/"))}catch(e){this.base=""}this.options.omitDefaultBehaviors||this.addBehaviors(d),this.options.ignoreFragmentId&&window&&window.removeEventListener("ceteiceanload",C.restorePosition)}getHTML5(e,t,n){return window&&window.location.href.startsWith(this.base)&&e.indexOf("/")>=0&&(this.base=e.replace(/\/[^\/]*$/,"/")),new Promise((function(t,n){let r=new XMLHttpRequest;r.open("GET",e),r.send(),r.onload=function(){this.status>=200&&this.status<300?t(this.response):n(this.statusText)},r.onerror=function(){n(this.statusText)}})).catch((function(e){console.log("Could not get XML file."),this.debug&&console.log(e)})).then(e=>this.makeHTML5(e,t,n))}makeHTML5(e,t,n){let r=(new DOMParser).parseFromString(e,"text/xml");return this.domToHTML5(r,t,n)}domToHTML5(e,t,n){this.els=function(e,t){const n=e.documentElement;let i=1,r=function(e){return t.has(e.namespaceURI?e.namespaceURI:"")||t.set(e.namespaceURI,"ns"+i++),t.get(e.namespaceURI?e.namespaceURI:"")+":"+e.localName};const o=new Set(Array.from(n.querySelectorAll("*"),r));return o.add(r(n)),o}(e,this.namespaces);let r=t=>{let o;if(this.namespaces.has(t.namespaceURI?t.namespaceURI:"")){let e=this.namespaces.get(t.namespaceURI?t.namespaceURI:"");o=document.createElement(`${e}-${t.localName}`)}else o=document.importNode(t,!1);for(let e of Array.from(t.attributes))"xmlns"==e.name?o.setAttribute("data-xmlns",e.value):o.setAttribute(e.name,e.value),"xml:id"==e.name&&o.setAttribute("id",e.value),"xml:lang"==e.name&&o.setAttribute("lang",e.value),"rendition"==e.name&&o.setAttribute("class",e.value.replace(/#/g,""));if(o.setAttribute("data-origname",t.localName),t.hasAttributes()&&o.setAttribute("data-origatts",t.getAttributeNames().join(" ")),0==t.childNodes.length&&o.setAttribute("data-empty",""),"head"==t.localName){let n=e.evaluate("count(ancestor::*[tei:head])",t,(function(e){if("tei"==e)return"http://www.tei-c.org/ns/1.0"}),XPathResult.NUMBER_TYPE,null);o.setAttribute("data-level",n.numberValue)}if("tagsDecl"==t.localName){let style=document.createElement("style");for(let e of Array.from(t.childNodes))if(e.nodeType==Node.ELEMENT_NODE&&"rendition"==e.localName&&"css"==e.getAttribute("scheme")){let t="";e.hasAttribute("selector")?(t+=e.getAttribute("selector").replace(/([^#, >]+\w*)/g,"tei-$1").replace(/#tei-/g,"#")+"{\n",t+=e.textContent):(t+="."+e.getAttribute("xml:id")+"{\n",t+=e.textContent),t+="\n}\n",style.appendChild(document.createTextNode(t))}style.childNodes.length>0&&(o.appendChild(style),this.hasStyle=!0)}"prefixDef"==t.localName&&(this.prefixDefs.push(t.getAttribute("ident")),this.prefixDefs[t.getAttribute("ident")]={matchPattern:t.getAttribute("matchPattern"),replacementPattern:t.getAttribute("replacementPattern")});for(let e of Array.from(t.childNodes))e.nodeType==Node.ELEMENT_NODE?o.appendChild(r(e)):o.appendChild(e.cloneNode());return n&&n(o,t),o};if(this.dom=r(e.documentElement),this.utilities.dom=this.dom,this.applyBehaviors(),this.done=!0,!t)return window&&window.dispatchEvent(H),this.dom;t(this.dom,this),window&&window.dispatchEvent(H)}unsetNamespace(e){this.namespaces.delete(e)}setBaseUrl(base){this.base=base}append(e,t){let n=this;if(!t)return function(){if(!this.hasAttribute("data-processed")){let content=e.call(n.utilities,this);content&&!n.childExists(this.firstElementChild,content.nodeName)&&n.appendBasic(this,content)}};{let content=e.call(n.utilities,t);content&&!n.childExists(t.firstElementChild,content.nodeName)&&n.appendBasic(t,content)}}appendBasic(e,content){v(e,!0),e.appendChild(content)}bName(e){return e.tagName.substring(0,e.tagName.indexOf("-")).toLowerCase()+":"+e.getAttribute("data-origname")}childExists(e,t){return!(!e||e.nodeName!=t)||e&&e.nextElementSibling&&this.childExists(e.nextElementSibling,t)}decorator(template){if(Array.isArray(template)&&!Array.isArray(template[0]))return this.applyDecorator(template);let e=this;return function(t){for(let n of template)if(t.matches(n[0])||"_"===n[0])return Array.isArray(n[1])?e.decorator(n[1]).call(this,t):n[1].call(this,t)}}applyDecorator(e){let t=this;return function(n){let r=[];for(let i=0;i<e.length;i++)r.push(t.template(e[i],n));return t.insert(n,r)}}getFallback(e,t){if(e[t])return e[t]instanceof Function?e[t]:decorator(e[t])}getHandler(e,t){if(e[t])return e[t]instanceof Function?this.append(e[t]):this.append(this.decorator(e[t]))}insert(e,t){let span=document.createElement("span");for(let t of Array.from(e.childNodes))t.nodeType!==Node.ELEMENT_NODE||t.hasAttribute("data-processed")||this.processElement(t);if(t[0].match("<[^>]+>")&&t[1]&&t[1].match("<[^>]+>")){span.innerHTML=t[0]+(t[1]?t[1]:"");for(let t of Array.from(e.childNodes))span.firstElementChild.appendChild(t.cloneNode(!0))}else{span.innerHTML=t[0],span.setAttribute("data-before",t[0].replace(/<[^>]+>/g,"").length);for(let t of Array.from(e.childNodes))span.appendChild(t.cloneNode(!0));t.length>1&&(span.innerHTML+=t[1],span.setAttribute("data-after",t[1].replace(/<[^>]+>/g,"").length))}return span}processElement(e){if(e.hasAttribute("data-origname")&&!e.hasAttribute("data-processed")){let t=this.getFallback(this.bName(e));t&&(this.append(t,e),e.setAttribute("data-processed",""))}for(let t of Array.from(e.childNodes))t.nodeType===Node.ELEMENT_NODE&&this.processElement(t)}tagName(e){return e.includes(":"),e.replace(/:/,"-").toLowerCase()}template(e,t){let n=e;if(e.search(/\$(\w*)(@([a-zA-Z:]+))/)){let r,o=/\$(\w*)@([a-zA-Z:]+)/g;for(;r=o.exec(e);)n=t.hasAttribute(r[2])?r[1]&&this.utilities[r[1]]?n.replace(r[0],this.utilities[r[1]](t.getAttribute(r[2]))):n.replace(r[0],t.getAttribute(r[2])):n.replace(r[0],"")}return n}define(e){for(let t of e)try{let e=this.getHandler(this.behaviors,t);window.customElements.define(this.tagName(t),class extends HTMLElement{constructor(){super(),this.matches(":defined")||(e&&e.call(this),this.setAttribute("data-processed",""))}connectedCallback(){this.hasAttribute("data-processed")||(e&&e.call(this),this.setAttribute("data-processed",""))}})}catch(e){this.debug&&(console.log(tagName(t)+" couldn't be registered or is already registered."),console.log(e))}}fallback(e){for(let t of e){let e=getFallback(this.behaviors,t);if(e)for(let n of Array.from((this.dom&&!this.done?this.dom:document).getElementsByTagName(tagName(t))))n.hasAttribute("data-processed")||append(e,n)}}static savePosition(){window.sessionStorage.setItem(window.location+"-scroll",window.scrollY)}static restorePosition(){if(window.location.hash)setTimeout((function(){let e=document.querySelector(window.decodeURI(window.location.hash));e&&e.scrollIntoView()}),100);else{let e;(e=window.sessionStorage.getItem(window.location+"-scroll"))&&setTimeout((function(){window.scrollTo(0,e)}),100)}}}try{if(window){window.CETEI=C,window.addEventListener("beforeunload",C.savePosition);var H=new Event("ceteiceanload");window.addEventListener("ceteiceanload",C.restorePosition)}}catch(e){console.log(e)}var R=C,k=n(155),j=n.n(k),I=n(321),S=n(320),D={components:{Menu:I.default,Metadata:S.default},data:function(){return{baseUrl:"https://nakamura196.github.io/tei-js-pub",siteName:"TEI Viewer",github:"https://github.com/shibusawa-lab/lab1",loading:!1,width:window.innerWidth,height:window.innerHeight,drawer:!1,drawer2:!1,df:{},xmlStr:"",teiHTML:null}},head:function(){return{titleTemplate:null,title:this.$t(this.siteName)}},computed:{style:{get:function(){return this.$store.getters.getStyle},set:function(e){this.$store.commit("setStyle",e)}},xml:{get:function(){return this.$store.getters.getXml},set:function(e){this.$store.commit("setXml",e)}}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,style,o,u,l,d,h,f,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.$route.query,r=Date.now(),style=n.style||"data/shibusawa.json",t.next=6,c.a.get(style);case 6:return o=t.sent,e.style=o.data,u=n.u||"data/small.xml",(l=new R).addBehaviors({tei:{persName:function(e){var a=document.createElement("a");return a.setAttribute("href","https://shibusawa-lab.github.io/lab1/entity/agential/"+e.textContent),a.setAttribute("target","_blank"),a.setAttribute("style","text-decoration: none; color: black; background-color: #ffccbc;"),a.innerHTML=e.innerHTML,a},placeName:function(e){var a=document.createElement("a");return a.setAttribute("href","https://shibusawa-lab.github.io/lab1/entity/spatial/"+e.textContent),a.setAttribute("target","_blank"),a.setAttribute("style","text-decoration: none; color: black; background-color: #c8e6c9;"),a.innerHTML=e.innerHTML,a},time:function(e){var a=document.createElement("span");return a.setAttribute("style","background-color: #fff9c4;"),a.innerHTML=e.innerHTML,a},date:function(e){var a=document.createElement("span");return a.setAttribute("style","background-color: #bbdefb;"),a.innerHTML=e.innerHTML,a},head:function(e){var a=document.createElement("div");return a.setAttribute("style","padding: 20px; font-size: large; font-weight: bold;"),a.innerHTML=e.innerHTML,a},ab:function(e){var a=document.createElement("div");return a.setAttribute("style","padding: 20px;"),a.innerHTML=e.innerHTML,a},div:function(e){if("archival-description"===e.getAttribute("type")){var a=document.createElement("div");return a.setAttribute("style","padding-top: 100px;"),a.innerHTML=e.innerHTML,a}},figure:function(e){var a=document.createElement("div");return a.setAttribute("style","padding: 20px;"),a.innerHTML=e.innerHTML,a}}}),d=e,l.getHTML5(u,(function(data){console.log(data),d.teiHTML=data.outerHTML,d.loading=!1,window.setTimeout((function(){d.loading=!1,d.scroll()}),0)})),t.next=15,c.a.get(u);case 15:h=t.sent,f=Date.now(),console.log("downloaded",f-r),"string"==typeof(m=h.data)&&(v=new DOMParser,m=v.parseFromString(m,"text/xml")),e.xml=m;case 21:case"end":return t.stop()}}),t)})))()},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight},scroll:function(){var e=this.$route.query;if(e.id){var t=e.id,n=document.querySelector("#"+t).getBoundingClientRect(),r={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+n.width,x:!0};j.a.scrollTo("#"+t,0,r)}}}},P=(n(441),n(67)),$=n(95),V=n.n($),B=n(457),U=n(450),z=n(406),F=n(456),X=n(356),W=n(349),G=n(332),J=n(311),Y=n(452),Z=n(453),K=n(361),Q=n(449),ee=n(338),component=Object(P.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:!0,width:384},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("Menu")],1),e._v(" "),n("v-navigation-drawer",{attrs:{app:"",temporary:!0,right:"",width:512},model:{value:e.drawer2,callback:function(t){e.drawer2=t},expression:"drawer2"}},[e.xml?n("Metadata",{attrs:{xml:e.xml}}):e._e()],1),e._v(" "),n("v-app-bar",{attrs:{color:"primary",dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-icon",[e._v("mdi-view-list")])],1),e._v(" "),n("v-toolbar-title",[e._v("\n        "+e._s("渋沢栄一伝記資料別巻第一日記のTEIマークアップ")+"\n      ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{depressed:"",btn:"",color:"primary"}},r),[n("v-icon",{staticClass:"mr-2"},[e._v("mdi-translate")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{to:e.switchLocalePath("ja")}},[n("v-list-item-title",[e._v("日本語")])],1),e._v(" "),n("v-list-item",{attrs:{to:e.switchLocalePath("en")}},[n("v-list-item-title",[e._v("English")])],1)],1)],1),e._v(" "),n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer2=!e.drawer2}}})],1)],1),e._v(" "),e.loading?[n("div",{staticClass:"pa-10 text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:e._e(),e._v(" "),n("div",{staticClass:"px-10 pt-10",style:"width: "+e.width+"px;"},[n("v-card",{staticClass:"scroll vertical pa-5",style:"height: "+.85*e.height+"px;",attrs:{id:"container",outlined:"",flat:""}},[n("div",{attrs:{id:"tei"},domProps:{innerHTML:e._s(e.teiHTML)}})])],1)],2)}),[],!1,null,null,null);t.default=component.exports;V()(component,{Menu:n(321).default,Metadata:n(320).default}),V()(component,{VAppBar:B.a,VAppBarNavIcon:U.a,VBtn:z.a,VCard:F.a,VIcon:X.a,VList:W.a,VListItem:G.a,VListItemTitle:J.b,VMenu:Y.a,VNavigationDrawer:Z.a,VProgressCircular:K.a,VSpacer:Q.a,VToolbarTitle:ee.a})}}]);