/*!
  * Morpheus - A Brilliant Animator
  * https://github.com/ded/morpheus - (c) Dustin Diaz 2011
  * License MIT
  */
!function(a,b,c){function u(a,b){var c=a?c=isFinite(a.length)?a:[a]:[],d,f=b.complete,i=b.duration,k=b.easing,o=b.bezier,r=[],u=[],v=[],w=[],x,y;delete b.complete,delete b.duration,delete b.easing,delete b.bezier,o&&(x=b.left,y=b.top,delete b.right,delete b.bottom,delete b.left,delete b.top);for(d=c.length;d--;){r[d]={},u[d]={},v[d]={};if(o){var z=j(c[d],"left"),A=j(c[d],"top"),B=[t(n(x)?x(c[d]):x||0,parseFloat(z)),t(n(y)?y(c[d]):y||0,parseFloat(A))];w[d]=n(o)?o(c[d],B):o,w[d].push(B),w[d].unshift([parseInt(z,10),parseInt(A,10)])}for(var C in b){var D=j(c[d],C),E,F=n(b[C])?b[C](c[d]):b[C];if(typeof F=="string"&&e.test(F)&&!e.test(D)){delete b[C];continue}r[d][C]=typeof F=="string"&&e.test(F)?l(D).slice(1):parseFloat(D),u[d][C]=typeof F=="string"&&F.charAt(0)=="#"?l(F).slice(1):t(F,parseFloat(D)),typeof F=="string"&&(E=F.match(g))&&(v[d][C]=E[1])}}return p(i,function(a,e,f){for(d=c.length;d--;){o&&(f=q(w[d],a),c[d].style.left=f[0]+"px",c[d].style.top=f[1]+"px");for(var g in b)e=s(a,v,r,u,g,d),g=="opacity"&&!h?c[d].style.filter="alpha(opacity="+e*100+")":c[d].style[m(g)]=e}},f,k)}function t(a,b,c,d,e){return(c=f.exec(a))?(e=parseFloat(c[2]))&&(d=b+e)&&c[1]=="+"?d:b-e:parseFloat(a)}function s(a,b,c,d,e,f,g){if(typeof c[f][e]=="string")return r(a,c[f][e],d[f][e]);g=Math.round(((d[f][e]-c[f][e])*a+c[f][e])*1e3)/1e3,!(e in i)&&(g+=b[f][e]||"px");return g}function r(a,b,c){var d=[],e,f;for(e=0;e<6;e++)from=Math.min(15,parseInt(b.charAt(e),16)),to=Math.min(15,parseInt(c.charAt(e),16)),f=Math.floor((to-from)*a+from),f=f>15?15:f<0?0:f,d[e]=f.toString(16);return"#"+d.join("")}function q(a,b){var c=a.length,d=[],e,f;for(e=0;e<c;++e)d[e]=[a[e][0],a[e][1]];for(f=1;f<c;++f)for(e=0;e<c-f;++e)d[e][0]=(1-b)*d[e][0]+b*d[parseInt(e+1,10)][0],d[e][1]=(1-b)*d[e][1]+b*d[parseInt(e+1,10)][1];return[d[0][0],d[0][1]]}function p(a,b,c,d,e,f){function l(a){var m=a-i;m>g||j?(f=isFinite(f)?f:1,j?k&&b(f):b(f),c&&c()):(isFinite(f)?b(h*d(m/g)+e):b(d(m/g)),o(l))}d=d||function(a){return Math.sin(a*Math.PI/2)};var g=a||1e3,h=f-e,i=+(new Date),j=0,k=0;o(l);return{stop:function(a){j=1,k=a}}}var d=b.documentElement,e=/^rgb\(|#/,f=/^([+\-])=([\d\.]+)/,g=/^(?:[\+\-]=)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,h=function(){return typeof b.createElement("a").style.opacity!="undefined"}(),i={lineHeight:1,zoom:1,zIndex:1,opacity:1},j=b.defaultView&&b.defaultView.getComputedStyle?function(a,c){var d=null,e=b.defaultView.getComputedStyle(a,"");e&&(d=e[m(c)]);return a.style[c]||d}:d.currentStyle?function(a,b){b=m(b);if(b=="opacity"){var c=100;try{c=a.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(d){try{c=a.filters("alpha").opacity}catch(e){}}return c/100}var f=a.currentStyle?a.currentStyle[b]:null;return a.style[b]||f}:function(a,b){return a.style[m(b)]},k=function(a,b,c){return"#"+(1<<24|a<<16|b<<8|c).toString(16).slice(1)},l=function(a){var b=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return(b?k(b[1],b[2],b[3]):a).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")},m=function(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})},n=function(a){return typeof a=="function"},o=function(){return c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.oRequestAnimationFrame||c.msRequestAnimationFrame||function(a){c.setTimeout(function(){a(+(new Date))},10)}}();u.tween=p,u.getStyle=j,u.bezier=q,typeof module!="undefined"&&module.exports&&(module.exports=u),a.morpheus=u}(this,document,window)