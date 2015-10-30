/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-mq-cssclasses
 */
;window.Modernizr=function(e,t,n){function S(e){f.cssText=e}function x(e,t){return S(prefixes.join(e+";")+(t||""))}function T(e,t){return typeof e===t}function N(e,t){return!!~(""+e).indexOf(t)}function C(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:T(s,"function")?s.bind(r||t):s}return!1}var r="2.8.3",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l,c={}.toString,h={},p={},d={},v=[],m=v.slice,g,y=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:u+(r+1),c.appendChild(f);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),c.id=u,(h?c:p).innerHTML+=s,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=o.style.overflow,o.style.overflow="hidden",o.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),o.style.overflow=l),!!a},b=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return y("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},w={}.hasOwnProperty,E;!T(w,"undefined")&&!T(w.call,"undefined")?E=function(e,t){return w.call(e,t)}:E=function(e,t){return t in e&&T(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=m.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(m.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(m.call(arguments)))};return i});for(var k in h)E(h,k)&&(g=k.toLowerCase(),i[g]=h[k](),v.push((i[g]?"":"no-")+g));return i.addTest=function(e,t){if(typeof e=="object")for(var r in e)E(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},S(""),a=l=null,i._version=r,i.mq=b,i.testStyles=y,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+v.join(" "):""),i}(this,this.document);