(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1088:function(e,t,n){__NEXT_REGISTER_PAGE("/_/topgames",function(){return e.exports=n(209),{page:e.exports.default}})},209:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),c=n(0),o=n.n(c),i=n(33),s=n(12),l=n(31),u=n(1129),p=n(1139),m=n(18),d=n(20);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,a,r,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var c=e.apply(t,n);function o(e){h(c,a,r,o,i,"next",e)}function i(e){h(c,a,r,o,i,"throw",e)}o(void 0)})}}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,v(t).call(this,e))).state={limits:e.limits||100,games:[],loading:!1},n}var n,a,f,h,E;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,c["Component"]),n=t,(a=[{key:"componentDidMount",value:(E=b(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reload();case 2:case"end":return e.stop()}},e,this)})),function(){return E.apply(this,arguments)})},{key:"reload",value:(h=b(r.a.mark(function e(){var t,n,a,c,o,l,u,p,m,d,f,h,b,g,y;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),t=Object(i.a)(),n=t.web3,a=t.contract,e.next=5,a.methods.getNames().call();case 5:return c=e.sent,e.next=8,a.methods.getAddresses().call();case 8:o=e.sent,l=[],u=0;case 11:if(!(u<o.length)){e.next=27;break}return p=o[u],m=c[u],e.next=16,a.methods.getGame(m).call();case 16:if(d=e.sent){e.next=20;break}return console.log(d),e.abrupt("continue",24);case 20:f=s.a.eth(n,d[9]),h=s.a.eth(n,d[1]),f=s.a.nicePrizePool(f,h),l.push({key:p,address:p,name:s.a.hexDecode(m),price:h,timespan:s.a.second2string(d[3]),profitOfManager:d[4],profitOfFirstPlayer:d[5],profitOfWinner:d[6],poolValue:f,totalBets:d[10]});case 24:u++,e.next=11;break;case 27:l=(l=l.sort(s.a.dynamicSort("-poolValue"))).slice(0,this.state.limits),this.setState({games:l}),u=0;case 31:if(!(u<l.length)){e.next=43;break}return b=l[u].address,e.next=35,Object(i.b)(b);case 35:return g=e.sent,e.next=38,g.methods.title().call();case 38:y=e.sent,l[u].title=y;case 40:u++,e.next=31;break;case 43:this.setState({games:l}),console.log("load games: "+l.length),e.next=50;break;case 47:e.prev=47,e.t0=e.catch(0),console.log(e.t0);case 50:this.setState({loading:!1});case 51:case"end":return e.stop()}},e,this,[[0,47]])})),function(){return h.apply(this,arguments)})},{key:"renderGame",value:function(e){return o.a.createElement(l.a,{key:e.key},o.a.createElement(l.a.Content,null,o.a.createElement(u.a,{floated:"right",size:"mini",src:"/static/img/icon.png"}),o.a.createElement(l.a.Header,null,o.a.createElement("a",{href:d.a.gameUrl(e.name,e.address),target:"_blank"},e.title||e.name)),o.a.createElement(l.a.Meta,null),o.a.createElement(l.a.Description,null,o.a.createElement("strong",null,o.a.createElement(m.b,{icon:"money",tips:"Profit% of winner",content:e.profitOfWinner+"%"}),o.a.createElement(m.b,{icon:"piper",tips:"Profit% of first player",content:e.profitOfFirstPlayer+"%"}),o.a.createElement(m.b,{icon:"ad",tips:"Profit% of manager",content:e.profitOfManager+"%"}),o.a.createElement(m.b,{icon:"eth",tips:"Betting Fee",content:e.price})))),o.a.createElement(l.a.Content,{extra:!0},o.a.createElement("a",{href:d.a.gameUrl(e.name,e.address),target:"_blank"},o.a.createElement("div",{className:"ui two buttons"},o.a.createElement(p.a,{inverted:!0,color:"green"},"PLAY")))),o.a.createElement(l.a.Content,{extra:!0},o.a.createElement(m.b,{icon:"diamond",tips:"Prize Pool",content:e.poolValue}),o.a.createElement(m.b,{icon:"user",tips:"Total Bets",content:e.totalBets}),o.a.createElement(m.b,{icon:"clock",tips:"Time span",content:e.timespan})))}},{key:"render",value:function(){return o.a.createElement("div",{id:"games"},this.state.loading&&o.a.createElement(m.a,null),o.a.createElement(l.a.Group,{stackable:!0},this.state.games.map(this.renderGame)))}}])&&g(n.prototype,a),f&&g(n,f),t}();t.default=E},31:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(14),o=n.n(c),i=n(15),s=n.n(i),l=n(16),u=n.n(l),p=n(13),m=n.n(p),d=n(17),f=n.n(d),h=n(4),b=n.n(h),g=n(3),y=n.n(g),v=n(6),O=n.n(v),E=(n(7),n(0)),k=n.n(E),j=n(359),x=n(643),N=n(647),w=n(5),P=n(1129),C=(n(23),n(648));function _(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,o=O()(Object(j.d)(c),"description",n),i=Object(x.a)(_,e),s=Object(N.a)(_,e);return k.a.createElement(s,r()({},i,{className:o}),w.a.isNil(t)?a:t)}_.handledProps=["as","children","className","content","textAlign"],_.propTypes={};var A=_;function S(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,o=O()(Object(j.d)(c),"header",n),i=Object(x.a)(S,e),s=Object(N.a)(S,e);return k.a.createElement(s,r()({},i,{className:o}),w.a.isNil(t)?a:t)}S.handledProps=["as","children","className","content","textAlign"],S.propTypes={};var T=S;function G(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,o=O()(Object(j.d)(c),"meta",n),i=Object(x.a)(G,e),s=Object(N.a)(G,e);return k.a.createElement(s,r()({},i,{className:o}),w.a.isNil(t)?a:t)}G.handledProps=["as","children","className","content","textAlign"],G.propTypes={};var M=G;function R(e){var t=e.children,n=e.className,a=e.content,c=e.description,o=e.extra,i=e.header,s=e.meta,l=e.textAlign,u=O()(Object(j.a)(o,"extra"),Object(j.d)(l),"content",n),p=Object(x.a)(R,e),m=Object(N.a)(R,e);return w.a.isNil(t)?w.a.isNil(a)?k.a.createElement(m,r()({},p,{className:u}),Object(C.d)(T,function(e){return{content:e}},i,{autoGenerateKey:!1}),Object(C.d)(M,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(C.d)(A,function(e){return{content:e}},c,{autoGenerateKey:!1})):k.a.createElement(m,r()({},p,{className:u}),a):k.a.createElement(m,r()({},p,{className:u}),t)}R.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],R.propTypes={};var B=R,D=n(21),K=n.n(D);function z(e){var t=e.centered,n=e.children,a=e.className,c=e.content,o=e.doubling,i=e.items,s=e.itemsPerRow,l=e.stackable,u=e.textAlign,p=O()("ui",Object(j.a)(t,"centered"),Object(j.a)(o,"doubling"),Object(j.a)(l,"stackable"),Object(j.d)(u),Object(j.g)(s),"cards",a),m=Object(x.a)(z,e),d=Object(N.a)(z,e);if(!w.a.isNil(n))return k.a.createElement(d,r()({},m,{className:p}),n);if(!w.a.isNil(c))return k.a.createElement(d,r()({},m,{className:p}),c);var f=K()(i,function(e){var t=e.key||[e.header,e.description].join("-");return k.a.createElement(V,r()({key:t},e))});return k.a.createElement(d,r()({},m,{className:p}),f)}z.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],z.propTypes={};var F=z;n.d(t,"a",function(){return V});var V=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=u()(this,(e=m()(t)).call.apply(e,[this].concat(r))),y()(b()(b()(n)),"handleClick",function(e){var t=n.props.onClick;t&&t(e,n.props)}),n}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,n=e.centered,a=e.children,c=e.className,o=e.color,i=e.content,s=e.description,l=e.extra,u=e.fluid,p=e.header,m=e.href,d=e.image,f=e.link,h=e.meta,b=e.onClick,g=e.raised,y=O()("ui",o,Object(j.a)(n,"centered"),Object(j.a)(u,"fluid"),Object(j.a)(f,"link"),Object(j.a)(g,"raised"),"card",c),v=Object(x.a)(t,this.props),E=Object(N.a)(t,this.props,function(){if(b)return"a"});return w.a.isNil(a)?w.a.isNil(i)?k.a.createElement(E,r()({},v,{className:y,href:m,onClick:this.handleClick}),P.a.create(d,{autoGenerateKey:!1}),(s||p||h)&&k.a.createElement(B,{description:s,header:p,meta:h}),l&&k.a.createElement(B,{extra:!0},l)):k.a.createElement(E,r()({},v,{className:y,href:m,onClick:this.handleClick}),i):k.a.createElement(E,r()({},v,{className:y,href:m,onClick:this.handleClick}),a)}}]),t}(E.Component);y()(V,"Content",B),y()(V,"Description",A),y()(V,"Group",F),y()(V,"Header",T),y()(V,"Meta",M),y()(V,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),V.propTypes={}}},[[1088,1,0]]]);