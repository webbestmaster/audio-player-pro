module.exports=(()=>{var e={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},585:(e,t,n)=>{var r=n(8),a=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},38:(e,t,n)=>{var r=n(858),a=n(884),o=n(379),i=n(521);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},8:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:(e,t,n)=>{var r=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},294:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Audio:()=>B,AudioPlayer:()=>ne,AudioPlayerControlSprite:()=>c});const r=require("react");var a=n.n(r),o="audio-player-icon-id-prefix-",i="#5a5a5a";function c(){return a().createElement("svg",{className:"f3cc59"},a().createElement("symbol",{id:o+"button-pause-playlist",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:"#4285f4"})),a().createElement("symbol",{id:o+"button-pause",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M14 19h4V5h-4M6 19h4V5H6v14z",fill:i})),a().createElement("symbol",{id:o+"button-play",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8 5.14v14l11-7-11-7z",fill:i})),a().createElement("symbol",{id:o+"button-track-list",viewBox:"-1 -1 23 23",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M19 9H2v2h17V9m0-4H2v2h17V5M2 15h13v-2H2v2m15-2v6l5-3-5-3z",fill:i})),a().createElement("symbol",{id:o+"button-prev-track",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z",fill:i})),a().createElement("symbol",{id:o+"button-next-track",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z",fill:i})),a().createElement("symbol",{id:o+"button-repeat",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z",fill:i})),a().createElement("symbol",{id:o+"button-repeat-one",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z",fill:i})),a().createElement("symbol",{id:o+"button-shuffle",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M14.83 13.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13M14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4m-9.41 5.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z",fill:i})),a().createElement("symbol",{id:o+"button-sound-off",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M12 4L9.91 6.09 12 8.18M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.916 8.916 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63z",fill:i})),a().createElement("symbol",{id:o+"button-sound-on",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:i})),a().createElement("symbol",{id:o+"button-download",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",fill:i})))}var l=n(38),u=n.n(l);function s(){for(var e=[],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(i)if("string"!=typeof i)for(var c=Object.keys(i),l=0,u=c;l<u.length;l++){var s=u[l];i[s]&&e.push(s)}else e.push(i)}return e.join(" ")}var f="playing",m="paused",d={none:"none",all:"all",one:"one"},p=Object.keys(d).map((function(e){return d[e]})),v={isTrackListOpen:!0,activeIndex:0,isShuffleOn:!1,isMuted:!1,repeatingState:d.none},h=n(713),b=n.n(h);function y(e){var t=e.className,n=e.imageId;return a().createElement("svg",{className:t},a().createElement("use",{xlinkHref:n}))}function g(e){var t=e.onClick,n=e.imageId,r=e.isActive,i=e.ariaLabel,c=e.className,l=s("_7e7b1e",b()({},"d03524",r),c);return a().createElement("button",{"aria-label":i,className:l,onClick:t,type:"button"},a().createElement(y,{className:"_59d228",imageId:"#"+o+n}))}function k(e){return{minutes:String(Math.floor(e/60)),seconds:String(Math.floor(e%60)).padStart(2,"0")}}function w(e){var t=e.currentTime,n=e.fullTime,r=e.className,o=k(t),i=o.minutes,c=o.seconds,l=k(n),u=l.minutes,f=l.seconds;return a().createElement("span",{className:s("_547c58",r)},i,":",c," / ",u,":",f)}var E="undefined"!=typeof window,S="undefined"!=typeof navigator,C=S?navigator.userAgent:"",x=!(!S||!E)&&/iPad|iPhone|iPod/.test(C)&&!window.MSStream,T=!!S&&/(android)/i.test(C),M=!x&&!T&&E;function P(e){var t,n=(0,r.useState)(!1),o=u()(n,2),i=o[0],c=o[1],l=(0,r.useRef)(),f=e.className,m=e.isDisable,d=e.progress,p=e.onChange,v=e.ariaLabel;function h(){c(!0)}function y(){c(!1)}var g=s("dd875e",f,(t={},b()(t,"_911595",i),b()(t,"_88628d",!0===m),t));return a().createElement("div",{className:g,onMouseDown:h,onMouseUp:y,onTouchEnd:y,onTouchStart:h},a().createElement("div",{className:"d51c7c"},a().createElement("div",{className:"_407fe2",style:{transform:"translateZ(0) scaleX(".concat(d||0,")")}})),a().createElement("div",{className:"_29c928"},a().createElement("div",{className:"_98d7c4",style:{left:"".concat(100*d,"%")}})),a().createElement("input",{"aria-label":v,className:"c405b1",defaultValue:0,max:1,min:0,onChange:function(){var e;p((e=l.current)?Number.parseFloat(e.value):0)},ref:l,step:.001,type:"range"}))}var N={play:"play",pause:"pause",seekbackward:"seekbackward",seekforward:"seekforward",previoustrack:"previoustrack",nexttrack:"nexttrack"};function L(e,t){"undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator&&("undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator&&(navigator.mediaSession.metadata=null,Object.keys(N).forEach((function(e){navigator.mediaSession.setActionHandler(e,null)}))),navigator.mediaSession.metadata=new MediaMetadata(e),t&&Object.keys(t).forEach((function(e){navigator.mediaSession.setActionHandler(e,t[e])})))}function O(e){var t=e.isRender,n=e.children;return t?n:null}function B(e){var t=e.src,n=e.mediaMetadata,o=e.className,i=e.onDidMount,c=e.downloadFileName,l=e.useRepeatButton,d=(0,r.useRef)(),p=(0,r.useState)(0),v=u()(p,2),h=v[0],b=v[1],y=(0,r.useState)(0),k=u()(y,2),E=k[0],S=k[1],C=(0,r.useState)(M?.5:1),x=u()(C,2),T=x[0],N=x[1],B=(0,r.useState)(!1),_=u()(B,2),V=_[0],I=_[1],j=(0,r.useState)(m),R=u()(j,2),A=R[0],H=R[1],z=(0,r.useState)(!1),D=u()(z,2),F=D[0],W=D[1],U=V||0===T?"button-sound-off":"button-sound-on";function Z(){var e=d.current;if(e)return e;throw new Error("Audio tag is not exists")}function q(){Z().currentTime+=10}function X(){Z().currentTime-=10}function $(){Z().play()}return(0,r.useEffect)((function(){}),[]),(0,r.useEffect)((function(){var e=Z();i&&i(e)}),[i]),a().createElement("div",{className:s("_6a435a",o)},a().createElement("audio",{className:"fd1431",onEnded:function(){if(Z().currentTime=0,F)return b(0),void $();H(m),b(0)},onLoadedMetadata:function(){var e=Z();b(0),S(e.duration),e.volume=T},onPause:function(){H(m)},onPlay:function(){H(f),L(n||{title:t},{seekforward:q,seekbackward:X})},onTimeUpdate:function(){var e=Z();b(e.currentTime)},onVolumeChange:function(){var e=Z();I(e.muted),N(e.volume)},preload:"metadata",ref:d,src:t,volume:T},a().createElement("track",{kind:"captions",src:t})),A===f?a().createElement(g,{ariaLabel:"pause",imageId:"button-pause",onClick:function(){Z().pause()}}):a().createElement(g,{ariaLabel:"play",imageId:"button-play",onClick:$}),a().createElement(O,{isRender:!0===l},a().createElement(g,{ariaLabel:"repeat",imageId:"button-repeat",isActive:F,onClick:function(){W(!F)}})),a().createElement(w,{className:"cdb4fb",currentTime:h,fullTime:E}),a().createElement(P,{ariaLabel:"progress bar",onChange:function(e){var t=Z(),n=e*E;t.currentTime=n,b(n)},progress:h/E}),a().createElement(O,{isRender:M},a().createElement(g,{ariaLabel:"switch-sound",imageId:U,onClick:function(){var e=Z(),t=!e.muted;e.muted=t,I(t)}}),a().createElement(P,{ariaLabel:"volume bar",className:"_37ab58",onChange:function(e){Z().volume=e,N(e)},progress:T})),a().createElement("a",{className:"_188972",download:c||!0,href:t},a().createElement(g,{ariaLabel:"download",imageId:"button-download"})))}function _(e,t,n){var r=(t+n)%e;return r<0?r+e:r}function V(e,t,n){if(t-e<1)return e;var r=e+Math.floor(Math.random()*(t-e));return n&&n.includes(r)?V(e,t,n):r}var I=n(575),j=n.n(I),R=n(913),A=n.n(R),H=n(205),z=n.n(H),D=n(585),F=n.n(D),W=n(754),U=n.n(W),Z="static";function q(e){var t=e.size,n=e.lineWidth,r=e.arcColor,o=e.circleColor,i=e.isShow,c=e.wrapperWidth,l=e.wrapperHeight,u=e.position,f=e.wrapperColor,m=e.wrapperPadding,d=e.className;if(!1===i)return null;var p=u||Z,v=t||48,h={borderWidth:n,width:v,height:v,borderColor:o,borderTopColor:r},y={minHeight:v,minWidth:v,position:p,backgroundColor:f,width:c,height:l,padding:m};return a().createElement("div",{className:s("e48c57",d,b()({},"_3fad33",p===Z)),style:y},a().createElement("div",{className:"_395527",style:h}))}var X=function(e){z()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=U()(t);if(n){var a=U()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return F()(this,e)});function o(e){var t;return j()(this,o),(t=r.call(this,e)).state={},t}return A()(o,[{key:"renderTime",value:function(){var e=this.props,t=e.trackCurrentTime,n=e.trackFullTime;return a().createElement(w,{className:"_97eb17",currentTime:t,fullTime:n})}},{key:"renderProgressBar",value:function(){var e=this.props,t=e.trackCurrentTime,n=e.trackFullTime,r=e.onChangeProgressBar,o="progress bar";return 0===n?a().createElement(P,{ariaLabel:o,isDisable:!0,onChange:r,progress:0}):a().createElement(P,{ariaLabel:o,onChange:r,progress:t/n})}},{key:"renderSwitchSoundButton",value:function(){if(!M)return null;var e=this.props,t=e.onClickMuteVolume,n=e.isMuted,r=e.trackVolume,o=n||0===r?"button-sound-off":"button-sound-on";return a().createElement(g,{ariaLabel:"switch-sound",className:"",imageId:o,onClick:t})}},{key:"renderVolumeBar",value:function(){if(!M)return null;var e=this.props,t=e.trackVolume,n=e.onChangeVolumeBar;return a().createElement(P,{ariaLabel:"volume bar",className:"_0ffd4f",onChange:n,progress:t})}},{key:"render",value:function(){return a().createElement("div",{className:"ea5806"},this.renderTime(),this.renderProgressBar(),this.renderSwitchSoundButton(),this.renderVolumeBar())}}]),o}(r.Component),$=function(e){z()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=U()(t);if(n){var a=U()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return F()(this,e)});function o(e){var t;return j()(this,o),(t=r.call(this,e)).state={},t}return A()(o,[{key:"renderButtonShuffle",value:function(){var e=this.props,t=e.onClickShuffle,n=e.isShuffleOn;return a().createElement(g,{ariaLabel:"shuffle",imageId:"button-shuffle",isActive:n,onClick:t})}},{key:"renderButtonRepeat",value:function(){var e=this.props,t=e.onClickRepeat,n=e.repeatingState,r=d.one,o=d.all;return a().createElement(g,{ariaLabel:"repeat",imageId:n===r?"button-repeat-one":"button-repeat",isActive:[r,o].includes(n),onClick:t})}},{key:"renderButtonPrevTrack",value:function(){var e=this.props.onClickPrevTrack;return a().createElement(g,{ariaLabel:"prev",imageId:"button-prev-track",onClick:e})}},{key:"renderButtonPlay",value:function(){var e=this.props,t=e.onClickPlay;return e.playingState!==f?a().createElement(g,{ariaLabel:"play",imageId:"button-play",onClick:t}):a().createElement(g,{ariaLabel:"pause",imageId:"button-pause",onClick:t})}},{key:"renderButtonNextTrack",value:function(){var e=this.props.onClickNextTrack;return a().createElement(g,{ariaLabel:"next",imageId:"button-next-track",onClick:e})}},{key:"renderButtonTrackList",value:function(){var e=this.props,t=e.onClickTrackList,n=e.isTrackListOpen;return a().createElement(g,{ariaLabel:"track-list",imageId:"button-track-list",isActive:n,onClick:t})}},{key:"render",value:function(){return a().createElement("div",{className:"_1b0bc4"},this.renderButtonShuffle(),this.renderButtonRepeat(),this.renderButtonPrevTrack(),this.renderButtonPlay(),this.renderButtonNextTrack(),this.renderButtonTrackList())}}]),o}(r.Component),G=function(e){z()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=U()(t);if(n){var a=U()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return F()(this,e)});function o(e){var t;return j()(this,o),(t=r.call(this,e)).state={},t}return A()(o,[{key:"render",value:function(){var e=this.props,t=e.onClickShuffle,n=e.onClickRepeat,r=e.onClickPrevTrack,o=e.onClickPlay,i=e.onClickNextTrack,c=e.onClickTrackList,l=e.onClickMuteVolume,u=e.onChangeProgressBar,s=e.onChangeVolumeBar,f=e.isMuted,m=e.playingState,d=e.isShuffleOn,p=e.repeatingState,v=e.isTrackListOpen,h=e.trackCurrentTime,b=e.trackVolume,y=e.trackFullTime,g=e.isLoading;return a().createElement("div",{className:"da7feb"},a().createElement(q,{className:"a6b10e",isShow:g,lineWidth:3,position:"absolute",size:26,wrapperHeight:26,wrapperPadding:0,wrapperWidth:26}),a().createElement($,{isShuffleOn:d,isTrackListOpen:v,onClickNextTrack:i,onClickPlay:o,onClickPrevTrack:r,onClickRepeat:n,onClickShuffle:t,onClickTrackList:c,playingState:m,repeatingState:p}),a().createElement(X,{isMuted:f,onChangeProgressBar:u,onChangeVolumeBar:s,onClickMuteVolume:l,trackCurrentTime:h,trackFullTime:y,trackVolume:b}))}}]),o}(r.Component);const J="_2acf08",K="_979981";function Q(e){var t,n,i=e.isCurrentTrack,c=e.activeIndex,l=e.track,m=e.playingState,d=e.onClickPlay,p=e.setActiveIndex,v=e.isLoading,h=(0,r.useState)(0),g=u()(h,2),w=g[0],E=g[1],S=k(w),C=S.minutes,x=S.seconds,T=(0,r.useRef)(),M=l.content,P=l.mediaMetadata,N=l.src,L=P&&P.title,O=M||L||N,B=a().createElement(q,{isShow:v,lineWidth:4,position:"absolute",size:30,wrapperPadding:0}),_=s("cad308",b()({},"_3c8845",i));return a().createElement("li",{className:_},a().createElement("audio",{className:"_876f0f",muted:!0,onLoadedMetadata:function(){var e=function(){var e=T.current;if(e)return e;throw new Error("Audio tag is not exists")}();E(e.duration)},preload:"metadata",ref:T,src:N}),(t="#"+o+"button-play",n="play",m===f?i?a().createElement("button",{"aria-label":n,className:J,onClick:d,type:"button"},B,a().createElement(y,{className:"_466456",imageId:"#audio-player-icon-id-prefix-button-pause-playlist"})):a().createElement("button",{"aria-label":n,className:J,onClick:function(){p(c)},type:"button"},a().createElement(y,{className:K,imageId:t})):i?a().createElement("button",{"aria-label":n,className:J,onClick:d,type:"button"},B,a().createElement(y,{className:K,imageId:t})):a().createElement("button",{"aria-label":n,className:J,onClick:function(){p(c),d()},type:"button"},a().createElement(y,{className:K,imageId:t}))),a().createElement("div",{className:"_25eb27"},a().createElement("div",{className:"efdbcb"},O)),a().createElement("div",{className:"_13ff81"},C,":",x))}function Y(e){var t=e.activeIndex,n=e.trackList,r=e.playingState,o=e.onClickPlay,i=e.setActiveIndex,c=e.isLoading;return a().createElement("ul",{className:"e41919"},n.map((function(e,n){var l=t===n;return a().createElement(Q,{activeIndex:n,isCurrentTrack:l,isLoading:c&&l,key:e.src,onClickPlay:o,playingState:r,setActiveIndex:i,track:e})})))}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e){var t=e.defaultState,n=e.className,o=e.onDidMount,i=e.trackList,c=function(e){return e?te(te({},v),e):v}(t),l=(0,r.useState)(0),s=u()(l,2),h=s[0],b=s[1],y=(0,r.useState)(0),g=u()(y,2),k=g[0],w=g[1],E=(0,r.useState)(M?.5:1),S=u()(E,2),C=S[0],x=S[1],T=(0,r.useState)(c.isMuted),P=u()(T,2),N=P[0],B=P[1],I=(0,r.useState)(m),j=u()(I,2),R=j[0],A=j[1],H=(0,r.useState)(c.activeIndex),z=u()(H,2),D=z[0],F=z[1],W=(0,r.useState)(c.isShuffleOn),U=u()(W,2),Z=U[0],q=U[1],X=(0,r.useState)(c.repeatingState),$=u()(X,2),J=$[0],K=$[1],Q=(0,r.useState)(c.isTrackListOpen),ee=u()(Q,2),ne=ee[0],re=ee[1],ae=(0,r.useState)(!1),oe=u()(ae,2),ie=oe[0],ce=oe[1],le=(0,r.useState)(!1),ue=u()(le,2),se=ue[0],fe=ue[1],me=(0,r.useRef)();function de(){return me.current||document.createElement("audio")}function pe(){return i[D]||null}function ve(){var e=pe();return e?e.src:""}function he(){var e=pe();if(e){var t=e.mediaMetadata;t&&L(t,{seekforward:be,seekbackward:ye,previoustrack:we,nexttrack:ke})}}function be(){de().currentTime+=10}function ye(){de().currentTime-=10}function ge(){var e=de();e.paused?e.play():e.pause()}function ke(){Ee(_(i.length,D,1))}function we(){Ee(_(i.length,D,-1))}function Ee(e){F(e),ce(!0),b(0),w(0),he()}return(0,r.useEffect)((function(){var e=de();o&&o(e)}),[o]),a().createElement("div",{className:n||""},a().createElement("audio",{autoPlay:R===f,className:"_068c8f",key:"audio-tag",muted:N,onCanPlay:function(){se&&(fe(!1),ge())},onEnded:function(){var e=d.one,t=d.all,n=i.length;if(fe(!0),n<=1)return F(0),void b(0);if(Z)Ee(V(0,n,[D]));else{if(J===e)return fe(!1),void ge();J!==t?D<n-1?ke():(fe(!1),Ee(0)):ke()}},onLoadedMetadata:function(){var e=de();ce(!1),w(e.duration),e.volume=C},onPause:function(){A(m)},onPlay:function(){A(f),he()},onTimeUpdate:function(){var e=de();b(e.currentTime)},onVolumeChange:function(){var e=de();B(e.muted),x(e.volume)},preload:"metadata",ref:me,src:ve(),volume:C},a().createElement("track",{kind:"captions",src:ve()})),a().createElement(G,{isLoading:ie,isMuted:N,isShuffleOn:Z,isTrackListOpen:ne,onChangeProgressBar:function(e){de().currentTime=e*k},onChangeVolumeBar:function(e){de().volume=e},onClickMuteVolume:function(){var e=de(),t=!e.muted;e.muted=t,B(t)},onClickNextTrack:ke,onClickPlay:ge,onClickPrevTrack:we,onClickRepeat:function(){var e=(p.indexOf(J)+1)%p.length;K(p[e])},onClickShuffle:function(){q(!Z)},onClickTrackList:function(){re(!ne)},playingState:R,repeatingState:J,trackCurrentTime:h,trackFullTime:k,trackVolume:C}),a().createElement(O,{isRender:ne},a().createElement(Y,{activeIndex:D,isLoading:ie,onClickPlay:ge,playingState:R,setActiveIndex:Ee,trackList:i})))}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(294)})();