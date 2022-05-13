(()=>{"use strict";var e={28:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(81),a=t.n(n),o=t(645),i=t.n(o)()(a());i.push([e.id,".gameboard-container {\r\n  padding: 1rem;\r\n}\r\n\r\n.gameboard-player {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  grid-template-columns: repeat(10, auto);\r\n  grid-gap: 0.2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.gameboard-AI {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  grid-template-columns: repeat(10, auto);\r\n  grid-gap: 0.2rem;\r\n}\r\n\r\n.cell {\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 0.25rem;\r\n  background: black;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n  transition: 0.05s;\r\n\r\n}\r\n\r\n.cell-Human {\r\n  cursor: cell;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var h=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)r[h].references++,r[h].updater(p);else{var f=a(p,n);n.byIndex=s,r.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);r[s].references--}for(var c=n(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{const e=(()=>{const e=document.querySelector(".gameboard-player"),r=document.querySelector(".gameboard-AI"),t=(e,r,t)=>{const n=r.x,a=r.y,o=e.board;return o[n][a].hasShip&&o[n][a].hit?(t.style.background="red",t):o[n][a].hasShip?(t.style.background="green",t):!o[n][a].hasShip&&o[n][a].hit?(t.style.background="blue",t):void 0};return{createBoard:t=>{for(let n=0;n<100;n++){const n=document.createElement("div");switch(n.classList.add("cell"),t){case!0:e.appendChild(n),n.classList.add("cell-Human");break;case!1:r.appendChild(n),n.classList.add("cell-AI"),n.addEventListener("click",i.cellInput);break;default:return}}},updateBoard:e=>{switch(e){case"Hit!":e.innerText="X",e.style.color="white";break;case"Miss!":e.style.background="red";break;default:e.style.background="inherit"}},renderBoard:e=>{document.querySelectorAll(".cell-Human").forEach(((r,n)=>{const a=i.getCoordinates(n);t(e,a,r)}))},renderBoardAI:e=>{document.querySelectorAll(".cell-AI").forEach(((r,n)=>{const a=i.getCoordinates(n);t(e,a,r)}))},gameOver:()=>{document.querySelectorAll(".cell-AI").forEach((e=>{e.removeEventListener("click",i.cellInput)}))}}})();class r{constructor(e){this.board=[],this.boardInfo.belongsTo=e,this.initialise()}boardInfo={belongsTo:"",missedAttacks:[],shipsArray:[]};initialise(){this.board=[new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10),new Array(10)];for(let e=0;e<this.board.length;e++)for(let r=0;r<this.board[e].length;r++)this.board[e][r]={hasShip:!1,hit:!1,ship:null}}resetBoard(){this.board=[],this.initialise()}placeShip(e,r,t){const n=this.board[r][t],a=10-t,o=r+1;if(e.length>10)return"invalid Ship";if(n.hasShip)return"Invalid Position!";if(e.isVertical){if(o<e.length)return"Ship Overflow!";let n=[];for(let a=r;a>r-e.length;a--)n.push(this.board[a][t].hasShip);if(n.includes(!0))return"No Ship Overlap!";this.boardInfo.shipsArray.push(e);let a=0;for(let n=r;n>r-e.length;n--)this.board[n][t].hasShip=!0,this.board[n][t].ship=e.id,this.board[n][t].position=a,a++}else if(!e.isVertical){if(a<e.length)return"Ship Overflow!";let n=[];for(let a=t;a<t+e.length;a++)n.push(this.board[r][a].hasShip);if(n.includes(!0))return"No Ship Overlap!";this.boardInfo.shipsArray.push(e);let o=0;for(let n=t;n<t+e.length;n++)this.board[r][n].hasShip=!0,this.board[r][n].ship=e.id,this.board[r][n].position=o,o++}return this.board}recieveAttack(e,r){const t=this.board[e][r],n=this.boardInfo;if(!t.hasShip||t.hasShip&&t.hit)return t.hit=!0,n.missedAttacks.push([e,r]),"Miss!";const a=t.ship,o=t.position,i=n.shipsArray.findIndex((e=>e.id===a));return t.hit=!0,this.boardInfo.shipsArray[i].hit(o,this),"Hit!"}allShipsSunk(){return console.log(this.boardInfo.shipsArray),!!this.boardInfo.shipsArray.every((e=>!0===e.sunk))&&(alert(`${this.boardInfo.belongsTo} Has Just Lost The Game`),e.gameOver(),`${this.boardInfo.belongsTo} Has Just Lost The Game`)}}class n{constructor(e,r){this.name=e,this.type=r}playerInfo={currentTurn:!0,attacks:[]};placeAttack(e,r,t){return t.recieveAttack(e,r)}aiPlaceAttack(e){const r=this.getRandomNumber(),t=this.getRandomNumber();return this.checkForSameAttack(r,t)?this.aiPlaceAttack(e):(this.playerInfo.attacks.push([r,t]),e.recieveAttack(r,t))}checkForSameAttack(e,r){const t=this.playerInfo.attacks;for(let n=0;n<t.length;n++)if(t[n][0]===e&&t[n][1]===r)return!0;return!1}attackAdjacentSpots(e){const r=this.playerInfo.attacks;return r[r.length-1],placeAttack()}getRandomNumber(){return Math.floor(10*Math.random())}}class a{constructor(e,r,t){this.id=e,this.length=r,this.isVertical=t,this.hits=new Array(this.length).fill(""),this.sunk=!1}hitsArray(e){return new Array(e).fill("")}hit(e,r){return this.hits[e]="X",this.isSunk(r),this.hits}isSunk(e){return!!this.hits.every((e=>"X"===e))&&(this.sunk=!0,console.log(`${this.id} Sunk!`),e.allShipsSunk())}}const o=(()=>{const e=document.querySelector(".gameboard-player"),r=document.querySelector(".gameboard-AI"),t=(e,r,t)=>{const n=r.x,a=r.y,o=e.board;return o[n][a].hasShip&&o[n][a].hit?(t.style.background="red",t):o[n][a].hasShip?(t.style.background="green",t):!o[n][a].hasShip&&o[n][a].hit?(t.style.background="blue",t):void 0};return{createBoard:t=>{for(let n=0;n<100;n++){const n=document.createElement("div");switch(n.classList.add("cell"),t){case!0:e.appendChild(n),n.classList.add("cell-Human");break;case!1:r.appendChild(n),n.classList.add("cell-AI"),n.addEventListener("click",i.cellInput);break;default:return}}},updateBoard:e=>{switch(e){case"Hit!":e.innerText="X",e.style.color="white";break;case"Miss!":e.style.background="red";break;default:e.style.background="inherit"}},renderBoard:e=>{document.querySelectorAll(".cell-Human").forEach(((r,n)=>{const a=i.getCoordinates(n);t(e,a,r)}))},renderBoardAI:e=>{document.querySelectorAll(".cell-AI").forEach(((r,n)=>{const a=i.getCoordinates(n);t(e,a,r)}))},gameOver:()=>{document.querySelectorAll(".cell-AI").forEach((e=>{e.removeEventListener("click",i.cellInput)}))}}})(),i=(()=>{let e,t,i,s;const c=r=>{document.querySelectorAll(".cell-AI").forEach(((t,n)=>{if(t===r.target){r.target.removeEventListener("click",c);const t=d(n);e.placeAttack(t.x,t.y,s),o.renderBoardAI(s),l()}}))},l=()=>{t.aiPlaceAttack(i),o.renderBoard(i)},d=e=>{let r=parseInt(e.toString().split("")[0]),t=parseInt(e.toString().split("")[1]);return e<10&&(t=parseInt(r),r=0),{x:r,y:t}},u=(r,...t)=>{const n=()=>e.getRandomNumber();t.forEach((e=>{const t=r.placeShip(e,n(),n());return console.log(t),"Invalid Position!"===t||"Ship Overflow!"===t||"No Ship Overlap!"===t?u(r,e):void 0}))};return{init:()=>{e=new n("player","human"),t=new n("computer","AI"),i=new r(e.name),s=new r(t.name);const c=new a("carrier",5,!0),l=new a("battleship",4,!0),d=new a("cruiser",3,!0),h=new a("submarine",3,!1),p=new a("destroyer",2,!1),f=new a("carrier",5,!0),m=new a("battleship",4,!0),y=new a("cruiser",3,!0),b=new a("submarine",3,!1),g=new a("destroyer",2,!1);i.placeShip(c,7,7),i.placeShip(p,4,4),i.placeShip(h,2,4),i.placeShip(l,5,9),i.placeShip(d,7,1),u(s,f,g,b,m,y),o.createBoard(!0),o.createBoard(!1),o.renderBoard(i)},cellInput:c,getCoordinates:d}})();var s=t(379),c=t.n(s),l=t(795),d=t.n(l),u=t(569),h=t.n(u),p=t(565),f=t.n(p),m=t(216),y=t.n(m),b=t(589),g=t.n(b),v=t(28),A={};A.styleTagTransform=g(),A.setAttributes=f(),A.insert=h().bind(null,"head"),A.domAPI=d(),A.insertStyleElement=y(),c()(v.Z,A),v.Z&&v.Z.locals&&v.Z.locals,i.init()})()})();