/*!
 *   wildfire.auto.js
 * 
 *   wildfire@0.3.8
 *   Copyright (C) 2017-2018 LahK
 *   A drop-in replacement for other comment systems.
 * 
 *   You can get more infomation from https://wildfire.js.org
 * 
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 * 
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 * 
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
<<<<<<< HEAD
!function(e){function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var t={};i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=0)}([function(e,i){(()=>{function e(e){if(void 0===e||null===e)return;let i=null,t=null;"object"==typeof e?(i=e.url,t=e.loaded):"string"==typeof e&&(i=e);let n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=i,n.media="all",n.onload=(()=>{t&&t()}),document.head.appendChild(n)}function i(e,t){if(0===e.length)return void(t&&t());let n=e.shift(),a=document.createElement("script"),o=null,l=null,r=null;"object"==typeof n?(({url:o,shouldSkip:l,loaded:r}=n),l()?(r&&r(),i(e,t)):a.onload=(()=>{r&&r(),i(e,t)})):"string"==typeof n&&(o=n,a.onload=(()=>{i(e,t)})),a.src=o,document.head.appendChild(a)}function t(e){this.message=e,this.toString=(()=>this.message)}function n(){e(`https://unpkg.com/wildfire-dev/dist/${o}/static/wildfire.css`);let t=[];window.Vue||t.push("https://cdn.jsdelivr.net/npm/vue"),t.push("firebase"===o?"https://www.gstatic.com/firebasejs/4.6.2/firebase.js":"https://cdn.wilddog.com/sdk/js/2.5.17/wilddog.js"),t.push(`https://unpkg.com/wildfire-dev/dist/${o}/wildfire.min.js`),i(t,()=>{window.Vue.use(window.wildfire,{databaseProvider:o,databaseConfig:l,standbyDatabaseConfigs:r,pageURL:s,pageURLMode:f,pageTitle:d,theme:u,locale:c,defaultAvatarURL:w,plugins:p}),new window.Vue({el:"#wildfire",data:()=>({resetKey:0}),mounted(){window.$_wildfire_reset=((e,i)=>{const t=document.getElementById("wf-loading-modal");t&&(t.style.display="block"),window.wildfire.reset(window.Vue,e,i),this.resetKey+=1})}})})}function a(e){const i=window._i18n.t(e);let t=document.getElementById("wf-loading-modal");t.className=`wf wf-theme-${u}`;let n=t.children[1];n.innerHTML=i,n.style.color="red"}const{databaseProvider:o,databaseConfig:l,standbyDatabaseConfigs:r=[],pageTitle:d=document.title,pageURL:s,pageURLMode:f="normal",locale:c="en",theme:u="light",defaultAvatarURL:w="https://cdn.rawgit.com/cheng-kang/wildfire/088cf3de/resources/wildfire-avatar.svg",plugins:p=[]}=window.wildfireConfig();window._i18n=new function(e={},i=null,n="en"){return this.translation=e,this.locale=n,this.fallback=i,this.t=(e=>{let i=this.translation[this.locale];if(i||(i=this.translation[this.fallback]),!i)throw new t(`Translation for locale "${this.locale}" not found.`);const n=e.split(".");if(0===n.length)throw new t("Empty translation key.");for(let a=0;a<n.length;a++)if(!(i=i[n[a]]))return setTimeout(()=>{throw new t(`Translation for key "${e}" not found.`)}),e;return i}),{t:this.t}}({en:{error:{invalid_database_provider:'Please check your config: "databaseProvider" should be "firebase" or "wilddog".',wildfire_thread_not_found:'"wildfire-thread" not found, please follow the steps in documentation.',no_database_config:'Please check your config: missing "databaseConfig"'},text:{powering_wildfire:"Powering Wildfire..."}},"zh-CN":{error:{invalid_database_provider:'请检查你的配置： "databaseProvider" 应该为 "firebase" 或者 "wilddog"。',wildfire_thread_not_found:"未检测到 “wildfire-thread”，请依照文档所示步骤添加。",no_database_config:'请检查你的配置： 找不到 "databaseConfig"'},text:{powering_wildfire:"正在启动野火……"}}},"en",c),function(){const e=`.wildfire_thread{font-family:'Helvetica Neue',arial,sans-serif;width: 100%;margin:0 auto}[v-cloak]{display:none}#wf-loading-modal{font-size:12px;display:flex;flex-direction:column;height:300px;color:#656c7a;justify-content:center;align-items:center}#wf-loading-modal img{width:66px;height:66px}@keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-o-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-moz-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}.animate-flicker{-webkit-animation:flickerAnimation 1.5s infinite;-moz-animation:flickerAnimation 1.5s infinite;-o-animation:flickerAnimation 1.5s infinite;animation:flickerAnimation 1.5s infinite}`;let i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),document.head.appendChild(i),document.getElementsByClassName("wildfire_thread")[0].innerHTML=`\n      <div id="wf-loading-modal" class="wf wf-theme-${u} animate-flicker">\n        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 20.344-171.938-112.212-201.8 33.962 124.643-43.199 159.794-71.326 93.943-46.971 62.713-11.307 117.427-11.307 117.427-19.26 2.775-35.439-18.267-35.439-18.267-.145 2.592-.225 5.202-.225 7.83 0 76.383 61.921 138.303 138.303 138.303s138.303-61.921 138.303-138.303c0-12.27-1.605-24.163-4.604-35.489z' fill='%23f36b38'/%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 18.22-154.012-92.206-195.825v333.261c76.383 0 138.303-61.921 138.303-138.303 0-12.27-1.605-24.163-4.604-35.489z' fill='%23db450d'/%3E%3Cpath d='M316.654 364.964c0 33.498-27.156 60.654-60.654 60.654s-60.654-27.156-60.654-60.654c0-17.93 7.78-34.042 20.147-45.146 23.451 31.86 56.87-16.469 30.826-51.761 0-.001 70.335 8.813 70.335 96.907z' fill='%23fbda35'/%3E%3Cpath d='M256 270.385v155.232c33.498 0 60.654-27.156 60.654-60.654 0-67.563-41.371-88.492-60.654-94.578z' fill='%23f7ba35'/%3E%3C/svg%3E%0A" alt="Wildfire - Provided by Lahk">\n        <span>${window._i18n.t("text.powering_wildfire")}</span>\n      </div>\n      <div id="wildfire" v-cloak><wildfire :key="resetKey"></wildfire></div>\n      `}(),setTimeout(function(){0!==document.getElementsByClassName("wildfire_thread").length?"firebase"===o||"wilddog"===o?l?n():a("error.no_database_config"):a("error.invalid_database_provider"):a("error.wildfire_thread_not_found")},1e3)})()}]);
//# sourceMappingURL=wildfire.auto.js.map
=======
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){(()=>{function e(e){if(void 0===e||null===e)return;let t=null,i=null;"object"==typeof e?({url:t,loaded:i}=e):"string"==typeof e&&(t=e);const n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,n.media="all",n.onload=(()=>{i&&i()}),document.head.appendChild(n)}function t(e,i){if(0===e.length)return void(i&&i());const n=e.shift(),a=document.createElement("script");let o=null,l=null,r=null;"object"==typeof n?(({url:o,shouldSkip:l,loaded:r}=n),l()?(r&&r(),t(e,i)):a.onload=(()=>{r&&r(),t(e,i)})):"string"==typeof n&&(o=n,a.onload=(()=>{t(e,i)})),a.src=o,document.head.appendChild(a)}function i(e){this.message=e,this.toString=(()=>this.message)}function n(){e(`https://unpkg.com/wildfire-dev/dist/${o}/static/wildfire.css`);const i=[];window.Vue||i.push("https://cdn.jsdelivr.net/npm/vue"),i.push("firebase"===o?"https://www.gstatic.com/firebasejs/4.6.2/firebase.js":"https://cdn.wilddog.com/sdk/js/2.5.17/wilddog.js"),i.push(`https://unpkg.com/wildfire-dev/dist/${o}/wildfire.min.js`),t(i,()=>{window.Vue.use(window.wildfire,{databaseProvider:o,databaseConfig:l,standbyDatabaseConfigs:r,pageURL:s,pageURLMode:f,pageTitle:d,theme:w,locale:c,defaultAvatarURL:u,plugins:p}),new window.Vue({el:"#wildfire",data:()=>({resetKey:0}),mounted(){window.$_wildfire_reset=((e,t)=>{const i=document.getElementById("wf-loading-modal");i&&(i.style.display="block"),window.wildfire.reset(window.Vue,e,t),this.resetKey+=1})}})})}function a(e){const t=window.wfI18n.t(e),i=document.getElementById("wf-loading-modal");i.className=`wf wf-theme-${w}`;const n=i.children[1];n.innerHTML=t,n.style.color="red"}const{databaseProvider:o,databaseConfig:l,standbyDatabaseConfigs:r=[],pageTitle:d=document.title,pageURL:s,pageURLMode:f="normal",locale:c="en",theme:w="light",defaultAvatarURL:u="https://cdn.rawgit.com/cheng-kang/wildfire/088cf3de/resources/wildfire-avatar.svg",plugins:p=[]}=window.wildfireConfig();window.wfI18n=new function(e={},t=null,n="en"){return this.translation=e,this.locale=n,this.fallback=t,this.t=(e=>{let t=this.translation[this.locale];if(t||(t=this.translation[this.fallback]),!t)throw new i(`Translation for locale "${this.locale}" not found.`);const n=e.split(".");if(0===n.length)throw new i("Empty translation key.");for(let a=0;a<n.length;a+=1)if(!(t=t[n[a]]))return setTimeout(()=>{throw new i(`Translation for key "${e}" not found.`)}),e;return t}),{t:this.t}}({en:{error:{invalid_database_provider:'Please check your config: "databaseProvider" should be "firebase" or "wilddog".',wildfire_thread_not_found:'"wildfire-thread" not found, please follow the steps in documentation.',no_database_config:'Please check your config: missing "databaseConfig"'},text:{powering_wildfire:"Powering Wildfire..."}},"zh-CN":{error:{invalid_database_provider:'请检查你的配置： "databaseProvider" 应该为 "firebase" 或者 "wilddog"。',wildfire_thread_not_found:"未检测到 “wildfire-thread”，请依照文档所示步骤添加。",no_database_config:'请检查你的配置： 找不到 "databaseConfig"'},text:{powering_wildfire:"正在启动野火……"}}},"en",c),function(){const e=".wildfire_thread{font-family:'Helvetica Neue',arial,sans-serif;width: 100%;margin:0 auto}[v-cloak]{display:none}#wf-loading-modal{font-size:12px;display:flex;flex-direction:column;height:300px;color:#656c7a;justify-content:center;align-items:center}#wf-loading-modal img{width:66px;height:66px}@keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-o-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-moz-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}.animate-flicker{-webkit-animation:flickerAnimation 1.5s infinite;-moz-animation:flickerAnimation 1.5s infinite;-o-animation:flickerAnimation 1.5s infinite;animation:flickerAnimation 1.5s infinite}",t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),document.getElementsByClassName("wildfire_thread")[0].innerHTML=`\n      <div id="wf-loading-modal" class="wf wf-theme-${w} animate-flicker">\n        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 20.344-171.938-112.212-201.8 33.962 124.643-43.199 159.794-71.326 93.943-46.971 62.713-11.307 117.427-11.307 117.427-19.26 2.775-35.439-18.267-35.439-18.267-.145 2.592-.225 5.202-.225 7.83 0 76.383 61.921 138.303 138.303 138.303s138.303-61.921 138.303-138.303c0-12.27-1.605-24.163-4.604-35.489z' fill='%23f36b38'/%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 18.22-154.012-92.206-195.825v333.261c76.383 0 138.303-61.921 138.303-138.303 0-12.27-1.605-24.163-4.604-35.489z' fill='%23db450d'/%3E%3Cpath d='M316.654 364.964c0 33.498-27.156 60.654-60.654 60.654s-60.654-27.156-60.654-60.654c0-17.93 7.78-34.042 20.147-45.146 23.451 31.86 56.87-16.469 30.826-51.761 0-.001 70.335 8.813 70.335 96.907z' fill='%23fbda35'/%3E%3Cpath d='M256 270.385v155.232c33.498 0 60.654-27.156 60.654-60.654 0-67.563-41.371-88.492-60.654-94.578z' fill='%23f7ba35'/%3E%3C/svg%3E%0A" alt="Wildfire - Provided by Lahk">\n        <span>${window.wfI18n.t("text.powering_wildfire")}</span>\n      </div>\n      <div id="wildfire" v-cloak><wildfire :key="resetKey"></wildfire></div>\n      `}(),setTimeout(function(){0!==document.getElementsByClassName("wildfire_thread").length?"firebase"===o||"wilddog"===o?l?n():a("error.no_database_config"):a("error.invalid_database_provider"):a("error.wildfire_thread_not_found")},1e3)})()}]);
//# sourceMappingURL=wildfire.auto.js.map
>>>>>>> use prettier & update eslint & clean up and rebuild
