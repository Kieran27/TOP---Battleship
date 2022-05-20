(()=>{"use strict";var r={28:(r,e,n)=>{n.d(e,{Z:()=>l});var t=n(81),a=n.n(t),o=n(645),i=n.n(o)()(a());i.push([r.id,'\r\n/* Custom Variables */\r\n:root {\r\n  /* Light Mode Colors */\r\n  --Clr-Blue-Grey: rgb(105, 124, 154);\r\n  --Clr-Blue-Mid: rgb(75, 106, 155);\r\n  --Clr-Grey-Dark: rgb(43, 52, 66);\r\n\r\n  --Clr-White-Off: rgb(246, 248, 255);\r\n  --Clr-White: rgb(254, 254, 254);\r\n\r\n  /* Dark Mode Colors */\r\n  --Clr-White-Pure: rgb(255, 255, 255);\r\n  --Clr-Sea-Blue: rgb(20, 29, 47);\r\n  --Clr-Dark-Blue: rgb(30, 42, 71);\r\n\r\n  /* Shared Colors */\r\n  --Clr-Blue-Primary: rgb(0, 121, 255);\r\n  --Clr-Ocean-Blue: #bae6fd;\r\n\r\n  /* Font */\r\n  --Primary-Font: \'Space Mono\', monospace;\r\n\r\n  --Box-Shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n/* Default Styling */\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: var(--Primary-Font);\r\n  background: var(--Clr-White-Off);\r\n  height: 100vh;\r\n}\r\n\r\nh1 {\r\n  font-family: var(--Primary-Font);\r\n  color: var(--Clr-Grey-Dark);\r\n  font-size: 2.5rem;\r\n  line-height: 2.375rem;\r\n  font-weight: 700;\r\n}\r\n\r\nh2 {\r\n  font-family: var(--Primary-Font);\r\n  font-size: 1.375rem;\r\n  line-height: 2rem;\r\n  margin: 0;\r\n}\r\n\r\nh3 {\r\n  font-family: var(--Primary-Font);\r\n  font-weight: 400;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  line-height: 1.5rem;\r\n  margin: 0;\r\n}\r\n\r\nh4 {\r\n  font-family: var(--Primary-Font);\r\n  color: var(--Clr-Blue-Mid);\r\n  font-size: 0.8125rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\np {\r\n  font-family: var(--Primary-Font);\r\n  color: var(--Clr-Grey-Dark);\r\n  font-size: 0.9375rem;\r\n  line-height: 1.5625rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  min-height: calc(100vh - 55px);\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  background: var(--Clr-White-Off);\r\n  padding: 0 4rem;\r\n}\r\n\r\nmain {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding-top: 7rem;\r\n  flex: 1;\r\n}\r\n\r\n.announcer-container {\r\n  width: 100%;\r\n  text-align: center;\r\n  /* background: #e5e7eb; */\r\n  margin-bottom: 2rem;\r\n  border-radius: 20px;\r\n  box-shadow: var(--Box-Shadow);\r\n  border: 1px solid #e5e7eb;\r\n}\r\n\r\n.gameboard-container-main  {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  background: var(--Clr-Blue-Mid);\r\n  margin-bottom: 2rem;\r\n  padding: 0.75rem 0;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.3px;\r\n  color: var(--Clr-White-Off);\r\n  max-width: 500px;\r\n  box-shadow: var(--Box-Shadow)\r\n}\r\n\r\n.gameboard-player-container {\r\n  /* padding-right: 5rem; */\r\n}\r\n\r\n.gameboard-ai-container {\r\n  display: none;\r\n  /* padding-left: 5rem; */\r\n}\r\n\r\n.gameboard-player {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  grid-template-columns: repeat(10, auto);\r\n  grid-gap: 0.2rem;\r\n  /* margin-bottom: 2rem; */\r\n}\r\n\r\n.gameboard-AI {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  grid-template-columns: repeat(10, auto);\r\n  grid-gap: 0.2rem;\r\n}\r\n\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  padding: 0.25rem;\r\n  background: black;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  transition: 0.05s;\r\n}\r\n\r\n.cell-AI {\r\n  background: #9ca3af;\r\n  transition: 0.3s;\r\n}\r\n\r\n.cell-Human {\r\n  cursor: cell;\r\n  background: var(--Clr-Ocean-Blue);\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.graveyard-container {\r\n  margin-top: 1rem;\r\n  max-width: 500px;\r\n}\r\n\r\n.graveyard-container h3 {\r\n  margin-left: 40px;\r\n}\r\n\r\n.graveyard-container ul {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.graveyard-container li {\r\n  list-style-type: none;\r\n  padding: 0 2rem 1rem 0;\r\n}\r\n\r\n[data-name="graveyard-player"] {\r\n  display: none;\r\n}\r\n\r\n[data-name="graveyard-ai"] {\r\n  display: none;\r\n}\r\n\r\n[data-name="ai-header"] {\r\n  display: none;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-shrink: 0;\r\n  padding: 0 4rem;\r\n  background: var(--Clr-Blue-Grey);\r\n  color: white;\r\n}\r\n\r\n.accreditation {\r\n  color: #e5e5e5;\r\n}\r\n\r\n.player-placement-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 0.5rem;\r\n  margin-left: 1.5rem;\r\n  max-width: 400px;\r\n}\r\n\r\n.test-ship {\r\n  display: inline-flex;\r\n  margin: 0.5rem;\r\n  cursor: grab;\r\n  transition: 0.2s\r\n}\r\n\r\n.test-ship:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n.test {\r\n  margin-right: 0.2rem;\r\n  width: 35px;\r\n  height: 35px;\r\n  background: green;\r\n}\r\n\r\n.placement-rotate-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.btn-rotate {\r\n  background: var(--Clr-Blue-Primary);\r\n  font-family: var(--Primary-Font);\r\n  padding: 1rem 1.5rem;\r\n  font-weight: bold;\r\n  font-size: 1.1rem;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  color: var(--Clr-White-Off);\r\n  box-shadow: var(--Box-Shadow);\r\n  cursor: pointer;\r\n}\r\n\r\n/* Utility Clasess for JS Implementation */\r\n.strikethrough {\r\n  text-decoration: line-through;\r\n  color: pink;\r\n}\r\n\r\n.toggle-display {\r\n  display: block;\r\n}\r\n\r\n.rotate {\r\n  display: block;\r\n}\r\n\r\n.rotate-padding {\r\n  margin-right: 0;\r\n  margin-bottom: 0.2rem;\r\n}\r\n\r\n.player-gameboard-init {\r\n  padding-right: 5rem;\r\n}\r\n\r\n.ai-gameboard-init {\r\n  display: block;\r\n  padding-left: 5rem;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n\r\n  .player-gameboard-init {\r\n    padding-right: 2rem;\r\n  }\r\n\r\n  .ai-gameboard-init {\r\n    padding-left: 2rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  main {\r\n    padding-top: 0;\r\n  }\r\n\r\n  .player-gameboard-init {\r\n    padding: 0 2rem;\r\n  }\r\n\r\n  .ai-gameboard-init {\r\n    padding: 0 2rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 510px) {\r\n\r\n.header, .footer {\r\n  padding: 0 1.7rem;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .wrapper {\r\n    display: flex;\r\n    min-height: calc(100vh);\r\n    flex-direction: column;\r\n  }\r\n\r\n  .cell {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .announcer-container {\r\n    width: 90%;\r\n    display: flex;\r\n    text-align: center;\r\n    margin-left: 1.4rem;\r\n    justify-content: center;\r\n  }\r\n\r\n  .test {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .ai-graveyard-container h3 {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .ai-graveyard-container ul {\r\n    padding: 0;\r\n    margin-left: 20px;\r\n  }\r\n}\r\n',""]);const l=i},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,a,o){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<r.length;c++){var d=[].concat(r[c]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:r=>{r.exports=function(r){return r[1]}},91:r=>{r.exports=function(r,e){return e||(e={}),r?(r=String(r.__esModule?r.default:r),e.hash&&(r+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(r)?'"'.concat(r,'"'):r):r}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var o={},i=[],l=0;l<r.length;l++){var s=r[l],c=t.base?s[0]+t.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var g=a(h,t);t.byIndex=l,e.splice(l,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,a){var o=t(r=r||[],a=a||{});return function(r){r=r||[];for(var i=0;i<o.length;i++){var l=n(o[i]);e[l].references--}for(var s=t(r,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},905:(r,e,n)=>{r.exports=n.p+"b1bd8d9f08decd644b13.ico"},529:(r,e,n)=>{r.exports=n.p+"f6a830583d1b95457c64.js"},992:(r,e,n)=>{r.exports=n.p+"0035c307a36c17babb8d.png"}},e={};function n(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return r[t](o,o.exports,n),o.exports}n.m=r,n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r;n.g.importScripts&&(r=n.g.location+"");var e=n.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var t=e.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=r})(),n.b=document.baseURI||self.location.href,(()=>{const r=(()=>{const r=document.querySelector(".gameboard-player"),e=document.querySelector(".gameboard-AI"),n=document.getElementById("announcer-txt"),t=r=>{n.textContent=r},a=(r,e,n)=>{const t=e.x,a=e.y,o=r.board;return o[t][a].hasShip&&o[t][a].hit?(n.style.background="red",n.textContent="X",n):o[t][a].hasShip&&"computer"!==r.boardInfo.belongsTo?(n.style.background="green",n):!o[t][a].hasShip&&o[t][a].hit?(n.textContent="•",n.style.color="black",n):void 0};return{createBoard:n=>{for(let t=0;t<100;t++){const t=document.createElement("div");switch(t.classList.add("cell"),n){case!0:r.appendChild(t),t.classList.add("cell-Human");break;case!1:e.appendChild(t),t.classList.add("cell-AI"),t.addEventListener("click",l.cellInput);break;default:return}}},renderMessage:t,renderBoard:r=>{document.querySelectorAll(".cell-Human").forEach(((e,n)=>{const t=l.getCoordinates(n);a(r,t,e)}))},renderBoardAI:r=>{document.querySelectorAll(".cell-AI").forEach(((e,n)=>{const t=l.getCoordinates(n);a(r,t,e)}))},initUIElements:()=>{const r=document.querySelector(".gameboard-player-container"),e=document.querySelector(".gameboard-ai-container"),n=document.querySelector(".player-placement-container"),t=document.querySelector("[data-name='rotate-container']"),a=document.querySelector("[data-name='ai-header']"),o=document.querySelector("[data-name='graveyard-player']"),i=document.querySelector("[data-name='graveyard-ai']");r.classList.toggle("player-gameboard-init"),e.classList.toggle("ai-gameboard-init"),a.classList.toggle("toggle-display"),o.classList.toggle("toggle-display"),i.classList.toggle("toggle-display"),n.remove(),t.remove()},rotateShips:()=>{document.querySelectorAll(".test-ship").forEach((r=>{r.classList.toggle("rotate"),"horizontal"===r.dataset.direction?r.dataset.direction="vertical":r.dataset.direction="horizontal"})),document.querySelectorAll(".test").forEach((r=>{r.classList.toggle("rotate-padding")}))},updateGraveyard:(r,e)=>{const n=r.boardInfo.belongsTo;document.querySelector(`[data-owner=${n}]`).querySelector(`#${e}`).classList.toggle("strikethrough")},gameOver:r=>{document.querySelectorAll(".cell-AI").forEach((r=>{r.removeEventListener("click",l.cellInput)})),t(`Game Over! ${r.boardInfo.belongsTo} Has Lost The Game!`)}}})();class e{constructor(r,e,n){this.id=r,this.length=e,this.isVertical=n,this.hits=new Array(this.length).fill(""),this.sunk=!1}hitsArray(r){return new Array(r).fill("")}hit(r,e){return this.hits[r]="X",this.isSunk(e),this.hits}isSunk(e){return!!this.hits.every((r=>"X"===r))&&(r.renderMessage(`${e.boardInfo.belongsTo}'s ${this.id} Sunk!`),r.updateGraveyard(e,this.id),this.sunk=!0,this.sunk)}}class t{constructor(r){this.board=[],this.boardInfo.belongsTo=r,this.initialise()}boardInfo={belongsTo:"",missedAttacks:[],shipsArray:[]};initialise(){this.board=[new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10)];for(let r=0;r<this.board.length;r++)for(let e=0;e<this.board[r].length;e++)this.board[r][e]={hasShip:!1,hit:!1,ship:null}}resetBoard(){this.board=[],this.initialise()}placeShip(r,e,n){const t=this.board[e][n],a=10-n,o=e+1;if(r.length>10)return"invalid Ship";if(t.hasShip)return"Invalid Position!";if(r.isVertical){if(o<r.length)return"Ship Overflow!";let t=[];for(let a=e;a>e-r.length;a--)t.push(this.board[a][n].hasShip);if(t.includes(!0))return"No Ship Overlap!";this.boardInfo.shipsArray.push(r);let a=0;for(let t=e;t>e-r.length;t--)this.board[t][n].hasShip=!0,this.board[t][n].ship=r.id,this.board[t][n].position=a,a++}else if(!r.isVertical){if(a<r.length)return"Ship Overflow!";let t=[];for(let a=n;a<n+r.length;a++)t.push(this.board[e][a].hasShip);if(t.includes(!0))return"No Ship Overlap!";this.boardInfo.shipsArray.push(r);let o=0;for(let t=n;t<n+r.length;t++)this.board[e][t].hasShip=!0,this.board[e][t].ship=r.id,this.board[e][t].position=o,o++}return!0}recieveAttack(r,e){const n=this.board[r][e],t=this.boardInfo;if(!n.hasShip||n.hasShip&&n.hit)return n.hit=!0,t.missedAttacks.push([r,e]),"Miss!";const a=n.ship,o=n.position,i=t.shipsArray.findIndex((r=>r.id===a));return n.hit=!0,this.boardInfo.shipsArray[i].hit(o,this),"Hit!"}allShipsSunk(){return!!this.boardInfo.shipsArray.every((r=>!0===r.sunk))&&(console.log(`${this.boardInfo.belongsTo} Has Just Lost The Game`),!0)}}class a{constructor(r,e){this.name=r,this.type=e}playerInfo={currentTurn:!0,attacks:[]};placeAttack(r,e,n){return n.recieveAttack(r,e)}aiPlaceAttack(r){const e=this.getRandomNumber(),n=this.getRandomNumber();return this.checkForSameAttack(e,n)?this.aiPlaceAttack(r):(this.playerInfo.attacks.push([e,n]),r.recieveAttack(e,n))}checkForSameAttack(r,e){const n=this.playerInfo.attacks;for(let t=0;t<n.length;t++)if(n[t][0]===r&&n[t][1]===e)return!0;return!1}attackAdjacentSpots(){const r=this.playerInfo.attacks,e=r[r.length-1];console.log(e);let n=e;n[0]=n[0]+1,n[1]=n[1]+1,console.log(n)}getRandomNumber(){return Math.floor(10*Math.random())}}const o=(()=>{const r=document.querySelector(".gameboard-player"),e=document.querySelector(".gameboard-AI"),n=document.getElementById("announcer-txt"),t=r=>{n.textContent=r},a=(r,e,n)=>{const t=e.x,a=e.y,o=r.board;return o[t][a].hasShip&&o[t][a].hit?(n.style.background="red",n.textContent="X",n):o[t][a].hasShip&&"computer"!==r.boardInfo.belongsTo?(n.style.background="green",n):!o[t][a].hasShip&&o[t][a].hit?(n.textContent="•",n.style.color="black",n):void 0};return{createBoard:n=>{for(let t=0;t<100;t++){const t=document.createElement("div");switch(t.classList.add("cell"),n){case!0:r.appendChild(t),t.classList.add("cell-Human");break;case!1:e.appendChild(t),t.classList.add("cell-AI"),t.addEventListener("click",l.cellInput);break;default:return}}},renderMessage:t,renderBoard:r=>{document.querySelectorAll(".cell-Human").forEach(((e,n)=>{const t=l.getCoordinates(n);a(r,t,e)}))},renderBoardAI:r=>{document.querySelectorAll(".cell-AI").forEach(((e,n)=>{const t=l.getCoordinates(n);a(r,t,e)}))},initUIElements:()=>{const r=document.querySelector(".gameboard-player-container"),e=document.querySelector(".gameboard-ai-container"),n=document.querySelector(".player-placement-container"),t=document.querySelector("[data-name='rotate-container']"),a=document.querySelector("[data-name='ai-header']"),o=document.querySelector("[data-name='graveyard-player']"),i=document.querySelector("[data-name='graveyard-ai']");r.classList.toggle("player-gameboard-init"),e.classList.toggle("ai-gameboard-init"),a.classList.toggle("toggle-display"),o.classList.toggle("toggle-display"),i.classList.toggle("toggle-display"),n.remove(),t.remove()},rotateShips:()=>{document.querySelectorAll(".test-ship").forEach((r=>{r.classList.toggle("rotate"),"horizontal"===r.dataset.direction?r.dataset.direction="vertical":r.dataset.direction="horizontal"})),document.querySelectorAll(".test").forEach((r=>{r.classList.toggle("rotate-padding")}))},updateGraveyard:(r,e)=>{const n=r.boardInfo.belongsTo;document.querySelector(`[data-owner=${n}]`).querySelector(`#${e}`).classList.toggle("strikethrough")},gameOver:r=>{document.querySelectorAll(".cell-AI").forEach((r=>{r.removeEventListener("click",l.cellInput)})),t(`Game Over! ${r.boardInfo.belongsTo} Has Lost The Game!`)}}})(),i=n=>{let t=0;function a(e){i(!0),e.target.getAttribute("data-name")||(e.target=e.target.parentElement),r.renderMessage(`Place Your ${e.target.getAttribute("data-name")}`),e.dataTransfer.setData("text/plain",e.target.getAttribute("data-name"))}function o(){i(!1),r.renderMessage("Place Your Remaining Ships")}function i(r){r?document.querySelectorAll(".cell-Human").forEach(((r,e)=>{r.addEventListener("dragenter",c),r.addEventListener("dragover",s),r.addEventListener("dragleave",d),r.addEventListener("drop",u)})):document.querySelectorAll(".cell-Human").forEach(((r,e)=>{r.removeEventListener("dragenter",c),r.removeEventListener("dragover",s),r.removeEventListener("dragleave",d),r.removeEventListener("drop",u)}))}function s(r){r.preventDefault()}function c(r){r.preventDefault()}function d(){console.log("I have left the stratosphere")}function u(a){const o=a.target,i=a.dataTransfer.getData("text/plain"),s=document.querySelector(`[data-name=${i}]`),c=i,d=s.querySelectorAll(".test").length,u=s.getAttribute("data-direction");document.querySelectorAll(".cell-Human").forEach(((a,i)=>{if(a===o){const a=l.getCoordinates(i),o=new e(c,d,"horizontal"!==u);!0===n.placeShip(o,a.x,a.y)&&(s.remove(),t++,r.renderBoard(n),5===t&&(l.initAI(),r.initUIElements(),r.renderMessage("Make Your Move!")))}}))}document.getElementById("btn-rotate").addEventListener("click",r.rotateShips),document.querySelectorAll(".test-ship").forEach((r=>{r.addEventListener("dragstart",a),r.addEventListener("dragend",o)}))},l=(()=>{let r,n,l,s;const c=r=>{document.querySelectorAll(".cell-AI").forEach(((e,n)=>{e===r.target&&d(r.target,n)}))},d=(e,n)=>{e.removeEventListener("click",c);const t=h(n);r.placeAttack(t.x,t.y,s),o.renderBoardAI(s),p(s)?o.gameOver(s):u()},u=()=>{const r=n.playerInfo.attacks;if(r[r.length-1],n.aiPlaceAttack(l),o.renderBoard(l),p(l))return o.gameOver(l)},p=r=>!!r.allShipsSunk()&&(console.log("Winner!"),!0),h=r=>{let e=parseInt(r.toString().split("")[0]),n=parseInt(r.toString().split("")[1]);return r<10&&(n=parseInt(e),e=0),{x:e,y:n}},g=(e,...n)=>{const t=()=>r.getRandomNumber();n.forEach((r=>{const n=e.placeShip(r,t(),t());return"Invalid Position!"===n||"Ship Overflow!"===n||"No Ship Overlap!"===n?g(e,r):void 0}))};return{init:()=>{r=new a("player","human"),l=new t(r.name),o.createBoard(!0),i(l),o.renderBoard(l)},cellInput:c,getCoordinates:h,checkForWinner:p,player1:r,ai:n,playerGameboard:l,aiGameboard:s,initAI:()=>{n=new a("computer","AI"),s=new t(n.name);const r=new e("carrier",5,!0),i=new e("battleship",4,!0),l=new e("cruiser",3,!0),c=new e("submarine",3,!1),d=new e("destroyer",2,!1);o.createBoard(!1),o.renderBoard(s),g(s,r,d,c,i,l),o.renderMessage("Make Your Move!")}}})();var s=n(91),c=n.n(s),d=new URL(n(905),n.b),u=new URL(n(529),n.b),p=new URL(n(992),n.b);c()(d),c()(u),c()(p);var h=n(379),g=n.n(h),m=n(795),f=n.n(m),y=n(569),b=n.n(y),v=n(565),x=n.n(v),S=n(216),w=n.n(S),A=n(589),k=n.n(A),I=n(28),C={};C.styleTagTransform=k(),C.setAttributes=x(),C.insert=b().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=w(),g()(I.Z,C),I.Z&&I.Z.locals&&I.Z.locals,l.init()})()})();