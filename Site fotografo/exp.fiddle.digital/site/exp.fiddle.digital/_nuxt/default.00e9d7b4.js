var Pt=Object.defineProperty;var At=(o,t,e)=>t in o?Pt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var y=(o,t,e)=>(At(o,typeof t!="symbol"?t+"":t,e),e);import{r as I,bx as It,by as $t,bz as ct,aE as ae,u as Ae,B as _,bA as jt,bB as Ot,_ as Ie,k,l as L,bC as vt,d as Me,c as ie,o as we,b as Pe,bD as pe,m as D,bE as K,q as V,v as te,H as R,x as it,y as nt,bF as st,a as We,b9 as bt,aU as Dt,E as he,A as Se,s as Ke,bG as Ht,T as Qt,bH as Nt,t as Xe,bI as ut,F as ot,I as yt,bJ as Rt,bK as Bt,bL as Ve,aF as Ft,bM as Gt,bN as qt,bO as Wt,bP as Kt,j as Zt,bQ as Yt,bR as Jt,bS as zt,bT as Ut,bU as Xt,bV as Vt}from"./entry.a59f3271.js";import{_ as lt}from"./BaseIcon.vue.ce7e0302.js";import{H as mt,g as le,E as wt,a as Le,b as Mt,c as ge,d as Ct,u as ea,e as Be,f as ta,h as aa,i as ia,_ as na,j as sa}from"./useExperimentModal.48bf76bf.js";import{a as re}from"./useExpModalPortal.bf42328c.js";import{u as ye}from"./responsive.72845246.js";import{_ as xt}from"./GridRow.f636faf4.js";import{_ as oa}from"./BaseVideo.vue.b7137200.js";import"./BaseImage.e3a66aeb.js";import"./GLTFLoader.747aaa4b.js";import"./glitchShaders.9e48c149.js";const la=()=>null;function ra(...o){const t=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(t);let[e,n,a={}]=o;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??la,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const i=Ae(),r=()=>i.isHydrating?i.payload.data[e]:i.static.data[e],d=()=>r()!==void 0;(!i._asyncData[e]||!a.immediate)&&(i._asyncData[e]={data:I(r()??a.default()),pending:I(!d()),error:It(i.payload._errors,e),status:I("idle")});const l={...i._asyncData[e]};l.refresh=l.execute=(f={})=>{if(i._asyncDataPromises[e]){if(f.dedupe===!1)return i._asyncDataPromises[e];i._asyncDataPromises[e].cancelled=!0}if((f._initial||i.isHydrating&&f._initial!==!1)&&d())return r();l.pending.value=!0,l.status.value="pending";const S=new Promise((g,m)=>{try{g(n(i))}catch(M){m(M)}}).then(g=>{if(S.cancelled)return i._asyncDataPromises[e];let m=g;a.transform&&(m=a.transform(g)),a.pick&&(m=da(m,a.pick)),l.data.value=m,l.error.value=null,l.status.value="success"}).catch(g=>{if(S.cancelled)return i._asyncDataPromises[e];l.error.value=g,l.data.value=_(a.default()),l.status.value="error"}).finally(()=>{S.cancelled||(l.pending.value=!1,i.payload.data[e]=l.data.value,l.error.value&&(i.payload._errors[e]=jt(l.error.value)),delete i._asyncDataPromises[e])});return i._asyncDataPromises[e]=S,i._asyncDataPromises[e]};const c=()=>l.refresh({_initial:!0}),C=a.server!==!1&&i.payload.serverRendered;{const f=Ot();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const g=f._nuxtOnBeforeMountCbs;f&&($t(()=>{g.forEach(m=>{m()}),g.splice(0,g.length)}),ct(()=>g.splice(0,g.length)))}C&&i.isHydrating&&d()?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):f&&(i.payload.serverRendered&&i.isHydrating||a.lazy)&&a.immediate?f._nuxtOnBeforeMountCbs.push(c):a.immediate&&c(),a.watch&&ae(a.watch,()=>l.refresh());const S=i.hook("app:data:refresh",g=>{if(!g||g.includes(e))return l.refresh()});f&&ct(S)}const A=Promise.resolve(i._asyncDataPromises[e]).then(()=>l);return Object.assign(A,l),A}function da(o,t){const e={};for(const n of t)e[n]=o[n];return e}const ca={},ua={class:"vault"},ma={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{display:"none"}},pa=vt('<symbol id="icon-2_none" viewBox="0 0 2 2"></symbol><symbol id="logo" viewBox="0 0 38 48"><path d="M14.632,32L0,32L-0,31L15.086,31C14.489,30.574 13.964,30.054 13.533,29.46C13.443,29.487 13.348,29.501 13.25,29.501C12.698,29.501 12.25,29.053 12.25,28.5C12.25,28.185 12.396,27.903 12.624,27.72C12.382,27.025 12.25,26.278 12.25,25.5C12.25,21.94 15.006,19.024 18.5,18.768L18.5,-0L19.5,0L19.5,18.768C22.994,19.024 25.75,21.94 25.75,25.5C25.75,26.278 25.618,27.025 25.376,27.72C25.604,27.903 25.75,28.185 25.75,28.5C25.75,29.053 25.302,29.501 24.75,29.501C24.652,29.501 24.557,29.487 24.467,29.46C24.036,30.054 23.511,30.574 22.914,31L38,31L38,32L23.368,32C24.241,32.546 25.005,33.251 25.619,34.074C25.736,34.026 25.865,33.999 26,33.999C26.552,33.999 27,34.447 27,35C27,35.325 26.845,35.614 26.605,35.797C27.02,36.782 27.25,37.864 27.25,39C27.25,43.388 23.824,46.977 19.5,47.235L19.5,48L18.5,48L18.5,47.235C14.176,46.977 10.75,43.388 10.75,39C10.75,37.864 10.98,36.782 11.395,35.797C11.155,35.614 11,35.325 11,35C11,34.447 11.448,33.999 12,33.999C12.135,33.999 12.264,34.026 12.381,34.074C12.995,33.251 13.759,32.546 14.632,32ZM18.5,20.273C15.835,20.525 13.75,22.769 13.75,25.5C13.75,28.231 15.835,30.475 18.5,30.727L18.5,20.273ZM19.5,30.727C22.165,30.475 24.25,28.231 24.25,25.5C24.25,22.769 22.165,20.525 19.5,20.273L19.5,30.727ZM19.5,45.732C22.994,45.476 25.75,42.56 25.75,39C25.75,35.44 22.994,32.524 19.5,32.268L19.5,45.732ZM18.5,32.268C15.006,32.524 12.25,35.44 12.25,39C12.25,42.56 15.006,45.476 18.5,45.732L18.5,32.268ZM22,3.002C21.172,3.002 20.5,2.33 20.5,1.501C20.5,0.672 21.172,0 22,0C22.828,0 23.5,0.672 23.5,1.501C23.5,2.33 22.828,3.002 22,3.002ZM16.5,5.501C15.948,5.501 15.5,5.053 15.5,4.5C15.5,3.947 15.948,3.499 16.5,3.499C17.052,3.499 17.5,3.947 17.5,4.5C17.5,5.053 17.052,5.501 16.5,5.501Z"></path></symbol><symbol id="icon-20_blank" viewBox="0 0 20 20"><path d="M17.25,6.811L9.308,14.753C7.559,16.501 4.627,16.109 3.4,13.962L1.349,10.372L2.651,9.628L4.702,13.218C5.439,14.506 7.198,14.741 8.247,13.692L16.189,5.75L9,5.75L9,4.25L18,4.25L18.75,5L18.75,14L17.25,14L17.25,6.811Z"></path></symbol><symbol id="icon-20_close" viewBox="0 0 20 20"><path d="M8.939,10L2.47,3.53L3.53,2.47L10,8.939L16.47,2.47L17.53,3.53L11.061,10L17.53,16.47L16.47,17.53L10,11.061L3.53,17.53L2.47,16.47L8.939,10Z"></path></symbol><symbol id="icon-20_sound-off" viewBox="0 0 20 20"><path d="M11.75,4.23L11.75,15.77C11.75,17.878 9.471,19.198 7.639,18.156C3.321,15.7 1.25,12.935 1.25,10C1.25,7.065 3.321,4.3 7.639,1.844C9.471,0.802 11.75,2.122 11.75,4.23ZM10.25,4.23C10.25,3.272 9.213,2.675 8.38,3.148C4.684,5.25 2.75,7.487 2.75,10C2.75,12.513 4.684,14.75 8.38,16.852C9.213,17.325 10.25,16.728 10.25,15.77L10.25,4.23Z"></path></symbol><symbol id="icon-20_sound-on" viewBox="0 0 20 20"><path d="M11.75,4.23L11.75,15.77C11.75,17.878 9.471,19.198 7.639,18.156C3.321,15.7 1.25,12.935 1.25,10C1.25,7.065 3.321,4.3 7.639,1.844C9.471,0.802 11.75,2.122 11.75,4.23ZM10.25,4.23C10.25,3.272 9.213,2.675 8.38,3.148C4.684,5.25 2.75,7.487 2.75,10C2.75,12.513 4.684,14.75 8.38,16.852C9.213,17.325 10.25,16.728 10.25,15.77L10.25,4.23ZM16.187,16.187L15.127,15.127C16.439,13.815 17.25,12.002 17.25,10C17.25,7.998 16.439,6.185 15.127,4.873L16.187,3.813C17.771,5.396 18.75,7.584 18.75,10C18.75,12.416 17.771,14.604 16.187,16.187Z"></path></symbol><symbol id="icon-64_awwwards" viewBox="0 0 64 64"><path d="M40.6,20.3l-4.2,16.3-4-16.3h-5.4l-4,16.3-4.2-16.3h-5.8l7.5,23.7h5.1l4.1-15.3,4.1,15.3h5.1l7.5-23.7h-5.8,0ZM50.2,40.3c0,2.3,1.7,4,3.9,4s3.9-1.7,3.9-4-1.7-4-3.9-4-3.9,1.7-3.9,4h0Z"></path></symbol><symbol id="icon-64_awwwards" viewBox="0 0 64 64"><path d="M40.6,20.3l-4.2,16.3-4-16.3h-5.4l-4,16.3-4.2-16.3h-5.8l7.5,23.7h5.1l4.1-15.3,4.1,15.3h5.1l7.5-23.7h-5.8,0ZM50.2,40.3c0,2.3,1.7,4,3.9,4s3.9-1.7,3.9-4-1.7-4-3.9-4-3.9,1.7-3.9,4h0Z"></path></symbol><symbol id="icon-64_cssda" viewBox="0 0 64 64"><path d="M33.1,22.2l5,4.9,5,5,5,4.9-5,5-5,4.9h-10l10-9.9-9.9-9.9,4.9-4.9ZM35.9,17.3l-10,9.9,10,9.9-5,4.9-10-9.7-5-5,10-9.9h10Z"></path></symbol><symbol id="icon-64_orpetron" viewBox="0 0 64 64"><path d="M47.9,48v-11.7l-11.7,11.7h11.7ZM45.8,45.8h-4.6l4.6-4.6v4.6ZM15.9,16v11.7l11.7-11.7h-11.7ZM18.1,18.2h4.6l-4.6,4.6v-4.6ZM35.4,27v-8.9h-4.1v8.7h-.3c-.4.1-.9.3-1.3.5l-.6.3v-11.6h8.2l4.6,4.6-1.6,1.6-2.7-2.7v5.5l-2.2,2.2ZM47.9,26.6v8.2h-11.6l.3-.6c.2-.4.3-.8.4-1.3v-.3h8.8v-4.1h-8.9l2.2-2.2h5.5l-2.7-2.7,1.6-1.6,4.6,4.6ZM34.2,36.6l.6-.3v11.6h-8.2l-4.6-4.6,1.6-1.6,2.7,2.7v-5.5l2.2-2.2v8.9h4.1v-8.7h.3c.4-.1.9-.3,1.3-.5ZM22.1,40.3l-1.6,1.6-4.6-4.6v-8.2h11.6l-.3.6c-.2.4-.3.8-.4,1.3v.3h-8.8v4.1h8.9l-2.2,2.2h-5.5l2.7,2.7ZM35.1,32c0,1.7-1.4,3.2-3.2,3.2-1.7,0-3.2-1.4-3.2-3.2,0-1.7,1.4-3.2,3.2-3.2,1.7,0,3.2,1.4,3.2,3.2Z"></path></symbol>',10),ha=[pa];function fa(o,t){return k(),L("div",ua,[(k(),L("svg",ma,ha))])}const ga=Ie(ca,[["render",fa]]),kt=o=>(it("data-v-6ed73f98"),o=o(),nt(),o),_a={class:"kobo-modal"},va=kt(()=>D("span",{class:"-pm"},null,-1)),ba={class:"jp -mm -up"},ya={class:"-mm -up"},wa=kt(()=>D("span",null,"– the experimental one.",-1)),Ma={class:"-mm -up"},Ca={class:"-mm -up narrow"},xa={class:"-mm -up narrow"},ze=250,pt=0,ka=Me({__name:"KoboModal",props:{ignoreOpeningTap:{type:Boolean}},emits:["close","closed"],setup(o,{emit:t}){const e=o,n=I(!1),a=I(!0),i=ie(()=>{const g=m=>({delay:n.value?pt-m:m,growthDuration:ze,revealDuration:ze,stepInterval:30,hide:n.value});return{jp:g(0),title:g(0),intro:g(0),bodyOne:g(0),bodyTwo:g(0)}}),r=I(null);let d=0,l=0,c=null,C=0;function A(){const g=r.value;if(!g)return;const m=g.getBoundingClientRect();le().setKoboModalPanelHtmlRect({leftPx:m.left,topPx:m.top,widthPx:m.width,heightPx:m.height}),le().setKoboModalPanelTargetTopPx(m.top)}function f(g){g&&e.ignoreOpeningTap&&performance.now()<C||n.value||(n.value=!0,window.clearTimeout(d),d=window.setTimeout(()=>{t("close"),t("closed")},Math.max(0,pt+ze*2-mt.close.panel.durationMs)))}function S(g){g.key==="Escape"&&f()}return we(()=>{C=performance.now()+450,window.addEventListener("keydown",S),A(),r.value&&"ResizeObserver"in window&&(c=new ResizeObserver(A),c.observe(r.value)),window.addEventListener("resize",A),l=window.setTimeout(()=>{a.value=!1},mt.open.panel.durationMs)}),Pe(()=>{window.clearTimeout(d),window.clearTimeout(l),window.removeEventListener("keydown",S),window.removeEventListener("resize",A),c==null||c.disconnect()}),(g,m)=>{const M=lt,E=pe("pixel-hover"),x=pe("sound-hover"),T=pe("sound-click"),$=pe("scramble-reveal");return k(),L("div",_a,[D("span",{class:"backdrop",onClick:f}),D("div",{ref_key:"panelEl",ref:r,class:R(["panel",{"-entering":_(a),"-leaving":_(n)}])},[K((k(),L("button",{class:"close -mm -up -pm-p",type:"button",onClick:f},[va,V(M,{src:"icon-20_close",class:"_20"})])),[[E],[x,"ui-hover"],[T,"ui-click"]]),K((k(),L("span",ba,[te("コウボウ")])),[[$,_(i).jp]]),K((k(),L("h3",ya,[te("Kōbō "),wa])),[[$,_(i).title]]),K((k(),L("p",Ma,[te("A small wandering machine, simple in shape and curious by nature.")])),[[$,_(i).intro]]),K((k(),L("p",Ca,[te(" Nobody knows where it came from. Some say it was assembled from forgotten parts. Others believe it simply appeared one day, as if it had always been there. ")])),[[$,_(i).bodyOne]]),K((k(),L("p",xa,[te(" It doesn't seem to have a particular purpose. It simply follows curiosity, wandering from one experiment to another. ")])),[[$,_(i).bodyTwo]])],2)])}}});const Ea=Ie(ka,[["__scopeId","data-v-6ed73f98"]]);function Ze(){const o=re("foreground-open",()=>!1);return{isForegroundOpen:o,openForeground:()=>{o.value=!0},closeForeground:()=>{o.value=!1}}}const Ta=200,La=80;function Et(){const o=re("center-project-slug",()=>null),t=re("center-project-slug-displayed",()=>null);let e=null;function n(i){if(o.value===i)return;o.value=i,e!==null&&(clearTimeout(e),e=null);let r;i===null?r=La:t.value!==null?r=0:r=Ta,e=setTimeout(()=>{e=null,t.value=i},r)}const a=ie(()=>wt.find(i=>i.slug===t.value)??null);return{centerProjectSlug:o,displayedCenterProjectSlug:t,centerProject:a,setCenterProjectSlug:n}}function Tt(){return Ae().$appRenderer}function Lt(){const o=re("kobo-modal-active",()=>!1);return{isKoboModalActive:o,setKoboModalActive:t=>{o.value=t}}}const Sa={enterMs:1800,idleMinMs:2400,idleMaxMs:6e3,exitMs:1800},Pa="-preload",Aa=!1;let Ue=null;function Ia(o){const t=re("splash-preloader-active",()=>!Aa),e=re("splash-preloader-phase",()=>null),n=re("splash-preloader-exit-scheduled-at",()=>null);let a=null;const i=new Promise(M=>{a=M});let r=!1,d=!1,l=null;const c=[],C=(M,E)=>{const x=setTimeout(()=>{d||M()},E);c.push(x)},A=()=>{c.forEach(M=>clearTimeout(M)),c.length=0};ae([t,e],()=>{if(typeof document>"u")return;const M=document.documentElement;M.classList.toggle("-preload",t.value),["entering","idle","exit"].forEach(E=>{M.classList.toggle(`${Pa}-${E}`,t.value&&e.value===E)})},{immediate:!0});function S(){a==null||a()}function g(){r||(r=!0,t.value=!0,n.value=null,requestAnimationFrame(()=>{requestAnimationFrame(()=>{d||(e.value="entering")})}),C(()=>{e.value="idle";const M=Date.now(),E=()=>{const T=Date.now()-M,$=Math.max(0,(l==null?void 0:l())??0),H=Math.max(0,o.idleMinMs-T,$),h=()=>{e.value="exit",C(()=>{t.value=!1,e.value=null},o.exitMs)};H===0?(h(),n.value=Date.now()):(C(h,H),n.value=Date.now()+H)};let x=!1;i.then(()=>{x||(x=!0,E())}),C(()=>{x||(x=!0,E())},o.idleMaxMs)},o.enterMs))}function m(){d=!0,A(),n.value=null}return{active:t,phase:e,exitScheduledAt:n,setExitLeadProvider:M=>{l=M},start:g,markReady:S,dispose:m}}function rt(o=Sa){return Ue||(Ue=Ia(o)),Ue}const $a={class:"page home-page"},ja=["onWheel"],Oa=16,Da=400,Ha=Me({__name:"HomeSceneOverlay",setup(o){const t=ge.animation.collapseEasing,e=ie(()=>ye().isMobile),n=st(),a=rt(),{exitScheduledAt:i}=a;a.setExitLeadProvider(()=>n.path==="/"&&Le.list.intro.enabled?Math.max(0,-Le.list.intro.delayMs):0);const r=We(),{openForeground:d,closeForeground:l}=Ze(),{setCenterProjectSlug:c}=Et(),{isPaginationActive:C,setPaginationActive:A}=Mt(),{$audio:f}=Ae(),S=Tt(),g=re("site-colour",()=>"Black"),m=I(!1),M=ie(()=>n.path==="/"||C.value||m.value),E=I(!1),x=I(!1),T=I(!1),$=I(!1),{setKoboModalActive:H}=Lt(),h=bt(null),G=I(t);let b=null,w=0,O=null,Q="",B=0,Z=0,F=0,Y=0,X=0,J=!1,ne=!1,z=null,q=null;function se(){if(!h.value)return;const s=g.value.toLowerCase(),v=s==="black"?null:getComputedStyle(document.documentElement).getPropertyValue(`--c-${s}`).trim()||null;h.value.setCardLabelColor(v)}ae(g,se,{flush:"post"}),ae(()=>n.path,s=>{s==="/"&&(m.value=!1)}),ae(e,s=>{var v;s&&c(((v=h.value)==null?void 0:v.getCenterProjectSlug())??null)}),ae(i,s=>{var P;if(q!==null&&clearTimeout(q),q=null,s===null||n.path!=="/"||!Le.list.intro.enabled)return;const v=Math.max(0,s+Le.list.intro.delayMs-Date.now());if(v===0){(P=h.value)==null||P.playListIntroAnimation();return}q=setTimeout(()=>{var j;q=null,n.path==="/"&&((j=h.value)==null||j.playListIntroAnimation())},v)},{flush:"sync"});function oe(s=!1){var v;T.value||($.value=s,T.value=!0,H(!0),d(),(v=h.value)==null||v.setKoboModalOpen(!0),f==null||f.play("ui-click"))}function ee(){M.value&&oe()}function Ce(){var s;m.value=!0,A(!1),l(),S.resume(),(s=h.value)==null||s.triggerCloseTransition("",()=>{})}function fe(){var s;H(!1),l(),(s=h.value)==null||s.setKoboModalOpen(!1)}function xe(){var s;T.value=!1,(s=h.value)==null||s.hideKoboModalPanel()}function de(s){return{x:s.clientX/Math.max(window.innerWidth,1)*2-1,y:-(s.clientY/Math.max(window.innerHeight,1)*2-1)}}function ce(s,v=!0){var j,ue;if(s.pointerType==="touch"){(j=h.value)==null||j.handlePointerLeave();return}const P=de(s);(ue=h.value)==null||ue.handlePointerMove(P.x,P.y,v&&!e.value)}function He(s){M.value&&ce(s,s.target instanceof Element&&s.target.classList.contains("gl-layer"))}function $e(){var s;(s=h.value)==null||s.handlePointerLeave()}function ke(){O=null,Q="",J=!1,x.value=!1,ne=!1}function Qe(s){if(!h.value||!s.isPrimary||s.button!==0)return;const v=s.currentTarget;O=s.pointerId,Q=s.pointerType,B=s.clientX,Z=s.clientY,F=s.clientX,Y=s.clientY,X=s.timeStamp,J=!1,x.value=!1,ne=!1,ce(s),v.setPointerCapture(s.pointerId)}function Ee(s){var je,Oe;if(!s.isPrimary||O!==s.pointerId)return;const v=s.clientX-B,P=s.clientY-Z,j=Le.list.interaction.dragThresholdPx;if(!J){if(Math.abs(v)<j&&Math.abs(P)<j||(ne=!0,!(e.value?Math.abs(P)>Math.abs(v):Math.abs(v)>Math.abs(P))))return;J=!0,x.value=!0,(je=h.value)==null||je.beginDragScroll()}const ue=s.clientX-F,Ne=s.clientY-Y,Re=Math.max(s.timeStamp-X,0)/1e3;(Oe=h.value)==null||Oe.handleDragScroll(ue,Ne,Re),F=s.clientX,Y=s.clientY,X=s.timeStamp}function Ye(s,v){var Ne,Re,je,Oe;if(O!==s.pointerId)return;const P=s.currentTarget,j=J,ue=v&&!j&&!ne;if(j)(Ne=h.value)==null||Ne.endDragScroll();else if(ue){const Je=de(s);(Re=h.value)==null||Re.handlePointerClick(Je.x,Je.y)}else(je=h.value)==null||je.cancelDragScroll();s.pointerType!=="mouse"&&((Oe=h.value)==null||Oe.handlePointerLeave()),ke(),P.hasPointerCapture(s.pointerId)&&P.releasePointerCapture(s.pointerId)}function Te(s){Ye(s,!0)}function u(s){var P,j;if(O!==s.pointerId)return;const v=s.currentTarget;(P=h.value)==null||P.cancelDragScroll(),(j=h.value)==null||j.handlePointerLeave(),ke(),v.hasPointerCapture(s.pointerId)&&v.releasePointerCapture(s.pointerId)}function p(s){var v,P;O===s.pointerId&&((v=h.value)==null||v.cancelDragScroll(),(P=h.value)==null||P.handlePointerLeave(),ke())}function N(){var s;O===null&&((s=h.value)==null||s.handlePointerLeave(!1))}function U(s,v){return v===1?s*Oa:v===2?s*Da:s}function W(s){var j,ue;if(e.value){(j=h.value)==null||j.handleWheelScroll(U(s.deltaY,s.deltaMode));return}const v=performance.now();v-w>150&&(b=null),w=v,b===null&&(b=Math.abs(s.deltaX)>=Math.abs(s.deltaY)?"x":"y");const P=b==="x"?s.deltaX:s.deltaY;(ue=h.value)==null||ue.handleWheelScroll(U(P,s.deltaMode))}return we(()=>{window.addEventListener("open-kobo-modal",ee),window.addEventListener("start-home-close-transition",Ce),window.addEventListener("pointermove",He),document.documentElement.addEventListener("mouseleave",$e),f==null||f.preload(["ui-hover","ui-click","ui-background"]),h.value=le(),a.active.value&&n.path==="/"&&h.value.prepareListIntroAnimation(),se(),h.value.setCollapseEasing(G.value),h.value.onKoboClick(()=>{oe(Q==="touch")}),h.value.onProjectClick(s=>{var P,j;if(f==null||f.play("ui-click"),m.value&&n.path!=="/"){m.value=!1,d(),(P=h.value)==null||P.triggerOpenTransition(s,()=>{}),!e.value&&ge.animation.pagination.enabled&&ge.animation.closeAnimationType==="scatter"&&A(!0),window.dispatchEvent(new CustomEvent("reopen-exp-modal",{detail:s}));return}if(n.path!=="/"){r.push(s);return}m.value=!1,d();const v=Ct.projectNavigationDelayMs;window.setTimeout(()=>{r.push(s)},v),(j=h.value)==null||j.triggerOpenTransition(s,()=>{}),!e.value&&ge.animation.pagination.enabled&&ge.animation.closeAnimationType==="scatter"&&A(!0)}),h.value.onPaginationNavigate(s=>{f==null||f.play("ui-click"),window.dispatchEvent(new CustomEvent("pagination-navigate",{detail:s}))}),h.value.onCenterProjectChange(s=>{e.value&&c(s)}),h.value.onProjectHover((s,v)=>{E.value=s,e.value||c(s?v:null),z==null||z(),z=s?(f==null?void 0:f.playSequence([{name:"ui-hover"},{name:"ui-background",delayMs:150},{name:"ui-background",delayMs:225},{name:"ui-background",delayMs:300},{name:"ui-background",delayMs:400},{name:"ui-background",delayMs:500}]))??null:(f==null?void 0:f.playSequence([{name:"ui-hover"},{name:"ui-background",delayMs:100},{name:"ui-background",delayMs:175},{name:"ui-background",delayMs:300},{name:"ui-background",delayMs:500}]))??null})}),Pe(()=>{q!==null&&clearTimeout(q),a.setExitLeadProvider(null),window.removeEventListener("open-kobo-modal",ee),window.removeEventListener("start-home-close-transition",Ce),window.removeEventListener("pointermove",He),document.documentElement.removeEventListener("mouseleave",$e),z==null||z()}),(s,v)=>{const P=Ea;return k(),L("main",$a,[_(M)?(k(),L("div",{key:0,class:R(["gl-layer",{"-card-hover":_(E)&&!_(x),"-dragging":_(x),"-mobile-scroll":_(e)}]),onPointerdown:Qe,onPointermove:Ee,onPointerup:Te,onPointercancel:u,onLostpointercapture:p,onMouseleave:N,onWheel:Dt(W,["prevent"])},null,42,ja)):he("",!0),(k(),Se(Qt,{to:"body"},[V(Ht,{name:"-t-kobo",duration:{enter:1200,leave:1200}},{default:Ke(()=>[_(T)?(k(),Se(P,{key:0,"ignore-opening-tap":_($),onClose:fe,onClosed:xe},null,8,["ignore-opening-tap"])):he("",!0)]),_:1})]))])}}});const Qa=Ie(Ha,[["__scopeId","data-v-5709dad2"]]);function Fe(o,t){const e=new Date("2023-01-01T00:00:00Z"),n=new Date;let a=0;return t==="minute"?a=Math.floor((n.getTime()-e.getTime())/6e4)%o.length:t==="day"&&(a=Math.floor((n.getTime()-e.getTime())/864e5)%o.length),o[a]}const Na="content",Ra=`query home {
  home {
    data {
      attributes {
        projects {
          project {
            data {
              id
              attributes {
                title
                description
                url
                cover {
                  data {
                    attributes {
                      url
                      mime
                    }
                  }
                }
                verticalCover {
                  data {
                    attributes {
                      url
                      mime
                    }
                  }
                }
                country
                project_category {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
                type
              }
            }
          }
          bigMedia {
            data {
              attributes {
                url
                mime
              }
            }
          }
        }

        welcome_title
        welcome_subtitle_1
        welcome_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
        welcome_subtitle_2
        liquid_title
        liquid_subtitles
        liquid_media_1 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        liquid_media_2 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        liquid_media_3 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        empower_title
        empower_subcap
        empower_subtitle
        empower_caption_1
        empower_caption_2
        empower_caption_3
        empower_caption
        empower_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
        trust_title
        trust_subtitle
        trust_with
        trust_caption
        harmonyRows(pagination: {limit: 40}) {
          media_1 {
            data {
              attributes {
                url
                mime
              }
            }
          }
          media_2 {
            data {
              attributes {
                url
                mime
              }
            }
          }
          media_3 {
            data {
              attributes {
                url
                mime
              }
            }
          }
          media_4 {
            data {
              attributes {
                url
                mime
              }
            }
          }
        }

        talk_title
        talk_subtitle
        talk_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
      }
    }
  }
  navigation {
    data {
      attributes {
        footer_texts
        talk_title
        talk_subtitle
        talk_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
      }
    }
  }
}
`,Ba=`query design {
  designAgency {
    data {
      attributes {
        welcome_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
        welcome_media_2 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        welcome_media_3 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        welcome_media_4 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        welcome_title
        services_caption
        services_title
        services_list
        services_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
        difference_title
        difference_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
        difference_prompt
        engaging_media_1 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        engaging_media_2 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        engaging_media_3 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        engaging_caption
        engaging_text
        path_caption
        path_media_1 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        path_media_2 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        path_media_3 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        path_media_4 {
          data {
            attributes {
              url
              mime
            }
          }
        }
        path_title
        external_title
        external_caption
        talk_title
        talk_subtitle
        talk_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
      }
    }
  }
  navigation {
    data {
      attributes {
        footer_texts
        talk_title
        talk_subtitle
        talk_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
      }
    }
  }
}
`,Fa=`query projects {
  projectCategories(pagination: {limit: 70}) {
    data {
      id
      attributes {
        title
      }
    }
  }

  projectPage{
    data{
      attributes{
        projects(pagination: {limit: 70}) {
          data {
            id
            attributes {
              title
              description
              url
              slug
              cover {
                data {
                  attributes {
                    url
                    mime
                  }
                }
              }
              verticalCover {
                data {
                  attributes {
                    url
                    mime
                  }
                }
              }
              country
              project_category {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
              type
            }
          }
        }
      }
    }
    
  }
  navigation {
    data {
      attributes {
        footer_texts
        talk_title
        talk_subtitle
        talk_media {
          data {
            attributes {
              url
              mime
            }
          }
        }
      }
    }
  }
}
`,Ga=`query services{
  services{
    data{
      id
      attributes{
        name
        prices{
          min_price
          max_price
        }
      }
    }
  }
}`,qa=`query getInTouch {
  getInTouch {
    data {
      attributes {
        titles
      }
    }
  }
}
`,Wa=`
query project($slug: String){
	projects(filters: {slug: {eq: $slug}}){
    data{
      attributes{
        title
        shortDescription
        description
        url
        year
        thought
        services
        descriptionItems{
          title
          description
        }
        previewBackgroundMedia{
          data {
            attributes {
              url
              mime
            }
          }
        }
        previewMedia{
          data {
            attributes {
              url
              mime
            }
          }
        }


        verticalCover {
          data {
            attributes {
              url
              mime
            }
          }
        }
        country
        project_category {
          data {
            id
            attributes {
              title
            }
          }
        }
        type
        block{
          __typename 
          ...on ComponentProjectProjectGrid {
            leftText
            rightText
            leftMedia{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
            rightMedia{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
            leftImageBig
            rightImageBig
          }
          ...on ComponentProjectProjectWideMedia{
            media{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
          }
          ...on ComponentProjectProjectBlendMedia{
            backgroundMedia{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
            mainMedia{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
          }
          ...on ComponentProjectProjectNarrowMedia{
            media{
              data{
                attributes{
                  url
                  mime
                }
              }
            }
          }
          ...on ComponentProjectProjectStickGallery {
            images{
              media{
                data{
                  attributes{
                    url
                    mime
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`,St=Nt(Na,{state:()=>({home:null,design:null,getInTouch:null,services:null,projects:null,showedProjects:null,projectCategories:null,navigation:null,activeProject:null}),getters:{getHome:o=>o.home,getDesign:o=>o.design,getGetInTouch:o=>o.getInTouch,getProjects:o=>o.projects,getShowedProjects:o=>o.showedProjects,getProjectCategories:o=>o.projectCategories,getServices:o=>o.services,getNavigation:o=>o.navigation,getActiveProject:o=>o.activeProject},actions:{async fetchHomePage(){const t=await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Ra})})).json();let e=t.data.home.data.attributes;e.welcome_title=e.welcome_title.replace(/\n/,"<br>"),e.empower_subcap=e.empower_subcap.replace(/\n/,"<br>"),e.trust_title=e.trust_title.replace(/\n/,"<br>"),e.trust_with=e.trust_with.split(`
`),e.talk_media.data==null?e.talk_media.data={attributes:{url:""}}:e.talk_media.data.attributes.url=`https://media.fiddle.digital${e.talk_media.data.attributes.url}`,e.welcome_media.data==null?e.welcome_media.data={attributes:{url:""}}:e.welcome_media.data.attributes.url=`https://media.fiddle.digital${e.welcome_media.data.attributes.url}`,e.liquid_media_1.data==null?e.liquid_media_1.data={attributes:{url:""}}:e.liquid_media_1.data.attributes.url=`https://media.fiddle.digital${e.liquid_media_1.data.attributes.url}`,e.liquid_media_2.data==null?e.liquid_media_2.data={attributes:{url:""}}:e.liquid_media_2.data.attributes.url=`https://media.fiddle.digital${e.liquid_media_2.data.attributes.url}`,e.liquid_media_3.data==null?e.liquid_media_3.data={attributes:{url:""}}:e.liquid_media_3.data.attributes.url=`https://media.fiddle.digital${e.liquid_media_3.data.attributes.url}`;let n=new Array;e.harmonyRows.forEach((i,r)=>{i.media_1.data!=null&&n.push({top:r+1,left:1,image:i.media_1.data.attributes.mime.includes("image")?`https://media.fiddle.digital${i.media_1.data.attributes.url}`:null,video:i.media_1.data.attributes.mime.includes("video")?`https://media.fiddle.digital${i.media_1.data.attributes.url}`:null}),i.media_2.data!=null&&n.push({top:r+1,left:2,image:i.media_2.data.attributes.mime.includes("image")?`https://media.fiddle.digital${i.media_2.data.attributes.url}`:null,video:i.media_2.data.attributes.mime.includes("video")?`https://media.fiddle.digital${i.media_2.data.attributes.url}`:null}),i.media_3.data!=null&&n.push({top:r+1,left:3,image:i.media_3.data.attributes.mime.includes("image")?`https://media.fiddle.digital${i.media_3.data.attributes.url}`:null,video:i.media_3.data.attributes.mime.includes("video")?`https://media.fiddle.digital${i.media_3.data.attributes.url}`:null}),i.media_4.data!=null&&n.push({top:r+1,left:4,image:i.media_4.data.attributes.mime.includes("image")?`https://media.fiddle.digital${i.media_4.data.attributes.url}`:null,video:i.media_4.data.attributes.mime.includes("video")?`https://media.fiddle.digital${i.media_4.data.attributes.url}`:null})}),e.harmonyRows=n,this.home=e;let a=t.data.navigation.data.attributes;a.footer_texts=a.footer_texts.split(`
`),a.footer_texts=Fe(a.footer_texts,"minute"),a.talk_media.data==null?a.talk_media.data={attributes:{url:""}}:a.talk_media.data.attributes.url=`https://media.fiddle.digital${a.talk_media.data.attributes.url}`,this.navigation=a},async fetchDesignPage(){const t=await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Ba})})).json();let e=t.data.designAgency.data.attributes,n=new Array,a=new Array,i=new Array,r=new Array;e.welcome_media.data.forEach((l,c)=>{n.push({image:l.attributes.mime.includes("image")?`https://media.fiddle.digital${l.attributes.url}`:null,video:l.attributes.mime.includes("video")?`https://media.fiddle.digital${l.attributes.url}`:null})}),e.welcome_media=n,e.welcome_media_2.data.forEach((l,c)=>{a.push({image:l.attributes.mime.includes("image")?`https://media.fiddle.digital${l.attributes.url}`:null,video:l.attributes.mime.includes("video")?`https://media.fiddle.digital${l.attributes.url}`:null})}),e.welcome_media_2=a,e.welcome_media_3.data.forEach((l,c)=>{i.push({image:l.attributes.mime.includes("image")?`https://media.fiddle.digital${l.attributes.url}`:null,video:l.attributes.mime.includes("video")?`https://media.fiddle.digital${l.attributes.url}`:null})}),e.welcome_media_3=i,e.welcome_media_4.data.forEach((l,c)=>{r.push({image:l.attributes.mime.includes("image")?`https://media.fiddle.digital${l.attributes.url}`:null,video:l.attributes.mime.includes("video")?`https://media.fiddle.digital${l.attributes.url}`:null})}),e.welcome_media_4=r,e.services_list=e.services_list.split(`
`),e.services_media={image:e.services_media.data!=null&&e.services_media.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.services_media.data.attributes.url}`:null,video:e.services_media.data!=null&&e.services_media.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.services_media.data.attributes.url}`:null},e.difference_media={image:e.difference_media.data!=null&&e.difference_media.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.difference_media.data.attributes.url}`:null,video:e.difference_media.data!=null&&e.difference_media.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.difference_media.data.attributes.url}`:null},e.engaging_media_1={image:e.engaging_media_1.data!=null&&e.engaging_media_1.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.engaging_media_1.data.attributes.url}`:null,video:e.engaging_media_1.data!=null&&e.engaging_media_1.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.engaging_media_1.data.attributes.url}`:null},e.engaging_media_2={image:e.engaging_media_2.data!=null&&e.engaging_media_2.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.engaging_media_2.data.attributes.url}`:null,video:e.engaging_media_2.data!=null&&e.engaging_media_2.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.engaging_media_2.data.attributes.url}`:null},e.engaging_media_3={image:e.engaging_media_3.data!=null&&e.engaging_media_3.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.engaging_media_3.data.attributes.url}`:null,video:e.engaging_media_3.data!=null&&e.engaging_media_3.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.engaging_media_3.data.attributes.url}`:null},e.path_media_1={image:e.path_media_1.data!=null&&e.path_media_1.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.path_media_1.data.attributes.url}`:null,video:e.path_media_1.data!=null&&e.path_media_1.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.path_media_1.data.attributes.url}`:null},e.path_media_2={image:e.path_media_2.data!=null&&e.path_media_2.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.path_media_2.data.attributes.url}`:null,video:e.path_media_2.data!=null&&e.path_media_2.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.path_media_2.data.attributes.url}`:null},e.path_media_3={image:e.path_media_3.data!=null&&e.path_media_3.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.path_media_3.data.attributes.url}`:null,video:e.path_media_3.data!=null&&e.path_media_3.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.path_media_3.data.attributes.url}`:null},e.path_media_4={image:e.path_media_4.data!=null&&e.path_media_4.data.attributes.mime.includes("image")?`https://media.fiddle.digital${e.path_media_4.data.attributes.url}`:null,video:e.path_media_4.data!=null&&e.path_media_4.data.attributes.mime.includes("video")?`https://media.fiddle.digital${e.path_media_4.data.attributes.url}`:null};let d=t.data.navigation.data.attributes;d.footer_texts=d.footer_texts.split(`
`),d.footer_texts=Fe(d.footer_texts,"minute"),d.talk_media.data==null?d.talk_media.data={attributes:{url:""}}:d.talk_media.data.attributes.url=`https://media.fiddle.digital${d.talk_media.data.attributes.url}`,this.navigation=d,this.design=e},async fetchProjectsPage(){const t=await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Fa})})).json();let e=t.data.projectPage.data.attributes.projects.data,n=t.data.projectCategories.data.map(i=>({value:i.id,name:i.attributes.title,items:[]}));this.projects=e,this.showedProjects=e,n.forEach(i=>{let r=this.projects.filter(d=>d.attributes.project_category.data==null?!1:`${d.attributes.project_category.data.id}`==`${i.value}`);i.items=r}),this.projectCategories=n;let a=t.data.navigation.data.attributes;a.footer_texts=a.footer_texts.split(`
`),a.footer_texts=Fe(a.footer_texts,"minute"),a.talk_media.data==null?a.talk_media.data={attributes:{url:""}}:a.talk_media.data.attributes.url=`https://media.fiddle.digital${a.talk_media.data.attributes.url}`,this.navigation=a},async fetchGetInTouchPage(){let e=(await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:qa})})).json()).data.getInTouch.data.attributes;e.titles=e.titles.split(`
`),e.title=Fe(e.titles,"minute"),this.getInTouch=e},async filterProject(o){o==""?this.showedProjects=this.projects:this.showedProjects=this.projects.filter(t=>t.attributes.project_category.data==null?!1:t.attributes.project_category.data.id==o)},async fetchServices(){const t=await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Ga})})).json();this.services=t.data.services.data},async fetchProject(o){const e=await(await fetch("https://media.fiddle.digital/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Wa,variables:{slug:o}})})).json();e.data.projects.data!=null&&e.data.projects.data.length>0&&(e.data.projects.data[0].attributes.services=e.data.projects.data[0].attributes.services.split(`
`),this.activeProject=e.data.projects.data[0].attributes)}}}),dt=o=>(it("data-v-fd5ad0ee"),o=o(),nt(),o),Ka=dt(()=>D("span",{class:"-pm"},"FD.Exp",-1)),Za=[Ka],Ya=dt(()=>D("span",{class:"-pm"},"/",-1)),Ja=dt(()=>D("span",{class:"-pm"},"About",-1)),za=[Ja],Ua={key:0,class:"-pm"},Xa=Me({__name:"MainHeader",setup(o){const e=Ae().$globalClass,n=st(),a=We(),{isForegroundOpen:i,openForeground:r}=Ze(),d=St();ie(()=>d.getProjects);const l=I("list"),c=bt(null);function C(){if(!c.value)return;const T=l.value==="grid"?"list":"grid";l.value=T,c.value.setMode(T)}function A(){if(n.path!=="/about"){if(r(),n.path==="/"){window.setTimeout(()=>{a.push("/about")},Ct.projectNavigationDelayMs),le().triggerOpenTransition("/about",()=>{});return}a.push("/about")}}const f=I(!1),S=I(!0),g=I(!0),m=I(!0);I(!1);const M=()=>{window.scrollY>280?f.value=!0:f.value=!1},E=ie(()=>ye().isMobile),x=I("");return e.on("on-page-change",T=>{x.value=T}),we(()=>{setTimeout(()=>{try{c.value=le(),c.value&&(l.value=c.value.mode,c.value.onModeChange=T=>{l.value=T})}catch{console.warn("HomeScene not initialized yet")}},100),setTimeout(()=>{S.value=!1,g.value=!1},1350),setTimeout(()=>{m.value=!1},2100),e.on("page-change-call",()=>{S.value=!0,setTimeout(()=>{S.value=!1},900)}),document.addEventListener("scroll",M)}),Pe(()=>{document.removeEventListener("scroll",M)}),(T,$)=>{const H=lt,h=xt,G=pe("pixel-hover"),b=pe("sound-hover"),w=pe("sound-click");return k(),L("header",{class:R(["-mm -up",{"-opened":_(i)}])},[V(h,null,{default:Ke(()=>[K((k(),L("a",{href:"/",class:R(["logo -nl -pm-p",{"-hidden":_(i)}])},Za,2)),[[G],[b,"ui-hover"],[w,"ui-click"]]),K((k(),L("a",{class:R(["fd_logo -nl",{"-hidden":_(i)}]),href:"https://fiddle.digital",target:"_blank"},[V(H,{src:"logo"})],2)),[[b,"ui-hover"],[w,"ui-click"]]),_(E)?he("",!0):K((k(),L("span",{key:0,class:R(["toggle -pm-p",{"-hidden":_(i)}]),onClick:C},[D("span",{class:R(["-pm",{"-active":l.value==="list"}])},"List",2),Ya,D("span",{class:R(["-pm",{"-active":l.value==="grid"}])},"Grid",2)],2)),[[G],[b,"ui-hover"],[w,"ui-toggle"]]),K((k(),L("span",{class:R(["about -pm-p",{"-hidden":_(i)}]),onClick:A},za,2)),[[G],[b,"ui-hover"],[w,"ui-click"]]),K((k(),L("a",{class:R(["talk -nl -pm-p",{"-hidden":_(i)}]),href:"https://fiddle.digital/connect",target:"_blank"},[_(E)?he("",!0):(k(),L("span",Ua,"Let's talk")),_(E)?(k(),Se(H,{key:1,src:"icon-20_blank",class:"_20"})):he("",!0)],2)),[[G],[b,"ui-hover"],[w,"ui-click"]]),D("span",{class:R(["expo -up -mm -jp",{"-hidden":_(i)}])},"エクス",2)]),_:1})],2)}}});const Va=Ie(Xa,[["__scopeId","data-v-fd5ad0ee"]]),ei=Me({__name:"CurrentYear",props:{format:{}},setup(o){const t=o,e=re("current-year",()=>new Date().getFullYear()),n=ie(()=>{const a=String(e.value);return t.format==="YY"?a.slice(-2):a});return(a,i)=>Xe(_(n))}}),De=["Black","Red","Green","Yellow","Blue"],ti=De.map(o=>`-${o.toLowerCase()}`);function ai(){const o=re("site-colour",()=>"Black"),t=n=>{o.value=n,document.documentElement.classList.remove(...ti),document.documentElement.classList.add(`-${n.toLowerCase()}`)};return{activeColour:o,setColour:t,cycleColour:(n=1)=>{const a=De.length,i=De.indexOf(o.value);t(De[(i+n+a)%a])}}}const ii=o=>(it("data-v-bb6718f9"),o=o(),nt(),o),ni=["aria-pressed"],si=ii(()=>D("span",{class:"-mm -up"},"sfx",-1)),oi={class:"-mm -up"},li=["aria-label"],ri=["onClick"],ht="Exp",ft=600,di=600,ci=150,ui=12e3,mi=Me({__name:"MainFooter",setup(o){const t=ie(()=>ye().isMobile),n=Ae().$audio,{isForegroundOpen:a}=Ze(),i=I(!0);let r;const d=De,{activeColour:l,setColour:c,cycleColour:C}=ai(),A=b=>b instanceof HTMLElement?b.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(b.tagName):!1,f=b=>{b.key!=="Tab"||!b.shiftKey||b.ctrlKey||b.altKey||b.metaKey||a.value||A(b.target)||(b.preventDefault(),C())},S=["Experience","Experiments","Exploration","Expression","Exposure","Exponential","Exposition","Explicit","Exemplify"],g=S[0].slice(ht.length),m=I(null);let M=null,E=g,x=0,T=null,$=null;const H=()=>{if(!m.value)return;const b=E;x=(x+1)%S.length;const w=S[x].slice(ht.length);M||(M=Rt(m.value)),$!==null&&clearTimeout($),m.value.classList.remove("-hover"),m.value.offsetWidth,m.value.classList.add("-hover"),$=setTimeout(()=>{var O;$=null,(O=m.value)==null||O.classList.remove("-hover")},ft),Bt(M,b,w,ft+di,ci,()=>{E=w})},h=()=>{if(!n)return;n.toggleMuted()||n.play("ui-toggle")},G=()=>{window.dispatchEvent(new Event("open-kobo-modal"))};return we(()=>{n&&(i.value=n.muted,n.preload(["ui-hover","ui-click","ui-toggle"]),r=n.onMutedChange(b=>{i.value=b}))}),we(()=>{c(l.value),window.addEventListener("keydown",f),T=setInterval(H,ui)}),Pe(()=>{window.removeEventListener("keydown",f),r==null||r(),T!==null&&clearInterval(T),$!==null&&clearTimeout($),M&&Ve(M)}),(b,w)=>{const O=lt,Q=ei,B=xt,Z=pe("sound-hover"),F=pe("pixel-hover");return k(),L("footer",{class:R({"-opened":_(a)})},[V(B,null,{default:Ke(()=>[_(t)?he("",!0):K((k(),L("figure",{key:0,class:R(["sound -pm",{"-muted":i.value,"-hidden":_(a)}]),role:"button","aria-pressed":i.value,"aria-label":"Toggle sound",onClick:h},[V(O,{src:i.value?"icon-20_sound-off":"icon-20_sound-on",class:"_20"},null,8,["src"]),si],10,ni)),[[Z,"ui-hover"]]),D("span",{class:R(["c",{"-hidden":_(a)}])},[D("span",oi,[te("Exp"),w[0]||(ut(-1),w[0]=D("span",{ref_key:"hubSuffixEl",ref:m,class:"-pm"},[te(Xe(_(g)),1)],512),ut(1),w[0]),te(" Hub")])],2),_(t)?he("",!0):(k(),L("span",{key:1,class:R(["a",{"-hidden":_(a)}])},[K((k(),L("span",{class:"-mm -up -pm",onClick:G},[te("Kōbō")])),[[F],[Z,"ui-hover"]])],2)),D("span",{class:R(["y -mm -up",{"-hidden":_(a)}])},[D("span",null,[te("©"),V(Q)])],2),D("div",{class:R(["colours -mm -up",{"-hidden":_(a)}])},[_(t)?K((k(),L("button",{key:0,type:"button",class:"-pm","aria-label":`Color: ${_(l)}. Show next color`,onClick:w[1]||(w[1]=Y=>_(C)())},[te("Colour")],8,li)),[[F],[Z,"ui-hover"]]):(k(!0),L(ot,{key:1},yt(_(d),Y=>K((k(),L("span",{key:Y,class:R(["-pm",{"-active":_(l)===Y}]),onClick:X=>_(c)(Y)},[te(Xe(Y),1)],10,ri)),[[F],[Z,"ui-hover"]])),128))],2)]),_:1})],2)}}});const pi=Ie(mi,[["__scopeId","data-v-bb6718f9"]]),hi={key:0,class:"splash-screen",role:"status","aria-live":"polite"},fi={class:"grid"},gi=Me({__name:"SplashScreen",setup(o){const{active:t}=rt(),e=(n,a)=>Math.round(Math.random()*(a-n)+n);return(n,a)=>{const i=oa;return _(t)?(k(),L("div",hi,[D("div",fi,[(k(),L(ot,null,yt(100,r=>D("span",{key:r,style:Ft({"--random":`${e(0,5)}`})},null,4)),64))]),V(i,{src:"/videos/kobo-loader.mp4"})])):he("",!0)}}});const _i=Ie(gi,[["__scopeId","data-v-14927a0a"]]);function vi(){const o=We();return{resolve:async e=>{var r;const a=o.resolve(e).matched[0],i=(r=a==null?void 0:a.components)==null?void 0:r.default;if(!i)return null;if(typeof i=="function"){const d=await i();return d.default??d}return i}}}function bi(o){window[`ga-disable-${o}`]=!0}function yi(o){const t=`ga-disable-${o}`;t in window&&delete window[t]}function wi(){const o=Gt().public.gtag,t=qt(o);let e;e=Wt;const n=d=>{const l=[...t];let c=l.find(C=>C.id===d);return c||(d?(c={id:d},l.unshift(c)):c=l[0]),c||console.error("[nuxt-gtag] Missing Google tag ID"),{tag:c,tags:l}},a=d=>{{const{tag:l,tags:c}=n(d);if(!l)return;window.dataLayer||Kt({tags:c}),document.head.querySelector("script[data-gtag]")||Zt({script:[{src:Yt(o.url,{id:l.id}),"data-gtag":""}]})}};function i(d){{const{tag:l}=n(d);l&&bi(l.id)}}function r(d){{const{tag:l}=n(d);l&&yi(l.id)}}return{gtag:e,initialize:a,disableAnalytics:i,enableAnalytics:r}}class Ge{constructor(t,e){y(this,"min");y(this,"max");y(this,"enable",!0);this.min=t??void 0,this.max=e??void 0}setEnable(t=!0){this.enable=t}setRange(t,e){this.min=t??void 0,this.max=e??void 0}}class qe{constructor(t,e){y(this,"eventsIn",new Array);y(this,"eventsOut",new Array);y(this,"stringResponsive");y(this,"state");this.stringResponsive=t,this.state=e}addIn(t){this.eventsIn.includes(t)||this.eventsIn.push(t),this.stringResponsive.state==this.state&&t()}removeIn(t){const e=this.eventsIn.indexOf(t);e!==-1&&this.eventsIn.splice(e,1)}callIn(){this.eventsIn.forEach(t=>{t()})}addOut(t){this.eventsOut.includes(t)||this.eventsOut.push(t),this.stringResponsive.state!=this.state&&t()}removeOut(t){const e=this.eventsOut.indexOf(t);e!==-1&&this.eventsOut.splice(e,1)}callOut(){this.eventsOut.forEach(t=>{t()})}}const _e=class _e{constructor(){y(this,"mobileQuery");y(this,"tabletQuery");y(this,"laptopQuery");y(this,"desktopQuery");y(this,"mobileMatchMedia");y(this,"tabletMatchMedia");y(this,"laptopMatchMedia");y(this,"desktopMatchMedia");y(this,"mobile");y(this,"tablet");y(this,"laptop");y(this,"desktop");y(this,"onMobileEvent");y(this,"onTabletEvent");y(this,"onLaptopEvent");y(this,"onDesktopEvent");y(this,"_state",0);this.mobileQuery=new Ge(void 0,359),this.tabletQuery=new Ge(360,1079),this.laptopQuery=new Ge(1080,1365),this.desktopQuery=new Ge(1366,void 0),this.mobileMatchMedia=window.matchMedia("screen and (max-width: 359px)"),this.tabletMatchMedia=window.matchMedia("screen and (min-width: 360px) and (min-width: 1079px)"),this.laptopMatchMedia=window.matchMedia("screen and (min-width: 1080px) and (min-width: 1365px)"),this.desktopMatchMedia=window.matchMedia("screen and (min-width: 1366px)"),this.onMobileEvent=this.onMobileQuery.bind(this),this.onTabletEvent=this.onTabletQuery.bind(this),this.onLaptopEvent=this.onLaptopQuery.bind(this),this.onDesktopEvent=this.onDesktopQuery.bind(this),this.mobile=new qe(this,0),this.tablet=new qe(this,1),this.laptop=new qe(this,2),this.desktop=new qe(this,3),this.updateElements()}get state(){return this._state}static getInstance(){return _e.instance||(_e.instance=new _e),_e.instance}setQuery(t){t.mobile?(this.mobileQuery.setEnable(t.mobile.enable??this.mobileQuery.enable),this.mobileQuery.setRange(t.mobile.min==null?this.mobileQuery.min:t.mobile.min,t.mobile.max??this.mobileQuery.max)):this.mobileQuery.setEnable(!1),t.tablet?(this.tabletQuery.setEnable(t.tablet.enable??this.tabletQuery.enable),this.tabletQuery.setRange(t.tablet.min==null?this.tabletQuery.min:t.tablet.min,t.tablet.max??this.tabletQuery.max)):this.tabletQuery.setEnable(!1),t.laptop?(this.laptopQuery.setEnable(t.laptop.enable??this.laptopQuery.enable),this.laptopQuery.setRange(t.laptop.min==null?this.laptopQuery.min:t.laptop.min,t.laptop.max??this.laptopQuery.max)):this.laptopQuery.setEnable(!1),t.desktop?(this.desktopQuery.setEnable(t.desktop.enable??this.desktopQuery.enable),this.desktopQuery.setRange(t.desktop.min==null?this.desktopQuery.min:t.desktop.min,t.desktop.max??this.desktopQuery.max)):this.desktopQuery.setEnable(!1),this.setupQueries(),this.matchMedia(),this.updateElements()}setupQueries(){this.mobileMatchMedia.onchange=null,this.mobileQuery.enable&&(this.mobileQuery.min!=null&&this.mobileQuery.max!=null?this.mobileMatchMedia=window.matchMedia(`screen and (min-width: ${this.mobileQuery.min}px) and (max-width: ${this.mobileQuery.max}px)`):(this.mobileQuery.min!=null&&(this.mobileMatchMedia=window.matchMedia(`screen and (min-width: ${this.mobileQuery.min}px)`)),this.mobileQuery.max!=null&&(this.mobileMatchMedia=window.matchMedia(`screen and (max-width: ${this.mobileQuery.max}px)`))),this.mobileMatchMedia.onchange=this.onMobileEvent),this.tabletMatchMedia.onchange=null,this.tabletQuery.enable&&(this.tabletQuery.min!=null&&this.tabletQuery.max!=null?this.tabletMatchMedia=window.matchMedia(`screen and (min-width: ${this.tabletQuery.min}px) and (max-width: ${this.tabletQuery.max}px)`):(this.tabletQuery.min!=null&&(this.tabletMatchMedia=window.matchMedia(`screen and (min-width: ${this.tabletQuery.min}px)`)),this.tabletQuery.max!=null&&(this.tabletMatchMedia=window.matchMedia(`screen and (max-width: ${this.tabletQuery.max}px)`))),this.tabletMatchMedia.onchange=this.onTabletEvent),this.laptopMatchMedia.onchange=null,this.laptopQuery.enable&&(this.laptopQuery.min!=null&&this.laptopQuery.max!=null?this.laptopMatchMedia=window.matchMedia(`screen and (min-width: ${this.laptopQuery.min}px) and (max-width: ${this.laptopQuery.max}px)`):(this.laptopQuery.min!=null&&(this.laptopMatchMedia=window.matchMedia(`screen and (min-width: ${this.laptopQuery.min}px)`)),this.laptopQuery.max!=null&&(this.laptopMatchMedia=window.matchMedia(`screen and (max-width: ${this.laptopQuery.max}px)`))),this.laptopMatchMedia.onchange=this.onLaptopEvent),this.desktopMatchMedia.onchange=null,this.desktopQuery.enable&&(this.desktopQuery.min!=null&&this.desktopQuery.max!=null?this.desktopMatchMedia=window.matchMedia(`screen and (min-width: ${this.desktopQuery.min}px) and (max-width: ${this.desktopQuery.max}px)`):(this.desktopQuery.min!=null&&(this.desktopMatchMedia=window.matchMedia(`screen and (min-width: ${this.desktopQuery.min}px)`)),this.desktopQuery.max!=null&&(this.desktopMatchMedia=window.matchMedia(`screen and (max-width: ${this.desktopQuery.max}px)`))),this.desktopMatchMedia.onchange=this.onDesktopEvent)}matchMedia(){this.mobileMatchMedia.matches&&this.mobileQuery.enable&&(this._state=0),this.tabletMatchMedia.matches&&this.tabletQuery.enable&&(this._state=1),this.laptopMatchMedia.matches&&this.laptopQuery.enable&&(this._state=2),this.desktopMatchMedia.matches&&this.desktopQuery.enable&&(this._state=3),this.updateElements()}onMobileQuery(t){t.matches?(this._state=0,this.mobile.callIn()):this.mobile.callOut(),this.updateElements()}onTabletQuery(t){t.matches?(this._state=1,this.tablet.callIn()):this.tablet.callOut(),this.updateElements()}onLaptopQuery(t){t.matches?(this._state=2,this.laptop.callIn()):this.laptop.callOut(),this.updateElements()}onDesktopQuery(t){t.matches?(this._state=3,this.desktop.callIn()):this.desktop.callOut(),this.updateElements()}updateElements(){document.querySelectorAll("[data-string-mobile], [data-string-tablet], [data-string-laptop], [data-string-desktop]").forEach(e=>{const n=e.getAttribute("data-string-mobile"),a=e.getAttribute("data-string-tablet"),i=e.getAttribute("data-string-laptop"),r=e.getAttribute("data-string-desktop");this._state===0&&n!==null||this._state===1&&a!==null||this._state===2&&i!==null||this._state===3&&r!==null?e.style.display="":e.style.display="none"})}};y(_e,"instance");let et=_e,me=null;const ve=class ve{constructor(){y(this,"localStorage");y(this,"onAcceptEvents",[]);y(this,"onAcceptAllEvents",[]);y(this,"onDeniedEvents",[]);y(this,"onSettingsChangeEvents",[]);y(this,"onSaveSettingsEvents",[]);y(this,"onOpenSettingsEvents",[]);y(this,"cookieConsent","");y(this,"settings",{});me=document,this.localStorage=localStorage,this.addGoogleFonts()}static getInstance(){return ve.instance||(ve.instance=new ve),ve.instance}addGoogleFonts(){const t=document.head,e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",t.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",t.appendChild(n);const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",t.appendChild(a)}acceptAll(){this.cookieConsent="acceptAll",this.localStorage.setItem("cookieConsent","acceptAll"),this.onAcceptAllEvents.forEach(t=>t())}accept(){this.cookieConsent="accept",this.localStorage.setItem("cookieConsent","accept"),this.onAcceptEvents.forEach(t=>t())}deny(){this.cookieConsent="deny",this.localStorage.setItem("cookieConsent","deny"),this.onDeniedEvents.forEach(t=>t()),this.deleteAllCookies()}check(){const t=this.localStorage.getItem("cookieConsent");switch(t!=null&&(this.cookieConsent=t),this.cookieConsent){case"accept":this.accept();break;case"acceptAll":this.acceptAll();break;case"deny":this.deny();break}}set(t,e,n={}){if(this.cookieConsent==="deny"){console.warn("An attempt to write a cookie without the user's consent");return}n={path:"/",...n},n.expires instanceof Date&&(n.expires=n.expires.toUTCString());let a=encodeURIComponent(t)+"="+encodeURIComponent(e);for(const i in n){a+="; "+i;const r=n[i];r!==!0&&(a+="="+r)}document.cookie=a}get(t){const e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}has(t){return document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"))}delete(t){this.set(t,"",{"max-age":-1})}on(t,e){switch(t){case"accept":this.onAcceptEvents.push(e);break;case"acceptAll":this.onAcceptAllEvents.push(e);break;case"deny":this.onDeniedEvents.push(e);break;case"settingsChange":this.onSettingsChangeEvents.push(e);break;case"saveSettings":this.onSaveSettingsEvents.push(e);break;case"openSettings":this.onOpenSettingsEvents.push(e);break}}deleteAllCookies(){const t=document.cookie.split(";");for(const e of t){const n=e.indexOf("="),a=n>-1?e.substr(0,n):e;document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}use(t,e){this.settings[t]=e}showSettings(t){const{title:e,description:n,privacyLink:a,subtitle:i,email:r,contact:d}=t,l=document.createElement("div");l.className="fdcm--popup fdcm--setup -light-theme";const c=document.createElement("span");c.className="fdcm--overlay",setTimeout(()=>{c.className="fdcm--overlay -ready"},0),c.onclick=()=>{document.body.removeChild(l)};const C=document.createElement("div");C.id="cookie-settings-container",C.className="fdcm--setting-container",setTimeout(()=>{C.className="fdcm--setting-container -ready"},0);const A=document.createElement("div");A.classList.add("fdcm--header");const f=document.createElement("div");f.classList.add("fdcm--title"),f.innerHTML=e||"Cookie Settings";const S=document.createElement("button");S.classList.add("fdcm--icon-close"),S.onclick=()=>{c.className="fdcm--overlay -leave",C.className="fdcm--setting-container -leave",setTimeout(()=>{document.body.removeChild(l)},300)},A.appendChild(f),A.appendChild(S),C.appendChild(A);const g=document.createElement("div");g.className="fdcm--title",g.innerHTML=i||"Subtitle";const m=document.createElement("div");if(m.className="fdcm--description",m.innerHTML=n||"We use cookies to improve your experience on our site. Please review and accept cookies.",a){const w=document.createElement("a");w.href=a,w.innerHTML="Privacy Policy",w.target="_blank",m.appendChild(w)}const M=document.createElement("div");M.className="fdcm--body";const E=document.createElement("div");E.className="fdcm--body-scroll";const x=document.createElement("div");x.className="fdcm--settings";const T=Object.entries(this.settings);for(const[w,O]of T){const Q=document.createElement("div");Q.classList.add("fdcm--settings-item"),O.readOnly&&Q.classList.add("-readonly");const B=document.createElement("div");B.classList.add("fdcm--item-head"),B.addEventListener("click",()=>{Q.classList.toggle("-opened")});const Z=document.createElement("label");Z.classList.add("fdcm--label-wrap");const F=document.createElement("div");F.classList.add("fdcm--toggle-container");const Y=document.createElement("div");Y.classList.add("fdcm--toggle");const X=document.createElement("span");X.innerHTML=w,X.classList.add("fdcm--toggle-label"),X.classList.add("fdcm--subtitle");const J=document.createElement("input");J.type="checkbox",J.checked=O.value,J.setAttribute("data-key",w),J.readOnly=O.readOnly,J.onchange=se=>{se.target.checked?O.accept():O.deny(),this.onSettingsChangeEvents.forEach(oe=>{oe()})};const ne=document.createElement("div");ne.classList.add("fdcm--item-conent");const z=document.createElement("p");z.innerHTML=O.description,F.appendChild(J),F.appendChild(Y),Z.appendChild(F),Z.appendChild(X),B.appendChild(Z);const q=document.createElement("div");q.classList.add("fdcm--icon-dropdown"),B.appendChild(q),Q.appendChild(B),x.appendChild(Q),ne.appendChild(z),Q.appendChild(ne)}const $=document.createElement("div");if($.className="fdcm--contact",$.innerHTML=(d==null?void 0:d.description)||"For any queries in relation to our policy on cookies and your choices, please ",r){const w=document.createElement("a");w.href=`mailto:${r}`,w.innerHTML="contact us",w.className="fdcm--link -secondary",$.appendChild(w)}E.appendChild(g),E.appendChild(m),E.appendChild(x),E.appendChild($),M.appendChild(E),C.appendChild(M);const H=document.createElement("div");H.className="fdcm--actions";const h=document.createElement("button");h.innerHTML="Accept all",h.className="accept-all fdcm--button -primary",h.onclick=()=>{this.acceptAll(),me.getElementById("cookie-consent-container")!=null&&(me.getElementById("cookie-consent-container").classList.add("-leave"),setTimeout(()=>{document.body.removeChild(me.getElementById("cookie-consent-container"))},300)),l!=null&&(c.className="fdcm--overlay -leave",C.className="fdcm--setting-container -leave",setTimeout(()=>{document.body.removeChild(l)},300))};const G=document.createElement("button");G.innerHTML="Reject all",G.className="regect-all fdcm--button -secondary",G.onclick=()=>{this.deny(),c.className="fdcm--overlay -leave",C.className="fdcm--setting-container -leave",me.getElementById("cookie-consent-container").classList.add("-leave"),setTimeout(()=>{document.body.removeChild(me.getElementById("cookie-consent-container")),document.body.removeChild(l)},300)};const b=document.createElement("button");b.innerHTML="Save settings",b.className="save-settings fdcm--button -secondary",b.onclick=()=>{const w=Object.keys(this.settings).filter(Q=>{const B=x.querySelector(`input[type="checkbox"][data-key="${Q}"]`);return B&&B.checked}),O=Object.keys(this.settings).filter(Q=>{const B=x.querySelector(`input[type="checkbox"][data-key="${Q}"]`);return B&&!B.checked});this.onSaveSettingsEvents.forEach(Q=>{Q({enabled:w,disabled:O})}),me.getElementById("cookie-consent-container")!=null&&(me.getElementById("cookie-consent-container").classList.add("-leave"),setTimeout(()=>{document.body.removeChild(me.getElementById("cookie-consent-container"))},300)),c.className="fdcm--overlay -leave",C.className="fdcm--setting-container -leave",setTimeout(()=>{document.body.removeChild(l)},300)},H.appendChild(h),H.appendChild(G),H.appendChild(b),C.appendChild(H),l.appendChild(c),l.appendChild(C),document.body.appendChild(l)}show(t,e){const n=document.createElement("div");n.id="cookie-consent-container",n.className="fdcm--container fdcm--setup -light-theme";const a=document.createElement("div");a.classList.add("fdcm--title"),a.innerHTML=t||"Cookie Consent",n.appendChild(a);const i=document.createElement("div");i.className="fdcm--description",i.innerHTML=e||"We use cookies to improve your experience on our site. ";const r=document.createElement("button");r.id="fdcm--open-advanced",r.className="fdcm--link",r.innerHTML="Customize Settings",r.onclick=()=>{this.onOpenSettingsEvents.forEach(C=>{C()})},i.appendChild(r),n.appendChild(i);const d=document.createElement("div");d.className="fdcm--actions";const l=document.createElement("button");l.innerHTML="Accept all",l.className="accept-all fdcm--button -primary",l.onclick=()=>{this.acceptAll(),n.className="fdcm--container fdcm--setup -light-theme -leave",setTimeout(()=>{document.body.removeChild(n)},300)};const c=document.createElement("button");c.innerHTML="Reject all",c.className="reject-all fdcm--button -secondary",c.onclick=()=>{this.deny(),n.className="fdcm--container fdcm--setup -light-theme -leave",setTimeout(()=>{document.body.removeChild(n)},300)},d.appendChild(l),d.appendChild(c),n.appendChild(d),document.body.appendChild(n)}};y(ve,"instance");let tt=ve,gt=null;class _t{constructor(t){y(this,"storage");this.storage=t}get(t,e=""){this.checkTimestamp(t);let n=this.storage.getItem(t);return n==null?e:JSON.parse(n).value}set(t,e,n={days:30}){let a=this.getTimestamp(n);this.storage.setItem(t,JSON.stringify({timestamp:a,value:e}))}has(t){return this.checkTimestamp(t),this.storage.getItem(t)!==null}delete(t){this.storage.removeItem(t)}getTimestamp(t){let e=new Date;return t.seconds&&e.setSeconds(e.getSeconds()+t.seconds),t.minutes&&e.setMinutes(e.getMinutes()+t.minutes),t.hours&&e.setHours(e.getHours()+t.hours),t.days&&e.setDate(e.getDate()+t.days),t.months&&e.setMonth(e.getMonth()+t.months),t.years&&e.setFullYear(e.getFullYear()+t.years),e.getTime()}checkTimestamp(t){let e=this.storage.getItem(t);if(!e)return;let{timestamp:n}=JSON.parse(e),a=new Date().getTime();n<a&&this.delete(t)}}const be=class be{constructor(){y(this,"_local",new _t(localStorage));y(this,"_session",new _t(sessionStorage));gt=document,gt.querySelectorAll("[data-string-storage]").forEach(t=>{const e=a=>{let i=a.getAttribute("data-string-id");if(i==null)return;let r=this.local.get(`__string-input-${i}`);if(a.getAttribute("data-string-storage-disable")==null){if(a.value=r,r){let d=new Event("focusout");a.dispatchEvent(d)}a.addEventListener("keydown",()=>{setTimeout(()=>{this.local.set(`__string-input-${i}`,a.value)},0)})}};t.querySelectorAll("input").forEach(e),t.querySelectorAll("textarea").forEach(e),t.querySelectorAll("select").forEach(a=>{let i=a.getAttribute("data-string-id");if(i==null)return;let r=this.local.get(`__string-input-${i}`);a.value=r,a.addEventListener("change",()=>{setTimeout(()=>{this.local.set(`__string-input-${i}`,a.value)},0)})});const n=a=>{let i=a.getAttribute("data-string-id");i!=null&&this.local.delete(`__string-input-${i}`)};t.addEventListener("submit",a=>{t.querySelectorAll("input").forEach(n),t.querySelectorAll("textarea").forEach(n),t.querySelectorAll("select").forEach(n)})})}get local(){return this._local}get session(){return this._session}static getInstance(){return be.instance||(be.instance=new be),be.instance}};y(be,"instance");let at=be;const Mi={xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0",style:{visibility:"none"}},Ci=vt(`<defs><filter id="p1"><feFlood x="0" y="0" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="4" height="4"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="2.5" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter><filter id="p2"><feFlood x="0.5" y="0.5" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="4" height="4"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="2.5" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter><filter id="p3"><feFlood x="1" y="1" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="4" height="4"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="2.5" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter><filter id="p4"><feFlood x="1" y="1" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="16" height="16"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="10" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter><filter id="p5"><feFlood x="0.5" y="0.5" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="12" height="12"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="8" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter><filter id="p6"><feFlood x="0" y="0" height="0.5" width="0.5" flood-color="white" flood-opacity="1"></feFlood><feComposite width="8" height="8"></feComposite><feTile result="a"></feTile><feComposite in="SourceGraphic" in2="a" operator="in" result="pixels"></feComposite><feMorphology in="pixels" operator="dilate" radius="5" result="dilated"></feMorphology><feColorMatrix in="dilated" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 100 -50
          "></feColorMatrix></filter></defs>`,1),xi=[Ci],ki=300,Ei=300,Ti=300,Li=75,Ri=Me({__name:"default",async setup(o){let t,e;const a=Ae().$globalClass,i=Tt(),r=I(null);let d=null,l=null;const c=I(null),C=I(!1);let A=0,f=-1;const S=()=>{if(A=requestAnimationFrame(S),!c.value)return;const u=E.value?le():null;C.value=(u==null?void 0:u.mode)==="grid";const p=(u==null?void 0:u.getListScrollProgress())??0;Math.abs(p-f)<5e-4||(f=p,c.value.style.setProperty("--scroll-progress",p.toFixed(4)))},g=St(),m=st(),M=We();ie(()=>m.path);const E=ie(()=>sa(m.path)),x=rt();let T=null,$=!1;const{isForegroundOpen:H,openForeground:h,closeForeground:G}=Ze(),{centerProject:b}=Et(),{isKoboModalActive:w}=Lt(),{isPaginationActive:O,setPaginationActive:Q}=Mt(),{resolve:B}=vi(),Z=ie(()=>m.path.startsWith("/exp/")||m.path.startsWith("/dev/exp-")),F=I(null),{close:Y}=ea();let X="";async function J(){await Y()}we(()=>{window.addEventListener("pagination-navigate",z),window.addEventListener("reopen-exp-modal",ne)}),Pe(()=>{window.removeEventListener("pagination-navigate",z),window.removeEventListener("reopen-exp-modal",ne)});function ne(u){if(F.value){F.value.cancelClose(),z(u);return}const p=u.detail;p&&M.push(p)}function z(u){var N;const p=u.detail;p&&(X=p,(N=F.value)==null||N.playPaginationSwap(async()=>{!await B(p)||p!==X||(await le().waitForPaginationSettled(),!(p!==X||m.path===p)&&await M.replace(p))}))}const q=I(!1),se=I(null);let oe=null,ee=null,Ce="",fe=0,xe=null,de=!1;const ce=(u,p=ki,N=Ei,U=Ti,W=Li,s)=>{se.value&&(oe!==null&&clearTimeout(oe),fe&&cancelAnimationFrame(fe),q.value=!1,fe=requestAnimationFrame(()=>{fe=0;const v=Ce,j=u.length>=v.length?p+N:U+p;q.value=!0,oe=setTimeout(()=>{oe=null,q.value=!1},j),!ee&&se.value&&(ee=Xt(se.value)),ee&&(Ce=u,Vt(ee,v,u,p,N,U,W,s))}))};ae(b,u=>{de||w.value||x.active.value||ce(u?u.title:"")},{flush:"post"}),ae(x.active,u=>{u||de||w.value||!b.value||ce(b.value.title)},{flush:"post"}),ae(w,u=>{de||ce(u||!b.value?"":b.value.title)},{flush:"post"});function He(u){if(u==="/about")return"ABOUT";const p=wt.find(N=>N.slug===u||u.startsWith(N.slug));return p?p.title:"FD.EXP"}ae(x.phase,u=>{if(u!=="idle"||de)return;const p=Le.list.intro.exp;p.enabled&&(de=!0,ee?(Ve(ee),ee.runs[0].node.data=""):se.value&&(se.value.textContent=""),Ce="",ce(He(m.path),p.growthDurationMs,p.revealDurationMs,p.hideHoldDurationMs,p.stepMs,()=>{xe=setTimeout(()=>{xe=null,ce("",p.hideShrinkDurationMs,p.revealDurationMs,p.hideHoldDurationMs,p.stepMs,()=>{de=!1,b.value&&!w.value&&ce(b.value.title)})},Math.max(0,p.hideDelayMs))}))},{flush:"post"}),ae(H,u=>{u&&i.setFrameGlowLevel(zt().modalDimLevel)});function $e(u,p=!1){if(u==="/"||Be(u)!==null?(i.resume(),i.setFrameGlowActive(u==="/")):(i.setFrameGlowActive(!1),!p&&!O.value&&i.pause()),!E.value){i.setScene(null),G();return}if(i.setScene(le()),u!=="/"){h();return}G(),!ta()&&le().recoverStaleOpenTransition()}let ke=!1;async function Qe(u,p){if(ke)return;ke=!0;const N=le(),U=p?Be(u):null;let W=Promise.resolve();U&&(aa(U)!==null&&!ye().isMobile&&ge.animation.closeAnimationType==="scatter"&&ge.animation.pagination.enabled&&Q(!0),W=new Promise(s=>N.openProjectFromRoute(U,s))),await Promise.all([N.ready,W]),!$&&(T=i.onNextFrame(N,()=>{T=null,x.markReady()}))}ae(()=>m.path,(u,p)=>{$e(u,p==="/"),(u==="/"||Be(u)!==null)&&Qe(u,p!=="/"),a.emit("page-change")});const{initialize:Ee,disableAnalytics:Ye,enableAnalytics:Te}=wi();return Pe(()=>{$=!0,T==null||T(),d&&window.removeEventListener("resize",d),l&&document.removeEventListener("visibilitychange",l),oe!==null&&clearTimeout(oe),xe!==null&&clearTimeout(xe),fe&&cancelAnimationFrame(fe),ee&&Ve(ee),A&&cancelAnimationFrame(A),i.dispose(),ia(),x.dispose()}),we(()=>{x.start(),r.value?(i.mount(r.value),d=()=>i.resize(),window.addEventListener("resize",d),l=()=>i.setHidden(document.hidden),document.addEventListener("visibilitychange",l),l(),$e(m.path),m.path==="/"||Be(m.path)!==null?Qe(m.path,!0):le().ready.then(()=>x.markReady())):x.markReady(),A=requestAnimationFrame(S);let u=at.getInstance();const p=tt.getInstance();p.use("Google Analytics",{accept:()=>{u.local.set("gaAccept","1")},deny:()=>{u.local.set("gaAccept","0")},value:!0,description:"Google Analytics cookies are used to collect information about how visitors interact with our website. These cookies track data such as the number of visitors, the pages they visit, and the sources that referred them to our site. The data gathered is aggregated and anonymized, helping us understand website usage patterns and improve user experience. These cookies do not identify individual users and all information is used for statistical analysis only."}),u.local.has("cookies-accept")==!1&&p.show("Cookies","This website collects cookies to deliver better user experience and analyze our website traffic and performance; we never collect any personal data."),(localStorage.getItem("cookieConsent")=="acceptAll"||localStorage.getItem("cookieConsent")=="accept")&&u.local.get("gaAccept")=="1"&&(Ee("G-TJ4JH0PTCM"),Te("G-TJ4JH0PTCM")),p.on("openSettings",()=>{p.showSettings({title:"Cookies settings",subtitle:"Cookies",description:"This website collects cookies to deliver better user experience and analyze our website traffic and performance; we never collect any personal data.",email:"hello@fiddle.digital"})}),p.on("acceptAll",()=>{u.local.set("gaAccept","1"),u.local.set("cookies-accept","true"),Ee("G-M7JNWG18P3"),Te("G-M7JNWG18P3")}),p.on("deny",()=>{u.local.set("cookies-accept","true"),Ye("G-M7JNWG18P3")}),p.on("accept",()=>{u.local.set("cookies-accept","true"),u.local.get("gaAccept")=="1"&&(Ee("G-M7JNWG18P3"),Te("G-M7JNWG18P3"))}),p.on("saveSettings",()=>{u.local.set("cookies-accept","true"),u.local.get("gaAccept")=="1"&&(Ee("G-M7JNWG18P3"),Te("G-M7JNWG18P3"))});const N=et.getInstance();N.setQuery({mobile:{min:0,max:1024,enable:!0},desktop:{min:1025,max:void 0,enable:!0}}),N.mobile.addIn(()=>{ye().setMobile()}),N.desktop.addIn(()=>{ye().setDesktop()}),ie(()=>ye().isMobile),setTimeout(()=>{const W=document.documentElement;W.classList.add("-loaded"),W.classList.add("-ready")},0),a.on("page-change",()=>{a.emit("page-change-call")}),a.emit("page-change");const U=()=>{let W=document.documentElement.clientHeight*.01,s=document.documentElement.clientWidth*.01;document.documentElement.style.setProperty("--vh",`${W}px`),document.documentElement.style.setProperty("--vw",`${s}px`)};window.innerWidth>1024&&window.addEventListener("resize",U),a.on("index-about-focus",()=>{document.documentElement.classList.add("-about")}),a.on("index-about-blur",()=>{document.documentElement.classList.remove("-about")})}),[t,e]=Jt(()=>ra("page-projects",()=>g.fetchProjectsPage())),await t,e(),(u,p)=>{const N=ga,U=Qa,W=Va,s=Ut,v=na,P=pi,j=_i;return k(),L(ot,null,[V(N),(k(),L("svg",Mi,xi)),D("canvas",{ref_key:"glCanvas",ref:r,class:"app-gl-canvas"},null,512),_(E)?(k(),Se(U,{key:0})):he("",!0),V(W),_(Z)?(k(),Se(v,{key:1,ref_key:"expModalRef",ref:F,onClose:J},{default:Ke(()=>[V(s)]),_:1},512)):(k(),Se(s,{key:2})),D("span",{ref_key:"labelEl",ref:se,class:R(["exp-name-hover -h3 -m-h4 -up",{"-hover":q.value}])},null,2),D("span",{ref_key:"progressEl",ref:c,class:R(["progress",{"-hidden":_(H)||C.value}])},null,2),V(P),V(j)],64)}}});export{Ri as default};
