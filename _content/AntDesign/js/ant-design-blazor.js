!function r(l,c,d){function f(t,e){if(!c[t]){if(!l[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[t]={exports:{}};l[t][0].call(i.exports,function(e){return f(l[t][1][e]||e)},i,i.exports,r,l,c,d)}return c[t].exports}for(var u="function"==typeof require&&require,e=0;e<d.length;e++)f(d[e]);return f}({1:[function(e,t,o){"use strict";function r(e){return e?"string"==typeof e&&(e=document.querySelector(e)):e=document.body,e}function n(e){var t={},o=r(e);return t.offsetTop=o.offsetTop||0,t.offsetLeft=o.offsetLeft||0,t.offsetWidth=o.offsetWidth||0,t.offsetHeight=o.offsetHeight||0,t.scrollHeight=o.scrollHeight||0,t.scrollWidth=o.scrollWidth||0,t.scrollLeft=o.scrollLeft||0,t.scrollTop=o.scrollTop||0,t.clientTop=o.clientTop||0,t.clientLeft=o.clientLeft||0,t.clientHeight=o.clientHeight||0,t.clientWidth=o.clientWidth||0,t.absoluteTop=l(o),t.absoluteLeft=c(o),t}function i(e,t,i){function o(e){var t={};for(var o in e)t[o]=e[o];var n=JSON.stringify(t,function(e,t){return t instanceof Node?"Node":t instanceof Window?"Window":t}," ");i.invokeMethodAsync("Invoke",n)}"window"==e?window.addEventListener(t,o):r(e).addEventListener(t,o)}function l(e){var t=e.offsetTop;return null!=e.offsetParent&&(t+=l(e.offsetParent)),t}function c(e){var t=e.offsetLeft;return null!=e.offsetParent&&(t+=c(e.offsetParent)),t}function d(){return document.activeElement.getAttribute("id")||""}Object.defineProperty(o,"__esModule",{value:!0}),o.focusDialog=o.getActiveElement=o.delElementFrom=o.addElementTo=o.delElementFromBody=o.addElementToBody=o.getAbsoluteLeft=o.getAbsoluteTop=o.addDomEventListenerToFirstChild=o.addClsToFirstChild=o.getFirstChildDomInfo=o.BackTop=o.log=o.blur=o.focus=o.copy=o.matchMedia=o.addDomEventListener=o.getBoundingClientRect=o.getDomInfo=o.getDom=void 0,o.getDom=r,o.getDomInfo=n,o.getBoundingClientRect=function(e){return r(e).getBoundingClientRect()},o.addDomEventListener=i,o.matchMedia=function(e){return window.matchMedia(e).matches},o.copy=function(e){navigator.clipboard?navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)}):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+o)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}(e)},o.focus=function(e){r(e).focus()},o.blur=function(e){r(e).blur()},o.log=function(e){console.log(e)},o.BackTop=function(e){document.getElementById("BodyContainer").scrollTo(0,0)},o.getFirstChildDomInfo=function(e){return n(r(e).firstElementChild)},o.addClsToFirstChild=function(e,t){var o=r(e);o.firstElementChild&&o.firstElementChild.classList.add(t)},o.addDomEventListenerToFirstChild=function(e,t,o){var n=r(e);n.firstElementChild&&i(n.firstElementChild,t,o)},o.getAbsoluteTop=l,o.getAbsoluteLeft=c,o.addElementToBody=function(e){document.body.appendChild(e)},o.delElementFromBody=function(e){document.body.removeChild(e)},o.addElementTo=function(e,t){var o=r(t);o&&e&&o.appendChild(e)},o.delElementFrom=function(e,t){var o=r(t);o&&e&&o.removeChild(e)},o.getActiveElement=d,o.focusDialog=function e(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=document.querySelector(t);n&&!n.hasAttribute("disabled")&&setTimeout(function(){n.focus(),"#"+d()!==t&&o<10&&e(t,o+1)},10)}},{}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("./core/JsInterop/interop");window.AntDesign={interop:n}},{"./core/JsInterop/interop":1}]},{},[2]);
//# sourceMappingURL=ant-design-blazor.js.map
