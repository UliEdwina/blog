(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9/5/":function(e,t,n){(function(t){n("sC2a"),n("q8oJ"),n("C9fy"),n("8npG");var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,c=u||s||Function("return this")(),d=Object.prototype.toString,f=Math.max,p=Math.min,h=function(){return c.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,a,i,l,u,s=0,c=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,s=t,i=e.apply(a,n)}function v(e){return s=e,l=setTimeout(w,t),c?b(e):i}function x(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-s>=a}function w(){var e=h();if(x(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-u);return d?p(n,a-(e-s)):n}(e))}function E(e){return l=void 0,y&&o?b(e):(o=r=void 0,i)}function k(){var e=h(),n=x(e);if(o=arguments,r=this,u=e,n){if(void 0===l)return v(u);if(d)return l=setTimeout(w,t),b(u)}return void 0===l&&(l=setTimeout(w,t)),i}return t=m(t)||0,g(n)&&(c=!!n.leading,a=(d="maxWait"in n)?f(m(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),k.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=u=r=l=void 0},k.flush=function(){return void 0===l?i:E(h())},k}}).call(this,n("yLpj"))},Ekho:function(e,t,n){var o,r,a;n("sC2a"),n("zGcK"),n("sc67"),function(){var n,i,l,u,s,c,d,f,p,h,g,m,y,b,v;l=Math.floor,h=Math.min,i=function(e,t){return e<t?-1:e>t?1:0},p=function(e,t,n,o,r){var a;if(null==n&&(n=0),null==r&&(r=i),n<0)throw new Error("lo must be non-negative");for(null==o&&(o=e.length);n<o;)r(t,e[a=l((n+o)/2)])<0?o=a:n=a+1;return[].splice.apply(e,[n,n-n].concat(t)),t},c=function(e,t,n){return null==n&&(n=i),e.push(t),b(e,0,e.length-1,n)},s=function(e,t){var n,o;return null==t&&(t=i),n=e.pop(),e.length?(o=e[0],e[0]=n,v(e,0,t)):o=n,o},f=function(e,t,n){var o;return null==n&&(n=i),o=e[0],e[0]=t,v(e,0,n),o},d=function(e,t,n){var o;return null==n&&(n=i),e.length&&n(e[0],t)<0&&(t=(o=[e[0],t])[0],e[0]=o[1],v(e,0,n)),t},u=function(e,t){var n,o,r,a,u,s;for(null==t&&(t=i),u=[],o=0,r=(a=function(){s=[];for(var t=0,n=l(e.length/2);0<=n?t<n:t>n;0<=n?t++:t--)s.push(t);return s}.apply(this).reverse()).length;o<r;o++)n=a[o],u.push(v(e,n,t));return u},y=function(e,t,n){var o;if(null==n&&(n=i),-1!==(o=e.indexOf(t)))return b(e,0,o,n),v(e,o,n)},g=function(e,t,n){var o,r,a,l,s;if(null==n&&(n=i),!(r=e.slice(0,t)).length)return r;for(u(r,n),a=0,l=(s=e.slice(t)).length;a<l;a++)o=s[a],d(r,o,n);return r.sort(n).reverse()},m=function(e,t,n){var o,r,a,l,c,d,f,g,m;if(null==n&&(n=i),10*t<=e.length){if(!(a=e.slice(0,t).sort(n)).length)return a;for(r=a[a.length-1],l=0,d=(f=e.slice(t)).length;l<d;l++)n(o=f[l],r)<0&&(p(a,o,0,null,n),a.pop(),r=a[a.length-1]);return a}for(u(e,n),m=[],c=0,g=h(t,e.length);0<=g?c<g:c>g;0<=g?++c:--c)m.push(s(e,n));return m},b=function(e,t,n,o){var r,a,l;for(null==o&&(o=i),r=e[n];n>t&&o(r,a=e[l=n-1>>1])<0;)e[n]=a,n=l;return e[n]=r},v=function(e,t,n){var o,r,a,l,u;for(null==n&&(n=i),r=e.length,u=t,a=e[t],o=2*t+1;o<r;)(l=o+1)<r&&!(n(e[o],e[l])<0)&&(o=l),e[t]=e[o],o=2*(t=o)+1;return e[t]=a,b(e,u,t,n)},n=function(){function e(e){this.cmp=null!=e?e:i,this.nodes=[]}return e.push=c,e.pop=s,e.replace=f,e.pushpop=d,e.heapify=u,e.updateItem=y,e.nlargest=g,e.nsmallest=m,e.prototype.push=function(e){return c(this.nodes,e,this.cmp)},e.prototype.pop=function(){return s(this.nodes,this.cmp)},e.prototype.peek=function(){return this.nodes[0]},e.prototype.contains=function(e){return-1!==this.nodes.indexOf(e)},e.prototype.replace=function(e){return f(this.nodes,e,this.cmp)},e.prototype.pushpop=function(e){return d(this.nodes,e,this.cmp)},e.prototype.heapify=function(){return u(this.nodes,this.cmp)},e.prototype.updateItem=function(e){return y(this.nodes,e,this.cmp)},e.prototype.clear=function(){return this.nodes=[]},e.prototype.empty=function(){return 0===this.nodes.length},e.prototype.size=function(){return this.nodes.length},e.prototype.clone=function(){var t;return(t=new e).nodes=this.nodes.slice(0),t},e.prototype.toArray=function(){return this.nodes.slice(0)},e.prototype.insert=e.prototype.push,e.prototype.top=e.prototype.peek,e.prototype.front=e.prototype.peek,e.prototype.has=e.prototype.contains,e.prototype.copy=e.prototype.clone,e}(),r=[],void 0===(a="function"==typeof(o=function(){return n})?o.apply(t,r):o)||(e.exports=a)}.call(this)},F1pL:function(e,t,n){e.exports=n("Ekho")},QNMc:function(e,t,n){var o=n("P8UN");o(o.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},URgk:function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new a(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},UZQp:function(e,t,n){"use strict";n.r(t);var o=n("ocNX"),r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("I/Ru"),u=function(e){var t=e.wordCloudText,n=e.wordCloudTag,o=a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},style:{width:"100%",paddingTop:"12px",paddingBottom:"12px",background:"#f7f7f7"}}),r=a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},style:{width:"100%",paddingTop:"12px",paddingBottom:"12px",background:"#f7f7f7"}});return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},"WordCloud"),a.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"64px"}},"自分の記事の本文とタグをインプットにして作成したWordCloudです。"),a.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"64px"}},r),a.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"64px"}},o))},s=(n("Ll4R"),n("sC2a"),n("gu/5"),n("eoYm"),n("v9g0"),n("ROFb")),c=n.n(s),d=n("h021"),f=n.n(d),p=n("+Br+"),h=n.n(p),g=n("tE8B"),m=n.n(g),y=n("K4JE");function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}c.a.use(h.a);var v={name:"cose-bilkent",nodeDimensionsIncludeLabels:!1,refresh:30,fit:!0,padding:10,randomize:!0,nodeRepulsion:1e8,idealEdgeLength:700,edgeElasticity:.45,nestingFactor:.1,gravity:.2,numIter:2500,tile:!0,animate:"end",tilingPaddingVertical:400,tilingPaddingHorizontal:300,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.5},x=[{selector:'node[id != "zoomUp"][ id != "zoomDown" ]',style:{label:"data(title)","background-image":"data(backgroudImage)",shape:"rectangle",padding:"0px","text-outline-width":"2px","text-outline-color":"white","text-outline-opacity":"1","text-margin-x":"-300px","text-margin-y":"-1","text-valign":"top","text-halign":"right","font-weight":"bold","text-max-width":"300px","text-wrap":"wrap","font-size":"25px","border-width":"0.2px","border-style":"solid","border-color":"gray",width:"300px",height:"166px",color:"black","background-fit":"contain"}},{selector:'node[id = "zoomUp"]',style:{label:"+",shape:"round-rectangle",width:"150px",height:"150px","border-color":"gray",color:"green","text-valign":"center","text-halign":"center","font-size":"150px","font-weight":"bold"}},{selector:'node[id = "zoomDown"]',style:{label:"-",shape:"round-rectangle",width:"150px",height:"150px","border-color":"gray",color:"green","text-valign":"center","text-halign":"center","font-size":"150px","font-weight":"bold"}},{selector:"edge",style:{label:"data(keyword)",width:"data(width)","curve-style":"bezier","line-cap":"round","text-background-color":"#f1f1f1","text-background-opacity":1,"text-background-shape":"round-rectangle","text-background-padding":"1px","text-max-width":"300px","text-halign":"center","text-wrap":"ellipsis","font-size":"data(fontSize)","control-point-step-size":"data(margin)","text-rotation":"autorotate",color:"black"}}],w={data:{id:"zoomUp",title:"",parent:"nparent"},position:{x:0,y:100},selected:!1,selectable:!1,grabbable:!1,locked:!0},E={data:{id:"zoomDown",title:"",parent:"nparent"},position:{x:0,y:260},selected:!1,selectable:!1,grabbable:!1,locked:!0};var k=function(e){var t,n;function o(t){var n;return(n=e.call(this)||this).state={isFull:!1,cytoscapeElements:null},n.goFull=n.goFull.bind(b(n)),n.goNotFull=n.goNotFull.bind(b(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){var e=this.props,t=e.posts,n=function(e){var t=e.posts,n=e.allImage;return t.map((function(e){var t,o=n.edges.find((function(t){return t.node.relativePath.includes(e.node.fields.thumbnail||y.defaultThumbnailImagePath)})),r=y.blogUrl+o.node.childImageSharp.sizes.src,a=e.node.fields.title.replace(/ /g,"");if(a.length>25){t=a.match(/.{25}/g).join("\n");var i=a.length%25;i&&(t+="\n"+a.substring(a.length-i))}else t=a;return{data:{id:e.node.fields.slug,title:t,backgroudImage:r,date:e.node.fields.date,href:e.node.fields.slug}}}))}({posts:t,allImage:e.allImage});n.push(w),n.push(E);var o=function(e){var t=e.posts,n=[];return t.forEach((function(e){e.relations.forEach((function(t){var o=t.details,r=t.node;return o.forEach((function(t){var o=t.weight/30*1,a={data:{source:e.node.fields.slug,target:r.fields.slug,width:o,fontSize:10*o,margin:20*o,keyword:t.keyword}};n.some((function(e){return(a.data.source===e.data.source&&a.data.target===e.data.target||a.data.target===e.data.source&&a.data.source===e.data.target)&&a.data.width===e.data.width&&a.data.keyword===e.data.keyword}))||n.push(a)}))}))})),n}({posts:t}),r=f.a.normalizeElements({nodes:n,edges:o});this.setState({cytoscapeElements:r})},r.goFull=function(){this.setState({isFull:!0})},r.goNotFull=function(){this.setState({isFull:!1})},r.render=function(){var e=this,t=.3,n=this.state.isFull?a.a.createElement("button",{onClick:this.goNotFull,style:{cursor:"pointer"}},"戻る"):a.a.createElement("button",{onClick:this.goFull,style:{cursor:"pointer"}},"フルスクリーン表示");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},"記事関連度マップ"),a.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"64px"}},"記事毎のタグ・キーワードをもとに関連度合いをCytoscape.jsで可視化したものです。Canvasで描画していますが、記事をクリックして記事に遷移できたりします。 マウスホイールで拡大率を変更できます。マップの左上の+-ボタンでも変更できます。"),a.a.createElement(m.a,{enabled:this.state.isFull,onChange:function(t){return e.setState({isFull:t})}},a.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"-34px",zIndex:1,position:"relative"}},n),this.state.cytoscapeElements?a.a.createElement(f.a,{zoom:t,pan:{x:100,y:100},minZoom:.1,maxZoom:4,elements:this.state.cytoscapeElements,layout:v,style:{width:this.state.isFull?"100vw":"90%",height:"100vh",position:"relative",marginLeft:"auto",marginRight:"auto",border:"1px solid black",backgroundColor:"#ffffff",backgroundImage:"repeating-linear-gradient(to bottom,\n                    transparent 21px,\n                    rgba(225, 225, 225, 0.17) 22px,  rgba(225, 225, 225, 0.17) 22px,\n                    transparent 23px,  transparent 43px, \n                    rgba(225, 225, 225, 0.17) 44px,  rgba(225, 225, 225, 0.17) 44px,\n                    transparent 45px,  transparent 65px, \n                    rgba(225, 225, 225, 0.17) 66px,  rgba(225, 225, 225, 0.17) 66px,\n                    transparent 67px,  transparent 87px, \n                    rgba(225, 225, 225, 0.17) 88px,  rgba(225, 225, 225, 0.17) 88px,\n                    transparent 89px,  transparent 109px, \n                    rgba(225, 225, 225, 0.17) 110px,  rgba(225, 225, 225, 0.17) 110px),\n                  repeating-linear-gradient(to right,\n                    transparent 21px,\n                    rgba(225, 225, 225, 0.17) 22px,  rgba(225, 225, 225, 0.17) 22px,\n                    transparent 23px,  transparent 43px, \n                    rgba(225, 225, 225, 0.17) 44px,  rgba(225, 225, 225, 0.17) 44px,\n                    transparent 45px,  transparent 65px, \n                    rgba(225, 225, 225, 0.17) 66px,  rgba(225, 225, 225, 0.17) 66px,\n                    transparent 67px,  transparent 87px, \n                    rgba(225, 225, 225, 0.17) 88px,  rgba(225, 225, 225, 0.17) 88px,\n                    transparent 89px,  transparent 109px, \n                    rgba(225, 225, 225, 0.17) 110px,  rgba(225, 225, 225, 0.17) 110px)"},stylesheet:x,cy:function(e){e.on("click",'node[id = "zoomUp"]',(function(n){t<4&&(t+=.02),e.zoom({level:t,position:n.target.position()})})),e.on("click",'node[id = "zoomDown"]',(function(n){t>.1&&(t-=.02),e.zoom({level:t,position:n.target.position()})})),e.on("tap",'node[id != "zoomUp"][ id != "zoomDown" ]',(function(){try{window.open(this.data("href"))}catch(e){window.location.href=this.data("href")}})),e.on("mouseover",'node[id != "zoomUp"][ id != "zoomDown" ]',(function(e){document.body.style.cursor="pointer",e.target.style({"text-margin-x":"-500px",width:"500px",height:"270px"}),e.target.connectedEdges().style({"line-color":"blue",color:"blue","text-max-width":"400px"})})),e.on("mouseout",'node[id != "zoomUp"][ id != "zoomDown" ]',(function(e){document.body.style.cursor="default",e.target.style({"text-margin-x":"-300px",width:"300px",height:"166px"}),e.target.connectedEdges().style({"line-color":"gray",color:"black","text-max-width":"300px"})}))}}):null))},o}(a.a.Component);t.default=function(e){var t=e.pathContext,n=e.location;return a.a.createElement(i.StaticQuery,{query:"943715985",render:function(e){var o=t.allPostRelations,r=t.wordCloudText,i=t.wordCloudTag;return a.a.createElement(l.a,{location:n},a.a.createElement(u,{wordCloudText:r,wordCloudTag:i}),a.a.createElement(k,{posts:o,allImage:e.images}))},data:o})}},YBdB:function(e,t,n){(function(e,t){n("8npG"),n("sc67"),function(e,n){"use strict";if(!e.setImmediate){var o,r,a,i,l,u=1,s={},c=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){a.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(i="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&h(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),o=function(t){e.postMessage(i+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[u]=r,o(u),u++},f.clearImmediate=p}function p(e){delete s[e]}function h(e){if(c)setTimeout(h,0,e);else{var t=s[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("KCCg"))},Ynen:function(e,t,n){"use strict";n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5},r=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror"],a=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],i=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"],l="undefined"!=typeof window&&void 0!==window.document?window.document:{},u="fullscreenEnabled"in l&&Object.keys(o)||r[0]in l&&r||a[0]in l&&a||i[0]in l&&i||[];t.default={requestFullscreen:function(e){return e[u[o.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[u[o.requestFullscreen]]},get exitFullscreen(){return l[u[o.exitFullscreen]].bind(l)},addEventListener:function(e,t,n){return l.addEventListener(u[o[e]],t,n)},removeEventListener:function(e,t,n){return l.removeEventListener(u[o[e]],t,n)},get fullscreenEnabled(){return Boolean(l[u[o.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return l[u[o.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return l[("on"+u[o.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return l[("on"+u[o.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return l[("on"+u[o.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return l[("on"+u[o.fullscreenerror]).toLowerCase()]=e}}},h021:function(e,t,n){var o,r,a,i;n("LagC"),n("JHok"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("n7j8"),n("pS08"),n("m210"),n("4DPX"),n("R48M"),window,e.exports=(o=n("q1tI"),r=n("i8i4"),a=n("17x9"),i=n("ROFb"),function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o({}),a=function(e,t){return null==e||null==t};t.hashDiff=function(e,t){return a(e,t)||e.hash()!==t.hash()},t.shallowObjDiff=function(e,t){if(a(e,t)&&(null!=e||null!=t))return!0;if(e===t)return!1;if((void 0===e?"undefined":o(e))!==r||(void 0===t?"undefined":o(t))!==r)return e!==t;var n=Object.keys(e),i=Object.keys(t),l=function(n){return e[n]!==t[n]};return n.length!==i.length||!(!n.some(l)&&!i.some(l))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e,t){return null!=e?e[t]:null},t.toJson=function(e){return e},t.forEach=function(e,t){return e.forEach(t)}},function(e,t,n){"use strict";e.exports=n(3).default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(4)),a=c(n(5)),i=n(6),l=n(8),u=c(n(9)),s=n(10);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="CytoscapeComponent",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,null,[{key:"normalizeElements",value:function(e){if(null!=e.length)return e;var t=e.nodes,n=e.edges;return null==t&&(t=[]),null==n&&(n=[]),t.concat(n)}},{key:"propTypes",get:function(){return i.types}},{key:"defaultProps",get:function(){return l.defaults}}]),o(t,[{key:"componentDidMount",value:function(){var e=a.default.findDOMNode(this),t=this.props,n=t.global,o=t.headless,r=t.styleEnabled,i=t.hideEdgesOnViewport,l=t.textureOnViewport,s=t.motionBlur,c=t.motionBlurOpacity,d=t.wheelSensitivity,f=t.pixelRatio,p=this._cy=new u.default({container:e,headless:o,styleEnabled:r,hideEdgesOnViewport:i,textureOnViewport:l,motionBlur:s,motionBlurOpacity:c,wheelSensitivity:d,pixelRatio:f});n&&(window[n]=p),this.updateCytoscape(null,this.props)}},{key:"updateCytoscape",value:function(e,t){var n=this._cy,o=t.diff,r=t.toJson,a=t.get,i=t.forEach;(0,s.patch)(n,e,t,o,r,a,i),null!=t.cy&&t.cy(n)}},{key:"componentDidUpdate",value:function(e){this.updateCytoscape(e,this.props)}},{key:"componentWillUnmount",value:function(){this._cy.destroy()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.style;return r.default.createElement("div",{id:t,className:n,style:o})}}]),t}();t.default=d},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.types=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(7)),r=o.default.string,a=o.default.array,i=o.default.object,l=o.default.number,u=o.default.bool,s=o.default.oneOfType,c=o.default.any,d=o.default.func;t.types={id:r,className:r,style:s([r,i]),elements:s([a,c]),stylesheet:s([a,c]),layout:s([i,c]),pan:s([i,c]),zoom:l,panningEnabled:u,userPanningEnabled:u,minZoom:l,maxZoom:l,zoomingEnabled:u,userZoomingEnabled:u,boxSelectionEnabled:u,autoungrabify:u,autolock:u,autounselectify:u,get:d,toJson:d,diff:d,forEach:d,cy:d,headless:u,styleEnabled:u,hideEdgesOnViewport:u,textureOnViewport:u,motionBlur:u,motionBlurOpacity:l,wheelSensitivity:l,pixelRatio:s([r,i])}},function(e,t){e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaults=t.pan=t.zoom=t.stylesheet=t.elements=t.identity=void 0;var o=n(0),r=n(1),a=(t.identity=function(e){return e},t.elements=[{data:{id:"a",label:"Example node A"}},{data:{id:"b",label:"Example node B"}},{data:{id:"e",source:"a",target:"b"}}]),i=t.stylesheet=[{selector:"node",style:{label:"data(label)"}}],l=t.zoom=1,u=t.pan={x:0,y:0};t.defaults={diff:o.shallowObjDiff,get:r.get,toJson:r.toJson,forEach:r.forEach,elements:a,stylesheet:i,zoom:l,pan:u}},function(e,t){e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.patch=void 0;var o=n(1),r=n(0),a=function(e,t,n,r){return n((0,o.get)(e,r),(0,o.get)(t,r))},i=(t.patch=function(e,t,n,c,d,f,p){e.batch((function(){(c===r.shallowObjDiff||a(t,n,c,"elements"))&&s(e,(0,o.get)(t,"elements"),(0,o.get)(n,"elements"),d,f,p,c),a(t,n,c,"stylesheet")&&u(e,(0,o.get)(t,"stylesheet"),(0,o.get)(n,"stylesheet"),d),["zoom","minZoom","maxZoom","zoomingEnabled","userZoomingEnabled","pan","panningEnabled","userPanningEnabled","boxSelectionEnabled","autoungrabify","autolock","autounselectify"].forEach((function(r){a(t,n,c,r)&&i(e,r,(0,o.get)(t,r),(0,o.get)(n,r),d)}))})),a(t,n,c,"layout")&&l(e,(0,o.get)(t,"layout"),(0,o.get)(n,"layout"),d)},function(e,t,n,o,r){e[t](r(o))}),l=function(e,t,n,o){var r=o(n);null!=r&&e.layout(r).run()},u=function(e,t,n,o){var r=e.style();null!=r&&r.fromJson(o(n)).update()},s=function(e,t,n,o,r,a,i){var l=[],u=e.collection(),s=[],d={},f={},p=function(e){return r(r(e,"data"),"id")};a(n,(function(e){var t=p(e);f[t]=e})),null!=t&&a(t,(function(t){var n=p(t);d[n]=t,function(e){return null!=f[e]}(n)||u.merge(e.getElementById(n))})),a(n,(function(e){var t=p(e),n=function(e){return d[e]}(t);!function(e){return null!=d[e]}(t)?l.push(o(e)):s.push({ele1:n,ele2:e})})),u.length>0&&e.remove(u),l.length>0&&e.add(l),s.forEach((function(t){var n=t.ele1,a=t.ele2;return c(e,n,a,o,r,i)}))},c=function(e,t,n,o,r,a){var i=r(r(n,"data"),"id"),l=e.getElementById(i),u={};["data","position","selected","selectable","locked","grabbable","classes"].forEach((function(e){var i=r(n,e);a(i,r(t,e))&&(u[e]=o(i))}));var s=r(n,"scratch");a(s,r(t,"scratch"))&&l.scratch(o(s)),Object.keys(u).length>0&&l.json(u)}}]))},m5Zt:function(e,t,n){var o=n("P8UN");o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},tE8B:function(e,t,n){"use strict";n("n7j8"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=u(r),i=u(n("17x9")),l=u(n("Ynen"));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.detectFullScreen=n.detectFullScreen.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){l.default.addEventListener("fullscreenchange",this.detectFullScreen)}},{key:"componentWillUnmount",value:function(){l.default.removeEventListener("fullscreenchange",this.detectFullScreen)}},{key:"componentDidUpdate",value:function(){this.handleProps(this.props)}},{key:"handleProps",value:function(e){var t=l.default.fullscreenElement===this.node;t&&!e.enabled?this.leaveFullScreen():!t&&e.enabled&&this.enterFullScreen()}},{key:"detectFullScreen",value:function(){this.props.onChange&&this.props.onChange(l.default.fullscreenElement===this.node)}},{key:"enterFullScreen",value:function(){l.default.fullscreenEnabled&&l.default.requestFullscreen(this.node)}},{key:"leaveFullScreen",value:function(){l.default.fullscreenEnabled&&l.default.exitFullscreen()}},{key:"render",value:function(){var e=this,t=["fullscreen"];return this.props.enabled&&t.push("fullscreen-enabled"),a.default.createElement("div",{className:t.join(" "),ref:function(t){return e.node=t},style:this.props.enabled?{height:"100%",width:"100%"}:void 0},this.props.children)}}]),t}(r.Component);s.propTypes={children:i.default.node.isRequired,enabled:i.default.bool.isRequired,onChange:i.default.func},s.defaultProps={enabled:!1},t.default=s}}]);