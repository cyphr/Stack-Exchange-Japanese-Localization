// ==UserScript==
// @name           Stack Exchange Japanese Localization
// @description    An (unofficial) attempt of localizing Stack Exchange sites into Japanese, with a focus on the Japanese Language and Usage site. 
// @include        http://stackoverflow.com/*
// @include        http://meta.stackoverflow.com/*
// @include        http://superuser.com/*
// @include        http://meta.superuser.com/*
// @include        http://serverfault.com/*
// @include        http://meta.serverfault.com/*
// @include        http://askubuntu.com/*
// @include        http://meta.askubuntu.com/*
// @include        http://*.stackexchange.com/*
// @include        http://stackapps.com/*
// @exclude        http://area51.stackexchange.com/*
// @exclude        http://*.area51.stackexchange.com/*
// ==/UserScript==

// NOTE: the line below is minified jQuery 1.5.2, as 
//       @require doesn't work in Google Chrome
(function(a,b){function ci(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cf(a){if(!b_[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";b_[a]=c}return b_[a]}function ce(a,b){var c={};d.each(cd.concat.apply([],cd.slice(0,b)),function(){c[this]=a});return c}function b$(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bZ(){try{return new a.XMLHttpRequest}catch(b){}}function bY(){d(a).unload(function(){for(var a in bW)bW[a](0,1)})}function bS(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bR(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bQ(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bs.test(a)?e(a,f):bQ(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bQ(a+"["+f+"]",b[f],c,e)}function bP(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bJ,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bP(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bP(a,c,d,e,"*",g));return l}function bO(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bD),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bq(a,b,c){var e=b==="width"?bk:bl,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function bc(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function bb(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function ba(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function _(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function $(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Q(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(L.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function P(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function H(a,b){return(a&&a!=="*"?a+".":"")+b.replace(t,"`").replace(u,"&")}function G(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(r,"")===a.type?q.push(g.selector):t.splice(i--,1);f=d(a.target).closest(q,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){f=p[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function E(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function y(){return!0}function x(){return!1}function i(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function h(a,c,e){if(e===b&&a.nodeType===1){e=a.getAttribute("data-"+c);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:d.isNaN(e)?g.test(e)?d.parseJSON(e):e:parseFloat(e)}catch(f){}d.data(a,c,e)}else e=b}return e}var c=a.document,d=function(){function G(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(G,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x,y,z=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,C=Array.prototype.slice,D=String.prototype.trim,E=Array.prototype.indexOf,F={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length},toArray:function(){return C.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?B.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),x.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(C.apply(this,arguments),"slice",C.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;x.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=d._Deferred();if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",y,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",y),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&G()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):F[z.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||A.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:D?function(a){return a==null?"":D.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){F["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),E&&(d.inArray=function(a,b){return E.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?y=function(){c.removeEventListener("DOMContentLoaded",y,!1),d.ready()}:c.attachEvent&&(y=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",y),d.ready())});return d}(),e="then done fail isResolved isRejected promise".split(" "),f=[].slice;d.extend({_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),f;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(f)return f;f=a={}}var c=e.length;while(c--)a[e[c]]=b[e[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?f.call(arguments,0):c,--g||h.resolveWith(h,f.call(b,0))}}var b=arguments,c=0,e=b.length,g=e,h=e<=1&&a&&d.isFunction(a.promise)?a:d.Deferred();if(e>1){for(;c<e;c++)b[c]&&d.isFunction(b[c].promise)?b[c].promise().then(i(c),h.reject):--g;g||h.resolveWith(h,b)}else h!==a&&h.resolveWith(h,e?[a]:[]);return h.promise()}}),function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e)}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(a.style.width="1px",a.style.marginRight="0",d.support.reliableMarginRight=(parseInt(c.defaultView.getComputedStyle(a,null).marginRight,10)||0)===0),b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}}();var g=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!i(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,j=g?b[d.expando]:d.expando;if(!h[j])return;if(c){var k=e?h[j][f]:h[j];if(k){delete k[c];if(!i(k))return}}if(e){delete h[j][f];if(!i(h[j]))return}var l=h[j][f];d.support.deleteExpando||h!=a?delete h[j]:h[j]=null,l?(h[j]={},g||(h[j].toJSON=d.noop),h[j][f]=l):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var f=this[0].attributes,g;for(var i=0,j=f.length;i<j;i++)g=f[i].name,g.indexOf("data-")===0&&(g=g.substr(5),h(this[0],g,e[g]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=h(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var j=/[\n\t\r]/g,k=/\s+/,l=/\r/g,m=/^(?:href|src|style)$/,n=/^(?:button|input)$/i,o=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,q=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(k);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(k);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(j," ");for(var i=0,l=c.length;i<l;i++)h=h.replace(" "+c[i]+" "," ");g.className=d.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),i=b,j=a.split(k);while(f=j[g++])i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(j," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var j=i?f:0,k=i?f+1:h.length;j<k;j++){var m=h[j];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(q.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(l,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&q.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=m.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&n.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var k=a.getAttributeNode("tabIndex");return k&&k.specified?k.value:o.test(a.nodeName)||p.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var l=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return l===null?b:l}h&&(a[c]=e);return a[c]}});var r=/\.(.*)$/,s=/^(?:textarea|input|select)$/i,t=/\./g,u=/ /g,v=/[^\w\s.|`]/g,w=function(a){return a.replace(v,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=x;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(a){return typeof d!=="undefined"&&d.event.triggered!==a.type?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=x);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(r,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=a.type,l[m]())}catch(p){}k&&(l["on"+m]=k),d.event.triggered=b}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,H(a.origType,a.selector),d.extend({},a,{handler:G,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,H(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?y:x):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=y;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=y;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=y,this.stopPropagation()},isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x};var z=function(a){var b=a.relatedTarget;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},A=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?A:z,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?A:z)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&E("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&E("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var B,C=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},D=function D(a){var c=a.target,e,f;if(s.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=C(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:D,beforedeactivate:D,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&D.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&D.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",C(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in B)d.event.add(this,c+".specialChange",B[c]);return s.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return s.test(this.nodeName)}},B=d.event.special.change.filters,B.focus=B.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function f(a){var c=d.event.fix(a);c.type=b,c.originalEvent={},d.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var e=0;d.event.special[b]={setup:function(){e++===0&&c.addEventListener(a,f,!0)},teardown:function(){--e===0&&c.removeEventListener(a,f,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=r.exec(h),k="",j&&(k=j[0],h=h.replace(r,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(F[h]+k),h=h+k):h=(F[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)d.event.add(n[p],"live."+H(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+H(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"text"===c&&(b===c||b===null)},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var I=/Until$/,J=/^(?:parents|prevUntil|prevAll)/,K=/,/,L=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,N=d.expr.match.POS,O={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Q(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Q(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=N.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(P(c[0])||P(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=M.call(arguments);I.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!O[a]?d.unique(f):f,(this.length>1||K.test(e))&&J.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var R=/ jQuery\d+="(?:\d+|null)"/g,S=/^\s+/,T=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,U=/<([\w:]+)/,V=/<tbody/i,W=/<|&#?\w+;/,X=/<(?:script|object|embed|option|style)/i,Y=/checked\s*(?:[^=]|=\s*.checked.)/i,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td,d.support.htmlSerialize||(Z._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(R,""):null;if(typeof a!=="string"||X.test(a)||!d.support.leadingWhitespace&&S.test(a)||Z[(U.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(T,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&Y.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?$(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,bc)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!X.test(a[0])&&(d.support.checkClone||!Y.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){ba(a,e),f=bb(a),g=bb(e);for(h=0;f[h];++h)ba(f[h],g[h])}if(b){_(a,e);if(c){f=bb(a),g=bb(e);for(h=0;f[h];++h)_(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||W.test(i)){if(typeof i==="string"){i=i.replace(T,"<$1></$2>");var j=(U.exec(i)||["",""])[1].toLowerCase(),k=Z[j]||Z._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=V.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&S.test(i)&&m.insertBefore(b.createTextNode(S.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bd=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,bf=/-([a-z])/ig,bg=/([A-Z]|^ms)/g,bh=/^-?\d+(?:px)?$/i,bi=/^-?\d/,bj={position:"absolute",visibility:"hidden",display:"block"},bk=["Left","Right"],bl=["Top","Bottom"],bm,bn,bo,bp=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bm(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bm)return bm(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bf,bp)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bq(a,b,e):d.swap(a,bj,function(){f=bq(a,b,e)});if(f<=0){f=bm(a,b,b),f==="0px"&&bo&&(f=bo(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bh.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return be.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bd.test(f)?f.replace(bd,e):c.filter+" "+e}}),d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){b?c=bm(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bn=function(a,c,e){var f,g,h;e=e.replace(bg,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bo=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bh.test(d)&&bi.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bm=bn||bo,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var br=/%20/g,bs=/\[\]$/,bt=/\r?\n/g,bu=/#.*$/,bv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bw=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bx=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,by=/^(?:GET|HEAD)$/,bz=/^\/\//,bA=/\?/,bB=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bC=/^(?:select|textarea)/i,bD=/\s+/,bE=/([?&])_=[^&]*/,bF=/(^|\-)([a-z])/g,bG=function(a,b,c){return b+c.toUpperCase()},bH=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bI=d.fn.load,bJ={},bK={},bL,bM;try{bL=c.location.href}catch(bN){bL=c.createElement("a"),bL.href="",bL=bL.href}bM=bH.exec(bL.toLowerCase())||[],d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bI)return bI.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bB,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bC.test(this.nodeName)||bw.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bt,"\r\n")}}):{name:b.name,value:c.replace(bt,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bL,isLocal:bx.test(bM[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bO(bJ),ajaxTransport:bO(bK),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bR(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bS(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bF,bG)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bv.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bu,"").replace(bz,bM[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bD),e.crossDomain==null&&(q=bH.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bM[1]||q[2]!=bM[2]||(q[3]||(q[1]==="http:"?80:443))!=(bM[3]||(bM[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bP(bJ,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!by.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bA.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bE,"$1_="+w);e.url=x+(x===e.url?(bA.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bP(bK,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bQ(g,a[g],c,f);return e.join("&").replace(br,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bT=d.now(),bU=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bT++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bU.test(b.url)||f&&bU.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bU,l),b.url===j&&(f&&(k=k.replace(bU,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bV=d.now(),bW,bX;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bZ()||b$()}:bZ,bX=d.ajaxSettings.xhr(),d.support.ajax=!!bX,d.support.cors=bX&&"withCredentials"in bX,bX=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),!a.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bW[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bW||(bW={},bY()),h=bV++,g.onreadystatechange=bW[h]=c):c()},abort:function(){c&&c(0,1)}}}});var b_={},ca=/^(?:toggle|show|hide)$/,cb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cc,cd=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(ce("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cf(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ce("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(ce("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cf(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(ca.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=cb.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:ce("show",1),slideUp:ce("hide",1),slideToggle:ce("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!cc&&(cc=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(cc),cc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var cg=/^t(?:able|d|h)$/i,ch=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=ci(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!cg.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=(e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=ch.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!ch.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=ci(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=ci(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);

(function() { // scope everything...

function getObject(a) {
    /* 
     * Converts [['a', 'b'], ...] -> {'a': 'b', ...}
     *
     * This is so that very long keys can span multiple lines
     */
    var o = {}
    for (var i=0; i<arguments.length; i++) {
        var x = arguments[i]
        o[x[0]] = x[1]
    }
    return o
}

function wsProcess(s) {
    // Trim whitespace from the start+end 
    // and remove consecutive whitespace chars
    return $.trim(s).replace(/\s+/gm, ' ')
}

function getText(elm) {
    // Return the text inside of `elm` trimmed
    return wsProcess($(elm).text()||'')
}

function log(txt) {
    console.log(txt)
}

function escapeText(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

if (!window.TEXT_NODE) {
    var TEXT_NODE = 3
}

var strings = {
    'title: span.mod-flair': {
        'moderator': 'モデレータ'
    },
    
    //=======================================================//
    //                      Topmost Bar                      //
    //=======================================================//
    
    // Stack Exchange dropdown
    'text: a#seTabHot': {
        'Hot Questions': '流行っている質問'
    },
    'text: a#seTabSites': {
        'All Sites': 'すべてのサイト'
    },
    'text: a#seTabInbox': {
        'Inbox': '受信箱'
    },
    'text: div#seTabEmail a': {
        'email settings': '電子メール設定'
    },
    'text: a#seClose': {
        'close': '閉じる'
    },
    'html: div#seWrapper div.seIntro': {
        'Stack Exchange is a network of free, community-driven Q&A sites.': 
        '{a|Stack Exchange|Stack Exchange}は無料コミュニティーに経営された質問と回答ウェブサイト・ネットワーク。'
    },
    'text: div#seContainerInbox div.itemBox div.siteInfo p': {
        'comment on': 'コメント',
        'answer on': '回答'
    },
    // e-mail settings
    'text: div#seContainerEmail div.itemBox p': {
        'Would you like to receive unread inbox notifications via email?':
        '電子メールで受信トレイの未読メッセージを受け取りたいですか？'
    },
    'text: div#seContainerEmail div.itemBox div': {
        'Email:': '電子メールアドレス：'
    },
    'text: div#seContainerEmail div.itemBox div label': {
        'Email me my unread inbox messages': '受信トレイの未読メッセージを送る',
        'Do not email me inbox messages': '受信トレイのメッセージを送らない'
    },
    'value: input#email-save': {
        'Save': '保存'
    },
    'html: select#email-freq option': {
        'every 3 hours': '3時間おきに',
        'daily': '毎日',
        'weekly': '毎週'
    },
    
    // "My dropdown"
    'text: ul.profile-links li a': {
        'activity': 'アクティビティー',
        'privileges': '権限',
        'log out': 'ログアウト',
    },
    'text: table.profile-recent-summary thead tr th': {
        'today': '今日',
        'week': '今週',
        'month': '今月'
    },
    'text: table.profile-recent-summary tbody tr td a': {
        'reputation': '信用度',
        'votes cast': '投票総数',
        'revisions': '改訂履歴',
        'favorites': 'お気に入り'
    },
    'text: div.profile-footer a': {
        'close': '閉じる'
    },
    
    // Top bar
    'text: div#hlinks span a': {
        'log in': 'ログイン',
        'review': 'レビュー',
        'tools': 'ツール',
        'chat': 'チャット',
        'blog': 'ブログ',
        'meta': 'メタ',
        'main': 'メインサイト',
        'about': '概要',
        'faq': 'よくある質問',
        'careers': '就職'
    },
    
    //=======================================================//
    //                  Bar 2nd From the Top                 //
    //=======================================================//
    
    // Top subheader
    'text: div.subheader h1, div.subheader h1 a': {
        'Top Questions': 'トップページ', // CHECK ME!
        'All Questions': 'すべての質問',
        'Tags': 'タグ',
        'Users': 'ユーザー',
        'Badges': 'バッジ',
        'Unanswered Questions': '未回答質問',
        'Tagged Questions': 'タグされた質問',
        'Votes Cast': '投票総数',
        'Search Results': '検索結果',
        'Favorites': 'お気に入り',
        'Favorite': 'お気に入り',
        'Tools': 'ツール',
        'Review': 'レビュー'
    },
    
    // Top navigation
    'text: div.nav ul li a': {
        'Questions': '質問',
        'Tags': 'タグ',
        'Users': 'ユーザー',
        'Badges': 'バッジ',
        'Unanswered': '未回答',
        'Ask Question': '質問する'
    },
    
    //=======================================================//
    //                          Tabs                         //
    //=======================================================//
    
    // Tabs
    'text: div#tabs a': {
        'interesting': '面白い順番',
        'featured': '賞金のある質問',
        'active': '有効',
        'hot': 'ホット',
        'week': '週間',
        'month': '月間',
        'oldest': '最古順',
        'votes': '投票順',
        'newest': '最新順',
        'faq': 'よくある質問',
        'unanswered': '未回答',
        'popular': '人気順',
        'name': '名前順',
        'new': '最新順',
        
        // Meta stack overflow
        'bugs': 'バグ',
        'reqs': '機能リクエスト',
        // Stackapps
        'apps': 'アプリ',
        'scripts': 'スクリプト',
        
        'new users': '新入順',
        'voters': '投票順', // CHECK ME!
        'editors': '編集順',
        'general': '一般',
        'tags': 'タグ',
        'my tags': 'マイタグ', // ???
        'no answers': '未回答',
        
        // User page tabs
        'summary': '要約',
        'answers': '回答',
        'questions': '質問',
        'badges': 'バッジ',
        'favorites': 'お気に入り',
        'bounties': '賞金',
        'activity': 'アクティビティー',
        'accounts': 'アカウント',
        'responses': 'メール', // FIXME!
        
        // Tag tabs
        'info': '情報',
        'users': 'ユーザー',
        'synonyms': '同義タグ',
        
        // Search tab
        'relevance': '関連順',
        
        // Moderator tools
        'stats': '統計',
        'migrated': '移動した',
        'close': '閉じる投票',
        'delete': '削除投票',
        'flags': '通報'
    },
    
    'title: div#tabs a': {
        // Top page
        'questions that may be of interest to you based on your history and tag preferences':
        'あなたの歴史やタグ設定によって面白いかもしれない質問',
        'questions that have been asked, answered, or updated recently':
        '最近の質問や回答や修正', // FIXME!
        'questions with the most views, answers, and votes over the last few days':
        '数日間の最も観覧数や回答数や投票数の高い質問',
        'questions with the most views, answers, and votes this week':
        '今週の最も観覧数や回答数や投票数の高い質問',
        'questions with the most views, answers, and votes this month':
        '今月の最も観覧数や回答数や投票数の高い質問',
        'questions with an active bounty':
        'アクティブ賞金のある質問',
        // Meta stack overflow
        "questions tagged 'bug' with the most votes":
        '「バグ」にタグされた質問（投票順）',
        "questions tagged 'feature-request' with the most votes":
        '「機能リクエスト」にタグされた質問（投票順）',
        // Stack apps
        "hot questions tagged 'app' or 'library'":
        '「アプリ」や「ライブラリー」にタグされたホット質問',
        "questions tagged 'script' with the most votes":
        '「スクリプト」にタグされた質問（投票順）',
        
        // Question Pages
        //'Answers with the latest activity first':
        //'',
        //'Answers in the order they were provided':
        //'',
        //'Answers with the highest score first':
        //'',
        
        // Questions
        'the most recently asked questions':
        '最新質問した',
        'questions with the most links':
        '最もリンク数の高い質問',
        'questions with the most votes':
        '最も投票数の高い質問',
        'questions that have recent activity':
        '最新アクティビティーのある質問',
        'questions that have no upvoted answers':
        '上に投票した回答のない質問',
        
        // Tags
        'most popular tags':
        '最も人気のあるタグ',
        'tags in alphabetical order':
        'アルファベット順タグリスト',
        'recently created tags':
        '最近作ったタグ',
        
        // A Tag?
        
        // Users
        'Users with the highest reputation scores':
        '最も評判の高いユーザー',
        'Users who joined in the last 40 days':
        '40日間に組んだユーザー',
        'Users who voted more than 10 times':
        '10回以上投票したユーザー',
        'Users who edited more than 5 posts':
        '5回以上投稿を編集したユーザー',
        
        // User Profiles
        'your overall summary':
        'あなたの要約', // CHECK ME!
        'answers you have provided':
        'あなたが提供した回答',
        'questions you have asked':
        'あなたの質問',
        'tags you have posts in':
        'あなたのタグにある投稿',
        'badges you have earned':
        'あなたの得たバッジ',
        'questions you have favorited':
        'あなたのお気に入りの質問',
        'bounties you have participated in':
        'あなたの参加した賞金',
        'reputation you have earned':
        'あなたの得た信用度',
        'your recent responses':
        'あなたの最近のメール',
        'your recent activity':
        '最近のアクティビティー',
        'your accounts in the Stack Exchange network':
        'あなたのStack Exchangeネットワークのアカウント',
        
        // Badges
        'standard badges':
        '普通のバッジ',
        'tag-based badges':
        'タグバッジ',
        
        // Unanswered
        'questions with tags that I\'ve participated':
        '自分に参加したタグにある質問',
        'newest unanswered questions':
        '最新未回答質問',
        'highest voted unanswered questions':
        '最も投票の高い未回答質問',
        'questions with no answers':
        '未回答質問'
    },

    'text: div.user-tabs-nav div#tabs a': {
        // user-page specific
        // "reputation" -> "reputation" (plain)
        'reputation': '信用度' // CHECK ME!
    },
    'text: div:not(.user-tabs-nav) div#tabs a': {
        // "all questions"/"users" etc 
        // "reputation" -> "sorted by reputation"
        'reputation': '信用度順'
    },
    
    'text: div#tabs-interval a': {
        'week': '一週間',
        'month': '一ヶ月間',
        'quarter': '三ヶ月間',
        'year': '一年間',
        'all': 'すべて'
    },
    'text: div#tabs-type a': {
        'all': 'すべて',
        'gold': '金色',
        'silver': '銀色',
        'bronze': '青銅'
    },
    
    // I've disabled these tabs for now as I can't find a safe way of doing them
    // as they rely on the text underneath when clicked on :/
    
    // div.user-panel-subtabs a
    
    'clicktext: div.subtabs a': {
        'votes': '票数',
        'activity': 'アクティビティー',
        'newest': '最新順',
        'recent': '更新順',
        'class': 'クラス順', // I don't know what this does in English...
        'name': '名前順',
        'active': 'アクティブ',
        'offered': '提供した',
        'earned': '所得した',
        
        // Favorites tab
        'views': '観覧数',
        'added': '追加した',
        
        // Reputation tab
        'post': '投稿',
        'time': '時間',
        'graph': 'グラフ',
        
        // Responses tab
        'all': 'すべて',
        'revisions': '修正',
        'comments': 'コメント',
        'answers': '回答',
        
        // Activity tab
        'accepts': 'ベストアンサーを選んだ',
        'posts': '投稿',
        'badges': 'バッジ',
        'reviews': 'レビュー',
        'suggestions': '示唆'
    },
    
    //=======================================================//
    //                  Controls on the Right                //
    //=======================================================//
    
    // Right Controls ("tag subscriptions" etc)
    'text: p.ar a': {
        'tag subscriptions »': 'タグ購読を見る »',
        'all tags »': 'すべてのタグ »',
        'all badges »': 'すべてのバッジ »',
        'set tag preferences »': 'タグ設定を変更する »'
    },
    'text: h4#h-inferred-tags': {
        'Frequented Tags': '訪問することが多いタグ' // CHECK ME!
    },
    'text: h4#h-interesting-tags': {
        'Favorite Tags': 'お気に入ったタグ',
    },
    'text: h4#h-ignored-tags': {
        'Ignored Tags': '無視するタグ'
    },
    'value: input#interestingAdd': {
        'Add': '追加'
    },
    'value: input#ignoredAdd': {
        'Add': '追加'
    },
    'text: p.label-key': {
        'tagged': 'タグ',
        'asked': '質問した時',
        'viewed': '観覧数',
        'kviews': '千観覧数',
        'active': 'アクティブ' // CHECK ME!
    },
    'text: a#h-meta': {
        'Visit Meta': 'メタに訪問する',
    },
    'text: h4#h-related': {
        'Related': '関連した質問'
    },
    'text: h4#h-recent-tags': {
        'Recent Tags': '最新のタグ'
    },
    'text: h4#h-recent-badges': {
        'Recent Badges': '最新のバッジ'
    },
    'text: h4#h-related-tags': {
        'Related Tags': '関連したタグ'
    },
    'text: h4#h-linked': {
        'Linked': 'リンクされた'
    },
    'text: div#questions-count p': {
        'questions': '質問数'
    },
    'text: h4#h-unanswered-tags': {
        'Unanswered Tags': '未回答質問のタグ'
    },
    //'text: '
    'text: div.module p': {
        'questions tagged': 'タグされた質問数',
        
        // HACK: The text spans three elements, so it's not easy
        // to i18n, but I'll do a quick work-around for now
        'search results for': '検索結果数',
        'posts containing': ' '
    },
    'text: div.tagged a': {
        'about »': 'このタグについて'
    },
    
    //=======================================================//
    //                     Search Results                    //
    //=======================================================//
    
    'html: form#bigsearch table tbody tr td': {
        'Want better search results? See our search tips!': 
        'よりいい検索結果を求めますか？{a|See our search tips!|検索のヒント}をご覧ください。'
    },
    
    'value: form#bigsearch table tbody tr td input': {
        'search': '検索'
    },
    
    //=======================================================//
    //                    Question Browsing                  //
    //=======================================================//
    
    // Questions
    'text: div.votes div:nth-child(2)': {
        'votes': '票数',
        'vote': '票数'
    },
    'text: div.status, div.status div:nth-child(2)': {
        'answers': '回答数',
        'answer': '回答数'
    },
    'text: div.views div:nth-child(2)': {
        'views': '観覧数',
        'kviews': '千観覧数',
        'view': '観覧数'
    },
    'title: div.answered-accepted': {
        'one of the answers was accepted as the correct answer': 
        '回答の内、ベストアンサーは選ばれた'
    },
    
    //=======================================================//
    //                     Question Pages                    //
    //=======================================================//
    
    // The controls under tags on questions
    // These are incomplete as I don't have access to them all
    'text: div.post-menu a': {
        'link': 'リンク',
        'edit': '編集',
        'improve this question': '編集', // HACK!
        'improve this answer': '編集', // HACK!
        'close': '閉じる',
        'delete': '削除',
        'undelete': '復活させる',
        'reopen': 'リオープン',
        'flag': '通報' // ???
    },
    'title: div.post-menu a': {
        'short permalink to this question':
        'この質問に短いパーマリンク',
        
        'short permalink to this answer':
        'この回答に短いパーマリンク',
        
        'revise and improve this post':
        'この投稿を修正して良くする', // CHECK ME!
        
        'vote to close or reopen question; when closed, no new answers can be added':
        'この質問に閉じるやリオーペン投票をする。閉じてしまったら、新しい回答は追加できなくなる',
        
        'flag this post for serious problems or moderator attention':
        '深刻な問題やモデレータ注目のためには、この投稿を通報する'
    },
    
    
    // "Add comment" links
    'text: a.comments-link': {
        // TODO: FILL IN THE REST, e.g. "add / show 2 more comments"! 
        'add comment': 'コメントを追加する'
    },
    'title: a.comments-link': {
        'ask author for clarification about this post':
        'この投稿を作者に明確にするよう求める', // CHECK ME, this is probably ungrammatical! =========
    
        'expand to show all comments on this post, or add one of your own':
        'すべてのコメントを見せて、それとも自分のコメントを追加する'
    },
    
    // Upvote/flag hover icons
    'title: a.comment-up, a.comment-flag': {
        'this is a great comment':
        'このコメントはいいね！',
        
        'flag this comment as unconstructive, offensive, or spam':
        'このコメントを非建設的や不快やスパムとして通報する'
    },
    'title: td.comment-score span': {
        "number of 'great comment' votes received":
        '「このコメントはいいね！」合計'
    },
    
    'text: div.was-this-helpful': {
        'feedback': 'フィードバック',
        'Was this post useful to you?': 'この投稿はあなたに役に立ったか？'
    },
    
    'value: input.anon-vote': {
        'Yes': 'はい',
        'No': 'いいえ'
    },
    
    // Vote up/down etc controls to the left of questions/answers
    'title: div.vote a, div.vote span': {
        // TODO: Fix "The question owner accepted this as the best answer 2 days ago" etc!
        
        'This question shows research effort; it is useful and clear (click again to undo)':
        'この質問には研究の努力が見える、ほかの人に役に立って分かりやすい',
        
        'This question does not show any research effort; it is unclear or not useful (click again to undo)':
        'この質問には研究の努力が見えない、ほかの人に役に立たたない、または分かりやすくない',
        
        'View upvote and downvote totals':
        '上投票や下投票の合計を見る', 
        
        'This is a favorite question (click again to undo)':
        'これはお気に入りの質問',
        
        'share link to this question on Facebook':
        'この質問のリンクをフェイスブックで共有する',
        
        'share link to this question on Twitter':
        'この質問のリンクをツイッターで共有する',
        
        'This answer is useful (click again to undo)':
        'この回答は役に立った',
        
        'This answer is not useful (click again to undo)':
        'この回答は役に立たなかった'
    },
    
    'value: td.comment-form form table tbody tr td input': {
        'Add Comment': 'コメントを追加する'
    },
    
    'text: a.comment-help-link': {
        'hide help': 'ヘルプを隠す',
        'help': 'ヘルプ'
    },
    
    //=======================================================//
    //                     Markdown Editor                   //
    //=======================================================//
    
    // Editor
    'text: form#post-form h2.space': {
        'Your Answer': 'あなたの回答'
    },
    'title: li.wmd-button': {
        'Strong <strong> Ctrl+B': '強く強調 <strong> Ctrl+B',
        'Emphasis <em> Ctrl+I': '強調 <em> Ctrl+I',
        
        'Hyperlink <a> Ctrl+L': 'ハイパーリンク <a> Ctrl+L',
        'Blockquote <blockquote> Ctrl+Q': '引用文 <blockquote> Ctrl+Q',
        'Code Sample <pre><code> Ctrl+K': 'ソース・コードのサンプル <pre><code> Ctrl+K',
        'Image <img> Ctrl+G': '埋め込み画像 <img> Ctrl+G',
        
        'Numbered List <ol> Ctrl+O': '順序付きリスト <ol> Ctrl+O',
        'Bulleted List <ul> Ctrl+U': '順序なしリスト <ul> Ctrl+U',
        'Heading <h1>/<h2> Ctrl+H': '文章の見出し <h1>/<h2> Ctrl+H',
        'Horizontal Rule <hr> Ctrl+R': '水平線 <hr> Ctrl+R',
        
        'Undo - Ctrl+Z': '取り消し - Ctrl+Z',
        'Redo - Ctrl+Y': 'やり直し - Ctrl+Y',
        
        'Markdown Editing Help': 'マークダウン編集ヘルプ'
    },
    'value: input#submit-button': {
        'Post Your Answer': '回答を投稿する',
        'Post Your Question': '質問を投稿する',
        'Save Profile': 'プロフィールを保存する' // on the "edit my profile" page
    },
    'value: div#show-editor-button input': {
        'Add Another Answer': 'もう一つの回答を追加する',
        'Answer Your Question': 'あなたの質問を回答する'
    },
    
    // Inline editing
    'value: div.form-submit input': {
        'Save Edits': 
        '編集を保存する',
        
        'Copy Profile to all Stack Exchange network accounts': 
        'プロフィールをすべてのStack Exchangeネットワークのアカウントにコピーする' // in the "edit user profile" page!
    },
    'text: div.form-item table tbody tr td label, div.form-item label': {
        'Edit Summary': '編集要約'
    },
    'text: a.cancel-edit': {
        'cancel': 'キャンセル'
    },
    
    // Help
    'text: ul#mdhelp-tabs li': {
        'Links': 'ハイパーリンク',
        'Images': 'イメージ',
        'Styling/Headers': 'スタイルとヘッダー',
        'Lists': 'リスト',
        'Blockquotes': '引用文',
        'Code': 'ソースコード'//,
        //'HTML': 'ハイパーテキスト'
    },
    
    // Anonymous post controls
    'text: a#login-link': {
        'log in': 'ログイン'
    },
    'text: td.vm div label': {
        'Name': '名前',
        'Email': '電子メール',
        'Home Page': 'ホームページ'
    },
    'text: div.orword': {
        'or': 'それとも'
    },
    
    // Community Wiki checkbox
    'text: div.community-option label': {
        'community wiki': 'コミュニティー・ウィキ'
    },
    'title: div.community-option label': getObject([
        'Marking an answer community wiki encourages others to edit it by '+
        'lowering the reputation barrier required to edit. However, you will '+
        'not gain any upvote reputation from it. This cannot be undone.',
        
            '回答をコミュニティー・ウィキにチェックしたら、他の人の編集の必要信用度はもっと低くなります。'+
            'しかし、他の人は上に投票したら、信用度を得られなくなります。取り消すことはできません。']
    ),
    
    //=======================================================//
    //                       User Page                       //
    //=======================================================//
    
    'clicktext: a.toggle-summary': {
        'less info': '折り畳む', // "collapse"
        'more info': '展開する' // "expand"
    },
    
    'text: a.moderator': {
        'Moderator ♦': 'モデレータ ♦'
    },
    
    'text: div.user-header-left div.data table tbody tr th, div#small-user-info div table tbody tr th': {
        'bio': '略歴',
        'visits': '訪問',
        'stats': '統計'
    },
    'text: div.reputation': {
        'reputation': '信用度'
    },
    'text: div.badges': {
        'badges': 'バッジ'
    },
    
    'text: div.user-header-left div.data table tbody tr td, div#small-user-info div table tbody tr td': {
        // bio
        'website': 'ウェブサイト',
        'location': '場所',
        'email': '電子メール',
        'real name': '本名',
        'age': '年齢',
        
        // visits
        'member for': '登録された時間', // CHECK ME!
        'visited': '訪問',
        'seen': '最終活動', 
        
        // stats
        'profile views': 'プロフィール観覧数',
        'flag weight': '通報影響力'
    },
    
    'text: div.sub-header-links a': {
        'edit': '編集',
        'prefs': '設定',
        'delete': 'アカウントの削除', // only shown to absolute new users?
        'flair': '自己宣伝', // I'm not sure exactly what this means, 
                             // but I've translated it as "self publicity" for now
        'my logins': '私のログイン',
        'meta user': 'メタユーザー',
        'parent user': 'メインユーザー',
        'network profile': 'ネットワーク・プロフィール'
    },
    
    'text: div.subheader h1 a, div.subheader h1': {
        'Answers': '回答数',
        'Answer': '回答数',
        'Reputation': '信用度',
        'Questions': '質問数',
        'Question': '質問数',
        'Tags': 'タグ数',
        'Tag': 'タグ数',
        'Accounts': 'アカウント数',
        'Account': 'アカウント数',
        'Badges': 'バッジ数',
        'Badge': 'バッジ数',
        'Active bounties': 'アクティブ賞金数',
        'Offered bounties': '提供した賞金数',
        'Earned bounties': '得た賞金数',
        'Responses': '応答数'
    },
    
    'text: div.user-panel-footer a': {
        'view more': 'もっと見る'
    },
    
    'text: table.votes-cast-stats thead tr th': {
        'all time': '合計', // ???
        'by type': '種類により', // ???
        'month': '今月',
        'week': '今週',
        'day': '今日'
    },
    
    'text: table.votes-cast-stats tbody tr td': {
        'up': '上',
        'down': '下',
        'question': '質問',
        'answer': '回答'
    },
    
    'html: div.empty': {
        'This user has not answered any questions': 'このユーザーは質問を{a|answered|答えた}ことがなかった',
        'This user has no reputation changes': 'このユーザーの{a|reputation changes|信用度}の変化はない',
        'This user has not asked any questions': 'このユーザーは{a|questions|質問}をしたことがなかった',
        'This user has not participated in any tags': 'このユーザーは{a|tags|タグ}に参加したことがなかった',
        'This user has not earned any badges': 'このユーザーは{a|badges|バッジ}を得たことがなかった',
        'This user has not cast any votes': 'このユーザーは{a|votes|投票した}ことがなかった',
        'This user has no favorite questions': 'このユーザーの{a|favorite questions|お気に入りの質問}はない',
        'This user has not participated in any bounties.': 'このユーザーは{a|bounties|賞金}に参加したことがなかった。',
        
        'You have not answered any questions': 'あなたは質問を{a|answered|答えた}ことがなかった',
        'You have no reputation changes': 'あなたの{a|reputation changes|信用度}の変化はない',
        'You have not asked any questions': 'あなたは{a|questions|質問}をしたことがなかった',
        'You have not participated in any tags': 'あなたは{a|tags|タグ}に参加したことがなかった',
        'You have not earned any badges': 'あなたは{a|badges|バッジ}を得たことがなかった',
        'You have not cast any votes': 'あなたは{a|votes|投票した}ことがなかった',
        'You have no favorite questions': 'あなたの{a|favorite questions|お気に入りの質問}はない',
        'You have not participated in any bounties.': 'あなたは{a|bounties|賞金}に参加したことがなかった。',
        
        'You have no active bounties': 'あなたのアクティブ賞金はない',
        'You have no offered bounties': 'あなたは賞金を提供したことがなかった',
        'You have no earned bounties': 'あなたは賞金を得たことがなかった',
        'This user has no active bounties': 'このユーザーのアクティブ賞金はない',
        'This user has no offered bounties': 'このユーザーは賞金を提供したことがなかった',
        'This user has no earned bounties': 'このユーザーは賞金を得たことがなかった'
    },
    
    'text: td.rep-desc': {
        'upvote': '上の投票',
        'downvoted': '下の投票',
        'accepted': 'ベストアンサーを選んだ'
        //'([0-9]+) vote(s?)'
    },
    
    'text: table.history-table tbody tr td span, table.history-table tbody tr td, table.history-table tbody tr b': {
        'revised': '修正した',
        'answered': '回答した',
        'comment': 'コメントした',
        'accepted': 'ベストアンサーを選んだ',
        'asked': '質問した',
        'awarded': '受け取りました',
        'suggested': '示唆した',
        'wiki': 'ウィキ',
        'approved': '承認した',
        'rejected': '拒絶した'
    },
    
    'text: div.rep-footnote': {
        'Reputation on deleted posts and votes is not shown here':
        '削除された投稿の信用度はここに表示されない'
    },
    
    'text: div.account-stat span': {
        'reputation': '信用度',
        'badges': 'バッジ数',
        'questions': '質問数',
        'answers': '回答数'
    },
    
    'text: td.reputation': {
        'rep': '信用度'
    },
    
    'text: h1#user-displayname': {
        '> Edit': '> 編集',
        '> Preferences': '> 設定'
    },
    
    // "Edit" thingo
    'text: form#user-edit-form div table tbody tr td': {
        'Display Name': 'ハンドルネーム',
        'Email': '電子メール',
        'Real Name': '本名',
        'Website': 'ウェブサイト',
        'Location': '場所',
        'Birthday': '誕生日',
        'About Me': '個人メッセージ'
    },
    'text: span.edit-field-overlay': {
        'never displayed, used for optional notifications and your gravatar':
        'ぜんぜん表示されない、選択の通知メッセージやアバターのために使われた',
        
        //'briefly explain your changes (corrected spelling, fixed grammar, improved formatting)':
        //'FIXME',
        
        'YYYY/MM/DD, only used for displaying age':
        'YYYY/MM/DD、ただ年齢の表示のために使われた',
        
        'required, but never shown': 
        '必要ですが、公開しません' // on the anonymous "Markdown Editor" submit controls
    },
    'text: a#cancel': {
        'cancel': 'キャンセル'
    },
    'text: table#user-edit-table tbody tr td p a': {
        'change picture': '写真を変更する'
    },
    'text: table#user-edit-table tbody tr td h2': {
        'Registered User': '登録されたユーザー',
        'Unregistered User': '登録されないユーザー'
    },
    
    // "Preferences" thingo
    'text: div#interesting-tags div label': {
        'hide ignored tags': '無視するタグを隠す'
    },
    'text: div.module h4': {
        'Miscellaneous': 'その他'
    },
    'text: div.module div label': {
        'Allow email notifications when I subscribe to questions or tags': 
        '質問やタグを購読すると、電子メールのメッセージを許可する'
    },
    
    //=======================================================//
    //                Tags/Users/Badges Pages                //
    //=======================================================//
    
    // "Tags" and "Users" pages
    'text: div.page-description table tbody tr td': {
        'Type to find tags:': 'タイピすると、タグを検索できる：', // ???
        'Type to find users:': 'タイピすると、ユーザーを検索できる：' // ???
    },
    'text: div#mainbar-full b a': {
        'tag synonyms': 'タグ同義語',
        'weekly / monthly / quarterly reputation leagues': '一週間／一月刊／三月の刊信用度リーグ'
    },
    'text: div.welovestackoverflow div p a': { // hahaha :P
        'learn more…': '詳しく知りたい！',
        'improve description': '編集する', // HACK!
        'edit description': '編集する', // (I don't know if this is correct or not)
        'top users': 'トップユーザー',
        'synonyms': '同義タグ'
    },
    
    'text: div.page-description p': getObject(
        ['A tag is a keyword or label that categorizes your question with other, '+
         'similar questions. Using the right tags makes it easier for others to '+
         'find and answer your question.',
         
            'タグは他の類似質問を分類するキーワード、またはラベル。正しいタグを使うと、'+
            '他の人はあなたの質問をより簡単に見つかれて回答を提供する可能性はより高くなる。'],
        
        ['As you use Japanese Language and Usage - Stack Exchange to ask '+
         'and answer questions, you’ll earn badges, which appear on your '+
         'user page and in your user card.',
         
             // This might need to be explained differently! =================================
             'このサイトに質問や回答を投稿すると、バッジを得て、ユーザープロフィールやユーザーカードに表示する。']
    ),
    
    'text: a.edit-link': {
        'edit': '編集'
    },
    
    'html: div.user-about-me p': {
        '(your about me is currently blank)': '（あなたの個人メッセージは現在白紙）'
    },
    
    'text: div.user-about-me p a': {
        'click here to edit': '編集する…'
    },
    
    //=======================================================//
    //                    Unanswered Page                    //
    //=======================================================//
    
    'html: div#questions-count p': {
        'questions with no upvoted answers': 
        '<b class="supernova">回答の票数は0以下である</b>質問', // CHECK ME!
        
        'questions with no answers':
        '<b class="supernova">未回答</b>質問', // CHECK ME!
        
        'in your tags': 'あなたのタグには'
    },
    
    //=======================================================//
    //                    Bottom Controls                    //
    //=======================================================//
    
    // Next/previous page etc
    'text: span.page-numbers': {
        'next': '次へ',
        'prev': '前へ',
        'per page': 'ページごとの件' // FIXME!
    },
    
    // "recent questions feed" at the bottom of the page
    'text: div#feed-link-text a': {
        'recent questions feed': '最近質問RSSフィード',
        'question feed': 'この質問のRSSフィード',
        'user feed': 'このユーザーのRSSフィード'
    },
    
    // Footer
    'text: div#footer-menu a': {
        'options': 'ふりがな設定',
        'about': '概要',
        'faq': 'よくある質問',
        'blog': 'ブログ',
        'chat': 'チャット',
        'data': 'データ',
        'podcast': 'ポッドキャスト',
        'shop': 'ショップ',
        'legal': '法律情報',
        'advertising info': '広告情報',
        'mobile': 'モバイル',
        'contact us': 'お問い合わせ', 
        'feedback': 'フィードバック'
    },
    
    //=======================================================//
    //                    Bottom Notices                     //
    //=======================================================//
    
    'html: h2.bottom-notice': getObject(
        ['Looking for more? Browse the complete list of questions, or '+
          'popular tags. Help us answer unanswered questions.',
          
             '何か他のことを求めますか？{a|complete list of questions|すべての質問}'+
             '、または{a|popular tags|人気タグ}を閲覧してください。'+
             '{a|unanswered questions|未回答質問}で回答を書いてくれたら助かります。'],
         
         ['Know someone who can answer? Share a link to this '+
         'question via email, Twitter, or Facebook.',
     
            '回答できる人を知っていますか？この質問の{a|link|リンク}を{a|email|電子メール}や'+
            '{a|Twitter|ツイッター}や{a|Facebook|フェイスブック}で共有します。'],
        
        ['You must log in to answer this question.',
            'この質問を回答するために、{a|log in|ログイン}は必要です。']
    ),
    
    //=======================================================//
    //                      Tag Popups                       //
    //=======================================================//
    
    'text: span.tm-sub-links a': {
        'subscribe': 'タグに購読する',
        'unsubscribe': 'タグの購読をやめる',
        'rss': 'RSSフィード'
    },
    
    'text: span.tm-links a': {
        'faq': 'よくある質問',
        'info': '詳しい情報',
        'top users': 'トップユーザ',
        'edit': '編集'
    },
    
    'text: div.tm-description a': {
        'help us edit this wiki': 'このタグウィキを編集してくれれば助かります'
    },
    
    'title: a.tm-favorite-clear': {
        'toggle this tag between favorite, ignored, and normal':
        'このタグをお気に入りや無視するや普通に切り替える' // CHECK ME!
    },
    
    'title: span.tm-sub-links a': {
        'subscribe for email notifications on this tag':
        'このタグを電子メール通知に購読する',
        
        'add this tag to your rss reader':
        'このタグをあなたのRSSリーダーに追加する'
    },
    
    //=======================================================//
    //                 Administrator Tools                   //
    //=======================================================//
    
    'text: div#mainbar-full div h2': {
        'Questions with extreme votes': '投票の高い質問',
        'Answers with extreme votes': '投票の高い回答',
        'Posts with notable activity': 'アクティビティの高い投稿',
        'Links': 'リンク',
        'Close votes': '閉じる投票',
        'Reopen votes': 'リオーペン投票',
        //'Recent occurrences': '',
        'Delete votes': '削除投票',
        'Undelete votes': '復活させる投票'
    },
    
    'text: div#mainbar-full div div h3': {
        'Highest voted': '最も投票した',
        'Lowest voted': '投票数の低い',
        'Most commented': 'コメントの高い',
        'Most edited': '編集の高い',
        'Most viewed': '観覧の高い',
        'Recently protected': '最近保存した',
        'Recently imported': '最近インポートした',
        'New tags': '新しいタグ',
        'Most Votes': '投票の高い',
        'Recent Votes': '最近の投票',
        'Recently Closed': '最近閉めた',
        'Recently Reopened': '最近リオーペンした',
        'Recently Deleted': '最近削除した',
        'Recently Undeleted': '最近復活させた'
    },
    
    //=======================================================//
    //                   Close Votes Dialog                  //
    //=======================================================//
    
    // CHECK THESE!
    'text: div#pane-main h2, div#pane1 h2, div#pane2 h2': {
        'Why should this question be closed?':
        'どうしてこの質問を閉じるべきですか？',
        'This question is a duplicate of which other question?':
        'この質問はどの質問の写しですか？',
        'This question…':
        'この質問は…'
    },
    
    'text: span.action-name': {
        'exact duplicate': '正確な写し',
        'off topic': 'スレ違い',
        'not constructive': '建設的でない',
        'not a real question': '悪い質問',
        'too localized': '局所的過ぎる'
    },
    
    'text: a.popup-actions-cancel': {
        'back': '戻る',
        'cancel': 'キャンセル'
    },
    
    'text: span#remaining-votes': {
        'votes remaining': '残りの投票数',
        'vote remaining': '残りの投票数'
    },
    
    'value: input.popup-submit': {
        'Vote To Close': '閉じる投票をする'
    }
}

var jluVars = {
    //=======================================================//
    //                         Tags                          //
    //=======================================================//
    
    'tags': {
        // most common tags page 1
        'grammar': '文法',
        'word-choice': '言葉選び',
        'usage': '言葉使い',
        'nuances': 'ニュアンス',
        'vocabulary': '語彙',
        'translation': '翻訳',
        'particles': '不変化詞',
        'kanji': '漢字',
        'verbs': '動詞',
        'words': '言葉',
        'meaning': '意味',
        'etymology': '語源',
        'conjugations': '動詞の活用',
        'politeness': '丁寧さ',
        'pronunciation': '発音',
        'slang': '俗語',
        'synonyms': '同義語',
        'set-phrases': '決まり文句',
        'definitions': '定義',
        'numbers': '数字',
        'readings': '読み',
        'learning': '学び',
        'particle-ni': '助詞「に」', // FIXME
        'culture': '文化',
        'colloquial': '口語',
        'te-form': 'て形', 
        'formal-noun': '固有名詞',
        'dialects': '方言',
        'jlpt': '日本語能力試験',
        'history': '歴史',
        'resources': '参考文献', // CHECK ME!
        'expression': '表現',
        'loanwords': '外来語',
        'adjectives': '形容詞',
        'business-japanese': 'ビジネス日本語',
        // Taken from Chinese Wikipedia, so probably needs correction :P
        //'register': '言語使用場合の領域',
        
        // most common tags page 2
        'honorifics': '敬語', // WARNING!
        'idioms': 'イディオム',
        'contractions': '縮約',
        'keigo': '敬語',
        'orthography': '正字法',
        'syntax': '構文',
        'spelling': 'スペリング',
        'particle-no': '助詞「の」',
        'particle-de': '助詞「で」',
        'negative-forms': '否定形',
        'counter-words': '助数詞',
        'terminology': '専門用語',
        'suffixes': '接尾辞',
        'speaking': '話',
        'tense': '時制',
        'food': '食べ物',
        //'first-person-pronoun': '',
        'hiragana': 'ひらがな',
        'practical': '日常',
        'phonology': '音韻論',
        'kana': 'かな',
        'greetings': '挨拶',
        'i-adjectives': '形容詞',
        //'homophonic-kanji': '',
        'katakana': 'カタカナ',
        'particle-to': '助詞「と」',
        'particle-ga': '助詞「が」',
        'song-lyric': '歌詞',
        'typo': 'タイプミス',
        'particle-wa': '助詞「は」',
        'phrase-requests': '用語要求',
        'adverbs': '副詞',
        'compounds': '複合語',
        'conjunctions': '接続詞',
        'dictionary': '辞書',
        'perspective': '見方',
        
        // most common tags page 3
        'particle-wo': '助詞「を」',
        'nuance': 'ニュアンス',
        'intransitive': '自動詞',
        'computing': 'コンピュータ用語',
        'copula': '連結詞',
        'ellipsis': '省略',
        'internet-slang': 'インターネット俗語',
        'onomatopoeia': '擬音語',
        'phrase': '言い回し',
        'transitive': '他動詞',
        'puns': '駄じゃれ',
        'pronouns': '代名詞',
        'quotes': '引用',
        'questions': '質問',
        'potential-form': '可能形',
        'formality': '形式',
        'chinese': '中国語',
        'ateji': '当て字',
        'passive': '受動態',
        'metaphor': '隠喩',
        'na-adjectives': '形容動詞',
        'name': '名前',
        'romaji': 'ローマ字',
        'time': '時間',
        'wasei-eigo': '和製英語',
        'publishing': '印刷',
        'punctuation': '句読点',
        'obsolete-kana': '変体仮名',
        'interjections': '間投詞',
        'kana-usage': 'かなの使い',
        'particle-na': '助詞「な」',
        'abbreviations': '短縮', // Check me re: ellipsis
        'archaic': '死語', // ???
        'differences': '違い',
        'formation': '形成',
        'stroke-order': '筆順',
        
        // most common tags page 4
        'homonyms': '同音異義語',
        'bikago': '美化語',
        //'clause-pattern': '',
        'demonstratives': '指示詞',
        'part-of-speech': '品詞',
        'pitch-accent': '高低アクセント',
        'okurigana': '送り仮名',
        'particle-ka': '助詞「か」',
        'intonation': 'イントネーション',
        'linguistics': '言語学',
        'relative-clause': '関係詞節',
        'website': 'ウェブサイト',
        //'verse': '',
        'respect': '尊敬',
        'radicals': '部首',
        'single-word-requests': '単独言葉要求', // CHECK ME!
        'mathematics': '数学',
        'language-change': '言語変化',
        'language-reform': '言語改革',
        'nouns': '名詞',
        'particle-e': '助詞「へ」',
        'plurals': '複数',
        'phonetics': '音声学',
        'causative': '使役',
        'animals': '動物',
        'anime': 'アニメ',
        'input-method': '入力方式',
        //'gemination': '',
        'particle-yori': '助詞「より」',
        'machine-translation': '機械翻訳',
        'mnemonics': '記憶を助けるもの',
        'offensive-words': '不快な言葉',
        'direction': '方向',
        'fauna': '動物相',
        'folklore': '民間伝承',
        'email': '電子メール',
        'alphabetical-order': 'アルファベット順',
        'ambiguity': '曖昧さ',
        'comprehension': '理解',
        'colours': '色',
        'comparitive-linguistics': '比較言語学',
        'subject': '主語',
        'tag-question': '付加疑問',
        'rendaku': '連濁',
        'volitional': '意志動詞', // CHECK ME!
        'vowels': '母音',
        
        // meta tags
        'discussion': '会話',
        'tags': 'タグ',
        'support': 'サポート',
        'allowed-questions': '許可された質問',
        'bug': 'バグ',
        'status-completed': 'ステータス完了',
        'feature-request': '機能リクエスト ',
        'tag-synonyms': '同義タグ',
        'faq-topics': 'FAQトピック',
        'furigana': 'ふりがな',
        'answers': '回答',
        'tag-wiki': 'タグウィキ',
        'comments': 'コメント',
        'markdown': 'マークダウン',
        'site-promotion': 'ウェブサイト推進',
        'meta': 'メタ',
        'voting': '投票',
        'target-audience': 'ターゲット・オーディエンス',
        'scope': '範囲'
    },
    
    //=======================================================//
    //                         Badges                        //
    //=======================================================//

    'badges': {
        // Badge descriptions
        'Gold Badge': '金色バッジ',
        'Silver Badge': '銀色バッジ',
        'Bronze Badge': '青銅バッジ',
        
        // Badges
        'Altruist': '利他主義者',
        'Analytical': '分析的', // ??
        'Announcer': 'アナウンサー',
        'Archaeologist': '考古学者',
        'Autobiographer': '自伝作家',
        'Benefactor': '恩人',
        'Beta': 'ベータ版',
        //'Booster': '',
        'Citizen Patrol': '市民パトロール',
        'Civic Duty': '市民の義務', // ???
        'Cleanup': '掃除',
        'Commentator': '解説者',
        //'Convention': '',
        'Copy Editor': 'コピー・エディター',
        'Critic': '批評家',
        'Deputy': '代理人', // Is this supposed to mean "deputy sherrif" or something?
        'Disciplined': '厳しくしつけられた',
        'Editor': '編集者',
        'Electorate': '有権者',
        'Enlightened': '覚者',
        'Enthusiast': '熱狂者',
        'Epic': '最高',
        'Excavator': '穴を掘る人',
        'Famous Question': '有名な質問',
        'Fanatic': '狂信者',
        'Favorite Question': 'お気に入りの質問',
        'Generalist': '万能選手', // TODO: Is this word for athletes etc only?
        'Good Answer': '良い回答', 
        'Good Question': '良い質問',
        'Great Answer': '偉大な回答',
        'Great Question': '偉大な質問',
        'Guru': 'グル', // CHECK ME!
        'Investor': '投資家',
        'Legendary': '伝説的',
        'Marshal': '元帥', 
        'Mortarboard': '角帽',
        'Necromancer': '黒魔術師',
        'Nice Answer': 'ナイス回答', 
        'Nice Question': 'ナイス質問',
        'Notable Question': '目立った質問',
        'Organizer': 'タグを整理する人',
        'Outspoken': '積極的', // I translated it to "proactive"/"assertive" for now...
        'Peer Pressure': '仲間からの圧力',
        'Popular Question': '人気のある質問',
        'Populist': '大衆主義者',
        'Precognitive': '正夢を見る人',
        //'Promoter': '', // ???
        'Proofreader': '校正者',
        'Publicist': '広報担当者',
        'Pundit': '評論家', // CHECK ME!
        'Quorum': '定足数',
        'Reversal': '逆転',
        'Reviewer': 'チェックする人',
        'Revival': '復活',
        'Scholar': '学者',
        'Self-Learner': '学習者',
        'Sportsmanship': 'スポーツマンシップ',
        'Stellar Question': '素晴らしい質問',
        //'Strunk & White': '',
        'Student': '学生',
        'Suffrage': '選挙権',
        'Supporter': '支援者',
        'Synonymizer': '同義語を整理する人',
        'Tag Editor': 'タグ編集者',
        'Talkative': 'おしゃべり',
        'Taxonomist': '分類学者',
        'Teacher': '先生',
        'Tenacious': '粘り強い',
        'Tumbleweed': 'タンブルウィード', // ???
        //'Unsung Hero': '',
        'Vox Populi': '国民の声',
        'Yearling': '1周年記念' // "first year anniversary" :P
    },
    
    //=======================================================//
    //                Long Badge Descriptions                //
    //=======================================================//
    
    'badgedesc': {
        "First bounty you manually awarded on another person's question":
        '他の人の質問に初めて賞金を与えた',
        
        "Visited every section of the FAQ":
        'すべての{a|FAQ|よくある質問}のセクションを読んだ',
        
        'Shared a link to a question that was visited by 25 unique IP addresses':
        '25個の固有のIPアドレスによって訪問された質問のリンクを共有した', // FIXME!
        
        //'Edited 100 posts that were inactive for 6 months':
        //'',
        
        'Completed all user profile fields':
        'すべてのユーザープロフィールフィールドを記入した',
        
        'First bounty you manually awarded on your own question':
        '自分の質問に初めて賞金を与えた',
        
        //'Actively participated in the private beta':
        //'',
        
        'Shared a link to a question that was visited by 300 unique IP addresses':
        '300個の固有のIPアドレスによって訪問された質問のリンクを共有した', // FIXME!
        
        'First flagged post':
        '投稿を初めて通報した',
        
        'Voted 300 or more times':
        '300回以上投票した',
        
        'First rollback':
        '初めて差し戻した',
        
        'Left 10 comments': 
        '10個のコメントを残した',
        
        '10 posts with score of 2 on meta':
        '{a|meta|メタ}で10個の1スコアの回答や質問を投稿した',
        
        'Edited 500 posts':
        '500個の投稿を編集した',
        
        'First down vote':
        '初めて下に投票した',
        
        //'Achieved a flag weight of 500 by reviewing and flagging appropriately':
        //'',
        
        'Deleted own post with score of 3 or higher':
        '自分の3ポイント以上の投稿を削除した',
        
        'First edit':
        '初めて編集した',
        
        'Voted on 600 questions and 25% or more of total votes are on questions':
        '600個の投稿に投票して、25％以上は質問',
        
        //'First to answer and accepted with at least 10 upvotes':
        //'',
        
        'Visited the site each day for 30 consecutive days':
        '30日連続このサイトに訪問した',
        
        'Earned 200 daily reputation 50 times':
        '50回に一日に200信用度を得た',
        
        //'Edited first post that was inactive for 6 months':
        //'',
        
        'Asked a question with 10,000 views':
        '一万観覧数の質問をした',
        
        'Visited the site each day for 100 consecutive days':
        '100日連続このサイトに訪問した',
        
        'Question favorited by 25 users':
        '質問は25個のユーザーによってお気に入りに登録された',
        
        //'Provided non-wiki answers of 15 total score in 20 of top 40 tags':
        //'',
        
        'Answer score of 25 or more':
        '回答のポイントは25以上',
        
        'Question score of 25 or more':
        '質問のポイントは25以上',
        
        'Answer score of 100 or more':
        '回答のポイントは100以上',
        
        'Question score of 100 or more':
        '質問のポイントは100以上',
        
        'Accepted answer and score of 40 or more':
        'ベストアンサーでスコア40以上',
        
        'First bounty you offered on another person\'s question':
        '他の人の質問に初めて賞金を提供した',
        
        'Earned 200 daily reputation 150 times':
        '200日に200信用度を得た',
        
        //'Achieved a flag weight of 749 by reviewing and flagging appropriately':
        //'',
        
        'Earned at least 200 reputation in a single day':
        '一日にせめて200信用度を得た',
        
        //'Answered a question more than 60 days later with score of 5 or more':
        //'',
        
        'Answer score of 10 or more':
        '回答のポイントは10以上',
        
        'Question score of 10 or more':
        '質問のポイントは10以上',
        
        'Asked a question with 2,500 views':
        '2500観覧数の質問をした',
        
        //'First retag':
        //'初めてリタグした',
        
        //'Posted 10 messages in chat that were starred by 10 different users':
        //'',
        
        'Deleted own post with score of -3 or lower':
        '自分の-3スコア以下の投稿を削除した',
        
        'Asked a question with 1,000 views':
        '1000観覧数の質問をした',
        
        //'Highest scoring answer that outscored an accepted answer with score of more than 10 by more than 2x':
        //'',
        
        //'Followed the Area 51 proposal for this site before it entered the commitment phase':
        //'',
        
        'First bounty you offered on your own question':
        '自分の質問に初めて賞金を提供した',
        
        //'Approved or rejected 100 suggested edits':
        //'',
        
        'Shared a link to a question that was visited by 1000 unique IP addresses':
        '1000個の固有のIPアドレスによって訪問された質問のリンクを共有した', // FIXME!
        
        'Left 10 comments with score of 5 or more':
        '10個の5ポイント以上のコメントを残した',
        
        'One post with score of 2 on meta':
        '{a|meta|メタ}で1スコアの回答や質問を投稿した',
        
        'Provided answer of +20 score to a question of -5 score':
        '20ポイント回答を-5ポイントの質問に提供した',
        
        //'1000 reviews, over 200 actioned':
        //'1000個レビューをした、200以上はFIXME',
        
        //'Answered more than 30 days later as first answer scoring 2 or more':
        //'',
        
        'Asked a question and accepted an answer':
        '質問して回答をベストアンサーに選んだ',
        
        'Answered your own question with score of 3 or more':
        '自分の質問に3ポイント以上の回答をした',
        
        //'Up voted 100 competing answers':
        //'',
        
        'Question favorited by 100 users':
        '質問は100個のユーザーよってお気に入りに登録された',
        
        'Edited 80 posts':
        '80個の投稿を編集した',
        
        'Asked first question with at least one up vote':
        'せめて一つの上に投票された質問をした',
        
        'Used 30 votes in a day':
        '一日に30回投票した',
        
        'First up vote':
        '初めて上に投票した',
        
        'First approved tag synonym':
        '初めて承認した{a|tag synonym|タグ同義語}',
        
        'First Tag Wiki Edit':
        '初めてタグウィキを編集した',
        
        'Posted 10 messages, with 1 or more starred, in chat':
        '{a|chat|チャット}で、10個のメッセージを残して、1個以上はお気に入りに登録した',
        
        'Created a tag used by 50 questions':
        '50個の質問によって使われたタグを作った',
        
        'Answered first question with score of 1 or more':
        '1ポイント以上の回答をはじめて投稿した',
        
        'Zero score accepted answers: more than 5 and 20% of total':
        '0スコアベストアンサーは5個以上ですべての回答の20%',
        
        //'Asked a question with no votes, no answers, no comments, and low views for a week':
        //'',
        
        'Zero score accepted answers: more than 10 and 25% of total':
        '0スコアベストアンサーは10個以上ですべての回答の25%',
        
        //'Used the maximum 40 votes in a day':
        //'',
        
        'Active member for a year, earning at least 200 reputation':
        '200信用度を得て、一年間にアクティブユーザー'
    },
    
    //=======================================================//
    //                      Permissions                      //
    //=======================================================//
    
    'perms': {
        'trusted user': '信頼されたユーザー',
        'protect questions': '質問を保護する',
        'access to moderator tools': 'モデレータ・ツールをアクセスする',
        'approve tag wiki edits': '他の人のタグウィキ編集を認める',
        'create tag synonyms': 'タグ同義語を作る',
        //'create gallery chat rooms': '',
        'edit questions and answers': '質問と回答を編集する',
        'established user': '認められたユーザー',
        //'cast close and reopen votes': '',
        'view close votes': '閉じる票数を見る',
        //'retag questions': '',
        'create tags': '新しいタグを作る',
        'vote down': '下に投票する',
        'create chat rooms': 'チャットルームを作成する',
        'edit community wiki': 'コミュニティー・ウィキ投稿を編集する',
        'set bounties': '賞金をセットする', // CHECK ME!
        'comment everywhere': 'サイト全体でコメントを残す',
        'talk in chat': 'チャットでしゃべる',
        'flag posts': '投稿を通報する',
        'vote up': '上に投票する',
        'create wiki posts': 'ウィキ投稿を作る',
        'remove new user restrictions': '新入りの制限を解除する',
        'participate in meta': 'メタで参加する',
        'create posts': '新しい質問をしたり回答をしたりする'
    },
    
    //=======================================================//
    //                         Sites                         //
    //=======================================================//
    
    'sites': {
        //'personal finance and money': 'パーソナルファイナンスと',
        'role-playing games': 'ロールプレイングゲーム',
        'onstartups': 'スタートアップ',
        'board and card games': 'ボードゲームとカードゲーム',
        'homebrew': '自家製',
        'writers': '作家',
        'audio-video production': 'オーディオビデオ製作',
        'graphic design': 'グラフィックデザイン',
        'code review': 'コードレビュー',
        'code golf': 'コードゴルフ',
        'quantitative finance': '定量金融',
        'project management': 'プロジェクト管理',
        'skeptics': 'スケプティックス',
        'fitness and nutrition': 'フィットネスと栄養',
        'motor vehicle maintenance and repair': '自動車メインテナンスと修理',
        'parenting': '育児',
        'musical practice and performance': '楽器の練習やパフォーマンス',
        //'software quality assurance and testing': '',
        'jewish life and learning': 'ユダヤ人の生活と学習',
        'german language and usage': 'ドイツ語',
        'japanese language and usage': '日本語',
        'astronomy': '天文学',
        'philosophy': '哲学',
        'gardening and landscaping': '園芸と造園',
        'travel': '旅行',
        'personal productivity': '個人的生産性',
        'cryptography': '暗号学',
        'literature': '文学',
        'signal processing': '信号処理',
        'french language and usage': 'フランス語',
        'christianity': 'キリスト教',
        'bitcoin': 'ビットコイン',
        'linguistics': '言語学',
        'theoretical physics': '理論物理学',
        //'biblical hermeneutics': '',
        'history': '歴史',
        'economics': '経済',
        //'healthcare it': '',
        'lego® answers': 'レゴ',
        'firearms': '銃器',
        'spanish language and usage': 'スペイン語',
        'computational science': '計算科学',
        'movies and tv': '映画とテレビ',
        'chinese language and usage': '中国語',
        'biology': '生物学',
        'area 51': 'エリア51',
        'api/apps': 'APIやアプリ',
        
        'home improvement': '家の修繕',
        'stack overflow': 'スタックオーバーフロー',
        'apple': 'アップル',
        'gaming': 'ゲーミング', // CHECK ME!
        'gis': '地理情報システム',
        'wordpress': 'ワードプレス',
        //'statistical analysis': '',
        'electrical engineering': '電気工学',
        'cooking': 'クッキング',
        'user experience': 'ユーザーエクスペリエンス',
        'stack apps': 'スタック・アプリ',
        'drupal answers': 'ドルーパル',
        'it security': 'ITセキュリティー',
        'game development': 'ゲーム開発',
        'mathematics': '数学',
        'web applications': 'ウェブアプリ',
        'bicycles': '自転車',
        'sharepoint': 'シェアポイント',
        'meta stack overflow': 'メタスタックオーバーフロー',
        //'database administrators': '',
        'webmasters': 'ウェブマスター',
        'theoretical computer science': '理論計算機科学',
        //'tex - latex': '',
        'server fault': 'サーバーフォルト',
        'programmers': 'プログラマー',
        //'ask ubuntu': '',
        'unix and linux': 'ユニックスとリナックス',
        'photography': '写真撮影',
        'english language and usage': '英語',
        'physics': '物理学',
        'super user': 'スーパーユーザー',
        'science fiction and fantasy': 'サイエンスフィクションとファンタジー',
        
        'scifi & fantasy': 'サイエンスフィクションとファンタジー',
        'english': '英語',
        'careers': '就職',
        'theoretical cs': '理論計算機科学',
        'webapps': 'ウェブアプリ',
        'security': 'ITセキュリティー',
        'meta': 'メタスタックオーバーフロー',
        'unix': 'ユニックス',
        'electronics': '電気工学',
        //'stats': '',
        'android': 'アンドロイド',
        'math': '数学',
        //'dba': '',
        'stackoverflow.com': 'スタックオーバーフロー'
        //''
    }
}

/*
'movie and tv enthusiasts'
'SharePoint enthusiasts'
'committed Christians, experts in Christianity and those interested in learning more'
'physical fitness professionals, athletes, trainers, and those providing health-related needs'
'mechanics and DIY enthusiast owners of cars, trucks, and motorcycles'
'scientific theorists and academic scholars interested in theoretical, research-level physics'
'database professionals who wish to improve their database skills and learn from others in the community'
'authors, editors, reviewers, professional writers, and aspiring writers'
'healthcare IT professionals and solution providers'
'Bitcoin crypto-currency enthusiasts'
'professional, enthusiast and amateur photographers'
'theoretical computer scientists and researchers in related fields'
'finance professionals and academics'
'user experience researchers and experts'
'LEGO® and building block enthusiasts'
'the Stack Exchange engine powering these sites'
'historians and history buffs'
'Drupal developers and administrators'
'literary enthusiasts and those passionate about the written word'
'road warriors and seasoned travelers'
'biology researchers, academics, and students'
'students, teachers, and linguists wanting to discuss the finer points of the Chinese language'
'linguists, etymologists, and serious English language enthusiasts'
'gamemasters and players of tabletop, paper-and-pencil role-playing games'
'speakers of German wanting to discuss the finer points of the language and translation'
'software developers, mathematicians and others interested in cryptography'
'expert and amateur astronomers and astrophysicists'
'computer enthusiasts and power users'
'engineers, producers, editors, and enthusiasts spanning the fields of audio, video, and media creation'
'people studying math at any level and professionals in related fields'
'programming puzzle enthusiasts and code golfers'
'students, teachers, and linguists wanting to discuss the finer points of the Spanish language'
'peer programmer code reviews'
'pro webmasters'
'professors, theologians, and those interested in exegetical analysis of biblical texts'
'people who want to be financially literate'
'entrepreneurs looking to start or run a new business'
'scientific skepticism'
'system administrators and desktop support professionals'
'practitioners of the art and science of signal, image and video processing'
'contractors and serious DIYers'
'power users of web applications'
'professional and independent game developers'
'Ubuntu users and developers'
'project managers'
'enthusiasts and power users of the Android operating system'
'people who like playing board games, designing board games or modifying the rules of existing board games'
'firearm experts and enthusiasts'
'people wanting to improve their personal productivity'
'active researchers, academics and students of physics'
'active researchers, academics and students of physics'
'gardeners and landscapers'
'professional and amateur chefs'
'dedicated home brewers and serious enthusiasts'
'software quality control experts, automation engineers, and software testers'
'power users of Apple hardware and software'
'parents, grandparents, nannies and others with a parenting role'
'cartographers, geographers and GIS professionals'
'IT security professionals'
'passionate videogamers on all platforms'
'those who base their lives on Jewish law and tradition and anyone interested in learning more'
'professional and enthusiast programmers'
'students, teachers, and linguists wanting to discuss the finer points of the French language'
'economists and graduate-level economics students'
'people who build and repair bicycles, people who train cycling, or commute on bicycles'
'musicians, students, and enthusiasts'
'users of TeX, LaTeX, ConTeXt, and related typesetting systems'
'professional graphic designers and non-designers trying to do their own graphic design'
'statisticians, data analysts, data miners and data visualization experts'
'science fiction and fantasy enthusiasts'
'scientists using computers to solve scientific problems'
'professional linguists and others with an interest in linguistic research and theory'
'users of Linux, FreeBSD and other Un*x-like operating systems.'
'WordPress developers and administrators'
'electronic hardware hacking enthusiasts'
'professional programmers interested in conceptual questions about software development'
'students, teachers, and linguists wanting to discuss the finer points of the Japanese language'
*/



/*





'belongs on meta.japanese.stackexchange.com'
'discussion, support, and feature requests for this site'


*/

var mappings = {
    // Map to the localization strings
    'tags': 'mouseovertext: div.user-tags a, a.badge-tag',
    'badges': 'mouseovertext: a.badge',
    'perms': 'text: div.related div.spacer strong, div.related div.spacer a',
    'badgedesc': 'html: div#mainbar div table tbody tr td',
    'sites': 'text: div#footer-sites a, div#hlogo a'
}

$.each(mappings, function(k, v) {
    strings[v] = jluVars[k]
})

strings['mouseovertext: a.post-tag'] = jluVars['tags']

//=======================================================//
//          Regular Expression Localizations             //
//=======================================================//

var regexes = {
    'html: h2.bottom-notice': [
        [/^Not the answer you're looking for\? Browse other questions tagged.*or ask your own question\.$/,
            '他の {grab|a.post-tag} にタグされた質問を閲覧して、それとも'+ // FIXME!
            '{a|ask your own question|自分の質問をします}。'],
        
        [/^Browse other questions tagged.*/,
            '他の {grab|a.post-tag} にタグされた質問を閲覧します。']
    ],
    
    //=======================================================//
    //             Reputation Score Localization             //
    //=======================================================//
    
    /*
     * Localize e.g. "6234 reputation" in the title 
     * attributes of people's names in comments
    */
    'title: a.comment-user': [
        [/^([0-9]+) reputation$/, '{match|1|number}信用度']
    ],
    'title: span.reputation-score': [
        [/^([0-9k,])+$/, '{match|1|number}'],
        
        [/^reputation score ([0-9]+)$/, '{match|1|number}信用度'],
        [/^reputation score$/, '信用度スコア'],
        
        [/^reputation this week ([0-9]+)$/, '今週の信用度スコアは{match|1|number}'],
        [/^reputation this week$/, '今週の信用度スコア'],
        
        [/^reputation this month ([0-9]+)$/, '今月の信用度スコアは{match|1|number}'],
        [/^reputation this month$/, '今月の信用度スコア'],
        
        [/^reputation this quarter ([0-9]+)$/, '三ヶ月間の信用度スコアは{match|1|number}'],
        [/^reputation this quarter$/, '三ヶ月間の信用度スコア'],
        
        [/^reputation this year ([0-9]+)$/, '今年の信用度スコアは{match|1|number}'],
        [/^reputation this year$/, '今年の信用度スコア']
        
    ],
    'html: span.reputation-score': [
        [/^(.*)$/, '{match|1|number}']
    ],
    
    //=======================================================//
    //                       Page Views                      //
    //=======================================================//
    
    // Process the "X views" items in the 
    // "unanswered questions" tab
    // FIXME: Don't process on the main page! ===========================================
    'html: div.views': [
        [/^([0-9]+) view(s?)$/, '{match|1|number}観覧数']
    ],
    
    //=======================================================//
    //                   Date Localization                   //
    //=======================================================//
    
    // OPEN ISSUE: Move date-brick and date to their own handlers? ==========================
    // div.date_brick, div.date
    'text: span.relativetime, span.comment-date span, p.label-key b, td.cool, td.warm, td.rep-time, td.rep-day': [
        [/^(.*)$/, '{match|1|date}']
    ],
    
    'html: span.jluhack-notify': [
        [/^Congrats, you've gained the privilege – (.*?) learn more$/,
         'おめでとう！「{jluvar|1|perms}」特権を得ました {a|learn more|詳しい情報…}'], // CHECK ME! ==============
        
        // TODO: Fix the hyperlink rewriting for the question title!
        [/^You've earned the "(.*?)" badge for (.*?)\. See your profile\.$/,
         '「{match|2}」には「{match|1}」バッジを得ました。あなたの{a|profile|プロフィール}をご覧ください。'],
        
        [/^You've earned "(.*?)" and ([0-9]+) other badge(s?)\. See your profile\.$/,
         '「{jluvar|1|badges}」バッジとともに、他の{match|2}つのバッジを得ました。あなたの{a|profile|プロフィール}をご覧ください。']
    ],
    
    //=======================================================//
    //                 User Activity Dropdown                //
    //=======================================================//
    
    'html: span.popup-clock': [
        [/^UTC time ([0-9]+):([0-9]+)$/, '協定世界時{match|1}時{match|2}分']
    ],
    
    //=======================================================//
    //                  Chat Link (in Meta)                  //
    //=======================================================//
    
    'html: a#h-chat-link': [
        [/^([0-9]+) (People|Person) Chatting$/, '{match|1}人はチャット中']
    ],
    
    //=======================================================//
    //                         Tags                          //
    //=======================================================//
    
    'html: div.stats-row a': [
        [/^([0-9]+) asked this week$/, '今週{match|1}つの質問'],
        [/^([0-9]+) this week$/, '今週{match|1}つの質問'],
        
        [/^([0-9]+) asked this month$/, '今月{match|1}つの質問'],
        [/^([0-9]+) this month$/, '今月{match|1}つの質問'],
        
        [/^([0-9]+) asked today$/, '今日{match|1}つの質問']
    ],
    
    'html: div.stats-row': [
        [/^created (.*)$/, '作成時間{match|1|date}']
    ],
    
    // Specific tag feeds
    'html: div#feed-link-text a': [
        [/^newest (.*?) questions feed$/, '最新{jluvar|1|tags}のタグの質問RSSフィード']
    ],
    
    //=======================================================//
    //                    Misc Tooltips                      //
    //=======================================================//
    
    // Page result tooltips
    'title: div.pager a': [
        [/^go to page ([0-9]+)$/, 'ページ{match|1}へ']
    ],
    
    'title: a.page-numbers': [
        [/^show ([0-9]+) items per page$/, 'ページごとに{match|1}件']
    ],
    
    // Badge tooltips:
    // * at the top of the screen
    // * in the "less info" user profile mode
    // * in the user "business card" popup
    'title: span#hlinks-user span, div.badges span span, div.um-flair span, td.badges span, div.user-details span': [
        [/^([0-9]+) gold badge(s?)$/, '{match|1}つの金色バッジ'],
        [/^([0-9]+) silver badge(s?)$/, '{match|1}つの銀色バッジ'],
        [/^([0-9]+) bronze badge(s?)$/, '{match|1}つの青銅バッジ']
    ],
    
    'title: a.badge': [
        [/^gold badge: (.*?)$/, '金色バッジ：{jluvar|1|badgedesc}'],
        [/^silver badge: (.*?)$/, '銀色バッジ：{jluvar|1|badgedesc}'],
        [/^bronze badge: (.*?)$/, '青銅バッジ：{jluvar|1|badgedesc}']
    ],
    
    //=======================================================//
    //                   League Rankings                     //
    //=======================================================//
    
    'html: div#leagueRank a': [
        [/top ([0-9]+)% this week/, '今週は上位{match|1}％'], // CHECK ME!
        [/top ([0-9]+)% this month/, '今月は上位{match|1}％'],
        [/top ([0-9]+)% this quarter/, 'この四半期は上位{match|1}％'],
        [/top ([0-9]+)% this year/, '今年は上位{match|1}％'],
        [/top ([0-9]+)% this quarter/, '今週は上位{match|1}％']
    ],
    
    //=======================================================//
    //                 Stack Exchange Popup                  //
    //=======================================================//
    
    'text: div#seContainerInbox div.itemBox div.siteInfo p': [
        [/^([0-9]+) comments on$/, '{match|1}つのコメント'],
        [/^([0-9]+) answers on$/, '{match|1}つの回答']
    ],
    
    //=======================================================//
    //                    User Profiles                      //
    //=======================================================//
    
    'text: td.rep-desc': [
        [/^([0-9]+) vote(s?)$/, '{match|1}投票数']
    ],
    
    // "visited: X days, X consecutive"
    'text: span#days-visited': [
        [/^([0-9]+) day(s?), ([0-9]+) consecutive$/, '{match|1}日、{match|3}日は連続的'],
        [/^([0-9]+) day(s?)$/, '{match|1}日']
    ],
    
    'text: div.account-site div.cool': [
        [/^Joined (.*?), last seen (.*?)$/, '{match|1|date}に登録した、最終活動は{match|2|date}']
    ],
    
    // "copy to all accounts" button
    'value: input#push-profile': [
        [/^Copy (.*) profile to all Stack Exchange accounts$/,
         '{match|1}プロフィールをすべてのStack Exchangeアカウントにコピーする']
    ],
    
    //=======================================================//
    //                  Comment Help Text                    //
    //=======================================================//
    
    'text: span.text-counter': [
        [/^enter at least 15 characters$/, 'せめて15字を入力してください'],
        [/^([0-9]+) more to go.*/, 'まだ{match|1}字が必要…'],
        [/^([\-0-9]+) characters left.*/, '{match|1}字が残っている']
    ],
    
    //=======================================================//
    //                    Answer Pages                       //
    //=======================================================//
    
    'text: div.subheader h2': [
        [/^([0-9]+) Answer(s?)$/, '{match|1}回答数']
    ],
    
    'title: span.vote-accepted-on': [
        [/^The question owner accepted this as the best answer (.*?)$/, 
         '{match|1|date}にこの質問は質問者によってベストアンサーに選ばれた']
    ],
    
    //=======================================================//
    //                     Tag Popups                        //
    //=======================================================//
    
    'text: span.tm-sub-info': [
        [/^([0-9]+) follower(s?)$/, '{match|1}フォロワー数']
    ],
    
    //=======================================================//
    //                     Users Page                        //
    //=======================================================//
    
    'text: div.user-details': [
        [/^([0-9]+) in ([0-9]+) day(s?)$/, '{match|2}日に{match|1}信用度']
    ],
    
    'text: div.user-tags': [
        [/^([0-9]+) edit(s?)$/, '{match|1}編集数']
    ],
    
    'text: div.siteInfo p a': [
        [/^(.*)$/, '{jluvar|1|sites|lower}']
    ],
    
    //=======================================================//
    //                Close Question Reasons                 //
    //=======================================================//
    
    'html: span.action-desc': [
	    ['^This question covers exactly the same ground as earlier questions on this topic; '+
	    'its answers may be merged with another identical question\\.$',
	
	        'この質問は前の質問に同じで、回答は他の質問に統合する可能性はあります。'],
	
	    ['^Questions on (.*?) - Stack Exchange are expected to '+
	    'generally relate to (.*?), within the scope defined in the faq\\.$',
	        
	        '{a|faq|よくある質問}に従って、「{jluvar|1|sites|lower}、Stack Exchange」'+
	        'への質問は「{match|2}」にかかわる内容です。'],
		
		/*['^Questions on (.*?) Meta - Stack Exchange are expected to be '+
		'discussion, support, and feature requests for (.*?) - Stack Exchange\\.$',
		
			''],*/
		
	    ['^This question is not a good fit to our Q&A format. We expect answers to generally '+
	    'involve facts, references, or specific expertise; this question will likely '+
	    'solicit opinion, debate, arguments, polling, or extended discussion\\.$',
	    
	        'この質問は私たちの質問や回答フォーマットに合っていません。'], // FIXME!
	
	    ['^It\'s difficult to tell what is being asked here. This question is ambiguous, '+
	    'vague, incomplete, or rhetorical and cannot be reasonably answered in its current '+
	    'form\\.$',
	
	        'この質問は分かりにくいです。この質問はあいまいやはっきりしないや未完成や修辞学的で、'+
	        '現在の型では合理的に答えられません。'],
	
	    ['^This question is unlikely to ever help any future visitors; it is only relevant '+
	    'to a small geographic area, a specific moment in time, or an extraordinarily '+
	    'narrow situation that is not generally applicable to the worldwide audience of '+
	    'the internet\\.$',
	    
	        'この質問は将来の訪問者を役に立たない可能性は高いです。'+
	        '小さい地理的な領域やある瞬間やとても狭い状況で、'+
	        'インターネットの世界中の聴衆を一般的に適用ではありません。']
	]
}

/*
/^([0-9]+) more vote(s?) needed to close this question$/:
''*/

var jluLoc = {
    firstTime: true,
    
    init: function() {
        // Poll for changes in certain elements
        function poller() {
            jluLoc.poll()
        }
        setInterval(poller, 400) // WARNING! ==================================================
        this.poll()
        
        // Remove the toolbar etc images and replace them with text
        this.removeImages()
        // Localize comments
        // ("show X more comments" and "edited X times" etc)
        this.localizeComments()
    },
    
    poll: function() {
        /*
         * Certain elements are generated in JavaScript, so poll 
         * every so often to check for changes
         * 
         * OPEN ISSUE: Exclude keys once they've been found to save resources?
         */ 
        
        var a = [
            // overview user profile tabs
            'div#user-panel-answers',
            'div#user-panel-questions',
            'div#user-panel-badges',
            'div#user-panel-bounties',
            
            // other user profile tabs
            'div#user-tab-answers',
            'div#user-tab-questions',
            'div#user-tab-tags',
            'div#user-tab-badges',
            'div#user-tab-favorites',
            'div#user-tab-bounties',
            'div#user-tab-reputation',
            'div#user-tab-responses',
            'div#user-tab-activity',
            
            // reputation tab
            'tr.loaded-body',
            'tr.rep-breakdown-row',
            
            // tag popups
            'div#tag-menu',
            
            // wmd editor
            'div.post-editor',
            'div#mdhelp',
            
            // notifications
            'div#notify-container',
            
            // stack exchange popup
            'div#seWrapper',
            'div#seContainerHot',
            'div#seContainerSites',
            'div#seContainerInbox',
            'div#seContainerEmail',
            
            // "my info" popup
            'div.profile-popup',
            'div.profile-stats div',
            
            // chat feature link (in meta)
            'div#chat-feature h4',
            
            // comments
            'div.comments table tbody',
            
            // questions/answers (CHECK ME!)
            'div.answer table tbody tr',
            'div.post-text',
            'div.post-taglist',
            'table.fw tbody tr',
            
            // close dialog
            'div#pane-main',
            'div.popup-actions div'
        ]
        var x, 
            i = 0, 
            reprocess = false
        
        if (this.firstTime) {
            // Localize all the elements once 
            // the first time this code is run
            this.firstTime = false
            reprocess = true
        }
        
        while (x=a[i++]) {
            // Poll certain container elements, when the child element's 
            // `processed` attribute doesn't exist, assume the innerHTML has 
            // been replaced or a new element so reprocess the document
            
            $(x).each(function() {
                var fc = this.firstChild
                if (!fc || fc.processed) {
                    return
                }
                
                if (x == 'div#notify-container') {
                    jluLoc.notifyHack()
                }
                
                reprocess = true
                fc.processed = true // IE textnode WARNING! ====================================
            })
        }
        
        if (reprocess) {
            // Only reprocess the document once!
            log('reprocess!')
            jluLoc.processAll()
        }
        
        i=0, a = [
            // chat link in meta
            'html: a#h-chat-link',
            // "x characters to go" etc hints under comments
            'text: span.text-counter',
            // toggle full/mini view in user profiles
            'clicktext: a.toggle-summary',
            // anonymous controls
            'text: div.was-this-helpful',
            'value: input.anon-vote'
        ]
        while (x=a[i++]) {
            // Poll some specific keys
            if (x in strings) {
                this.localizeStrings(x)
            }
            
            if (x in regexes) {
                this.localizeRegExp(x)
            }
        }
        
        this.updateCommentTooltips()
        
        // For the time being, replace the WMD help button with
        // links to the English full help and Japanese quick guide
        $('li.wmd-help-button').replaceWith(
            '<div style="position: absolute; right: 0px; top: 3px">'+
            
            '<a target="_blank" href="/editing-help">'+
            '英語編集ヘルプへ»</a>&nbsp;&nbsp;&nbsp;'+
            
            '<a target="_blank" '+
            'href="http://meta.japanese.stackexchange.com/questions/625/#626">'+
            '日本語編集ガイドへ»</a>'+
            
            '</div>'
        )
        //$('div.mdhelp').css('display', 'none') // HACK! ========================================
        
        //$('div#notify-container').css('display', 'none') // HACK! ============================
    },
    
    processAll: function() {
        // Localize any relevant (basic) text
        $.each(strings, function(key) {
            //log(key)
            jluLoc.localizeStrings(key)
        })
        
        // Localize using regular expressions for 
        // things that can't use the simple method
        $.each(regexes, function(key) {
            //log(key)
            jluLoc.localizeRegExp(key)
        })
    },
    
    notifyHack: function() {
        // Insert all the elements inside 
        $('div#notify-container div').each(function() {
            var x, i=0, a=[]
            while (x=this.childNodes[i++]) {
                if (!x.className || x.className.indexOf('notify-close')==-1) {
                    a.push(x)
                }
            }
            
            i = 0
            while (x=a[i++]) {
                // remove the child nodes
                $(x).remove()
            }
            
            var ielm = $('<span class="jluhack-notify"></span>')
            ielm.append.apply(ielm, a).appendTo(this)
        })
    },
    
    //=======================================================//
    //                   Basic Localization                  //
    //=======================================================//
    
    /*
     * Localize elements matching the conditions 
     * of `key` in the format:
     * 
     * "{i18n type}: {sizzle selector}"
     * i18n type: can be text or other DOM attributes 
     *            such as "title" or "value"
     * sizzle selector: see http://api.jquery.com/category/selectors/
     */
    
    localizeStrings: function(key, noLog) {
        var a = key.split(': '),
            typ = a[0],
            cls = a.slice(1).join(': ')
        
        $(cls).each(function() {
            var txt = jluLoc._getText(this, typ)
            
            // Get the localized string
            var i18n = strings[key][txt]//||'PLEASE FILL ME IN!'
            if (i18n==null) {
                if (!noLog && 'Top Questions'==txt) {
                    log('not found: "'+key+'" "'+txt+'"')
                }
                return
            }
            
            jluLoc.localize(txt, i18n, this, typ, null)
        })
    },
    
    localizeRegExp: function(key, noLog) {
        var a = key.split(': '),
            typ = a[0],
            cls = a.slice(1).join(': ')
        
        $(cls).each(function() {
            var txt = jluLoc._getText(this, typ),
                elm = this
            
            $.each(regexes[key], function(i, x) {
                var regex = x[0],
                    i18n = x[1],
                    match = txt.match(regex)
                
                if (!noLog) {
                    //log('regex: '+regex+' match: '+match+' txt: '+txt+' i18n: '+i18n)
                }
                
                if (match) {
                    jluLoc.localize(txt, i18n, elm, typ, match)
                }
            })
        })
    },
    
    _getText: function(elm, typ) {
        if (typ in {text:0, mouseovertext:0, clicktext:0}) {
            return jluLoc._getFirstText(elm)
        }
        else if (typ=='html') {
            return getText(elm)
        }
        else {
            return $.trim(elm[typ])
        }
    },
    
    localize: function(origTxt, i18n, elm, typ, match) {
        var a = [], 
            dateLoc = false
        
        $.each(i18n.split('{'), function(i, x) {
            var split, cmd, args, txt
            
            if (!i) {
                txt = x
            }
            else {
                split = x.split('}')
                cmd = split[0].split('|')[0]
                args = split[0].split('|').slice(1)
                txt = split.slice(1).join('}')
                
                if (cmd=='grab') {
                    // Grab elements using a sizzle selector
                    a.push($(elm).find(args[0]))
                }
                else if (cmd=='match') {
                    // Use a match from the regular expression 
                    // (if called from localizeRegExp)
                    //
                    // argument 1 -> the match number
                    // argument 2 -> `date` for converting 
                    //               dates and `number` for numbers
                    
                    var out = match[args[0]]
                    if (args[1]=='date') {
                        out = jluLoc.localizeDate(out)
                        dateLoc = true
                    }
                    else if (args[1]=='number') {
                        out = jluLoc._numConvert(out)
                    }
                    a.push(out)
                }
                else if (cmd=='a') {
                    // Grab an existing <a href...> element matching 
                    // `txt`, and set the HTML to `newHTML`.
                    
                    a.push($(elm).
                        find('a:contains('+args[0]+')').
                        html(args[1]).
                        remove()
                    )
                }
                else if (cmd=='jluvar') {
                    var map = jluVars[args[1]],
                        key = match[args[0]]
                    
                    if (args[2] == 'lower') {
                        key = key.toLowerCase()
                    }
                    
                    a.push(key in map? map[key]:key)
                }
            }
            
            if (txt) {
                a.push(txt)
            }
        })
        
        // Set the new value
        var joined = a.join('')
        if (typ in {text:0, mouseovertext:0, clicktext:0}) {
            jluLoc._setFirstText(elm, joined)
        }
        else if (typ=='html') {
            var ielm = $(elm)
            ielm.html('').append.apply(ielm, a)
        }
        else {
            elm[typ] = joined
        }
        
        if (typ=='mouseovertext') {
            // Some elements, for example tag elements need the text in 
            // them for certain AJAX-related things, so restore them 
            // when they're moused over!
            
            $(elm).
                mouseover(function() {
                    jluLoc._setFirstText(elm, origTxt)
                }).
                mouseout(function() {
                    jluLoc._setFirstText(elm, joined)
                })
        }
        else if (typ=='clicktext') {
            $(elm).click(function() {jluLoc._setFirstText(elm, origTxt)})
        }
        
        // Localize "modified", "edited" etc if the element was localized 
        // for dates and is an HTML element (not a DOM attribute)
        if (typ in {text:0, html:0} && dateLoc) {
            jluLoc.localizeDateType(elm)
        }
    },
    
    //=======================================================//
    //                  Set Text Node Text                   //
    //=======================================================//
    
    _setFirstText: function(elm, txt) {
        /*
         * Replace the node value of only the first text node so that in 
         * e.g. `<div><img...> my text<div>` modifying `div` doesn't 
         * delete the `img` tag!
         */
        
        var node = this._findTextNode(elm)
        if (node) {
            // Add whitespace (if there was any) before the original text
            // This is for fixing the whitespace before badges etc
            var nV = node.nodeValue
            if (nV.charAt(0) && !$.trim(nV.charAt(0))) {
                txt = nV.charAt(0)+txt
            }
            node.nodeValue = txt
        }
    },
    
    _getFirstText: function(elm, txt) {
        /*
         * Find the text of *only the first text 
         * node which isn't blank or only whitespace*
         */
        var node = this._findTextNode(elm)
        return node? wsProcess(node.nodeValue):''
    },
    
    _findTextNode: function(elm) {
        /*
         * Find the first text node (if there is one)
         */
        var node, i=0
        while (node=elm.childNodes[i++]) {
            if (node.nodeType==TEXT_NODE && $.trim(node.nodeValue)) {
                return node
            }
        }
    },
    
    //=======================================================//
    //                  Comment Localization                 //
    //=======================================================//
    
    localizeComments: function() {
        /* 
         * Convert the "show X more comments" links in comments
         */
        
        $('a.comments-link').each(function() {
            var a = [
                [/^show ([0-9]+) more comment(s?)$/, 
                 'つのコメントを見せる'],
                     
                [/^add \/ show ([0-9]+) more comment(s?)$/,
                 'つのコメントを見せて、またはコメントを追加する']
            ]
            
            var x, i=0
            while (x=a[i++]) {
                var match = getText(this).match(x[0])
                if (match) {
                    // HACK: I can't seem to change the text of these elements, 
                    // as the events stop working. Therefore, make the 
                    // original text white and prepend other text
                    // (until I can find a better solution)
                    this.style.color = 'white'
                    this.style.background = 'transparent'
                    
                    $('<a class="comments-link">'+match[1]+x[1]+'</a>').
                        insertBefore(this.firstChild)
                 }
            }
        })
    },
    
    updateCommentTooltips: function() {
        $('span.text-counter').each(function() {
            // To reduce flicker, create a new element before the 
            // original element (if one hasn't already been)
            // and copy the other classname
            
            if (this==this.parentNode.firstChild) {
                this.style.visibility = 'hidden'
                $('<span></span>').insertBefore(this)
            }
            
            var elm = this.parentNode.firstChild
            $(elm).text($(this).text())
            elm.className = this.className.replace('text-counter', ' ')
        })
    },
    
    //=======================================================//
    //                   Date Localization                   //
    //=======================================================//
    
    localizeDateType: function(elm) {
        // Convert the "asked", "edited", "modified" texts
        // and append them after the date
        var dateType = jluLoc.popDateType(elm)
        if (dateType) {
            var node = document.createTextNode(dateType[1])
            dateType[0].appendChild(node)
        }
    },
    
    localizeDate: function(txt) {
        /*
         * TODO: Localize e.g. "Dec 18 '11 at 2:59" in comments etc!
         */
        
        if (txt.indexOf(' time')!=-1) { // time/times
            // HACK: Special processing for the "viewed X times" 
            // items in the panel on the right
            return jluLoc._numConvert(txt.split(' ')[0])
        }
        
        txt = txt.toLowerCase().replace(' ago', '前')
        $.each([// HACK: months aren't shortened, so I'm using "r"
                'years|y', 'months|r', 'days|d',
                'minutes|m', 'hours|h', 'mins|m', 'secs|s'], function() {
            
            // Shorten all of the times to single chars to 
            // allow processing by _numConvert() below
            var a = this.split('|')
            txt = txt.replace(' '+a[0], a[1])
            txt = txt.replace(' '+a[0].split('').slice(0, -1).join(''), a[1])
        })
        
        // TODO: Fill in the missing strings here, 
        // e.g. "2 days before" etc if they exist
        var other = {
            'just now': 'たった今',
            'today': '今日',
            'yesterday': '昨日'
        }
        
        if (txt in other && other.hasOwnProperty(txt)) {
            // A "special" static time
            return other[txt]
        }
        else if (txt.indexOf(' at ') != -1) {
            // "Dec 29 at 9:16"
            // "Jun 1 '11 at 2:27"
            // "Dec 25 '11 at 5:55" format
            
            var a = txt.split(' at '),
                date = this.convertDate(a[0]),
                time = this.convertTime(a[1])
            return date+' '+time
        }
        else if (txt.indexOf(':') != -1) {
            return this.convertTime(txt)
        }
        else if (txt.split(' ')[0] in this._months) {
            return this.convertDate(txt)
        }
        else {
            // "1d ago" etc format
            return jluLoc._numConvert(txt)
        }
    },
    
    convertDate: function(txt) {
        var date = txt.replace("'", '').split(' '),
            month = date[0],
            day = date[1],
            year = date[2]
        
        return ((year? year+'年':'')+
                jluLoc._months[month]+'月'+
                day+'日')
    },
    
    convertTime: function(txt) {
        var time = txt.split(':'),
            hour = time[0],
            min = time[1]
        
        return hour+'時'+min+'分'
    },
    
    _months: {
        'jan': '1',
        'feb': '2',
        'mar': '3',
        'apr': '4',
        'may': '5',
        'jun': '6',
        'jul': '7',
        'aug': '8',
        'sep': '9',
        'oct': '10',
        'nov': '11',
        'dec': '12'
    },
    
    popDateType: function(elm) {
        if (!elm.parentNode) {
            return // WTF?
        }
        
        var node = elm.parentNode
        if ('tagName' in node && node.tagName.toLowerCase()=='a') {
            // an "edited revision" hyperlink on questions/answers etc 
            // (for viewing revisions), so go up once more
            return this.popDateType(node)
        }
        node = node.firstChild
        
        if (node && node.nodeType==TEXT_NODE) {
            var txt = node.nodeValue
            elm.parentNode.removeChild(node)
            
            var value = this._dateTypes[$.trim(txt)]
            if (value) {
                return [elm.parentNode, value]
            }
        }
    },
    
    _dateTypes: {
        // These need to be checked!
        asked: 'に質問した',
        edited: 'に編集した',
        modified: 'に修正した'
    },
    
    //=======================================================//
    //                   Image Localization                  //
    //=======================================================//
    
    removeImages: function() {
        /*
         * Removes the "Questions", "Tags", "Users", "Badges", 
         * "Unanswered", "Ask Question" images and shows the 
         * hidden text underneath so that the localized text 
         * will be displayed
         */
        
        var a = [//'div#content',
                'div#hlogo a',
                'h1#h-top-questions',
                
                '#nav-questions', 
                '#nav-tags', 
                '#nav-users', 
                '#nav-badges', 
                '#nav-unanswered', 
                '#nav-askquestion', 
                //.nav .youarehere, 
                //.fb-share, 
                //.twitter-share
                
                '#h-top-questions',
                '#h-all-questions',
                '#h-tags',
                '#h-users',
                '#h-badges',
                '#h-unanswered-questions',
                '#h-interesting-tags',
                '#h-ignored-tags',
                '#h-recent-tags',
                '#h-recent-badges',
                '#h-legend',
                '#h-linked',
                '#h-related',
                '#h-related-tags',
                '#h-unanswered-tags',
                '#h-meta',
                '#h-chat-link']
        
        var x, i=0
        while (x=a[i++]) {
            jluLoc._imageToText(a[i])
        }
    },
    
    _imageToText: function(elm) {
        $(elm).css({
            'textIndent': '0',
            //'whiteSpace': 'nowrap',
            'width': 'auto',
            'background': 'none'
        })
    },
    
    //=======================================================//
    //                     Miscellaneous                     //
    //=======================================================//
    
    _numConvert: function(s) {
        var c, i=0, 
            a = [], 
            s = s.split('')
        
        while (c=s[i++]) {
            a.push(this._nums[c]==null? c
                                      : this._nums[c])
        }
        return a.join('')
    },
    
    _nums: {
        //0: '０',    
        //1: '１', 2: '２',    3: '３', 
        //4: '４', 5: '５',    6: '６',
        //7: '７',    8: '８', 9: '９',    
        'k': '千', 
        'm': '分',
        'h': '時間',
        'd': '日',
        'r': '月', // HACK!
        'y': '年',
        's': '秒'
        //'.': '．',
        //',': ''
    }
}

if (window.localStorage) {
    // Add a "English"/"Japanese" toggle to the toolbar 
    // above if the browser supports localStorage
    var jMode = localStorage.getItem('jMode')
    
    if (jMode) {
        jluLoc.init()
    }
    
    function toggleJMode() {
        if (jMode) {
            localStorage.removeItem('jMode')
        }
        else {
            localStorage.setItem('jMode', '1')
        }
        window.location.reload()
    }
    
    $('span#hlinks-custom').
        append('<span class="lsep">|</span>&nbsp;')
    
    $('<a href="javascript: void(0)">'+(jMode? 'English':'日本語版')+'</a>').
        appendTo($('span#hlinks-custom')).
        click(toggleJMode)
}
else {
    jluLoc.init()
}

})();