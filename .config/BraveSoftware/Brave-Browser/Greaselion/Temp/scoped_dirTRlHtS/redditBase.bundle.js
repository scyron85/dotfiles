!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}({0:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return c}));const r=(e,t)=>e&&t?`${e}_${t}`:"",i=(e,t)=>`${e}#channel:${t}`,o=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const i=r+t.length,o=e.indexOf(n,i);let u="";return o!==i?u=-1!==o&&o>i||-1!==o?e.substring(i,o):e.substring(i):""===n&&(u=e.substring(i)),u},u=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const i=n[r];if(e[i]!==t[i])return!1}return!0},s=()=>"complete"===document.readyState&&"visible"===document.visibilityState,c=(e,t)=>`${e}: ${t.statusText} (${t.status})`},1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u}));let r=null;const i=()=>r,o=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},u=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},10:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="reddit",i="reddit.com"},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1);let i=!1;const o=(e,t)=>{if(!e||i)return;i=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}})))}},33:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),o=n(10),u=n(6);const s=()=>{const e=document.querySelectorAll('div[data-type="link"]');if(!e||0===e.length)return"";const t=e[e.length-1].querySelector("a[href^='https://old.reddit.com/user/']");return t&&t.href?t.href.replace("https://old.reddit.com/user/",""):""},c=e=>{let t="";if(t=u.i(e.pathname)?(()=>{if(u.h(new URL(location.href)))return s();const e=document.getElementsByClassName("Post");if(!e||0===e.length)return"";const t=e[0].querySelector("a[href^='/user/']");if(!t||!t.href)return"";const n=t.href.match("/user/([^/]+)/?");return n&&2===n.length?n[1]:""})():u.e(e),!t)return void Object(r.c)(o.b,"Invalid screen name");const n=u.h(e);return(async(e,t)=>{if(!e)throw new Error("Invalid parameters");const n=await u.c(e,t);return{user:{id:u.f(n),screenName:e,fullName:u.d(n),favIconUrl:u.b(n)},post:{id:"",timestamp:"",text:""}}})(t,n).then(e=>{const n=e.user.id,s=i.c(o.b,n),c=e.user.fullName;if(!c)return void Object(r.c)(o.b,"Invalid publisher name");const a=i.b(o.b,t),f=e.user.favIconUrl,d=u.a(t,!1),l=Object(r.b)();l&&l.postMessage({type:"SavePublisherVisit",mediaType:o.b,data:{url:d,publisherKey:s,publisherName:c,mediaKey:a,favIconUrl:f}})})},a=()=>{const e=new URL(location.href);u.g(e.pathname)?(()=>{const e="https://www."+o.a,t=o.a,n=o.a,i=Object(r.b)();i&&i.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:e,publisherKey:t,publisherName:n,mediaKey:"",favIconUrl:""}})})():c(e)};var f=n(3);let d="";const l=e=>{e&&(e.url||"complete"===e.status)&&location.href!==d&&(d=location.href,a())};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(i.d()?a():document.addEventListener("readystatechange",(function(){i.d()&&a()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&a()})),f.a(o.b,l)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: redditBase.ts"))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return l}));var r=n(0);const i=(e,t)=>{if(!e)return"";let n="www";return t&&(n="old"),`https://${n}.reddit.com/user/${e}/`},o=e=>e.hostname.startsWith("old.")||e.hostname.startsWith("np."),u=e=>!!e&&(e.startsWith("/r/")&&e.includes("/comments/")),s=async(e,t)=>{if(!e)throw new Error("Invalid parameters");const n=i(e,t);if(!n)throw new Error("Invalid profile url");const o=await fetch(n);if(!o.ok){const e=r.f("Profile request failed",o);throw new Error(e)}return o.text()},c=e=>{if(!e.pathname||!e.pathname.startsWith("/user/"))return"";const t=e.pathname.split("/").filter(e=>e);return t&&0!==t.length?t.length<2?"":t[1]:""},a=e=>{if(!e)return"";const t=r.e(e,'hideFromRobots":','"isEmployee"');let n=r.e(t,'"id":"t2_','"');return n||(n=r.e(e,'target_fullname": "t2_','"')),n},f=e=>e?r.e(e,'accountIcon":"',"?"):"",d=e=>{if(!e)return"";let t=r.e(e,'username":"','"');return t||(t=r.e(e,'target_name": "','"')),t},l=e=>{if(["/","/coins","/contact","/login","/premium"].includes(e))return!0;const t=["/dev/","/help/","/wiki/"];for(const n of t)if(e.startsWith(n))return!0;return!(!e.startsWith("/r/")||u(e))}}});