/*****************************************************************
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/Martinomagnifico
 *
 * FsFx.js for Reveal.js 
 * Version 1.1.1
 * 
 * @license 
 * MIT licensed
 *
 * Thanks to:
 *  - Hakim El Hattab, Reveal.js 
 ******************************************************************/
function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,l=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}return t}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o,u=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==l.return||l.return()}finally{if(c)throw o}}}}var l=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=function(){var n,t=l[0],o={},u=r(l);try{for(u.s();!(n=u.n()).done;){var c=n.value;if((null==c?void 0:c[1])in document){var i,a=r(c.entries());try{for(a.s();!(i=a.n()).done;){var s=e(i.value,2),f=s[0],d=s[1];o[t[f]]=d}}catch(e){a.e(e)}finally{a.f()}return o}}}catch(e){u.e(e)}finally{u.f()}return!1}(),u={change:o.fullscreenchange,error:o.fullscreenerror},c={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(t,r){var l=function e(){c.off("change",e),t()};c.on("change",l);var u=e[o.requestFullscreen](n);u instanceof Promise&&u.then(l).catch(r)}))},exit:function(){return new Promise((function(e,n){if(c.isFullscreen){var t=function n(){c.off("change",n),e()};c.on("change",t);var r=document[o.exitFullscreen]();r instanceof Promise&&r.then(t).catch(n)}else e()}))},toggle:function(e,n){return c.isFullscreen?c.exit():c.request(e,n)},onchange:function(e){c.on("change",e)},onerror:function(e){c.on("error",e)},on:function(e,n){var t=u[e];t&&document.addEventListener(t,n,!1)},off:function(e,n){var t=u[e];t&&document.removeEventListener(t,n,!1)},raw:o};Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(document[o.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[o.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[o.fullscreenEnabled])}}}),o||(c={isEnabled:!1});var i=c;export default function(){var e=function(e,n){var t=e.querySelectorAll(n);return Array.prototype.slice.call(t)},n=function(){return!(!i.enabled&&!i.isEnabled)},t=function(t,r){var l="BODY"==t.getRevealElement().tagName?document:t.getRevealElement(),o=e(l,".".concat(r.baseclass)),u=e(document,"[data-fs-toggle]");n()?(o.length>0?function(e){e.filter((function(e){e.style.display="inline-block";var r=function(){parseInt(e.dataset.fsGonext)>0&&!i.isFullscreen?setTimeout((function(){t.next()}),parseInt(e.dataset.fsGonext)):t.next()};e.onclick=function(){1==n()?e.hasAttribute("data-fs-gonext")?i.isFullscreen?r():(i.request(l).then(r()),element.requestFullscreen()):i.toggle(l):t.next()}}))}(o):console.log("There are no FS buttons"),u.length>0?function(e){1==n()&&document.addEventListener(i.raw.fullscreenchange,(function(){i.isFullscreen&&e.filter((function(e){e.classList.add(e.dataset.fsToggle)})),i.isFullscreen||e.filter((function(e){e.classList.remove(e.dataset.fsToggle)}))}))}(u):console.log("There are no elements with 'data-fs-toggle'.")):(console.log("The browser does not support the Fullscreen API."),document.body.classList.add("no-fsfx"),o.filter((function(e){!function(e){(1!=r.hideifnofs||e.hasAttribute("data-fs-gonext"))&&(e.style.display="inline-block",e.onclick=function(){t.next()})}(e)})))};return{id:"fsfx",init:function(e){var n=e.getConfig().fsfx||{};!function(e,n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}(n,{baseclass:"fsbutton",hideifnofs:!0}),t(e,n)}}}
