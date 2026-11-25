(()=>{var{defineProperty:gK,getOwnPropertyNames:qO,getOwnPropertyDescriptor:YO}=Object,GO=Object.prototype.hasOwnProperty;var g5=new WeakMap,XO=(J)=>{var $=g5.get(J),Q;if($)return $;if($=gK({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function")qO(J).map((Z)=>!GO.call($,Z)&&gK($,Z,{get:()=>J[Z],enumerable:!(Q=YO(J,Z))||Q.enumerable}));return g5.set(J,$),$},NP=(J,$)=>()=>($||J(($={exports:{}}).exports,$),$.exports);var F8=(J,$)=>{for(var Q in $)gK(J,Q,{get:$[Q],enumerable:!0,configurable:!0,set:(Z)=>$[Q]=()=>Z})};var XP={};F8(XP,{App:()=>yZ});var uK=[],pK=[];function hZ(J){pK.push(J)}function h0(J){uK.push(J)}function u5(){uK.forEach((J)=>{try{J()}catch($){console.warn("Error in destroy callback:",$)}}),uK.length=0,document.querySelectorAll("[data-module]").forEach((J)=>{delete J._moduleInitialized});try{let J=window.gsap;if(J?.globalTimeline){let Q=J.globalTimeline.getChildren(!0,!0,!0).filter((Z)=>{if(!Z.targets)return!1;try{let W=Z.targets();if(!W||W.length===0)return!1;return W.some((K)=>K instanceof Element&&!document.contains(K))}catch(W){return!1}});if(Q.length>0)Q.forEach((Z)=>{try{Z.kill()}catch(W){}})}}catch(J){}}function LW(){pK.forEach((J)=>J()),pK.length=0}var mK=[],dK=[];function p5(J){mK.push(J)}async function m5(){await Promise.allSettled(mK.map((J)=>J())),mK.length=0}function d5(J){dK.push(J)}async function EW(){await Promise.allSettled(dK.map((J)=>J())),dK.length=0}var vZ=[];function C9(J,$){vZ.push({element:J,fn:$})}async function c5(J){let $=vZ.filter(({element:Z})=>document.contains(Z));await Promise.allSettled($.map(({fn:Z})=>Z(J)));let Q=vZ.filter(({element:Z})=>document.contains(Z));vZ.length=0,vZ.push(...Q)}function P8(J,{root:$,rootMargin:Q,threshold:Z,autoStart:W,once:K,callback:U}){let H=new fZ(J,{root:$,rootMargin:Q,threshold:Z,autoStart:W,once:K,callback:U});return h0(()=>{H.destroy()}),H}function MW(J,$={}){let Q=new cK(J,$);return h0(()=>{Q.destroy()}),Q}var lK={};F8(lK,{default:()=>s5});class l5{events;constructor(){this.events={}}on(J,$){if(!this.events[J])this.events[J]=[];this.events[J].push($)}off(J,$){if(!this.events[J])return;this.events[J]=this.events[J].filter((Q)=>Q!==$)}emit(J,$){if(!this.events[J])return;this.events[J].forEach((Q)=>Q($))}}class HQ{static emitter=new l5;static state={};static createProxy(J){return new Proxy(J,{set:function($,Q,Z,W){return HQ.emitter.emit(Q.toString(),Z),Reflect.set($,Q,Z,W)}})}static proxy=new Proxy(HQ.state,{set:function(J,$,Q,Z){if(typeof Q==="object"&&Q!==null)Q=HQ.createProxy(Q);return HQ.emitter.emit($.toString(),Q),Reflect.set(J,$,Q,Z)}});static on(J,$){this.emitter.on(J,$)}static off(J,$){this.emitter.off(J,$)}}var NO={get(J,$){if(typeof $==="string"&&$ in HQ)return HQ[$].bind(HQ);return J[$]},set(J,$,Q,Z){return Reflect.set(HQ.proxy,$,Q,Z)}},F0=new Proxy(HQ.proxy,NO);function o5(){if(typeof window==="undefined")return!1;return window.matchMedia("(hover: none), (pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0}function s5(J,$){if(J.querySelector(".app__title-wrap"))return LO(J,$);else return FO(J,$)}function FO(J,$){let Q=J.querySelectorAll("input[type='checkbox']"),Z=null,W=o5()&&Boolean(J.closest('[data-gl="c"]')),K=null,U=[],H=(q,Y)=>{if(!W)return;let G=F0.WEBGL_READY||window.currentModel;if(!G||typeof G.onPieceHover!=="function")return;if(!Y){if(G.onPieceHover(q,!1),F0.RAYCAST_TARGET===q)F0.RAYCAST_TARGET=null;if(K===q)K=null;return}if(K!==null&&K!==q)G.onPieceHover(K,!1);G.onPieceHover(q,!0),F0.RAYCAST_TARGET=q,K=q};Q.forEach((q,Y)=>{let G=()=>{if(!q.checked){if(H(Y,!1),Z===Y)Z=null;return}if(Z!==null&&Z!==Y)H(Z,!1),Q[Z].checked=!1;Z=Y,H(Y,!0)};q.addEventListener("change",G),U.push({checkbox:q,handler:G})}),h0(()=>{if(K!==null)H(K,!1);U.forEach(({checkbox:q,handler:Y})=>{q.removeEventListener("change",Y)})})}function LO(J,$){let Q=J.querySelectorAll(".app__title-wrap"),Z=o5()&&Boolean(J.closest('[data-gl="c"]')),W=Array.from(Q).map((X)=>X.parentElement).filter((X)=>X&&X.querySelector(".app__content"));if(W.length===0)return;let K=[],U=null,H=(X,N)=>{if(!Z)return;let F=F0.WEBGL_READY||window.currentModel;if(!F||typeof F.onPieceHover!=="function")return;if(!N){if(F.onPieceHover(X,!1),F0.RAYCAST_TARGET===X)F0.RAYCAST_TARGET=null;if(U===X)U=null;return}if(U!==null&&U!==X)F.onPieceHover(U,!1);F.onPieceHover(X,!0),F0.RAYCAST_TARGET=X,U=X};W.forEach((X,N)=>{let F=X.querySelector(".app__title-wrap"),M=X.querySelector(".app__content"),E=X.querySelector(".hotspot__icon");if(!F||!M)return;let L=M.getAttribute("data-accordion-status")==="open",O=X.classList.contains("first-accordion")||X.classList.contains("accordion-first")||X.classList.contains("default-open"),z=X.classList.contains("active")||X.classList.contains("open"),I=L||O||z||N===0;if(I){if(M.setAttribute("data-accordion-status","open"),E)E.setAttribute("data-accordion-status","open");X.classList.add("active","open")}else{if(M.setAttribute("data-accordion-status","closed"),E)E.setAttribute("data-accordion-status","closed");X.classList.remove("active","open")}let A={isOpen:I,container:X,trigger:F,content:M,icon:E,index:N};K.push(A);let C=(P)=>{P.preventDefault(),P.stopPropagation(),q(K,N)};F.addEventListener("click",C),A.handleClick=C});function q(X,N){if(X[N].isOpen)H(N,!1),Y(X[N]);else X.forEach((F,M)=>{if(M!==N&&F.isOpen)H(M,!1),Y(F)}),setTimeout(()=>{G(X[N]),H(N,!0)},100)}function Y(X){if(!X.isOpen)return;let{content:N,icon:F,container:M}=X;if(N.setAttribute("data-accordion-status","closed"),F)F.setAttribute("data-accordion-status","closed");M.classList.remove("active","open"),X.isOpen=!1}function G(X){if(X.isOpen)return;let{content:N,icon:F,container:M}=X;if(N.setAttribute("data-accordion-status","open"),F)F.setAttribute("data-accordion-status","open");M.classList.add("active","open"),X.isOpen=!0}h0(()=>{if(U!==null)H(U,!1);K.forEach((X)=>{if(X.handleClick)X.trigger.removeEventListener("click",X.handleClick)})})}var FH={};F8(FH,{default:()=>HN});function CQ(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function $G(J,$){J.prototype=Object.create($.prototype),J.prototype.constructor=J,J.__proto__=$}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var L$={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},I9={duration:0.5,overwrite:!1,delay:0},GU,vJ,JJ,b$=1e8,n8=1/b$,eK=Math.PI*2,EO=eK/4,MO=0,QG=Math.sqrt,OO=Math.cos,BO=Math.sin,kJ=function J($){return typeof $==="string"},qJ=function J($){return typeof $==="function"},IQ=function J($){return typeof $==="number"},IW=function J($){return typeof $==="undefined"},GQ=function J($){return typeof $==="object"},F$=function J($){return $!==!1},XU=function J(){return typeof window!=="undefined"},OW=function J($){return qJ($)||kJ($)},ZG=typeof ArrayBuffer==="function"&&ArrayBuffer.isView||function(){},mJ=Array.isArray,JU=/(?:-?\.?\d|\.)+/gi,NU=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,g6=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oK=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,FU=/[+-]=-?[.\d]+/,WG=/[^,'"\[\]\s]+/gi,RO=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,KJ,qQ,$U,LU,k$={},zW={},KG,UG=function J($){return(zW=A9($,k$))&&dJ},AW=function J($,Q){return console.warn("Invalid property",$,"set to",Q,"Missing plugin? gsap.registerPlugin()")},cZ=function J($,Q){return!Q&&console.warn($)},HG=function J($,Q){return $&&(k$[$]=Q)&&zW&&(zW[$]=Q)||k$},lZ=function J(){return 0},VO={suppressEvents:!0,isStart:!0,kill:!1},BW={suppressEvents:!0,kill:!1},zO={suppressEvents:!0},EU={},Z6=[],QU={},qG,X$={},sK={},n5=30,RW=[],MU="",OU=function J($){var Q=$[0],Z,W;if(GQ(Q)||qJ(Q)||($=[$]),!(Z=(Q._gsap||{}).harness)){W=RW.length;while(W--&&!RW[W].targetTest(Q));Z=RW[W]}W=$.length;while(W--)$[W]&&($[W]._gsap||($[W]._gsap=new zU($[W],Z)))||$.splice(W,1);return $},W6=function J($){return $._gsap||OU(v$($))[0]._gsap},BU=function J($,Q,Z){return(Z=$[Q])&&qJ(Z)?$[Q]():IW(Z)&&$.getAttribute&&$.getAttribute(Q)||Z},eJ=function J($,Q){return($=$.split(",")).forEach(Q)||$},YJ=function J($){return Math.round($*1e5)/1e5||0},EJ=function J($){return Math.round($*1e7)/1e7||0},u6=function J($,Q){var Z=Q.charAt(0),W=parseFloat(Q.substr(2));return $=parseFloat($),Z==="+"?$+W:Z==="-"?$-W:Z==="*"?$*W:$/W},DO=function J($,Q){var Z=Q.length,W=0;for(;$.indexOf(Q[W])<0&&++W<Z;);return W<Z},DW=function J(){var $=Z6.length,Q=Z6.slice(0),Z,W;QU={},Z6.length=0;for(Z=0;Z<$;Z++)W=Q[Z],W&&W._lazy&&(W.render(W._lazy[0],W._lazy[1],!0)._lazy=0)},RU=function J($){return!!($._initted||$._startAt||$.add)},YG=function J($,Q,Z,W){Z6.length&&!vJ&&DW(),$.render(Q,Z,W||!!(vJ&&Q<0&&RU($))),Z6.length&&!vJ&&DW()},GG=function J($){var Q=parseFloat($);return(Q||Q===0)&&($+"").match(WG).length<2?Q:kJ($)?$.trim():$},XG=function J($){return $},E$=function J($,Q){for(var Z in Q)Z in $||($[Z]=Q[Z]);return $},kO=function J($){return function(Q,Z){for(var W in Z)W in Q||W==="duration"&&$||W==="ease"||(Q[W]=Z[W])}},A9=function J($,Q){for(var Z in Q)$[Z]=Q[Z];return $},i5=function J($,Q){for(var Z in Q)Z!=="__proto__"&&Z!=="constructor"&&Z!=="prototype"&&($[Z]=GQ(Q[Z])?J($[Z]||($[Z]={}),Q[Z]):Q[Z]);return $},kW=function J($,Q){var Z={},W;for(W in $)W in Q||(Z[W]=$[W]);return Z},pZ=function J($){var Q=$.parent||KJ,Z=$.keyframes?kO(mJ($.keyframes)):E$;if(F$($.inherit))while(Q)Z($,Q.vars.defaults),Q=Q.parent||Q._dp;return $},CO=function J($,Q){var Z=$.length,W=Z===Q.length;while(W&&Z--&&$[Z]===Q[Z]);return Z<0},NG=function J($,Q,Z,W,K){if(Z===void 0)Z="_first";if(W===void 0)W="_last";var U=$[W],H;if(K){H=Q[K];while(U&&U[K]>H)U=U._prev}if(U)Q._next=U._next,U._next=Q;else Q._next=$[Z],$[Z]=Q;if(Q._next)Q._next._prev=Q;else $[W]=Q;return Q._prev=U,Q.parent=Q._dp=$,Q},nZ=function J($,Q,Z,W){if(Z===void 0)Z="_first";if(W===void 0)W="_last";var{_prev:K,_next:U}=Q;if(K)K._next=U;else if($[Z]===Q)$[Z]=U;if(U)U._prev=K;else if($[W]===Q)$[W]=K;Q._next=Q._prev=Q.parent=null},K6=function J($,Q){$.parent&&(!Q||$.parent.autoRemoveChildren)&&$.parent.remove&&$.parent.remove($),$._act=0},v6=function J($,Q){if($&&(!Q||Q._end>$._dur||Q._start<0)){var Z=$;while(Z)Z._dirty=1,Z=Z.parent}return $},PO=function J($){var Q=$.parent;while(Q&&Q.parent)Q._dirty=1,Q.totalDuration(),Q=Q.parent;return $},ZU=function J($,Q,Z,W){return $._startAt&&(vJ?$._startAt.revert(BW):$.vars.immediateRender&&!$.vars.autoRevert||$._startAt.render(Q,!0,W))},IO=function J($){return!$||$._ts&&J($.parent)},a5=function J($){return $._repeat?T9($._tTime,$=$.duration()+$._rDelay)*$:0},T9=function J($,Q){var Z=Math.floor($=EJ($/Q));return $&&Z===$?Z-1:Z},CW=function J($,Q){return($-Q._start)*Q._ts+(Q._ts>=0?0:Q._dirty?Q.totalDuration():Q._tDur)},TW=function J($){return $._end=EJ($._start+($._tDur/Math.abs($._ts||$._rts||n8)||0))},SW=function J($,Q){var Z=$._dp;if(Z&&Z.smoothChildTiming&&$._ts)$._start=EJ(Z._time-($._ts>0?Q/$._ts:(($._dirty?$.totalDuration():$._tDur)-Q)/-$._ts)),TW($),Z._dirty||v6(Z,$);return $},FG=function J($,Q){var Z;if(Q._time||!Q._dur&&Q._initted||Q._start<$._time&&(Q._dur||!Q.add)){if(Z=CW($.rawTime(),Q),!Q._dur||iZ(0,Q.totalDuration(),Z)-Q._tTime>n8)Q.render(Z,!0)}if(v6($,Q)._dp&&$._initted&&$._time>=$._dur&&$._ts){if($._dur<$.duration()){Z=$;while(Z._dp)Z.rawTime()>=0&&Z.totalTime(Z._tTime),Z=Z._dp}$._zTime=-n8}},YQ=function J($,Q,Z,W){return Q.parent&&K6(Q),Q._start=EJ((IQ(Z)?Z:Z||$!==KJ?y$($,Z,Q):$._time)+Q._delay),Q._end=EJ(Q._start+(Q.totalDuration()/Math.abs(Q.timeScale())||0)),NG($,Q,"_first","_last",$._sort?"_start":0),WU(Q)||($._recent=Q),W||FG($,Q),$._ts<0&&SW($,$._tTime),$},LG=function J($,Q){return(k$.ScrollTrigger||AW("scrollTrigger",Q))&&k$.ScrollTrigger.create(Q,$)},EG=function J($,Q,Z,W,K){if(CU($,Q,K),!$._initted)return 1;if(!Z&&$._pt&&!vJ&&($._dur&&$.vars.lazy!==!1||!$._dur&&$.vars.lazy)&&qG!==N$.frame)return Z6.push($),$._lazy=[K,W],1},AO=function J($){var Q=$.parent;return Q&&Q._ts&&Q._initted&&!Q._lock&&(Q.rawTime()<0||J(Q))},WU=function J($){var Q=$.data;return Q==="isFromStart"||Q==="isStart"},TO=function J($,Q,Z,W){var K=$.ratio,U=Q<0||!Q&&(!$._start&&AO($)&&!(!$._initted&&WU($))||($._ts<0||$._dp._ts<0)&&!WU($))?0:1,H=$._rDelay,q=0,Y,G,X;if(H&&$._repeat){if(q=iZ(0,$._tDur,Q),G=T9(q,H),$._yoyo&&G&1&&(U=1-U),G!==T9($._tTime,H))K=1-U,$.vars.repeatRefresh&&$._initted&&$.invalidate()}if(U!==K||vJ||W||$._zTime===n8||!Q&&$._zTime){if(!$._initted&&EG($,Q,W,Z,q))return;X=$._zTime,$._zTime=Q||(Z?n8:0),Z||(Z=Q&&!X),$.ratio=U,$._from&&(U=1-U),$._time=0,$._tTime=q,Y=$._pt;while(Y)Y.r(U,Y.d),Y=Y._next;if(Q<0&&ZU($,Q,Z,!0),$._onUpdate&&!Z&&D$($,"onUpdate"),q&&$._repeat&&!Z&&$.parent&&D$($,"onRepeat"),(Q>=$._tDur||Q<0)&&$.ratio===U){if(U&&K6($,1),!Z&&!vJ)D$($,U?"onComplete":"onReverseComplete",!0),$._prom&&$._prom()}}else if(!$._zTime)$._zTime=Q},SO=function J($,Q,Z){var W;if(Z>Q){W=$._first;while(W&&W._start<=Z){if(W.data==="isPause"&&W._start>Q)return W;W=W._next}}else{W=$._last;while(W&&W._start>=Z){if(W.data==="isPause"&&W._start<Q)return W;W=W._prev}}},S9=function J($,Q,Z,W){var K=$._repeat,U=EJ(Q)||0,H=$._tTime/$._tDur;return H&&!W&&($._time*=U/$._dur),$._dur=U,$._tDur=!K?U:K<0?10000000000:EJ(U*(K+1)+$._rDelay*K),H>0&&!W&&SW($,$._tTime=$._tDur*H),$.parent&&TW($),Z||v6($.parent,$),$},r5=function J($){return $ instanceof bJ?v6($):S9($,$._dur)},jO={_start:0,endTime:lZ,totalDuration:lZ},y$=function J($,Q,Z){var W=$.labels,K=$._recent||jO,U=$.duration()>=b$?K.endTime(!1):$._dur,H,q,Y;if(kJ(Q)&&(isNaN(Q)||(Q in W))){if(q=Q.charAt(0),Y=Q.substr(-1)==="%",H=Q.indexOf("="),q==="<"||q===">")return H>=0&&(Q=Q.replace(/=/,"")),(q==="<"?K._start:K.endTime(K._repeat>=0))+(parseFloat(Q.substr(1))||0)*(Y?(H<0?K:Z).totalDuration()/100:1);if(H<0)return Q in W||(W[Q]=U),W[Q];if(q=parseFloat(Q.charAt(H-1)+Q.substr(H+1)),Y&&Z)q=q/100*(mJ(Z)?Z[0]:Z).totalDuration();return H>1?J($,Q.substr(0,H-1),Z)+q:U+q}return Q==null?U:+Q},mZ=function J($,Q,Z){var W=IQ(Q[1]),K=(W?2:1)+($<2?0:1),U=Q[K],H,q;if(W&&(U.duration=Q[1]),U.parent=Z,$){H=U,q=Z;while(q&&!("immediateRender"in H))H=q.vars.defaults||{},q=F$(q.vars.inherit)&&q.parent;U.immediateRender=F$(H.immediateRender),$<2?U.runBackwards=1:U.startAt=Q[K-1]}return new FJ(Q[0],U,Q[K+1])},U6=function J($,Q){return $||$===0?Q($):Q},iZ=function J($,Q,Z){return Z<$?$:Z>Q?Q:Z},hJ=function J($,Q){return!kJ($)||!(Q=RO.exec($))?"":Q[1]},wO=function J($,Q,Z){return U6(Z,function(W){return iZ($,Q,W)})},KU=[].slice,MG=function J($,Q){return $&&GQ($)&&"length"in $&&(!Q&&!$.length||($.length-1 in $)&&GQ($[0]))&&!$.nodeType&&$!==qQ},_O=function J($,Q,Z){if(Z===void 0)Z=[];return $.forEach(function(W){var K;return kJ(W)&&!Q||MG(W,1)?(K=Z).push.apply(K,v$(W)):Z.push(W)})||Z},v$=function J($,Q,Z){return JJ&&!Q&&JJ.selector?JJ.selector($):kJ($)&&!Z&&($U||!j9())?KU.call((Q||LU).querySelectorAll($),0):mJ($)?_O($,Z):MG($)?KU.call($,0):$?[$]:[]},UU=function J($){return $=v$($)[0]||cZ("Invalid scope")||{},function(Q){var Z=$.current||$.nativeElement||$;return v$(Q,Z.querySelectorAll?Z:Z===$?cZ("Invalid scope")||LU.createElement("div"):$)}},OG=function J($){return $.sort(function(){return 0.5-Math.random()})},BG=function J($){if(qJ($))return $;var Q=GQ($)?$:{each:$},Z=h6(Q.ease),W=Q.from||0,K=parseFloat(Q.base)||0,U={},H=W>0&&W<1,q=isNaN(W)||H,Y=Q.axis,G=W,X=W;if(kJ(W))G=X={center:0.5,edges:0.5,end:1}[W]||0;else if(!H&&q)G=W[0],X=W[1];return function(N,F,M){var E=(M||Q).length,L=U[E],O,z,B,I,A,C,P,x,D;if(!L){if(D=Q.grid==="auto"?0:(Q.grid||[1,b$])[1],!D){P=-b$;while(P<(P=M[D++].getBoundingClientRect().left)&&D<E);D<E&&D--}L=U[E]=[],O=q?Math.min(D,E)*G-0.5:W%D,z=D===b$?0:q?E*X/D-0.5:W/D|0,P=0,x=b$;for(C=0;C<E;C++)B=C%D-O,I=z-(C/D|0),L[C]=A=!Y?QG(B*B+I*I):Math.abs(Y==="y"?I:B),A>P&&(P=A),A<x&&(x=A);W==="random"&&OG(L),L.max=P-x,L.min=x,L.v=E=(parseFloat(Q.amount)||parseFloat(Q.each)*(D>E?E-1:!Y?Math.max(D,E/D):Y==="y"?E/D:D)||0)*(W==="edges"?-1:1),L.b=E<0?K-E:K,L.u=hJ(Q.amount||Q.each)||0,Z=Z&&E<0?AG(Z):Z}return E=(L[N]-L.min)/L.max||0,EJ(L.b+(Z?Z(E):E)*L.v)+L.u}},HU=function J($){var Q=Math.pow(10,(($+"").split(".")[1]||"").length);return function(Z){var W=EJ(Math.round(parseFloat(Z)/$)*$*Q);return(W-W%1)/Q+(IQ(Z)?0:hJ(Z))}},RG=function J($,Q){var Z=mJ($),W,K;if(!Z&&GQ($))if(W=Z=$.radius||b$,$.values){if($=v$($.values),K=!IQ($[0]))W*=W}else $=HU($.increment);return U6(Q,!Z?HU($):qJ($)?function(U){return K=$(U),Math.abs(K-U)<=W?K:U}:function(U){var H=parseFloat(K?U.x:U),q=parseFloat(K?U.y:0),Y=b$,G=0,X=$.length,N,F;while(X--){if(K)N=$[X].x-H,F=$[X].y-q,N=N*N+F*F;else N=Math.abs($[X]-H);if(N<Y)Y=N,G=X}return G=!W||Y<=W?$[G]:U,K||G===U||IQ(U)?G:G+hJ(U)})},VG=function J($,Q,Z,W){return U6(mJ($)?!Q:Z===!0?!!(Z=0):!W,function(){return mJ($)?$[~~(Math.random()*$.length)]:(Z=Z||0.00001)&&(W=Z<1?Math.pow(10,(Z+"").length-2):1)&&Math.floor(Math.round(($-Z/2+Math.random()*(Q-$+Z*0.99))/Z)*Z*W)/W})},xO=function J(){for(var $=arguments.length,Q=new Array($),Z=0;Z<$;Z++)Q[Z]=arguments[Z];return function(W){return Q.reduce(function(K,U){return U(K)},W)}},yO=function J($,Q){return function(Z){return $(parseFloat(Z))+(Q||hJ(Z))}},bO=function J($,Q,Z){return DG($,Q,0,1,Z)},zG=function J($,Q,Z){return U6(Z,function(W){return $[~~Q(W)]})},vO=function J($,Q,Z){var W=Q-$;return mJ($)?zG($,J(0,$.length),Q):U6(Z,function(K){return(W+(K-$)%W)%W+$})},hO=function J($,Q,Z){var W=Q-$,K=W*2;return mJ($)?zG($,J(0,$.length-1),Q):U6(Z,function(U){return U=(K+(U-$)%K)%K||0,$+(U>W?K-U:U)})},w9=function J($){var Q=0,Z="",W,K,U,H;while(~(W=$.indexOf("random(",Q)))U=$.indexOf(")",W),H=$.charAt(W+7)==="[",K=$.substr(W+7,U-W-7).match(H?WG:JU),Z+=$.substr(Q,W-Q)+VG(H?K:+K[0],H?0:+K[1],+K[2]||0.00001),Q=U+1;return Z+$.substr(Q,$.length-Q)},DG=function J($,Q,Z,W,K){var U=Q-$,H=W-Z;return U6(K,function(q){return Z+((q-$)/U*H||0)})},fO=function J($,Q,Z,W){var K=isNaN($+Q)?0:function(F){return(1-F)*$+F*Q};if(!K){var U=kJ($),H={},q,Y,G,X,N;if(Z===!0&&(W=1)&&(Z=null),U)$={p:$},Q={p:Q};else if(mJ($)&&!mJ(Q)){G=[],X=$.length,N=X-2;for(Y=1;Y<X;Y++)G.push(J($[Y-1],$[Y]));X--,K=function F(M){M*=X;var E=Math.min(N,~~M);return G[E](M-E)},Z=Q}else if(!W)$=A9(mJ($)?[]:{},$);if(!G){for(q in Q)DU.call(H,$,q,"get",Q[q]);K=function F(M){return AU(M,H)||(U?$.p:$)}}}return U6(Z,K)},t5=function J($,Q,Z){var W=$.labels,K=b$,U,H,q;for(U in W)if(H=W[U]-Q,H<0===!!Z&&H&&K>(H=Math.abs(H)))q=U,K=H;return q},D$=function J($,Q,Z){var W=$.vars,K=W[Q],U=JJ,H=$._ctx,q,Y,G;if(!K)return;return q=W[Q+"Params"],Y=W.callbackScope||$,Z&&Z6.length&&DW(),H&&(JJ=H),G=q?K.apply(Y,q):K.call(Y),JJ=U,G},gZ=function J($){return K6($),$.scrollTrigger&&$.scrollTrigger.kill(!!vJ),$.progress()<1&&D$($,"onInterrupt"),$},P9,kG=[],CG=function J($){if(!$)return;if($=!$.name&&$.default||$,XU()||$.headless){var Q=$.name,Z=qJ($),W=Q&&!Z&&$.init?function(){this._props=[]}:$,K={init:lZ,render:AU,add:DU,kill:JB,modifier:eO,rawVars:0},U={targetTest:0,get:0,getSetter:jW,aliases:{},register:0};if(j9(),$!==W){if(X$[Q])return;if(E$(W,E$(kW($,K),U)),A9(W.prototype,A9(K,kW($,U))),X$[W.prop=Q]=W,$.targetTest)RW.push(W),EU[Q]=1;Q=(Q==="css"?"CSS":Q.charAt(0).toUpperCase()+Q.substr(1))+"Plugin"}HG(Q,W),$.register&&$.register(dJ,W,J$)}else kG.push($)},s8=255,uZ={aqua:[0,s8,s8],lime:[0,s8,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,s8],navy:[0,0,128],white:[s8,s8,s8],olive:[128,128,0],yellow:[s8,s8,0],orange:[s8,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[s8,0,0],pink:[s8,192,203],cyan:[0,s8,s8],transparent:[s8,s8,s8,0]},nK=function J($,Q,Z){return $+=$<0?1:$>1?-1:0,($*6<1?Q+(Z-Q)*$*6:$<0.5?Z:$*3<2?Q+(Z-Q)*(0.6666666666666666-$)*6:Q)*s8+0.5|0},PG=function J($,Q,Z){var W=!$?uZ.black:IQ($)?[$>>16,$>>8&s8,$&s8]:0,K,U,H,q,Y,G,X,N,F,M;if(!W){if($.substr(-1)===",")$=$.substr(0,$.length-1);if(uZ[$])W=uZ[$];else if($.charAt(0)==="#"){if($.length<6)K=$.charAt(1),U=$.charAt(2),H=$.charAt(3),$="#"+K+K+U+U+H+H+($.length===5?$.charAt(4)+$.charAt(4):"");if($.length===9)return W=parseInt($.substr(1,6),16),[W>>16,W>>8&s8,W&s8,parseInt($.substr(7),16)/255];$=parseInt($.substr(1),16),W=[$>>16,$>>8&s8,$&s8]}else if($.substr(0,3)==="hsl"){if(W=M=$.match(JU),!Q)q=+W[0]%360/360,Y=+W[1]/100,G=+W[2]/100,U=G<=0.5?G*(Y+1):G+Y-G*Y,K=G*2-U,W.length>3&&(W[3]*=1),W[0]=nK(q+0.3333333333333333,K,U),W[1]=nK(q,K,U),W[2]=nK(q-0.3333333333333333,K,U);else if(~$.indexOf("="))return W=$.match(NU),Z&&W.length<4&&(W[3]=1),W}else W=$.match(JU)||uZ.transparent;W=W.map(Number)}if(Q&&!M){if(K=W[0]/s8,U=W[1]/s8,H=W[2]/s8,X=Math.max(K,U,H),N=Math.min(K,U,H),G=(X+N)/2,X===N)q=Y=0;else F=X-N,Y=G>0.5?F/(2-X-N):F/(X+N),q=X===K?(U-H)/F+(U<H?6:0):X===U?(H-K)/F+2:(K-U)/F+4,q*=60;W[0]=~~(q+0.5),W[1]=~~(Y*100+0.5),W[2]=~~(G*100+0.5)}return Z&&W.length<4&&(W[3]=1),W},IG=function J($){var Q=[],Z=[],W=-1;return $.split(PQ).forEach(function(K){var U=K.match(g6)||[];Q.push.apply(Q,U),Z.push(W+=U.length+1)}),Q.c=Z,Q},e5=function J($,Q,Z){var W="",K=($+W).match(PQ),U=Q?"hsla(":"rgba(",H=0,q,Y,G,X;if(!K)return $;if(K=K.map(function(N){return(N=PG(N,Q,1))&&U+(Q?N[0]+","+N[1]+"%,"+N[2]+"%,"+N[3]:N.join(","))+")"}),Z){if(G=IG($),q=Z.c,q.join(W)!==G.c.join(W)){Y=$.replace(PQ,"1").split(g6),X=Y.length-1;for(;H<X;H++)W+=Y[H]+(~q.indexOf(H)?K.shift()||U+"0,0,0,0)":(G.length?G:K.length?K:Z).shift())}}if(!Y){Y=$.split(PQ),X=Y.length-1;for(;H<X;H++)W+=Y[H]+K[H]}return W+Y[X]},PQ=function(){var J="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",$;for($ in uZ)J+="|"+$+"\\b";return new RegExp(J+")","gi")}(),gO=/hsl[a]?\(/,VU=function J($){var Q=$.join(" "),Z;if(PQ.lastIndex=0,PQ.test(Q))return Z=gO.test(Q),$[1]=e5($[1],Z),$[0]=e5($[0],Z,IG($[1])),!0},oZ,N$=function(){var J=Date.now,$=500,Q=33,Z=J(),W=Z,K=4.166666666666667,U=K,H=[],q,Y,G,X,N,F,M=function E(L){var O=J()-W,z=L===!0,B,I,A,C;if((O>$||O<0)&&(Z+=O-Q),W+=O,A=W-Z,B=A-U,B>0||z)C=++X.frame,N=A-X.time*1000,X.time=A=A/1000,U+=B+(B>=K?4:K-B),I=1;if(z||(q=Y(E)),I)for(F=0;F<H.length;F++)H[F](A,N,C,L)};return X={time:0,frame:0,tick:function E(){M(!0)},deltaRatio:function E(L){return N/(1000/(L||60))},wake:function E(){if(KG){if(!$U&&XU())qQ=$U=window,LU=qQ.document||{},k$.gsap=dJ,(qQ.gsapVersions||(qQ.gsapVersions=[])).push(dJ.version),UG(zW||qQ.GreenSockGlobals||!qQ.gsap&&qQ||{}),kG.forEach(CG);G=typeof requestAnimationFrame!=="undefined"&&requestAnimationFrame,q&&X.sleep(),Y=G||function(L){return setTimeout(L,U-X.time*1000+1|0)},oZ=1,M(2)}},sleep:function E(){(G?cancelAnimationFrame:clearTimeout)(q),oZ=0,Y=lZ},lagSmoothing:function E(L,O){$=L||1/0,Q=Math.min(O||33,$)},fps:function E(L){K=1000/(L||240),U=X.time*1000+K},add:function E(L,O,z){var B=O?function(I,A,C,P){L(I,A,C,P),X.remove(B)}:L;return X.remove(L),H[z?"unshift":"push"](B),j9(),B},remove:function E(L,O){~(O=H.indexOf(L))&&H.splice(O,1)&&F>=O&&F--},_listeners:H},X}(),j9=function J(){return!oZ&&N$.wake()},w8={},uO=/^[\d.\-M][\d.\-,\s]/,pO=/["']/g,mO=function J($){var Q={},Z=$.substr(1,$.length-3).split(":"),W=Z[0],K=1,U=Z.length,H,q,Y;for(;K<U;K++)q=Z[K],H=K!==U-1?q.lastIndexOf(","):q.length,Y=q.substr(0,H),Q[W]=isNaN(Y)?Y.replace(pO,"").trim():+Y,W=q.substr(H+1).trim();return Q},dO=function J($){var Q=$.indexOf("(")+1,Z=$.indexOf(")"),W=$.indexOf("(",Q);return $.substring(Q,~W&&W<Z?$.indexOf(")",Z+1):Z)},cO=function J($){var Q=($+"").split("("),Z=w8[Q[0]];return Z&&Q.length>1&&Z.config?Z.config.apply(null,~$.indexOf("{")?[mO(Q[1])]:dO($).split(",").map(GG)):w8._CE&&uO.test($)?w8._CE("",$):Z},AG=function J($){return function(Q){return 1-$(1-Q)}},TG=function J($,Q){var Z=$._first,W;while(Z){if(Z instanceof bJ)J(Z,Q);else if(Z.vars.yoyoEase&&(!Z._yoyo||!Z._repeat)&&Z._yoyo!==Q)if(Z.timeline)J(Z.timeline,Q);else W=Z._ease,Z._ease=Z._yEase,Z._yEase=W,Z._yoyo=Q;Z=Z._next}},h6=function J($,Q){return!$?Q:(qJ($)?$:w8[$]||cO($))||Q},p6=function J($,Q,Z,W){if(Z===void 0)Z=function H(q){return 1-Q(1-q)};if(W===void 0)W=function H(q){return q<0.5?Q(q*2)/2:1-Q((1-q)*2)/2};var K={easeIn:Q,easeOut:Z,easeInOut:W},U;return eJ($,function(H){w8[H]=k$[H]=K,w8[U=H.toLowerCase()]=Z;for(var q in K)w8[U+(q==="easeIn"?".in":q==="easeOut"?".out":".inOut")]=w8[H+"."+q]=K[q]}),K},SG=function J($){return function(Q){return Q<0.5?(1-$(1-Q*2))/2:0.5+$((Q-0.5)*2)/2}},iK=function J($,Q,Z){var W=Q>=1?Q:1,K=(Z||($?0.3:0.45))/(Q<1?Q:1),U=K/eK*(Math.asin(1/W)||0),H=function Y(G){return G===1?1:W*Math.pow(2,-10*G)*BO((G-U)*K)+1},q=$==="out"?H:$==="in"?function(Y){return 1-H(1-Y)}:SG(H);return K=eK/K,q.config=function(Y,G){return J($,Y,G)},q},aK=function J($,Q){if(Q===void 0)Q=1.70158;var Z=function K(U){return U?--U*U*((Q+1)*U+Q)+1:0},W=$==="out"?Z:$==="in"?function(K){return 1-Z(1-K)}:SG(Z);return W.config=function(K){return J($,K)},W};eJ("Linear,Quad,Cubic,Quart,Quint,Strong",function(J,$){var Q=$<5?$+1:$;p6(J+",Power"+(Q-1),$?function(Z){return Math.pow(Z,Q)}:function(Z){return Z},function(Z){return 1-Math.pow(1-Z,Q)},function(Z){return Z<0.5?Math.pow(Z*2,Q)/2:1-Math.pow((1-Z)*2,Q)/2})});w8.Linear.easeNone=w8.none=w8.Linear.easeIn;p6("Elastic",iK("in"),iK("out"),iK());(function(J,$){var Q=1/$,Z=2*Q,W=2.5*Q,K=function U(H){return H<Q?J*H*H:H<Z?J*Math.pow(H-1.5/$,2)+0.75:H<W?J*(H-=2.25/$)*H+0.9375:J*Math.pow(H-2.625/$,2)+0.984375};p6("Bounce",function(U){return 1-K(1-U)},K)})(7.5625,2.75);p6("Expo",function(J){return Math.pow(2,10*(J-1))*J+J*J*J*J*J*J*(1-J)});p6("Circ",function(J){return-(QG(1-J*J)-1)});p6("Sine",function(J){return J===1?1:-OO(J*EO)+1});p6("Back",aK("in"),aK("out"),aK());w8.SteppedEase=w8.steps=k$.SteppedEase={config:function J($,Q){if($===void 0)$=1;var Z=1/$,W=$+(Q?0:1),K=Q?1:0,U=1-n8;return function(H){return((W*iZ(0,U,H)|0)+K)*Z}}};I9.ease=w8["quad.out"];eJ("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(J){return MU+=J+","+J+"Params,"});var zU=function J($,Q){this.id=MO++,$._gsap=this,this.target=$,this.harness=Q,this.get=Q?Q.get:BU,this.set=Q?Q.getSetter:jW},sZ=function(){function J(Q){if(this.vars=Q,this._delay=+Q.delay||0,this._repeat=Q.repeat===1/0?-2:Q.repeat||0)this._rDelay=Q.repeatDelay||0,this._yoyo=!!Q.yoyo||!!Q.yoyoEase;if(this._ts=1,S9(this,+Q.duration,1,1),this.data=Q.data,JJ)this._ctx=JJ,JJ.data.push(this);oZ||N$.wake()}var $=J.prototype;return $.delay=function Q(Z){if(Z||Z===0)return this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+Z-this._delay),this._delay=Z,this;return this._delay},$.duration=function Q(Z){return arguments.length?this.totalDuration(this._repeat>0?Z+(Z+this._rDelay)*this._repeat:Z):this.totalDuration()&&this._dur},$.totalDuration=function Q(Z){if(!arguments.length)return this._tDur;return this._dirty=0,S9(this,this._repeat<0?Z:(Z-this._repeat*this._rDelay)/(this._repeat+1))},$.totalTime=function Q(Z,W){if(j9(),!arguments.length)return this._tTime;var K=this._dp;if(K&&K.smoothChildTiming&&this._ts){SW(this,Z),!K._dp||K.parent||FG(K,this);while(K&&K.parent){if(K.parent._time!==K._start+(K._ts>=0?K._tTime/K._ts:(K.totalDuration()-K._tTime)/-K._ts))K.totalTime(K._tTime,!0);K=K.parent}if(!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&Z<this._tDur||this._ts<0&&Z>0||!this._tDur&&!Z))YQ(this._dp,this,this._start-this._delay)}if(this._tTime!==Z||!this._dur&&!W||this._initted&&Math.abs(this._zTime)===n8||!Z&&!this._initted&&(this.add||this._ptLookup))this._ts||(this._pTime=Z),YG(this,Z,W);return this},$.time=function Q(Z,W){return arguments.length?this.totalTime(Math.min(this.totalDuration(),Z+a5(this))%(this._dur+this._rDelay)||(Z?this._dur:0),W):this._time},$.totalProgress=function Q(Z,W){return arguments.length?this.totalTime(this.totalDuration()*Z,W):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},$.progress=function Q(Z,W){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-Z:Z)+a5(this),W):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},$.iteration=function Q(Z,W){var K=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(Z-1)*K,W):this._repeat?T9(this._tTime,K)+1:1},$.timeScale=function Q(Z,W){if(!arguments.length)return this._rts===-n8?0:this._rts;if(this._rts===Z)return this;var K=this.parent&&this._ts?CW(this.parent._time,this):this._tTime;return this._rts=+Z||0,this._ts=this._ps||Z===-n8?0:this._rts,this.totalTime(iZ(-Math.abs(this._delay),this.totalDuration(),K),W!==!1),TW(this),PO(this)},$.paused=function Q(Z){if(!arguments.length)return this._ps;if(this._ps!==Z)if(this._ps=Z,Z)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else j9(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==n8&&(this._tTime-=n8));return this},$.startTime=function Q(Z){if(arguments.length){this._start=Z;var W=this.parent||this._dp;return W&&(W._sort||!this.parent)&&YQ(W,this,Z-this._delay),this}return this._start},$.endTime=function Q(Z){return this._start+(F$(Z)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},$.rawTime=function Q(Z){var W=this.parent||this._dp;return!W?this._tTime:Z&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):!this._ts?this._tTime:CW(W.rawTime(Z),this)},$.revert=function Q(Z){if(Z===void 0)Z=zO;var W=vJ;if(vJ=Z,RU(this))this.timeline&&this.timeline.revert(Z),this.totalTime(-0.01,Z.suppressEvents);return this.data!=="nested"&&Z.kill!==!1&&this.kill(),vJ=W,this},$.globalTime=function Q(Z){var W=this,K=arguments.length?Z:W.rawTime();while(W)K=W._start+K/(Math.abs(W._ts)||1),W=W._dp;return!this.parent&&this._sat?this._sat.globalTime(Z):K},$.repeat=function Q(Z){if(arguments.length)return this._repeat=Z===1/0?-2:Z,r5(this);return this._repeat===-2?1/0:this._repeat},$.repeatDelay=function Q(Z){if(arguments.length){var W=this._time;return this._rDelay=Z,r5(this),W?this.time(W):this}return this._rDelay},$.yoyo=function Q(Z){if(arguments.length)return this._yoyo=Z,this;return this._yoyo},$.seek=function Q(Z,W){return this.totalTime(y$(this,Z),F$(W))},$.restart=function Q(Z,W){return this.play().totalTime(Z?-this._delay:0,F$(W)),this._dur||(this._zTime=-n8),this},$.play=function Q(Z,W){return Z!=null&&this.seek(Z,W),this.reversed(!1).paused(!1)},$.reverse=function Q(Z,W){return Z!=null&&this.seek(Z||this.totalDuration(),W),this.reversed(!0).paused(!1)},$.pause=function Q(Z,W){return Z!=null&&this.seek(Z,W),this.paused(!0)},$.resume=function Q(){return this.paused(!1)},$.reversed=function Q(Z){if(arguments.length)return!!Z!==this.reversed()&&this.timeScale(-this._rts||(Z?-n8:0)),this;return this._rts<0},$.invalidate=function Q(){return this._initted=this._act=0,this._zTime=-n8,this},$.isActive=function Q(){var Z=this.parent||this._dp,W=this._start,K;return!!(!Z||this._ts&&this._initted&&Z.isActive()&&(K=Z.rawTime(!0))>=W&&K<this.endTime(!0)-n8)},$.eventCallback=function Q(Z,W,K){var U=this.vars;if(arguments.length>1){if(!W)delete U[Z];else U[Z]=W,K&&(U[Z+"Params"]=K),Z==="onUpdate"&&(this._onUpdate=W);return this}return U[Z]},$.then=function Q(Z){var W=this;return new Promise(function(K){var U=qJ(Z)?Z:XG,H=function q(){var Y=W.then;W.then=null,qJ(U)&&(U=U(W))&&(U.then||U===W)&&(W.then=Y),K(U),W.then=Y};if(W._initted&&W.totalProgress()===1&&W._ts>=0||!W._tTime&&W._ts<0)H();else W._prom=H})},$.kill=function Q(){gZ(this)},J}();E$(sZ.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-n8,_prom:0,_ps:!1,_rts:1});var bJ=function(J){$G($,J);function $(Z,W){var K;if(Z===void 0)Z={};return K=J.call(this,Z)||this,K.labels={},K.smoothChildTiming=!!Z.smoothChildTiming,K.autoRemoveChildren=!!Z.autoRemoveChildren,K._sort=F$(Z.sortChildren),KJ&&YQ(Z.parent||KJ,CQ(K),W),Z.reversed&&K.reverse(),Z.paused&&K.paused(!0),Z.scrollTrigger&&LG(CQ(K),Z.scrollTrigger),K}var Q=$.prototype;return Q.to=function Z(W,K,U){return mZ(0,arguments,this),this},Q.from=function Z(W,K,U){return mZ(1,arguments,this),this},Q.fromTo=function Z(W,K,U,H){return mZ(2,arguments,this),this},Q.set=function Z(W,K,U){return K.duration=0,K.parent=this,pZ(K).repeatDelay||(K.repeat=0),K.immediateRender=!!K.immediateRender,new FJ(W,K,y$(this,U),1),this},Q.call=function Z(W,K,U){return YQ(this,FJ.delayedCall(0,W,K),U)},Q.staggerTo=function Z(W,K,U,H,q,Y,G){return U.duration=K,U.stagger=U.stagger||H,U.onComplete=Y,U.onCompleteParams=G,U.parent=this,new FJ(W,U,y$(this,q)),this},Q.staggerFrom=function Z(W,K,U,H,q,Y,G){return U.runBackwards=1,pZ(U).immediateRender=F$(U.immediateRender),this.staggerTo(W,K,U,H,q,Y,G)},Q.staggerFromTo=function Z(W,K,U,H,q,Y,G,X){return H.startAt=U,pZ(H).immediateRender=F$(H.immediateRender),this.staggerTo(W,K,H,q,Y,G,X)},Q.render=function Z(W,K,U){var H=this._time,q=this._dirty?this.totalDuration():this._tDur,Y=this._dur,G=W<=0?0:EJ(W),X=this._zTime<0!==W<0&&(this._initted||!Y),N,F,M,E,L,O,z,B,I,A,C,P;if(this!==KJ&&G>q&&W>=0&&(G=q),G!==this._tTime||U||X){if(H!==this._time&&Y)G+=this._time-H,W+=this._time-H;if(N=G,I=this._start,B=this._ts,O=!B,X)Y||(H=this._zTime),(W||!K)&&(this._zTime=W);if(this._repeat){if(C=this._yoyo,L=Y+this._rDelay,this._repeat<-1&&W<0)return this.totalTime(L*100+W,K,U);if(N=EJ(G%L),G===q)E=this._repeat,N=Y;else{if(A=EJ(G/L),E=~~A,E&&E===A)N=Y,E--;N>Y&&(N=Y)}if(A=T9(this._tTime,L),!H&&this._tTime&&A!==E&&this._tTime-A*L-this._dur<=0&&(A=E),C&&E&1)N=Y-N,P=1;if(E!==A&&!this._lock){var x=C&&A&1,D=x===(C&&E&1);if(E<A&&(x=!x),H=x?0:G%Y?Y:G,this._lock=1,this.render(H||(P?0:EJ(E*L)),K,!Y)._lock=0,this._tTime=G,!K&&this.parent&&D$(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),H&&H!==this._time||O!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(Y=this._dur,q=this._tDur,D)this._lock=2,H=x?Y:-0.0001,this.render(H,!0),this.vars.repeatRefresh&&!P&&this.invalidate();if(this._lock=0,!this._ts&&!O)return this;TG(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2){if(z=SO(this,EJ(H),EJ(N)),z)G-=N-(N=z._start)}if(this._tTime=G,this._time=N,this._act=!B,!this._initted)this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=W,H=0;if(!H&&G&&!K&&!A){if(D$(this,"onStart"),this._tTime!==G)return this}if(N>=H&&W>=0){F=this._first;while(F){if(M=F._next,(F._act||N>=F._start)&&F._ts&&z!==F){if(F.parent!==this)return this.render(W,K,U);if(F.render(F._ts>0?(N-F._start)*F._ts:(F._dirty?F.totalDuration():F._tDur)+(N-F._start)*F._ts,K,U),N!==this._time||!this._ts&&!O){z=0,M&&(G+=this._zTime=-n8);break}}F=M}}else{F=this._last;var k=W<0?W:N;while(F){if(M=F._prev,(F._act||k<=F._end)&&F._ts&&z!==F){if(F.parent!==this)return this.render(W,K,U);if(F.render(F._ts>0?(k-F._start)*F._ts:(F._dirty?F.totalDuration():F._tDur)+(k-F._start)*F._ts,K,U||vJ&&RU(F)),N!==this._time||!this._ts&&!O){z=0,M&&(G+=this._zTime=k?-n8:n8);break}}F=M}}if(z&&!K){if(this.pause(),z.render(N>=H?0:-n8)._zTime=N>=H?1:-1,this._ts)return this._start=I,TW(this),this.render(W,K,U)}if(this._onUpdate&&!K&&D$(this,"onUpdate",!0),G===q&&this._tTime>=this.totalDuration()||!G&&H){if(I===this._start||Math.abs(B)!==Math.abs(this._ts)){if(!this._lock){if((W||!Y)&&(G===q&&this._ts>0||!G&&this._ts<0)&&K6(this,1),!K&&!(W<0&&!H)&&(G||H||!q))D$(this,G===q&&W>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(G<q&&this.timeScale()>0)&&this._prom()}}}}return this},Q.add=function Z(W,K){var U=this;if(IQ(K)||(K=y$(this,K,W)),!(W instanceof sZ)){if(mJ(W))return W.forEach(function(H){return U.add(H,K)}),this;if(kJ(W))return this.addLabel(W,K);if(qJ(W))W=FJ.delayedCall(0,W);else return this}return this!==W?YQ(this,W,K):this},Q.getChildren=function Z(W,K,U,H){if(W===void 0)W=!0;if(K===void 0)K=!0;if(U===void 0)U=!0;if(H===void 0)H=-b$;var q=[],Y=this._first;while(Y){if(Y._start>=H)if(Y instanceof FJ)K&&q.push(Y);else U&&q.push(Y),W&&q.push.apply(q,Y.getChildren(!0,K,U));Y=Y._next}return q},Q.getById=function Z(W){var K=this.getChildren(1,1,1),U=K.length;while(U--)if(K[U].vars.id===W)return K[U]},Q.remove=function Z(W){if(kJ(W))return this.removeLabel(W);if(qJ(W))return this.killTweensOf(W);if(W.parent===this&&nZ(this,W),W===this._recent)this._recent=this._last;return v6(this)},Q.totalTime=function Z(W,K){if(!arguments.length)return this._tTime;if(this._forcing=1,!this._dp&&this._ts)this._start=EJ(N$.time-(this._ts>0?W/this._ts:(this.totalDuration()-W)/-this._ts));return J.prototype.totalTime.call(this,W,K),this._forcing=0,this},Q.addLabel=function Z(W,K){return this.labels[W]=y$(this,K),this},Q.removeLabel=function Z(W){return delete this.labels[W],this},Q.addPause=function Z(W,K,U){var H=FJ.delayedCall(0,K||lZ,U);return H.data="isPause",this._hasPause=1,YQ(this,H,y$(this,W))},Q.removePause=function Z(W){var K=this._first;W=y$(this,W);while(K){if(K._start===W&&K.data==="isPause")K6(K);K=K._next}},Q.killTweensOf=function Z(W,K,U){var H=this.getTweensOf(W,U),q=H.length;while(q--)Q6!==H[q]&&H[q].kill(W,K);return this},Q.getTweensOf=function Z(W,K){var U=[],H=v$(W),q=this._first,Y=IQ(K),G;while(q){if(q instanceof FJ){if(DO(q._targets,H)&&(Y?(!Q6||q._initted&&q._ts)&&q.globalTime(0)<=K&&q.globalTime(q.totalDuration())>K:!K||q.isActive()))U.push(q)}else if((G=q.getTweensOf(H,K)).length)U.push.apply(U,G);q=q._next}return U},Q.tweenTo=function Z(W,K){K=K||{};var U=this,H=y$(U,W),q=K,Y=q.startAt,G=q.onStart,X=q.onStartParams,N=q.immediateRender,F,M=FJ.to(U,E$({ease:K.ease||"none",lazy:!1,immediateRender:!1,time:H,overwrite:"auto",duration:K.duration||Math.abs((H-(Y&&"time"in Y?Y.time:U._time))/U.timeScale())||n8,onStart:function E(){if(U.pause(),!F){var L=K.duration||Math.abs((H-(Y&&"time"in Y?Y.time:U._time))/U.timeScale());M._dur!==L&&S9(M,L,0,1).render(M._time,!0,!0),F=1}G&&G.apply(M,X||[])}},K));return N?M.render(0):M},Q.tweenFromTo=function Z(W,K,U){return this.tweenTo(K,E$({startAt:{time:y$(this,W)}},U))},Q.recent=function Z(){return this._recent},Q.nextLabel=function Z(W){if(W===void 0)W=this._time;return t5(this,y$(this,W))},Q.previousLabel=function Z(W){if(W===void 0)W=this._time;return t5(this,y$(this,W),1)},Q.currentLabel=function Z(W){return arguments.length?this.seek(W,!0):this.previousLabel(this._time+n8)},Q.shiftChildren=function Z(W,K,U){if(U===void 0)U=0;var H=this._first,q=this.labels,Y;while(H){if(H._start>=U)H._start+=W,H._end+=W;H=H._next}if(K){for(Y in q)if(q[Y]>=U)q[Y]+=W}return v6(this)},Q.invalidate=function Z(W){var K=this._first;this._lock=0;while(K)K.invalidate(W),K=K._next;return J.prototype.invalidate.call(this,W)},Q.clear=function Z(W){if(W===void 0)W=!0;var K=this._first,U;while(K)U=K._next,this.remove(K),K=U;return this._dp&&(this._time=this._tTime=this._pTime=0),W&&(this.labels={}),v6(this)},Q.totalDuration=function Z(W){var K=0,U=this,H=U._last,q=b$,Y,G,X;if(arguments.length)return U.timeScale((U._repeat<0?U.duration():U.totalDuration())/(U.reversed()?-W:W));if(U._dirty){X=U.parent;while(H){if(Y=H._prev,H._dirty&&H.totalDuration(),G=H._start,G>q&&U._sort&&H._ts&&!U._lock)U._lock=1,YQ(U,H,G-H._delay,1)._lock=0;else q=G;if(G<0&&H._ts){if(K-=G,!X&&!U._dp||X&&X.smoothChildTiming)U._start+=G/U._ts,U._time-=G,U._tTime-=G;U.shiftChildren(-G,!1,-1/0),q=0}H._end>K&&H._ts&&(K=H._end),H=Y}S9(U,U===KJ&&U._time>K?U._time:K,1,1),U._dirty=0}return U._tDur},$.updateRoot=function Z(W){if(KJ._ts)YG(KJ,CW(W,KJ)),qG=N$.frame;if(N$.frame>=n5){n5+=L$.autoSleep||120;var K=KJ._first;if(!K||!K._ts){if(L$.autoSleep&&N$._listeners.length<2){while(K&&!K._ts)K=K._next;K||N$.sleep()}}}},$}(sZ);E$(bJ.prototype,{_lock:0,_hasPause:0,_forcing:0});var lO=function J($,Q,Z,W,K,U,H){var q=new J$(this._pt,$,Q,0,1,IU,null,K),Y=0,G=0,X,N,F,M,E,L,O,z;if(q.b=Z,q.e=W,Z+="",W+="",O=~W.indexOf("random("))W=w9(W);if(U)z=[Z,W],U(z,$,Q),Z=z[0],W=z[1];N=Z.match(oK)||[];while(X=oK.exec(W)){if(M=X[0],E=W.substring(Y,X.index),F)F=(F+1)%5;else if(E.substr(-5)==="rgba(")F=1;if(M!==N[G++])L=parseFloat(N[G-1])||0,q._pt={_next:q._pt,p:E||G===1?E:",",s:L,c:M.charAt(1)==="="?u6(L,M)-L:parseFloat(M)-L,m:F&&F<4?Math.round:0},Y=oK.lastIndex}if(q.c=Y<W.length?W.substring(Y,W.length):"",q.fp=H,FU.test(W)||O)q.e=0;return this._pt=q,q},DU=function J($,Q,Z,W,K,U,H,q,Y,G){qJ(W)&&(W=W(K||0,$,U));var X=$[Q],N=Z!=="get"?Z:!qJ(X)?X:Y?$[Q.indexOf("set")||!qJ($["get"+Q.substr(3)])?Q:"get"+Q.substr(3)](Y):$[Q](),F=!qJ(X)?PU:Y?aO:_G,M;if(kJ(W)){if(~W.indexOf("random("))W=w9(W);if(W.charAt(1)==="="){if(M=u6(N,W)+(hJ(N)||0),M||M===0)W=M}}if(!G||N!==W||qU){if(!isNaN(N*W)&&W!=="")return M=new J$(this._pt,$,Q,+N||0,W-(N||0),typeof X==="boolean"?tO:xG,0,F),Y&&(M.fp=Y),H&&M.modifier(H,this,$),this._pt=M;return!X&&!(Q in $)&&AW(Q,W),lO.call(this,$,Q,N,W,F,q||L$.stringFilter,Y)}},oO=function J($,Q,Z,W,K){if(qJ($)&&($=dZ($,K,Q,Z,W)),!GQ($)||$.style&&$.nodeType||mJ($)||ZG($))return kJ($)?dZ($,K,Q,Z,W):$;var U={},H;for(H in $)U[H]=dZ($[H],K,Q,Z,W);return U},kU=function J($,Q,Z,W,K,U){var H,q,Y,G;if(X$[$]&&(H=new X$[$]).init(K,H.rawVars?Q[$]:oO(Q[$],W,K,U,Z),Z,W,U)!==!1){if(Z._pt=q=new J$(Z._pt,K,$,0,1,H.render,H,0,H.priority),Z!==P9){Y=Z._ptLookup[Z._targets.indexOf(K)],G=H._props.length;while(G--)Y[H._props[G]]=q}}return H},Q6,qU,CU=function J($,Q,Z){var W=$.vars,K=W.ease,U=W.startAt,H=W.immediateRender,q=W.lazy,Y=W.onUpdate,G=W.runBackwards,X=W.yoyoEase,N=W.keyframes,F=W.autoRevert,M=$._dur,E=$._startAt,L=$._targets,O=$.parent,z=O&&O.data==="nested"?O.vars.targets:L,B=$._overwrite==="auto"&&!GU,I=$.timeline,A,C,P,x,D,k,b,v,m,n,r,s,J0;if(I&&(!N||!K)&&(K="none"),$._ease=h6(K,I9.ease),$._yEase=X?AG(h6(X===!0?K:X,I9.ease)):0,X&&$._yoyo&&!$._repeat)X=$._yEase,$._yEase=$._ease,$._ease=X;if($._from=!I&&!!W.runBackwards,!I||N&&!W.stagger){if(v=L[0]?W6(L[0]).harness:0,s=v&&W[v.prop],A=kW(W,EU),E)E._zTime<0&&E.progress(1),Q<0&&G&&H&&!F?E.render(-1,!0):E.revert(G&&M?BW:VO),E._lazy=0;if(U){if(K6($._startAt=FJ.set(L,E$({data:"isStart",overwrite:!1,parent:O,immediateRender:!0,lazy:!E&&F$(q),startAt:null,delay:0,onUpdate:Y&&function(){return D$($,"onUpdate")},stagger:0},U))),$._startAt._dp=0,$._startAt._sat=$,Q<0&&(vJ||!H&&!F)&&$._startAt.revert(BW),H){if(M&&Q<=0&&Z<=0){Q&&($._zTime=Q);return}}}else if(G&&M){if(!E){if(Q&&(H=!1),P=E$({overwrite:!1,data:"isFromStart",lazy:H&&!E&&F$(q),immediateRender:H,stagger:0,parent:O},A),s&&(P[v.prop]=s),K6($._startAt=FJ.set(L,P)),$._startAt._dp=0,$._startAt._sat=$,Q<0&&(vJ?$._startAt.revert(BW):$._startAt.render(-1,!0)),$._zTime=Q,!H)J($._startAt,n8,n8);else if(!Q)return}}$._pt=$._ptCache=0,q=M&&F$(q)||q&&!M;for(C=0;C<L.length;C++){if(D=L[C],b=D._gsap||OU(L)[C]._gsap,$._ptLookup[C]=n={},QU[b.id]&&Z6.length&&DW(),r=z===L?C:z.indexOf(D),v&&(m=new v).init(D,s||A,$,r,z)!==!1)$._pt=x=new J$($._pt,D,m.name,0,1,m.render,m,0,m.priority),m._props.forEach(function(a){n[a]=x}),m.priority&&(k=1);if(!v||s)for(P in A)if(X$[P]&&(m=kU(P,A,$,r,D,z)))m.priority&&(k=1);else n[P]=x=DU.call($,D,P,"get",A[P],r,z,0,W.stringFilter);if($._op&&$._op[C]&&$.kill(D,$._op[C]),B&&$._pt)Q6=$,KJ.killTweensOf(D,n,$.globalTime(Q)),J0=!$.parent,Q6=0;$._pt&&q&&(QU[b.id]=1)}k&&TU($),$._onInit&&$._onInit($)}$._onUpdate=Y,$._initted=(!$._op||$._pt)&&!J0,N&&Q<=0&&I.render(b$,!0,!0)},sO=function J($,Q,Z,W,K,U,H,q){var Y=($._pt&&$._ptCache||($._ptCache={}))[Q],G,X,N,F;if(!Y){Y=$._ptCache[Q]=[],N=$._ptLookup,F=$._targets.length;while(F--){if(G=N[F][Q],G&&G.d&&G.d._pt){G=G.d._pt;while(G&&G.p!==Q&&G.fp!==Q)G=G._next}if(!G)return qU=1,$.vars[Q]="+=0",CU($,H),qU=0,q?cZ(Q+" not eligible for reset"):1;Y.push(G)}}F=Y.length;while(F--)X=Y[F],G=X._pt||X,G.s=(W||W===0)&&!K?W:G.s+(W||0)+U*G.c,G.c=Z-G.s,X.e&&(X.e=YJ(Z)+hJ(X.e)),X.b&&(X.b=G.s+hJ(X.b))},nO=function J($,Q){var Z=$[0]?W6($[0]).harness:0,W=Z&&Z.aliases,K,U,H,q;if(!W)return Q;K=A9({},Q);for(U in W)if(U in K){q=W[U].split(","),H=q.length;while(H--)K[q[H]]=K[U]}return K},iO=function J($,Q,Z,W){var K=Q.ease||W||"power1.inOut",U,H;if(mJ(Q))H=Z[$]||(Z[$]=[]),Q.forEach(function(q,Y){return H.push({t:Y/(Q.length-1)*100,v:q,e:K})});else for(U in Q)H=Z[U]||(Z[U]=[]),U==="ease"||H.push({t:parseFloat($),v:Q[U],e:K})},dZ=function J($,Q,Z,W,K){return qJ($)?$.call(Q,Z,W,K):kJ($)&&~$.indexOf("random(")?w9($):$},jG=MU+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wG={};eJ(jG+",id,stagger,delay,duration,paused,scrollTrigger",function(J){return wG[J]=1});var FJ=function(J){$G($,J);function $(Z,W,K,U){var H;if(typeof W==="number")K.duration=W,W=K,K=null;H=J.call(this,U?W:pZ(W))||this;var q=H.vars,Y=q.duration,G=q.delay,X=q.immediateRender,N=q.stagger,F=q.overwrite,M=q.keyframes,E=q.defaults,L=q.scrollTrigger,O=q.yoyoEase,z=W.parent||KJ,B=(mJ(Z)||ZG(Z)?IQ(Z[0]):("length"in W))?[Z]:v$(Z),I,A,C,P,x,D,k,b;if(H._targets=B.length?OU(B):cZ("GSAP target "+Z+" not found. https://gsap.com",!L$.nullTargetWarn)||[],H._ptLookup=[],H._overwrite=F,M||N||OW(Y)||OW(G)){if(W=H.vars,I=H.timeline=new bJ({data:"nested",defaults:E||{},targets:z&&z.data==="nested"?z.vars.targets:B}),I.kill(),I.parent=I._dp=CQ(H),I._start=0,N||OW(Y)||OW(G)){if(P=B.length,k=N&&BG(N),GQ(N)){for(x in N)if(~jG.indexOf(x))b||(b={}),b[x]=N[x]}for(A=0;A<P;A++){if(C=kW(W,wG),C.stagger=0,O&&(C.yoyoEase=O),b&&A9(C,b),D=B[A],C.duration=+dZ(Y,CQ(H),A,D,B),C.delay=(+dZ(G,CQ(H),A,D,B)||0)-H._delay,!N&&P===1&&C.delay)H._delay=G=C.delay,H._start+=G,C.delay=0;I.to(D,C,k?k(A,D,B):0),I._ease=w8.none}I.duration()?Y=G=0:H.timeline=0}else if(M){pZ(E$(I.vars.defaults,{ease:"none"})),I._ease=h6(M.ease||W.ease||"none");var v=0,m,n,r;if(mJ(M))M.forEach(function(s){return I.to(B,s,">")}),I.duration();else{C={};for(x in M)x==="ease"||x==="easeEach"||iO(x,M[x],C,M.easeEach);for(x in C){m=C[x].sort(function(s,J0){return s.t-J0.t}),v=0;for(A=0;A<m.length;A++)n=m[A],r={ease:n.e,duration:(n.t-(A?m[A-1].t:0))/100*Y},r[x]=n.v,I.to(B,r,v),v+=r.duration}I.duration()<Y&&I.to({},{duration:Y-I.duration()})}}Y||H.duration(Y=I.duration())}else H.timeline=0;if(F===!0&&!GU)Q6=CQ(H),KJ.killTweensOf(B),Q6=0;if(YQ(z,CQ(H),K),W.reversed&&H.reverse(),W.paused&&H.paused(!0),X||!Y&&!M&&H._start===EJ(z._time)&&F$(X)&&IO(CQ(H))&&z.data!=="nested")H._tTime=-n8,H.render(Math.max(0,-G)||0);return L&&LG(CQ(H),L),H}var Q=$.prototype;return Q.render=function Z(W,K,U){var H=this._time,q=this._tDur,Y=this._dur,G=W<0,X=W>q-n8&&!G?q:W<n8?0:W,N,F,M,E,L,O,z,B,I;if(!Y)TO(this,W,K,U);else if(X!==this._tTime||!W||U||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==G||this._lazy){if(N=X,B=this.timeline,this._repeat){if(E=Y+this._rDelay,this._repeat<-1&&G)return this.totalTime(E*100+W,K,U);if(N=EJ(X%E),X===q)M=this._repeat,N=Y;else if(L=EJ(X/E),M=~~L,M&&M===L)N=Y,M--;else if(N>Y)N=Y;if(O=this._yoyo&&M&1,O)I=this._yEase,N=Y-N;if(L=T9(this._tTime,E),N===H&&!U&&this._initted&&M===L)return this._tTime=X,this;if(M!==L){if(B&&this._yEase&&TG(B,O),this.vars.repeatRefresh&&!O&&!this._lock&&N!==E&&this._initted)this._lock=U=1,this.render(EJ(E*M),!0).invalidate()._lock=0}}if(!this._initted){if(EG(this,G?W:N,U,K,X))return this._tTime=0,this;if(H!==this._time&&!(U&&this.vars.repeatRefresh&&M!==L))return this;if(Y!==this._dur)return this.render(W,K,U)}if(this._tTime=X,this._time=N,!this._act&&this._ts)this._act=1,this._lazy=0;if(this.ratio=z=(I||this._ease)(N/Y),this._from)this.ratio=z=1-z;if(!H&&X&&!K&&!L){if(D$(this,"onStart"),this._tTime!==X)return this}F=this._pt;while(F)F.r(z,F.d),F=F._next;if(B&&B.render(W<0?W:B._dur*B._ease(N/this._dur),K,U)||this._startAt&&(this._zTime=W),this._onUpdate&&!K)G&&ZU(this,W,K,U),D$(this,"onUpdate");if(this._repeat&&M!==L&&this.vars.onRepeat&&!K&&this.parent&&D$(this,"onRepeat"),(X===this._tDur||!X)&&this._tTime===X){if(G&&!this._onUpdate&&ZU(this,W,!0,!0),(W||!Y)&&(X===this._tDur&&this._ts>0||!X&&this._ts<0)&&K6(this,1),!K&&!(G&&!H)&&(X||H||O))D$(this,X===q?"onComplete":"onReverseComplete",!0),this._prom&&!(X<q&&this.timeScale()>0)&&this._prom()}}return this},Q.targets=function Z(){return this._targets},Q.invalidate=function Z(W){return(!W||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(W),J.prototype.invalidate.call(this,W)},Q.resetTo=function Z(W,K,U,H,q){oZ||N$.wake(),this._ts||this.play();var Y=Math.min(this._dur,(this._dp._time-this._start)*this._ts),G;if(this._initted||CU(this,Y),G=this._ease(Y/this._dur),sO(this,W,K,U,H,G,Y,q))return this.resetTo(W,K,U,H,1);return SW(this,0),this.parent||NG(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0)},Q.kill=function Z(W,K){if(K===void 0)K="all";if(!W&&(!K||K==="all"))return this._lazy=this._pt=0,this.parent?gZ(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vJ),this;if(this.timeline){var U=this.timeline.totalDuration();return this.timeline.killTweensOf(W,K,Q6&&Q6.vars.overwrite!==!0)._first||gZ(this),this.parent&&U!==this.timeline.totalDuration()&&S9(this,this._dur*this.timeline._tDur/U,0,1),this}var H=this._targets,q=W?v$(W):H,Y=this._ptLookup,G=this._pt,X,N,F,M,E,L,O;if((!K||K==="all")&&CO(H,q))return K==="all"&&(this._pt=0),gZ(this);if(X=this._op=this._op||[],K!=="all"){if(kJ(K))E={},eJ(K,function(z){return E[z]=1}),K=E;K=nO(H,K)}O=H.length;while(O--)if(~q.indexOf(H[O])){if(N=Y[O],K==="all")X[O]=K,M=N,F={};else F=X[O]=X[O]||{},M=K;for(E in M){if(L=N&&N[E],L){if(!("kill"in L.d)||L.d.kill(E)===!0)nZ(this,L,"_pt");delete N[E]}if(F!=="all")F[E]=1}}return this._initted&&!this._pt&&G&&gZ(this),this},$.to=function Z(W,K){return new $(W,K,arguments[2])},$.from=function Z(W,K){return mZ(1,arguments)},$.delayedCall=function Z(W,K,U,H){return new $(K,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:W,onComplete:K,onReverseComplete:K,onCompleteParams:U,onReverseCompleteParams:U,callbackScope:H})},$.fromTo=function Z(W,K,U){return mZ(2,arguments)},$.set=function Z(W,K){return K.duration=0,K.repeatDelay||(K.repeat=0),new $(W,K)},$.killTweensOf=function Z(W,K,U){return KJ.killTweensOf(W,K,U)},$}(sZ);E$(FJ.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});eJ("staggerTo,staggerFrom,staggerFromTo",function(J){FJ[J]=function(){var $=new bJ,Q=KU.call(arguments,0);return Q.splice(J==="staggerFromTo"?5:4,0,0),$[J].apply($,Q)}});var PU=function J($,Q,Z){return $[Q]=Z},_G=function J($,Q,Z){return $[Q](Z)},aO=function J($,Q,Z,W){return $[Q](W.fp,Z)},rO=function J($,Q,Z){return $.setAttribute(Q,Z)},jW=function J($,Q){return qJ($[Q])?_G:IW($[Q])&&$.setAttribute?rO:PU},xG=function J($,Q){return Q.set(Q.t,Q.p,Math.round((Q.s+Q.c*$)*1e6)/1e6,Q)},tO=function J($,Q){return Q.set(Q.t,Q.p,!!(Q.s+Q.c*$),Q)},IU=function J($,Q){var Z=Q._pt,W="";if(!$&&Q.b)W=Q.b;else if($===1&&Q.e)W=Q.e;else{while(Z)W=Z.p+(Z.m?Z.m(Z.s+Z.c*$):Math.round((Z.s+Z.c*$)*1e4)/1e4)+W,Z=Z._next;W+=Q.c}Q.set(Q.t,Q.p,W,Q)},AU=function J($,Q){var Z=Q._pt;while(Z)Z.r($,Z.d),Z=Z._next},eO=function J($,Q,Z,W){var K=this._pt,U;while(K)U=K._next,K.p===W&&K.modifier($,Q,Z),K=U},JB=function J($){var Q=this._pt,Z,W;while(Q){if(W=Q._next,Q.p===$&&!Q.op||Q.op===$)nZ(this,Q,"_pt");else if(!Q.dep)Z=1;Q=W}return!Z},$B=function J($,Q,Z,W){W.mSet($,Q,W.m.call(W.tween,Z,W.mt),W)},TU=function J($){var Q=$._pt,Z,W,K,U;while(Q){Z=Q._next,W=K;while(W&&W.pr>Q.pr)W=W._next;if(Q._prev=W?W._prev:U)Q._prev._next=Q;else K=Q;if(Q._next=W)W._prev=Q;else U=Q;Q=Z}$._pt=K},J$=function(){function J(Q,Z,W,K,U,H,q,Y,G){if(this.t=Z,this.s=K,this.c=U,this.p=W,this.r=H||xG,this.d=q||this,this.set=Y||PU,this.pr=G||0,this._next=Q,Q)Q._prev=this}var $=J.prototype;return $.modifier=function Q(Z,W,K){this.mSet=this.mSet||this.set,this.set=$B,this.m=Z,this.mt=K,this.tween=W},J}();eJ(MU+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(J){return EU[J]=1});k$.TweenMax=k$.TweenLite=FJ;k$.TimelineLite=k$.TimelineMax=bJ;KJ=new bJ({sortChildren:!1,defaults:I9,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});L$.stringFilter=VU;var f6=[],VW={},QB=[],JG=0,ZB=0,rK=function J($){return(VW[$]||QB).map(function(Q){return Q()})},YU=function J(){var $=Date.now(),Q=[];if($-JG>2)rK("matchMediaInit"),f6.forEach(function(Z){var{queries:W,conditions:K}=Z,U,H,q,Y;for(H in W)if(U=qQ.matchMedia(W[H]).matches,U&&(q=1),U!==K[H])K[H]=U,Y=1;if(Y)Z.revert(),q&&Q.push(Z)}),rK("matchMediaRevert"),Q.forEach(function(Z){return Z.onMatch(Z,function(W){return Z.add(null,W)})}),JG=$,rK("matchMedia")},yG=function(){function J(Q,Z){this.selector=Z&&UU(Z),this.data=[],this._r=[],this.isReverted=!1,this.id=ZB++,Q&&this.add(Q)}var $=J.prototype;return $.add=function Q(Z,W,K){if(qJ(Z))K=W,W=Z,Z=qJ;var U=this,H=function q(){var Y=JJ,G=U.selector,X;return Y&&Y!==U&&Y.data.push(U),K&&(U.selector=UU(K)),JJ=U,X=W.apply(U,arguments),qJ(X)&&U._r.push(X),JJ=Y,U.selector=G,U.isReverted=!1,X};return U.last=H,Z===qJ?H(U,function(q){return U.add(null,q)}):Z?U[Z]=H:H},$.ignore=function Q(Z){var W=JJ;JJ=null,Z(this),JJ=W},$.getTweens=function Q(){var Z=[];return this.data.forEach(function(W){return W instanceof J?Z.push.apply(Z,W.getTweens()):W instanceof FJ&&!(W.parent&&W.parent.data==="nested")&&Z.push(W)}),Z},$.clear=function Q(){this._r.length=this.data.length=0},$.kill=function Q(Z,W){var K=this;if(Z)(function(){var H=K.getTweens(),q=K.data.length,Y;while(q--)if(Y=K.data[q],Y.data==="isFlip")Y.revert(),Y.getChildren(!0,!0,!1).forEach(function(G){return H.splice(H.indexOf(G),1)});H.map(function(G){return{g:G._dur||G._delay||G._sat&&!G._sat.vars.immediateRender?G.globalTime(0):-1/0,t:G}}).sort(function(G,X){return X.g-G.g||-1/0}).forEach(function(G){return G.t.revert(Z)}),q=K.data.length;while(q--)if(Y=K.data[q],Y instanceof bJ){if(Y.data!=="nested")Y.scrollTrigger&&Y.scrollTrigger.revert(),Y.kill()}else!(Y instanceof FJ)&&Y.revert&&Y.revert(Z);K._r.forEach(function(G){return G(Z,K)}),K.isReverted=!0})();else this.data.forEach(function(H){return H.kill&&H.kill()});if(this.clear(),W){var U=f6.length;while(U--)f6[U].id===this.id&&f6.splice(U,1)}},$.revert=function Q(Z){this.kill(Z||{})},J}(),WB=function(){function J(Q){this.contexts=[],this.scope=Q,JJ&&JJ.data.push(this)}var $=J.prototype;return $.add=function Q(Z,W,K){GQ(Z)||(Z={matches:Z});var U=new yG(0,K||this.scope),H=U.conditions={},q,Y,G;JJ&&!U.selector&&(U.selector=JJ.selector),this.contexts.push(U),W=U.add("onMatch",W),U.queries=Z;for(Y in Z)if(Y==="all")G=1;else if(q=qQ.matchMedia(Z[Y]),q)f6.indexOf(U)<0&&f6.push(U),(H[Y]=q.matches)&&(G=1),q.addListener?q.addListener(YU):q.addEventListener("change",YU);return G&&W(U,function(X){return U.add(null,X)}),this},$.revert=function Q(Z){this.kill(Z||{})},$.kill=function Q(Z){this.contexts.forEach(function(W){return W.kill(Z,!0)})},J}(),PW={registerPlugin:function J(){for(var $=arguments.length,Q=new Array($),Z=0;Z<$;Z++)Q[Z]=arguments[Z];Q.forEach(function(W){return CG(W)})},timeline:function J($){return new bJ($)},getTweensOf:function J($,Q){return KJ.getTweensOf($,Q)},getProperty:function J($,Q,Z,W){kJ($)&&($=v$($)[0]);var K=W6($||{}).get,U=Z?XG:GG;return Z==="native"&&(Z=""),!$?$:!Q?function(H,q,Y){return U((X$[H]&&X$[H].get||K)($,H,q,Y))}:U((X$[Q]&&X$[Q].get||K)($,Q,Z,W))},quickSetter:function J($,Q,Z){if($=v$($),$.length>1){var W=$.map(function(G){return dJ.quickSetter(G,Q,Z)}),K=W.length;return function(G){var X=K;while(X--)W[X](G)}}$=$[0]||{};var U=X$[Q],H=W6($),q=H.harness&&(H.harness.aliases||{})[Q]||Q,Y=U?function(G){var X=new U;P9._pt=0,X.init($,Z?G+Z:G,P9,0,[$]),X.render(1,X),P9._pt&&AU(1,P9)}:H.set($,q);return U?Y:function(G){return Y($,q,Z?G+Z:G,H,1)}},quickTo:function J($,Q,Z){var W,K=dJ.to($,E$((W={},W[Q]="+=0.1",W.paused=!0,W.stagger=0,W),Z||{})),U=function H(q,Y,G){return K.resetTo(Q,q,Y,G)};return U.tween=K,U},isTweening:function J($){return KJ.getTweensOf($,!0).length>0},defaults:function J($){return $&&$.ease&&($.ease=h6($.ease,I9.ease)),i5(I9,$||{})},config:function J($){return i5(L$,$||{})},registerEffect:function J($){var{name:Q,effect:Z,plugins:W,defaults:K,extendTimeline:U}=$;if((W||"").split(",").forEach(function(H){return H&&!X$[H]&&!k$[H]&&cZ(Q+" effect requires "+H+" plugin.")}),sK[Q]=function(H,q,Y){return Z(v$(H),E$(q||{},K),Y)},U)bJ.prototype[Q]=function(H,q,Y){return this.add(sK[Q](H,GQ(q)?q:(Y=q)&&{},this),Y)}},registerEase:function J($,Q){w8[$]=h6(Q)},parseEase:function J($,Q){return arguments.length?h6($,Q):w8},getById:function J($){return KJ.getById($)},exportRoot:function J($,Q){if($===void 0)$={};var Z=new bJ($),W,K;Z.smoothChildTiming=F$($.smoothChildTiming),KJ.remove(Z),Z._dp=0,Z._time=Z._tTime=KJ._time,W=KJ._first;while(W){if(K=W._next,Q||!(!W._dur&&W instanceof FJ&&W.vars.onComplete===W._targets[0]))YQ(Z,W,W._start-W._delay);W=K}return YQ(KJ,Z,0),Z},context:function J($,Q){return $?new yG($,Q):JJ},matchMedia:function J($){return new WB($)},matchMediaRefresh:function J(){return f6.forEach(function($){var Q=$.conditions,Z,W;for(W in Q)if(Q[W])Q[W]=!1,Z=1;Z&&$.revert()})||YU()},addEventListener:function J($,Q){var Z=VW[$]||(VW[$]=[]);~Z.indexOf(Q)||Z.push(Q)},removeEventListener:function J($,Q){var Z=VW[$],W=Z&&Z.indexOf(Q);W>=0&&Z.splice(W,1)},utils:{wrap:vO,wrapYoyo:hO,distribute:BG,random:VG,snap:RG,normalize:bO,getUnit:hJ,clamp:wO,splitColor:PG,toArray:v$,selector:UU,mapRange:DG,pipe:xO,unitize:yO,interpolate:fO,shuffle:OG},install:UG,effects:sK,ticker:N$,updateRoot:bJ.updateRoot,plugins:X$,globalTimeline:KJ,core:{PropTween:J$,globals:HG,Tween:FJ,Timeline:bJ,Animation:sZ,getCache:W6,_removeLinkedListItem:nZ,reverting:function J(){return vJ},context:function J($){if($&&JJ)JJ.data.push($),$._ctx=JJ;return JJ},suppressOverwrites:function J($){return GU=$}}};eJ("to,from,fromTo,delayedCall,set,killTweensOf",function(J){return PW[J]=FJ[J]});N$.add(bJ.updateRoot);P9=PW.to({},{duration:0});var KB=function J($,Q){var Z=$._pt;while(Z&&Z.p!==Q&&Z.op!==Q&&Z.fp!==Q)Z=Z._next;return Z},UB=function J($,Q){var Z=$._targets,W,K,U;for(W in Q){K=Z.length;while(K--)if(U=$._ptLookup[K][W],U&&(U=U.d)){if(U._pt)U=KB(U,W);U&&U.modifier&&U.modifier(Q[W],$,Z[K],W)}}},tK=function J($,Q){return{name:$,headless:1,rawVars:1,init:function Z(W,K,U){U._onInit=function(H){var q,Y;if(kJ(K))q={},eJ(K,function(G){return q[G]=1}),K=q;if(Q){q={};for(Y in K)q[Y]=Q(K[Y]);K=q}UB(H,K)}}}},dJ=PW.registerPlugin({name:"attr",init:function J($,Q,Z,W,K){var U,H,q;this.tween=Z;for(U in Q)q=$.getAttribute(U)||"",H=this.add($,"setAttribute",(q||0)+"",Q[U],W,K,0,0,U),H.op=U,H.b=q,this._props.push(U)},render:function J($,Q){var Z=Q._pt;while(Z)vJ?Z.set(Z.t,Z.p,Z.b,Z):Z.r($,Z.d),Z=Z._next}},{name:"endArray",headless:1,init:function J($,Q){var Z=Q.length;while(Z--)this.add($,Z,$[Z]||0,Q[Z],0,0,0,0,0,1)}},tK("roundProps",HU),tK("modifiers"),tK("snap",RG))||PW;FJ.version=bJ.version=dJ.version="3.13.0";KG=1;XU()&&j9();var{Power0:HB,Power1:qB,Power2:YB,Power3:GB,Power4:XB,Linear:NB,Quad:FB,Cubic:LB,Quart:EB,Quint:MB,Strong:OB,Elastic:BB,Back:RB,SteppedEase:VB,Bounce:zB,Sine:DB,Expo:kB,Circ:CB}=w8;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bG,H6,x9,yU,l6,PB,vG,bU,IB=function J(){return typeof window!=="undefined"},TQ={},c6=180/Math.PI,y9=Math.PI/180,_9=Math.atan2,hG=1e8,vU=/([A-Z])/g,AB=/(left|right|width|margin|padding|x)/i,TB=/[\s,\(]\S/,XQ={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jU=function J($,Q){return Q.set(Q.t,Q.p,Math.round((Q.s+Q.c*$)*1e4)/1e4+Q.u,Q)},SB=function J($,Q){return Q.set(Q.t,Q.p,$===1?Q.e:Math.round((Q.s+Q.c*$)*1e4)/1e4+Q.u,Q)},jB=function J($,Q){return Q.set(Q.t,Q.p,$?Math.round((Q.s+Q.c*$)*1e4)/1e4+Q.u:Q.b,Q)},wB=function J($,Q){var Z=Q.s+Q.c*$;Q.set(Q.t,Q.p,~~(Z+(Z<0?-0.5:0.5))+Q.u,Q)},lG=function J($,Q){return Q.set(Q.t,Q.p,$?Q.e:Q.b,Q)},oG=function J($,Q){return Q.set(Q.t,Q.p,$!==1?Q.b:Q.e,Q)},_B=function J($,Q,Z){return $.style[Q]=Z},xB=function J($,Q,Z){return $.style.setProperty(Q,Z)},yB=function J($,Q,Z){return $._gsap[Q]=Z},bB=function J($,Q,Z){return $._gsap.scaleX=$._gsap.scaleY=Z},vB=function J($,Q,Z,W,K){var U=$._gsap;U.scaleX=U.scaleY=Z,U.renderTransform(K,U)},hB=function J($,Q,Z,W,K){var U=$._gsap;U[Q]=Z,U.renderTransform(K,U)},UJ="transform",M$=UJ+"Origin",fB=function J($,Q){var Z=this,W=this.target,K=W.style,U=W._gsap;if($ in TQ&&K){if(this.tfm=this.tfm||{},$!=="transform")$=XQ[$]||$,~$.indexOf(",")?$.split(",").forEach(function(H){return Z.tfm[H]=AQ(W,H)}):this.tfm[$]=U.x?U[$]:AQ(W,$),$===M$&&(this.tfm.zOrigin=U.zOrigin);else return XQ.transform.split(",").forEach(function(H){return J.call(Z,H,Q)});if(this.props.indexOf(UJ)>=0)return;if(U.svg)this.svgo=W.getAttribute("data-svg-origin"),this.props.push(M$,Q,"");$=UJ}(K||Q)&&this.props.push($,Q,K[$])},sG=function J($){if($.translate)$.removeProperty("translate"),$.removeProperty("scale"),$.removeProperty("rotate")},gB=function J(){var $=this.props,Q=this.target,Z=Q.style,W=Q._gsap,K,U;for(K=0;K<$.length;K+=3)if(!$[K+1])$[K+2]?Z[$[K]]=$[K+2]:Z.removeProperty($[K].substr(0,2)==="--"?$[K]:$[K].replace(vU,"-$1").toLowerCase());else if($[K+1]===2)Q[$[K]]($[K+2]);else Q[$[K]]=$[K+2];if(this.tfm){for(U in this.tfm)W[U]=this.tfm[U];if(W.svg)W.renderTransform(),Q.setAttribute("data-svg-origin",this.svgo||"");if(K=bU(),(!K||!K.isStart)&&!Z[UJ]){if(sG(Z),W.zOrigin&&Z[M$])Z[M$]+=" "+W.zOrigin+"px",W.zOrigin=0,W.renderTransform();W.uncache=1}}},nG=function J($,Q){var Z={target:$,props:[],revert:gB,save:fB};return $._gsap||dJ.core.getCache($),Q&&$.style&&$.nodeType&&Q.split(",").forEach(function(W){return Z.save(W)}),Z},iG,wU=function J($,Q){var Z=H6.createElementNS?H6.createElementNS((Q||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),$):H6.createElement($);return Z&&Z.style?Z:H6.createElement($)},h$=function J($,Q,Z){var W=getComputedStyle($);return W[Q]||W.getPropertyValue(Q.replace(vU,"-$1").toLowerCase())||W.getPropertyValue(Q)||!Z&&J($,b9(Q)||Q,1)||""},fG="O,Moz,ms,Ms,Webkit".split(","),b9=function J($,Q,Z){var W=Q||l6,K=W.style,U=5;if($ in K&&!Z)return $;$=$.charAt(0).toUpperCase()+$.substr(1);while(U--&&!(fG[U]+$ in K));return U<0?null:(U===3?"ms":U>=0?fG[U]:"")+$},_U=function J(){if(IB()&&window.document)bG=window,H6=bG.document,x9=H6.documentElement,l6=wU("div")||{style:{}},PB=wU("div"),UJ=b9(UJ),M$=UJ+"Origin",l6.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",iG=!!b9("perspective"),bU=dJ.core.reverting,yU=1},gG=function J($){var Q=$.ownerSVGElement,Z=wU("svg",Q&&Q.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),W=$.cloneNode(!0),K;W.style.display="block",Z.appendChild(W),x9.appendChild(Z);try{K=W.getBBox()}catch(U){}return Z.removeChild(W),x9.removeChild(Z),K},uG=function J($,Q){var Z=Q.length;while(Z--)if($.hasAttribute(Q[Z]))return $.getAttribute(Q[Z])},aG=function J($){var Q,Z;try{Q=$.getBBox()}catch(W){Q=gG($),Z=1}return Q&&(Q.width||Q.height)||Z||(Q=gG($)),Q&&!Q.width&&!Q.x&&!Q.y?{x:+uG($,["x","cx","x1"])||0,y:+uG($,["y","cy","y1"])||0,width:0,height:0}:Q},rG=function J($){return!!($.getCTM&&(!$.parentNode||$.ownerSVGElement)&&aG($))},o6=function J($,Q){if(Q){var Z=$.style,W;if(Q in TQ&&Q!==M$)Q=UJ;if(Z.removeProperty){if(W=Q.substr(0,2),W==="ms"||Q.substr(0,6)==="webkit")Q="-"+Q;Z.removeProperty(W==="--"?Q:Q.replace(vU,"-$1").toLowerCase())}else Z.removeAttribute(Q)}},q6=function J($,Q,Z,W,K,U){var H=new J$($._pt,Q,Z,0,1,U?oG:lG);return $._pt=H,H.b=W,H.e=K,$._props.push(Z),H},pG={deg:1,rad:1,turn:1},uB={grid:1,flex:1},Y6=function J($,Q,Z,W){var K=parseFloat(Z)||0,U=(Z+"").trim().substr((K+"").length)||"px",H=l6.style,q=AB.test(Q),Y=$.tagName.toLowerCase()==="svg",G=(Y?"client":"offset")+(q?"Width":"Height"),X=100,N=W==="px",F=W==="%",M,E,L,O;if(W===U||!K||pG[W]||pG[U])return K;if(U!=="px"&&!N&&(K=J($,Q,Z,"px")),O=$.getCTM&&rG($),(F||U==="%")&&(TQ[Q]||~Q.indexOf("adius")))return M=O?$.getBBox()[q?"width":"height"]:$[G],YJ(F?K/M*X:K/100*M);if(H[q?"width":"height"]=X+(N?U:W),E=W!=="rem"&&~Q.indexOf("adius")||W==="em"&&$.appendChild&&!Y?$:$.parentNode,O)E=($.ownerSVGElement||{}).parentNode;if(!E||E===H6||!E.appendChild)E=H6.body;if(L=E._gsap,L&&F&&L.width&&q&&L.time===N$.time&&!L.uncache)return YJ(K/L.width*X);else{if(F&&(Q==="height"||Q==="width")){var z=$.style[Q];$.style[Q]=X+W,M=$[G],z?$.style[Q]=z:o6($,Q)}else(F||U==="%")&&!uB[h$(E,"display")]&&(H.position=h$($,"position")),E===$&&(H.position="static"),E.appendChild(l6),M=l6[G],E.removeChild(l6),H.position="absolute";if(q&&F)L=W6(E),L.time=N$.time,L.width=E[G]}return YJ(N?M*K/X:M&&K?X/M*K:0)},AQ=function J($,Q,Z,W){var K;if(yU||_U(),Q in XQ&&Q!=="transform"){if(Q=XQ[Q],~Q.indexOf(","))Q=Q.split(",")[0]}if(TQ[Q]&&Q!=="transform")K=tZ($,W),K=Q!=="transformOrigin"?K[Q]:K.svg?K.origin:_W(h$($,M$))+" "+K.zOrigin+"px";else if(K=$.style[Q],!K||K==="auto"||W||~(K+"").indexOf("calc("))K=wW[Q]&&wW[Q]($,Q,Z)||h$($,Q)||BU($,Q)||(Q==="opacity"?1:0);return Z&&!~(K+"").trim().indexOf(" ")?Y6($,Q,K,Z)+Z:K},pB=function J($,Q,Z,W){if(!Z||Z==="none"){var K=b9(Q,$,1),U=K&&h$($,K,1);if(U&&U!==Z)Q=K,Z=U;else if(Q==="borderColor")Z=h$($,"borderTopColor")}var H=new J$(this._pt,$.style,Q,0,1,IU),q=0,Y=0,G,X,N,F,M,E,L,O,z,B,I,A;if(H.b=Z,H.e=W,Z+="",W+="",W.substring(0,6)==="var(--")W=h$($,W.substring(4,W.indexOf(")")));if(W==="auto")E=$.style[Q],$.style[Q]=W,W=h$($,Q)||W,E?$.style[Q]=E:o6($,Q);if(G=[Z,W],VU(G),Z=G[0],W=G[1],N=Z.match(g6)||[],A=W.match(g6)||[],A.length){while(X=g6.exec(W)){if(L=X[0],z=W.substring(q,X.index),M)M=(M+1)%5;else if(z.substr(-5)==="rgba("||z.substr(-5)==="hsla(")M=1;if(L!==(E=N[Y++]||"")){if(F=parseFloat(E)||0,I=E.substr((F+"").length),L.charAt(1)==="="&&(L=u6(F,L)+I),O=parseFloat(L),B=L.substr((O+"").length),q=g6.lastIndex-B.length,!B){if(B=B||L$.units[Q]||I,q===W.length)W+=B,H.e+=B}if(I!==B)F=Y6($,Q,E,B)||0;H._pt={_next:H._pt,p:z||Y===1?z:",",s:F,c:O-F,m:M&&M<4||Q==="zIndex"?Math.round:0}}}H.c=q<W.length?W.substring(q,W.length):""}else H.r=Q==="display"&&W==="none"?oG:lG;return FU.test(W)&&(H.e=0),this._pt=H,H},mG={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mB=function J($){var Q=$.split(" "),Z=Q[0],W=Q[1]||"50%";if(Z==="top"||Z==="bottom"||W==="left"||W==="right")$=Z,Z=W,W=$;return Q[0]=mG[Z]||Z,Q[1]=mG[W]||W,Q.join(" ")},dB=function J($,Q){if(Q.tween&&Q.tween._time===Q.tween._dur){var Z=Q.t,W=Z.style,K=Q.u,U=Z._gsap,H,q,Y;if(K==="all"||K===!0)W.cssText="",q=1;else{K=K.split(","),Y=K.length;while(--Y>-1){if(H=K[Y],TQ[H])q=1,H=H==="transformOrigin"?M$:UJ;o6(Z,H)}}if(q){if(o6(Z,UJ),U)U.svg&&Z.removeAttribute("transform"),W.scale=W.rotate=W.translate="none",tZ(Z,1),U.uncache=1,sG(W)}}},wW={clearProps:function J($,Q,Z,W,K){if(K.data!=="isFromStart"){var U=$._pt=new J$($._pt,Q,Z,0,0,dB);return U.u=W,U.pr=-10,U.tween=K,$._props.push(Z),1}}},rZ=[1,0,0,1,0,0],tG={},eG=function J($){return $==="matrix(1, 0, 0, 1, 0, 0)"||$==="none"||!$},dG=function J($){var Q=h$($,UJ);return eG(Q)?rZ:Q.substr(7).match(NU).map(YJ)},hU=function J($,Q){var Z=$._gsap||W6($),W=$.style,K=dG($),U,H,q,Y;if(Z.svg&&$.getAttribute("transform"))return q=$.transform.baseVal.consolidate().matrix,K=[q.a,q.b,q.c,q.d,q.e,q.f],K.join(",")==="1,0,0,1,0,0"?rZ:K;else if(K===rZ&&!$.offsetParent&&$!==x9&&!Z.svg){if(q=W.display,W.display="block",U=$.parentNode,!U||!$.offsetParent&&!$.getBoundingClientRect().width)Y=1,H=$.nextElementSibling,x9.appendChild($);if(K=dG($),q?W.display=q:o6($,"display"),Y)H?U.insertBefore($,H):U?U.appendChild($):x9.removeChild($)}return Q&&K.length>6?[K[0],K[1],K[4],K[5],K[12],K[13]]:K},xU=function J($,Q,Z,W,K,U){var H=$._gsap,q=K||hU($,!0),Y=H.xOrigin||0,G=H.yOrigin||0,X=H.xOffset||0,N=H.yOffset||0,F=q[0],M=q[1],E=q[2],L=q[3],O=q[4],z=q[5],B=Q.split(" "),I=parseFloat(B[0])||0,A=parseFloat(B[1])||0,C,P,x,D;if(!Z)C=aG($),I=C.x+(~B[0].indexOf("%")?I/100*C.width:I),A=C.y+(~(B[1]||B[0]).indexOf("%")?A/100*C.height:A);else if(q!==rZ&&(P=F*L-M*E))x=I*(L/P)+A*(-E/P)+(E*z-L*O)/P,D=I*(-M/P)+A*(F/P)-(F*z-M*O)/P,I=x,A=D;if(W||W!==!1&&H.smooth)O=I-Y,z=A-G,H.xOffset=X+(O*F+z*E)-O,H.yOffset=N+(O*M+z*L)-z;else H.xOffset=H.yOffset=0;if(H.xOrigin=I,H.yOrigin=A,H.smooth=!!W,H.origin=Q,H.originIsAbsolute=!!Z,$.style[M$]="0px 0px",U)q6(U,H,"xOrigin",Y,I),q6(U,H,"yOrigin",G,A),q6(U,H,"xOffset",X,H.xOffset),q6(U,H,"yOffset",N,H.yOffset);$.setAttribute("data-svg-origin",I+" "+A)},tZ=function J($,Q){var Z=$._gsap||new zU($);if("x"in Z&&!Q&&!Z.uncache)return Z;var W=$.style,K=Z.scaleX<0,U="px",H="deg",q=getComputedStyle($),Y=h$($,M$)||"0",G,X,N,F,M,E,L,O,z,B,I,A,C,P,x,D,k,b,v,m,n,r,s,J0,a,c,w,W0,R0,e,K0,Z0;if(G=X=N=E=L=O=z=B=I=0,F=M=1,Z.svg=!!($.getCTM&&rG($)),q.translate){if(q.translate!=="none"||q.scale!=="none"||q.rotate!=="none")W[UJ]=(q.translate!=="none"?"translate3d("+(q.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(q.rotate!=="none"?"rotate("+q.rotate+") ":"")+(q.scale!=="none"?"scale("+q.scale.split(" ").join(",")+") ":"")+(q[UJ]!=="none"?q[UJ]:"");W.scale=W.rotate=W.translate="none"}if(P=hU($,Z.svg),Z.svg){if(Z.uncache)a=$.getBBox(),Y=Z.xOrigin-a.x+"px "+(Z.yOrigin-a.y)+"px",J0="";else J0=!Q&&$.getAttribute("data-svg-origin");xU($,J0||Y,!!J0||Z.originIsAbsolute,Z.smooth!==!1,P)}if(A=Z.xOrigin||0,C=Z.yOrigin||0,P!==rZ){if(b=P[0],v=P[1],m=P[2],n=P[3],G=r=P[4],X=s=P[5],P.length===6){if(F=Math.sqrt(b*b+v*v),M=Math.sqrt(n*n+m*m),E=b||v?_9(v,b)*c6:0,z=m||n?_9(m,n)*c6+E:0,z&&(M*=Math.abs(Math.cos(z*y9))),Z.svg)G-=A-(A*b+C*m),X-=C-(A*v+C*n)}else{if(Z0=P[6],e=P[7],w=P[8],W0=P[9],R0=P[10],K0=P[11],G=P[12],X=P[13],N=P[14],x=_9(Z0,R0),L=x*c6,x)D=Math.cos(-x),k=Math.sin(-x),J0=r*D+w*k,a=s*D+W0*k,c=Z0*D+R0*k,w=r*-k+w*D,W0=s*-k+W0*D,R0=Z0*-k+R0*D,K0=e*-k+K0*D,r=J0,s=a,Z0=c;if(x=_9(-m,R0),O=x*c6,x)D=Math.cos(-x),k=Math.sin(-x),J0=b*D-w*k,a=v*D-W0*k,c=m*D-R0*k,K0=n*k+K0*D,b=J0,v=a,m=c;if(x=_9(v,b),E=x*c6,x)D=Math.cos(x),k=Math.sin(x),J0=b*D+v*k,a=r*D+s*k,v=v*D-b*k,s=s*D-r*k,b=J0,r=a;if(L&&Math.abs(L)+Math.abs(E)>359.9)L=E=0,O=180-O;F=YJ(Math.sqrt(b*b+v*v+m*m)),M=YJ(Math.sqrt(s*s+Z0*Z0)),x=_9(r,s),z=Math.abs(x)>0.0002?x*c6:0,I=K0?1/(K0<0?-K0:K0):0}if(Z.svg)J0=$.getAttribute("transform"),Z.forceCSS=$.setAttribute("transform","")||!eG(h$($,UJ)),J0&&$.setAttribute("transform",J0)}if(Math.abs(z)>90&&Math.abs(z)<270)if(K)F*=-1,z+=E<=0?180:-180,E+=E<=0?180:-180;else M*=-1,z+=z<=0?180:-180;if(Q=Q||Z.uncache,Z.x=G-((Z.xPercent=G&&(!Q&&Z.xPercent||(Math.round($.offsetWidth/2)===Math.round(-G)?-50:0)))?$.offsetWidth*Z.xPercent/100:0)+U,Z.y=X-((Z.yPercent=X&&(!Q&&Z.yPercent||(Math.round($.offsetHeight/2)===Math.round(-X)?-50:0)))?$.offsetHeight*Z.yPercent/100:0)+U,Z.z=N+U,Z.scaleX=YJ(F),Z.scaleY=YJ(M),Z.rotation=YJ(E)+H,Z.rotationX=YJ(L)+H,Z.rotationY=YJ(O)+H,Z.skewX=z+H,Z.skewY=B+H,Z.transformPerspective=I+U,Z.zOrigin=parseFloat(Y.split(" ")[2])||!Q&&Z.zOrigin||0)W[M$]=_W(Y);return Z.xOffset=Z.yOffset=0,Z.force3D=L$.force3D,Z.renderTransform=Z.svg?lB:iG?JX:cB,Z.uncache=0,Z},_W=function J($){return($=$.split(" "))[0]+" "+$[1]},SU=function J($,Q,Z){var W=hJ(Q);return YJ(parseFloat(Q)+parseFloat(Y6($,"x",Z+"px",W)))+W},cB=function J($,Q){Q.z="0px",Q.rotationY=Q.rotationX="0deg",Q.force3D=0,JX($,Q)},m6="0deg",aZ="0px",d6=") ",JX=function J($,Q){var Z=Q||this,W=Z.xPercent,K=Z.yPercent,U=Z.x,H=Z.y,q=Z.z,Y=Z.rotation,G=Z.rotationY,X=Z.rotationX,N=Z.skewX,F=Z.skewY,M=Z.scaleX,E=Z.scaleY,L=Z.transformPerspective,O=Z.force3D,z=Z.target,B=Z.zOrigin,I="",A=O==="auto"&&$&&$!==1||O===!0;if(B&&(X!==m6||G!==m6)){var C=parseFloat(G)*y9,P=Math.sin(C),x=Math.cos(C),D;C=parseFloat(X)*y9,D=Math.cos(C),U=SU(z,U,P*D*-B),H=SU(z,H,-Math.sin(C)*-B),q=SU(z,q,x*D*-B+B)}if(L!==aZ)I+="perspective("+L+d6;if(W||K)I+="translate("+W+"%, "+K+"%) ";if(A||U!==aZ||H!==aZ||q!==aZ)I+=q!==aZ||A?"translate3d("+U+", "+H+", "+q+") ":"translate("+U+", "+H+d6;if(Y!==m6)I+="rotate("+Y+d6;if(G!==m6)I+="rotateY("+G+d6;if(X!==m6)I+="rotateX("+X+d6;if(N!==m6||F!==m6)I+="skew("+N+", "+F+d6;if(M!==1||E!==1)I+="scale("+M+", "+E+d6;z.style[UJ]=I||"translate(0, 0)"},lB=function J($,Q){var Z=Q||this,W=Z.xPercent,K=Z.yPercent,U=Z.x,H=Z.y,q=Z.rotation,Y=Z.skewX,G=Z.skewY,X=Z.scaleX,N=Z.scaleY,F=Z.target,M=Z.xOrigin,E=Z.yOrigin,L=Z.xOffset,O=Z.yOffset,z=Z.forceCSS,B=parseFloat(U),I=parseFloat(H),A,C,P,x,D;if(q=parseFloat(q),Y=parseFloat(Y),G=parseFloat(G),G)G=parseFloat(G),Y+=G,q+=G;if(q||Y){if(q*=y9,Y*=y9,A=Math.cos(q)*X,C=Math.sin(q)*X,P=Math.sin(q-Y)*-N,x=Math.cos(q-Y)*N,Y){if(G*=y9,D=Math.tan(Y-G),D=Math.sqrt(1+D*D),P*=D,x*=D,G)D=Math.tan(G),D=Math.sqrt(1+D*D),A*=D,C*=D}A=YJ(A),C=YJ(C),P=YJ(P),x=YJ(x)}else A=X,x=N,C=P=0;if(B&&!~(U+"").indexOf("px")||I&&!~(H+"").indexOf("px"))B=Y6(F,"x",U,"px"),I=Y6(F,"y",H,"px");if(M||E||L||O)B=YJ(B+M-(M*A+E*P)+L),I=YJ(I+E-(M*C+E*x)+O);if(W||K)D=F.getBBox(),B=YJ(B+W/100*D.width),I=YJ(I+K/100*D.height);D="matrix("+A+","+C+","+P+","+x+","+B+","+I+")",F.setAttribute("transform",D),z&&(F.style[UJ]=D)},oB=function J($,Q,Z,W,K){var U=360,H=kJ(K),q=parseFloat(K)*(H&&~K.indexOf("rad")?c6:1),Y=q-W,G=W+Y+"deg",X,N;if(H){if(X=K.split("_")[1],X==="short"){if(Y%=U,Y!==Y%(U/2))Y+=Y<0?U:-U}if(X==="cw"&&Y<0)Y=(Y+U*hG)%U-~~(Y/U)*U;else if(X==="ccw"&&Y>0)Y=(Y-U*hG)%U-~~(Y/U)*U}return $._pt=N=new J$($._pt,Q,Z,W,Y,SB),N.e=G,N.u="deg",$._props.push(Z),N},cG=function J($,Q){for(var Z in Q)$[Z]=Q[Z];return $},sB=function J($,Q,Z){var W=cG({},Z._gsap),K="perspective,force3D,transformOrigin,svgOrigin",U=Z.style,H,q,Y,G,X,N,F,M;if(W.svg)Y=Z.getAttribute("transform"),Z.setAttribute("transform",""),U[UJ]=Q,H=tZ(Z,1),o6(Z,UJ),Z.setAttribute("transform",Y);else Y=getComputedStyle(Z)[UJ],U[UJ]=Q,H=tZ(Z,1),U[UJ]=Y;for(q in TQ)if(Y=W[q],G=H[q],Y!==G&&K.indexOf(q)<0)F=hJ(Y),M=hJ(G),X=F!==M?Y6(Z,q,Y,M):parseFloat(Y),N=parseFloat(G),$._pt=new J$($._pt,H,q,X,N-X,jU),$._pt.u=M||0,$._props.push(q);cG(H,W)};eJ("padding,margin,Width,Radius",function(J,$){var Q="Top",Z="Right",W="Bottom",K="Left",U=($<3?[Q,Z,W,K]:[Q+K,Q+Z,W+Z,W+K]).map(function(H){return $<2?J+H:"border"+H+J});wW[$>1?"border"+J:J]=function(H,q,Y,G,X){var N,F;if(arguments.length<4)return N=U.map(function(M){return AQ(H,M,Y)}),F=N.join(" "),F.split(N[0]).length===5?N[0]:F;N=(G+"").split(" "),F={},U.forEach(function(M,E){return F[M]=N[E]=N[E]||N[(E-1)/2|0]}),H.init(q,F,X)}});var fU={name:"css",register:_U,targetTest:function J($){return $.style&&$.nodeType},init:function J($,Q,Z,W,K){var U=this._props,H=$.style,q=Z.vars.startAt,Y,G,X,N,F,M,E,L,O,z,B,I,A,C,P,x;yU||_U(),this.styles=this.styles||nG($),x=this.styles.props,this.tween=Z;for(E in Q){if(E==="autoRound")continue;if(G=Q[E],X$[E]&&kU(E,Q,Z,W,$,K))continue;if(F=typeof G,M=wW[E],F==="function")G=G.call(Z,W,$,K),F=typeof G;if(F==="string"&&~G.indexOf("random("))G=w9(G);if(M)M(this,$,E,G,Z)&&(P=1);else if(E.substr(0,2)==="--"){if(Y=(getComputedStyle($).getPropertyValue(E)+"").trim(),G+="",PQ.lastIndex=0,!PQ.test(Y))L=hJ(Y),O=hJ(G);O?L!==O&&(Y=Y6($,E,Y,O)+O):L&&(G+=L),this.add(H,"setProperty",Y,G,W,K,0,0,E),U.push(E),x.push(E,0,H[E])}else if(F!=="undefined"){if(q&&E in q)Y=typeof q[E]==="function"?q[E].call(Z,W,$,K):q[E],kJ(Y)&&~Y.indexOf("random(")&&(Y=w9(Y)),hJ(Y+"")||Y==="auto"||(Y+=L$.units[E]||hJ(AQ($,E))||""),(Y+"").charAt(1)==="="&&(Y=AQ($,E));else Y=AQ($,E);if(N=parseFloat(Y),z=F==="string"&&G.charAt(1)==="="&&G.substr(0,2),z&&(G=G.substr(2)),X=parseFloat(G),E in XQ){if(E==="autoAlpha"){if(N===1&&AQ($,"visibility")==="hidden"&&X)N=0;x.push("visibility",0,H.visibility),q6(this,H,"visibility",N?"inherit":"hidden",X?"inherit":"hidden",!X)}if(E!=="scale"&&E!=="transform")E=XQ[E],~E.indexOf(",")&&(E=E.split(",")[0])}if(B=E in TQ,B){if(this.styles.save(E),F==="string"&&G.substring(0,6)==="var(--")G=h$($,G.substring(4,G.indexOf(")"))),X=parseFloat(G);if(!I)A=$._gsap,A.renderTransform&&!Q.parseTransform||tZ($,Q.parseTransform),C=Q.smoothOrigin!==!1&&A.smooth,I=this._pt=new J$(this._pt,H,UJ,0,1,A.renderTransform,A,0,-1),I.dep=1;if(E==="scale")this._pt=new J$(this._pt,A,"scaleY",A.scaleY,(z?u6(A.scaleY,z+X):X)-A.scaleY||0,jU),this._pt.u=0,U.push("scaleY",E),E+="X";else if(E==="transformOrigin"){if(x.push(M$,0,H[M$]),G=mB(G),A.svg)xU($,G,0,C,0,this);else O=parseFloat(G.split(" ")[2])||0,O!==A.zOrigin&&q6(this,A,"zOrigin",A.zOrigin,O),q6(this,H,E,_W(Y),_W(G));continue}else if(E==="svgOrigin"){xU($,G,1,C,0,this);continue}else if(E in tG){oB(this,A,E,N,z?u6(N,z+G):G);continue}else if(E==="smoothOrigin"){q6(this,A,"smooth",A.smooth,G);continue}else if(E==="force3D"){A[E]=G;continue}else if(E==="transform"){sB(this,G,$);continue}}else if(!(E in H))E=b9(E)||E;if(B||(X||X===0)&&(N||N===0)&&!TB.test(G)&&E in H){if(L=(Y+"").substr((N+"").length),X||(X=0),O=hJ(G)||(E in L$.units?L$.units[E]:L),L!==O&&(N=Y6($,E,Y,O)),this._pt=new J$(this._pt,B?A:H,E,N,(z?u6(N,z+X):X)-N,!B&&(O==="px"||E==="zIndex")&&Q.autoRound!==!1?wB:jU),this._pt.u=O||0,L!==O&&O!=="%")this._pt.b=Y,this._pt.r=jB}else if(!(E in H)){if(E in $)this.add($,E,Y||$[E],z?z+G:G,W,K);else if(E!=="parseTransform"){AW(E,G);continue}}else pB.call(this,$,E,Y,z?z+G:G);B||(E in H?x.push(E,0,H[E]):typeof $[E]==="function"?x.push(E,2,$[E]()):x.push(E,1,Y||$[E])),U.push(E)}}P&&TU(this)},render:function J($,Q){if(Q.tween._time||!bU()){var Z=Q._pt;while(Z)Z.r($,Z.d),Z=Z._next}else Q.styles.revert()},get:AQ,aliases:XQ,getSetter:function J($,Q,Z){var W=XQ[Q];return W&&W.indexOf(",")<0&&(Q=W),Q in TQ&&Q!==M$&&($._gsap.x||AQ($,"x"))?Z&&vG===Z?Q==="scale"?bB:yB:(vG=Z||{})&&(Q==="scale"?vB:hB):$.style&&!IW($.style[Q])?_B:~Q.indexOf("-")?xB:jW($,Q)},core:{_removeProperty:o6,_getMatrix:hU}};dJ.utils.checkPrefix=b9;dJ.core.getStyleSaver=nG;(function(J,$,Q,Z){var W=eJ(J+","+$+","+Q,function(K){TQ[K]=1});eJ($,function(K){L$.units[K]="deg",tG[K]=1}),XQ[W[13]]=J+","+$,eJ(Z,function(K){var U=K.split(":");XQ[U[1]]=W[U[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");eJ("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(J){L$.units[J]="px"});dJ.registerPlugin(fU);var $$=dJ.registerPlugin(fU)||dJ,PP=$$.core.Tween;function $X(J,$){for(var Q=0;Q<$.length;Q++){var Z=$[Q];if(Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z)Z.writable=!0;Object.defineProperty(J,Z.key,Z)}}function nB(J,$,Q){if($)$X(J.prototype,$);if(Q)$X(J,Q);return J}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fJ,bW,iB,C$,G6,X6,h9,ZX,s6,J7,WX,SQ,n$,KX,UX=function J(){return fJ||typeof window!=="undefined"&&(fJ=window.gsap)&&fJ.registerPlugin&&fJ},HX=1,v9=[],D8=[],i$=[],$7=Date.now,gU=function J($,Q){return Q},aB=function J(){var $=J7.core,Q=$.bridge||{},Z=$._scrollers,W=$._proxies;Z.push.apply(Z,D8),W.push.apply(W,i$),D8=Z,i$=W,gU=function K(U,H){return Q[U](H)}},wQ=function J($,Q){return~i$.indexOf($)&&i$[i$.indexOf($)+1][Q]},Q7=function J($){return!!~WX.indexOf($)},Z$=function J($,Q,Z,W,K){return $.addEventListener(Q,Z,{passive:W!==!1,capture:!!K})},Q$=function J($,Q,Z,W){return $.removeEventListener(Q,Z,!!W)},xW="scrollLeft",yW="scrollTop",uU=function J(){return SQ&&SQ.isPressed||D8.cache++},vW=function J($,Q){var Z=function W(K){if(K||K===0){HX&&(C$.history.scrollRestoration="manual");var U=SQ&&SQ.isPressed;K=W.v=Math.round(K)||(SQ&&SQ.iOS?1:0),$(K),W.cacheID=D8.cache,U&&gU("ss",K)}else if(Q||D8.cache!==W.cacheID||gU("ref"))W.cacheID=D8.cache,W.v=$();return W.v+W.offset};return Z.offset=0,$&&Z},cJ={s:xW,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vW(function(J){return arguments.length?C$.scrollTo(J,MJ.sc()):C$.pageXOffset||G6[xW]||X6[xW]||h9[xW]||0})},MJ={s:yW,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:cJ,sc:vW(function(J){return arguments.length?C$.scrollTo(cJ.sc(),J):C$.pageYOffset||G6[yW]||X6[yW]||h9[yW]||0})},W$=function J($,Q){return(Q&&Q._ctx&&Q._ctx.selector||fJ.utils.toArray)($)[0]||(typeof $==="string"&&fJ.config().nullTargetWarn!==!1?console.warn("Element not found:",$):null)},rB=function J($,Q){var Z=Q.length;while(Z--)if(Q[Z]===$||Q[Z].contains($))return!0;return!1},jQ=function J($,Q){var{s:Z,sc:W}=Q;Q7($)&&($=G6.scrollingElement||X6);var K=D8.indexOf($),U=W===MJ.sc?1:2;!~K&&(K=D8.push($)-1),D8[K+U]||Z$($,"scroll",uU);var H=D8[K+U],q=H||(D8[K+U]=vW(wQ($,Z),!0)||(Q7($)?W:vW(function(Y){return arguments.length?$[Z]=Y:$[Z]})));return q.target=$,H||(q.smooth=fJ.getProperty($,"scrollBehavior")==="smooth"),q},hW=function J($,Q,Z){var W=$,K=$,U=$7(),H=U,q=Q||50,Y=Math.max(500,q*3),G=function F(M,E){var L=$7();if(E||L-U>q)K=W,W=M,H=U,U=L;else if(Z)W+=M;else W=K+(M-K)/(L-H)*(U-H)},X=function F(){K=W=Z?0:W,H=U=0},N=function F(M){var E=H,L=K,O=$7();return(M||M===0)&&M!==W&&G(M),U===H||O-H>Y?0:(W+(Z?L:-L))/((Z?O:U)-E)*1000};return{update:G,reset:X,getVelocity:N}},eZ=function J($,Q){return Q&&!$._gsapAllow&&$.preventDefault(),$.changedTouches?$.changedTouches[0]:$},QX=function J($){var Q=Math.max.apply(Math,$),Z=Math.min.apply(Math,$);return Math.abs(Q)>=Math.abs(Z)?Q:Z},qX=function J(){J7=fJ.core.globals().ScrollTrigger,J7&&J7.core&&aB()},YX=function J($){if(fJ=$||UX(),!bW&&fJ&&typeof document!=="undefined"&&document.body)C$=window,G6=document,X6=G6.documentElement,h9=G6.body,WX=[C$,G6,X6,h9],iB=fJ.utils.clamp,KX=fJ.core.context||function(){},s6="onpointerenter"in h9?"pointer":"mouse",ZX=m8.isTouch=C$.matchMedia&&C$.matchMedia("(hover: none), (pointer: coarse)").matches?1:("ontouchstart"in C$)||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,n$=m8.eventTypes=("ontouchstart"in X6?"touchstart,touchmove,touchcancel,touchend":!("onpointerdown"in X6)?"mousedown,mousemove,mouseup,mouseup":"pointerdown,pointermove,pointercancel,pointerup").split(","),setTimeout(function(){return HX=0},500),qX(),bW=1;return bW};cJ.op=MJ;D8.cache=0;var m8=function(){function J(Q){this.init(Q)}var $=J.prototype;return $.init=function Q(Z){bW||YX(fJ)||console.warn("Please gsap.registerPlugin(Observer)"),J7||qX();var{tolerance:W,dragMinimum:K,type:U,target:H,lineHeight:q,debounce:Y,preventDefault:G,onStop:X,onStopDelay:N,ignore:F,wheelSpeed:M,event:E,onDragStart:L,onDragEnd:O,onDrag:z,onPress:B,onRelease:I,onRight:A,onLeft:C,onUp:P,onDown:x,onChangeX:D,onChangeY:k,onChange:b,onToggleX:v,onToggleY:m,onHover:n,onHoverEnd:r,onMove:s,ignoreCheck:J0,isNormalizer:a,onGestureStart:c,onGestureEnd:w,onWheel:W0,onEnable:R0,onDisable:e,onClick:K0,scrollSpeed:Z0,capture:M0,allowClicks:q0,lockAxis:j0,onLockAxis:u0}=Z;this.target=H=W$(H)||X6,this.vars=Z,F&&(F=fJ.utils.toArray(F)),W=W||0.000000001,K=K||0,M=M||1,Z0=Z0||1,U=U||"wheel,touch,pointer",Y=Y!==!1,q||(q=parseFloat(C$.getComputedStyle(h9).lineHeight)||22);var m0,Y8,J8,u,L8,D0,p0,o=this,a0=0,S0=0,t0=Z.passive||!G&&Z.passive!==!1,N8=jQ(H,cJ),S8=jQ(H,MJ),g=N8(),T=S8(),$0=~U.indexOf("touch")&&!~U.indexOf("pointer")&&n$[0]==="pointerdown",Y0=Q7(H),X0=H.ownerDocument||G6,H0=[0,0,0],f0=[0,0,0],I0=0,d0=function b0(){return I0=$7()},T0=function b0(i0,E8){return(o.event=i0)&&F&&rB(i0.target,F)||E8&&$0&&i0.pointerType!=="touch"||J0&&J0(i0,E8)},V0=function b0(){o._vx.reset(),o._vy.reset(),Y8.pause(),X&&X(o)},w0=function b0(){var i0=o.deltaX=QX(H0),E8=o.deltaY=QX(f0),x0=Math.abs(i0)>=W,W8=Math.abs(E8)>=W;if(b&&(x0||W8)&&b(o,i0,E8,H0,f0),x0)A&&o.deltaX>0&&A(o),C&&o.deltaX<0&&C(o),D&&D(o),v&&o.deltaX<0!==a0<0&&v(o),a0=o.deltaX,H0[0]=H0[1]=H0[2]=0;if(W8)x&&o.deltaY>0&&x(o),P&&o.deltaY<0&&P(o),k&&k(o),m&&o.deltaY<0!==S0<0&&m(o),S0=o.deltaY,f0[0]=f0[1]=f0[2]=0;if(u||J8){if(s&&s(o),J8)L&&J8===1&&L(o),z&&z(o),J8=0;u=!1}if(D0&&!(D0=!1)&&u0&&u0(o),L8)W0(o),L8=!1;m0=0},n0=function b0(i0,E8,x0){H0[x0]+=i0,f0[x0]+=E8,o._vx.update(i0),o._vy.update(E8),Y?m0||(m0=requestAnimationFrame(w0)):w0()},_0=function b0(i0,E8){if(j0&&!p0)o.axis=p0=Math.abs(i0)>Math.abs(E8)?"x":"y",D0=!0;if(p0!=="y")H0[2]+=i0,o._vx.update(i0,!0);if(p0!=="x")f0[2]+=E8,o._vy.update(E8,!0);Y?m0||(m0=requestAnimationFrame(w0)):w0()},C0=function b0(i0){if(T0(i0,1))return;i0=eZ(i0,G);var{clientX:E8,clientY:x0}=i0,W8=E8-o.x,r0=x0-o.y,G8=o.isDragging;if(o.x=E8,o.y=x0,G8||(W8||r0)&&(Math.abs(o.startX-E8)>=K||Math.abs(o.startY-x0)>=K))J8=G8?2:1,G8||(o.isDragging=!0),_0(W8,r0)},U8=o.onPress=function(b0){if(T0(b0,1)||b0&&b0.button)return;o.axis=p0=null,Y8.pause(),o.isPressed=!0,b0=eZ(b0),a0=S0=0,o.startX=o.x=b0.clientX,o.startY=o.y=b0.clientY,o._vx.reset(),o._vy.reset(),Z$(a?H:X0,n$[1],C0,t0,!0),o.deltaX=o.deltaY=0,B&&B(o)},y=o.onRelease=function(b0){if(T0(b0,1))return;Q$(a?H:X0,n$[1],C0,!0);var i0=!isNaN(o.y-o.startY),E8=o.isDragging,x0=E8&&(Math.abs(o.x-o.startX)>3||Math.abs(o.y-o.startY)>3),W8=eZ(b0);if(!x0&&i0){if(o._vx.reset(),o._vy.reset(),G&&q0)fJ.delayedCall(0.08,function(){if($7()-I0>300&&!b0.defaultPrevented){if(b0.target.click)b0.target.click();else if(X0.createEvent){var r0=X0.createEvent("MouseEvents");r0.initMouseEvent("click",!0,!0,C$,1,W8.screenX,W8.screenY,W8.clientX,W8.clientY,!1,!1,!1,!1,0,null),b0.target.dispatchEvent(r0)}}})}o.isDragging=o.isGesturing=o.isPressed=!1,X&&E8&&!a&&Y8.restart(!0),J8&&w0(),O&&E8&&O(o),I&&I(o,x0)},k0=function b0(i0){return i0.touches&&i0.touches.length>1&&(o.isGesturing=!0)&&c(i0,o.isDragging)},A0=function b0(){return(o.isGesturing=!1)||w(o)},y0=function b0(i0){if(T0(i0))return;var E8=N8(),x0=S8();n0((E8-g)*Z0,(x0-T)*Z0,1),g=E8,T=x0,X&&Y8.restart(!0)},z0=function b0(i0){if(T0(i0))return;i0=eZ(i0,G),W0&&(L8=!0);var E8=(i0.deltaMode===1?q:i0.deltaMode===2?C$.innerHeight:1)*M;n0(i0.deltaX*E8,i0.deltaY*E8,0),X&&!a&&Y8.restart(!0)},L0=function b0(i0){if(T0(i0))return;var{clientX:E8,clientY:x0}=i0,W8=E8-o.x,r0=x0-o.y;o.x=E8,o.y=x0,u=!0,X&&Y8.restart(!0),(W8||r0)&&_0(W8,r0)},g0=function b0(i0){o.event=i0,n(o)},$8=function b0(i0){o.event=i0,r(o)},_8=function b0(i0){return T0(i0)||eZ(i0,G)&&K0(o)};Y8=o._dc=fJ.delayedCall(N||0.25,V0).pause(),o.deltaX=o.deltaY=0,o._vx=hW(0,50,!0),o._vy=hW(0,50,!0),o.scrollX=N8,o.scrollY=S8,o.isDragging=o.isGesturing=o.isPressed=!1,KX(this),o.enable=function(b0){if(!o.isEnabled){if(Z$(Y0?X0:H,"scroll",uU),U.indexOf("scroll")>=0&&Z$(Y0?X0:H,"scroll",y0,t0,M0),U.indexOf("wheel")>=0&&Z$(H,"wheel",z0,t0,M0),U.indexOf("touch")>=0&&ZX||U.indexOf("pointer")>=0)Z$(H,n$[0],U8,t0,M0),Z$(X0,n$[2],y),Z$(X0,n$[3],y),q0&&Z$(H,"click",d0,!0,!0),K0&&Z$(H,"click",_8),c&&Z$(X0,"gesturestart",k0),w&&Z$(X0,"gestureend",A0),n&&Z$(H,s6+"enter",g0),r&&Z$(H,s6+"leave",$8),s&&Z$(H,s6+"move",L0);o.isEnabled=!0,o.isDragging=o.isGesturing=o.isPressed=u=J8=!1,o._vx.reset(),o._vy.reset(),g=N8(),T=S8(),b0&&b0.type&&U8(b0),R0&&R0(o)}return o},o.disable=function(){if(o.isEnabled){if(v9.filter(function(b0){return b0!==o&&Q7(b0.target)}).length||Q$(Y0?X0:H,"scroll",uU),o.isPressed)o._vx.reset(),o._vy.reset(),Q$(a?H:X0,n$[1],C0,!0);Q$(Y0?X0:H,"scroll",y0,M0),Q$(H,"wheel",z0,M0),Q$(H,n$[0],U8,M0),Q$(X0,n$[2],y),Q$(X0,n$[3],y),Q$(H,"click",d0,!0),Q$(H,"click",_8),Q$(X0,"gesturestart",k0),Q$(X0,"gestureend",A0),Q$(H,s6+"enter",g0),Q$(H,s6+"leave",$8),Q$(H,s6+"move",L0),o.isEnabled=o.isPressed=o.isDragging=!1,e&&e(o)}},o.kill=o.revert=function(){o.disable();var b0=v9.indexOf(o);b0>=0&&v9.splice(b0,1),SQ===o&&(SQ=0)},v9.push(o),a&&Q7(H)&&(SQ=o),o.enable(E)},nB(J,[{key:"velocityX",get:function Q(){return this._vx.getVelocity()}},{key:"velocityY",get:function Q(){return this._vy.getVelocity()}}]),J}();m8.version="3.13.0";m8.create=function(J){return new m8(J)};m8.register=YX;m8.getAll=function(){return v9.slice()};m8.getById=function(J){return v9.filter(function($){return $.vars.id===J})[0]};UX()&&fJ.registerPlugin(m8);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var s0,u9,C8,t8,A$,p8,$H,eW,E7,Y7,W7,fW,lJ,Z1,nU,U$,GX,XX,p9,AX,pU,TX,K$,iU,SX,jX,N6,aU,QH,m9,ZH,J1,rU,mU,gW=1,oJ=Date.now,dU=oJ(),u$=0,K7=0,NX=function J($,Q,Z){var W=I$($)&&($.substr(0,6)==="clamp("||$.indexOf("max")>-1);return Z["_"+Q+"Clamp"]=W,W?$.substr(6,$.length-7):$},FX=function J($,Q){return Q&&(!I$($)||$.substr(0,6)!=="clamp(")?"clamp("+$+")":$},tB=function J(){return K7&&requestAnimationFrame(J)},LX=function J(){return Z1=1},EX=function J(){return Z1=0},NQ=function J($){return $},U7=function J($){return Math.round($*1e5)/1e5||0},wX=function J(){return typeof window!=="undefined"},_X=function J(){return s0||wX()&&(s0=window.gsap)&&s0.registerPlugin&&s0},e6=function J($){return!!~$H.indexOf($)},xX=function J($){return($==="Height"?ZH:C8["inner"+$])||A$["client"+$]||p8["client"+$]},yX=function J($){return wQ($,"getBoundingClientRect")||(e6($)?function(){return tW.width=C8.innerWidth,tW.height=ZH,tW}:function(){return _Q($)})},eB=function J($,Q,Z){var{d:W,d2:K,a:U}=Z;return(U=wQ($,"getBoundingClientRect"))?function(){return U()[W]}:function(){return(Q?xX(K):$["client"+K])||0}},JR=function J($,Q){return!Q||~i$.indexOf($)?yX($):function(){return tW}},FQ=function J($,Q){var{s:Z,d2:W,d:K,a:U}=Q;return Math.max(0,(Z="scroll"+W)&&(U=wQ($,Z))?U()-yX($)()[K]:e6($)?(A$[Z]||p8[Z])-xX(W):$[Z]-$["offset"+W])},uW=function J($,Q){for(var Z=0;Z<p9.length;Z+=3)(!Q||~Q.indexOf(p9[Z+1]))&&$(p9[Z],p9[Z+1],p9[Z+2])},I$=function J($){return typeof $==="string"},sJ=function J($){return typeof $==="function"},H7=function J($){return typeof $==="number"},n6=function J($){return typeof $==="object"},Z7=function J($,Q,Z){return $&&$.progress(Q?0:1)&&Z&&$.pause()},cU=function J($,Q){if($.enabled){var Z=$._ctx?$._ctx.add(function(){return Q($)}):Q($);Z&&Z.totalTime&&($.callbackAnimation=Z)}},f9=Math.abs,bX="left",vX="top",WH="right",KH="bottom",a6="width",r6="height",G7="Right",X7="Left",N7="Top",F7="Bottom",OJ="padding",f$="margin",c9="Width",UH="Height",CJ="px",g$=function J($){return C8.getComputedStyle($)},$R=function J($){var Q=g$($).position;$.style.position=Q==="absolute"||Q==="fixed"?Q:"relative"},MX=function J($,Q){for(var Z in Q)Z in $||($[Z]=Q[Z]);return $},_Q=function J($,Q){var Z=Q&&g$($)[nU]!=="matrix(1, 0, 0, 1, 0, 0)"&&s0.to($,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),W=$.getBoundingClientRect();return Z&&Z.progress(0).kill(),W},$1=function J($,Q){var Z=Q.d2;return $["offset"+Z]||$["client"+Z]||0},hX=function J($){var Q=[],Z=$.labels,W=$.duration(),K;for(K in Z)Q.push(Z[K]/W);return Q},QR=function J($){return function(Q){return s0.utils.snap(hX($),Q)}},HH=function J($){var Q=s0.utils.snap($),Z=Array.isArray($)&&$.slice(0).sort(function(W,K){return W-K});return Z?function(W,K,U){if(U===void 0)U=0.001;var H;if(!K)return Q(W);if(K>0){W-=U;for(H=0;H<Z.length;H++)if(Z[H]>=W)return Z[H];return Z[H-1]}else{H=Z.length,W+=U;while(H--)if(Z[H]<=W)return Z[H]}return Z[0]}:function(W,K,U){if(U===void 0)U=0.001;var H=Q(W);return!K||Math.abs(H-W)<U||H-W<0===K<0?H:Q(K<0?W-$:W+$)}},ZR=function J($){return function(Q,Z){return HH(hX($))(Q,Z.direction)}},pW=function J($,Q,Z,W){return Z.split(",").forEach(function(K){return $(Q,K,W)})},xJ=function J($,Q,Z,W,K){return $.addEventListener(Q,Z,{passive:!W,capture:!!K})},_J=function J($,Q,Z,W){return $.removeEventListener(Q,Z,!!W)},mW=function J($,Q,Z){if(Z=Z&&Z.wheelHandler,Z)$(Q,"wheel",Z),$(Q,"touchmove",Z)},OX={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dW={toggleActions:"play",anticipatePin:0},Q1={top:0,left:0,center:0.5,bottom:1,right:1},nW=function J($,Q){if(I$($)){var Z=$.indexOf("="),W=~Z?+($.charAt(Z-1)+1)*parseFloat($.substr(Z+1)):0;if(~Z)$.indexOf("%")>Z&&(W*=Q/100),$=$.substr(0,Z-1);$=W+($ in Q1?Q1[$]*Q:~$.indexOf("%")?parseFloat($)*Q/100:parseFloat($)||0)}return $},cW=function J($,Q,Z,W,K,U,H,q){var{startColor:Y,endColor:G,fontSize:X,indent:N,fontWeight:F}=K,M=t8.createElement("div"),E=e6(Z)||wQ(Z,"pinType")==="fixed",L=$.indexOf("scroller")!==-1,O=E?p8:Z,z=$.indexOf("start")!==-1,B=z?Y:G,I="border-color:"+B+";font-size:"+X+";color:"+B+";font-weight:"+F+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return I+="position:"+((L||q)&&E?"fixed;":"absolute;"),(L||q||!E)&&(I+=(W===MJ?WH:KH)+":"+(U+parseFloat(N))+"px;"),H&&(I+="box-sizing:border-box;text-align:left;width:"+H.offsetWidth+"px;"),M._isStart=z,M.setAttribute("class","gsap-marker-"+$+(Q?" marker-"+Q:"")),M.style.cssText=I,M.innerText=Q||Q===0?$+"-"+Q:$,O.children[0]?O.insertBefore(M,O.children[0]):O.appendChild(M),M._offset=M["offset"+W.op.d2],iW(M,0,W,z),M},iW=function J($,Q,Z,W){var K={display:"block"},U=Z[W?"os2":"p2"],H=Z[W?"p2":"os2"];$._isFlipped=W,K[Z.a+"Percent"]=W?-100:0,K[Z.a]=W?"1px":0,K["border"+U+c9]=1,K["border"+H+c9]=0,K[Z.p]=Q+"px",s0.set($,K)},k8=[],tU={},M7,BX=function J(){return oJ()-u$>34&&(M7||(M7=requestAnimationFrame(xQ)))},g9=function J(){if(!K$||!K$.isPressed||K$.startX>p8.clientWidth){if(D8.cache++,K$)M7||(M7=requestAnimationFrame(xQ));else xQ();u$||$9("scrollStart"),u$=oJ()}},lU=function J(){jX=C8.innerWidth,SX=C8.innerHeight},q7=function J($){D8.cache++,($===!0||!lJ&&!TX&&!t8.fullscreenElement&&!t8.webkitFullscreenElement&&(!iU||jX!==C8.innerWidth||Math.abs(C8.innerHeight-SX)>C8.innerHeight*0.25))&&eW.restart(!0)},J9={},WR=[],fX=function J(){return _J(O8,"scrollEnd",J)||i6(!0)},$9=function J($){return J9[$]&&J9[$].map(function(Q){return Q()})||WR},P$=[],gX=function J($){for(var Q=0;Q<P$.length;Q+=5)if(!$||P$[Q+4]&&P$[Q+4].query===$)P$[Q].style.cssText=P$[Q+1],P$[Q].getBBox&&P$[Q].setAttribute("transform",P$[Q+2]||""),P$[Q+3].uncache=1},qH=function J($,Q){var Z;for(U$=0;U$<k8.length;U$++)if(Z=k8[U$],Z&&(!Q||Z._ctx===Q))if($)Z.kill(1);else Z.revert(!0,!0);J1=!0,Q&&gX(Q),Q||$9("revert")},uX=function J($,Q){D8.cache++,(Q||!H$)&&D8.forEach(function(Z){return sJ(Z)&&Z.cacheID++&&(Z.rec=0)}),I$($)&&(C8.history.scrollRestoration=QH=$)},H$,t6=0,RX,KR=function J(){if(RX!==t6){var $=RX=t6;requestAnimationFrame(function(){return $===t6&&i6(!0)})}},pX=function J(){p8.appendChild(m9),ZH=!K$&&m9.offsetHeight||C8.innerHeight,p8.removeChild(m9)},VX=function J($){return E7(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(Q){return Q.style.display=$?"none":"block"})},i6=function J($,Q){if(A$=t8.documentElement,p8=t8.body,$H=[C8,t8,A$,p8],u$&&!$&&!J1){xJ(O8,"scrollEnd",fX);return}pX(),H$=O8.isRefreshing=!0,D8.forEach(function(W){return sJ(W)&&++W.cacheID&&(W.rec=W())});var Z=$9("refreshInit");AX&&O8.sort(),Q||qH(),D8.forEach(function(W){if(sJ(W))W.smooth&&(W.target.style.scrollBehavior="auto"),W(0)}),k8.slice(0).forEach(function(W){return W.refresh()}),J1=!1,k8.forEach(function(W){if(W._subPinOffset&&W.pin){var K=W.vars.horizontal?"offsetWidth":"offsetHeight",U=W.pin[K];W.revert(!0,1),W.adjustPinSpacing(W.pin[K]-U),W.refresh()}}),rU=1,VX(!0),k8.forEach(function(W){var K=FQ(W.scroller,W._dir),U=W.vars.end==="max"||W._endClamp&&W.end>K,H=W._startClamp&&W.start>=K;(U||H)&&W.setPositions(H?K-1:W.start,U?Math.max(H?K:W.start+1,K):W.end,!0)}),VX(!1),rU=0,Z.forEach(function(W){return W&&W.render&&W.render(-1)}),D8.forEach(function(W){if(sJ(W))W.smooth&&requestAnimationFrame(function(){return W.target.style.scrollBehavior="smooth"}),W.rec&&W(W.rec)}),uX(QH,1),eW.pause(),t6++,H$=2,xQ(2),k8.forEach(function(W){return sJ(W.vars.onRefresh)&&W.vars.onRefresh(W)}),H$=O8.isRefreshing=!1,$9("refresh")},eU=0,aW=1,L7,xQ=function J($){if($===2||!H$&&!J1){O8.isUpdating=!0,L7&&L7.update(0);var Q=k8.length,Z=oJ(),W=Z-dU>=50,K=Q&&k8[0].scroll();if(aW=eU>K?-1:1,H$||(eU=K),W){if(u$&&!Z1&&Z-u$>200)u$=0,$9("scrollEnd");W7=dU,dU=Z}if(aW<0){U$=Q;while(U$-- >0)k8[U$]&&k8[U$].update(0,W);aW=1}else for(U$=0;U$<Q;U$++)k8[U$]&&k8[U$].update(0,W);O8.isUpdating=!1}M7=0},JH=[bX,vX,KH,WH,f$+F7,f$+G7,f$+N7,f$+X7,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rW=JH.concat([a6,r6,"boxSizing","max"+c9,"max"+UH,"position",f$,OJ,OJ+N7,OJ+G7,OJ+F7,OJ+X7]),UR=function J($,Q,Z){d9(Z);var W=$._gsap;if(W.spacerIsNative)d9(W.spacerState);else if($._gsap.swappedIn){var K=Q.parentNode;if(K)K.insertBefore($,Q),K.removeChild(Q)}$._gsap.swappedIn=!1},oU=function J($,Q,Z,W){if(!$._gsap.swappedIn){var K=JH.length,U=Q.style,H=$.style,q;while(K--)q=JH[K],U[q]=Z[q];if(U.position=Z.position==="absolute"?"absolute":"relative",Z.display==="inline"&&(U.display="inline-block"),H[KH]=H[WH]="auto",U.flexBasis=Z.flexBasis||"auto",U.overflow="visible",U.boxSizing="border-box",U[a6]=$1($,cJ)+CJ,U[r6]=$1($,MJ)+CJ,U[OJ]=H[f$]=H[vX]=H[bX]="0",d9(W),H[a6]=H["max"+c9]=Z[a6],H[r6]=H["max"+UH]=Z[r6],H[OJ]=Z[OJ],$.parentNode!==Q)$.parentNode.insertBefore(Q,$),Q.appendChild($);$._gsap.swappedIn=!0}},HR=/([A-Z])/g,d9=function J($){if($){var Q=$.t.style,Z=$.length,W=0,K,U;($.t._gsap||s0.core.getCache($.t)).uncache=1;for(;W<Z;W+=2)if(U=$[W+1],K=$[W],U)Q[K]=U;else if(Q[K])Q.removeProperty(K.replace(HR,"-$1").toLowerCase())}},lW=function J($){var Q=rW.length,Z=$.style,W=[],K=0;for(;K<Q;K++)W.push(rW[K],Z[rW[K]]);return W.t=$,W},qR=function J($,Q,Z){var W=[],K=$.length,U=Z?8:0,H;for(;U<K;U+=2)H=$[U],W.push(H,H in Q?Q[H]:$[U+1]);return W.t=$.t,W},tW={left:0,top:0},zX=function J($,Q,Z,W,K,U,H,q,Y,G,X,N,F,M){if(sJ($)&&($=$(q)),I$($)&&$.substr(0,3)==="max")$=N+($.charAt(4)==="="?nW("0"+$.substr(3),Z):0);var E=F?F.time():0,L,O,z;if(F&&F.seek(0),isNaN($)||($=+$),!H7($)){sJ(Q)&&(Q=Q(q));var B=($||"0").split(" "),I,A,C,P;if(z=W$(Q,q)||p8,I=_Q(z)||{},(!I||!I.left&&!I.top)&&g$(z).display==="none")P=z.style.display,z.style.display="block",I=_Q(z),P?z.style.display=P:z.style.removeProperty("display");A=nW(B[0],I[W.d]),C=nW(B[1]||"0",Z),$=I[W.p]-Y[W.p]-G+A+K-C,H&&iW(H,C,W,Z-C<20||H._isStart&&C>20),Z-=Z-C}else F&&($=s0.utils.mapRange(F.scrollTrigger.start,F.scrollTrigger.end,0,N,$)),H&&iW(H,Z,W,!0);if(M)q[M]=$||-0.001,$<0&&($=0);if(U){var x=$+Z,D=U._isStart;if(L="scroll"+W.d2,iW(U,x,W,D&&x>20||!D&&(X?Math.max(p8[L],A$[L]):U.parentNode[L])<=x+1),X)Y=_Q(H),X&&(U.style[W.op.p]=Y[W.op.p]-W.op.m-U._offset+CJ)}if(F&&z)L=_Q(z),F.seek(N),O=_Q(z),F._caScrollDist=L[W.p]-O[W.p],$=$/F._caScrollDist*N;return F&&F.seek(E),F?$:Math.round($)},YR=/(webkit|moz|length|cssText|inset)/i,DX=function J($,Q,Z,W){if($.parentNode!==Q){var K=$.style,U,H;if(Q===p8){$._stOrig=K.cssText,H=g$($);for(U in H)if(!+U&&!YR.test(U)&&H[U]&&typeof K[U]==="string"&&U!=="0")K[U]=H[U];K.top=Z,K.left=W}else K.cssText=$._stOrig;s0.core.getCache($).uncache=1,Q.appendChild($)}},mX=function J($,Q,Z){var W=Q,K=W;return function(U){var H=Math.round($());if(H!==W&&H!==K&&Math.abs(H-W)>3&&Math.abs(H-K)>3)U=H,Z&&Z();return K=W,W=Math.round(U),W}},oW=function J($,Q,Z){var W={};W[Q.p]="+="+Z,s0.set($,W)},kX=function J($,Q){var Z=jQ($,Q),W="_scroll"+Q.p2,K=function U(H,q,Y,G,X){var N=U.tween,F=q.onComplete,M={};Y=Y||Z();var E=mX(Z,Y,function(){N.kill(),U.tween=0});return X=G&&X||0,G=G||H-Y,N&&N.kill(),q[W]=H,q.inherit=!1,q.modifiers=M,M[W]=function(){return E(Y+G*N.ratio+X*N.ratio*N.ratio)},q.onUpdate=function(){D8.cache++,U.tween&&xQ()},q.onComplete=function(){U.tween=0,F&&F.call(N)},N=U.tween=s0.to($,q),N};return $[W]=Z,Z.wheelHandler=function(){return K.tween&&K.tween.kill()&&(K.tween=0)},xJ($,"wheel",Z.wheelHandler),O8.isTouch&&xJ($,"touchmove",Z.wheelHandler),K},O8=function(){function J(Q,Z){u9||J.register(s0)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),aU(this),this.init(Q,Z)}var $=J.prototype;return $.init=function Q(Z,W){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!K7){this.update=this.refresh=this.kill=NQ;return}Z=MX(I$(Z)||H7(Z)||Z.nodeType?{trigger:Z}:Z,dW);var K=Z,U=K.onUpdate,H=K.toggleClass,q=K.id,Y=K.onToggle,G=K.onRefresh,X=K.scrub,N=K.trigger,F=K.pin,M=K.pinSpacing,E=K.invalidateOnRefresh,L=K.anticipatePin,O=K.onScrubComplete,z=K.onSnapComplete,B=K.once,I=K.snap,A=K.pinReparent,C=K.pinSpacer,P=K.containerAnimation,x=K.fastScrollEnd,D=K.preventOverlaps,k=Z.horizontal||Z.containerAnimation&&Z.horizontal!==!1?cJ:MJ,b=!X&&X!==0,v=W$(Z.scroller||C8),m=s0.core.getCache(v),n=e6(v),r=("pinType"in Z?Z.pinType:wQ(v,"pinType")||n&&"fixed")==="fixed",s=[Z.onEnter,Z.onLeave,Z.onEnterBack,Z.onLeaveBack],J0=b&&Z.toggleActions.split(" "),a="markers"in Z?Z.markers:dW.markers,c=n?0:parseFloat(g$(v)["border"+k.p2+c9])||0,w=this,W0=Z.onRefreshInit&&function(){return Z.onRefreshInit(w)},R0=eB(v,n,k),e=JR(v,n),K0=0,Z0=0,M0=0,q0=jQ(v,k),j0,u0,m0,Y8,J8,u,L8,D0,p0,o,a0,S0,t0,N8,S8,g,T,$0,Y0,X0,H0,f0,I0,d0,T0,V0,w0,n0,_0,C0,U8,y,k0,A0,y0,z0,L0,g0,$8;if(w._startClamp=w._endClamp=!1,w._dir=k,L*=45,w.scroller=v,w.scroll=P?P.time.bind(P):q0,Y8=q0(),w.vars=Z,W=W||Z.animation,"refreshPriority"in Z)AX=1,Z.refreshPriority===-9999&&(L7=w);if(m.tweenScroll=m.tweenScroll||{top:kX(v,MJ),left:kX(v,cJ)},w.tweenTo=j0=m.tweenScroll[k.p],w.scrubDuration=function(x0){if(k0=H7(x0)&&x0,!k0)y&&y.progress(1).kill(),y=0;else y?y.duration(x0):y=s0.to(W,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:k0,paused:!0,onComplete:function W8(){return O&&O(w)}})},W)W.vars.lazy=!1,W._initted&&!w.isReverted||W.vars.immediateRender!==!1&&Z.immediateRender!==!1&&W.duration()&&W.render(0,!0,!0),w.animation=W.pause(),W.scrollTrigger=w,w.scrubDuration(X),C0=0,q||(q=W.vars.id);if(I){if(!n6(I)||I.push)I={snapTo:I};"scrollBehavior"in p8.style&&s0.set(n?[p8,A$]:v,{scrollBehavior:"auto"}),D8.forEach(function(x0){return sJ(x0)&&x0.target===(n?t8.scrollingElement||A$:v)&&(x0.smooth=!1)}),m0=sJ(I.snapTo)?I.snapTo:I.snapTo==="labels"?QR(W):I.snapTo==="labelsDirectional"?ZR(W):I.directional!==!1?function(x0,W8){return HH(I.snapTo)(x0,oJ()-Z0<500?0:W8.direction)}:s0.utils.snap(I.snapTo),A0=I.duration||{min:0.1,max:2},A0=n6(A0)?Y7(A0.min,A0.max):Y7(A0,A0),y0=s0.delayedCall(I.delay||k0/2||0.1,function(){var x0=q0(),W8=oJ()-Z0<500,r0=j0.tween;if((W8||Math.abs(w.getVelocity())<10)&&!r0&&!Z1&&K0!==x0){var G8=(x0-u)/N8,ZJ=W&&!b?W.totalProgress():G8,B8=W8?0:(ZJ-U8)/(oJ()-W7)*1000||0,a8=s0.utils.clamp(-G8,1-G8,f9(B8/2)*B8/0.185),WJ=G8+(I.inertia===!1?0:a8),c8,u8,h8=I,NJ=h8.onStart,y8=h8.onInterrupt,R=h8.onComplete;if(c8=m0(WJ,w),H7(c8)||(c8=WJ),u8=Math.max(0,Math.round(u+c8*N8)),x0<=L8&&x0>=u&&u8!==x0){if(r0&&!r0._initted&&r0.data<=f9(u8-x0))return;if(I.inertia===!1)a8=c8-G8;j0(u8,{duration:A0(f9(Math.max(f9(WJ-ZJ),f9(c8-ZJ))*0.185/B8/0.05||0)),ease:I.ease||"power3",data:f9(u8-x0),onInterrupt:function S(){return y0.restart(!0)&&y8&&y8(w)},onComplete:function S(){if(w.update(),K0=q0(),W&&!b)y?y.resetTo("totalProgress",c8,W._tTime/W._tDur):W.progress(c8);C0=U8=W&&!b?W.totalProgress():w.progress,z&&z(w),R&&R(w)}},x0,a8*N8,u8-x0-a8*N8),NJ&&NJ(w,j0.tween)}}else if(w.isActive&&K0!==x0)y0.restart(!0)}).pause()}if(q&&(tU[q]=w),N=w.trigger=W$(N||F!==!0&&F),$8=N&&N._gsap&&N._gsap.stRevert,$8&&($8=$8(w)),F=F===!0?N:W$(F),I$(H)&&(H={targets:N,className:H}),F){if(M===!1||M===f$||(M=!M&&F.parentNode&&F.parentNode.style&&g$(F.parentNode).display==="flex"?!1:OJ),w.pin=F,u0=s0.core.getCache(F),!u0.spacer){if(C)C=W$(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),u0.spacerIsNative=!!C,C&&(u0.spacerState=lW(C));u0.spacer=$0=C||t8.createElement("div"),$0.classList.add("pin-spacer"),q&&$0.classList.add("pin-spacer-"+q),u0.pinState=S8=lW(F)}else S8=u0.pinState;Z.force3D!==!1&&s0.set(F,{force3D:!0}),w.spacer=$0=u0.spacer,_0=g$(F),d0=_0[M+k.os2],X0=s0.getProperty(F),H0=s0.quickSetter(F,k.a,CJ),oU(F,$0,_0),T=lW(F)}if(a){S0=n6(a)?MX(a,OX):OX,o=cW("scroller-start",q,v,k,S0,0),a0=cW("scroller-end",q,v,k,S0,0,o),Y0=o["offset"+k.op.d2];var _8=W$(wQ(v,"content")||v);if(D0=this.markerStart=cW("start",q,_8,k,S0,Y0,0,P),p0=this.markerEnd=cW("end",q,_8,k,S0,Y0,0,P),P&&(g0=s0.quickSetter([D0,p0],k.a,CJ)),!r&&!(i$.length&&wQ(v,"fixedMarkers")===!0))$R(n?p8:v),s0.set([o,a0],{force3D:!0}),V0=s0.quickSetter(o,k.a,CJ),n0=s0.quickSetter(a0,k.a,CJ)}if(P){var b0=P.vars.onUpdate,i0=P.vars.onUpdateParams;P.eventCallback("onUpdate",function(){w.update(0,0,1),b0&&b0.apply(P,i0||[])})}if(w.previous=function(){return k8[k8.indexOf(w)-1]},w.next=function(){return k8[k8.indexOf(w)+1]},w.revert=function(x0,W8){if(!W8)return w.kill(!0);var r0=x0!==!1||!w.enabled,G8=lJ;if(r0!==w.isReverted){if(r0)z0=Math.max(q0(),w.scroll.rec||0),M0=w.progress,L0=W&&W.progress();if(D0&&[D0,p0,o,a0].forEach(function(ZJ){return ZJ.style.display=r0?"none":"block"}),r0)lJ=w,w.update(r0);if(F&&(!A||!w.isActive))if(r0)UR(F,$0,S8);else oU(F,$0,g$(F),T0);r0||w.update(r0),lJ=G8,w.isReverted=r0}},w.refresh=function(x0,W8,r0,G8){if((lJ||!w.enabled)&&!W8)return;if(F&&x0&&u$){xJ(J,"scrollEnd",fX);return}if(!H$&&W0&&W0(w),lJ=w,j0.tween&&!r0)j0.tween.kill(),j0.tween=0;if(y&&y.pause(),E&&W)W.revert({kill:!1}).invalidate(),W.getChildren&&W.getChildren(!0,!0,!1).forEach(function(P0){return P0.vars.immediateRender&&P0.render(0,!0,!0)});w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var ZJ=R0(),B8=e(),a8=P?P.duration():FQ(v,k),WJ=N8<=0.01||!N8,c8=0,u8=G8||0,h8=n6(r0)?r0.end:Z.end,NJ=Z.endTrigger||N,y8=n6(r0)?r0.start:Z.start||(Z.start===0||!N?0:F?"0 0":"0 100%"),R=w.pinnedContainer=Z.pinnedContainer&&W$(Z.pinnedContainer,w),S=N&&Math.max(0,k8.indexOf(w))||0,f=S,V,j,_,p,h,l,t,Q0,U0,N0,G0,E0,B0;if(a&&n6(r0))E0=s0.getProperty(o,k.p),B0=s0.getProperty(a0,k.p);while(f-- >0){if(l=k8[f],l.end||l.refresh(0,1)||(lJ=w),t=l.pin,t&&(t===N||t===F||t===R)&&!l.isReverted)N0||(N0=[]),N0.unshift(l),l.revert(!0,!0);if(l!==k8[f])S--,f--}if(sJ(y8)&&(y8=y8(w)),y8=NX(y8,"start",w),u=zX(y8,N,ZJ,k,q0(),D0,o,w,B8,c,r,a8,P,w._startClamp&&"_startClamp")||(F?-0.001:0),sJ(h8)&&(h8=h8(w)),I$(h8)&&!h8.indexOf("+="))if(~h8.indexOf(" "))h8=(I$(y8)?y8.split(" ")[0]:"")+h8;else c8=nW(h8.substr(2),ZJ),h8=I$(y8)?y8:(P?s0.utils.mapRange(0,P.duration(),P.scrollTrigger.start,P.scrollTrigger.end,u):u)+c8,NJ=N;h8=NX(h8,"end",w),L8=Math.max(u,zX(h8||(NJ?"100% 0":a8),NJ,ZJ,k,q0()+c8,p0,a0,w,B8,c,r,a8,P,w._endClamp&&"_endClamp"))||-0.001,c8=0,f=S;while(f--)if(l=k8[f],t=l.pin,t&&l.start-l._pinPush<=u&&!P&&l.end>0){if(V=l.end-(w._startClamp?Math.max(0,l.start):l.start),(t===N&&l.start-l._pinPush<u||t===R)&&isNaN(y8))c8+=V*(1-l.progress);t===F&&(u8+=V)}if(u+=c8,L8+=c8,w._startClamp&&(w._startClamp+=c8),w._endClamp&&!H$)w._endClamp=L8||-0.001,L8=Math.min(L8,FQ(v,k));if(N8=L8-u||(u-=0.01)&&0.001,WJ)M0=s0.utils.clamp(0,1,s0.utils.normalize(u,L8,z0));if(w._pinPush=u8,D0&&c8)V={},V[k.a]="+="+c8,R&&(V[k.p]="-="+q0()),s0.set([D0,p0],V);if(F&&!(rU&&w.end>=FQ(v,k))){if(V=g$(F),p=k===MJ,_=q0(),f0=parseFloat(X0(k.a))+u8,!a8&&L8>1){if(G0=(n?t8.scrollingElement||A$:v).style,G0={style:G0,value:G0["overflow"+k.a.toUpperCase()]},n&&g$(p8)["overflow"+k.a.toUpperCase()]!=="scroll")G0.style["overflow"+k.a.toUpperCase()]="scroll"}if(oU(F,$0,V),T=lW(F),j=_Q(F,!0),Q0=r&&jQ(v,p?cJ:MJ)(),M){if(T0=[M+k.os2,N8+u8+CJ],T0.t=$0,f=M===OJ?$1(F,k)+N8+u8:0,f)T0.push(k.d,f+CJ),$0.style.flexBasis!=="auto"&&($0.style.flexBasis=f+CJ);if(d9(T0),R)k8.forEach(function(P0){if(P0.pin===R&&P0.vars.pinSpacing!==!1)P0._subPinOffset=!0});r&&q0(z0)}else f=$1(F,k),f&&$0.style.flexBasis!=="auto"&&($0.style.flexBasis=f+CJ);if(r)h={top:j.top+(p?_-u:Q0)+CJ,left:j.left+(p?Q0:_-u)+CJ,boxSizing:"border-box",position:"fixed"},h[a6]=h["max"+c9]=Math.ceil(j.width)+CJ,h[r6]=h["max"+UH]=Math.ceil(j.height)+CJ,h[f$]=h[f$+N7]=h[f$+G7]=h[f$+F7]=h[f$+X7]="0",h[OJ]=V[OJ],h[OJ+N7]=V[OJ+N7],h[OJ+G7]=V[OJ+G7],h[OJ+F7]=V[OJ+F7],h[OJ+X7]=V[OJ+X7],g=qR(S8,h,A),H$&&q0(0);if(W)U0=W._initted,pU(1),W.render(W.duration(),!0,!0),I0=X0(k.a)-f0+N8+u8,w0=Math.abs(N8-I0)>1,r&&w0&&g.splice(g.length-2,2),W.render(0,!0,!0),U0||W.invalidate(!0),W.parent||W.totalTime(W.totalTime()),pU(0);else I0=N8;G0&&(G0.value?G0.style["overflow"+k.a.toUpperCase()]=G0.value:G0.style.removeProperty("overflow-"+k.a))}else if(N&&q0()&&!P){j=N.parentNode;while(j&&j!==p8){if(j._pinOffset)u-=j._pinOffset,L8-=j._pinOffset;j=j.parentNode}}if(N0&&N0.forEach(function(P0){return P0.revert(!1,!0)}),w.start=u,w.end=L8,Y8=J8=H$?z0:q0(),!P&&!H$)Y8<z0&&q0(z0),w.scroll.rec=0;if(w.revert(!1,!0),Z0=oJ(),y0)K0=-1,y0.restart(!0);if(lJ=0,W&&b&&(W._initted||L0)&&W.progress()!==L0&&W.progress(L0||0,!0).render(W.time(),!0,!0),WJ||M0!==w.progress||P||E||W&&!W._initted)W&&!b&&(W._initted||M0||W.vars.immediateRender!==!1)&&W.totalProgress(P&&u<-0.001&&!M0?s0.utils.normalize(u,L8,0):M0,!0),w.progress=WJ||(Y8-u)/N8===M0?0:M0;if(F&&M&&($0._pinOffset=Math.round(w.progress*I0)),y&&y.invalidate(),!isNaN(E0))E0-=s0.getProperty(o,k.p),B0-=s0.getProperty(a0,k.p),oW(o,k,E0),oW(D0,k,E0-(G8||0)),oW(a0,k,B0),oW(p0,k,B0-(G8||0));if(WJ&&!H$&&w.update(),G&&!H$&&!t0)t0=!0,G(w),t0=!1},w.getVelocity=function(){return(q0()-J8)/(oJ()-W7)*1000||0},w.endAnimation=function(){if(Z7(w.callbackAnimation),W)y?y.progress(1):!W.paused()?Z7(W,W.reversed()):b||Z7(W,w.direction<0,1)},w.labelToScroll=function(x0){return W&&W.labels&&(u||w.refresh()||u)+W.labels[x0]/W.duration()*N8||0},w.getTrailing=function(x0){var W8=k8.indexOf(w),r0=w.direction>0?k8.slice(0,W8).reverse():k8.slice(W8+1);return(I$(x0)?r0.filter(function(G8){return G8.vars.preventOverlaps===x0}):r0).filter(function(G8){return w.direction>0?G8.end<=u:G8.start>=L8})},w.update=function(x0,W8,r0){if(P&&!r0&&!x0)return;var G8=H$===!0?z0:w.scroll(),ZJ=x0?0:(G8-u)/N8,B8=ZJ<0?0:ZJ>1?1:ZJ||0,a8=w.progress,WJ,c8,u8,h8,NJ,y8,R,S;if(W8){if(J8=Y8,Y8=P?q0():G8,I)U8=C0,C0=W&&!b?W.totalProgress():B8}if(L&&F&&!lJ&&!gW&&u$){if(!B8&&u<G8+(G8-J8)/(oJ()-W7)*L)B8=0.0001;else if(B8===1&&L8>G8+(G8-J8)/(oJ()-W7)*L)B8=0.9999}if(B8!==a8&&w.enabled){if(WJ=w.isActive=!!B8&&B8<1,c8=!!a8&&a8<1,y8=WJ!==c8,NJ=y8||!!B8!==!!a8,w.direction=B8>a8?1:-1,w.progress=B8,NJ&&!lJ){if(u8=B8&&!a8?0:B8===1?1:a8===1?2:3,b)h8=!y8&&J0[u8+1]!=="none"&&J0[u8+1]||J0[u8],S=W&&(h8==="complete"||h8==="reset"||(h8 in W))}if(D&&(y8||S)&&(S||X||!W)&&(sJ(D)?D(w):w.getTrailing(D).forEach(function(_){return _.endAnimation()})),!b){if(y&&!lJ&&!gW)if(y._dp._time-y._start!==y._time&&y.render(y._dp._time-y._start),y.resetTo)y.resetTo("totalProgress",B8,W._tTime/W._tDur);else y.vars.totalProgress=B8,y.invalidate().restart();else if(W)W.totalProgress(B8,!!(lJ&&(Z0||x0)))}if(F){if(x0&&M&&($0.style[M+k.os2]=d0),!r)H0(U7(f0+I0*B8));else if(NJ){if(R=!x0&&B8>a8&&L8+1>G8&&G8+1>=FQ(v,k),A)if(!x0&&(WJ||R)){var f=_Q(F,!0),V=G8-u;DX(F,p8,f.top+(k===MJ?V:0)+CJ,f.left+(k===MJ?0:V)+CJ)}else DX(F,$0);d9(WJ||R?g:T),w0&&B8<1&&WJ||H0(f0+(B8===1&&!R?I0:0))}}if(I&&!j0.tween&&!lJ&&!gW&&y0.restart(!0),H&&(y8||B&&B8&&(B8<1||!mU))&&E7(H.targets).forEach(function(_){return _.classList[WJ||B?"add":"remove"](H.className)}),U&&!b&&!x0&&U(w),NJ&&!lJ){if(b){if(S)if(h8==="complete")W.pause().totalProgress(1);else if(h8==="reset")W.restart(!0).pause();else if(h8==="restart")W.restart(!0);else W[h8]();U&&U(w)}if(y8||!mU){if(Y&&y8&&cU(w,Y),s[u8]&&cU(w,s[u8]),B&&(B8===1?w.kill(!1,1):s[u8]=0),!y8)u8=B8===1?1:3,s[u8]&&cU(w,s[u8])}if(x&&!WJ&&Math.abs(w.getVelocity())>(H7(x)?x:2500))Z7(w.callbackAnimation),y?y.progress(1):Z7(W,h8==="reverse"?1:!B8,1)}else if(b&&U&&!lJ)U(w)}if(n0){var j=P?G8/P.duration()*(P._caScrollDist||0):G8;V0(j+(o._isFlipped?1:0)),n0(j)}g0&&g0(-G8/P.duration()*(P._caScrollDist||0))},w.enable=function(x0,W8){if(!w.enabled){if(w.enabled=!0,xJ(v,"resize",q7),n||xJ(v,"scroll",g9),W0&&xJ(J,"refreshInit",W0),x0!==!1)w.progress=M0=0,Y8=J8=K0=q0();W8!==!1&&w.refresh()}},w.getTween=function(x0){return x0&&j0?j0.tween:y},w.setPositions=function(x0,W8,r0,G8){if(P){var ZJ=P.scrollTrigger,B8=P.duration(),a8=ZJ.end-ZJ.start;x0=ZJ.start+a8*x0/B8,W8=ZJ.start+a8*W8/B8}w.refresh(!1,!1,{start:FX(x0,r0&&!!w._startClamp),end:FX(W8,r0&&!!w._endClamp)},G8),w.update()},w.adjustPinSpacing=function(x0){if(T0&&x0){var W8=T0.indexOf(k.d)+1;T0[W8]=parseFloat(T0[W8])+x0+CJ,T0[1]=parseFloat(T0[1])+x0+CJ,d9(T0)}},w.disable=function(x0,W8){if(w.enabled){if(x0!==!1&&w.revert(!0,!0),w.enabled=w.isActive=!1,W8||y&&y.pause(),z0=0,u0&&(u0.uncache=1),W0&&_J(J,"refreshInit",W0),y0)y0.pause(),j0.tween&&j0.tween.kill()&&(j0.tween=0);if(!n){var r0=k8.length;while(r0--)if(k8[r0].scroller===v&&k8[r0]!==w)return;_J(v,"resize",q7),n||_J(v,"scroll",g9)}}},w.kill=function(x0,W8){w.disable(x0,W8),y&&!W8&&y.kill(),q&&delete tU[q];var r0=k8.indexOf(w);if(r0>=0&&k8.splice(r0,1),r0===U$&&aW>0&&U$--,r0=0,k8.forEach(function(G8){return G8.scroller===w.scroller&&(r0=1)}),r0||H$||(w.scroll.rec=0),W)W.scrollTrigger=null,x0&&W.revert({kill:!1}),W8||W.kill();if(D0&&[D0,p0,o,a0].forEach(function(G8){return G8.parentNode&&G8.parentNode.removeChild(G8)}),L7===w&&(L7=0),F)u0&&(u0.uncache=1),r0=0,k8.forEach(function(G8){return G8.pin===F&&r0++}),r0||(u0.spacer=0);Z.onKill&&Z.onKill(w)},k8.push(w),w.enable(!1,!1),$8&&$8(w),W&&W.add&&!N8){var E8=w.update;w.update=function(){w.update=E8,D8.cache++,u||L8||w.refresh()},s0.delayedCall(0.01,w.update),N8=0.01,u=L8=0}else w.refresh();F&&KR()},J.register=function Q(Z){if(!u9)s0=Z||_X(),wX()&&window.document&&J.enable(),u9=K7;return u9},J.defaults=function Q(Z){if(Z)for(var W in Z)dW[W]=Z[W];return dW},J.disable=function Q(Z,W){K7=0,k8.forEach(function(U){return U[W?"kill":"disable"](Z)}),_J(C8,"wheel",g9),_J(t8,"scroll",g9),clearInterval(fW),_J(t8,"touchcancel",NQ),_J(p8,"touchstart",NQ),pW(_J,t8,"pointerdown,touchstart,mousedown",LX),pW(_J,t8,"pointerup,touchend,mouseup",EX),eW.kill(),uW(_J);for(var K=0;K<D8.length;K+=3)mW(_J,D8[K],D8[K+1]),mW(_J,D8[K],D8[K+2])},J.enable=function Q(){if(C8=window,t8=document,A$=t8.documentElement,p8=t8.body,s0){if(E7=s0.utils.toArray,Y7=s0.utils.clamp,aU=s0.core.context||NQ,pU=s0.core.suppressOverwrites||NQ,QH=C8.history.scrollRestoration||"auto",eU=C8.pageYOffset||0,s0.core.globals("ScrollTrigger",J),p8){if(K7=1,m9=document.createElement("div"),m9.style.height="100vh",m9.style.position="absolute",pX(),tB(),m8.register(s0),J.isTouch=m8.isTouch,N6=m8.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),iU=m8.isTouch===1,xJ(C8,"wheel",g9),$H=[C8,t8,A$,p8],s0.matchMedia)J.matchMedia=function(Y){var G=s0.matchMedia(),X;for(X in Y)G.add(X,Y[X]);return G},s0.addEventListener("matchMediaInit",function(){return qH()}),s0.addEventListener("matchMediaRevert",function(){return gX()}),s0.addEventListener("matchMedia",function(){i6(0,1),$9("matchMedia")}),s0.matchMedia().add("(orientation: portrait)",function(){return lU(),lU});else console.warn("Requires GSAP 3.11.0 or later");lU(),xJ(t8,"scroll",g9);var Z=p8.hasAttribute("style"),W=p8.style,K=W.borderTopStyle,U=s0.core.Animation.prototype,H,q;if(U.revert||Object.defineProperty(U,"revert",{value:function Y(){return this.time(-0.01,!0)}}),W.borderTopStyle="solid",H=_Q(p8),MJ.m=Math.round(H.top+MJ.sc())||0,cJ.m=Math.round(H.left+cJ.sc())||0,K?W.borderTopStyle=K:W.removeProperty("border-top-style"),!Z)p8.setAttribute("style",""),p8.removeAttribute("style");fW=setInterval(BX,250),s0.delayedCall(0.5,function(){return gW=0}),xJ(t8,"touchcancel",NQ),xJ(p8,"touchstart",NQ),pW(xJ,t8,"pointerdown,touchstart,mousedown",LX),pW(xJ,t8,"pointerup,touchend,mouseup",EX),nU=s0.utils.checkPrefix("transform"),rW.push(nU),u9=oJ(),eW=s0.delayedCall(0.2,i6).pause(),p9=[t8,"visibilitychange",function(){var{innerWidth:Y,innerHeight:G}=C8;if(t8.hidden)GX=Y,XX=G;else if(GX!==Y||XX!==G)q7()},t8,"DOMContentLoaded",i6,C8,"load",i6,C8,"resize",q7],uW(xJ),k8.forEach(function(Y){return Y.enable(0,1)});for(q=0;q<D8.length;q+=3)mW(_J,D8[q],D8[q+1]),mW(_J,D8[q],D8[q+2])}}},J.config=function Q(Z){"limitCallbacks"in Z&&(mU=!!Z.limitCallbacks);var W=Z.syncInterval;if(W&&clearInterval(fW)||(fW=W)&&setInterval(BX,W),"ignoreMobileResize"in Z&&(iU=J.isTouch===1&&Z.ignoreMobileResize),"autoRefreshEvents"in Z)uW(_J)||uW(xJ,Z.autoRefreshEvents||"none"),TX=(Z.autoRefreshEvents+"").indexOf("resize")===-1},J.scrollerProxy=function Q(Z,W){var K=W$(Z),U=D8.indexOf(K),H=e6(K);if(~U)D8.splice(U,H?6:2);if(W)H?i$.unshift(C8,W,p8,W,A$,W):i$.unshift(K,W)},J.clearMatchMedia=function Q(Z){k8.forEach(function(W){return W._ctx&&W._ctx.query===Z&&W._ctx.kill(!0,!0)})},J.isInViewport=function Q(Z,W,K){var U=(I$(Z)?W$(Z):Z).getBoundingClientRect(),H=U[K?a6:r6]*W||0;return K?U.right-H>0&&U.left+H<C8.innerWidth:U.bottom-H>0&&U.top+H<C8.innerHeight},J.positionInViewport=function Q(Z,W,K){I$(Z)&&(Z=W$(Z));var U=Z.getBoundingClientRect(),H=U[K?a6:r6],q=W==null?H/2:(W in Q1)?Q1[W]*H:~W.indexOf("%")?parseFloat(W)*H/100:parseFloat(W)||0;return K?(U.left+q)/C8.innerWidth:(U.top+q)/C8.innerHeight},J.killAll=function Q(Z){if(k8.slice(0).forEach(function(K){return K.vars.id!=="ScrollSmoother"&&K.kill()}),Z!==!0){var W=J9.killAll||[];J9={},W.forEach(function(K){return K()})}},J}();O8.version="3.13.0";O8.saveStyles=function(J){return J?E7(J).forEach(function($){if($&&$.style){var Q=P$.indexOf($);Q>=0&&P$.splice(Q,5),P$.push($,$.style.cssText,$.getBBox&&$.getAttribute("transform"),s0.core.getCache($),aU())}}):P$};O8.revert=function(J,$){return qH(!J,$)};O8.create=function(J,$){return new O8(J,$)};O8.refresh=function(J){return J?q7(!0):(u9||O8.register())&&i6(!0)};O8.update=function(J){return++D8.cache&&xQ(J===!0?2:0)};O8.clearScrollMemory=uX;O8.maxScroll=function(J,$){return FQ(J,$?cJ:MJ)};O8.getScrollFunc=function(J,$){return jQ(W$(J),$?cJ:MJ)};O8.getById=function(J){return tU[J]};O8.getAll=function(){return k8.filter(function(J){return J.vars.id!=="ScrollSmoother"})};O8.isScrolling=function(){return!!u$};O8.snapDirectional=HH;O8.addEventListener=function(J,$){var Q=J9[J]||(J9[J]=[]);~Q.indexOf($)||Q.push($)};O8.removeEventListener=function(J,$){var Q=J9[J],Z=Q&&Q.indexOf($);Z>=0&&Q.splice(Z,1)};O8.batch=function(J,$){var Q=[],Z={},W=$.interval||0.016,K=$.batchMax||1e9,U=function q(Y,G){var X=[],N=[],F=s0.delayedCall(W,function(){G(X,N),X=[],N=[]}).pause();return function(M){X.length||F.restart(!0),X.push(M.trigger),N.push(M),K<=X.length&&F.progress(1)}},H;for(H in $)Z[H]=H.substr(0,2)==="on"&&sJ($[H])&&H!=="onRefreshInit"?U(H,$[H]):$[H];if(sJ(K))K=K(),xJ(O8,"refresh",function(){return K=$.batchMax()});return E7(J).forEach(function(q){var Y={};for(H in Z)Y[H]=Z[H];Y.trigger=q,Q.push(O8.create(Y))}),Q};var CX=function J($,Q,Z,W){return Q>W?$(W):Q<0&&$(0),Z>W?(W-Q)/(Z-Q):Z<0?Q/(Q-Z):1},sU=function J($,Q){if(Q===!0)$.style.removeProperty("touch-action");else $.style.touchAction=Q===!0?"auto":Q?"pan-"+Q+(m8.isTouch?" pinch-zoom":""):"none";$===A$&&J(p8,Q)},sW={auto:1,scroll:1},GR=function J($){var{event:Q,target:Z,axis:W}=$,K=(Q.changedTouches?Q.changedTouches[0]:Q).target,U=K._gsap||s0.core.getCache(K),H=oJ(),q;if(!U._isScrollT||H-U._isScrollT>2000){while(K&&K!==p8&&(K.scrollHeight<=K.clientHeight&&K.scrollWidth<=K.clientWidth||!(sW[(q=g$(K)).overflowY]||sW[q.overflowX])))K=K.parentNode;U._isScroll=K&&K!==Z&&!e6(K)&&(sW[(q=g$(K)).overflowY]||sW[q.overflowX]),U._isScrollT=H}if(U._isScroll||W==="x")Q.stopPropagation(),Q._gsapAllow=!0},dX=function J($,Q,Z,W){return m8.create({target:$,capture:!0,debounce:!1,lockAxis:!0,type:Q,onWheel:W=W&&GR,onPress:W,onDrag:W,onScroll:W,onEnable:function K(){return Z&&xJ(t8,m8.eventTypes[0],IX,!1,!0)},onDisable:function K(){return _J(t8,m8.eventTypes[0],IX,!0)}})},XR=/(input|label|select|textarea)/i,PX,IX=function J($){var Q=XR.test($.target.tagName);if(Q||PX)$._gsapAllow=!0,PX=Q},NR=function J($){n6($)||($={}),$.preventDefault=$.isNormalizer=$.allowClicks=!0,$.type||($.type="wheel,touch"),$.debounce=!!$.debounce,$.id=$.id||"normalizer";var Q=$,Z=Q.normalizeScrollX,W=Q.momentum,K=Q.allowNestedScroll,U=Q.onRelease,H,q,Y=W$($.target)||A$,G=s0.core.globals().ScrollSmoother,X=G&&G.get(),N=N6&&($.content&&W$($.content)||X&&$.content!==!1&&!X.smooth()&&X.content()),F=jQ(Y,MJ),M=jQ(Y,cJ),E=1,L=(m8.isTouch&&C8.visualViewport?C8.visualViewport.scale*C8.visualViewport.width:C8.outerWidth)/C8.innerWidth,O=0,z=sJ(W)?function(){return W(H)}:function(){return W||2.8},B,I,A=dX(Y,$.type,!0,K),C=function J0(){return I=!1},P=NQ,x=NQ,D=function J0(){q=FQ(Y,MJ),x=Y7(N6?1:0,q),Z&&(P=Y7(0,FQ(Y,cJ))),B=t6},k=function J0(){N._gsap.y=U7(parseFloat(N._gsap.y)+F.offset)+"px",N.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(N._gsap.y)+", 0, 1)",F.offset=F.cacheID=0},b=function J0(){if(I){requestAnimationFrame(C);var a=U7(H.deltaY/2),c=x(F.v-a);if(N&&c!==F.v+F.offset){F.offset=c-F.v;var w=U7((parseFloat(N&&N._gsap.y)||0)-F.offset);N.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",N._gsap.y=w+"px",F.cacheID=D8.cache,xQ()}return!0}F.offset&&k(),I=!0},v,m,n,r,s=function J0(){if(D(),v.isActive()&&v.vars.scrollY>q)F()>q?v.progress(1)&&F(q):v.resetTo("scrollY",q)};return N&&s0.set(N,{y:"+=0"}),$.ignoreCheck=function(J0){return N6&&J0.type==="touchmove"&&b(J0)||E>1.05&&J0.type!=="touchstart"||H.isGesturing||J0.touches&&J0.touches.length>1},$.onPress=function(){I=!1;var J0=E;E=U7((C8.visualViewport&&C8.visualViewport.scale||1)/L),v.pause(),J0!==E&&sU(Y,E>1.01?!0:Z?!1:"x"),m=M(),n=F(),D(),B=t6},$.onRelease=$.onGestureStart=function(J0,a){if(F.offset&&k(),!a)r.restart(!0);else{D8.cache++;var c=z(),w,W0;if(Z)w=M(),W0=w+c*0.05*-J0.velocityX/0.227,c*=CX(M,w,W0,FQ(Y,cJ)),v.vars.scrollX=P(W0);if(w=F(),W0=w+c*0.05*-J0.velocityY/0.227,c*=CX(F,w,W0,FQ(Y,MJ)),v.vars.scrollY=x(W0),v.invalidate().duration(c).play(0.01),N6&&v.vars.scrollY>=q||w>=q-1)s0.to({},{onUpdate:s,duration:c})}U&&U(J0)},$.onWheel=function(){if(v._ts&&v.pause(),oJ()-O>1000)B=0,O=oJ()},$.onChange=function(J0,a,c,w,W0){if(t6!==B&&D(),a&&Z&&M(P(w[2]===a?m+(J0.startX-J0.x):M()+a-w[1])),c){F.offset&&k();var R0=W0[2]===c,e=R0?n+J0.startY-J0.y:F()+c-W0[1],K0=x(e);R0&&e!==K0&&(n+=K0-e),F(K0)}(c||a)&&xQ()},$.onEnable=function(){if(sU(Y,Z?!1:"x"),O8.addEventListener("refresh",s),xJ(C8,"resize",s),F.smooth)F.target.style.scrollBehavior="auto",F.smooth=M.smooth=!1;A.enable()},$.onDisable=function(){sU(Y,!0),_J(C8,"resize",s),O8.removeEventListener("refresh",s),A.kill()},$.lockAxis=$.lockAxis!==!1,H=new m8($),H.iOS=N6,N6&&!F()&&F(1),N6&&s0.ticker.add(NQ),r=H._dc,v=s0.to(H,{ease:"power4",paused:!0,inherit:!1,scrollX:Z?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mX(F,F(),function(){return v.pause()})},onUpdate:xQ,onComplete:r.vars.onComplete}),H};O8.sort=function(J){if(sJ(J))return k8.sort(J);var $=C8.pageYOffset||0;return O8.getAll().forEach(function(Q){return Q._sortY=Q.trigger?$+Q.trigger.getBoundingClientRect().top:Q.start+C8.innerHeight}),k8.sort(J||function(Q,Z){return(Q.vars.refreshPriority||0)*-1e6+(Q.vars.containerAnimation?1e6:Q._sortY)-((Z.vars.containerAnimation?1e6:Z._sortY)+(Z.vars.refreshPriority||0)*-1e6)})};O8.observe=function(J){return new m8(J)};O8.normalizeScroll=function(J){if(typeof J==="undefined")return K$;if(J===!0&&K$)return K$.enable();if(J===!1){K$&&K$.kill(),K$=J;return}var $=J instanceof m8?J:NR(J);return K$&&K$.target===$.target&&K$.kill(),e6($.target)&&(K$=$),$};O8.core={_getVelocityProp:hW,_inputObserver:dX,_scrollers:D8,_proxies:i$,bridge:{ss:function J(){u$||$9("scrollStart"),u$=oJ()},ref:function J(){return lJ}}};_X()&&s0.registerPlugin(O8);var cX=()=>{return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var lX=()=>{let J=!1;return function($){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test($)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test($.substr(0,4)))J=!0}(navigator.userAgent||navigator.vendor||window.opera),J};/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */var O7,l9,GH,FR=()=>GH||a$.register(window.gsap),oX=typeof Intl!=="undefined"?new Intl.Segmenter:0,W1=(J)=>typeof J==="string"?W1(document.querySelectorAll(J)):("length"in J)?Array.from(J):[J],sX=(J)=>W1(J).filter(($)=>$ instanceof HTMLElement),XH=[],YH=function(){},LR=/\s+/g,nX=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),iX={left:0,top:0,width:0,height:0},aX=(J,$)=>{if($){let Q=new Set(J.join("").match($)||XH),Z=J.length,W,K,U,H;if(Q.size)while(--Z>-1){K=J[Z];for(U of Q)if(U.startsWith(K)&&U.length>K.length){W=0,H=K;while(U.startsWith(H+=J[Z+ ++W])&&H.length<U.length);if(W&&H.length===U.length){J[Z]=U,J.splice(Z+1,W);break}}}}return J},rX=(J)=>window.getComputedStyle(J).display==="inline"&&(J.style.display="inline-block"),o9=(J,$,Q)=>$.insertBefore(typeof J==="string"?document.createTextNode(J):J,Q),NH=(J,$,Q)=>{let Z=$[J+"sClass"]||"",{tag:W="div",aria:K="auto",propIndex:U=!1}=$,H=J==="line"?"block":"inline-block",q=Z.indexOf("++")>-1,Y=(G)=>{let X=document.createElement(W),N=Q.length+1;if(Z&&(X.className=Z+(q?" "+Z+N:"")),U&&X.style.setProperty("--"+J,N+""),K!=="none"&&X.setAttribute("aria-hidden","true"),W!=="span")X.style.position="relative",X.style.display=H;return X.textContent=G,Q.push(X),X};return q&&(Z=Z.replace("++","")),Y.collection=Q,Y},ER=(J,$,Q,Z)=>{let W=NH("line",Q,Z),K=window.getComputedStyle(J).textAlign||"left";return(U,H)=>{let q=W("");q.style.textAlign=K,J.insertBefore(q,$[U]);for(;U<H;U++)q.appendChild($[U]);q.normalize()}},tX=(J,$,Q,Z,W,K,U,H,q,Y)=>{var G;let X=Array.from(J.childNodes),N=0,{wordDelimiter:F,reduceWhiteSpace:M=!0,prepareText:E}=$,L=J.getBoundingClientRect(),O=L,z=!M&&window.getComputedStyle(J).whiteSpace.substring(0,3)==="pre",B=0,I=Q.collection,A,C,P,x,D,k,b,v,m,n,r,s,J0,a,c,w,W0,R0;if(typeof F==="object")P=F.delimiter||F,C=F.replaceWith||"";else C=F===""?"":F||" ";A=C!==" ";for(;N<X.length;N++)if(x=X[N],x.nodeType===3){if(c=x.textContent||"",M)c=c.replace(LR," ");else if(z)c=c.replace(/\n/g,C+`
`);E&&(c=E(c,J)),x.textContent=c,D=C||P?c.split(P||C):c.match(H)||XH,W0=D[D.length-1],v=A?W0.slice(-1)===" ":!W0,W0||D.pop(),O=L,b=A?D[0].charAt(0)===" ":!D[0],b&&o9(" ",J,x),D[0]||D.shift(),aX(D,q),K&&Y||(x.textContent="");for(m=1;m<=D.length;m++){if(w=D[m-1],!M&&z&&w.charAt(0)===`
`)(G=x.previousSibling)==null||G.remove(),o9(document.createElement("br"),J,x),w=w.slice(1);if(!M&&w==="")o9(C,J,x);else if(w===" ")J.insertBefore(document.createTextNode(" "),x);else{if(A&&w.charAt(0)===" "&&o9(" ",J,x),B&&m===1&&!b&&I.indexOf(B.parentNode)>-1)k=I[I.length-1],k.appendChild(document.createTextNode(Z?"":w));else k=Q(Z?"":w),o9(k,J,x),B&&m===1&&!b&&k.insertBefore(B,k.firstChild);if(Z){r=oX?aX([...oX.segment(w)].map((e)=>e.segment),q):w.match(H)||XH;for(R0=0;R0<r.length;R0++)k.appendChild(r[R0]===" "?document.createTextNode(" "):Z(r[R0]))}if(K&&Y){if(c=x.textContent=c.substring(w.length+1,c.length),n=k.getBoundingClientRect(),n.top>O.top&&n.left<=O.left){s=J.cloneNode(),J0=J.childNodes[0];while(J0&&J0!==k)a=J0,J0=J0.nextSibling,s.appendChild(a);J.parentNode.insertBefore(s,J),W&&rX(s)}O=n}if(m<D.length||v)o9(m>=D.length?" ":A&&w.slice(-1)===" "?" "+C:C,J,x)}}J.removeChild(x),B=0}else if(x.nodeType===1){if(U&&U.indexOf(x)>-1)I.indexOf(x.previousSibling)>-1&&I[I.length-1].appendChild(x),B=x;else tX(x,$,Q,Z,W,K,U,H,q,!0),B=0;W&&rX(x)}},eX=class J{constructor($,Q){this.isSplit=!1,FR(),this.elements=sX($),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=Q,this._split=()=>this.isSplit&&this.split(this.vars);let Z=[],W,K=()=>{let U=Z.length,H;while(U--){H=Z[U];let q=H.element.offsetWidth;if(q!==H.width){H.width=q,this._split();return}}};this._data={orig:Z,obs:typeof ResizeObserver!=="undefined"&&new ResizeObserver(()=>{clearTimeout(W),W=setTimeout(K,200)})},YH(this),this.split(Q)}split($){this.isSplit&&this.revert(),this.vars=$=$||this.vars||{};let{type:Q="chars,words,lines",aria:Z="auto",deepSlice:W=!0,smartWrap:K,onSplit:U,autoSplit:H=!1,specialChars:q,mask:Y}=this.vars,G=Q.indexOf("lines")>-1,X=Q.indexOf("chars")>-1,N=Q.indexOf("words")>-1,F=X&&!N&&!G,M=q&&("push"in q?new RegExp("(?:"+q.join("|")+")","gu"):q),E=M?new RegExp(M.source+"|"+nX.source,"gu"):nX,L=!!$.ignore&&sX($.ignore),{orig:O,animTime:z,obs:B}=this._data,I;if(X||N||G)this.elements.forEach((A,C)=>{O[C]={element:A,html:A.innerHTML,ariaL:A.getAttribute("aria-label"),ariaH:A.getAttribute("aria-hidden")},Z==="auto"?A.setAttribute("aria-label",(A.textContent||"").trim()):Z==="hidden"&&A.setAttribute("aria-hidden","true");let P=[],x=[],D=[],k=X?NH("char",$,P):null,b=NH("word",$,x),v,m,n,r;if(tX(A,$,b,k,F,W&&(G||F),L,E,M,!1),G){let s=W1(A.childNodes),J0=ER(A,s,$,D),a,c=[],w=0,W0=s.map((e)=>e.nodeType===1?e.getBoundingClientRect():iX),R0=iX;for(v=0;v<s.length;v++)if(a=s[v],a.nodeType===1)if(a.nodeName==="BR")c.push(a),J0(w,v+1),w=v+1,R0=W0[w];else{if(v&&W0[v].top>R0.top&&W0[v].left<=R0.left)J0(w,v),w=v;R0=W0[v]}w<v&&J0(w,v),c.forEach((e)=>{var K0;return(K0=e.parentNode)==null?void 0:K0.removeChild(e)})}if(!N){for(v=0;v<x.length;v++)if(m=x[v],X||!m.nextSibling||m.nextSibling.nodeType!==3)if(K&&!G){n=document.createElement("span"),n.style.whiteSpace="nowrap";while(m.firstChild)n.appendChild(m.firstChild);m.replaceWith(n)}else m.replaceWith(...m.childNodes);else if(r=m.nextSibling,r&&r.nodeType===3)r.textContent=(m.textContent||"")+(r.textContent||""),m.remove();x.length=0,A.normalize()}this.lines.push(...D),this.words.push(...x),this.chars.push(...P)}),Y&&this[Y]&&this.masks.push(...this[Y].map((A)=>{let C=A.cloneNode();return A.replaceWith(C),C.appendChild(A),A.className&&(C.className=A.className.replace(/(\b\w+\b)/g,"$1-mask")),C.style.overflow="clip",C}));if(this.isSplit=!0,l9&&(H?l9.addEventListener("loadingdone",this._split):l9.status==="loading"&&console.warn("SplitText called before fonts loaded")),(I=U&&U(this))&&I.totalTime)this._data.anim=z?I.totalTime(z):I;return G&&H&&this.elements.forEach((A,C)=>{O[C].width=A.offsetWidth,B&&B.observe(A)}),this}revert(){var $,Q;let{orig:Z,anim:W,obs:K}=this._data;if(K&&K.disconnect(),Z.forEach(({element:U,html:H,ariaL:q,ariaH:Y})=>{U.innerHTML=H,q?U.setAttribute("aria-label",q):U.removeAttribute("aria-label"),Y?U.setAttribute("aria-hidden",Y):U.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=Z.length=this.masks.length=0,this.isSplit=!1,l9==null||l9.removeEventListener("loadingdone",this._split),W)this._data.animTime=W.totalTime(),W.revert();return(Q=($=this.vars).onRevert)==null||Q.call($,this),this}static create($,Q){return new J($,Q)}static register($){if(O7=O7||$||window.gsap,O7)W1=O7.utils.toArray,YH=O7.core.context||YH;if(!GH&&window.innerWidth>0)l9=document.fonts,GH=!0}};eX.version="3.13.0";var a$=eX;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var MR=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var OR=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var BR=Math.PI/180,_P=180/Math.PI,K1=Math.sin,U1=Math.cos,R7=Math.abs,B7=Math.sqrt;var RR=function J($){return typeof $==="number"};var JN=1e5;var F6=function J($){return Math.round($*JN)/JN||0};function $N(J,$,Q,Z,W,K,U){var H=J.length,q,Y,G,X,N;while(--H>-1){q=J[H],Y=q.length;for(G=0;G<Y;G+=2)X=q[G],N=q[G+1],q[G]=X*$+N*Z+K,q[G+1]=X*Q+N*W+U}return J._dirty=1,J}function VR(J,$,Q,Z,W,K,U,H,q){if(J===H&&$===q)return;Q=R7(Q),Z=R7(Z);var Y=W%360*BR,G=U1(Y),X=K1(Y),N=Math.PI,F=N*2,M=(J-H)/2,E=($-q)/2,L=G*M+X*E,O=-X*M+G*E,z=L*L,B=O*O,I=z/(Q*Q)+B/(Z*Z);if(I>1)Q=B7(I)*Q,Z=B7(I)*Z;var A=Q*Q,C=Z*Z,P=(A*C-A*B-C*z)/(A*B+C*z);if(P<0)P=0;var x=(K===U?-1:1)*B7(P),D=x*(Q*O/Z),k=x*-(Z*L/Q),b=(J+H)/2,v=($+q)/2,m=b+(G*D-X*k),n=v+(X*D+G*k),r=(L-D)/Q,s=(O-k)/Z,J0=(-L-D)/Q,a=(-O-k)/Z,c=r*r+s*s,w=(s<0?-1:1)*Math.acos(r/B7(c)),W0=(r*a-s*J0<0?-1:1)*Math.acos((r*J0+s*a)/B7(c*(J0*J0+a*a)));if(isNaN(W0)&&(W0=N),!U&&W0>0)W0-=F;else if(U&&W0<0)W0+=F;w%=F,W0%=F;var R0=Math.ceil(R7(W0)/(F/4)),e=[],K0=W0/R0,Z0=1.3333333333333333*K1(K0/2)/(1+U1(K0/2)),M0=G*Q,q0=X*Q,j0=X*-Z,u0=G*Z,m0;for(m0=0;m0<R0;m0++)W=w+m0*K0,L=U1(W),O=K1(W),r=U1(W+=K0),s=K1(W),e.push(L-Z0*O,O+Z0*L,r+Z0*s,s-Z0*r,r,s);for(m0=0;m0<e.length;m0+=2)L=e[m0],O=e[m0+1],e[m0]=L*M0+O*j0+m,e[m0+1]=L*q0+O*u0+n;return e[m0-2]=H,e[m0-1]=q,e}function QN(J){var $=(J+"").replace(OR,function(D){var k=+D;return k<0.0001&&k>-0.0001?0:k}).match(MR)||[],Q=[],Z=0,W=0,K=0.6666666666666666,U=$.length,H=0,q="ERROR: malformed path: "+J,Y,G,X,N,F,M,E,L,O,z,B,I,A,C,P,x=function D(k,b,v,m){z=(v-k)/3,B=(m-b)/3,E.push(k+z,b+B,v-z,m-B,v,m)};if(!J||!isNaN($[0])||isNaN($[1]))return console.log(q),Q;for(Y=0;Y<U;Y++){if(A=F,isNaN($[Y]))F=$[Y].toUpperCase(),M=F!==$[Y];else Y--;if(X=+$[Y+1],N=+$[Y+2],M)X+=Z,N+=W;if(!Y)L=X,O=N;if(F==="M"){if(E)if(E.length<8)Q.length-=1;else H+=E.length;Z=L=X,W=O=N,E=[X,N],Q.push(E),Y+=2,F="L"}else if(F==="C"){if(!E)E=[0,0];if(!M)Z=W=0;E.push(X,N,Z+$[Y+3]*1,W+$[Y+4]*1,Z+=$[Y+5]*1,W+=$[Y+6]*1),Y+=6}else if(F==="S"){if(z=Z,B=W,A==="C"||A==="S")z+=Z-E[E.length-4],B+=W-E[E.length-3];if(!M)Z=W=0;E.push(z,B,X,N,Z+=$[Y+3]*1,W+=$[Y+4]*1),Y+=4}else if(F==="Q"){if(z=Z+(X-Z)*K,B=W+(N-W)*K,!M)Z=W=0;Z+=$[Y+3]*1,W+=$[Y+4]*1,E.push(z,B,Z+(X-Z)*K,W+(N-W)*K,Z,W),Y+=4}else if(F==="T")z=Z-E[E.length-4],B=W-E[E.length-3],E.push(Z+z,W+B,X+(Z+z*1.5-X)*K,N+(W+B*1.5-N)*K,Z=X,W=N),Y+=2;else if(F==="H")x(Z,W,Z=X,W),Y+=1;else if(F==="V")x(Z,W,Z,W=X+(M?W-Z:0)),Y+=1;else if(F==="L"||F==="Z"){if(F==="Z")X=L,N=O,E.closed=!0;if(F==="L"||R7(Z-X)>0.5||R7(W-N)>0.5){if(x(Z,W,X,N),F==="L")Y+=2}Z=X,W=N}else if(F==="A"){if(C=$[Y+4],P=$[Y+5],z=$[Y+6],B=$[Y+7],G=7,C.length>1){if(C.length<3)B=z,z=P,G--;else B=P,z=C.substr(2),G-=2;P=C.charAt(1),C=C.charAt(0)}if(I=VR(Z,W,+$[Y+1],+$[Y+2],+$[Y+3],+C,+P,(M?Z:0)+z*1,(M?W:0)+B*1),Y+=G,I)for(G=0;G<I.length;G++)E.push(I[G]);Z=E[E.length-2],W=E[E.length-1]}else console.log(q)}if(Y=E.length,Y<6)Q.pop(),Y=0;else if(E[0]===E[Y-2]&&E[1]===E[Y-1])E.closed=!0;return Q.totalPoints=H+Y,Q}function ZN(J){if(RR(J[0]))J=[J];var $="",Q=J.length,Z,W,K,U;for(W=0;W<Q;W++){U=J[W],$+="M"+F6(U[0])+","+F6(U[1])+" C",Z=U.length;for(K=2;K<Z;K++)$+=F6(U[K++])+","+F6(U[K++])+" "+F6(U[K++])+","+F6(U[K++])+" "+F6(U[K++])+","+F6(U[K])+" ";if(U.closed)$+="z"}return $}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var O$,KN,UN=function J(){return O$||typeof window!=="undefined"&&(O$=window.gsap)&&O$.registerPlugin&&O$},WN=function J(){if(O$=UN(),O$)O$.registerEase("_CE",Q9.create),KN=1;else console.warn("Please gsap.registerPlugin(CustomEase)")},zR=100000000000000000000,H1=function J($){return~~($*1000+($<0?-0.5:0.5))/1000},DR=1,kR=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,CR=/[cLlsSaAhHvVtTqQ]/g,PR=function J($){var Q=$.length,Z=zR,W;for(W=1;W<Q;W+=6)+$[W]<Z&&(Z=+$[W]);return Z},IR=function J($,Q,Z){if(!Z&&Z!==0)Z=Math.max(+$[$.length-1],+$[1]);var W=+$[0]*-1,K=-Z,U=$.length,H=1/(+$[U-2]+W),q=-Q||(Math.abs(+$[U-1]-+$[1])<0.01*(+$[U-2]-+$[0])?PR($)+K:+$[U-1]+K),Y;if(q)q=1/q;else q=-H;for(Y=0;Y<U;Y+=2)$[Y]=(+$[Y]+W)*H,$[Y+1]=(+$[Y+1]+K)*q},AR=function J($,Q,Z,W,K,U,H,q,Y,G,X){var N=($+Z)/2,F=(Q+W)/2,M=(Z+K)/2,E=(W+U)/2,L=(K+H)/2,O=(U+q)/2,z=(N+M)/2,B=(F+E)/2,I=(M+L)/2,A=(E+O)/2,C=(z+I)/2,P=(B+A)/2,x=H-$,D=q-Q,k=Math.abs((Z-H)*D-(W-q)*x),b=Math.abs((K-H)*D-(U-q)*x),v;if(!G)G=[{x:$,y:Q},{x:H,y:q}],X=1;if(G.splice(X||G.length-1,0,{x:C,y:P}),(k+b)*(k+b)>Y*(x*x+D*D))v=G.length,J($,Q,N,F,z,B,C,P,Y,G,X),J(C,P,I,A,L,O,H,q,Y,G,X+1+(G.length-v));return G},Q9=function(){function J(Q,Z,W){KN||WN(),this.id=Q,DR&&this.setData(Z,W)}var $=J.prototype;return $.setData=function Q(Z,W){W=W||{},Z=Z||"0,0,1,1";var K=Z.match(kR),U=1,H=[],q=[],Y=W.precision||1,G=Y<=1,X,N,F,M,E,L,O,z,B;if(this.data=Z,CR.test(Z)||~Z.indexOf("M")&&Z.indexOf("C")<0)K=QN(Z)[0];if(X=K.length,X===4)K.unshift(0,0),K.push(1,1),X=8;else if((X-2)%6)throw"Invalid CustomEase";if(+K[0]!==0||+K[X-2]!==1)IR(K,W.height,W.originY);this.segment=K;for(M=2;M<X;M+=6)N={x:+K[M-2],y:+K[M-1]},F={x:+K[M+4],y:+K[M+5]},H.push(N,F),AR(N.x,N.y,+K[M],+K[M+1],+K[M+2],+K[M+3],F.x,F.y,1/(Y*200000),H,H.length-1);X=H.length;for(M=0;M<X;M++)if(O=H[M],z=H[M-1]||O,(O.x>z.x||z.y!==O.y&&z.x===O.x||O===z)&&O.x<=1){if(z.cx=O.x-z.x,z.cy=O.y-z.y,z.n=O,z.nx=O.x,G&&M>1&&Math.abs(z.cy/z.cx-H[M-2].cy/H[M-2].cx)>2)G=0;if(z.cx<U)if(!z.cx){if(z.cx=0.001,M===X-1)z.x-=0.001,U=Math.min(U,0.001),G=0}else U=z.cx}else H.splice(M--,1),X--;if(X=1/U+1|0,E=1/X,L=0,O=H[0],G){for(M=0;M<X;M++){if(B=M*E,O.nx<B)O=H[++L];if(N=O.y+(B-O.x)/O.cx*O.cy,q[M]={x:B,cx:E,y:N,cy:0,nx:9},M)q[M-1].cy=N-q[M-1].y}L=H[H.length-1],q[X-1].cy=L.y-N,q[X-1].cx=L.x-q[q.length-1].x}else{for(M=0;M<X;M++){if(O.nx<M*E)O=H[++L];q[M]=O}if(L<H.length-1)q[M-1]=H[H.length-2]}return this.ease=function(I){var A=q[I*X|0]||q[X-1];if(A.nx<I)A=A.n;return A.y+(I-A.x)/A.cx*A.cy},this.ease.custom=this,this.id&&O$&&O$.registerEase(this.id,this.ease),this},$.getSVGData=function Q(Z){return J.getSVGData(this,Z)},J.create=function Q(Z,W,K){return new J(Z,W,K).ease},J.register=function Q(Z){O$=Z,WN()},J.get=function Q(Z){return O$.parseEase(Z)},J.getSVGData=function Q(Z,W){W=W||{};var K=W.width||100,U=W.height||100,H=W.x||0,q=(W.y||0)+U,Y=O$.utils.toArray(W.path)[0],G,X,N,F,M,E,L,O,z,B;if(W.invert)U=-U,q=0;if(typeof Z==="string")Z=O$.parseEase(Z);if(Z.custom)Z=Z.custom;if(Z instanceof J)G=ZN($N([Z.segment],K,0,0,-U,H,q));else{G=[H,q],L=Math.max(5,(W.precision||1)*200),F=1/L,L+=2,O=5/L,z=H1(H+F*K),B=H1(q+Z(F)*-U),X=(B-q)/(z-H);for(N=2;N<L;N++){if(M=H1(H+N*F*K),E=H1(q+Z(N*F)*-U),Math.abs((E-B)/(M-z)-X)>O||N===L-1)G.push(z,B),X=(E-B)/(M-z);z=M,B=E}G="M"+G.join(",")}return Y&&Y.setAttribute("d",G),G},J}();Q9.version="3.13.0";Q9.headless=!0;UN()&&O$.registerPlugin(Q9);$$.registerPlugin(O8,a$,m8,Q9);var TR=Q9.create("custom","M0,0 C0,1.175 0.3,1.021 1,1 "),SR={ease:"expo.out",duration:1.2};$$.defaults(SR);var q1=cX(),d=$$;function HN(J,$){let Q=0.2;if($.delay)Q=$.delay;d.set(J,{autoAlpha:0}),P8(J,{autoStart:!0,callback:({isIn:Z,entry:W})=>{if(Z)d.to(J,{autoAlpha:1,duration:0.6,delay:Q});else if(W&&W.intersectionRatio===0)d.killTweensOf(J),d.set(J,{autoAlpha:0})}}),h0(()=>{d.killTweensOf(J)})}var EH={};F8(EH,{default:()=>LN});var jR=Object.create,{getPrototypeOf:wR,defineProperty:qN,getOwnPropertyNames:_R}=Object,xR=Object.prototype.hasOwnProperty,yR=(J,$,Q)=>{Q=J!=null?jR(wR(J)):{};let Z=$||!J||!J.__esModule?qN(Q,"default",{value:J,enumerable:!0}):Q;for(let W of _R(J))if(!xR.call(Z,W))qN(Z,W,{get:()=>J[W],enumerable:!0});return Z},bR=(J,$)=>()=>($||J(($={exports:{}}).exports,$),$.exports),vR=bR((J,$)=>{(function(Q,Z){typeof J=="object"&&typeof $!="undefined"?$.exports=Z():typeof define=="function"&&define.amd?define(Z):(Q||self).virtualScroll=Z()})(J,function(){var Q=0;function Z(E){return"__private_"+Q+++"_"+E}function W(E,L){if(!Object.prototype.hasOwnProperty.call(E,L))throw new TypeError("attempted to use private field on non-instance");return E}function K(){}K.prototype={on:function(E,L,O){var z=this.e||(this.e={});return(z[E]||(z[E]=[])).push({fn:L,ctx:O}),this},once:function(E,L,O){var z=this;function B(){z.off(E,B),L.apply(O,arguments)}return B._=L,this.on(E,B,O)},emit:function(E){for(var L=[].slice.call(arguments,1),O=((this.e||(this.e={}))[E]||[]).slice(),z=0,B=O.length;z<B;z++)O[z].fn.apply(O[z].ctx,L);return this},off:function(E,L){var O=this.e||(this.e={}),z=O[E],B=[];if(z&&L)for(var I=0,A=z.length;I<A;I++)z[I].fn!==L&&z[I].fn._!==L&&B.push(z[I]);return B.length?O[E]=B:delete O[E],this}};var U=K;U.TinyEmitter=K;var H,q="virtualscroll",Y=Z("options"),G=Z("el"),X=Z("emitter"),N=Z("event"),F=Z("touchStart"),M=Z("bodyTouchAction");return function(){function E(O){var z=this;Object.defineProperty(this,Y,{writable:!0,value:void 0}),Object.defineProperty(this,G,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,F,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),this._onWheel=function(B){var I=W(z,Y)[Y],A=W(z,N)[N];A.deltaX=B.wheelDeltaX||-1*B.deltaX,A.deltaY=B.wheelDeltaY||-1*B.deltaY,H.isFirefox&&B.deltaMode===1&&(A.deltaX*=I.firefoxMultiplier,A.deltaY*=I.firefoxMultiplier),A.deltaX*=I.mouseMultiplier,A.deltaY*=I.mouseMultiplier,z._notify(B)},this._onMouseWheel=function(B){var I=W(z,N)[N];I.deltaX=B.wheelDeltaX?B.wheelDeltaX:0,I.deltaY=B.wheelDeltaY?B.wheelDeltaY:B.wheelDelta,z._notify(B)},this._onTouchStart=function(B){var I=B.targetTouches?B.targetTouches[0]:B;W(z,F)[F].x=I.pageX,W(z,F)[F].y=I.pageY},this._onTouchMove=function(B){var I=W(z,Y)[Y];I.preventTouch&&!B.target.classList.contains(I.unpreventTouchClass)&&B.preventDefault();var A=W(z,N)[N],C=B.targetTouches?B.targetTouches[0]:B;A.deltaX=(C.pageX-W(z,F)[F].x)*I.touchMultiplier,A.deltaY=(C.pageY-W(z,F)[F].y)*I.touchMultiplier,W(z,F)[F].x=C.pageX,W(z,F)[F].y=C.pageY,z._notify(B)},this._onKeyDown=function(B){var I=W(z,N)[N];I.deltaX=I.deltaY=0;var A=window.innerHeight-40;switch(B.keyCode){case 37:case 38:I.deltaY=W(z,Y)[Y].keyStep;break;case 39:case 40:I.deltaY=-W(z,Y)[Y].keyStep;break;case 32:I.deltaY=A*(B.shiftKey?1:-1);break;default:return}z._notify(B)},W(this,G)[G]=window,O&&O.el&&(W(this,G)[G]=O.el,delete O.el),H||(H={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),W(this,Y)[Y]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},O),W(this,X)[X]=new U,W(this,N)[N]={y:0,x:0,deltaX:0,deltaY:0},W(this,F)[F]={x:null,y:null},W(this,M)[M]=null,W(this,Y)[Y].passive!==void 0&&(this.listenerOptions={passive:W(this,Y)[Y].passive})}var L=E.prototype;return L._notify=function(O){var z=W(this,N)[N];z.x+=z.deltaX,z.y+=z.deltaY,W(this,X)[X].emit(q,{x:z.x,y:z.y,deltaX:z.deltaX,deltaY:z.deltaY,originalEvent:O})},L._bind=function(){H.hasWheelEvent&&W(this,G)[G].addEventListener("wheel",this._onWheel,this.listenerOptions),H.hasMouseWheelEvent&&W(this,G)[G].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),H.hasTouch&&W(this,Y)[Y].useTouch&&(W(this,G)[G].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),W(this,G)[G].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),H.hasPointer&&H.hasTouchWin&&(W(this,M)[M]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",W(this,G)[G].addEventListener("MSPointerDown",this._onTouchStart,!0),W(this,G)[G].addEventListener("MSPointerMove",this._onTouchMove,!0)),H.hasKeyDown&&W(this,Y)[Y].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},L._unbind=function(){H.hasWheelEvent&&W(this,G)[G].removeEventListener("wheel",this._onWheel),H.hasMouseWheelEvent&&W(this,G)[G].removeEventListener("mousewheel",this._onMouseWheel),H.hasTouch&&(W(this,G)[G].removeEventListener("touchstart",this._onTouchStart),W(this,G)[G].removeEventListener("touchmove",this._onTouchMove)),H.hasPointer&&H.hasTouchWin&&(document.body.style.msTouchAction=W(this,M)[M],W(this,G)[G].removeEventListener("MSPointerDown",this._onTouchStart,!0),W(this,G)[G].removeEventListener("MSPointerMove",this._onTouchMove,!0)),H.hasKeyDown&&W(this,Y)[Y].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},L.on=function(O,z){W(this,X)[X].on(q,O,z);var B=W(this,X)[X].e;B&&B[q]&&B[q].length===1&&this._bind()},L.off=function(O,z){W(this,X)[X].off(q,O,z);var B=W(this,X)[X].e;(!B[q]||B[q].length<=0)&&this._unbind()},L.destroy=function(){W(this,X)[X].off(),this._unbind()},E}()})}),hR=yR(vR(),1);function YN(J,$,Q,Z){let W=1-Math.exp(-Q*Z);return J+($-J)*W}function GN(J,$){let Q=J%$;if(Math.abs(Q)>$/2)Q=Q>0?Q-$:Q+$;return Q}var fR={infinite:!0,snap:!0,dragSensitivity:0.005,lerpFactor:0.3,scrollSensitivity:1,snapStrength:0.1,speedDecay:0.85,bounceLimit:1,virtualScroll:{mouseMultiplier:0.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},setOffset:({itemWidth:J,wrapperWidth:$})=>J,scrollInput:!1};class XN{speed=0;#J=0;#Z=0;#$=0;deltaTime=0;#Q=!0;#W=!1;#K=0;#Y=0;config;wrapper;items;viewport;isDragging=!1;dragStart=0;dragStartTarget=0;isVisible=!1;current=0;target=0;maxScroll=0;resizeTimeout;virtualScroll;observer;touchStartY;touchStartX;scrollDirection;parallaxValues;webglValue=0;onSlideChange;onResize;onUpdate;constructor(J,$={}){if(this.config={...fR,...$},$.onSlideChange)this.onSlideChange=$.onSlideChange;if($.onResize)this.onResize=$.onResize;if($.onUpdate)this.onUpdate=$.onUpdate;delete this.config.onSlideChange,delete this.config.onResize,delete this.config.onUpdate,this.wrapper=J,this.items=[...J.children],this.current=0,this.target=0,this.isDragging=!1,this.dragStart=0,this.dragStartTarget=0,this.isVisible=!1,this.#K=0,this.#Y=0,this.#G(),this.#F(),this.#L(),this.wrapper.style.cursor="grab",this.#G(),this.#E()}#F(){let J={root:null,rootMargin:"50px",threshold:0};this.observer=new IntersectionObserver(($)=>{$.forEach((Q)=>{this.isVisible=Q.isIntersecting})},J),this.observer.observe(this.wrapper)}#G(){this.viewport={itemWidth:this.items[0].getBoundingClientRect().width,wrapperWidth:this.wrapper.clientWidth,totalWidth:this.items.reduce((J,$)=>J+$.clientWidth,0)},this.#Z=this.config.setOffset(this.viewport),this.maxScroll=-(this.viewport.totalWidth-this.#Z)/this.viewport.itemWidth,queueMicrotask(()=>{this.onResize?.(this)})}#L(){let J=(H)=>this.#U(H),$=(H)=>this.#H(H),Q=()=>this.#q();this.wrapper.addEventListener("mousedown",J),window.addEventListener("mousemove",$),window.addEventListener("mouseup",Q);let Z=5,W=(H)=>{let q=H.touches[0];this.touchStartY=q.clientY,this.touchStartX=q.clientX,this.scrollDirection=void 0,this.#U(q)},K=(H)=>{let q=H.touches[0],Y=Math.abs(q.clientY-this.touchStartY),G=Math.abs(q.clientX-this.touchStartX);if(!this.scrollDirection&&(G>Z||Y>Z))this.scrollDirection=G>Y?"horizontal":"vertical";if(this.scrollDirection==="horizontal")H.preventDefault(),this.#H(q)},U=()=>{this.scrollDirection=void 0,this.#q()};this.wrapper.addEventListener("touchstart",W),window.addEventListener("touchmove",K,{passive:!1}),window.addEventListener("touchend",U),new ResizeObserver(()=>{if(this.resizeTimeout)clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(()=>this.resize(),10)}).observe(this.wrapper)}#X(J){if(!this.config.infinite){if(J>this.config.bounceLimit)return this.config.bounceLimit;else if(J<this.maxScroll-this.config.bounceLimit)return this.maxScroll-this.config.bounceLimit}return J}#E(){this.virtualScroll=new hR.default({...this.config.virtualScroll,el:this.wrapper});let J=5;this.virtualScroll.on(($)=>{if(!this.isDragging&&!this.#W){if($.touchDevice){let W=Math.abs($.deltaY),K=Math.abs($.deltaX);if(W<J&&K<J)return;if(W>K)return}let Q=(!this.config.scrollInput?$.deltaX:Math.abs($.deltaX)>Math.abs($.deltaY)?$.deltaX:$.deltaY)*this.config.scrollSensitivity*0.001,Z=this.target+Q;if(!this.config.infinite){if(Z>0)Z=0;else if(Z<this.maxScroll)Z=this.maxScroll}this.target=this.#X(Z),this.speed=-Q*10}})}#U(J){if(this.#W)return;this.isDragging=!0,this.dragStart=J.clientX,this.dragStartTarget=this.target,this.wrapper.style.cursor="grabbing"}#H(J){if(!this.isDragging||this.#W)return;let $=J.clientX-this.dragStart,Q=this.dragStartTarget+$*this.config.dragSensitivity;if(this.target=this.#X(Q),"movementX"in J)this.speed+=J.movementX*0.01}#q(){if(this.isDragging=!1,this.wrapper.style.cursor="grab",!this.config.infinite){if(this.target>0)this.target=0;else if(this.target<this.maxScroll)this.target=this.maxScroll;else if(this.config.snap){let J=Math.round(this.target);this.target=Math.min(0,Math.max(this.maxScroll,J))}}else if(this.config.snap)this.target=Math.round(this.target)}update(){if(!this.isVisible||!this.#Q)return;let J=performance.now();if(this.deltaTime=(J-this.#$)/1000,this.#$=J,this.config.snap&&!this.isDragging){let $=Math.round(this.target)-this.target;this.target+=$*this.config.snapStrength}if(this.current=YN(this.current,this.target,1/this.config.lerpFactor,this.deltaTime),this.config.infinite){let $=Math.round(-this.current),Q=this.items.length,Z=($%Q+Q)%Q;this.#N(Z),this.#O()}else this.#N(Math.round(Math.abs(this.current))),this.#M();this.#B(),this.onUpdate?.(this)}#M(){this.parallaxValues=this.items.map((J,$)=>{let Q=this.current*this.viewport.itemWidth;return J.style.transform=`translateX(${Q}px)`,Q})}#O(){this.parallaxValues=this.items.map((J,$)=>{let Q=this.current+$,Z=(GN(Q,this.items.length)-$)*this.viewport.itemWidth;return J.style.transform=`translateX(${Z}px)`,GN(Q,this.items.length)})}#B(){this.#J=YN(this.#J,this.speed,1/this.config.lerpFactor,this.deltaTime),this.speed*=this.config.speedDecay}goToNext(){if(!this.config.infinite)this.target=Math.max(this.maxScroll,Math.round(this.target-1));else this.target=Math.round(this.target-1)}goToPrev(){if(!this.config.infinite)this.target=Math.min(0,Math.round(this.target+1));else this.target=Math.round(this.target+1)}goToIndex(J){this.target=-J}set snap(J){this.config.snap=J}getProgress(){let J=this.items.length;return Math.abs(this.current)%J/J}destroy(){if(this.kill(),window.removeEventListener("mousemove",(J)=>this.#H(J)),window.removeEventListener("mouseup",()=>this.#q()),window.removeEventListener("touchmove",(J)=>{let $=J.touches[0];this.#H($)}),window.removeEventListener("touchend",()=>this.#q()),this.wrapper.removeEventListener("mousedown",(J)=>this.#U(J)),this.wrapper.removeEventListener("touchstart",(J)=>{let $=J.touches[0];this.#U($)}),this.resizeTimeout)clearTimeout(this.resizeTimeout);if(this.virtualScroll&&this.config.scrollInput)this.virtualScroll.destroy();if(this.observer)this.observer.disconnect()}get currentSlide(){return this.#K}#N(J){if(this.#K!==J)this.#Y=this.#K,this.#K=J,this.onSlideChange?.(this.#K,this.#Y)}kill(){this.#Q=!1,this.items.forEach((J)=>{J.style.transform=""}),this.current=0,this.target=0,this.speed=0,this.#J=0}init(){this.#Q=!0,this.#$=performance.now()}set paused(J){this.#W=J}get paused(){return this.#W}get progress(){if(this.config.infinite){let J=-this.target,$=this.items.length;return(J%$+$)%$/($-1)}else{let J=Math.abs(this.current),$=Math.abs(this.maxScroll);return Math.max(0,Math.min(1,J/$))}}resize(){this.#G();let J=this.#Q,$=this.isVisible;this.#Q=!0,this.isVisible=!0,this.update(),this.#Q=J,this.isVisible=$}}var s9=XN;class LH{#J=[];add(J,$=0,Q=Symbol()){let Z=this.#J.findIndex((W)=>W.priority>$);if(Z===-1)this.#J.push({fn:J,priority:$,id:Q});else this.#J.splice(Z,0,{fn:J,priority:$,id:Q});return()=>this.remove(Q)}remove(J){this.#J=this.#J.filter(($)=>$.id!==J)}notify(J){if(this.#J.length<1)return;this.#J.forEach(($)=>$.fn(J))}}class NN extends LH{constructor(){super();d.ticker.add(this.update.bind(this))}update(J,$){this.notify({deltaTime:J,time:$*0.01})}}class FN extends LH{width=window.innerWidth;height=window.innerHeight;timeoutId=null;debounceDelay=100;constructor(){super();window.addEventListener("resize",this.update.bind(this))}update(J){if(this.timeoutId)window.clearTimeout(this.timeoutId);this.timeoutId=window.setTimeout(()=>{let{innerWidth:$,innerHeight:Q}=window;if($!==this.width||Q!==this.height)this.width=$,this.height=Q,this.notify({width:this.width,height:this.height});this.timeoutId=null},this.debounceDelay)}}var PJ=new NN,yQ=new FN;function LN(J,$){if(!window.matchMedia("(max-width: 767px)").matches)[...J.children].forEach((L)=>{let O=L.cloneNode(!0);J.appendChild(O)});let Z=new s9(J,{snap:!0}),W=2000,K=2000,U=!1,H=0,q,Y=!1,G,X=()=>{if(U=!0,H=Date.now(),q)clearInterval(q),q=null},N=()=>{if(q||!Y)return;q=setInterval(()=>{if(Date.now()-H>K&&!U)try{Z.target=Z.target-1}catch(L){console.warn("Smooothy target update failed:",L)}},W)},F=()=>{if(q)clearInterval(q),q=null},M=()=>{if(G)clearTimeout(G);G=window.setTimeout(()=>{if(U=!1,Y)N();G=null},K)};J.addEventListener("mousedown",X),J.addEventListener("touchstart",X,{passive:!0}),J.addEventListener("wheel",X,{passive:!0}),J.addEventListener("mouseup",M),J.addEventListener("touchend",M,{passive:!0});let E=PJ.add(({deltaTime:L,time:O})=>{try{Z.update()}catch(z){console.warn("Smooothy update failed:",z)}});P8(J,{callback:({isIn:L})=>{if(Y=L,L){try{Z.current=Z.current+1}catch(O){console.warn("Smooothy current update failed:",O)}N()}else F()}}),h0(()=>{if(E(),F(),G)clearTimeout(G),G=null;J.removeEventListener("mousedown",X),J.removeEventListener("touchstart",X),J.removeEventListener("wheel",X),J.removeEventListener("mouseup",M),J.removeEventListener("touchend",M)})}var nY={};F8(nY,{default:()=>JM});var sY={};F8(sY,{default:()=>eE,WebGLRegistry:()=>tJ});var eN="178",V6={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},z6={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JF=0,lH=1,$F=2;var oH=1,QF=2,EQ=3,D6=0,j$=1,VJ=2,MQ=0,j7=1,sH=2,nH=3,iH=4,ZF=5,GZ=100,WF=101,KF=102,UF=103,HF=104,qF=200,YF=201,GF=202,XF=203,NF=204,FF=205,LF=206,EF=207,MF=208,OF=209,BF=210,RF=211,VF=212,zF=213,DF=214,b1=0,v1=1,h1=2,w7=3,f1=4,g1=5,u1=6,p1=7,kF=0,CF=1,PF=2,lQ=0,IF=1,AF=2,TF=3,m1=4,SF=5,jF=6,wF=7;var XZ=301,G9=302,X9=303,d1=304,_7=306,NZ=1000,c1=1001,l1=1002,c$=1003,o1=1004;var N9=1005;var gJ=1006,FZ=1007;var oQ=1008;var k6=1009,_F=1010,xF=1011,x7=1012,aH=1013,LZ=1014,$J=1015,AJ=1016,rH=1017,tH=1018,EZ=1020,yF=35902,bF=1021,vF=1022,aJ=1023,s1=1026,y7=1027,n1=1028,eH=1029,hF=1030,Jq=1031;var $q=1033,i1=33776,a1=33777,r1=33778,t1=33779,Qq=35840,Zq=35841,Wq=35842,Kq=35843,Uq=36196,Hq=37492,qq=37496,Yq=37808,Gq=37809,Xq=37810,Nq=37811,Fq=37812,Lq=37813,Eq=37814,Mq=37815,Oq=37816,Bq=37817,Rq=37818,Vq=37819,zq=37820,Dq=37821,e1=36492,kq=36494,Cq=36495,fF=36283,Pq=36284,Iq=36285,Aq=36286;var Tq=2300,JK=2301;var Sq=0,b7=1,MZ=2;var gF=3201;var uF=0,pF=1,sQ="",C6="srgb",XJ="srgb-linear",jq="linear",e8="srgb";var mF=512,dF=513,cF=514,wq=515,lF=516,oF=517,sF=518,nF=519;var _q="300 es",iF=2000;class nQ{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let W=Z.indexOf($);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var nJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],EN=1234567,T7=Math.PI/180,H9=180/Math.PI;function QQ(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(nJ[J&255]+nJ[J>>8&255]+nJ[J>>16&255]+nJ[J>>24&255]+"-"+nJ[$&255]+nJ[$>>8&255]+"-"+nJ[$>>16&15|64]+nJ[$>>24&255]+"-"+nJ[Q&63|128]+nJ[Q>>8&255]+"-"+nJ[Q>>16&255]+nJ[Q>>24&255]+nJ[Z&255]+nJ[Z>>8&255]+nJ[Z>>16&255]+nJ[Z>>24&255]).toLowerCase()}function V8(J,$,Q){return Math.max($,Math.min(Q,J))}function xq(J,$){return(J%$+$)%$}function gR(J,$,Q,Z,W){return Z+(J-$)*(W-Z)/(Q-$)}function uR(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function S7(J,$,Q){return(1-Q)*J+Q*$}function pR(J,$,Q,Z){return S7(J,$,1-Math.exp(-Q*Z))}function mR(J,$=1){return $-Math.abs(xq(J,$*2)-$)}function dR(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function cR(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function lR(J,$){return J+Math.floor(Math.random()*($-J+1))}function oR(J,$){return J+Math.random()*($-J)}function sR(J){return J*(0.5-Math.random())}function nR(J){if(J!==void 0)EN=J;let $=EN+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function iR(J){return J*T7}function aR(J){return J*H9}function rR(J){return(J&J-1)===0&&J!==0}function tR(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function eR(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function JV(J,$,Q,Z,W){let{cos:K,sin:U}=Math,H=K(Q/2),q=U(Q/2),Y=K(($+Z)/2),G=U(($+Z)/2),X=K(($-Z)/2),N=U(($-Z)/2),F=K((Z-$)/2),M=U((Z-$)/2);switch(W){case"XYX":J.set(H*G,q*X,q*N,H*Y);break;case"YZY":J.set(q*N,H*G,q*X,H*Y);break;case"ZXZ":J.set(q*X,q*N,H*G,H*Y);break;case"XZX":J.set(H*G,q*M,q*F,H*Y);break;case"YXY":J.set(q*F,H*G,q*M,H*Y);break;case"ZYZ":J.set(q*M,q*F,H*G,H*Y);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function $Q(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function d8(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var v7={DEG2RAD:T7,RAD2DEG:H9,generateUUID:QQ,clamp:V8,euclideanModulo:xq,mapLinear:gR,inverseLerp:uR,lerp:S7,damp:pR,pingpong:mR,smoothstep:dR,smootherstep:cR,randInt:lR,randFloat:oR,randFloatSpread:sR,seededRandom:nR,degToRad:iR,radToDeg:aR,isPowerOfTwo:rR,ceilPowerOfTwo:tR,floorPowerOfTwo:eR,setQuaternionFromProperEuler:JV,normalize:d8,denormalize:$Q};class e0{constructor(J=0,$=0){e0.prototype.isVector2=!0,this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=V8(this.x,J.x,$.x),this.y=V8(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=V8(this.x,J,$),this.y=V8(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(V8(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(V8(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),W=this.x-J.x,K=this.y-J.y;return this.x=W*Q-K*Z+J.x,this.y=W*Z+K*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class B${constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,W,K,U){let H=Q[Z+0],q=Q[Z+1],Y=Q[Z+2],G=Q[Z+3],X=W[K+0],N=W[K+1],F=W[K+2],M=W[K+3];if(U===0){J[$+0]=H,J[$+1]=q,J[$+2]=Y,J[$+3]=G;return}if(U===1){J[$+0]=X,J[$+1]=N,J[$+2]=F,J[$+3]=M;return}if(G!==M||H!==X||q!==N||Y!==F){let E=1-U,L=H*X+q*N+Y*F+G*M,O=L>=0?1:-1,z=1-L*L;if(z>Number.EPSILON){let I=Math.sqrt(z),A=Math.atan2(I,L*O);E=Math.sin(E*A)/I,U=Math.sin(U*A)/I}let B=U*O;if(H=H*E+X*B,q=q*E+N*B,Y=Y*E+F*B,G=G*E+M*B,E===1-U){let I=1/Math.sqrt(H*H+q*q+Y*Y+G*G);H*=I,q*=I,Y*=I,G*=I}}J[$]=H,J[$+1]=q,J[$+2]=Y,J[$+3]=G}static multiplyQuaternionsFlat(J,$,Q,Z,W,K){let U=Q[Z],H=Q[Z+1],q=Q[Z+2],Y=Q[Z+3],G=W[K],X=W[K+1],N=W[K+2],F=W[K+3];return J[$]=U*F+Y*G+H*N-q*X,J[$+1]=H*F+Y*X+q*G-U*N,J[$+2]=q*F+Y*N+U*X-H*G,J[$+3]=Y*F-U*G-H*X-q*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:W,_order:K}=J,U=Math.cos,H=Math.sin,q=U(Q/2),Y=U(Z/2),G=U(W/2),X=H(Q/2),N=H(Z/2),F=H(W/2);switch(K){case"XYZ":this._x=X*Y*G+q*N*F,this._y=q*N*G-X*Y*F,this._z=q*Y*F+X*N*G,this._w=q*Y*G-X*N*F;break;case"YXZ":this._x=X*Y*G+q*N*F,this._y=q*N*G-X*Y*F,this._z=q*Y*F-X*N*G,this._w=q*Y*G+X*N*F;break;case"ZXY":this._x=X*Y*G-q*N*F,this._y=q*N*G+X*Y*F,this._z=q*Y*F+X*N*G,this._w=q*Y*G-X*N*F;break;case"ZYX":this._x=X*Y*G-q*N*F,this._y=q*N*G+X*Y*F,this._z=q*Y*F-X*N*G,this._w=q*Y*G+X*N*F;break;case"YZX":this._x=X*Y*G+q*N*F,this._y=q*N*G+X*Y*F,this._z=q*Y*F-X*N*G,this._w=q*Y*G-X*N*F;break;case"XZY":this._x=X*Y*G-q*N*F,this._y=q*N*G-X*Y*F,this._z=q*Y*F+X*N*G,this._w=q*Y*G+X*N*F;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],W=$[8],K=$[1],U=$[5],H=$[9],q=$[2],Y=$[6],G=$[10],X=Q+U+G;if(X>0){let N=0.5/Math.sqrt(X+1);this._w=0.25/N,this._x=(Y-H)*N,this._y=(W-q)*N,this._z=(K-Z)*N}else if(Q>U&&Q>G){let N=2*Math.sqrt(1+Q-U-G);this._w=(Y-H)/N,this._x=0.25*N,this._y=(Z+K)/N,this._z=(W+q)/N}else if(U>G){let N=2*Math.sqrt(1+U-Q-G);this._w=(W-q)/N,this._x=(Z+K)/N,this._y=0.25*N,this._z=(H+Y)/N}else{let N=2*Math.sqrt(1+G-Q-U);this._w=(K-Z)/N,this._x=(W+q)/N,this._y=(H+Y)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(V8(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:W,_w:K}=J,U=$._x,H=$._y,q=$._z,Y=$._w;return this._x=Q*Y+K*U+Z*q-W*H,this._y=Z*Y+K*H+W*U-Q*q,this._z=W*Y+K*q+Q*H-Z*U,this._w=K*Y-Q*U-Z*H-W*q,this._onChangeCallback(),this}slerp(J,$){if($===0)return this;if($===1)return this.copy(J);let Q=this._x,Z=this._y,W=this._z,K=this._w,U=K*J._w+Q*J._x+Z*J._y+W*J._z;if(U<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,U=-U;else this.copy(J);if(U>=1)return this._w=K,this._x=Q,this._y=Z,this._z=W,this;let H=1-U*U;if(H<=Number.EPSILON){let N=1-$;return this._w=N*K+$*this._w,this._x=N*Q+$*this._x,this._y=N*Z+$*this._y,this._z=N*W+$*this._z,this.normalize(),this}let q=Math.sqrt(H),Y=Math.atan2(q,U),G=Math.sin((1-$)*Y)/q,X=Math.sin($*Y)/q;return this._w=K*G+this._w*X,this._x=Q*G+this._x*X,this._y=Z*G+this._y*X,this._z=W*G+this._z*X,this._onChangeCallback(),this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin($),W*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class i{constructor(J=0,$=0,Q=0){i.prototype.isVector3=!0,this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(MN.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(MN.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[3]*Q+W[6]*Z,this.y=W[1]*$+W[4]*Q+W[7]*Z,this.z=W[2]*$+W[5]*Q+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements,K=1/(W[3]*$+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*$+W[4]*Q+W[8]*Z+W[12])*K,this.y=(W[1]*$+W[5]*Q+W[9]*Z+W[13])*K,this.z=(W[2]*$+W[6]*Q+W[10]*Z+W[14])*K,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,W=J.x,K=J.y,U=J.z,H=J.w,q=2*(K*Z-U*Q),Y=2*(U*$-W*Z),G=2*(W*Q-K*$);return this.x=$+H*q+K*G-U*Y,this.y=Q+H*Y+U*q-W*G,this.z=Z+H*G+W*Y-K*q,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z,this.y=W[1]*$+W[5]*Q+W[9]*Z,this.z=W[2]*$+W[6]*Q+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=V8(this.x,J.x,$.x),this.y=V8(this.y,J.y,$.y),this.z=V8(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=V8(this.x,J,$),this.y=V8(this.y,J,$),this.z=V8(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(V8(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:W}=J,K=$.x,U=$.y,H=$.z;return this.x=Z*H-W*U,this.y=W*K-Q*H,this.z=Q*U-Z*K,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return MH.copy(this).projectOnVector(J),this.sub(MH)}reflect(J){return this.sub(MH.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(V8(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var MH=new i,MN=new B$;class R8{constructor(J,$,Q,Z,W,K,U,H,q){if(R8.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,K,U,H,q)}set(J,$,Q,Z,W,K,U,H,q){let Y=this.elements;return Y[0]=J,Y[1]=Z,Y[2]=U,Y[3]=$,Y[4]=W,Y[5]=H,Y[6]=Q,Y[7]=K,Y[8]=q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,K=Q[0],U=Q[3],H=Q[6],q=Q[1],Y=Q[4],G=Q[7],X=Q[2],N=Q[5],F=Q[8],M=Z[0],E=Z[3],L=Z[6],O=Z[1],z=Z[4],B=Z[7],I=Z[2],A=Z[5],C=Z[8];return W[0]=K*M+U*O+H*I,W[3]=K*E+U*z+H*A,W[6]=K*L+U*B+H*C,W[1]=q*M+Y*O+G*I,W[4]=q*E+Y*z+G*A,W[7]=q*L+Y*B+G*C,W[2]=X*M+N*O+F*I,W[5]=X*E+N*z+F*A,W[8]=X*L+N*B+F*C,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],U=J[5],H=J[6],q=J[7],Y=J[8];return $*K*Y-$*U*q-Q*W*Y+Q*U*H+Z*W*q-Z*K*H}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],U=J[5],H=J[6],q=J[7],Y=J[8],G=Y*K-U*q,X=U*H-Y*W,N=q*W-K*H,F=$*G+Q*X+Z*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/F;return J[0]=G*M,J[1]=(Z*q-Y*Q)*M,J[2]=(U*Q-Z*K)*M,J[3]=X*M,J[4]=(Y*$-Z*H)*M,J[5]=(Z*W-U*$)*M,J[6]=N*M,J[7]=(Q*H-q*$)*M,J[8]=(K*$-Q*W)*M,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,W,K,U){let H=Math.cos(W),q=Math.sin(W);return this.set(Q*H,Q*q,-Q*(H*K+q*U)+K+J,-Z*q,Z*H,-Z*(-q*K+H*U)+U+$,0,0,1),this}scale(J,$){return this.premultiply(OH.makeScale(J,$)),this}rotate(J){return this.premultiply(OH.makeRotation(-J)),this}translate(J,$){return this.premultiply(OH.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var OH=new R8;function yq(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function YZ(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function aF(){let J=YZ("canvas");return J.style.display="block",J}var ON={};function q9(J){if(J in ON)return;ON[J]=!0,console.warn(J)}function rF(J,$,Q){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,Q);break;default:Z()}}setTimeout(K,Q)})}function tF(J){let $=J.elements;$[2]=0.5*$[2]+0.5*$[3],$[6]=0.5*$[6]+0.5*$[7],$[10]=0.5*$[10]+0.5*$[11],$[14]=0.5*$[14]+0.5*$[15]}function eF(J){let $=J.elements;if($[11]===-1)$[10]=-$[10]-1,$[14]=-$[14];else $[10]=-$[10],$[14]=-$[14]+1}var BN=new R8().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),RN=new R8().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function $V(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,U){if(this.enabled===!1||K===U||!K||!U)return W;if(this.spaces[K].transfer==="srgb")W.r=mQ(W.r),W.g=mQ(W.g),W.b=mQ(W.b);if(this.spaces[K].primaries!==this.spaces[U].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[U].fromXYZ);if(this.spaces[U].transfer==="srgb")W.r=qZ(W.r),W.g=qZ(W.g),W.b=qZ(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,U){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[U].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return q9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return q9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:BN,fromXYZ:RN,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:BN,fromXYZ:RN,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var T8=$V();function mQ(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function qZ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var n9;class bq{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(n9===void 0)n9=YZ("canvas");n9.width=J.width,n9.height=J.height;let Z=n9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=n9}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let $=YZ("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=mQ(W[K]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(mQ($[Q]/255)*255);else $[Q]=mQ($[Q]);return{data:$,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var QV=0;class h7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QV++}),this.uuid=QQ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if($ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,U=Z.length;K<U;K++)if(Z[K].isDataTexture)W.push(BH(Z[K].image));else W.push(BH(Z[K]))}else W=BH(Z);Q.url=W}if(!$)J.images[this.uuid]=Q;return Q}}function BH(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return bq.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var ZV=0,RH=new i;class RJ extends nQ{constructor(J=RJ.DEFAULT_IMAGE,$=RJ.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,K=1008,U=1023,H=1009,q=RJ.DEFAULT_ANISOTROPY,Y=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:ZV++}),this.uuid=QQ(),this.name="",this.source=new h7(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=q,this.format=U,this.internalFormat=null,this.type=H,this.offset=new e0(0,0),this.repeat=new e0(1,1),this.center=new e0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R8,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=Y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(RH).x}get height(){return this.source.getSize(RH).y}get depth(){return this.source.getSize(RH).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){console.warn(`THREE.Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}RJ.DEFAULT_IMAGE=null;RJ.DEFAULT_MAPPING=300;RJ.DEFAULT_ANISOTROPY=1;class v8{constructor(J=0,$=0,Q=0,Z=1){v8.prototype.isVector4=!0,this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z+K[12]*W,this.y=K[1]*$+K[5]*Q+K[9]*Z+K[13]*W,this.z=K[2]*$+K[6]*Q+K[10]*Z+K[14]*W,this.w=K[3]*$+K[7]*Q+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,W,K=0.01,U=0.1,H=J.elements,q=H[0],Y=H[4],G=H[8],X=H[1],N=H[5],F=H[9],M=H[2],E=H[6],L=H[10];if(Math.abs(Y-X)<0.01&&Math.abs(G-M)<0.01&&Math.abs(F-E)<0.01){if(Math.abs(Y+X)<0.1&&Math.abs(G+M)<0.1&&Math.abs(F+E)<0.1&&Math.abs(q+N+L-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let z=(q+1)/2,B=(N+1)/2,I=(L+1)/2,A=(Y+X)/4,C=(G+M)/4,P=(F+E)/4;if(z>B&&z>I)if(z<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(z),Z=A/Q,W=C/Q;else if(B>I)if(B<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(B),Q=A/Z,W=P/Z;else if(I<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(I),Q=C/W,Z=P/W;return this.set(Q,Z,W,$),this}let O=Math.sqrt((E-F)*(E-F)+(G-M)*(G-M)+(X-Y)*(X-Y));if(Math.abs(O)<0.001)O=1;return this.x=(E-F)/O,this.y=(G-M)/O,this.z=(X-Y)/O,this.w=Math.acos((q+N+L-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=V8(this.x,J.x,$.x),this.y=V8(this.y,J.y,$.y),this.z=V8(this.z,J.z,$.z),this.w=V8(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=V8(this.x,J,$),this.y=V8(this.y,J,$),this.z=V8(this.z,J,$),this.w=V8(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(V8(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vq extends nQ{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new v8(0,0,J,$),this.scissorTest=!1,this.viewport=new v8(0,0,J,$);let Z={width:J,height:$,depth:Q.depth},W=new RJ(Z);this.textures=[];let K=Q.count;for(let U=0;U<K;U++)this.textures[U]=W.clone(),this.textures[U].isRenderTargetTexture=!0,this.textures[U].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new h7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class w$ extends vq{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class $K extends RJ{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class hq extends RJ{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l${constructor(J=new i(1/0,1/0,1/0),$=new i(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(r$.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(r$.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=r$.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if($===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,U=W.count;K<U;K++){if(J.isMesh===!0)J.getVertexPosition(K,r$);else r$.fromBufferAttribute(W,K);r$.applyMatrix4(J.matrixWorld),this.expandByPoint(r$)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();Y1.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();Y1.copy(Q.boundingBox)}Y1.applyMatrix4(J.matrixWorld),this.union(Y1)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,r$),r$.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(V7),G1.subVectors(this.max,V7),i9.subVectors(J.a,V7),a9.subVectors(J.b,V7),r9.subVectors(J.c,V7),L6.subVectors(a9,i9),E6.subVectors(r9,a9),Z9.subVectors(i9,r9);let $=[0,-L6.z,L6.y,0,-E6.z,E6.y,0,-Z9.z,Z9.y,L6.z,0,-L6.x,E6.z,0,-E6.x,Z9.z,0,-Z9.x,-L6.y,L6.x,0,-E6.y,E6.x,0,-Z9.y,Z9.x,0];if(!VH($,i9,a9,r9,G1))return!1;if($=[1,0,0,0,1,0,0,0,1],!VH($,i9,a9,r9,G1))return!1;return X1.crossVectors(L6,E6),$=[X1.x,X1.y,X1.z],VH($,i9,a9,r9,G1)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,r$).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(r$).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return bQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),bQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),bQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),bQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),bQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),bQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),bQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),bQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(bQ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var bQ=[new i,new i,new i,new i,new i,new i,new i,new i],r$=new i,Y1=new l$,i9=new i,a9=new i,r9=new i,L6=new i,E6=new i,Z9=new i,V7=new i,G1=new i,X1=new i,W9=new i;function VH(J,$,Q,Z,W){for(let K=0,U=J.length-3;K<=U;K+=3){W9.fromArray(J,K);let H=W.x*Math.abs(W9.x)+W.y*Math.abs(W9.y)+W.z*Math.abs(W9.z),q=$.dot(W9),Y=Q.dot(W9),G=Z.dot(W9);if(Math.max(-Math.max(q,Y,G),Math.min(q,Y,G))>H)return!1}return!0}var WV=new l$,z7=new i,zH=new i;class _${constructor(J=new i,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else WV.setFromPoints(J).getCenter(Q);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,Q.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;z7.subVectors(J,this.center);let $=z7.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(z7,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else zH.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(z7.copy(J.center).add(zH)),this.expandByPoint(z7.copy(J.center).sub(zH));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var vQ=new i,DH=new i,N1=new i,M6=new i,kH=new i,F1=new i,CH=new i;class iQ{constructor(J=new i,$=new i(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,vQ)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=vQ.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return vQ.copy(this.origin).addScaledVector(this.direction,$),vQ.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){DH.copy(J).add($).multiplyScalar(0.5),N1.copy($).sub(J).normalize(),M6.copy(this.origin).sub(DH);let W=J.distanceTo($)*0.5,K=-this.direction.dot(N1),U=M6.dot(this.direction),H=-M6.dot(N1),q=M6.lengthSq(),Y=Math.abs(1-K*K),G,X,N,F;if(Y>0)if(G=K*H-U,X=K*U-H,F=W*Y,G>=0)if(X>=-F)if(X<=F){let M=1/Y;G*=M,X*=M,N=G*(G+K*X+2*U)+X*(K*G+X+2*H)+q}else X=W,G=Math.max(0,-(K*X+U)),N=-G*G+X*(X+2*H)+q;else X=-W,G=Math.max(0,-(K*X+U)),N=-G*G+X*(X+2*H)+q;else if(X<=-F)G=Math.max(0,-(-K*W+U)),X=G>0?-W:Math.min(Math.max(-W,-H),W),N=-G*G+X*(X+2*H)+q;else if(X<=F)G=0,X=Math.min(Math.max(-W,-H),W),N=X*(X+2*H)+q;else G=Math.max(0,-(K*W+U)),X=G>0?W:Math.min(Math.max(-W,-H),W),N=-G*G+X*(X+2*H)+q;else X=K>0?-W:W,G=Math.max(0,-(K*X+U)),N=-G*G+X*(X+2*H)+q;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(DH).addScaledVector(N1,X);return N}intersectSphere(J,$){vQ.subVectors(J.center,this.origin);let Q=vQ.dot(this.direction),Z=vQ.dot(vQ)-Q*Q,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),U=Q-K,H=Q+K;if(H<0)return null;if(U<0)return this.at(H,$);return this.at(U,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,W,K,U,H,q=1/this.direction.x,Y=1/this.direction.y,G=1/this.direction.z,X=this.origin;if(q>=0)Q=(J.min.x-X.x)*q,Z=(J.max.x-X.x)*q;else Q=(J.max.x-X.x)*q,Z=(J.min.x-X.x)*q;if(Y>=0)W=(J.min.y-X.y)*Y,K=(J.max.y-X.y)*Y;else W=(J.max.y-X.y)*Y,K=(J.min.y-X.y)*Y;if(Q>K||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)U=(J.min.z-X.z)*G,H=(J.max.z-X.z)*G;else U=(J.max.z-X.z)*G,H=(J.min.z-X.z)*G;if(Q>H||U>Z)return null;if(U>Q||Q!==Q)Q=U;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,vQ)!==null}intersectTriangle(J,$,Q,Z,W){kH.subVectors($,J),F1.subVectors(Q,J),CH.crossVectors(kH,F1);let K=this.direction.dot(CH),U;if(K>0){if(Z)return null;U=1}else if(K<0)U=-1,K=-K;else return null;M6.subVectors(this.origin,J);let H=U*this.direction.dot(F1.crossVectors(M6,F1));if(H<0)return null;let q=U*this.direction.dot(kH.cross(M6));if(q<0)return null;if(H+q>K)return null;let Y=-U*M6.dot(CH);if(Y<0)return null;return this.at(Y/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class M8{constructor(J,$,Q,Z,W,K,U,H,q,Y,G,X,N,F,M,E){if(M8.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,K,U,H,q,Y,G,X,N,F,M,E)}set(J,$,Q,Z,W,K,U,H,q,Y,G,X,N,F,M,E){let L=this.elements;return L[0]=J,L[4]=$,L[8]=Q,L[12]=Z,L[1]=W,L[5]=K,L[9]=U,L[13]=H,L[2]=q,L[6]=Y,L[10]=G,L[14]=X,L[3]=N,L[7]=F,L[11]=M,L[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M8().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){let $=this.elements,Q=J.elements,Z=1/t9.setFromMatrixColumn(J,0).length(),W=1/t9.setFromMatrixColumn(J,1).length(),K=1/t9.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*W,$[5]=Q[5]*W,$[6]=Q[6]*W,$[7]=0,$[8]=Q[8]*K,$[9]=Q[9]*K,$[10]=Q[10]*K,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z,K=Math.cos(Q),U=Math.sin(Q),H=Math.cos(Z),q=Math.sin(Z),Y=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let X=K*Y,N=K*G,F=U*Y,M=U*G;$[0]=H*Y,$[4]=-H*G,$[8]=q,$[1]=N+F*q,$[5]=X-M*q,$[9]=-U*H,$[2]=M-X*q,$[6]=F+N*q,$[10]=K*H}else if(J.order==="YXZ"){let X=H*Y,N=H*G,F=q*Y,M=q*G;$[0]=X+M*U,$[4]=F*U-N,$[8]=K*q,$[1]=K*G,$[5]=K*Y,$[9]=-U,$[2]=N*U-F,$[6]=M+X*U,$[10]=K*H}else if(J.order==="ZXY"){let X=H*Y,N=H*G,F=q*Y,M=q*G;$[0]=X-M*U,$[4]=-K*G,$[8]=F+N*U,$[1]=N+F*U,$[5]=K*Y,$[9]=M-X*U,$[2]=-K*q,$[6]=U,$[10]=K*H}else if(J.order==="ZYX"){let X=K*Y,N=K*G,F=U*Y,M=U*G;$[0]=H*Y,$[4]=F*q-N,$[8]=X*q+M,$[1]=H*G,$[5]=M*q+X,$[9]=N*q-F,$[2]=-q,$[6]=U*H,$[10]=K*H}else if(J.order==="YZX"){let X=K*H,N=K*q,F=U*H,M=U*q;$[0]=H*Y,$[4]=M-X*G,$[8]=F*G+N,$[1]=G,$[5]=K*Y,$[9]=-U*Y,$[2]=-q*Y,$[6]=N*G+F,$[10]=X-M*G}else if(J.order==="XZY"){let X=K*H,N=K*q,F=U*H,M=U*q;$[0]=H*Y,$[4]=-G,$[8]=q*Y,$[1]=X*G+M,$[5]=K*Y,$[9]=N*G-F,$[2]=F*G-N,$[6]=U*Y,$[10]=M*G+X}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(KV,J,UV)}lookAt(J,$,Q){let Z=this.elements;if(T$.subVectors(J,$),T$.lengthSq()===0)T$.z=1;if(T$.normalize(),O6.crossVectors(Q,T$),O6.lengthSq()===0){if(Math.abs(Q.z)===1)T$.x+=0.0001;else T$.z+=0.0001;T$.normalize(),O6.crossVectors(Q,T$)}return O6.normalize(),L1.crossVectors(T$,O6),Z[0]=O6.x,Z[4]=L1.x,Z[8]=T$.x,Z[1]=O6.y,Z[5]=L1.y,Z[9]=T$.y,Z[2]=O6.z,Z[6]=L1.z,Z[10]=T$.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,K=Q[0],U=Q[4],H=Q[8],q=Q[12],Y=Q[1],G=Q[5],X=Q[9],N=Q[13],F=Q[2],M=Q[6],E=Q[10],L=Q[14],O=Q[3],z=Q[7],B=Q[11],I=Q[15],A=Z[0],C=Z[4],P=Z[8],x=Z[12],D=Z[1],k=Z[5],b=Z[9],v=Z[13],m=Z[2],n=Z[6],r=Z[10],s=Z[14],J0=Z[3],a=Z[7],c=Z[11],w=Z[15];return W[0]=K*A+U*D+H*m+q*J0,W[4]=K*C+U*k+H*n+q*a,W[8]=K*P+U*b+H*r+q*c,W[12]=K*x+U*v+H*s+q*w,W[1]=Y*A+G*D+X*m+N*J0,W[5]=Y*C+G*k+X*n+N*a,W[9]=Y*P+G*b+X*r+N*c,W[13]=Y*x+G*v+X*s+N*w,W[2]=F*A+M*D+E*m+L*J0,W[6]=F*C+M*k+E*n+L*a,W[10]=F*P+M*b+E*r+L*c,W[14]=F*x+M*v+E*s+L*w,W[3]=O*A+z*D+B*m+I*J0,W[7]=O*C+z*k+B*n+I*a,W[11]=O*P+z*b+B*r+I*c,W[15]=O*x+z*v+B*s+I*w,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],W=J[12],K=J[1],U=J[5],H=J[9],q=J[13],Y=J[2],G=J[6],X=J[10],N=J[14],F=J[3],M=J[7],E=J[11],L=J[15];return F*(+W*H*G-Z*q*G-W*U*X+Q*q*X+Z*U*N-Q*H*N)+M*(+$*H*N-$*q*X+W*K*X-Z*K*N+Z*q*Y-W*H*Y)+E*(+$*q*G-$*U*N-W*K*G+Q*K*N+W*U*Y-Q*q*Y)+L*(-Z*U*Y-$*H*G+$*U*X+Z*K*G-Q*K*X+Q*H*Y)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],U=J[5],H=J[6],q=J[7],Y=J[8],G=J[9],X=J[10],N=J[11],F=J[12],M=J[13],E=J[14],L=J[15],O=G*E*q-M*X*q+M*H*N-U*E*N-G*H*L+U*X*L,z=F*X*q-Y*E*q-F*H*N+K*E*N+Y*H*L-K*X*L,B=Y*M*q-F*G*q+F*U*N-K*M*N-Y*U*L+K*G*L,I=F*G*H-Y*M*H-F*U*X+K*M*X+Y*U*E-K*G*E,A=$*O+Q*z+Z*B+W*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return J[0]=O*C,J[1]=(M*X*W-G*E*W-M*Z*N+Q*E*N+G*Z*L-Q*X*L)*C,J[2]=(U*E*W-M*H*W+M*Z*q-Q*E*q-U*Z*L+Q*H*L)*C,J[3]=(G*H*W-U*X*W-G*Z*q+Q*X*q+U*Z*N-Q*H*N)*C,J[4]=z*C,J[5]=(Y*E*W-F*X*W+F*Z*N-$*E*N-Y*Z*L+$*X*L)*C,J[6]=(F*H*W-K*E*W-F*Z*q+$*E*q+K*Z*L-$*H*L)*C,J[7]=(K*X*W-Y*H*W+Y*Z*q-$*X*q-K*Z*N+$*H*N)*C,J[8]=B*C,J[9]=(F*G*W-Y*M*W-F*Q*N+$*M*N+Y*Q*L-$*G*L)*C,J[10]=(K*M*W-F*U*W+F*Q*q-$*M*q-K*Q*L+$*U*L)*C,J[11]=(Y*U*W-K*G*W-Y*Q*q+$*G*q+K*Q*N-$*U*N)*C,J[12]=I*C,J[13]=(Y*M*Z-F*G*Z+F*Q*X-$*M*X-Y*Q*E+$*G*E)*C,J[14]=(F*U*Z-K*M*Z-F*Q*H+$*M*H+K*Q*E-$*U*E)*C,J[15]=(K*G*Z-Y*U*Z+Y*Q*H-$*G*H-K*Q*X+$*U*X)*C,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=W,$[1]*=Q,$[5]*=Z,$[9]*=W,$[2]*=Q,$[6]*=Z,$[10]*=W,$[3]*=Q,$[7]*=Z,$[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),W=1-Q,K=J.x,U=J.y,H=J.z,q=W*K,Y=W*U;return this.set(q*K+Q,q*U-Z*H,q*H+Z*U,0,q*U+Z*H,Y*U+Q,Y*H-Z*K,0,q*H-Z*U,Y*H+Z*K,W*H*H+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,W,K){return this.set(1,Q,W,0,J,1,K,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,W=$._x,K=$._y,U=$._z,H=$._w,q=W+W,Y=K+K,G=U+U,X=W*q,N=W*Y,F=W*G,M=K*Y,E=K*G,L=U*G,O=H*q,z=H*Y,B=H*G,I=Q.x,A=Q.y,C=Q.z;return Z[0]=(1-(M+L))*I,Z[1]=(N+B)*I,Z[2]=(F-z)*I,Z[3]=0,Z[4]=(N-B)*A,Z[5]=(1-(X+L))*A,Z[6]=(E+O)*A,Z[7]=0,Z[8]=(F+z)*C,Z[9]=(E-O)*C,Z[10]=(1-(X+M))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements,W=t9.set(Z[0],Z[1],Z[2]).length(),K=t9.set(Z[4],Z[5],Z[6]).length(),U=t9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],t$.copy(this);let q=1/W,Y=1/K,G=1/U;return t$.elements[0]*=q,t$.elements[1]*=q,t$.elements[2]*=q,t$.elements[4]*=Y,t$.elements[5]*=Y,t$.elements[6]*=Y,t$.elements[8]*=G,t$.elements[9]*=G,t$.elements[10]*=G,$.setFromRotationMatrix(t$),Q.x=W,Q.y=K,Q.z=U,this}makePerspective(J,$,Q,Z,W,K,U=2000){let H=this.elements,q=2*W/($-J),Y=2*W/(Q-Z),G=($+J)/($-J),X=(Q+Z)/(Q-Z),N,F;if(U===2000)N=-(K+W)/(K-W),F=-2*K*W/(K-W);else if(U===2001)N=-K/(K-W),F=-K*W/(K-W);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+U);return H[0]=q,H[4]=0,H[8]=G,H[12]=0,H[1]=0,H[5]=Y,H[9]=X,H[13]=0,H[2]=0,H[6]=0,H[10]=N,H[14]=F,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,W,K,U=2000){let H=this.elements,q=1/($-J),Y=1/(Q-Z),G=1/(K-W),X=($+J)*q,N=(Q+Z)*Y,F,M;if(U===2000)F=(K+W)*G,M=-2*G;else if(U===2001)F=W*G,M=-1*G;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+U);return H[0]=2*q,H[4]=0,H[8]=0,H[12]=-X,H[1]=0,H[5]=2*Y,H[9]=0,H[13]=-N,H[2]=0,H[6]=0,H[10]=M,H[14]=-F,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var t9=new i,t$=new M8,KV=new i(0,0,0),UV=new i(1,1,1),O6=new i,L1=new i,T$=new i,VN=new M8,zN=new B$;class ZQ{constructor(J=0,$=0,Q=0,Z=ZQ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,W=Z[0],K=Z[4],U=Z[8],H=Z[1],q=Z[5],Y=Z[9],G=Z[2],X=Z[6],N=Z[10];switch($){case"XYZ":if(this._y=Math.asin(V8(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(-Y,N),this._z=Math.atan2(-K,W);else this._x=Math.atan2(X,q),this._z=0;break;case"YXZ":if(this._x=Math.asin(-V8(Y,-1,1)),Math.abs(Y)<0.9999999)this._y=Math.atan2(U,N),this._z=Math.atan2(H,q);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(V8(X,-1,1)),Math.abs(X)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-K,q);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-V8(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(X,N),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-K,q);break;case"YZX":if(this._z=Math.asin(V8(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-Y,q),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(U,N);break;case"XZY":if(this._z=Math.asin(-V8(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(X,q),this._y=Math.atan2(U,W);else this._x=Math.atan2(-Y,N),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return VN.makeRotationFromQuaternion(J),this.setFromRotationMatrix(VN,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return zN.setFromEuler(this),this.setFromQuaternion(zN,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ZQ.DEFAULT_ORDER="XYZ";class f7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var HV=0,DN=new i,e9=new B$,hQ=new M8,E1=new i,D7=new i,qV=new i,YV=new B$,kN=new i(1,0,0),CN=new i(0,1,0),PN=new i(0,0,1),IN={type:"added"},GV={type:"removed"},JZ={type:"childadded",child:null},PH={type:"childremoved",child:null};class l8 extends nQ{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:HV++}),this.uuid=QQ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=l8.DEFAULT_UP.clone();let J=new i,$=new ZQ,Q=new B$,Z=new i(1,1,1);function W(){Q.setFromEuler($,!1)}function K(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(W),Q._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new M8},normalMatrix:{value:new R8}}),this.matrix=new M8,this.matrixWorld=new M8,this.matrixAutoUpdate=l8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=l8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return e9.setFromAxisAngle(J,$),this.quaternion.multiply(e9),this}rotateOnWorldAxis(J,$){return e9.setFromAxisAngle(J,$),this.quaternion.premultiply(e9),this}rotateX(J){return this.rotateOnAxis(kN,J)}rotateY(J){return this.rotateOnAxis(CN,J)}rotateZ(J){return this.rotateOnAxis(PN,J)}translateOnAxis(J,$){return DN.copy(J).applyQuaternion(this.quaternion),this.position.add(DN.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(kN,J)}translateY(J){return this.translateOnAxis(CN,J)}translateZ(J){return this.translateOnAxis(PN,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(hQ.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)E1.copy(J);else E1.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),D7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)hQ.lookAt(D7,E1,this.up);else hQ.lookAt(E1,D7,this.up);if(this.quaternion.setFromRotationMatrix(hQ),Z)hQ.extractRotation(Z.matrixWorld),e9.setFromRotationMatrix(hQ),this.quaternion.premultiply(e9.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(IN),JZ.child=J,this.dispatchEvent(JZ),JZ.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(GV),PH.child=J,this.dispatchEvent(PH),PH.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),hQ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),hQ.multiply(J.parent.matrixWorld);return J.applyMatrix4(hQ),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(IN),JZ.child=J,this.dispatchEvent(JZ),JZ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let K=this.children[Q].getObjectByProperty(J,$);if(K!==void 0)return K}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D7,J,qV),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D7,YV,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$){let Q=this.parent;if(J===!0&&Q!==null)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((U)=>({...U,boundingBox:U.boundingBox?U.boundingBox.toJSON():void 0,boundingSphere:U.boundingSphere?U.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((U)=>({...U})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(U,H){if(U[H.uuid]===void 0)U[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let U=this.geometry.parameters;if(U!==void 0&&U.shapes!==void 0){let H=U.shapes;if(Array.isArray(H))for(let q=0,Y=H.length;q<Y;q++){let G=H[q];W(J.shapes,G)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let U=[];for(let H=0,q=this.material.length;H<q;H++)U.push(W(J.materials,this.material[H]));Z.material=U}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let U=0;U<this.children.length;U++)Z.children.push(this.children[U].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let U=0;U<this.animations.length;U++){let H=this.animations[U];Z.animations.push(W(J.animations,H))}}if($){let U=K(J.geometries),H=K(J.materials),q=K(J.textures),Y=K(J.images),G=K(J.shapes),X=K(J.skeletons),N=K(J.animations),F=K(J.nodes);if(U.length>0)Q.geometries=U;if(H.length>0)Q.materials=H;if(q.length>0)Q.textures=q;if(Y.length>0)Q.images=Y;if(G.length>0)Q.shapes=G;if(X.length>0)Q.skeletons=X;if(N.length>0)Q.animations=N;if(F.length>0)Q.nodes=F}return Q.object=Z,Q;function K(U){let H=[];for(let q in U){let Y=U[q];delete Y.metadata,H.push(Y)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}}l8.DEFAULT_UP=new i(0,1,0);l8.DEFAULT_MATRIX_AUTO_UPDATE=!0;l8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var e$=new i,fQ=new i,IH=new i,gQ=new i,$Z=new i,QZ=new i,AN=new i,AH=new i,TH=new i,SH=new i,jH=new v8,wH=new v8,_H=new v8;class m${constructor(J=new i,$=new i,Q=new i){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),e$.subVectors(J,$),Z.cross(e$);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,W){e$.subVectors(Z,$),fQ.subVectors(Q,$),IH.subVectors(J,$);let K=e$.dot(e$),U=e$.dot(fQ),H=e$.dot(IH),q=fQ.dot(fQ),Y=fQ.dot(IH),G=K*q-U*U;if(G===0)return W.set(0,0,0),null;let X=1/G,N=(q*H-U*Y)*X,F=(K*Y-U*H)*X;return W.set(1-N-F,F,N)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,gQ)===null)return!1;return gQ.x>=0&&gQ.y>=0&&gQ.x+gQ.y<=1}static getInterpolation(J,$,Q,Z,W,K,U,H){if(this.getBarycoord(J,$,Q,Z,gQ)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,gQ.x),H.addScaledVector(K,gQ.y),H.addScaledVector(U,gQ.z),H}static getInterpolatedAttribute(J,$,Q,Z,W,K){return jH.setScalar(0),wH.setScalar(0),_H.setScalar(0),jH.fromBufferAttribute(J,$),wH.fromBufferAttribute(J,Q),_H.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(jH,W.x),K.addScaledVector(wH,W.y),K.addScaledVector(_H,W.z),K}static isFrontFacing(J,$,Q,Z){return e$.subVectors(Q,$),fQ.subVectors(J,$),e$.cross(fQ).dot(Z)<0?!0:!1}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return e$.subVectors(this.c,this.b),fQ.subVectors(this.a,this.b),e$.cross(fQ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return m$.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return m$.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,W){return m$.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,W)}containsPoint(J){return m$.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return m$.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,W=this.c,K,U;$Z.subVectors(Z,Q),QZ.subVectors(W,Q),AH.subVectors(J,Q);let H=$Z.dot(AH),q=QZ.dot(AH);if(H<=0&&q<=0)return $.copy(Q);TH.subVectors(J,Z);let Y=$Z.dot(TH),G=QZ.dot(TH);if(Y>=0&&G<=Y)return $.copy(Z);let X=H*G-Y*q;if(X<=0&&H>=0&&Y<=0)return K=H/(H-Y),$.copy(Q).addScaledVector($Z,K);SH.subVectors(J,W);let N=$Z.dot(SH),F=QZ.dot(SH);if(F>=0&&N<=F)return $.copy(W);let M=N*q-H*F;if(M<=0&&q>=0&&F<=0)return U=q/(q-F),$.copy(Q).addScaledVector(QZ,U);let E=Y*F-N*G;if(E<=0&&G-Y>=0&&N-F>=0)return AN.subVectors(W,Z),U=(G-Y)/(G-Y+(N-F)),$.copy(Z).addScaledVector(AN,U);let L=1/(E+M+X);return K=M*L,U=X*L,$.copy(Q).addScaledVector($Z,K).addScaledVector(QZ,U)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var JL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},B6={h:0,s:0,l:0},M1={h:0,s:0,l:0};function xH(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class K8{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,T8.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=T8.workingColorSpace){return this.r=J,this.g=$,this.b=Q,T8.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=T8.workingColorSpace){if(J=xq(J,1),$=V8($,0,1),Q=V8(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+$):Q+$-Q*$,K=2*Q-W;this.r=xH(K,W,J+0.3333333333333333),this.g=xH(K,W,J),this.b=xH(K,W,J-0.3333333333333333)}return T8.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],U=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,$);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Q(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,$);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,$);else if(K===6)return this.setHex(parseInt(W,16),$);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=JL[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=mQ(J.r),this.g=mQ(J.g),this.b=mQ(J.b),this}copyLinearToSRGB(J){return this.r=qZ(J.r),this.g=qZ(J.g),this.b=qZ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return T8.workingToColorSpace(iJ.copy(this),J),Math.round(V8(iJ.r*255,0,255))*65536+Math.round(V8(iJ.g*255,0,255))*256+Math.round(V8(iJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=T8.workingColorSpace){T8.workingToColorSpace(iJ.copy(this),$);let{r:Q,g:Z,b:W}=iJ,K=Math.max(Q,Z,W),U=Math.min(Q,Z,W),H,q,Y=(U+K)/2;if(U===K)H=0,q=0;else{let G=K-U;switch(q=Y<=0.5?G/(K+U):G/(2-K-U),K){case Q:H=(Z-W)/G+(Z<W?6:0);break;case Z:H=(W-Q)/G+2;break;case W:H=(Q-Z)/G+4;break}H/=6}return J.h=H,J.s=q,J.l=Y,J}getRGB(J,$=T8.workingColorSpace){return T8.workingToColorSpace(iJ.copy(this),$),J.r=iJ.r,J.g=iJ.g,J.b=iJ.b,J}getStyle(J="srgb"){T8.workingToColorSpace(iJ.copy(this),J);let{r:$,g:Q,b:Z}=iJ;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(B6),this.setHSL(B6.h+J,B6.s+$,B6.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(B6),J.getHSL(M1);let Q=S7(B6.h,M1.h,$),Z=S7(B6.s,M1.s,$),W=S7(B6.l,M1.l,$);return this.setHSL(Q,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,W=J.elements;return this.r=W[0]*$+W[3]*Q+W[6]*Z,this.g=W[1]*$+W[4]*Q+W[7]*Z,this.b=W[2]*$+W[5]*Q+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var iJ=new K8;K8.NAMES=JL;var XV=0;class R$ extends nQ{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:XV++}),this.uuid=QQ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K8(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let K=[];for(let U in W){let H=W[U];delete H.metadata,K.push(H)}return K}if($){let W=Z(J.textures),K=Z(J.images);if(W.length>0)Q.textures=W;if(K.length>0)Q.images=K}return Q}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=new Array(Z);for(let W=0;W!==Z;++W)Q[W]=$[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class OQ extends R${constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K8(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ZQ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var pQ=NV();function NV(){let J=new ArrayBuffer(4),$=new Float32Array(J),Q=new Uint32Array(J),Z=new Uint32Array(512),W=new Uint32Array(512);for(let q=0;q<256;++q){let Y=q-127;if(Y<-27)Z[q]=0,Z[q|256]=32768,W[q]=24,W[q|256]=24;else if(Y<-14)Z[q]=1024>>-Y-14,Z[q|256]=1024>>-Y-14|32768,W[q]=-Y-1,W[q|256]=-Y-1;else if(Y<=15)Z[q]=Y+15<<10,Z[q|256]=Y+15<<10|32768,W[q]=13,W[q|256]=13;else if(Y<128)Z[q]=31744,Z[q|256]=64512,W[q]=24,W[q|256]=24;else Z[q]=31744,Z[q|256]=64512,W[q]=13,W[q|256]=13}let K=new Uint32Array(2048),U=new Uint32Array(64),H=new Uint32Array(64);for(let q=1;q<1024;++q){let Y=q<<13,G=0;while((Y&8388608)===0)Y<<=1,G-=8388608;Y&=-8388609,G+=947912704,K[q]=Y|G}for(let q=1024;q<2048;++q)K[q]=939524096+(q-1024<<13);for(let q=1;q<31;++q)U[q]=q<<23;U[31]=1199570944,U[32]=2147483648;for(let q=33;q<63;++q)U[q]=2147483648+(q-32<<23);U[63]=3347054592;for(let q=1;q<64;++q)if(q!==32)H[q]=1024;return{floatView:$,uint32View:Q,baseTable:Z,shiftTable:W,mantissaTable:K,exponentTable:U,offsetTable:H}}function FV(J){if(Math.abs(J)>65504)console.warn("THREE.DataUtils.toHalfFloat(): Value out of range.");J=V8(J,-65504,65504),pQ.floatView[0]=J;let $=pQ.uint32View[0],Q=$>>23&511;return pQ.baseTable[Q]+(($&8388607)>>pQ.shiftTable[Q])}function LV(J){let $=J>>10;return pQ.uint32View[0]=pQ.mantissaTable[pQ.offsetTable[$]+(J&1023)]+pQ.exponentTable[$],pQ.floatView[0]}class BQ{static toHalfFloat(J){return FV(J)}static fromHalfFloat(J){return LV(J)}}var BJ=new i,O1=new e0,EV=0;class GJ{constructor(J,$,Q=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EV++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)O1.fromBufferAttribute(this,$),O1.applyMatrix3(J),this.setXY($,O1.x,O1.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)BJ.fromBufferAttribute(this,$),BJ.applyMatrix3(J),this.setXYZ($,BJ.x,BJ.y,BJ.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)BJ.fromBufferAttribute(this,$),BJ.applyMatrix4(J),this.setXYZ($,BJ.x,BJ.y,BJ.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)BJ.fromBufferAttribute(this,$),BJ.applyNormalMatrix(J),this.setXYZ($,BJ.x,BJ.y,BJ.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)BJ.fromBufferAttribute(this,$),BJ.transformDirection(J),this.setXYZ($,BJ.x,BJ.y,BJ.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=$Q(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=d8(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=$Q($,this.array);return $}setX(J,$){if(this.normalized)$=d8($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=$Q($,this.array);return $}setY(J,$){if(this.normalized)$=d8($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=$Q($,this.array);return $}setZ(J,$){if(this.normalized)$=d8($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=$Q($,this.array);return $}setW(J,$){if(this.normalized)$=d8($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=d8($,this.array),Q=d8(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=d8($,this.array),Q=d8(Q,this.array),Z=d8(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,W){if(J*=this.itemSize,this.normalized)$=d8($,this.array),Q=d8(Q,this.array),Z=d8(Z,this.array),W=d8(W,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class QK extends GJ{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class ZK extends GJ{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class Y$ extends GJ{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var MV=0,p$=new M8,yH=new l8,ZZ=new i,S$=new l$,k7=new l$,yJ=new i;class uJ extends nQ{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MV++}),this.uuid=QQ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((yq(J))?ZK:QK)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new R8().getNormalMatrix(J);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return p$.makeRotationFromQuaternion(J),this.applyMatrix4(p$),this}rotateX(J){return p$.makeRotationX(J),this.applyMatrix4(p$),this}rotateY(J){return p$.makeRotationY(J),this.applyMatrix4(p$),this}rotateZ(J){return p$.makeRotationZ(J),this.applyMatrix4(p$),this}translate(J,$,Q){return p$.makeTranslation(J,$,Q),this.applyMatrix4(p$),this}scale(J,$,Q){return p$.makeScale(J,$,Q),this.applyMatrix4(p$),this}lookAt(J){return yH.lookAt(J),yH.updateMatrix(),this.applyMatrix4(yH.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ZZ).negate(),this.translate(ZZ.x,ZZ.y,ZZ.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];Q.push(K.x,K.y,K.z||0)}this.setAttribute("position",new Y$(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let W=J[Z];$.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>$.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new l$;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new i(-1/0,-1/0,-1/0),new i(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let W=$[Q];if(S$.setFromBufferAttribute(W),this.morphTargetsRelative)yJ.addVectors(this.boundingBox.min,S$.min),this.boundingBox.expandByPoint(yJ),yJ.addVectors(this.boundingBox.max,S$.max),this.boundingBox.expandByPoint(yJ);else this.boundingBox.expandByPoint(S$.min),this.boundingBox.expandByPoint(S$.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _$;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new i,1/0);return}if(J){let Q=this.boundingSphere.center;if(S$.setFromBufferAttribute(J),$)for(let W=0,K=$.length;W<K;W++){let U=$[W];if(k7.setFromBufferAttribute(U),this.morphTargetsRelative)yJ.addVectors(S$.min,k7.min),S$.expandByPoint(yJ),yJ.addVectors(S$.max,k7.max),S$.expandByPoint(yJ);else S$.expandByPoint(k7.min),S$.expandByPoint(k7.max)}S$.getCenter(Q);let Z=0;for(let W=0,K=J.count;W<K;W++)yJ.fromBufferAttribute(J,W),Z=Math.max(Z,Q.distanceToSquared(yJ));if($)for(let W=0,K=$.length;W<K;W++){let U=$[W],H=this.morphTargetsRelative;for(let q=0,Y=U.count;q<Y;q++){if(yJ.fromBufferAttribute(U,q),H)ZZ.fromBufferAttribute(J,q),yJ.add(ZZ);Z=Math.max(Z,Q.distanceToSquared(yJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new GJ(new Float32Array(4*Q.count),4));let K=this.getAttribute("tangent"),U=[],H=[];for(let P=0;P<Q.count;P++)U[P]=new i,H[P]=new i;let q=new i,Y=new i,G=new i,X=new e0,N=new e0,F=new e0,M=new i,E=new i;function L(P,x,D){q.fromBufferAttribute(Q,P),Y.fromBufferAttribute(Q,x),G.fromBufferAttribute(Q,D),X.fromBufferAttribute(W,P),N.fromBufferAttribute(W,x),F.fromBufferAttribute(W,D),Y.sub(q),G.sub(q),N.sub(X),F.sub(X);let k=1/(N.x*F.y-F.x*N.y);if(!isFinite(k))return;M.copy(Y).multiplyScalar(F.y).addScaledVector(G,-N.y).multiplyScalar(k),E.copy(G).multiplyScalar(N.x).addScaledVector(Y,-F.x).multiplyScalar(k),U[P].add(M),U[x].add(M),U[D].add(M),H[P].add(E),H[x].add(E),H[D].add(E)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let P=0,x=O.length;P<x;++P){let D=O[P],k=D.start,b=D.count;for(let v=k,m=k+b;v<m;v+=3)L(J.getX(v+0),J.getX(v+1),J.getX(v+2))}let z=new i,B=new i,I=new i,A=new i;function C(P){I.fromBufferAttribute(Z,P),A.copy(I);let x=U[P];z.copy(x),z.sub(I.multiplyScalar(I.dot(x))).normalize(),B.crossVectors(A,x);let k=B.dot(H[P])<0?-1:1;K.setXYZW(P,z.x,z.y,z.z,k)}for(let P=0,x=O.length;P<x;++P){let D=O[P],k=D.start,b=D.count;for(let v=k,m=k+b;v<m;v+=3)C(J.getX(v+0)),C(J.getX(v+1)),C(J.getX(v+2))}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new GJ(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let X=0,N=Q.count;X<N;X++)Q.setXYZ(X,0,0,0);let Z=new i,W=new i,K=new i,U=new i,H=new i,q=new i,Y=new i,G=new i;if(J)for(let X=0,N=J.count;X<N;X+=3){let F=J.getX(X+0),M=J.getX(X+1),E=J.getX(X+2);Z.fromBufferAttribute($,F),W.fromBufferAttribute($,M),K.fromBufferAttribute($,E),Y.subVectors(K,W),G.subVectors(Z,W),Y.cross(G),U.fromBufferAttribute(Q,F),H.fromBufferAttribute(Q,M),q.fromBufferAttribute(Q,E),U.add(Y),H.add(Y),q.add(Y),Q.setXYZ(F,U.x,U.y,U.z),Q.setXYZ(M,H.x,H.y,H.z),Q.setXYZ(E,q.x,q.y,q.z)}else for(let X=0,N=$.count;X<N;X+=3)Z.fromBufferAttribute($,X+0),W.fromBufferAttribute($,X+1),K.fromBufferAttribute($,X+2),Y.subVectors(K,W),G.subVectors(Z,W),Y.cross(G),Q.setXYZ(X+0,Y.x,Y.y,Y.z),Q.setXYZ(X+1,Y.x,Y.y,Y.z),Q.setXYZ(X+2,Y.x,Y.y,Y.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)yJ.fromBufferAttribute(J,$),yJ.normalize(),J.setXYZ($,yJ.x,yJ.y,yJ.z)}toNonIndexed(){function J(U,H){let{array:q,itemSize:Y,normalized:G}=U,X=new q.constructor(H.length*Y),N=0,F=0;for(let M=0,E=H.length;M<E;M++){if(U.isInterleavedBufferAttribute)N=H[M]*U.data.stride+U.offset;else N=H[M]*Y;for(let L=0;L<Y;L++)X[F++]=q[N++]}return new GJ(X,Y,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new uJ,Q=this.index.array,Z=this.attributes;for(let U in Z){let H=Z[U],q=J(H,Q);$.setAttribute(U,q)}let W=this.morphAttributes;for(let U in W){let H=[],q=W[U];for(let Y=0,G=q.length;Y<G;Y++){let X=q[Y],N=J(X,Q);H.push(N)}$.morphAttributes[U]=H}$.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let U=0,H=K.length;U<H;U++){let q=K[U];$.addGroup(q.start,q.count,q.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let q in H)if(H[q]!==void 0)J[q]=H[q];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let H in Q){let q=Q[H];J.data.attributes[H]=q.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let q=this.morphAttributes[H],Y=[];for(let G=0,X=q.length;G<X;G++){let N=q[G];Y.push(N.toJSON(J.data))}if(Y.length>0)Z[H]=Y,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let U=this.boundingSphere;if(U!==null)J.data.boundingSphere=U.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let q in Z){let Y=Z[q];this.setAttribute(q,Y.clone($))}let W=J.morphAttributes;for(let q in W){let Y=[],G=W[q];for(let X=0,N=G.length;X<N;X++)Y.push(G[X].clone($));this.morphAttributes[q]=Y}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let q=0,Y=K.length;q<Y;q++){let G=K[q];this.addGroup(G.start,G.count,G.materialIndex)}let U=J.boundingBox;if(U!==null)this.boundingBox=U.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var TN=new M8,K9=new iQ,B1=new _$,SN=new i,R1=new i,V1=new i,z1=new i,bH=new i,D1=new i,jN=new i,k1=new i;class i8 extends l8{constructor(J=new uJ,$=new OQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let U=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[U]=W}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,K=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let U=this.morphTargetInfluences;if(W&&U){D1.set(0,0,0);for(let H=0,q=W.length;H<q;H++){let Y=U[H],G=W[H];if(Y===0)continue;if(bH.fromBufferAttribute(G,J),K)D1.addScaledVector(bH,Y);else D1.addScaledVector(bH.sub($),Y)}$.add(D1)}return $}raycast(J,$){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(B1.copy(Q.boundingSphere),B1.applyMatrix4(W),K9.copy(J.ray).recast(J.near),B1.containsPoint(K9.origin)===!1){if(K9.intersectSphere(B1,SN)===null)return;if(K9.origin.distanceToSquared(SN)>(J.far-J.near)**2)return}if(TN.copy(W).invert(),K9.copy(J.ray).applyMatrix4(TN),Q.boundingBox!==null){if(K9.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,K9)}_computeIntersections(J,$,Q){let Z,W=this.geometry,K=this.material,U=W.index,H=W.attributes.position,q=W.attributes.uv,Y=W.attributes.uv1,G=W.attributes.normal,X=W.groups,N=W.drawRange;if(U!==null)if(Array.isArray(K))for(let F=0,M=X.length;F<M;F++){let E=X[F],L=K[E.materialIndex],O=Math.max(E.start,N.start),z=Math.min(U.count,Math.min(E.start+E.count,N.start+N.count));for(let B=O,I=z;B<I;B+=3){let A=U.getX(B),C=U.getX(B+1),P=U.getX(B+2);if(Z=C1(this,L,J,Q,q,Y,G,A,C,P),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=E.materialIndex,$.push(Z)}}else{let F=Math.max(0,N.start),M=Math.min(U.count,N.start+N.count);for(let E=F,L=M;E<L;E+=3){let O=U.getX(E),z=U.getX(E+1),B=U.getX(E+2);if(Z=C1(this,K,J,Q,q,Y,G,O,z,B),Z)Z.faceIndex=Math.floor(E/3),$.push(Z)}}else if(H!==void 0)if(Array.isArray(K))for(let F=0,M=X.length;F<M;F++){let E=X[F],L=K[E.materialIndex],O=Math.max(E.start,N.start),z=Math.min(H.count,Math.min(E.start+E.count,N.start+N.count));for(let B=O,I=z;B<I;B+=3){let A=B,C=B+1,P=B+2;if(Z=C1(this,L,J,Q,q,Y,G,A,C,P),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=E.materialIndex,$.push(Z)}}else{let F=Math.max(0,N.start),M=Math.min(H.count,N.start+N.count);for(let E=F,L=M;E<L;E+=3){let O=E,z=E+1,B=E+2;if(Z=C1(this,K,J,Q,q,Y,G,O,z,B),Z)Z.faceIndex=Math.floor(E/3),$.push(Z)}}}}function OV(J,$,Q,Z,W,K,U,H){let q;if($.side===1)q=Z.intersectTriangle(U,K,W,!0,H);else q=Z.intersectTriangle(W,K,U,$.side===0,H);if(q===null)return null;k1.copy(H),k1.applyMatrix4(J.matrixWorld);let Y=Q.ray.origin.distanceTo(k1);if(Y<Q.near||Y>Q.far)return null;return{distance:Y,point:k1.clone(),object:J}}function C1(J,$,Q,Z,W,K,U,H,q,Y){J.getVertexPosition(H,R1),J.getVertexPosition(q,V1),J.getVertexPosition(Y,z1);let G=OV(J,$,Q,Z,R1,V1,z1,jN);if(G){let X=new i;if(m$.getBarycoord(jN,R1,V1,z1,X),W)G.uv=m$.getInterpolatedAttribute(W,H,q,Y,X,new e0);if(K)G.uv1=m$.getInterpolatedAttribute(K,H,q,Y,X,new e0);if(U){if(G.normal=m$.getInterpolatedAttribute(U,H,q,Y,X,new i),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:H,b:q,c:Y,normal:new i,materialIndex:0};m$.getNormal(R1,V1,z1,N.normal),G.face=N,G.barycoord=X}return G}class OZ extends uJ{constructor(J=1,$=1,Q=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:K};let U=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let H=[],q=[],Y=[],G=[],X=0,N=0;F("z","y","x",-1,-1,Q,$,J,K,W,0),F("z","y","x",1,-1,Q,$,-J,K,W,1),F("x","z","y",1,1,J,Q,$,Z,K,2),F("x","z","y",1,-1,J,Q,-$,Z,K,3),F("x","y","z",1,-1,J,$,Q,Z,W,4),F("x","y","z",-1,-1,J,$,-Q,Z,W,5),this.setIndex(H),this.setAttribute("position",new Y$(q,3)),this.setAttribute("normal",new Y$(Y,3)),this.setAttribute("uv",new Y$(G,2));function F(M,E,L,O,z,B,I,A,C,P,x){let D=B/C,k=I/P,b=B/2,v=I/2,m=A/2,n=C+1,r=P+1,s=0,J0=0,a=new i;for(let c=0;c<r;c++){let w=c*k-v;for(let W0=0;W0<n;W0++){let R0=W0*D-b;a[M]=R0*O,a[E]=w*z,a[L]=m,q.push(a.x,a.y,a.z),a[M]=0,a[E]=0,a[L]=A>0?1:-1,Y.push(a.x,a.y,a.z),G.push(W0/C),G.push(1-c/P),s+=1}}for(let c=0;c<P;c++)for(let w=0;w<C;w++){let W0=X+w+n*c,R0=X+w+n*(c+1),e=X+(w+1)+n*(c+1),K0=X+(w+1)+n*c;H.push(W0,R0,K0),H.push(R0,e,K0),J0+=6}U.addGroup(N,J0,x),N+=J0,X+=s}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new OZ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function F9(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let W=J[Q][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=W.clone();else if(Array.isArray(W))$[Q][Z]=W.slice();else $[Q][Z]=W}}return $}function rJ(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=F9(J[Q]);for(let W in Z)$[W]=Z[W]}return $}function BV(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function fq(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return T8.workingColorSpace}var WK={clone:F9,merge:rJ},RV=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class V$ extends R${constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RV,this.fragmentShader=VV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=F9(J.uniforms),this.uniformsGroups=BV(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)$.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)$.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)$.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)$.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)$.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)$.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)$.uniforms[Z]={type:"m4",value:K.toArray()};else $.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}}class KK extends l8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M8,this.projectionMatrix=new M8,this.projectionMatrixInverse=new M8,this.coordinateSystem=2000}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,$){super.updateWorldMatrix(J,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var R6=new i,wN=new e0,_N=new e0;class IJ extends KK{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=H9*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(T7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return H9*2*Math.atan(Math.tan(T7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){R6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(R6.x,R6.y).multiplyScalar(-J/R6.z),R6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(R6.x,R6.y).multiplyScalar(-J/R6.z)}getViewSize(J,$){return this.getViewBounds(J,wN,_N),$.subVectors(_N,wN)}setViewOffset(J,$,Q,Z,W,K){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(T7*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:q}=K;W+=K.offsetX*Z/H,$-=K.offsetY*Q/q,Z*=K.width/H,Q*=K.height/q}let U=this.filmOffset;if(U!==0)W+=J*U/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,$,$-Q,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var WZ=-90,KZ=1;class gq extends l8{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new IJ(WZ,KZ,J,$);Z.layers=this.layers,this.add(Z);let W=new IJ(WZ,KZ,J,$);W.layers=this.layers,this.add(W);let K=new IJ(WZ,KZ,J,$);K.layers=this.layers,this.add(K);let U=new IJ(WZ,KZ,J,$);U.layers=this.layers,this.add(U);let H=new IJ(WZ,KZ,J,$);H.layers=this.layers,this.add(H);let q=new IJ(WZ,KZ,J,$);q.layers=this.layers,this.add(q)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,W,K,U,H]=$;for(let q of $)this.remove(q);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),U.up.set(0,1,0),U.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),U.up.set(0,-1,0),U.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let q of $)this.add(q),q.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,U,H,q,Y]=this.children,G=J.getRenderTarget(),X=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let M=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,J.setRenderTarget(Q,0,Z),J.render($,W),J.setRenderTarget(Q,1,Z),J.render($,K),J.setRenderTarget(Q,2,Z),J.render($,U),J.setRenderTarget(Q,3,Z),J.render($,H),J.setRenderTarget(Q,4,Z),J.render($,q),Q.texture.generateMipmaps=M,J.setRenderTarget(Q,5,Z),J.render($,Y),J.setRenderTarget(G,X,N),J.xr.enabled=F,Q.texture.needsPMREMUpdate=!0}}class g7 extends RJ{constructor(J=[],$=301,Q,Z,W,K,U,H,q,Y){super(J,$,Q,Z,W,K,U,H,q,Y);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class uq extends w${constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new g7(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new OZ(5,5,5),W=new V$({name:"CubemapFromEquirect",uniforms:F9(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=$;let K=new i8(Z,W),U=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new gq(1,10,this).update(J,K),$.minFilter=U,K.geometry.dispose(),K.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear($,Q,Z);J.setRenderTarget(W)}}class d$ extends l8{constructor(){super();this.isGroup=!0,this.type="Group"}}var zV={type:"move"};class u7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new d$,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new d$,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new i,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new i;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new d$,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new i,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new i;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,W=null,K=null,U=this._targetRay,H=this._grip,q=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(q&&J.hand){K=!0;for(let M of J.hand.values()){let E=$.getJointPose(M,Q),L=this._getHandJoint(q,M);if(E!==null)L.matrix.fromArray(E.transform.matrix),L.matrix.decompose(L.position,L.rotation,L.scale),L.matrixWorldNeedsUpdate=!0,L.jointRadius=E.radius;L.visible=E!==null}let Y=q.joints["index-finger-tip"],G=q.joints["thumb-tip"],X=Y.position.distanceTo(G.position),N=0.02,F=0.005;if(q.inputState.pinching&&X>N+F)q.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!q.inputState.pinching&&X<=N-F)q.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=$.getPose(J.gripSpace,Q),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(U!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(U.matrix.fromArray(Z.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,Z.linearVelocity)U.hasLinearVelocity=!0,U.linearVelocity.copy(Z.linearVelocity);else U.hasLinearVelocity=!1;if(Z.angularVelocity)U.hasAngularVelocity=!0,U.angularVelocity.copy(Z.angularVelocity);else U.hasAngularVelocity=!1;this.dispatchEvent(zV)}}}if(U!==null)U.visible=Z!==null;if(H!==null)H.visible=W!==null;if(q!==null)q.visible=K!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new d$;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}class RQ extends l8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ZQ,this.environmentIntensity=1,this.environmentRotation=new ZQ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}class p7{constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=QQ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=QQ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=QQ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var q$=new i;class BZ{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)q$.fromBufferAttribute(this,$),q$.applyMatrix4(J),this.setXYZ($,q$.x,q$.y,q$.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)q$.fromBufferAttribute(this,$),q$.applyNormalMatrix(J),this.setXYZ($,q$.x,q$.y,q$.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)q$.fromBufferAttribute(this,$),q$.transformDirection(J),this.setXYZ($,q$.x,q$.y,q$.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=$Q(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=d8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=d8($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=d8($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=d8($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=d8($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=$Q($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=$Q($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=$Q($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=$Q($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=d8($,this.array),Q=d8(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=d8($,this.array),Q=d8(Q,this.array),Z=d8(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)$=d8($,this.array),Q=d8(Q,this.array),Z=d8(Z,this.array),W=d8(W,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)$.push(this.data.array[Z+W])}return new GJ(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new BZ(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)$.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var xN=new i,yN=new v8,bN=new v8,DV=new i,vN=new M8,P1=new i,vH=new _$,hN=new M8,hH=new iQ;class UK extends i8{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new M8,this.bindMatrixInverse=new M8,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new l$;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,P1),this.boundingBox.expandByPoint(P1)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new _$;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,P1),this.boundingSphere.expandByPoint(P1)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(vH.copy(this.boundingSphere),vH.applyMatrix4(Z),J.ray.intersectsSphere(vH)===!1)return;if(hN.copy(Z).invert(),hH.copy(J.ray).applyMatrix4(hN),this.boundingBox!==null){if(hH.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,hH)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new v8,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;yN.fromBufferAttribute(Z.attributes.skinIndex,J),bN.fromBufferAttribute(Z.attributes.skinWeight,J),xN.copy($).applyMatrix4(this.bindMatrix),$.set(0,0,0);for(let W=0;W<4;W++){let K=bN.getComponent(W);if(K!==0){let U=yN.getComponent(W);vN.multiplyMatrices(Q.bones[U].matrixWorld,Q.boneInverses[U]),$.addScaledVector(DV.copy(xN).applyMatrix4(vN),K)}}return $.applyMatrix4(this.bindMatrixInverse)}}class m7 extends l8{constructor(){super();this.isBone=!0,this.type="Bone"}}class P6 extends RJ{constructor(J=null,$=1,Q=1,Z,W,K,U,H,q=1003,Y=1003,G,X){super(null,K,U,H,q,Y,Z,W,G,X);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var fN=new M8,kV=new M8;class d7{constructor(J=[],$=[]){this.uuid=QQ(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new M8)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new M8;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=J.length;W<K;W++){let U=J[W]?J[W].matrixWorld:kV;fN.multiplyMatrices(U,$[W]),fN.toArray(Q,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new d7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new P6($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let W=J.bones[Q],K=$[W];if(K===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),K=new m7;this.bones.push(K),this.boneInverses.push(new M8().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z];J.bones.push(K.uuid);let U=Q[Z];J.boneInverses.push(U.toArray())}return J}}class Y9 extends GJ{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var UZ=new M8,gN=new M8,I1=[],uN=new l$,CV=new M8,C7=new i8,P7=new _$;class HK extends i8{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new Y9(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,CV)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new l$;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,UZ),uN.copy(J.boundingBox).applyMatrix4(UZ),this.boundingBox.union(uN)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new _$;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,UZ),P7.copy(J.boundingSphere).applyMatrix4(UZ),this.boundingSphere.union(P7)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){$.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){$.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=Q.length+1,K=J*W+1;for(let U=0;U<Q.length;U++)Q[U]=Z[K+U]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(C7.geometry=this.geometry,C7.material=this.material,C7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(P7.copy(this.boundingSphere),P7.applyMatrix4(Q),J.ray.intersectsSphere(P7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,UZ),gN.multiplyMatrices(Q,UZ),C7.matrixWorld=gN,C7.raycast(J,I1);for(let K=0,U=I1.length;K<U;K++){let H=I1[K];H.instanceId=W,H.object=this,$.push(H)}I1.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new Y9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);$.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,$){$.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new P6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let q=0;q<Q.length;q++)K+=Q[q];let U=this.geometry.morphTargetsRelative?1:1-K,H=Z*J;W[H]=U,W.set(Q,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var fH=new i,PV=new i,IV=new R8;class JQ{constructor(J=new i(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=fH.subVectors(Q,$).cross(PV.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$){let Q=J.delta(fH),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return $.copy(J.start).addScaledVector(Q,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||IV.getNormalMatrix(J),Z=this.coplanarPoint(fH).applyMatrix4(J),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var U9=new _$,AV=new e0(0.5,0.5),A1=new i;class c7{constructor(J=new JQ,$=new JQ,Q=new JQ,Z=new JQ,W=new JQ,K=new JQ){this.planes=[J,$,Q,Z,W,K]}set(J,$,Q,Z,W,K){let U=this.planes;return U[0].copy(J),U[1].copy($),U[2].copy(Q),U[3].copy(Z),U[4].copy(W),U[5].copy(K),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000){let Q=this.planes,Z=J.elements,W=Z[0],K=Z[1],U=Z[2],H=Z[3],q=Z[4],Y=Z[5],G=Z[6],X=Z[7],N=Z[8],F=Z[9],M=Z[10],E=Z[11],L=Z[12],O=Z[13],z=Z[14],B=Z[15];if(Q[0].setComponents(H-W,X-q,E-N,B-L).normalize(),Q[1].setComponents(H+W,X+q,E+N,B+L).normalize(),Q[2].setComponents(H+K,X+Y,E+F,B+O).normalize(),Q[3].setComponents(H-K,X-Y,E-F,B-O).normalize(),Q[4].setComponents(H-U,X-G,E-M,B-z).normalize(),$===2000)Q[5].setComponents(H+U,X+G,E+M,B+z).normalize();else if($===2001)Q[5].setComponents(U,G,M,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();U9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();U9.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(U9)}intersectsSprite(J){U9.center.set(0,0,0);let $=AV.distanceTo(J.center);return U9.radius=0.7071067811865476+$,U9.applyMatrix4(J.matrixWorld),this.intersectsSphere(U9)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let W=0;W<6;W++)if($[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(A1.x=Z.normal.x>0?J.max.x:J.min.x,A1.y=Z.normal.y>0?J.max.y:J.min.y,A1.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(A1)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l7 extends R${constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K8(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var x1=new i,y1=new i,pN=new M8,I7=new iQ,T1=new _$,gH=new i,mN=new i;class RZ extends l8{constructor(J=new uJ,$=new l7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,W=$.count;Z<W;Z++)x1.fromBufferAttribute($,Z-1),y1.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=x1.distanceTo(y1);J.setAttribute("lineDistance",new Y$(Q,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(T1.copy(Q.boundingSphere),T1.applyMatrix4(Z),T1.radius+=W,J.ray.intersectsSphere(T1)===!1)return;pN.copy(Z).invert(),I7.copy(J.ray).applyMatrix4(pN);let U=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=U*U,q=this.isLineSegments?2:1,Y=Q.index,X=Q.attributes.position;if(Y!==null){let N=Math.max(0,K.start),F=Math.min(Y.count,K.start+K.count);for(let M=N,E=F-1;M<E;M+=q){let L=Y.getX(M),O=Y.getX(M+1),z=S1(this,J,I7,H,L,O,M);if(z)$.push(z)}if(this.isLineLoop){let M=Y.getX(F-1),E=Y.getX(N),L=S1(this,J,I7,H,M,E,F-1);if(L)$.push(L)}}else{let N=Math.max(0,K.start),F=Math.min(X.count,K.start+K.count);for(let M=N,E=F-1;M<E;M+=q){let L=S1(this,J,I7,H,M,M+1,M);if(L)$.push(L)}if(this.isLineLoop){let M=S1(this,J,I7,H,F-1,N,F-1);if(M)$.push(M)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let U=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[U]=W}}}}}function S1(J,$,Q,Z,W,K,U){let H=J.geometry.attributes.position;if(x1.fromBufferAttribute(H,W),y1.fromBufferAttribute(H,K),Q.distanceSqToSegment(x1,y1,gH,mN)>Z)return;gH.applyMatrix4(J.matrixWorld);let Y=$.ray.origin.distanceTo(gH);if(Y<$.near||Y>$.far)return;return{distance:Y,point:mN.clone().applyMatrix4(J.matrixWorld),index:U,face:null,faceIndex:null,barycoord:null,object:J}}var dN=new i,cN=new i;class qK extends RZ{constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,W=$.count;Z<W;Z+=2)dN.fromBufferAttribute($,Z),cN.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+dN.distanceTo(cN);J.setAttribute("lineDistance",new Y$(Q,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YK extends RZ{constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class o7 extends R${constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K8(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var lN=new M8,dH=new iQ,j1=new _$,w1=new i;class VZ extends l8{constructor(J=new uJ,$=new o7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(j1.copy(Q.boundingSphere),j1.applyMatrix4(Z),j1.radius+=W,J.ray.intersectsSphere(j1)===!1)return;lN.copy(Z).invert(),dH.copy(J.ray).applyMatrix4(lN);let U=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=U*U,q=Q.index,G=Q.attributes.position;if(q!==null){let X=Math.max(0,K.start),N=Math.min(q.count,K.start+K.count);for(let F=X,M=N;F<M;F++){let E=q.getX(F);w1.fromBufferAttribute(G,E),oN(w1,E,H,Z,J,$,this)}}else{let X=Math.max(0,K.start),N=Math.min(G.count,K.start+K.count);for(let F=X,M=N;F<M;F++)w1.fromBufferAttribute(G,F),oN(w1,F,H,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let U=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[U]=W}}}}}function oN(J,$,Q,Z,W,K,U){let H=dH.distanceSqToPoint(J);if(H<Q){let q=new i;dH.closestPointToPoint(J,q),q.applyMatrix4(Z);let Y=W.ray.origin.distanceTo(q);if(Y<W.near||Y>W.far)return;K.push({distance:Y,distanceToRay:Math.sqrt(H),point:q,index:$,face:null,faceIndex:null,barycoord:null,object:U})}}class GK extends RJ{constructor(J,$,Q=1014,Z,W,K,U=1003,H=1003,q,Y=1026,G=1){if(Y!==1026&&Y!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let X={width:J,height:$,depth:G};super(X,Z,W,K,U,H,Y,Q,q);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new h7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class aQ extends uJ{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let W=J/2,K=$/2,U=Math.floor(Q),H=Math.floor(Z),q=U+1,Y=H+1,G=J/U,X=$/H,N=[],F=[],M=[],E=[];for(let L=0;L<Y;L++){let O=L*X-K;for(let z=0;z<q;z++){let B=z*G-W;F.push(B,-O,0),M.push(0,0,1),E.push(z/U),E.push(1-L/H)}}for(let L=0;L<H;L++)for(let O=0;O<U;O++){let z=O+q*L,B=O+q*(L+1),I=O+1+q*(L+1),A=O+1+q*L;N.push(z,B,A),N.push(B,I,A)}this.setIndex(N),this.setAttribute("position",new Y$(F,3)),this.setAttribute("normal",new Y$(M,3)),this.setAttribute("uv",new Y$(E,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new aQ(J.width,J.height,J.widthSegments,J.heightSegments)}}class I6 extends V${constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zZ extends R${constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new K8(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K8(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ZQ,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class LJ extends zZ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new e0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return V8(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new K8(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K8(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K8(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class s7 extends R${constructor(J){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(J)}copy(J){return super.copy(J),this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this}}class pq extends R${constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class mq extends R${constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function _1(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function TV(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function SV(J){function $(W,K){return J[W]-J[K]}let Q=J.length,Z=new Array(Q);for(let W=0;W!==Q;++W)Z[W]=W;return Z.sort($),Z}function sN(J,$,Q){let Z=J.length,W=new J.constructor(Z);for(let K=0,U=0;U!==Z;++K){let H=Q[K]*$;for(let q=0;q!==$;++q)W[U++]=J[H+q]}return W}function $L(J,$,Q,Z){let W=1,K=J[0];while(K!==void 0&&K[Z]===void 0)K=J[W++];if(K===void 0)return;let U=K[Z];if(U===void 0)return;if(Array.isArray(U))do{if(U=K[Z],U!==void 0)$.push(K.time),Q.push(...U);K=J[W++]}while(K!==void 0);else if(U.toArray!==void 0)do{if(U=K[Z],U!==void 0)$.push(K.time),U.toArray(Q,Q.length);K=J[W++]}while(K!==void 0);else do{if(U=K[Z],U!==void 0)$.push(K.time),Q.push(U);K=J[W++]}while(K!==void 0)}class A6{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],W=$[Q-1];Q:{J:{let K;$:{Z:if(!(J<Z)){for(let U=Q+2;;){if(Z===void 0){if(J<W)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===U)break;if(W=Z,Z=$[++Q],J<Z)break J}K=$.length;break $}if(!(J>=W)){let U=$[1];if(J<U)Q=2,W=U;for(let H=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===H)break;if(Z=W,W=$[--Q-1],J>=W)break J}K=Q,Q=0;break $}break Q}while(Q<K){let U=Q+K>>>1;if(J<$[U])K=U;else Q=U+1}if(Z=$[Q],W=$[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)$[K]=Q[W+K];return $}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dq extends A6{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,W=J-2,K=J+1,U=Z[W],H=Z[K];if(U===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,U=2*$-Q;break;case 2402:W=Z.length-2,U=$+Z[W]-Z[W+1];break;default:W=J,U=Q}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,H=2*Q-$;break;case 2402:K=1,H=Q+Z[1]-Z[0];break;default:K=J-1,H=$}let q=(Q-$)*0.5,Y=this.valueSize;this._weightPrev=q/($-U),this._weightNext=q/(H-Q),this._offsetPrev=W*Y,this._offsetNext=K*Y}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,U=this.valueSize,H=J*U,q=H-U,Y=this._offsetPrev,G=this._offsetNext,X=this._weightPrev,N=this._weightNext,F=(Q-$)/(Z-$),M=F*F,E=M*F,L=-X*E+2*X*M-X*F,O=(1+X)*E+(-1.5-2*X)*M+(-0.5+X)*F+1,z=(-1-N)*E+(1.5+N)*M+0.5*F,B=N*E-N*M;for(let I=0;I!==U;++I)W[I]=L*K[Y+I]+O*K[q+I]+z*K[H+I]+B*K[G+I];return W}}class cq extends A6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,U=this.valueSize,H=J*U,q=H-U,Y=(Q-$)/(Z-$),G=1-Y;for(let X=0;X!==U;++X)W[X]=K[q+X]*G+K[H+X]*Y;return W}}class lq extends A6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class x${constructor(J,$,Q,Z){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=_1($,this.TimeBufferType),this.values=_1(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:_1(J.times,Array),values:_1(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new lq(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new cq(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new dq(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J}return this}trim(J,$){let Q=this.times,Z=Q.length,W=0,K=Z-1;while(W!==Z&&Q[W]<J)++W;while(K!==-1&&Q[K]>$)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let U=this.getValueSize();this.times=Q.slice(W,K),this.values=this.values.slice(W*U,K*U)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let U=0;U!==W;U++){let H=Q[U];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,U,H),J=!1;break}if(K!==null&&K>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,U,H,K),J=!1;break}K=H}if(Z!==void 0){if(TV(Z))for(let U=0,H=Z.length;U!==H;++U){let q=Z[U];if(isNaN(q)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,U,q),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let U=1;U<W;++U){let H=!1,q=J[U],Y=J[U+1];if(q!==Y&&(U!==1||q!==J[0]))if(!Z){let G=U*Q,X=G-Q,N=G+Q;for(let F=0;F!==Q;++F){let M=$[G+F];if(M!==$[X+F]||M!==$[N+F]){H=!0;break}}}else H=!0;if(H){if(U!==K){J[K]=J[U];let G=U*Q,X=K*Q;for(let N=0;N!==Q;++N)$[X+N]=$[G+N]}++K}}if(W>0){J[K]=J[W];for(let U=W*Q,H=K*Q,q=0;q!==Q;++q)$[H+q]=$[U+q];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=$.slice(0,K*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);return Z.createInterpolant=this.createInterpolant,Z}}x$.prototype.ValueTypeName="";x$.prototype.TimeBufferType=Float32Array;x$.prototype.ValueBufferType=Float32Array;x$.prototype.DefaultInterpolation=2301;class T6 extends x${constructor(J,$,Q){super(J,$,Q)}}T6.prototype.ValueTypeName="bool";T6.prototype.ValueBufferType=Array;T6.prototype.DefaultInterpolation=2300;T6.prototype.InterpolantFactoryMethodLinear=void 0;T6.prototype.InterpolantFactoryMethodSmooth=void 0;class XK extends x${constructor(J,$,Q,Z){super(J,$,Q,Z)}}XK.prototype.ValueTypeName="color";class dQ extends x${constructor(J,$,Q,Z){super(J,$,Q,Z)}}dQ.prototype.ValueTypeName="number";class oq extends A6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,U=this.valueSize,H=(Q-$)/(Z-$),q=J*U;for(let Y=q+U;q!==Y;q+=4)B$.slerpFlat(W,0,K,q-U,K,q,H);return W}}class rQ extends x${constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new oq(this.times,this.values,this.getValueSize(),J)}}rQ.prototype.ValueTypeName="quaternion";rQ.prototype.InterpolantFactoryMethodSmooth=void 0;class S6 extends x${constructor(J,$,Q){super(J,$,Q)}}S6.prototype.ValueTypeName="string";S6.prototype.ValueBufferType=Array;S6.prototype.DefaultInterpolation=2300;S6.prototype.InterpolantFactoryMethodLinear=void 0;S6.prototype.InterpolantFactoryMethodSmooth=void 0;class cQ extends x${constructor(J,$,Q,Z){super(J,$,Q,Z)}}cQ.prototype.ValueTypeName="vector";class NK{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=QQ(),this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let K=0,U=Q.length;K!==U;++K)$.push(wV(Q[K]).scale(Z));let W=new this(J.name,J.duration,$,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,K=Q.length;W!==K;++W)$.push(x$.toJSON(Q[W]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let W=$.length,K=[];for(let U=0;U<W;U++){let H=[],q=[];H.push((U+W-1)%W,U,(U+1)%W),q.push(0,1,0);let Y=SV(H);if(H=sN(H,1,Y),q=sN(q,1,Y),!Z&&H[0]===0)H.push(W),q.push(q[0]);K.push(new dQ(".morphTargetInfluences["+$[U].name+"]",H,q).scale(1/Q))}return new this(J,-1,K)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let U=0,H=J.length;U<H;U++){let q=J[U],Y=q.name.match(W);if(Y&&Y.length>1){let G=Y[1],X=Z[G];if(!X)Z[G]=X=[];X.push(q)}}let K=[];for(let U in Z)K.push(this.CreateFromMorphTargetSequence(U,Z[U],$,Q));return K}static parseAnimation(J,$){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Q=function(G,X,N,F,M){if(N.length!==0){let E=[],L=[];if($L(N,E,L,F),E.length!==0)M.push(new G(X,E,L))}},Z=[],W=J.name||"default",K=J.fps||30,U=J.blendMode,H=J.length||-1,q=J.hierarchy||[];for(let G=0;G<q.length;G++){let X=q[G].keys;if(!X||X.length===0)continue;if(X[0].morphTargets){let N={},F;for(F=0;F<X.length;F++)if(X[F].morphTargets)for(let M=0;M<X[F].morphTargets.length;M++)N[X[F].morphTargets[M]]=-1;for(let M in N){let E=[],L=[];for(let O=0;O!==X[F].morphTargets.length;++O){let z=X[F];E.push(z.time),L.push(z.morphTarget===M?1:0)}Z.push(new dQ(".morphTargetInfluence["+M+"]",E,L))}H=N.length*K}else{let N=".bones["+$[G].name+"]";Q(cQ,N+".position",X,"pos",Z),Q(rQ,N+".quaternion",X,"rot",Z),Q(cQ,N+".scale",X,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,U)}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let W=this.tracks[Q];$=Math.max($,W.times[W.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jV(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dQ;case"vector":case"vector2":case"vector3":case"vector4":return cQ;case"color":return XK;case"quaternion":return rQ;case"bool":case"boolean":return T6;case"string":return S6}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function wV(J){if(J.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=jV(J.type);if(J.times===void 0){let Q=[],Z=[];$L(J.keys,Q,Z,"value"),J.times=Q,J.values=Z}if($.parse!==void 0)return $.parse(J);else return new $(J.name,J.times,J.values,J.interpolation)}var LQ={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class sq{constructor(J,$,Q){let Z=this,W=!1,K=0,U=0,H=void 0,q=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this.itemStart=function(Y){if(U++,W===!1){if(Z.onStart!==void 0)Z.onStart(Y,K,U)}W=!0},this.itemEnd=function(Y){if(K++,Z.onProgress!==void 0)Z.onProgress(Y,K,U);if(K===U){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(Y){if(Z.onError!==void 0)Z.onError(Y)},this.resolveURL=function(Y){if(H)return H(Y);return Y},this.setURLModifier=function(Y){return H=Y,this},this.addHandler=function(Y,G){return q.push(Y,G),this},this.removeHandler=function(Y){let G=q.indexOf(Y);if(G!==-1)q.splice(G,2);return this},this.getHandler=function(Y){for(let G=0,X=q.length;G<X;G+=2){let N=q[G],F=q[G+1];if(N.global)N.lastIndex=0;if(N.test(Y))return F}return null}}}var QL=new sq;class WQ{constructor(J){this.manager=J!==void 0?J:QL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,W){Q.load(J,Z,$,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}WQ.DEFAULT_MATERIAL_NAME="__DEFAULT";var uQ={};class ZL extends Error{constructor(J,$){super(J);this.response=$}}class DZ extends WQ{constructor(J){super(J);this.mimeType="",this.responseType=""}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=LQ.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if($)$(W);this.manager.itemEnd(J)},0),W;if(uQ[J]!==void 0){uQ[J].push({onLoad:$,onProgress:Q,onError:Z});return}uQ[J]=[],uQ[J].push({onLoad:$,onProgress:Q,onError:Z});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),U=this.mimeType,H=this.responseType;fetch(K).then((q)=>{if(q.status===200||q.status===0){if(q.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream==="undefined"||q.body===void 0||q.body.getReader===void 0)return q;let Y=uQ[J],G=q.body.getReader(),X=q.headers.get("X-File-Size")||q.headers.get("Content-Length"),N=X?parseInt(X):0,F=N!==0,M=0,E=new ReadableStream({start(L){O();function O(){G.read().then(({done:z,value:B})=>{if(z)L.close();else{M+=B.byteLength;let I=new ProgressEvent("progress",{lengthComputable:F,loaded:M,total:N});for(let A=0,C=Y.length;A<C;A++){let P=Y[A];if(P.onProgress)P.onProgress(I)}L.enqueue(B),O()}},(z)=>{L.error(z)})}}});return new Response(E)}else throw new ZL(`fetch for "${q.url}" responded with ${q.status}: ${q.statusText}`,q)}).then((q)=>{switch(H){case"arraybuffer":return q.arrayBuffer();case"blob":return q.blob();case"document":return q.text().then((Y)=>{return new DOMParser().parseFromString(Y,U)});case"json":return q.json();default:if(U==="")return q.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(U),X=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(X);return q.arrayBuffer().then((F)=>N.decode(F))}}}).then((q)=>{LQ.add(`file:${J}`,q);let Y=uQ[J];delete uQ[J];for(let G=0,X=Y.length;G<X;G++){let N=Y[G];if(N.onLoad)N.onLoad(q)}}).catch((q)=>{let Y=uQ[J];if(Y===void 0)throw this.manager.itemError(J),q;delete uQ[J];for(let G=0,X=Y.length;G<X;G++){let N=Y[G];if(N.onError)N.onError(q)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}var HZ=new WeakMap;class FK extends WQ{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=LQ.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if($)$(K);W.manager.itemEnd(J)},0);else{let G=HZ.get(K);if(G===void 0)G=[],HZ.set(K,G);G.push({onLoad:$,onError:Z})}return K}let U=YZ("img");function H(){if(Y(),$)$(this);let G=HZ.get(this)||[];for(let X=0;X<G.length;X++){let N=G[X];if(N.onLoad)N.onLoad(this)}HZ.delete(this),W.manager.itemEnd(J)}function q(G){if(Y(),Z)Z(G);LQ.remove(`image:${J}`);let X=HZ.get(this)||[];for(let N=0;N<X.length;N++){let F=X[N];if(F.onError)F.onError(G)}HZ.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function Y(){U.removeEventListener("load",H,!1),U.removeEventListener("error",q,!1)}if(U.addEventListener("load",H,!1),U.addEventListener("error",q,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)U.crossOrigin=this.crossOrigin}return LQ.add(`image:${J}`,U),W.manager.itemStart(J),U.src=J,U}}class LK extends WQ{constructor(J){super(J)}load(J,$,Q,Z){let W=new g7;W.colorSpace="srgb";let K=new FK(this.manager);K.setCrossOrigin(this.crossOrigin),K.setPath(this.path);let U=0;function H(q){K.load(J[q],function(Y){if(W.images[q]=Y,U++,U===6){if(W.needsUpdate=!0,$)$(W)}},void 0,Z)}for(let q=0;q<J.length;++q)H(q);return W}}class kZ extends WQ{constructor(J){super(J)}load(J,$,Q,Z){let W=this,K=new P6,U=new DZ(this.manager);return U.setResponseType("arraybuffer"),U.setRequestHeader(this.requestHeader),U.setPath(this.path),U.setWithCredentials(W.withCredentials),U.load(J,function(H){let q;try{q=W.parse(H)}catch(Y){if(Z!==void 0)Z(Y);else{console.error(Y);return}}if(q.image!==void 0)K.image=q.image;else if(q.data!==void 0)K.image.width=q.width,K.image.height=q.height,K.image.data=q.data;if(K.wrapS=q.wrapS!==void 0?q.wrapS:1001,K.wrapT=q.wrapT!==void 0?q.wrapT:1001,K.magFilter=q.magFilter!==void 0?q.magFilter:1006,K.minFilter=q.minFilter!==void 0?q.minFilter:1006,K.anisotropy=q.anisotropy!==void 0?q.anisotropy:1,q.colorSpace!==void 0)K.colorSpace=q.colorSpace;if(q.flipY!==void 0)K.flipY=q.flipY;if(q.format!==void 0)K.format=q.format;if(q.type!==void 0)K.type=q.type;if(q.mipmaps!==void 0)K.mipmaps=q.mipmaps,K.minFilter=1008;if(q.mipmapCount===1)K.minFilter=1006;if(q.generateMipmaps!==void 0)K.generateMipmaps=q.generateMipmaps;if(K.needsUpdate=!0,$)$(K,q)},Q,Z),K}}class CZ extends WQ{constructor(J){super(J)}load(J,$,Q,Z){let W=new RJ,K=new FK(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(U){if(W.image=U,W.needsUpdate=!0,$!==void 0)$(W)},Q,Z),W}}class n7 extends l8{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new K8(J),this.intensity=$}dispose(){}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();if(this.target!==void 0)$.object.target=this.target.uuid;return $}}var uH=new M8,nN=new i,iN=new i;class EK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new e0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new M8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new c7,this._frameExtents=new e0(1,1),this._viewportCount=1,this._viewports=[new v8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera,Q=this.matrix;nN.setFromMatrixPosition(J.matrixWorld),$.position.copy(nN),iN.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(iN),$.updateMatrixWorld(),uH.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uH),Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Q.multiply(uH)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class WL extends EK{constructor(){super(new IJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let $=this.camera,Q=H9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||W!==$.far)$.fov=Q,$.aspect=Z,$.far=W,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class MK extends n7{constructor(J,$,Q=0,Z=Math.PI/3,W=0,K=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(l8.DEFAULT_UP),this.updateMatrix(),this.target=new l8,this.distance=Q,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new WL}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var aN=new M8,A7=new i,pH=new i;class KL extends EK{constructor(){super(new IJ(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new e0(4,2),this._viewportCount=6,this._viewports=[new v8(2,1,1,1),new v8(0,1,1,1),new v8(3,1,1,1),new v8(1,1,1,1),new v8(3,0,1,1),new v8(1,0,1,1)],this._cubeDirections=[new i(1,0,0),new i(-1,0,0),new i(0,0,1),new i(0,0,-1),new i(0,1,0),new i(0,-1,0)],this._cubeUps=[new i(0,1,0),new i(0,1,0),new i(0,1,0),new i(0,1,0),new i(0,0,1),new i(0,0,-1)]}updateMatrices(J,$=0){let Q=this.camera,Z=this.matrix,W=J.distance||Q.far;if(W!==Q.far)Q.far=W,Q.updateProjectionMatrix();A7.setFromMatrixPosition(J.matrixWorld),Q.position.copy(A7),pH.copy(Q.position),pH.add(this._cubeDirections[$]),Q.up.copy(this._cubeUps[$]),Q.lookAt(pH),Q.updateMatrixWorld(),Z.makeTranslation(-A7.x,-A7.y,-A7.z),aN.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aN)}}class OK extends n7{constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new KL}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class VQ extends KK{constructor(J=-1,$=1,Q=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-J,K=Q+J,U=Z+$,H=Z-$;if(this.view!==null&&this.view.enabled){let q=(this.right-this.left)/this.view.fullWidth/this.zoom,Y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=q*this.view.offsetX,K=W+q*this.view.width,U-=Y*this.view.offsetY,H=U-Y*this.view.height}this.projectionMatrix.makeOrthographic(W,K,U,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class UL extends EK{constructor(){super(new VQ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class BK extends n7{constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(l8.DEFAULT_UP),this.updateMatrix(),this.target=new l8,this.shadow=new UL}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class j6{static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}var mH=new WeakMap;class RK extends WQ{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap==="undefined")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch==="undefined")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=LQ.get(`image-bitmap:${J}`);if(K!==void 0){if(W.manager.itemStart(J),K.then){K.then((q)=>{if(mH.has(K)===!0){if(Z)Z(mH.get(K));W.manager.itemError(J),W.manager.itemEnd(J)}else{if($)$(q);return W.manager.itemEnd(J),q}});return}return setTimeout(function(){if($)$(K);W.manager.itemEnd(J)},0),K}let U={};U.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",U.headers=this.requestHeader;let H=fetch(J,U).then(function(q){return q.blob()}).then(function(q){return createImageBitmap(q,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(q){if(LQ.add(`image-bitmap:${J}`,q),$)$(q);return W.manager.itemEnd(J),q}).catch(function(q){if(Z)Z(q);mH.set(H,q),LQ.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});LQ.add(`image-bitmap:${J}`,H),W.manager.itemStart(J)}}class nq extends IJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class PZ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=performance.now();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}var iq="\\[\\]\\.:\\/",_V=new RegExp("["+iq+"]","g"),aq="[^"+iq+"]",xV="[^"+iq.replace("\\.","")+"]",yV=/((?:WC+[\/:])*)/.source.replace("WC",aq),bV=/(WCOD+)?/.source.replace("WCOD",xV),vV=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aq),hV=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aq),fV=new RegExp("^"+yV+bV+vV+hV+"$"),gV=["material","materials","bones","map"];class HL{constructor(J,$,Q){let Z=Q||f8.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class f8{constructor(J,$,Q){this.path=$,this.parsedPath=Q||f8.parseTrackName($),this.node=f8.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new f8(J,$,Q);else return new f8.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(_V,"")}static parseTrackName(J){let $=fV.exec(J);if($===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(gV.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(W){for(let K=0;K<W.length;K++){let U=W[K];if(U.name===$||U.uuid===$)return U;let H=Q(U.children);if(H)return H}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,W=$.propertyIndex;if(!J)J=f8.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let q=$.objectIndex;switch(Q){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let Y=0;Y<J.length;Y++)if(J[Y].name===q){q=Y;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(q!==void 0){if(J[q]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[q]}}let K=J[Z];if(K===void 0){let q=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+q+"."+Z+" but it wasn't found.",J);return}let U=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)U=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)U=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))H=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][U]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}f8.Composite=HL;f8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};f8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};f8.prototype.GetterByBindingType=[f8.prototype._getValue_direct,f8.prototype._getValue_array,f8.prototype._getValue_arrayElement,f8.prototype._getValue_toArray];f8.prototype.SetterByBindingTypeAndVersioning=[[f8.prototype._setValue_direct,f8.prototype._setValue_direct_setNeedsUpdate,f8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[f8.prototype._setValue_array,f8.prototype._setValue_array_setNeedsUpdate,f8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[f8.prototype._setValue_arrayElement,f8.prototype._setValue_arrayElement_setNeedsUpdate,f8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[f8.prototype._setValue_fromArray,f8.prototype._setValue_fromArray_setNeedsUpdate,f8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rP=new Float32Array(1);var rN=new M8;class i7{constructor(J,$,Q=0,Z=1/0){this.ray=new iQ(J,$),this.near=Q,this.far=Z,this.camera=null,this.layers=new f7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,$){this.ray.set(J,$)}setFromCamera(J,$){if($.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition($.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject($).sub(this.ray.origin).normalize(),this.camera=$;else if($.isOrthographicCamera)this.ray.origin.set(J.x,J.y,($.near+$.far)/($.near-$.far)).unproject($),this.ray.direction.set(0,0,-1).transformDirection($.matrixWorld),this.camera=$;else console.error("THREE.Raycaster: Unsupported camera type: "+$.type)}setFromXRController(J){return rN.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rN),this}intersectObject(J,$=!0,Q=[]){return cH(J,this,Q,$),Q.sort(tN),Q}intersectObjects(J,$=!0,Q=[]){for(let Z=0,W=J.length;Z<W;Z++)cH(J[Z],this,Q,$);return Q.sort(tN),Q}}function tN(J,$){return J.distance-$.distance}function cH(J,$,Q,Z){let W=!0;if(J.layers.test($.layers)){if(J.raycast($,Q)===!1)W=!1}if(W===!0&&Z===!0){let K=J.children;for(let U=0,H=K.length;U<H;U++)cH(K[U],$,Q,!0)}}class a7{constructor(J=1,$=0,Q=0){this.radius=J,this.phi=$,this.theta=Q}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=V8(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(V8($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class VK extends nQ{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function rq(J,$,Q,Z){let W=uV(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/W.components*W.byteLength;case 1029:return J*$/W.components*W.byteLength;case 1030:return J*$*2/W.components*W.byteLength;case 1031:return J*$*2/W.components*W.byteLength;case 1022:return J*$*3/W.components*W.byteLength;case 1023:return J*$*4/W.components*W.byteLength;case 1033:return J*$*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw new Error(`Unable to determine texture byte length for ${Q} format.`)}function uV(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="178";function wL(){let J=null,$=!1,Q=null,Z=null;function W(K,U){Q(K,U),Z=J.requestAnimationFrame(W)}return{start:function(){if($===!0)return;if(Q===null)return;Z=J.requestAnimationFrame(W),$=!0},stop:function(){J.cancelAnimationFrame(Z),$=!1},setAnimationLoop:function(K){Q=K},setContext:function(K){J=K}}}function pV(J){let $=new WeakMap;function Q(H,q){let{array:Y,usage:G}=H,X=Y.byteLength,N=J.createBuffer();J.bindBuffer(q,N),J.bufferData(q,Y,G),H.onUploadCallback();let F;if(Y instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array!=="undefined"&&Y instanceof Float16Array)F=J.HALF_FLOAT;else if(Y instanceof Uint16Array)if(H.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(Y instanceof Int16Array)F=J.SHORT;else if(Y instanceof Uint32Array)F=J.UNSIGNED_INT;else if(Y instanceof Int32Array)F=J.INT;else if(Y instanceof Int8Array)F=J.BYTE;else if(Y instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:N,type:F,bytesPerElement:Y.BYTES_PER_ELEMENT,version:H.version,size:X}}function Z(H,q,Y){let{array:G,updateRanges:X}=q;if(J.bindBuffer(Y,H),X.length===0)J.bufferSubData(Y,0,G);else{X.sort((F,M)=>F.start-M.start);let N=0;for(let F=1;F<X.length;F++){let M=X[N],E=X[F];if(E.start<=M.start+M.count+1)M.count=Math.max(M.count,E.start+E.count-M.start);else++N,X[N]=E}X.length=N+1;for(let F=0,M=X.length;F<M;F++){let E=X[F];J.bufferSubData(Y,E.start*G.BYTES_PER_ELEMENT,G,E.start,E.count)}q.clearUpdateRanges()}q.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return $.get(H)}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;let q=$.get(H);if(q)J.deleteBuffer(q.buffer),$.delete(H)}function U(H,q){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let G=$.get(H);if(!G||G.version<H.version)$.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let Y=$.get(H);if(Y===void 0)$.set(H,Q(H,q));else if(Y.version<H.version){if(Y.size!==H.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(Y.buffer,H,q),Y.version=H.version}}return{get:W,remove:K,update:U}}var mV=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dV=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cV=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lV=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oV=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sV=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nV=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iV=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aV=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rV=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tV=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eV=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jz=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$z=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qz=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zz=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uz=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hz=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gz=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xz=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nz=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fz=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lz=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ez=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mz=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oz=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bz="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rz=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zz=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dz=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kz=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pz=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iz=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Az=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tz=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sz=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jz=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wz=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_z=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xz=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yz=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bz=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vz=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hz=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fz=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gz=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uz=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pz=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mz=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dz=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cz=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lz=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oz=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sz=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nz=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iz=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,az=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rz=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tz=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ez=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$D=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ND=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ED=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ID=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_D=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z8={alphahash_fragment:mV,alphahash_pars_fragment:dV,alphamap_fragment:cV,alphamap_pars_fragment:lV,alphatest_fragment:oV,alphatest_pars_fragment:sV,aomap_fragment:nV,aomap_pars_fragment:iV,batching_pars_vertex:aV,batching_vertex:rV,begin_vertex:tV,beginnormal_vertex:eV,bsdfs:Jz,iridescence_fragment:$z,bumpmap_pars_fragment:Qz,clipping_planes_fragment:Zz,clipping_planes_pars_fragment:Wz,clipping_planes_pars_vertex:Kz,clipping_planes_vertex:Uz,color_fragment:Hz,color_pars_fragment:qz,color_pars_vertex:Yz,color_vertex:Gz,common:Xz,cube_uv_reflection_fragment:Nz,defaultnormal_vertex:Fz,displacementmap_pars_vertex:Lz,displacementmap_vertex:Ez,emissivemap_fragment:Mz,emissivemap_pars_fragment:Oz,colorspace_fragment:Bz,colorspace_pars_fragment:Rz,envmap_fragment:Vz,envmap_common_pars_fragment:zz,envmap_pars_fragment:Dz,envmap_pars_vertex:kz,envmap_physical_pars_fragment:yz,envmap_vertex:Cz,fog_vertex:Pz,fog_pars_vertex:Iz,fog_fragment:Az,fog_pars_fragment:Tz,gradientmap_pars_fragment:Sz,lightmap_pars_fragment:jz,lights_lambert_fragment:wz,lights_lambert_pars_fragment:_z,lights_pars_begin:xz,lights_toon_fragment:bz,lights_toon_pars_fragment:vz,lights_phong_fragment:hz,lights_phong_pars_fragment:fz,lights_physical_fragment:gz,lights_physical_pars_fragment:uz,lights_fragment_begin:pz,lights_fragment_maps:mz,lights_fragment_end:dz,logdepthbuf_fragment:cz,logdepthbuf_pars_fragment:lz,logdepthbuf_pars_vertex:oz,logdepthbuf_vertex:sz,map_fragment:nz,map_pars_fragment:iz,map_particle_fragment:az,map_particle_pars_fragment:rz,metalnessmap_fragment:tz,metalnessmap_pars_fragment:ez,morphinstance_vertex:JD,morphcolor_vertex:$D,morphnormal_vertex:QD,morphtarget_pars_vertex:ZD,morphtarget_vertex:WD,normal_fragment_begin:KD,normal_fragment_maps:UD,normal_pars_fragment:HD,normal_pars_vertex:qD,normal_vertex:YD,normalmap_pars_fragment:GD,clearcoat_normal_fragment_begin:XD,clearcoat_normal_fragment_maps:ND,clearcoat_pars_fragment:FD,iridescence_pars_fragment:LD,opaque_fragment:ED,packing:MD,premultiplied_alpha_fragment:OD,project_vertex:BD,dithering_fragment:RD,dithering_pars_fragment:VD,roughnessmap_fragment:zD,roughnessmap_pars_fragment:DD,shadowmap_pars_fragment:kD,shadowmap_pars_vertex:CD,shadowmap_vertex:PD,shadowmask_pars_fragment:ID,skinbase_vertex:AD,skinning_pars_vertex:TD,skinning_vertex:SD,skinnormal_vertex:jD,specularmap_fragment:wD,specularmap_pars_fragment:_D,tonemapping_fragment:xD,tonemapping_pars_fragment:yD,transmission_fragment:bD,transmission_pars_fragment:vD,uv_pars_fragment:hD,uv_pars_vertex:fD,uv_vertex:gD,worldpos_vertex:uD,background_vert:pD,background_frag:mD,backgroundCube_vert:dD,backgroundCube_frag:cD,cube_vert:lD,cube_frag:oD,depth_vert:sD,depth_frag:nD,distanceRGBA_vert:iD,distanceRGBA_frag:aD,equirect_vert:rD,equirect_frag:tD,linedashed_vert:eD,linedashed_frag:J4,meshbasic_vert:$4,meshbasic_frag:Q4,meshlambert_vert:Z4,meshlambert_frag:W4,meshmatcap_vert:K4,meshmatcap_frag:U4,meshnormal_vert:H4,meshnormal_frag:q4,meshphong_vert:Y4,meshphong_frag:G4,meshphysical_vert:X4,meshphysical_frag:N4,meshtoon_vert:F4,meshtoon_frag:L4,points_vert:E4,points_frag:M4,shadow_vert:O4,shadow_frag:B4,sprite_vert:R4,sprite_frag:V4},v0={common:{diffuse:{value:new K8(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R8},alphaMap:{value:null},alphaMapTransform:{value:new R8},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R8}},envmap:{envMap:{value:null},envMapRotation:{value:new R8},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R8}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R8}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R8},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R8},normalScale:{value:new e0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R8},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R8}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R8}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R8}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new K8(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new K8(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R8},alphaTest:{value:0},uvTransform:{value:new R8}},sprite:{diffuse:{value:new K8(16777215)},opacity:{value:1},center:{value:new e0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R8},alphaMap:{value:null},alphaMapTransform:{value:new R8},alphaTest:{value:0}}},zQ={basic:{uniforms:rJ([v0.common,v0.specularmap,v0.envmap,v0.aomap,v0.lightmap,v0.fog]),vertexShader:z8.meshbasic_vert,fragmentShader:z8.meshbasic_frag},lambert:{uniforms:rJ([v0.common,v0.specularmap,v0.envmap,v0.aomap,v0.lightmap,v0.emissivemap,v0.bumpmap,v0.normalmap,v0.displacementmap,v0.fog,v0.lights,{emissive:{value:new K8(0)}}]),vertexShader:z8.meshlambert_vert,fragmentShader:z8.meshlambert_frag},phong:{uniforms:rJ([v0.common,v0.specularmap,v0.envmap,v0.aomap,v0.lightmap,v0.emissivemap,v0.bumpmap,v0.normalmap,v0.displacementmap,v0.fog,v0.lights,{emissive:{value:new K8(0)},specular:{value:new K8(1118481)},shininess:{value:30}}]),vertexShader:z8.meshphong_vert,fragmentShader:z8.meshphong_frag},standard:{uniforms:rJ([v0.common,v0.envmap,v0.aomap,v0.lightmap,v0.emissivemap,v0.bumpmap,v0.normalmap,v0.displacementmap,v0.roughnessmap,v0.metalnessmap,v0.fog,v0.lights,{emissive:{value:new K8(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z8.meshphysical_vert,fragmentShader:z8.meshphysical_frag},toon:{uniforms:rJ([v0.common,v0.aomap,v0.lightmap,v0.emissivemap,v0.bumpmap,v0.normalmap,v0.displacementmap,v0.gradientmap,v0.fog,v0.lights,{emissive:{value:new K8(0)}}]),vertexShader:z8.meshtoon_vert,fragmentShader:z8.meshtoon_frag},matcap:{uniforms:rJ([v0.common,v0.bumpmap,v0.normalmap,v0.displacementmap,v0.fog,{matcap:{value:null}}]),vertexShader:z8.meshmatcap_vert,fragmentShader:z8.meshmatcap_frag},points:{uniforms:rJ([v0.points,v0.fog]),vertexShader:z8.points_vert,fragmentShader:z8.points_frag},dashed:{uniforms:rJ([v0.common,v0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z8.linedashed_vert,fragmentShader:z8.linedashed_frag},depth:{uniforms:rJ([v0.common,v0.displacementmap]),vertexShader:z8.depth_vert,fragmentShader:z8.depth_frag},normal:{uniforms:rJ([v0.common,v0.bumpmap,v0.normalmap,v0.displacementmap,{opacity:{value:1}}]),vertexShader:z8.meshnormal_vert,fragmentShader:z8.meshnormal_frag},sprite:{uniforms:rJ([v0.sprite,v0.fog]),vertexShader:z8.sprite_vert,fragmentShader:z8.sprite_frag},background:{uniforms:{uvTransform:{value:new R8},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z8.background_vert,fragmentShader:z8.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R8}},vertexShader:z8.backgroundCube_vert,fragmentShader:z8.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z8.cube_vert,fragmentShader:z8.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z8.equirect_vert,fragmentShader:z8.equirect_frag},distanceRGBA:{uniforms:rJ([v0.common,v0.displacementmap,{referencePosition:{value:new i},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:z8.distanceRGBA_vert,fragmentShader:z8.distanceRGBA_frag},shadow:{uniforms:rJ([v0.lights,v0.fog,{color:{value:new K8(0)},opacity:{value:1}}]),vertexShader:z8.shadow_vert,fragmentShader:z8.shadow_frag}};zQ.physical={uniforms:rJ([zQ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R8},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R8},clearcoatNormalScale:{value:new e0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R8},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R8},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R8},sheen:{value:0},sheenColor:{value:new K8(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R8},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R8},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R8},transmissionSamplerSize:{value:new e0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R8},attenuationDistance:{value:0},attenuationColor:{value:new K8(0)},specularColor:{value:new K8(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R8},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R8},anisotropyVector:{value:new e0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R8}}]),vertexShader:z8.meshphysical_vert,fragmentShader:z8.meshphysical_frag};var zK={r:0,b:0,g:0},L9=new ZQ,z4=new M8;function D4(J,$,Q,Z,W,K,U){let H=new K8(0),q=K===!0?0:1,Y,G,X=null,N=0,F=null;function M(B){let I=B.isScene===!0?B.background:null;if(I&&I.isTexture)I=(B.backgroundBlurriness>0?Q:$).get(I);return I}function E(B){let I=!1,A=M(B);if(A===null)O(H,q);else if(A&&A.isColor)O(A,1),I=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,U);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,U);if(J.autoClear||I)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(B,I){let A=M(I);if(A&&(A.isCubeTexture||A.mapping===_7)){if(G===void 0)G=new i8(new OZ(1,1,1),new V$({name:"BackgroundCubeMaterial",uniforms:F9(zQ.backgroundCube.uniforms),vertexShader:zQ.backgroundCube.vertexShader,fragmentShader:zQ.backgroundCube.fragmentShader,side:j$,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(C,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(L9.copy(I.backgroundRotation),L9.x*=-1,L9.y*=-1,L9.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1)L9.y*=-1,L9.z*=-1;if(G.material.uniforms.envMap.value=A,G.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(z4.makeRotationFromEuler(L9)),G.material.toneMapped=T8.getTransfer(A.colorSpace)!==e8,X!==A||N!==A.version||F!==J.toneMapping)G.material.needsUpdate=!0,X=A,N=A.version,F=J.toneMapping;G.layers.enableAll(),B.unshift(G,G.geometry,G.material,0,0,null)}else if(A&&A.isTexture){if(Y===void 0)Y=new i8(new aQ(2,2),new V$({name:"BackgroundMaterial",uniforms:F9(zQ.background.uniforms),vertexShader:zQ.background.vertexShader,fragmentShader:zQ.background.fragmentShader,side:D6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(Y);if(Y.material.uniforms.t2D.value=A,Y.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,Y.material.toneMapped=T8.getTransfer(A.colorSpace)!==e8,A.matrixAutoUpdate===!0)A.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(A.matrix),X!==A||N!==A.version||F!==J.toneMapping)Y.material.needsUpdate=!0,X=A,N=A.version,F=J.toneMapping;Y.layers.enableAll(),B.unshift(Y,Y.geometry,Y.material,0,0,null)}}function O(B,I){B.getRGB(zK,fq(J)),Z.buffers.color.setClear(zK.r,zK.g,zK.b,I,U)}function z(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose(),Y=void 0}return{getClearColor:function(){return H},setClearColor:function(B,I=1){H.set(B),q=I,O(H,q)},getClearAlpha:function(){return q},setClearAlpha:function(B){q=B,O(H,q)},render:E,addToRenderList:L,dispose:z}}function k4(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=N(null),K=W,U=!1;function H(k,b,v,m,n){let r=!1,s=X(m,v,b);if(K!==s)K=s,Y(K.object);if(r=F(k,m,v,n),r)M(k,m,v,n);if(n!==null)$.update(n,J.ELEMENT_ARRAY_BUFFER);if(r||U){if(U=!1,I(k,b,v,m),n!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(n).buffer)}}function q(){return J.createVertexArray()}function Y(k){return J.bindVertexArray(k)}function G(k){return J.deleteVertexArray(k)}function X(k,b,v){let m=v.wireframe===!0,n=Z[k.id];if(n===void 0)n={},Z[k.id]=n;let r=n[b.id];if(r===void 0)r={},n[b.id]=r;let s=r[m];if(s===void 0)s=N(q()),r[m]=s;return s}function N(k){let b=[],v=[],m=[];for(let n=0;n<Q;n++)b[n]=0,v[n]=0,m[n]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:v,attributeDivisors:m,object:k,attributes:{},index:null}}function F(k,b,v,m){let n=K.attributes,r=b.attributes,s=0,J0=v.getAttributes();for(let a in J0)if(J0[a].location>=0){let w=n[a],W0=r[a];if(W0===void 0){if(a==="instanceMatrix"&&k.instanceMatrix)W0=k.instanceMatrix;if(a==="instanceColor"&&k.instanceColor)W0=k.instanceColor}if(w===void 0)return!0;if(w.attribute!==W0)return!0;if(W0&&w.data!==W0.data)return!0;s++}if(K.attributesNum!==s)return!0;if(K.index!==m)return!0;return!1}function M(k,b,v,m){let n={},r=b.attributes,s=0,J0=v.getAttributes();for(let a in J0)if(J0[a].location>=0){let w=r[a];if(w===void 0){if(a==="instanceMatrix"&&k.instanceMatrix)w=k.instanceMatrix;if(a==="instanceColor"&&k.instanceColor)w=k.instanceColor}let W0={};if(W0.attribute=w,w&&w.data)W0.data=w.data;n[a]=W0,s++}K.attributes=n,K.attributesNum=s,K.index=m}function E(){let k=K.newAttributes;for(let b=0,v=k.length;b<v;b++)k[b]=0}function L(k){O(k,0)}function O(k,b){let{newAttributes:v,enabledAttributes:m,attributeDivisors:n}=K;if(v[k]=1,m[k]===0)J.enableVertexAttribArray(k),m[k]=1;if(n[k]!==b)J.vertexAttribDivisor(k,b),n[k]=b}function z(){let{newAttributes:k,enabledAttributes:b}=K;for(let v=0,m=b.length;v<m;v++)if(b[v]!==k[v])J.disableVertexAttribArray(v),b[v]=0}function B(k,b,v,m,n,r,s){if(s===!0)J.vertexAttribIPointer(k,b,v,n,r);else J.vertexAttribPointer(k,b,v,m,n,r)}function I(k,b,v,m){E();let n=m.attributes,r=v.getAttributes(),s=b.defaultAttributeValues;for(let J0 in r){let a=r[J0];if(a.location>=0){let c=n[J0];if(c===void 0){if(J0==="instanceMatrix"&&k.instanceMatrix)c=k.instanceMatrix;if(J0==="instanceColor"&&k.instanceColor)c=k.instanceColor}if(c!==void 0){let{normalized:w,itemSize:W0}=c,R0=$.get(c);if(R0===void 0)continue;let{buffer:e,type:K0,bytesPerElement:Z0}=R0,M0=K0===J.INT||K0===J.UNSIGNED_INT||c.gpuType===aH;if(c.isInterleavedBufferAttribute){let q0=c.data,j0=q0.stride,u0=c.offset;if(q0.isInstancedInterleavedBuffer){for(let m0=0;m0<a.locationSize;m0++)O(a.location+m0,q0.meshPerAttribute);if(k.isInstancedMesh!==!0&&m._maxInstanceCount===void 0)m._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let m0=0;m0<a.locationSize;m0++)L(a.location+m0);J.bindBuffer(J.ARRAY_BUFFER,e);for(let m0=0;m0<a.locationSize;m0++)B(a.location+m0,W0/a.locationSize,K0,w,j0*Z0,(u0+W0/a.locationSize*m0)*Z0,M0)}else{if(c.isInstancedBufferAttribute){for(let q0=0;q0<a.locationSize;q0++)O(a.location+q0,c.meshPerAttribute);if(k.isInstancedMesh!==!0&&m._maxInstanceCount===void 0)m._maxInstanceCount=c.meshPerAttribute*c.count}else for(let q0=0;q0<a.locationSize;q0++)L(a.location+q0);J.bindBuffer(J.ARRAY_BUFFER,e);for(let q0=0;q0<a.locationSize;q0++)B(a.location+q0,W0/a.locationSize,K0,w,W0*Z0,W0/a.locationSize*q0*Z0,M0)}}else if(s!==void 0){let w=s[J0];if(w!==void 0)switch(w.length){case 2:J.vertexAttrib2fv(a.location,w);break;case 3:J.vertexAttrib3fv(a.location,w);break;case 4:J.vertexAttrib4fv(a.location,w);break;default:J.vertexAttrib1fv(a.location,w)}}}}z()}function A(){x();for(let k in Z){let b=Z[k];for(let v in b){let m=b[v];for(let n in m)G(m[n].object),delete m[n];delete b[v]}delete Z[k]}}function C(k){if(Z[k.id]===void 0)return;let b=Z[k.id];for(let v in b){let m=b[v];for(let n in m)G(m[n].object),delete m[n];delete b[v]}delete Z[k.id]}function P(k){for(let b in Z){let v=Z[b];if(v[k.id]===void 0)continue;let m=v[k.id];for(let n in m)G(m[n].object),delete m[n];delete v[k.id]}}function x(){if(D(),U=!0,K===W)return;K=W,Y(K.object)}function D(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:x,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:L,disableUnusedAttributes:z}}function C4(J,$,Q){let Z;function W(Y){Z=Y}function K(Y,G){J.drawArrays(Z,Y,G),Q.update(G,Z,1)}function U(Y,G,X){if(X===0)return;J.drawArraysInstanced(Z,Y,G,X),Q.update(G,Z,X)}function H(Y,G,X){if(X===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,Y,0,G,0,X);let F=0;for(let M=0;M<X;M++)F+=G[M];Q.update(F,Z,1)}function q(Y,G,X,N){if(X===0)return;let F=$.get("WEBGL_multi_draw");if(F===null)for(let M=0;M<Y.length;M++)U(Y[M],G[M],N[M]);else{F.multiDrawArraysInstancedWEBGL(Z,Y,0,G,0,N,0,X);let M=0;for(let E=0;E<X;E++)M+=G[E]*N[E];Q.update(M,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=U,this.renderMultiDraw=H,this.renderMultiDrawInstances=q}function P4(J,$,Q,Z){let W;function K(){if(W!==void 0)return W;if($.has("EXT_texture_filter_anisotropic")===!0){let P=$.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function U(P){if(P!==aJ&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(P){let x=P===AJ&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(P!==k6&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$J&&!x)return!1;return!0}function q(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let Y=Q.precision!==void 0?Q.precision:"highp",G=q(Y);if(G!==Y)console.warn("THREE.WebGLRenderer:",Y,"not supported, using",G,"instead."),Y=G;let X=Q.logarithmicDepthBuffer===!0,N=Q.reverseDepthBuffer===!0&&$.has("EXT_clip_control"),F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=J.getParameter(J.MAX_TEXTURE_SIZE),L=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),B=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=M>0,C=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:q,textureFormatReadable:U,textureTypeReadable:H,precision:Y,logarithmicDepthBuffer:X,reverseDepthBuffer:N,maxTextures:F,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:L,maxAttributes:O,maxVertexUniforms:z,maxVaryings:B,maxFragmentUniforms:I,vertexTextures:A,maxSamples:C}}function I4(J){let $=this,Q=null,Z=0,W=!1,K=!1,U=new JQ,H=new R8,q={value:null,needsUpdate:!1};this.uniform=q,this.numPlanes=0,this.numIntersection=0,this.init=function(X,N){let F=X.length!==0||N||Z!==0||W;return W=N,Z=X.length,F},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(X,N){Q=G(X,N,0)},this.setState=function(X,N,F){let{clippingPlanes:M,clipIntersection:E,clipShadows:L}=X,O=J.get(X);if(!W||M===null||M.length===0||K&&!L)if(K)G(null);else Y();else{let z=K?0:Z,B=z*4,I=O.clippingState||null;q.value=I,I=G(M,N,B,F);for(let A=0;A!==B;++A)I[A]=Q[A];O.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=z}};function Y(){if(q.value!==Q)q.value=Q,q.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function G(X,N,F,M){let E=X!==null?X.length:0,L=null;if(E!==0){if(L=q.value,M!==!0||L===null){let O=F+E*4,z=N.matrixWorldInverse;if(H.getNormalMatrix(z),L===null||L.length<O)L=new Float32Array(O);for(let B=0,I=F;B!==E;++B,I+=4)U.copy(X[B]).applyMatrix4(z,H),U.normal.toArray(L,I),L[I+3]=U.constant}q.value=L,q.needsUpdate=!0}return $.numPlanes=E,$.numIntersection=0,L}}function A4(J){let $=new WeakMap;function Q(U,H){if(H===X9)U.mapping=XZ;else if(H===d1)U.mapping=G9;return U}function Z(U){if(U&&U.isTexture){let H=U.mapping;if(H===X9||H===d1)if($.has(U)){let q=$.get(U).texture;return Q(q,U.mapping)}else{let q=U.image;if(q&&q.height>0){let Y=new uq(q.height);return Y.fromEquirectangularTexture(J,U),$.set(U,Y),U.addEventListener("dispose",W),Q(Y.texture,U.mapping)}else return null}}return U}function W(U){let H=U.target;H.removeEventListener("dispose",W);let q=$.get(H);if(q!==void 0)$.delete(H),q.dispose()}function K(){$=new WeakMap}return{get:Z,dispose:K}}var AZ=4,qL=[0.125,0.215,0.35,0.446,0.526,0.582],O9=20,tq=new VQ,YL=new K8,eq=null,JY=0,$Y=0,QY=!1,M9=(1+Math.sqrt(5))/2,IZ=1/M9,GL=[new i(-M9,IZ,0),new i(M9,IZ,0),new i(-IZ,0,M9),new i(IZ,0,M9),new i(0,M9,-IZ),new i(0,M9,IZ),new i(-1,1,-1),new i(1,1,-1),new i(-1,1,1),new i(1,1,1)],T4=new i;class WY{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,$=0,Q=0.1,Z=100,W={}){let{size:K=256,position:U=T4}=W;eq=this._renderer.getRenderTarget(),JY=this._renderer.getActiveCubeFace(),$Y=this._renderer.getActiveMipmapLevel(),QY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,H,U),$>0)this._blur(H,0,0,$);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=FL(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=NL(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(eq,JY,$Y),this._renderer.xr.enabled=QY,J.scissorTest=!1,DK(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===XZ||J.mapping===G9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);eq=this._renderer.getRenderTarget(),JY=this._renderer.getActiveCubeFace(),$Y=this._renderer.getActiveMipmapLevel(),QY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:gJ,minFilter:gJ,generateMipmaps:!1,type:AJ,format:aJ,colorSpace:XJ,depthBuffer:!1},Z=XL(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=XL(J,$,Q);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S4(W)),this._blurMaterial=j4(W,J,$)}return Z}_compileMaterial(J){let $=new i8(this._lodPlanes[0],J);this._renderer.compile($,tq)}_sceneToCubeUV(J,$,Q,Z,W){let H=new IJ(90,1,$,Q),q=[1,-1,1,1,1,1],Y=[1,1,1,-1,-1,-1],G=this._renderer,X=G.autoClear,N=G.toneMapping;G.getClearColor(YL),G.toneMapping=lQ,G.autoClear=!1;let F=new OQ({name:"PMREM.Background",side:j$,depthWrite:!1,depthTest:!1}),M=new i8(new OZ,F),E=!1,L=J.background;if(L){if(L.isColor)F.color.copy(L),J.background=null,E=!0}else F.color.copy(YL),E=!0;for(let O=0;O<6;O++){let z=O%3;if(z===0)H.up.set(0,q[O],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+Y[O],W.y,W.z);else if(z===1)H.up.set(0,0,q[O]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+Y[O],W.z);else H.up.set(0,q[O],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+Y[O]);let B=this._cubeSize;if(DK(Z,z*B,O>2?B:0,B,B),G.setRenderTarget(Z),E)G.render(M,H);G.render(J,H)}M.geometry.dispose(),M.material.dispose(),G.toneMapping=N,G.autoClear=X,J.background=L}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===XZ||J.mapping===G9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=FL();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=NL();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=new i8(this._lodPlanes[0],W),U=W.uniforms;U.envMap.value=J;let H=this._cubeSize;DK($,0,0,3*H,2*H),Q.setRenderTarget($),Q.render(K,tq)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),U=GL[(Z-W-1)%GL.length];this._blur(J,W-1,W,K,U)}$.autoClear=Q}_blur(J,$,Q,Z,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,$,Q,Z,"latitudinal",W),this._halfBlur(K,J,Q,Q,Z,"longitudinal",W)}_halfBlur(J,$,Q,Z,W,K,U){let H=this._renderer,q=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let Y=3,G=new i8(this._lodPlanes[Z],q),X=q.uniforms,N=this._sizeLods[Q]-1,F=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*O9-1),M=W/F,E=isFinite(W)?1+Math.floor(Y*M):O9;if(E>O9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${O9}`);let L=[],O=0;for(let C=0;C<O9;++C){let P=C/M,x=Math.exp(-P*P/2);if(L.push(x),C===0)O+=x;else if(C<E)O+=2*x}for(let C=0;C<L.length;C++)L[C]=L[C]/O;if(X.envMap.value=J.texture,X.samples.value=E,X.weights.value=L,X.latitudinal.value=K==="latitudinal",U)X.poleAxis.value=U;let{_lodMax:z}=this;X.dTheta.value=F,X.mipInt.value=z-Q;let B=this._sizeLods[Z],I=3*B*(Z>z-AZ?Z-z+AZ:0),A=4*(this._cubeSize-B);DK($,I,A,3*B,2*B),H.setRenderTarget($),H.render(G,tq)}}function S4(J){let $=[],Q=[],Z=[],W=J,K=J-AZ+1+qL.length;for(let U=0;U<K;U++){let H=Math.pow(2,W);Q.push(H);let q=1/H;if(U>J-AZ)q=qL[U-J+AZ-1];else if(U===0)q=0;Z.push(q);let Y=1/(H-2),G=-Y,X=1+Y,N=[G,G,X,G,X,X,G,G,X,X,G,X],F=6,M=6,E=3,L=2,O=1,z=new Float32Array(E*M*F),B=new Float32Array(L*M*F),I=new Float32Array(O*M*F);for(let C=0;C<F;C++){let P=C%3*2/3-1,x=C>2?0:-1,D=[P,x,0,P+0.6666666666666666,x,0,P+0.6666666666666666,x+1,0,P,x,0,P+0.6666666666666666,x+1,0,P,x+1,0];z.set(D,E*M*C),B.set(N,L*M*C);let k=[C,C,C,C,C,C];I.set(k,O*M*C)}let A=new uJ;if(A.setAttribute("position",new GJ(z,E)),A.setAttribute("uv",new GJ(B,L)),A.setAttribute("faceIndex",new GJ(I,O)),$.push(A),W>AZ)W--}return{lodPlanes:$,sizeLods:Q,sigmas:Z}}function XL(J,$,Q){let Z=new w$(J,$,Q);return Z.texture.mapping=_7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function DK(J,$,Q,Z,W){J.viewport.set($,Q,Z,W),J.scissor.set($,Q,Z,W)}function j4(J,$,Q){let Z=new Float32Array(O9),W=new i(0,1,0);return new V$({name:"SphericalGaussianBlur",defines:{n:O9,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:UY(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function NL(){return new V$({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:UY(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function FL(){return new V$({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:UY(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function UY(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w4(J){let $=new WeakMap,Q=null;function Z(H){if(H&&H.isTexture){let q=H.mapping,Y=q===X9||q===d1,G=q===XZ||q===G9;if(Y||G){let X=$.get(H),N=X!==void 0?X.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==N){if(Q===null)Q=new WY(J);return X=Y?Q.fromEquirectangular(H,X):Q.fromCubemap(H,X),X.texture.pmremVersion=H.pmremVersion,$.set(H,X),X.texture}else if(X!==void 0)return X.texture;else{let F=H.image;if(Y&&F&&F.height>0||G&&F&&W(F)){if(Q===null)Q=new WY(J);return X=Y?Q.fromEquirectangular(H):Q.fromCubemap(H),X.texture.pmremVersion=H.pmremVersion,$.set(H,X),H.addEventListener("dispose",K),X.texture}else return null}}}return H}function W(H){let q=0,Y=6;for(let G=0;G<Y;G++)if(H[G]!==void 0)q++;return q===Y}function K(H){let q=H.target;q.removeEventListener("dispose",K);let Y=$.get(q);if(Y!==void 0)$.delete(q),Y.dispose()}function U(){if($=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:U}}function _4(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return $[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)q9("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function x4(J,$,Q,Z){let W={},K=new WeakMap;function U(X){let N=X.target;if(N.index!==null)$.remove(N.index);for(let M in N.attributes)$.remove(N.attributes[M]);N.removeEventListener("dispose",U),delete W[N.id];let F=K.get(N);if(F)$.remove(F),K.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Q.memory.geometries--}function H(X,N){if(W[N.id]===!0)return N;return N.addEventListener("dispose",U),W[N.id]=!0,Q.memory.geometries++,N}function q(X){let N=X.attributes;for(let F in N)$.update(N[F],J.ARRAY_BUFFER)}function Y(X){let N=[],F=X.index,M=X.attributes.position,E=0;if(F!==null){let z=F.array;E=F.version;for(let B=0,I=z.length;B<I;B+=3){let A=z[B+0],C=z[B+1],P=z[B+2];N.push(A,C,C,P,P,A)}}else if(M!==void 0){let z=M.array;E=M.version;for(let B=0,I=z.length/3-1;B<I;B+=3){let A=B+0,C=B+1,P=B+2;N.push(A,C,C,P,P,A)}}else return;let L=new((yq(N))?ZK:QK)(N,1);L.version=E;let O=K.get(X);if(O)$.remove(O);K.set(X,L)}function G(X){let N=K.get(X);if(N){let F=X.index;if(F!==null){if(N.version<F.version)Y(X)}}else Y(X);return K.get(X)}return{get:H,update:q,getWireframeAttribute:G}}function y4(J,$,Q){let Z;function W(N){Z=N}let K,U;function H(N){K=N.type,U=N.bytesPerElement}function q(N,F){J.drawElements(Z,F,K,N*U),Q.update(F,Z,1)}function Y(N,F,M){if(M===0)return;J.drawElementsInstanced(Z,F,K,N*U,M),Q.update(F,Z,M)}function G(N,F,M){if(M===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,F,0,K,N,0,M);let L=0;for(let O=0;O<M;O++)L+=F[O];Q.update(L,Z,1)}function X(N,F,M,E){if(M===0)return;let L=$.get("WEBGL_multi_draw");if(L===null)for(let O=0;O<N.length;O++)Y(N[O]/U,F[O],E[O]);else{L.multiDrawElementsInstancedWEBGL(Z,F,0,K,N,0,E,0,M);let O=0;for(let z=0;z<M;z++)O+=F[z]*E[z];Q.update(O,Z,1)}}this.setMode=W,this.setIndex=H,this.render=q,this.renderInstances=Y,this.renderMultiDraw=G,this.renderMultiDrawInstances=X}function b4(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,U,H){switch(Q.calls++,U){case J.TRIANGLES:Q.triangles+=H*(K/3);break;case J.LINES:Q.lines+=H*(K/2);break;case J.LINE_STRIP:Q.lines+=H*(K-1);break;case J.LINE_LOOP:Q.lines+=H*K;break;case J.POINTS:Q.points+=H*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",U);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function v4(J,$,Q){let Z=new WeakMap,W=new v8;function K(U,H,q){let Y=U.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,X=G!==void 0?G.length:0,N=Z.get(H);if(N===void 0||N.count!==X){let D=function(){P.dispose(),Z.delete(H),H.removeEventListener("dispose",D)};if(N!==void 0)N.texture.dispose();let F=H.morphAttributes.position!==void 0,M=H.morphAttributes.normal!==void 0,E=H.morphAttributes.color!==void 0,L=H.morphAttributes.position||[],O=H.morphAttributes.normal||[],z=H.morphAttributes.color||[],B=0;if(F===!0)B=1;if(M===!0)B=2;if(E===!0)B=3;let I=H.attributes.position.count*B,A=1;if(I>$.maxTextureSize)A=Math.ceil(I/$.maxTextureSize),I=$.maxTextureSize;let C=new Float32Array(I*A*4*X),P=new $K(C,I,A,X);P.type=$J,P.needsUpdate=!0;let x=B*4;for(let k=0;k<X;k++){let b=L[k],v=O[k],m=z[k],n=I*A*4*k;for(let r=0;r<b.count;r++){let s=r*x;if(F===!0)W.fromBufferAttribute(b,r),C[n+s+0]=W.x,C[n+s+1]=W.y,C[n+s+2]=W.z,C[n+s+3]=0;if(M===!0)W.fromBufferAttribute(v,r),C[n+s+4]=W.x,C[n+s+5]=W.y,C[n+s+6]=W.z,C[n+s+7]=0;if(E===!0)W.fromBufferAttribute(m,r),C[n+s+8]=W.x,C[n+s+9]=W.y,C[n+s+10]=W.z,C[n+s+11]=m.itemSize===4?W.w:1}}N={count:X,texture:P,size:new e0(I,A)},Z.set(H,N),H.addEventListener("dispose",D)}if(U.isInstancedMesh===!0&&U.morphTexture!==null)q.getUniforms().setValue(J,"morphTexture",U.morphTexture,Q);else{let F=0;for(let E=0;E<Y.length;E++)F+=Y[E];let M=H.morphTargetsRelative?1:1-F;q.getUniforms().setValue(J,"morphTargetBaseInfluence",M),q.getUniforms().setValue(J,"morphTargetInfluences",Y)}q.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Q),q.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function h4(J,$,Q,Z){let W=new WeakMap;function K(q){let Y=Z.render.frame,G=q.geometry,X=$.get(q,G);if(W.get(X)!==Y)$.update(X),W.set(X,Y);if(q.isInstancedMesh){if(q.hasEventListener("dispose",H)===!1)q.addEventListener("dispose",H);if(W.get(q)!==Y){if(Q.update(q.instanceMatrix,J.ARRAY_BUFFER),q.instanceColor!==null)Q.update(q.instanceColor,J.ARRAY_BUFFER);W.set(q,Y)}}if(q.isSkinnedMesh){let N=q.skeleton;if(W.get(N)!==Y)N.update(),W.set(N,Y)}return X}function U(){W=new WeakMap}function H(q){let Y=q.target;if(Y.removeEventListener("dispose",H),Q.remove(Y.instanceMatrix),Y.instanceColor!==null)Q.remove(Y.instanceColor)}return{update:K,dispose:U}}var _L=new RJ,LL=new GK(1,1),xL=new $K,yL=new hq,bL=new g7,EL=[],ML=[],OL=new Float32Array(16),BL=new Float32Array(9),RL=new Float32Array(4);function TZ(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let W=$*Q,K=EL[W];if(K===void 0)K=new Float32Array(W),EL[W]=K;if($!==0){Z.toArray(K,0);for(let U=1,H=0;U!==$;++U)H+=Q,J[U].toArray(K,H)}return K}function TJ(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function SJ(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function CK(J,$){let Q=ML[$];if(Q===void 0)Q=new Int32Array($),ML[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function f4(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function g4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(TJ(Q,$))return;J.uniform2fv(this.addr,$),SJ(Q,$)}}function u4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(TJ(Q,$))return;J.uniform3fv(this.addr,$),SJ(Q,$)}}function p4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(TJ(Q,$))return;J.uniform4fv(this.addr,$),SJ(Q,$)}}function m4(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(TJ(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),SJ(Q,$)}else{if(TJ(Q,Z))return;RL.set(Z),J.uniformMatrix2fv(this.addr,!1,RL),SJ(Q,Z)}}function d4(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(TJ(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),SJ(Q,$)}else{if(TJ(Q,Z))return;BL.set(Z),J.uniformMatrix3fv(this.addr,!1,BL),SJ(Q,Z)}}function c4(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(TJ(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),SJ(Q,$)}else{if(TJ(Q,Z))return;OL.set(Z),J.uniformMatrix4fv(this.addr,!1,OL),SJ(Q,Z)}}function l4(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function o4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(TJ(Q,$))return;J.uniform2iv(this.addr,$),SJ(Q,$)}}function s4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(TJ(Q,$))return;J.uniform3iv(this.addr,$),SJ(Q,$)}}function n4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(TJ(Q,$))return;J.uniform4iv(this.addr,$),SJ(Q,$)}}function i4(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function a4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(TJ(Q,$))return;J.uniform2uiv(this.addr,$),SJ(Q,$)}}function r4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(TJ(Q,$))return;J.uniform3uiv(this.addr,$),SJ(Q,$)}}function t4(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(TJ(Q,$))return;J.uniform4uiv(this.addr,$),SJ(Q,$)}}function e4(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)LL.compareFunction=wq,K=LL;else K=_L;Q.setTexture2D($||K,W)}function Jk(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D($||yL,W)}function $k(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTextureCube($||bL,W)}function Qk(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray($||xL,W)}function Zk(J){switch(J){case 5126:return f4;case 35664:return g4;case 35665:return u4;case 35666:return p4;case 35674:return m4;case 35675:return d4;case 35676:return c4;case 5124:case 35670:return l4;case 35667:case 35671:return o4;case 35668:case 35672:return s4;case 35669:case 35673:return n4;case 5125:return i4;case 36294:return a4;case 36295:return r4;case 36296:return t4;case 35678:case 36198:case 36298:case 36306:case 35682:return e4;case 35679:case 36299:case 36307:return Jk;case 35680:case 36300:case 36308:case 36293:return $k;case 36289:case 36303:case 36311:case 36292:return Qk}}function Wk(J,$){J.uniform1fv(this.addr,$)}function Kk(J,$){let Q=TZ($,this.size,2);J.uniform2fv(this.addr,Q)}function Uk(J,$){let Q=TZ($,this.size,3);J.uniform3fv(this.addr,Q)}function Hk(J,$){let Q=TZ($,this.size,4);J.uniform4fv(this.addr,Q)}function qk(J,$){let Q=TZ($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function Yk(J,$){let Q=TZ($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function Gk(J,$){let Q=TZ($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function Xk(J,$){J.uniform1iv(this.addr,$)}function Nk(J,$){J.uniform2iv(this.addr,$)}function Fk(J,$){J.uniform3iv(this.addr,$)}function Lk(J,$){J.uniform4iv(this.addr,$)}function Ek(J,$){J.uniform1uiv(this.addr,$)}function Mk(J,$){J.uniform2uiv(this.addr,$)}function Ok(J,$){J.uniform3uiv(this.addr,$)}function Bk(J,$){J.uniform4uiv(this.addr,$)}function Rk(J,$,Q){let Z=this.cache,W=$.length,K=CK(Q,W);if(!TJ(Z,K))J.uniform1iv(this.addr,K),SJ(Z,K);for(let U=0;U!==W;++U)Q.setTexture2D($[U]||_L,K[U])}function Vk(J,$,Q){let Z=this.cache,W=$.length,K=CK(Q,W);if(!TJ(Z,K))J.uniform1iv(this.addr,K),SJ(Z,K);for(let U=0;U!==W;++U)Q.setTexture3D($[U]||yL,K[U])}function zk(J,$,Q){let Z=this.cache,W=$.length,K=CK(Q,W);if(!TJ(Z,K))J.uniform1iv(this.addr,K),SJ(Z,K);for(let U=0;U!==W;++U)Q.setTextureCube($[U]||bL,K[U])}function Dk(J,$,Q){let Z=this.cache,W=$.length,K=CK(Q,W);if(!TJ(Z,K))J.uniform1iv(this.addr,K),SJ(Z,K);for(let U=0;U!==W;++U)Q.setTexture2DArray($[U]||xL,K[U])}function kk(J){switch(J){case 5126:return Wk;case 35664:return Kk;case 35665:return Uk;case 35666:return Hk;case 35674:return qk;case 35675:return Yk;case 35676:return Gk;case 5124:case 35670:return Xk;case 35667:case 35671:return Nk;case 35668:case 35672:return Fk;case 35669:case 35673:return Lk;case 5125:return Ek;case 36294:return Mk;case 36295:return Ok;case 36296:return Bk;case 35678:case 36198:case 36298:case 36306:case 35682:return Rk;case 35679:case 36299:case 36307:return Vk;case 35680:case 36300:case 36308:case 36293:return zk;case 36289:case 36303:case 36311:case 36292:return Dk}}class vL{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=Zk($.type)}}class hL{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=kk($.type)}}class fL{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let U=Z[W];U.setValue(J,$[U.id],Q)}}}var ZY=/(\w+)(\])?(\[|\.)?/g;function VL(J,$){J.seq.push($),J.map[$.id]=$}function Ck(J,$,Q){let Z=J.name,W=Z.length;ZY.lastIndex=0;while(!0){let K=ZY.exec(Z),U=ZY.lastIndex,H=K[1],q=K[2]==="]",Y=K[3];if(q)H=H|0;if(Y===void 0||Y==="["&&U+2===W){VL(Q,Y===void 0?new vL(H,J,$):new hL(H,J,$));break}else{let X=Q.map[H];if(X===void 0)X=new fL(H),VL(Q,X);Q=X}}}class t7{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let W=J.getActiveUniform($,Z),K=J.getUniformLocation($,W.name);Ck(W,K,this)}}setValue(J,$,Q,Z){let W=this.map[$];if(W!==void 0)W.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let W=0,K=$.length;W!==K;++W){let U=$[W],H=Q[U.id];if(H.needsUpdate!==!1)U.setValue(J,H.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in $)Q.push(K)}return Q}}function zL(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var Pk=37297,Ik=0;function Ak(J,$){let Q=J.split(`
`),Z=[],W=Math.max($-6,0),K=Math.min($+6,Q.length);for(let U=W;U<K;U++){let H=U+1;Z.push(`${H===$?">":" "} ${H}: ${Q[U]}`)}return Z.join(`
`)}var DL=new R8;function Tk(J){T8._getMatrix(DL,T8.workingColorSpace,J);let $=`mat3( ${DL.elements.map((Q)=>Q.toFixed(4))} )`;switch(T8.getTransfer(J)){case jq:return[$,"LinearTransferOETF"];case e8:return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function kL(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=J.getShaderInfoLog($).trim();if(Z&&W==="")return"";let K=/ERROR: 0:(\d+)/.exec(W);if(K){let U=parseInt(K[1]);return Q.toUpperCase()+`

`+W+`

`+Ak(J.getShaderSource($),U)}else return W}function Sk(J,$){let Q=Tk($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}function jk(J,$){let Q;switch($){case IF:Q="Linear";break;case AF:Q="Reinhard";break;case TF:Q="Cineon";break;case m1:Q="ACESFilmic";break;case jF:Q="AgX";break;case wF:Q="Neutral";break;case SF:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),Q="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var kK=new i;function wk(){T8.getLuminanceCoefficients(kK);let J=kK.x.toFixed(4),$=kK.y.toFixed(4),Q=kK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function _k(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(r7).join(`
`)}function xk(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function yk(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib($,W),U=K.name,H=1;if(K.type===J.FLOAT_MAT2)H=2;if(K.type===J.FLOAT_MAT3)H=3;if(K.type===J.FLOAT_MAT4)H=4;Q[U]={type:K.type,location:J.getAttribLocation($,U),locationSize:H}}return Q}function r7(J){return J!==""}function CL(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function PL(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var bk=/^[ \t]*#include +<([\w\d./]+)>/gm;function KY(J){return J.replace(bk,hk)}var vk=new Map;function hk(J,$){let Q=z8[$];if(Q===void 0){let Z=vk.get($);if(Z!==void 0)Q=z8[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw new Error("Can not resolve #include <"+$+">")}return KY(Q)}var fk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function IL(J){return J.replace(fk,gk)}function gk(J,$,Q,Z){let W="";for(let K=parseInt($);K<parseInt(Q);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function AL(J){let $=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}function uk(J){let $="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===oH)$="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===QF)$="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===EQ)$="SHADOWMAP_TYPE_VSM";return $}function pk(J){let $="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case XZ:case G9:$="ENVMAP_TYPE_CUBE";break;case _7:$="ENVMAP_TYPE_CUBE_UV";break}return $}function mk(J){let $="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case G9:$="ENVMAP_MODE_REFRACTION";break}return $}function dk(J){let $="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case kF:$="ENVMAP_BLENDING_MULTIPLY";break;case CF:$="ENVMAP_BLENDING_MIX";break;case PF:$="ENVMAP_BLENDING_ADD";break}return $}function ck(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function lk(J,$,Q,Z){let W=J.getContext(),K=Q.defines,U=Q.vertexShader,H=Q.fragmentShader,q=uk(Q),Y=pk(Q),G=mk(Q),X=dk(Q),N=ck(Q),F=_k(Q),M=xk(K),E=W.createProgram(),L,O,z=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(L=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M].filter(r7).join(`
`),L.length>0)L+=`
`;if(O=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M].filter(r7).join(`
`),O.length>0)O+=`
`}else L=[AL(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+q:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(r7).join(`
`),O=[AL(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+Y:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+X:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor||Q.batchingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+q:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==lQ?"#define TONE_MAPPING":"",Q.toneMapping!==lQ?z8.tonemapping_pars_fragment:"",Q.toneMapping!==lQ?jk("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",z8.colorspace_pars_fragment,Sk("linearToOutputTexel",Q.outputColorSpace),wk(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(r7).join(`
`);if(U=KY(U),U=CL(U,Q),U=PL(U,Q),H=KY(H),H=CL(H,Q),H=PL(H,Q),U=IL(U),H=IL(H),Q.isRawShaderMaterial!==!0)z=`#version 300 es
`,L=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,O=["#define varying in",Q.glslVersion===_q?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===_q?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let B=z+L+U,I=z+O+H,A=zL(W,W.VERTEX_SHADER,B),C=zL(W,W.FRAGMENT_SHADER,I);if(W.attachShader(E,A),W.attachShader(E,C),Q.index0AttributeName!==void 0)W.bindAttribLocation(E,0,Q.index0AttributeName);else if(Q.morphTargets===!0)W.bindAttribLocation(E,0,"position");W.linkProgram(E);function P(b){if(J.debug.checkShaderErrors){let v=W.getProgramInfoLog(E).trim(),m=W.getShaderInfoLog(A).trim(),n=W.getShaderInfoLog(C).trim(),r=!0,s=!0;if(W.getProgramParameter(E,W.LINK_STATUS)===!1)if(r=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,E,A,C);else{let J0=kL(W,A,"vertex"),a=kL(W,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(E,W.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+v+`
`+J0+`
`+a)}else if(v!=="")console.warn("THREE.WebGLProgram: Program Info Log:",v);else if(m===""||n==="")s=!1;if(s)b.diagnostics={runnable:r,programLog:v,vertexShader:{log:m,prefix:L},fragmentShader:{log:n,prefix:O}}}W.deleteShader(A),W.deleteShader(C),x=new t7(W,E),D=yk(W,E)}let x;this.getUniforms=function(){if(x===void 0)P(this);return x};let D;this.getAttributes=function(){if(D===void 0)P(this);return D};let k=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(k===!1)k=W.getProgramParameter(E,Pk);return k},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(E),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=Ik++,this.cacheKey=$,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=C,this}var ok=0;class gL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:Q}=J,Z=this._getShaderStage($),W=this._getShaderStage(Q),K=this._getShaderCacheForMaterial(J);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new uL(J),$.set(J,Q);return Q}}class uL{constructor(J){this.id=ok++,this.code=J,this.usedTimes=0}}function sk(J,$,Q,Z,W,K,U){let H=new f7,q=new gL,Y=new Set,G=[],X=W.logarithmicDepthBuffer,N=W.vertexTextures,F=W.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){if(Y.add(D),D===0)return"uv";return`uv${D}`}function L(D,k,b,v,m){let n=v.fog,r=m.geometry,s=D.isMeshStandardMaterial?v.environment:null,J0=(D.isMeshStandardMaterial?Q:$).get(D.envMap||s),a=!!J0&&J0.mapping===_7?J0.image.height:null,c=M[D.type];if(D.precision!==null){if(F=W.getMaxPrecision(D.precision),F!==D.precision)console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",F,"instead.")}let w=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,W0=w!==void 0?w.length:0,R0=0;if(r.morphAttributes.position!==void 0)R0=1;if(r.morphAttributes.normal!==void 0)R0=2;if(r.morphAttributes.color!==void 0)R0=3;let e,K0,Z0,M0;if(c){let b0=zQ[c];e=b0.vertexShader,K0=b0.fragmentShader}else e=D.vertexShader,K0=D.fragmentShader,q.update(D),Z0=q.getVertexShaderID(D),M0=q.getFragmentShaderID(D);let q0=J.getRenderTarget(),j0=J.state.buffers.depth.getReversed(),u0=m.isInstancedMesh===!0,m0=m.isBatchedMesh===!0,Y8=!!D.map,J8=!!D.matcap,u=!!J0,L8=!!D.aoMap,D0=!!D.lightMap,p0=!!D.bumpMap,o=!!D.normalMap,a0=!!D.displacementMap,S0=!!D.emissiveMap,t0=!!D.metalnessMap,N8=!!D.roughnessMap,S8=D.anisotropy>0,g=D.clearcoat>0,T=D.dispersion>0,$0=D.iridescence>0,Y0=D.sheen>0,X0=D.transmission>0,H0=S8&&!!D.anisotropyMap,f0=g&&!!D.clearcoatMap,I0=g&&!!D.clearcoatNormalMap,d0=g&&!!D.clearcoatRoughnessMap,T0=$0&&!!D.iridescenceMap,V0=$0&&!!D.iridescenceThicknessMap,w0=Y0&&!!D.sheenColorMap,n0=Y0&&!!D.sheenRoughnessMap,_0=!!D.specularMap,C0=!!D.specularColorMap,U8=!!D.specularIntensityMap,y=X0&&!!D.transmissionMap,k0=X0&&!!D.thicknessMap,A0=!!D.gradientMap,y0=!!D.alphaMap,z0=D.alphaTest>0,L0=!!D.alphaHash,g0=!!D.extensions,$8=lQ;if(D.toneMapped){if(q0===null||q0.isXRRenderTarget===!0)$8=J.toneMapping}let _8={shaderID:c,shaderType:D.type,shaderName:D.name,vertexShader:e,fragmentShader:K0,defines:D.defines,customVertexShaderID:Z0,customFragmentShaderID:M0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:F,batching:m0,batchingColor:m0&&m._colorsTexture!==null,instancing:u0,instancingColor:u0&&m.instanceColor!==null,instancingMorph:u0&&m.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:q0===null?J.outputColorSpace:q0.isXRRenderTarget===!0?q0.texture.colorSpace:XJ,alphaToCoverage:!!D.alphaToCoverage,map:Y8,matcap:J8,envMap:u,envMapMode:u&&J0.mapping,envMapCubeUVHeight:a,aoMap:L8,lightMap:D0,bumpMap:p0,normalMap:o,displacementMap:N&&a0,emissiveMap:S0,normalMapObjectSpace:o&&D.normalMapType===pF,normalMapTangentSpace:o&&D.normalMapType===uF,metalnessMap:t0,roughnessMap:N8,anisotropy:S8,anisotropyMap:H0,clearcoat:g,clearcoatMap:f0,clearcoatNormalMap:I0,clearcoatRoughnessMap:d0,dispersion:T,iridescence:$0,iridescenceMap:T0,iridescenceThicknessMap:V0,sheen:Y0,sheenColorMap:w0,sheenRoughnessMap:n0,specularMap:_0,specularColorMap:C0,specularIntensityMap:U8,transmission:X0,transmissionMap:y,thicknessMap:k0,gradientMap:A0,opaque:D.transparent===!1&&D.blending===j7&&D.alphaToCoverage===!1,alphaMap:y0,alphaTest:z0,alphaHash:L0,combine:D.combine,mapUv:Y8&&E(D.map.channel),aoMapUv:L8&&E(D.aoMap.channel),lightMapUv:D0&&E(D.lightMap.channel),bumpMapUv:p0&&E(D.bumpMap.channel),normalMapUv:o&&E(D.normalMap.channel),displacementMapUv:a0&&E(D.displacementMap.channel),emissiveMapUv:S0&&E(D.emissiveMap.channel),metalnessMapUv:t0&&E(D.metalnessMap.channel),roughnessMapUv:N8&&E(D.roughnessMap.channel),anisotropyMapUv:H0&&E(D.anisotropyMap.channel),clearcoatMapUv:f0&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:I0&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:d0&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:T0&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:V0&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:n0&&E(D.sheenRoughnessMap.channel),specularMapUv:_0&&E(D.specularMap.channel),specularColorMapUv:C0&&E(D.specularColorMap.channel),specularIntensityMapUv:U8&&E(D.specularIntensityMap.channel),transmissionMapUv:y&&E(D.transmissionMap.channel),thicknessMapUv:k0&&E(D.thicknessMap.channel),alphaMapUv:y0&&E(D.alphaMap.channel),vertexTangents:!!r.attributes.tangent&&(o||S8),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!r.attributes.uv&&(Y8||y0),fog:!!n,useFog:D.fog===!0,fogExp2:!!n&&n.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:X,reverseDepthBuffer:j0,skinning:m.isSkinnedMesh===!0,morphTargets:r.morphAttributes.position!==void 0,morphNormals:r.morphAttributes.normal!==void 0,morphColors:r.morphAttributes.color!==void 0,morphTargetsCount:W0,morphTextureStride:R0,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:U.numPlanes,numClipIntersection:U.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&b.length>0,shadowMapType:J.shadowMap.type,toneMapping:$8,decodeVideoTexture:Y8&&D.map.isVideoTexture===!0&&T8.getTransfer(D.map.colorSpace)===e8,decodeVideoTextureEmissive:S0&&D.emissiveMap.isVideoTexture===!0&&T8.getTransfer(D.emissiveMap.colorSpace)===e8,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===VJ,flipSided:D.side===j$,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:g0&&D.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(g0&&D.extensions.multiDraw===!0||m0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return _8.vertexUv1s=Y.has(1),_8.vertexUv2s=Y.has(2),_8.vertexUv3s=Y.has(3),Y.clear(),_8}function O(D){let k=[];if(D.shaderID)k.push(D.shaderID);else k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let b in D.defines)k.push(b),k.push(D.defines[b]);if(D.isRawShaderMaterial===!1)z(k,D),B(k,D),k.push(J.outputColorSpace);return k.push(D.customProgramCacheKey),k.join()}function z(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function B(D,k){if(H.disableAll(),k.supportsVertexTextures)H.enable(0);if(k.instancing)H.enable(1);if(k.instancingColor)H.enable(2);if(k.instancingMorph)H.enable(3);if(k.matcap)H.enable(4);if(k.envMap)H.enable(5);if(k.normalMapObjectSpace)H.enable(6);if(k.normalMapTangentSpace)H.enable(7);if(k.clearcoat)H.enable(8);if(k.iridescence)H.enable(9);if(k.alphaTest)H.enable(10);if(k.vertexColors)H.enable(11);if(k.vertexAlphas)H.enable(12);if(k.vertexUv1s)H.enable(13);if(k.vertexUv2s)H.enable(14);if(k.vertexUv3s)H.enable(15);if(k.vertexTangents)H.enable(16);if(k.anisotropy)H.enable(17);if(k.alphaHash)H.enable(18);if(k.batching)H.enable(19);if(k.dispersion)H.enable(20);if(k.batchingColor)H.enable(21);if(k.gradientMap)H.enable(22);if(D.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.reverseDepthBuffer)H.enable(4);if(k.skinning)H.enable(5);if(k.morphTargets)H.enable(6);if(k.morphNormals)H.enable(7);if(k.morphColors)H.enable(8);if(k.premultipliedAlpha)H.enable(9);if(k.shadowMapEnabled)H.enable(10);if(k.doubleSided)H.enable(11);if(k.flipSided)H.enable(12);if(k.useDepthPacking)H.enable(13);if(k.dithering)H.enable(14);if(k.transmission)H.enable(15);if(k.sheen)H.enable(16);if(k.opaque)H.enable(17);if(k.pointsUvs)H.enable(18);if(k.decodeVideoTexture)H.enable(19);if(k.decodeVideoTextureEmissive)H.enable(20);if(k.alphaToCoverage)H.enable(21);D.push(H.mask)}function I(D){let k=M[D.type],b;if(k){let v=zQ[k];b=WK.clone(v.uniforms)}else b=D.uniforms;return b}function A(D,k){let b;for(let v=0,m=G.length;v<m;v++){let n=G[v];if(n.cacheKey===k){b=n,++b.usedTimes;break}}if(b===void 0)b=new lk(J,k,D,K),G.push(b);return b}function C(D){if(--D.usedTimes===0){let k=G.indexOf(D);G[k]=G[G.length-1],G.pop(),D.destroy()}}function P(D){q.remove(D)}function x(){q.dispose()}return{getParameters:L,getProgramCacheKey:O,getUniforms:I,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:G,dispose:x}}function nk(){let J=new WeakMap;function $(U){return J.has(U)}function Q(U){let H=J.get(U);if(H===void 0)H={},J.set(U,H);return H}function Z(U){J.delete(U)}function W(U,H,q){J.get(U)[H]=q}function K(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:W,dispose:K}}function ik(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function TL(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function SL(){let J=[],$=0,Q=[],Z=[],W=[];function K(){$=0,Q.length=0,Z.length=0,W.length=0}function U(X,N,F,M,E,L){let O=J[$];if(O===void 0)O={id:X.id,object:X,geometry:N,material:F,groupOrder:M,renderOrder:X.renderOrder,z:E,group:L},J[$]=O;else O.id=X.id,O.object=X,O.geometry=N,O.material=F,O.groupOrder=M,O.renderOrder=X.renderOrder,O.z=E,O.group=L;return $++,O}function H(X,N,F,M,E,L){let O=U(X,N,F,M,E,L);if(F.transmission>0)Z.push(O);else if(F.transparent===!0)W.push(O);else Q.push(O)}function q(X,N,F,M,E,L){let O=U(X,N,F,M,E,L);if(F.transmission>0)Z.unshift(O);else if(F.transparent===!0)W.unshift(O);else Q.unshift(O)}function Y(X,N){if(Q.length>1)Q.sort(X||ik);if(Z.length>1)Z.sort(N||TL);if(W.length>1)W.sort(N||TL)}function G(){for(let X=$,N=J.length;X<N;X++){let F=J[X];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:K,push:H,unshift:q,finish:G,sort:Y}}function ak(){let J=new WeakMap;function $(Z,W){let K=J.get(Z),U;if(K===void 0)U=new SL,J.set(Z,[U]);else if(W>=K.length)U=new SL,K.push(U);else U=K[W];return U}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function rk(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={direction:new i,color:new K8};break;case"SpotLight":Q={position:new i,direction:new i,color:new K8,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new i,color:new K8,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new i,skyColor:new K8,groundColor:new K8};break;case"RectAreaLight":Q={color:new K8,position:new i,halfWidth:new i,halfHeight:new i};break}return J[$.id]=Q,Q}}}function tk(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var ek=0;function JC(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function $C(J){let $=new rk,Q=tk(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)Z.probe.push(new i);let W=new i,K=new M8,U=new M8;function H(Y){let G=0,X=0,N=0;for(let D=0;D<9;D++)Z.probe[D].set(0,0,0);let F=0,M=0,E=0,L=0,O=0,z=0,B=0,I=0,A=0,C=0,P=0;Y.sort(JC);for(let D=0,k=Y.length;D<k;D++){let b=Y[D],v=b.color,m=b.intensity,n=b.distance,r=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)G+=v.r*m,X+=v.g*m,N+=v.b*m;else if(b.isLightProbe){for(let s=0;s<9;s++)Z.probe[s].addScaledVector(b.sh.coefficients[s],m);P++}else if(b.isDirectionalLight){let s=$.get(b);if(s.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J0=b.shadow,a=Q.get(b);a.shadowIntensity=J0.intensity,a.shadowBias=J0.bias,a.shadowNormalBias=J0.normalBias,a.shadowRadius=J0.radius,a.shadowMapSize=J0.mapSize,Z.directionalShadow[F]=a,Z.directionalShadowMap[F]=r,Z.directionalShadowMatrix[F]=b.shadow.matrix,z++}Z.directional[F]=s,F++}else if(b.isSpotLight){let s=$.get(b);s.position.setFromMatrixPosition(b.matrixWorld),s.color.copy(v).multiplyScalar(m),s.distance=n,s.coneCos=Math.cos(b.angle),s.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),s.decay=b.decay,Z.spot[E]=s;let J0=b.shadow;if(b.map){if(Z.spotLightMap[A]=b.map,A++,J0.updateMatrices(b),b.castShadow)C++}if(Z.spotLightMatrix[E]=J0.matrix,b.castShadow){let a=Q.get(b);a.shadowIntensity=J0.intensity,a.shadowBias=J0.bias,a.shadowNormalBias=J0.normalBias,a.shadowRadius=J0.radius,a.shadowMapSize=J0.mapSize,Z.spotShadow[E]=a,Z.spotShadowMap[E]=r,I++}E++}else if(b.isRectAreaLight){let s=$.get(b);s.color.copy(v).multiplyScalar(m),s.halfWidth.set(b.width*0.5,0,0),s.halfHeight.set(0,b.height*0.5,0),Z.rectArea[L]=s,L++}else if(b.isPointLight){let s=$.get(b);if(s.color.copy(b.color).multiplyScalar(b.intensity),s.distance=b.distance,s.decay=b.decay,b.castShadow){let J0=b.shadow,a=Q.get(b);a.shadowIntensity=J0.intensity,a.shadowBias=J0.bias,a.shadowNormalBias=J0.normalBias,a.shadowRadius=J0.radius,a.shadowMapSize=J0.mapSize,a.shadowCameraNear=J0.camera.near,a.shadowCameraFar=J0.camera.far,Z.pointShadow[M]=a,Z.pointShadowMap[M]=r,Z.pointShadowMatrix[M]=b.shadow.matrix,B++}Z.point[M]=s,M++}else if(b.isHemisphereLight){let s=$.get(b);s.skyColor.copy(b.color).multiplyScalar(m),s.groundColor.copy(b.groundColor).multiplyScalar(m),Z.hemi[O]=s,O++}}if(L>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=v0.LTC_FLOAT_1,Z.rectAreaLTC2=v0.LTC_FLOAT_2;else Z.rectAreaLTC1=v0.LTC_HALF_1,Z.rectAreaLTC2=v0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=X,Z.ambient[2]=N;let x=Z.hash;if(x.directionalLength!==F||x.pointLength!==M||x.spotLength!==E||x.rectAreaLength!==L||x.hemiLength!==O||x.numDirectionalShadows!==z||x.numPointShadows!==B||x.numSpotShadows!==I||x.numSpotMaps!==A||x.numLightProbes!==P)Z.directional.length=F,Z.spot.length=E,Z.rectArea.length=L,Z.point.length=M,Z.hemi.length=O,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.pointShadow.length=B,Z.pointShadowMap.length=B,Z.spotShadow.length=I,Z.spotShadowMap.length=I,Z.directionalShadowMatrix.length=z,Z.pointShadowMatrix.length=B,Z.spotLightMatrix.length=I+A-C,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=P,x.directionalLength=F,x.pointLength=M,x.spotLength=E,x.rectAreaLength=L,x.hemiLength=O,x.numDirectionalShadows=z,x.numPointShadows=B,x.numSpotShadows=I,x.numSpotMaps=A,x.numLightProbes=P,Z.version=ek++}function q(Y,G){let X=0,N=0,F=0,M=0,E=0,L=G.matrixWorldInverse;for(let O=0,z=Y.length;O<z;O++){let B=Y[O];if(B.isDirectionalLight){let I=Z.directional[X];I.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(L),X++}else if(B.isSpotLight){let I=Z.spot[F];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(L),I.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(L),F++}else if(B.isRectAreaLight){let I=Z.rectArea[M];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(L),U.identity(),K.copy(B.matrixWorld),K.premultiply(L),U.extractRotation(K),I.halfWidth.set(B.width*0.5,0,0),I.halfHeight.set(0,B.height*0.5,0),I.halfWidth.applyMatrix4(U),I.halfHeight.applyMatrix4(U),M++}else if(B.isPointLight){let I=Z.point[N];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(L),N++}else if(B.isHemisphereLight){let I=Z.hemi[E];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(L),E++}}}return{setup:H,setupView:q,state:Z}}function jL(J){let $=new $C(J),Q=[],Z=[];function W(G){Y.camera=G,Q.length=0,Z.length=0}function K(G){Q.push(G)}function U(G){Z.push(G)}function H(){$.setup(Q)}function q(G){$.setupView(Q,G)}let Y={lightsArray:Q,shadowsArray:Z,camera:null,lights:$,transmissionRenderTarget:{}};return{init:W,state:Y,setupLights:H,setupLightsView:q,pushLight:K,pushShadow:U}}function QC(J){let $=new WeakMap;function Q(W,K=0){let U=$.get(W),H;if(U===void 0)H=new jL(J),$.set(W,[H]);else if(K>=U.length)H=new jL(J),U.push(H);else H=U[K];return H}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var ZC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KC(J,$,Q){let Z=new c7,W=new e0,K=new e0,U=new v8,H=new pq({depthPacking:gF}),q=new mq,Y={},G=Q.maxTextureSize,X={[D6]:j$,[j$]:D6,[VJ]:VJ},N=new V$({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new e0},radius:{value:4}},vertexShader:ZC,fragmentShader:WC}),F=N.clone();F.defines.HORIZONTAL_PASS=1;let M=new uJ;M.setAttribute("position",new GJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let E=new i8(M,N),L=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oH;let O=this.type;this.render=function(C,P,x){if(L.enabled===!1)return;if(L.autoUpdate===!1&&L.needsUpdate===!1)return;if(C.length===0)return;let D=J.getRenderTarget(),k=J.getActiveCubeFace(),b=J.getActiveMipmapLevel(),v=J.state;v.setBlending(MQ),v.buffers.color.setClear(1,1,1,1),v.buffers.depth.setTest(!0),v.setScissorTest(!1);let m=O!==EQ&&this.type===EQ,n=O===EQ&&this.type!==EQ;for(let r=0,s=C.length;r<s;r++){let J0=C[r],a=J0.shadow;if(a===void 0){console.warn("THREE.WebGLShadowMap:",J0,"has no shadow.");continue}if(a.autoUpdate===!1&&a.needsUpdate===!1)continue;W.copy(a.mapSize);let c=a.getFrameExtents();if(W.multiply(c),K.copy(a.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/c.x),W.x=K.x*c.x,a.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/c.y),W.y=K.y*c.y,a.mapSize.y=K.y}if(a.map===null||m===!0||n===!0){let W0=this.type!==EQ?{minFilter:c$,magFilter:c$}:{};if(a.map!==null)a.map.dispose();a.map=new w$(W.x,W.y,W0),a.map.texture.name=J0.name+".shadowMap",a.camera.updateProjectionMatrix()}J.setRenderTarget(a.map),J.clear();let w=a.getViewportCount();for(let W0=0;W0<w;W0++){let R0=a.getViewport(W0);U.set(K.x*R0.x,K.y*R0.y,K.x*R0.z,K.y*R0.w),v.viewport(U),a.updateMatrices(J0,W0),Z=a.getFrustum(),I(P,x,a.camera,J0,this.type)}if(a.isPointLightShadow!==!0&&this.type===EQ)z(a,x);a.needsUpdate=!1}O=this.type,L.needsUpdate=!1,J.setRenderTarget(D,k,b)};function z(C,P){let x=$.update(E);if(N.defines.VSM_SAMPLES!==C.blurSamples)N.defines.VSM_SAMPLES=C.blurSamples,F.defines.VSM_SAMPLES=C.blurSamples,N.needsUpdate=!0,F.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new w$(W.x,W.y);N.uniforms.shadow_pass.value=C.map.texture,N.uniforms.resolution.value=C.mapSize,N.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(P,null,x,N,E,null),F.uniforms.shadow_pass.value=C.mapPass.texture,F.uniforms.resolution.value=C.mapSize,F.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(P,null,x,F,E,null)}function B(C,P,x,D){let k=null,b=x.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)k=b;else if(k=x.isPointLight===!0?q:H,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let v=k.uuid,m=P.uuid,n=Y[v];if(n===void 0)n={},Y[v]=n;let r=n[m];if(r===void 0)r=k.clone(),n[m]=r,P.addEventListener("dispose",A);k=r}if(k.visible=P.visible,k.wireframe=P.wireframe,D===EQ)k.side=P.shadowSide!==null?P.shadowSide:P.side;else k.side=P.shadowSide!==null?P.shadowSide:X[P.side];if(k.alphaMap=P.alphaMap,k.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,k.map=P.map,k.clipShadows=P.clipShadows,k.clippingPlanes=P.clippingPlanes,k.clipIntersection=P.clipIntersection,k.displacementMap=P.displacementMap,k.displacementScale=P.displacementScale,k.displacementBias=P.displacementBias,k.wireframeLinewidth=P.wireframeLinewidth,k.linewidth=P.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let v=J.properties.get(k);v.light=x}return k}function I(C,P,x,D,k){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&k===EQ)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld);let m=$.update(C),n=C.material;if(Array.isArray(n)){let r=m.groups;for(let s=0,J0=r.length;s<J0;s++){let a=r[s],c=n[a.materialIndex];if(c&&c.visible){let w=B(C,c,D,k);C.onBeforeShadow(J,C,P,x,m,w,a),J.renderBufferDirect(x,null,m,w,C,a),C.onAfterShadow(J,C,P,x,m,w,a)}}}else if(n.visible){let r=B(C,n,D,k);C.onBeforeShadow(J,C,P,x,m,r,null),J.renderBufferDirect(x,null,m,r,C,null),C.onAfterShadow(J,C,P,x,m,r,null)}}}let v=C.children;for(let m=0,n=v.length;m<n;m++)I(v[m],P,x,D,k)}function A(C){C.target.removeEventListener("dispose",A);for(let x in Y){let D=Y[x],k=C.target.uuid;if(k in D)D[k].dispose(),delete D[k]}}}var UC={[b1]:v1,[h1]:u1,[f1]:p1,[w7]:g1,[v1]:b1,[u1]:h1,[p1]:f1,[g1]:w7};function HC(J,$){function Q(){let y=!1,k0=new v8,A0=null,y0=new v8(0,0,0,0);return{setMask:function(z0){if(A0!==z0&&!y)J.colorMask(z0,z0,z0,z0),A0=z0},setLocked:function(z0){y=z0},setClear:function(z0,L0,g0,$8,_8){if(_8===!0)z0*=$8,L0*=$8,g0*=$8;if(k0.set(z0,L0,g0,$8),y0.equals(k0)===!1)J.clearColor(z0,L0,g0,$8),y0.copy(k0)},reset:function(){y=!1,A0=null,y0.set(-1,0,0,0)}}}function Z(){let y=!1,k0=!1,A0=null,y0=null,z0=null;return{setReversed:function(L0){if(k0!==L0){let g0=$.get("EXT_clip_control");if(L0)g0.clipControlEXT(g0.LOWER_LEFT_EXT,g0.ZERO_TO_ONE_EXT);else g0.clipControlEXT(g0.LOWER_LEFT_EXT,g0.NEGATIVE_ONE_TO_ONE_EXT);k0=L0;let $8=z0;z0=null,this.setClear($8)}},getReversed:function(){return k0},setTest:function(L0){if(L0)q0(J.DEPTH_TEST);else j0(J.DEPTH_TEST)},setMask:function(L0){if(A0!==L0&&!y)J.depthMask(L0),A0=L0},setFunc:function(L0){if(k0)L0=UC[L0];if(y0!==L0){switch(L0){case b1:J.depthFunc(J.NEVER);break;case v1:J.depthFunc(J.ALWAYS);break;case h1:J.depthFunc(J.LESS);break;case w7:J.depthFunc(J.LEQUAL);break;case f1:J.depthFunc(J.EQUAL);break;case g1:J.depthFunc(J.GEQUAL);break;case u1:J.depthFunc(J.GREATER);break;case p1:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}y0=L0}},setLocked:function(L0){y=L0},setClear:function(L0){if(z0!==L0){if(k0)L0=1-L0;J.clearDepth(L0),z0=L0}},reset:function(){y=!1,A0=null,y0=null,z0=null,k0=!1}}}function W(){let y=!1,k0=null,A0=null,y0=null,z0=null,L0=null,g0=null,$8=null,_8=null;return{setTest:function(b0){if(!y)if(b0)q0(J.STENCIL_TEST);else j0(J.STENCIL_TEST)},setMask:function(b0){if(k0!==b0&&!y)J.stencilMask(b0),k0=b0},setFunc:function(b0,i0,E8){if(A0!==b0||y0!==i0||z0!==E8)J.stencilFunc(b0,i0,E8),A0=b0,y0=i0,z0=E8},setOp:function(b0,i0,E8){if(L0!==b0||g0!==i0||$8!==E8)J.stencilOp(b0,i0,E8),L0=b0,g0=i0,$8=E8},setLocked:function(b0){y=b0},setClear:function(b0){if(_8!==b0)J.clearStencil(b0),_8=b0},reset:function(){y=!1,k0=null,A0=null,y0=null,z0=null,L0=null,g0=null,$8=null,_8=null}}}let K=new Q,U=new Z,H=new W,q=new WeakMap,Y=new WeakMap,G={},X={},N=new WeakMap,F=[],M=null,E=!1,L=null,O=null,z=null,B=null,I=null,A=null,C=null,P=new K8(0,0,0),x=0,D=!1,k=null,b=null,v=null,m=null,n=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),s=!1,J0=0,a=J.getParameter(J.VERSION);if(a.indexOf("WebGL")!==-1)J0=parseFloat(/^WebGL (\d)/.exec(a)[1]),s=J0>=1;else if(a.indexOf("OpenGL ES")!==-1)J0=parseFloat(/^OpenGL ES (\d)/.exec(a)[1]),s=J0>=2;let c=null,w={},W0=J.getParameter(J.SCISSOR_BOX),R0=J.getParameter(J.VIEWPORT),e=new v8().fromArray(W0),K0=new v8().fromArray(R0);function Z0(y,k0,A0,y0){let z0=new Uint8Array(4),L0=J.createTexture();J.bindTexture(y,L0),J.texParameteri(y,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(y,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let g0=0;g0<A0;g0++)if(y===J.TEXTURE_3D||y===J.TEXTURE_2D_ARRAY)J.texImage3D(k0,0,J.RGBA,1,1,y0,0,J.RGBA,J.UNSIGNED_BYTE,z0);else J.texImage2D(k0+g0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,z0);return L0}let M0={};M0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),M0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),M0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),M0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),U.setClear(1),H.setClear(0),q0(J.DEPTH_TEST),U.setFunc(w7),p0(!1),o(lH),q0(J.CULL_FACE),L8(MQ);function q0(y){if(G[y]!==!0)J.enable(y),G[y]=!0}function j0(y){if(G[y]!==!1)J.disable(y),G[y]=!1}function u0(y,k0){if(X[y]!==k0){if(J.bindFramebuffer(y,k0),X[y]=k0,y===J.DRAW_FRAMEBUFFER)X[J.FRAMEBUFFER]=k0;if(y===J.FRAMEBUFFER)X[J.DRAW_FRAMEBUFFER]=k0;return!0}return!1}function m0(y,k0){let A0=F,y0=!1;if(y){if(A0=N.get(k0),A0===void 0)A0=[],N.set(k0,A0);let z0=y.textures;if(A0.length!==z0.length||A0[0]!==J.COLOR_ATTACHMENT0){for(let L0=0,g0=z0.length;L0<g0;L0++)A0[L0]=J.COLOR_ATTACHMENT0+L0;A0.length=z0.length,y0=!0}}else if(A0[0]!==J.BACK)A0[0]=J.BACK,y0=!0;if(y0)J.drawBuffers(A0)}function Y8(y){if(M!==y)return J.useProgram(y),M=y,!0;return!1}let J8={[GZ]:J.FUNC_ADD,[WF]:J.FUNC_SUBTRACT,[KF]:J.FUNC_REVERSE_SUBTRACT};J8[UF]=J.MIN,J8[HF]=J.MAX;let u={[qF]:J.ZERO,[YF]:J.ONE,[GF]:J.SRC_COLOR,[NF]:J.SRC_ALPHA,[BF]:J.SRC_ALPHA_SATURATE,[MF]:J.DST_COLOR,[LF]:J.DST_ALPHA,[XF]:J.ONE_MINUS_SRC_COLOR,[FF]:J.ONE_MINUS_SRC_ALPHA,[OF]:J.ONE_MINUS_DST_COLOR,[EF]:J.ONE_MINUS_DST_ALPHA,[RF]:J.CONSTANT_COLOR,[VF]:J.ONE_MINUS_CONSTANT_COLOR,[zF]:J.CONSTANT_ALPHA,[DF]:J.ONE_MINUS_CONSTANT_ALPHA};function L8(y,k0,A0,y0,z0,L0,g0,$8,_8,b0){if(y===MQ){if(E===!0)j0(J.BLEND),E=!1;return}if(E===!1)q0(J.BLEND),E=!0;if(y!==ZF){if(y!==L||b0!==D){if(O!==GZ||I!==GZ)J.blendEquation(J.FUNC_ADD),O=GZ,I=GZ;if(b0)switch(y){case j7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case sH:J.blendFunc(J.ONE,J.ONE);break;case nH:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case iH:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case j7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case sH:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case nH:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iH:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}z=null,B=null,A=null,C=null,P.set(0,0,0),x=0,L=y,D=b0}return}if(z0=z0||k0,L0=L0||A0,g0=g0||y0,k0!==O||z0!==I)J.blendEquationSeparate(J8[k0],J8[z0]),O=k0,I=z0;if(A0!==z||y0!==B||L0!==A||g0!==C)J.blendFuncSeparate(u[A0],u[y0],u[L0],u[g0]),z=A0,B=y0,A=L0,C=g0;if($8.equals(P)===!1||_8!==x)J.blendColor($8.r,$8.g,$8.b,_8),P.copy($8),x=_8;L=y,D=!1}function D0(y,k0){y.side===VJ?j0(J.CULL_FACE):q0(J.CULL_FACE);let A0=y.side===j$;if(k0)A0=!A0;p0(A0),y.blending===j7&&y.transparent===!1?L8(MQ):L8(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),U.setFunc(y.depthFunc),U.setTest(y.depthTest),U.setMask(y.depthWrite),K.setMask(y.colorWrite);let y0=y.stencilWrite;if(H.setTest(y0),y0)H.setMask(y.stencilWriteMask),H.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),H.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass);S0(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?q0(J.SAMPLE_ALPHA_TO_COVERAGE):j0(J.SAMPLE_ALPHA_TO_COVERAGE)}function p0(y){if(k!==y){if(y)J.frontFace(J.CW);else J.frontFace(J.CCW);k=y}}function o(y){if(y!==JF){if(q0(J.CULL_FACE),y!==b)if(y===lH)J.cullFace(J.BACK);else if(y===$F)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else j0(J.CULL_FACE);b=y}function a0(y){if(y!==v){if(s)J.lineWidth(y);v=y}}function S0(y,k0,A0){if(y){if(q0(J.POLYGON_OFFSET_FILL),m!==k0||n!==A0)J.polygonOffset(k0,A0),m=k0,n=A0}else j0(J.POLYGON_OFFSET_FILL)}function t0(y){if(y)q0(J.SCISSOR_TEST);else j0(J.SCISSOR_TEST)}function N8(y){if(y===void 0)y=J.TEXTURE0+r-1;if(c!==y)J.activeTexture(y),c=y}function S8(y,k0,A0){if(A0===void 0)if(c===null)A0=J.TEXTURE0+r-1;else A0=c;let y0=w[A0];if(y0===void 0)y0={type:void 0,texture:void 0},w[A0]=y0;if(y0.type!==y||y0.texture!==k0){if(c!==A0)J.activeTexture(A0),c=A0;J.bindTexture(y,k0||M0[y]),y0.type=y,y0.texture=k0}}function g(){let y=w[c];if(y!==void 0&&y.type!==void 0)J.bindTexture(y.type,null),y.type=void 0,y.texture=void 0}function T(){try{J.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function $0(){try{J.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Y0(){try{J.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function X0(){try{J.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function H0(){try{J.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function f0(){try{J.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function I0(){try{J.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function d0(){try{J.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function T0(){try{J.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function V0(){try{J.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function w0(y){if(e.equals(y)===!1)J.scissor(y.x,y.y,y.z,y.w),e.copy(y)}function n0(y){if(K0.equals(y)===!1)J.viewport(y.x,y.y,y.z,y.w),K0.copy(y)}function _0(y,k0){let A0=Y.get(k0);if(A0===void 0)A0=new WeakMap,Y.set(k0,A0);let y0=A0.get(y);if(y0===void 0)y0=J.getUniformBlockIndex(k0,y.name),A0.set(y,y0)}function C0(y,k0){let y0=Y.get(k0).get(y);if(q.get(k0)!==y0)J.uniformBlockBinding(k0,y0,y.__bindingPointIndex),q.set(k0,y0)}function U8(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),U.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},c=null,w={},X={},N=new WeakMap,F=[],M=null,E=!1,L=null,O=null,z=null,B=null,I=null,A=null,C=null,P=new K8(0,0,0),x=0,D=!1,k=null,b=null,v=null,m=null,n=null,e.set(0,0,J.canvas.width,J.canvas.height),K0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),U.reset(),H.reset()}return{buffers:{color:K,depth:U,stencil:H},enable:q0,disable:j0,bindFramebuffer:u0,drawBuffers:m0,useProgram:Y8,setBlending:L8,setMaterial:D0,setFlipSided:p0,setCullFace:o,setLineWidth:a0,setPolygonOffset:S0,setScissorTest:t0,activeTexture:N8,bindTexture:S8,unbindTexture:g,compressedTexImage2D:T,compressedTexImage3D:$0,texImage2D:T0,texImage3D:V0,updateUBOMapping:_0,uniformBlockBinding:C0,texStorage2D:I0,texStorage3D:d0,texSubImage2D:Y0,texSubImage3D:X0,compressedTexSubImage2D:H0,compressedTexSubImage3D:f0,scissor:w0,viewport:n0,reset:U8}}function qC(J,$,Q,Z,W,K,U){let H=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,q=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new e0,G=new WeakMap,X,N=new WeakMap,F=!1;try{F=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(g){}function M(g,T){return F?new OffscreenCanvas(g,T):YZ("canvas")}function E(g,T,$0){let Y0=1,X0=S8(g);if(X0.width>$0||X0.height>$0)Y0=$0/Math.max(X0.width,X0.height);if(Y0<1)if(typeof HTMLImageElement!=="undefined"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&g instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&g instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&g instanceof VideoFrame){let H0=Math.floor(Y0*X0.width),f0=Math.floor(Y0*X0.height);if(X===void 0)X=M(H0,f0);let I0=T?M(H0,f0):X;return I0.width=H0,I0.height=f0,I0.getContext("2d").drawImage(g,0,0,H0,f0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X0.width+"x"+X0.height+") to ("+H0+"x"+f0+")."),I0}else{if("data"in g)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X0.width+"x"+X0.height+").");return g}return g}function L(g){return g.generateMipmaps}function O(g){J.generateMipmap(g)}function z(g){if(g.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(g.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function B(g,T,$0,Y0,X0=!1){if(g!==null){if(J[g]!==void 0)return J[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let H0=T;if(T===J.RED){if($0===J.FLOAT)H0=J.R32F;if($0===J.HALF_FLOAT)H0=J.R16F;if($0===J.UNSIGNED_BYTE)H0=J.R8}if(T===J.RED_INTEGER){if($0===J.UNSIGNED_BYTE)H0=J.R8UI;if($0===J.UNSIGNED_SHORT)H0=J.R16UI;if($0===J.UNSIGNED_INT)H0=J.R32UI;if($0===J.BYTE)H0=J.R8I;if($0===J.SHORT)H0=J.R16I;if($0===J.INT)H0=J.R32I}if(T===J.RG){if($0===J.FLOAT)H0=J.RG32F;if($0===J.HALF_FLOAT)H0=J.RG16F;if($0===J.UNSIGNED_BYTE)H0=J.RG8}if(T===J.RG_INTEGER){if($0===J.UNSIGNED_BYTE)H0=J.RG8UI;if($0===J.UNSIGNED_SHORT)H0=J.RG16UI;if($0===J.UNSIGNED_INT)H0=J.RG32UI;if($0===J.BYTE)H0=J.RG8I;if($0===J.SHORT)H0=J.RG16I;if($0===J.INT)H0=J.RG32I}if(T===J.RGB_INTEGER){if($0===J.UNSIGNED_BYTE)H0=J.RGB8UI;if($0===J.UNSIGNED_SHORT)H0=J.RGB16UI;if($0===J.UNSIGNED_INT)H0=J.RGB32UI;if($0===J.BYTE)H0=J.RGB8I;if($0===J.SHORT)H0=J.RGB16I;if($0===J.INT)H0=J.RGB32I}if(T===J.RGBA_INTEGER){if($0===J.UNSIGNED_BYTE)H0=J.RGBA8UI;if($0===J.UNSIGNED_SHORT)H0=J.RGBA16UI;if($0===J.UNSIGNED_INT)H0=J.RGBA32UI;if($0===J.BYTE)H0=J.RGBA8I;if($0===J.SHORT)H0=J.RGBA16I;if($0===J.INT)H0=J.RGBA32I}if(T===J.RGB){if($0===J.UNSIGNED_INT_5_9_9_9_REV)H0=J.RGB9_E5}if(T===J.RGBA){let f0=X0?jq:T8.getTransfer(Y0);if($0===J.FLOAT)H0=J.RGBA32F;if($0===J.HALF_FLOAT)H0=J.RGBA16F;if($0===J.UNSIGNED_BYTE)H0=f0===e8?J.SRGB8_ALPHA8:J.RGBA8;if($0===J.UNSIGNED_SHORT_4_4_4_4)H0=J.RGBA4;if($0===J.UNSIGNED_SHORT_5_5_5_1)H0=J.RGB5_A1}if(H0===J.R16F||H0===J.R32F||H0===J.RG16F||H0===J.RG32F||H0===J.RGBA16F||H0===J.RGBA32F)$.get("EXT_color_buffer_float");return H0}function I(g,T){let $0;if(g){if(T===null||T===LZ||T===EZ)$0=J.DEPTH24_STENCIL8;else if(T===$J)$0=J.DEPTH32F_STENCIL8;else if(T===x7)$0=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(T===null||T===LZ||T===EZ)$0=J.DEPTH_COMPONENT24;else if(T===$J)$0=J.DEPTH_COMPONENT32F;else if(T===x7)$0=J.DEPTH_COMPONENT16;return $0}function A(g,T){if(L(g)===!0||g.isFramebufferTexture&&g.minFilter!==c$&&g.minFilter!==gJ)return Math.log2(Math.max(T.width,T.height))+1;else if(g.mipmaps!==void 0&&g.mipmaps.length>0)return g.mipmaps.length;else if(g.isCompressedTexture&&Array.isArray(g.image))return T.mipmaps.length;else return 1}function C(g){let T=g.target;if(T.removeEventListener("dispose",C),x(T),T.isVideoTexture)G.delete(T)}function P(g){let T=g.target;T.removeEventListener("dispose",P),k(T)}function x(g){let T=Z.get(g);if(T.__webglInit===void 0)return;let $0=g.source,Y0=N.get($0);if(Y0){let X0=Y0[T.__cacheKey];if(X0.usedTimes--,X0.usedTimes===0)D(g);if(Object.keys(Y0).length===0)N.delete($0)}Z.remove(g)}function D(g){let T=Z.get(g);J.deleteTexture(T.__webglTexture);let $0=g.source,Y0=N.get($0);delete Y0[T.__cacheKey],U.memory.textures--}function k(g){let T=Z.get(g);if(g.depthTexture)g.depthTexture.dispose(),Z.remove(g.depthTexture);if(g.isWebGLCubeRenderTarget)for(let Y0=0;Y0<6;Y0++){if(Array.isArray(T.__webglFramebuffer[Y0]))for(let X0=0;X0<T.__webglFramebuffer[Y0].length;X0++)J.deleteFramebuffer(T.__webglFramebuffer[Y0][X0]);else J.deleteFramebuffer(T.__webglFramebuffer[Y0]);if(T.__webglDepthbuffer)J.deleteRenderbuffer(T.__webglDepthbuffer[Y0])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y0=0;Y0<T.__webglFramebuffer.length;Y0++)J.deleteFramebuffer(T.__webglFramebuffer[Y0]);else J.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer)J.deleteRenderbuffer(T.__webglDepthbuffer);if(T.__webglMultisampledFramebuffer)J.deleteFramebuffer(T.__webglMultisampledFramebuffer);if(T.__webglColorRenderbuffer){for(let Y0=0;Y0<T.__webglColorRenderbuffer.length;Y0++)if(T.__webglColorRenderbuffer[Y0])J.deleteRenderbuffer(T.__webglColorRenderbuffer[Y0])}if(T.__webglDepthRenderbuffer)J.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let $0=g.textures;for(let Y0=0,X0=$0.length;Y0<X0;Y0++){let H0=Z.get($0[Y0]);if(H0.__webglTexture)J.deleteTexture(H0.__webglTexture),U.memory.textures--;Z.remove($0[Y0])}Z.remove(g)}let b=0;function v(){b=0}function m(){let g=b;if(g>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+W.maxTextures);return b+=1,g}function n(g){let T=[];return T.push(g.wrapS),T.push(g.wrapT),T.push(g.wrapR||0),T.push(g.magFilter),T.push(g.minFilter),T.push(g.anisotropy),T.push(g.internalFormat),T.push(g.format),T.push(g.type),T.push(g.generateMipmaps),T.push(g.premultiplyAlpha),T.push(g.flipY),T.push(g.unpackAlignment),T.push(g.colorSpace),T.join()}function r(g,T){let $0=Z.get(g);if(g.isVideoTexture)t0(g);if(g.isRenderTargetTexture===!1&&g.version>0&&$0.__version!==g.version){let Y0=g.image;if(Y0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M0($0,g,T);return}}Q.bindTexture(J.TEXTURE_2D,$0.__webglTexture,J.TEXTURE0+T)}function s(g,T){let $0=Z.get(g);if(g.version>0&&$0.__version!==g.version){M0($0,g,T);return}Q.bindTexture(J.TEXTURE_2D_ARRAY,$0.__webglTexture,J.TEXTURE0+T)}function J0(g,T){let $0=Z.get(g);if(g.version>0&&$0.__version!==g.version){M0($0,g,T);return}Q.bindTexture(J.TEXTURE_3D,$0.__webglTexture,J.TEXTURE0+T)}function a(g,T){let $0=Z.get(g);if(g.version>0&&$0.__version!==g.version){q0($0,g,T);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,$0.__webglTexture,J.TEXTURE0+T)}let c={[NZ]:J.REPEAT,[c1]:J.CLAMP_TO_EDGE,[l1]:J.MIRRORED_REPEAT},w={[c$]:J.NEAREST,[o1]:J.NEAREST_MIPMAP_NEAREST,[N9]:J.NEAREST_MIPMAP_LINEAR,[gJ]:J.LINEAR,[FZ]:J.LINEAR_MIPMAP_NEAREST,[oQ]:J.LINEAR_MIPMAP_LINEAR},W0={[mF]:J.NEVER,[nF]:J.ALWAYS,[dF]:J.LESS,[wq]:J.LEQUAL,[cF]:J.EQUAL,[sF]:J.GEQUAL,[lF]:J.GREATER,[oF]:J.NOTEQUAL};function R0(g,T){if(T.type===$J&&$.has("OES_texture_float_linear")===!1&&(T.magFilter===gJ||T.magFilter===FZ||T.magFilter===N9||T.magFilter===oQ||T.minFilter===gJ||T.minFilter===FZ||T.minFilter===N9||T.minFilter===oQ))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(g,J.TEXTURE_WRAP_S,c[T.wrapS]),J.texParameteri(g,J.TEXTURE_WRAP_T,c[T.wrapT]),g===J.TEXTURE_3D||g===J.TEXTURE_2D_ARRAY)J.texParameteri(g,J.TEXTURE_WRAP_R,c[T.wrapR]);if(J.texParameteri(g,J.TEXTURE_MAG_FILTER,w[T.magFilter]),J.texParameteri(g,J.TEXTURE_MIN_FILTER,w[T.minFilter]),T.compareFunction)J.texParameteri(g,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(g,J.TEXTURE_COMPARE_FUNC,W0[T.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===c$)return;if(T.minFilter!==N9&&T.minFilter!==oQ)return;if(T.type===$J&&$.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||Z.get(T).__currentAnisotropy){let $0=$.get("EXT_texture_filter_anisotropic");J.texParameterf(g,$0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,W.getMaxAnisotropy())),Z.get(T).__currentAnisotropy=T.anisotropy}}}function e(g,T){let $0=!1;if(g.__webglInit===void 0)g.__webglInit=!0,T.addEventListener("dispose",C);let Y0=T.source,X0=N.get(Y0);if(X0===void 0)X0={},N.set(Y0,X0);let H0=n(T);if(H0!==g.__cacheKey){if(X0[H0]===void 0)X0[H0]={texture:J.createTexture(),usedTimes:0},U.memory.textures++,$0=!0;X0[H0].usedTimes++;let f0=X0[g.__cacheKey];if(f0!==void 0){if(X0[g.__cacheKey].usedTimes--,f0.usedTimes===0)D(T)}g.__cacheKey=H0,g.__webglTexture=X0[H0].texture}return $0}function K0(g,T,$0){return Math.floor(Math.floor(g/$0)/T)}function Z0(g,T,$0,Y0){let H0=g.updateRanges;if(H0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,T.width,T.height,$0,Y0,T.data);else{H0.sort((V0,w0)=>V0.start-w0.start);let f0=0;for(let V0=1;V0<H0.length;V0++){let w0=H0[f0],n0=H0[V0],_0=w0.start+w0.count,C0=K0(n0.start,T.width,4),U8=K0(w0.start,T.width,4);if(n0.start<=_0+1&&C0===U8&&K0(n0.start+n0.count-1,T.width,4)===C0)w0.count=Math.max(w0.count,n0.start+n0.count-w0.start);else++f0,H0[f0]=n0}H0.length=f0+1;let I0=J.getParameter(J.UNPACK_ROW_LENGTH),d0=J.getParameter(J.UNPACK_SKIP_PIXELS),T0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,T.width);for(let V0=0,w0=H0.length;V0<w0;V0++){let n0=H0[V0],_0=Math.floor(n0.start/4),C0=Math.ceil(n0.count/4),U8=_0%T.width,y=Math.floor(_0/T.width),k0=C0,A0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,U8),J.pixelStorei(J.UNPACK_SKIP_ROWS,y),Q.texSubImage2D(J.TEXTURE_2D,0,U8,y,k0,1,$0,Y0,T.data)}g.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,I0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),J.pixelStorei(J.UNPACK_SKIP_ROWS,T0)}}function M0(g,T,$0){let Y0=J.TEXTURE_2D;if(T.isDataArrayTexture||T.isCompressedArrayTexture)Y0=J.TEXTURE_2D_ARRAY;if(T.isData3DTexture)Y0=J.TEXTURE_3D;let X0=e(g,T),H0=T.source;Q.bindTexture(Y0,g.__webglTexture,J.TEXTURE0+$0);let f0=Z.get(H0);if(H0.version!==f0.__version||X0===!0){Q.activeTexture(J.TEXTURE0+$0);let I0=T8.getPrimaries(T8.workingColorSpace),d0=T.colorSpace===sQ?null:T8.getPrimaries(T.colorSpace),T0=T.colorSpace===sQ||I0===d0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,T.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,T.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,T0);let V0=E(T.image,!1,W.maxTextureSize);V0=N8(T,V0);let w0=K.convert(T.format,T.colorSpace),n0=K.convert(T.type),_0=B(T.internalFormat,w0,n0,T.colorSpace,T.isVideoTexture);R0(Y0,T);let C0,U8=T.mipmaps,y=T.isVideoTexture!==!0,k0=f0.__version===void 0||X0===!0,A0=H0.dataReady,y0=A(T,V0);if(T.isDepthTexture){if(_0=I(T.format===y7,T.type),k0)if(y)Q.texStorage2D(J.TEXTURE_2D,1,_0,V0.width,V0.height);else Q.texImage2D(J.TEXTURE_2D,0,_0,V0.width,V0.height,0,w0,n0,null)}else if(T.isDataTexture)if(U8.length>0){if(y&&k0)Q.texStorage2D(J.TEXTURE_2D,y0,_0,U8[0].width,U8[0].height);for(let z0=0,L0=U8.length;z0<L0;z0++)if(C0=U8[z0],y){if(A0)Q.texSubImage2D(J.TEXTURE_2D,z0,0,0,C0.width,C0.height,w0,n0,C0.data)}else Q.texImage2D(J.TEXTURE_2D,z0,_0,C0.width,C0.height,0,w0,n0,C0.data);T.generateMipmaps=!1}else if(y){if(k0)Q.texStorage2D(J.TEXTURE_2D,y0,_0,V0.width,V0.height);if(A0)Z0(T,V0,w0,n0)}else Q.texImage2D(J.TEXTURE_2D,0,_0,V0.width,V0.height,0,w0,n0,V0.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){if(y&&k0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,y0,_0,U8[0].width,U8[0].height,V0.depth);for(let z0=0,L0=U8.length;z0<L0;z0++)if(C0=U8[z0],T.format!==aJ)if(w0!==null)if(y){if(A0)if(T.layerUpdates.size>0){let g0=rq(C0.width,C0.height,T.format,T.type);for(let $8 of T.layerUpdates){let _8=C0.data.subarray($8*g0/C0.data.BYTES_PER_ELEMENT,($8+1)*g0/C0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,z0,0,0,$8,C0.width,C0.height,1,w0,_8)}T.clearLayerUpdates()}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,z0,0,0,0,C0.width,C0.height,V0.depth,w0,C0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,z0,_0,C0.width,C0.height,V0.depth,0,C0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y){if(A0)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,z0,0,0,0,C0.width,C0.height,V0.depth,w0,n0,C0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,z0,_0,C0.width,C0.height,V0.depth,0,w0,n0,C0.data)}else{if(y&&k0)Q.texStorage2D(J.TEXTURE_2D,y0,_0,U8[0].width,U8[0].height);for(let z0=0,L0=U8.length;z0<L0;z0++)if(C0=U8[z0],T.format!==aJ)if(w0!==null)if(y){if(A0)Q.compressedTexSubImage2D(J.TEXTURE_2D,z0,0,0,C0.width,C0.height,w0,C0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,z0,_0,C0.width,C0.height,0,C0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(y){if(A0)Q.texSubImage2D(J.TEXTURE_2D,z0,0,0,C0.width,C0.height,w0,n0,C0.data)}else Q.texImage2D(J.TEXTURE_2D,z0,_0,C0.width,C0.height,0,w0,n0,C0.data)}else if(T.isDataArrayTexture)if(y){if(k0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,y0,_0,V0.width,V0.height,V0.depth);if(A0)if(T.layerUpdates.size>0){let z0=rq(V0.width,V0.height,T.format,T.type);for(let L0 of T.layerUpdates){let g0=V0.data.subarray(L0*z0/V0.data.BYTES_PER_ELEMENT,(L0+1)*z0/V0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,L0,V0.width,V0.height,1,w0,n0,g0)}T.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,V0.width,V0.height,V0.depth,w0,n0,V0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,V0.width,V0.height,V0.depth,0,w0,n0,V0.data);else if(T.isData3DTexture)if(y){if(k0)Q.texStorage3D(J.TEXTURE_3D,y0,_0,V0.width,V0.height,V0.depth);if(A0)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,V0.width,V0.height,V0.depth,w0,n0,V0.data)}else Q.texImage3D(J.TEXTURE_3D,0,_0,V0.width,V0.height,V0.depth,0,w0,n0,V0.data);else if(T.isFramebufferTexture){if(k0)if(y)Q.texStorage2D(J.TEXTURE_2D,y0,_0,V0.width,V0.height);else{let{width:z0,height:L0}=V0;for(let g0=0;g0<y0;g0++)Q.texImage2D(J.TEXTURE_2D,g0,_0,z0,L0,0,w0,n0,null),z0>>=1,L0>>=1}}else if(U8.length>0){if(y&&k0){let z0=S8(U8[0]);Q.texStorage2D(J.TEXTURE_2D,y0,_0,z0.width,z0.height)}for(let z0=0,L0=U8.length;z0<L0;z0++)if(C0=U8[z0],y){if(A0)Q.texSubImage2D(J.TEXTURE_2D,z0,0,0,w0,n0,C0)}else Q.texImage2D(J.TEXTURE_2D,z0,_0,w0,n0,C0);T.generateMipmaps=!1}else if(y){if(k0){let z0=S8(V0);Q.texStorage2D(J.TEXTURE_2D,y0,_0,z0.width,z0.height)}if(A0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,w0,n0,V0)}else Q.texImage2D(J.TEXTURE_2D,0,_0,w0,n0,V0);if(L(T))O(Y0);if(f0.__version=H0.version,T.onUpdate)T.onUpdate(T)}g.__version=T.version}function q0(g,T,$0){if(T.image.length!==6)return;let Y0=e(g,T),X0=T.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+$0);let H0=Z.get(X0);if(X0.version!==H0.__version||Y0===!0){Q.activeTexture(J.TEXTURE0+$0);let f0=T8.getPrimaries(T8.workingColorSpace),I0=T.colorSpace===sQ?null:T8.getPrimaries(T.colorSpace),d0=T.colorSpace===sQ||f0===I0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,T.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,T.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,d0);let T0=T.isCompressedTexture||T.image[0].isCompressedTexture,V0=T.image[0]&&T.image[0].isDataTexture,w0=[];for(let L0=0;L0<6;L0++){if(!T0&&!V0)w0[L0]=E(T.image[L0],!0,W.maxCubemapSize);else w0[L0]=V0?T.image[L0].image:T.image[L0];w0[L0]=N8(T,w0[L0])}let n0=w0[0],_0=K.convert(T.format,T.colorSpace),C0=K.convert(T.type),U8=B(T.internalFormat,_0,C0,T.colorSpace),y=T.isVideoTexture!==!0,k0=H0.__version===void 0||Y0===!0,A0=X0.dataReady,y0=A(T,n0);R0(J.TEXTURE_CUBE_MAP,T);let z0;if(T0){if(y&&k0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,y0,U8,n0.width,n0.height);for(let L0=0;L0<6;L0++){z0=w0[L0].mipmaps;for(let g0=0;g0<z0.length;g0++){let $8=z0[g0];if(T.format!==aJ)if(_0!==null)if(y){if(A0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0,0,0,$8.width,$8.height,_0,$8.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0,U8,$8.width,$8.height,0,$8.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(y){if(A0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0,0,0,$8.width,$8.height,_0,C0,$8.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0,U8,$8.width,$8.height,0,_0,C0,$8.data)}}}else{if(z0=T.mipmaps,y&&k0){if(z0.length>0)y0++;let L0=S8(w0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,y0,U8,L0.width,L0.height)}for(let L0=0;L0<6;L0++)if(V0){if(y){if(A0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,w0[L0].width,w0[L0].height,_0,C0,w0[L0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,U8,w0[L0].width,w0[L0].height,0,_0,C0,w0[L0].data);for(let g0=0;g0<z0.length;g0++){let _8=z0[g0].image[L0].image;if(y){if(A0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0+1,0,0,_8.width,_8.height,_0,C0,_8.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0+1,U8,_8.width,_8.height,0,_0,C0,_8.data)}}else{if(y){if(A0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,_0,C0,w0[L0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,U8,_0,C0,w0[L0]);for(let g0=0;g0<z0.length;g0++){let $8=z0[g0];if(y){if(A0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0+1,0,0,_0,C0,$8.image[L0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,g0+1,U8,_0,C0,$8.image[L0])}}}if(L(T))O(J.TEXTURE_CUBE_MAP);if(H0.__version=X0.version,T.onUpdate)T.onUpdate(T)}g.__version=T.version}function j0(g,T,$0,Y0,X0,H0){let f0=K.convert($0.format,$0.colorSpace),I0=K.convert($0.type),d0=B($0.internalFormat,f0,I0,$0.colorSpace),T0=Z.get(T),V0=Z.get($0);if(V0.__renderTarget=T,!T0.__hasExternalTextures){let w0=Math.max(1,T.width>>H0),n0=Math.max(1,T.height>>H0);if(X0===J.TEXTURE_3D||X0===J.TEXTURE_2D_ARRAY)Q.texImage3D(X0,H0,d0,w0,n0,T.depth,0,f0,I0,null);else Q.texImage2D(X0,H0,d0,w0,n0,0,f0,I0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,g),S0(T))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Y0,X0,V0.__webglTexture,0,a0(T));else if(X0===J.TEXTURE_2D||X0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&X0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,Y0,X0,V0.__webglTexture,H0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(g,T,$0){if(J.bindRenderbuffer(J.RENDERBUFFER,g),T.depthBuffer){let Y0=T.depthTexture,X0=Y0&&Y0.isDepthTexture?Y0.type:null,H0=I(T.stencilBuffer,X0),f0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,I0=a0(T);if(S0(T))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,I0,H0,T.width,T.height);else if($0)J.renderbufferStorageMultisample(J.RENDERBUFFER,I0,H0,T.width,T.height);else J.renderbufferStorage(J.RENDERBUFFER,H0,T.width,T.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,f0,J.RENDERBUFFER,g)}else{let Y0=T.textures;for(let X0=0;X0<Y0.length;X0++){let H0=Y0[X0],f0=K.convert(H0.format,H0.colorSpace),I0=K.convert(H0.type),d0=B(H0.internalFormat,f0,I0,H0.colorSpace),T0=a0(T);if($0&&S0(T)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,T0,d0,T.width,T.height);else if(S0(T))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,T0,d0,T.width,T.height);else J.renderbufferStorage(J.RENDERBUFFER,d0,T.width,T.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function m0(g,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer(J.FRAMEBUFFER,g),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y0=Z.get(T.depthTexture);if(Y0.__renderTarget=T,!Y0.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0;r(T.depthTexture,0);let X0=Y0.__webglTexture,H0=a0(T);if(T.depthTexture.format===s1)if(S0(T))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,X0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,X0,0);else if(T.depthTexture.format===y7)if(S0(T))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,X0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,X0,0);else throw new Error("Unknown depthTexture format")}function Y8(g){let T=Z.get(g),$0=g.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==g.depthTexture){let Y0=g.depthTexture;if(T.__depthDisposeCallback)T.__depthDisposeCallback();if(Y0){let X0=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y0.removeEventListener("dispose",X0)};Y0.addEventListener("dispose",X0),T.__depthDisposeCallback=X0}T.__boundDepthTexture=Y0}if(g.depthTexture&&!T.__autoAllocateDepthBuffer){if($0)throw new Error("target.depthTexture not supported in Cube render targets");let Y0=g.texture.mipmaps;if(Y0&&Y0.length>0)m0(T.__webglFramebuffer[0],g);else m0(T.__webglFramebuffer,g)}else if($0){T.__webglDepthbuffer=[];for(let Y0=0;Y0<6;Y0++)if(Q.bindFramebuffer(J.FRAMEBUFFER,T.__webglFramebuffer[Y0]),T.__webglDepthbuffer[Y0]===void 0)T.__webglDepthbuffer[Y0]=J.createRenderbuffer(),u0(T.__webglDepthbuffer[Y0],g,!1);else{let X0=g.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=T.__webglDepthbuffer[Y0];J.bindRenderbuffer(J.RENDERBUFFER,H0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,H0)}}else{let Y0=g.texture.mipmaps;if(Y0&&Y0.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,T.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,T.__webglFramebuffer);if(T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=J.createRenderbuffer(),u0(T.__webglDepthbuffer,g,!1);else{let X0=g.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=T.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,H0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,H0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function J8(g,T,$0){let Y0=Z.get(g);if(T!==void 0)j0(Y0.__webglFramebuffer,g,g.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if($0!==void 0)Y8(g)}function u(g){let T=g.texture,$0=Z.get(g),Y0=Z.get(T);g.addEventListener("dispose",P);let X0=g.textures,H0=g.isWebGLCubeRenderTarget===!0,f0=X0.length>1;if(!f0){if(Y0.__webglTexture===void 0)Y0.__webglTexture=J.createTexture();Y0.__version=T.version,U.memory.textures++}if(H0){$0.__webglFramebuffer=[];for(let I0=0;I0<6;I0++)if(T.mipmaps&&T.mipmaps.length>0){$0.__webglFramebuffer[I0]=[];for(let d0=0;d0<T.mipmaps.length;d0++)$0.__webglFramebuffer[I0][d0]=J.createFramebuffer()}else $0.__webglFramebuffer[I0]=J.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$0.__webglFramebuffer=[];for(let I0=0;I0<T.mipmaps.length;I0++)$0.__webglFramebuffer[I0]=J.createFramebuffer()}else $0.__webglFramebuffer=J.createFramebuffer();if(f0)for(let I0=0,d0=X0.length;I0<d0;I0++){let T0=Z.get(X0[I0]);if(T0.__webglTexture===void 0)T0.__webglTexture=J.createTexture(),U.memory.textures++}if(g.samples>0&&S0(g)===!1){$0.__webglMultisampledFramebuffer=J.createFramebuffer(),$0.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,$0.__webglMultisampledFramebuffer);for(let I0=0;I0<X0.length;I0++){let d0=X0[I0];$0.__webglColorRenderbuffer[I0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,$0.__webglColorRenderbuffer[I0]);let T0=K.convert(d0.format,d0.colorSpace),V0=K.convert(d0.type),w0=B(d0.internalFormat,T0,V0,d0.colorSpace,g.isXRRenderTarget===!0),n0=a0(g);J.renderbufferStorageMultisample(J.RENDERBUFFER,n0,w0,g.width,g.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+I0,J.RENDERBUFFER,$0.__webglColorRenderbuffer[I0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),g.depthBuffer)$0.__webglDepthRenderbuffer=J.createRenderbuffer(),u0($0.__webglDepthRenderbuffer,g,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(H0){Q.bindTexture(J.TEXTURE_CUBE_MAP,Y0.__webglTexture),R0(J.TEXTURE_CUBE_MAP,T);for(let I0=0;I0<6;I0++)if(T.mipmaps&&T.mipmaps.length>0)for(let d0=0;d0<T.mipmaps.length;d0++)j0($0.__webglFramebuffer[I0][d0],g,T,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+I0,d0);else j0($0.__webglFramebuffer[I0],g,T,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+I0,0);if(L(T))O(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(f0){for(let I0=0,d0=X0.length;I0<d0;I0++){let T0=X0[I0],V0=Z.get(T0);if(Q.bindTexture(J.TEXTURE_2D,V0.__webglTexture),R0(J.TEXTURE_2D,T0),j0($0.__webglFramebuffer,g,T0,J.COLOR_ATTACHMENT0+I0,J.TEXTURE_2D,0),L(T0))O(J.TEXTURE_2D)}Q.unbindTexture()}else{let I0=J.TEXTURE_2D;if(g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)I0=g.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(I0,Y0.__webglTexture),R0(I0,T),T.mipmaps&&T.mipmaps.length>0)for(let d0=0;d0<T.mipmaps.length;d0++)j0($0.__webglFramebuffer[d0],g,T,J.COLOR_ATTACHMENT0,I0,d0);else j0($0.__webglFramebuffer,g,T,J.COLOR_ATTACHMENT0,I0,0);if(L(T))O(I0);Q.unbindTexture()}if(g.depthBuffer)Y8(g)}function L8(g){let T=g.textures;for(let $0=0,Y0=T.length;$0<Y0;$0++){let X0=T[$0];if(L(X0)){let H0=z(g),f0=Z.get(X0).__webglTexture;Q.bindTexture(H0,f0),O(H0),Q.unbindTexture()}}}let D0=[],p0=[];function o(g){if(g.samples>0){if(S0(g)===!1){let{textures:T,width:$0,height:Y0}=g,X0=J.COLOR_BUFFER_BIT,H0=g.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,f0=Z.get(g),I0=T.length>1;if(I0)for(let T0=0;T0<T.length;T0++)Q.bindFramebuffer(J.FRAMEBUFFER,f0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,f0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,f0.__webglMultisampledFramebuffer);let d0=g.texture.mipmaps;if(d0&&d0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,f0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,f0.__webglFramebuffer);for(let T0=0;T0<T.length;T0++){if(g.resolveDepthBuffer){if(g.depthBuffer)X0|=J.DEPTH_BUFFER_BIT;if(g.stencilBuffer&&g.resolveStencilBuffer)X0|=J.STENCIL_BUFFER_BIT}if(I0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,f0.__webglColorRenderbuffer[T0]);let V0=Z.get(T[T0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,V0,0)}if(J.blitFramebuffer(0,0,$0,Y0,0,0,$0,Y0,X0,J.NEAREST),q===!0){if(D0.length=0,p0.length=0,D0.push(J.COLOR_ATTACHMENT0+T0),g.depthBuffer&&g.resolveDepthBuffer===!1)D0.push(H0),p0.push(H0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,p0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,D0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),I0)for(let T0=0;T0<T.length;T0++){Q.bindFramebuffer(J.FRAMEBUFFER,f0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,f0.__webglColorRenderbuffer[T0]);let V0=Z.get(T[T0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,f0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,V0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,f0.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&q){let T=g.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[T])}}}function a0(g){return Math.min(W.maxSamples,g.samples)}function S0(g){let T=Z.get(g);return g.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function t0(g){let T=U.render.frame;if(G.get(g)!==T)G.set(g,T),g.update()}function N8(g,T){let{colorSpace:$0,format:Y0,type:X0}=g;if(g.isCompressedTexture===!0||g.isVideoTexture===!0)return T;if($0!==XJ&&$0!==sQ)if(T8.getTransfer($0)===e8){if(Y0!==aJ||X0!==k6)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",$0);return T}function S8(g){if(typeof HTMLImageElement!=="undefined"&&g instanceof HTMLImageElement)Y.width=g.naturalWidth||g.width,Y.height=g.naturalHeight||g.height;else if(typeof VideoFrame!=="undefined"&&g instanceof VideoFrame)Y.width=g.displayWidth,Y.height=g.displayHeight;else Y.width=g.width,Y.height=g.height;return Y}this.allocateTextureUnit=m,this.resetTextureUnits=v,this.setTexture2D=r,this.setTexture2DArray=s,this.setTexture3D=J0,this.setTextureCube=a,this.rebindTextures=J8,this.setupRenderTarget=u,this.updateRenderTargetMipmap=L8,this.updateMultisampleRenderTarget=o,this.setupDepthRenderbuffer=Y8,this.setupFrameBufferTexture=j0,this.useMultisampledRTT=S0}function YC(J,$){function Q(Z,W=sQ){let K,U=T8.getTransfer(W);if(Z===k6)return J.UNSIGNED_BYTE;if(Z===rH)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===tH)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===yF)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===_F)return J.BYTE;if(Z===xF)return J.SHORT;if(Z===x7)return J.UNSIGNED_SHORT;if(Z===aH)return J.INT;if(Z===LZ)return J.UNSIGNED_INT;if(Z===$J)return J.FLOAT;if(Z===AJ)return J.HALF_FLOAT;if(Z===bF)return J.ALPHA;if(Z===vF)return J.RGB;if(Z===aJ)return J.RGBA;if(Z===s1)return J.DEPTH_COMPONENT;if(Z===y7)return J.DEPTH_STENCIL;if(Z===n1)return J.RED;if(Z===eH)return J.RED_INTEGER;if(Z===hF)return J.RG;if(Z===Jq)return J.RG_INTEGER;if(Z===$q)return J.RGBA_INTEGER;if(Z===i1||Z===a1||Z===r1||Z===t1)if(U===e8)if(K=$.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===i1)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===a1)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===r1)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===t1)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=$.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===i1)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===a1)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===r1)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===t1)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===Qq||Z===Zq||Z===Wq||Z===Kq)if(K=$.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===Qq)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===Zq)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===Wq)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===Kq)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===Uq||Z===Hq||Z===qq)if(K=$.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===Uq||Z===Hq)return U===e8?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===qq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===Yq||Z===Gq||Z===Xq||Z===Nq||Z===Fq||Z===Lq||Z===Eq||Z===Mq||Z===Oq||Z===Bq||Z===Rq||Z===Vq||Z===zq||Z===Dq)if(K=$.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===Yq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===Gq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===Xq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===Nq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===Fq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===Lq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===Eq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===Mq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===Oq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===Bq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===Rq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===Vq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===zq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===Dq)return U===e8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===e1||Z===kq||Z===Cq)if(K=$.get("EXT_texture_compression_bptc"),K!==null){if(Z===e1)return U===e8?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===kq)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Cq)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===fF||Z===Pq||Z===Iq||Z===Aq)if(K=$.get("EXT_texture_compression_rgtc"),K!==null){if(Z===e1)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===Pq)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===Iq)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===Aq)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===EZ)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$,Q){if(this.texture===null){let Z=new RJ,W=J.properties.get(Z);if(W.__webglTexture=$.texture,$.depthNear!==Q.depthNear||$.depthFar!==Q.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new V$({vertexShader:GC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new i8(new aQ(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mL extends nQ{constructor(J,$){super();let Q=this,Z=null,W=1,K=null,U="local-floor",H=1,q=null,Y=null,G=null,X=null,N=null,F=null,M=new pL,E=$.getContextAttributes(),L=null,O=null,z=[],B=[],I=new e0,A=null,C=new IJ;C.viewport=new v8;let P=new IJ;P.viewport=new v8;let x=[C,P],D=new nq,k=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let K0=z[e];if(K0===void 0)K0=new u7,z[e]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(e){let K0=z[e];if(K0===void 0)K0=new u7,z[e]=K0;return K0.getGripSpace()},this.getHand=function(e){let K0=z[e];if(K0===void 0)K0=new u7,z[e]=K0;return K0.getHandSpace()};function v(e){let K0=B.indexOf(e.inputSource);if(K0===-1)return;let Z0=z[K0];if(Z0!==void 0)Z0.update(e.inputSource,e.frame,q||K),Z0.dispatchEvent({type:e.type,data:e.inputSource})}function m(){Z.removeEventListener("select",v),Z.removeEventListener("selectstart",v),Z.removeEventListener("selectend",v),Z.removeEventListener("squeeze",v),Z.removeEventListener("squeezestart",v),Z.removeEventListener("squeezeend",v),Z.removeEventListener("end",m),Z.removeEventListener("inputsourceschange",n);for(let e=0;e<z.length;e++){let K0=B[e];if(K0===null)continue;B[e]=null,z[e].disconnect(K0)}k=null,b=null,M.reset(),J.setRenderTarget(L),N=null,X=null,G=null,Z=null,O=null,R0.stop(),Q.isPresenting=!1,J.setPixelRatio(A),J.setSize(I.width,I.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){if(W=e,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){if(U=e,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return q||K},this.setReferenceSpace=function(e){q=e},this.getBaseLayer=function(){return X!==null?X:N},this.getBinding=function(){return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(e){if(Z=e,Z!==null){if(L=J.getRenderTarget(),Z.addEventListener("select",v),Z.addEventListener("selectstart",v),Z.addEventListener("selectend",v),Z.addEventListener("squeeze",v),Z.addEventListener("squeezestart",v),Z.addEventListener("squeezeend",v),Z.addEventListener("end",m),Z.addEventListener("inputsourceschange",n),E.xrCompatible!==!0)await $.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(I),!(typeof XRWebGLBinding!=="undefined"&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Z0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer(Z,$,Z0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),O=new w$(N.framebufferWidth,N.framebufferHeight,{format:aJ,type:k6,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}else{let Z0=null,M0=null,q0=null;if(E.depth)q0=E.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,Z0=E.stencil?y7:s1,M0=E.stencil?EZ:LZ;let j0={colorFormat:$.RGBA8,depthFormat:q0,scaleFactor:W};G=new XRWebGLBinding(Z,$),X=G.createProjectionLayer(j0),Z.updateRenderState({layers:[X]}),J.setPixelRatio(1),J.setSize(X.textureWidth,X.textureHeight,!1),O=new w$(X.textureWidth,X.textureHeight,{format:aJ,type:k6,depthTexture:new GK(X.textureWidth,X.textureHeight,M0,void 0,void 0,void 0,void 0,void 0,void 0,Z0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:X.ignoreDepthValues===!1,resolveStencilBuffer:X.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(H),q=null,K=await Z.requestReferenceSpace(U),R0.setContext(Z),R0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function n(e){for(let K0=0;K0<e.removed.length;K0++){let Z0=e.removed[K0],M0=B.indexOf(Z0);if(M0>=0)B[M0]=null,z[M0].disconnect(Z0)}for(let K0=0;K0<e.added.length;K0++){let Z0=e.added[K0],M0=B.indexOf(Z0);if(M0===-1){for(let j0=0;j0<z.length;j0++)if(j0>=B.length){B.push(Z0),M0=j0;break}else if(B[j0]===null){B[j0]=Z0,M0=j0;break}if(M0===-1)break}let q0=z[M0];if(q0)q0.connect(Z0)}}let r=new i,s=new i;function J0(e,K0,Z0){r.setFromMatrixPosition(K0.matrixWorld),s.setFromMatrixPosition(Z0.matrixWorld);let M0=r.distanceTo(s),q0=K0.projectionMatrix.elements,j0=Z0.projectionMatrix.elements,u0=q0[14]/(q0[10]-1),m0=q0[14]/(q0[10]+1),Y8=(q0[9]+1)/q0[5],J8=(q0[9]-1)/q0[5],u=(q0[8]-1)/q0[0],L8=(j0[8]+1)/j0[0],D0=u0*u,p0=u0*L8,o=M0/(-u+L8),a0=o*-u;if(K0.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(a0),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),q0[10]===-1)e.projectionMatrix.copy(K0.projectionMatrix),e.projectionMatrixInverse.copy(K0.projectionMatrixInverse);else{let S0=u0+o,t0=m0+o,N8=D0-a0,S8=p0+(M0-a0),g=Y8*m0/t0*S0,T=J8*m0/t0*S0;e.projectionMatrix.makePerspective(N8,S8,g,T,S0,t0),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function a(e,K0){if(K0===null)e.matrixWorld.copy(e.matrix);else e.matrixWorld.multiplyMatrices(K0.matrixWorld,e.matrix);e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(Z===null)return;let{near:K0,far:Z0}=e;if(M.texture!==null){if(M.depthNear>0)K0=M.depthNear;if(M.depthFar>0)Z0=M.depthFar}if(D.near=P.near=C.near=K0,D.far=P.far=C.far=Z0,k!==D.near||b!==D.far)Z.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,b=D.far;C.layers.mask=e.layers.mask|2,P.layers.mask=e.layers.mask|4,D.layers.mask=C.layers.mask|P.layers.mask;let M0=e.parent,q0=D.cameras;a(D,M0);for(let j0=0;j0<q0.length;j0++)a(q0[j0],M0);if(q0.length===2)J0(D,C,P);else D.projectionMatrix.copy(C.projectionMatrix);c(e,D,M0)};function c(e,K0,Z0){if(Z0===null)e.matrix.copy(K0.matrixWorld);else e.matrix.copy(Z0.matrixWorld),e.matrix.invert(),e.matrix.multiply(K0.matrixWorld);if(e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(K0.projectionMatrix),e.projectionMatrixInverse.copy(K0.projectionMatrixInverse),e.isPerspectiveCamera)e.fov=H9*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(X===null&&N===null)return;return H},this.setFoveation=function(e){if(H=e,X!==null)X.fixedFoveation=e;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=e},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(D)};let w=null;function W0(e,K0){if(Y=K0.getViewerPose(q||K),F=K0,Y!==null){let Z0=Y.views;if(N!==null)J.setRenderTargetFramebuffer(O,N.framebuffer),J.setRenderTarget(O);let M0=!1;if(Z0.length!==D.cameras.length)D.cameras.length=0,M0=!0;for(let u0=0;u0<Z0.length;u0++){let m0=Z0[u0],Y8=null;if(N!==null)Y8=N.getViewport(m0);else{let u=G.getViewSubImage(X,m0);if(Y8=u.viewport,u0===0)J.setRenderTargetTextures(O,u.colorTexture,u.depthStencilTexture),J.setRenderTarget(O)}let J8=x[u0];if(J8===void 0)J8=new IJ,J8.layers.enable(u0),J8.viewport=new v8,x[u0]=J8;if(J8.matrix.fromArray(m0.transform.matrix),J8.matrix.decompose(J8.position,J8.quaternion,J8.scale),J8.projectionMatrix.fromArray(m0.projectionMatrix),J8.projectionMatrixInverse.copy(J8.projectionMatrix).invert(),J8.viewport.set(Y8.x,Y8.y,Y8.width,Y8.height),u0===0)D.matrix.copy(J8.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(M0===!0)D.cameras.push(J8)}let q0=Z.enabledFeatures;if(q0&&q0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&G){let u0=G.getDepthInformation(Z0[0]);if(u0&&u0.isValid&&u0.texture)M.init(J,u0,Z.renderState)}}for(let Z0=0;Z0<z.length;Z0++){let M0=B[Z0],q0=z[Z0];if(M0!==null&&q0!==void 0)q0.update(M0,K0,q||K)}if(w)w(e,K0);if(K0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:K0});F=null}let R0=new wL;R0.setAnimationLoop(W0),this.setAnimationLoop=function(e){w=e},this.dispose=function(){}}}var E9=new ZQ,NC=new M8;function FC(J,$){function Q(L,O){if(L.matrixAutoUpdate===!0)L.updateMatrix();O.value.copy(L.matrix)}function Z(L,O){if(O.color.getRGB(L.fogColor.value,fq(J)),O.isFog)L.fogNear.value=O.near,L.fogFar.value=O.far;else if(O.isFogExp2)L.fogDensity.value=O.density}function W(L,O,z,B,I){if(O.isMeshBasicMaterial)K(L,O);else if(O.isMeshLambertMaterial)K(L,O);else if(O.isMeshToonMaterial)K(L,O),X(L,O);else if(O.isMeshPhongMaterial)K(L,O),G(L,O);else if(O.isMeshStandardMaterial){if(K(L,O),N(L,O),O.isMeshPhysicalMaterial)F(L,O,I)}else if(O.isMeshMatcapMaterial)K(L,O),M(L,O);else if(O.isMeshDepthMaterial)K(L,O);else if(O.isMeshDistanceMaterial)K(L,O),E(L,O);else if(O.isMeshNormalMaterial)K(L,O);else if(O.isLineBasicMaterial){if(U(L,O),O.isLineDashedMaterial)H(L,O)}else if(O.isPointsMaterial)q(L,O,z,B);else if(O.isSpriteMaterial)Y(L,O);else if(O.isShadowMaterial)L.color.value.copy(O.color),L.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(L,O){if(L.opacity.value=O.opacity,O.color)L.diffuse.value.copy(O.color);if(O.emissive)L.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)L.map.value=O.map,Q(O.map,L.mapTransform);if(O.alphaMap)L.alphaMap.value=O.alphaMap,Q(O.alphaMap,L.alphaMapTransform);if(O.bumpMap){if(L.bumpMap.value=O.bumpMap,Q(O.bumpMap,L.bumpMapTransform),L.bumpScale.value=O.bumpScale,O.side===j$)L.bumpScale.value*=-1}if(O.normalMap){if(L.normalMap.value=O.normalMap,Q(O.normalMap,L.normalMapTransform),L.normalScale.value.copy(O.normalScale),O.side===j$)L.normalScale.value.negate()}if(O.displacementMap)L.displacementMap.value=O.displacementMap,Q(O.displacementMap,L.displacementMapTransform),L.displacementScale.value=O.displacementScale,L.displacementBias.value=O.displacementBias;if(O.emissiveMap)L.emissiveMap.value=O.emissiveMap,Q(O.emissiveMap,L.emissiveMapTransform);if(O.specularMap)L.specularMap.value=O.specularMap,Q(O.specularMap,L.specularMapTransform);if(O.alphaTest>0)L.alphaTest.value=O.alphaTest;let z=$.get(O),B=z.envMap,I=z.envMapRotation;if(B){if(L.envMap.value=B,E9.copy(I),E9.x*=-1,E9.y*=-1,E9.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1)E9.y*=-1,E9.z*=-1;L.envMapRotation.value.setFromMatrix4(NC.makeRotationFromEuler(E9)),L.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,L.reflectivity.value=O.reflectivity,L.ior.value=O.ior,L.refractionRatio.value=O.refractionRatio}if(O.lightMap)L.lightMap.value=O.lightMap,L.lightMapIntensity.value=O.lightMapIntensity,Q(O.lightMap,L.lightMapTransform);if(O.aoMap)L.aoMap.value=O.aoMap,L.aoMapIntensity.value=O.aoMapIntensity,Q(O.aoMap,L.aoMapTransform)}function U(L,O){if(L.diffuse.value.copy(O.color),L.opacity.value=O.opacity,O.map)L.map.value=O.map,Q(O.map,L.mapTransform)}function H(L,O){L.dashSize.value=O.dashSize,L.totalSize.value=O.dashSize+O.gapSize,L.scale.value=O.scale}function q(L,O,z,B){if(L.diffuse.value.copy(O.color),L.opacity.value=O.opacity,L.size.value=O.size*z,L.scale.value=B*0.5,O.map)L.map.value=O.map,Q(O.map,L.uvTransform);if(O.alphaMap)L.alphaMap.value=O.alphaMap,Q(O.alphaMap,L.alphaMapTransform);if(O.alphaTest>0)L.alphaTest.value=O.alphaTest}function Y(L,O){if(L.diffuse.value.copy(O.color),L.opacity.value=O.opacity,L.rotation.value=O.rotation,O.map)L.map.value=O.map,Q(O.map,L.mapTransform);if(O.alphaMap)L.alphaMap.value=O.alphaMap,Q(O.alphaMap,L.alphaMapTransform);if(O.alphaTest>0)L.alphaTest.value=O.alphaTest}function G(L,O){L.specular.value.copy(O.specular),L.shininess.value=Math.max(O.shininess,0.0001)}function X(L,O){if(O.gradientMap)L.gradientMap.value=O.gradientMap}function N(L,O){if(L.metalness.value=O.metalness,O.metalnessMap)L.metalnessMap.value=O.metalnessMap,Q(O.metalnessMap,L.metalnessMapTransform);if(L.roughness.value=O.roughness,O.roughnessMap)L.roughnessMap.value=O.roughnessMap,Q(O.roughnessMap,L.roughnessMapTransform);if(O.envMap)L.envMapIntensity.value=O.envMapIntensity}function F(L,O,z){if(L.ior.value=O.ior,O.sheen>0){if(L.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),L.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)L.sheenColorMap.value=O.sheenColorMap,Q(O.sheenColorMap,L.sheenColorMapTransform);if(O.sheenRoughnessMap)L.sheenRoughnessMap.value=O.sheenRoughnessMap,Q(O.sheenRoughnessMap,L.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(L.clearcoat.value=O.clearcoat,L.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)L.clearcoatMap.value=O.clearcoatMap,Q(O.clearcoatMap,L.clearcoatMapTransform);if(O.clearcoatRoughnessMap)L.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,Q(O.clearcoatRoughnessMap,L.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(L.clearcoatNormalMap.value=O.clearcoatNormalMap,Q(O.clearcoatNormalMap,L.clearcoatNormalMapTransform),L.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===j$)L.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)L.dispersion.value=O.dispersion;if(O.iridescence>0){if(L.iridescence.value=O.iridescence,L.iridescenceIOR.value=O.iridescenceIOR,L.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],L.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)L.iridescenceMap.value=O.iridescenceMap,Q(O.iridescenceMap,L.iridescenceMapTransform);if(O.iridescenceThicknessMap)L.iridescenceThicknessMap.value=O.iridescenceThicknessMap,Q(O.iridescenceThicknessMap,L.iridescenceThicknessMapTransform)}if(O.transmission>0){if(L.transmission.value=O.transmission,L.transmissionSamplerMap.value=z.texture,L.transmissionSamplerSize.value.set(z.width,z.height),O.transmissionMap)L.transmissionMap.value=O.transmissionMap,Q(O.transmissionMap,L.transmissionMapTransform);if(L.thickness.value=O.thickness,O.thicknessMap)L.thicknessMap.value=O.thicknessMap,Q(O.thicknessMap,L.thicknessMapTransform);L.attenuationDistance.value=O.attenuationDistance,L.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(L.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)L.anisotropyMap.value=O.anisotropyMap,Q(O.anisotropyMap,L.anisotropyMapTransform)}if(L.specularIntensity.value=O.specularIntensity,L.specularColor.value.copy(O.specularColor),O.specularColorMap)L.specularColorMap.value=O.specularColorMap,Q(O.specularColorMap,L.specularColorMapTransform);if(O.specularIntensityMap)L.specularIntensityMap.value=O.specularIntensityMap,Q(O.specularIntensityMap,L.specularIntensityMapTransform)}function M(L,O){if(O.matcap)L.matcap.value=O.matcap}function E(L,O){let z=$.get(O).light;L.referencePosition.value.setFromMatrixPosition(z.matrixWorld),L.nearDistance.value=z.shadow.camera.near,L.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function LC(J,$,Q,Z){let W={},K={},U=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function q(z,B){let I=B.program;Z.uniformBlockBinding(z,I)}function Y(z,B){let I=W[z.id];if(I===void 0)M(z),I=G(z),W[z.id]=I,z.addEventListener("dispose",L);let A=B.program;Z.updateUBOMapping(z,A);let C=$.render.frame;if(K[z.id]!==C)N(z),K[z.id]=C}function G(z){let B=X();z.__bindingPointIndex=B;let I=J.createBuffer(),A=z.__size,C=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,A,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,B,I),I}function X(){for(let z=0;z<H;z++)if(U.indexOf(z)===-1)return U.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(z){let B=W[z.id],I=z.uniforms,A=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,B);for(let C=0,P=I.length;C<P;C++){let x=Array.isArray(I[C])?I[C]:[I[C]];for(let D=0,k=x.length;D<k;D++){let b=x[D];if(F(b,C,D,A)===!0){let v=b.__offset,m=Array.isArray(b.value)?b.value:[b.value],n=0;for(let r=0;r<m.length;r++){let s=m[r],J0=E(s);if(typeof s==="number"||typeof s==="boolean")b.__data[0]=s,J.bufferSubData(J.UNIFORM_BUFFER,v+n,b.__data);else if(s.isMatrix3)b.__data[0]=s.elements[0],b.__data[1]=s.elements[1],b.__data[2]=s.elements[2],b.__data[3]=0,b.__data[4]=s.elements[3],b.__data[5]=s.elements[4],b.__data[6]=s.elements[5],b.__data[7]=0,b.__data[8]=s.elements[6],b.__data[9]=s.elements[7],b.__data[10]=s.elements[8],b.__data[11]=0;else s.toArray(b.__data,n),n+=J0.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,v,b.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(z,B,I,A){let C=z.value,P=B+"_"+I;if(A[P]===void 0){if(typeof C==="number"||typeof C==="boolean")A[P]=C;else A[P]=C.clone();return!0}else{let x=A[P];if(typeof C==="number"||typeof C==="boolean"){if(x!==C)return A[P]=C,!0}else if(x.equals(C)===!1)return x.copy(C),!0}return!1}function M(z){let B=z.uniforms,I=0,A=16;for(let P=0,x=B.length;P<x;P++){let D=Array.isArray(B[P])?B[P]:[B[P]];for(let k=0,b=D.length;k<b;k++){let v=D[k],m=Array.isArray(v.value)?v.value:[v.value];for(let n=0,r=m.length;n<r;n++){let s=m[n],J0=E(s),a=I%A,c=a%J0.boundary,w=a+c;if(I+=c,w!==0&&A-w<J0.storage)I+=A-w;v.__data=new Float32Array(J0.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=I,I+=J0.storage}}}let C=I%A;if(C>0)I+=A-C;return z.__size=I,z.__cache={},this}function E(z){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=48,B.storage=48;else if(z.isMatrix4)B.boundary=64,B.storage=64;else if(z.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z);return B}function L(z){let B=z.target;B.removeEventListener("dispose",L);let I=U.indexOf(B.__bindingPointIndex);U.splice(I,1),J.deleteBuffer(W[B.id]),delete W[B.id],delete K[B.id]}function O(){for(let z in W)J.deleteBuffer(W[z]);U=[],W={},K={}}return{bind:q,update:Y,dispose:O}}class HY{constructor(J={}){let{canvas:$=aF(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:U=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:q=!1,powerPreference:Y="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:X=!1}=J;this.isWebGLRenderer=!0;let N;if(Q!==null){if(typeof WebGLRenderingContext!=="undefined"&&Q instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=Q.getContextAttributes().alpha}else N=K;let F=new Uint32Array(4),M=new Int32Array(4),E=null,L=null,O=[],z=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lQ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,I=!1;this._outputColorSpace=C6;let A=0,C=0,P=null,x=-1,D=null,k=new v8,b=new v8,v=null,m=new K8(0),n=0,r=$.width,s=$.height,J0=1,a=null,c=null,w=new v8(0,0,r,s),W0=new v8(0,0,r,s),R0=!1,e=new c7,K0=!1,Z0=!1,M0=new M8,q0=new M8,j0=new i,u0=new v8,m0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y8=!1;function J8(){return P===null?J0:1}let u=Q;function L8(V,j){return $.getContext(V,j)}try{let V={alpha:!0,depth:Z,stencil:W,antialias:U,premultipliedAlpha:H,preserveDrawingBuffer:q,powerPreference:Y,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${eN}`);if($.addEventListener("webglcontextlost",A0,!1),$.addEventListener("webglcontextrestored",y0,!1),$.addEventListener("webglcontextcreationerror",z0,!1),u===null){if(u=L8("webgl2",V),u===null)if(L8("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(V){throw console.error("THREE.WebGLRenderer: "+V.message),V}let D0,p0,o,a0,S0,t0,N8,S8,g,T,$0,Y0,X0,H0,f0,I0,d0,T0,V0,w0,n0,_0,C0,U8;function y(){if(D0=new _4(u),D0.init(),_0=new YC(u,D0),p0=new P4(u,D0,J,_0),o=new HC(u,D0),p0.reverseDepthBuffer&&X)o.buffers.depth.setReversed(!0);a0=new b4(u),S0=new nk,t0=new qC(u,D0,o,S0,p0,_0,a0),N8=new A4(B),S8=new w4(B),g=new pV(u),C0=new k4(u,g),T=new x4(u,g,a0,C0),$0=new h4(u,T,g,a0),V0=new v4(u,p0,t0),I0=new I4(S0),Y0=new sk(B,N8,S8,D0,p0,C0,I0),X0=new FC(B,S0),H0=new ak,f0=new QC(D0),T0=new D4(B,N8,S8,o,$0,N,H),d0=new KC(B,$0,p0),U8=new LC(u,a0,p0,o),w0=new C4(u,D0,a0),n0=new y4(u,D0,a0),a0.programs=Y0.programs,B.capabilities=p0,B.extensions=D0,B.properties=S0,B.renderLists=H0,B.shadowMap=d0,B.state=o,B.info=a0}y();let k0=new mL(B,u);this.xr=k0,this.getContext=function(){return u},this.getContextAttributes=function(){return u.getContextAttributes()},this.forceContextLoss=function(){let V=D0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=D0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return J0},this.setPixelRatio=function(V){if(V===void 0)return;J0=V,this.setSize(r,s,!1)},this.getSize=function(V){return V.set(r,s)},this.setSize=function(V,j,_=!0){if(k0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(r=V,s=j,$.width=Math.floor(V*J0),$.height=Math.floor(j*J0),_===!0)$.style.width=V+"px",$.style.height=j+"px";this.setViewport(0,0,V,j)},this.getDrawingBufferSize=function(V){return V.set(r*J0,s*J0).floor()},this.setDrawingBufferSize=function(V,j,_){r=V,s=j,J0=_,$.width=Math.floor(V*_),$.height=Math.floor(j*_),this.setViewport(0,0,V,j)},this.getCurrentViewport=function(V){return V.copy(k)},this.getViewport=function(V){return V.copy(w)},this.setViewport=function(V,j,_,p){if(V.isVector4)w.set(V.x,V.y,V.z,V.w);else w.set(V,j,_,p);o.viewport(k.copy(w).multiplyScalar(J0).round())},this.getScissor=function(V){return V.copy(W0)},this.setScissor=function(V,j,_,p){if(V.isVector4)W0.set(V.x,V.y,V.z,V.w);else W0.set(V,j,_,p);o.scissor(b.copy(W0).multiplyScalar(J0).round())},this.getScissorTest=function(){return R0},this.setScissorTest=function(V){o.setScissorTest(R0=V)},this.setOpaqueSort=function(V){a=V},this.setTransparentSort=function(V){c=V},this.getClearColor=function(V){return V.copy(T0.getClearColor())},this.setClearColor=function(){T0.setClearColor(...arguments)},this.getClearAlpha=function(){return T0.getClearAlpha()},this.setClearAlpha=function(){T0.setClearAlpha(...arguments)},this.clear=function(V=!0,j=!0,_=!0){let p=0;if(V){let h=!1;if(P!==null){let l=P.texture.format;h=l===$q||l===Jq||l===eH}if(h){let l=P.texture.type,t=l===k6||l===LZ||l===x7||l===EZ||l===rH||l===tH,Q0=T0.getClearColor(),U0=T0.getClearAlpha(),N0=Q0.r,G0=Q0.g,E0=Q0.b;if(t)F[0]=N0,F[1]=G0,F[2]=E0,F[3]=U0,u.clearBufferuiv(u.COLOR,0,F);else M[0]=N0,M[1]=G0,M[2]=E0,M[3]=U0,u.clearBufferiv(u.COLOR,0,M)}else p|=u.COLOR_BUFFER_BIT}if(j)p|=u.DEPTH_BUFFER_BIT;if(_)p|=u.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);u.clear(p)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){$.removeEventListener("webglcontextlost",A0,!1),$.removeEventListener("webglcontextrestored",y0,!1),$.removeEventListener("webglcontextcreationerror",z0,!1),T0.dispose(),H0.dispose(),f0.dispose(),S0.dispose(),N8.dispose(),S8.dispose(),$0.dispose(),C0.dispose(),U8.dispose(),Y0.dispose(),k0.dispose(),k0.removeEventListener("sessionstart",E8),k0.removeEventListener("sessionend",x0),W8.stop()};function A0(V){V.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function y0(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let V=a0.autoReset,j=d0.enabled,_=d0.autoUpdate,p=d0.needsUpdate,h=d0.type;y(),a0.autoReset=V,d0.enabled=j,d0.autoUpdate=_,d0.needsUpdate=p,d0.type=h}function z0(V){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function L0(V){let j=V.target;j.removeEventListener("dispose",L0),g0(j)}function g0(V){$8(V),S0.remove(V)}function $8(V){let j=S0.get(V).programs;if(j!==void 0){if(j.forEach(function(_){Y0.releaseProgram(_)}),V.isShaderMaterial)Y0.releaseShaderCache(V)}}this.renderBufferDirect=function(V,j,_,p,h,l){if(j===null)j=m0;let t=h.isMesh&&h.matrixWorld.determinant()<0,Q0=h8(V,j,_,p,h);o.setMaterial(p,t);let U0=_.index,N0=1;if(p.wireframe===!0){if(U0=T.getWireframeAttribute(_),U0===void 0)return;N0=2}let G0=_.drawRange,E0=_.attributes.position,B0=G0.start*N0,P0=(G0.start+G0.count)*N0;if(l!==null)B0=Math.max(B0,l.start*N0),P0=Math.min(P0,(l.start+l.count)*N0);if(U0!==null)B0=Math.max(B0,0),P0=Math.min(P0,U0.count);else if(E0!==void 0&&E0!==null)B0=Math.max(B0,0),P0=Math.min(P0,E0.count);let c0=P0-B0;if(c0<0||c0===1/0)return;C0.setup(h,p,Q0,_,U0);let Z8,H8=w0;if(U0!==null)Z8=g.get(U0),H8=n0,H8.setIndex(Z8);if(h.isMesh)if(p.wireframe===!0)o.setLineWidth(p.wireframeLinewidth*J8()),H8.setMode(u.LINES);else H8.setMode(u.TRIANGLES);else if(h.isLine){let o0=p.linewidth;if(o0===void 0)o0=1;if(o.setLineWidth(o0*J8()),h.isLineSegments)H8.setMode(u.LINES);else if(h.isLineLoop)H8.setMode(u.LINE_LOOP);else H8.setMode(u.LINE_STRIP)}else if(h.isPoints)H8.setMode(u.POINTS);else if(h.isSprite)H8.setMode(u.TRIANGLES);if(h.isBatchedMesh)if(h._multiDrawInstances!==null)q9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),H8.renderMultiDrawInstances(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount,h._multiDrawInstances);else if(!D0.get("WEBGL_multi_draw")){let{_multiDrawStarts:o0,_multiDrawCounts:X8,_multiDrawCount:l0}=h,x8=U0?g.get(U0).bytesPerElement:1,zJ=S0.get(p).currentProgram.getUniforms();for(let b8=0;b8<l0;b8++)zJ.setValue(u,"_gl_DrawID",b8),H8.render(o0[b8]/x8,X8[b8])}else H8.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)H8.renderInstances(B0,c0,h.count);else if(_.isInstancedBufferGeometry){let o0=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,X8=Math.min(_.instanceCount,o0);H8.renderInstances(B0,c0,X8)}else H8.render(B0,c0)};function _8(V,j,_){if(V.transparent===!0&&V.side===VJ&&V.forceSinglePass===!1)V.side=j$,V.needsUpdate=!0,WJ(V,j,_),V.side=D6,V.needsUpdate=!0,WJ(V,j,_),V.side=VJ;else WJ(V,j,_)}this.compile=function(V,j,_=null){if(_===null)_=V;if(L=f0.get(_),L.init(j),z.push(L),_.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(L.pushLight(h),h.castShadow)L.pushShadow(h)}}),V!==_)V.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(L.pushLight(h),h.castShadow)L.pushShadow(h)}});L.setupLights();let p=new Set;return V.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let l=h.material;if(l)if(Array.isArray(l))for(let t=0;t<l.length;t++){let Q0=l[t];_8(Q0,_,h),p.add(Q0)}else _8(l,_,h),p.add(l)}),L=z.pop(),p},this.compileAsync=function(V,j,_=null){let p=this.compile(V,j,_);return new Promise((h)=>{function l(){if(p.forEach(function(t){if(S0.get(t).currentProgram.isReady())p.delete(t)}),p.size===0){h(V);return}setTimeout(l,10)}if(D0.get("KHR_parallel_shader_compile")!==null)l();else setTimeout(l,10)})};let b0=null;function i0(V){if(b0)b0(V)}function E8(){W8.stop()}function x0(){W8.start()}let W8=new wL;if(W8.setAnimationLoop(i0),typeof self!=="undefined")W8.setContext(self);this.setAnimationLoop=function(V){b0=V,k0.setAnimationLoop(V),V===null?W8.stop():W8.start()},k0.addEventListener("sessionstart",E8),k0.addEventListener("sessionend",x0),this.render=function(V,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(k0.enabled===!0&&k0.isPresenting===!0){if(k0.cameraAutoUpdate===!0)k0.updateCamera(j);j=k0.getCamera()}if(V.isScene===!0)V.onBeforeRender(B,V,j,P);if(L=f0.get(V,z.length),L.init(j),z.push(L),q0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),e.setFromProjectionMatrix(q0),Z0=this.localClippingEnabled,K0=I0.init(this.clippingPlanes,Z0),E=H0.get(V,O.length),E.init(),O.push(E),k0.enabled===!0&&k0.isPresenting===!0){let l=B.xr.getDepthSensingMesh();if(l!==null)r0(l,j,-1/0,B.sortObjects)}if(r0(V,j,0,B.sortObjects),E.finish(),B.sortObjects===!0)E.sort(a,c);if(Y8=k0.enabled===!1||k0.isPresenting===!1||k0.hasDepthSensing()===!1,Y8)T0.addToRenderList(E,V);if(this.info.render.frame++,K0===!0)I0.beginShadows();let _=L.state.shadowsArray;if(d0.render(_,V,j),K0===!0)I0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:p,transmissive:h}=E;if(L.setupLights(),j.isArrayCamera){let l=j.cameras;if(h.length>0)for(let t=0,Q0=l.length;t<Q0;t++){let U0=l[t];ZJ(p,h,V,U0)}if(Y8)T0.render(V);for(let t=0,Q0=l.length;t<Q0;t++){let U0=l[t];G8(E,V,U0,U0.viewport)}}else{if(h.length>0)ZJ(p,h,V,j);if(Y8)T0.render(V);G8(E,V,j)}if(P!==null&&C===0)t0.updateMultisampleRenderTarget(P),t0.updateRenderTargetMipmap(P);if(V.isScene===!0)V.onAfterRender(B,V,j);if(C0.resetDefaultState(),x=-1,D=null,z.pop(),z.length>0){if(L=z[z.length-1],K0===!0)I0.setGlobalState(B.clippingPlanes,L.state.camera)}else L=null;if(O.pop(),O.length>0)E=O[O.length-1];else E=null};function r0(V,j,_,p){if(V.visible===!1)return;if(V.layers.test(j.layers)){if(V.isGroup)_=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(j)}else if(V.isLight){if(L.pushLight(V),V.castShadow)L.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||e.intersectsSprite(V)){if(p)u0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(q0);let t=$0.update(V),Q0=V.material;if(Q0.visible)E.push(V,t,Q0,_,u0.z,null)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||e.intersectsObject(V)){let t=$0.update(V),Q0=V.material;if(p){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();u0.copy(V.boundingSphere.center)}else{if(t.boundingSphere===null)t.computeBoundingSphere();u0.copy(t.boundingSphere.center)}u0.applyMatrix4(V.matrixWorld).applyMatrix4(q0)}if(Array.isArray(Q0)){let U0=t.groups;for(let N0=0,G0=U0.length;N0<G0;N0++){let E0=U0[N0],B0=Q0[E0.materialIndex];if(B0&&B0.visible)E.push(V,t,B0,_,u0.z,E0)}}else if(Q0.visible)E.push(V,t,Q0,_,u0.z,null)}}}let l=V.children;for(let t=0,Q0=l.length;t<Q0;t++)r0(l[t],j,_,p)}function G8(V,j,_,p){let{opaque:h,transmissive:l,transparent:t}=V;if(L.setupLightsView(_),K0===!0)I0.setGlobalState(B.clippingPlanes,_);if(p)o.viewport(k.copy(p));if(h.length>0)B8(h,j,_);if(l.length>0)B8(l,j,_);if(t.length>0)B8(t,j,_);o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),o.setPolygonOffset(!1)}function ZJ(V,j,_,p){if((_.isScene===!0?_.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[p.id]===void 0)L.state.transmissionRenderTarget[p.id]=new w$(1,1,{generateMipmaps:!0,type:D0.has("EXT_color_buffer_half_float")||D0.has("EXT_color_buffer_float")?AJ:k6,minFilter:oQ,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:T8.workingColorSpace});let l=L.state.transmissionRenderTarget[p.id],t=p.viewport||k;l.setSize(t.z*B.transmissionResolutionScale,t.w*B.transmissionResolutionScale);let Q0=B.getRenderTarget(),U0=B.getActiveCubeFace(),N0=B.getActiveMipmapLevel();if(B.setRenderTarget(l),B.getClearColor(m),n=B.getClearAlpha(),n<1)B.setClearColor(16777215,0.5);if(B.clear(),Y8)T0.render(_);let G0=B.toneMapping;B.toneMapping=lQ;let E0=p.viewport;if(p.viewport!==void 0)p.viewport=void 0;if(L.setupLightsView(p),K0===!0)I0.setGlobalState(B.clippingPlanes,p);if(B8(V,_,p),t0.updateMultisampleRenderTarget(l),t0.updateRenderTargetMipmap(l),D0.has("WEBGL_multisampled_render_to_texture")===!1){let B0=!1;for(let P0=0,c0=j.length;P0<c0;P0++){let Z8=j[P0],H8=Z8.object,o0=Z8.geometry,X8=Z8.material,l0=Z8.group;if(X8.side===VJ&&H8.layers.test(p.layers)){let x8=X8.side;X8.side=j$,X8.needsUpdate=!0,a8(H8,_,p,o0,X8,l0),X8.side=x8,X8.needsUpdate=!0,B0=!0}}if(B0===!0)t0.updateMultisampleRenderTarget(l),t0.updateRenderTargetMipmap(l)}if(B.setRenderTarget(Q0,U0,N0),B.setClearColor(m,n),E0!==void 0)p.viewport=E0;B.toneMapping=G0}function B8(V,j,_){let p=j.isScene===!0?j.overrideMaterial:null;for(let h=0,l=V.length;h<l;h++){let t=V[h],Q0=t.object,U0=t.geometry,N0=t.group,G0=t.material;if(G0.allowOverride===!0&&p!==null)G0=p;if(Q0.layers.test(_.layers))a8(Q0,j,_,U0,G0,N0)}}function a8(V,j,_,p,h,l){if(V.onBeforeRender(B,j,_,p,h,l),V.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),h.onBeforeRender(B,j,_,p,V,l),h.transparent===!0&&h.side===VJ&&h.forceSinglePass===!1)h.side=j$,h.needsUpdate=!0,B.renderBufferDirect(_,j,p,h,V,l),h.side=D6,h.needsUpdate=!0,B.renderBufferDirect(_,j,p,h,V,l),h.side=VJ;else B.renderBufferDirect(_,j,p,h,V,l);V.onAfterRender(B,j,_,p,h,l)}function WJ(V,j,_){if(j.isScene!==!0)j=m0;let p=S0.get(V),h=L.state.lights,l=L.state.shadowsArray,t=h.state.version,Q0=Y0.getParameters(V,h.state,l,j,_),U0=Y0.getProgramCacheKey(Q0),N0=p.programs;if(p.environment=V.isMeshStandardMaterial?j.environment:null,p.fog=j.fog,p.envMap=(V.isMeshStandardMaterial?S8:N8).get(V.envMap||p.environment),p.envMapRotation=p.environment!==null&&V.envMap===null?j.environmentRotation:V.envMapRotation,N0===void 0)V.addEventListener("dispose",L0),N0=new Map,p.programs=N0;let G0=N0.get(U0);if(G0!==void 0){if(p.currentProgram===G0&&p.lightsStateVersion===t)return u8(V,Q0),G0}else Q0.uniforms=Y0.getUniforms(V),V.onBeforeCompile(Q0,B),G0=Y0.acquireProgram(Q0,U0),N0.set(U0,G0),p.uniforms=Q0.uniforms;let E0=p.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)E0.clippingPlanes=I0.uniform;if(u8(V,Q0),p.needsLights=y8(V),p.lightsStateVersion=t,p.needsLights)E0.ambientLightColor.value=h.state.ambient,E0.lightProbe.value=h.state.probe,E0.directionalLights.value=h.state.directional,E0.directionalLightShadows.value=h.state.directionalShadow,E0.spotLights.value=h.state.spot,E0.spotLightShadows.value=h.state.spotShadow,E0.rectAreaLights.value=h.state.rectArea,E0.ltc_1.value=h.state.rectAreaLTC1,E0.ltc_2.value=h.state.rectAreaLTC2,E0.pointLights.value=h.state.point,E0.pointLightShadows.value=h.state.pointShadow,E0.hemisphereLights.value=h.state.hemi,E0.directionalShadowMap.value=h.state.directionalShadowMap,E0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,E0.spotShadowMap.value=h.state.spotShadowMap,E0.spotLightMatrix.value=h.state.spotLightMatrix,E0.spotLightMap.value=h.state.spotLightMap,E0.pointShadowMap.value=h.state.pointShadowMap,E0.pointShadowMatrix.value=h.state.pointShadowMatrix;return p.currentProgram=G0,p.uniformsList=null,G0}function c8(V){if(V.uniformsList===null){let j=V.currentProgram.getUniforms();V.uniformsList=t7.seqWithValue(j.seq,V.uniforms)}return V.uniformsList}function u8(V,j){let _=S0.get(V);_.outputColorSpace=j.outputColorSpace,_.batching=j.batching,_.batchingColor=j.batchingColor,_.instancing=j.instancing,_.instancingColor=j.instancingColor,_.instancingMorph=j.instancingMorph,_.skinning=j.skinning,_.morphTargets=j.morphTargets,_.morphNormals=j.morphNormals,_.morphColors=j.morphColors,_.morphTargetsCount=j.morphTargetsCount,_.numClippingPlanes=j.numClippingPlanes,_.numIntersection=j.numClipIntersection,_.vertexAlphas=j.vertexAlphas,_.vertexTangents=j.vertexTangents,_.toneMapping=j.toneMapping}function h8(V,j,_,p,h){if(j.isScene!==!0)j=m0;t0.resetTextureUnits();let l=j.fog,t=p.isMeshStandardMaterial?j.environment:null,Q0=P===null?B.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:XJ,U0=(p.isMeshStandardMaterial?S8:N8).get(p.envMap||t),N0=p.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,G0=!!_.attributes.tangent&&(!!p.normalMap||p.anisotropy>0),E0=!!_.morphAttributes.position,B0=!!_.morphAttributes.normal,P0=!!_.morphAttributes.color,c0=lQ;if(p.toneMapped){if(P===null||P.isXRRenderTarget===!0)c0=B.toneMapping}let Z8=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,H8=Z8!==void 0?Z8.length:0,o0=S0.get(p),X8=L.state.lights;if(K0===!0){if(Z0===!0||V!==D){let r8=V===D&&p.id===x;I0.setState(p,V,r8)}}let l0=!1;if(p.version===o0.__version){if(o0.needsLights&&o0.lightsStateVersion!==X8.state.version)l0=!0;else if(o0.outputColorSpace!==Q0)l0=!0;else if(h.isBatchedMesh&&o0.batching===!1)l0=!0;else if(!h.isBatchedMesh&&o0.batching===!0)l0=!0;else if(h.isBatchedMesh&&o0.batchingColor===!0&&h.colorTexture===null)l0=!0;else if(h.isBatchedMesh&&o0.batchingColor===!1&&h.colorTexture!==null)l0=!0;else if(h.isInstancedMesh&&o0.instancing===!1)l0=!0;else if(!h.isInstancedMesh&&o0.instancing===!0)l0=!0;else if(h.isSkinnedMesh&&o0.skinning===!1)l0=!0;else if(!h.isSkinnedMesh&&o0.skinning===!0)l0=!0;else if(h.isInstancedMesh&&o0.instancingColor===!0&&h.instanceColor===null)l0=!0;else if(h.isInstancedMesh&&o0.instancingColor===!1&&h.instanceColor!==null)l0=!0;else if(h.isInstancedMesh&&o0.instancingMorph===!0&&h.morphTexture===null)l0=!0;else if(h.isInstancedMesh&&o0.instancingMorph===!1&&h.morphTexture!==null)l0=!0;else if(o0.envMap!==U0)l0=!0;else if(p.fog===!0&&o0.fog!==l)l0=!0;else if(o0.numClippingPlanes!==void 0&&(o0.numClippingPlanes!==I0.numPlanes||o0.numIntersection!==I0.numIntersection))l0=!0;else if(o0.vertexAlphas!==N0)l0=!0;else if(o0.vertexTangents!==G0)l0=!0;else if(o0.morphTargets!==E0)l0=!0;else if(o0.morphNormals!==B0)l0=!0;else if(o0.morphColors!==P0)l0=!0;else if(o0.toneMapping!==c0)l0=!0;else if(o0.morphTargetsCount!==H8)l0=!0}else l0=!0,o0.__version=p.version;let x8=o0.currentProgram;if(l0===!0)x8=WJ(p,j,h);let zJ=!1,b8=!1,j8=!1,q8=x8.getUniforms(),HJ=o0.uniforms;if(o.useProgram(x8.program))zJ=!0,b8=!0,j8=!0;if(p.id!==x)x=p.id,b8=!0;if(zJ||D!==V){if(o.buffers.depth.getReversed())M0.copy(V.projectionMatrix),tF(M0),eF(M0),q8.setValue(u,"projectionMatrix",M0);else q8.setValue(u,"projectionMatrix",V.projectionMatrix);q8.setValue(u,"viewMatrix",V.matrixWorldInverse);let DJ=q8.map.cameraPosition;if(DJ!==void 0)DJ.setValue(u,j0.setFromMatrixPosition(V.matrixWorld));if(p0.logarithmicDepthBuffer)q8.setValue(u,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(p.isMeshPhongMaterial||p.isMeshToonMaterial||p.isMeshLambertMaterial||p.isMeshBasicMaterial||p.isMeshStandardMaterial||p.isShaderMaterial)q8.setValue(u,"isOrthographic",V.isOrthographicCamera===!0);if(D!==V)D=V,b8=!0,j8=!0}if(h.isSkinnedMesh){q8.setOptional(u,h,"bindMatrix"),q8.setOptional(u,h,"bindMatrixInverse");let r8=h.skeleton;if(r8){if(r8.boneTexture===null)r8.computeBoneTexture();q8.setValue(u,"boneTexture",r8.boneTexture,t0)}}if(h.isBatchedMesh){if(q8.setOptional(u,h,"batchingTexture"),q8.setValue(u,"batchingTexture",h._matricesTexture,t0),q8.setOptional(u,h,"batchingIdTexture"),q8.setValue(u,"batchingIdTexture",h._indirectTexture,t0),q8.setOptional(u,h,"batchingColorTexture"),h._colorsTexture!==null)q8.setValue(u,"batchingColorTexture",h._colorsTexture,t0)}let wJ=_.morphAttributes;if(wJ.position!==void 0||wJ.normal!==void 0||wJ.color!==void 0)V0.update(h,_,x8);if(b8||o0.receiveShadow!==h.receiveShadow)o0.receiveShadow=h.receiveShadow,q8.setValue(u,"receiveShadow",h.receiveShadow);if(p.isMeshGouraudMaterial&&p.envMap!==null)HJ.envMap.value=U0,HJ.flipEnvMap.value=U0.isCubeTexture&&U0.isRenderTargetTexture===!1?-1:1;if(p.isMeshStandardMaterial&&p.envMap===null&&j.environment!==null)HJ.envMapIntensity.value=j.environmentIntensity;if(b8){if(q8.setValue(u,"toneMappingExposure",B.toneMappingExposure),o0.needsLights)NJ(HJ,j8);if(l&&p.fog===!0)X0.refreshFogUniforms(HJ,l);X0.refreshMaterialUniforms(HJ,p,J0,s,L.state.transmissionRenderTarget[V.id]),t7.upload(u,c8(o0),HJ,t0)}if(p.isShaderMaterial&&p.uniformsNeedUpdate===!0)t7.upload(u,c8(o0),HJ,t0),p.uniformsNeedUpdate=!1;if(p.isSpriteMaterial)q8.setValue(u,"center",h.center);if(q8.setValue(u,"modelViewMatrix",h.modelViewMatrix),q8.setValue(u,"normalMatrix",h.normalMatrix),q8.setValue(u,"modelMatrix",h.matrixWorld),p.isShaderMaterial||p.isRawShaderMaterial){let r8=p.uniformsGroups;for(let DJ=0,fK=r8.length;DJ<fK;DJ++){let b6=r8[DJ];U8.update(b6,x8),U8.bind(b6,x8)}}return x8}function NJ(V,j){V.ambientLightColor.needsUpdate=j,V.lightProbe.needsUpdate=j,V.directionalLights.needsUpdate=j,V.directionalLightShadows.needsUpdate=j,V.pointLights.needsUpdate=j,V.pointLightShadows.needsUpdate=j,V.spotLights.needsUpdate=j,V.spotLightShadows.needsUpdate=j,V.rectAreaLights.needsUpdate=j,V.hemisphereLights.needsUpdate=j}function y8(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(V,j,_){let p=S0.get(V);if(p.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,p.__autoAllocateDepthBuffer===!1)p.__useRenderToTexture=!1;S0.get(V.texture).__webglTexture=j,S0.get(V.depthTexture).__webglTexture=p.__autoAllocateDepthBuffer?void 0:_,p.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,j){let _=S0.get(V);_.__webglFramebuffer=j,_.__useDefaultFramebuffer=j===void 0};let R=u.createFramebuffer();this.setRenderTarget=function(V,j=0,_=0){P=V,A=j,C=_;let p=!0,h=null,l=!1,t=!1;if(V){let U0=S0.get(V);if(U0.__useDefaultFramebuffer!==void 0)o.bindFramebuffer(u.FRAMEBUFFER,null),p=!1;else if(U0.__webglFramebuffer===void 0)t0.setupRenderTarget(V);else if(U0.__hasExternalTextures)t0.rebindTextures(V,S0.get(V.texture).__webglTexture,S0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let E0=V.depthTexture;if(U0.__boundDepthTexture!==E0){if(E0!==null&&S0.has(E0)&&(V.width!==E0.image.width||V.height!==E0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");t0.setupDepthRenderbuffer(V)}}let N0=V.texture;if(N0.isData3DTexture||N0.isDataArrayTexture||N0.isCompressedArrayTexture)t=!0;let G0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(G0[j]))h=G0[j][_];else h=G0[j];l=!0}else if(V.samples>0&&t0.useMultisampledRTT(V)===!1)h=S0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(G0))h=G0[_];else h=G0;k.copy(V.viewport),b.copy(V.scissor),v=V.scissorTest}else k.copy(w).multiplyScalar(J0).floor(),b.copy(W0).multiplyScalar(J0).floor(),v=R0;if(_!==0)h=R;if(o.bindFramebuffer(u.FRAMEBUFFER,h)&&p)o.drawBuffers(V,h);if(o.viewport(k),o.scissor(b),o.setScissorTest(v),l){let U0=S0.get(V.texture);u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_CUBE_MAP_POSITIVE_X+j,U0.__webglTexture,_)}else if(t){let U0=S0.get(V.texture),N0=j;u.framebufferTextureLayer(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,U0.__webglTexture,_,N0)}else if(V!==null&&_!==0){let U0=S0.get(V.texture);u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,U0.__webglTexture,_)}x=-1},this.readRenderTargetPixels=function(V,j,_,p,h,l,t,Q0=0){if(!(V&&V.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&t!==void 0)U0=U0[t];if(U0){o.bindFramebuffer(u.FRAMEBUFFER,U0);try{let N0=V.textures[Q0],G0=N0.format,E0=N0.type;if(!p0.textureFormatReadable(G0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!p0.textureTypeReadable(E0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=V.width-p&&(_>=0&&_<=V.height-h)){if(V.textures.length>1)u.readBuffer(u.COLOR_ATTACHMENT0+Q0);u.readPixels(j,_,p,h,_0.convert(G0),_0.convert(E0),l)}}finally{let N0=P!==null?S0.get(P).__webglFramebuffer:null;o.bindFramebuffer(u.FRAMEBUFFER,N0)}}},this.readRenderTargetPixelsAsync=async function(V,j,_,p,h,l,t,Q0=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let U0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&t!==void 0)U0=U0[t];if(U0)if(j>=0&&j<=V.width-p&&(_>=0&&_<=V.height-h)){o.bindFramebuffer(u.FRAMEBUFFER,U0);let N0=V.textures[Q0],G0=N0.format,E0=N0.type;if(!p0.textureFormatReadable(G0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!p0.textureTypeReadable(E0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let B0=u.createBuffer();if(u.bindBuffer(u.PIXEL_PACK_BUFFER,B0),u.bufferData(u.PIXEL_PACK_BUFFER,l.byteLength,u.STREAM_READ),V.textures.length>1)u.readBuffer(u.COLOR_ATTACHMENT0+Q0);u.readPixels(j,_,p,h,_0.convert(G0),_0.convert(E0),0);let P0=P!==null?S0.get(P).__webglFramebuffer:null;o.bindFramebuffer(u.FRAMEBUFFER,P0);let c0=u.fenceSync(u.SYNC_GPU_COMMANDS_COMPLETE,0);return u.flush(),await rF(u,c0,4),u.bindBuffer(u.PIXEL_PACK_BUFFER,B0),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.deleteBuffer(B0),u.deleteSync(c0),l}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,j=null,_=0){let p=Math.pow(2,-_),h=Math.floor(V.image.width*p),l=Math.floor(V.image.height*p),t=j!==null?j.x:0,Q0=j!==null?j.y:0;t0.setTexture2D(V,0),u.copyTexSubImage2D(u.TEXTURE_2D,_,0,0,t,Q0,h,l),o.unbindTexture()};let S=u.createFramebuffer(),f=u.createFramebuffer();if(this.copyTextureToTexture=function(V,j,_=null,p=null,h=0,l=null){if(l===null)if(h!==0)q9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),l=h,h=0;else l=0;let t,Q0,U0,N0,G0,E0,B0,P0,c0,Z8=V.isCompressedTexture?V.mipmaps[l]:V.image;if(_!==null)t=_.max.x-_.min.x,Q0=_.max.y-_.min.y,U0=_.isBox3?_.max.z-_.min.z:1,N0=_.min.x,G0=_.min.y,E0=_.isBox3?_.min.z:0;else{let wJ=Math.pow(2,-h);if(t=Math.floor(Z8.width*wJ),Q0=Math.floor(Z8.height*wJ),V.isDataArrayTexture)U0=Z8.depth;else if(V.isData3DTexture)U0=Math.floor(Z8.depth*wJ);else U0=1;N0=0,G0=0,E0=0}if(p!==null)B0=p.x,P0=p.y,c0=p.z;else B0=0,P0=0,c0=0;let H8=_0.convert(j.format),o0=_0.convert(j.type),X8;if(j.isData3DTexture)t0.setTexture3D(j,0),X8=u.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)t0.setTexture2DArray(j,0),X8=u.TEXTURE_2D_ARRAY;else t0.setTexture2D(j,0),X8=u.TEXTURE_2D;u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,j.flipY),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),u.pixelStorei(u.UNPACK_ALIGNMENT,j.unpackAlignment);let l0=u.getParameter(u.UNPACK_ROW_LENGTH),x8=u.getParameter(u.UNPACK_IMAGE_HEIGHT),zJ=u.getParameter(u.UNPACK_SKIP_PIXELS),b8=u.getParameter(u.UNPACK_SKIP_ROWS),j8=u.getParameter(u.UNPACK_SKIP_IMAGES);u.pixelStorei(u.UNPACK_ROW_LENGTH,Z8.width),u.pixelStorei(u.UNPACK_IMAGE_HEIGHT,Z8.height),u.pixelStorei(u.UNPACK_SKIP_PIXELS,N0),u.pixelStorei(u.UNPACK_SKIP_ROWS,G0),u.pixelStorei(u.UNPACK_SKIP_IMAGES,E0);let q8=V.isDataArrayTexture||V.isData3DTexture,HJ=j.isDataArrayTexture||j.isData3DTexture;if(V.isDepthTexture){let wJ=S0.get(V),r8=S0.get(j),DJ=S0.get(wJ.__renderTarget),fK=S0.get(r8.__renderTarget);o.bindFramebuffer(u.READ_FRAMEBUFFER,DJ.__webglFramebuffer),o.bindFramebuffer(u.DRAW_FRAMEBUFFER,fK.__webglFramebuffer);for(let b6=0;b6<U0;b6++){if(q8)u.framebufferTextureLayer(u.READ_FRAMEBUFFER,u.COLOR_ATTACHMENT0,S0.get(V).__webglTexture,h,E0+b6),u.framebufferTextureLayer(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0,S0.get(j).__webglTexture,l,c0+b6);u.blitFramebuffer(N0,G0,t,Q0,B0,P0,t,Q0,u.DEPTH_BUFFER_BIT,u.NEAREST)}o.bindFramebuffer(u.READ_FRAMEBUFFER,null),o.bindFramebuffer(u.DRAW_FRAMEBUFFER,null)}else if(h!==0||V.isRenderTargetTexture||S0.has(V)){let wJ=S0.get(V),r8=S0.get(j);o.bindFramebuffer(u.READ_FRAMEBUFFER,S),o.bindFramebuffer(u.DRAW_FRAMEBUFFER,f);for(let DJ=0;DJ<U0;DJ++){if(q8)u.framebufferTextureLayer(u.READ_FRAMEBUFFER,u.COLOR_ATTACHMENT0,wJ.__webglTexture,h,E0+DJ);else u.framebufferTexture2D(u.READ_FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,wJ.__webglTexture,h);if(HJ)u.framebufferTextureLayer(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0,r8.__webglTexture,l,c0+DJ);else u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,r8.__webglTexture,l);if(h!==0)u.blitFramebuffer(N0,G0,t,Q0,B0,P0,t,Q0,u.COLOR_BUFFER_BIT,u.NEAREST);else if(HJ)u.copyTexSubImage3D(X8,l,B0,P0,c0+DJ,N0,G0,t,Q0);else u.copyTexSubImage2D(X8,l,B0,P0,N0,G0,t,Q0)}o.bindFramebuffer(u.READ_FRAMEBUFFER,null),o.bindFramebuffer(u.DRAW_FRAMEBUFFER,null)}else if(HJ)if(V.isDataTexture||V.isData3DTexture)u.texSubImage3D(X8,l,B0,P0,c0,t,Q0,U0,H8,o0,Z8.data);else if(j.isCompressedArrayTexture)u.compressedTexSubImage3D(X8,l,B0,P0,c0,t,Q0,U0,H8,Z8.data);else u.texSubImage3D(X8,l,B0,P0,c0,t,Q0,U0,H8,o0,Z8);else if(V.isDataTexture)u.texSubImage2D(u.TEXTURE_2D,l,B0,P0,t,Q0,H8,o0,Z8.data);else if(V.isCompressedTexture)u.compressedTexSubImage2D(u.TEXTURE_2D,l,B0,P0,Z8.width,Z8.height,H8,Z8.data);else u.texSubImage2D(u.TEXTURE_2D,l,B0,P0,t,Q0,H8,o0,Z8);if(u.pixelStorei(u.UNPACK_ROW_LENGTH,l0),u.pixelStorei(u.UNPACK_IMAGE_HEIGHT,x8),u.pixelStorei(u.UNPACK_SKIP_PIXELS,zJ),u.pixelStorei(u.UNPACK_SKIP_ROWS,b8),u.pixelStorei(u.UNPACK_SKIP_IMAGES,j8),l===0&&j.generateMipmaps)u.generateMipmap(X8);o.unbindTexture()},this.copyTextureToTexture3D=function(V,j,_=null,p=null,h=0){return q9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(V,j,_,p,h)},this.initRenderTarget=function(V){if(S0.get(V).__webglFramebuffer===void 0)t0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)t0.setTextureCube(V,0);else if(V.isData3DTexture)t0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)t0.setTexture2DArray(V,0);else t0.setTexture2D(V,0);o.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,o.reset(),C0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return iF}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=T8._getDrawingBufferColorSpace(J),$.unpackColorSpace=T8._getUnpackColorSpace()}}var dL={type:"change"},YY={type:"start"},lL={type:"end"},PK=new iQ,cL=new JQ,EC=Math.cos(70*v7.DEG2RAD),jJ=new i,z$=2*Math.PI,o8={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qY=0.000001;class GY extends VK{constructor(J,$=null){super(J,$);if(this.state=o8.NONE,this.target=new i,this.cursor=new i,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:V6.ROTATE,MIDDLE:V6.DOLLY,RIGHT:V6.PAN},this.touches={ONE:z6.ROTATE,TWO:z6.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new i,this._lastQuaternion=new B$,this._lastTargetPosition=new i,this._quat=new B$().setFromUnitVectors(J.up,new i(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a7,this._sphericalDelta=new a7,this._scale=1,this._panOffset=new i,this._rotateStart=new e0,this._rotateEnd=new e0,this._rotateDelta=new e0,this._panStart=new e0,this._panEnd=new e0,this._panDelta=new e0,this._dollyStart=new e0,this._dollyEnd=new e0,this._dollyDelta=new e0,this._dollyDirection=new i,this._mouse=new e0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OC.bind(this),this._onPointerDown=MC.bind(this),this._onPointerUp=BC.bind(this),this._onContextMenu=PC.bind(this),this._onMouseWheel=zC.bind(this),this._onKeyDown=DC.bind(this),this._onTouchStart=kC.bind(this),this._onTouchMove=CC.bind(this),this._onMouseDown=RC.bind(this),this._onMouseMove=VC.bind(this),this._interceptControlDown=IC.bind(this),this._interceptControlUp=AC.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dL),this.update(),this.state=o8.NONE}update(J=null){let $=this.object.position;if(jJ.copy($).sub(this.target),jJ.applyQuaternion(this._quat),this._spherical.setFromVector3(jJ),this.autoRotate&&this.state===o8.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Q=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(Q)&&isFinite(Z)){if(Q<-Math.PI)Q+=z$;else if(Q>Math.PI)Q-=z$;if(Z<-Math.PI)Z+=z$;else if(Z>Math.PI)Z-=z$;if(Q<=Z)this._spherical.theta=Math.max(Q,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Q+Z)/2?Math.max(Q,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=K!=this._spherical.radius}if(jJ.setFromSpherical(this._spherical),jJ.applyQuaternion(this._quatInverse),$.copy(this.target).add(jJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let U=jJ.length();K=this._clampDistance(U*this._scale);let H=U-K;this.object.position.addScaledVector(this._dollyDirection,H),this.object.updateMatrixWorld(),W=!!H}else if(this.object.isOrthographicCamera){let U=new i(this._mouse.x,this._mouse.y,0);U.unproject(this.object);let H=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=H!==this.object.zoom;let q=new i(this._mouse.x,this._mouse.y,0);q.unproject(this.object),this.object.position.sub(q).add(U),this.object.updateMatrixWorld(),K=jJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(PK.origin.copy(this.object.position),PK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(PK.direction))<EC)this.object.lookAt(this.target);else cL.setFromNormalAndCoplanarPoint(this.object.up,this.target),PK.intersectPlane(cL,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>qY||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qY||this._lastTargetPosition.distanceToSquared(this.target)>qY)return this.dispatchEvent(dL),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return z$/60*this.autoRotateSpeed*J;else return z$/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){jJ.setFromMatrixColumn($,0),jJ.multiplyScalar(-J),this._panOffset.add(jJ)}_panUp(J,$){if(this.screenSpacePanning===!0)jJ.setFromMatrixColumn($,1);else jJ.setFromMatrixColumn($,0),jJ.crossVectors(this.object.up,jJ);jJ.multiplyScalar(J),this._panOffset.add(jJ)}_pan(J,$){let Q=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;jJ.copy(Z).sub(this.target);let W=jJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/Q.clientHeight,this.object.matrix),this._panUp(2*$*W/Q.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Q.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Q.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Q=this.domElement.getBoundingClientRect(),Z=J-Q.left,W=$-Q.top,K=Q.width,U=Q.height;this._mouse.x=Z/K*2-1,this._mouse.y=-(W/U)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(z$*this._rotateDelta.x/$.clientHeight),this._rotateUp(z$*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(z$*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-z$*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(z$*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-z$*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(Q,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(Q,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,W=Math.sqrt(Q*Q+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(z$*this._rotateDelta.x/$.clientHeight),this._rotateUp(z$*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(Q,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,W=Math.sqrt(Q*Q+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+$.x)*0.5,U=(J.pageY+$.y)*0.5;this._updateZoomParameters(K,U)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new e0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Q={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Q.deltaY*=10;return Q}}function MC(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J)}function OC(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function BC(J){switch(this._removePointer(J),this._pointers.length){case 0:this.domElement.releasePointerCapture(J.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lL),this.state=o8.NONE;break;case 1:let $=this._pointers[0],Q=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Q.x,pageY:Q.y});break}}function RC(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case V6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=o8.DOLLY;break;case V6.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=o8.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=o8.ROTATE}break;case V6.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=o8.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=o8.PAN}break;default:this.state=o8.NONE}if(this.state!==o8.NONE)this.dispatchEvent(YY)}function VC(J){switch(this.state){case o8.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case o8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case o8.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function zC(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==o8.NONE)return;J.preventDefault(),this.dispatchEvent(YY),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(lL)}function DC(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function kC(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case z6.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=o8.TOUCH_ROTATE;break;case z6.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=o8.TOUCH_PAN;break;default:this.state=o8.NONE}break;case 2:switch(this.touches.TWO){case z6.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=o8.TOUCH_DOLLY_PAN;break;case z6.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=o8.TOUCH_DOLLY_ROTATE;break;default:this.state=o8.NONE}break;default:this.state=o8.NONE}if(this.state!==o8.NONE)this.dispatchEvent(YY)}function CC(J){switch(this._trackPointer(J),this.state){case o8.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case o8.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case o8.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case o8.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=o8.NONE}}function PC(J){if(this.enabled===!1)return;J.preventDefault()}function IC(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function AC(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function XY(J,$){if($===Sq)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===MZ||$===b7){let Q=J.getIndex();if(Q===null){let U=[],H=J.getAttribute("position");if(H!==void 0){for(let q=0;q<H.count;q++)U.push(q);J.setIndex(U),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,W=[];if($===MZ)for(let U=1;U<=Z;U++)W.push(Q.getX(0)),W.push(Q.getX(U)),W.push(Q.getX(U+1));else for(let U=0;U<Z;U++)if(U%2===0)W.push(Q.getX(U)),W.push(Q.getX(U+1)),W.push(Q.getX(U+2));else W.push(Q.getX(U+2)),W.push(Q.getX(U+1)),W.push(Q.getX(U));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let K=J.clone();return K.setIndex(W),K.clearGroups(),K}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}class OY extends WQ{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new eL($)}),this.register(function($){return new JE($)}),this.register(function($){return new YE($)}),this.register(function($){return new GE($)}),this.register(function($){return new XE($)}),this.register(function($){return new QE($)}),this.register(function($){return new ZE($)}),this.register(function($){return new WE($)}),this.register(function($){return new KE($)}),this.register(function($){return new tL($)}),this.register(function($){return new UE($)}),this.register(function($){return new $E($)}),this.register(function($){return new qE($)}),this.register(function($){return new HE($)}),this.register(function($){return new aL($)}),this.register(function($){return new NE($)}),this.register(function($){return new FE($)})}load(J,$,Q,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let q=j6.extractUrlBase(J);K=j6.resolveURL(q,this.path)}else K=j6.extractUrlBase(J);this.manager.itemStart(J);let U=function(q){if(Z)Z(q);else console.error(q);W.manager.itemError(J),W.manager.itemEnd(J)},H=new DZ(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(q){try{W.parse(q,K,function(Y){$(Y),W.manager.itemEnd(J)},U)}catch(Y){U(Y)}},Q,U)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let W,K={},U={},H=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===LE){try{K[I8.KHR_BINARY_GLTF]=new EE(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(K[I8.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let q=new VE(W,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});q.fileLoader.setRequestHeader(this.requestHeader);for(let Y=0;Y<this.pluginCallbacks.length;Y++){let G=this.pluginCallbacks[Y](q);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");U[G.name]=G,K[G.name]=!0}if(W.extensionsUsed)for(let Y=0;Y<W.extensionsUsed.length;++Y){let G=W.extensionsUsed[Y],X=W.extensionsRequired||[];switch(G){case I8.KHR_MATERIALS_UNLIT:K[G]=new rL;break;case I8.KHR_DRACO_MESH_COMPRESSION:K[G]=new ME(W,this.dracoLoader);break;case I8.KHR_TEXTURE_TRANSFORM:K[G]=new OE;break;case I8.KHR_MESH_QUANTIZATION:K[G]=new BE;break;default:if(X.indexOf(G)>=0&&U[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}q.setExtensions(K),q.setPlugins(U),q.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,W){Q.parse(J,$,Z,W)})}}function TC(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}var I8={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aL{constructor(J){this.parser=J,this.name=I8.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let W=$[Q];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let W=$.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],q,Y=new K8(16777215);if(H.color!==void 0)Y.setRGB(H.color[0],H.color[1],H.color[2],XJ);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":q=new BK(Y),q.target.position.set(0,0,-1),q.add(q.target);break;case"point":q=new OK(Y),q.distance=G;break;case"spot":q=new MK(Y),q.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,q.angle=H.spot.outerConeAngle,q.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,q.target.position.set(0,0,-1),q.add(q.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(q.position.set(0,0,0),tQ(q,H),H.intensity!==void 0)q.intensity=H.intensity;return q.name=$.createUniqueName(H.name||"light_"+J),Z=Promise.resolve(q),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,W=Q.json.nodes[J],U=(W.extensions&&W.extensions[this.name]||{}).light;if(U===void 0)return null;return this._loadLight(U).then(function(H){return Q._getNodeRef($.cache,U,H)})}}class rL{constructor(){this.name=I8.KHR_MATERIALS_UNLIT}getMaterialType(){return OQ}extendParams(J,$,Q){let Z=[];J.color=new K8(1,1,1),J.opacity=1;let W=$.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],XJ),J.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",W.baseColorTexture,C6))}return Promise.all(Z)}}class tL{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)$.emissiveIntensity=W;return Promise.resolve()}}class eL{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.clearcoatFactor!==void 0)$.clearcoat=K.clearcoatFactor;if(K.clearcoatTexture!==void 0)W.push(Q.assignTexture($,"clearcoatMap",K.clearcoatTexture));if(K.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=K.clearcoatRoughnessFactor;if(K.clearcoatRoughnessTexture!==void 0)W.push(Q.assignTexture($,"clearcoatRoughnessMap",K.clearcoatRoughnessTexture));if(K.clearcoatNormalTexture!==void 0){if(W.push(Q.assignTexture($,"clearcoatNormalMap",K.clearcoatNormalTexture)),K.clearcoatNormalTexture.scale!==void 0){let U=K.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new e0(U,U)}}return Promise.all(W)}}class JE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_DISPERSION}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return $.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class $E{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.iridescenceFactor!==void 0)$.iridescence=K.iridescenceFactor;if(K.iridescenceTexture!==void 0)W.push(Q.assignTexture($,"iridescenceMap",K.iridescenceTexture));if(K.iridescenceIor!==void 0)$.iridescenceIOR=K.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(K.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=K.iridescenceThicknessMinimum;if(K.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=K.iridescenceThicknessMaximum;if(K.iridescenceThicknessTexture!==void 0)W.push(Q.assignTexture($,"iridescenceThicknessMap",K.iridescenceThicknessTexture));return Promise.all(W)}}class QE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_SHEEN}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];$.sheenColor=new K8(0,0,0),$.sheenRoughness=0,$.sheen=1;let K=Z.extensions[this.name];if(K.sheenColorFactor!==void 0){let U=K.sheenColorFactor;$.sheenColor.setRGB(U[0],U[1],U[2],XJ)}if(K.sheenRoughnessFactor!==void 0)$.sheenRoughness=K.sheenRoughnessFactor;if(K.sheenColorTexture!==void 0)W.push(Q.assignTexture($,"sheenColorMap",K.sheenColorTexture,C6));if(K.sheenRoughnessTexture!==void 0)W.push(Q.assignTexture($,"sheenRoughnessMap",K.sheenRoughnessTexture));return Promise.all(W)}}class ZE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.transmissionFactor!==void 0)$.transmission=K.transmissionFactor;if(K.transmissionTexture!==void 0)W.push(Q.assignTexture($,"transmissionMap",K.transmissionTexture));return Promise.all(W)}}class WE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_VOLUME}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if($.thickness=K.thicknessFactor!==void 0?K.thicknessFactor:0,K.thicknessTexture!==void 0)W.push(Q.assignTexture($,"thicknessMap",K.thicknessTexture));$.attenuationDistance=K.attenuationDistance||1/0;let U=K.attenuationColor||[1,1,1];return $.attenuationColor=new K8().setRGB(U[0],U[1],U[2],XJ),Promise.all(W)}}class KE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_IOR}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return $.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class UE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_SPECULAR}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if($.specularIntensity=K.specularFactor!==void 0?K.specularFactor:1,K.specularTexture!==void 0)W.push(Q.assignTexture($,"specularIntensityMap",K.specularTexture));let U=K.specularColorFactor||[1,1,1];if($.specularColor=new K8().setRGB(U[0],U[1],U[2],XJ),K.specularColorTexture!==void 0)W.push(Q.assignTexture($,"specularColorMap",K.specularColorTexture,C6));return Promise.all(W)}}class HE{constructor(J){this.parser=J,this.name=I8.EXT_MATERIALS_BUMP}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if($.bumpScale=K.bumpFactor!==void 0?K.bumpFactor:1,K.bumpTexture!==void 0)W.push(Q.assignTexture($,"bumpMap",K.bumpTexture));return Promise.all(W)}}class qE{constructor(J){this.parser=J,this.name=I8.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let Q=this.parser.json.materials[J];if(!Q.extensions||!Q.extensions[this.name])return null;return LJ}extendMaterialParams(J,$){let Q=this.parser,Z=Q.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],K=Z.extensions[this.name];if(K.anisotropyStrength!==void 0)$.anisotropy=K.anisotropyStrength;if(K.anisotropyRotation!==void 0)$.anisotropyRotation=K.anisotropyRotation;if(K.anisotropyTexture!==void 0)W.push(Q.assignTexture($,"anisotropyMap",K.anisotropyTexture));return Promise.all(W)}}class YE{constructor(J){this.parser=J,this.name=I8.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=$.options.ktx2Loader;if(!K)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,W.source,K)}}class GE{constructor(J){this.parser=J,this.name=I8.EXT_TEXTURE_WEBP}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,W=Z.textures[J];if(!W.extensions||!W.extensions[$])return null;let K=W.extensions[$],U=Z.images[K.source],H=Q.textureLoader;if(U.uri){let q=Q.options.manager.getHandler(U.uri);if(q!==null)H=q}return Q.loadTextureImage(J,K.source,H)}}class XE{constructor(J){this.parser=J,this.name=I8.EXT_TEXTURE_AVIF}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,W=Z.textures[J];if(!W.extensions||!W.extensions[$])return null;let K=W.extensions[$],U=Z.images[K.source],H=Q.textureLoader;if(U.uri){let q=Q.options.manager.getHandler(U.uri);if(q!==null)H=q}return Q.loadTextureImage(J,K.source,H)}}class NE{constructor(J){this.name=I8.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(U){let H=Z.byteOffset||0,q=Z.byteLength||0,Y=Z.count,G=Z.byteStride,X=new Uint8Array(U,H,q);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(Y,G,X,Z.mode,Z.filter).then(function(N){return N.buffer});else return K.ready.then(function(){let N=new ArrayBuffer(Y*G);return K.decodeGltfBuffer(new Uint8Array(N),Y,G,X,Z.mode,Z.filter),N})})}else return null}}class FE{constructor(J){this.name=I8.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let q of Z.primitives)if(q.mode!==o$.TRIANGLES&&q.mode!==o$.TRIANGLE_STRIP&&q.mode!==o$.TRIANGLE_FAN&&q.mode!==void 0)return null;let K=Q.extensions[this.name].attributes,U=[],H={};for(let q in K)U.push(this.parser.getDependency("accessor",K[q]).then((Y)=>{return H[q]=Y,H[q]}));if(U.length<1)return null;return U.push(this.parser.createNodeMesh(J)),Promise.all(U).then((q)=>{let Y=q.pop(),G=Y.isGroup?Y.children:[Y],X=q[0].count,N=[];for(let F of G){let M=new M8,E=new i,L=new B$,O=new i(1,1,1),z=new HK(F.geometry,F.material,X);for(let B=0;B<X;B++){if(H.TRANSLATION)E.fromBufferAttribute(H.TRANSLATION,B);if(H.ROTATION)L.fromBufferAttribute(H.ROTATION,B);if(H.SCALE)O.fromBufferAttribute(H.SCALE,B);z.setMatrixAt(B,M.compose(E,L,O))}for(let B in H)if(B==="_COLOR_0"){let I=H[B];z.instanceColor=new Y9(I.array,I.itemSize,I.normalized)}else if(B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE")F.geometry.setAttribute(B,H[B]);l8.prototype.copy.call(z,F),this.parser.assignFinalMaterial(z),N.push(z)}if(Y.isGroup)return Y.clear(),Y.add(...N),Y;return N[0]})}}var LE="glTF",e7=12,oL={JSON:1313821514,BIN:5130562};class EE{constructor(J){this.name=I8.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,e7),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==LE)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-e7,W=new DataView(J,e7),K=0;while(K<Z){let U=W.getUint32(K,!0);K+=4;let H=W.getUint32(K,!0);if(K+=4,H===oL.JSON){let q=new Uint8Array(J,e7+K,U);this.content=Q.decode(q)}else if(H===oL.BIN){let q=e7+K;this.body=J.slice(q,q+U)}K+=U}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ME{constructor(J,$){if(!$)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=I8.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,U={},H={},q={};for(let Y in K){let G=EY[Y]||Y.toLowerCase();U[G]=K[Y]}for(let Y in J.attributes){let G=EY[Y]||Y.toLowerCase();if(K[Y]!==void 0){let X=Q.accessors[J.attributes[Y]],N=SZ[X.componentType];q[G]=N.name,H[G]=X.normalized===!0}}return $.getDependency("bufferView",W).then(function(Y){return new Promise(function(G,X){Z.decodeDracoFile(Y,function(N){for(let F in N.attributes){let M=N.attributes[F],E=H[F];if(E!==void 0)M.normalized=E}G(N)},U,q,XJ,X)})})}}class OE{constructor(){this.name=I8.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);return J.needsUpdate=!0,J}}class BE{constructor(){this.name=I8.KHR_MESH_QUANTIZATION}}class BY extends A6{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let K=0;K!==Z;K++)$[K]=Q[W+K];return $}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,U=this.valueSize,H=U*2,q=U*3,Y=Z-$,G=(Q-$)/Y,X=G*G,N=X*G,F=J*q,M=F-q,E=-2*N+3*X,L=N-X,O=1-E,z=L-X+G;for(let B=0;B!==U;B++){let I=K[M+B+U],A=K[M+B+H]*Y,C=K[F+B+U],P=K[F+B]*Y;W[B]=O*I+z*A+E*C+L*P}return W}}var SC=new B$;class RE extends BY{interpolate_(J,$,Q,Z){let W=super.interpolate_(J,$,Q,Z);return SC.fromArray(W).normalize().toArray(W),W}}var o$={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},SZ={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sL={9728:c$,9729:gJ,9984:o1,9985:FZ,9986:N9,9987:oQ},nL={33071:c1,33648:l1,10497:NZ},NY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},EY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},w6={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jC={CUBICSPLINE:void 0,LINEAR:JK,STEP:Tq},FY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wC(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new zZ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:D6});return J.DefaultMaterial}function B9(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function tQ(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function _C(J,$,Q){let Z=!1,W=!1,K=!1;for(let Y=0,G=$.length;Y<G;Y++){let X=$[Y];if(X.POSITION!==void 0)Z=!0;if(X.NORMAL!==void 0)W=!0;if(X.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve(J);let U=[],H=[],q=[];for(let Y=0,G=$.length;Y<G;Y++){let X=$[Y];if(Z){let N=X.POSITION!==void 0?Q.getDependency("accessor",X.POSITION):J.attributes.position;U.push(N)}if(W){let N=X.NORMAL!==void 0?Q.getDependency("accessor",X.NORMAL):J.attributes.normal;H.push(N)}if(K){let N=X.COLOR_0!==void 0?Q.getDependency("accessor",X.COLOR_0):J.attributes.color;q.push(N)}}return Promise.all([Promise.all(U),Promise.all(H),Promise.all(q)]).then(function(Y){let G=Y[0],X=Y[1],N=Y[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=X;if(K)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function xC(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,W=Q.length;Z<W;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yC(J){let $,Q=J.extensions&&J.extensions[I8.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+LY(Q.attributes);else $=J.indices+":"+LY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)$+=":"+LY(J.targets[Z]);return $}function LY(J){let $="",Q=Object.keys(J).sort();for(let Z=0,W=Q.length;Z<W;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function MY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bC(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var vC=new M8;class VE{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new TC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,W=!1,K=-1;if(typeof navigator!=="undefined"){let U=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(U)===!0;let H=U.match(/Version\/(\d+)/);Z=Q&&H?parseInt(H[1],10):-1,W=U.indexOf("Firefox")>-1,K=W?U.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap==="undefined"||Q&&Z<17||W&&K<98)this.textureLoader=new CZ(this.options.manager);else this.textureLoader=new RK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new DZ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(K){let U={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:Q,userData:{}};return B9(W,U,Z),tQ(U,Z),Promise.all(Q._invokeAll(function(H){return H.afterRoot&&H.afterRoot(U)})).then(function(){for(let H of U.scenes)H.updateMatrixWorld();J(U)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,W=$.length;Z<W;Z++){let K=$[Z].joints;for(let U=0,H=K.length;U<H;U++)J[K[U]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)Q[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),W=(K,U)=>{let H=this.associations.get(K);if(H!=null)this.associations.set(U,H);for(let[q,Y]of K.children.entries())W(Y,U.children[q])};return W(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let W=J($[Z]);if(W)Q.push(W)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode($)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,$)}),!Z)throw new Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(W,K){return Q.getDependency(J,K)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[I8.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){Q.load(j6.resolveURL($.uri,Z.path),W,void 0,function(){K(new Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,W=$.byteOffset||0;return Q.slice(W,W+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=NY[Z.type],U=SZ[Z.componentType],H=Z.normalized===!0,q=new U(Z.count*K);return Promise.resolve(new GJ(q,K,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let U=K[0],H=NY[Z.type],q=SZ[Z.componentType],Y=q.BYTES_PER_ELEMENT,G=Y*H,X=Z.byteOffset||0,N=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,F=Z.normalized===!0,M,E;if(N&&N!==G){let L=Math.floor(X/N),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+L+":"+Z.count,z=$.cache.get(O);if(!z)M=new q(U,L*N,Z.count*N/Y),z=new p7(M,N/Y),$.cache.add(O,z);E=new BZ(z,H,X%N/Y,F)}else{if(U===null)M=new q(Z.count*H);else M=new q(U,X,Z.count*H);E=new GJ(M,H,F)}if(Z.sparse!==void 0){let L=NY.SCALAR,O=SZ[Z.sparse.indices.componentType],z=Z.sparse.indices.byteOffset||0,B=Z.sparse.values.byteOffset||0,I=new O(K[1],z,Z.sparse.count*L),A=new q(K[2],B,Z.sparse.count*H);if(U!==null)E=new GJ(E.array.slice(),E.itemSize,E.normalized);E.normalized=!1;for(let C=0,P=I.length;C<P;C++){let x=I[C];if(E.setX(x,A[C*H]),H>=2)E.setY(x,A[C*H+1]);if(H>=3)E.setZ(x,A[C*H+2]);if(H>=4)E.setW(x,A[C*H+3]);if(H>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}E.normalized=F}return E})}loadTexture(J){let $=this.json,Q=this.options,W=$.textures[J].source,K=$.images[W],U=this.textureLoader;if(K.uri){let H=Q.manager.getHandler(K.uri);if(H!==null)U=H}return this.loadTextureImage(J,W,U)}loadTextureImage(J,$,Q){let Z=this,W=this.json,K=W.textures[J],U=W.images[$],H=(U.uri||U.bufferView)+":"+K.sampler;if(this.textureCache[H])return this.textureCache[H];let q=this.loadImageSource($,Q).then(function(Y){if(Y.flipY=!1,Y.name=K.name||U.name||"",Y.name===""&&typeof U.uri==="string"&&U.uri.startsWith("data:image/")===!1)Y.name=U.uri;let X=(W.samplers||{})[K.sampler]||{};return Y.magFilter=sL[X.magFilter]||gJ,Y.minFilter=sL[X.minFilter]||oQ,Y.wrapS=nL[X.wrapS]||NZ,Y.wrapT=nL[X.wrapT]||NZ,Y.generateMipmaps=!Y.isCompressedTexture&&Y.minFilter!==c$&&Y.minFilter!==gJ,Z.associations.set(Y,{textures:J}),Y}).catch(function(){return null});return this.textureCache[H]=q,q}loadImageSource(J,$){let Q=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let K=Z.images[J],U=self.URL||self.webkitURL,H=K.uri||"",q=!1;if(K.bufferView!==void 0)H=Q.getDependency("bufferView",K.bufferView).then(function(G){q=!0;let X=new Blob([G],{type:K.mimeType});return H=U.createObjectURL(X),H});else if(K.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let Y=Promise.resolve(H).then(function(G){return new Promise(function(X,N){let F=X;if($.isImageBitmapLoader===!0)F=function(M){let E=new RJ(M);E.needsUpdate=!0,X(E)};$.load(j6.resolveURL(G,W.path),F,void 0,N)})}).then(function(G){if(q===!0)U.revokeObjectURL(H);return tQ(G,K),G.userData.mimeType=K.mimeType||bC(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[J]=Y,Y}assignTexture(J,$,Q,Z){let W=this;return this.getDependency("texture",Q.index).then(function(K){if(!K)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)K=K.clone(),K.channel=Q.texCoord;if(W.extensions[I8.KHR_TEXTURE_TRANSFORM]){let U=Q.extensions!==void 0?Q.extensions[I8.KHR_TEXTURE_TRANSFORM]:void 0;if(U){let H=W.associations.get(K);K=W.extensions[I8.KHR_TEXTURE_TRANSFORM].extendTexture(K,U),W.associations.set(K,H)}}if(Z!==void 0)K.colorSpace=Z;return J[$]=K,K})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,W=$.attributes.color!==void 0,K=$.attributes.normal===void 0;if(J.isPoints){let U="PointsMaterial:"+Q.uuid,H=this.cache.get(U);if(!H)H=new o7,R$.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,H.sizeAttenuation=!1,this.cache.add(U,H);Q=H}else if(J.isLine){let U="LineBasicMaterial:"+Q.uuid,H=this.cache.get(U);if(!H)H=new l7,R$.prototype.copy.call(H,Q),H.color.copy(Q.color),H.map=Q.map,this.cache.add(U,H);Q=H}if(Z||W||K){let U="ClonedMaterial:"+Q.uuid+":";if(Z)U+="derivative-tangents:";if(W)U+="vertex-colors:";if(K)U+="flat-shading:";let H=this.cache.get(U);if(!H){if(H=Q.clone(),W)H.vertexColors=!0;if(K)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(U,H),this.associations.set(H,this.associations.get(Q))}Q=H}J.material=Q}getMaterialType(){return zZ}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,W=Q.materials[J],K,U={},H=W.extensions||{},q=[];if(H[I8.KHR_MATERIALS_UNLIT]){let G=Z[I8.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),q.push(G.extendParams(U,W,$))}else{let G=W.pbrMetallicRoughness||{};if(U.color=new K8(1,1,1),U.opacity=1,Array.isArray(G.baseColorFactor)){let X=G.baseColorFactor;U.color.setRGB(X[0],X[1],X[2],XJ),U.opacity=X[3]}if(G.baseColorTexture!==void 0)q.push($.assignTexture(U,"map",G.baseColorTexture,C6));if(U.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,U.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)q.push($.assignTexture(U,"metalnessMap",G.metallicRoughnessTexture)),q.push($.assignTexture(U,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(X){return X.getMaterialType&&X.getMaterialType(J)}),q.push(Promise.all(this._invokeAll(function(X){return X.extendMaterialParams&&X.extendMaterialParams(J,U)})))}if(W.doubleSided===!0)U.side=VJ;let Y=W.alphaMode||FY.OPAQUE;if(Y===FY.BLEND)U.transparent=!0,U.depthWrite=!1;else if(U.transparent=!1,Y===FY.MASK)U.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==OQ){if(q.push($.assignTexture(U,"normalMap",W.normalTexture)),U.normalScale=new e0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;U.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&K!==OQ){if(q.push($.assignTexture(U,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)U.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==OQ){let G=W.emissiveFactor;U.emissive=new K8().setRGB(G[0],G[1],G[2],XJ)}if(W.emissiveTexture!==void 0&&K!==OQ)q.push($.assignTexture(U,"emissiveMap",W.emissiveTexture,C6));return Promise.all(q).then(function(){let G=new K(U);if(W.name)G.name=W.name;if(tQ(G,W),$.associations.set(G,{materials:J}),W.extensions)B9(Z,G,W);return G})}createUniqueName(J){let $=f8.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function W(U){return Q[I8.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(U,$).then(function(H){return iL(H,U,$)})}let K=[];for(let U=0,H=J.length;U<H;U++){let q=J[U],Y=yC(q),G=Z[Y];if(G)K.push(G.promise);else{let X;if(q.extensions&&q.extensions[I8.KHR_DRACO_MESH_COMPRESSION])X=W(q);else X=iL(new uJ,q,$);Z[Y]={primitive:q,promise:X},K.push(X)}}return Promise.all(K)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,W=Q.meshes[J],K=W.primitives,U=[];for(let H=0,q=K.length;H<q;H++){let Y=K[H].material===void 0?wC(this.cache):this.getDependency("material",K[H].material);U.push(Y)}return U.push($.loadGeometries(K)),Promise.all(U).then(function(H){let q=H.slice(0,H.length-1),Y=H[H.length-1],G=[];for(let N=0,F=Y.length;N<F;N++){let M=Y[N],E=K[N],L,O=q[N];if(E.mode===o$.TRIANGLES||E.mode===o$.TRIANGLE_STRIP||E.mode===o$.TRIANGLE_FAN||E.mode===void 0){if(L=W.isSkinnedMesh===!0?new UK(M,O):new i8(M,O),L.isSkinnedMesh===!0)L.normalizeSkinWeights();if(E.mode===o$.TRIANGLE_STRIP)L.geometry=XY(L.geometry,b7);else if(E.mode===o$.TRIANGLE_FAN)L.geometry=XY(L.geometry,MZ)}else if(E.mode===o$.LINES)L=new qK(M,O);else if(E.mode===o$.LINE_STRIP)L=new RZ(M,O);else if(E.mode===o$.LINE_LOOP)L=new YK(M,O);else if(E.mode===o$.POINTS)L=new VZ(M,O);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+E.mode);if(Object.keys(L.geometry.morphAttributes).length>0)xC(L,W);if(L.name=$.createUniqueName(W.name||"mesh_"+J),tQ(L,W),E.extensions)B9(Z,L,E);$.assignFinalMaterial(L),G.push(L)}for(let N=0,F=G.length;N<F;N++)$.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(W.extensions)B9(Z,G[0],W);return G[0]}let X=new d$;if(W.extensions)B9(Z,X,W);$.associations.set(X,{meshes:J});for(let N=0,F=G.length;N<F;N++)X.add(G[N]);return X})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new IJ(v7.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new VQ(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return tQ($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,W=$.joints.length;Z<W;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let W=Z.pop(),K=Z,U=[],H=[];for(let q=0,Y=K.length;q<Y;q++){let G=K[q];if(G){U.push(G);let X=new M8;if(W!==null)X.fromArray(W.array,q*16);H.push(X)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[q])}return new d7(U,H)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],W=Z.name?Z.name:"animation_"+J,K=[],U=[],H=[],q=[],Y=[];for(let G=0,X=Z.channels.length;G<X;G++){let N=Z.channels[G],F=Z.samplers[N.sampler],M=N.target,E=M.node,L=Z.parameters!==void 0?Z.parameters[F.input]:F.input,O=Z.parameters!==void 0?Z.parameters[F.output]:F.output;if(M.node===void 0)continue;K.push(this.getDependency("node",E)),U.push(this.getDependency("accessor",L)),H.push(this.getDependency("accessor",O)),q.push(F),Y.push(M)}return Promise.all([Promise.all(K),Promise.all(U),Promise.all(H),Promise.all(q),Promise.all(Y)]).then(function(G){let X=G[0],N=G[1],F=G[2],M=G[3],E=G[4],L=[];for(let O=0,z=X.length;O<z;O++){let B=X[O],I=N[O],A=F[O],C=M[O],P=E[O];if(B===void 0)continue;if(B.updateMatrix)B.updateMatrix();let x=Q._createAnimationTracks(B,I,A,C,P);if(x)for(let D=0;D<x.length;D++)L.push(x[D])}return new NK(W,void 0,L)})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(W){let K=Q._getNodeRef(Q.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(U){if(!U.isMesh)return;for(let H=0,q=Z.weights.length;H<q;H++)U.morphTargetInfluences[H]=Z.weights[H]});return K})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],W=Q._loadNodeShallow(J),K=[],U=Z.children||[];for(let q=0,Y=U.length;q<Y;q++)K.push(Q.getDependency("node",U[q]));let H=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),H]).then(function(q){let Y=q[0],G=q[1],X=q[2];if(X!==null)Y.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(X,vC)});for(let N=0,F=G.length;N<F;N++)Y.add(G[N]);return Y})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=$.nodes[J],K=W.name?Z.createUniqueName(W.name):"",U=[],H=Z._invokeOne(function(q){return q.createNodeMesh&&q.createNodeMesh(J)});if(H)U.push(H);if(W.camera!==void 0)U.push(Z.getDependency("camera",W.camera).then(function(q){return Z._getNodeRef(Z.cameraCache,W.camera,q)}));return Z._invokeAll(function(q){return q.createNodeAttachment&&q.createNodeAttachment(J)}).forEach(function(q){U.push(q)}),this.nodeCache[J]=Promise.all(U).then(function(q){let Y;if(W.isBone===!0)Y=new m7;else if(q.length>1)Y=new d$;else if(q.length===1)Y=q[0];else Y=new l8;if(Y!==q[0])for(let G=0,X=q.length;G<X;G++)Y.add(q[G]);if(W.name)Y.userData.name=W.name,Y.name=K;if(tQ(Y,W),W.extensions)B9(Q,Y,W);if(W.matrix!==void 0){let G=new M8;G.fromArray(W.matrix),Y.applyMatrix4(G)}else{if(W.translation!==void 0)Y.position.fromArray(W.translation);if(W.rotation!==void 0)Y.quaternion.fromArray(W.rotation);if(W.scale!==void 0)Y.scale.fromArray(W.scale)}if(!Z.associations.has(Y))Z.associations.set(Y,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(Y);Z.associations.set(Y,{...G})}return Z.associations.get(Y).nodes=J,Y}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,W=new d$;if(Q.name)W.name=Z.createUniqueName(Q.name);if(tQ(W,Q),Q.extensions)B9($,W,Q);let K=Q.nodes||[],U=[];for(let H=0,q=K.length;H<q;H++)U.push(Z.getDependency("node",K[H]));return Promise.all(U).then(function(H){for(let Y=0,G=H.length;Y<G;Y++)W.add(H[Y]);let q=(Y)=>{let G=new Map;for(let[X,N]of Z.associations)if(X instanceof R$||X instanceof RJ)G.set(X,N);return Y.traverse((X)=>{let N=Z.associations.get(X);if(N!=null)G.set(X,N)}),G};return Z.associations=q(W),W})}_createAnimationTracks(J,$,Q,Z,W){let K=[],U=J.name?J.name:J.uuid,H=[];if(w6[W.path]===w6.weights)J.traverse(function(X){if(X.morphTargetInfluences)H.push(X.name?X.name:X.uuid)});else H.push(U);let q;switch(w6[W.path]){case w6.weights:q=dQ;break;case w6.rotation:q=rQ;break;case w6.translation:case w6.scale:q=cQ;break;default:switch(Q.itemSize){case 1:q=dQ;break;case 2:case 3:default:q=cQ;break}break}let Y=Z.interpolation!==void 0?jC[Z.interpolation]:JK,G=this._getArrayFromAccessor(Q);for(let X=0,N=H.length;X<N;X++){let F=new q(H[X]+"."+w6[W.path],$.array,G,Y);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);K.push(F)}return K}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=MY($.constructor),Z=new Float32Array($.length);for(let W=0,K=$.length;W<K;W++)Z[W]=$[W]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function $(Q){return new(this instanceof rQ?RE:BY)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hC(J,$,Q){let Z=$.attributes,W=new l$;if(Z.POSITION!==void 0){let H=Q.json.accessors[Z.POSITION],q=H.min,Y=H.max;if(q!==void 0&&Y!==void 0){if(W.set(new i(q[0],q[1],q[2]),new i(Y[0],Y[1],Y[2])),H.normalized){let G=MY(SZ[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=$.targets;if(K!==void 0){let H=new i,q=new i;for(let Y=0,G=K.length;Y<G;Y++){let X=K[Y];if(X.POSITION!==void 0){let N=Q.json.accessors[X.POSITION],F=N.min,M=N.max;if(F!==void 0&&M!==void 0){if(q.setX(Math.max(Math.abs(F[0]),Math.abs(M[0]))),q.setY(Math.max(Math.abs(F[1]),Math.abs(M[1]))),q.setZ(Math.max(Math.abs(F[2]),Math.abs(M[2]))),N.normalized){let E=MY(SZ[N.componentType]);q.multiplyScalar(E)}H.max(q)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}J.boundingBox=W;let U=new _$;W.getCenter(U.center),U.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=U}function iL(J,$,Q){let Z=$.attributes,W=[];function K(U,H){return Q.getDependency("accessor",U).then(function(q){J.setAttribute(H,q)})}for(let U in Z){let H=EY[U]||U.toLowerCase();if(H in J.attributes)continue;W.push(K(Z[U],H))}if($.indices!==void 0&&!J.index){let U=Q.getDependency("accessor",$.indices).then(function(H){J.setIndex(H)});W.push(U)}if(T8.workingColorSpace!==XJ&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${T8.workingColorSpace}" not supported.`);return tQ(J,$),hC(J,$,Q),Promise.all(W).then(function(){return $.targets!==void 0?_C(J,$.targets,Q):J})}var fC=new OY,RY=(J,$)=>{return new Promise((Q,Z)=>{fC.load(J,(W)=>{let K=W.scene;Q(K)})})};var gC=new CZ;function IK(J){return new Promise(($)=>{gC.load(J,(Q)=>{Q.needsUpdate=!0,Q.source.w=Q.source.data.width,Q.source.h=Q.source.data.height,Q.source.r=Q.source.data.width/Q.source.data.height,$(Q)})})}var uC=new LK;function AK(J){return new Promise(($)=>{uC.load(J,(Q)=>{Q.needsUpdate=!0,$(Q)})})}class VY extends kZ{constructor(J){super(J);this.type=AJ}parse(J){let K=function(P,x){switch(P){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},G=function(P,x,D){x=!x?1024:x;let b=P.pos,v=-1,m=0,n="",r=String.fromCharCode.apply(null,new Uint16Array(P.subarray(b,b+128)));while(0>(v=r.indexOf(`
`))&&m<x&&b<P.byteLength)n+=r,m+=r.length,b+=128,r+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(b,b+128)));if(-1<v){if(D!==!1)P.pos+=m+v+1;return n+r.slice(0,v)}return!1},X=function(P){let x=/^#\?(\S+)/,D=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*FORMAT=(\S+)\s*$/,v=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,m={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},n,r;if(P.pos>=P.byteLength||!(n=G(P)))K(1,"no header found");if(!(r=n.match(x)))K(3,"bad initial token");m.valid|=1,m.programtype=r[1],m.string+=n+`
`;while(!0){if(n=G(P),n===!1)break;if(m.string+=n+`
`,n.charAt(0)==="#"){m.comments+=n+`
`;continue}if(r=n.match(D))m.gamma=parseFloat(r[1]);if(r=n.match(k))m.exposure=parseFloat(r[1]);if(r=n.match(b))m.valid|=2,m.format=r[1];if(r=n.match(v))m.valid|=4,m.height=parseInt(r[1],10),m.width=parseInt(r[2],10);if(m.valid&2&&m.valid&4)break}if(!(m.valid&2))K(3,"missing format specifier");if(!(m.valid&4))K(3,"missing image size specifier");return m},N=function(P,x,D){let k=x;if(k<8||k>32767||(P[0]!==2||P[1]!==2||P[2]&128))return new Uint8Array(P);if(k!==(P[2]<<8|P[3]))K(3,"wrong scanline width");let b=new Uint8Array(4*x*D);if(!b.length)K(4,"unable to allocate buffer space");let v=0,m=0,n=4*k,r=new Uint8Array(4),s=new Uint8Array(n),J0=D;while(J0>0&&m<P.byteLength){if(m+4>P.byteLength)K(1);if(r[0]=P[m++],r[1]=P[m++],r[2]=P[m++],r[3]=P[m++],r[0]!=2||r[1]!=2||(r[2]<<8|r[3])!=k)K(3,"bad rgbe scanline format");let a=0,c;while(a<n&&m<P.byteLength){c=P[m++];let W0=c>128;if(W0)c-=128;if(c===0||a+c>n)K(3,"bad scanline data");if(W0){let R0=P[m++];for(let e=0;e<c;e++)s[a++]=R0}else s.set(P.subarray(m,m+c),a),a+=c,m+=c}let w=k;for(let W0=0;W0<w;W0++){let R0=0;b[v]=s[W0+R0],R0+=k,b[v+1]=s[W0+R0],R0+=k,b[v+2]=s[W0+R0],R0+=k,b[v+3]=s[W0+R0],v+=4}J0--}return b},F=function(P,x,D,k){let b=P[x+3],v=Math.pow(2,b-128)/255;D[k+0]=P[x+0]*v,D[k+1]=P[x+1]*v,D[k+2]=P[x+2]*v,D[k+3]=1},M=function(P,x,D,k){let b=P[x+3],v=Math.pow(2,b-128)/255;D[k+0]=BQ.toHalfFloat(Math.min(P[x+0]*v,65504)),D[k+1]=BQ.toHalfFloat(Math.min(P[x+1]*v,65504)),D[k+2]=BQ.toHalfFloat(Math.min(P[x+2]*v,65504)),D[k+3]=BQ.toHalfFloat(1)},E=new Uint8Array(J);E.pos=0;let L=X(E),O=L.width,z=L.height,B=N(E.subarray(E.pos),O,z),I,A,C;switch(this.type){case $J:C=B.length/4;let P=new Float32Array(C*4);for(let D=0;D<C;D++)F(B,D*4,P,D*4);I=P,A=$J;break;case AJ:C=B.length/4;let x=new Uint16Array(C*4);for(let D=0;D<C;D++)M(B,D*4,x,D*4);I=x,A=AJ;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:O,height:z,data:I,header:L.string,gamma:L.gamma,exposure:L.exposure,type:A}}setDataType(J){return this.type=J,this}load(J,$,Q,Z){function W(K,U){switch(K.type){case $J:case AJ:K.colorSpace=XJ,K.minFilter=gJ,K.magFilter=gJ,K.generateMipmaps=!1,K.flipY=!0;break}if($)$(K,U)}return super.load(J,W,Q,Z)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var s$=Uint8Array,jZ=Uint16Array,pC=Int32Array,zE=new s$([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),DE=new s$([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mC=new s$([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kE=function(J,$){var Q=new jZ(31);for(var Z=0;Z<31;++Z)Q[Z]=$+=1<<J[Z-1];var W=new pC(Q[30]);for(var Z=1;Z<30;++Z)for(var K=Q[Z];K<Q[Z+1];++K)W[K]=K-Q[Z]<<5|Z;return{b:Q,r:W}},CE=kE(zE,2),PE=CE.b,dC=CE.r;PE[28]=258,dC[258]=28;var IE=kE(DE,0),cC=IE.b,MT=IE.r,kY=new jZ(32768);for(A8=0;A8<32768;++A8)DQ=(A8&43690)>>1|(A8&21845)<<1,DQ=(DQ&52428)>>2|(DQ&13107)<<2,DQ=(DQ&61680)>>4|(DQ&3855)<<4,kY[A8]=((DQ&65280)>>8|(DQ&255)<<8)>>1;var DQ,A8,JW=function(J,$,Q){var Z=J.length,W=0,K=new jZ($);for(;W<Z;++W)if(J[W])++K[J[W]-1];var U=new jZ($);for(W=1;W<$;++W)U[W]=U[W-1]+K[W-1]<<1;var H;if(Q){H=new jZ(1<<$);var q=15-$;for(W=0;W<Z;++W)if(J[W]){var Y=W<<4|J[W],G=$-J[W],X=U[J[W]-1]++<<G;for(var N=X|(1<<G)-1;X<=N;++X)H[kY[X]>>q]=Y}}else{H=new jZ(Z);for(W=0;W<Z;++W)if(J[W])H[W]=kY[U[J[W]-1]++]>>15-J[W]}return H},$W=new s$(288);for(A8=0;A8<144;++A8)$W[A8]=8;var A8;for(A8=144;A8<256;++A8)$W[A8]=9;var A8;for(A8=256;A8<280;++A8)$W[A8]=7;var A8;for(A8=280;A8<288;++A8)$W[A8]=8;var A8,AE=new s$(32);for(A8=0;A8<32;++A8)AE[A8]=5;var A8;var lC=JW($W,9,1);var oC=JW(AE,5,1),zY=function(J){var $=J[0];for(var Q=1;Q<J.length;++Q)if(J[Q]>$)$=J[Q];return $},KQ=function(J,$,Q){var Z=$/8|0;return(J[Z]|J[Z+1]<<8)>>($&7)&Q},DY=function(J,$){var Q=$/8|0;return(J[Q]|J[Q+1]<<8|J[Q+2]<<16)>>($&7)},sC=function(J){return(J+7)/8|0},nC=function(J,$,Q){if($==null||$<0)$=0;if(Q==null||Q>J.length)Q=J.length;return new s$(J.subarray($,Q))};var iC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],UQ=function(J,$,Q){var Z=new Error($||iC[J]);if(Z.code=J,Error.captureStackTrace)Error.captureStackTrace(Z,UQ);if(!Q)throw Z;return Z},aC=function(J,$,Q,Z){var W=J.length,K=Z?Z.length:0;if(!W||$.f&&!$.l)return Q||new s$(0);var U=!Q,H=U||$.i!=2,q=$.i;if(U)Q=new s$(W*3);var Y=function(Y8){var J8=Q.length;if(Y8>J8){var u=new s$(Math.max(J8*2,Y8));u.set(Q),Q=u}},G=$.f||0,X=$.p||0,N=$.b||0,F=$.l,M=$.d,E=$.m,L=$.n,O=W*8;do{if(!F){G=KQ(J,X,1);var z=KQ(J,X+1,3);if(X+=3,!z){var B=sC(X)+4,I=J[B-4]|J[B-3]<<8,A=B+I;if(A>W){if(q)UQ(0);break}if(H)Y(N+I);Q.set(J.subarray(B,A),N),$.b=N+=I,$.p=X=A*8,$.f=G;continue}else if(z==1)F=lC,M=oC,E=9,L=5;else if(z==2){var C=KQ(J,X,31)+257,P=KQ(J,X+10,15)+4,x=C+KQ(J,X+5,31)+1;X+=14;var D=new s$(x),k=new s$(19);for(var b=0;b<P;++b)k[mC[b]]=KQ(J,X+b*3,7);X+=P*3;var v=zY(k),m=(1<<v)-1,n=JW(k,v,1);for(var b=0;b<x;){var r=n[KQ(J,X,m)];X+=r&15;var B=r>>4;if(B<16)D[b++]=B;else{var s=0,J0=0;if(B==16)J0=3+KQ(J,X,3),X+=2,s=D[b-1];else if(B==17)J0=3+KQ(J,X,7),X+=3;else if(B==18)J0=11+KQ(J,X,127),X+=7;while(J0--)D[b++]=s}}var a=D.subarray(0,C),c=D.subarray(C);E=zY(a),L=zY(c),F=JW(a,E,1),M=JW(c,L,1)}else UQ(1);if(X>O){if(q)UQ(0);break}}if(H)Y(N+131072);var w=(1<<E)-1,W0=(1<<L)-1,R0=X;for(;;R0=X){var s=F[DY(J,X)&w],e=s>>4;if(X+=s&15,X>O){if(q)UQ(0);break}if(!s)UQ(2);if(e<256)Q[N++]=e;else if(e==256){R0=X,F=null;break}else{var K0=e-254;if(e>264){var b=e-257,Z0=zE[b];K0=KQ(J,X,(1<<Z0)-1)+PE[b],X+=Z0}var M0=M[DY(J,X)&W0],q0=M0>>4;if(!M0)UQ(3);X+=M0&15;var c=cC[q0];if(q0>3){var Z0=DE[q0];c+=DY(J,X)&(1<<Z0)-1,X+=Z0}if(X>O){if(q)UQ(0);break}if(H)Y(N+131072);var j0=N+K0;if(N<c){var u0=K-c,m0=Math.min(c,j0);if(u0+N<0)UQ(3);for(;N<m0;++N)Q[N]=Z[u0+N]}for(;N<j0;++N)Q[N]=Q[N-c]}}if($.l=F,$.p=R0,$.b=N,$.f=G,F)G=1,$.m=E,$.d=M,$.n=L}while(!G);return N!=Q.length&&U?nC(Q,0,N):Q.subarray(0,N)};var rC=new s$(0);var tC=function(J,$){if((J[0]&15)!=8||J[0]>>4>7||(J[0]<<8|J[1])%31)UQ(6,"invalid zlib data");if((J[1]>>5&1)==+!$)UQ(6,"invalid zlib data: "+(J[1]&32?"need":"unexpected")+" dictionary");return(J[1]>>3&4)+2};function QW(J,$){return aC(J.subarray(tC(J,$&&$.dictionary),-4),{i:2},$&&$.out,$&&$.dictionary)}var eC=typeof TextDecoder!="undefined"&&new TextDecoder,J3=0;try{eC.decode(rC,{stream:!0}),J3=1}catch(J){}class CY extends kZ{constructor(J){super(J);this.type=AJ}parse(J){let x=Math.pow(2.7182818,2.2);function D(R,S){let f=0;for(let j=0;j<65536;++j)if(j==0||R[j>>3]&1<<(j&7))S[f++]=j;let V=f-1;while(f<65536)S[f++]=0;return V}function k(R){for(let S=0;S<16384;S++)R[S]={},R[S].len=0,R[S].lit=0,R[S].p=null}let b={l:0,c:0,lc:0};function v(R,S,f,V,j){while(f<R)S=S<<8|w0(V,j),f+=8;f-=R,b.l=S>>f&(1<<R)-1,b.c=S,b.lc=f}let m=new Array(59);function n(R){for(let f=0;f<=58;++f)m[f]=0;for(let f=0;f<65537;++f)m[R[f]]+=1;let S=0;for(let f=58;f>0;--f){let V=S+m[f]>>1;m[f]=S,S=V}for(let f=0;f<65537;++f){let V=R[f];if(V>0)R[f]=V|m[V]++<<6}}function r(R,S,f,V,j,_){let p=S,h=0,l=0;for(;V<=j;V++){if(p.value-S.value>f)return!1;v(6,h,l,R,p);let t=b.l;if(h=b.c,l=b.lc,_[V]=t,t==63){if(p.value-S.value>f)throw new Error("Something wrong with hufUnpackEncTable");v(8,h,l,R,p);let Q0=b.l+6;if(h=b.c,l=b.lc,V+Q0>j+1)throw new Error("Something wrong with hufUnpackEncTable");while(Q0--)_[V++]=0;V--}else if(t>=59){let Q0=t-59+2;if(V+Q0>j+1)throw new Error("Something wrong with hufUnpackEncTable");while(Q0--)_[V++]=0;V--}}n(_)}function s(R){return R&63}function J0(R){return R>>6}function a(R,S,f,V){for(;S<=f;S++){let j=J0(R[S]),_=s(R[S]);if(j>>_)throw new Error("Invalid table entry");if(_>14){let p=V[j>>_-14];if(p.len)throw new Error("Invalid table entry");if(p.lit++,p.p){let h=p.p;p.p=new Array(p.lit);for(let l=0;l<p.lit-1;++l)p.p[l]=h[l]}else p.p=new Array(1);p.p[p.lit-1]=S}else if(_){let p=0;for(let h=1<<14-_;h>0;h--){let l=V[(j<<14-_)+p];if(l.len||l.p)throw new Error("Invalid table entry");l.len=_,l.lit=S,p++}}}return!0}let c={c:0,lc:0};function w(R,S,f,V){R=R<<8|w0(f,V),S+=8,c.c=R,c.lc=S}let W0={c:0,lc:0};function R0(R,S,f,V,j,_,p,h,l){if(R==S){if(V<8)w(f,V,j,_),f=c.c,V=c.lc;V-=8;let t=f>>V;if(t=new Uint8Array([t])[0],h.value+t>l)return!1;let Q0=p[h.value-1];while(t-- >0)p[h.value++]=Q0}else if(h.value<l)p[h.value++]=R;else return!1;W0.c=f,W0.lc=V}function e(R){return R&65535}function K0(R){let S=e(R);return S>32767?S-65536:S}let Z0={a:0,b:0};function M0(R,S){let f=K0(R),j=K0(S),_=f+(j&1)+(j>>1),p=_,h=_-j;Z0.a=p,Z0.b=h}function q0(R,S){let f=e(R),V=e(S),j=f-(V>>1)&65535,_=V+j-32768&65535;Z0.a=_,Z0.b=j}function j0(R,S,f,V,j,_,p){let h=p<16384,l=f>j?j:f,t=1,Q0,U0;while(t<=l)t<<=1;t>>=1,Q0=t,t>>=1;while(t>=1){U0=0;let N0=U0+_*(j-Q0),G0=_*t,E0=_*Q0,B0=V*t,P0=V*Q0,c0,Z8,H8,o0;for(;U0<=N0;U0+=E0){let X8=U0,l0=U0+V*(f-Q0);for(;X8<=l0;X8+=P0){let x8=X8+B0,zJ=X8+G0,b8=zJ+B0;if(h)M0(R[X8+S],R[zJ+S]),c0=Z0.a,H8=Z0.b,M0(R[x8+S],R[b8+S]),Z8=Z0.a,o0=Z0.b,M0(c0,Z8),R[X8+S]=Z0.a,R[x8+S]=Z0.b,M0(H8,o0),R[zJ+S]=Z0.a,R[b8+S]=Z0.b;else q0(R[X8+S],R[zJ+S]),c0=Z0.a,H8=Z0.b,q0(R[x8+S],R[b8+S]),Z8=Z0.a,o0=Z0.b,q0(c0,Z8),R[X8+S]=Z0.a,R[x8+S]=Z0.b,q0(H8,o0),R[zJ+S]=Z0.a,R[b8+S]=Z0.b}if(f&t){let x8=X8+G0;if(h)M0(R[X8+S],R[x8+S]);else q0(R[X8+S],R[x8+S]);c0=Z0.a,R[x8+S]=Z0.b,R[X8+S]=c0}}if(j&t){let X8=U0,l0=U0+V*(f-Q0);for(;X8<=l0;X8+=P0){let x8=X8+B0;if(h)M0(R[X8+S],R[x8+S]);else q0(R[X8+S],R[x8+S]);c0=Z0.a,R[x8+S]=Z0.b,R[X8+S]=c0}}Q0=t,t>>=1}return U0}function u0(R,S,f,V,j,_,p,h,l){let t=0,Q0=0,U0=p,N0=Math.trunc(V.value+(j+7)/8);while(V.value<N0){w(t,Q0,f,V),t=c.c,Q0=c.lc;while(Q0>=14){let E0=t>>Q0-14&16383,B0=S[E0];if(B0.len)Q0-=B0.len,R0(B0.lit,_,t,Q0,f,V,h,l,U0),t=W0.c,Q0=W0.lc;else{if(!B0.p)throw new Error("hufDecode issues");let P0;for(P0=0;P0<B0.lit;P0++){let c0=s(R[B0.p[P0]]);while(Q0<c0&&V.value<N0)w(t,Q0,f,V),t=c.c,Q0=c.lc;if(Q0>=c0){if(J0(R[B0.p[P0]])==(t>>Q0-c0&(1<<c0)-1)){Q0-=c0,R0(B0.p[P0],_,t,Q0,f,V,h,l,U0),t=W0.c,Q0=W0.lc;break}}}if(P0==B0.lit)throw new Error("hufDecode issues")}}}let G0=8-j&7;t>>=G0,Q0-=G0;while(Q0>0){let E0=S[t<<14-Q0&16383];if(E0.len)Q0-=E0.len,R0(E0.lit,_,t,Q0,f,V,h,l,U0),t=W0.c,Q0=W0.lc;else throw new Error("hufDecode issues")}return!0}function m0(R,S,f,V,j,_){let p={value:0},h=f.value,l=V0(S,f),t=V0(S,f);f.value+=4;let Q0=V0(S,f);if(f.value+=4,l<0||l>=65537||t<0||t>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let U0=new Array(65537),N0=new Array(16384);k(N0);let G0=V-(f.value-h);if(r(R,f,G0,l,t,U0),Q0>8*(V-(f.value-h)))throw new Error("Something wrong with hufUncompress");a(U0,l,t,N0),u0(U0,N0,R,f,Q0,t,_,j,p)}function Y8(R,S,f){for(let V=0;V<f;++V)S[V]=R[S[V]]}function J8(R){for(let S=1;S<R.length;S++){let f=R[S-1]+R[S]-128;R[S]=f}}function u(R,S){let f=0,V=Math.floor((R.length+1)/2),j=0,_=R.length-1;while(!0){if(j>_)break;if(S[j++]=R[f++],j>_)break;S[j++]=R[V++]}}function L8(R){let S=R.byteLength,f=new Array,V=0,j=new DataView(R);while(S>0){let _=j.getInt8(V++);if(_<0){let p=-_;S-=p+1;for(let h=0;h<p;h++)f.push(j.getUint8(V++))}else{let p=_;S-=2;let h=j.getUint8(V++);for(let l=0;l<p+1;l++)f.push(h)}}return f}function D0(R,S,f,V,j,_){let p=new DataView(_.buffer),h=f[R.idx[0]].width,l=f[R.idx[0]].height,t=3,Q0=Math.floor(h/8),U0=Math.ceil(h/8),N0=Math.ceil(l/8),G0=h-(U0-1)*8,E0=l-(N0-1)*8,B0={value:0},P0=new Array(t),c0=new Array(t),Z8=new Array(t),H8=new Array(t),o0=new Array(t);for(let l0=0;l0<t;++l0)o0[l0]=S[R.idx[l0]],P0[l0]=l0<1?0:P0[l0-1]+U0*N0,c0[l0]=new Float32Array(64),Z8[l0]=new Uint16Array(64),H8[l0]=new Uint16Array(U0*64);for(let l0=0;l0<N0;++l0){let x8=8;if(l0==N0-1)x8=E0;let zJ=8;for(let j8=0;j8<U0;++j8){if(j8==U0-1)zJ=G0;for(let q8=0;q8<t;++q8)Z8[q8].fill(0),Z8[q8][0]=j[P0[q8]++],p0(B0,V,Z8[q8]),o(Z8[q8],c0[q8]),a0(c0[q8]);if(t==3)S0(c0);for(let q8=0;q8<t;++q8)t0(c0[q8],H8[q8],j8*64)}let b8=0;for(let j8=0;j8<t;++j8){let q8=f[R.idx[j8]].type;for(let HJ=8*l0;HJ<8*l0+x8;++HJ){b8=o0[j8][HJ];for(let wJ=0;wJ<Q0;++wJ){let r8=wJ*64+(HJ&7)*8;p.setUint16(b8+0*q8,H8[j8][r8+0],!0),p.setUint16(b8+2*q8,H8[j8][r8+1],!0),p.setUint16(b8+4*q8,H8[j8][r8+2],!0),p.setUint16(b8+6*q8,H8[j8][r8+3],!0),p.setUint16(b8+8*q8,H8[j8][r8+4],!0),p.setUint16(b8+10*q8,H8[j8][r8+5],!0),p.setUint16(b8+12*q8,H8[j8][r8+6],!0),p.setUint16(b8+14*q8,H8[j8][r8+7],!0),b8+=16*q8}}if(Q0!=U0)for(let HJ=8*l0;HJ<8*l0+x8;++HJ){let wJ=o0[j8][HJ]+8*Q0*2*q8,r8=Q0*64+(HJ&7)*8;for(let DJ=0;DJ<zJ;++DJ)p.setUint16(wJ+DJ*2*q8,H8[j8][r8+DJ],!0)}}}let X8=new Uint16Array(h);p=new DataView(_.buffer);for(let l0=0;l0<t;++l0){f[R.idx[l0]].decoded=!0;let x8=f[R.idx[l0]].type;if(f[l0].type!=2)continue;for(let zJ=0;zJ<l;++zJ){let b8=o0[l0][zJ];for(let j8=0;j8<h;++j8)X8[j8]=p.getUint16(b8+j8*2*x8,!0);for(let j8=0;j8<h;++j8)p.setFloat32(b8+j8*2*x8,y(X8[j8]),!0)}}}function p0(R,S,f){let V,j=1;while(j<64){if(V=S[R.value],V==65280)j=64;else if(V>>8==255)j+=V&255;else f[j]=V,j++;R.value++}}function o(R,S){S[0]=y(R[0]),S[1]=y(R[1]),S[2]=y(R[5]),S[3]=y(R[6]),S[4]=y(R[14]),S[5]=y(R[15]),S[6]=y(R[27]),S[7]=y(R[28]),S[8]=y(R[2]),S[9]=y(R[4]),S[10]=y(R[7]),S[11]=y(R[13]),S[12]=y(R[16]),S[13]=y(R[26]),S[14]=y(R[29]),S[15]=y(R[42]),S[16]=y(R[3]),S[17]=y(R[8]),S[18]=y(R[12]),S[19]=y(R[17]),S[20]=y(R[25]),S[21]=y(R[30]),S[22]=y(R[41]),S[23]=y(R[43]),S[24]=y(R[9]),S[25]=y(R[11]),S[26]=y(R[18]),S[27]=y(R[24]),S[28]=y(R[31]),S[29]=y(R[40]),S[30]=y(R[44]),S[31]=y(R[53]),S[32]=y(R[10]),S[33]=y(R[19]),S[34]=y(R[23]),S[35]=y(R[32]),S[36]=y(R[39]),S[37]=y(R[45]),S[38]=y(R[52]),S[39]=y(R[54]),S[40]=y(R[20]),S[41]=y(R[22]),S[42]=y(R[33]),S[43]=y(R[38]),S[44]=y(R[46]),S[45]=y(R[51]),S[46]=y(R[55]),S[47]=y(R[60]),S[48]=y(R[21]),S[49]=y(R[34]),S[50]=y(R[37]),S[51]=y(R[47]),S[52]=y(R[50]),S[53]=y(R[56]),S[54]=y(R[59]),S[55]=y(R[61]),S[56]=y(R[35]),S[57]=y(R[36]),S[58]=y(R[48]),S[59]=y(R[49]),S[60]=y(R[57]),S[61]=y(R[58]),S[62]=y(R[62]),S[63]=y(R[63])}function a0(R){let S=0.5*Math.cos(0.7853975),f=0.5*Math.cos(0.196349375),V=0.5*Math.cos(0.39269875),j=0.5*Math.cos(0.5890481249999999),_=0.5*Math.cos(0.981746875),p=0.5*Math.cos(1.1780962499999998),h=0.5*Math.cos(1.374445625),l=new Array(4),t=new Array(4),Q0=new Array(4),U0=new Array(4);for(let N0=0;N0<8;++N0){let G0=N0*8;l[0]=V*R[G0+2],l[1]=p*R[G0+2],l[2]=V*R[G0+6],l[3]=p*R[G0+6],t[0]=f*R[G0+1]+j*R[G0+3]+_*R[G0+5]+h*R[G0+7],t[1]=j*R[G0+1]-h*R[G0+3]-f*R[G0+5]-_*R[G0+7],t[2]=_*R[G0+1]-f*R[G0+3]+h*R[G0+5]+j*R[G0+7],t[3]=h*R[G0+1]-_*R[G0+3]+j*R[G0+5]-f*R[G0+7],Q0[0]=S*(R[G0+0]+R[G0+4]),Q0[3]=S*(R[G0+0]-R[G0+4]),Q0[1]=l[0]+l[3],Q0[2]=l[1]-l[2],U0[0]=Q0[0]+Q0[1],U0[1]=Q0[3]+Q0[2],U0[2]=Q0[3]-Q0[2],U0[3]=Q0[0]-Q0[1],R[G0+0]=U0[0]+t[0],R[G0+1]=U0[1]+t[1],R[G0+2]=U0[2]+t[2],R[G0+3]=U0[3]+t[3],R[G0+4]=U0[3]-t[3],R[G0+5]=U0[2]-t[2],R[G0+6]=U0[1]-t[1],R[G0+7]=U0[0]-t[0]}for(let N0=0;N0<8;++N0)l[0]=V*R[16+N0],l[1]=p*R[16+N0],l[2]=V*R[48+N0],l[3]=p*R[48+N0],t[0]=f*R[8+N0]+j*R[24+N0]+_*R[40+N0]+h*R[56+N0],t[1]=j*R[8+N0]-h*R[24+N0]-f*R[40+N0]-_*R[56+N0],t[2]=_*R[8+N0]-f*R[24+N0]+h*R[40+N0]+j*R[56+N0],t[3]=h*R[8+N0]-_*R[24+N0]+j*R[40+N0]-f*R[56+N0],Q0[0]=S*(R[N0]+R[32+N0]),Q0[3]=S*(R[N0]-R[32+N0]),Q0[1]=l[0]+l[3],Q0[2]=l[1]-l[2],U0[0]=Q0[0]+Q0[1],U0[1]=Q0[3]+Q0[2],U0[2]=Q0[3]-Q0[2],U0[3]=Q0[0]-Q0[1],R[0+N0]=U0[0]+t[0],R[8+N0]=U0[1]+t[1],R[16+N0]=U0[2]+t[2],R[24+N0]=U0[3]+t[3],R[32+N0]=U0[3]-t[3],R[40+N0]=U0[2]-t[2],R[48+N0]=U0[1]-t[1],R[56+N0]=U0[0]-t[0]}function S0(R){for(let S=0;S<64;++S){let f=R[0][S],V=R[1][S],j=R[2][S];R[0][S]=f+1.5747*j,R[1][S]=f-0.1873*V-0.4682*j,R[2][S]=f+1.8556*V}}function t0(R,S,f){for(let V=0;V<64;++V)S[f+V]=BQ.toHalfFloat(N8(R[V]))}function N8(R){if(R<=1)return Math.sign(R)*Math.pow(Math.abs(R),2.2);else return Math.sign(R)*Math.pow(x,Math.abs(R)-1)}function S8(R){return new DataView(R.array.buffer,R.offset.value,R.size)}function g(R){let S=R.viewer.buffer.slice(R.offset.value,R.offset.value+R.size),f=new Uint8Array(L8(S)),V=new Uint8Array(f.length);return J8(f),u(f,V),new DataView(V.buffer)}function T(R){let S=R.array.slice(R.offset.value,R.offset.value+R.size),f=QW(S),V=new Uint8Array(f.length);return J8(f),u(f,V),new DataView(V.buffer)}function $0(R){let S=R.viewer,f={value:R.offset.value},V=new Uint16Array(R.columns*R.lines*(R.inputChannels.length*R.type)),j=new Uint8Array(8192),_=0,p=new Array(R.inputChannels.length);for(let E0=0,B0=R.inputChannels.length;E0<B0;E0++)p[E0]={},p[E0].start=_,p[E0].end=p[E0].start,p[E0].nx=R.columns,p[E0].ny=R.lines,p[E0].size=R.type,_+=p[E0].nx*p[E0].ny*p[E0].size;let h=k0(S,f),l=k0(S,f);if(l>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(h<=l)for(let E0=0;E0<l-h+1;E0++)j[E0+h]=n0(S,f);let t=new Uint16Array(65536),Q0=D(j,t),U0=V0(S,f);m0(R.array,S,f,U0,V,_);for(let E0=0;E0<R.inputChannels.length;++E0){let B0=p[E0];for(let P0=0;P0<p[E0].size;++P0)j0(V,B0.start+P0,B0.nx,B0.size,B0.ny,B0.nx*B0.size,Q0)}Y8(t,V,_);let N0=0,G0=new Uint8Array(V.buffer.byteLength);for(let E0=0;E0<R.lines;E0++)for(let B0=0;B0<R.inputChannels.length;B0++){let P0=p[B0],c0=P0.nx*P0.size,Z8=new Uint8Array(V.buffer,P0.end*2,c0*2);G0.set(Z8,N0),N0+=c0*2,P0.end+=c0}return new DataView(G0.buffer)}function Y0(R){let S=R.array.slice(R.offset.value,R.offset.value+R.size),f=QW(S),V=R.inputChannels.length*R.lines*R.columns*R.totalBytes,j=new ArrayBuffer(V),_=new DataView(j),p=0,h=0,l=new Array(4);for(let t=0;t<R.lines;t++)for(let Q0=0;Q0<R.inputChannels.length;Q0++){let U0=0;switch(R.inputChannels[Q0].pixelType){case 1:l[0]=p,l[1]=l[0]+R.columns,p=l[1]+R.columns;for(let G0=0;G0<R.columns;++G0){let E0=f[l[0]++]<<8|f[l[1]++];U0+=E0,_.setUint16(h,U0,!0),h+=2}break;case 2:l[0]=p,l[1]=l[0]+R.columns,l[2]=l[1]+R.columns,p=l[2]+R.columns;for(let G0=0;G0<R.columns;++G0){let E0=f[l[0]++]<<24|f[l[1]++]<<16|f[l[2]++]<<8;U0+=E0,_.setUint32(h,U0,!0),h+=4}break}}return _}function X0(R){let S=R.viewer,f={value:R.offset.value},V=new Uint8Array(R.columns*R.lines*(R.inputChannels.length*R.type*2)),j={version:_0(S,f),unknownUncompressedSize:_0(S,f),unknownCompressedSize:_0(S,f),acCompressedSize:_0(S,f),dcCompressedSize:_0(S,f),rleCompressedSize:_0(S,f),rleUncompressedSize:_0(S,f),rleRawSize:_0(S,f),totalAcUncompressedCount:_0(S,f),totalDcUncompressedCount:_0(S,f),acCompression:_0(S,f)};if(j.version<2)throw new Error("EXRLoader.parse: "+NJ.compression+" version "+j.version+" is unsupported");let _=new Array,p=k0(S,f)-2;while(p>0){let B0=H0(S.buffer,f),P0=n0(S,f),c0=P0>>2&3,Z8=(P0>>4)-1,H8=new Int8Array([Z8])[0],o0=n0(S,f);_.push({name:B0,index:H8,type:o0,compression:c0}),p-=B0.length+3}let h=NJ.channels,l=new Array(R.inputChannels.length);for(let B0=0;B0<R.inputChannels.length;++B0){let P0=l[B0]={},c0=h[B0];P0.name=c0.name,P0.compression=0,P0.decoded=!1,P0.type=c0.pixelType,P0.pLinear=c0.pLinear,P0.width=R.columns,P0.height=R.lines}let t={idx:new Array(3)};for(let B0=0;B0<R.inputChannels.length;++B0){let P0=l[B0];for(let c0=0;c0<_.length;++c0){let Z8=_[c0];if(P0.name==Z8.name){if(P0.compression=Z8.compression,Z8.index>=0)t.idx[Z8.index]=B0;P0.offset=B0}}}let Q0,U0,N0;if(j.acCompressedSize>0)switch(j.acCompression){case 0:Q0=new Uint16Array(j.totalAcUncompressedCount),m0(R.array,S,f,j.acCompressedSize,Q0,j.totalAcUncompressedCount);break;case 1:let B0=R.array.slice(f.value,f.value+j.totalAcUncompressedCount),P0=QW(B0);Q0=new Uint16Array(P0.buffer),f.value+=j.totalAcUncompressedCount;break}if(j.dcCompressedSize>0){let B0={array:R.array,offset:f,size:j.dcCompressedSize};U0=new Uint16Array(T(B0).buffer),f.value+=j.dcCompressedSize}if(j.rleRawSize>0){let B0=R.array.slice(f.value,f.value+j.rleCompressedSize),P0=QW(B0);N0=L8(P0.buffer),f.value+=j.rleCompressedSize}let G0=0,E0=new Array(l.length);for(let B0=0;B0<E0.length;++B0)E0[B0]=new Array;for(let B0=0;B0<R.lines;++B0)for(let P0=0;P0<l.length;++P0)E0[P0].push(G0),G0+=l[P0].width*R.type*2;D0(t,E0,l,Q0,U0,V);for(let B0=0;B0<l.length;++B0){let P0=l[B0];if(P0.decoded)continue;switch(P0.compression){case 2:let c0=0,Z8=0;for(let H8=0;H8<R.lines;++H8){let o0=E0[B0][c0];for(let X8=0;X8<P0.width;++X8){for(let l0=0;l0<2*P0.type;++l0)V[o0++]=N0[Z8+l0*P0.width*P0.height];Z8++}c0++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(V.buffer)}function H0(R,S){let f=new Uint8Array(R),V=0;while(f[S.value+V]!=0)V+=1;let j=new TextDecoder().decode(f.slice(S.value,S.value+V));return S.value=S.value+V+1,j}function f0(R,S,f){let V=new TextDecoder().decode(new Uint8Array(R).slice(S.value,S.value+f));return S.value=S.value+f,V}function I0(R,S){let f=T0(R,S),V=V0(R,S);return[f,V]}function d0(R,S){let f=V0(R,S),V=V0(R,S);return[f,V]}function T0(R,S){let f=R.getInt32(S.value,!0);return S.value=S.value+4,f}function V0(R,S){let f=R.getUint32(S.value,!0);return S.value=S.value+4,f}function w0(R,S){let f=R[S.value];return S.value=S.value+1,f}function n0(R,S){let f=R.getUint8(S.value);return S.value=S.value+1,f}let _0=function(R,S){let f;if("getBigInt64"in DataView.prototype)f=Number(R.getBigInt64(S.value,!0));else f=R.getUint32(S.value+4,!0)+Number(R.getUint32(S.value,!0)<<32);return S.value+=8,f};function C0(R,S){let f=R.getFloat32(S.value,!0);return S.value+=4,f}function U8(R,S){return BQ.toHalfFloat(C0(R,S))}function y(R){let S=(R&31744)>>10,f=R&1023;return(R>>15?-1:1)*(S?S===31?f?NaN:1/0:Math.pow(2,S-15)*(1+f/1024):0.00006103515625*(f/1024))}function k0(R,S){let f=R.getUint16(S.value,!0);return S.value+=2,f}function A0(R,S){return y(k0(R,S))}function y0(R,S,f,V){let j=f.value,_=[];while(f.value<j+V-1){let p=H0(S,f),h=T0(R,f),l=n0(R,f);f.value+=3;let t=T0(R,f),Q0=T0(R,f);_.push({name:p,pixelType:h,pLinear:l,xSampling:t,ySampling:Q0})}return f.value+=1,_}function z0(R,S){let f=C0(R,S),V=C0(R,S),j=C0(R,S),_=C0(R,S),p=C0(R,S),h=C0(R,S),l=C0(R,S),t=C0(R,S);return{redX:f,redY:V,greenX:j,greenY:_,blueX:p,blueY:h,whiteX:l,whiteY:t}}function L0(R,S){let f=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],V=n0(R,S);return f[V]}function g0(R,S){let f=T0(R,S),V=T0(R,S),j=T0(R,S),_=T0(R,S);return{xMin:f,yMin:V,xMax:j,yMax:_}}function $8(R,S){let f=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],V=n0(R,S);return f[V]}function _8(R,S){let f=["ENVMAP_LATLONG","ENVMAP_CUBE"],V=n0(R,S);return f[V]}function b0(R,S){let f=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],V=["ROUND_DOWN","ROUND_UP"],j=V0(R,S),_=V0(R,S),p=n0(R,S);return{xSize:j,ySize:_,levelMode:f[p&15],roundingMode:V[p>>4]}}function i0(R,S){let f=C0(R,S),V=C0(R,S);return[f,V]}function E8(R,S){let f=C0(R,S),V=C0(R,S),j=C0(R,S);return[f,V,j]}function x0(R,S,f,V,j){if(V==="string"||V==="stringvector"||V==="iccProfile")return f0(S,f,j);else if(V==="chlist")return y0(R,S,f,j);else if(V==="chromaticities")return z0(R,f);else if(V==="compression")return L0(R,f);else if(V==="box2i")return g0(R,f);else if(V==="envmap")return _8(R,f);else if(V==="tiledesc")return b0(R,f);else if(V==="lineOrder")return $8(R,f);else if(V==="float")return C0(R,f);else if(V==="v2f")return i0(R,f);else if(V==="v3f")return E8(R,f);else if(V==="int")return T0(R,f);else if(V==="rational")return I0(R,f);else if(V==="timecode")return d0(R,f);else if(V==="preview")return f.value+=j,"skipped";else{f.value+=j;return}}function W8(R,S){let f=Math.log2(R);return S=="ROUND_DOWN"?Math.floor(f):Math.ceil(f)}function r0(R,S,f){let V=0;switch(R.levelMode){case"ONE_LEVEL":V=1;break;case"MIPMAP_LEVELS":V=W8(Math.max(S,f),R.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return V}function G8(R,S,f,V){let j=new Array(R);for(let _=0;_<R;_++){let p=1<<_,h=S/p|0;if(V=="ROUND_UP"&&h*p<S)h+=1;let l=Math.max(h,1);j[_]=(l+f-1)/f|0}return j}function ZJ(){let R=this,S=R.offset,f={value:0};for(let V=0;V<R.tileCount;V++){let j=T0(R.viewer,S),_=T0(R.viewer,S);S.value+=8,R.size=V0(R.viewer,S);let p=j*R.blockWidth,h=_*R.blockHeight;R.columns=p+R.blockWidth>R.width?R.width-p:R.blockWidth,R.lines=h+R.blockHeight>R.height?R.height-h:R.blockHeight;let l=R.columns*R.totalBytes,Q0=R.size<R.lines*l?R.uncompress(R):S8(R);S.value+=R.size;for(let U0=0;U0<R.lines;U0++){let N0=U0*R.columns*R.totalBytes;for(let G0=0;G0<R.inputChannels.length;G0++){let E0=NJ.channels[G0].name,B0=R.channelByteOffsets[E0]*R.columns,P0=R.decodeChannels[E0];if(P0===void 0)continue;f.value=N0+B0;let c0=(R.height-(1+h+U0))*R.outLineWidth;for(let Z8=0;Z8<R.columns;Z8++){let H8=c0+(Z8+p)*R.outputChannels+P0;R.byteArray[H8]=R.getter(Q0,f)}}}}}function B8(){let R=this,S=R.offset,f={value:0};for(let V=0;V<R.height/R.blockHeight;V++){let j=T0(R.viewer,S)-NJ.dataWindow.yMin;R.size=V0(R.viewer,S),R.lines=j+R.blockHeight>R.height?R.height-j:R.blockHeight;let _=R.columns*R.totalBytes,h=R.size<R.lines*_?R.uncompress(R):S8(R);S.value+=R.size;for(let l=0;l<R.blockHeight;l++){let t=V*R.blockHeight,Q0=l+R.scanOrder(t);if(Q0>=R.height)continue;let U0=l*_,N0=(R.height-1-Q0)*R.outLineWidth;for(let G0=0;G0<R.inputChannels.length;G0++){let E0=NJ.channels[G0].name,B0=R.channelByteOffsets[E0]*R.columns,P0=R.decodeChannels[E0];if(P0===void 0)continue;f.value=U0+B0;for(let c0=0;c0<R.columns;c0++){let Z8=N0+c0*R.outputChannels+P0;R.byteArray[Z8]=R.getter(h,f)}}}}}function a8(R,S,f){let V={};if(R.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");V.version=R.getUint8(4);let j=R.getUint8(5);V.spec={singleTile:!!(j&2),longName:!!(j&4),deepFormat:!!(j&8),multiPart:!!(j&16)},f.value=8;let _=!0;while(_){let p=H0(S,f);if(p==="")_=!1;else{let h=H0(S,f),l=V0(R,f),t=x0(R,S,f,h,l);if(t===void 0)console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${h}'.`);else V[p]=t}}if((j&-7)!=0)throw console.error("THREE.EXRHeader:",V),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return V}function WJ(R,S,f,V,j){let _={size:0,viewer:S,array:f,offset:V,width:R.dataWindow.xMax-R.dataWindow.xMin+1,height:R.dataWindow.yMax-R.dataWindow.yMin+1,inputChannels:R.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:XJ};switch(R.compression){case"NO_COMPRESSION":_.blockHeight=1,_.uncompress=S8;break;case"RLE_COMPRESSION":_.blockHeight=1,_.uncompress=g;break;case"ZIPS_COMPRESSION":_.blockHeight=1,_.uncompress=T;break;case"ZIP_COMPRESSION":_.blockHeight=16,_.uncompress=T;break;case"PIZ_COMPRESSION":_.blockHeight=32,_.uncompress=$0;break;case"PXR24_COMPRESSION":_.blockHeight=16,_.uncompress=Y0;break;case"DWAA_COMPRESSION":_.blockHeight=32,_.uncompress=X0;break;case"DWAB_COMPRESSION":_.blockHeight=256,_.uncompress=X0;break;default:throw new Error("EXRLoader.parse: "+R.compression+" is unsupported")}let p={};for(let Q0 of R.channels)switch(Q0.name){case"Y":case"R":case"G":case"B":case"A":p[Q0.name]=!0,_.type=Q0.pixelType}let h=!1;if(p.R&&p.G&&p.B)h=!p.A,_.outputChannels=4,_.decodeChannels={R:0,G:1,B:2,A:3};else if(p.Y)_.outputChannels=1,_.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(_.type==1)switch(j){case $J:_.getter=A0;break;case AJ:_.getter=k0;break}else if(_.type==2)switch(j){case $J:_.getter=C0;break;case AJ:_.getter=U8}else throw new Error("EXRLoader.parse: unsupported pixelType "+_.type+" for "+R.compression+".");_.columns=_.width;let l=_.width*_.height*_.outputChannels;switch(j){case $J:if(_.byteArray=new Float32Array(l),h)_.byteArray.fill(1,0,l);break;case AJ:if(_.byteArray=new Uint16Array(l),h)_.byteArray.fill(15360,0,l);break;default:console.error("THREE.EXRLoader: unsupported type: ",j);break}let t=0;for(let Q0 of R.channels){if(_.decodeChannels[Q0.name]!==void 0)_.channelByteOffsets[Q0.name]=t;t+=Q0.pixelType*2}if(_.totalBytes=t,_.outLineWidth=_.width*_.outputChannels,R.lineOrder==="INCREASING_Y")_.scanOrder=(Q0)=>Q0;else _.scanOrder=(Q0)=>_.height-1-Q0;if(_.outputChannels==4)_.format=aJ,_.colorSpace=XJ;else _.format=n1,_.colorSpace=sQ;if(R.spec.singleTile){_.blockHeight=R.tiles.ySize,_.blockWidth=R.tiles.xSize;let Q0=r0(R.tiles,_.width,_.height),U0=G8(Q0,_.width,R.tiles.xSize,R.tiles.roundingMode),N0=G8(Q0,_.height,R.tiles.ySize,R.tiles.roundingMode);_.tileCount=U0[0]*N0[0];for(let G0=0;G0<Q0;G0++)for(let E0=0;E0<N0[G0];E0++)for(let B0=0;B0<U0[G0];B0++)_0(S,V);_.decode=ZJ.bind(_)}else{_.blockWidth=_.width;let Q0=Math.ceil(_.height/_.blockHeight);for(let U0=0;U0<Q0;U0++)_0(S,V);_.decode=B8.bind(_)}return _}let c8={value:0},u8=new DataView(J),h8=new Uint8Array(J),NJ=a8(u8,J,c8),y8=WJ(NJ,u8,h8,c8,this.type);return y8.decode(),{header:NJ,width:y8.width,height:y8.height,data:y8.byteArray,format:y8.format,colorSpace:y8.colorSpace,type:this.type}}setDataType(J){return this.type=J,this}load(J,$,Q,Z){function W(K,U){if(K.colorSpace=U.colorSpace,K.minFilter=gJ,K.magFilter=gJ,K.generateMipmaps=!1,K.flipY=!1,$)$(K,U)}return super.load(J,W,Q,Z)}}var Q3=new VY,Z3=new CY;function TK(J){return new Promise(($,Q)=>{let Z=J.split(".").pop().toLowerCase();if(Z==="hdr")Q3.load(J,(W)=>{W.mapping=X9,W.needsUpdate=!0,$(W)},void 0,(W)=>{Q(W)});else if(Z==="exr")Z3.load(J,(W)=>{W.mapping=X9,W.needsUpdate=!0,W.colorSpace=XJ,$(W)},void 0,(W)=>{Q(W)});else{let W=new Error(`Unsupported HDRI format: ${Z}. Supported formats: .hdr, .exr`);Q(W)}})}var TE="https://iyo2.vercel.app/public/",wZ={model:"https://iyo2.vercel.app/public/yo.glb",mtc1:"https://iyo2.vercel.app/public/dusk-matcap1.webp",mtc3:"https://iyo2.vercel.app/public/matcap-dawn.webp",mtc2:"https://iyo2.vercel.app/public/night-matcap.webp",hdr:"https://iyo2.vercel.app/public/hdr4.exr"};async function ZW(J=null){let $=J||wZ,Q=[],Z=[];for(let U in $){let H=$[U];if(Array.isArray(H))Q.push(AK(H));else{let q=H.split(".").pop().toLowerCase();if(q==="glb"||q==="gltf")Q.push(RY(H));else if(q==="jpg"||q==="png"||q==="webp"||q==="jpeg")Q.push(IK(H));else if(q==="hdr"||q==="exr")Q.push(TK(H))}Z.push(U)}let W=await Promise.all(Q);return Z.reduce((U,H,q)=>{return U[H]=W[q],U},{})}function SK(J,$){let Q=new ResizeObserver((Z)=>$(Z[0].contentRect));return Q.observe(J),Q}function _Z(J,$,Q){return J*(1-Q)+$*Q}function SE(J,$,Q,Z,W){return Z+(W-Z)*(J-$)/(Q-$)}function jE(J,$,Q){return Math.min(Math.max(Q,J),$)}class PY{constructor(J={}){this.spin={x:0,y:0},this.velocity={x:0.005,y:0.005},this.pointerDown=!1,this.pointer={x:0,y:0},this.prevMouse={x:0,y:0},this.autoRotate=J.autoRotate!==void 0?J.autoRotate:!0,this.minVelocity=J.minVelocity||0.003,this.addEvents()}addEvents(){if(this.boundMouseDown=this.mouseDown.bind(this),this.boundTouchMove=this.touchMove.bind(this),this.boundMouseUp=this.mouseUp.bind(this),"ontouchmove"in window)window.addEventListener("touchstart",this.boundMouseDown),window.addEventListener("touchmove",this.boundTouchMove,{passive:!1}),window.addEventListener("touchend",this.boundMouseUp),this.hasTouchEvents=!0;else window.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),this.hasTouchEvents=!1}removeEvents(){if(this.hasTouchEvents)window.removeEventListener("touchstart",this.boundMouseDown),window.removeEventListener("touchmove",this.boundTouchMove),window.removeEventListener("touchend",this.boundMouseUp);else window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp)}mouseDown(J){this.pointerDown=!0;let $=J.touches?J.touches[0].clientX:J.clientX,Q=J.touches?J.touches[0].clientY:J.clientY,Z=$/window.innerWidth*2-1,W=-(Q/window.innerHeight)*2+1;O0.mouse.x=Z,O0.mouse.y=W,this.prevMouse.x=O0.mouse.x,this.prevMouse.y=O0.mouse.y}touchMove(J){if(this.pointerDown)J.preventDefault()}mouseUp(){this.pointerDown=!1}update(){if(this.pointerDown){let J=O0.mouse.x-this.prevMouse.x,$=O0.mouse.y-this.prevMouse.y;this.velocity.x+=J*0.15,this.velocity.y+=$*0.15}if(this.prevMouse.x=O0.mouse.x,this.prevMouse.y=O0.mouse.y,this.pointerDown)this.velocity.x*=0.9,this.velocity.y*=0.9;else if(this.velocity.x*=0.92,this.velocity.y*=0.92,this.autoRotate){if(Math.abs(this.velocity.x)>0&&Math.abs(this.velocity.x)<this.minVelocity)this.velocity.x=Math.sign(this.velocity.x)*this.minVelocity;if(Math.abs(this.velocity.y)>0&&Math.abs(this.velocity.y)<this.minVelocity)this.velocity.y=Math.sign(this.velocity.y)*this.minVelocity}else{if(Math.abs(this.velocity.x)<0.001)this.velocity.x=0;if(Math.abs(this.velocity.y)<0.001)this.velocity.y=0}return this.spin.x+=this.velocity.x,this.spin.y+=this.velocity.y,{rotationX:-this.spin.y,rotationY:this.spin.x,velocityX:this.velocity.x,velocityY:this.velocity.y,isPointerDown:this.pointerDown}}get rotation(){return{x:-this.spin.y,y:this.spin.x}}get currentVelocity(){return{x:this.velocity.x,y:this.velocity.y}}setAutoRotate(J){this.autoRotate=J}setMinVelocity(J){this.minVelocity=J}reset(){this.spin.x=0,this.spin.y=0,this.velocity.x=0,this.velocity.y=0,this.pointerDown=!1}destroy(){this.removeEvents(),this.pointerDown=!1}}class xZ extends LJ{constructor(J={}){super({color:"#ffffff",metalness:0.8,roughness:0.39,transparent:!0,opacity:1,...J});this.color.setRGB(1,1,1),this.currentMatcapIndex=0,this.targetMatcapIndex=0,this.transitionProgress=0,this.pendingSetIndex=null,this.initShader(),this.setupStateListener()}setupStateListener(){F0.on("WEBGL_MATCAP_INTENSITY",(J)=>{this.setMatcapIntensity(J)}),F0.on("WEBGL_BASE_COLOR_INTENSITY",(J)=>{this.setBaseColorIntensity(J)})}initShader(){this.onBeforeCompile=(J)=>{this.userData.shader=J,J.uniforms.uMatcapTexture1={value:O0.scene.assets.mtc1},J.uniforms.uMatcapTexture2={value:O0.scene.assets.mtc2},J.uniforms.uMatcapTexture3={value:O0.scene.assets.mtc3},J.uniforms.uMatcapIndex={value:0},J.uniforms.uTargetMatcapIndex={value:0},J.uniforms.uMatcapIntensity={value:0.82},J.uniforms.uBaseColorIntensity={value:0.1},J.uniforms.uTransitionProgress={value:0},J.uniforms.uRippleFrequency={value:8},J.uniforms.uRippleAmplitude={value:0.3},J.vertexShader=J.vertexShader.replace("#include <common>",`#include <common>
        
        varying vec3 vView;
        varying vec3 vCustomNormal;
        varying vec2 vUv;
        `),J.vertexShader=J.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        
        vec4 customTransformed = modelViewMatrix * vec4(position, 1.0);
        vView = normalize(-customTransformed.xyz);
        vCustomNormal = normalize((modelViewMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        `),J.fragmentShader=J.fragmentShader.replace("#include <common>",`#include <common>
        
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform sampler2D uMatcapTexture3;
        uniform float uMatcapIndex;
        uniform float uTargetMatcapIndex;
        uniform float uMatcapIntensity;
        uniform float uBaseColorIntensity;
        uniform float uTransitionProgress;
        uniform float uRippleFrequency;
        uniform float uRippleAmplitude;
        
        varying vec3 vView;
        varying vec3 vCustomNormal;
        varying vec2 vUv;
        `),J.fragmentShader=J.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
        
        // Calculate matcap UV coordinates
        vec3 x = normalize(vec3(vView.z, 0.0, -vView.x));
        vec3 y = cross(vView, x);
        vec2 fakeUv = vec2(dot(x, vCustomNormal), dot(y, vCustomNormal)) * 0.495 + 0.5;
        
        // Get matcap colors for current and target indices
        vec3 matcapColor1, matcapColor2;
        
        // Current matcap color
        if (uMatcapIndex < 0.5) {
          matcapColor1 = texture2D(uMatcapTexture1, fakeUv).rgb;
        } else if (uMatcapIndex < 1.5) {
          matcapColor1 = texture2D(uMatcapTexture2, fakeUv).rgb;
        } else {
          matcapColor1 = texture2D(uMatcapTexture3, fakeUv).rgb;
        }
        
        // Target matcap color (using explicit target index)
        if (uTargetMatcapIndex < 0.5) {
          matcapColor2 = texture2D(uMatcapTexture1, fakeUv).rgb;
        } else if (uTargetMatcapIndex < 1.5) {
          matcapColor2 = texture2D(uMatcapTexture2, fakeUv).rgb;
        } else {
          matcapColor2 = texture2D(uMatcapTexture3, fakeUv).rgb;
        }
        
        // Organic ripple transition mask using actual UVs
        vec2 center = vec2(0.5, 0.5);
        vec2 uv = vUv; // Use actual UV coordinates instead of fakeUv
        float distance = length(uv - center);
        float maxDistance = 0.707; // sqrt(0.5^2 + 0.5^2) - maximum distance from center
        
        float noise1 = sin(uv.x * 15.0 + uTransitionProgress * 3.0) * cos(uv.y * 12.0 + uTransitionProgress * 2.0) * 0.02;
        float noise2 = sin(uv.x * 23.0 - uTransitionProgress * 1.5) * sin(uv.y * 19.0 + uTransitionProgress * 2.5) * 0.015;
        float organicNoise = noise1 + noise2;
        
        // Create multiple wave layers for more natural ripples
        float basePhase = distance * uRippleFrequency - uTransitionProgress * 8.0;
        float wave1 = sin(basePhase) * 0.15;
        float wave2 = sin(basePhase * 1.7 + 1.0) * 0.08;
        float wave3 = sin(basePhase * 2.3 - 0.5) * 0.04;
        
        float combinedWave = (wave1 + wave2 + wave3) * uRippleAmplitude;
        float organicDistance = distance + combinedWave + organicNoise;
        
        float expansionRadius = uTransitionProgress * maxDistance * 1.2;
        float falloffWidth = 0.15 + uTransitionProgress * 0.1; // Dynamic falloff that grows with progress
        
        // easing
        float easedProgress = 1.0 - pow(1.0 - uTransitionProgress, 2.5);
        float easedRadius = easedProgress * maxDistance * 1.2;
        

        float primaryMask = 1.0 - smoothstep(easedRadius - falloffWidth, easedRadius + falloffWidth, organicDistance);
        
        // secondary waves
        float secondaryPhase = distance * (uRippleFrequency * 0.6) - uTransitionProgress * 6.0;
        float secondaryWave = sin(secondaryPhase) * 0.05 * (1.0 - uTransitionProgress); // Fade out as transition progresses
        float secondaryMask = 1.0 - smoothstep(easedRadius - falloffWidth * 1.5, easedRadius + falloffWidth * 0.8, distance + secondaryWave);
        
        // Combine masks 
        float organicMask = mix(primaryMask, secondaryMask, 0.3);
        organicMask = clamp(organicMask, 0.0, 1.0);
        
        // === CONCENTRIC WAVE
        float ringPhase = distance * 30.0 - uTransitionProgress * 20.0; // Even higher frequency for more visible rings
        
        float ring1 = sin(ringPhase) * 1.0;
        float ring2 = sin(ringPhase * 1.5 + 0.5) * 0.7;
        float ring3 = sin(ringPhase * 0.7 - 1.0) * 0.5;
        float layeredRings = (ring1 + ring2 + ring3) / 3.0;
        
        float ringVisibility = smoothstep(0.0, 0.1, uTransitionProgress) * (1.0 - smoothstep(0.9, 1.0, uTransitionProgress));
        
        float ringIntensity = layeredRings * ringVisibility * 0.6; // Very visible
        
        float transitionBoundary = abs(organicMask - 0.5) * 2.0;
        float boundaryRings = (1.0 - transitionBoundary) * layeredRings * 0.3;
        
        ringIntensity = max(ringIntensity, boundaryRings);
        
        ringIntensity += organicNoise * ringVisibility * 0.05;
        
       
        float finalMask = organicMask + ringIntensity;
        finalMask = clamp(finalMask, 0.0, 1.0);
        
        vec3 matcapColor;
        if (uTransitionProgress < 0.01) {
          matcapColor = matcapColor1; // Clean start state
        } else if (uTransitionProgress > 0.99) {
          matcapColor = matcapColor2; // Clean end state
        } else {
          matcapColor = mix(matcapColor1, matcapColor2, finalMask);
        }
        
        // Get base material color
        vec3 baseColor = gl_FragColor.rgb;
        
        // Mix base material properties with matcap
        gl_FragColor.rgb = mix(baseColor, matcapColor, uMatcapIntensity);
        
        // Add some base color back for more control
        // gl_FragColor.rgb = mix(gl_FragColor.rgb, baseColor, uBaseColorIntensity);
        `);let $=this.pendingSetIndex!==null?this.pendingSetIndex:this.currentMatcapIndex;J.uniforms.uMatcapIndex.value=$,J.uniforms.uTargetMatcapIndex.value=$,J.uniforms.uTransitionProgress.value=0,this.currentMatcapIndex=$,this.targetMatcapIndex=$,this.pendingSetIndex=null}}setMatcapIntensity(J){if(this.userData.shader)this.userData.shader.uniforms.uMatcapIntensity.value=J}setBaseColorIntensity(J){if(this.userData.shader)this.userData.shader.uniforms.uBaseColorIntensity.value=J}setRippleFrequency(J){if(this.userData.shader)this.userData.shader.uniforms.uRippleFrequency.value=J}setRippleAmplitude(J){if(this.userData.shader)this.userData.shader.uniforms.uRippleAmplitude.value=J}setMatcapIndex(J){let $=Math.max(0,Math.min(2,Math.floor(J)));if(!this.userData.shader){this.currentMatcapIndex=$,this.targetMatcapIndex=$,this.pendingSetIndex=$;return}this.targetMatcapIndex=$,this.animateMatcapTransition()}forceMatcapIndex(J){let $=Math.max(0,Math.min(2,Math.floor(J)));if(this.transitionTween&&this.transitionTween.isActive())this.transitionTween.kill();if(this.currentMatcapIndex=$,this.targetMatcapIndex=$,this.pendingSetIndex=$,this.transitionProgress=0,this.userData.shader)this.userData.shader.uniforms.uMatcapIndex.value=$,this.userData.shader.uniforms.uTargetMatcapIndex.value=$,this.userData.shader.uniforms.uTransitionProgress.value=0}animateMatcapTransition(){if(!this.userData.shader)return;let J=this.userData.shader;if(this.transitionTween&&this.transitionTween.isActive()){let $=this.currentMatcapIndex+(J.uniforms.uTargetMatcapIndex.value-this.currentMatcapIndex)*this.transitionProgress;this.currentMatcapIndex=Math.round($)}J.uniforms.uMatcapIndex.value=this.currentMatcapIndex,J.uniforms.uTargetMatcapIndex.value=this.targetMatcapIndex,this.transitionProgress=0,J.uniforms.uTransitionProgress.value=0,this.transitionTween=d.to(this,{transitionProgress:1,duration:1.2,ease:"power2.out",overwrite:!0,onUpdate:()=>{if(this.userData.shader)this.userData.shader.uniforms.uTransitionProgress.value=this.transitionProgress},onComplete:()=>{if(this.currentMatcapIndex=this.targetMatcapIndex,this.userData.shader)this.userData.shader.uniforms.uMatcapIndex.value=this.currentMatcapIndex,this.userData.shader.uniforms.uTargetMatcapIndex.value=this.currentMatcapIndex,this.userData.shader.uniforms.uTransitionProgress.value=0;this.transitionProgress=0}})}replaceMatcapTexture(J,$){if(this.userData.shader){let Z=`uMatcapTexture${Math.max(0,Math.min(2,Math.floor($)))+1}`;if(this.userData.shader.uniforms[Z])this.userData.shader.uniforms[Z].value=J}}}var Q8={semiTrasparentSilicon:{transparent:!1,transmission:0.62,thickness:0.2,attenuationDistance:0.1,roughness:0.53,metalness:0,ior:1.42,color:"#C7C7C7"},semiTrasparentSiliconLight:{transparent:!1,transmission:0.62,thickness:0.2,attenuationDistance:0.1,roughness:0.53,metalness:0,ior:1.42,color:"#F5F5F5"},semiTrasparentSilicon2:{transparent:!0,opacity:0.68,transmission:0,thickness:0.8,attenuationDistance:0.02,clearcoat:0.3,clearcoatRoughness:0.14,roughness:0.4,metalness:0,ior:1.92,color:"#818181"},generalMetalOpaque:{metalness:0.8,roughness:0.45,color:"#5A5A5A"},generalMetal:{metalness:0.87,roughness:0.3,color:"#5A5A5A"},titanium:{metalness:0.75,roughness:0.39,color:"#8F8F8F"},silicon:{metalness:0.2,roughness:0.4,color:"#B2B2B2"},lightGrayMatte:{metalness:0,roughness:0.8,color:"#b0b0b0"},whitePlastic:{metalness:0,roughness:0.6,color:"#ffffff"},glass:{metalness:0,roughness:0.05,thickness:0.018,color:"#ffffff",transparent:!0,transmission:1,ior:1.6},shinyMetal:{metalness:1,roughness:0.25,color:"#FFFFFF"},gold:{metalness:0.8,roughness:0.2,color:"#ECC74D"},blackPlastic:{metalness:0,roughness:0.6,color:"#000000"},gmat001:{metalness:0,roughness:0.5,color:"#808080"},darkMetalDusk:{metalness:0.5,roughness:0.38,color:"#5A5A5A"},lightMetalDusk:{metalness:0.8,roughness:0.5,color:"#B0ADAD"},siliconDusk:{metalness:0.3,roughness:0.5,color:"#737373"},darkMetalNight:{metalness:0.5,roughness:0.38,color:"#525252"},lightMetalNight:{metalness:0.8,roughness:0.5,color:"#727272"},siliconNight:{color:"#4E4E4E",metalness:0.3,roughness:0.5},darkMetalDawn:{metalness:0.5,roughness:0.38,color:"#C1B6A4"},lightMetalDawn:{metalness:0.8,roughness:0.5,color:"#FBF0E1"},siliconDawn:{color:"#E0D3C5",metalness:0.3,roughness:0.5},changingDarkMetal:{metalness:0.5,roughness:0.35,color:"#5A5A5A",isChangingMaterial:!0,materialType:"darkMetal",variations:{0:{color:"#5A5A5A"},1:{color:"#3F3F3F"},2:{color:"#CDBEA7"}}},changingLightMetal:{metalness:0.8,roughness:0.43,color:"#B0ADAD",isChangingMaterial:!0,materialType:"lightMetal",variations:{0:{color:"#868383"},1:{color:"#464646"},2:{color:"#FDF5EC"}}},changingSilicon:{metalness:0.3,roughness:0.55,color:"#737373",isChangingMaterial:!0,materialType:"silicon",variations:{0:{color:"#8C8C8C"},1:{color:"#3F3F3F"},2:{color:"#DACEC2"}}},changingDtit:{metalness:0.5,roughness:0.38,color:"#434343",isChangingMaterial:!0,materialType:"dtit",variations:{0:{color:"#434343"},1:{color:"#2F2F2F"},2:{color:"#9A8E7D"}}}},WW=[{name:"ante",...Q8.changingSilicon},{name:"mesh145_mesh003_1",...Q8.generalMetal},{name:"mesh145_mesh003_2",...Q8.generalMetal},{name:"face",material:new xZ},{name:"tita",...Q8.changingLightMetal},{name:"mesh6_mesh003_1",...Q8.silicon},{name:"mesh6_mesh003_2",...Q8.silicon,color:"#FF0000"},{name:"mesh6_mesh003_3",...Q8.silicon,color:"#FF0000"},{name:"mesh4525_mesh004",...Q8.gold},{name:"mesh4525_mesh004_1",...Q8.gold},{name:"dar2",...Q8.generalMetal},{name:"mesh5254_mesh004",...Q8.silicon,color:"#EE9300"},{name:"mora",...Q8.silicon,color:"#EE9300"},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ025",...Q8.generalMetal},{name:"mesh4714_mesh004",...Q8.generalMetalOpaque},{name:"mesh4714_mesh004_1",...Q8.generalMetalOpaque},{name:"mesh4714_mesh004_2",...Q8.silicon,color:"#FF0000"},{name:"mesh4714_mesh004_3",...Q8.silicon,color:"#FF0000"},{name:"mics",...Q8.changingDarkMetal},{name:"dtit",...Q8.changingDtit},{name:"grid",...Q8.generalMetal,color:"#ffffff",roughness:0.3},{name:"ddri",...Q8.generalMetal,color:"#ffffff",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ008",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ015",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ016",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ025",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ046",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"02-0000-03_FLEX_MCO,_UAP,_L,_VADZ055",...Q8.silicon,color:"#895E2C",roughness:0.3},{name:"mesh6351_mesh003",...Q8.generalMetal,color:"#ffffff"},{name:"mesh6351_mesh003_1",...Q8.silicon},{name:"mesh6351_mesh003_2",...Q8.silicon,color:"#FF0000"},{name:"11-0001-04_FINAL_ASSY,_UAP,_L,_VADZ001",...Q8.silicon,color:"#7C9DF3"},{name:"pblu",...Q8.silicon,color:"#7C9DF3"},{name:"pblu",...Q8.silicon,color:"#FF0000"},{name:"cabl",...Q8.silicon,color:"#404040"},{name:"tiau",...Q8.titanium,color:"#B3B3B3"},{name:"tiho",...Q8.titanium},{name:"earm",...Q8.semiTrasparentSilicon},{name:"MANIFOLD_SOLID_BREP_149800",...Q8.silicon,color:"#FF0000"},{name:"bshi",...Q8.generalMetal},{name:"MANIFOLD_SOLID_BREP_150625",...Q8.gold},{name:"dark",...Q8.whitePlastic,color:"#000000"},{name:"glass",...Q8.glass},{name:"titb",...Q8.changingLightMetal,color:"#6A6868"},{name:"gold",...Q8.gold},{name:"mshi",...Q8.titanium,color:"#979797"},{name:"f2815041i001",...Q8.silicon,color:"#7C9DF3"},{name:"clip",...Q8.semiTrasparentSilicon2},{name:"Soft_Ear_Interface001",...Q8.glass},{name:"Soft_Ear_Interface001",...Q8.glass},{name:"mimi",...Q8.blackPlastic},{name:"gmat001",...Q8.gmat001},{name:"shad",...Q8.blackPlastic,transparent:!0,opacity:0.5,side:VJ}];function W3(){return WW.filter((J)=>J.isChangingMaterial)}function wE(J){W3().forEach((Q)=>{if(Q.variations&&Q.variations[J]){let Z=Q.variations[J],W=Q.color;Object.assign(Q,Z)}})}class jK extends LJ{constructor(J={}){super({color:"#ffffff",metalness:0.8,roughness:0.43,...J});this.maskTexture=null,this.darkColor1=[0.035,0.035,0.031],this.darkColor2=[0.176,0.169,0.161],this.lightColor=[0.2,0.192,0.184],this.maskIntensity=1,this.colorMix=0.5,this.manualMaskValue=1,this.useManualMask=!0,this.colorIndex=0,this.initShader(),this.setupStateListener()}setupStateListener(){F0.on("WEBGL_CAP_COLOR",(J)=>{this.setColorIndex(J)})}initShader(){this.onBeforeCompile=(J)=>{this.userData.shader=J,J.uniforms.u_maskTexture={value:this.maskTexture},J.uniforms.u_darkColor1={value:this.darkColor1},J.uniforms.u_darkColor2={value:this.darkColor2},J.uniforms.u_lightColor={value:this.lightColor},J.uniforms.u_maskIntensity={value:this.maskIntensity},J.uniforms.u_colorMix={value:this.colorMix},J.uniforms.u_hasMaskTexture={value:this.maskTexture!==null},J.uniforms.u_manualMaskValue={value:this.manualMaskValue},J.uniforms.u_useManualMask={value:this.useManualMask},J.uniforms.u_colorIndex={value:this.colorIndex},J.vertexShader=J.vertexShader.replace("#include <common>",`#include <common>
        
        varying vec2 vUv;
        `),J.vertexShader=J.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        
        vUv = uv;
        `),J.fragmentShader=J.fragmentShader.replace("#include <common>",`#include <common>
        
        uniform sampler2D u_maskTexture;
        uniform sampler2D uMap;
        uniform vec3 u_darkColor1;
        uniform vec3 u_darkColor2;
        uniform vec3 u_lightColor;
        uniform float u_maskIntensity;
        uniform float u_colorMix;
        uniform bool u_hasMaskTexture;
        uniform float u_manualMaskValue;
        uniform bool u_useManualMask;
        uniform float u_colorIndex;
        varying vec2 vUv;
        `),J.fragmentShader=J.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>

        float tx = texture2D(uMap, vUv).r;
          
          // Color index mapping:
          // 0 = Dark color 1
          // 1 = Light color  
          // 2 = Dark color 2
          vec3 targetColor;

          float maskValue = 0.;

          if (u_colorIndex < 0.5) {
            // Color index 0 - Dark color 1
            targetColor = u_darkColor1;
            maskValue = 0.;
          } else if (u_colorIndex < 1.5) {
            // Color index 1 - Light color
            targetColor = u_lightColor;
            maskValue = 1.;
          } else {
            // Color index 2 - Dark color 2
            targetColor = u_darkColor2;
            maskValue = 0.;
          }


          gl_FragColor.rgb = mix(
            // mix(vec3(0.), vec3(1.), maskValue),
            targetColor,
            gl_FragColor.rgb, tx);
          
  
        `)}}setMaskTexture(J){if(this.maskTexture=J,this.userData.shader)this.userData.shader.uniforms.u_maskTexture.value=J,this.userData.shader.uniforms.u_hasMaskTexture.value=J!==null}setMaskIntensity(J){if(this.maskIntensity=J,this.userData.shader)this.userData.shader.uniforms.u_maskIntensity.value=J}setColorMix(J){if(this.colorMix=J,this.userData.shader)this.userData.shader.uniforms.u_colorMix.value=J}setDarkColor1(J){if(Array.isArray(J))this.darkColor1=J;else{let $=J.replace("#",""),Q=parseInt($.substr(0,2),16)/255,Z=parseInt($.substr(2,2),16)/255,W=parseInt($.substr(4,2),16)/255;this.darkColor1=[Q,Z,W]}if(this.userData.shader)this.userData.shader.uniforms.u_darkColor1.value=this.darkColor1}setDarkColor2(J){if(Array.isArray(J))this.darkColor2=J;else{let $=J.replace("#",""),Q=parseInt($.substr(0,2),16)/255,Z=parseInt($.substr(2,2),16)/255,W=parseInt($.substr(4,2),16)/255;this.darkColor2=[Q,Z,W]}if(this.userData.shader)this.userData.shader.uniforms.u_darkColor2.value=this.darkColor2}setLightColor(J){if(Array.isArray(J))this.lightColor=J;else{let $=J.replace("#",""),Q=parseInt($.substr(0,2),16)/255,Z=parseInt($.substr(2,2),16)/255,W=parseInt($.substr(4,2),16)/255;this.lightColor=[Q,Z,W]}if(this.userData.shader)this.userData.shader.uniforms.u_lightColor.value=this.lightColor}setManualMaskValue(J){if(this.manualMaskValue=Math.max(0,Math.min(1,J)),this.userData.shader)this.userData.shader.uniforms.u_manualMaskValue.value=this.manualMaskValue}setUseManualMask(J){if(this.useManualMask=J,this.userData.shader)this.userData.shader.uniforms.u_useManualMask.value=this.useManualMask}enableManualMask(){this.setUseManualMask(!0)}disableManualMask(){this.setUseManualMask(!1)}setColorIndex(J){if(this.colorIndex=Math.max(0,Math.min(2,Math.floor(J))),this.userData.shader)this.userData.shader.uniforms.u_colorIndex.value=this.colorIndex}setToDarkColor1(){this.setColorIndex(0)}setToLightColor(){this.setColorIndex(1)}setToDarkColor2(){this.setColorIndex(2)}testMaterial(){}testColorCycle(){this.setColorIndex(0),setTimeout(()=>{this.setColorIndex(1)},1000),setTimeout(()=>{this.setColorIndex(2)},2000)}}var IY={3:[0.6,0.15,-0.6],2:[0.25,-0.25],7:[1.7,0.9,0.45,0,-0.29,-1,-1.7]};function AY(J,$=1){let Z=0.5/Math.max(1,Math.floor(J/2)),W=[];for(let K=0;K<J;K++){let U=0;if(J===1)U=0;else if(J===2)U=K===0?Z*$:-Z*$;else{let H=Math.floor(J/2);if(K<H)U=(H-K)*Z*$;else if(K>H)U=-(K-H)*Z*$;else U=0}W.push(U)}return W}function _E(J){if(!J.parts.length)return;let $=J.parts.length;if(J._exploded)J.parts.forEach((Q)=>{d.to(Q.position,{z:0,ease:"expo.out"})});else{let Q=IY[$]||AY($,1);J.parts.forEach((Z,W)=>{d.to(Z.position,{z:Q[W],ease:"expo.out"})})}J._exploded=!J._exploded}var TY=2.5,R9={vad:{indexOffset:1,hoveredScale:1.2,otherScale:0.8,rotation:{x:0,y:Math.PI/4,z:Math.PI/3}},yo:{indexOffset:0,hoveredScale:1.3,otherScale:0.8,rotation:{x:Math.PI/2,y:Math.PI/2,z:0},0:{hoveredScale:1.1,otherScale:0.9,rotation:{x:0,y:-0.2,z:-Math.PI*0.8}},1:{hoveredScale:1.1,otherScale:0.9,rotation:{x:0,y:0.2,z:Math.PI*0.8}}},one:{indexOffset:0,hoveredScale:1.3,otherScale:0.8,rotation:{x:0,y:Math.PI/4,z:Math.PI/3},0:{hoveredScale:1.085,otherScale:0.8,rotation:{x:0,y:-0.3,z:-Math.PI/2}},1:{hoveredScale:1.2,otherScale:0.8,rotation:{x:0,y:-Math.PI/4,z:Math.PI/2}},2:{hoveredScale:1.2,otherScale:0.8,rotation:{x:0,y:-Math.PI/3.5,z:Math.PI/3}}}};function xE(J,$,Q=!1){if($===null||$===void 0)return;if(!J||!J.parts||!J.ctrl)return;let Z=F0.WEBGL_READY||window.currentModel;if(Z&&Z!==J)J=Z;let W=F0.MODEL||"one",K=R9[W]||R9.one;if(!K)return;let U=$;if(J.targetToPartMap&&typeof J.targetToPartMap[$]==="number")U=J.targetToPartMap[$];else if(K.indexOffset!==void 0&&K.indexOffset!==null&&K.indexOffset!==0)U=$+K.indexOffset;else U=$;if(U<0||U>=J.parts.length)return;if(J.ctrl.explodeProgress<0.4)return;let H=J.parts[U];if(!H||!H.scale||!H.rotation)return;let q=typeof K[$]==="object"?K[$]:null,Y={hoveredScale:q?.hoveredScale??K.hoveredScale,otherScale:q?.otherScale??K.otherScale,rotation:q?.rotation??K.rotation};if(J.parts.forEach((G,X)=>{if(!G)return;if(!G.scale||typeof G.scale.x==="undefined")return;let N=1;if(Q)N=X===U?Y.hoveredScale:Y.otherScale;else N=1;try{d.killTweensOf(G.scale),d.to(G.scale,{x:N,y:N,z:N,duration:TY,ease:"expo.out"})}catch(F){}}),Q)try{d.killTweensOf(H.rotation),d.to(H.rotation,{x:Y.rotation.x,y:Y.rotation.y,z:Y.rotation.z,duration:TY,ease:"expo.out"})}catch(G){}else try{d.killTweensOf(H.rotation),d.to(H.rotation,{x:0,y:0,z:0,duration:TY,ease:"expo.out"})}catch(G){}}var K3=(J,$)=>{$.push(J),J.visible=!1},U3=(J,$)=>{J.material=$},H3=(J,$,Q,Z)=>{let W=null,K=new LJ;if(J.material.map)W=J.material.map;J.material=K,K.bumpMap=J.material.map,K.bumpScale=100,K.map=W,K.roughness=0.8},q3=(J,$,Q)=>{let Z=null;if(J.material.map)Z=J.material.map;let W=null;if(J.name.includes("mics"))W=J.material.map,J.material.transparent=!0;let K=0.8;if($.metalness===void 0||$.roughness===void 0)console.warn(`⚠️ Material properties undefined for mesh "${J.name}"`,{meshName:J.name,materialConfig:$,metalness:$.metalness,roughness:$.roughness,hasMetalness:$.metalness!==void 0,hasRoughness:$.roughness!==void 0});if(J.material=new LJ({map:Z||null,color:$.color,metalness:$.metalness,roughness:$.roughness,transparent:$.transparent||!1,opacity:$.opacity||1,depthWrite:$.depthWrite!==void 0?$.depthWrite:!0,ior:$.ior||1.2,envMap:O0.scene.environment,envMapIntensity:K,transmission:$.transmission||0,thickness:$.thickness||0,attenuationDistance:$.attenuationDistance||1,clearcoat:$.clearcoat||0,clearcoatRoughness:$.clearcoatRoughness||0}),($.metalness||0)>=0.3)J.material.onBeforeCompile=(U)=>{U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
        varying vec2 vSpeckleUv;
        `),U.vertexShader=U.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        vSpeckleUv = uv;
        `),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>

        varying vec2 vSpeckleUv;

        // Random function for speckle noise
        float speckleRandom(vec2 co) {
          return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
        }

        // Simple noise function for smoother speckles
        float speckleNoise(vec2 uv) {
          vec2 i = floor(uv);
          vec2 f = fract(uv);
          f = f * f * (3.0 - 2.0 * f); // Smoothstep interpolation

          float a = speckleRandom(i);
          float b = speckleRandom(i + vec2(1.0, 0.0));
          float c = speckleRandom(i + vec2(0.0, 1.0));
          float d = speckleRandom(i + vec2(1.0, 1.0));

          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        // Multi-octave noise for more realistic speckle pattern - FINE SCALE FOR SUBTLE DETAILS
        float specklePattern(vec2 uv) {
          float noise1 = speckleNoise(uv * 120.0); // Base scale - fine scale for subtle but visible speckles
          float noise2 = speckleNoise(uv * 280.0) * 0.5; // Higher frequency
          float noise3 = speckleNoise(uv * 600.0) * 0.25; // Even higher frequency

          // Normalize to 0-1 range
          return (noise1 + noise2 + noise3) / 1.75;
        }
        `),U.fragmentShader=U.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>

        // Add speckle noise to roughness for metal surfaces - SUBTLE REALISTIC EFFECT
        vec2 speckleUV = vSpeckleUv;
        float speckle = specklePattern(speckleUV);

        // Create tiny specks by smoothstepping the noise - very subtle
        float speckleMask = smoothstep(0.65, 0.9, speckle);

        // Vary roughness slightly based on speckle pattern
        // Higher speckle values slightly increase roughness (less shiny areas)
        // Lower speckle values slightly decrease roughness (more shiny areas)
        float speckleVariation = (speckle - 0.5) * 0.12 * 0.08; // Subtle realistic variation
        roughnessFactor += speckleVariation * speckleMask;

        // Ensure roughness stays in valid range
        roughnessFactor = clamp(roughnessFactor, 0.0, 1.0);
        `)};if(W)J.material.alphaMap=W,J.material.transparent=!0},Y3=(J)=>{if(window.currentModel){if(/^p\d+$/.test(J.name))window.currentModel.parts.push(J)}},yE=(J,$=null,Q=[],Z=null,W=null)=>{J.traverse((K)=>{if(K instanceof i8){if(K.name.toLowerCase().includes("target")){K3(K,Q);return}if(K.name.toLowerCase().includes("face")){U3(K,Z);return}let U=WW.find((H)=>K.name.includes(H.name));if(K.name.toLowerCase().includes("txgr")){H3(K,U,$,W);return}if(K.name.toLowerCase().includes("tita")&&K.material.map&&W&&$==="ecomm"){let H=W.clone();H.map=K.material.map,H.needsUpdate=!0,K.material=H;return}if(!U){K.material=new s7;return}if(K.name.includes("earm")){let H=F0.ECOMMERCE?Q8.semiTrasparentSilicon:Q8.semiTrasparentSiliconLight;U={...U,...H}}q3(K,U,$)}else if(K instanceof l8&&K.name.startsWith("p"))Y3(K)})};var V9=[],KW=null,_6=null,UW=1,G3=1;class SY extends d${#J=PJ.add(this.render.bind(this));#Z=O0.scene.add(this);#$=0;#Q=new e0;#W=!1;spinner=null;currentRaycast=null;_mouseMoveHandler=null;_clickHandler=null;_stateHandlers=[];ctrl={rx:0,ry:0,rz:0,x:0,y:0,z:0,explodeProgress:0};parts=[];targetToPartMap={};buildTargetToPartMapping(J,$){let Q={};if(!J.length||!this.parts.length)return console.warn("Cannot build mapping: missing targets or parts",{targetsCount:J.length,partsCount:this.parts.length}),Q;let Z=(U)=>{let H=U.match(/target[_\s]*(\d+)/i);return H?parseInt(H[1],10):null},W=(U)=>{let H=U.match(/^p(\d+)$/i);return H?parseInt(H[1],10):null},K={};for(let U=0;U<this.parts.length;U++){let H=this.parts[U];if(H&&H.name){let q=W(H.name);if(q!==null)K[q]=U}}for(let U=0;U<$.length;U++){let H=$[U],q=Z(H);if(q!==null)if(K[q]!==void 0)Q[U]=K[q];else{let Y=q+1;if(K[Y]!==void 0)Q[U]=K[Y];else console.warn(`Could not find part for target ${H} (num: ${q})`,{availablePartNumbers:Object.keys(K).map(Number)}),Q[U]=U<this.parts.length?U:null}else console.warn(`Could not extract number from target name: ${H}`),Q[U]=U<this.parts.length?U:null}return Q}constructor(J=null){super();if(this.parts=[],V9.length=0,KW=null,_6=null,window.currentModel=this,this.modelType=J,J==="ecomm")this.ctrl.y=-4,this.position.y=-4;this.planeMaterial=X3,this.maskMaterial=N3,this.frustumCulled=!1,yE(O0.scene.assets.model.children[0],J,V9,this.planeMaterial,this.maskMaterial),KW=V9.reduce((W,K)=>{if(K.name&&K.name.startsWith("target_"))W.push(K.name);return W},[]);let $=R9[J]||R9.one;if($&&typeof $.indexOffset==="number"&&$.indexOffset!==0){this.targetToPartMap={};for(let W=0;W<KW.length;W++){let K=W+$.indexOffset;if(K>=0&&K<this.parts.length)this.targetToPartMap[W]=K;else this.targetToPartMap[W]=W}}else this.targetToPartMap=this.buildTargetToPartMapping(V9,KW);if(this.add(O0.scene.assets.model),yZ.isMobile)UW=J==="ecomm"?0.75:0.8;if(J==="ecomm")UW*=G3;this.scale.set(UW,UW,UW);let Q=document.querySelector("[data-ctrl='trigger']");if(Q)Q.style.pointerEvents="auto",Q.onclick=()=>this.explode();if(this.initCapColorListener(),typeof F0.WEBGL_CAP_COLOR==="number")this.setCapColor(F0.WEBGL_CAP_COLOR);let Z=(W)=>{if(W){if(typeof F0.WEBGL_CAP_COLOR==="number")this.setCapColor(F0.WEBGL_CAP_COLOR)}else if(this.spinner)this.spinner.reset(),this.rotation.x=0,this.rotation.y=0};F0.on("ECOMM_3D_VISIBLE",Z),this._stateHandlers.push({event:"ECOMM_3D_VISIBLE",handler:Z}),F0.WEBGL_READY=this}explode(){_E(this)}initMouseEvents(){if(this.raycaster.continous)this._mouseMoveHandler=(J)=>{this.performRaycast()},document.addEventListener("mousemove",this._mouseMoveHandler),this.performRaycast();else this._clickHandler=()=>{this.performRaycast()},document.addEventListener("click",this._clickHandler)}performRaycast(){if(!this.raycaster)return;if(!V9.length)return;this.raycaster.setFromCamera(O0.mouse,O0.camera);let J=[];this.traverse((Z)=>{if(Z instanceof i8)J.push(Z)});let $=this.raycaster.intersectObjects(this.raycaster.continous?V9:J,!1),Q=null;if($.length>0){let Z=$[0].object,W=KW.indexOf(Z.name);if(W!==-1)Q=W}if(Q!==_6){if(_6!==null)this.onPieceHover(_6,!1);if(Q!==null)this.onPieceHover(Q,!0),F0.RAYCAST_TARGET=Q;else F0.RAYCAST_TARGET=null;_6=Q}return Q}render(){if(this.#$++,this.spinner){if(F0.ECOMM_3D_VISIBLE){let{rotationX:J,rotationY:$,velocityX:Q,velocityY:Z,isPointerDown:W}=this.spinner.update();this.rotation.x=J,this.rotation.y=$}else this.rotation.x=0,this.rotation.y=0;this.position.x=this.ctrl.x,this.position.y=this.ctrl.y,this.position.z=this.ctrl.z}else if(this.rotation.x=O0.mouse.ey*0.2+this.ctrl.rx,this.rotation.y=O0.mouse.ex*0.2+this.ctrl.ry,this.rotation.z=this.ctrl.rz,this.position.x=this.ctrl.x,this.position.y=this.ctrl.y,this.position.z=this.ctrl.z,this.parts.length>0&&this.ctrl.explodeProgress>0){let $=this.parts.length,Q=IY[$]||AY($,this.ctrl.explodeProgress);this.parts.forEach((Z,W)=>{Z.position.z=Q[W]*this.ctrl.explodeProgress})}else if(this.ctrl.explodeProgress===0)this.parts.forEach(($)=>{$.position.z=0})}initSpinner(){this.spinner=new PY({autoRotate:!1})}initRaycasting(J=!1){if(J)V9.forEach(($)=>{$.position.y=1e6}),this.raycaster=new i7;else this.raycaster=new i7,this.raycaster.continous=!0;this.initMouseEvents(),this._hoverReinitialized=!1}resetHoverAnimations(){this.parts.forEach((J)=>{if(J&&J.scale&&J.rotation)try{if(d.killTweensOf(J.scale),d.killTweensOf(J.rotation),typeof J.scale.set==="function")J.scale.set(1,1,1);if(typeof J.rotation.set==="function")J.rotation.set(0,0,0)}catch($){console.warn("Error resetting part animations:",$,J)}}),_6=null}reinitializeHoverState(){if(this._hoverReinitialized)return;this._hoverReinitialized=!0;let J=F0.RAYCAST_TARGET;if(J!==null&&J!==void 0&&this.ctrl.explodeProgress>=0.4&&this.parts.length>0)this.parts.forEach(($)=>{if($&&$.scale&&$.rotation){if(d.killTweensOf($.scale),d.killTweensOf($.rotation),typeof $.scale.set==="function")$.scale.set(1,1,1);if(typeof $.rotation.set==="function")$.rotation.set(0,0,0)}}),_6=null,setTimeout(()=>{if(this.ctrl&&this.ctrl.explodeProgress>=0.4&&this.parts&&this.parts.length>0&&F0.RAYCAST_TARGET===J){let $=F0.MODEL||"one",Q=R9[$]||R9.one,Z=J;if(Q&&Q.indexOffset)Z+=Q.indexOffset;if(this.parts[Z]&&this.parts[Z].scale&&this.parts[Z].rotation)this.onPieceHover(J,!0),_6=J}},100);else this.resetHoverAnimations()}animateIn(J=1.3){d.to(this.ctrl,{y:0,duration:J,ease:"back.out(0.8)",overwrite:"auto"})}animateOut(J=1.2){d.to(this.ctrl,{y:-4,duration:J,overwrite:"auto"})}onPieceHover(J,$=!1){xE(this,J,$)}setCapColor(J){if(this.planeMaterial)this.planeMaterial.setMatcapIndex(J);wE(J),this.updateMeshMaterials()}initCapColorListener(){let J=($)=>{this.setCapColor($)};F0.on("WEBGL_CAP_COLOR",J),this._stateHandlers.push({event:"WEBGL_CAP_COLOR",handler:J})}updateMeshMaterials(){this.traverse((J)=>{if(J instanceof i8&&J.material){let $=WW.find((Q)=>J.name.includes(Q.name));if($&&$.isChangingMaterial&&J.material.color){let Q=$.color||"#000000",Z=Q.startsWith("#")?Q.replace("#","0x"):`0x${Q}`;if(J.material.color.getHex()!==parseInt(Z,16)){let K=new K8(Q);d.to(J.material.color,{r:K.r,g:K.g,b:K.b,duration:0.8,ease:"power2.out"})}if(J.material.metalness!==$.metalness)d.to(J.material,{metalness:$.metalness,duration:0.8,ease:"power2.out"});if(J.material.roughness!==$.roughness)d.to(J.material,{roughness:$.roughness,duration:0.8,ease:"power2.out"});J.material.needsUpdate=!0}}})}dispose(){if(this.resetHoverAnimations(),this.spinner)this.spinner.reset(),this.rotation.x=0,this.rotation.y=0;if(this.#J)this.#J(),this.#J=null;if(this._mouseMoveHandler)document.removeEventListener("mousemove",this._mouseMoveHandler),this._mouseMoveHandler=null;if(this._clickHandler)document.removeEventListener("click",this._clickHandler),this._clickHandler=null;if(this._stateHandlers.forEach(({event:J,handler:$})=>{F0.off(J,$)}),this._stateHandlers=[],this.spinner){if(typeof this.spinner.destroy==="function")this.spinner.destroy();else if(typeof this.spinner.dispose==="function")this.spinner.dispose();this.spinner=null}if(this.planeMaterial&&typeof this.planeMaterial.dispose==="function")this.planeMaterial.dispose();if(this.maskMaterial&&typeof this.maskMaterial.dispose==="function")this.maskMaterial.dispose();if(this.traverse((J)=>{if(J.geometry)J.geometry.dispose();if(J.material)if(Array.isArray(J.material))J.material.forEach(($)=>$.dispose());else J.material.dispose()}),this.parts=[],this.parent)this.parent.remove(this);if(window.currentModel===this)window.currentModel=null}}var X3=new xZ,N3=new jK;var bE=`#define MPI 3.1415926535897932384626433832795
#define MTAU 6.283185307179586476925286766559


attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
`;var vE=`precision mediump float;

uniform float u_time;
uniform vec3 u_color;
uniform vec4 u_pattern;
uniform bool u_reverseGradient;
uniform float u_centerFadeStrength;
varying vec2 v_uv;

#define PI 3.14159265358979323846


const float FREQUENCY = 35.0; 
const float LINE_WIDTH = .1; 
const float NOISE_INTENSITY = 0.2; 
const float TIME_MULTIPLIER = 2.0; 
const float CENTER_FADE = 0.6; 
const float TIME_DISTURBANCE = .3; 
const float VERTICAL_FADE = 0.35; 
const float FINAL_MIX = 0.6; 








float hash21(vec2 p){
    p = fract(p*vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x*p.y);
}


float band(float v, float w){
    return 1.0 - smoothstep(0.0, w, abs(v));
}


float circularPattern(vec2 uv, float time, float scale, float rotation) {
    float r = length(uv);
    float angle = atan(uv.y, uv.x) + rotation;
    float phase = scale * r - time;
    return sin(phase);
}

float squarePattern(vec2 uv, float time, float scale, float rotation) {
    
    float cos_r = cos(rotation);
    float sin_r = sin(rotation);
    vec2 rotated = vec2(
        uv.x * cos_r - uv.y * sin_r,
        uv.x * sin_r + uv.y * cos_r
    );
    
    float phase = scale * (abs(rotated.x) + abs(rotated.y)) - time;
    return sin(phase);
}

float spiralPattern(vec2 uv, float time, float scale, float rotation) {
    float r = length(uv);
    float angle = atan(uv.y, uv.x) + rotation;
    float phase = scale * (r + angle * 2.0) - time;
    return sin(phase);
}

float gridPattern(vec2 uv, float time, float scale, float rotation) {
    
    float cos_r = cos(rotation);
    float sin_r = sin(rotation);
    vec2 rotated = vec2(
        uv.x * cos_r - uv.y * sin_r,
        uv.x * sin_r + uv.y * cos_r
    );
    
    float phase_x = scale * rotated.x - time;
    float phase_y = scale * rotated.y - time;
    return sin(phase_x) * sin(phase_y);
}

float radialPattern(vec2 uv, float time, float scale, float rotation) {
    float r = length(uv);
    float angle = atan(uv.y, uv.x) + rotation;
    float phase = scale * angle * 8.0 - time;
    return sin(phase);
}

float wavePattern(vec2 uv, float time, float scale, float rotation) {
    
    float cos_r = cos(rotation);
    float sin_r = sin(rotation);
    vec2 rotated = vec2(
        uv.x * cos_r - uv.y * sin_r,
        uv.x * sin_r + uv.y * cos_r
    );
    
    float phase = scale * rotated.y - time;
    return sin(phase);
}

float diamondPattern(vec2 uv, float time, float scale, float rotation) {
    
    float cos_r = cos(rotation);
    float sin_r = sin(rotation);
    vec2 rotated = vec2(
        uv.x * cos_r - uv.y * sin_r,
        uv.x * sin_r + uv.y * cos_r
    );
    
    
    float diamondDist = max(abs(rotated.x), abs(rotated.y));
    float phase = scale * diamondDist - time;
    return sin(phase);
}

float hexagonPattern(vec2 uv, float time, float scale, float rotation) {
    
    float cos_r = cos(rotation);
    float sin_r = sin(rotation);
    vec2 rotated = vec2(
        uv.x * cos_r - uv.y * sin_r,
        uv.x * sin_r + uv.y * cos_r
    );
    
    
    vec2 hexUV = rotated;
    hexUV = abs(hexUV);
    float hexDist = max(hexUV.x * 0.866025 + hexUV.y * 0.5, hexUV.y);
    float phase = scale * hexDist - time;
    return sin(phase);
}


float getPattern(vec2 uv, float time, float patternType, float scale, float rotation) {
    if (patternType < 0.5) {
        return circularPattern(uv, time, scale, rotation);
    } else if (patternType < 1.5) {
        return squarePattern(uv, time, scale, rotation);
    } else if (patternType < 2.5) {
        return spiralPattern(uv, time, scale, rotation);
    } else if (patternType < 3.5) {
        return gridPattern(uv, time, scale, rotation);
    } else if (patternType < 4.5) {
        return radialPattern(uv, time, scale, rotation);
    } else if (patternType < 5.5) {
        return wavePattern(uv, time, scale, rotation);
    } else if (patternType < 6.5) {
        return diamondPattern(uv, time, scale, rotation);
    } else {
        return hexagonPattern(uv, time, scale, rotation);
    }
}

void main() {
    
    vec2 uv = (v_uv - 0.5) * 2.0;

    
    float baseTime = u_time * TIME_MULTIPLIER;
    float timeOscillation = sin(u_time * 0.3) * 0.5 + sin(u_time * 0.7) * 0.3;
    float timeNoise = hash21(vec2(u_time * 0.1, 0.0)) * 0.4 - 0.2;
    float t = baseTime + (timeOscillation + timeNoise) * TIME_DISTURBANCE;
    
    float w = max(0.001, LINE_WIDTH); 

    
    float r = length(uv);
    
    
    float patternScale = FREQUENCY * u_pattern.z; 
    float patternTime = t;
    float patternRotation = u_pattern.w; 
    
    
    float field = getPattern(uv, patternTime, u_pattern.x, patternScale, patternRotation);
    
    
    float jSeed = hash21(uv * 50.0) * 6.28318530718;
    float staticJ = (hash21(uv * 50.0) - 0.5) * 0.008;
    float oscJ = sin(u_time * 42.0 + jSeed) * 0.004;
    float particleJitter = staticJ + oscJ;
    
    
    vec2 jitteredUV = uv + vec2(particleJitter);
    float jitteredField = getPattern(jitteredUV, patternTime, u_pattern.x, patternScale, patternRotation);
    
    
    field = mix(field, jitteredField, u_pattern.y * 0.3); 
    
    
    float localPhase = 0.06 * sin(12.0 * u_time + hash21(uv * 30.0) * 6.28318530718);
    field += localPhase * u_pattern.y; 
    
    
    if (u_pattern.x < 1.5 || u_pattern.x > 4.5) { 
        vec2 corners[4];
        corners[0] = vec2( 1.10,  1.10);
        corners[1] = vec2(-1.10,  1.10);
        corners[2] = vec2(-1.10, -1.10);
        corners[3] = vec2( 1.10, -1.10);

        for (int i = 0; i < 4; i++) {
            vec2 cornerUV = uv - corners[i];

            
            float cjSeed  = hash21((uv + corners[i]) * 40.0 + float(i)) * 6.28318530718;
            float cStatic = (hash21((uv + corners[i]) * 40.0 + float(i)) - 0.5) * 0.008;
            float cOsc    = sin(u_time * 38.0 + cjSeed) * 0.0038;
            float cJ      = cStatic + cOsc;

            float cr = length(cornerUV);
            vec2  cDir = (cr > 0.0) ? cornerUV / cr : vec2(0.0);
            vec2  cJitteredUV = cornerUV + cDir * cJ;

            float cornerField = getPattern(cJitteredUV, patternTime + localPhase * 0.9,
                                           u_pattern.x, patternScale * 0.8, patternRotation);
            field += 0.4 * cornerField * u_pattern.y; 
        }
    }

    
    float lines = band(field, w);
    
    float glowLines = band(field, w * 3.0);

    
    vec2 grid = floor(gl_FragCoord.xy * 0.9);
    float stip = 1.0; 

    
    
    float vign = smoothstep(1.5, 0.2, r);
    
    
    
    float centerFadeBase = u_reverseGradient 
      ? (1.0 - smoothstep(0.0, CENTER_FADE, r))  
      : smoothstep(0.0, CENTER_FADE, r);         
    float centerFade = mix(1.0, centerFadeBase, u_centerFadeStrength);
    
    
    float verticalDistance = abs(uv.y);
    float verticalFade = 1.0 - smoothstep(0.0, VERTICAL_FADE, verticalDistance);

    
    float core = 0.0; 

    
    float lineIntensity = clamp(lines * vign * centerFade * verticalFade, 0.0, 1.0);

    
    float tremor = 1.0 + 0.05 * sin(2.0*PI*60.0*u_time + hash21(gl_FragCoord.xy)*6.28318530718);
    lineIntensity *= tremor;

    
    float grainMask = smoothstep(0.2, 1.0, lineIntensity);
    float rnd = hash21(gl_FragCoord.xy + vec2(u_time * 123.4, u_time * 57.3));
    float grain = 1.0 + (rnd - 0.5) * 1.15; 
    lineIntensity = clamp(lineIntensity * mix(1.0, grain, grainMask * NOISE_INTENSITY), 0.0, 1.0);

    
    float haloNoise = hash21(uv * 30.0 + u_time);
    float halo = pow(glowLines * 0.6 * vign * centerFade * verticalFade * (0.95 + 0.05*haloNoise), 1.8);

    
    float dots = step(0.999, hash21(gl_FragCoord.xy * 0.5 + u_time));
    float intensity = min(1.0, lineIntensity + halo + core + dots * 0.08);

    
    vec3 baseColor = u_color;
    
    
    vec3 backgroundColor = vec3(16.0/255.0); 
    
    
    vec3 col = mix(backgroundColor, baseColor, intensity * FINAL_MIX);

    gl_FragColor = vec4(col, 1.);
}
`;var hE={one:14210815,yo:16774114,vad:15267282},E3={one:[0,4,1.5,0],yo:[6,5.4,1.5,1],vad:[1,1,1,0]};class HW extends i8{geometry=new aQ(10,10,1,1);material=null;constructor(J=null,$={}){super();this.position.set(0,0,-2),this.material=new fE($),this.visible=$?.visible!==void 0?$.visible:!0,(J||O0.scene).add(this)}setReverseGradient(J){if(this.material?.uniforms?.u_reverseGradient)this.material.uniforms.u_reverseGradient.value=!!J}dispose(){if(this.material&&typeof this.material.dispose==="function")this.material.dispose();if(this.geometry)this.geometry.dispose()}}class fE extends I6{_rafUnsubscribe=null;constructor(J={}){let $=J?.patternKey??F0.MODEL,Q=J?.color??($&&hE[$])??hE.one,Z=J?.pattern??($&&E3[$])??[0,1,1,0],W=J?.centerFadeStrength!==void 0?J.centerFadeStrength:1,K=Q instanceof K8?Q:new K8(Q),U=Z;super({vertexShader:bE,fragmentShader:vE,uniforms:{u_time:{value:J?.u_time||0},u_t1:{value:J?.u_t1||null},u_pattern:{value:U||[0,1,1,0]},u_color:{value:K},u_reverseGradient:{value:J?.reverseGradient||!1},u_centerFadeStrength:{value:W}},extensions:{derivatives:!0},side:VJ,wireframe:!1,transparent:!1});this._rafUnsubscribe=PJ.add(()=>this.uniforms.u_time.value+=0.01)}set time(J){this.uniforms.u_time.value=J}dispose(){if(this._rafUnsubscribe)this._rafUnsubscribe(),this._rafUnsubscribe=null;super.dispose()}}class gE extends RQ{isOn=!0;model=null;screen=null;constructor(J,$=null){super();this.type=$,this.load()}async load(){this.assets=await ZW(),this.environment=this.assets.hdr,this.setupHDRLighting(),this.create()}setupHDRLighting(){try{if(!this.assets.hdr)return;this.environment=this.assets.hdr}catch(J){}}create(){if(this.model=new SY(this.type),this.type!=="ecomm"){this.screen=new HW(this,{reverseGradient:!1});let J=this.type==="explode";this.model.visible=!0,this.screen.visible=J}}render(J){}resize(J){}}var uE=`precision highp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform sampler2D u_positions;
uniform mediump float u_time;
uniform mediump float u_pointScale;

varying lowp vec2 v_uv;

void main() {
  
  vec2 pos2D = texture2D(u_positions, uv).xy;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos2D, 0.0, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  
  gl_PointSize = u_pointScale * (-1.0 / mvPosition.z);
  
  v_uv = uv;
}

`;var pE=`precision lowp float;

uniform mediump float u_time;
uniform sampler2D u_positions;
uniform mediump float u_alphaMultiplier;
uniform mediump float u_visibility;

varying lowp vec2 v_uv;

void main() {
  
  
  vec2 coord = gl_PointCoord - 0.5;
  float dist = length(coord);
  
  
  
  float alpha = smoothstep(0.5, 0.1, dist) * 0.3 * u_alphaMultiplier * u_visibility;
  
  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}

`;class jY extends I6{constructor(J={}){super({vertexShader:uE,fragmentShader:pE});this.uniforms={u_time:{value:J.u_time??0},u_positions:{value:J.u_positions??null},u_pointScale:{value:J.pointSize??2},u_alphaMultiplier:{value:J.u_alphaMultiplier??1},u_visibility:{value:J.u_visibility??0}},this.side=VJ,this.depthWrite=!1,this.depthTest=!1,this.transparent=!0}set time(J){this.uniforms.u_time.value=J}set pointScale(J){this.uniforms.u_pointScale.value=J}set alphaMultiplier(J){this.uniforms.u_alphaMultiplier.value=J}set visibility(J){this.uniforms.u_visibility.value=J}}var mE=`precision highp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying highp vec2 v_uv;

void main() {
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  v_uv = uv;
}

`;var dE=`precision highp float;

uniform float u_time;
uniform float u_dt;
uniform lowp vec2 u_mouse;
uniform lowp float u_mouseVelocity;

uniform sampler2D u_positions;
uniform sampler2D u_original;
uniform mediump float u_shapeScale;
uniform mediump float u_aspect;
uniform lowp float u_patternMix;
uniform mediump vec4 u_patternParams;
uniform mediump float u_textureMixInfluence;
uniform mediump float u_textureScale;


uniform mediump float u_friction;
uniform mediump float u_baseToShape;
uniform mediump float u_baseToMouse;
uniform mediump float u_baseMouseRadius;
uniform mediump float u_baseDistThreshold;
uniform mediump float u_baseNoiseStrength;


uniform mediump float u_patternFrequency;
uniform mediump float u_patternLineWidth;
uniform mediump float u_patternTimeMultiplier;
uniform mediump float u_patternTimeDisturbance;
uniform mediump float u_patternAttraction;
uniform mediump float u_patternLinePush;
uniform mediump float u_patternSwirl;
uniform mediump float u_patternGradientEps;
uniform mediump float u_patternChladniDistortion;
uniform mediump float u_chladniModeM;
uniform mediump float u_chladniModeN;
uniform mediump float u_chladniNoise;
uniform mediump float u_patternJitter;
uniform mediump float u_geometryFrequency;
uniform mediump float u_geometrySize;
uniform mediump float u_geometryDistortion;
uniform lowp float u_texturePercent;
uniform lowp float u_audioVolume;
uniform lowp float u_audioFrequency;

varying highp vec2 v_uv;

const mediump float PI = 3.14159265358979323846;


lowp float hash21(highp vec2 p){
  p = fract(p*vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x*p.y);
}

mediump float band(mediump float v, mediump float w){
  return 1.0 - smoothstep(0.0, w, abs(v));
}


vec2 rotateUV(vec2 uv, float cos_r, float sin_r) {
  return vec2(
    uv.x * cos_r - uv.y * sin_r,
    uv.x * sin_r + uv.y * cos_r
  );
}


float getPattern(vec2 uv, float time, float patternType, float scale, float cos_r, float sin_r) {
  float phase;
  
  
  if (patternType < 0.5) {
    float r = length(uv);
    float angle = atan(uv.y, uv.x) + atan(sin_r, cos_r);
    phase = scale * r - time;
    return sin(phase);
  }
  
  
  if (patternType < 1.5) {
    vec2 rotated = rotateUV(uv, cos_r, sin_r);
    phase = scale * (abs(rotated.x) + abs(rotated.y)) - time;
    return sin(phase);
  }
  
  
  if (patternType < 2.5) {
    float r = length(uv);
    float angle = atan(uv.y, uv.x) + atan(sin_r, cos_r);
    phase = scale * (r + angle * 2.0) - time;
    return sin(phase);
  }
  
  
  if (patternType < 3.5) {
    vec2 rotated = rotateUV(uv, cos_r, sin_r);
    float phase_x = scale * rotated.x - time;
    float phase_y = scale * rotated.y - time;
    return sin(phase_x) * sin(phase_y);
  }
  
  
  if (patternType < 4.5) {
    float angle = atan(uv.y, uv.x) + atan(sin_r, cos_r);
    phase = scale * angle * 8.0 - time;
    return sin(phase);
  }
  
  
  if (patternType < 5.5) {
    vec2 rotated = rotateUV(uv, cos_r, sin_r);
    phase = scale * rotated.y - time;
    return sin(phase);
  }
  
  
  if (patternType < 6.5) {
    vec2 rotated = rotateUV(uv, cos_r, sin_r);
    float diamondDist = max(abs(rotated.x), abs(rotated.y));
    phase = scale * diamondDist - time;
    return sin(phase);
  }
  
  
  vec2 rotated = rotateUV(uv, cos_r, sin_r);
  vec2 hexUV = abs(rotated);
  float hexDist = max(hexUV.x * 0.866025 + hexUV.y * 0.5, hexUV.y);
  phase = scale * hexDist - time;
  return sin(phase);
}


float computePatternField(vec2 uv, float patternTime, float patternType, float patternScale, float cos_r, float sin_r, float intensity) {
  if (intensity < 0.001) return 0.0;
  
  float field = getPattern(uv, patternTime, patternType, patternScale, cos_r, sin_r);
  
  
  float patternJitter = u_patternJitter;
  if (patternJitter > 0.001) {
    
    lowp float jSeed = hash21(uv * 50.0) * 6.28318530718;
    lowp float jitter = (jSeed - 3.14159) * 0.004 + sin(u_time * 42.0 + jSeed) * 0.004;
    vec2 jitteredUV = uv + jitter * patternJitter;
    float jitteredField = getPattern(jitteredUV, patternTime, patternType, patternScale, cos_r, sin_r);
    field = mix(field, jitteredField, intensity * 0.3 * patternJitter);
    
    
    lowp float localPhase = 0.06 * sin(12.0 * u_time + hash21(uv * 30.0) * 6.28318530718);
    field += localPhase * intensity * patternJitter;
  }
  
  return field;
}

vec2 patternTarget(vec2 base, vec4 params, float time) {
  mediump float type = params.x;
  lowp float intensity = clamp(params.y, 0.0, 1.0);
  mediump float scaleMult = max(params.z, 0.1);
  mediump float rotation = params.w;
  
  if (intensity < 0.001) return base;

  mediump float cos_r = cos(rotation);
  mediump float sin_r = sin(rotation);

  mediump float baseTime = time * u_patternTimeMultiplier;
  lowp float timeOscillation = sin(time * 0.3) * 0.5 + sin(time * 0.7) * 0.3;
  lowp float timeNoise = hash21(vec2(time * 0.1, 0.0)) * 0.4 - 0.2;
  mediump float patternTime = baseTime + (timeOscillation + timeNoise) * u_patternTimeDisturbance;
  mediump float patternScale = u_patternFrequency * scaleMult;

  vec2 uv = base;

  float field = computePatternField(uv, patternTime, type, patternScale, cos_r, sin_r, intensity);
  
  
  mediump float eps = u_patternGradientEps;
  vec2 dx = vec2(eps, 0.0);
  vec2 dy = vec2(0.0, eps);
  float fieldXP = computePatternField(uv + dx, patternTime, type, patternScale, cos_r, sin_r, intensity);
  float fieldXN = computePatternField(uv - dx, patternTime, type, patternScale, cos_r, sin_r, intensity);
  float fieldYP = computePatternField(uv + dy, patternTime, type, patternScale, cos_r, sin_r, intensity);
  float fieldYN = computePatternField(uv - dy, patternTime, type, patternScale, cos_r, sin_r, intensity);
  
  vec2 gradient = vec2(fieldXP - fieldXN, fieldYP - fieldYN) * (0.5 / eps);
  mediump float gradientLen = length(gradient);
  vec2 normal = gradientLen > 1e-5 ? gradient / gradientLen : vec2(0.0);

  mediump float bandValue = band(field, max(0.001, u_patternLineWidth));
  vec2 correction = vec2(0.0);

  if (gradientLen > 1e-5) {
    correction = -field * normal * (u_patternAttraction * (1.0 + 0.5 * bandValue)) * intensity;

    vec2 tangent = vec2(-normal.y, normal.x);
    lowp float swirlPhase = patternTime + hash21(uv * 32.0) * 6.28318530718 + length(uv) * 5.0;
    correction += tangent * sin(swirlPhase) * u_patternSwirl * intensity;
  }

  correction += normal * (bandValue - 0.5) * u_patternLinePush * intensity;

  vec2 result = uv + correction;
  lowp float mixAmount = clamp(intensity + bandValue * 0.5, 0.0, 1.0);
  return mix(uv, result, mixAmount);
}


float computeChladniField(vec2 pos, float m, float n, float a, float b) {
  vec2 plateCoords = (pos + 1.0) * 0.5;
  plateCoords.x *= a;
  plateCoords.y *= b;
  return sin(m * PI * plateCoords.x / a) * sin(n * PI * plateCoords.y / b);
}


float getLocalizedNoise(vec2 pos, float noiseAmount) {
  vec2 cellScale = vec2(12.0, 12.0);
  vec2 cellCoord = floor(pos * cellScale);
  vec2 cellUV = fract(pos * cellScale);
  float cellHash = hash21(cellCoord + vec2(12.34, 56.78));
  
  
  float spotThreshold = 0.85; 
  if (cellHash > spotThreshold) {
    vec2 cellCenter = vec2(0.5, 0.5);
    float distFromCenter = length(cellUV - cellCenter);
    float spotRadius = 0.4; 
    float spotStrength = 1.0 - smoothstep(0.0, spotRadius, distFromCenter);
    float spotNoise = hash21(cellCoord * 2.0 + cellUV * 5.0) - 0.5;
    return spotStrength * spotNoise * noiseAmount * 0.3;
  }
  return 0.0;
}



vec2 computePatternPosition(vec2 uv, vec4 patternParams, float scale, float coverScale) {
  
  vec2 centeredUV = (uv - 0.5) * 2.0;
  
  
  float patternType = patternParams.x;
  float intensity = clamp(patternParams.y, 0.0, 1.0);
  float patternScaleMult = max(patternParams.z, 0.1);
  float rotation = patternParams.w;
  
  if (intensity < 0.001) {
    
    float screenScale = scale * coverScale * 2.0;
    return centeredUV * screenScale;
  }
  
  
  
  
  vec2 distortedUV = centeredUV;
  float chladniDistortion = u_patternChladniDistortion;
  
  if (chladniDistortion > 0.001) {
    
    
    float a = 2.0;
    float b = 2.0;
    float m = max(1.0, floor(u_chladniModeM + 0.5)); 
    float n = max(1.0, floor(u_chladniModeN + 0.5)); 
    
    
    vec2 plateCoords = (centeredUV + 1.0) * 0.5; 
    plateCoords.x *= a; 
    plateCoords.y *= b; 
    
    
    float chladniField = sin(m * PI * plateCoords.x / a) * sin(n * PI * plateCoords.y / b);
    
    
    float eps = 0.01;
    float fieldX = sin(m * PI * (plateCoords.x + eps) / a) * sin(n * PI * plateCoords.y / b);
    float fieldY = sin(m * PI * plateCoords.x / a) * sin(n * PI * (plateCoords.y + eps) / b);
    vec2 gradient = vec2((fieldX - chladniField) / eps, (fieldY - chladniField) / eps);
    
    
    
    float gradientLen = length(gradient);
    if (gradientLen > 0.001) {
      vec2 normal = gradient / gradientLen;
      
      float stepSize = -chladniField / max(gradientLen, 1e-5);
      distortedUV += normal * stepSize * chladniDistortion * 0.3;
    }
  }
  
  
  float cos_r = cos(rotation);
  float sin_r = sin(rotation);
  
  
  float patternTime = 0.0;
  
  
  
  
  
  
  float patternScale = u_patternFrequency * patternScaleMult * u_geometryFrequency * 5.0;
  
  
  
  vec2 patternPos = centeredUV;
  float eps = u_patternGradientEps;
  
  
  float noiseAmount = u_chladniNoise;
  
  
  for (int i = 0; i < 4; i++) {
    
    float patternField = computePatternField(patternPos, patternTime, patternType, patternScale, cos_r, sin_r, intensity);
    
    
    
    if (noiseAmount > 0.001) {
      float localizedDisturbance = getLocalizedNoise(patternPos, noiseAmount);
      
      patternField += localizedDisturbance * 0.5;
    }
    
    
    float combinedField = patternField;
    float chladniWeight = 0.0;
    
    if (chladniDistortion > 0.001) {
      float a = 2.0;
      float b = 2.0;
      float m = max(1.0, floor(u_chladniModeM + 0.5));
      float n = max(1.0, floor(u_chladniModeN + 0.5));
      
      
      float chladniField = computeChladniField(patternPos, m, n, a, b);
      
      
      if (noiseAmount > 0.001) {
        float localizedDisturbance = getLocalizedNoise(patternPos, noiseAmount);
        chladniField += localizedDisturbance * 0.4;
      }
      
      
      
      chladniWeight = chladniDistortion * 0.5;
      combinedField = patternField * (1.0 - chladniWeight) + chladniField * chladniWeight;
      
      
      
      float interference = patternField * chladniField * chladniDistortion * 0.4;
      combinedField += interference;
    }
    
    
    vec2 dx = vec2(eps, 0.0);
    vec2 dy = vec2(0.0, eps);
    
    float patternXP = computePatternField(patternPos + dx, patternTime, patternType, patternScale, cos_r, sin_r, intensity);
    float patternXN = computePatternField(patternPos - dx, patternTime, patternType, patternScale, cos_r, sin_r, intensity);
    float patternYP = computePatternField(patternPos + dy, patternTime, patternType, patternScale, cos_r, sin_r, intensity);
    float patternYN = computePatternField(patternPos - dy, patternTime, patternType, patternScale, cos_r, sin_r, intensity);
    
    
    
    if (noiseAmount > 0.001) {
      patternXP += getLocalizedNoise(patternPos + dx, noiseAmount) * 0.5;
      patternXN += getLocalizedNoise(patternPos - dx, noiseAmount) * 0.5;
      patternYP += getLocalizedNoise(patternPos + dy, noiseAmount) * 0.5;
      patternYN += getLocalizedNoise(patternPos - dy, noiseAmount) * 0.5;
    }
    
    float fieldXP = patternXP;
    float fieldXN = patternXN;
    float fieldYP = patternYP;
    float fieldYN = patternYN;
    
    
    if (chladniDistortion > 0.001) {
      float a = 2.0;
      float b = 2.0;
      float m = max(1.0, floor(u_chladniModeM + 0.5));
      float n = max(1.0, floor(u_chladniModeN + 0.5));
      
      float chladniXP = computeChladniField(patternPos + dx, m, n, a, b);
      float chladniXN = computeChladniField(patternPos - dx, m, n, a, b);
      float chladniYP = computeChladniField(patternPos + dy, m, n, a, b);
      float chladniYN = computeChladniField(patternPos - dy, m, n, a, b);
      
      
      float noiseAmount = u_chladniNoise;
      if (noiseAmount > 0.001) {
        chladniXP += getLocalizedNoise(patternPos + dx, noiseAmount);
        chladniXN += getLocalizedNoise(patternPos - dx, noiseAmount);
        chladniYP += getLocalizedNoise(patternPos + dy, noiseAmount);
        chladniYN += getLocalizedNoise(patternPos - dy, noiseAmount);
      }
      
      
      fieldXP = patternXP * (1.0 - chladniWeight) + chladniXP * chladniWeight + patternXP * chladniXP * chladniDistortion * 0.4;
      fieldXN = patternXN * (1.0 - chladniWeight) + chladniXN * chladniWeight + patternXN * chladniXN * chladniDistortion * 0.4;
      fieldYP = patternYP * (1.0 - chladniWeight) + chladniYP * chladniWeight + patternYP * chladniYP * chladniDistortion * 0.4;
      fieldYN = patternYN * (1.0 - chladniWeight) + chladniYN * chladniWeight + patternYN * chladniYN * chladniDistortion * 0.4;
    }
    
    vec2 gradient = vec2(fieldXP - fieldXN, fieldYP - fieldYN) * (0.5 / eps);
    float gradientLen = length(gradient);
    
    if (gradientLen > 1e-5) {
      vec2 normal = gradient / gradientLen;
      
      float stepSize = -combinedField / max(gradientLen, 1e-5);
      patternPos += normal * stepSize * 0.4; 
    } else {
      break;
    }
  }
  
  
  
  
  
  float screenScale = scale * coverScale * 2.0;
  
  return patternPos * screenScale;
}

void main() {
  mediump float scale = max(u_shapeScale, 0.0001);
  
  float dt60 = u_dt * 60.0;
  
  
  vec4 posData = texture2D(u_positions, v_uv);
  vec2 pos = posData.xy;
  vec2 velocity = posData.zw; 
  
  
  mediump float coverScale = max(u_aspect, 1.0);
  
  
  vec2 patternTarget = computePatternPosition(v_uv, u_patternParams, scale, coverScale);
  
  
  vec4 originalData = texture2D(u_original, v_uv);
  vec2 o_pos = originalData.xy;
  
  vec2 shapeTarget = o_pos * coverScale * u_textureScale;
  
  
  
  float rnd = hash21(v_uv); 
  float pickTexture = rnd < clamp(u_texturePercent, 0.0, 1.0) ? 1.0 : 0.0;
  vec2 target = mix(patternTarget, shapeTarget, pickTexture);

  
  velocity *= pow(u_friction, dt60);

  
  vec2 toTarget = target - pos;
  mediump float dist = length(toTarget);
  
  mediump float distThreshold = mix(u_baseDistThreshold * scale, 0.0, pickTexture);
  if (dist > distThreshold) {
    vec2 direction = toTarget / max(dist, 1e-6);
    
    mediump float attractionStrength = pickTexture < 0.5 ? u_baseToShape * 5.0 : u_baseToShape;
    velocity += direction * (attractionStrength * scale) * dt60;
  }

  
  lowp float randAngle = fract(sin(dot(v_uv + u_time * vec2(0.017, 0.023), vec2(12.9898, 78.233))) * 43758.5453) * 6.28318530718;
  vec2 noiseDir = vec2(cos(randAngle), sin(randAngle));
  
  
  mediump float noiseStrength = pickTexture < 0.5 ? u_baseNoiseStrength * 0.1 : u_baseNoiseStrength * 0.3;
  velocity += noiseDir * (noiseStrength * scale) * dt60;

  
  vec2 toMouse = pos - u_mouse;
  mediump float mouse_distance = length(toMouse);
  mediump float max_distance = u_baseMouseRadius * scale;
  
  
  mediump float normalizedDist = clamp(mouse_distance / max_distance, 0.0, 1.0);
  lowp float intensity = 1.0 - smoothstep(0.0, 1.0, normalizedDist);
  
  
  if (intensity > 0.01) {
    vec2 mouseDirection = toMouse / max(mouse_distance, 1e-6);
    
    velocity += mouseDirection * intensity * (u_baseToMouse * scale) * u_mouseVelocity * dt60;
  }

  
  pos += velocity * dt60;

  gl_FragColor = vec4(pos, velocity);
}
`;class wY extends I6{constructor(J={}){super({vertexShader:mE,fragmentShader:dE});this.uniforms={u_time:{value:J.u_time??0},u_dt:{value:J.u_dt??0.016666666666666666},u_positions:{value:J.u_positions??null},u_original:{value:J.u_original??J.u_positions??null},u_mouse:{value:J.u_mouse??[0,0]},u_mouseVelocity:{value:J.u_mouseVelocity??1},u_shapeScale:{value:J.u_shapeScale??1},u_aspect:{value:J.u_aspect??1},u_patternMix:{value:J.u_patternMix??1},u_patternParams:{value:J.u_patternParams??new Float32Array([0,1,0.2,0])},u_geometryFrequency:{value:J.u_geometryFrequency??1},u_geometrySize:{value:J.u_geometrySize??0.5},u_geometryDistortion:{value:J.u_geometryDistortion??0.4},u_textureMixInfluence:{value:J.u_textureMixInfluence??0},u_textureScale:{value:J.u_textureScale??1},u_texturePercent:{value:J.u_texturePercent??0},u_friction:{value:J.u_friction??0.985},u_baseToShape:{value:J.u_baseToShape??0.0005},u_baseToMouse:{value:J.u_baseToMouse??0.006},u_baseMouseRadius:{value:J.u_baseMouseRadius??0.1},u_baseDistThreshold:{value:J.u_baseDistThreshold??0.01},u_baseNoiseStrength:{value:J.u_baseNoiseStrength??0.00035},u_patternFrequency:{value:J.u_patternFrequency??35},u_patternLineWidth:{value:J.u_patternLineWidth??0.1},u_patternTimeMultiplier:{value:J.u_patternTimeMultiplier??2},u_patternTimeDisturbance:{value:J.u_patternTimeDisturbance??0.3},u_patternAttraction:{value:J.u_patternAttraction??0.45},u_patternLinePush:{value:J.u_patternLinePush??0.12},u_patternSwirl:{value:J.u_patternSwirl??0.05},u_patternGradientEps:{value:J.u_patternGradientEps??0.003},u_patternChladniDistortion:{value:J.u_patternChladniDistortion??0},u_chladniModeM:{value:J.u_chladniModeM??1},u_chladniModeN:{value:J.u_chladniModeN??1},u_chladniNoise:{value:J.u_chladniNoise??0},u_patternJitter:{value:J.u_patternJitter??0},u_audioVolume:{value:J.u_audioVolume??0},u_audioFrequency:{value:J.u_audioFrequency??0}},this.side=VJ}set dt(J){this.uniforms.u_dt.value=J}set time(J){this.uniforms.u_time.value=J}set texturePercent(J){this.uniforms.u_texturePercent.value=J}set shapeScale(J){this.uniforms.u_shapeScale.value=J}set aspect(J){this.uniforms.u_aspect.value=J}set patternMix(J){this.uniforms.u_patternMix.value=J}set patternParams(J){if(Array.isArray(J)||J instanceof Float32Array)this.uniforms.u_patternParams.value=J instanceof Float32Array?J:new Float32Array(J)}set friction(J){this.uniforms.u_friction.value=J}set baseToShape(J){this.uniforms.u_baseToShape.value=J}set baseToMouse(J){this.uniforms.u_baseToMouse.value=J}set mouseVelocity(J){this.uniforms.u_mouseVelocity.value=J}set baseMouseRadius(J){this.uniforms.u_baseMouseRadius.value=J}set baseDistThreshold(J){this.uniforms.u_baseDistThreshold.value=J}set baseNoiseStrength(J){this.uniforms.u_baseNoiseStrength.value=J}set patternFrequency(J){this.uniforms.u_patternFrequency.value=J}set patternLineWidth(J){this.uniforms.u_patternLineWidth.value=J}set patternTimeMultiplier(J){this.uniforms.u_patternTimeMultiplier.value=J}set patternTimeDisturbance(J){this.uniforms.u_patternTimeDisturbance.value=J}set patternAttraction(J){this.uniforms.u_patternAttraction.value=J}set patternLinePush(J){this.uniforms.u_patternLinePush.value=J}set patternSwirl(J){this.uniforms.u_patternSwirl.value=J}set patternGradientEps(J){this.uniforms.u_patternGradientEps.value=J}set patternChladniDistortion(J){this.uniforms.u_patternChladniDistortion.value=J}set chladniModeM(J){this.uniforms.u_chladniModeM.value=J}set chladniModeN(J){this.uniforms.u_chladniModeN.value=J}set chladniNoise(J){this.uniforms.u_chladniNoise.value=J}set patternJitter(J){this.uniforms.u_patternJitter.value=J}set geometryFrequency(J){this.uniforms.u_geometryFrequency.value=J}set geometrySize(J){this.uniforms.u_geometrySize.value=J}set geometryDistortion(J){this.uniforms.u_geometryDistortion.value=J}set textureMixInfluence(J){this.uniforms.u_textureMixInfluence.value=J}set textureScale(J){this.uniforms.u_textureScale.value=J}set audioVolume(J){this.uniforms.u_audioVolume.value=J}set audioFrequency(J){this.uniforms.u_audioFrequency.value=J}}var cE=["https://iyo2.vercel.app/public/homepage/words1.jpg","https://iyo2.vercel.app/public/homepage/words2.jpg","https://iyo2.vercel.app/public/homepage/words3.jpg","https://iyo2.vercel.app/public/homepage/words4.jpg","https://iyo2.vercel.app/public/homepage/words5.jpg","https://iyo2.vercel.app/public/homepage/words6.jpg","https://iyo2.vercel.app/public/homepage/words7.jpg","https://iyo2.vercel.app/public/homepage/words8.jpg","https://iyo2.vercel.app/public/homepage/words9.jpg"];class qW{x=0;y=0;ex=0;ey=0;ex2=0;ey2=0;constructor(J,$){if(this.element=J,this.callback=$,J)this.init();else console.warn("Mouse class requires an element")}init(){this.handlePointerMove=this.handlePointerMove.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.update=this.update.bind(this);let J=document;J.addEventListener("pointermove",this.handlePointerMove,{passive:!0}),J.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),this.target=J,d.ticker.add(this.update)}handlePointerMove(J){if(!J)return;this.x=J.clientX??this.x,this.y=J.clientY??this.y}handleTouchMove(J){if(!J?.touches?.length)return;let $=J.touches[0];this.x=$.clientX,this.y=$.clientY}update(){if(this.ex=d.utils.interpolate(this.ex,this.x,0.1),this.ey=d.utils.interpolate(this.ey,this.y,0.1),this.ex2=d.utils.interpolate(this.ex2,this.x,0.06),this.ey2=d.utils.interpolate(this.ey2,this.y,0.06),this.callback)this.callback({ex:this.ex,ey:this.ey,ex2:this.ex2,ey2:this.ey2})}destroy(){if(this.target)this.target.removeEventListener("pointermove",this.handlePointerMove),this.target.removeEventListener("touchmove",this.handleTouchMove),this.target=null;d.ticker.remove(this.update)}}var QJ={POINTER_PLANE_SIZE:20,SHAPE_SCALE:1,POINT_SIZE:1,STRAY_RATE:0,TEXTURE_SIZE:1280,PATTERN_INTENSITY:1,PATTERN_SCALE:0.2,TEXTURE_SCALE:5,POINTER_UPDATE_THROTTLE:16},_Y={0:[0,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],1:[1,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],2:[2,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],3:[3,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],4:[4,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],5:[5,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],6:[6,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0],7:[7,QJ.PATTERN_INTENSITY,QJ.PATTERN_SCALE,0]};class YW extends VZ{constructor({renderer:J,camera:$,interactionElement:Q,imageSources:Z=cE}={}){if(!J)throw new Error("GpgpuParticles requires a WebGLRenderer instance.");if(!$)throw new Error("GpgpuParticles requires a camera instance.");super();this.renderer=J,this.camera=$,this.textureSize=QJ.TEXTURE_SIZE,this.pointerPlaneSize=QJ.POINTER_PLANE_SIZE,this.interactionElement=Q||J.domElement||window,this.imageSources=Z,this.strayRate=QJ.STRAY_RATE,this.shapeScale=QJ.SHAPE_SCALE,this.pointSize=QJ.POINT_SIZE,this.textureScale=QJ.TEXTURE_SCALE,this.currentPattern=0,this.patternMix=1,this.pointer={x:0,y:0},this._rawMouse={x:0,y:0},this.textures=[],this.currentTextureIndex=0,this._pointerVector=new i,this._pointerDirection=new i,this._pointerPosition=new i,this._rendererSize=new i,this._lastPointerUpdate=0,this._pendingPointerUpdate=!1;let W=P3(J);this.renderTargetType=W.type,this.enableSimulation=W.enabled;let{positions:K,uvs:U}=z3(this.textureSize);this.geometry=new uJ,this.geometry.setAttribute("position",K),this.geometry.setAttribute("uv",U),this.basePositionsTexture=D3(this.textureSize,this.shapeScale),this.material=new jY({u_positions:this.basePositionsTexture,pointSize:this.pointSize,u_visibility:0}),this.material.pointScale=this.pointSize,this.ready=this.init().then(()=>{return this.isReady=!0,this}).catch((H)=>{return console.error("[GpgpuParticles] Failed to initialize",H),this.isReady=!1,this})}async init(){let $=(await Promise.allSettled(this.imageSources.map((X)=>{if(X&&X.isDataTexture)return Promise.resolve(X);return V3(X,this.textureSize,this.shapeScale,this.strayRate)}))).map((X)=>{if(X.status==="fulfilled"&&X.value)return X.value;if(X.status==="rejected")console.warn("[GpgpuParticles] Failed to load particle texture",X.reason);return null}).filter(Boolean);this.textures=$.length>0?$:[this.basePositionsTexture];let Q=Math.min(10,this.textures.length-1);this.currentTextureIndex=Math.max(0,Q);let Z=this.basePositionsTexture,W=this.textures[this.currentTextureIndex]||Z;this.simulationScene=new RQ,this.simulationCamera=new VQ(-1,1,1,-1,-2,2),this.simulationCamera.position.z=1,this.simulationCamera.lookAt(0,0,0);let K=new aQ(2,2,2,2),U=this.renderer.getSize(this._rendererSize),H=U.y!==0?U.x/U.y:1,Y=Math.max(H,1),G=_Y[this.currentPattern]||_Y[0];if(this.simulationMaterial=new wY({u_positions:W,u_original:W,u_shapeScale:this.shapeScale,u_textureScale:this.textureScale,u_aspect:H,u_patternMix:this.patternMix,u_patternParams:new Float32Array(G)}),this.material.pointScale=this.pointSize*Y,this.simulationMaterial.shapeScale=this.shapeScale,this.simulationMaterial.textureScale=this.textureScale,this.simulationMaterial.patternMix=this.patternMix,this.simulationMesh=new i8(K,this.simulationMaterial),this.simulationScene.add(this.simulationMesh),this.enableSimulation)this.targets=k3(2,this.textureSize,this.renderer,this.renderTargetType);else this.targets=[],console.warn("[GpgpuParticles] Disabling simulation due to insufficient render target support.");this.material.uniforms.u_positions.value=W,this.handlePointerMove=this.handlePointerMove.bind(this),this.addEventListeners()}addEventListeners(){let J=typeof window!=="undefined"?window:void 0,$=this.interactionElement&&typeof this.interactionElement.addEventListener==="function"?this.interactionElement:J,Q=typeof document!=="undefined"?document:void 0,Z=Q&&Q.body&&typeof Q.body.addEventListener==="function"?Q.body:void 0,W=$||Z||Q||J;if(!W||typeof W.addEventListener!=="function")return;this.mouseTracker=new qW(W,this.handlePointerMove),this.eventTarget=W}removeEventListeners(){if(!this.eventTarget)return;this.mouseTracker?.destroy(),this.mouseTracker=null,this.eventTarget=void 0}handlePointerMove(J){if(!J)return;if(typeof J.ex==="number"&&typeof J.ey==="number"&&(J.clientX===void 0||J.clientY===void 0))this._rawMouse.x=J.ex,this._rawMouse.y=J.ey;else this._rawMouse.x=J.clientX??0,this._rawMouse.y=J.clientY??0;let $=performance.now();if($-this._lastPointerUpdate<QJ.POINTER_UPDATE_THROTTLE){this._pendingPointerUpdate=!0;return}this._lastPointerUpdate=$,this._pendingPointerUpdate=!1,this.updatePointer()}updatePointer(){if(!this.renderer||!this.camera)return;let{x:J,y:$}=this._rawMouse,Q=typeof window!=="undefined"?window.innerWidth:1,Z=typeof window!=="undefined"?window.innerHeight:1,W=J*(2/Q)-1,K=-($*(2/Z))+1;this._pointerVector.set(W,K,0.5),this._pointerVector.unproject(this.camera),this._pointerDirection.copy(this._pointerVector).sub(this.camera.position).normalize();let U=0,H=this._pointerDirection.z!==0?(U-this.camera.position.z)/this._pointerDirection.z:0;this._pointerPosition.copy(this.camera.position).addScaledVector(this._pointerDirection,H),this.pointer.x=this._pointerPosition.x,this.pointer.y=this._pointerPosition.y,this.castPointer()}processPendingUpdates(){if(this._pendingPointerUpdate){let J=performance.now();if(J-this._lastPointerUpdate>=QJ.POINTER_UPDATE_THROTTLE)this._pendingPointerUpdate=!1,this._lastPointerUpdate=J,this.updatePointer()}}castPointer(){if(!this.simulationMaterial)return;this.simulationMaterial.uniforms.u_mouse.value=[this.pointer.x,this.pointer.y]}render(J){if(!this.renderer||!this.enableSimulation||!this.targets||!this.targets.length||!this.simulationMaterial)return;if(this.processPendingUpdates(),typeof J==="number"){this.material.time=J,this._lastTime=this._lastTime??J;let Q=Math.max(0,Math.min(0.1,J-this._lastTime))*0.8;this._lastTime=J,this.simulationMaterial.time=J,this.simulationMaterial.dt=Q}this.runSimulation()}runSimulation(){this.renderer.setRenderTarget(this.targets[0]),this.renderer.render(this.simulationScene,this.simulationCamera);let J=this.targets[0];this.targets[0]=this.targets[1],this.targets[1]=J,this.material.uniforms.u_positions.value=this.targets[0].texture,this.simulationMaterial.uniforms.u_positions.value=this.targets[1].texture,this.renderer.setRenderTarget(null)}resize(){if(this.renderer&&this.simulationMaterial){let J=this.renderer.getSize(this._rendererSize),$=J.y!==0?J.x/J.y:1;this.simulationMaterial.aspect=$;let Z=Math.max($,1);this.material.pointScale=this.pointSize*Z}}setPattern(J){let $=_Y[J];if(!$){console.warn(`[GpgpuParticles] Pattern ${J} not found. Available: 0-7`);return}if(this.currentPattern=J,this.simulationMaterial)this.simulationMaterial.patternParams=new Float32Array($)}setPatternMix(J){if(this.patternMix=Math.max(0,Math.min(1,J)),this.simulationMaterial)this.simulationMaterial.patternMix=this.patternMix}setTextureScale(J){if(this.textureScale=J,this.simulationMaterial){if(this.simulationMaterial.textureScale=this.textureScale,this.simulationMaterial.uniforms&&this.simulationMaterial.uniforms.u_textureScale)this.simulationMaterial.uniforms.u_textureScale.value=this.textureScale}}setTextureIndex(J){if(!this.textures||this.textures.length===0){console.warn("[GpgpuParticles] No textures available");return}let $=Math.max(0,Math.min(J,this.textures.length-1));if($===this.currentTextureIndex)return;this.currentTextureIndex=$;let Q=this.textures[$];if(!this.simulationMaterial){console.warn("[GpgpuParticles] Simulation material not ready");return}if(this.simulationMaterial.uniforms.u_original.value=Q,this.enableSimulation&&this.targets&&this.targets.length>0){this.renderer.setRenderTarget(this.targets[0]),this.renderer.clear(),this.simulationMaterial.uniforms.u_positions.value=Q,this.renderer.render(this.simulationScene,this.simulationCamera);let Z=this.targets[0];this.targets[0]=this.targets[1],this.targets[1]=Z,this.material.uniforms.u_positions.value=this.targets[0].texture,this.simulationMaterial.uniforms.u_positions.value=this.targets[1].texture,this.renderer.setRenderTarget(null)}else this.material.uniforms.u_positions.value=Q}getTextureCount(){return this.textures?this.textures.length:0}getCurrentTextureIndex(){return this.currentTextureIndex}setVisibility(J){let $=Math.max(0,Math.min(1,J));if(this.material)this.material.visibility=$}dispose(){if(this.removeEventListeners(),this.geometry?.dispose(),this.material?.dispose(),this.simulationMesh)this.simulationMesh.geometry?.dispose();this.simulationMaterial?.dispose(),this.targets?.forEach((J)=>J.dispose()),this.targets=void 0,this.simulationScene=void 0,this.simulationCamera=void 0,this._pointerVector=null,this._pointerDirection=null,this._pointerPosition=null,this._rendererSize=null}}async function V3(J,$,Q=1,Z=0.05){let W=await C3(J),K=typeof window!=="undefined"?Math.min(window.devicePixelRatio||1,2):1,U=400,H=Math.round(400*K),q=document.createElement("canvas");q.width=H,q.height=H;let Y=q.getContext("2d");Y.imageSmoothingEnabled=!0,Y.imageSmoothingQuality="high",Y.drawImage(W,0,0,H,H);let G=Y.getImageData(0,0,H,H).data,X=[];for(let E=0;E<G.length;E+=4){let L=E/4%H,O=Math.floor(E/4/H);if(G[E]<120)X.push({x:L/H-0.5,y:0.5-O/H})}let N=$*$,F=new Float32Array(N*4);for(let E=0;E<$;E++)for(let L=0;L<$;L++){let O=E*$+L,z=Math.random()<Z,B,I;if(z||X.length===0)B=(Math.random()-0.5)*Q,I=(Math.random()-0.5)*Q;else{let P=X[Math.floor(Math.random()*X.length)];B=(P?.x??0)*Q,I=(P?.y??0)*Q}let A=(Math.random()-0.5)*0.01*Q,C=(Math.random()-0.5)*0.01*Q;F[4*O+0]=B+A,F[4*O+1]=I+C,F[4*O+2]=(Math.random()-0.5)*0.01,F[4*O+3]=(Math.random()-0.5)*0.01}let M=new P6(F,$,$,aJ,$J);return M.needsUpdate=!0,M}function z3(J){let $=J*J,Q=new Float32Array($*3),Z=new Float32Array($*2);for(let W=0;W<J;W++)for(let K=0;K<J;K++){let U=W*J+K;Q[3*U+0]=K/J-0.5,Q[3*U+1]=W/J-0.5,Q[3*U+2]=0,Z[2*U+0]=K/(J-1),Z[2*U+1]=W/(J-1)}return{positions:new GJ(Q,3),uvs:new GJ(Z,2)}}function D3(J,$=1){let Q=J*J,Z=new Float32Array(Q*4);for(let K=0;K<J;K++)for(let U=0;U<J;U++){let H=K*J+U;Z[4*H+0]=lE(-0.5,0.5,K/J)*$,Z[4*H+1]=lE(-0.5,0.5,U/J)*$,Z[4*H+2]=0,Z[4*H+3]=1}let W=new P6(Z,J,J,aJ,$J);return W.needsUpdate=!0,W}function k3(J,$,Q,Z){if(!Q)return[];let W=Z??$J,K=[];for(let U=0;U<J;U++)K.push(new w$($,$,{minFilter:c$,magFilter:c$,format:aJ,type:W,depthBuffer:!1,stencilBuffer:!1}));return K}function lE(J,$,Q){return(1-Q)*J+Q*$}function C3(J){return new Promise(($,Q)=>{if(!J){Q(new Error("Image url is required to load texture data."));return}if(typeof Image==="undefined"){Q(new Error("Image constructor is not available in this environment."));return}let Z=new Image;Z.crossOrigin="anonymous",Z.src=J,Z.onload=()=>$(Z),Z.onerror=(W)=>{console.error("[GpgpuParticles] Image failed to load",J,W),Q(W)}})}function P3(J){if(!J)return{enabled:!1,type:$J};let $=J.capabilities,Q=$.floatFragmentTextures!==void 0?$.floatFragmentTextures:$.isWebGL2;if($.isWebGL2&&Q)return{enabled:!0,type:$J};if((J.extensions.has?.("OES_texture_float")||J.extensions.get?.("OES_texture_float"))&&Q)return{enabled:!0,type:$J};if(J.extensions.has?.("OES_texture_half_float")||J.extensions.get?.("OES_texture_half_float"))return console.warn("[GpgpuParticles] Falling back to half-float render targets (reduced precision)."),{enabled:!0,type:AJ};return console.warn("[GpgpuParticles] No floating/half floating render target support detected."),{enabled:!1,type:$J}}class wK extends RQ{isOn=!0;type="home";assets=null;particles=null;audioAnalyzer=null;micStarted=!1;chladniTimeline=null;imageTimeline=null;frequencyTimeline=null;modesTimeline=null;jitterTimeline=null;noiseTimeline=null;baseModeM=3;baseModeN=3;vibrationAmplitudeMin=0.45;vibrationAmplitudeMax=0.52;lastMouseX=0;lastMouseY=0;mouseVelocity=0;mouseVelocitySmoothed=0;mouseVelocityScale=5;constructor({renderer:J=null,camera:$=null,interactionElement:Q=null,dataset:Z={},element:W=null}={}){super();this.renderer=J,this.camera=$,this.interactionElement=Q,this.dataset=Z||{},this.element=W||null,this.load()}async load(){try{this.assets=await ZW()}catch(J){console.warn("HomeScene: failed to load assets",J)}if(this.assets?.hdr)this.environment=this.assets.hdr;this.create()}create(){this.initParticles()}initParticles(){if(this.particles||!this.renderer||!this.camera)return;try{this.particles=new YW({renderer:this.renderer,camera:this.camera,interactionElement:this.interactionElement??(typeof document!=="undefined"?document.body:void 0)??this.renderer?.domElement??(typeof window!=="undefined"?window:void 0)})}catch(J){console.error("[HomeScene] Failed to create GpgpuParticles",{error:J});return}this.particles.position.z=-1,this.particles.frustumCulled=!1,this.add(this.particles),this.particles.ready.then(()=>{this.applyInitialValues(),this.fadeInParticles(),this.startChladniAnimation(),this.startImageCycleAnimation(),this.startFrequencyAnimation(),this.startModesAnimation(),this.startJitterAnimation(),this.startNoiseAnimation()}).catch((J)=>{console.error("[HomeScene] Failed to initialize particles",J)})}getInitialValues(){return{mouseStrength:0.0225,mouseRadius:0.16,lineThickness:0.01,texturePercent:0,textureScale:1.5,patternFrequency:35,patternChladniDistortion:0,chladniModeM:3,chladniModeN:3,chladniNoise:0,patternJitter:0,geometryFrequency:0.35,geometrySize:0.5,geometryDistortion:0.4}}applyInitialValues(){if(!this.particles?.simulationMaterial)return;let J=this.particles.simulationMaterial,$=this.getInitialValues();if(J.baseToMouse=$.mouseStrength,J.baseMouseRadius=$.mouseRadius,J.baseDistThreshold=$.lineThickness,J.texturePercent=$.texturePercent,this.particles&&typeof this.particles.setTextureScale==="function")this.particles.setTextureScale($.textureScale);J.patternFrequency=$.patternFrequency,J.patternChladniDistortion=$.patternChladniDistortion,J.chladniModeM=$.chladniModeM,J.chladniModeN=$.chladniModeN,J.chladniNoise=$.chladniNoise,J.patternJitter=$.patternJitter,J.geometryFrequency=$.geometryFrequency,J.geometrySize=$.geometrySize,J.geometryDistortion=$.geometryDistortion,this.baseModeM=$.chladniModeM,this.baseModeN=$.chladniModeN}fadeInParticles(){if(!this.particles)return;this.particles.setVisibility(0);let J={value:0};d.to(J,{value:1,duration:1,delay:0.3,ease:"power2.out",onUpdate:()=>{if(this.particles)this.particles.setVisibility(J.value)}})}startChladniAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=0,Q=5,Z=1.2,W=3,K={value:J.patternChladniDistortion},U=()=>{let H=Math.random()*(Q-$)+$,q=Math.random()*(W-Z)+Z;this.chladniTimeline=d.to(K,{value:H,duration:q,ease:"power2.inOut",onUpdate:()=>{J.patternChladniDistortion=K.value},onComplete:()=>{U()}})};U()}startImageCycleAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=this.particles.getTextureCount();if($===0){console.warn("[HomeScene] No textures available for cycling");return}let Q=0.8,Z=0.4,W=3,K=6,U=2,H=4,q=this.particles.getCurrentTextureIndex(),Y=!0,G={value:J.texturePercent},X=()=>{let N=Math.random()*(K-W)+W;this.imageTimeline=d.to(G,{value:0,duration:N*0.4,ease:"power2.inOut",onUpdate:()=>{J.texturePercent=G.value},onComplete:()=>{if(!Y){if(q=(q+1)%$,this.particles&&typeof this.particles.setTextureIndex==="function")this.particles.setTextureIndex(q)}Y=!1;let F=Math.random()*(Q-Z)+Z,M=N*0.6;d.to(G,{value:F,duration:M,ease:"power2.inOut",onUpdate:()=>{J.texturePercent=G.value},onComplete:()=>{let E=Math.random()*(H-U)+U;d.delayedCall(E,()=>{let L=Math.random()*(Q-Z)+Z,O=Math.random()*(K-W)+W;d.to(G,{value:L,duration:O/2,ease:"power2.inOut",onUpdate:()=>{J.texturePercent=G.value},onComplete:()=>{if(this.particles?.simulationMaterial)X()}})})}})}})};X()}startFrequencyAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=20,Q=45,Z=5,W=10,K=()=>{let U=Math.random()*(Q-$)+$;J.patternFrequency=U;let H=Math.random()*(W-Z)+Z;this.frequencyTimeline=d.delayedCall(H,()=>{K()})};K()}startModesAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=[3,5,7],Q=6,Z=12,W=()=>{let K=$[Math.floor(Math.random()*$.length)],U=$[Math.floor(Math.random()*$.length)];this.baseModeM=K,this.baseModeN=U,J.chladniModeM=K,J.chladniModeN=U;let H=Math.random()*(Z-Q)+Q;this.modesTimeline=d.delayedCall(H,()=>{W()})};W()}startJitterAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=0,Q=0.3,Z=4,W=8,K=()=>{let U=Math.random()*(Q-$)+$;J.patternJitter=U;let H=Math.random()*(W-Z)+Z;this.jitterTimeline=d.delayedCall(H,()=>{K()})};K()}startNoiseAnimation(){if(!this.particles?.simulationMaterial||typeof window==="undefined")return;let J=this.particles.simulationMaterial,$=0,Q=0.5,Z=2,W=5,K={value:J.chladniNoise},U=()=>{let H=Math.random()*(Q-$)+$,q=Math.random()*(W-Z)+Z;this.noiseTimeline=d.to(K,{value:H,duration:q,ease:"power2.inOut",onUpdate:()=>{J.chladniNoise=K.value},onComplete:()=>{U()}})};U()}render(J){if(this.particles?.simulationMaterial){let $=this.particles.simulationMaterial,Q=Math.random()*(this.vibrationAmplitudeMax-this.vibrationAmplitudeMin)+this.vibrationAmplitudeMin,Z=(Math.random()-0.5)*2*Q,W=(Math.random()-0.5)*2*Q;if($.chladniModeM=this.baseModeM+Z,$.chladniModeN=this.baseModeN+W,typeof window!=="undefined"){let K=this.particles.pointer?.x??0,U=this.particles.pointer?.y??0,H=K-this.lastMouseX,q=U-this.lastMouseY,Y=Math.sqrt(H*H+q*q);this.mouseVelocity=Math.min(Y*this.mouseVelocityScale,1),this.mouseVelocitySmoothed=this.mouseVelocitySmoothed*0.8+this.mouseVelocity*0.2,$.mouseVelocity=this.mouseVelocitySmoothed,this.lastMouseX=K,this.lastMouseY=U}}if(this.particles)this.particles.render(J)}resize(J){if(this.particles&&typeof this.particles.resize==="function")this.particles.resize()}dispose(){if(this.chladniTimeline)this.chladniTimeline.kill(),this.chladniTimeline=null;if(this.imageTimeline)this.imageTimeline.kill(),this.imageTimeline=null;if(this.frequencyTimeline)this.frequencyTimeline.kill(),this.frequencyTimeline=null;if(this.modesTimeline)this.modesTimeline.kill(),this.modesTimeline=null;if(this.jitterTimeline)this.jitterTimeline.kill(),this.jitterTimeline=null;if(this.noiseTimeline)this.noiseTimeline.kill(),this.noiseTimeline=null;if(this.audioAnalyzer)this.audioAnalyzer.stop(),this.audioAnalyzer=null;if(this.particles)this.remove(this.particles),this.particles.dispose?.(),this.particles=null}}class _K extends RQ{isOn=!0;screen=null;mainScene=null;constructor(J=null){super();this.mainScene=J,this.setupEnvironment(),this.create()}get assets(){return this.mainScene?.assets||null}setupEnvironment(){if(this.mainScene?.assets?.hdr)this.environment=this.mainScene.assets.hdr}updateEnvironment(){this.setupEnvironment()}create(){this.screen=new HW(this,{reverseGradient:!0})}render(J){}resize(J){}}var oE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class x6{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var I3=new VQ(-1,1,1,-1,0,1);class sE extends uJ{constructor(){super();this.setAttribute("position",new Y$([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Y$([0,2,0,0,2,0],2))}}var A3=new sE;class xY{constructor(J){this._mesh=new i8(A3,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,I3)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class z9 extends x6{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof V$)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=WK.clone(J.uniforms),this.material=new V$({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new xY(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xK extends x6{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),W=J.state;W.buffers.color.setMask(!1),W.buffers.depth.setMask(!1),W.buffers.color.setLocked(!0),W.buffers.depth.setLocked(!0);let K,U;if(this.inverse)K=0,U=1;else K=1,U=0;if(W.buffers.stencil.setTest(!0),W.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),W.buffers.stencil.setFunc(Z.ALWAYS,K,4294967295),W.buffers.stencil.setClear(U),W.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),W.buffers.color.setLocked(!1),W.buffers.depth.setLocked(!1),W.buffers.color.setMask(!0),W.buffers.depth.setMask(!0),W.buffers.stencil.setLocked(!1),W.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),W.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),W.buffers.stencil.setLocked(!0)}}class yY extends x6{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class bY{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new e0);this._width=Q.width,this._height=Q.height,$=new w$(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:AJ}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new z9(oE),this.copyPass.material.blending=MQ,this.clock=new PZ}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(J===void 0)J=this.clock.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,W=this.passes.length;Z<W;Z++){let K=this.passes[Z];if(K.enabled===!1)continue;if(K.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),K.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),K.needsSwap){if(Q){let U=this.renderer.getContext(),H=this.renderer.state.buffers.stencil;H.setFunc(U.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),H.setFunc(U.EQUAL,1,4294967295)}this.swapBuffers()}if(xK!==void 0){if(K instanceof xK)Q=!0;else if(K instanceof yY)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new e0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let W=0;W<this.passes.length;W++)this.passes[W].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vY extends x6{constructor(J,$,Q=null,Z=null,W=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=W,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new K8}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let W,K;if(this.overrideMaterial!==null)K=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)W=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(W);if(this.overrideMaterial!==null)this.scene.overrideMaterial=K;J.autoClear=Z}}var nE=`uniform float opacity;
uniform float u_time;
uniform sampler2D tDiffuse;
varying vec2 vUv;


float hash(vec2 p) {
    p = 50.0 * fract(p * 0.3183099 + vec2(0.71, 0.113));
    return -1.0 + 2.0 * fract(p.x * p.y * (p.x + p.y));
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
    vec4 diff = texture2D( tDiffuse, vUv );
    
    float originalAlpha = diff.a;
    
    gl_FragColor.rgb = ACESFilmicToneMapping(diff.rgb);
    gl_FragColor.a = originalAlpha * opacity;
    
    gl_FragColor = linearToOutputTexel(gl_FragColor);

    
    vec2 uv = vUv * 800.0;
    
    
    float timeFloor = floor(u_time * 24.0); 
    
    float n = noise(uv + timeFloor * 123.456) * 0.5;
    n += noise(uv * 2.1 + timeFloor * 789.012) * 0.25; 
    n += noise(uv * 4.3 + timeFloor * 345.678) * 0.125; 
    
    float noiseAmount = n * 0.02; 
    gl_FragColor.rgb += vec3(noiseAmount);

    

    
}



`;var iE=`varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var j3={uniforms:{tDiffuse:{value:null},opacity:{value:1},u_time:{value:0}},vertexShader:iE,fragmentShader:nE};class hY extends z9{constructor(){super(j3)}set time(J){this.uniforms.u_time.value=J}}var aE=`uniform sampler2D tDiffuse;
uniform vec2 resolution;
varying vec2 vUv;

#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#define FXAA_SPAN_MAX     8.0

vec3 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution) {
    vec2 inverseVP = 1.0 / resolution.xy;
    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * inverseVP).xyz;
    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * inverseVP).xyz;
    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * inverseVP).xyz;
    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * inverseVP).xyz;
    vec3 rgbM  = texture2D(tex, fragCoord * inverseVP).xyz;

    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);

    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);

    vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax)) {
        return rgbA;
    } else {
        return rgbB;
    }
}

void main() {
    vec2 fragCoord = vUv * resolution;
    vec3 color = fxaa(tDiffuse, fragCoord, resolution);
    
    
    float alpha = texture2D(tDiffuse, vUv).a;
    
    gl_FragColor = vec4(color, alpha);
}
`;var rE=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var x3={uniforms:{tDiffuse:{value:null},resolution:{value:new e0(1,1)}},vertexShader:rE,fragmentShader:aE};class fY extends z9{constructor(J){super(x3);if(J)this.uniforms.resolution.value.copy(J)}setSize(J,$){this.uniforms.resolution.value.set(J,$)}}class gY extends bY{isOn=!1;_initTimeout=null;constructor(){super(O0.renderer);this.initialized=!1,this.initializePasses()}initializePasses(){if(O0.scene&&O0.camera)this.renderPass=new vY(O0.scene,O0.camera),this.addPass(this.renderPass),this.createPasses(),this.initialized=!0;else this._initTimeout=setTimeout(()=>this.initializePasses(),16)}createPasses(){this.fxaaPass=new fY,this.fxaaPass.setSize(O0.vp.w,O0.vp.h),this.addPass(this.fxaaPass),this.noisePass=new hY,this.addPass(this.noisePass)}renderPasses(J){if(this.initialized&&this.noisePass)this.noisePass.time=J}resize(J,$){if(this.initialized&&this.fxaaPass)this.fxaaPass.setSize(J,$);this.setSize(J,$)}renderPost(){if(this.isOn&&this.initialized)this.renderPasses(O0.time),this.render();else O0.renderer.render(O0.scene,O0.camera)}dispose(){if(this._initTimeout)clearTimeout(this._initTimeout),this._initTimeout=null;if(this.fxaaPass&&typeof this.fxaaPass.dispose==="function")this.fxaaPass.dispose();if(this.noisePass&&typeof this.noisePass.dispose==="function")this.noisePass.dispose();if(this.renderPass&&typeof this.renderPass.dispose==="function")this.renderPass.dispose();this.initialized=!1}}var y3=4,b3={clearColor:16711680};class tE{clock=new PZ;paused=!0;mouse={x:0,y:0,ex:0,ey:0};resizeObserver=null;mouseMoveHandler=null;touchMoveHandler=null;mainScene=null;footerScene=null;currentSceneType="main";constructor(){if(this.renderer=new HY({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.vp={container:document.querySelector('[data-gl="c"]'),w:window.innerWidth,h:window.innerHeight,aspect:()=>{return this.vp.w/this.vp.h},dpr:()=>{return Math.min(window.devicePixelRatio,1.5)}},!this.vp.container)return;this.renderer.setPixelRatio(this.vp.dpr()),this.renderer.setSize(this.vp.w,this.vp.h),this.renderer.setClearColor(b3.clearColor,0),this.vp.container.appendChild(this.renderer.domElement),this.renderer.toneMapping=m1,this.renderer.outputColorSpace="srgb",this.renderer.toneMappingExposure=1,this.camera=new IJ(35,this.vp.aspect(),0.1,10),this.vp.camera=this.camera,this.vp.renderer=this.renderer,this.camera.position.set(0,0,4),this.controls=new GY(this.camera,this.renderer.domElement),this.controls.enabled=!1,this.resizeObserver=SK(this.vp.container,this.resize.bind(this)),this.initMouseEvents()}async init(J=null,$=null,Q={}){if($)wZ.model=$;queueMicrotask(()=>{this.mainScene=this.createScene(J,Q),this.scene=this.mainScene,this.post=new gY,this.paused=!1})}createScene(J,$={}){if(J==="home"){let Q=typeof window!=="undefined"?window:void 0;return new wK({renderer:this.renderer,camera:this.camera,interactionElement:this.vp?.container instanceof HTMLElement?this.vp.container:this.renderer?.domElement??Q,dataset:$?.dataset??{},element:$?.element??null})}return new gE(this.vp,J)}switchScene(J){if(this.mainScene&&this.mainScene.type!=="ecomm"&&this.mainScene.model&&this.mainScene.screen){let $=J==="footer",Q=!$,Z=$||this.mainScene.type==="explode";if(this.mainScene.model.visible=Q,this.mainScene.screen.visible=Z,this.mainScene.screen.setReverseGradient?.($),this.scene=this.mainScene,this.currentSceneType=J,this.post&&this.post.renderPass)this.post.renderPass.scene=this.mainScene;return}if(J==="footer"){if(!this.footerScene)if(this.mainScene&&this.mainScene.assets)this.footerScene=new _K(this.mainScene);else return;if(this.scene=this.footerScene,this.currentSceneType="footer",this.post&&this.post.renderPass)this.post.renderPass.scene=this.footerScene}else if(this.mainScene){if(this.scene=this.mainScene,this.currentSceneType="main",this.post&&this.post.renderPass)this.post.renderPass.scene=this.mainScene}}render(){if(this.paused)return;let $=this.clock.getElapsedTime()*y3;this.controls?.update(),this.scene?.render($),this.post.renderPost(),this.mouse.ex=_Z(this.mouse.ex,this.mouse.x,0.1),this.mouse.ey=_Z(this.mouse.ey,this.mouse.y,0.1)}resizeForContainer(J){if(!J)return;let $=J.clientWidth||J.offsetWidth,Q=J.clientHeight||J.offsetHeight;if($&&Q)this.vp.w=$,this.vp.h=Q,this.renderer.setSize($,Q),this.camera.aspect=$/Q,this.camera.updateProjectionMatrix(),this.scene?.resize(this.vp),this.post?.resize($,Q)}resize({width:J,height:$}){this.vp.w=this.vp.container.clientWidth,this.vp.h=this.vp.container.clientHeight,this.renderer.setSize(this.vp.w,this.vp.h),this.camera.aspect=this.vp.w/this.vp.h,this.camera.updateProjectionMatrix(),this.scene?.resize(this.vp),this.post?.resize(this.vp.w,this.vp.h)}get viewSize(){let J=this.camera.fov*Math.PI/180,$=Math.abs(this.camera.position.z*Math.tan(J/2)*2);return{w:$*(this.vp.w/this.vp.h),h:$}}initMouseEvents(){this.mouseMoveHandler=(J)=>{this.mouse.x=J.clientX/window.innerWidth*2-1,this.mouse.y=-(J.clientY/window.innerHeight)*2+1},this.touchMoveHandler=(J)=>{if(J.touches.length>0)this.mouse.x=J.touches[0].clientX/window.innerWidth*2-1,this.mouse.y=-(J.touches[0].clientY/window.innerHeight)*2+1},document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("touchmove",this.touchMoveHandler,{passive:!0})}destroy(){if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this.mouseMoveHandler)document.removeEventListener("mousemove",this.mouseMoveHandler),this.mouseMoveHandler=null;if(this.touchMoveHandler)document.removeEventListener("touchmove",this.touchMoveHandler),this.touchMoveHandler=null}}var O0=new tE;var dY={};F8(dY,{startPage:()=>yK});var mY={};F8(mY,{initMove:()=>uY,handleHotspotAnimations:()=>pY});var uY=(J)=>{let $=J.querySelector("[data-move]");if(!$)return{hotspots:[]};let Q=[...$.children];d.set(Q,{autoAlpha:0}),$.style.visibility="visible";let Z=0,W=0,K=0,U=0,H=!1,q=()=>{if(H)K=_Z(K,Z,0.1),U=_Z(U,W,0.1),$.style.transform=`translate(${K}px, ${U}px)`},Y=PJ.add(q),G=(M)=>{let E=J.getBoundingClientRect();Z=M.clientX-E.left,W=M.clientY-E.top},X=(M)=>{H=!0,G(M),d.to($,{autoAlpha:1,duration:0.2})},N=()=>{H=!1,d.to($,{autoAlpha:0,duration:0.2})};J.addEventListener("mousemove",G),J.addEventListener("mouseenter",X),J.addEventListener("mouseleave",N);let F=()=>{if(H){let M=J.getBoundingClientRect(),E={clientX:Z+M.left,clientY:W+M.top};G(E)}};return window.addEventListener("scroll",F,{passive:!0}),H=!1,d.set($,{autoAlpha:0}),requestAnimationFrame(()=>{if(J.matches(":hover")){H=!0,d.to($,{autoAlpha:1,duration:0.2});let M=(E)=>{G(E)};document.addEventListener("mousemove",M,{once:!0})}}),{hotspots:Q,cleanup:()=>{Y(),window.removeEventListener("scroll",F),J.removeEventListener("mousemove",G),J.removeEventListener("mouseenter",X),J.removeEventListener("mouseleave",N)}}},pY=(J)=>{if(J.length===0)return()=>{};let $=null,Q=0.5,Z=(W)=>{if(W!==null){if($!==W)d.to($,{autoAlpha:0,scale:0.6,duration:Q});$=J[W],d.to($,{autoAlpha:1,scale:1,duration:Q})}else d.to($,{autoAlpha:0,scale:0.6,duration:Q})};return F0.on("RAYCAST_TARGET",Z),()=>{F0.off("RAYCAST_TARGET",Z)}};var v3=()=>typeof window!=="undefined"&&(window.matchMedia("(hover: none), (pointer: coarse)").matches||("ontouchstart"in window)||navigator.maxTouchPoints>0),h3=(J,$)=>{let Q=d.timeline({scrollTrigger:{trigger:J.parentElement,start:"top 50%",end:"bottom 50%",toggleActions:"play reverse play reverse"},defaults:{duration:1,ease:"none"}});d.set($.ctrl,{ry:Math.PI/2,explodeProgress:0,rx:0,rz:0,x:0,z:0.3}),Q.to($.ctrl,{ry:-Math.PI/2,z:0,ease:"expo.inOut",duration:1},"spin"),Q.to($.ctrl,{explodeProgress:1,ease:"custom",duration:1.8},"spin+=0.5"),Q.to($.ctrl,{ry:"+=0",duration:0.5,ease:"none"});function Z(){d.to($.ctrl,{y:(Math.random()-0.2)*0.05,rx:(Math.random()-0.15)*0.05,rz:(Math.random()-0.2)*0.09,duration:3+Math.random()*2,ease:"sine.inOut",onComplete:Z})}Z()},yK=(J,$)=>{h3($,J);let Q=v3(),Z=$.querySelector("canvas");if(Q&&Z)Z.style.pointerEvents="none";let W=()=>{},K=()=>{};if(!Q){J.initRaycasting();let{hotspots:U,cleanup:H}=uY($);W=H||W,K=pY(U)}else if(F0.RAYCAST_TARGET=null,typeof J.resetHoverAnimations==="function")J.resetHoverAnimations();return()=>{if(Q&&Z)Z.style.pointerEvents="";if(W)W();if(K)K()}};var lY={};F8(lY,{startEcommerce:()=>cY});var cY=(J,$,Q)=>{let Z=$.querySelector("[data-switch]");$.style.pointerEvents="none";let W=document.querySelector(".cursor__side-horizontal"),K=document.querySelector(".cursor__side-vertical"),U=$.querySelector(".switch__icon-wrap")||document.querySelector(".switch__icon-wrap"),H=(N)=>{if(U)U.setAttribute("data-mode",N)},q=(N,F)=>{if(!N)return;d.to(N,{autoAlpha:F,duration:0.4,ease:"power2.out",overwrite:"auto"})},Y=(N)=>{if(N==="images")q(W,1),q(K,0);else if(N==="3d")q(W,1),q(K,1)},G=null;if(Z){let N=$.querySelector("[data-move]");d.set(Z,{autoAlpha:0,yPercent:500}),d.to(Z,{autoAlpha:1,yPercent:0,duration:1.3,delay:0.9}),G=()=>{if(F0.ECOMM_3D_VISIBLE)F0.ECOMM_3D_VISIBLE=!1,$.style.pointerEvents="none",J.animateOut(1.2),d.to(N,{xPercent:0,duration:0.8,ease:"power2.out"}),Y("images"),H("images");else F0.ECOMM_3D_VISIBLE=!0,J.animateIn(1.2),$.style.pointerEvents="auto",d.to(N,{xPercent:110,duration:0.8,ease:"power2.out"}),Y("3d"),H("3d")},Z.addEventListener("click",G)}J.initSpinner(),J.initRaycasting(!0);let X=F0.ECOMM_3D_VISIBLE?"3d":"images";return Y(X),H(X),()=>{if(Z&&G)Z.removeEventListener("click",G)}};F0.ECOMM_3D_VISIBLE=!1;var oY=()=>{F0.ECOMMERCE=!1,F0.ECOMM_3D_VISIBLE=!1,F0.WEBGL_CAP_COLOR=0,F0.WEBGL_MATCAP_INTENSITY=0.82,F0.WEBGL_BASE_COLOR_INTENSITY=0.1,F0.RAYCAST_TARGET=null},tJ={canvas:null,container:null,renderer:null,gl:null,register(J,$,Q,Z=null){this.canvas=J,this.container=$,this.renderer=Q,this.gl=Z},getCanvas(){return this.canvas},getContainer(){return this.container},getRenderer(){return this.renderer},getGl(){return this.gl},switchToFooterScene(){if(this.gl){this.gl.switchScene("footer");let J=this.getCanvas();if(J&&J.parentElement)this.gl.resizeForContainer(J.parentElement)}},switchToMainScene(){if(this.gl){this.gl.switchScene("main");let J=this.getContainer();if(J)this.gl.resizeForContainer(J)}}};function eE(J,$){let{type:Q,model:Z}=$;if(F0.ECOMMERCE=Q==="ecomm",Q==="explode")oY();let W=null;if($.model){if(W=TE+$.model,$.model.includes("one"))F0.MODEL="one";else if($.model.includes("yo"))F0.MODEL="yo";else if($.model.includes("vad"))F0.MODEL="vad"}let K=tJ.getCanvas(),U=tJ.getGl(),H=K&&U&&O0.renderer&&O0.renderer.domElement&&O0.vp.container,q=O0.mainScene?.type,Y=wZ.model,G=Y&&Y!=="",X=W&&W!=="",N=H&&(O0.mainScene===null||q!==Q||W&&Y!==W||G!==X),F=null,M=null,E=null,L=null,O=!1;if(Q==="explode"||Q==="debug"||Q==="ecomm")if(Q==="ecomm"&&J)J.style.pointerEvents="none",L=(A)=>{J.style.pointerEvents=A?"auto":"none"},F0.on("ECOMM_3D_VISIBLE",L),E=(A)=>{if(!A)return;if(!A.ctrl)return;if(A.modelType!==Q)return;if(O)return;if(O=!0,Q==="explode"){if(oY(),A?.planeMaterial?.forceMatcapIndex)A.planeMaterial.forceMatcapIndex(0);if(typeof A?.setCapColor==="function")A.setCapColor(0);F=yK(A,J)}else if(Q==="ecomm"){if(!Z||Z==="")return;d.killTweensOf(A.ctrl),d.killTweensOf(A.position);let C=F0.ECOMM_3D_VISIBLE===!0;if(A.ctrl.y=C?0:-4,A.position.y=A.ctrl.y,F=cY(A,J,Z),tJ.switchToMainScene(),O0.paused)O0.paused=!1;if(C)J.style.pointerEvents="auto",d.to(A.ctrl,{y:0,duration:0.6,ease:"back.out(0.8)",overwrite:"auto",onUpdate:()=>{A.position.y=A.ctrl.y}});else J.style.pointerEvents="none",A.position.y=A.ctrl.y}else if(Q==="debug")A.initSpinner?.()},F0.on("WEBGL_READY",E);else E=(A)=>{if(!A)return;if(!A.ctrl)return;if(A.modelType!==Q)return;if(O)return;if(O=!0,Q==="explode"){if(oY(),A?.planeMaterial?.forceMatcapIndex)A.planeMaterial.forceMatcapIndex(0);if(typeof A?.setCapColor==="function")A.setCapColor(0);M=yK(A,J)}else if(Q==="debug")A.initSpinner?.()},F0.on("WEBGL_READY",E);if(H){let A=O0.renderer.domElement,C=A.parentElement,P=J.querySelector('[data-gl="c"]');if(!P){if(P=J,!P.hasAttribute("data-gl"))P.setAttribute("data-gl","c")}if(C!==P){if(U.resizeObserver)U.resizeObserver.disconnect();P.appendChild(A),Array.from(P.querySelectorAll("canvas")).filter((x)=>x!==A).forEach((x)=>x.remove()),U.vp.container=P,U.resizeObserver=SK(P,U.resize.bind(U)),U.resizeForContainer(P),tJ.register(A,P,O0.renderer,O0)}if(N){O0.paused=!0,O=!1;let x=F0.WEBGL_READY;if(x){if(typeof x.resetHoverAnimations==="function")x.resetHoverAnimations();F0.WEBGL_READY=null}if(window.currentModel){if(typeof window.currentModel.resetHoverAnimations==="function")window.currentModel.resetHoverAnimations();window.currentModel=null}if(F0.RAYCAST_TARGET=null,O0.post)O0.post.dispose(),O0.post=null;if(O0.mainScene){if(typeof O0.mainScene.dispose==="function")try{O0.mainScene.dispose()}catch(D){console.warn("Error disposing main scene",D)}while(O0.mainScene.children.length>0){let D=O0.mainScene.children[0];if(O0.mainScene.remove(D),D.traverse)D.traverse((k)=>{if(k.geometry)k.geometry.dispose();if(k.material)if(Array.isArray(k.material))k.material.forEach((b)=>b.dispose());else k.material.dispose()})}O0.mainScene.clear(),O0.mainScene=null}if(O0.footerScene){if(typeof O0.footerScene.dispose==="function")try{O0.footerScene.dispose()}catch(D){console.warn("Error disposing footer scene",D)}while(O0.footerScene.children.length>0){let D=O0.footerScene.children[0];if(O0.footerScene.remove(D),D.traverse)D.traverse((k)=>{if(k.geometry)k.geometry.dispose();if(k.material)if(Array.isArray(k.material))k.material.forEach((b)=>b.dispose());else k.material.dispose()})}O0.footerScene.clear(),O0.footerScene=null}if(O0.currentSceneType="main",O0.scene=null,Q==="home")O0.init(Q,W,{dataset:$,element:J});else if(Q==="explode"||Q==="debug")O0.init(Q,W,{dataset:$,element:J});else if(Q==="ecomm"&&Z!=="")O0.init(Q,W,{dataset:$,element:J});else if(Q==="ecomm"&&!Z){if(O0.mainScene){if(typeof O0.mainScene.dispose==="function")try{O0.mainScene.dispose()}catch(b){console.warn("Error disposing main scene",b)}O0.mainScene.clear(),O0.mainScene=null}O0.scene=null,O0.renderer.clear(),O0.paused=!0;let D=J?.querySelector("[data-switch]");if(D)d.set(D,{autoAlpha:0,yPercent:500});let k=J?.querySelector(".switch__icon-wrap")||document.querySelector(".switch__icon-wrap");if(k)k.removeAttribute("data-mode")}}}else if(O0.renderer&&O0.renderer.domElement&&O0.vp.container)tJ.register(O0.renderer.domElement,O0.vp.container,O0.renderer,O0);if(Q==="ecomm"&&!Z&&O0.mainScene){if(typeof O0.mainScene.dispose==="function")try{O0.mainScene.dispose()}catch(A){console.warn("Error disposing main scene",A)}O0.mainScene.clear(),O0.mainScene=null,O0.scene=null,O0.renderer.clear(),O0.paused=!0}let B=PJ.add(O0.render.bind(O0));if(!H){if(Q==="home")O0.init(Q,W,{dataset:$,element:J});else if(Q==="explode"||Q==="debug")O0.init(Q,W,{dataset:$,element:J});else if(Q==="ecomm"&&Z!=="")O0.init(Q,W,{dataset:$,element:J});else if(Q==="ecomm"&&!Z){if(O0.mainScene){if(typeof O0.mainScene.dispose==="function")try{O0.mainScene.dispose()}catch(P){console.warn("Error disposing main scene",P)}O0.mainScene.clear(),O0.mainScene=null}O0.scene=null,O0.renderer.clear(),O0.paused=!0;let A=J?.querySelector("[data-switch]");if(A)d.set(A,{autoAlpha:0,yPercent:500});let C=J?.querySelector(".switch__icon-wrap")||document.querySelector(".switch__icon-wrap");if(C)C.removeAttribute("data-mode")}}if(H&&!N&&F0.WEBGL_READY&&E)setTimeout(()=>{if(F0.WEBGL_READY&&F0.WEBGL_READY.ctrl&&F0.WEBGL_READY.modelType===Q)E(F0.WEBGL_READY)},0);if(N&&E){let A=()=>{if(F0.WEBGL_READY&&F0.WEBGL_READY.ctrl&&F0.WEBGL_READY.modelType===Q){if(!O)E(F0.WEBGL_READY);return!0}return!1};A();let C=setInterval(()=>{if(A())clearInterval(C)},50),P=setTimeout(()=>clearInterval(C),3000);h0(()=>{clearInterval(C),clearTimeout(P)})}let I=null;if(H&&!N&&E&&F0.WEBGL_READY){if(F0.WEBGL_READY.modelType===Q&&F0.WEBGL_READY.ctrl&&!O)I=setTimeout(()=>{if(F0.WEBGL_READY&&F0.WEBGL_READY.modelType===Q&&!O)E(F0.WEBGL_READY);I=null},0)}h0(()=>{if(B(),I)clearTimeout(I),I=null;if(L)F0.off("ECOMM_3D_VISIBLE",L),L=null;if(E)F0.off("WEBGL_READY",E),E=null;if(window.currentModel&&typeof window.currentModel.dispose==="function")window.currentModel.dispose();if(F)F(),F=null;if(M)M(),M=null;O=!1})}function JM(J,$){let Q=null,Z=null,W=()=>{Q=tJ.getCanvas(),Z=tJ.getContainer();let N=tJ.getGl();if(!Q||!Z||!N){console.warn("CanvasReceiver: Canvas, container, or Gl not available in WebGLRegistry");return}if(Q.parentElement!==J)J.appendChild(Q),Q.style.display="block",Q.style.width="100%",Q.style.height="100%",requestAnimationFrame(()=>{if(N&&typeof N.resizeForContainer==="function")N.resizeForContainer(J)});let F=N;if(F.mainScene&&F.mainScene.assets)tJ.switchToFooterScene();else{let M=()=>{if(F.mainScene&&F.mainScene.assets)tJ.switchToFooterScene(),F0.off("WEBGL_READY",M)};M(),F0.on("WEBGL_READY",M),setTimeout(()=>{F0.off("WEBGL_READY",M)},1e4)}},K=()=>{if(Q&&Z){if(Q.parentElement===J)Z.appendChild(Q)}tJ.switchToMainScene()},U=P8(J,{autoStart:!0,callback:({isIn:N})=>{if(N)W();else K()}}),H=!1,q=null,Y=()=>{let N=tJ.getCanvas(),F=tJ.getContainer(),M=tJ.getGl();if(!N||!F||!M)return!1;if(q)clearInterval(q),q=null;if(H)return!0;H=!0;let E=new IntersectionObserver((L)=>{let O=L[0];if(O){if(O.intersectionRatio>=0.02)W()}E.disconnect()},{threshold:[0,0.02],rootMargin:"0px"});return E.observe(J),requestAnimationFrame(()=>{let L=E.takeRecords();if(L.length>0){let O=L[0],z=0.02;if(O.intersectionRatio>=0.02)W()}E.disconnect()}),!0},G=()=>{if(Y())return;q=setInterval(()=>{if(Y()){if(q)clearInterval(q),q=null}},50),setTimeout(()=>{if(q)clearInterval(q),q=null},5000)},X=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{G()})})};if(F0.READY)X();else F0.on("READY",X);G(),h0(()=>{if(q)clearInterval(q),q=null})}var iY={};F8(iY,{default:()=>$M});function $M(J,$){let Q=[...J.children].map((Z)=>new QM(Z));P8(J,{autoStart:!0,callback:({isIn:Z})=>{if(Z)Q.forEach((W,K)=>{W.animateIn(K*0.15)});else Q.forEach((W)=>W.animateOut())}}),h0(()=>{Q.forEach((Z)=>{if(Z&&Z.element){let W=[Z.element];if(Z.dots&&Z.dots.length>0)W.push(...Z.dots);if(Z.comps)W.push(Z.comps);if(Z.texts&&Z.texts.length>0)W.push(...Z.texts);d.killTweensOf(W)}})})}class QM{constructor(J){this.element=J;let $=J.querySelector(".svg-number");this.dots=$?[...$.children]:[],this.comps=J.querySelector(".card__svg")||null;let Q=J.querySelector(".card__text");this.texts=Q?[...Q.children]:[]}animateIn(J){if(!this.element)return;if(d.to(this.element,{autoAlpha:1,yPercent:0,duration:1,delay:J}),this.dots&&this.dots.length>0)d.to(this.dots,{autoAlpha:()=>Math.random()*0.7+0.3,duration:0.8,stagger:0.15});if(this.comps)d.to(this.comps,{autoAlpha:1,duration:1,delay:J+0.4});if(this.texts&&this.texts.length>0)d.to(this.texts,{autoAlpha:1,duration:1,stagger:0.15,delay:J+0.2})}animateOut(){if(!this.element)return;let J=[this.element];if(this.dots&&this.dots.length>0)J.push(...this.dots);if(this.comps)J.push(this.comps);if(this.texts&&this.texts.length>0)J.push(...this.texts);if(d.killTweensOf(J),d.set(this.element,{autoAlpha:0,yPercent:45}),this.dots&&this.dots.length>0)d.set(this.dots,{autoAlpha:0});if(this.comps)d.set(this.comps,{autoAlpha:0});if(this.texts&&this.texts.length>0)d.set(this.texts,{autoAlpha:0})}}var aY={};F8(aY,{default:()=>ZM});function ZM(J,$){let Q=document.querySelector("[data-cursor]"),Z=[...J.querySelectorAll("[data-image]")],W=document.querySelector("[data-css='expandable-btn']")||document.querySelector('[data-css="expandable-btn"]')||J.querySelector("[data-css='expandable-btn']")||J.querySelector('[data-css="expandable-btn"]'),K=J.querySelector("[data-texts]")||Q?.querySelector("[data-texts]")||document.querySelector("[data-texts]"),U=[];if(K){if(U=[...K.children].filter((Z0)=>Z0.textContent.trim()),U.length===0&&K.getAttribute("data-texts"))K.getAttribute("data-texts").split(",").map((M0)=>M0.trim()).forEach((M0)=>{let q0=document.createElement("span");q0.textContent=M0,K.appendChild(q0),U.push(q0)})}if(U.length>0)d.set(U,{autoAlpha:0});let H=0,q=-1,Y=[],G=[],X=(Z0,M0)=>{if(U.length===0||Z0<0||Z0>=U.length)return;d.to(U[Z0],{autoAlpha:M0?1:0,duration:0.4,ease:"power2.out",overwrite:"auto"})},N=()=>{if(U.length===0)return;d.to(U,{autoAlpha:0,duration:0.4,ease:"power2.out",overwrite:"auto"})},F=[...document.querySelectorAll("[data-im]")];d.set(F,{autoAlpha:0}),Z.forEach((Z0,M0)=>{let q0=()=>{if(H++,q=M0,X(M0,!0),d.to(F,{autoAlpha:0,duration:0.3,ease:"power2.out"}),F[M0])d.to(F[M0],{autoAlpha:1,duration:0.3,ease:"power2.out"});if(W&&H===1)W.classList.add("open")},j0=()=>{if(H=Math.max(0,H-1),X(M0,!1),H===0){if(q=-1,N(),W)W.classList.remove("open")}};Z0.addEventListener("mouseenter",q0),Z0.addEventListener("mouseleave",j0),Y.push({item:Z0,handler:q0}),G.push({item:Z0,handler:j0})});let M=0,E=0,L=0,O=0,z=!1,B=0,I=0,A=0,C=0,P=0,x=0,D=0,k=Q?Q.parentElement:null,b=k?k.getBoundingClientRect():null,v=J.getBoundingClientRect(),m={x:v.left+v.width/2,y:v.top+v.height/2},n=()=>{if(k)b=k.getBoundingClientRect();v=J.getBoundingClientRect(),m={x:v.left+v.width/2,y:v.top+v.height/2}};function r(){return m}function s(){if(!z){let q0=r();L=q0.x,O=q0.y}let Z0=L-B,M0=O-I;if(A=d.utils.interpolate(A,Z0,0.2),C=d.utils.interpolate(C,M0,0.2),B=L,I=O,M=d.utils.interpolate(M,L,0.1),E=d.utils.interpolate(E,O,0.1),Q&&b){let q0=M-b.left,j0=E-b.top,u0=A*0.14-C*0.08;P=d.utils.interpolate(P,u0,0.15);let m0=-C*0.3,Y8=A*0.3;x=d.utils.interpolate(x,m0,0.15),D=d.utils.interpolate(D,Y8,0.15);let J8=Math.max(-15,Math.min(15,P)),u=Math.max(-10,Math.min(10,x)),L8=Math.max(-10,Math.min(10,D));Q.style.transform=`
        translate(${q0}px, ${j0}px) 
        rotate(${J8}deg)
        rotateX(${u}deg)
        rotateY(${L8}deg)
      `}}function J0(Z0,M0){L=Z0,O=M0}function a(Z0){z=!0,J0(Z0.clientX,Z0.clientY)}function c(Z0){J0(Z0.clientX,Z0.clientY)}function w(){z=!1}J.addEventListener("mouseenter",a),J.addEventListener("mousemove",c),J.addEventListener("mouseleave",w);let W0,R0=()=>{clearTimeout(W0),W0=setTimeout(n,100)},e=()=>{n()};window.addEventListener("resize",R0,{passive:!0}),window.addEventListener("scroll",e,{passive:!0});let K0=PJ.add(s);h0(()=>{if(K0(),W0)clearTimeout(W0);window.removeEventListener("resize",R0),window.removeEventListener("scroll",e),J.removeEventListener("mouseenter",a),J.removeEventListener("mousemove",c),J.removeEventListener("mouseleave",w),Y.forEach(({item:Z0,handler:M0})=>{Z0.removeEventListener("mouseenter",M0)}),G.forEach(({item:Z0,handler:M0})=>{Z0.removeEventListener("mouseleave",M0)})})}var rY={};F8(rY,{default:()=>WM});function WM(J,$){let Q=[...J.querySelectorAll("[data-selector]")],Z=[...J.querySelectorAll("[data-image]")];d.set([Q,Z],{autoAlpha:0}),P8(J,{autoStart:!0,callback:({isIn:W})=>{if(W)d.to(Q,{autoAlpha:1,duration:1.8,stagger:0.2}),d.to(Z,{yPercent:0,autoAlpha:1,stagger:0.2});else d.killTweensOf([Z,Q]),d.set(Q,{autoAlpha:0}),d.set(Z,{yPercent:20,autoAlpha:0})}}),h0(()=>{d.killTweensOf([Z,Q])})}var eY={};F8(eY,{computeValues:()=>tY});var tY=(J,$)=>{if($.delay)J.delay=$.delay;return J};var J5={};F8(J5,{default:()=>UM});function UM(J,$){let Q=u3();h0(()=>{if(Q)Q()})}function KM(J){if(!J)return 0;if(J=J.trim(),J.toLowerCase()==="free")return 0;let $=parseFloat(J.replace(/[^0-9.]/g,""));return isNaN($)?0:$}function f3(){let J=[],$=null;function Q(){let K=document.querySelector(".paragraph.is--final-price.sf-active"),U=document.querySelector(".paragraph.is--add-info.sf-active"),H=0,q=0;if(K){let X=K.getAttribute("data-price");H=KM(X)}if(U){let X=U.getAttribute("data-price");q=KM(X)}let Y=H+q,G=[...document.querySelectorAll(".configurator__final-price")];if(G.length>0)G.forEach((X)=>{X.textContent=Y});return Y}let Z=new MutationObserver((K)=>{K.forEach((U)=>{if(U.type==="attributes"&&U.attributeName==="class"){let H=U.target;if(H.classList.contains("is--final-price")||H.classList.contains("is--add-info")){if($)clearTimeout($);$=setTimeout(Q,100)}}})}),W=document.querySelectorAll(".paragraph.is--final-price, .paragraph.is--add-info");return W.forEach((K)=>{Z.observe(K,{attributes:!0,attributeFilter:["class"]})}),W.forEach((K)=>{let U=()=>{if($)clearTimeout($);$=setTimeout(Q,150)};K.addEventListener("click",U),J.push({el:K,handler:U})}),$=setTimeout(Q,200),()=>{if(Z.disconnect(),$)clearTimeout($),$=null;J.forEach(({el:K,handler:U})=>{K.removeEventListener("click",U)})}}function g3(J){if(J!=="navigation"){let $=document.querySelector("[data-navigation-status]");if($&&$.getAttribute("data-navigation-status")==="active"){$.setAttribute("data-navigation-status","not-active");let Q=document.querySelector(".navbar__menu"),Z=document.querySelector(".navbar__cart");if(Q)Q.style.backgroundColor="";if(Z)Z.style.backgroundColor=""}}if(J!=="configurator"){let $=document.querySelector("[data-configurator-status]");if($&&$.getAttribute("data-configurator-status")==="active")$.setAttribute("data-configurator-status","not-active")}}function u3(){let J=[];document.querySelectorAll("[data-configurator-item]").forEach((H,q)=>{H.style.transitionDelay=`${q*0.05+0.2}s`}),document.querySelectorAll('[data-configurator-toggle="toggle"]').forEach((H)=>{let q=()=>{let X=H.querySelector(".configurator-toggle")||H.closest(".configurator-toggle")||H;if(X.classList.contains("configurator-toggle"))X.style.backgroundColor="#242426"},Y=()=>{let X=H.querySelector(".configurator-toggle")||H.closest(".configurator-toggle")||H;if(X.classList.contains("configurator-toggle"))X.style.backgroundColor=""},G=()=>{let X=document.querySelector("[data-configurator-status]");if(!X)return;if(X.getAttribute("data-configurator-status")==="not-active")g3("configurator"),X.setAttribute("data-configurator-status","active");else X.setAttribute("data-configurator-status","not-active")};H.addEventListener("mouseenter",q),H.addEventListener("mouseleave",Y),H.addEventListener("click",G),J.push({el:H,handler:q,type:"mouseenter"},{el:H,handler:Y,type:"mouseleave"},{el:H,handler:G,type:"click"})}),document.querySelectorAll('[data-configurator-toggle="close"]').forEach((H)=>{let q=()=>{let Y=document.querySelector("[data-configurator-status]");if(!Y)return;Y.setAttribute("data-configurator-status","not-active")};H.addEventListener("click",q),J.push({el:H,handler:q,type:"click"})});let W=(H)=>{if(H.keyCode===27){let q=document.querySelector("[data-configurator-status]");if(!q)return;if(q.getAttribute("data-configurator-status")==="active")q.setAttribute("data-configurator-status","not-active")}},K=(H)=>{let q=document.querySelector("[data-configurator-status]");if(!q)return;if(!q.contains(H.target)){if(q.getAttribute("data-configurator-status")==="active")q.setAttribute("data-configurator-status","not-active")}};document.addEventListener("keydown",W),document.addEventListener("click",K),J.push({el:document,handler:W,type:"keydown"},{el:document,handler:K,type:"click"});let U=f3();return()=>{if(J.forEach(({el:H,handler:q,type:Y})=>{H.removeEventListener(Y,q)}),U)U()}}var $5={};F8($5,{default:()=>HM});function HM(J,$){}var Q5={};F8(Q5,{default:()=>qM});function qM(J){let $=J,Q=$.children[0],Z=Q.querySelector(".cursor_main"),W=Q.querySelector(".cursor_ball"),K=Q.querySelector(".cursor_side-wrap"),U=K.querySelectorAll(".cursor__side-horizontal .cursor_side"),H=K.querySelectorAll(".cursor__side-vertical .cursor_side"),q=[...Q.querySelector(".cursor_side-wrap").children],Y=U.length>0,G=H.length>0,X=q.length>0&&!Y&&!G;if(!Y&&!G&&!X){console.warn("Cursor: No sides found");return}if(Y)d.set(U,{autoAlpha:0,xPercent:0});if(G)d.set(H,{autoAlpha:0,xPercent:0});if(X)d.set(q,{autoAlpha:0,xPercent:0});let N=new qW($,({ex:B,ey:I,ex2:A,ey2:C})=>{if(Q.style.transform=`translate(calc(${B}px - 50%), calc(${I}px - 50%))`,W)W.style.transform=`translate(calc(${A-B}px), calc(${C-I}px))`}),F={duration:0.5,ease:"expo.out"},M=100,E=!1,L=(B)=>E=!!B;F0.on("ECOMM_3D_VISIBLE",L);let O=()=>{if(d.to(Z,{scale:1.5,...F}),d.to(K,{scale:1.5,...F}),Y)d.to(U,{xPercent:(B)=>B%2?M:-M,autoAlpha:1,...F});if(G&&E)d.to(H,{xPercent:(B)=>B%2?M:-M,autoAlpha:1,...F});if(X)d.to(q,{xPercent:(B)=>B%2?M:-M,autoAlpha:1,...F})},z=()=>{d.to(Z,{scale:1,...F}),d.to(K,{scale:1,...F});let B=[];if(Y)B.push(...U);if(G)B.push(...H);if(X)B.push(...q);if(B.length>0)d.to(B,{xPercent:0,autoAlpha:0,...F})};document.addEventListener("mousedown",O),document.addEventListener("mouseup",z),h0(()=>{if(F0.off("ECOMM_3D_VISIBLE",L),document.removeEventListener("mousedown",O),document.removeEventListener("mouseup",z),N)N.destroy()})}var Z5={};F8(Z5,{default:()=>YM});function YM(J,$){d5(async()=>{await d.to(J,{duration:2,backgroundColor:"green"})}),p5(async()=>{await d.to(J,{duration:1,backgroundColor:"blue"}),await d.to(J,{duration:1,autoAlpha:0})}),hZ(()=>{Q.start()});let Q=P8(J,{root:null,rootMargin:"0px",threshold:0.1,autoStart:!1,once:!1,callback:({isIn:Z})=>{}});h0(()=>{}),C9(J,(Z)=>{})}var W5={};F8(W5,{default:()=>GM});function GM(J,$){let Q=$.fillTextScrollStart||"top 90%",Z=$.fillTextScrollEnd||"center 40%",W=0.2,K=0.1,U=null,H=null;H=new a$(J,{type:"words, chars",autoSplit:!0,aria:"none",onSplit(q){return U=d.context(()=>{d.timeline({scrollTrigger:{scrub:!0,trigger:J,start:Q,end:Z}}).fromTo(q.chars,{autoAlpha:0.2,stagger:0.1,ease:"linear"},{autoAlpha:1,stagger:0.1,ease:"linear"},"start")}),U}}),h0(()=>{if(U)U.revert();if(H)H.revert()})}var K5={};F8(K5,{default:()=>XM});function XM(J){}var H5={};F8(H5,{default:()=>FM});var U5={};F8(U5,{default:()=>NM,controls:()=>GW});var GW={};function NM(J,$){let Q=document.querySelector("[data-iframe]"),Z=`https://www.youtube.com/embed/${Q.dataset.id}?autoplay=0&rel=0&enablejsapi=1&origin=${window.location.origin}`;Q.src=Z,GW={play:()=>{Q.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},pause:()=>{Q.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")},stop:()=>{Q.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")},seekTo:(W)=>{Q.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${W}, true]}`,"*")}}}function FM(J){let $=!1,Q=J.querySelector("[data-overlay]"),Z=J.querySelector("[data-close]"),W=(H)=>{if(H.stopPropagation(),H.preventDefault(),!$)d.to(Q,{autoAlpha:1,duration:0.3}),GW.play(),$=!$,Q.style.pointerEvents="auto";else K(H)},K=(H)=>{if(H.stopPropagation(),H.preventDefault(),$)d.to(Q,{autoAlpha:0,duration:0.3}),GW.pause(),$=!$,Q.style.pointerEvents="none"},U=(H)=>{if(H.key==="Escape"||H.keyCode===27)K(H)};if(J.addEventListener("click",W),Z)Z.addEventListener("click",K);document.addEventListener("keydown",U),h0(()=>{if(J.removeEventListener("click",W),Z)Z.removeEventListener("click",K);if(document.removeEventListener("keydown",U),Q)d.killTweensOf(Q)})}var q5={};F8(q5,{default:()=>LM});var p3=(J)=>{let Q=new a$(J,{type:"words,chars",aria:"none"});return{items:Q.chars,splitInstance:Q}};function LM(J){let{items:$,splitInstance:Q}=p3(J);if(d.set($,{autoAlpha:0,filter:"blur(2px)",willChange:"filter, opacity"}),P8(J,{autoStart:!0,callback:({isIn:Z})=>{if(Z)d.to($,{autoAlpha:1,filter:"blur(0px)",duration:1.1,ease:"linear",stagger:{each:0.02,from:0}});else d.killTweensOf($),d.set($,{autoAlpha:0,filter:"blur(2px)"})}}),window.matchMedia("(prefers-reduced-motion: reduce)").matches)d.set($,{autoAlpha:1,filter:"blur(0px)"});h0(()=>{if(d.killTweensOf($),Q&&typeof Q.revert==="function")Q.revert()})}var Y5={};F8(Y5,{default:()=>EM});function EM(J,$){let Q=(q)=>J.querySelector(`.${q}`),Z=[{cls:"iyo-line-1",speed:0.49,clockwise:!0},{cls:"iyo-line-2",speed:0.392,clockwise:!1},{cls:"iyo-line-3",speed:0.294,clockwise:!0},{cls:"iyo-line-4",speed:0.196,clockwise:!1},{cls:"iyo-line-5",speed:0.147,clockwise:!0},{cls:"iyo-line-6",speed:0.098,clockwise:!1},{cls:"iyo-line-7",speed:0.049,clockwise:!0}],W=[],K=(q,Y,G)=>{if(!q)return null;d.set(q,{transformOrigin:"center center"});let N=6/G,F=Y?360:-360;return d.to(q,{rotation:F,duration:N,ease:"none",repeat:-1})},U=()=>{if(Z.forEach(({cls:q,speed:Y,clockwise:G})=>{let X=Q(q),N=K(X,G,Y);if(N)W.push(N)}),W.length===0){let q=[...J.children];d.set(q,{opacity:0});let Y=d.to(q,{opacity:1,duration:1.2,stagger:0.4,repeat:-1,yoyo:!0});W.push(Y)}},H=()=>{W.splice(0).forEach((Y)=>Y&&Y.kill());let q=J.querySelectorAll(".iyo-line-1, .iyo-line-2, .iyo-line-3, .iyo-line-4, .iyo-line-5, .iyo-line-6, .iyo-line-7");if(q.length>0)d.killTweensOf(q)};P8(J,{autoStart:!0,callback:({isIn:q})=>{if(q)U();else H()}}),h0(()=>{H();let q=[...J.children];if(q.length>0)d.killTweensOf(q)})}var G5={};F8(G5,{default:()=>MM});function MM(J,$){let W=(K)=>{J.style.transform=`
      translateY(${7.5-K*15}%)
      scale(${K*0.15+0.9})`};W(0),MW(J,{autoStart:!0,callback:(K)=>{W(K)}})}var X5={};F8(X5,{default:()=>OM});function OM(J,$){let Q=[...J.querySelectorAll(".n-card")];if(!Q.length)return;let Z=0,W,K=[];function U(Y,G=!1){if(Q.forEach((X)=>X.classList.remove("is-open")),G)Q[Y].classList.remove("is-open"),Q[Y].offsetWidth,requestAnimationFrame(()=>{Q[Y].classList.add("is-open")});else Q[Y].classList.add("is-open");Z=Y}function H(){if(W)clearInterval(W),W=void 0}function q(){H(),W=window.setInterval(()=>{Z=(Z+1)%Q.length,U(Z)},5000)}U(0),q(),Q.forEach((Y,G)=>{let X=()=>{H(),U(G,!0),q()};K.push({card:Y,handleClick:X}),Y.addEventListener("click",X)}),h0(()=>{H(),K.forEach(({card:Y,handleClick:G})=>{Y.removeEventListener("click",G)})})}var N5={};F8(N5,{lib:()=>m3,default:()=>BM});var m3={"/iyo-yo":"ciao","/iyo-one":"ciao","/vad-pro":"ciao"};function BM(J,$){let Q=window.location.pathname,Z=(H)=>{if(H==="/iyo-yo")document.body.setAttribute("data-variant","iyo-yo");else if(H==="/iyo-one")document.body.setAttribute("data-variant","iyo-one");else if(H==="/vad-pro")document.body.setAttribute("data-variant","vad-pro");else if(H==="/iyo-wand")document.body.setAttribute("data-variant","iyo-wand");else document.body.setAttribute("data-variant","no-cta")},W=(H)=>{let q=H==="/"?"":H.replace(/^\//,"");document.body.setAttribute("data-current-page",q||"home")};Z(Q),W(Q);let K=(H)=>{},U=(H)=>{Q=H,Z(H),W(H)};F0.on("TRANSITIONING",K),C9(J,U),h0(()=>{if(document.contains(J))return;F0.off("TRANSITIONING",K)})}var F5={};F8(F5,{default:()=>RM});function RM(J,$){if(J._navInitialized)return;J._navInitialized=!0;let Q=!1;d.set(J,{yPercent:-300});let Z=()=>{if(!Q)d.to(J,{yPercent:0,duration:1.8}),Q=!0};F0.on("READY",Z);let W=d3(J);h0(()=>{if(document.contains(J))return;delete J._navInitialized,F0.off("READY",Z),W()}),C9(J,(K)=>{})}function d3(J){let $=a(),Q={isNavActive:$.navStatusEl?.getAttribute("data-navigation-status")==="active",currentPanel:null},Z=!1,W=null,K=0,U=[],H=null,q=null,Y=()=>{$=a(),Q.isNavActive=$.navStatusEl?.getAttribute("data-navigation-status")==="active"},G=(c)=>{U.push(c)},X=(c)=>{if($.menuPanel)$.menuPanel.style.display=c==="menu"?"":"none";if($.cartPanel)$.cartPanel.style.display=c==="cart"?"":"none";if(Q.isNavActive)N(c);Q.currentPanel=c},N=(c)=>{let W0={menu:{menu:"rgba(17, 17, 17, 0.8)",cart:""},cart:{menu:"",cart:"rgba(217, 217, 217, 0.8)"}}[c]||{menu:"",cart:""};if($.menuButton)$.menuButton.style.backgroundColor=W0.menu;if($.cartButton)$.cartButton.style.backgroundColor=W0.cart},F=()=>{if($.menuButton)$.menuButton.style.backgroundColor="";if($.cartButton)$.cartButton.style.backgroundColor=""},M=(c)=>{if(c!=="navigation"&&Q.isNavActive)E("not-active"),F();if(c!=="configurator"&&$.configuratorEl){if($.configuratorEl.getAttribute("data-configurator-status")==="active")$.configuratorEl.setAttribute("data-configurator-status","not-active")}},E=(c)=>{if(!$.navStatusEl)return;if(W)clearTimeout(W),W=null;$.navStatusEl.removeAttribute("data-animating"),requestAnimationFrame(()=>{$.navStatusEl.setAttribute("data-animating","true");let w=document.querySelectorAll("[data-navigation-item]"),W0=0;if(c==="not-active")W0=600,w.forEach((K0)=>{K0.style.transitionDelay="0s"});else if(c==="active")w.forEach((K0,Z0)=>{let M0=Z0*0.025+0.15,q0=`${M0}s`;K0.style.transitionDelay=q0;let j0=M0*1000+300;W0=Math.max(W0,j0)});$.navStatusEl.setAttribute("data-navigation-status",c);let e=W0+100;W=setTimeout(()=>{$.navStatusEl.removeAttribute("data-animating"),W=null},e)})},L=(c)=>{if(!$.navStatusEl)return;M("navigation"),E("active"),Q.isNavActive=!0,X(c),K=window.scrollY,Z=!1},O=(c=!1)=>{if(!$.navStatusEl)return;if(c){if($.navStatusEl.removeAttribute("data-animating"),W)clearTimeout(W),W=null}if(Q.isNavActive)E("not-active"),Q.isNavActive=!1,F(),Q.currentPanel=null},z=(c)=>{if(!$.navStatusEl)return;let w=Q.isNavActive,W0=Q.currentPanel===c;if(!w)L(c);else if(!W0)X(c);else O()},B=()=>{if(Q.isNavActive)Z=!0},I=()=>{let c=$?.navStatusEl;if(c&&c.getAttribute("data-navigation-status")==="active"){if(c.setAttribute("data-navigation-status","not-active"),c.removeAttribute("data-animating"),W)clearTimeout(W),W=null;Q.isNavActive=!1,Q.currentPanel=null,F()}},A=()=>{let c=Math.abs(window.scrollY-K);if(Q.isNavActive&&Z&&c>1)I()},C=()=>{setTimeout(()=>{if(!$.navStatusEl)return;M("navigation"),E("active"),Q.isNavActive=!0,X("cart")},300)},P=()=>{$.navigationInnerItems.forEach((c,w)=>{let W0=`${w*0.025+0.15}s`;c.style.transitionDelay=W0})},x=()=>{if($.menuButton)$.menuButton.style.transition="background-color 0.3s ease";if($.cartButton)$.cartButton.style.transition="background-color 0.3s ease"},D=()=>{if(H){H();let K0=U.indexOf(H);if(K0>-1)U.splice(K0,1)}let c=document.querySelectorAll('[data-navigation-toggle="toggle"]'),w=document.querySelectorAll('[data-navigation-toggle="cart"]'),W0=()=>z("menu"),R0=()=>z("cart");c.forEach((K0)=>{K0.addEventListener("click",W0)}),w.forEach((K0)=>{K0.addEventListener("click",R0)});let e=()=>{c.forEach((K0)=>{K0.removeEventListener("click",W0)}),w.forEach((K0)=>{K0.removeEventListener("click",R0)})};H=e,G(e)},k=()=>{if(q){q();let R0=U.indexOf(q);if(R0>-1)U.splice(R0,1)}let c=document.querySelectorAll('[data-navigation-toggle="close"]'),w=()=>O();c.forEach((R0)=>{R0.addEventListener("click",w)});let W0=()=>{c.forEach((R0)=>{R0.removeEventListener("click",w)})};q=W0,G(W0)},b=()=>{let c=(w)=>{if(w.keyCode===27)O()};document.addEventListener("keydown",c),G(()=>{document.removeEventListener("keydown",c)})},v=()=>{window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("wheel",B,{passive:!0}),window.addEventListener("touchmove",B,{passive:!0}),G(()=>{window.removeEventListener("scroll",A),window.removeEventListener("wheel",B),window.removeEventListener("touchmove",B)})},m=()=>{let c=document.querySelectorAll("[sf-add-to-cart]"),w=()=>C();c.forEach((W0)=>{W0.addEventListener("click",w)}),G(()=>{c.forEach((W0)=>{W0.removeEventListener("click",w)})})},n=()=>{let c=()=>C(),w=new MutationObserver((W0)=>{W0.forEach((R0)=>{R0.addedNodes.forEach((e)=>{if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute&&e.hasAttribute("sf-add-to-cart"))e.addEventListener("click",c);(e.querySelectorAll?e.querySelectorAll("[sf-add-to-cart]"):[]).forEach((Z0)=>{Z0.addEventListener("click",c)})}})})});w.observe(document.body,{childList:!0,subtree:!0}),G(()=>{w.disconnect()})},r=()=>{let c=document.querySelector(".centered-nav__inner");if(!c)return;let w=c.querySelectorAll(".card__wrap"),W0=document.body.getAttribute("data-current-page"),R0=(Z0)=>{let M0=Z0.getAttribute("data-nav-page");return W0&&M0&&W0===M0},e=()=>{c.classList.remove("is-hovering"),w.forEach((Z0)=>Z0.classList.remove("is-card-hovering"))},K0=[];w.forEach((Z0)=>{let M0=()=>{Z0.classList.add("is-card-hovering"),c.classList.toggle("is-hovering",!R0(Z0))},q0=()=>{Z0.classList.remove("is-card-hovering");let j0=Array.from(w).find((u0)=>u0.matches(":hover"));c.classList.toggle("is-hovering",j0&&!R0(j0))};Z0.addEventListener("mouseenter",M0),Z0.addEventListener("mouseleave",q0),K0.push({card:Z0,enter:M0,leave:q0})}),c.addEventListener("mouseleave",e),G(()=>{c.removeEventListener("mouseleave",e),K0.forEach(({card:Z0,enter:M0,leave:q0})=>{Z0.removeEventListener("mouseenter",M0),Z0.removeEventListener("mouseleave",q0)})})},s=()=>{let c=(w)=>{if(w)O(!0);else requestAnimationFrame(()=>{requestAnimationFrame(()=>{if(Y(),D(),k(),!$.navStatusEl)return;$.navStatusEl.setAttribute("data-navigation-status","not-active"),$.navStatusEl.removeAttribute("data-animating"),Q.isNavActive=!1,Q.currentPanel=null,Z=!1,P(),x(),J0()})})};F0.on("TRANSITIONING",c),G(()=>{F0.off("TRANSITIONING",c)})},J0=()=>{if(Q.isNavActive)X("menu");else{if($.menuPanel)$.menuPanel.style.display="";if($.cartPanel)$.cartPanel.style.display="none";F()}};function a(){return{navigationInnerItems:document.querySelectorAll("[data-navigation-item]"),circle1:document.querySelector(".circle-1"),circle9:document.querySelector(".circle-9"),circle3:document.querySelector(".circle-3"),circle5:document.querySelector(".circle-5"),navbarSvg:document.querySelector(".navbar__svg"),menuButton:document.querySelector(".navbar__menu"),cartButton:document.querySelector(".navbar__cart"),menuPanel:document.querySelector('[data-navigation-panel="menu"]'),cartPanel:document.querySelector('[data-navigation-panel="cart"]'),navStatusEl:document.querySelector("[data-navigation-status]"),configuratorEl:document.querySelector("[data-configurator-status]")}}return P(),x(),D(),k(),b(),m(),n(),r(),v(),s(),J0(),()=>{if(W)clearTimeout(W),W=null;U.forEach((c)=>c()),U.length=0}}var L5={};F8(L5,{default:()=>VM});function VM(J){if(q1)return;let $=null,Q=null,Z=!1,W=0,K=(X=!1)=>{let N=J.querySelector("svg");if(!N)return;let F=N.querySelectorAll("path");if(F.length===0)return;$=[];let M=N.getBBox(),E=M.x+M.width/2,L=M.y+M.height/2;Array.from(F).map((z)=>{if(!z||!z.isConnected)return null;let B=z.getBBox();return{path:z,centerX:B.x+B.width/2,centerY:B.y+B.height/2}}).filter((z)=>z!==null).forEach((z)=>{let{path:B,centerX:I,centerY:A}=z,C=Math.sqrt(Math.pow(I-E,2)+Math.pow(A-L,2)),P=(Math.random()-0.5)*80;if(d.set(B,{transformOrigin:"center center"}),!X)d.set(B,{rotation:P});d.killTweensOf(B);let x=25,D=[2,3,4,5,6],k=C/M.width,b=Math.floor(k*D.length*1.5)%D.length;if(Math.random()>0.7)b=(b+1)%D.length;let v=D[b],m=Math.random()>0.5?1:-1,n=Math.random()>0.6?2:1,r=m*360*n,s=x*v*n,J0=["power1.inOut","power2.inOut","sine.inOut"],a=J0[Math.floor(Math.random()*J0.length)],c=2.5,w=d.timeline({repeat:-1});w.to(B,{rotation:0,duration:c,ease:"power1.inOut"}),w.to(B,{rotation:r,duration:s,ease:a}),$.push(w)})},U=()=>{let X=J.querySelector("svg");if(!X)return;let N=X.querySelectorAll("path");if(N.length===0)return;if(Z)return;let F=Date.now();if(F-W<400)return;W=F,Z=!0,H(),N.forEach((M)=>{let L=(((Number(d.getProperty(M,"rotation"))||0)%360+360)%360+180)%360-180;d.set(M,{rotation:L})}),Q=d.to(N,{rotation:0,duration:1.1,ease:"power2.out",onComplete:()=>{Q=null,Z=!1,K(!0)},onInterrupt:()=>{Q=null,Z=!1}})},H=()=>{if($)$.forEach((N)=>N.kill()),$=null;if(Q)Q.kill(),Q=null;let X=J.querySelector("svg");if(X)d.killTweensOf(X.querySelectorAll("path"))};P8(J,{autoStart:!0,callback:({isIn:X})=>{if(X)K();else H()}});let q=(X)=>{let N=X?.target;if(!(N instanceof Element))return null;return N.closest('[data-module="nf-trigger"]')},Y=(X)=>{let N=q(X);if(!N)return;let F=X.relatedTarget;if(F instanceof Node&&N.contains(F))return;U()},G=(X)=>{if(!q(X))return;U()};document.addEventListener("mouseover",Y),document.addEventListener("click",G),h0(()=>{document.removeEventListener("mouseover",Y),document.removeEventListener("click",G),H()})}var E5={};F8(E5,{default:()=>zM});function zM(J,$){let Q=null;d.set(J,{yPercent:100}),hZ(()=>{Q=d.to(J,{yPercent:0,duration:1.2,delay:0.2,ease:"expo.out"})}),h0(()=>{if(Q)Q.kill(),Q=null;d.killTweensOf(J)})}var M5={};F8(M5,{default:()=>DM});function DM(J,$){let Q=tY({delay:0.2},$),Z=(H)=>{let q="lines",Y=new a$(H,{type:"lines,"+q,autoSplit:!0,aria:"none"});return{items:Y[q],splitInstance:Y}},{items:W,splitInstance:K}=Z(J);d.set(W,{autoAlpha:0,yPercent:100});let U=null;P8(J,{autoStart:!0,callback:({isIn:H})=>{if(H)U=d.to(W,{autoAlpha:1,yPercent:0,stagger:0.1,delay:Q.delay});else{if(U)U.kill();d.to(W,{autoAlpha:0,yPercent:100})}}}),h0(()=>{if(U)U.kill(),U=null;if(d.killTweensOf(W),K&&typeof K.revert==="function")K.revert()})}var O5={};F8(O5,{default:()=>kM});function kM(J,$){let Q=J.querySelector("img"),Z=-40,W=-20,K=(U)=>{Q.style.transform=`
      translateY(${-20-U*-40}%)
      scale(${1.05+U*0.01})`};K(0),MW(J,{callback:K})}var B5={};F8(B5,{default:()=>CM});function CM(J,$){if(!window.matchMedia("(max-width: 767px)").matches)[...J.children].forEach((L)=>{let O=L.cloneNode(!0);J.appendChild(O)});let Z=new s9(J,{snap:!0}),W=5000,K=2000,U=$.delay?parseInt($.delay):0,H=!1,q=0,Y,G=!1,X=()=>{if(H=!0,q=Date.now(),Y)clearInterval(Y),Y=null},N=()=>{if(Y||!G)return;setTimeout(()=>{Y=setInterval(()=>{if(Date.now()-q>K&&!H)try{Z.target=Z.target-1}catch(L){console.warn("Smooothy target update failed:",L)}},W)},U)},F=()=>{if(Y)clearInterval(Y),Y=null};J.addEventListener("mousedown",X),J.addEventListener("touchstart",X,{passive:!0}),J.addEventListener("wheel",X,{passive:!0});let M=()=>{setTimeout(()=>{if(H=!1,G)N()},K)};J.addEventListener("mouseup",M),J.addEventListener("touchend",M,{passive:!0});let E=PJ.add(({deltaTime:L,time:O})=>{try{Z.update()}catch(z){console.warn("Smooothy update failed:",z)}});h0(()=>{if(J.removeEventListener("mousedown",X),J.removeEventListener("touchstart",X),J.removeEventListener("wheel",X),J.removeEventListener("mouseup",M),J.removeEventListener("touchend",M),F(),E)E();if(Z&&typeof Z.destroy==="function")Z.destroy()}),P8(J,{callback:({isIn:L})=>{if(G=L,L){try{Z.current=Z.current+1}catch(O){console.warn("Smooothy current update failed:",O)}N()}else F()}})}var R5={};F8(R5,{default:()=>PM});function PM(J){J.classList.add("is-initial"),setTimeout(()=>{J.classList.remove("is-initial"),document.querySelectorAll(".shop-now-text").forEach((q)=>q.classList.add("visible"))},1600);let $=()=>{let H=window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches,q=window.matchMedia("(hover: none)").matches;return H&&q};if(!$())return;let Q=!1,Z=(H)=>{if(!Q)H.preventDefault(),H.stopPropagation(),J.classList.add("is-touch-expanded"),Q=!0},W=(H)=>{if(!J.contains(H.target)&&Q)J.classList.remove("is-touch-expanded"),Q=!1},K,U=()=>{clearTimeout(K),K=setTimeout(()=>{if(!$()&&Q)J.classList.remove("is-touch-expanded"),Q=!1},250)};J.addEventListener("click",Z,!0),document.addEventListener("click",W),window.addEventListener("resize",U),h0(()=>{if(J.removeEventListener("click",Z,!0),document.removeEventListener("click",W),window.removeEventListener("resize",U),K)clearTimeout(K),K=null})}var V5={};F8(V5,{default:()=>IM});var T_=typeof window!=="undefined"?window.Shopyflow:void 0;function IM(J,$){let Q=J.closest("[data-taxi-view]")||document,Z=Math.random().toString(36).substr(2,9),W={scrollPosition:0,xTo:null,wrap:null,content:null,halfWidth:0,isPaused:!1},K=-1,U=!0,H=!1,q=null,Y=0.82,G="iyo_cap_color_index",X=["55280163357041","55280163455345","55280163553649"],N=["55685445681521","55685445714289","55685445747057","55685445779825","55685445812593","55685445845361","55685445878129","55685445910897","55685445943665"],F=["55684866867569","55684882760049","55684882792817"],M=["Dusk","Night","Dawn"],E=["Snow","Rain","Space","Seafoam","Forest","Ocean","Sun","Peach","Earth"];function L(){return window.location.pathname.includes("iyo-yo")}function O(D0){if(D0<=3)return M;else return E}function z(D0){if(L()&&D0<=3)return F;if(D0<=3)return X;else return N}let B=10,I=1000,A=500,C=Q.querySelector(".gallery__img-wrapper"),P=D();if(!window.productSliderInitialFadeIn)window.productSliderInitialFadeIn=[];if(C)d.set(C,{autoAlpha:0});let x=(D0)=>{if(D0){if(window.productSliderInitialFadeIn&&window.productSliderInitialFadeIn.length>0)window.productSliderInitialFadeIn.forEach((p0)=>{if(p0)p0.kill()}),window.productSliderInitialFadeIn=[];if(d.to(C,{autoAlpha:0,duration:0.5,ease:"linear"}),K>=0){if(U&&F0.ECOMMERCE===!0)F0.WEBGL_CAP_COLOR=K}}else d.to(C,{autoAlpha:1,duration:0.5,ease:"linear"})};F0.on("ECOMM_3D_VISIBLE",x);function D(){let D0=Q.querySelector(".variant-imgs-w");if(!D0)return[];return Array.from(D0.children).map((a0)=>Array.from(a0.querySelectorAll("img"))).filter((a0)=>a0.length>0)}function k(D0){if(D0<0||!P[D0])return;Q.querySelectorAll("[data-variant-img]").forEach((o,a0)=>{let S0=o,t0=a0%P[D0].length,N8=P[D0][t0].src;S0.src=N8,o.removeAttribute("srcset")})}function b(D0){if(U&&F0.ECOMMERCE===!0)F0.WEBGL_CAP_COLOR=D0;K=D0;try{localStorage.setItem(G,String(D0))}catch{}}function v(D0){if(D0===K||D0===q)return;if(!H)b(D0),H=!0,d.delayedCall(Y,()=>{if(H=!1,q!==null&&q!==K){let p0=q;q=null,v(p0)}});else q=D0}function m(){let D0=null,p0=()=>{let o=typeof window!=="undefined"?window.Shopyflow:void 0;if(!o)return!1;return o.on("optionChange",({variant:a0})=>{if(!U)return;let S0=O(P.length),t0=S0.find((S8)=>a0.title?.includes(S8)),N8=S0.indexOf(t0??"");if(N8<0)return;v(N8),k(N8)}),!0};if(!p0())D0=window.setInterval(()=>{if(p0()){if(D0)window.clearInterval(D0),D0=null}},100);return()=>{if(D0)window.clearInterval(D0),D0=null}}function n(){if(!W.content)return!1;if(W.halfWidth=W.content.clientWidth/2,W.halfWidth===0)return!1;let D0=window.innerWidth*0.5;return W.wrap=d.utils.wrap(-W.halfWidth+D0,D0),W.xTo=d.quickTo(W.content,"x",{duration:0.5,ease:"power3",modifiers:{x:d.utils.unitize(W.wrap)}}),!0}function r(){if(!W.content)return;let D0=W.halfWidth!==0?W.scrollPosition/W.halfWidth:0;if(n())W.scrollPosition=D0*W.halfWidth,W.xTo?.(W.scrollPosition)}function s({deltaTime:D0,time:p0}){if(W.isPaused)return;W.scrollPosition-=p0*100/B,W.xTo?.(W.scrollPosition)}function J0(){if(!W.content)return;let D0=Array.from(W.content.querySelectorAll(".gallery__img-item")).filter((p0)=>!p0.hasAttribute("data-swap"));Array.from(W.content.querySelectorAll(".gallery__img-item[data-swap]")).forEach((p0)=>p0.remove()),D0.forEach((p0)=>{let o=p0.cloneNode(!0);o.setAttribute("data-swap","true"),W.content.appendChild(o)})}function a(){if(!W.content)return;j0=m8.create({target:W.content,type:"pointer,touch,wheel",dragMinimum:5,tolerance:10,lockAxis:!0,onDrag:(D0)=>{W.scrollPosition+=D0.deltaX,W.xTo?.(W.scrollPosition)},onWheel:(D0)=>{W.scrollPosition-=D0.deltaY*2,W.xTo?.(W.scrollPosition)}})}let c=null,w=null,W0=null,R0=null,e=null,K0=null,Z0=null,M0=!1,q0=!1,j0=null;function u0(){c=yQ.add(r)}function m0(){let p0=new URLSearchParams(window.location.search).get("variant"),a0=z(P.length).indexOf(p0??"");if(!(a0>=0))a0=0;if(k(a0),U&&F0.ECOMMERCE===!0)F0.WEBGL_CAP_COLOR=a0;K=a0;try{localStorage.setItem(G,String(a0))}catch{}if(C){let S0=d.to(C,{autoAlpha:1,ease:"expo.out",duration:1.2,delay:0.3,onComplete:()=>{if(window.productSliderInitialFadeIn){let t0=window.productSliderInitialFadeIn.indexOf(S0);if(t0>-1)window.productSliderInitialFadeIn.splice(t0,1)}}});if(window.productSliderInitialFadeIn)window.productSliderInitialFadeIn.push(S0)}}function Y8(){let D0=()=>{W.isPaused=!0},p0=()=>{W.isPaused=!1},o=()=>{W.isPaused=!0},a0=()=>{W.isPaused=!1},S0=W.content||document;return S0.addEventListener("mousedown",D0),S0.addEventListener("mouseup",p0),S0.addEventListener("touchstart",o,{passive:!0}),S0.addEventListener("touchend",a0,{passive:!0}),()=>{S0.removeEventListener("mousedown",D0),S0.removeEventListener("mouseup",p0),S0.removeEventListener("touchstart",o),S0.removeEventListener("touchend",a0),W.isPaused=!1}}function J8(){if(w)w(),w=null;if(c)c(),c=null;if(W0)W0(),W0=null;if(R0)R0(),R0=null;if(j0){try{j0.kill()}catch(D0){}j0=null}}function u(){if(M0||q0)return;if(Z0)clearTimeout(Z0),Z0=null;if(q0=!0,typeof d==="undefined"||!d.utils||typeof m8==="undefined"){q0=!1,Z0=window.setTimeout(u,100);return}if(W.content=Q.querySelector(".gallery__img-list"),!W.content){q0=!1,Z0=window.setTimeout(u,500);return}if(M0=!0,J8(),J0(),m0(),W.scrollPosition=0,!n()){M0=!1,q0=!1,Z0=window.setTimeout(u,500);return}a(),u0(),W0=Y8(),R0=m(),w=PJ.add(s),q0=!1}function L8(){let D0=()=>{if(e)clearTimeout(e),e=null;e=window.setTimeout(u,I)},p0=()=>{if(K0)clearTimeout(K0),K0=null;K0=window.setTimeout(u,A)};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",D0,{once:!0});else D0();window.addEventListener("load",p0,{once:!0})}L8(),h0(()=>{if(U=!1,M0=!1,q0=!1,e)clearTimeout(e),e=null;if(K0)clearTimeout(K0),K0=null;if(Z0)clearTimeout(Z0),Z0=null;if(J8(),F0.off("ECOMM_3D_VISIBLE",x),C)d.killTweensOf(C);if(window.productSliderInitialFadeIn)window.productSliderInitialFadeIn.forEach((D0)=>{if(D0)D0.kill()}),window.productSliderInitialFadeIn=[]})}var z5={};F8(z5,{default:()=>AM});function AM(J,$){let Q=[...J.querySelectorAll(".number-dot")];P8(J,{autoStart:!0,callback:({isIn:Z})=>{if(Z)d.to(Q,{autoAlpha:()=>Math.random()*0.7+0.3,duration:0.8,stagger:0.05});else d.killTweensOf(Q),d.set(Q,{autoAlpha:0})}}),h0(()=>{d.killTweensOf(Q)})}var D5={};F8(D5,{default:()=>TM});function TM(J,$){let Q=J.querySelectorAll(".div__line:not(.is--vertical)"),Z=J.querySelectorAll(".div__line.is--vertical"),W=window.innerWidth<=479;if(Q.length>0)d.set(Q,{width:"0%"});if(Z.length>0)d.set(Z,{[W?"width":"height"]:"0%"});P8(J,{autoStart:!0,callback:({isIn:K})=>{if(K){if(Q.length>0)d.to(Q,{width:"100%",duration:1.6,ease:"expo.out",stagger:0.08});if(Z.length>0){let U=W?"width":"height";d.to(Z,{[U]:"100%",duration:1.6,ease:"expo.out",stagger:0.08})}}else{if(d.killTweensOf([Q,Z]),Q.length>0)d.set(Q,{width:"0%"});if(Z.length>0)d.set(Z,{[W?"width":"height"]:"0%"})}}}),h0(()=>{d.killTweensOf([Q,Z])})}var k5={};F8(k5,{default:()=>SM});function SM(J,{delay:$}){let Q=[...J.children],Z=()=>{d.killTweensOf(Q),d.set(Q,{autoAlpha:0,yPercent:50})};Z(),P8(J,{callback:({isIn:W})=>{if(W)d.to(Q,{autoAlpha:1,delay:$*0.1,yPercent:0,stagger:0.05});else Z()}}),h0(()=>{d.killTweensOf(Q)})}var C5={};F8(C5,{default:()=>jM});function jM(J,$){if(q1)return;let Q=null,Z=()=>{let K=J.querySelectorAll('[class*="vad-line-"]');if(K.length===0)return;let U=J.querySelector(".vad__visual")||J,H=U.getAttribute("viewBox"),q=H?parseFloat(H.split(" ")[3]):U.getBoundingClientRect().height;Q=[],K.forEach((Y,G)=>{if(!Y||!Y.isConnected)return;try{let X=Y.getBBox(),N=X.height,F=X.y,M=-F,E=q-N-F;if(E<=M)return;let L=5+Math.random()*6,z=Math.random()>0.5?E:M,B=Math.random();d.killTweensOf(Y);let I={topY:M,bottomY:E},A=d.to(Y,{y:z,duration:L,ease:"power2.inOut",repeat:-1,yoyo:!0,immediateRender:!1});A.progress(B),Q.push(A)}catch(X){console.warn(`[vad] ${G}: Error`,X)}})},W=()=>{if(Q)Q.forEach((K)=>K.kill()),Q=null;d.killTweensOf(J.querySelectorAll('[class*="vad-line-"]'))};P8(J,{autoStart:!0,callback:({isIn:K})=>{if(K)Z();else W()}}),h0(()=>{W()})}var P5={};F8(P5,{default:()=>wM});function wM(J,$){if(!window.matchMedia("(max-width: 767px)").matches)[...J.children].forEach((L)=>{let O=L.cloneNode(!0);J.appendChild(O)});let Z=new s9(J,{snap:!0}),W=5000,K=2000,U=$.delay?parseInt($.delay):0,H=!1,q=0,Y,G=!1,X=()=>{if(H=!0,q=Date.now(),Y)clearInterval(Y),Y=null},N=()=>{if(Y||!G)return;setTimeout(()=>{Y=setInterval(()=>{if(Date.now()-q>K&&!H)try{Z.target=Z.target-1}catch(L){console.warn("Smooothy target update failed:",L)}},W)},U)},F=()=>{if(Y)clearInterval(Y),Y=null};J.addEventListener("mousedown",X),J.addEventListener("touchstart",X,{passive:!0}),J.addEventListener("wheel",X,{passive:!0});let M=()=>{setTimeout(()=>{if(H=!1,G)N()},K)};J.addEventListener("mouseup",M),J.addEventListener("touchend",M,{passive:!0});let E=PJ.add(({deltaTime:L,time:O})=>{try{Z.update()}catch(z){console.warn("Smooothy update failed:",z)}});h0(()=>{if(J.removeEventListener("mousedown",X),J.removeEventListener("touchstart",X),J.removeEventListener("wheel",X),J.removeEventListener("mouseup",M),J.removeEventListener("touchend",M),F(),E)E();if(Z&&typeof Z.destroy==="function")Z.destroy()}),P8(J,{callback:({isIn:L})=>{if(G=L,L){try{Z.current=Z.current+1}catch(O){console.warn("Smooothy current update failed:",O)}N()}else F()}})}var I5={};F8(I5,{default:()=>_M});function _M(J){let $=()=>{let H=window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches,q=window.matchMedia("(hover: none)").matches;return H&&q};if(!$())return;let Q=!1,Z=(H)=>{if(!Q)H.preventDefault(),H.stopPropagation(),J.classList.add("is-touch-expanded"),Q=!0},W=(H)=>{if(!J.contains(H.target)&&Q)J.classList.remove("is-touch-expanded"),Q=!1},K,U=()=>{clearTimeout(K),K=setTimeout(()=>{if(!$()&&Q)J.classList.remove("is-touch-expanded"),Q=!1},250)};J.addEventListener("click",Z,!0),document.addEventListener("click",W),window.addEventListener("resize",U),h0(()=>{if(J.removeEventListener("click",Z,!0),document.removeEventListener("click",W),window.removeEventListener("resize",U),K)clearTimeout(K),K=null})}var A5={};F8(A5,{default:()=>xM});function xM(J,$){let Q=(q)=>J.querySelector(`.${q}`),Z=[{cls:"wand-line-1",speed:0.061,clockwise:!0},{cls:"wand-line-2",speed:0.092,clockwise:!1},{cls:"wand-line-3",speed:0.122,clockwise:!0},{cls:"wand-line-4",speed:0.153,clockwise:!1},{cls:"wand-line-5",speed:0.184,clockwise:!0}],W=[],K=(q,Y,G)=>{if(!q)return null;d.set(q,{transformOrigin:"center center"});let N=12/G,F=Y?360:-360;return d.to(q,{rotation:F,duration:N,ease:"none",repeat:-1})},U=()=>{if(Z.forEach(({cls:q,speed:Y,clockwise:G})=>{let X=Q(q),N=K(X,G,Y);if(N)W.push(N)}),W.length===0){let q=[...J.children];d.set(q,{opacity:0});let Y=d.to(q,{opacity:1,duration:1.2,stagger:0.4,repeat:-1,yoyo:!0});W.push(Y)}},H=()=>{W.splice(0).forEach((Y)=>Y&&Y.kill());let q=J.querySelectorAll(".wand-line-1, .wand-line-2, .wand-line-3, .wand-line-4, .wand-line-5");if(q.length>0)d.killTweensOf(q)};P8(J,{autoStart:!0,callback:({isIn:q})=>{if(q)U();else H()}}),h0(()=>{H();let q=[...J.children];if(q.length>0)d.killTweensOf(q)})}var T5={};F8(T5,{default:()=>yM});function yM(J,$){let Q=(q)=>J.querySelector(`.${q}`),Z=[{clsA:"yo-line-1",clsB:"yo-line-1b",speed:0.061,clockwiseA:!0},{clsA:"yo-line-2",clsB:"yo-line-2b",speed:0.092,clockwiseA:!1},{clsA:"yo-line-3",clsB:"yo-line-3b",speed:0.122,clockwiseA:!0},{clsA:"yo-line-4",clsB:"yo-line-4b",speed:0.153,clockwiseA:!1},{clsA:"yo-line-5",clsB:"yo-line-5b",speed:0.184,clockwiseA:!0}],W=[],K=(q,Y,G)=>{if(!q)return null;d.set(q,{transformOrigin:"center center"});let N=12/G,F=Y?360:-360;return d.to(q,{rotation:F,duration:N,ease:"none",repeat:-1})},U=()=>{if(Z.forEach(({clsA:q,clsB:Y,speed:G,clockwiseA:X})=>{let N=Q(q),F=Q(Y),M=K(N,X,G),E=K(F,!X,G);if(M)W.push(M);if(E)W.push(E)}),W.length===0){let q=[...J.children];d.set(q,{opacity:0});let Y=d.to(q,{opacity:1,duration:1.2,stagger:0.4,repeat:-1,yoyo:!0});W.push(Y)}},H=()=>{W.splice(0).forEach((Y)=>Y&&Y.kill());let q=J.querySelectorAll(".yo-line-1, .yo-line-1b, .yo-line-2, .yo-line-2b, .yo-line-3, .yo-line-3b, .yo-line-4, .yo-line-4b, .yo-line-5, .yo-line-5b");if(q.length>0)d.killTweensOf(q)};P8(J,{autoStart:!0,callback:({isIn:q})=>{if(q)U();else H()}}),h0(()=>{H();let q=[...J.children];if(q.length>0)d.killTweensOf(q)})}var S5={};F8(S5,{overlay:()=>g8,default:()=>bM});var g8={item:null,iframe:null,originalIframe:null,state:!1};function bM(J){if(g8.item=J,g8.iframe=J.querySelector("[data-iframe]"),g8.iframe)g8.originalIframe=g8.iframe}var j5={};F8(j5,{default:()=>hM});function c3(J){if(!J)return null;if(!J.includes("/")&&!J.includes("?")&&!J.includes("&"))return J;let $=[/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,/youtube\.com\/.*[?&]v=([^&\n?#]+)/];for(let Q of $){let Z=J.match(Q);if(Z&&Z[1])return Z[1]}return null}function vM(){if(!g8.item||!g8.originalIframe)return;if(g8.state=!1,g8.item.style.display="none",g8.iframe&&g8.iframe.parentNode&&g8.originalIframe)g8.iframe.parentNode.replaceChild(g8.originalIframe,g8.iframe),g8.iframe=g8.originalIframe}function hM(J){let $=J.dataset.url||J.dataset.id;if(!$){console.error("YoutubeTrigger: data-url or data-id is required","Available attributes:",Object.keys(J.dataset),"Element:",J);return}let Q=c3($);if(!Q){console.error("YoutubeTrigger: Could not extract video ID from:",$);return}let Z=(U)=>{if(U.key==="Escape"||U.keyCode===27){if(g8.state)vM()}};document.addEventListener("keydown",Z);let W=document.querySelectorAll("[data-close]"),K=[];W.forEach((U)=>{let H=()=>{if(g8.state)vM()};U.addEventListener("click",H),K.push({element:U,handler:H})}),h0(()=>{document.removeEventListener("keydown",Z),K.forEach(({element:U,handler:H})=>{U.removeEventListener("click",H)})}),J.addEventListener("click",(U)=>{if(U.preventDefault(),U.stopPropagation(),!g8.item||!g8.iframe){console.error("YoutubeTrigger: Overlay or iframe not found");return}if(g8.state=!0,g8.item)g8.item.style.display="flex";let H=document.createElement("iframe");if(H.src=`https://www.youtube.com/embed/${Q}?autoplay=1&rel=0`,H.frameBorder="0",H.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",H.allowFullscreen=!0,H.style.width="100%",H.style.height="100%",g8.iframe&&g8.iframe.parentNode)g8.iframe.parentNode.replaceChild(H,g8.iframe),g8.iframe=H})}var w5={};F8(w5,{default:()=>fM});function fM(J,$){if(!J.classList.contains("youtube-player"))J.classList.add("youtube-player");let Q=$.id;if(!Q){console.error("YouTube module: data-id is required. Add data-id='VIDEO_ID' to your element.","Available attributes:",Object.keys($),"Element:",J);return}let Z=$.thumbnail||`https://i.ytimg.com/vi_webp/${Q}/sddefault.webp`,W=document.createElement("div");W.dataset.id=Q;let K=document.createElement("img");K.src=Z,K.alt="YouTube video thumbnail",K.onerror=()=>{console.warn("Failed to load thumbnail, using fallback"),K.src=`https://i.ytimg.com/vi/${Q}/sddefault.jpg`};let U=document.createElement("div");U.className="play_button",W.appendChild(K),W.appendChild(U),J.appendChild(W);let H=(q)=>{q.preventDefault(),q.stopPropagation();let Y=document.createElement("iframe");Y.src=`https://www.youtube.com/embed/${Q}?autoplay=1&rel=0`,Y.frameBorder="0",Y.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",Y.allowFullscreen=!0,Y.style.width="100%",Y.style.height="100%",J.replaceChild(Y,W),W.removeEventListener("click",H)};W.addEventListener("click",H),W.style.cursor="pointer",h0(()=>{if(W.removeEventListener("click",H),W.parentNode)W.remove()})}var _5={"./../accordion.js":lK,"./../alpha.js":FH,"./../apps.js":EH,"./../canvas-receiver.ts":nY,"./../cards.js":iY,"./../colorcursor.js":aY,"./../colorpicker.js":rY,"./../config.js":eY,"./../configurator.js":J5,"./../cta.js":$5,"./../cursor.js":Q5,"./../cycle.ts":Z5,"./../fill-text.ts":W5,"./../footer.js":K5,"./../footervideo.js":H5,"./../heading.js":q5,"./../iyoone-visual.js":Y5,"./../move.js":G5,"./../n-cards.js":X5,"./../nav-alt.ts":N5,"./../nav.js":F5,"./../notfound-visual.js":L5,"./../panel-animation.ts":E5,"./../paragraph.js":M5,"./../parallaximg.js":O5,"./../product-card-mobile.js":B5,"./../product-cards.js":R5,"./../productslider.ts":V5,"./../svgnumber.js":z5,"./../tech-lines.js":D5,"./../textcolumn.js":k5,"./../vad-visual.js":C5,"./../video-card-mobile.js":P5,"./../video-cards.js":I5,"./../wandsvg.js":A5,"./../webgl.ecommerce.js":lY,"./../webgl.js":sY,"./../webgl.page.js":dY,"./../webgl.utils.js":mY,"./../yosvg.js":T5,"./../youtube-overlay.ts":S5,"./../youtube-player.js":U5,"./../youtube-trigger.ts":j5,"./../youtube.ts":w5};function bK(J="module"){return Array.from(document.querySelectorAll(`[data-${J}]`)).map(($)=>{let Q=$,Z=Q.dataset[J];if(J==="module"&&Z==="nf-trigger")return null;if(Q._moduleInitialized&&Z!=="nav")return null;let W=_5[`./../${Z}.ts`]?`./../${Z}.ts`:`./../${Z}.js`;if(_5[W]){let K=_5[W].default;if(typeof K==="function")try{return Q._moduleInitialized=!0,K(Q,Q.dataset)}catch(U){return delete Q._moduleInitialized,console.warn(`Failed to call default function for ${J} "${Z}":`,U),null}else return console.warn(`Default export is not a function for ${J} "${Z}"`),null}else return console.warn(`${J} not found: "${Z}"`),null}).filter(($)=>$!==null)}class D9{static instance;groups=[];constructor(){}static getInstance(){if(!D9.instance)D9.instance=new D9;return D9.instance}configsMatch(J,$){return J.root===$.root&&J.rootMargin===$.rootMargin&&J.threshold===$.threshold}handleIntersection(J){J.forEach(($)=>{let Q=this.groups.find((G)=>{return Array.from(G.elements.keys()).includes($.target)});if(!Q)return;let Z=$.target,W=Q.elements.get(Z);if(!W)return;let{isIntersecting:K,intersectionRatio:U,boundingClientRect:H}=$,q=Q.config.threshold||0.1,Y=-1;if(W.lastDirection!==void 0)Y=K?H.top>0?1:-1:H.top>0?-1:1;if(W.lastDirection=Y,U===0)W.callbacks.isOut?.({entry:$,direction:Y}),W.callbacks.callback?.({entry:$,direction:Y,isIn:!1});else if(U>=q){if(W.callbacks.isIn?.({entry:$,direction:Y}),W.callbacks.callback?.({entry:$,direction:Y,isIn:!0}),W.once)this.removeElement(Z)}})}addElement(J,$,Q){this.removeElement(J);let Z=this.groups.find((W)=>this.configsMatch(W.config,$));if(!Z){let W=new IntersectionObserver((K)=>this.handleIntersection(K),{...$,threshold:[0,$.threshold||0.1]});Z={config:$,observer:W,elements:new Map},this.groups.push(Z)}return Z.elements.set(J,{callbacks:Q,once:$.once||!1,lastDirection:void 0}),Z.observer.observe(J),Z}removeElement(J){let $=this.groups.find((Q)=>Q.elements.has(J));if(!$)return;if($.observer.unobserve(J),$.elements.delete(J),$.elements.size===0)$.observer.disconnect(),this.groups=this.groups.filter((Q)=>Q!==$)}}class fZ{element;#J;#Z;isIn(J){}isOut(J){}inView;callback;#$=null;#Q=null;constructor(J,$={root:null,rootMargin:"0px",threshold:0.02,autoStart:!1,once:!1,callback:void 0}){this.element=J,this.#J=$,this.inView=!1,this.callback=$.callback||(()=>{}),F0.on("READY",()=>this.start())}start(){this.#Z=D9.getInstance().addElement(this.element,this.#J,{isIn:(J)=>{this.inView=!0,this.isIn?.(J)},isOut:(J)=>{this.inView=!1,this.isOut?.(J)},callback:this.callback})}stop(){D9.getInstance().removeElement(this.element)}destroy(){this.stop(),this.#$=null,this.#Q=null}}var l3="1.3.4";function pM(J,$,Q){return Math.max(J,Math.min($,Q))}function o3(J,$,Q){return(1-Q)*J+Q*$}function s3(J,$,Q,Z){return o3(J,$,1-Math.exp(-Q*Z))}function n3(J,$){return(J%$+$)%$}var i3=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(J){if(!this.isRunning)return;let $=!1;if(this.duration&&this.easing){this.currentTime+=J;let Q=pM(0,this.currentTime/this.duration,1);$=Q>=1;let Z=$?1:this.easing(Q);this.value=this.from+(this.to-this.from)*Z}else if(this.lerp){if(this.value=s3(this.value,this.to,this.lerp*60,J),Math.round(this.value)===this.to)this.value=this.to,$=!0}else this.value=this.to,$=!0;if($)this.stop();this.onUpdate?.(this.value,$)}stop(){this.isRunning=!1}fromTo(J,$,{lerp:Q,duration:Z,easing:W,onStart:K,onUpdate:U}){this.from=this.value=J,this.to=$,this.lerp=Q,this.duration=Z,this.easing=W,this.currentTime=0,this.isRunning=!0,K?.(),this.onUpdate=U}};function a3(J,$){let Q;return function(...Z){let W=this;clearTimeout(Q),Q=setTimeout(()=>{Q=void 0,J.apply(W,Z)},$)}}var r3=class{constructor(J,$,{autoResize:Q=!0,debounce:Z=250}={}){if(this.wrapper=J,this.content=$,Q){if(this.debouncedResize=a3(this.resize,Z),this.wrapper instanceof Window)window.addEventListener("resize",this.debouncedResize,!1);else this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper);this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)}this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){if(this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize)window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{if(this.wrapper instanceof Window)this.width=window.innerWidth,this.height=window.innerHeight;else this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight};onContentResize=()=>{if(this.wrapper instanceof Window)this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth;else this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},mM=class{events={};emit(J,...$){let Q=this.events[J]||[];for(let Z=0,W=Q.length;Z<W;Z++)Q[Z]?.(...$)}on(J,$){return this.events[J]?.push($)||(this.events[J]=[$]),()=>{this.events[J]=this.events[J]?.filter((Q)=>$!==Q)}}off(J,$){this.events[J]=this.events[J]?.filter((Q)=>$!==Q)}destroy(){this.events={}}},gM=16.666666666666668,y6={passive:!1},t3=class{constructor(J,$={wheelMultiplier:1,touchMultiplier:1}){this.element=J,this.options=$,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,y6),this.element.addEventListener("touchstart",this.onTouchStart,y6),this.element.addEventListener("touchmove",this.onTouchMove,y6),this.element.addEventListener("touchend",this.onTouchEnd,y6)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new mM;on(J,$){return this.emitter.on(J,$)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,y6),this.element.removeEventListener("touchstart",this.onTouchStart,y6),this.element.removeEventListener("touchmove",this.onTouchMove,y6),this.element.removeEventListener("touchend",this.onTouchEnd,y6)}onTouchStart=(J)=>{let{clientX:$,clientY:Q}=J.targetTouches?J.targetTouches[0]:J;this.touchStart.x=$,this.touchStart.y=Q,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:J})};onTouchMove=(J)=>{let{clientX:$,clientY:Q}=J.targetTouches?J.targetTouches[0]:J,Z=-($-this.touchStart.x)*this.options.touchMultiplier,W=-(Q-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=$,this.touchStart.y=Q,this.lastDelta={x:Z,y:W},this.emitter.emit("scroll",{deltaX:Z,deltaY:W,event:J})};onTouchEnd=(J)=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:J})};onWheel=(J)=>{let{deltaX:$,deltaY:Q,deltaMode:Z}=J,W=Z===1?gM:Z===2?this.window.width:1,K=Z===1?gM:Z===2?this.window.height:1;$*=W,Q*=K,$*=this.options.wheelMultiplier,Q*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:$,deltaY:Q,event:J})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},uM=(J)=>Math.min(1,1.001-Math.pow(2,-10*J)),dM=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new i3;emitter=new mM;dimensions;virtualScroll;constructor({wrapper:J=window,content:$=document.documentElement,eventsTarget:Q=J,smoothWheel:Z=!0,syncTouch:W=!1,syncTouchLerp:K=0.075,touchInertiaMultiplier:U=35,duration:H,easing:q,lerp:Y=0.1,infinite:G=!1,orientation:X="vertical",gestureOrientation:N="vertical",touchMultiplier:F=1,wheelMultiplier:M=1,autoResize:E=!0,prevent:L,virtualScroll:O,overscroll:z=!0,autoRaf:B=!1,anchors:I=!1,autoToggle:A=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:P=!1}={}){if(window.lenisVersion=l3,!J||J===document.documentElement)J=window;if(typeof H==="number"&&typeof q!=="function")q=uM;else if(typeof q==="function"&&typeof H!=="number")H=1;if(this.options={wrapper:J,content:$,eventsTarget:Q,smoothWheel:Z,syncTouch:W,syncTouchLerp:K,touchInertiaMultiplier:U,duration:H,easing:q,lerp:Y,infinite:G,gestureOrientation:N,orientation:X,touchMultiplier:F,wheelMultiplier:M,autoResize:E,prevent:L,virtualScroll:O,overscroll:z,autoRaf:B,anchors:I,autoToggle:A,allowNestedScroll:C,__experimental__naiveDimensions:P},this.dimensions=new r3(J,$,{autoResize:E}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window)this.options.wrapper.addEventListener("click",this.onClick,!1);if(this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new t3(Q,{touchMultiplier:F,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle)this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0});if(this.options.autoRaf)this.__rafID=requestAnimationFrame(this.raf)}destroy(){if(this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window)this.options.wrapper.removeEventListener("click",this.onClick,!1);if(this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID)cancelAnimationFrame(this.__rafID)}on(J,$){return this.emitter.on(J,$)}off(J,$){return this.emitter.off(J,$)}onScrollEnd=(J)=>{if(!(J instanceof CustomEvent)){if(this.isScrolling==="smooth"||this.isScrolling===!1)J.stopPropagation()}};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=(J)=>{if(J.propertyName.includes("overflow")){let $=this.isHorizontal?"overflow-x":"overflow-y",Q=getComputedStyle(this.rootElement)[$];if(["hidden","clip"].includes(Q))this.stop();else this.start()}};setScroll(J){if(this.isHorizontal)this.options.wrapper.scrollTo({left:J,behavior:"instant"});else this.options.wrapper.scrollTo({top:J,behavior:"instant"})}onClick=(J)=>{let Q=J.composedPath().find((Z)=>Z instanceof HTMLAnchorElement&&(Z.getAttribute("href")?.startsWith("#")||Z.getAttribute("href")?.startsWith("/#")||Z.getAttribute("href")?.startsWith("./#")));if(Q){let Z=Q.getAttribute("href");if(Z){let W=typeof this.options.anchors==="object"&&this.options.anchors?this.options.anchors:void 0,K=`#${Z.split("#")[1]}`;if(["#","/#","./#","#top","/#top","./#top"].includes(Z))K=0;this.scrollTo(K,W)}}};onPointerDown=(J)=>{if(J.button===1)this.reset()};onVirtualScroll=(J)=>{if(typeof this.options.virtualScroll==="function"&&this.options.virtualScroll(J)===!1)return;let{deltaX:$,deltaY:Q,event:Z}=J;if(this.emitter.emit("virtual-scroll",{deltaX:$,deltaY:Q,event:Z}),Z.ctrlKey)return;if(Z.lenisStopPropagation)return;let W=Z.type.includes("touch"),K=Z.type.includes("wheel");this.isTouching=Z.type==="touchstart"||Z.type==="touchmove";let U=$===0&&Q===0;if(this.options.syncTouch&&W&&Z.type==="touchstart"&&U&&!this.isStopped&&!this.isLocked){this.reset();return}let q=this.options.gestureOrientation==="vertical"&&Q===0||this.options.gestureOrientation==="horizontal"&&$===0;if(U||q)return;let Y=Z.composedPath();Y=Y.slice(0,Y.indexOf(this.rootElement));let G=this.options.prevent;if(Y.find((L)=>L instanceof HTMLElement&&(typeof G==="function"&&G?.(L)||L.hasAttribute?.("data-lenis-prevent")||W&&L.hasAttribute?.("data-lenis-prevent-touch")||K&&L.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(L,{deltaX:$,deltaY:Q}))))return;if(this.isStopped||this.isLocked){Z.preventDefault();return}if(!(this.options.syncTouch&&W||this.options.smoothWheel&&K)){this.isScrolling="native",this.animate.stop(),Z.lenisStopPropagation=!0;return}let N=Q;if(this.options.gestureOrientation==="both")N=Math.abs(Q)>Math.abs($)?Q:$;else if(this.options.gestureOrientation==="horizontal")N=$;if(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&Q>0||this.animatedScroll===this.limit&&Q<0))Z.lenisStopPropagation=!0;Z.preventDefault();let F=W&&this.options.syncTouch,E=W&&Z.type==="touchend"&&Math.abs(N)>5;if(E)N=this.velocity*this.options.touchInertiaMultiplier;this.scrollTo(this.targetScroll+N,{programmatic:!1,...F?{lerp:E?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null)clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null;if(this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let J=this.animatedScroll;if(this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-J,this.direction=Math.sign(this.animatedScroll-J),!this.isStopped)this.isScrolling="native";if(this.emit(),this.velocity!==0)this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400)}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(!this.isStopped)return;this.reset(),this.isStopped=!1,this.emit()}stop(){if(this.isStopped)return;this.reset(),this.isStopped=!0,this.emit()}raf=(J)=>{let $=J-(this.time||J);if(this.time=J,this.animate.advance($*0.001),this.options.autoRaf)this.__rafID=requestAnimationFrame(this.raf)};scrollTo(J,{offset:$=0,immediate:Q=!1,lock:Z=!1,duration:W=this.options.duration,easing:K=this.options.easing,lerp:U=this.options.lerp,onStart:H,onComplete:q,force:Y=!1,programmatic:G=!0,userData:X}={}){if((this.isStopped||this.isLocked)&&!Y)return;if(typeof J==="string"&&["top","left","start"].includes(J))J=0;else if(typeof J==="string"&&["bottom","right","end"].includes(J))J=this.limit;else{let N;if(typeof J==="string")N=document.querySelector(J);else if(J instanceof HTMLElement&&J?.nodeType)N=J;if(N){if(this.options.wrapper!==window){let M=this.rootElement.getBoundingClientRect();$-=this.isHorizontal?M.left:M.top}let F=N.getBoundingClientRect();J=(this.isHorizontal?F.left:F.top)+this.animatedScroll}}if(typeof J!=="number")return;if(J+=$,J=Math.round(J),this.options.infinite){if(G){this.targetScroll=this.animatedScroll=this.scroll;let N=J-this.animatedScroll;if(N>this.limit/2)J=J-this.limit;else if(N<-this.limit/2)J=J+this.limit}}else J=pM(0,J,this.limit);if(J===this.targetScroll){H?.(this),q?.(this);return}if(this.userData=X??{},Q){this.animatedScroll=this.targetScroll=J,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),q?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}if(!G)this.targetScroll=J;if(typeof W==="number"&&typeof K!=="function")K=uM;else if(typeof K==="function"&&typeof W!=="number")W=1;this.animate.fromTo(this.animatedScroll,J,{duration:W,easing:K,lerp:U,onStart:()=>{if(Z)this.isLocked=!0;this.isScrolling="smooth",H?.(this)},onUpdate:(N,F)=>{if(this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=N-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=N,this.setScroll(this.scroll),G)this.targetScroll=N;if(!F)this.emit();if(F)this.reset(),this.emit(),q?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent()}})}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(J,{deltaX:$,deltaY:Q}){let Z=Date.now(),W=J._lenis??={},K,U,H,q,Y,G,X,N,F=this.options.gestureOrientation;if(Z-(W.time??0)>2000){W.time=Date.now();let A=window.getComputedStyle(J);W.computedStyle=A;let{overflowX:C,overflowY:P}=A;if(K=["auto","overlay","scroll"].includes(C),U=["auto","overlay","scroll"].includes(P),W.hasOverflowX=K,W.hasOverflowY=U,!K&&!U)return!1;if(F==="vertical"&&!U)return!1;if(F==="horizontal"&&!K)return!1;Y=J.scrollWidth,G=J.scrollHeight,X=J.clientWidth,N=J.clientHeight,H=Y>X,q=G>N,W.isScrollableX=H,W.isScrollableY=q,W.scrollWidth=Y,W.scrollHeight=G,W.clientWidth=X,W.clientHeight=N}else H=W.isScrollableX,q=W.isScrollableY,K=W.hasOverflowX,U=W.hasOverflowY,Y=W.scrollWidth,G=W.scrollHeight,X=W.clientWidth,N=W.clientHeight;if(!K&&!U||!H&&!q)return!1;if(F==="vertical"&&(!U||!q))return!1;if(F==="horizontal"&&(!K||!H))return!1;let M;if(F==="horizontal")M="x";else if(F==="vertical")M="y";else{let A=$!==0,C=Q!==0;if(A&&K&&H)M="x";if(C&&U&&q)M="y"}if(!M)return!1;let E,L,O,z,B;if(M==="x")E=J.scrollLeft,L=Y-X,O=$,z=K,B=H;else if(M==="y")E=J.scrollTop,L=G-N,O=Q,z=U,B=q;else return!1;return(O>0?E<L:E>0)&&z&&B}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){if(this.options.__experimental__naiveDimensions)if(this.isHorizontal)return this.rootElement.scrollWidth-this.rootElement.clientWidth;else return this.rootElement.scrollHeight-this.rootElement.clientHeight;else return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let J=this.options.wrapper;return this.isHorizontal?J.scrollX??J.scrollLeft:J.scrollY??J.scrollTop}get scroll(){return this.options.infinite?n3(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(J){if(this._isScrolling!==J)this._isScrolling=J,this.updateClassName()}get isStopped(){return this._isStopped}set isStopped(J){if(this._isStopped!==J)this._isStopped=J,this.updateClassName()}get isLocked(){return this._isLocked}set isLocked(J){if(this._isLocked!==J)this._isLocked=J,this.updateClassName()}get isSmooth(){return this.isScrolling==="smooth"}get className(){let J="lenis";if(this.options.autoToggle)J+=" lenis-autoToggle";if(this.isStopped)J+=" lenis-stopped";if(this.isLocked)J+=" lenis-locked";if(this.isScrolling)J+=" lenis-scrolling";if(this.isScrolling==="smooth")J+=" lenis-smooth";return J}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function cM(J=null){let $=()=>{let K=document.body.firstElementChild;return K instanceof HTMLElement&&K.classList.contains("w-editor-publish-node")},Q=$(),Z=Q;if(new MutationObserver((K)=>{K.forEach((U)=>{if(U.type==="childList"){let H=$();if(H!==Q){if(J)J(H);Q=H}}})}).observe(document.body,{childList:!0,subtree:!1}),J)J(Z);return Z}var e3={infinite:!1,lerp:0.125,smoothWheel:!0,touchMultiplier:2,smoothTouch:!1};class lM extends dM{#J=d.ticker.add((J)=>this.raf(J*1000));constructor(){super(e3);this.on("scroll",this.#Z.bind(this))}#Z(J){this.notify(J)}toTop(){this.scrollTo(0,{immediate:!0})}#$=[];add(J,$=0,Q=Symbol()){let Z=this.#$.findIndex((W)=>W.priority>$);if(Z===-1)this.#$.push({fn:J,priority:$,id:Q});else this.#$.splice(Z,0,{fn:J,priority:$,id:Q});return()=>this.remove(Q)}remove(J){this.#$=this.#$.filter(($)=>$.id!==J)}notify(J){if(this.#$.length<1)return;this.#$.forEach(($)=>$.fn(J))}}var G$=new lM;cM((J)=>{if(J)G$.destroy();else G$.start()});var oM=(J)=>{let $=J.getBoundingClientRect();return{top:$.top+G$.scroll,bottom:$.bottom+G$.scroll,width:$.width,height:$.height,left:$.left,right:$.right,wh:yQ.height,ww:yQ.width,offset:$.top+G$.scroll,centery:yQ.height/2-$.height/2-$.top-G$.scroll,centerx:-yQ.width/2+$.left+$.width/2}};var JP={bounds:[0,1],top:"bottom",bottom:"top",callback:void 0};class cK extends fZ{value=0;init=!1;bounds;config;resize;handleScroll;track;#J;#Z;constructor(J,$={}){super(J,{autoStart:!0,once:!1,threshold:0});this.element=J,this.config={...JP,...$},this.#$(),this.#J=G$.add(this.#Q.bind(this)),this.#Z=yQ.add(this.#$.bind(this)),this.init=!0,this.#Q()}#$=()=>{this.bounds=$P(this.element,this.config),this.resize?.(this.bounds),this.#Q()};#Q(){if(!this.init)return;this.value=jE(0,1,SE(G$.scroll,this.bounds.top,this.bounds.bottom,this.config.bounds[0],this.config.bounds[1])),this.handleScroll?.(this.value),this.track?.(this.value),this.config.callback?.(this.value)}destroy(){this.config.callback=void 0,this.#J(),this.#Z(),super.destroy()}}function $P(J,$){let Q=oM(J),{top:Z,bottom:W,wh:K}=Q,U=K/2;return Q.top=Z-($.top==="center"?U:$.top==="bottom"?K:0),Q.bottom=W-($.bottom==="center"?U:$.bottom==="bottom"?K:0),Q}$$.registerPlugin(O8,a$,m8);$$.registerPlugin(O8);class sM{constructor(){this.init()}init(){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>this.waitForWebflowContent());else this.waitForWebflowContent()}waitForWebflowContent(){if(!document.querySelector(".svg-number"))return;setTimeout(()=>{this.findAndAnimateLines()},500)}findAndAnimateLines(){let J=document.querySelectorAll(".iyo-line-1, .iyo-line-2, .iyo-line-3, .iyo-line-4, .iyo-line-5, .iyo-line-6, .iyo-line-7");if(J.length===0)return;this.animateExistingLines(J)}animateExistingLines(J){let $=[{clockwise:!0,speed:0.49},{clockwise:!1,speed:0.392},{clockwise:!0,speed:0.294},{clockwise:!1,speed:0.196},{clockwise:!0,speed:0.147},{clockwise:!1,speed:0.098},{clockwise:!0,speed:0.049}];J.forEach((Q,Z)=>{if(Z<$.length)this.animateElement(Q,$[Z],Z+1)})}animateElement(J,$,Q){let W=6/$.speed,K=$.clockwise?360:-360;$$.set(J,{transformOrigin:"center center"}),$$.to(J,{rotation:K,duration:W,ease:"none",repeat:-1})}toggleAnimations(){if($$.globalTimeline.paused())$$.globalTimeline.resume();else $$.globalTimeline.pause()}destroy(){$$.killTweensOf("*")}}var jx=new sM;function pJ(){if(!(this instanceof pJ))return new pJ;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var XW=window.document.documentElement,QP=XW.matches||XW.webkitMatchesSelector||XW.mozMatchesSelector||XW.oMatchesSelector||XW.msMatchesSelector;pJ.prototype.matchesSelector=function(J,$){return QP.call(J,$)};pJ.prototype.querySelectorAll=function(J,$){return $.querySelectorAll(J)};pJ.prototype.indexes=[];var ZP=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;pJ.prototype.indexes.push({name:"ID",selector:function J($){var Q;if(Q=$.match(ZP))return Q[0].slice(1)},element:function J($){if($.id)return[$.id]}});var WP=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;pJ.prototype.indexes.push({name:"CLASS",selector:function J($){var Q;if(Q=$.match(WP))return Q[0].slice(1)},element:function J($){var Q=$.className;if(Q){if(typeof Q==="string")return Q.split(/\s/);else if(typeof Q==="object"&&"baseVal"in Q)return Q.baseVal.split(/\s/)}}});var KP=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;pJ.prototype.indexes.push({name:"TAG",selector:function J($){var Q;if(Q=$.match(KP))return Q[0].toUpperCase()},element:function J($){return[$.nodeName.toUpperCase()]}});pJ.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var x5;if(typeof window.Map==="function")x5=window.Map;else x5=function(){function J(){this.map={}}return J.prototype.get=function($){return this.map[$+" "]},J.prototype.set=function($,Q){this.map[$+" "]=Q},J}();var nM=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function iM(J,$){J=J.slice(0).concat(J.default);var Q=J.length,Z,W,K,U,H=$,q,Y,G=[];do if(nM.exec(""),K=nM.exec(H)){if(H=K[3],K[2]||!H){for(Z=0;Z<Q;Z++)if(Y=J[Z],q=Y.selector(K[1])){W=G.length,U=!1;while(W--)if(G[W].index===Y&&G[W].key===q){U=!0;break}if(!U)G.push({index:Y,key:q});break}}}while(K);return G}function UP(J,$){var Q,Z,W;for(Q=0,Z=J.length;Q<Z;Q++)if(W=J[Q],$.isPrototypeOf(W))return W}pJ.prototype.logDefaultIndexUsed=function(){};pJ.prototype.add=function(J,$){var Q,Z,W,K,U,H,q,Y,G=this.activeIndexes,X=this.selectors,N=this.selectorObjects;if(typeof J!=="string")return;Q={id:this.uid++,selector:J,data:$},N[Q.id]=Q,q=iM(this.indexes,J);for(Z=0;Z<q.length;Z++){if(Y=q[Z],K=Y.key,W=Y.index,U=UP(G,W),!U)U=Object.create(W),U.map=new x5,G.push(U);if(W===this.indexes.default)this.logDefaultIndexUsed(Q);if(H=U.map.get(K),!H)H=[],U.map.set(K,H);H.push(Q)}this.size++,X.push(J)};pJ.prototype.remove=function(J,$){if(typeof J!=="string")return;var Q,Z,W,K,U,H,q,Y,G=this.activeIndexes,X=this.selectors=[],N=this.selectorObjects,F={},M=arguments.length===1;Q=iM(this.indexes,J);for(W=0;W<Q.length;W++){Z=Q[W],K=G.length;while(K--)if(H=G[K],Z.index.isPrototypeOf(H)){if(q=H.map.get(Z.key),q){U=q.length;while(U--)if(Y=q[U],Y.selector===J&&(M||Y.data===$))q.splice(U,1),F[Y.id]=!0}break}}for(W in F)delete N[W],this.size--;for(W in N)X.push(N[W].selector)};function aM(J,$){return J.id-$.id}pJ.prototype.queryAll=function(J){if(!this.selectors.length)return[];var $={},Q=[],Z=this.querySelectorAll(this.selectors.join(", "),J),W,K,U,H,q,Y,G,X;for(W=0,U=Z.length;W<U;W++){q=Z[W],Y=this.matches(q);for(K=0,H=Y.length;K<H;K++){if(X=Y[K],!$[X.id])G={id:X.id,selector:X.selector,data:X.data,elements:[]},$[X.id]=G,Q.push(G);else G=$[X.id];G.elements.push(q)}}return Q.sort(aM)};pJ.prototype.matches=function(J){if(!J)return[];var $,Q,Z,W,K,U,H,q,Y,G,X,N=this.activeIndexes,F={},M=[];for($=0,W=N.length;$<W;$++)if(H=N[$],q=H.element(J),q){for(Q=0,K=q.length;Q<K;Q++)if(Y=H.map.get(q[Q])){for(Z=0,U=Y.length;Z<U;Z++)if(G=Y[Z],X=G.id,!F[X]&&this.matchesSelector(J,G.selector))F[X]=!0,M.push(G)}}return M.sort(aM)};var k9={},eQ={},vK=["mouseenter","mouseleave","pointerenter","pointerleave","blur","focus"];function y5(J){if(eQ[J]===void 0)eQ[J]=new Set}function tM(J,$){if(eQ[J])eQ[J].forEach((Q)=>{Q(...$)})}function b5(J){return typeof J==="string"?document.querySelectorAll(J):J}function NW(J){let $=HP(k9[J.type],J.target);if($.length)for(let Q=0;Q<$.length;Q++)for(let Z=0;Z<$[Q].stack.length;Z++)if(vK.indexOf(J.type)!==-1){if(rM(J,$[Q].delegatedTarget),J.target===$[Q].delegatedTarget)$[Q].stack[Z].data(J)}else rM(J,$[Q].delegatedTarget),$[Q].stack[Z].data(J)}function HP(J,$){let Q=[],Z=$;do{if(Z.nodeType!==1)break;let W=J.matches(Z);if(W.length)Q.push({delegatedTarget:Z,stack:W})}while(Z=Z.parentElement);return Q}function rM(J,$){Object.defineProperty(J,"currentTarget",{configurable:!0,enumerable:!0,get:()=>$})}function eM(J){let $={};for(let Q in J)$[Q]=[...J[Q]];return $}class JO{bindAll(J,$){if(!$)$=Object.getOwnPropertyNames(Object.getPrototypeOf(J));for(let Q=0;Q<$.length;Q++)J[$[Q]]=J[$[Q]].bind(J)}on(J,$,Q,Z){let W=J.split(" ");for(let K=0;K<W.length;K++){if(typeof $==="function"&&Q===void 0){y5(W[K]),eQ[W[K]].add($);continue}if($.nodeType&&$.nodeType===1||$===window||$===document){$.addEventListener(W[K],Q,Z);continue}$=b5($);for(let U=0;U<$.length;U++)$[U].addEventListener(W[K],Q,Z)}}delegate(J,$,Q){let Z=J.split(" ");for(let W=0;W<Z.length;W++){let K=k9[Z[W]];if(K===void 0)if(K=new pJ,k9[Z[W]]=K,vK.indexOf(Z[W])!==-1)document.addEventListener(Z[W],NW,!0);else document.addEventListener(Z[W],NW);K.add($,Q)}}off(J,$,Q,Z){let W=J.split(" ");for(let K=0;K<W.length;K++){if($===void 0){eQ[W[K]]?.clear();continue}if(typeof $==="function"){y5(W[K]),eQ[W[K]].delete($);continue}let U=k9[W[K]];if(U!==void 0){if(U.remove($,Q),U.size===0){if(delete k9[W[K]],vK.indexOf(W[K])!==-1)document.removeEventListener(W[K],NW,!0);else document.removeEventListener(W[K],NW);continue}}if($.removeEventListener!==void 0){$.removeEventListener(W[K],Q,Z);continue}$=b5($);for(let H=0;H<$.length;H++)$[H].removeEventListener(W[K],Q,Z)}}emit(J,...$){tM(J,$)}debugDelegated(){return JSON.parse(JSON.stringify(k9))}debugBus(){return eM(eQ)}hasBus(J){return this.debugBus().hasOwnProperty(J)}}var qP=new JO,J6=qP;var YP=new DOMParser;function $O(J){return typeof J==="string"?YP.parseFromString(J,"text/html"):J}function kQ(J){let $=new URL(J,window.location.origin),Q=$.hash.length?J.replace($.hash,""):null;return{hasHash:$.hash.length>0,pathname:$.pathname.replace(/\/+$/,""),host:$.host,search:$.search,raw:J,href:Q||$.href}}function v5(J,$){J.parentNode.replaceChild(QO(J,$),J)}function h5(J,$){(J.parentNode.tagName==="HEAD"?document.head:document.body).appendChild(QO(J,$))}function QO(J,$){let Q=document.createElement($);for(let Z=0;Z<J.attributes.length;Z++){let W=J.attributes[Z];Q.setAttribute(W.nodeName,W.nodeValue)}if(J.innerHTML)Q.innerHTML=J.innerHTML;return Q}class $6{constructor({wrapper:J}){this.wrapper=J}leave(J){return new Promise(($)=>{this.onLeave({...J,done:$})})}enter(J){return new Promise(($)=>{this.onEnter({...J,done:$})})}onLeave({from:J,trigger:$,done:Q}){Q()}onEnter({to:J,trigger:$,done:Q}){Q()}}class bZ{constructor({content:J,page:$,title:Q,wrapper:Z}){this._contentString=J.outerHTML,this._DOM=null,this.page=$,this.title=Q,this.wrapper=Z,this.content=this.wrapper.lastElementChild}onEnter(){}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){}initialLoad(){this.onEnter(),this.onEnterCompleted()}update(){document.title=this.title,this.wrapper.appendChild(this._DOM.firstElementChild),this.content=this.wrapper.lastElementChild,this._DOM=null}createDom(){if(!this._DOM)this._DOM=document.createElement("div"),this._DOM.innerHTML=this._contentString}remove(){this.wrapper.firstElementChild.remove()}enter(J,$){return new Promise((Q)=>{this.onEnter(),J.enter({trigger:$,to:this.content}).then(()=>{this.onEnterCompleted(),Q()})})}leave(J,$,Q){return new Promise((Z)=>{this.onLeave(),J.leave({trigger:$,from:this.content}).then(()=>{if(Q)this.remove();this.onLeaveCompleted(),Z()})})}}class hK{data=new Map;regexCache=new Map;add(J,$,Q){if(!this.data.has(J))this.data.set(J,new Map),this.regexCache.set(J,new RegExp(`^${J}$`));this.data.get(J).set($,Q),this.regexCache.set($,new RegExp(`^${$}$`))}findMatch(J,$){for(let[Q,Z]of this.data)if(J.pathname.match(this.regexCache.get(Q))){for(let[W,K]of Z)if($.pathname.match(this.regexCache.get(W)))return K;break}return null}}var ZO="A transition is currently in progress";class FW{isTransitioning=!1;currentCacheEntry=null;cache=new Map;activePromises=new Map;constructor(J={}){let{links:$="a[href]:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:Q=!0,allowInterruption:Z=!1,bypassCache:W=!1,enablePrefetch:K=!0,renderers:U={default:bZ},transitions:H={default:$6},reloadJsFilter:q=(G)=>G.dataset.taxiReload!==void 0,reloadCssFilter:Y=(G)=>!0}=J;this.renderers=U,this.transitions=H,this.defaultRenderer=this.renderers.default||bZ,this.defaultTransition=this.transitions.default||$6,this.wrapper=document.querySelector("[data-taxi]"),this.reloadJsFilter=q,this.reloadCssFilter=Y,this.removeOldContent=Q,this.allowInterruption=Z,this.bypassCache=W,this.enablePrefetch=K,this.cache=new Map,this.isPopping=!1,this.attachEvents($),this.currentLocation=kQ(window.location.href),this.cache.set(this.currentLocation.href,this.createCacheEntry(document.cloneNode(!0),window.location.href)),this.currentCacheEntry=this.cache.get(this.currentLocation.href),this.currentCacheEntry.renderer.initialLoad()}setDefaultRenderer(J){this.defaultRenderer=this.renderers[J]}setDefaultTransition(J){this.defaultTransition=this.transitions[J]}addRoute(J,$,Q){if(!this.router)this.router=new hK;this.router.add(J,$,Q)}preload(J,$=!1){if(J=kQ(J).href,!this.cache.has(J))return this.fetch(J,!1).then(async(Q)=>{if(this.cache.set(J,this.createCacheEntry(Q.html,Q.url)),$)this.cache.get(J).renderer.createDom()}).catch((Q)=>console.warn(Q));return Promise.resolve()}updateCache(J){let $=kQ(J||window.location.href).href;if(this.cache.has($))this.cache.delete($);this.cache.set($,this.createCacheEntry(document.cloneNode(!0),$))}clearCache(J){let $=kQ(J||window.location.href).href;if(this.cache.has($))this.cache.delete($)}navigateTo(J,$=!1,Q=!1){return new Promise((Z,W)=>{if(!this.allowInterruption&&this.isTransitioning){W(new Error(ZO));return}this.isTransitioning=!0,this.isPopping=!0,this.targetLocation=kQ(J),this.popTarget=window.location.href;let K=new(this.chooseTransition($))({wrapper:this.wrapper}),U;if(this.bypassCache||!this.cache.has(this.targetLocation.href)||this.cache.get(this.targetLocation.href).skipCache){let H=this.fetch(this.targetLocation.href).then((q)=>{this.cache.set(this.targetLocation.href,this.createCacheEntry(q.html,q.url)),this.cache.get(this.targetLocation.href).renderer.createDom()}).catch((q)=>{window.location.href=J});U=this.beforeFetch(this.targetLocation,K,Q).then(async()=>{return H.then(async()=>{return await this.afterFetch(this.targetLocation,K,this.cache.get(this.targetLocation.href),Q)})})}else this.cache.get(this.targetLocation.href).renderer.createDom(),U=this.beforeFetch(this.targetLocation,K,Q).then(async()=>{return await this.afterFetch(this.targetLocation,K,this.cache.get(this.targetLocation.href),Q)});U.then(()=>{Z()})})}on(J,$){J6.on(J,$)}off(J,$){J6.off(J,$)}beforeFetch(J,$,Q){return J6.emit("NAVIGATE_OUT",{from:this.currentCacheEntry,trigger:Q}),new Promise((Z)=>{this.currentCacheEntry.renderer.leave($,Q,this.removeOldContent).then(()=>{if(Q!=="popstate")window.history.pushState({},"",J.raw);Z()})})}afterFetch(J,$,Q,Z){return this.currentLocation=J,this.popTarget=this.currentLocation.href,new Promise((W)=>{if(Q.renderer.update(),J6.emit("NAVIGATE_IN",{from:this.currentCacheEntry,to:Q,trigger:Z}),this.reloadJsFilter)this.loadScripts(Q.scripts);if(this.reloadCssFilter)this.loadStyles(Q.styles);if(Z!=="popstate"&&J.href!==Q.finalUrl)window.history.replaceState({},"",Q.finalUrl);Q.renderer.enter($,Z).then(()=>{J6.emit("NAVIGATE_END",{from:this.currentCacheEntry,to:Q,trigger:Z}),this.currentCacheEntry=Q,this.isTransitioning=!1,this.isPopping=!1,W()})})}loadScripts(J){let $=[...J],Q=Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);for(let Z=0;Z<Q.length;Z++)for(let W=0;W<$.length;W++)if(Q[Z].outerHTML===$[W].outerHTML){v5(Q[Z],"SCRIPT"),$.splice(W,1);break}for(let Z of $)h5(Z,"SCRIPT")}loadStyles(J){let $=Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter),Q=Array.from(document.querySelectorAll("style")).filter(this.reloadCssFilter),Z=J.filter((W)=>{if(!W.href)return!0;else if(!$.find((K)=>K.href===W.href))return document.body.append(W),!1});for(let W=0;W<Q.length;W++)for(let K=0;K<Z.length;K++)if(Q[W].outerHTML===Z[K].outerHTML){v5(Q[W],"STYLE"),Z.splice(K,1);break}for(let W of Z)h5(W,"STYLE")}attachEvents(J){if(J6.delegate("click",J,this.onClick),J6.on("popstate",window,this.onPopstate),this.enablePrefetch)J6.delegate("mouseenter focus",J,this.onPrefetch)}onClick=(J)=>{if(!(J.metaKey||J.ctrlKey)){let $=kQ(J.currentTarget.href);if(this.currentLocation=kQ(window.location.href),this.currentLocation.host!==$.host)return;if(this.currentLocation.href!==$.href||this.currentLocation.hasHash&&!$.hasHash){J.preventDefault(),this.navigateTo($.raw,J.currentTarget.dataset.transition||!1,J.currentTarget).catch((Q)=>console.warn(Q));return}if(!this.currentLocation.hasHash&&!$.hasHash)J.preventDefault()}};onPopstate=()=>{let J=kQ(window.location.href);if(J.pathname===this.currentLocation.pathname&&J.search===this.currentLocation.search&&!this.isPopping)return!1;if(!this.allowInterruption&&(this.isTransitioning||this.isPopping))return window.history.pushState({},"",this.popTarget),console.warn(ZO),!1;if(!this.isPopping)this.popTarget=window.location.href;this.isPopping=!0,this.navigateTo(window.location.href,!1,"popstate")};onPrefetch=(J)=>{let $=kQ(J.currentTarget.href);if(this.currentLocation.host!==$.host)return;this.preload(J.currentTarget.href,!1)};fetch(J,$=!0){if(this.activePromises.has(J))return this.activePromises.get(J);let Q=new Promise((Z,W)=>{let K;fetch(J,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Taxi"},credentials:"same-origin"}).then((U)=>{if(!U.ok){if(W("Taxi encountered a non 2xx HTTP status code"),$)window.location.href=J}return K=U.url,U.text()}).then((U)=>{Z({html:$O(U),url:K})}).catch((U)=>{if(W(U),$)window.location.href=J}).finally(()=>{this.activePromises.delete(J)})});return this.activePromises.set(J,Q),Q}chooseTransition(J){if(J)return this.transitions[J];let $=this.router?.findMatch(this.currentLocation,this.targetLocation);if($)return this.transitions[$];return this.defaultTransition}createCacheEntry(J,$){let Q=J.querySelector("[data-taxi-view]"),Z=Q.dataset.taxiView.length?this.renderers[Q.dataset.taxiView]:this.defaultRenderer;if(!Z)console.warn(`The Renderer "${Q.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`);return{page:J,content:Q,finalUrl:$,skipCache:Q.hasAttribute("data-taxi-nocache"),scripts:this.reloadJsFilter?Array.from(J.querySelectorAll("script")).filter(this.reloadJsFilter):[],styles:this.reloadCssFilter?Array.from(J.querySelectorAll('link[rel="stylesheet"], style')).filter(this.reloadCssFilter):[],title:J.title,renderer:new Z({wrapper:this.wrapper,title:J.title,content:Q,page:J})}}}class f5 extends $6{async onLeave({from:J,trigger:$,done:Q}){await yZ.pages.transitionOut({from:J,trigger:$}),Q()}async onEnter({to:J,trigger:$,done:Q}){await yZ.pages.transitionIn({to:J,trigger:$}),Q()}}function WO(J=typeof window!=="undefined"?window.Webflow:null){if(!J)return Promise.resolve(!1);let $=()=>{let Z=document.documentElement;if(!Z.getAttribute("data-wf-page")){let W=document.querySelector("[data-wf-page]");if(W)Z.setAttribute("data-wf-page",W.getAttribute("data-wf-page")||"")}},Q=(Z,W)=>{try{let K=J.require&&J.require(Z);if(K&&typeof K[W]==="function")K[W]()}catch(K){}};$();try{J.destroy&&J.destroy()}catch(Z){}return new Promise((Z)=>{requestAnimationFrame(()=>{try{J.ready&&J.ready()}catch(W){}Q("ix2","init"),Q("forms","redo"),["tabs","dropdown","slider","lightbox","navbar","ix","images"].forEach((W)=>Q(W,"init")),Z(!0)})})}var GP={links:"a:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:!0,allowInterruption:!1,bypassCache:!1,preload:!0};class KO extends FW{constructor(){super({...GP,transitions:{default:f5}});if(window.location.pathname.includes("products"))document.body.style.backgroundColor="#dddee3";else document.body.style.backgroundColor="#101010"}async transitionOut({from:J,trigger:$}){F0.TRANSITIONING=!0;let Q=$ instanceof HTMLElement&&$.href?$.href:null;if(Q){let Z=new URL(Q,window.location.origin).pathname,W=Z.includes("products");if(!document.querySelector("[data-navigation-status]")){console.warn("[Pages] Missing nav shell, forcing hard navigation",{from:window.location.pathname,to:Z}),window.location.assign(Q);return}if(W)document.body.style.backgroundColor="#dddee3";else document.body.style.backgroundColor="#101010"}await Promise.allSettled([await m5(),await d.to("[data-taxi]",{duration:0.15,autoAlpha:0})]),u5(),F0.WEBGL_CAP_COLOR=0,F0.ECOMM_3D_VISIBLE=!1,G$.toTop()}async transitionIn({to:J,trigger:$,destination:Q}){F0.TRANSITIONING=!1,bK();let Z=Q?new URL(Q,window.location.origin).pathname:window.location.pathname;if(Z.includes("products"))document.body.style.backgroundColor="#dddee3";else document.body.style.backgroundColor="#101010";await c5(Z),window.Shopyflow.fetchNew(),await Promise.allSettled([await EW(),await d.to("[data-taxi]",{duration:0.2,autoAlpha:1,delay:0.1})]),F0.READY=!0,LW(),await WO(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{G$.resize()})})}}var UO=new KO;F0.READY=!1;history.scrollRestoration="manual";console.warn=()=>{};console.error=()=>{};class HO{pages=UO;scroll=G$;isMobile=lX();constructor(){bK(),EW(),LW(),d.to(document.body,{duration:0.001,autoAlpha:1,onComplete:()=>{F0.READY=!0}})}}var yZ=new HO;(()=>{setTimeout(()=>{console.log("%c%s","font-size:10px; color:#fff; background:#000; padding: 10px 10px; margin: 20px 0px;","\uD83E\uDD0C https://matteodonini.com \uD83D\uDC40 https://federic.ooo")},1000)})();})();

//# debugId=D6B65FB46FBB099964756E2164756E21
