import{n as e}from"./ByEDe0N9.js";import{A as t,B as n,Ct as r,D as i,E as a,F as o,G as s,H as c,K as l,N as u,P as d,R as f,St as p,V as m,W as h,_ as g,at as _,c as v,d as y,et as b,f as x,g as S,h as C,l as w,nt as T,r as E,u as D,wt as O,x as k,xt as A,y as j,z as M}from"./BEpUzCTA.js";import{nt as N}from"./BG422gLi.js";import{a as P,c as F,i as I,n as L,o as ee,r as R,s as te}from"./PONvBhuW.js";var z={heading1:`heading1`,heading2:`heading2`,heading3:`heading3`,heading4:`heading4`,heading5:`heading5`,heading6:`heading6`,paragraph:`paragraph`,preformatted:`preformatted`,strong:`strong`,em:`em`,listItem:`list-item`,oListItem:`o-list-item`,list:`group-list-item`,oList:`group-o-list-item`,image:`image`,embed:`embed`,hyperlink:`hyperlink`,label:`label`,span:`span`},B=e=>{let t=/^(\/(?!\/)|#)/.test(e),n=!t&&!/^https?:\/\//.test(e);return t&&!n},V=(e,t={})=>{if(e&&(`link_type`in e?P(e):e)){let n=`target`in e?e.target:void 0,r=ee(e,t.linkResolver)??void 0,i=typeof r==`string`&&!B(r);return{href:r,target:n,rel:(t.rel?t.rel({href:r,isExternal:i,target:n}):i?`noreferrer`:void 0)??void 0}}return{}},H=()=>(++H.i).toString();H.i=0;var ne=e=>{let t=ie(e),n=[];for(let e=0;e<t.length;e++)n.push(ae(t[e]));return{key:H(),children:n}},re=(e,t=[])=>({key:H(),type:e.type,text:`text`in e?e.text:void 0,node:e,children:t}),U=e=>re({type:z.span,text:e,spans:[]}),ie=e=>{let t=e.slice(0);for(let e=0;e<t.length;e++){let n=t[e];if(n.type===z.listItem||n.type===z.oListItem){let r=[n];for(;t[e+1]&&t[e+1].type===n.type;)r.push(t[e+1]),t.splice(e,1);n.type===z.listItem?t[e]={type:z.list,items:r}:t[e]={type:z.oList,items:r}}}return t},ae=e=>{if(`text`in e)return re(e,W(e.spans,e));if(`items`in e){let t=[];for(let n=0;n<e.items.length;n++)t.push(ae(e.items[n]));return re(e,t)}return re(e)},W=(e,t,n)=>{if(!e.length)return[U(t.text)];let r=e.slice(0);r.sort((e,t)=>e.start-t.start||t.end-e.end);let i=[];for(let e=0;e<r.length;e++){let a=r[e],o=n&&n.start||0,s=a.start-o,c=a.end-o,l=t.text.slice(s,c),u=[];for(let t=e;t<r.length;t++){let e=r[t];e!==a&&(e.start>=a.start&&e.end<=a.end?(u.push(e),r.splice(t,1),t--):e.start<a.end&&e.end>a.start&&(u.push({...e,end:a.end}),r[t]={...e,start:a.end}))}e===0&&s>0&&i.push(U(t.text.slice(0,s)));let d={...a,text:l};i.push(re(d,W(u,{...t,text:l},a))),c<t.text.length&&i.push(U(t.text.slice(c,r[e+1]?r[e+1].start-o:void 0)))}return i},oe=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),se=(e,t)=>{let n=new URL(e);for(let e in t){let r=oe(e),i=t[e];i===void 0?n.searchParams.delete(r):Array.isArray(i)?n.searchParams.set(r,i.join(`,`)):n.searchParams.set(r,`${i}`)}let r=n.searchParams.get(`s`);return r&&(n.searchParams.delete(`s`),n.searchParams.append(`s`,r)),n.toString()},ce=(e,{pixelDensities:t,...n})=>t.map(t=>`${se(e,{...n,dpr:t})} ${t}x`).join(`, `),le=(e,{widths:t,...n})=>t.map(t=>`${se(e,{...n,w:void 0,h:void 0,height:void 0,width:t})} ${t}w`).join(`, `),ue=[640,828,1200,2048,3840],de=(e,t={})=>{if(e&&R(e)){let{widths:n=ue,...r}=t,{url:i,dimensions:a,id:o,alt:s,copyright:c,edit:l,...u}=e,d=Object.values(u);return n===`thumbnails`&&d.length<1&&(n=ue),{src:se(i,r),srcset:n===`thumbnails`?[le(i,{...r,widths:[a.width]}),...d.map(e=>le(e.url,{...r,widths:[e.dimensions.width]}))].join(`, `):le(e.url,{...r,widths:n})}}return null},fe=[1,2,3],G=(e,t={})=>{if(e&&R(e)){let{pixelDensities:n=fe,...r}=t;return{src:se(e.url,r),srcset:ce(e.url,{...r,pixelDensities:n})}}return null},pe=[`src`,`srcset`,`alt`,`width`,`height`],K=j({name:`PrismicImage`,__name:`PrismicImage`,props:{field:{type:null,required:!0},imgixParams:{type:null,required:!1},alt:{type:String,required:!1},fallbackAlt:{type:String,required:!1},width:{type:[Number,String],required:!1},height:{type:[Number,String],required:!1},widths:{type:null,required:!1},pixelDensities:{type:null,required:!1}},setup(e){let t=e,n=e=>{if(typeof e==`number`||e===void 0)return e;{let t=Number.parseInt(e);return Number.isNaN(t)?void 0:t}},r=v(()=>{if(!I.imageThumbnail(t.field))return;let e,r;if(t.widths||!t.pixelDensities){let n=de(t.field,{...t.imgixParams,widths:t.widths===`defaults`?void 0:t.widths});e=n.src,r=n.srcset}else if(t.pixelDensities){let n=G(t.field,{...t.imgixParams,pixelDensities:t.pixelDensities===`defaults`?void 0:t.pixelDensities});e=n.src,r=n.srcset}let i=t.field.dimensions.width/t.field.dimensions.height,a=n(t.width),o=n(t.height),s=a??t.field.dimensions.width,c=o??t.field.dimensions.height;return a!=null&&o==null?c=a/i:a==null&&o!=null&&(s=o*i),{src:e,srcSet:r,alt:t.alt??(t.field.alt||t.fallbackAlt),width:Math.round(s),height:Math.round(c)}});return(e,t)=>r.value?(o(),x(`img`,{key:0,src:r.value.src,srcset:r.value.srcSet,alt:r.value.alt,width:r.value.width,height:r.value.height},null,8,pe)):y(`v-if`,!0)}}),me=e=>{let t=/^\/(?!\/)/.test(e),n=!t&&!/^https?:\/\//i.test(e);return t&&!n},q=`router-link`,he=`a`,J=`noreferrer`,Y=j({name:`PrismicLink`,__name:`PrismicLink`,props:{linkResolver:{type:Function,required:!1},rel:{type:[String,Function],required:!1},internalComponent:{type:null,required:!1},externalComponent:{type:null,required:!1},field:{type:null,required:!1},document:{type:null,required:!1}},setup(e){let t=e,{linkResolver:n,components:r}=L(),i=v(()=>V(t.field||t.document,{linkResolver:t.linkResolver||n,rel(e){return t.rel?typeof t.rel==`function`?t.rel(e):t.rel:e.isExternal?J:void 0}})),a=v(()=>me(i.value.href||``)?t.internalComponent||r?.linkInternalComponent||q:t.externalComponent||r?.linkExternalComponent||he),c=v(()=>a.value===`a`?{href:i.value.href,target:i.value.target,rel:i.value.rel}:{to:i.value.href,target:i.value.target,rel:i.value.rel});return(e,n)=>(o(),D(m(a.value),p(k(c.value)),{default:s(()=>[M(e.$slots,`default`,{},()=>[S(O(t.field&&`text`in t.field?t.field.text:void 0),1)])]),_:3},16))}}),ge=e=>!!e&&(typeof e==`function`||typeof e==`object`&&(`render`in e&&typeof e.render==`function`||`setup`in e&&typeof e.setup==`function`||`__file`in e&&!!e.__file||`__name`in e&&!!e.__name||`props`in e&&typeof e.props==`object`)),_e=[`dir`],ve=[`dir`],ye=[`dir`],be=[`dir`],xe=[`dir`],Se=[`dir`],Ce=[`dir`],we=[`dir`],Te=[`dir`],Ee={key:15,class:`block-img`},De=[`data-oembed`,`data-oembed-type`,`data-oembed-provider`,`innerHTML`],Oe={key:0},ke=j({name:`PrismicRichTextDefaultComponent`,__name:`PrismicRichTextDefaultComponent`,props:{node:{type:null,required:!0},linkResolver:{type:Function,required:!1},shorthand:{type:Object,required:!1}},setup(e){let t=e,n=v(()=>t.node.type!==`image`&&t.node.type!==`hyperlink`&&t.node.type!==`label`&&t.node.type!==`span`?t.shorthand?.as:void 0),r=v(()=>{let{as:e,...n}=t.shorthand??{};return n}),i=v(()=>`direction`in t.node&&t.node.direction===`rtl`?`rtl`:void 0);return(t,c)=>n.value?(o(),D(m(n.value),a({key:0,dir:i.value},r.value),{default:s(()=>[M(t.$slots,`default`)]),_:3},16,[`dir`])):e.node.type===`heading1`?(o(),x(`h1`,a({key:1,dir:i.value},r.value),[M(t.$slots,`default`)],16,_e)):e.node.type===`heading2`?(o(),x(`h2`,a({key:2,dir:i.value},r.value),[M(t.$slots,`default`)],16,ve)):e.node.type===`heading3`?(o(),x(`h3`,a({key:3,dir:i.value},r.value),[M(t.$slots,`default`)],16,ye)):e.node.type===`heading4`?(o(),x(`h4`,a({key:4,dir:i.value},r.value),[M(t.$slots,`default`)],16,be)):e.node.type===`heading5`?(o(),x(`h5`,a({key:5,dir:i.value},r.value),[M(t.$slots,`default`)],16,xe)):e.node.type===`heading6`?(o(),x(`h6`,a({key:6,dir:i.value},r.value),[M(t.$slots,`default`)],16,Se)):e.node.type===`paragraph`?(o(),x(`p`,a({key:7,dir:i.value},r.value),[M(t.$slots,`default`)],16,Ce)):e.node.type===`preformatted`?(o(),x(`pre`,p(a({key:8},r.value)),[M(t.$slots,`default`)],16)):e.node.type===`strong`?(o(),x(`strong`,p(a({key:9},r.value)),[M(t.$slots,`default`)],16)):e.node.type===`em`?(o(),x(`em`,p(a({key:10},r.value)),[M(t.$slots,`default`)],16)):e.node.type===`list-item`?(o(),x(`li`,a({key:11,dir:i.value},r.value),[M(t.$slots,`default`)],16,we)):e.node.type===`o-list-item`?(o(),x(`li`,a({key:12,dir:i.value},r.value),[M(t.$slots,`default`)],16,Te)):e.node.type===`group-list-item`?(o(),x(`ul`,p(a({key:13},r.value)),[M(t.$slots,`default`)],16)):e.node.type===`group-o-list-item`?(o(),x(`ol`,p(a({key:14},r.value)),[M(t.$slots,`default`)],16)):e.node.type===`image`?(o(),x(`p`,Ee,[e.node.linkTo?(o(),D(Y,{key:0,field:e.node.linkTo},{default:s(()=>[g(K,a({field:e.node},r.value),null,16,[`field`])]),_:1},8,[`field`])):(o(),D(K,a({key:1,field:e.node},r.value),null,16,[`field`]))])):e.node.type===`embed`?(o(),x(`div`,a({key:16,"data-oembed":e.node.oembed.embed_url,"data-oembed-type":e.node.oembed.type,"data-oembed-provider":e.node.oembed.provider_name,innerHTML:e.node.oembed.html},r.value),null,16,De)):e.node.type===`hyperlink`?(o(),D(Y,a({key:17,field:e.node.data,"link-resolver":e.linkResolver},r.value),{default:s(()=>[M(t.$slots,`default`)]),_:3},16,[`field`,`link-resolver`])):e.node.type===`label`?(o(),x(`span`,a({key:18,class:e.node.data.label},r.value),[M(t.$slots,`default`)],16)):(o(!0),x(E,{key:19},f(e.node.text.split(`
`),(e,t)=>(o(),x(E,{key:e},[t>0?(o(),x(`br`,Oe)):y(`v-if`,!0),S(O(e),1)],64))),128))}}),Ae=j({name:`PrismicRichTextSerialize`,__name:`PrismicRichTextSerialize`,props:{children:{type:null,required:!0},internalComponents:{type:Object,required:!0}},setup(e){let t=e;return(r,i)=>{let a=n(`PrismicRichTextSerialize`,!0);return o(!0),x(E,null,f(t.children,t=>(o(),D(m(e.internalComponents[t.type].is),{key:t.key,node:t.node,"link-resolver":e.internalComponents[t.type].linkResolver,shorthand:e.internalComponents[t.type].shorthand},{default:s(()=>[t.children.length?(o(),D(a,{key:0,children:t.children,"internal-components":e.internalComponents},null,8,[`children`,`internal-components`])):y(`v-if`,!0)]),_:2},1032,[`node`,`link-resolver`,`shorthand`]))),128)}}}),je=j({name:`PrismicRichText`,__name:`PrismicRichText`,props:{field:{type:Array},linkResolver:{type:Function},components:{type:Object},fallback:{type:[String,Object,Function]}},setup(e){let t=e,{components:{richTextComponents:n}}=L(),r=v(()=>({...n,...t.components})),i=v(()=>ne(t.field||[]).children);function a(e){let n=r.value?.[e];return ge(n)?{is:n}:{is:ke,linkResolver:t.linkResolver,shorthand:n}}let s=v(()=>({heading1:a(`heading1`),heading2:a(`heading2`),heading3:a(`heading3`),heading4:a(`heading4`),heading5:a(`heading5`),heading6:a(`heading6`),paragraph:a(`paragraph`),preformatted:a(`preformatted`),strong:a(`strong`),em:a(`em`),"list-item":a(`listItem`),"o-list-item":a(`oListItem`),"group-list-item":a(`list`),"group-o-list-item":a(`oList`),image:a(`image`),embed:a(`embed`),hyperlink:a(`hyperlink`),label:a(`label`),span:a(`span`)}));return(t,n)=>i.value.length?(o(),D(Ae,{key:0,children:i.value,"internal-components":s.value},null,8,[`children`,`internal-components`])):e.fallback?(o(),D(m(e.fallback),{key:1})):y(`v-if`,!0)}});function Me(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Pe={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Fe={duration:.5,overwrite:!1,delay:0},Ie,Le,Re,ze=1e8,Be=1/ze,Ve=Math.PI*2,He=Ve/4,Ue=0,We=Math.sqrt,Ge=Math.cos,Ke=Math.sin,qe=function(e){return typeof e==`string`},Je=function(e){return typeof e==`function`},Ye=function(e){return typeof e==`number`},Xe=function(e){return e===void 0},Ze=function(e){return typeof e==`object`},Qe=function(e){return e!==!1},$e=function(){return typeof window<`u`},et=function(e){return Je(e)||qe(e)},tt=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},nt=Array.isArray,rt=/(?:-?\.?\d|\.)+/gi,it=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,at=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ot=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,st=/[+-]=-?[.\d]+/,ct=/[^,'"\[\]\s]+/gi,lt=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,dt,ft,pt,mt={},ht={},gt,_t=function(e){return(ht=Yt(e,mt))&&gi},vt=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},yt=function(e,t){return!t&&console.warn(e)},bt=function(e,t){return e&&(mt[e]=t)&&ht&&(ht[e]=t)||mt},xt=function(){return 0},St={suppressEvents:!0,isStart:!0,kill:!1},Ct={suppressEvents:!0,kill:!1},wt={suppressEvents:!0},Tt={},Et=[],Dt={},Ot,kt={},At={},jt=30,Mt=[],Nt=``,Pt=function(e){var t=e[0],n,r;if(Ze(t)||Je(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Mt.length;r--&&!Mt[r].targetTest(t););n=Mt[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Er(e[r],n)))||e.splice(r,1);return e},Ft=function(e){return e._gsap||Pt(Nn(e))[0]._gsap},It=function(e,t,n){return(n=e[t])&&Je(n)?e[t]():Xe(n)&&e.getAttribute&&e.getAttribute(t)||n},Lt=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Bt=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Vt=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ht=function(){var e=Et.length,t=Et.slice(0),n,r;for(Dt={},Et.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ut=function(e){return!!(e._initted||e._startAt||e.add)},Wt=function(e,t,n,r){Et.length&&!Le&&Ht(),e.render(t,n,r||!!(Le&&t<0&&Ut(e))),Et.length&&!Le&&Ht()},Gt=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(ct).length<2?t:qe(e)?e.trim():e},Kt=function(e){return e},qt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jt=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Yt=function(e,t){for(var n in t)e[n]=t[n];return e},Xt=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Ze(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Zt=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Qt=function(e){var t=e.parent||ut,n=e.keyframes?Jt(nt(e.keyframes)):qt;if(Qe(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$t=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},en=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},tn=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},nn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},an=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},on=function(e,t,n,r){return e._startAt&&(Le?e._startAt.revert(Ct):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},sn=function e(t){return!t||t._ts&&e(t.parent)},cn=function(e){return e._repeat?ln(e._tTime,e=e.duration()+e._rDelay)*e:0},ln=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},un=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dn=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Be)||0))},fn=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dn(e),n._dirty||rn(n,e)),e},pn=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=un(e.rawTime(),t),(!t._dur||Dn(0,t.totalDuration(),n)-t._tTime>Be)&&t.render(n,!0)),rn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Be}},mn=function(e,t,n,r){return t.parent&&nn(t),t._start=zt((Ye(n)?n:n||e!==ut?wn(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),en(e,t,`_first`,`_last`,e._sort?`_start`:0),vn(t)||(e._recent=t),r||pn(e,t),e._ts<0&&fn(e,e._tTime),e},hn=function(e,t){return(mt.ScrollTrigger||vt(`scrollTrigger`,t))&&mt.ScrollTrigger.create(t,e)},gn=function(e,t,n,r,i){if(Fr(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Le&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ot!==dr.frame)return Et.push(e),e._lazy=[i,r],1},_n=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},vn=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},yn=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&_n(e)&&(e._initted||!vn(e))||(e._ts<0||e._dp._ts<0)&&!vn(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Dn(0,e._tDur,t),l=ln(s,o),e._yoyo&&l&1&&(a=1-a),l!==ln(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Le||r||e._zTime===Be||!t&&e._zTime){if(!e._initted&&gn(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Be:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&on(e,t,n,!0),e._onUpdate&&!n&&Xn(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Xn(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&nn(e,1),!n&&!Le&&(Xn(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},bn=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},xn=function(e,t,n,r){var i=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:zt(a*(i+1)+e._rDelay*i):a,o>0&&!r&&fn(e,e._tTime=e._tDur*o),e.parent&&dn(e),n||rn(e.parent,e),e},Sn=function(e){return e instanceof Or?rn(e):xn(e,e._dur)},Cn={_start:0,endTime:xt,totalDuration:xt},wn=function e(t,n,r){var i=t.labels,a=t._recent||Cn,o=t.duration()>=ze?a.endTime(!1):t._dur,s,c,l;return qe(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(nt(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Tn=function(e,t,n){var r=Ye(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Qe(s.vars.inherit)&&s.parent;a.immediateRender=Qe(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Hr(t[0],a,t[i+1])},En=function(e,t){return e||e===0?t(e):t},Dn=function(e,t,n){return n<e?e:n>t?t:n},On=function(e,t){return!qe(e)||!(t=lt.exec(e))?``:t[1]},kn=function(e,t,n){return En(n,function(n){return Dn(e,t,n)})},An=[].slice,jn=function(e,t){return e&&Ze(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Ze(e[0]))&&!e.nodeType&&e!==dt},Mn=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return qe(e)&&!t||jn(e,1)?(r=n).push.apply(r,Nn(e)):n.push(e)})||n},Nn=function(e,t,n){return Re&&!t&&Re.selector?Re.selector(e):qe(e)&&!n&&(ft||!fr())?An.call((t||pt).querySelectorAll(e),0):nt(e)?Mn(e,n):jn(e)?An.call(e,0):e?[e]:[]},Pn=function(e){return e=Nn(e)[0]||yt(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Nn(t,n.querySelectorAll?n:n===e?yt(`Invalid scope`)||pt.createElement(`div`):e)}},Fn=function(e){return e.sort(function(){return .5-Math.random()})},In=function(e){if(Je(e))return e;var t=Ze(e)?e:{each:e},n=xr(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return qe(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,ze])[1],!S){for(b=-ze;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===ze?0:s?f*u/S-.5:r/S|0,b=0,x=ze,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):We(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Fn(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=On(t.amount||t.each)||0,n=n&&f<0?yr(n):n}return f=(p[e]-p.min)/p.max||0,zt(p.b+(n?n(f):f)*p.v)+p.u}},Ln=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ye(n)?0:On(n))}},Rn=function(e,t){var n=nt(e),r,i;return!n&&Ze(e)&&(r=n=e.radius||ze,e.values?(e=Nn(e.values),(i=!Ye(e[0]))&&(r*=r)):e=Ln(e.increment)),En(t,n?Je(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=ze,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Ye(t)?s:s+On(t)}:Ln(e))},zn=function(e,t,n,r){return En(nt(e)?!t:n===!0?!!(n=0):!r,function(){return nt(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Bn=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Vn=function(e,t){return function(n){return e(parseFloat(n))+(t||On(n))}},Hn=function(e,t,n){return qn(e,t,0,1,n)},Un=function(e,t,n){return En(n,function(n){return e[~~t(n)]})},Wn=function e(t,n,r){var i=n-t;return nt(t)?Un(t,e(0,t.length),n):En(r,function(e){return(i+(e-t)%i)%i+t})},Gn=function e(t,n,r){var i=n-t,a=i*2;return nt(t)?Un(t,e(0,t.length-1),n):En(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Kn=function(e){for(var t=0,n=``,r,i,a,o;~(r=e.indexOf(`random(`,t));)a=e.indexOf(`)`,r),o=e.charAt(r+7)===`[`,i=e.substr(r+7,a-r-7).match(o?ct:rt),n+=e.substr(t,r-t)+zn(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},qn=function(e,t,n,r,i){var a=t-e,o=r-n;return En(i,function(t){return n+((t-e)/a*o||0)})},Jn=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=qe(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(nt(t)&&!nt(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Yt(nt(t)?[]:{},t));if(!u){for(c in n)Ar.call(s,t,c,`get`,n[c]);a=function(e){return Zr(e,s)||(o?t.p:t)}}}return En(r,a)},Yn=function(e,t,n){var r=e.labels,i=ze,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Xn=function(e,t,n){var r=e.vars,i=r[t],a=Re,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Et.length&&Ht(),o&&(Re=o),l=s?i.apply(c,s):i.call(c),Re=a,l},Zn=function(e){return nn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Le),e.progress()<1&&Xn(e,`onInterrupt`),e},Qn,$n=[],er=function(e){if(e){if(e=!e.name&&e.default||e,$e()||e.headless){var t=e.name,n=Je(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:xt,render:Zr,add:Ar,kill:$r,modifier:Qr,rawVars:0},a={targetTest:0,get:0,getSetter:qr,aliases:{},register:0};if(fr(),e!==r){if(kt[t])return;qt(r,qt(Zt(e,i),a)),Yt(r.prototype,Yt(i,Zt(e,a))),kt[r.prop=t]=r,e.targetTest&&(Mt.push(r),Tt[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}bt(t,r),e.register&&e.register(gi,r,ni)}else $n.push(e)}},tr=255,nr={aqua:[0,tr,tr],lime:[0,tr,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tr],navy:[0,0,128],white:[tr,tr,tr],olive:[128,128,0],yellow:[tr,tr,0],orange:[tr,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tr,0,0],pink:[tr,192,203],cyan:[0,tr,tr],transparent:[tr,tr,tr,0]},rr=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tr+.5|0},ir=function(e,t,n){var r=e?Ye(e)?[e>>16,e>>8&tr,e&tr]:0:nr.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),nr[e])r=nr[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tr,r&tr,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tr,e&tr]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(rt),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=rr(s+1/3,i,a),r[1]=rr(s,i,a),r[2]=rr(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(it),n&&r.length<4&&(r[3]=1),r}else r=e.match(rt)||nr.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/tr,a=r[1]/tr,o=r[2]/tr,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},ar=function(e){var t=[],n=[],r=-1;return e.split(sr).forEach(function(e){var i=e.match(at)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},or=function(e,t,n){var r=``,i=(e+r).match(sr),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=ir(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=ar(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(sr,`1`).split(at),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(sr),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},sr=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in nr)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),cr=/hsl[a]?\(/,lr=function(e){var t=e.join(` `),n;if(sr.lastIndex=0,sr.test(t))return n=cr.test(t),e[1]=or(e[1],n),e[0]=or(e[0],n,ar(e[1])),!0},ur,dr=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){gt&&(!ft&&$e()&&(dt=ft=window,pt=dt.document||{},mt.gsap=gi,(dt.gsapVersions||(dt.gsapVersions=[])).push(gi.version),_t(ht||dt.GreenSockGlobals||!dt.gsap&&dt||{}),$n.forEach(er)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},ur=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),ur=0,l=xt},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),fr(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),fr=function(){return!ur&&dr.wake()},pr={},mr=/^[\d.\-M][\d.\-,\s]/,hr=/["']/g,gr=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(hr,``).trim():+c,r=s.substr(o+1).trim();return t},_r=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},vr=function(e){var t=(e+``).split(`(`),n=pr[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[gr(t[1])]:_r(e).split(`,`).map(Gt)):pr._CE&&mr.test(e)?pr._CE(``,e):n},yr=function(e){return function(t){return 1-e(1-t)}},br=function e(t,n){for(var r=t._first,i;r;)r instanceof Or?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},xr=function(e,t){return e&&(Je(e)?e:pr[e]||vr(e))||t},Sr=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Lt(e,function(e){for(var t in pr[e]=mt[e]=i,pr[a=e.toLowerCase()]=n,i)pr[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=pr[e+`.`+t]=i[t]}),i},Cr=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wr=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Ve*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Ke((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Cr(s);return a=Ve/a,c.config=function(n,r){return e(t,n,r)},c},Tr=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Cr(r);return i.config=function(n){return e(t,n)},i};Lt(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Sr(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),pr.Linear.easeNone=pr.none=pr.Linear.easeIn,Sr(`Elastic`,wr(`in`),wr(`out`),wr()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Sr(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Sr(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Sr(`Circ`,function(e){return-(We(1-e*e)-1)}),Sr(`Sine`,function(e){return e===1?1:-Ge(e*He)+1}),Sr(`Back`,Tr(`in`),Tr(`out`),Tr()),pr.SteppedEase=pr.steps=mt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Be;return function(e){return((r*Dn(0,a,e)|0)+i)*n}}},Fe.ease=pr[`quad.out`],Lt(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Nt+=e+`,`+e+`Params,`});var Er=function(e,t){this.id=Ue++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:It,this.set=t?t.getSetter:qr},Dr=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xn(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),ur||dr.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,xn(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(fr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(fn(this,e),!n._dp||n.parent||pn(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Be||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Wt(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+cn(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+cn(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?ln(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?un(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-Be?0:this._rts,this.totalTime(Dn(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),dn(this),an(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&mn(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Qe(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?un(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=wt);var t=Le;return Le=e,Ut(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Le=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Sn(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Sn(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(wn(this,e),Qe(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Qe(t)),this._dur||(this._zTime=-Be),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Be)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(n){var r=Je(e)?e:Kt,i=function(){var e=t.then;t.then=null,Je(r)&&(r=r(t))&&(r.then||r===t)&&(t.then=e),n(r),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?i():t._prom=i})},t.kill=function(){Zn(this)},e}();qt(Dr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var Or=function(e){Ne(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Qe(t.sortChildren),ut&&mn(t.parent||ut,Me(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&hn(Me(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Tn(0,arguments,this),this},n.from=function(e,t,n){return Tn(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Tn(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Qt(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Hr(e,t,wn(this,n),1),this},n.call=function(e,t,n){return mn(this,Hr.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Hr(e,n,wn(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Qt(n).immediateRender=Qe(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Qt(r).immediateRender=Qe(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:zt(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==ut&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=zt(o%f),o===i?(d=this._repeat,c=a):(_=zt(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=ln(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:zt(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Xn(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this;br(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=bn(this,zt(r),zt(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&!t&&!_&&(Xn(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Be);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Le&&Ut(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Be:Be);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Be)._zTime=c>=r?1:-1,this._ts))return this._start=g,dn(this),this.render(e,t,n);this._onUpdate&&!t&&Xn(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&nn(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Xn(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Ye(t)||(t=wn(this,t,e)),!(e instanceof Dr)){if(nt(e))return e.forEach(function(e){return n.add(e,t)}),this;if(qe(e))return this.addLabel(e,t);if(Je(e))e=Hr.delayedCall(0,e);else return this}return this===e?this:mn(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-ze);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Hr?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return qe(e)?this.removeLabel(e):Je(e)?this.killTweensOf(e):(e.parent===this&&tn(this,e),e===this._recent&&(this._recent=this._last),rn(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(dr.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=wn(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Hr.delayedCall(0,t||xt,n);return r.data=`isPause`,this._hasPause=1,mn(this,r,wn(this,e))},n.removePause=function(e){var t=this._first;for(e=wn(this,e);t;)t._start===e&&t.data===`isPause`&&nn(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Nr!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Nn(e),i=this._first,a=Ye(t),o;i;)i instanceof Hr?Vt(i._targets,r)&&(a?(!Nr||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=wn(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Hr.to(n,qt({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Be,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&xn(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,qt({startAt:{time:wn(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Yn(this,wn(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Yn(this,wn(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Be)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);for(var r=this._first,i=this.labels,a;r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return rn(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),rn(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=ze,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,mn(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=o/n._ts,n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;xn(n,n===ut&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(ut._ts&&(Wt(ut,un(e,ut)),Ot=dr.frame),dr.frame>=jt){jt+=Pe.autoSleep||120;var t=ut._first;if((!t||!t._ts)&&Pe.autoSleep&&dr._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||dr.sleep()}}},t}(Dr);qt(Or.prototype,{_lock:0,_hasPause:0,_forcing:0});var kr=function(e,t,n,r,i,a,o){var s=new ni(this._pt,e,t,0,1,Xr,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Kn(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(ot)||[];u=ot.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Bt(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=ot.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(st.test(r)||g)&&(s.e=0),this._pt=s,s},Ar=function(e,t,n,r,i,a,o,s,c,l){Je(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Je(u)?c?e[t.indexOf(`set`)||!Je(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Je(u)?c?Gr:Wr:Ur,p;if(qe(r)&&(~r.indexOf(`random(`)&&(r=Kn(r)),r.charAt(1)===`=`&&(p=Bt(d,r)+(On(d)||0),(p||p===0)&&(r=p))),!l||d!==r||Pr)return!isNaN(d*r)&&r!==``?(p=new ni(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Yr:Jr,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&vt(t,r),kr.call(this,e,t,d,r,f,s||Pe.stringFilter,c))},jr=function(e,t,n,r,i){if(Je(e)&&(e=zr(e,i,t,n,r)),!Ze(e)||e.style&&e.nodeType||nt(e)||tt(e))return qe(e)?zr(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=zr(e[o],i,t,n,r);return a},Mr=function(e,t,n,r,i,a){var o,s,c,l;if(kt[e]&&(o=new kt[e]).init(i,o.rawVars?t[e]:jr(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new ni(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Qn))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Nr,Pr,Fr=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Ie,b=t.timeline,x,S,C,w,T,E,D,O,k,A,j,M,N;if(b&&(!f||!a)&&(a=`none`),t._ease=xr(a,Fe.ease),t._yEase=d?yr(xr(d===!0?a:d,Fe.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(O=g[0]?Ft(g[0]).harness:0,M=O&&i[O.prop],x=Zt(i,Tt),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Ct:St),h._lazy=0),o){if(nn(t._startAt=Hr.set(g,qt({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Qe(c),startAt:null,delay:0,onUpdate:l&&function(){return Xn(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Le||!s&&!p)&&t._startAt.revert(Ct),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),C=qt({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Qe(c),immediateRender:s,stagger:0,parent:_},x),M&&(C[O.prop]=M),nn(t._startAt=Hr.set(g,C)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Le?t._startAt.revert(Ct):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Be,Be);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Qe(c)||c&&!m,S=0;S<g.length;S++){if(T=g[S],D=T._gsap||Pt(g)[S]._gsap,t._ptLookup[S]=A={},Dt[D.id]&&Et.length&&Ht(),j=v===g?S:v.indexOf(T),O&&(k=new O).init(T,M||x,t,j,v)!==!1&&(t._pt=w=new ni(t._pt,T,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(e){A[e]=w}),k.priority&&(E=1)),!O||M)for(C in x)kt[C]&&(k=Mr(C,x,t,j,T,v))?k.priority&&(E=1):A[C]=w=Ar.call(t,T,C,`get`,x[C],j,v,0,i.stringFilter);t._op&&t._op[S]&&t.kill(T,t._op[S]),y&&t._pt&&(Nr=t,ut.killTweensOf(T,A,t.globalTime(n)),N=!t.parent,Nr=0),t._pt&&c&&(Dt[D.id]=1)}E&&ti(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(ze,!0,!0)},Ir=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Pr=1,e.vars[t]=`+=0`,Fr(e,o),Pr=0,s?yt(t+` not eligible for reset`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Rt(n)+On(u.e)),u.b&&(u.b=l.s+On(u.b))},Lr=function(e,t){var n=e[0]?Ft(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Yt({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Rr=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(nt(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},zr=function(e,t,n,r,i){return Je(e)?e.call(t,n,r,i):qe(e)&&~e.indexOf(`random(`)?Kn(e):e},Br=Nt+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,Vr={};Lt(Br+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Vr[e]=1});var Hr=function(e){Ne(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Qt(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=o.yoyoEase,g=n.parent||ut,_=(nt(t)||tt(t)?Ye(t[0]):`length`in n)?[t]:Nn(t),v,y,b,x,S,C,w,T;if(a._targets=_.length?Pt(_):yt(`GSAP target `+t+` not found. https://gsap.com`,!Pe.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||et(s)||et(c)){if(n=a.vars,v=a.timeline=new Or({data:`nested`,defaults:p||{},targets:g&&g.data===`nested`?g.vars.targets:_}),v.kill(),v.parent=v._dp=Me(a),v._start=0,u||et(s)||et(c)){if(x=_.length,w=u&&In(u),Ze(u))for(S in u)~Br.indexOf(S)&&(T||={},T[S]=u[S]);for(y=0;y<x;y++)b=Zt(n,Vr),b.stagger=0,h&&(b.yoyoEase=h),T&&Yt(b,T),C=_[y],b.duration=+zr(s,Me(a),y,C,_),b.delay=(+zr(c,Me(a),y,C,_)||0)-a._delay,!u&&x===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),v.to(C,b,w?w(y,C,_):0),v._ease=pr.none;v.duration()?s=c=0:a.timeline=0}else if(f){Qt(qt(v.vars.defaults,{ease:`none`})),v._ease=xr(f.ease||n.ease||`none`);var E=0,D,O,k;if(nt(f))f.forEach(function(e){return v.to(_,e,`>`)}),v.duration();else{for(S in b={},f)S===`ease`||S===`easeEach`||Rr(S,f[S],b,f.easeEach);for(S in b)for(D=b[S].sort(function(e,t){return e.t-t.t}),E=0,y=0;y<D.length;y++)O=D[y],k={ease:O.e,duration:(O.t-(y?D[y-1].t:0))/100*s},k[S]=O.v,v.to(_,k,E),E+=k.duration;v.duration()<s&&v.to({},{duration:s-v.duration()})}}s||a.duration(s=v.duration())}else a.timeline=0;return d===!0&&!Ie&&(Nr=Me(a),ut.killTweensOf(_),Nr=0),mn(g,Me(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===zt(g._time)&&Qe(l)&&sn(Me(a))&&g.data!==`nested`)&&(a._tTime=-Be,a.render(Math.max(0,-c)||0)),m&&hn(Me(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Be&&!o?i:e<Be?0:e,c,l,u,d,f,p,m,h,g;if(!a)yn(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=zt(s%d),s===i?(u=this._repeat,c=a):(f=zt(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(g=this._yEase,c=a-c),f=ln(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&(h&&this._yEase&&br(h,p),this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(zt(d*u),!0).invalidate()._lock=0))}if(!this._initted){if(gn(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(g||this._ease)(c/a),this._from&&(this.ratio=m=1-m),!r&&s&&!t&&!f&&(Xn(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&on(this,e,t,n),Xn(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Xn(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&on(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&nn(this,1),!t&&(!o||r)&&(s||r||p)&&(Xn(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){ur||dr.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Fr(this,a),o=this._ease(a/this._dur),Ir(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(fn(this,0),this.parent||en(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Zn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Le),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Nr&&Nr.vars.overwrite!==!0)._first||Zn(this),this.parent&&n!==this.timeline.totalDuration()&&xn(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Nn(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&$t(r,i))return t===`all`&&(this._pt=0),Zn(this);for(s=this._op=this._op||[],t!==`all`&&(qe(t)&&(d={},Lt(t,function(e){return d[e]=1}),t=d),t=Lr(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&tn(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Zn(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Tn(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Tn(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return ut.killTweensOf(e,t,n)},t}(Dr);qt(Hr.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Lt(`staggerTo,staggerFrom,staggerFromTo`,function(e){Hr[e]=function(){var t=new Or,n=An.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Ur=function(e,t,n){return e[t]=n},Wr=function(e,t,n){return e[t](n)},Gr=function(e,t,n,r){return e[t](r.fp,n)},Kr=function(e,t,n){return e.setAttribute(t,n)},qr=function(e,t){return Je(e[t])?Wr:Xe(e[t])&&e.setAttribute?Kr:Ur},Jr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yr=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xr=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zr=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qr=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},$r=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?tn(this,t,`_pt`):t.dep||(n=1),t=r;return!n},ei=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ti=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},ni=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Jr,this.d=o||this,this.set=s||Ur,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=ei,this.m=e,this.mt=n,this.tween=t},e}();Lt(Nt+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return Tt[e]=1}),mt.TweenMax=mt.TweenLite=Hr,mt.TimelineLite=mt.TimelineMax=Or,ut=new Or({sortChildren:!1,defaults:Fe,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),Pe.stringFilter=lr;var ri=[],ii={},ai=[],oi=0,si=0,ci=function(e){return(ii[e]||ai).map(function(e){return e()})},li=function(){var e=Date.now(),t=[];e-oi>2&&(ci(`matchMediaInit`),ri.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=dt.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),ci(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),oi=e,ci(`matchMedia`))},ui=function(){function e(e,t){this.selector=t&&Pn(t),this.data=[],this._r=[],this.isReverted=!1,this.id=si++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Je(e)&&(n=t,t=e,e=Je);var r=this,i=function(){var e=Re,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Pn(n)),Re=r,a=t.apply(r,arguments),Je(a)&&r._r.push(a),Re=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Je?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=Re;Re=null,e(this),Re=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Hr&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Or?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Hr)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=ri.length;r--;)ri[r].id===this.id&&ri.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),di=function(){function e(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Ze(e)||(e={matches:e});var r=new ui(0,n||this.scope),i=r.conditions={},a,o,s;for(o in Re&&!r.selector&&(r.selector=Re.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=dt.matchMedia(e[o]),a&&(ri.indexOf(r)<0&&ri.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(li):a.addEventListener(`change`,li)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),fi={registerPlugin:function(){[...arguments].forEach(function(e){return er(e)})},timeline:function(e){return new Or(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){qe(e)&&(e=Nn(e)[0]);var i=Ft(e||{}).get,a=n?Kt:Gt;return n===`native`&&(n=``),e&&(t?a((kt[t]&&kt[t].get||i)(e,t,n,r)):function(t,n,r){return a((kt[t]&&kt[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Nn(e),e.length>1){var r=e.map(function(e){return gi.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=kt[t],o=Ft(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Qn._pt=0,r.init(e,n?t+n:t,Qn,0,[e]),r.render(1,r),Qn._pt&&Zr(1,Qn)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=gi.to(e,qt((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xr(e.ease,Fe.ease)),Xt(Fe,e||{})},config:function(e){return Xt(Pe,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!kt[e]&&!mt[e]&&yt(t+` effect requires `+e+` plugin.`)}),At[t]=function(e,t,r){return n(Nn(e),qt(t||{},i),r)},a&&(Or.prototype[t]=function(e,n,r){return this.add(At[t](e,Ze(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){pr[e]=xr(t)},parseEase:function(e,t){return arguments.length?xr(e,t):pr},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Or(e),r,i;for(n.smoothChildTiming=Qe(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,r=ut._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Hr&&r.vars.onComplete===r._targets[0]))&&mn(n,r,r._start-r._delay),r=i;return mn(ut,n,0),n},context:function(e,t){return e?new ui(e,t):Re},matchMedia:function(e){return new di(e)},matchMediaRefresh:function(){return ri.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||li()},addEventListener:function(e,t){var n=ii[e]||(ii[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ii[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Wn,wrapYoyo:Gn,distribute:In,random:zn,snap:Rn,normalize:Hn,getUnit:On,clamp:kn,splitColor:ir,toArray:Nn,selector:Pn,mapRange:qn,pipe:Bn,unitize:Vn,interpolate:Jn,shuffle:Fn},install:_t,effects:At,ticker:dr,updateRoot:Or.updateRoot,plugins:kt,globalTimeline:ut,core:{PropTween:ni,globals:bt,Tween:Hr,Timeline:Or,Animation:Dr,getCache:Ft,_removeLinkedListItem:tn,reverting:function(){return Le},context:function(e){return e&&Re&&(Re.data.push(e),e._ctx=Re),Re},suppressOverwrites:function(e){return Ie=e}}};Lt(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return fi[e]=Hr[e]}),dr.add(Or.updateRoot),Qn=fi.to({},{duration:0});var pi=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mi=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=pi(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},hi=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(qe(n)&&(r={},Lt(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}mi(e,n)}}}},gi=fi.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hi(`roundProps`,Ln),hi(`modifiers`),hi(`snap`,Rn))||fi;Hr.version=Or.version=gi.version=`3.13.0`,gt=1,$e()&&fr(),pr.Power0,pr.Power1,pr.Power2,pr.Power3,pr.Power4,pr.Linear,pr.Quad,pr.Cubic,pr.Quart,pr.Quint,pr.Strong,pr.Elastic,pr.Back,pr.SteppedEase,pr.Bounce,pr.Sine,pr.Expo,pr.Circ;var _i,vi,yi,bi,xi,Si,Ci,wi=function(){return typeof window<`u`},Ti={},Ei=180/Math.PI,Di=Math.PI/180,Oi=Math.atan2,ki=1e8,Ai=/([A-Z])/g,ji=/(left|right|width|margin|padding|x)/i,Mi=/[\s,\(]\S/,Ni={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Pi=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fi=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ii=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Li=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ri=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zi=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Bi=function(e,t,n){return e.style[t]=n},Vi=function(e,t,n){return e.style.setProperty(t,n)},Hi=function(e,t,n){return e._gsap[t]=n},Ui=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wi=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Gi=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Ki=`transform`,qi=Ki+`Origin`,Ji=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Ti&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Ni[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=pa(i,e)}):this.tfm[t]=o.x?o[t]:pa(i,t),t===qi&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Ki)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(qi,n,``)),t=Ki}(a||n)&&this.props.push(t,n,a[t])},Yi=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Xi=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Ai,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Ci(),(!i||!i.isStart)&&!n[Ki]&&(Yi(n),r.zOrigin&&n[qi]&&(n[qi]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zi=function(e,t){var n={target:e,props:[],revert:Xi,save:Ji};return e._gsap||gi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Qi,$i=function(e,t){var n=vi.createElementNS?vi.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):vi.createElement(e);return n&&n.style?n:vi.createElement(e)},ea=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Ai,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,na(n)||n,1)||``},ta=`O,Moz,ms,Ms,Webkit`.split(`,`),na=function(e,t,n){var r=(t||xi).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(ta[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?ta[i]:``)+e},ra=function(){wi()&&window.document&&(_i=window,vi=_i.document,yi=vi.documentElement,xi=$i(`div`)||{style:{}},$i(`div`),Ki=na(Ki),qi=Ki+`Origin`,xi.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Qi=!!na(`perspective`),Ci=gi.core.reverting,bi=1)},ia=function(e){var t=e.ownerSVGElement,n=$i(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),yi.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),yi.removeChild(n),i},aa=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},oa=function(e){var t,n;try{t=e.getBBox()}catch{t=ia(e),n=1}return t&&(t.width||t.height)||n||(t=ia(e)),t&&!t.width&&!t.x&&!t.y?{x:+aa(e,[`x`,`cx`,`x1`])||0,y:+aa(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},sa=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!oa(e))},ca=function(e,t){if(t){var n=e.style,r;t in Ti&&t!==qi&&(t=Ki),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Ai,`-$1`).toLowerCase())):n.removeAttribute(t)}},la=function(e,t,n,r,i,a){var o=new ni(e._pt,t,n,0,1,a?zi:Ri);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},ua={deg:1,rad:1,turn:1},da={grid:1,flex:1},fa=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=xi.style,c=ji.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||ua[i]||ua[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&sa(t),(p||o===`%`)&&(Ti[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Rt(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===vi||!h.appendChild)&&(h=vi.body),g=h._gsap,g&&p&&g.width&&c&&g.time===dr.time&&!g.uncache)return Rt(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:ca(t,n)}else(p||o===`%`)&&!da[ea(h,`display`)]&&(s.position=ea(t,`position`)),h===t&&(s.position=`static`),h.appendChild(xi),m=xi[u],h.removeChild(xi),s.position=`absolute`;return c&&p&&(g=Ft(h),g.time=dr.time,g.width=h[u]),Rt(f?m*a/d:m&&a?d/m*a:0)},pa=function(e,t,n,r){var i;return bi||ra(),t in Ni&&t!==`transform`&&(t=Ni[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Ti[t]&&t!==`transform`?(i=Ta(e,r),i=t===`transformOrigin`?i.svg?i.origin:Ea(ea(e,qi))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=va[t]&&va[t](e,t,n)||ea(e,t)||It(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?fa(e,t,i,n)+n:i},ma=function(e,t,n,r){if(!n||n===`none`){var i=na(t,e,1),a=i&&ea(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=ea(e,`borderTopColor`))}var o=new ni(this._pt,e.style,t,0,1,Xr),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=ea(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=ea(e,t)||r,m?e.style[t]=m:ca(e,t)),l=[n,r],lr(l),n=l[0],r=l[1],d=n.match(at)||[],b=r.match(at)||[],b.length){for(;u=at.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Bt(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=at.lastIndex-v.length,v||(v=v||Pe.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=fa(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?zi:Ri;return st.test(r)&&(o.e=0),this._pt=o,o},ha={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},ga=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ha[n]||n,t[1]=ha[r]||r,t.join(` `)},_a=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Ti[o]&&(s=1,o=o===`transformOrigin`?qi:Ki),ca(n,o);s&&(ca(n,Ki),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Ta(n,1),a.uncache=1,Yi(r)))}},va={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new ni(e._pt,t,n,0,0,_a);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},ya=[1,0,0,1,0,0],ba={},xa=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Sa=function(e){var t=ea(e,Ki);return xa(t)?ya:t.substr(7).match(it).map(Rt)},Ca=function(e,t){var n=e._gsap||Ft(e),r=e.style,i=Sa(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?ya:i):(i===ya&&!e.offsetParent&&e!==yi&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,yi.appendChild(e)),i=Sa(e),s?r.display=s:ca(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):yi.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},wa=function(e,t,n,r,i,a){var o=e._gsap,s=i||Ca(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==ya&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=oa(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[qi]=`0px 0px`,a&&(la(a,o,`xOrigin`,c,y),la(a,o,`yOrigin`,l,b),la(a,o,`xOffset`,u,o.xOffset),la(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Ta=function(e,t){var n=e._gsap||new Er(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=ea(e,qi)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,ee,R,te;return n.svg=!!(e.getCTM&&sa(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Ki]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Ki]===`none`?``:s[Ki])),r.scale=r.rotate=r.translate=`none`),S=Ca(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),wa(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==ya&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Oi(D,E)*Ei:0,_=O||k?Oi(O,k)*Ei+m:0,_&&(p*=Math.abs(Math.cos(_*Di))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(te=S[6],ee=S[7],F=S[8],I=S[9],L=S[10],R=S[11],l=S[12],u=S[13],d=S[14],C=Oi(te,L),h=C*Ei,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=te*w+L*T,F=A*-T+F*w,I=j*-T+I*w,L=te*-T+L*w,R=ee*-T+R*w,A=M,j=N,te=P),C=Oi(-O,L),g=C*Ei,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-L*T,R=k*T+R*w,E=M,D=N,O=P),C=Oi(D,E),m=C*Ei,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Rt(Math.sqrt(E*E+D*D+O*O)),p=Rt(Math.sqrt(j*j+te*te)),C=Oi(A,j),_=Math.abs(C)>2e-4?C*Ei:0,y=R?1/(R<0?-R:R):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!xa(ea(e,Ki)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Rt(f),n.scaleY=Rt(p),n.rotation=Rt(m)+o,n.rotationX=Rt(h)+o,n.rotationY=Rt(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[qi]=Ea(c)),n.xOffset=n.yOffset=0,n.force3D=Pe.force3D,n.renderTransform=n.svg?Na:Qi?Ma:Oa,n.uncache=0,n},Ea=function(e){return(e=e.split(` `))[0]+` `+e[1]},Da=function(e,t,n){var r=On(t);return Rt(parseFloat(t)+parseFloat(fa(e,`x`,n+`px`,r)))+r},Oa=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Ma(e,t)},ka=`0deg`,Aa=`0px`,ja=`) `,Ma=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==ka||l!==ka)){var x=parseFloat(l)*Di,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Di,w=Math.cos(x),a=Da(_,a,S*w*-v),o=Da(_,o,-Math.sin(x)*-v),s=Da(_,s,C*w*-v+v)}h!==Aa&&(y+=`perspective(`+h+ja),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Aa||o!==Aa||s!==Aa)&&(y+=s!==Aa||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+ja),c!==ka&&(y+=`rotate(`+c+ja),l!==ka&&(y+=`rotateY(`+l+ja),u!==ka&&(y+=`rotateX(`+u+ja),(d!==ka||f!==ka)&&(y+=`skew(`+d+`, `+f+ja),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+ja),_.style[Ki]=y||`translate(0, 0)`},Na=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Di,c*=Di,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Di,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Rt(b),x=Rt(x),S=Rt(S),C=Rt(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=fa(f,`x`,a,`px`),y=fa(f,`y`,o,`px`)),(p||m||h||g)&&(v=Rt(v+p-(p*b+m*S)+h),y=Rt(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Rt(v+r/100*w.width),y=Rt(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Ki]=w)},Pa=function(e,t,n,r,i){var a=360,o=qe(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Ei:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*ki)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*ki)%a-~~(s/a)*a)),e._pt=u=new ni(e._pt,t,n,r,s,Fi),u.e=c,u.u=`deg`,e._props.push(n),u},Fa=function(e,t){for(var n in t)e[n]=t[n];return e},Ia=function(e,t,n){var r=Fa({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Ki]=t,o=Ta(n,1),ca(n,Ki),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Ki],a[Ki]=t,o=Ta(n,1),a[Ki]=c),Ti)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=On(c),p=On(l),u=f===p?parseFloat(c):fa(n,s,c,p),d=parseFloat(l),e._pt=new ni(e._pt,o,s,u,d-u,Pi),e._pt.u=p||0,e._props.push(s));Fa(o,r)};Lt(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});va[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return pa(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var La={name:`css`,register:ra,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;for(m in bi||ra(),this.styles=this.styles||Zi(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(kt[m]&&Mr(m,t,n,r,e,i)))){if(f=typeof l,p=va[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Kn(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,sr.lastIndex=0,sr.test(c)||(h=On(c),g=On(l)),g?h!==g&&(c=fa(e,m,c,g)+g):h&&(l+=h),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],qe(c)&&~c.indexOf(`random(`)&&(c=Kn(c)),On(c+``)||c===`auto`||(c+=Pe.units[m]||On(pa(e,m))||``),(c+``).charAt(1)===`=`&&(c=pa(e,m))):c=pa(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Ni&&(m===`autoAlpha`&&(d===1&&pa(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),la(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Ni[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Ti,v){if(this.styles.save(m),f===`string`&&l.substring(0,6)===`var(--`&&(l=ea(e,l.substring(4,l.indexOf(`)`))),u=parseFloat(l)),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ta(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ni(this._pt,o,Ki,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new ni(this._pt,b,`scaleY`,b.scaleY,(_?Bt(b.scaleY,_+u):u)-b.scaleY||0,Pi),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(qi,0,o[qi]),l=ga(l),b.svg?wa(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&la(this,b,`zOrigin`,b.zOrigin,g),la(this,o,m,Ea(c),Ea(l)));continue}else if(m===`svgOrigin`){wa(e,l,1,x,0,this);continue}else if(m in ba){Pa(this,b,m,d,_?Bt(d,_+l):l);continue}else if(m===`smoothOrigin`){la(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Ia(this,l,e);continue}}else m in o||(m=na(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Mi.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=On(l)||(m in Pe.units?Pe.units[m]:h),h!==g&&(d=fa(e,m,c,g)),this._pt=new ni(this._pt,v?b:o,m,d,(_?Bt(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Li:Pi),this._pt.u=g||0,h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Ii);else if(m in o)ma.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){vt(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&ti(this)},render:function(e,t){if(t.tween._time||!Ci())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pa,aliases:Ni,getSetter:function(e,t,n){var r=Ni[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Ti&&t!==qi&&(e._gsap.x||pa(e,`x`))?n&&Si===n?t===`scale`?Ui:Hi:(Si=n||{})&&(t===`scale`?Wi:Gi):e.style&&!Xe(e.style[t])?Bi:~t.indexOf(`-`)?Vi:qr(e,t)},core:{_removeProperty:ca,_getMatrix:Ca}};gi.utils.checkPrefix=na,gi.core.getStyleSaver=Zi,(function(e,t,n,r){var i=Lt(e+`,`+t+`,`+n,function(e){Ti[e]=1});Lt(t,function(e){Pe.units[e]=`deg`,ba[e]=1}),Ni[i[13]]=e+`,`+t,Lt(r,function(e){var t=e.split(`:`);Ni[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Lt(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){Pe.units[e]=`px`}),gi.registerPlugin(La);var X=gi.registerPlugin(La)||gi;X.core.Tween;var Ra=()=>{let e=X.context(()=>{});return t(()=>e.revert()),e},za,Ba=()=>za??=Promise.allSettled([...document.fonts].map(e=>e.load())).then(()=>document.fonts.ready),Va=async(e,t)=>{await Ba(),e.isReverted||e.add(t)},Ha={class:`uppercase relative flex justify-center items-end text-loader-s`},Ua={class:`absolute top-[0.3em] right-full opacity-[0.7] w-max text-right translate-x-[0.5em]`},Wa={class:`absolute top-[0] left-full opacity-[0.7] w-max -translate-x-[1.78em]`},Ga={class:`opacity-[0.7]`},Ka={class:`z-6 absolute left-(--grid-margin) right-(--grid-margin) bottom-[calc(10px+env(safe-area-inset-bottom))] text-xxs`},qa=Object.assign(j({__name:`Loader`,emits:[`endLoader`,`loaderStartEnding`],setup(e,{emit:t}){let n=Ra(),r=t,i=b(),a=b(0),s=b(),c=b(),l=b(),d=b([]),f=b([]),p;u(()=>{n.add(m)});function m(){p=h(),p.play()}function h(){let e=[{value:10,duration:.75,ease:`custom-loader`},{value:35,duration:.6,ease:`custom-loader`},{value:70,duration:1,ease:`custom-loader`},{value:100,duration:.9,ease:`custom-loader`}],t=X.timeline({paused:!0});e.forEach(e=>{let n=e.duration;t.to(a,{value:e.value,modifiers:{value:e=>Math.round(e)},duration:n,ease:e.ease}).to(c.value,{scaleX:e.value/100,duration:n,ease:e.ease},`<`).to(l.value,{xPercent:-e.value,x:s.value.clientWidth*e.value/100,duration:n,ease:e.ease},`<`)}),t.to(i.value,{backgroundColor:`rgba(0,0,0,0)`,duration:2,onComplete:()=>{r(`loaderStartEnding`)}},0).fromTo(l.value,{yPercent:0,clipPath:`inset(0% 0% 0% 0%)`},{yPercent:-100,clipPath:`inset(100% 0% 0% 0%)`,delay:.2,ease:`expo.out`,duration:1}).fromTo(s.value,{yPercent:0,clipPath:`inset(0% 0% 0% 0%)`},{yPercent:-100,clipPath:`inset(100% 0% 0% 0%)`,ease:`expo.out`,duration:.3},`<+=0.2`);let n=t.duration()-.5;return f.value.forEach((e,r)=>{t.set(e,{opacity:1},r*.2).from(e,{scrambleText:{text:``,chars:`01 0 1`,speed:.3,revealDelay:n*.6},duration:n*.6,ease:`expo.out`},`>`)}),t.addLabel(`end`),d.value.forEach(e=>{X.set(e,{width:e.clientWidth,height:e.clientHeight,opacity:1}),t.from(e,{scrambleText:{text:``,chars:`01 0 1`,speed:.3,revealDelay:n},duration:n,stagger:.1,ease:`power1.out`},0)}),t.tweenTo(`end`,{ease:`none`,paused:!0,onComplete:()=>{r(`endLoader`)}})}return(e,t)=>(o(),x(`div`,{ref_key:`ctn`,ref:i,class:`loader font-secondary fixed inset-[0] z-100000 flex flex-col justify-center items-center pb-[13.77svh] px-(--grid-margin) text-white bg-black`},[w(`div`,Ha,[w(`div`,{ref:e=>_(f)[0]=e,class:`absolute bottom-full mb-[1em] opacity-0`},`Hello Guys`,512),t[0]||=w(`span`,{class:`font-main text-loader-l`},`Loading`,-1),w(`div`,Ua,[w(`div`,{ref:e=>_(f)[1]=e,class:`mr-[1em] opacity-0`},`Welcome Here `,512),w(`div`,{ref:e=>_(f)[2]=e,class:`opacity-0`},`Bonjour/ `,512)]),w(`div`,Wa,[w(`div`,{ref:e=>_(d)[0]=e,class:`min-w-max opacity-0`},`111001101 010 `,512),w(`div`,{ref:e=>_(f)[3]=e,class:`ml-[3.18em] opacity-0`},`Nice to meet U `,512),w(`div`,{ref:e=>_(d)[1]=e,class:`ml-[2.45em] min-w-max opacity-0`},`0110 1`,512)]),w(`div`,Ga,[w(`div`,{ref:e=>_(d)[2]=e,class:`absolute top-full mt-[0.5em] right-full opacity-0 min-w-max`},`0110`,512),w(`div`,{ref:e=>_(f)[4]=e,class:`absolute top-full mt-[0.5em] right-[1.27em] opacity-0`},` ‹HI/›`,512)])]),w(`div`,Ka,[w(`div`,{ref_key:`indicator`,ref:l,class:`w-max pb-[0.6em]`},O(_(a))+`%`,513),w(`div`,{ref_key:`barCtn`,ref:s,class:`border`},[w(`div`,{ref_key:`bar`,ref:c,class:`w-full h-[0.4em] origin-left relative bg-white scale-x-0`},null,512)],512)])],512))}}),{__name:`Loader`}),Ja=()=>typeof window<`u`&&window.matchMedia(`(hover: none) and (pointer: coarse)`).matches,Ya=null,Xa=e=>{Ya=e},Za=()=>(e,t,n)=>Ya?.(e,t,n),Qa=()=>typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,$a=`okey studio - / * # @ * _ okey studio`,eo=1e3,to=1001,no=1002,ro=1003,io=1004,ao=1005,oo=1006,so=1007,co=1008,lo=1009,uo=1010,fo=1011,po=1012,mo=1013,ho=1014,go=1015,_o=1016,vo=1017,yo=1018,bo=1020,xo=35902,So=35899,Co=1021,wo=1022,To=1023,Eo=1026,Do=1027,Oo=1028,ko=1029,Ao=1030,jo=1031,Mo=1033,No=33776,Po=33777,Fo=33778,Io=33779,Lo=35840,Ro=35841,zo=35842,Bo=35843,Vo=36196,Ho=37492,Uo=37496,Wo=37488,Go=37489,Ko=37490,qo=37491,Jo=37808,Yo=37809,Xo=37810,Zo=37811,Qo=37812,$o=37813,es=37814,ts=37815,ns=37816,rs=37817,is=37818,as=37819,os=37820,ss=37821,cs=36492,ls=36494,us=36495,ds=36283,fs=36284,ps=36285,ms=36286,hs=2300,gs=2301,_s=2302,vs=2303,ys=2400,bs=2401,xs=2402,Ss=3200,Cs=`srgb`,ws=`srgb-linear`,Ts=`linear`,Es=`srgb`,Ds=7680,Os=35044,ks=`300 es`,As=2e3;function js(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ms(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ns(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ps(){let e=Ns(`canvas`);return e.style.display=`block`,e}var Fs={};function Is(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ls(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Rs(...e){e=Ls(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function zs(...e){e=Ls(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Bs(...e){let t=e.join(` `);t in Fs||(Fs[t]=!0,Rs(...e))}function Vs(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Hs={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ws=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Gs=Math.PI/180,Ks=180/Math.PI;function qs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ws[e&255]+Ws[e>>8&255]+Ws[e>>16&255]+Ws[e>>24&255]+`-`+Ws[t&255]+Ws[t>>8&255]+`-`+Ws[t>>16&15|64]+Ws[t>>24&255]+`-`+Ws[n&63|128]+Ws[n>>8&255]+`-`+Ws[n>>16&255]+Ws[n>>24&255]+Ws[r&255]+Ws[r>>8&255]+Ws[r>>16&255]+Ws[r>>24&255]).toLowerCase()}function Js(e,t,n){return Math.max(t,Math.min(n,e))}function Ys(e,t){return(e%t+t)%t}function Xs(e,t,n){return(1-n)*e+n*t}function Zs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Qs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var $s=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Js(this.x,e.x,t.x),this.y=Js(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Js(this.x,e,t),this.y=Js(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Js(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Js(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ec=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Rs(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Js(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Js(this.x,e.x,t.x),this.y=Js(this.y,e.y,t.y),this.z=Js(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Js(this.x,e,t),this.y=Js(this.y,e,t),this.z=Js(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Js(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Js(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new Z,nc=new ec,rc=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Bs(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ic.makeScale(e,t)),this}rotate(e){return Bs(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return Bs(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new rc,ac=new rc().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new rc().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sc(){let e={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=lc(e.r),e.g=lc(e.g),e.b=lc(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=uc(e.r),e.g=uc(e.g),e.b=uc(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ts:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Bs(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Bs(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ws]:{primaries:t,whitePoint:r,transfer:Ts,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cs},outputColorSpaceConfig:{drawingBufferColorSpace:Cs}},[Cs]:{primaries:t,whitePoint:r,transfer:Es,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cs}}}),e}var cc=sc();function lc(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function uc(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var dc,fc=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dc===void 0&&(dc=Ns(`canvas`)),dc.width=e.width,dc.height=e.height;let t=dc.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=dc}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ns(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=lc(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(lc(t[e]/255)*255):t[e]=lc(t[e]);return{data:t,width:e.width,height:e.height}}return Rs(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},pc=0,mc=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(hc(r[t].image)):e.push(hc(r[t]))}else e=hc(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function hc(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?fc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Rs(`Texture: Unable to serialize Texture.`),{})}var gc=0,_c=new Z,vc=class e extends Us{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=to,i=to,a=oo,o=co,s=To,c=lo,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=qs(),this.name=``,this.source=new mc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new $s(0,0),this.repeat=new $s(1,1),this.center=new $s(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rc,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Rs(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Rs(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x-=Math.floor(e.x);break;case to:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y-=Math.floor(e.y);break;case to:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vc.DEFAULT_IMAGE=null,vc.DEFAULT_MAPPING=300,vc.DEFAULT_ANISOTROPY=1;var yc=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Js(this.x,e.x,t.x),this.y=Js(this.y,e.y,t.y),this.z=Js(this.z,e.z,t.z),this.w=Js(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Js(this.x,e,t),this.y=Js(this.y,e,t),this.z=Js(this.z,e,t),this.w=Js(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Js(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends Us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oo,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yc(0,0,e,t),this.scissorTest=!1,this.viewport=new yc(0,0,e,t),this.textures=[];let r=new vc({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:oo,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},xc=class extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sc=class extends vc{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ro,this.minFilter=ro,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Cc=class extends vc{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ro,this.minFilter=ro,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wc=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Tc.setFromMatrixColumn(e,0).length(),i=1/Tc.setFromMatrixColumn(e,1).length(),a=1/Tc.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dc,e,Oc)}lookAt(e,t,n){let r=this.elements;return jc.subVectors(e,t),jc.lengthSq()===0&&(jc.z=1),jc.normalize(),kc.crossVectors(n,jc),kc.lengthSq()===0&&(Math.abs(n.z)===1?jc.x+=1e-4:jc.z+=1e-4,jc.normalize(),kc.crossVectors(n,jc)),kc.normalize(),Ac.crossVectors(jc,kc),r[0]=kc.x,r[4]=Ac.x,r[8]=jc.x,r[1]=kc.y,r[5]=Ac.y,r[9]=jc.y,r[2]=kc.z,r[6]=Ac.z,r[10]=jc.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Tc.set(r[0],r[1],r[2]).length(),o=Tc.set(r[4],r[5],r[6]).length(),s=Tc.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ec.copy(this);let c=1/a,l=1/o,u=1/s;return Ec.elements[0]*=c,Ec.elements[1]*=c,Ec.elements[2]*=c,Ec.elements[4]*=l,Ec.elements[5]*=l,Ec.elements[6]*=l,Ec.elements[8]*=u,Ec.elements[9]*=u,Ec.elements[10]*=u,t.setFromRotationMatrix(Ec),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=As,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=As,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tc=new Z,Ec=new wc,Dc=new Z(0,0,0),Oc=new Z(1,1,1),kc=new Z,Ac=new Z,jc=new Z,Mc=new wc,Nc=new ec,Pc=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Js(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Js(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Js(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Js(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Js(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Js(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Rs(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pc.DEFAULT_ORDER=`XYZ`;var Fc=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ic=0,Lc=new Z,Rc=new ec,zc=new wc,Bc=new Z,Vc=new Z,Hc=new Z,Uc=new ec,Wc=new Z(1,0,0),Gc=new Z(0,1,0),Kc=new Z(0,0,1),qc={type:`added`},Jc={type:`removed`},Yc={type:`childadded`,child:null},Xc={type:`childremoved`,child:null},Zc=class e extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=qs(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Pc,r=new ec,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wc},normalMatrix:{value:new rc}}),this.matrix=new wc,this.matrixWorld=new wc,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rc.setFromAxisAngle(e,t),this.quaternion.multiply(Rc),this}rotateOnWorldAxis(e,t){return Rc.setFromAxisAngle(e,t),this.quaternion.premultiply(Rc),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zc.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bc.copy(e):Bc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zc.lookAt(Vc,Bc,this.up):zc.lookAt(Bc,Vc,this.up),this.quaternion.setFromRotationMatrix(zc),r&&(zc.extractRotation(r.matrixWorld),Rc.setFromRotationMatrix(zc),this.quaternion.premultiply(Rc.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(zs(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null):zs(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zc.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zc.multiply(e.parent.matrixWorld)),e.applyMatrix4(zc),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vc,e,Hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vc,Uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Zc.DEFAULT_UP=new Z(0,1,0),Zc.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qc=class extends Zc{constructor(){super(),this.isGroup=!0,this.type=`Group`}},$c={type:`move`},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($c)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nl={h:0,s:0,l:0},rl={h:0,s:0,l:0};function il(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var al=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cs){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cc.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=cc.workingColorSpace){return this.r=e,this.g=t,this.b=n,cc.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=cc.workingColorSpace){if(e=Ys(e,1),t=Js(t,0,1),n=Js(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=il(i,r,e+1/3),this.g=il(i,r,e),this.b=il(i,r,e-1/3)}return cc.colorSpaceToWorking(this,r),this}setStyle(e,t=Cs){function n(t){t!==void 0&&parseFloat(t)<1&&Rs(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Rs(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Rs(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cs){let n=tl[e.toLowerCase()];return n===void 0?Rs(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lc(e.r),this.g=lc(e.g),this.b=lc(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cs){return cc.workingToColorSpace(ol.copy(this),e),Math.round(Js(ol.r*255,0,255))*65536+Math.round(Js(ol.g*255,0,255))*256+Math.round(Js(ol.b*255,0,255))}getHexString(e=Cs){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cc.workingColorSpace){cc.workingToColorSpace(ol.copy(this),t);let n=ol.r,r=ol.g,i=ol.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=cc.workingColorSpace){return cc.workingToColorSpace(ol.copy(this),t),e.r=ol.r,e.g=ol.g,e.b=ol.b,e}getStyle(e=Cs){cc.workingToColorSpace(ol.copy(this),e);let t=ol.r,n=ol.g,r=ol.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(nl),this.setHSL(nl.h+e,nl.s+t,nl.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nl),e.getHSL(rl);let n=Xs(nl.h,rl.h,t),r=Xs(nl.s,rl.s,t),i=Xs(nl.l,rl.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ol=new al;al.NAMES=tl;var sl=class extends Zc{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pc,this.environmentIntensity=1,this.environmentRotation=new Pc,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cl=new Z,ll=new Z,ul=new Z,dl=new Z,fl=new Z,pl=new Z,ml=new Z,hl=new Z,gl=new Z,_l=new Z,vl=new yc,yl=new yc,bl=new yc,xl=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cl.subVectors(e,t),r.cross(cl);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){cl.subVectors(r,t),ll.subVectors(n,t),ul.subVectors(e,t);let a=cl.dot(cl),o=cl.dot(ll),s=cl.dot(ul),c=ll.dot(ll),l=ll.dot(ul),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dl)!==null&&dl.x>=0&&dl.y>=0&&dl.x+dl.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,dl)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,dl.x),s.addScaledVector(a,dl.y),s.addScaledVector(o,dl.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return vl.setScalar(0),yl.setScalar(0),bl.setScalar(0),vl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),bl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vl,i.x),a.addScaledVector(yl,i.y),a.addScaledVector(bl,i.z),a}static isFrontFacing(e,t,n,r){return cl.subVectors(n,t),ll.subVectors(e,t),cl.cross(ll).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cl.subVectors(this.c,this.b),ll.subVectors(this.a,this.b),cl.cross(ll).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;fl.subVectors(r,n),pl.subVectors(i,n),hl.subVectors(e,n);let s=fl.dot(hl),c=pl.dot(hl);if(s<=0&&c<=0)return t.copy(n);gl.subVectors(e,r);let l=fl.dot(gl),u=pl.dot(gl);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(fl,a);_l.subVectors(e,i);let f=fl.dot(_l),p=pl.dot(_l);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(pl,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ml.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ml,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(fl,a).addScaledVector(pl,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sl=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wl.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wl.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,wl):wl.fromBufferAttribute(r,t),wl.applyMatrix4(e.matrixWorld),this.expandByPoint(wl);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Tl.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wl),wl.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),Nl.subVectors(this.max,Ml),El.subVectors(e.a,Ml),Dl.subVectors(e.b,Ml),Ol.subVectors(e.c,Ml),kl.subVectors(Dl,El),Al.subVectors(Ol,Dl),jl.subVectors(El,Ol);let t=[0,-kl.z,kl.y,0,-Al.z,Al.y,0,-jl.z,jl.y,kl.z,0,-kl.x,Al.z,0,-Al.x,jl.z,0,-jl.x,-kl.y,kl.x,0,-Al.y,Al.x,0,-jl.y,jl.x,0];return!Il(t,El,Dl,Ol,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,El,Dl,Ol,Nl))?!1:(Pl.crossVectors(kl,Al),t=[Pl.x,Pl.y,Pl.z],Il(t,El,Dl,Ol,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wl).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wl).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Cl[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cl[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cl[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cl[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cl[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cl[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cl[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cl[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cl)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cl=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],wl=new Z,Tl=new Sl,El=new Z,Dl=new Z,Ol=new Z,kl=new Z,Al=new Z,jl=new Z,Ml=new Z,Nl=new Z,Pl=new Z,Fl=new Z;function Il(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Fl.fromArray(e,a);let o=i.x*Math.abs(Fl.x)+i.y*Math.abs(Fl.y)+i.z*Math.abs(Fl.z),s=t.dot(Fl),c=n.dot(Fl),l=r.dot(Fl);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ll=new Z,Rl=new $s,zl=0,Bl=class extends Us{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zl++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Os,this.updateRanges=[],this.gpuType=go,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXYZ(t,Ll.x,Ll.y,Ll.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix4(e),this.setXYZ(t,Ll.x,Ll.y,Ll.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyNormalMatrix(e),this.setXYZ(t,Ll.x,Ll.y,Ll.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.transformDirection(e),this.setXYZ(t,Ll.x,Ll.y,Ll.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qs(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qs(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qs(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qs(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qs(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qs(t,this.array),n=Qs(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qs(t,this.array),n=Qs(n,this.array),r=Qs(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Qs(t,this.array),n=Qs(n,this.array),r=Qs(r,this.array),i=Qs(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Vl=class extends Bl{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Hl=class extends Bl{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ul=class extends Bl{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wl=new Sl,Gl=new Z,Kl=new Z,ql=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Wl.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);let t=Gl.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Gl,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(Kl)),this.expandByPoint(Gl.copy(e.center).sub(Kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jl=0,Yl=new wc,Xl=new Zc,Zl=new Z,Ql=new Sl,$l=new Sl,eu=new Z,tu=class e extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=qs(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(js(e)?Hl:Vl)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new rc().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yl.makeRotationFromQuaternion(e),this.applyMatrix4(Yl),this}rotateX(e){return Yl.makeRotationX(e),this.applyMatrix4(Yl),this}rotateY(e){return Yl.makeRotationY(e),this.applyMatrix4(Yl),this}rotateZ(e){return Yl.makeRotationZ(e),this.applyMatrix4(Yl),this}translate(e,t,n){return Yl.makeTranslation(e,t,n),this.applyMatrix4(Yl),this}scale(e,t,n){return Yl.makeScale(e,t,n),this.applyMatrix4(Yl),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zl).negate(),this.translate(Zl.x,Zl.y,Zl.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ul(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Rs(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)zs(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ql.setFromBufferAttribute(n),this.morphTargetsRelative?(eu.addVectors(this.boundingBox.min,Ql.min),this.boundingBox.expandByPoint(eu),eu.addVectors(this.boundingBox.max,Ql.max),this.boundingBox.expandByPoint(eu)):(this.boundingBox.expandByPoint(Ql.min),this.boundingBox.expandByPoint(Ql.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zs(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)zs(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);else if(e){let n=this.boundingSphere.center;if(Ql.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$l.setFromBufferAttribute(n),this.morphTargetsRelative?(eu.addVectors(Ql.min,$l.min),Ql.expandByPoint(eu),eu.addVectors(Ql.max,$l.max),Ql.expandByPoint(eu)):(Ql.expandByPoint($l.min),Ql.expandByPoint($l.max))}Ql.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)eu.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(eu));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)eu.fromBufferAttribute(a,t),o&&(Zl.fromBufferAttribute(e,t),eu.add(Zl)),r=Math.max(r,n.distanceToSquared(eu))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zs(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zs(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Bl(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new $s,f=new $s,p=new $s,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Bl(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)eu.fromBufferAttribute(e,t),eu.normalize(),e.setXYZ(t,eu.x,eu.y,eu.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Bl(a,r,i)}if(this.index===null)return Rs(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},nu=new Z,ru=new Z,iu=new rc,au=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=nu.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(nu),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||iu.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ou=0,su=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=qs(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new al(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Rs(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Rs(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new al().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new au().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new $s().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $s().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},cu=new Z,lu=new Z,uu=new Z,du=new Z,fu=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cu)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cu.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cu.copy(this.origin).addScaledVector(this.direction,t),cu.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lu.copy(e).add(t).multiplyScalar(.5),uu.copy(t).sub(e).normalize(),du.copy(this.origin).sub(lu);let i=e.distanceTo(t)*.5,a=-this.direction.dot(uu),o=du.dot(this.direction),s=-du.dot(uu),c=du.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(lu).addScaledVector(uu,d),f}intersectSphere(e,t){if(e.radius<0)return null;cu.subVectors(e.center,this.origin);let n=cu.dot(this.direction),r=cu.dot(cu)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cu)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,ee=E-F*D,R=O-P*A,te=k-F*A,z=j-P*N,B=M-F*N,V=z*te-B*R,H=L*B-ee*z,ne=R*ee-te*L;if(r){if(V<0||H<0||ne<0)return null}else if((V<0||H<0||ne<0)&&(V>0||H>0||ne>0))return null;let re=V+H+ne;if(re===0)return null;let U=I*(V*D+H*A+ne*N);return(re>0?U<0:U>0)?null:this.at(U/re,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pu=class extends su{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new al(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pc,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mu=new wc,hu=new fu,gu=new ql,_u=new Z,vu=new Z,yu=new Z,bu=new Z,xu=new Z,Su=new Z,Cu=new Z,wu=new Z,Tu=class extends Zc{constructor(e=new tu,t=new pu){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Su.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(xu.fromBufferAttribute(s,e),a?Su.addScaledVector(xu,r):Su.addScaledVector(xu.sub(t),r))}t.add(Su)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gu.copy(n.boundingSphere),gu.applyMatrix4(i),hu.copy(e.ray).recast(e.near),!(gu.containsPoint(hu.origin)===!1&&(hu.intersectSphere(gu,_u)===null||hu.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(mu.copy(i).invert(),hu.copy(e.ray).applyMatrix4(mu),(n.boundingBox===null||hu.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,hu)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Du(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Du(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Du(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Du(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Eu(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;wu.copy(s),wu.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(wu);return l<n.near||l>n.far?null:{distance:l,point:wu.clone(),object:e}}function Du(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,vu),e.getVertexPosition(c,yu),e.getVertexPosition(l,bu);let u=Eu(e,t,n,r,vu,yu,bu,Cu);if(u){let e=new Z;xl.getBarycoord(Cu,vu,yu,bu,e),i&&(u.uv=xl.getInterpolatedAttribute(i,s,c,l,e,new $s)),a&&(u.uv1=xl.getInterpolatedAttribute(a,s,c,l,e,new $s)),o&&(u.normal=xl.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};xl.getNormal(vu,yu,bu,t.normal),u.face=t,u.barycoord=e}return u}var Ou=class extends vc{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ro,l=ro,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ku=new ql,Au=new $s(.5,.5),ju=new Z,Mu=class{constructor(e=new au,t=new au,n=new au,r=new au,i=new au,a=new au){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=As,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ku.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ku.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ku)}intersectsSprite(e){return ku.center.set(0,0,0),ku.radius=.7071067811865476+Au.distanceTo(e.center),ku.applyMatrix4(e.matrixWorld),this.intersectsSphere(ku)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ju.x=r.normal.x>0?e.max.x:e.min.x,ju.y=r.normal.y>0?e.max.y:e.min.y,ju.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ju)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nu=class extends vc{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pu=class extends vc{constructor(e,t,n=ho,r,i,a,o=ro,s=ro,c,l=Eo,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fu=class extends Pu{constructor(e,t=ho,n=301,r,i,a=ro,o=ro,s,c=Eo){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Iu=class extends vc{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lu=class e extends tu{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ul(c,3)),this.setAttribute(`normal`,new Ul(l,3)),this.setAttribute(`uv`,new Ul(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ru=class e extends tu{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ul(p,3)),this.setAttribute(`normal`,new Ul(m,3)),this.setAttribute(`uv`,new Ul(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function zu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Vu(i))i.isRenderTargetTexture?(Rs(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Vu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Bu(e){let t={};for(let n=0;n<e.length;n++){let r=zu(e[n]);for(let e in r)t[e]=r[e]}return t}function Vu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Hu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Uu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cc.workingColorSpace}var Wu={clone:zu,merge:Bu},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qu=class extends su{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zu(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new al().setHex(r.value);break;case`v2`:this.uniforms[n].value=new $s().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new yc().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new rc().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new wc().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ju=class extends qu{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Yu=class extends su{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ss,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xu=class extends su{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Qu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var $u=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ed=class extends $u{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case bs:i=e,o=2*t-n;break;case xs:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case bs:a=e,s=2*n-t;break;case xs:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},td=class extends $u{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},nd=class extends $u{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},rd=class extends $u{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=od(n,t,g,y,r);i[p]=id(x,o,_,b,m)}return i}};function id(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ad(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function od(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=id(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ad(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var sd=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Zu(t,this.TimeBufferType),this.values=Zu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zu(e.times,Array),values:Zu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Qu(e.settings)&&(n.settings={inTangents:Zu(e.settings.inTangents,Array),outTangents:Zu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ed(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case _s:t=this.InterpolantFactoryMethodSmooth;break;case vs:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Rs(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return _s;case this.InterpolantFactoryMethodBezier:return vs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Qu(this.settings)&&(cd(this.settings.inTangents,e),cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(zs(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(zs(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){zs(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){zs(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ms(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){zs(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_s,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Qu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function cd(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}sd.prototype.ValueTypeName=``,sd.prototype.TimeBufferType=Float32Array,sd.prototype.ValueBufferType=Float32Array,sd.prototype.DefaultInterpolation=gs;var ld=class extends sd{constructor(e,t,n){super(e,t,n)}};ld.prototype.ValueTypeName=`bool`,ld.prototype.ValueBufferType=Array,ld.prototype.DefaultInterpolation=hs,ld.prototype.InterpolantFactoryMethodLinear=void 0,ld.prototype.InterpolantFactoryMethodSmooth=void 0;var ud=class extends sd{constructor(e,t,n,r){super(e,t,n,r)}};ud.prototype.ValueTypeName=`color`;var dd=class extends sd{constructor(e,t,n,r){super(e,t,n,r)}};dd.prototype.ValueTypeName=`number`;var fd=class extends $u{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ec.slerpFlat(i,0,a,c-o,a,c,s);return i}},pd=class extends sd{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new fd(this.times,this.values,this.getValueSize(),e)}};pd.prototype.ValueTypeName=`quaternion`,pd.prototype.InterpolantFactoryMethodSmooth=void 0;var md=class extends sd{constructor(e,t,n){super(e,t,n)}};md.prototype.ValueTypeName=`string`,md.prototype.ValueBufferType=Array,md.prototype.DefaultInterpolation=hs,md.prototype.InterpolantFactoryMethodLinear=void 0,md.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends sd{constructor(e,t,n,r){super(e,t,n,r)}};hd.prototype.ValueTypeName=`vector`;var gd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(_d(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!_d(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function _d(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var vd=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},yd=class{constructor(e){this.manager=e===void 0?vd:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yd.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var bd=new WeakMap,xd=class extends yd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=gd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=bd.get(a);e===void 0&&(e=[],bd.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ns(`img`);function s(){l(),t&&t(this);let n=bd.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}bd.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),gd.remove(`image:${e}`);let n=bd.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}bd.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gd.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Sd=class extends yd{constructor(e){super(e)}load(e,t,n,r){let i=new vc,a=new xd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Cd=new Z,wd=new ec,Td=new Z,Ed=class extends Zc{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new wc,this.projectionMatrix=new wc,this.projectionMatrixInverse=new wc,this.coordinateSystem=As,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cd,wd,Td),Td.x===1&&Td.y===1&&Td.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cd,wd,Td.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cd,wd,Td),Td.x===1&&Td.y===1&&Td.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cd,wd,Td.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dd=new Z,Od=new $s,kd=new $s,Ad=class extends Ed{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dd.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dd.x,Dd.y).multiplyScalar(-e/Dd.z),Dd.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dd.x,Dd.y).multiplyScalar(-e/Dd.z)}getViewSize(e,t){return this.getViewBounds(e,Od,kd),t.subVectors(kd,Od)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jd=class extends Ed{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Md=-90,Nd=1,Pd=class extends Zc{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ad(Md,Nd,e,t);r.layers=this.layers,this.add(r);let i=new Ad(Md,Nd,e,t);i.layers=this.layers,this.add(i);let a=new Ad(Md,Nd,e,t);a.layers=this.layers,this.add(a);let o=new Ad(Md,Nd,e,t);o.layers=this.layers,this.add(o);let s=new Ad(Md,Nd,e,t);s.layers=this.layers,this.add(s);let c=new Ad(Md,Nd,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fd=class extends Ad{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Id=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ld.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ld(){this._document.hidden===!1&&this.reset()}var Rd=`\\[\\]\\.:\\/`,zd=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bd=`[^\\[\\]\\.:\\/]`,Vd=`[^`+Rd.replace(`\\.`,``)+`]`,Hd=`((?:WC+[\\/:])*)`.replace(`WC`,Bd),Ud=`(WCOD+)?`.replace(`WCOD`,Vd),Wd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bd),Gd=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bd),Kd=RegExp(`^`+Hd+Ud+Wd+Gd+`$`),qd=[`material`,`materials`,`bones`,`map`],Jd=class{constructor(e,t,n){let r=n||Yd.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yd=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zd,``)}static parseTrackName(e){let t=Kd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rs(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){zs(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){zs(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){zs(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){zs(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){zs(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){zs(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){zs(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;zs(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){zs(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){zs(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yd.Composite=Jd,Yd.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yd.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yd.prototype.GetterByBindingType=[Yd.prototype._getValue_direct,Yd.prototype._getValue_array,Yd.prototype._getValue_arrayElement,Yd.prototype._getValue_toArray],Yd.prototype.SetterByBindingTypeAndVersioning=[[Yd.prototype._setValue_direct,Yd.prototype._setValue_direct_setNeedsUpdate,Yd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yd.prototype._setValue_array,Yd.prototype._setValue_array_setNeedsUpdate,Yd.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yd.prototype._setValue_arrayElement,Yd.prototype._setValue_arrayElement_setNeedsUpdate,Yd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yd.prototype._setValue_fromArray,Yd.prototype._setValue_fromArray_setNeedsUpdate,Yd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Xd(e,t,n,r){let i=Zd(r);switch(n){case Co:return e*t;case Oo:return e*t/i.components*i.byteLength;case ko:return e*t/i.components*i.byteLength;case Ao:return e*t*2/i.components*i.byteLength;case jo:return e*t*2/i.components*i.byteLength;case wo:return e*t*3/i.components*i.byteLength;case To:return e*t*4/i.components*i.byteLength;case Mo:return e*t*4/i.components*i.byteLength;case No:case Po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Io:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ro:case Bo:return Math.max(e,16)*Math.max(t,8)/4;case Lo:case zo:return Math.max(e,8)*Math.max(t,8)/2;case Vo:case Ho:case Wo:case Go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Uo:case Ko:case qo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case es:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ts:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ns:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case rs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case is:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case as:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case os:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ss:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cs:case ls:case us:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ds:case fs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ps:case ms:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zd(e){switch(e){case lo:case uo:return{byteLength:1,components:1};case po:case fo:case _o:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case ho:case mo:case go:return{byteLength:4,components:1};case xo:case So:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?Rs(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Qd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $d(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ef={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new al(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rc},alphaMap:{value:null},alphaMapTransform:{value:new rc},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rc}},envmap:{envMap:{value:null},envMapRotation:{value:new rc},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rc}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rc}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rc},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rc},normalScale:{value:new $s(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rc},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rc}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rc}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rc}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new al(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new al(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rc},alphaTest:{value:0},uvTransform:{value:new rc}},sprite:{diffuse:{value:new al(16777215)},opacity:{value:1},center:{value:new $s(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rc},alphaMap:{value:null},alphaMapTransform:{value:new rc},alphaTest:{value:0}}},tf={basic:{uniforms:Bu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:ef.meshbasic_vert,fragmentShader:ef.meshbasic_frag},lambert:{uniforms:Bu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new al(0)},envMapIntensity:{value:1}}]),vertexShader:ef.meshlambert_vert,fragmentShader:ef.meshlambert_frag},phong:{uniforms:Bu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new al(0)},specular:{value:new al(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ef.meshphong_vert,fragmentShader:ef.meshphong_frag},standard:{uniforms:Bu([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new al(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ef.meshphysical_vert,fragmentShader:ef.meshphysical_frag},toon:{uniforms:Bu([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new al(0)}}]),vertexShader:ef.meshtoon_vert,fragmentShader:ef.meshtoon_frag},matcap:{uniforms:Bu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:ef.meshmatcap_vert,fragmentShader:ef.meshmatcap_frag},points:{uniforms:Bu([Q.points,Q.fog]),vertexShader:ef.points_vert,fragmentShader:ef.points_frag},dashed:{uniforms:Bu([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ef.linedashed_vert,fragmentShader:ef.linedashed_frag},depth:{uniforms:Bu([Q.common,Q.displacementmap]),vertexShader:ef.depth_vert,fragmentShader:ef.depth_frag},normal:{uniforms:Bu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:ef.meshnormal_vert,fragmentShader:ef.meshnormal_frag},sprite:{uniforms:Bu([Q.sprite,Q.fog]),vertexShader:ef.sprite_vert,fragmentShader:ef.sprite_frag},background:{uniforms:{uvTransform:{value:new rc},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ef.background_vert,fragmentShader:ef.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rc}},vertexShader:ef.backgroundCube_vert,fragmentShader:ef.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ef.cube_vert,fragmentShader:ef.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ef.equirect_vert,fragmentShader:ef.equirect_frag},distance:{uniforms:Bu([Q.common,Q.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ef.distance_vert,fragmentShader:ef.distance_frag},shadow:{uniforms:Bu([Q.lights,Q.fog,{color:{value:new al(0)},opacity:{value:1}}]),vertexShader:ef.shadow_vert,fragmentShader:ef.shadow_frag}};tf.physical={uniforms:Bu([tf.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rc},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rc},clearcoatNormalScale:{value:new $s(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rc},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rc},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rc},sheen:{value:0},sheenColor:{value:new al(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rc},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rc},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rc},transmissionSamplerSize:{value:new $s},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rc},attenuationDistance:{value:0},attenuationColor:{value:new al(0)},specularColor:{value:new al(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rc},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rc},anisotropyVector:{value:new $s},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rc}}]),vertexShader:ef.meshphysical_vert,fragmentShader:ef.meshphysical_frag};var nf={r:0,b:0,g:0},rf=new wc,af=new rc;af.set(-1,0,0,0,1,0,0,0,1);function of(e,t,n,r,i,a){let o=new al(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Tu(new Lu(1,1,1),new qu({name:`BackgroundCubeMaterial`,uniforms:zu(tf.backgroundCube.uniforms),vertexShader:tf.backgroundCube.vertexShader,fragmentShader:tf.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(af),l.material.toneMapped=cc.getTransfer(i.colorSpace)!==Es,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Tu(new Ru(2,2),new qu({name:`BackgroundMaterial`,uniforms:zu(tf.background.uniforms),vertexShader:tf.background.vertexShader,fragmentShader:tf.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=cc.getTransfer(i.colorSpace)!==Es,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(nf,Uu(e)),n.buffers.color.setClear(nf.r,nf.g,nf.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function sf(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function cf(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function lf(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Rs(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Rs(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function uf(e){let t=this,n=null,r=0,i=!1,a=!1,o=new au,s=new rc,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var df=4,ff=6,pf=20,mf=256,hf=new jd,gf=new al,_f=null,vf=0,yf=0,bf=!1,xf=new Z,Sf=new Z,Cf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xf}=i;_f=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_f,vf,yf),this._renderer.xr.enabled=bf,e.scissorTest=!1,Ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:oo,minFilter:oo,generateMipmaps:!1,type:_o,format:To,colorSpace:ws,depthBuffer:!1},r=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wf(r)),this._blurMaterial=Of(r,e,t),this._ggxMaterial=Df(r,e,t)}return r}_compileMaterial(e){let t=new Tu(new tu,e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,n,r,i){let a=new Ad(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(gf),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tu(new Lu,new pu({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(gf),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ef(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ef(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,hf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-df?n-d+df:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ef(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,hf),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ef(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,hf)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ef(t,3*l*(r>this._lodMax-df?r-this._lodMax+df:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,hf)}};function wf(e){let t=[],n=[],r=e,i=e-df+1+ff;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Sf.set(1,r,n):e===1?Sf.set(-n,1,-r):e===2?Sf.set(-n,r,1):e===3?Sf.set(-1,r,-n):e===4?Sf.set(-n,-1,r):Sf.set(n,r,-1),Sf.toArray(l,(e*6+t)*3)}}let u=new tu;u.setAttribute(`position`,new Bl(c,3)),u.setAttribute(`outputDirection`,new Bl(l,3)),n.push(new Tu(u,null)),r>df&&r--}return{lodMeshes:n,sizeLods:t}}function Tf(e,t,n){let r=new xc(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ef(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Df(e,t,n){return new qu({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:mf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Of(e,t,n){return new qu({name:`SphericalGaussianBlur`,defines:{SAMPLES:pf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kf(){return new qu({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Af(){return new qu({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mf=class extends xc{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lu(5,5,5),i=new qu({name:`CubemapFromEquirect`,uniforms:zu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Tu(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=oo),new Pd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Nf(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Mf(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cf(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cf(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Pf(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Bs(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ff(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Hl:Vl)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function If(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Lf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:zs(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Rf(e,t,n){let r=new WeakMap,i=new yc;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Sc(h,p,m,u);g.type=go,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new $s(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function zf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Bf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Vf(e,t,n,r,i,a){let o=new xc(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new tu;l.setAttribute(`position`,new Ul([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ul([0,2,0,0,2,0],2));let u=new Ju({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Tu(l,u),f=new jd(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new xc(t,n,{type:_o,depthBuffer:!1,stencilBuffer:!1}),c=new xc(t,n,{type:_o,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},cc.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Bf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Hf=new vc,Uf=new Pu(1,1),Wf=new Sc,Gf=new Cc,Kf=new Nu,qf=[],Jf=[],Yf=new Float32Array(16),Xf=new Float32Array(9),Zf=new Float32Array(4);function Qf(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=qf[i];if(a===void 0&&(a=new Float32Array(i),qf[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function $f(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ep(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function tp(e,t){let n=Jf[t];n===void 0&&(n=new Int32Array(t),Jf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function np(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($f(n,t))return;e.uniform2fv(this.addr,t),ep(n,t)}}function ip(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($f(n,t))return;e.uniform3fv(this.addr,t),ep(n,t)}}function ap(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($f(n,t))return;e.uniform4fv(this.addr,t),ep(n,t)}}function op(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($f(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ep(n,t)}else{if($f(n,r))return;Zf.set(r),e.uniformMatrix2fv(this.addr,!1,Zf),ep(n,r)}}function sp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($f(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ep(n,t)}else{if($f(n,r))return;Xf.set(r),e.uniformMatrix3fv(this.addr,!1,Xf),ep(n,r)}}function cp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($f(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ep(n,t)}else{if($f(n,r))return;Yf.set(r),e.uniformMatrix4fv(this.addr,!1,Yf),ep(n,r)}}function lp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function up(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($f(n,t))return;e.uniform2iv(this.addr,t),ep(n,t)}}function dp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($f(n,t))return;e.uniform3iv(this.addr,t),ep(n,t)}}function fp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($f(n,t))return;e.uniform4iv(this.addr,t),ep(n,t)}}function pp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function mp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($f(n,t))return;e.uniform2uiv(this.addr,t),ep(n,t)}}function hp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($f(n,t))return;e.uniform3uiv(this.addr,t),ep(n,t)}}function gp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($f(n,t))return;e.uniform4uiv(this.addr,t),ep(n,t)}}function _p(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Uf.compareFunction=n.isReversedDepthBuffer()?518:515,a=Uf):a=Hf,n.setTexture2D(t||a,i)}function vp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Gf,i)}function yp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Kf,i)}function bp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Wf,i)}function xp(e){switch(e){case 5126:return np;case 35664:return rp;case 35665:return ip;case 35666:return ap;case 35674:return op;case 35675:return sp;case 35676:return cp;case 5124:case 35670:return lp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return hp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return bp}}function Sp(e,t){e.uniform1fv(this.addr,t)}function Cp(e,t){let n=Qf(t,this.size,2);e.uniform2fv(this.addr,n)}function wp(e,t){let n=Qf(t,this.size,3);e.uniform3fv(this.addr,n)}function Tp(e,t){let n=Qf(t,this.size,4);e.uniform4fv(this.addr,n)}function Ep(e,t){let n=Qf(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dp(e,t){let n=Qf(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Op(e,t){let n=Qf(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kp(e,t){e.uniform1iv(this.addr,t)}function Ap(e,t){e.uniform2iv(this.addr,t)}function jp(e,t){e.uniform3iv(this.addr,t)}function Mp(e,t){e.uniform4iv(this.addr,t)}function Np(e,t){e.uniform1uiv(this.addr,t)}function Pp(e,t){e.uniform2uiv(this.addr,t)}function Fp(e,t){e.uniform3uiv(this.addr,t)}function Ip(e,t){e.uniform4uiv(this.addr,t)}function Lp(e,t,n){let r=this.cache,i=t.length,a=tp(n,i);$f(r,a)||(e.uniform1iv(this.addr,a),ep(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Uf:Hf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rp(e,t,n){let r=this.cache,i=t.length,a=tp(n,i);$f(r,a)||(e.uniform1iv(this.addr,a),ep(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Gf,a[e])}function zp(e,t,n){let r=this.cache,i=t.length,a=tp(n,i);$f(r,a)||(e.uniform1iv(this.addr,a),ep(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Kf,a[e])}function Bp(e,t,n){let r=this.cache,i=t.length,a=tp(n,i);$f(r,a)||(e.uniform1iv(this.addr,a),ep(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Wf,a[e])}function Vp(e){switch(e){case 5126:return Sp;case 35664:return Cp;case 35665:return wp;case 35666:return Tp;case 35674:return Ep;case 35675:return Dp;case 35676:return Op;case 5124:case 35670:return kp;case 35667:case 35671:return Ap;case 35668:case 35672:return jp;case 35669:case 35673:return Mp;case 5125:return Np;case 36294:return Pp;case 36295:return Fp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Bp}}var Hp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xp(t.type)}},Up=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}},Wp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gp=/(\w+)(\])?(\[|\.)?/g;function Kp(e,t){e.seq.push(t),e.map[t.id]=t}function qp(e,t,n){let r=e.name,i=r.length;for(Gp.lastIndex=0;;){let a=Gp.exec(r),o=Gp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Kp(n,l===void 0?new Hp(s,e,t):new Up(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wp(s),Kp(n,e)),n=e}}}var Jp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);qp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Yp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xp=37297,Zp=0;function Qp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $p=new rc;function em(e){cc._getMatrix($p,cc.workingColorSpace,e);let t=`mat3( ${$p.elements.map(e=>e.toFixed(4))} )`;switch(cc.getTransfer(e)){case Ts:return[t,`LinearTransferOETF`];case Es:return[t,`sRGBTransferOETF`];default:return Rs(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tm(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Qp(e.getShaderSource(t),r)}return i}function nm(e,t){let n=em(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var rm={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function im(e,t){let n=rm[t];return n===void 0?(Rs(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var am=new Z;function om(){return cc.getLuminanceCoefficients(am),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${am.x.toFixed(4)}, ${am.y.toFixed(4)}, ${am.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function sm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(um).join(`
`)}function cm(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lm(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function um(e){return e!==``}function dm(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(e){return e.replace(pm,gm)}var hm=new Map;function gm(e,t){let n=ef[t];if(n===void 0){let e=hm.get(t);if(e!==void 0)n=ef[e],Rs(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return mm(n)}var _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(e){return e.replace(_m,ym)}function ym(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function bm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var xm={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Sm(e){return xm[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Cm={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function wm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Cm[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Tm={302:`ENVMAP_MODE_REFRACTION`};function Em(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Tm[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Dm={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Om(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Dm[e.combine]||`ENVMAP_BLENDING_NONE`}function km(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Am(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Sm(n),l=wm(n),u=Em(n),d=Om(n),f=km(n),p=sm(n),m=cm(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(um).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(um).join(`
`),_.length>0&&(_+=`
`)):(g=[bm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(um).join(`
`),_=[bm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ef.tonemapping_pars_fragment,n.toneMapping===0?``:im(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ef.colorspace_pars_fragment,nm(`linearToOutputTexel`,n.outputColorSpace),om(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(um).join(`
`)),o=mm(o),o=dm(o,n),o=fm(o,n),s=mm(s),s=dm(s,n),s=fm(s,n),o=vm(o),s=vm(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Yp(i,i.VERTEX_SHADER,y),S=Yp(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=tm(i,x,`vertex`),n=tm(i,S,`fragment`);zs(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Rs(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Jp(i,h),T=lm(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Xp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var jm=0,Mm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nm(e),t.set(e,n)),n}},Nm=class{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}};function Pm(e){return e===1030||e===37490||e===36285}function Fm(e,t,n,r,i,a){let o=new Fc,s=new Mm,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Rs(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=tf[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,ee=!!i.aoMap,R=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,B=!!i.displacementMap,V=!!i.emissiveMap,H=!!i.metalnessMap,ne=!!i.roughnessMap,re=i.anisotropy>0,U=i.clearcoat>0,ie=i.dispersion>0,ae=i.retroreflectivity>0,W=i.iridescence>0,oe=i.sheen>0,se=i.transmission>0,ce=re&&!!i.anisotropyMap,le=U&&!!i.clearcoatMap,ue=U&&!!i.clearcoatNormalMap,de=U&&!!i.clearcoatRoughnessMap,fe=W&&!!i.iridescenceMap,G=W&&!!i.iridescenceThicknessMap,pe=oe&&!!i.sheenColorMap,K=oe&&!!i.sheenRoughnessMap,me=!!i.specularMap,q=!!i.specularColorMap,he=!!i.specularIntensityMap,J=se&&!!i.transmissionMap,Y=se&&!!i.thicknessMap,ge=!!i.gradientMap,_e=!!i.alphaMap,ve=i.alphaTest>0,ye=!!i.alphaHash,be=!!i.extensions,xe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(xe=e.toneMapping);let Se={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:cc.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:R,bumpMap:te,normalMap:z,displacementMap:B,emissiveMap:V,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&Pm(i.normalMap.format),metalnessMap:H,roughnessMap:ne,anisotropy:re,anisotropyMap:ce,clearcoat:U,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:ie,retroreflection:ae,iridescence:W,iridescenceMap:fe,iridescenceThicknessMap:G,sheen:oe,sheenColorMap:pe,sheenRoughnessMap:K,specularMap:me,specularColorMap:q,specularIntensityMap:he,transmission:se,transmissionMap:J,thicknessMap:Y,gradientMap:ge,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:_e,alphaTest:ve,alphaHash:ye,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ee&&m(i.aoMap.channel),lightMapUv:R&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:B&&m(i.displacementMap.channel),emissiveMapUv:V&&m(i.emissiveMap.channel),metalnessMapUv:H&&m(i.metalnessMap.channel),roughnessMapUv:ne&&m(i.roughnessMap.channel),anisotropyMapUv:ce&&m(i.anisotropyMap.channel),clearcoatMapUv:le&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:G&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(i.sheenRoughnessMap.channel),specularMapUv:me&&m(i.specularMap.channel),specularColorMapUv:q&&m(i.specularColorMap.channel),specularIntensityMapUv:he&&m(i.specularIntensityMap.channel),transmissionMapUv:J&&m(i.transmissionMap.channel),thicknessMapUv:Y&&m(i.thicknessMap.channel),alphaMapUv:_e&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||re),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||_e),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&cc.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:V&&i.emissiveMap.isVideoTexture===!0&&cc.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:be&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(be&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=tf[t];n=Wu.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Am(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Im(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Lm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Lm),r.length>1&&r.sort(t||Rm),i.length>1&&i.sort(t||Rm)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Bm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new zm,e.set(t,[i])):n>=r.length?(i=new zm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Z,color:new al};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new al,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new al,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new al,groundColor:new al};break;case`RectAreaLight`:n={color:new al,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function Hm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $s};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $s};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $s,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Um=0;function Wm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Gm(e){let t=new Vm,n=Hm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new wc,o=new wc;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Wm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Um++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Km(e){let t=new Gm(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function qm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Km(e),t.set(n,[a])):r>=i.length?(a=new Km(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xm=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Zm=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Qm=new wc,$m=new Z,eh=new Z;function th(e,t,n){let r=new Mu,i=new $s,a=new $s,o=new yc,s=new Yu,c=new Xu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new qu({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $s},radius:{value:4}},vertexShader:Jm,fragmentShader:Ym}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new tu;m.setAttribute(`position`,new Bl(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Tu(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Rs(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Rs(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Rs(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new xc(i.x,i.y,{format:Ao,type:_o,minFilter:oo,magFilter:oo,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Pu(i.x,i.y,go),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Eo,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ro,d.map.depthTexture.magFilter=ro}else l.isPointLight?(d.map=new Mf(i.x),d.map.depthTexture=new Fu(i.x,ho)):(d.map=new xc(i.x,i.y),d.map.depthTexture=new Pu(i.x,i.y,ho)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Eo,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=oo,d.map.depthTexture.magFilter=oo):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ro,d.map.depthTexture.magFilter=ro);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),$m.setFromMatrixPosition(l.matrixWorld),e.position.copy($m),eh.copy(e.position),eh.add(Xm[t]),e.up.copy(Zm[t]),e.lookAt(eh),e.updateMatrixWorld(),n.makeTranslation(-$m.x,-$m.y,-$m.z),Qm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Qm,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new xc(i.x,i.y,{format:Ao,type:_o}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function nh(e,t){function n(){let t=!1,n=new yc,r=null,i=new yc(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?H(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Hs[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?H(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new al(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),te=new yc().fromArray(ee),z=new yc().fromArray(R);function B(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let V={};V[e.TEXTURE_2D]=B(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=B(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=B(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=B(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),H(e.DEPTH_TEST),o.setFunc(3),ce(!1),le(1),H(e.CULL_FACE),oe(0);function H(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ne(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function re(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function U(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ie(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ae={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ae[103]=e.MIN,ae[104]=e.MAX;let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function oe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ne(e.BLEND),g=!1);else if(g===!1&&(H(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:zs(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:zs(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:zs(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:zs(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ae[n],ae[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(W[r],W[i],W[o],W[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function se(t,n){t.side===2?ne(e.CULL_FACE):H(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ce(r),t.blending===1&&t.transparent===!1?oe(0):oe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),de(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function le(t){t===0?ne(e.CULL_FACE):(H(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ue(t){t!==k&&(N&&e.lineWidth(t),k=t)}function de(t,n,r){t?(H(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ne(e.POLYGON_OFFSET_FILL)}function fe(t){t?H(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function G(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function pe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||V[t]),i.type=t,i.texture=n)}function K(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function me(){try{e.compressedTexImage2D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function q(){try{e.compressedTexImage3D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function he(){try{e.texSubImage2D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function J(){try{e.texSubImage3D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function ge(){try{e.compressedTexSubImage3D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function _e(){try{e.texStorage2D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function ve(){try{e.texStorage3D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function ye(){try{e.texImage2D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function be(){try{e.texImage3D(...arguments)}catch(e){zs(`WebGLState:`,e)}}function xe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Se(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ce(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function we(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function Te(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ee(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new al(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:H,disable:ne,bindFramebuffer:re,drawBuffers:U,useProgram:ie,setBlending:oe,setMaterial:se,setFlipSided:ce,setCullFace:le,setLineWidth:ue,setPolygonOffset:de,setScissorTest:fe,activeTexture:G,bindTexture:pe,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:q,texImage2D:ye,texImage3D:be,pixelStorei:Se,getParameter:xe,updateUBOMapping:Te,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:ve,texSubImage2D:he,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:ge,scissor:Ce,viewport:we,reset:De}}function rh(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $s,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ns(`canvas`)}function g(e,t,n){let r=1,i=me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Rs(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Rs(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Rs(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Rs(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ts:cc.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Rs(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&Rs(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Rs(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Rs(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ne(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ne(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ne(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?re(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ee={[eo]:e.REPEAT,[to]:e.CLAMP_TO_EDGE,[no]:e.MIRRORED_REPEAT},R={[ro]:e.NEAREST,[io]:e.NEAREST_MIPMAP_NEAREST,[ao]:e.NEAREST_MIPMAP_LINEAR,[oo]:e.LINEAR,[so]:e.LINEAR_MIPMAP_NEAREST,[co]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Rs(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ee[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ee[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ee[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,R[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,R[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function B(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function V(e,t,n){return Math.floor(Math.floor(e/n)/t)}function H(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=V(n.start,r.width,4),c=V(t.start,r.width,4);n.start<=i+1&&a===c&&V(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ne(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=B(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=cc.getPrimaries(cc.workingColorSpace),r=o.colorSpace===``?null:cc.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=K(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);z(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Do,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&H(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Xd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Rs(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Rs(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Xd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=me(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=me(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function re(t,o,s){if(o.image.length!==6)return;let c=B(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=cc.getPrimaries(cc.workingColorSpace),r=o.colorSpace===``?null:cc.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=K(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);z(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Rs(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=me(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function U(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ae(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),z(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function W(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ae(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ae(i.__webglFramebuffer[0],t,0):ae(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ie(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ie(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,i){let a=r.get(t);n!==void 0&&U(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&W(t)}function se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&G(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)U(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else U(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),z(c,a),U(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),z(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)U(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else U(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&W(t)}function ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let le=[],ue=[];function de(t){if(t.samples>0){if(G(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(le.length=0,ue.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(le.push(l),ue.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function fe(e){return Math.min(i.maxSamples,e.samples)}function G(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function K(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(cc.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Rs(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):zs(`WebGLTextures: Unsupported texture color space:`,n)),t}function me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=oe,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=U,this.useMultisampledRTT=G,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ih(e,t){function n(n,r=``){let i,a=cc.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ah=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oh=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Iu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qu({vertexShader:ah,fragmentShader:oh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tu(new Ru(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Us{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new sh,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new $s,C=null,w=null,T=new Ad;T.viewport=new yc;let E=new Ad;E.viewport=new yc;let D=[T,E],O=new Fd,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new el,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new el,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new el,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Rs(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Rs(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Do:Eo,a=_.stencil?bo:ho);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xc(d.textureWidth,d.textureHeight,{format:To,type:lo,depthTexture:new Pu(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xc(f.framebufferWidth,f.framebufferHeight,{format:To,type:lo,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Z,F=new Z;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;L(O,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ee(e,O,i)};function ee(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ks*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let R=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ad,o.layers.enable(n),o.viewport=new yc,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Iu,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let z=new Qd;z.setAnimationLoop(te),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},lh=new wc,uh=new rc;uh.set(-1,0,0,0,1,0,0,0,1);function dh(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Uu(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(lh.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(uh),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function fh(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return zs(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Rs(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Rs(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ph=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mh=null;function hh(){return mh===null&&(mh=new Ou(ph,16,16,Ao,_o),mh.name=`DFG_LUT`,mh.minFilter=oo,mh.magFilter=oo,mh.wrapS=to,mh.wrapT=to,mh.generateMipmaps=!1,mh.needsUpdate=!0),mh}var gh=class{constructor(e={}){let{canvas:t=Ps(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=lo}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Mo,jo,ko]),g=new Set([lo,ho,po,bo,vo,yo]),_=new Uint32Array(4),v=new Int32Array(4),y=new Z,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Cs;let j=0,M=0,N=null,P=-1,F=null,I=new yc,L=new yc,ee=null,R=new al(0),te=0,z=t.width,B=t.height,V=1,H=null,ne=null,re=new yc(0,0,z,B),U=new yc(0,0,z,B),ie=!1,ae=new Mu,W=!1,oe=!1,se=new wc,ce=new Z,le=new yc,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return N===null?V:1}let G=n;function pe(e,n){return t.getContext(e,n)}let K,me,q,he,J,Y,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Fe,!1),t.addEventListener(`webglcontextrestored`,Ie,!1),t.addEventListener(`webglcontextcreationerror`,Le,!1),G===null){let t=`webgl2`;if(G=pe(t,e),G===null)throw pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ne()}catch(e){throw t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,Le,!1),zs(`WebGLRenderer: `+e.message),e}function Ne(){K=new Pf(G),K.init(),Ae=new ih(G,K),me=new lf(G,K,e,Ae),q=new nh(G,K),me.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),O=G.createFramebuffer(),k=G.createFramebuffer(),A=G.createFramebuffer(),he=new Lf(G),J=new Im,Y=new rh(G,K,q,J,me,Ae,he),ge=new Nf(T),_e=new $d(G),je=new sf(G,_e),ve=new Ff(G,_e,he,je),ye=new zf(G,ve,_e,je,he),De=new Rf(G,me,Y),we=new uf(J),be=new Fm(T,ge,K,me,je,we),xe=new dh(T,J),Se=new Bm,Ce=new qm(K),Ee=new of(T,ge,q,ye,p,s),Te=new th(T,ye,me),Me=new fh(G,he,me,q),Oe=new cf(G,K,he),ke=new If(G,K,he),he.programs=be.programs,T.capabilities=me,T.extensions=K,T.properties=J,T.renderLists=Se,T.shadowMap=Te,T.state=q,T.info=he}m!==1009&&(w=new Vf(m,t.width,t.height,o,r,i));let Pe=new ch(T,G);this.xr=Pe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=K.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=K.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(e){e!==void 0&&(V=e,this.setSize(z,B,!1))},this.getSize=function(e){return e.set(z,B)},this.setSize=function(e,n,r=!0){Pe.isPresenting?Rs(`WebGLRenderer: Can't change size while VR device is presenting.`):(z=e,B=n,t.width=Math.floor(e*V),t.height=Math.floor(n*V),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(z*V,B*V).floor()},this.setDrawingBufferSize=function(e,n,r){z=e,B=n,V=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)zs(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Rs(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(re)},this.setViewport=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),q.viewport(I.copy(re).multiplyScalar(V).round())},this.getScissor=function(e){return e.copy(U)},this.setScissor=function(e,t,n,r){e.isVector4?U.set(e.x,e.y,e.z,e.w):U.set(e,t,n,r),q.scissor(L.copy(U).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){q.setScissorTest(ie=e)},this.setOpaqueSort=function(e){H=e},this.setTransparentSort=function(e){ne=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,G.clearBufferuiv(G.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,G.clearBufferiv(G.COLOR,0,v))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,Le,!1),Ee.dispose(),Se.dispose(),Ce.dispose(),J.dispose(),ge.dispose(),ye.dispose(),je.dispose(),Me.dispose(),be.dispose(),Pe.dispose(),Pe.removeEventListener(`sessionstart`,We),Pe.removeEventListener(`sessionend`,Ge),Ke.stop()};function Fe(e){e.preventDefault(),Is(`WebGLRenderer: Context Lost.`),E=!0}function Ie(){Is(`WebGLRenderer: Context Restored.`),E=!1;let e=he.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;Ne(),he.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function Le(e){zs(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Re(e){let t=e.target;t.removeEventListener(`dispose`,Re),ze(t)}function ze(e){Be(e),J.remove(e)}function Be(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){be.releaseProgram(e)}),e.isShaderMaterial&&be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=nt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;je.setup(i,r,s,n,c);let h,g=Oe;if(c!==null&&(h=_e.get(c),g=ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*fe()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(K.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?_e.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ve(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),W===!0&&we.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Qe(e,t,r),e.side=0,e.needsUpdate=!0,Qe(e,t,r),e.side=2):Qe(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ce.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),oe=this.localClippingEnabled,W=we.init(this.clippingPlanes,oe),W===!0&&we.setGlobalState(this.clippingPlanes,t),D!==null&&Te.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ve(o,n,t,e),r.add(o)}else Ve(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}K.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let He=null;function Ue(e){He&&He(e)}function We(){Ke.stop()}function Ge(){Ke.start()}let Ke=new Qd;Ke.setAnimationLoop(Ue),typeof self<`u`&&Ke.setContext(self),this.setAnimationLoop=function(e){He=e,Pe.setAnimationLoop(e),e===null?Ke.stop():Ke.start()},Pe.addEventListener(`sessionstart`,We),Pe.addEventListener(`sessionend`,Ge),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){zs(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Pe.enabled===!0&&Pe.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(t),t=Pe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ce.get(e,C.length),x.init(t),x.state.textureUnits=Y.getTextureUnits(),C.push(x),se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(se,As,t.reversedDepth),oe=this.localClippingEnabled,W=we.init(this.clippingPlanes,oe),b=Se.get(e,S.length),b.init(),S.push(b),Pe.enabled===!0&&Pe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&qe(e,t,-1/0,T.sortObjects)}qe(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(H,ne),de=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,de&&Ee.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&we.beginShadows();let i=x.state.shadowsArray;if(Te.render(i,e,t),W===!0&&we.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ye(n,r,e,a)}de&&Ee.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Je(b,e,n,n.viewport)}}else r.length>0&&Ye(n,r,e,t),de&&Ee.render(e),Je(b,e,t)}N!==null&&M===0&&(Y.updateMultisampleRenderTarget(N),Y.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),je.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],Y.setTextureUnits(x.state.textureUnits),W===!0&&we.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ae)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);let i=ye.update(e),a=e.material;a.visible&&b.push(e,i,a,n,le.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ae))){let i=ye.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,le.z,s,t)}}else a.visible&&b.push(e,i,a,n,le.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)qe(i[e],t,n,r)}function Je(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),W===!0&&we.setGlobalState(T.clippingPlanes,n),r&&q.viewport(I.copy(r)),i.length>0&&Xe(i,t,n),a.length>0&&Xe(a,t,n),o.length>0&&Xe(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Ye(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=K.has(`EXT_color_buffer_half_float`)||K.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new xc(1,1,{generateMipmaps:!0,type:e?_o:lo,minFilter:co,samples:Math.max(4,me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cc.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(R),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),de&&Ee.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),W===!0&&we.setGlobalState(T.clippingPlanes,r),Xe(e,n,r),Y.updateMultisampleRenderTarget(a),Y.updateRenderTargetMipmap(a),K.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ze(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Y.updateMultisampleRenderTarget(a),Y.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(R,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Xe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ze(o,t,n,s,l,c)}}function Ze(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Qe(e,t,n){t.isScene!==!0&&(t=ue);let r=J.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=be.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ge.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Re),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return et(e,s),d}else s.uniforms=be.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=we.uniform),et(e,s),r.needsLights=it(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function $e(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function et(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function nt(e,t,n,r,i){t.isScene!==!0&&(t=ue),Y.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cc.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ge.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=x.state.lights;if(W===!0&&(oe===!0||e!==F)){let t=e===F&&r.id===P;we.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==we.numPlanes||v.numIntersection!==we.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Qe(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(q.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(G,`projectionMatrix`,e.projectionMatrix),O.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(G,ce.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&O.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(G,`sunShadowMap`,y.state.sunShadowMap,Y),y.state.directionalShadowMap.length>0&&O.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,Y),y.state.spotShadowMap.length>0&&O.setValue(G,`spotShadowMap`,y.state.spotShadowMap,Y),y.state.pointShadowMap.length>0&&O.setValue(G,`pointShadowMap`,y.state.pointShadowMap,Y)),i.isSkinnedMesh){O.setOptional(G,i,`bindMatrix`),O.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(G,`boneTexture`,e.boneTexture,Y))}i.isBatchedMesh&&(O.setOptional(G,i,`batchingTexture`),O.setValue(G,`batchingTexture`,i._matricesTexture,Y),O.setOptional(G,i,`batchingIdTexture`),O.setValue(G,`batchingIdTexture`,i._indirectTexture,Y),O.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(G,`batchingColorTexture`,i._colorsTexture,Y));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&De.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=hh()),w){if(O.setValue(G,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&rt(k,E),a&&r.fog===!0&&xe.refreshFogUniforms(k,a),xe.refreshMaterialUniforms(k,r,V,B,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Jp.upload(G,$e(v),k,Y)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jp.upload(G,$e(v),k,Y),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(G,`center`,i.center),O.setValue(G,`modelViewMatrix`,i.modelViewMatrix),O.setValue(G,`normalMatrix`,i.normalMatrix),O.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Me.update(n,S),Me.bind(n,S)}}return S}function rt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function it(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),ee=e.scissorTest,q.viewport(I),q.scissor(L),q.setScissorTest(ee),P=-1;return}if(o.__webglFramebuffer===void 0)Y.setupRenderTarget(e);else if(o.__hasExternalTextures)Y.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Y.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Y.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),ee=e.scissorTest}else I.copy(re).multiplyScalar(V).floor(),L.copy(U).multiplyScalar(V).floor(),ee=ie;if(n!==0&&(r=O),q.bindFramebuffer(G.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(I),q.scissor(L),q.setScissorTest(ee),i){let r=J.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}P=-1};function at(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=me.textureFormatReadable(e.format),t.__typeReadable=me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){zs(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){q.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=at(o);if(u.__formatReadable===!1){zs(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){zs(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,Ae.convert(c),Ae.convert(l),a)}finally{let e=N===null?null:J.get(N).__webglFramebuffer;q.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let d=at(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,Ae.convert(l),Ae.convert(u),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let p=N===null?null:J.get(N).__webglFramebuffer;q.bindFramebuffer(G.FRAMEBUFFER,p);let m=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vs(G,m,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(f),G.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Y.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ae.convert(t.format),_=Ae.convert(t.type),v;t.isData3DTexture?(Y.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Y.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(t,0),v=G.TEXTURE_2D),q.activeTexture(G.TEXTURE0),q.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(G.UNPACK_ROW_LENGTH),b=q.getParameter(G.UNPACK_IMAGE_HEIGHT),x=q.getParameter(G.UNPACK_SKIP_PIXELS),S=q.getParameter(G.UNPACK_SKIP_ROWS),C=q.getParameter(G.UNPACK_SKIP_IMAGES);q.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(G.UNPACK_SKIP_PIXELS,l),q.pixelStorei(G.UNPACK_SKIP_ROWS,u),q.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);q.bindFramebuffer(G.READ_FRAMEBUFFER,null),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(G.READ_FRAMEBUFFER,k),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);q.bindFramebuffer(G.READ_FRAMEBUFFER,null),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(G.UNPACK_ROW_LENGTH,y),q.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(G.UNPACK_SKIP_PIXELS,x),q.pixelStorei(G.UNPACK_SKIP_ROWS,S),q.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Y.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Y.setTextureCube(e,0):e.isData3DTexture?Y.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Y.setTexture2DArray(e,0):Y.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,q.reset(),je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=cc._getDrawingBufferColorSpace(e),t.unpackColorSpace=cc._getUnpackColorSpace()}},_h=9,vh=250,yh=1/120,bh=4,xh=1,Sh=.75,Ch=4,wh=150,Th=Object.assign(j({__name:`BlackLiquidWEBGL`,props:{win:{},mouse:{},targetHover:{},lenis:{},pageIsReady:{type:Boolean}},emits:[`modeChange`],setup(e,{expose:t,emit:n}){let r=e,i=n;c(()=>r.win,()=>{de()}),c(r.mouse,()=>{oe()}),c(()=>r.targetHover,e=>{fe(e)});let a=b(null),s,l,f,p,m=!1,h=0,g,_,v,y,S=0,C=new $s,T=new $s,E=!1,D=-1,O=-1,k=-1,A=()=>E?1:window.devicePixelRatio,j=new $s,M=new $s,N=new $s,P=0,F,I,L=`bufferA_rt`,ee=Array.from({length:Ch},()=>new yc(0,0,-100,0)),R=0,te=0,z=!1,B,V={iTime:{value:0},iResolution:{value:new Z},iChannel0:{value:null},iChannel1:{value:null},iMouse:{value:new yc},iHold:{value:0},iGlitch:{value:0},iGlitchColor:{value:new al(8421504)},iGlitchColorAmt:{value:.6},iShocks:{value:ee},iShockFibers:{value:null}},H={iTime:{value:0},iResolution:{value:new Z},iChannel0:{value:null},iChannel1:{value:null},iMouse:{value:new yc},iMousePrev:{value:new $s},iTimeDelta:{value:0},iPixelScale:{value:1},iTargetRect:{value:new yc(0,0,0,0)},iTargetActive:{value:0},iScroll:{value:0},iMouseStopped:{value:0},iTargetLeaving:{value:0},iIntro:{value:1},iIntroTurbulence:{value:1},iIntroDistort:{value:2.5},iIntroScale:{value:.01},iIntroThreshold:{value:.0245},iIntroSpeed:{value:.15},iIntroBlobsRadius:{value:1.3},iShocks:{value:ee},iShockFibers:{value:null}},ne=`
#define MAX_SHOCKS ${Ch}
uniform vec4 iShocks[MAX_SHOCKS];
// Le rayon final est calculé par onde (coin d'écran le plus éloigné) : au-delà de 1, l'anneau sort de l'écran
// avant la fin de l'ease, encore bien visible, au lieu d'atteindre les bords pendant qu'il s'efface
const float SHOCK_OVERSHOOT = 0.72; //0.75 0.93
const float SHOCK_WIDTH = 0.07; // épaisseur de l'anneau
// Seconde moitié de l'ancien expo.inOut sur 2.8 s : 1.4 s, à un quart de la force (decay² y partait de 0.5² = 0.25)
const float SHOCK_LIFE  = 1.5;  // secondes
const float SHOCK_STRENGTH = 0.25; // force globale de la poussée et de la déformation
// Extinction : pleine force jusqu'à cette part de la vie, puis effacement doux jusqu'à la fin.
// Le ralentissement de l'ease se voit ainsi à l'écran au lieu d'arriver quand l'onde est déjà presque éteinte
const float SHOCK_FADE_START = 0.;
const float SHOCK_DARKEN = 1.;    // assombrissement du rendu sur l'anneau (0 = aucun, 1 = noir au pic)
uniform sampler2D iShockFibers;       // test-noise-6.jpg : le front avance plus vite le long des fibres claires
const float SHOCK_FIBER = 0.075;       // 0.05 avance du front dans les fibres, en part du rayon (0 = cercle parfait)
const float SHOCK_FIBER_SCALE = 1.50;  // répétitions de la texture sur la hauteur d'écran (plus grand = fibres plus fines)

// Progression du rayon (0 → 1 sur la durée de vie) : départ explosif puis freinage, comme un souffle
// qui perd son énergie. Équivalent de expo.out, soit la seconde moitié d'expo.inOut : un ease « in » au début
// laisserait le rayon proche de 0 et l'anneau, centré sur l'impact, y ferait une tache. Alternatives :
//   power3.out : 1.0 - pow(1.0 - t, 3.0)
//   power2.out : 1.0 - (1.0 - t) * (1.0 - t)
//   linéaire   : t
float shockEase(float t) {
    return 1.0 - pow(1.0 - t, 3.0);
}

vec2 shockField(vec2 fragPx) {
    vec2 f = vec2(0.0);
    vec2 fiberUv = fragPx / iResolution.y * SHOCK_FIBER_SCALE;
    for (int i = 0; i < MAX_SHOCKS; i++) {
        vec4 s = iShocks[i];
        float age = iTime - s.z;
        // Conditions sur des uniforms : identiques pour tous les pixels, pas de divergence
        if (s.w <= 0.0 || age < 0.0 || age > SHOCK_LIFE) continue;
        vec2 d = (fragPx - s.xy) / iResolution.y;
        float dist = length(d);
        // Rainures : la distance parcourue est raccourcie dans les fibres claires et allongée dans les sillons sombres,
        // le front y arrive plus tôt et dessine les fibres en s'étendant. Proportionnel à dist : l'onde part ronde
        // de l'impact et se ramifie en grandissant. Décalage par onde (instant de départ) : chacune suit d'autres fibres
        float fiber = texture(iShockFibers, fiberUv + fract(s.z * vec2(0.1234, 0.0789))).r;
        float reach = dist * (1.0 - SHOCK_FIBER * (fiber * 2.0 - 1.0));
        // Traverse tout l'écran quel que soit l'impact : rayon final jusqu'au coin le plus éloigné, avec les marges
        // des sillons sombres (reach jusqu'à dist × (1 + SHOCK_FIBER)) et de l'épaisseur de l'anneau
        vec2 farCorner = max(s.xy, iResolution.xy - s.xy) / iResolution.y;
        float maxRadius = (length(farCorner) * (1.0 + SHOCK_FIBER) + SHOCK_WIDTH * 2.0) * SHOCK_OVERSHOOT;
        float radius = maxRadius * shockEase(age / SHOCK_LIFE);
        float x = (reach - radius) / SHOCK_WIDTH;
        float ring = exp(-x * x);
        // Tant que le rayon est plus petit que l'anneau, la cloche couvre l'impact et ferait une tache pleine :
        // l'onde n'apparaît qu'une fois l'anneau détaché du centre (quelques centièmes de seconde avec expo.out)
        ring *= smoothstep(0.0, SHOCK_WIDTH * 2.0, radius);
        float decay = 1.0 - smoothstep(SHOCK_FADE_START, 1.0, age / SHOCK_LIFE);
        f += d / max(dist, 1e-4) * ring * decay * s.w * SHOCK_STRENGTH;
    }
    return f;
}
`,re=!1,U=0,ie={x:0,y:0,z:0,w:0},ae=`
precision highp float;

out vec4 myOutputColor;
uniform vec3 iResolution;
uniform float iTime;
uniform sampler2D iChannel0; // Buffer A
uniform sampler2D iChannel1; // Noise/Dither texture
uniform float iHold;
uniform float iGlitch;
uniform vec3 iGlitchColor;
uniform float iGlitchColorAmt;

const float range = 3.0;
const float GLITCH_SPEED = 0.6;
${ne}

//2D (returns 0 - 1)
float random2d(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float randomRange(in vec2 seed, in float mn, in float mx) {
    return mn + random2d(seed) * (mx - mn);
}

// return 1 if v inside 1d range
float insideRange(float v, float bottom, float top) {
    return step(bottom, v) - step(top, v);
}

vec3 shade(vec2 uv) {
    // 1. Pré-calcul des inverses pour remplacer les divisions par des multiplications
    vec2 invRes = 1.0 / iResolution.xy;

    // Valeur depuis le Buffer A
    float gray = texture(iChannel0, uv).r;

    // 2. Simplification mathématique radicale de "unit" (les facteurs s'annulent)
    vec2 unit2D = range * invRes;

    // Échantillonnage explicite des voisins (Clarté + Performance)
    float left   = texture(iChannel0, uv - vec2(unit2D.x, 0.0)).r;
    float right  = texture(iChannel0, uv + vec2(unit2D.x, 0.0)).r;
    float down   = texture(iChannel0, uv - vec2(0.0, unit2D.y)).r;
    float up     = texture(iChannel0, uv + vec2(0.0, unit2D.y)).r;

    // Calcul des normales (gray * gray * gray remplacé par un pow plus propre ou conservé pour la rapidité)
    vec3 normal = normalize(vec3(
        right - left,
        down - up,
        pow(gray, 3.0)
    ));

    // Backlight : dot(normal, vec3(0,0,1)) est strictement équivalent à normal.z
    vec3 color = vec3(0.3) * (1.0 - abs(normal.z));

    // Specular : Pré-calcul de la direction normalisée de la lumière (évite un normalize() par pixel)
    // normalize(vec3(0, 1, 2)) -> 1/sqrt(5) et 2/sqrt(5)
    const vec3 dir = vec3(0.0, 0.4472136, 0.8944272);
    
    // On calcule le produit scalaire UNE seule fois pour le specular ET le rainbow
    float ndotl = dot(normal, dir);

    float specular = pow(ndotl * 0.5 + 0.5, 20.0);
    color += vec3(0.5) * smoothstep(0.2, 1.0, specular);

    // Rainbow
    float rainbowThreshold = mix(0.15, 1.0, iHold);
    float rainbowPhase = ndotl * 4.0 - uv.y * 3.0 - 3.0 + iTime * 2.;    
    vec3 tint = 0.5 + 0.5 * cos(vec3(1.0, 2.0, 3.0) + rainbowPhase);
    color += tint * smoothstep(rainbowThreshold, 0.0, gray);

    // Dither (Optimisation de la division par la taille de la texture)
    vec2 invDitherSize = 1.0 / vec2(textureSize(iChannel1, 0));
    vec2 ditherUV = gl_FragCoord.xy * invDitherSize;
    float dither = texture(iChannel1, ditherUV).r;
    color -= dither * 0.1;

    // Background & Final Mix
    float bgFrom = mix(1.5, 0.5, iHold);
    float bgTo   = mix(-0.5, -1.5, iHold);
    vec3 background = vec3(smoothstep(bgFrom, bgTo, length(uv - 0.5))) * 0.7;
    color = mix(background, clamp(color, 0.0, 1.0), smoothstep(0.01, 0.1, gray));

    
    return color;
}

void main() {
    vec2 invRes = 1.0 / iResolution.xy;
    // Onde de choc : l'anneau réfracte le rendu, comme une lentille qui s'élargit
    vec2 shock = shockField(gl_FragCoord.xy);
    vec2 uv = (gl_FragCoord.xy - shock * iResolution.y * 0.03) * invRes;

    vec3 outCol = shade(uv);

    float amt = iGlitch;
    if (amt > 0.001) {
        float time = floor(iTime * GLITCH_SPEED * 60.0);

        // tranches horizontales décalées
        float maxOffset = amt * 0.5;
        for (float i = 0.0; i < 10.0 * amt; i += 1.0) {
            float sliceY = random2d(vec2(time, 2345.0 + i));
            float sliceH = random2d(vec2(time, 9035.0 + i)) * 0.25;
            float hOffset = randomRange(vec2(time, 9625.0 + i), -maxOffset, maxOffset);
            if (insideRange(uv.y, sliceY, fract(sliceY + sliceH)) == 1.0) {
                outCol = shade(vec2(uv.x + hOffset, uv.y));
            }
        }

        // léger décalage chromatique sur un seul canal
        float maxColOffset = amt / 6.0;
        vec2 colOffset = vec2(
            randomRange(vec2(time, 9545.0), -maxColOffset, maxColOffset),
            randomRange(vec2(time, 7205.0), -maxColOffset, maxColOffset)
        );
        vec3 rCol = shade(uv + colOffset);
        vec3 bCol = shade(uv - colOffset);
        outCol.r = rCol.r;
        outCol.b = bCol.b;
        outCol = mix(outCol, iGlitchColor, amt * iGlitchColorAmt);
    }

    // Onde de choc plus sombre : intensité de l'anneau ramenée à 0 → 1 (sans SHOCK_STRENGTH ni la force de l'onde),
    // elle suit donc la forme et l'extinction de l'anneau
    float shockMask = clamp(length(shock) / SHOCK_STRENGTH, 0.0, 1.0);
    outCol *= 1.0 - shockMask * SHOCK_DARKEN;

    myOutputColor = vec4(outCol, 1.0);
}
`,W=`
precision highp float;

out vec4 myOutputColor;
uniform vec3 iResolution;
uniform float iTime;
uniform sampler2D iChannel0; // Noise texture
uniform sampler2D iChannel1; // Feedback buffer
uniform vec4 iMouse;
uniform vec2 iMousePrev;
uniform float iTimeDelta;
uniform float iPixelScale;
uniform vec4 iTargetRect;   
uniform float iTargetActive;
uniform float iScroll;
uniform float iMouseStopped;
uniform float iTargetLeaving;
uniform float iIntro;
uniform float iIntroTurbulence;
uniform float iIntroDistort;
uniform float iIntroScale;
uniform float iIntroThreshold;
uniform float iIntroSpeed;
uniform float iIntroBlobsRadius;

const float speed = .01;
const float scale = .075; 
const float fade = .95; 
const float strength = 1.85; 
const float baseRange = 6.0;
${ne}

vec3 fbm(vec3 p) {
    vec3 result = vec3(0.0);
    float amplitude = 0.5;
    float invAmplitude = 2.0;
    float z = p.z * 0.2;
    float fractZ = fract(z);
    
    vec2 p_uv1 = p.xy + vec2(z, 0.0);
    vec2 p_uv2 = p.xy + vec2(0.0, z);
    
    for (float i = 0.0; i < 3.0; i++) { 
        vec3 n1 = texture(iChannel0, p_uv1 * invAmplitude).rgb;
        vec3 n2 = texture(iChannel0, p_uv2 * invAmplitude).rgb;
        result += mix(n1, n2, fractZ) * amplitude;
        
        amplitude *= 0.33333333;
        invAmplitude *= 3.0;
    }
    return result;
}

void main() {
    float invResY = 1.0 / iResolution.y;
    vec2 invAspect = vec2(iResolution.y / iResolution.x, 1.0);

    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 uvCentered = (gl_FragCoord.xy - 0.5 * iResolution.xy) * invResY;

    vec2 mouse = (iMouse.xy - 0.5 * iResolution.xy) * invResY;
    
    float useMouse = step(0.5, iMouse.z) * (1.0 - iIntro);
    vec2 pos = mix(mouse, vec2(0.0), iIntro);

    float brushActive = max(useMouse, iIntro);

    vec2 dirMouse = uvCentered - mouse;
    float distMouse = length(dirMouse);
    float mouseForce = smoothstep(0.2, 0.0, distMouse) * useMouse;
    
    vec2 mousePrev = (iMousePrev - 0.5 * iResolution.xy) * invResY;
    vec2 posPrev = mix(mousePrev, vec2(0.0), iIntro);

    // Distance au segment [posPrev, pos] : évite les taches détachées quand le pointeur va vite
    vec2 segA = posPrev * brushActive;
    vec2 segAB = pos * brushActive - segA;
    float segH = clamp(dot(uvCentered - segA, segAB) / max(dot(segAB, segAB), 1e-6), 0.0, 1.0);
    vec2 p = uvCentered - (segA + segAB * segH);
    
    vec2 unit2D = (baseRange / 472.0) * invAspect;
    
    float center = texture(iChannel1, uv).r;
    float left   = texture(iChannel1, uv - vec2(unit2D.x, 0.0)).r;
    float right  = texture(iChannel1, uv + vec2(unit2D.x, 0.0)).r;
    float down   = texture(iChannel1, uv - vec2(0.0, unit2D.y)).r;
    float up     = texture(iChannel1, uv + vec2(0.0, unit2D.y)).r;

    float z = center * center + 0.001;
    vec2 normalXY = vec2(left - right, down - up);
    float len = sqrt(dot(normalXY, normalXY) + z * z);
    vec2 normal_xy = normalXY / len;
    vec2 distortion = -normal_xy + (dirMouse * mouseForce * 30.0) * iTargetActive;

    float turbulenceBoost = mix(1.0, iIntroTurbulence, iIntro);
    vec3 spice = fbm(vec3(uvCentered * scale * turbulenceBoost, iTime * speed * turbulenceBoost));
    float angle = spice.x * 12.566;
    vec2 offsetSpice = vec2(cos(angle), sin(angle));
    
    float distScale = (strength - iTargetActive * 0.75 + iTargetLeaving * 0.25 + iIntro * iIntroDistort) * invResY;
    // Survol d'une target : débordement en pixels CSS pour qu'il ait la même taille quel que soit le DPR.
    // La traînée de la souris garde son rendu en pixels physiques
    distScale *= mix(1.0, iPixelScale, iTargetActive);
    uv += (distortion + offsetSpice) * invAspect * distScale;

    // Onde de choc : on lit plus près du centre, le liquide est chassé vers l'extérieur (~25 px par frame au pic)
    vec2 shock = shockField(gl_FragCoord.xy);
    uv -= shock * invAspect * 25.0 * invResY;

    vec4 frame = texture(iChannel1, uv);
    
    float radius = mix(0.08, 0.12, 1.0 - frame.r);
    float noisyRadius = (1.0 - iTargetActive) * (radius + (spice.y - 0.5) * 0.05);
    float paint = 1.0 - smoothstep(noisyRadius * 0.2, noisyRadius, length(p));
    paint *= (0.5 + spice.z * 0.5) * brushActive;

    // Champ de taches multiples pour l'intro (décorrélé du bruit de distorsion via offset temporel)
    // Une fois l'intro finie (iIntro = 0), l'enveloppe est nulle : on saute le calcul plutôt que de le multiplier par 0.
    // Condition sur un uniform (identique pour tous les pixels) : pas de divergence, mipmaps du bruit non affectées
    float introBlobs = 0.0;
    if (iIntro > 0.0) {
        vec3 introNoise = fbm(vec3(uvCentered * iIntroScale, iTime * iIntroSpeed + 50.0));
        introBlobs = smoothstep(iIntroThreshold - 0.15, iIntroThreshold + 0.15, introNoise.x);

        // Enveloppe radiale : rétrécit vers le centre quand iIntro diminue
        float distFromCenter = length(uvCentered);
        float envelopeRadius = iIntro * iIntroBlobsRadius;
        // Inégalité stricte : avec step(), quand iIntro = 0 le pixel pile au centre (dimensions impaires) restait à 1
        // et peignait en continu une petite tache au centre
        float radialEnvelope = float(distFromCenter < envelopeRadius); // 1.0 si dedans, 0.0 si dehors
        introBlobs *= radialEnvelope;
    }

    float finalValue = 0.0;
    bool isMasked = false;

    if (iTargetActive > 0.5) {
        float phaseShift = spice.x * 200.0; 
        float localPulse = sin(iTime * 3.0 + phaseShift) * 0.012;
        vec2 wobble = spice.xy * 0.05;
        vec2 targetSize = (iTargetRect.zw * 0.5) * invResY + localPulse;
        vec2 targetCenter = ((iTargetRect.xy + iTargetRect.zw * 0.5) - 0.5 * iResolution.xy) * invResY;
        vec2 pBox = uvCentered - targetCenter + wobble;
        
        if (all(lessThan(abs(pBox), targetSize))) {
            isMasked = true;

            float startX = (useMouse > 0.5)
                ? clamp(mouse.x, targetCenter.x - targetSize.x, targetCenter.x + targetSize.x)
                : targetCenter.x;

            float fragX = uvCentered.x;
            float side = sign(fragX - startX);

            float neighborFragX = fragX - unit2D.x * side;

            vec2 neighborPBox = vec2(neighborFragX - targetCenter.x, pBox.y);

            float neighborOffset = 0.001 + (0.003 * iMouseStopped);
            float neighbor = texture(iChannel1, uv + vec2(neighborOffset, 0.0)).r + 
                              texture(iChannel1, uv - vec2(neighborOffset, 0.0)).r +
                              texture(iChannel1, uv + vec2(0.0, neighborOffset)).r +
                              texture(iChannel1, uv - vec2(0.0, neighborOffset)).r;

            float distFromStart = abs(fragX - startX);
            float reachThreshold = mix(0.6, 0.1, smoothstep(0.0, targetSize.x, distFromStart * (1.0 - neighbor)));

            float neighborInBox = smoothstep(reachThreshold, reachThreshold - 0.1, 1.0 - neighbor)
                                * float(all(lessThan(abs(neighborPBox), targetSize)));

            float propagation = smoothstep(0.0, 0.9, neighbor * neighborInBox);

            float mouseInput = smoothstep(0.08, 0.0, abs(fragX - startX)) * useMouse;

            float growthFactor = max(mouseInput, propagation);

            float boxWidth = targetSize.x * 2.0;
            float horizDist = abs(fragX - startX) / boxWidth;
            float resistance = smoothstep(0.0, 1.0, horizDist);

            float colonizationSpeed = (20.12 + spice.z * 0.1) * (1.0 - resistance * 0.6);

            float growth = mix(frame.r, 1.0, growthFactor * colonizationSpeed);
            finalValue = growth - 0.002 - (iScroll * 0.1);
        }
    }

    if (!isMasked) {
        float dynamicFade = fade + iScroll * 0.2 + iTargetLeaving * 1.;
        finalValue = max(max(paint, introBlobs), frame.r - iTimeDelta * dynamicFade);
        // Crête de liquide sur le front de l'onde
        finalValue = max(finalValue, length(shock) * 0.5);
    }

    myOutputColor = vec4(clamp(finalValue, 0.0, 1.0));
}
`,oe=()=>{E?(m||(C.set(r.mouse.value.x,r.mouse.value.y),j.copy(C)),T.set(r.mouse.value.x,r.mouse.value.y),m=!0,h=performance.now()):(C.x=r.mouse.value.x,C.y=r.mouse.value.y,m||j.copy(C),se(),m=!0,h=performance.now())},se=()=>{V.iMouse.value.x=C.x,V.iMouse.value.y=O-C.y;let e=A();H.iMouse.value.x=C.x*e,H.iMouse.value.y=O*e-C.y*e},ce,le=()=>{ce?.removeEventListener(`change`,ue),ce=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),ce.addEventListener(`change`,ue)},ue=()=>{de(),le()},de=()=>{let e=a.value.clientWidth,t=a.value.clientHeight,n=A();(e!==D||t!==O||n!==k)&&(D=e,O=t,k=n,s.setPixelRatio(n),s.setSize(e,t,!1),V.iResolution.value.set(e*n,t*n,1),H.iResolution.value.set(e*n,t*n,1),H.iPixelScale.value=E?1:n/2,F.setSize(e*n,t*n),I.setSize(e*n,t*n))},fe=e=>{if(e){let t=e.getBoundingClientRect(),n=A(),i=window.scrollY*n,a=t.left*n,o=(O-t.bottom)*n-i,s=t.width*n,c=t.height*.3*n,l,u;re?(l=ie.y,u=ie.w):(re=!0,U=performance.now()+wh,l=(O-r.mouse.value.y)*n-i,u=0,ie.y=l,ie.x=a,ie.z=s);let d=X.timeline({paused:!0}).to(ie,{x:a,w:l+u-o,duration:5.2/2,ease:`none`,overwrite:!0}).to(ie,{y:o,z:s,w:c,duration:2.2/2,ease:`none`,overwrite:!0});d.tweenTo(d.duration(),{ease:`expo.out`}),X.to(H.iTargetActive,{value:1,duration:.03,ease:`power2.out`,overwrite:!0})}else X.to(H.iTargetLeaving,{value:1,duration:0,overwrite:!0,onComplete:()=>{X.to(H.iTargetLeaving,{value:0,duration:1,ease:`none`,overwrite:!0})}}),X.to(H.iTargetActive,{value:0,duration:.03,ease:`power2.out`,overwrite:!0}),re=!1},G=()=>{let e=y.update().getElapsed(),t=e-S;S=e,E?(m&&(C.lerp(T,1-Math.exp(-t*_h)),se()),performance.now()-h>vh&&C.distanceTo(T)<1&&(m=!1)):performance.now()-h>50&&(m=!1),V.iTime.value=e,V.iMouse.value.z=+!!m;let n=!E&&!!r.targetHover&&performance.now()<U;H.iMouse.value.z=m||n?1:0,H.iTimeDelta.value=yh,H.iTargetRect.value.set(ie.x,ie.y+window.scrollY*A(),ie.z,ie.w),r.lenis?.isScrolling?H.iScroll.value=+!E:H.iScroll.value=0,P=Math.min(P+t,yh*bh);let i=Math.round(P/yh);P-=i*yh;let a=A();M.set(j.x*a,O*a-j.y*a),N.set(C.x*a,O*a-C.y*a),i>0&&j.copy(C);for(let t=0;t<i;t++){H.iTime.value=e-(i-1-t)*yh,H.iMousePrev.value.lerpVectors(M,N,t/i);let n=H.iMouse.value,r=(t+1)/i;n.x=M.x+(N.x-M.x)*r,n.y=M.y+(N.y-M.y)*r,pe()}s.setRenderTarget(null),s.render(l,f)},pe=()=>{let e=(!m&&r.targetHover?1:0)-H.iMouseStopped.value,t=e>0?2.4:.04;H.iMouseStopped.value+=e*t;let n=L===`bufferA_rt`?F:I,i=L===`bufferA_rt`?I:F;H.iChannel1.value=n.texture,s.setRenderTarget(i),s.render(g,_),V.iChannel0.value=i.texture,L=L===`bufferA_rt`?`bufferB_rt`:`bufferA_rt`};c(()=>r.pageIsReady,e=>{e&&X.to(H.iIntro,{value:0,duration:3,ease:`expo.inOut`})}),u(()=>{E=Ja(),K(),X.ticker.add(G),le(),Xa(Y),document.body.addEventListener(`mousedown`,q),window.addEventListener(`mouseup`,ge),window.addEventListener(`dragend`,ge),document.addEventListener(`selectstart`,he)}),d(()=>{X.ticker.remove(G),Xa(null),ce?.removeEventListener(`change`,ue),document.body.removeEventListener(`mousedown`,q),window.removeEventListener(`mouseup`,ge),window.removeEventListener(`dragend`,ge),document.removeEventListener(`selectstart`,he),document.documentElement.classList.remove(`is-holding`),B?.kill(),X.killTweensOf([V.iGlitch,H.iIntro,H.iTargetActive,H.iTargetLeaving,ie]),p?.geometry.dispose(),p?.material.dispose(),v?.material.dispose(),H.iChannel0.value?.dispose(),V.iChannel1.value?.dispose(),F?.dispose(),I?.dispose(),s?.dispose(),s?.forceContextLoss()});let K=()=>{let e=a.value.clientWidth,t=a.value.clientHeight,n=A();B=X.to(V.iHold,{value:1,duration:xh,ease:`power2.inOut`,paused:!0,onUpdate:()=>{let e=V.iHold.value;document.documentElement.style.setProperty(`--webgl-hold`,e.toFixed(3)),B.reversed()?te===1&&e<=.25&&(te=0,_e(),i(`modeChange`,te)):te===0&&e>=Sh&&(te=1,_e(),i(`modeChange`,te))}}),l=new sl,f=new jd(-1,1,1,-1,0,1),f.position.z=1;let r=new Ru(2,2);p=new Tu(r,new Ju({uniforms:V,vertexShader:`
precision highp float;

in vec3 position;

void main() {
    gl_Position = vec4(position, 1.0);
}
    `,fragmentShader:ae,glslVersion:ks})),l.add(p),g=new sl,_=new jd(-1,1,1,-1,0,1),_.position.z=1,v=new Tu(r,new Ju({uniforms:H,vertexShader:`
    precision highp float;

in vec3 position;

void main() {
    gl_Position = vec4(position, 1.0);
}
    `,fragmentShader:W,glslVersion:ks})),g.add(v);let o=new Sd().load(`/textures/test-noise-5.png`);o.wrapS=no,o.wrapT=no,H.iChannel0.value=o;let c=new Sd().load(`/textures/test-noise-6.jpg`);c.wrapS=no,c.wrapT=no,V.iChannel1.value=c,V.iShockFibers.value=c,H.iShockFibers.value=c,s=new gh({powerPreference:`high-performance`,depth:!1,stencil:!1}),s.setPixelRatio(A()),a.value.appendChild(s.domElement),s.domElement.style.display=`block`,s.domElement.style.width=`100%`,s.domElement.style.height=`100%`,F=new xc(e,t,{minFilter:oo,magFilter:oo,format:Oo,type:_o,depthBuffer:!1}),I=new xc(e,t,{minFilter:oo,magFilter:oo,format:Oo,type:_o,depthBuffer:!1}),V.iMouse.value.set(e*.5,t*.5,0,0),H.iMouse.value.set(e*.5*n,t*.5*n,0,0),de(),y=new Id,S=0},me=e=>e instanceof Element&&!!e.closest(`a, button, input, textarea, select, label, [role="button"], .clickable`),q=e=>{e.button!==0||me(e.target)||(z=!0,document.documentElement.classList.add(`is-holding`),window.getSelection()?.removeAllRanges(),te===0?B.play():B.reverse())},he=e=>{z&&e.preventDefault()},J=()=>{(B.isActive()?!B.reversed():te===1)?B.reverse():B.play()},Y=(e,t,n=1)=>{if(Qa()||O<0)return;let r=A();ee[R].set(e*r,(O-t)*r,S,n),R=(R+1)%Ch};t({toggleMode:J,triggerShockwave:Y});let ge=()=>{z&&(z=!1,document.documentElement.classList.remove(`is-holding`),B.isActive()&&(te===0?B.reverse():B.play()))},_e=(e=.85,t=.85)=>{if(Qa())return;X.killTweensOf(V.iGlitch),V.iGlitch.value=e,X.to(V.iGlitch,{value:0,duration:t,ease:`power3.out`,overwrite:!0});let n=e=>{let t=e.getBoundingClientRect();return t.width>0&&t.bottom>0&&t.top<window.innerHeight},r=X.utils.toArray(`.glitch-text`),i=[.6,.4,.5,.6,.2,.3,.6,.2];r.forEach((e,t)=>{if(!n(e))return;let r=e.textContent;X.to(e,{scrambleText:{text:r,chars:$a,speed:i[t%i.length],tweenLength:!1},duration:1,ease:`expo.inOut`})}),r=X.utils.toArray(`.glitch-text-inner`),r.forEach((e,t)=>{if(!n(e))return;let r=e.innerHTML;X.to(e,{scrambleText:{text:r,chars:$a,speed:i[t%i.length],tweenLength:!1},duration:1,ease:`expo.inOut`})})};return(e,t)=>(o(),x(`div`,null,[w(`div`,{ref_key:`container`,ref:a,class:`fixed -z-1 top-[0px] left-[0px] w-svw h-lvh`},null,512)]))}}),{__name:`BlackLiquidWEBGL`}),Eh,Dh,Oh,kh=()=>Oh||Gh.register(window.gsap),Ah=typeof Intl<`u`?new Intl.Segmenter:0,jh=e=>typeof e==`string`?jh(document.querySelectorAll(e)):`length`in e?Array.from(e):[e],Mh=e=>jh(e).filter(e=>e instanceof HTMLElement),Nh=[],Ph=function(){},Fh=/\s+/g,Ih=RegExp(`\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.`,`gu`),Lh={left:0,top:0,width:0,height:0},Rh=(e,t)=>{if(t){let n=new Set(e.join(``).match(t)||Nh),r=e.length,i,a,o,s;if(n.size)for(;--r>-1;){a=e[r];for(o of n)if(o.startsWith(a)&&o.length>a.length){for(i=0,s=a;o.startsWith(s+=e[r+ ++i])&&s.length<o.length;);if(i&&s.length===o.length){e[r]=o,e.splice(r+1,i);break}}}}return e},zh=e=>window.getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),Bh=(e,t,n)=>t.insertBefore(typeof e==`string`?document.createTextNode(e):e,n),Vh=(e,t,n)=>{let r=t[e+`sClass`]||``,{tag:i=`div`,aria:a=`auto`,propIndex:o=!1}=t,s=e===`line`?`block`:`inline-block`,c=r.indexOf(`++`)>-1,l=t=>{let l=document.createElement(i),u=n.length+1;return r&&(l.className=r+(c?` `+r+u:``)),o&&l.style.setProperty(`--`+e,u+``),a!==`none`&&l.setAttribute(`aria-hidden`,`true`),i!==`span`&&(l.style.position=`relative`,l.style.display=s),l.textContent=t,n.push(l),l};return c&&(r=r.replace(`++`,``)),l.collection=n,l},Hh=(e,t,n,r)=>{let i=Vh(`line`,n,r),a=window.getComputedStyle(e).textAlign||`left`;return(n,r)=>{let o=i(``);for(o.style.textAlign=a,e.insertBefore(o,t[n]);n<r;n++)o.appendChild(t[n]);o.normalize()}},Uh=(e,t,n,r,i,a,o,s,c,l)=>{var u;let d=Array.from(e.childNodes),f=0,{wordDelimiter:p,reduceWhiteSpace:m=!0,prepareText:h}=t,g=e.getBoundingClientRect(),_=g,v=!m&&window.getComputedStyle(e).whiteSpace.substring(0,3)===`pre`,y=0,b=n.collection,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,ee;for(typeof p==`object`?(C=p.delimiter||p,S=p.replaceWith||``):S=p===``?``:p||` `,x=S!==` `;f<d.length;f++)if(w=d[f],w.nodeType===3){for(F=w.textContent||``,m?F=F.replace(Fh,` `):v&&(F=F.replace(/\n/g,S+`
`)),h&&(F=h(F,e)),w.textContent=F,T=S||C?F.split(C||S):F.match(s)||Nh,L=T[T.length-1],O=x?L.slice(-1)===` `:!L,L||T.pop(),_=g,D=x?T[0].charAt(0)===` `:!T[0],D&&Bh(` `,e,w),T[0]||T.shift(),Rh(T,c),a&&l||(w.textContent=``),k=1;k<=T.length;k++)if(I=T[k-1],!m&&v&&I.charAt(0)===`
`&&((u=w.previousSibling)==null||u.remove(),Bh(document.createElement(`br`),e,w),I=I.slice(1)),!m&&I===``)Bh(S,e,w);else if(I===` `)e.insertBefore(document.createTextNode(` `),w);else{if(x&&I.charAt(0)===` `&&Bh(` `,e,w),y&&k===1&&!D&&b.indexOf(y.parentNode)>-1?(E=b[b.length-1],E.appendChild(document.createTextNode(r?``:I))):(E=n(r?``:I),Bh(E,e,w),y&&k===1&&!D&&E.insertBefore(y,E.firstChild)),r)for(j=Ah?Rh([...Ah.segment(I)].map(e=>e.segment),c):I.match(s)||Nh,ee=0;ee<j.length;ee++)E.appendChild(j[ee]===` `?document.createTextNode(` `):r(j[ee]));if(a&&l){if(F=w.textContent=F.substring(I.length+1,F.length),A=E.getBoundingClientRect(),A.top>_.top&&A.left<=_.left){for(M=e.cloneNode(),N=e.childNodes[0];N&&N!==E;)P=N,N=N.nextSibling,M.appendChild(P);e.parentNode.insertBefore(M,e),i&&zh(M)}_=A}(k<T.length||O)&&Bh(k>=T.length?` `:x&&I.slice(-1)===` `?` `+S:S,e,w)}e.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(b.indexOf(w.previousSibling)>-1&&b[b.length-1].appendChild(w),y=w):(Uh(w,t,n,r,i,a,o,s,c,!0),y=0),i&&zh(w))},Wh=class e{constructor(e,t){this.isSplit=!1,kh(),this.elements=Mh(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,i=()=>{let e=n.length,t;for(;e--;){t=n[e];let r=t.element.offsetWidth;if(r!==t.width){t.width=r,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<`u`&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(i,200)})},Ph(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t=`chars,words,lines`,aria:n=`auto`,deepSlice:r=!0,smartWrap:i,onSplit:a,autoSplit:o=!1,specialChars:s,mask:c}=this.vars,l=t.indexOf(`lines`)>-1,u=t.indexOf(`chars`)>-1,d=t.indexOf(`words`)>-1,f=u&&!d&&!l,p=s&&(`push`in s?RegExp(`(?:`+s.join(`|`)+`)`,`gu`):s),m=p?RegExp(p.source+`|`+Ih.source,`gu`):Ih,h=!!e.ignore&&Mh(e.ignore),{orig:g,animTime:_,obs:v}=this._data,y;return(u||d||l)&&(this.elements.forEach((t,a)=>{g[a]={element:t,html:t.innerHTML,ariaL:t.getAttribute(`aria-label`),ariaH:t.getAttribute(`aria-hidden`)},n===`auto`?t.setAttribute(`aria-label`,(t.textContent||``).trim()):n===`hidden`&&t.setAttribute(`aria-hidden`,`true`);let o=[],s=[],c=[],_=u?Vh(`char`,e,o):null,v=Vh(`word`,e,s),y,b,x,S;if(Uh(t,e,v,_,f,r&&(l||f),h,m,p,!1),l){let n=jh(t.childNodes),r=Hh(t,n,e,c),i,a=[],o=0,s=n.map(e=>e.nodeType===1?e.getBoundingClientRect():Lh),l=Lh;for(y=0;y<n.length;y++)i=n[y],i.nodeType===1&&(i.nodeName===`BR`?(a.push(i),r(o,y+1),o=y+1,l=s[o]):(y&&s[y].top>l.top&&s[y].left<=l.left&&(r(o,y),o=y),l=s[y]));o<y&&r(o,y),a.forEach(e=>e.parentNode?.removeChild(e))}if(!d){for(y=0;y<s.length;y++)if(b=s[y],u||!b.nextSibling||b.nextSibling.nodeType!==3){if(i&&!l){for(x=document.createElement(`span`),x.style.whiteSpace=`nowrap`;b.firstChild;)x.appendChild(b.firstChild);b.replaceWith(x)}else b.replaceWith(...b.childNodes)}else S=b.nextSibling,S&&S.nodeType===3&&(S.textContent=(b.textContent||``)+(S.textContent||``),b.remove());s.length=0,t.normalize()}this.lines.push(...c),this.words.push(...s),this.chars.push(...o)}),c&&this[c]&&this.masks.push(...this[c].map(e=>{let t=e.cloneNode();return e.replaceWith(t),t.appendChild(e),e.className&&(t.className=e.className.replace(/(\b\w+\b)/g,`$1-mask`)),t.style.overflow=`clip`,t}))),this.isSplit=!0,Dh&&(o?Dh.addEventListener(`loadingdone`,this._split):Dh.status===`loading`&&console.warn(`SplitText called before fonts loaded`)),(y=a&&a(this))&&y.totalTime&&(this._data.anim=_?y.totalTime(_):y),l&&o&&this.elements.forEach((e,t)=>{g[t].width=e.offsetWidth,v&&v.observe(e)}),this}revert(){var e,t;let{orig:n,anim:r,obs:i}=this._data;return i&&i.disconnect(),n.forEach(({element:e,html:t,ariaL:n,ariaH:r})=>{e.innerHTML=t,n?e.setAttribute(`aria-label`,n):e.removeAttribute(`aria-label`),r?e.setAttribute(`aria-hidden`,r):e.removeAttribute(`aria-hidden`)}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,Dh?.removeEventListener(`loadingdone`,this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this),this}static create(t,n){return new e(t,n)}static register(e){Eh=Eh||e||window.gsap,Eh&&(jh=Eh.utils.toArray,Ph=Eh.core.context||Ph),!Oh&&window.innerWidth>0&&(Dh=document.fonts,Oh=!0)}};Wh.version=`3.13.0`;var Gh=Wh,Kh=(e,{type:t=`lines`,glitch:n=!0,container:r=e}={})=>{let i=Gh.create(e,{type:t}),a=i.lines[0],o=a.cloneNode(!0);return a.classList.add(`original-child`),n&&a.classList.add(`glitch-text`),o.classList.add(`injected-child`),r.appendChild(o),{split:i,original:a,clone:o}},qh=[`href`],Jh={class:`flex items-start leading-[0.9] pointer-events-none`},Yh=Object.assign(j({__name:`Cta`,props:{link:{}},setup(e){let t=b(),n=b(),r=b(),i,a=Ra();u(()=>{Va(a,s)});function s(){i=X.timeline({paused:!0,defaults:{duration:.5,ease:`none`}}).fromTo(t.value,{rotate:45},{rotate:0,yPercent:15}).from(n.value,{drawSVG:`0% 62.75%`});let e,a;r.value.textContent?{original:e,clone:a}=Kh(r.value):(e=document.createElement(`div`),a=document.createElement(`div`),e.classList.add(`original-child`,`glitch-text`),a.classList.add(`injected-child`),r.value.appendChild(e),r.value.appendChild(a)),i.to(e,{yPercent:-110,stagger:.1,duration:1},0).fromTo(a,{yPercent:10},{yPercent:-100,stagger:.1,duration:1},`<`)}function c(e){Ja()||i.tweenTo(e,{ease:`expo.out`})}return(i,a)=>(o(),x(`a`,{class:`clickable`,target:`_blank`,href:e.link.url??void 0,onMouseenter:a[0]||=()=>c(`end`),onMouseleave:a[1]||=()=>c(0)},[w(`div`,Jh,[w(`div`,{ref_key:`textEl`,ref:r,class:`cta-text link-ctn`},O(e.link.text),513),w(`div`,null,[(o(),x(`svg`,{ref_key:`svgEl`,ref:t,class:`w-[0.71em] h-auto ml-[0.35em]`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 17.26 17.05`},[a[2]||=w(`polyline`,{points:`3.75 7.82 10.16 1.41 16.55 7.81`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1),w(`polyline`,{ref_key:`pathHover`,ref:n,points:`10.16 1.41 10.16 16.05 0 16.05`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,512)],512))])])],40,qh))}}),{__name:`CommonCta`}),Xh=[`href`],Zh={class:`cta-alt-text inline-block glitch-text relative z-1`},Qh={class:`absolute left-[0] top-full w-full h-full flex items-center justify-center bg-white border-[1px] border-white text-black perspective-origin-bottom backface-hidden`},$h=Object.assign(j({__name:`CtaAlt`,props:{link:{},isAltLayout:{type:Boolean}},setup(e){let t=e,n=b(),r,i=Ra(),a=v(()=>t.isAltLayout?`px-[0.21em] py-[0.32em]`:`px-[1.42em] py-[0.57em]`);u(()=>{i.add(s)});function s(){r=X.timeline({paused:!0,defaults:{ease:`none`,duration:.6}}).to(n.value.children[0],{rotateX:90,transformOrigin:`50% 100%`,yPercent:-100}).fromTo(n.value.children[1],{rotateX:-90,yPercent:0},{rotateX:0,yPercent:-100,transformOrigin:`50% 0%`},`<`)}function c(e,t){Ja()||e.tweenTo(e.duration()*t,{ease:`expo.out`})}return(t,i)=>(o(),x(`a`,{ref_key:`ctaEl`,ref:n,href:e.link.url??void 0,target:`_blank`,class:`relative block perspective-[200px] perspective-origin-top transform-3d clickable`,onMouseenter:i[0]||=()=>c(_(r),1),onMouseleave:i[1]||=()=>c(_(r),0)},[w(`div`,{class:A([_(a),`text-white border-white backface-hidden`])},[i[2]||=w(`div`,{class:`absolute w-full h-full z-0 left-[0] top-[0] backdrop-blur-[100px] bg-[#676767]/10 border-[1px]`},null,-1),w(`span`,Zh,O(e.link.text),1)],2),w(`div`,Qh,O(e.link.text),1)],40,Xh))}}),{__name:`CommonCtaAlt`}),eg={id:`main-header`,class:`fixed z-100 top-[0] left-[0] right-[0] flex justify-between items-start p-(--grid-margin) font-secondary`},tg={class:`flex-1`},ng={style:{"--mobile-gutter":`calc(var(--grid-gutter) * 2)`},class:`w-[27svw] pr-(--mobile-gutter) text-xxs custom-tab:pr-[unset] custom-tab:w-[25svw] custom-desktop:w-[15svw]`},rg={class:`w-full border-[1px] p-[1px] h-[0.63em] mb-[0.42em] border-[#D7D7D7] header-scroll-bar custom-tab:h-[0.83em]`},ig={class:`w-[2.57em] h-auto`,width:`36`,height:`17`,viewBox:`0 0 36 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},ag={class:`flex-1 flex flex-col items-end text-xs`},og={class:`mb-[1.07em] hidden custom-tab:flex custom-tab:mb-(--grid-margin)`},sg=Object.assign(j({__name:`CustomHeader`,props:{block:{},lenis:{}},emits:[`switchMode`],setup(e,{emit:t}){let n=e,r=t,i=b(),a=b(),s=b(),l=b(0),d=b(),p,m=!0,h=Ra();c(()=>n.lenis,(e,t,n)=>{e&&n(e.on(`scroll`,()=>{l.value=Math.round(e.progress*100)}))},{immediate:!0}),c(l,e=>{p.tweenTo(e,{duration:.07,ease:`none`})}),u(()=>{h.add(v)});function v(){p=X.timeline({paused:!0,defaults:{duration:100,ease:`none`}}).to(i.value,{xPercent:100}).to(a.value,{xPercent:-100},`<`).from(s.value,{scaleX:0,transformOrigin:`left`},`<`)}function S(){r(`switchMode`),m=!m,X.to(d.value,{x:m?0:-19,duration:.8,ease:`expo.out`,overwrite:!0})}return(t,n)=>{let r=Yh,c=$h;return o(),x(`header`,eg,[w(`div`,tg,[w(`div`,ng,[w(`div`,rg,[w(`div`,{ref_key:`progressBar`,ref:s,class:`h-full w-full bg-[#D7D7D7]`},null,512)]),w(`div`,{ref_key:`progressCtn`,ref:i},[w(`div`,{ref_key:`innerProgressCtn`,ref:a,class:`w-max scroll-bar-number glitch-text`},O(_(l))+`% `,513)],512)])]),w(`button`,{type:`button`,"aria-label":`Switch mode`,class:`header-switch-mode text-xs hidden cursor-pointer custom-touchable:block`,onClick:n[0]||=e=>S()},[(o(),x(`svg`,ig,[n[1]||=w(`path`,{d:`M8.5 0.5H27.5C31.9183 0.5 35.5 4.08172 35.5 8.5C35.5 12.9183 31.9183 16.5 27.5 16.5H8.5C4.08172 16.5 0.5 12.9183 0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5Z`,fill:`#676767`,stroke:`white`},null,-1),w(`path`,{ref_key:`switchKnob`,ref:d,d:`M27.5 3.5C30.2614 3.5 32.5 5.73858 32.5 8.5C32.5 11.2614 30.2614 13.5 27.5 13.5C24.7386 13.5 22.5 11.2614 22.5 8.5C22.5 5.73858 24.7386 3.5 27.5 3.5Z`,fill:`white`,stroke:`white`},null,512)]))]),w(`div`,ag,[w(`div`,og,[(o(!0),x(E,null,f(e.block.socials,(e,t)=>(o(),x(`div`,{key:t,class:`ml-[0.85em]`},[g(r,{link:e,class:`header-right-link`},null,8,[`link`])]))),128))]),w(`div`,null,[e.block.contact?(o(),D(c,{key:0,link:e.block.contact,class:`header-contact-link`},null,8,[`link`])):y(``,!0)])])])}}}),{__name:`CustomHeader`});function cg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lg(e,t,n){return t&&cg(e.prototype,t),n&&cg(e,n),e}var ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg=function(){return ug||typeof window<`u`&&(ug=window.gsap)&&ug.registerPlugin&&ug},wg=1,Tg=[],Eg=[],Dg=[],Og=Date.now,kg=function(e,t){return t},Ag=function(){var e=vg.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Eg),r.push.apply(r,Dg),Eg=n,Dg=r,kg=function(e,n){return t[e](n)}},jg=function(e,t){return~Dg.indexOf(e)&&Dg[Dg.indexOf(e)+1][t]},Mg=function(e){return!!~yg.indexOf(e)},Ng=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Pg=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fg=`scrollLeft`,Ig=`scrollTop`,Lg=function(){return bg&&bg.isPressed||Eg.cache++},Rg=function(e,t){var n=function n(r){if(r||r===0){wg&&(fg.history.scrollRestoration=`manual`);var i=bg&&bg.isPressed;r=n.v=Math.round(r)||(bg&&bg.iOS?1:0),e(r),n.cacheID=Eg.cache,i&&kg(`ss`,r)}else(t||Eg.cache!==n.cacheID||kg(`ref`))&&(n.cacheID=Eg.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},zg={s:Fg,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Rg(function(e){return arguments.length?fg.scrollTo(e,Bg.sc()):fg.pageXOffset||pg[Fg]||mg[Fg]||hg[Fg]||0})},Bg={s:Ig,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:zg,sc:Rg(function(e){return arguments.length?fg.scrollTo(zg.sc(),e):fg.pageYOffset||pg[Ig]||mg[Ig]||hg[Ig]||0})},Vg=function(e,t){return(t&&t._ctx&&t._ctx.selector||ug.utils.toArray)(e)[0]||(typeof e==`string`&&ug.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Hg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ug=function(e,t){var n=t.s,r=t.sc;Mg(e)&&(e=pg.scrollingElement||mg);var i=Eg.indexOf(e),a=r===Bg.sc?1:2;!~i&&(i=Eg.push(e)-1),Eg[i+a]||Ng(e,`scroll`,Lg);var o=Eg[i+a],s=o||(Eg[i+a]=Rg(jg(e,n),!0)||(Mg(e)?r:Rg(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=ug.getProperty(e,`scrollBehavior`)===`smooth`),s},Wg=function(e,t,n){var r=e,i=e,a=Og(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Og();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Og();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Gg=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Kg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){vg=ug.core.globals().ScrollTrigger,vg&&vg.core&&Ag()},Jg=function(e){return ug=e||Cg(),!dg&&ug&&typeof document<`u`&&document.body&&(fg=window,pg=document,mg=pg.documentElement,hg=pg.body,yg=[fg,pg,mg,hg],ug.utils.clamp,Sg=ug.core.context||function(){},_g=`onpointerenter`in hg?`pointer`:`mouse`,gg=Yg.isTouch=fg.matchMedia&&fg.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in fg||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xg=Yg.eventTypes=(`ontouchstart`in mg?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in mg?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return wg=0},500),qg(),dg=1),dg};zg.op=Bg,Eg.cache=0;var Yg=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){dg||Jg(ug)||console.warn(`Please gsap.registerPlugin(Observer)`),vg||qg();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,I=e.onDisable,L=e.onClick,ee=e.scrollSpeed,R=e.capture,te=e.allowClicks,z=e.lockAxis,B=e.onLockAxis;this.target=i=Vg(i)||mg,this.vars=e,u&&=ug.utils.toArray(u),t||=1e-9,n||=0,d||=1,ee||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(fg.getComputedStyle(hg).lineHeight)||22;var V,H,ne,re,U,ie,ae,W=this,oe=0,se=0,ce=e.passive||!s&&e.passive!==!1,le=Ug(i,zg),ue=Ug(i,Bg),de=le(),fe=ue(),G=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&xg[0]===`pointerdown`,pe=Mg(i),K=i.ownerDocument||pg,me=[0,0,0],q=[0,0,0],he=0,J=function(){return he=Og()},Y=function(e,t){return(W.event=e)&&u&&Hg(e.target,u)||t&&G&&e.pointerType!==`touch`||A&&A(e,t)},ge=function(){W._vx.reset(),W._vy.reset(),H.pause(),c&&c(W)},_e=function(){var e=W.deltaX=Kg(me),n=W.deltaY=Kg(q),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(W,e,n,me,q),r&&(v&&W.deltaX>0&&v(W),y&&W.deltaX<0&&y(W),S&&S(W),T&&W.deltaX<0!=oe<0&&T(W),oe=W.deltaX,me[0]=me[1]=me[2]=0),i&&(x&&W.deltaY>0&&x(W),b&&W.deltaY<0&&b(W),C&&C(W),E&&W.deltaY<0!=se<0&&E(W),se=W.deltaY,q[0]=q[1]=q[2]=0),(re||ne)&&(k&&k(W),ne&&=(p&&ne===1&&p(W),h&&h(W),0),re=!1),ie&&!(ie=!1)&&B&&B(W),U&&=(P(W),!1),V=0},ve=function(e,t,n){me[n]+=e,q[n]+=t,W._vx.update(e),W._vy.update(t),o?V||=requestAnimationFrame(_e):_e()},ye=function(e,t){z&&!ae&&(W.axis=ae=Math.abs(e)>Math.abs(t)?`x`:`y`,ie=!0),ae!==`y`&&(me[2]+=e,W._vx.update(e,!0)),ae!==`x`&&(q[2]+=t,W._vy.update(t,!0)),o?V||=requestAnimationFrame(_e):_e()},be=function(e){if(!Y(e,1)){e=Gg(e,s);var t=e.clientX,r=e.clientY,i=t-W.x,a=r-W.y,o=W.isDragging;W.x=t,W.y=r,(o||(i||a)&&(Math.abs(W.startX-t)>=n||Math.abs(W.startY-r)>=n))&&(ne=o?2:1,o||(W.isDragging=!0),ye(i,a))}},xe=W.onPress=function(e){Y(e,1)||e&&e.button||(W.axis=ae=null,H.pause(),W.isPressed=!0,e=Gg(e),oe=se=0,W.startX=W.x=e.clientX,W.startY=W.y=e.clientY,W._vx.reset(),W._vy.reset(),Ng(j?i:K,xg[1],be,ce,!0),W.deltaX=W.deltaY=0,g&&g(W))},Se=W.onRelease=function(e){if(!Y(e,1)){Pg(j?i:K,xg[1],be,!0);var t=!isNaN(W.y-W.startY),n=W.isDragging,r=n&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),a=Gg(e);!r&&t&&(W._vx.reset(),W._vy.reset(),s&&te&&ug.delayedCall(.08,function(){if(Og()-he>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(K.createEvent){var t=K.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,fg,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,c&&n&&!j&&H.restart(!0),ne&&_e(),m&&n&&m(W),_&&_(W,r)}},Ce=function(e){return e.touches&&e.touches.length>1&&(W.isGesturing=!0)&&M(e,W.isDragging)},we=function(){return(W.isGesturing=!1)||N(W)},Te=function(e){if(!Y(e)){var t=le(),n=ue();ve((t-de)*ee,(n-fe)*ee,1),de=t,fe=n,c&&H.restart(!0)}},Ee=function(e){if(!Y(e)){e=Gg(e,s),P&&(U=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?fg.innerHeight:1)*d;ve(e.deltaX*t,e.deltaY*t,0),c&&!j&&H.restart(!0)}},De=function(e){if(!Y(e)){var t=e.clientX,n=e.clientY,r=t-W.x,i=n-W.y;W.x=t,W.y=n,re=!0,c&&H.restart(!0),(r||i)&&ye(r,i)}},Oe=function(e){W.event=e,D(W)},ke=function(e){W.event=e,O(W)},Ae=function(e){return Y(e)||Gg(e,s)&&L(W)};H=W._dc=ug.delayedCall(l||.25,ge).pause(),W.deltaX=W.deltaY=0,W._vx=Wg(0,50,!0),W._vy=Wg(0,50,!0),W.scrollX=le,W.scrollY=ue,W.isDragging=W.isGesturing=W.isPressed=!1,Sg(this),W.enable=function(e){return W.isEnabled||(Ng(pe?K:i,`scroll`,Lg),r.indexOf(`scroll`)>=0&&Ng(pe?K:i,`scroll`,Te,ce,R),r.indexOf(`wheel`)>=0&&Ng(i,`wheel`,Ee,ce,R),(r.indexOf(`touch`)>=0&&gg||r.indexOf(`pointer`)>=0)&&(Ng(i,xg[0],xe,ce,R),Ng(K,xg[2],Se),Ng(K,xg[3],Se),te&&Ng(i,`click`,J,!0,!0),L&&Ng(i,`click`,Ae),M&&Ng(K,`gesturestart`,Ce),N&&Ng(K,`gestureend`,we),D&&Ng(i,_g+`enter`,Oe),O&&Ng(i,_g+`leave`,ke),k&&Ng(i,_g+`move`,De)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=re=ne=!1,W._vx.reset(),W._vy.reset(),de=le(),fe=ue(),e&&e.type&&xe(e),F&&F(W)),W},W.disable=function(){W.isEnabled&&(Tg.filter(function(e){return e!==W&&Mg(e.target)}).length||Pg(pe?K:i,`scroll`,Lg),W.isPressed&&(W._vx.reset(),W._vy.reset(),Pg(j?i:K,xg[1],be,!0)),Pg(pe?K:i,`scroll`,Te,R),Pg(i,`wheel`,Ee,R),Pg(i,xg[0],xe,R),Pg(K,xg[2],Se),Pg(K,xg[3],Se),Pg(i,`click`,J,!0),Pg(i,`click`,Ae),Pg(K,`gesturestart`,Ce),Pg(K,`gestureend`,we),Pg(i,_g+`enter`,Oe),Pg(i,_g+`leave`,ke),Pg(i,_g+`move`,De),W.isEnabled=W.isPressed=W.isDragging=!1,I&&I(W))},W.kill=W.revert=function(){W.disable();var e=Tg.indexOf(W);e>=0&&Tg.splice(e,1),bg===W&&(bg=0)},Tg.push(W),j&&Mg(i)&&(bg=W),W.enable(f)},lg(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();Yg.version=`3.13.0`,Yg.create=function(e){return new Yg(e)},Yg.register=Jg,Yg.getAll=function(){return Tg.slice()},Yg.getById=function(e){return Tg.filter(function(t){return t.vars.id===e})[0]},Cg()&&ug.registerPlugin(Yg);var $,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_=1,A_=Date.now,j_=A_(),M_=0,N_=0,P_=function(e,t,n){var r=X_(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},F_=function(e,t){return t&&(!X_(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},I_=function e(){return N_&&requestAnimationFrame(e)},L_=function(){return c_=1},R_=function(){return c_=0},z_=function(e){return e},B_=function(e){return Math.round(e*1e5)/1e5||0},V_=function(){return typeof window<`u`},H_=function(){return $||V_()&&($=window.gsap)&&$.registerPlugin&&$},U_=function(e){return!!~t_.indexOf(e)},W_=function(e){return(e===`Height`?T_:Zg[`inner`+e])||$g[`client`+e]||e_[`client`+e]},G_=function(e){return jg(e,`getBoundingClientRect`)||(U_(e)?function(){return _y.width=Zg.innerWidth,_y.height=T_,_y}:function(){return xv(e)})},K_=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=jg(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?W_(i):e[`client`+i])||0}},q_=function(e,t){return!t||~Dg.indexOf(e)?G_(e):function(){return _y}},J_=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=jg(e,n))?a()-G_(e)()[i]:U_(e)?($g[n]||e_[n])-W_(r):e[n]-e[`offset`+r])},Y_=function(e,t){for(var n=0;n<p_.length;n+=3)(!t||~t.indexOf(p_[n+1]))&&e(p_[n],p_[n+1],p_[n+2])},X_=function(e){return typeof e==`string`},Z_=function(e){return typeof e==`function`},Q_=function(e){return typeof e==`number`},$_=function(e){return typeof e==`object`},ev=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},tv=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},nv=Math.abs,rv=`left`,iv=`top`,av=`right`,ov=`bottom`,sv=`width`,cv=`height`,lv=`Right`,uv=`Left`,dv=`Top`,fv=`Bottom`,pv=`padding`,mv=`margin`,hv=`Width`,gv=`Height`,_v=`px`,vv=function(e){return Zg.getComputedStyle(e)},yv=function(e){var t=vv(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},bv=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xv=function(e,t){var n=t&&vv(e)[l_]!==`matrix(1, 0, 0, 1, 0, 0)`&&$.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Sv=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Cv=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},wv=function(e){return function(t){return $.utils.snap(Cv(e),t)}},Tv=function(e){var t=$.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Ev=function(e){return function(t,n){return Tv(Cv(e))(t,n.direction)}},Dv=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},Ov=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},kv=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Av=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},jv={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Mv={toggleActions:`play`,anticipatePin:0},Nv={top:0,left:0,center:.5,bottom:1,right:1},Pv=function(e,t){if(X_(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Nv?Nv[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Fv=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=Qg.createElement(`div`),m=U_(n)||jg(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?e_:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Bg?av:ov)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Iv(p,0,r,_),p},Iv=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+hv]=1,i[`border`+o+hv]=0,i[n.p]=t+`px`,$.set(e,i)},Lv=[],Rv={},zv,Bv=function(){return A_()-M_>34&&(zv||=requestAnimationFrame(cy))},Vv=function(){(!__||!__.isPressed||__.startX>e_.clientWidth)&&(Eg.cache++,__?zv||=requestAnimationFrame(cy):cy(),M_||qv(`scrollStart`),M_=A_())},Hv=function(){b_=Zg.innerWidth,y_=Zg.innerHeight},Uv=function(e){Eg.cache++,(e===!0||!s_&&!g_&&!Qg.fullscreenElement&&!Qg.webkitFullscreenElement&&(!v_||b_!==Zg.innerWidth||Math.abs(Zg.innerHeight-y_)>Zg.innerHeight*.25))&&n_.restart(!0)},Wv={},Gv=[],Kv=function e(){return kv(wy,`scrollEnd`,e)||iy(!0)},qv=function(e){return Wv[e]&&Wv[e].map(function(e){return e()})||Gv},Jv=[],Yv=function(e){for(var t=0;t<Jv.length;t+=5)(!e||Jv[t+4]&&Jv[t+4].query===e)&&(Jv[t].style.cssText=Jv[t+1],Jv[t].getBBox&&Jv[t].setAttribute(`transform`,Jv[t+2]||``),Jv[t+3].uncache=1)},Xv=function(e,t){var n;for(u_=0;u_<Lv.length;u_++)n=Lv[u_],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));E_=!0,t&&Yv(t),t||qv(`revert`)},Zv=function(e,t){Eg.cache++,(t||!Qv)&&Eg.forEach(function(e){return Z_(e)&&e.cacheID++&&(e.rec=0)}),X_(e)&&(Zg.history.scrollRestoration=C_=e)},Qv,$v=0,ey,ty=function(){if(ey!==$v){var e=ey=$v;requestAnimationFrame(function(){return e===$v&&iy(!0)})}},ny=function(){e_.appendChild(w_),T_=!__&&w_.offsetHeight||Zg.innerHeight,e_.removeChild(w_)},ry=function(e){return r_(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},iy=function(e,t){if($g=Qg.documentElement,e_=Qg.body,t_=[Zg,Qg,$g,e_],M_&&!e&&!E_)Ov(wy,`scrollEnd`,Kv);else{ny(),Qv=wy.isRefreshing=!0,Eg.forEach(function(e){return Z_(e)&&++e.cacheID&&(e.rec=e())});var n=qv(`refreshInit`);m_&&wy.sort(),t||Xv(),Eg.forEach(function(e){Z_(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Lv.slice(0).forEach(function(e){return e.refresh()}),E_=!1,Lv.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),D_=1,ry(!0),Lv.forEach(function(e){var t=J_(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),ry(!1),D_=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Eg.forEach(function(e){Z_(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),Zv(C_,1),n_.pause(),$v++,Qv=2,cy(2),Lv.forEach(function(e){return Z_(e.vars.onRefresh)&&e.vars.onRefresh(e)}),Qv=wy.isRefreshing=!1,qv(`refresh`)}},ay=0,oy=1,sy,cy=function(e){if(e===2||!Qv&&!E_){wy.isUpdating=!0,sy&&sy.update(0);var t=Lv.length,n=A_(),r=n-j_>=50,i=t&&Lv[0].scroll();if(oy=ay>i?-1:1,Qv||(ay=i),r&&(M_&&!c_&&n-M_>200&&(M_=0,qv(`scrollEnd`)),a_=j_,j_=n),oy<0){for(u_=t;u_-->0;)Lv[u_]&&Lv[u_].update(0,r);oy=1}else for(u_=0;u_<t;u_++)Lv[u_]&&Lv[u_].update(0,r);wy.isUpdating=!1}zv=0},ly=[rv,iv,ov,av,mv+fv,mv+lv,mv+dv,mv+uv,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],uy=ly.concat([sv,cv,`boxSizing`,`max`+hv,`max`+gv,`position`,mv,pv,pv+dv,pv+lv,pv+fv,pv+uv]),dy=function(e,t,n){my(n);var r=e._gsap;if(r.spacerIsNative)my(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},fy=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=ly.length,a=t.style,o=e.style,s;i--;)s=ly[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[ov]=o[av]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[sv]=Sv(e,zg)+_v,a[cv]=Sv(e,Bg)+_v,a[pv]=o[mv]=o[iv]=o[rv]=`0`,my(r),o[sv]=o[`max`+hv]=n[sv],o[cv]=o[`max`+gv]=n[cv],o[pv]=n[pv],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},py=/([A-Z])/g,my=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||$.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(py,`-$1`).toLowerCase())}},hy=function(e){for(var t=uy.length,n=e.style,r=[],i=0;i<t;i++)r.push(uy[i],n[uy[i]]);return r.t=e,r},gy=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},_y={left:0,top:0},vy=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){Z_(e)&&(e=e(s)),X_(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Pv(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),Q_(e))f&&(e=$.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Iv(o,n,r,!0);else{Z_(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Vg(t,s)||e_,y=xv(_)||{},(!y||!y.left&&!y.top)&&vv(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=xv(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Pv(v[0],y[r.d]),x=Pv(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Iv(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Iv(a,C,r,w&&C>20||!w&&(u?Math.max(e_[h],$g[h]):a.parentNode[h])<=C+1),u&&(c=xv(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+_v))}return f&&_&&(h=xv(_),f.seek(d),g=xv(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},yy=/(webkit|moz|length|cssText|inset)/i,by=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===e_){for(a in e._stOrig=i.cssText,o=vv(e),o)!+a&&!yy.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;$.core.getCache(e).uncache=1,t.appendChild(e)}},xy=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Sy=function(e,t,n){var r={};r[t.p]=`+=`+n,$.set(e,r)},Cy=function(e,t){var n=Ug(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=xy(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Eg.cache++,t.tween&&cy()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=$.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Ov(e,`wheel`,n.wheelHandler),wy.isTouch&&Ov(e,`touchmove`,n.wheelHandler),i},wy=function(){function e(t,n){Xg||e.register($)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),S_(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!N_)this.update=this.refresh=this.kill=z_;else{t=bv(X_(t)||Q_(t)||t.nodeType?{trigger:t}:t,Mv);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?zg:Bg,T=!l&&l!==0,E=Vg(t.scroller||Zg),D=$.core.getCache(E),O=U_(E),k=(`pinType`in t?t.pinType:jg(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Mv.markers,N=O?0:parseFloat(vv(E)[`border`+w.p2+hv])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},I=K_(E,O,w),L=q_(E,O),ee=0,R=0,te=0,z=Ug(E,w),B,V,H,ne,re,U,ie,ae,W,oe,se,ce,le,ue,de,fe,G,pe,K,me,q,he,J,Y,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):z,ne=z(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(m_=1,t.refreshPriority===-9999&&(sy=P)),D.tweenScroll=D.tweenScroll||{top:Cy(E,Bg),left:Cy(E,zg)},P.tweenTo=B=D.tweenScroll[w.p],P.scrubDuration=function(e){we=Q_(e)&&e,we?Ce?Ce.duration(e):Ce=$.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:we,paused:!0,onComplete:function(){return h&&h(P)}}):(Ce&&Ce.progress(1).kill(),Ce=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),xe=0,o||=n.vars.id),v&&((!$_(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in e_.style&&$.set(O?[e_,$g]:E,{scrollBehavior:`auto`}),Eg.forEach(function(e){return Z_(e)&&e.target===(O?Qg.scrollingElement||$g:E)&&(e.smooth=!1)}),H=Z_(v.snapTo)?v.snapTo:v.snapTo===`labels`?wv(n):v.snapTo===`labelsDirectional`?Ev(n):v.directional===!1?$.utils.snap(v.snapTo):function(e,t){return Tv(v.snapTo)(e,A_()-R<500?0:t.direction)},Te=v.duration||{min:.1,max:2},Te=$_(Te)?i_(Te.min,Te.max):i_(Te,Te),Ee=$.delayedCall(v.delay||we/2||.1,function(){var e=z(),t=A_()-R<500,r=B.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!c_&&ee!==e){var i=(e-U)/ue,a=n&&!T?n.totalProgress():i,o=t?0:(a-Se)/(A_()-a_)*1e3||0,s=$.utils.clamp(-i,1-i,nv(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=H(c,P),Q_(l)||(l=c),u=Math.max(0,Math.round(U+l*ue)),e<=ie&&e>=U&&u!==e){if(r&&!r._initted&&r.data<=nv(u-e))return;v.inertia===!1&&(s=l-i),B(u,{duration:Te(nv(Math.max(nv(c-a),nv(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:nv(u-e),onInterrupt:function(){return Ee.restart(!0)&&p&&p(P)},onComplete:function(){P.update(),ee=z(),n&&!T&&(Ce?Ce.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),xe=Se=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&m(P)}},e,s*ue,u-e-s*ue),f&&f(P,B.tween)}}else P.isActive&&ee!==e&&Ee.restart(!0)}).pause()),o&&(Rv[o]=P),u=P.trigger=Vg(u||d!==!0&&d),Ae=u&&u._gsap&&u._gsap.stRevert,Ae&&=Ae(P),d=d===!0?u:Vg(d),X_(a)&&(a={targets:u,className:a}),d&&(f===!1||f===mv||(f=!f&&d.parentNode&&d.parentNode.style&&vv(d.parentNode).display===`flex`?!1:pv),P.pin=d,V=$.core.getCache(d),V.spacer?de=V.pinState:(b&&(b=Vg(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),V.spacerIsNative=!!b,b&&(V.spacerState=hy(b))),V.spacer=pe=b||Qg.createElement(`div`),pe.classList.add(`pin-spacer`),o&&pe.classList.add(`pin-spacer-`+o),V.pinState=de=hy(d)),t.force3D!==!1&&$.set(d,{force3D:!0}),P.spacer=pe=V.spacer,be=vv(d),Y=be[f+w.os2],me=$.getProperty(d),q=$.quickSetter(d,w.a,_v),fy(d,pe,be),G=hy(d)),M){ce=$_(M)?bv(M,jv):jv,oe=Fv(`scroller-start`,o,E,w,ce,0),se=Fv(`scroller-end`,o,E,w,ce,0,oe),K=oe[`offset`+w.op.d2];var je=Vg(jg(E,`content`)||E);ae=this.markerStart=Fv(`start`,o,je,w,ce,K,0,x),W=this.markerEnd=Fv(`end`,o,je,w,ce,K,0,x),x&&(ke=$.quickSetter([ae,W],w.a,_v)),!k&&!(Dg.length&&jg(E,`fixedMarkers`)===!0)&&(yv(O?e_:E),$.set([oe,se],{force3D:!0}),_e=$.quickSetter(oe,w.a,_v),ye=$.quickSetter(se,w.a,_v))}if(x){var Me=x.vars.onUpdate,Ne=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Me&&Me.apply(x,Ne||[])})}if(P.previous=function(){return Lv[Lv.indexOf(P)-1]},P.next=function(){return Lv[Lv.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=s_;r!==P.isReverted&&(r&&(De=Math.max(z(),P.scroll.rec||0),te=P.progress,Oe=n&&n.progress()),ae&&[ae,W,oe,se].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(s_=P,P.update(r)),d&&(!y||!P.isActive)&&(r?dy(d,pe,de):fy(d,pe,vv(d),ge)),r||P.update(r),s_=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!s_&&P.enabled||i){if(d&&r&&M_)Ov(e,`scrollEnd`,Kv);else{!Qv&&F&&F(P),s_=P,B.tween&&!a&&(B.tween.kill(),B.tween=0),Ce&&Ce.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=I(),l=L(),m=x?x.duration():J_(E,w),h=ue<=.01||!ue,g=0,_=o||0,v=$_(a)?a.end:t.end,b=t.endTrigger||u,S=$_(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&Vg(t.pinnedContainer,P),D=u&&Math.max(0,Lv.indexOf(P))||0,A=D,j,V,H,ce,K,q,Y,_e,ye,be,xe,Se,we;for(M&&$_(a)&&(Se=$.getProperty(oe,w.p),we=$.getProperty(se,w.p));A-->0;)q=Lv[A],q.end||q.refresh(0,1)||(s_=P),Y=q.pin,Y&&(Y===u||Y===d||Y===C)&&!q.isReverted&&(be||=[],be.unshift(q),q.revert(!0,!0)),q!==Lv[A]&&(D--,A--);for(Z_(S)&&(S=S(P)),S=P_(S,`start`,P),U=vy(S,u,s,w,z(),ae,oe,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),Z_(v)&&(v=v(P)),X_(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(X_(S)?S.split(` `)[0]:``)+v:(g=Pv(v.substr(2),s),v=X_(S)?S:(x?$.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,U):U)+g,b=u)),v=P_(v,`end`,P),ie=Math.max(U,vy(v||(b?`100% 0`:m),b,s,w,z()+g,W,se,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)q=Lv[A],Y=q.pin,Y&&q.start-q._pinPush<=U&&!x&&q.end>0&&(j=q.end-(P._startClamp?Math.max(0,q.start):q.start),(Y===u&&q.start-q._pinPush<U||Y===C)&&isNaN(S)&&(g+=j*(1-q.progress)),Y===d&&(_+=j));if(U+=g,ie+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!Qv&&(P._endClamp=ie||-.001,ie=Math.min(ie,J_(E,w))),ue=ie-U||(U-=.01)&&.001,h&&(te=$.utils.clamp(0,1,$.utils.normalize(U,ie,De))),P._pinPush=_,ae&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+z()),$.set([ae,W],j)),d&&!(D_&&P.end>=J_(E,w)))j=vv(d),ce=w===Bg,H=z(),he=parseFloat(me(w.a))+_,!m&&ie>1&&(xe=(O?Qg.scrollingElement||$g:E).style,xe={style:xe,value:xe[`overflow`+w.a.toUpperCase()]},O&&vv(e_)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(xe.style[`overflow`+w.a.toUpperCase()]=`scroll`)),fy(d,pe,j),G=hy(d),V=xv(d,!0),_e=k&&Ug(E,ce?zg:Bg)(),f?(ge=[f+w.os2,ue+_+_v],ge.t=pe,A=f===pv?Sv(d,w)+ue+_:0,A&&(ge.push(w.d,A+_v),pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+_v)),my(ge),C&&Lv.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&z(De)):(A=Sv(d,w),A&&pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+_v)),k&&(K={top:V.top+(ce?H-U:_e)+_v,left:V.left+(ce?_e:H-U)+_v,boxSizing:`border-box`,position:`fixed`},K[sv]=K[`max`+hv]=Math.ceil(V.width)+_v,K[cv]=K[`max`+gv]=Math.ceil(V.height)+_v,K[mv]=K[mv+dv]=K[mv+lv]=K[mv+fv]=K[mv+uv]=`0`,K[pv]=j[pv],K[pv+dv]=j[pv+dv],K[pv+lv]=j[pv+lv],K[pv+fv]=j[pv+fv],K[pv+uv]=j[pv+uv],fe=gy(de,K,y),Qv&&z(0)),n?(ye=n._initted,h_(1),n.render(n.duration(),!0,!0),J=me(w.a)-he+ue+_,ve=Math.abs(ue-J)>1,k&&ve&&fe.splice(fe.length-2,2),n.render(0,!0,!0),ye||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),h_(0)):J=ue,xe&&(xe.value?xe.style[`overflow`+w.a.toUpperCase()]=xe.value:xe.style.removeProperty(`overflow-`+w.a));else if(u&&z()&&!x)for(V=u.parentNode;V&&V!==e_;)V._pinOffset&&(U-=V._pinOffset,ie-=V._pinOffset),V=V.parentNode;be&&be.forEach(function(e){return e.revert(!1,!0)}),P.start=U,P.end=ie,ne=re=Qv?De:z(),!x&&!Qv&&(ne<De&&z(De),P.scroll.rec=0),P.revert(!1,!0),R=A_(),Ee&&(ee=-1,Ee.restart(!0)),s_=0,n&&T&&(n._initted||Oe)&&n.progress()!==Oe&&n.progress(Oe||0,!0).render(n.time(),!0,!0),(h||te!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||te||n.vars.immediateRender!==!1)&&n.totalProgress(x&&U<-.001&&!te?$.utils.normalize(U,ie,0):te,!0),P.progress=h||(ne-U)/ue===te?0:te),d&&f&&(pe._pinOffset=Math.round(P.progress*J)),Ce&&Ce.invalidate(),isNaN(Se)||(Se-=$.getProperty(oe,w.p),we-=$.getProperty(se,w.p),Sy(oe,w,Se),Sy(ae,w,Se-(o||0)),Sy(se,w,we),Sy(W,w,we-(o||0))),h&&!Qv&&P.update(),c&&!Qv&&!le&&(le=!0,c(P),le=!1)}}},P.getVelocity=function(){return(z()-re)/(A_()-a_)*1e3||0},P.endAnimation=function(){ev(P.callbackAnimation),n&&(Ce?Ce.progress(1):n.paused()?T||ev(n,P.direction<0,1):ev(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(U||P.refresh()||U)+n.labels[e]/n.duration()*ue||0},P.getTrailing=function(e){var t=Lv.indexOf(P),n=P.direction>0?Lv.slice(0,t).reverse():Lv.slice(t+1);return(X_(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=U:e.start>=ie})},P.update=function(e,t,r){if(!x||r||e){var o=Qv===!0?De:P.scroll(),c=e?0:(o-U)/ue,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(re=ne,ne=x?z():o,v&&(Se=xe,xe=n&&!T?n.totalProgress():u)),m&&d&&!s_&&!k_&&M_&&(!u&&U<o+(o-re)/(A_()-a_)*m?u=1e-4:u===1&&ie>o+(o-re)/(A_()-a_)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!s_&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(Z_(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(Ce&&!s_&&!k_?(Ce._dp._time-Ce._start!==Ce._time&&Ce.render(Ce._dp._time-Ce._start),Ce.resetTo?Ce.resetTo(`totalProgress`,u,n._tTime/n._tDur):(Ce.vars.totalProgress=u,Ce.invalidate().restart())):n&&n.totalProgress(u,!!(s_&&(R||e)))),d){if(e&&f&&(pe.style[f+w.os2]=Y),!k)q(B_(he+J*u));else if(O){if(N=!e&&u>p&&ie+1>o&&o+1>=J_(E,w),y){if(!e&&(h||N)){var I=xv(d,!0),L=o-U;by(d,e_,I.top+(w===Bg?L:0)+_v,I.left+(w===Bg?0:L)+_v)}else by(d,pe)}my(h||N?fe:G),ve&&u<1&&h||q(he+(u===1&&!N?J:0))}}v&&!B.tween&&!s_&&!k_&&Ee.restart(!0),a&&(M||_&&u&&(u<1||!O_))&&r_(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!s_?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!O_)&&(s&&M&&tv(P,s),A[b]&&tv(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&tv(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(Q_(S)?S:2500)&&(ev(P.callbackAnimation),Ce?Ce.progress(1):ev(n,D===`reverse`?1:!u,1))):T&&i&&!s_&&i(P)}if(ye){var ee=x?o/x.duration()*(x._caScrollDist||0):o;_e(ee+ +!!oe._isFlipped),ye(ee)}ke&&ke(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,Ov(E,`resize`,Uv),O||Ov(E,`scroll`,Vv),F&&Ov(e,`refreshInit`,F),t!==!1&&(P.progress=te=0,ne=re=ee=z()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&B?B.tween:Ce},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:F_(e,n&&!!P._startClamp),end:F_(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ge&&e){var t=ge.indexOf(w.d)+1;ge[t]=parseFloat(ge[t])+e+_v,ge[1]=parseFloat(ge[1])+e+_v,my(ge)}},P.disable=function(t,n){if(P.enabled&&(t!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,n||Ce&&Ce.pause(),De=0,V&&(V.uncache=1),F&&kv(e,`refreshInit`,F),Ee&&(Ee.pause(),B.tween&&B.tween.kill()&&(B.tween=0)),!O)){for(var r=Lv.length;r--;)if(Lv[r].scroller===E&&Lv[r]!==P)return;kv(E,`resize`,Uv),O||kv(E,`scroll`,Vv)}},P.kill=function(e,r){P.disable(e,r),Ce&&!r&&Ce.kill(),o&&delete Rv[o];var i=Lv.indexOf(P);i>=0&&Lv.splice(i,1),i===u_&&oy>0&&u_--,i=0,Lv.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||Qv||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),ae&&[ae,W,oe,se].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),sy===P&&(sy=0),d&&(V&&(V.uncache=1),i=0,Lv.forEach(function(e){return e.pin===d&&i++}),i||(V.spacer=0)),t.onKill&&t.onKill(P)},Lv.push(P),P.enable(!1,!1),Ae&&Ae(P),n&&n.add&&!ue){var Pe=P.update;P.update=function(){P.update=Pe,Eg.cache++,U||ie||P.refresh()},$.delayedCall(.01,P.update),ue=.01,U=ie=0}else P.refresh();d&&ty()}},e.register=function(t){return Xg||=($=t||H_(),V_()&&window.document&&e.enable(),N_),Xg},e.defaults=function(e){if(e)for(var t in e)Mv[t]=e[t];return Mv},e.disable=function(e,t){N_=0,Lv.forEach(function(n){return n[t?`kill`:`disable`](e)}),kv(Zg,`wheel`,Vv),kv(Qg,`scroll`,Vv),clearInterval(o_),kv(Qg,`touchcancel`,z_),kv(e_,`touchstart`,z_),Dv(kv,Qg,`pointerdown,touchstart,mousedown`,L_),Dv(kv,Qg,`pointerup,touchend,mouseup`,R_),n_.kill(),Y_(kv);for(var n=0;n<Eg.length;n+=3)Av(kv,Eg[n],Eg[n+1]),Av(kv,Eg[n],Eg[n+2])},e.enable=function(){if(Zg=window,Qg=document,$g=Qg.documentElement,e_=Qg.body,$&&(r_=$.utils.toArray,i_=$.utils.clamp,S_=$.core.context||z_,h_=$.core.suppressOverwrites||z_,C_=Zg.history.scrollRestoration||`auto`,ay=Zg.pageYOffset||0,$.core.globals(`ScrollTrigger`,e),e_)){N_=1,w_=document.createElement(`div`),w_.style.height=`100vh`,w_.style.position=`absolute`,ny(),I_(),Yg.register($),e.isTouch=Yg.isTouch,x_=Yg.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),v_=Yg.isTouch===1,Ov(Zg,`wheel`,Vv),t_=[Zg,Qg,$g,e_],$.matchMedia?(e.matchMedia=function(e){var t=$.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},$.addEventListener(`matchMediaInit`,function(){return Xv()}),$.addEventListener(`matchMediaRevert`,function(){return Yv()}),$.addEventListener(`matchMedia`,function(){iy(0,1),qv(`matchMedia`)}),$.matchMedia().add(`(orientation: portrait)`,function(){return Hv(),Hv})):console.warn(`Requires GSAP 3.11.0 or later`),Hv(),Ov(Qg,`scroll`,Vv);var t=e_.hasAttribute(`style`),n=e_.style,r=n.borderTopStyle,i=$.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=xv(e_),Bg.m=Math.round(a.top+Bg.sc())||0,zg.m=Math.round(a.left+zg.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(e_.setAttribute(`style`,``),e_.removeAttribute(`style`)),o_=setInterval(Bv,250),$.delayedCall(.5,function(){return k_=0}),Ov(Qg,`touchcancel`,z_),Ov(e_,`touchstart`,z_),Dv(Ov,Qg,`pointerdown,touchstart,mousedown`,L_),Dv(Ov,Qg,`pointerup,touchend,mouseup`,R_),l_=$.utils.checkPrefix(`transform`),uy.push(l_),Xg=A_(),n_=$.delayedCall(.2,iy).pause(),p_=[Qg,`visibilitychange`,function(){var e=Zg.innerWidth,t=Zg.innerHeight;Qg.hidden?(d_=e,f_=t):(d_!==e||f_!==t)&&Uv()},Qg,`DOMContentLoaded`,iy,Zg,`load`,iy,Zg,`resize`,Uv],Y_(Ov),Lv.forEach(function(e){return e.enable(0,1)}),o=0;o<Eg.length;o+=3)Av(kv,Eg[o],Eg[o+1]),Av(kv,Eg[o],Eg[o+2])}},e.config=function(t){`limitCallbacks`in t&&(O_=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(o_)||(o_=n)&&setInterval(Bv,n),`ignoreMobileResize`in t&&(v_=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(Y_(kv)||Y_(Ov,t.autoRefreshEvents||`none`),g_=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Vg(e),r=Eg.indexOf(n),i=U_(n);~r&&Eg.splice(r,i?6:2),t&&(i?Dg.unshift(Zg,t,e_,t,$g,t):Dg.unshift(n,t))},e.clearMatchMedia=function(e){Lv.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(X_(e)?Vg(e):e).getBoundingClientRect(),i=r[n?sv:cv]*t||0;return n?r.right-i>0&&r.left+i<Zg.innerWidth:r.bottom-i>0&&r.top+i<Zg.innerHeight},e.positionInViewport=function(e,t,n){X_(e)&&(e=Vg(e));var r=e.getBoundingClientRect(),i=r[n?sv:cv],a=t==null?i/2:t in Nv?Nv[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Zg.innerWidth:(r.top+a)/Zg.innerHeight},e.killAll=function(e){if(Lv.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=Wv.killAll||[];Wv={},t.forEach(function(e){return e()})}},e}();wy.version=`3.13.0`,wy.saveStyles=function(e){return e?r_(e).forEach(function(e){if(e&&e.style){var t=Jv.indexOf(e);t>=0&&Jv.splice(t,5),Jv.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),$.core.getCache(e),S_())}}):Jv},wy.revert=function(e,t){return Xv(!e,t)},wy.create=function(e,t){return new wy(e,t)},wy.refresh=function(e){return e?Uv(!0):(Xg||wy.register())&&iy(!0)},wy.update=function(e){return++Eg.cache&&cy(e===!0?2:0)},wy.clearScrollMemory=Zv,wy.maxScroll=function(e,t){return J_(e,t?zg:Bg)},wy.getScrollFunc=function(e,t){return Ug(Vg(e),t?zg:Bg)},wy.getById=function(e){return Rv[e]},wy.getAll=function(){return Lv.filter(function(e){return e.vars.id!==`ScrollSmoother`})},wy.isScrolling=function(){return!!M_},wy.snapDirectional=Tv,wy.addEventListener=function(e,t){var n=Wv[e]||(Wv[e]=[]);~n.indexOf(t)||n.push(t)},wy.removeEventListener=function(e,t){var n=Wv[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},wy.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=$.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&Z_(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return Z_(a)&&(a=a(),Ov(wy,`refresh`,function(){return a=t.batchMax()})),r_(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(wy.create(t))}),n};var Ty=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ey=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(Yg.isTouch?` pinch-zoom`:``):`none`,t===$g&&e(e_,n)},Dy={auto:1,scroll:1},Oy=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||$.core.getCache(i),o=A_(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==e_&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Dy[(s=vv(i)).overflowY]||Dy[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!U_(i)&&(Dy[(s=vv(i)).overflowY]||Dy[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},ky=function(e,t,n,r){return Yg.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Oy,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Ov(Qg,Yg.eventTypes[0],My,!1,!0)},onDisable:function(){return kv(Qg,Yg.eventTypes[0],My,!0)}})},Ay=/(input|label|select|textarea)/i,jy,My=function(e){var t=Ay.test(e.target.tagName);(t||jy)&&(e._gsapAllow=!0,jy=t)},Ny=function(e){$_(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Vg(e.target)||$g,l=$.core.globals().ScrollSmoother,u=l&&l.get(),d=x_&&(e.content&&Vg(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Ug(c,Bg),p=Ug(c,zg),m=1,h=(Yg.isTouch&&Zg.visualViewport?Zg.visualViewport.scale*Zg.visualViewport.width:Zg.outerWidth)/Zg.innerWidth,g=0,_=Z_(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=ky(c,e.type,!0,i),x=function(){return y=!1},S=z_,C=z_,w=function(){s=J_(c,Bg),C=i_(+!!x_,s),n&&(S=i_(0,J_(c,zg))),v=$v},T=function(){d._gsap.y=B_(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=B_(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=B_((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Eg.cache,cy()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&$.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return x_&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=B_((Zg.visualViewport&&Zg.visualViewport.scale||1)/h),D.pause(),e!==m&&Ey(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=$v},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Eg.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Ty(p,i,o,J_(c,zg)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Ty(f,i,o,J_(c,Bg)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(x_&&D.vars.scrollY>=s||i>=s-1)&&$.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),A_()-g>1e3&&(v=0,g=A_())},e.onChange=function(e,t,r,i,a){if($v!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&cy()},e.onEnable=function(){Ey(c,!n&&`x`),wy.addEventListener(`refresh`,j),Ov(Zg,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Ey(c,!0),kv(Zg,`resize`,j),wy.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yg(e),o.iOS=x_,x_&&!f()&&f(1),x_&&$.ticker.add(z_),A=o._dc,D=$.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:xy(f,f(),function(){return D.pause()})},onUpdate:cy,onComplete:A.vars.onComplete}),o};wy.sort=function(e){if(Z_(e))return Lv.sort(e);var t=Zg.pageYOffset||0;return wy.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Zg.innerHeight}),Lv.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},wy.observe=function(e){return new Yg(e)},wy.normalizeScroll=function(e){if(e===void 0)return __;if(e===!0&&__)return __.enable();if(e===!1)__&&__.kill(),__=e;else{var t=e instanceof Yg?e:Ny(e);return __&&__.target===t.target&&__.kill(),U_(t.target)&&(__=t),t}},wy.core={_getVelocityProp:Wg,_inputObserver:ky,_scrollers:Eg,_proxies:Dg,bridge:{ss:function(){M_||qv(`scrollStart`),M_=A_()},ref:function(){return s_}}},H_()&&$.registerPlugin(wy);var Py={class:`flex justify-center items-center text-center w-full`},Fy=`
    <svg class="inner-link-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.26 17.05" aria-hidden="true">
        <polyline points="3.75 7.82 10.16 1.41 16.55 7.81" style="fill:none;stroke:#FFF;stroke-miterlimit:10;stroke-width:2px" />
        <polyline points="10.16 1.41 10.16 16.05 0 16.05" style="fill:none;stroke:#FFF;stroke-miterlimit:10;stroke-width:2px" />
    </svg>`,Iy=`​`,Ly=Object.assign(j({__name:`Text`,props:{text:{},topBefore:{}},setup(e){let n=e,r=b(),i={smile:`<img src="/smile.png" width="188" height="188" alt="" decoding="async">`,star:`
        <svg width="57" height="25" viewBox="0 0 57 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.5766 0L41.1062 0.677819C40.5252 1.23305 39.9147 1.80271 39.319 2.394C37.7083 3.98039 36.0902 5.56677 34.4942 7.16758C34.227 7.45168 33.9994 7.76933 33.8175 8.1122C33.5928 8.47144 33.512 8.89966 33.5908 9.31394C33.6696 9.72823 33.9024 10.0991 34.2441 10.3548C35.1518 11.1071 36.2637 11.5832 37.4435 11.7248C38.9024 11.9692 40.377 12.1138 41.8564 12.1575C46.7179 12.2152 51.5721 12.1575 56.4337 12.1575H57V12.8786H56.4043C51.3147 12.8786 46.2252 12.7848 41.1503 12.9146C35.8644 13.0038 30.6636 14.2348 25.9185 16.52C24.402 17.3026 23.0317 18.3315 21.8659 19.563C20.1449 21.3153 18.3724 23.017 16.6219 24.7476L16.3645 24.9856L16.0115 24.4087L15.8865 24.4592C15.9968 24.3438 16.0997 24.2284 16.2174 24.1203C18.1959 22.1733 20.1817 20.2408 22.1381 18.2795C22.5666 17.8516 22.9307 17.366 23.2192 16.8373C23.4192 16.5071 23.492 16.1177 23.4246 15.7395C23.3571 15.3612 23.1538 15.0191 22.8515 14.775C22.1233 14.1396 21.2427 13.6955 20.292 13.4843C18.834 13.0846 17.3268 12.8832 15.8129 12.8858C10.7381 12.8858 5.67058 12.8858 0.603097 12.8858H0V12.1647H0.581032C5.66323 12.1647 10.7528 12.2656 15.835 12.1647C21.3187 12.0984 26.7108 10.7774 31.5817 8.30689C32.6693 7.73747 33.6615 7.00791 34.5236 6.14364C36.4138 4.26161 38.3187 2.394 40.2163 0.519181C40.3462 0.352836 40.4665 0.179506 40.5766 0Z" fill="white"/>
        </svg>
    `,more:`<span>+</span>`,logo:`<img src="/logo.png" width="100" height="100" alt="" decoding="async">`},a=e=>e?e.replace(/(\S-(?=\S)| +)/g,`$1${Iy}`):Iy,s,c=!1,l=Ra();u(()=>{f(),Va(l,()=>{s=X.matchMedia(),s.add({all:`all`,tab:`(min-aspect-ratio: 6/10) and (min-width: 768px)`,desktop:`(min-aspect-ratio: 6/10) and (min-width: 1200px)`},()=>{let e=d(),t,n=Gh.create(r.value.children,{type:`lines`,deepSlice:!1,autoSplit:!0,reduceWhiteSpace:!1,linesClass:`relative whitespace-nowrap`,wordDelimiter:{delimiter:Iy,replaceWith:``},prepareText:a,onSplit:e=>{t?.revert(),t=X.context(()=>(p(e),m(),h()))}});return()=>{t?.revert(),n.revert(),e()}})})}),t(()=>{s?.revert()});function d(){let e=Array.from(r.value.children),t=e.map(e=>e.innerHTML);return e.forEach(e=>{e.querySelectorAll(`br`).forEach(e=>{getComputedStyle(e).display===`none`&&e.replaceWith(` `)})}),()=>e.forEach((e,n)=>e.innerHTML=t[n]??``)}function f(){let e=r.value.querySelectorAll(`span`);for(let t of e){let e=t.classList[0];e&&i[e]&&(t.innerHTML=i[e])}}function p(e){let t=X.utils.toArray(`.top-text,.bottom-text`,r.value),i=[];t.forEach(e=>{e.classList.add(`glitch-text`);let t=e.textContent;n.topBefore&&e.classList.contains(`top-text`)&&(t=n.topBefore+t);let r=X.fromTo(e,{scrambleText:{text:``}},{scrambleText:{text:t,chars:$a,speed:.6},duration:.6,ease:`expo.out`,paused:!0}),a=e.classList.contains(`top-text`)?0:3;i[a]=r});let a=X.timeline({paused:!0});e.lines.forEach((e,t)=>{a.mainTextIn(e,{duration:1.5,ease:`expo.out`},`${.1*t}`).set(e,{clearProps:`clipPath`},`>`),i[t]&&a.add(i[t].play())}),a.addLabel(`end`),c&&a.progress(1),wy.create({trigger:r.value,start:`top bottom`,end:`top bottom-=25%`,onLeaveBack:()=>{c=!1,a.seek(0)},onLeave:()=>{c=!0,a.tweenTo(`end`,{ease:`power1.out`})}})}function m(){if(Qa())return;let e=r.value.querySelector(`.star`),t=r.value.querySelector(`.more>span`);e&&X.to(e,{keyframes:[{scale:1.1,duration:.1},{scale:.9,duration:.1},{scale:1,duration:.1},{scale:.9,duration:.1},{scale:1,duration:.1},{scale:1.1,duration:.1,delay:.2},{scale:.9,duration:.1},{scale:1,duration:.1},{scale:.9,duration:.1},{scale:1,duration:.1},{scale:1.1,duration:.1,delay:.2},{scale:.9,duration:.1},{scale:1,duration:.1}],repeat:-1,transformOrigin:`center`,ease:`none`}),t&&X.to(t,{keyframes:[{rotate:-180,xPercent:50,ease:`expo.inOut`},{rotate:0,xPercent:0,ease:`expo.inOut`}],duration:2,transformOrigin:`center 57%`,repeat:-1,repeatDelay:1})}function h(){if(Ja())return;let e=X.utils.toArray(`a`,r.value);return e.forEach(e=>{let{original:t,clone:n}=Kh(e,{type:`lines, chars`,glitch:!1});e.classList.add(`has-drawn-arrow`),e.insertAdjacentHTML(`beforeend`,Fy);let r=e.lastElementChild,i=X.timeline({paused:!0,defaults:{duration:.8,ease:`none`}}).fromTo(r,{rotate:45},{rotate:0,yPercent:15,duration:.5},0).from(r.lastElementChild,{drawSVG:`0% 62.75%`,duration:.5},`>`).to(Array.from(t.children).slice(0,-1),{yPercent:-100,stagger:.06},0).to(Array.from(n.children).slice(0,-1),{yPercent:-100,stagger:.06},`<`);e.addEventListener(`mouseenter`,()=>{i.tweenTo(i.duration(),{ease:`power3.out`,duration:1})}),e.addEventListener(`mouseleave`,()=>{i.tweenTo(0,{ease:`power3.out`,duration:1})})}),()=>e.forEach(e=>{e.classList.remove(`has-drawn-arrow`),e.querySelector(`.inner-link-arrow`)?.remove()})}return(t,n)=>{let i=je;return o(),x(`div`,Py,[w(`div`,{ref_key:`textEl`,ref:r,class:`relative text-l w-full [&>p:not(:last-child)]:mb-[1em] [&_span]:inline-block has-inner-picto has-inner-link`},[g(i,{field:e.text},null,8,[`field`])],512)])}}}),{__name:`CommonText`}),Ry={class:`relative flex flex-col justify-center items-center text-top-section pt-[25svh] pb-[15.55svh] px-(--grid-margin) custom-tab:min-h-svh custom-tab:py-[unset]`},zy={class:`w-full custom-desktop:w-8/12`},By=Object.assign(j({__name:`About`,props:{text:{}},setup(e){return(t,n)=>{let r=Ly;return o(),x(`section`,Ry,[n[0]||=w(`h2`,{class:`sr-only`},`About Adrien Quéchon`,-1),w(`div`,zy,[g(r,{text:e.text,"top-before":`./`},null,8,[`text`])])])}}}),{__name:`About`}),Vy={class:`relative text-xxs`},Hy={class:`absolute z-10 pointer-events-none -translate-x-[1.33em] right-[2em] -bottom-[255%] custom-tab:right-full`},Uy={class:`w-[20em]`},Wy={class:`opacity-0 pt-[0.4em] pb-[1.25em]`},Gy=[`src`,`alt`],Ky=[`tabindex`],qy=[`aria-expanded`],Jy=Object.assign(j({__name:`GifEasterEgg`,props:{items:{}},setup(e){let t=e,n=b(),r=b(),a=b(),s=b(0),c=!1,l=v(()=>t.items[s.value]),d,f,p,m=b(!1),h=b(!1),S=b(``),T=()=>c?(s.value+1)%t.items.length:s.value,E=()=>{h.value=!0;let e=t.items[T()]?.media.url;e&&(new Image().src=e)},D=Ra(),O=Za();u(()=>{D.add(()=>{k(),F()})});function k(){d=X.timeline({paused:!0,defaults:{ease:`none`,duration:.85}}).addLabel(`false`).from(n.value,{scale:0}).from(n.value.children[0],{opacity:0,duration:.25},`<+=0.6`).addLabel(`true`)}function j(){let e=a.value.children[0].textContent;f?.kill(),f=X.timeline({paused:!0,defaults:{ease:`none`,duration:1}}).addLabel(`false`).fromTo(S.value,{scrambleText:{text:``}},{scrambleText:{text:e,chars:$a,speed:.2},duration:.8},`<+=0.4`).addLabel(`true`)}async function M(e){let t=e??!m.value;t!==m.value&&(t&&(E(),s.value=T(),c=!0,await i(),D.add(j),N(),l.value?.isbig&&P()),m.value=t,d.tweenTo(`${t}`,{ease:`expo.out`}),f?.tweenTo(`${t}`,{ease:`expo.out`}))}function N(){let e=n.value.parentElement.getBoundingClientRect(),t=r.value.getBoundingClientRect(),i=t.left-e.left,a=t.top+t.height/2-e.top;X.set(n.value,{transformOrigin:`${i}px ${a}px`})}function P(){let e=n.value.parentElement.getBoundingClientRect();X.delayedCall(.25,()=>{O(e.left+e.width/2,e.top+e.height/2)})}function F(){let e=X.utils.toArray(`path`,r.value);p=X.timeline({paused:!0,repeat:-1,defaults:{duration:1,ease:`none`}}).to(r.value,{backgroundColor:`white`,color:`black`}).to(e,{fill:`black`},`<`).addLabel(`end`)}function I(e){X.fromTo(e.target,{opacity:0},{opacity:1,duration:.4})}function L(e,t=`end`){Ja()||e.tweenTo(t,{ease:`expo.out`})}return(e,t)=>{let i=je;return o(),x(`div`,Vy,[w(`div`,Hy,[w(`div`,{ref_key:`imgCtn`,ref:n,class:`relative pointer-events-auto p-[0.83em] border-1 backdrop-blur-[10px]`},[w(`div`,Uy,[w(`div`,{ref_key:`textEl`,ref:a,class:`font-secondary text-xs relative`},[w(`div`,Wy,[g(i,{field:_(l)?.text},null,8,[`field`])]),w(`div`,{class:`absolute left-[0] top-[0] w-full h-full pt-[0.4em] pb-[1.25em]`,ref_key:`textTarget`,ref:S},null,512)],512)]),w(`div`,{class:A([`w-[20em] aspect-240/180`,{"custom-tab:w-[40em]":_(l)?.isbig}])},[_(h)&&_(l)?.media.url?(o(),x(`img`,{key:_(s),src:_(l).media.url,alt:_(l).media.alt??``,class:`object-cover w-full h-full`,decoding:`async`,onLoad:I},null,40,Gy)):y(``,!0)],2),w(`button`,{type:`button`,"aria-label":`Close`,tabindex:_(m)?0:-1,class:`clickable cursor-pointer border-l border-b absolute right-[0] top-[0] w-[1.33em] aspect-square flex items-center justify-center`,onClick:t[0]||=()=>M(!1)},[...t[4]||=[w(`svg`,{class:`pointer-events-none w-[62.5%]`,width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`line`,{x1:`7.42439`,y1:`2.47465`,x2:`2.47465`,y2:`7.42439`,stroke:`white`}),w(`line`,{x1:`2.47518`,y1:`2.47457`,x2:`7.42492`,y2:`7.42432`,stroke:`white`})],-1)]],8,Ky)],512)]),w(`button`,{ref_key:`pictoCtn`,ref:r,type:`button`,"aria-expanded":_(m),class:`min-w-max cursor-pointer clickable flex items-center text-left border border-white pt-[1.21em] pb-[1.35em] px-[1.14em]`,onClick:t[1]||=()=>M(),onMouseenter:t[2]||=()=>{E(),L(_(p),`end`)},onFocus:E,onMouseleave:t[3]||=()=>L(_(p),0)},[...t[5]||=[C(`<span class="block shrink-0 w-[3.98em] pointer-events-none"><svg class="w-full h-auto" width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.0331 10.7839V6.12518C42.0331 6.06662 42.0214 6.00863 41.9987 5.95459C41.9759 5.90055 41.9426 5.85153 41.9006 5.81038C41.8587 5.76923 41.8089 5.73678 41.7542 5.71488C41.6995 5.69298 41.641 5.68208 41.582 5.68282H18.597C18.516 5.68242 18.4366 5.66036 18.3672 5.61898C18.2977 5.5776 18.2408 5.51841 18.2023 5.44763L15.4786 0.508913C15.4389 0.439564 15.3816 0.381823 15.3123 0.341516C15.243 0.30121 15.1642 0.279761 15.0839 0.279332H0.732371C0.673396 0.278591 0.614843 0.289474 0.560142 0.311373C0.50544 0.333271 0.455658 0.365745 0.413692 0.406896C0.371725 0.448047 0.338408 0.497066 0.315668 0.551104C0.292929 0.605141 0.281245 0.663113 0.28125 0.721678V33.7138H9.64214" stroke="white" stroke-miterlimit="10"></path><path d="M42.1636 33.2103L47.7012 11.6131C47.727 11.5131 47.7294 11.4087 47.7083 11.3076C47.6872 11.2066 47.6432 11.1117 47.5796 11.0301C47.5159 10.9486 47.4343 10.8825 47.3411 10.837C47.2478 10.7915 47.1454 10.7678 47.0414 10.7676H6.69371C6.54265 10.7688 6.39618 10.8194 6.27694 10.9115C6.15769 11.0036 6.07229 11.1321 6.03391 11.2771L0.501954 32.8911C0.476036 32.9908 0.473535 33.095 0.494623 33.1958C0.515712 33.2966 0.559833 33.3912 0.623589 33.4724C0.687345 33.5535 0.769042 33.6191 0.862349 33.6639C0.955655 33.7088 1.05809 33.7317 1.16175 33.731H41.5038C41.6567 33.7301 41.8047 33.6783 41.9244 33.5839C42.044 33.4895 42.1283 33.3579 42.1636 33.2103Z" stroke="white" stroke-miterlimit="10"></path></svg></span><span class="block shrink-0 font-secondary w-max min-w-[9.6svw] ml-[1.5em]"><span class="glitch-text">CONFIDENTIAL/2026</span><br><span class="glitch-text">DO_NOT_OPEN</span></span>`,2)]],40,qy)])}}}),{__name:`CommonGifEasterEgg`}),Yy={class:`flex flex-col justify-between items-end px-(--grid-margin) custom-tab:flex-row custom-tab:items-center`},Xy={class:`flex text-s justify-between w-full custom-tab:justify-start`},Zy={class:`font-secondary whitespace-pre-wrap relative w-5/6 mb-[7.26em] custom-tab:w-[42.87svw] custom-desktop:w-[25.86svw] custom-tab:ml-[4.66em] custom-desktop:ml-[5.87em] custom-tab:mb-[unset]`},Qy=Object.assign(j({__name:`Confidential`,props:{block:{},hiddenItems:{}},setup(e){let t=e,n=v(()=>t.hiddenItems.filter(e=>I.image(e.media))),r=v(()=>I.richText(t.block.text_mobile)?t.block.text_mobile:t.block.text),i=b(),a=b(),s=b(),c=b(),l,f,p,m=Ra();u(()=>{Va(m,E)}),d(()=>{l?.kill(),p?.removeEventListener(`change`,T)});function h(){let e=p?.matches?s.value:a.value;return Array.from(e.children).map(e=>e.textContent).join(`
`)}function S(){f=X.to(c.value,{scrambleText:{text:h(),chars:$a,speed:.1},duration:2.2,ease:`expo.out`,paused:!0})}function T(){m.add(()=>{let e=f.progress()>0;l?.kill(),f.kill(),S(),e&&f.progress(1)})}function E(){p=window.matchMedia(`(min-aspect-ratio: 6/10) and (min-width: 768px)`),p.addEventListener(`change`,T),S(),wy.create({trigger:i.value,start:`top bottom`,end:`top bottom-=15%`,onEnter:()=>{l?.kill(),f.play()},onLeaveBack:()=>{l?.kill(),f.pause(0)}})}function O(){f?.pause(),l?.kill(),l=X.timeline().to(c.value,{scrambleText:{text:``,chars:$a,speed:.8},duration:.6,ease:`expo.inOut`}).to(c.value,{keyframes:[{textContent:`_`},{textContent:``},{textContent:`_`},{textContent:``},{textContent:`_`},{textContent:``}],duration:1.2,ease:`none`}).to(c.value,{scrambleText:{text:h(),chars:$a,speed:.1},duration:2,ease:`expo.out`})}return(t,l)=>{let u=je,d=Jy;return o(),x(`section`,Yy,[w(`div`,Xy,[w(`button`,{type:`button`,"aria-label":`Replay confidential text`,class:`self-start w-[2.4em] cursor-pointer custom-tab:w-[3em]`,onClick:O},[...l[0]||=[C(`<svg class="w-full h-auto" width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2117_388)"><path d="M47.27 15.5402V53.0749C47.27 54.2907 46.0869 55.2855 44.6337 55.2855H3.36672C1.9062 55.2855 0.730469 54.3055 0.730469 53.0749V2.91072C0.730469 1.7023 1.9135 0.700195 3.36672 0.700195H32.4749L47.27 15.5402Z" stroke="white" stroke-miterlimit="10"></path><path d="M32.5547 0.737305V14.9731C32.5538 15.0546 32.5689 15.1356 32.5994 15.2111C32.6299 15.2867 32.6751 15.3553 32.7322 15.413C32.7894 15.4706 32.8574 15.5162 32.9323 15.5469C33.0071 15.5777 33.0873 15.593 33.1681 15.592H47.2695" stroke="white" stroke-miterlimit="10"></path><path d="M15.367 24.6V31.8H19.447V33H14.167V24.6H15.367ZM24.4823 31.788C25.0103 31.788 25.4423 31.356 25.4423 30.828V26.76C25.4423 26.22 25.0223 25.8 24.4823 25.8H23.5223C22.9823 25.8 22.5623 26.232 22.5623 26.76V30.828C22.5623 31.356 22.9943 31.788 23.5223 31.788H24.4823ZM21.3623 30.828V26.76C21.3623 25.56 22.3343 24.6 23.5223 24.6H24.4823C25.6823 24.6 26.6423 25.56 26.6423 26.76V30.828C26.6423 32.016 25.6823 33 24.4823 33H23.5223C22.3343 33 21.3623 32.016 21.3623 30.828ZM30.8377 28.476H33.8377V30.828C33.8377 32.016 32.8777 33 31.6777 33H30.7177C29.5297 33 28.5577 32.016 28.5577 30.828V26.76C28.5577 25.56 29.5297 24.6 30.7177 24.6H31.6777C32.8777 24.6 33.8377 25.56 33.8377 26.76V27.42H32.6377V26.76C32.6377 26.22 32.2177 25.8 31.6777 25.8H30.7177C30.1777 25.8 29.7577 26.232 29.7577 26.76V30.828C29.7577 31.356 30.1897 31.788 30.7177 31.788H31.6777C32.2057 31.788 32.6377 31.356 32.6377 30.828V29.676H30.8377V28.476Z" fill="white"></path></g><defs><clipPath id="clip0_2117_388"><rect width="48" height="56" fill="white"></rect></clipPath></defs></svg>`,1)]]),w(`div`,Zy,[w(`div`,{ref_key:`textEl`,ref:i,class:`opacity-0 max-w-full overflow-hidden`},[w(`div`,{ref_key:`textMobileEl`,ref:a,class:`custom-tab:hidden`},[g(u,{field:_(r)},null,8,[`field`])],512),w(`div`,{ref_key:`textDefaultEl`,ref:s,class:`hidden custom-tab:block`},[g(u,{field:e.block.text},null,8,[`field`])],512)],512),w(`div`,{ref_key:`textElTarget`,ref:c,class:`absolute left-[0] top-[0] w-full glitch-text-inner`},null,512)])]),_(n).length?(o(),D(d,{key:0,items:_(n)},null,8,[`items`])):y(``,!0)])}}}),{__name:`Confidential`}),$y={class:`text-bottom-section relative flex justify-center [&_br]:hidden custom-desktop:[&_br]:block custom-desktop:w-85/120`},eb={class:`text-xs absolute top-full custom-desktop:left-[50.5%]`},tb={class:`self-start mt-[14.75svh] min-w-3/12 font-secondary custom-tab:mt-[17.74svh] custom-tab:self-end`},nb={class:`text-mxs mb-[0.3em] font-[600] glitch-text`},rb={class:`text-xs [&_ul]:flex [&_li]:not-first:before:score-before`},ib={class:`flex items-center text-xxs mt-[12svh] relative custom-tab:mt-[10.43svh]`},ab={class:`w-[3.57em] aspect-square border flex justify-center items-center`},ob={class:`w-86/100 h-auto`,width:`64`,height:`35`,viewBox:`0 0 64 35`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},sb={"clip-path":`url(#clip0_2117_539)`},cb={class:`w-[3.57em] ml-[0.71em] aspect-square border relative flex justify-center items-center overflow-hidden`},lb={class:`w-[3.57em] ml-[0.71em] aspect-square border flex justify-center items-center`},ub=Object.assign(j({__name:`Technos`,props:{block:{},mouse:{}},setup(e){let t=e,n=b(),r=b(),i=b(),a=b(),s=b(),l=b(),f=b(),p=b(),m=b(),h=b(),_=b(),v=b(),y=Ra(),S,C=!1,T=!0,E=()=>{T=!0};c(t.mouse,E),u(()=>{y.add(D),O()}),d(()=>{X.ticker.remove(k),S?.disconnect(),window.removeEventListener(`scroll`,E),window.removeEventListener(`resize`,E)});function D(){if(!Qa()){let e=X.timeline({defaults:{duration:2}}).to(i.value,{scaleX:-1,transformOrigin:`center`,ease:`none`,repeat:-1}).to(s.value,{scaleX:-1,transformOrigin:`center`,ease:`none`,delay:1,repeat:-1},`<`).to(a.value,{scaleY:-1,transformOrigin:`center`,ease:`none`,duration:4,repeat:-1},`<`);Ja()&&(f.value.style.translate=`none`,X.set(f.value,{x:0,y:0,xPercent:-150,yPercent:150}),e.to([l.value,f.value],{yPercent:`-=150`,xPercent:`+=150`,ease:`expo.inOut`,duration:1.5,repeat:-1},`<`).to(r.value,{rotate:360,ease:`expo.inOut`,duration:3,repeat:-1},`<`))}}function O(){l.value&&r.value&&n.value&&!Ja()&&(S=new IntersectionObserver(([e])=>{C=!!e?.isIntersecting,C&&E()}),S.observe(n.value),window.addEventListener(`scroll`,E,{passive:!0}),window.addEventListener(`resize`,E),X.ticker.add(k))}function k(){if(!C||!T)return;T=!1;let e=l.value.getBoundingClientRect(),n=e.left+e.width/2,i=e.top+e.height/2,a=t.mouse.value.x,o=t.mouse.value.y,s=Math.atan2(o-i,a-n)*(180/Math.PI)+45;X.set(l.value,{rotation:s,transformOrigin:`center center`});let c=r.value.clientWidth/6,u=X.utils.interpolate(-c,c,a/window.innerWidth),d=X.utils.interpolate(-c,c,o/window.innerHeight);X.set([p.value,h.value,v.value],{y:d}),X.set([m.value,h.value,_.value],{x:u})}return(t,c)=>{let u=Ly,d=$h,y=je;return o(),x(`section`,{ref_key:`sectionEl`,ref:n,class:`min-h-svh flex flex-col justify-center items-center px-(--grid-margin) pt-[14.19svh] custom-tab:pt-[33.4svh]`},[w(`div`,$y,[g(u,{text:e.block.text},null,8,[`text`]),w(`div`,eb,[g(d,{"is-alt-layout":!0,class:`font-secondary translate-y-[1.57em] custom-tab:translate-y-[1em] custom-desktop:translate-y-[unset]`,link:{url:`mailto:adrienquechon@okeystudio.com`,text:`Let's talk`}})])]),w(`div`,tb,[w(`div`,nb,[g(y,{field:e.block.technos_label},null,8,[`field`])]),w(`div`,rb,[g(y,{field:e.block.technos},null,8,[`field`])])]),w(`div`,ib,[c[14]||=w(`div`,{class:`font-secondary text-right mr-[0.71em] self-start absolute right-full`},[w(`span`,{class:`glitch-text min-w-max block`},`8°10′18.6″ N `),w(`span`,{class:`glitch-text block min-w-max`},`98°45′00.0″ E`)],-1),w(`div`,ab,[(o(),x(`svg`,ob,[w(`g`,sb,[c[0]||=w(`path`,{d:`M32.0006 35C27.3351 34.9939 22.8625 33.1482 19.5635 29.8677C16.2645 26.5871 14.4085 22.1394 14.4023 17.5C14.4085 12.8606 16.2645 8.41292 19.5635 5.13235C22.8625 1.85177 27.3351 0.00607255 32.0006 0C36.6666 0.00455711 41.1401 1.84977 44.4394 5.13066C47.7387 8.41156 49.5943 12.8601 49.5989 17.5C49.5943 22.1399 47.7387 26.5884 44.4394 29.8693C41.1401 33.1502 36.6666 34.9954 32.0006 35ZM32.0006 0.57377C27.4882 0.579843 23.1623 2.36509 19.9715 5.53805C16.7807 8.71102 14.9854 13.0127 14.9793 17.5C14.9854 21.9872 16.7807 26.289 19.9715 29.4619C23.1623 32.6349 27.4882 34.4202 32.0006 34.4262C36.5131 34.4202 40.8389 32.6349 44.0297 29.4619C47.2205 26.289 49.0158 21.9872 49.0219 17.5C49.0173 13.0123 47.2225 8.70969 44.0314 5.53639C40.8403 2.36309 36.5135 0.578327 32.0006 0.57377Z`,fill:`white`},null,-1),w(`path`,{ref_key:`ellypseH`,ref:i,d:`M32.0006 35C27.3351 34.9939 22.8625 33.1482 19.5635 29.8677C16.2645 26.5871 14.4085 22.1394 14.4023 17.5C14.4085 12.8606 16.2645 8.41292 19.5635 5.13235C22.8625 1.85177 27.3351 0.00607255 32.0006 0C36.6666 0.00455711 41.1401 1.84977 44.4394 5.13066C47.7387 8.41156 49.5943 12.8601 49.5989 17.5C49.5943 22.1399 47.7387 26.5884 44.4394 29.8693C41.1401 33.1502 36.6666 34.9954 32.0006 35ZM32.0006 0.57377C27.4882 0.579843 23.1623 2.36509 19.9715 5.53805C16.7807 8.71102 14.9854 13.0127 14.9793 17.5C14.9854 21.9872 16.7807 26.289 19.9715 29.4619C23.1623 32.6349 27.4882 34.4202 32.0006 34.4262C36.5131 34.4202 40.8389 32.6349 44.0297 29.4619C47.2205 26.289 49.0158 21.9872 49.0219 17.5C49.0173 13.0123 47.2225 8.70969 44.0314 5.53639C40.8403 2.36309 36.5135 0.578327 32.0006 0.57377Z`,fill:`white`},null,512),w(`path`,{ref_key:`ellypseH2`,ref:s,d:`M32 35C14.3556 35 0 27.1508 0 17.5C0 7.84918 14.3556 0 32 0C49.6444 0 64.0058 7.84918 64.0058 17.5C64.0058 27.1508 49.6502 35 32 35ZM32 0.57377C14.6902 0.57377 0.576992 8.16475 0.576992 17.5C0.576992 26.8352 14.6729 34.4262 32 34.4262C49.3271 34.4262 63.4288 26.8295 63.4288 17.5C63.4288 8.17049 49.3271 0.57377 32 0.57377Z`,fill:`white`},null,512),w(`path`,{ref_key:`ellypseV`,ref:a,d:`M32 35C14.3556 35 0 27.1508 0 17.5C0 7.84918 14.3556 0 32 0C49.6444 0 64.0058 7.84918 64.0058 17.5C64.0058 27.1508 49.6502 35 32 35ZM32 0.57377C14.6902 0.57377 0.576992 8.16475 0.576992 17.5C0.576992 26.8352 14.6729 34.4262 32 34.4262C49.3271 34.4262 63.4288 26.8295 63.4288 17.5C63.4288 8.17049 49.3271 0.57377 32 0.57377Z`,fill:`white`},null,512),c[1]||=w(`path`,{d:`M32 35C14.3556 35 0 27.1508 0 17.5C0 7.84918 14.3556 0 32 0C49.6444 0 64.0058 7.84918 64.0058 17.5C64.0058 27.1508 49.6502 35 32 35ZM32 0.57377C14.6902 0.57377 0.576992 8.16475 0.576992 17.5C0.576992 26.8352 14.6729 34.4262 32 34.4262C49.3271 34.4262 63.4288 26.8295 63.4288 17.5C63.4288 8.17049 49.3271 0.57377 32 0.57377Z`,fill:`white`},null,-1),c[2]||=w(`path`,{d:`M32 27.6842C14.0555 27.6842 0 23.2088 0 17.4997C0 11.7907 14.0555 7.30957 32 7.30957C49.9445 7.30957 64.0058 11.785 64.0058 17.4997C64.0058 23.2145 49.9445 27.6842 32 27.6842ZM32 7.88334C14.6902 7.88334 0.576992 12.1981 0.576992 17.4997C0.576992 22.8014 14.6729 27.1104 32 27.1104C49.3271 27.1104 63.4288 22.8014 63.4288 17.4997C63.4288 12.1981 49.3271 7.88334 32 7.88334Z`,fill:`white`},null,-1),c[3]||=w(`path`,{d:`M63.7121 17.2129H0.289062V17.7867H63.7121V17.2129Z`,fill:`white`},null,-1),c[4]||=w(`path`,{d:`M32.2879 0.287109H31.7109V34.7133H32.2879V0.287109Z`,fill:`white`},null,-1)]),c[5]||=w(`defs`,null,[w(`clipPath`,{id:`clip0_2117_539`},[w(`rect`,{width:`64`,height:`35`,fill:`white`})])],-1)]))]),w(`div`,cb,[(o(),x(`svg`,{ref_key:`arrowSvg`,ref:l,class:`w-50/100 h-auto`,"data-name":`Calque 1`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12.69 12.69`},[...c[6]||=[w(`polyline`,{points:`0.69 1 11.69 1 11.69 11.97`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1),w(`line`,{x1:`11.69`,y1:`1`,x2:`0.71`,y2:`11.98`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1)]],512)),(o(),x(`svg`,{ref_key:`arrowSvgBis`,ref:f,class:`absolute translate-x-[-150%] translate-y-[150%] w-50/100 h-auto`,"data-name":`Calque 1`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12.69 12.69`},[...c[7]||=[w(`polyline`,{points:`0.69 1 11.69 1 11.69 11.97`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1),w(`line`,{x1:`11.69`,y1:`1`,x2:`0.71`,y2:`11.98`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1)]],512))]),w(`div`,lb,[(o(),x(`svg`,{ref_key:`targetSvg`,ref:r,class:`w-7/10 h-auto`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 32 32`},[c[13]||=w(`path`,{d:`M610.8,417.4a14.75,14.75,0,1,0-14.87-14.75A14.81,14.81,0,0,0,610.8,417.4Z`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`g`,{ref_key:`pictoCircle`,ref:h},[...c[8]||=[w(`path`,{d:`M610.8,404.52a1.89,1.89,0,1,0-1.9-1.88A1.89,1.89,0,0,0,610.8,404.52Z`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1)]],512),w(`g`,{ref_key:`pictoLineH`,ref:p},[c[10]||=w(`path`,{d:`M594.81,402.65h32`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`g`,{ref_key:`pictoStepH`,ref:_},[...c[9]||=[w(`path`,{d:`M600.26,401.33V404`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M605.53,401.33V404`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M616.08,401.33V404`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M621.36,401.33V404`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1)]],512)],512),w(`g`,{ref_key:`pictoLineV`,ref:m},[c[12]||=w(`path`,{d:`M610.8,386.65v32`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`g`,{ref_key:`pictoStepV`,ref:v},[...c[11]||=[w(`path`,{d:`M612.12,392.17h-2.63`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M612.12,397.4h-2.63`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M612.12,407.87h-2.63`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1),w(`path`,{d:`M612.12,413.11h-2.63`,transform:`translate(-594.81 -386.65)`,style:{fill:`none`,stroke:`#fff`,"stroke-miterlimit":`10`,"stroke-width":`0.5px`}},null,-1)]],512)],512)],512))])])],512)}}}),{__name:`Technos`}),db={class:`pt-[14.92svh] custom-tab:pt-[22.22svh]`},fb={class:`flex font-secondary text-s px-(--grid-margin)`},pb={class:`w-4/12 text-xs mb-[1.33em] custom-tab:mb-[1em] custom-tab:w-35/120 custom-desktop:w-4/12`},mb={class:`glitch-text`},hb=[`onMouseenter`,`onMouseleave`],gb={class:`py-[1em] flex items-center border-[#D2D2D2] border-t custom-tab:py-[0.675em]`},_b={class:`text-m custom-tab:text-(length:--text-ml) custom-desktop:text-l custom-tab:w-35/120 custom-desktop:w-4/12`},vb=[`href`],yb={class:`font-secondary text-xxs glitch-text`},bb={class:`hidden w-25/120 custom-tab:block custom-desktop:w-2/12`},xb={class:`hidden w-25/120 custom-tab:block custom-desktop:w-2/12`},Sb={class:`hidden w-25/120 custom-tab:block custom-desktop:w-2/12`},Cb={class:`flex-1 flex justify-end text-xs font-secondary`},wb=[`href`,`onMouseenter`,`onMouseleave`],Tb={class:`flex pointer-events-none`},Eb={class:`w-[0.7em] ml-[0.5em]`},Db=Object.assign(j({__name:`Projects`,props:{projects:{},title:{}},setup(e){let t=b([]),n=b([]),r=b([]),i=b([]),a=b([]),s=b([]),c=[],l=[],d=Ra();u(()=>{Va(d,()=>{p(),m()})});function p(){t.value.forEach(e=>{X.fromTo(e,{clipPath:`inset(0% 0% 100% 0%)`,yPercent:100},{clipPath:`inset(0% 0% 0% 0%)`,yPercent:0,duration:1,ease:`expo.out`,scrollTrigger:{trigger:e,start:`top-=100% bottom`,end:`top-=100% bottom`,toggleActions:`none play none reset`}})})}function m(){n.value.forEach((e,t)=>{let n=h(s.value[t],i.value[t],a.value[t]),o=v(r.value[t],e);c.push(n),l.push(o)})}function h(e,t,n){let{original:r,clone:i}=Kh(n);return X.timeline({paused:!0,defaults:{duration:.5,ease:`none`}}).fromTo(t,{rotate:45},{rotate:0,yPercent:15}).from(e,{drawSVG:`0% 62.75%`}).to(r,{yPercent:-110,stagger:.1,duration:1},0).fromTo(i,{yPercent:10},{yPercent:-100,stagger:.1,duration:1},`<`)}function v(e,t){let{original:n,clone:r}=Kh(e,{type:`lines, chars`,glitch:!1,container:t});return X.timeline({paused:!0,defaults:{duration:.8,ease:`none`}}).to(n.children,{yPercent:-110,stagger:.06},`<`).fromTo(r.children,{yPercent:10},{yPercent:-100,stagger:.06},`<`).addLabel(`end`)}function y(e,t,n={ease:`expo.out`}){e&&!Ja()&&e.tweenTo(t,n)}return(u,d)=>{let p=je;return o(),x(`section`,db,[w(`div`,fb,[w(`div`,pb,[w(`div`,mb,[g(p,{field:e.title},null,8,[`field`])])]),d[0]||=w(`div`,{class:`hidden w-25/120 glitch-text custom-tab:block custom-desktop:w-2/12`},`Awwwards`,-1),d[1]||=w(`div`,{class:`hidden w-25/120 glitch-text custom-tab:block custom-desktop:w-2/12`},`CSS Design Awards`,-1),d[2]||=w(`div`,{class:`hidden w-25/120 glitch-text custom-tab:block custom-desktop:w-2/12`},`FWA`,-1)]),w(`div`,null,[(o(!0),x(E,null,f(e.projects,(e,u)=>(o(),x(`div`,{key:u,ref_for:!0,ref_key:`projectItems`,ref:t,class:A([`px-(--grid-margin) text-m glsl-hover`,`glsl-hover-${u} last:[&>div]:border-b`]),onMouseenter:()=>y(l[u],`end`,{ease:`power3.out`,duration:1}),onMouseleave:()=>y(l[u],0,{ease:`power3.out`,duration:1})},[w(`div`,gb,[w(`div`,_b,[w(`a`,{ref_for:!0,ref_key:`links`,ref:n,style:{"clip-path":`inset(-10% 0% 0% 0%)`},class:`inline-block relative`,href:_(ee)(e.link)??void 0,target:`_blank`},[w(`h3`,{ref_for:!0,ref_key:`titles`,ref:r},O(e.name),513)],8,vb),w(`span`,yb,`./`+O(e.year),1)]),w(`div`,bb,O(e.awwwards_text),1),w(`div`,xb,O(e.cda_text),1),w(`div`,Sb,O(e.fwa_text),1),w(`div`,Cb,[w(`a`,{href:_(ee)(e.link)??void 0,target:`_blank`,onMouseenter:()=>y(c[u],`end`),onMouseleave:()=>y(c[u],0)},[w(`div`,Tb,[w(`div`,{ref_for:!0,ref_key:`ctaTexts`,ref:a,class:`relative overflow-hidden`},O(e.link.text),513),w(`div`,Eb,[(o(),x(`svg`,{ref_for:!0,ref_key:`svgEls`,ref:i,class:`w-full h-auto`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 17.26 17.05`},[d[3]||=w(`polyline`,{points:`3.75 7.82 10.16 1.41 16.55 7.81`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,-1),w(`polyline`,{ref_for:!0,ref_key:`pathsHover`,ref:s,points:`10.16 1.41 10.16 16.05 0 16.05`,style:{fill:`none`,stroke:`#FFF`,"stroke-miterlimit":`10`,"stroke-width":`2px`}},null,512)],512))])])],40,wb)])])],42,hb))),128))])])}}}),{__name:`Projects`}),Ob=(e=new Date)=>`${e.toLocaleString(`fr-FR`,{timeZone:`Europe/Paris`,hour:`2-digit`,minute:`2-digit`})} (${new Intl.DateTimeFormat(`en-US`,{timeZone:`Europe/Paris`,timeZoneName:`shortOffset`}).formatToParts(e).find(e=>e.type===`timeZoneName`)?.value===`GMT+2`?`CEST`:`CET`})`,kb=(e,t)=>{let n=0;return X.timeline({repeat:-1,onRepeat:()=>{++n===10&&(n=0,t())}}).to(e,{visibility:`hidden`,duration:.1,ease:`none`},`<=0.49`).to(e,{visibility:`visible`,duration:.1,ease:`none`},`<=0.49`)},Ab={class:`px-(--grid-margin) pb-(--grid-margin) text-xs footer-section flex flex-col min-h-svh`},jb={class:`flex justify-center items-center flex-1 custom-tab:h-svh`},Mb={class:`relative`},Nb={class:`opacity-[0.7] flex flex-col leading-[1.3] font-secondary absolute -left-[3%] top-[5.25em] custom-tab:top-[unset] custom-tab:-left-[8.4em] custom-tab:-bottom-[1.3em]`},Pb={class:`mr-[1.42em]`},Fb={class:`opacity-[0.7] flex flex-col leading-[1.3] font-secondary absolute -right-[3%] top-[5.25em] custom-tab:top-[unset] custom-tab:-right-[9.5em] custom-tab:-bottom-[1.3em]`},Ib={class:`self-center`},Lb={class:`justify-between items-start font-secondary leading-[1.2] custom-tab:flex custom-tab:flex-wrap`},Rb={class:`flex items-start`},zb={class:`my-[2.14em] custom-tab:my-[unset]`},Bb={class:`mb-[2.14em] custom-tab:mb-[unset]`},Vb={class:`hidden custom-tab:block`},Hb={class:`flex items-center`},Ub={class:`glitch-text`},Wb={class:`flex justify-between items-end custom-tab:mt-[2.14em] custom-desktop:text-right custom-desktop:mt-[unset]`},Gb=1.5,Kb=Object.assign(j({__name:`CustomFooter`,props:{block:{}},emits:[`scrollTo`],setup(e,{emit:t}){let n=t,r=b(),i=b(),a=b(`23:52 (CEST)`),s=b(),c=b([]),l=b([]),f=b(),p=b(),m=b(),h=b(),v=b(),y,C,T=Ra();u(()=>Va(T,E)),d(()=>C?.kill());function E(){D(),a.value=Ob(),kb(s.value,()=>{a.value=Ob()}),N(),new Gh(v.value.children,{type:`lines`,linesClass:`glitch-text`})}function D(){r.value.querySelectorAll(`br`).forEach(e=>{let t=e.previousSibling;for(;t?.nodeType===Node.COMMENT_NODE;)t=t.previousSibling;/\s$/.test(t?.textContent??``)||e.before(` `)}),new Gh(r.value.children,{type:`lines,words`,linesClass:`hero-line-++`}).lines[0]?.classList.add(`text-xs`,`font-secondary`,`mb-[1.42em]`,`glitch-text`),k(),X.set(i.value.children[1],{y:0,yPercent:175}),y=X.timeline({paused:!0}).addLabel(`initial`).to(i.value.children[0],{yPercent:-175,duration:.67,ease:`none`}).to(i.value.children[1],{yPercent:0,duration:.67,ease:`none`},`<`).addLabel(`hover`)}function k(){X.from(l.value,{scrambleText:{text:``,chars:`01 00 11`,speed:.6},scrollTrigger:{trigger:r.value,start:`top bottom`,end:`top center`,toggleActions:`none play none reset`},duration:.6,stagger:.1,ease:`expo.out`}),c.value.forEach((e,t)=>{let n=getComputedStyle(e);if(n.display!==`inline`){let t=parseFloat(n.fontSize);X.set(e,{width:`${e.clientWidth/t}em`,height:`${e.clientHeight/t}em`})}if(Qa())return;let i=e.textContent;X.to(e,{scrambleText:{text:i,chars:`01 0 1`,speed:.3,revealDelay:2},scrollTrigger:{trigger:r.value,start:`top bottom`,end:`top center`,toggleActions:`reset play none reset`},duration:2,stagger:.1,ease:`power1.out`,repeat:-1,paused:!0,delay:.3*t}),e.textContent=``})}function A(){n(`scrollTo`,0)}function j(e){Ja()||y?.tweenTo(e,{ease:`expo.out`})}function M(e){C?.kill(),X.set(m.value,{autoAlpha:1,x:e.clientX,y:e.clientY-40}),C=X.delayedCall(Gb,()=>{X.set(m.value,{autoAlpha:0}),X.set(h.value,{display:`none`})})}function N(){X.utils.toArray(`.copy-link`,f.value).forEach(e=>P(e,!0)),P(p.value)}function P(e,t=!1){e.classList.add(`link-ctn`);let n=e.textContent,{original:r,clone:i}=Kh(e),a=X.timeline({paused:!0,defaults:{duration:.8,ease:`none`}}).to(r,{yPercent:-100},`<`).to(i,{yPercent:-100},`<`);if(t){let t=X.timeline({paused:!0,defaults:{duration:.3,ease:`none`}}).fromTo(e,{"--anim-progress":0},{"--anim-progress":1}).to(e,{"--anim-progress":0});if(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||(e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,`0`),e.setAttribute(`aria-label`,`Copy ${n?.trim()}`),e.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.click())})),e.addEventListener(`click`,async e=>{t.tweenTo(t.duration(),{ease:`expo.out`,duration:1,onComplete:()=>{t.seek(0)}});try{await navigator.clipboard.writeText(n?.trim()??``),X.set(h.value,{display:`block`}),Ja()&&M(e)}catch(e){console.warn(`Copie impossible`,e)}}),Ja())return;e.addEventListener(`mouseenter`,e=>{X.set(m.value,{autoAlpha:1,x:e.clientX,y:e.clientY}),a.tweenTo(a.duration(),{ease:`expo.out`,duration:1})}),e.addEventListener(`mouseleave`,()=>{X.set(m.value,{autoAlpha:0}),X.set(h.value,{display:`none`}),a.tweenTo(0,{ease:`expo.out`,duration:1})}),e.addEventListener(`mousemove`,e=>{X.to(m.value,{x:e.clientX,y:e.clientY,duration:.2})})}else Ja()||(e.addEventListener(`mouseenter`,()=>{a.tweenTo(a.duration(),{ease:`expo.out`,duration:1})}),e.addEventListener(`mouseleave`,()=>{a.tweenTo(0,{ease:`expo.out`,duration:1})}))}return(t,n)=>{let u=je,d=Yh;return o(),x(`footer`,Ab,[w(`div`,jb,[w(`div`,Mb,[w(`div`,{ref_key:`textCtn`,ref:r,class:`text-center text-xl`},[g(u,{field:e.block.text},null,8,[`field`])],512),w(`div`,Nb,[w(`div`,Pb,[w(`span`,{ref:e=>_(l)[0]=e,class:`mr-[2.4em] glitch-text`},`Web`,512),w(`span`,{ref:e=>_(l)[1]=e,class:`glitch-text opacity-0 custom-tab:opacity-100`},`development`,512)]),w(`div`,{ref:e=>_(l)[2]=e,class:`ml-[0.5em] custom-tab:self-end glitch-text hidden custom-tab:block`},`1 Web development`,512),w(`div`,{ref:e=>_(l)[3]=e,class:`ml-[0.5em] custom-tab:self-end glitch-text custom-tab:hidden`},`1 Web`,512),w(`div`,{ref:e=>_(c)[0]=e,class:`custom-tab:ml-[3.2em] mt-[1.9em] glitch-text min-w-max`},`0110 `,512)]),w(`div`,Fb,[w(`div`,{ref:e=>_(c)[1]=e,class:`ml-[0.71em] glitch-text min-w-max`},`111001101 010 111111`,512),w(`div`,{ref:e=>_(l)[4]=e,class:`ml-[2.2em] glitch-text custom-tab:ml-[0.71em]`},`Web development`,512),w(`div`,Ib,[w(`span`,{ref:e=>_(c)[2]=e,class:`mr-[0.5em] glitch-text min-w-max`},`0110`,512),w(`span`,{ref:e=>_(l)[5]=e,class:`glitch-text`},`1`,512)]),w(`div`,{ref:e=>_(l)[6]=e,class:`glitch-text self-end mt-[0.35em] custom-tab:mt-[unset] custom-tab:self-[unset]`},`‹over/› `,512)])])]),w(`div`,Lb,[w(`div`,Rb,[w(`button`,{ref_key:`scrollToCta`,ref:i,type:`button`,"aria-label":`Back to top`,class:`hidden aspect-square border mr-[1em] justify-center items-center relative overflow-hidden cursor-pointer custom-tab:flex custom-tab:w-[3svw]`,onClick:A,onMouseenter:n[0]||=()=>j(`hover`),onMouseleave:n[1]||=()=>j(`initial`)},[...n[4]||=[w(`svg`,{class:`pointer-events-none w-5/10 h-auto -rotate-45`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1),w(`svg`,{class:`pointer-events-none absolute w-5/10 h-auto -rotate-45 translate-y-[175%]`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1)]],544),w(`div`,{class:`hidden custom-tab:block`,ref_key:`backToTopText`,ref:v},[g(u,{field:e.block.back_to_top_text},null,8,[`field`])],512)]),w(`div`,zb,[w(`div`,{ref_key:`contactBlock`,ref:f},[g(u,{field:e.block.contact_text},null,8,[`field`])],512),w(`div`,{ref_key:`indicator`,ref:m,class:`text-xxs border-[1px] backdrop-blur-[100px] bg-[#676767]/10 w-max p-[0.3em] fixed top-[10px] left-[12px] invisible pointer-events-none flex items-center`},[n[5]||=w(`div`,null,`copy`,-1),w(`div`,{ref_key:`indicatorValidated`,ref:h,class:`ml-[0.3em] hidden`},`✓`,512)],512)]),w(`div`,Bb,[g(d,{link:{url:`https://okeystudio.com`,text:`Okeystudio.com`}})]),w(`div`,Vb,[n[6]||=w(`div`,{class:`glitch-text`},`Currently in France`,-1),w(`div`,Hb,[w(`div`,{ref_key:`timeBullet`,ref:s,class:`w-[0.35em] mr-[0.57em] aspect-square rounded-full bg-white`},null,512),w(`div`,Ub,O(_(a)),1)])]),w(`div`,Wb,[w(`div`,null,[n[7]||=w(`span`,{class:`glitch-text`},`Designed with love by `,-1),n[8]||=w(`br`,{class:`custom-tab:hidden custom-desktop:block`},null,-1),w(`a`,{ref_key:`creditLink`,ref:p,href:`https://clarissemichard.com`,target:`_blank`},`Clarisse Michard`,512),n[9]||=S(`. `,-1),n[10]||=w(`br`,{class:`custom-tab:hidden custom-desktop:block`},null,-1),n[11]||=w(`span`,{class:`glitch-text`},`© 2026`,-1)]),w(`button`,{type:`button`,"aria-label":`Back to top`,class:`w-[10.22svw] aspect-square border flex justify-center items-center relative overflow-hidden cursor-pointer custom-tab:hidden`,onClick:A,onMouseenter:n[2]||=()=>j(`hover`),onMouseleave:n[3]||=()=>j(`initial`)},[...n[12]||=[w(`svg`,{class:`pointer-events-none w-5/10 h-auto -rotate-45`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1),w(`svg`,{class:`pointer-events-none absolute w-5/10 h-auto -rotate-45 translate-y-[175%]`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1)]],32)])])])}}}),{__name:`CustomFooter`}),qb=()=>{let e=T({x:0,y:0}),t=b({isInPortraitMode:null,isTouchDevice:null,width:0,height:0}),n=!1,r={x:0,y:0,scrollY:0};u(i),d(a);function i(){window.addEventListener(`resize`,h),t.value.isTouchDevice=g(),Ja()?(document.addEventListener(`touchstart`,c,{passive:!0}),document.addEventListener(`touchmove`,l,{passive:!0}),document.addEventListener(`touchend`,f),document.addEventListener(`touchcancel`,f),window.addEventListener(`scroll`,p,{passive:!0})):document.addEventListener(`mousemove`,o),h()}function a(){window.removeEventListener(`resize`,h),document.removeEventListener(`mousemove`,o),document.removeEventListener(`touchstart`,c),document.removeEventListener(`touchmove`,l),document.removeEventListener(`touchend`,f),document.removeEventListener(`touchcancel`,f),window.removeEventListener(`scroll`,p)}function o(e){m(e.clientX,e.clientY)}function s(e){let t=e.touches[0];return t?(n=!0,r.x=t.clientX,r.y=t.clientY,r.scrollY=window.scrollY,!0):!1}function c(e){s(e)}function l(e){s(e)&&m(r.x,r.y)}function f(e){n=e.touches.length>0}function p(){n&&m(r.x,r.y-(window.scrollY-r.scrollY))}function m(t,n){e.value={x:t,y:n}}function h(){t.value={height:window.innerHeight,width:window.innerWidth,isInPortraitMode:window.innerWidth<window.innerHeight||window.innerWidth<769,isTouchDevice:t.value.isTouchDevice}}function g(){return`ontouchstart`in window||navigator.maxTouchPoints>0||window.matchMedia(`(pointer: coarse)`).matches}return{mouse:e,dimensions:t}},Jb={class:`mr-[10px] relative`},Yb={class:`absolute right-full bottom-full pointer-events-none`},Xb={class:`flex border text-xxs`},Zb=[`innerHTML`],Qb={class:`w-[9.91em] ml-[0.83em] flex flex-col justify-between`},$b={class:`block`},ex={class:`block`},tx=[`aria-expanded`],nx={class:`block px-[18%] pointer-events-none`},rx={class:`w-full h-auto`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 31 23.46`},ix=Object.assign(j({__name:`AudioEasterEgg`,props:{audios:{}},setup(e){let t=e,n=b(-1),r=b(),i=b([]),a=b(),s=b(),c=b([]),d,p,m,h=b(!1),g=Ra();u(()=>{g.add(()=>{C(),T(),D()})});function v(){h.value=!h.value;let e=h.value?0:-1;e>-1?(n.value=e,d.tweenTo(`end`),p.play()):(d.tweenTo(0,{ease:`expo.out`,duration:.6,onComplete:()=>{h.value||(n.value=e)}}),p.pause())}function S(){let e=n.value;n.value=(n.value+1)%t.audios.length;let r=a.value[n.value],o=a.value[e],s=i.value[n.value];for(let e=1;r.children.length>e;e++)X.from(r.children[e],{scrambleText:{text:o.children[e].textContent,chars:$a,speed:.2},duration:.6,ease:`expo.out`});s&&X.from(s,{opacity:0,duration:1,delay:.3})}function C(){let e=X.timeline({paused:!0,defaults:{ease:`none`,duration:.85}}).from(r.value,{scale:0,transformOrigin:`bottom right`}).from(i.value,{opacity:0,duration:.25},`<+=0.6`).addLabel(`end`).tweenTo(`end`,{ease:`expo.out`}),t=a.value[0],n=X.timeline({paused:!0,defaults:{ease:`none`,duration:1}}).from(t.children,{scrambleText:{text:``,chars:$a,speed:.5},duration:.3,ease:`expo.out`},`<+=0.15`).addLabel(`end`).tweenTo(`end`);d=X.timeline({paused:!0}).add(e).add(n,`<`).addLabel(`end`)}function T(){let e=[{duration:.5,key:[3,1]},{duration:.5,key:[1.8,1]},{duration:1,key:[2,3,1]},{duration:1,key:[2,3,1]},{duration:1,key:[.8,1.5,1]},{duration:.75,key:[.4,1]},{duration:.75,key:[.4,1]},{duration:.75,key:[.4,1]},{duration:.75,key:[.4,1]},{duration:.75,key:[.4,1]}];p=X.timeline({paused:!0}),c.value.forEach((t,n)=>{let r=e[n%e.length];r&&(X.set(t,{scaleY:1}),p.to(t,{keyframes:{scaleY:r?.key,ease:`none`},transformOrigin:`center`,duration:r?.duration,delay:.05*n,ease:`none`,repeat:-1,yoyo:!0},`<`))})}function D(){m=X.timeline({paused:!0,repeat:-1,defaults:{duration:1,ease:`none`}}).to(s.value,{backgroundColor:`white`}).to(c.value,{fill:`black`},`<`).addLabel(`end`)}function k(e,t=`end`){Ja()||e.tweenTo(t,{ease:`expo.out`})}return(t,u)=>(o(),x(`div`,Jb,[w(`div`,Yb,[(o(!0),x(E,null,f(e.audios,(e,t)=>(o(),x(`div`,{key:t,ref_for:!0,ref_key:`embedCtn`,ref:r},[l(w(`div`,Xb,[w(`div`,{ref_for:!0,ref_key:`embeds`,ref:i,class:`pl-[0.58em] py-[0.58em]`},[t===_(n)?(o(),x(`div`,{key:0,class:`pointer-events-auto w-[200px] aspect-square [&>iframe]:h-[200px] [&>iframe]:rounded-[8px]`,innerHTML:e.embed},null,8,Zb)):y(``,!0)],512),w(`div`,Qb,[w(`p`,{ref_for:!0,ref_key:`textEl`,ref:a,class:`mr-[1.83em] pt-[0.58em] pr-[0.58em]`},[u[3]||=w(`span`,{class:`block mb-[1em]`},`In my ears: `,-1),w(`span`,$b,O(e.song),1),w(`span`,ex,`- `+O(e.artist),1)],512),w(`button`,{type:`button`,"aria-label":`Next song`,class:`p-[0.58em] border-white border-t border-l cursor-pointer self-end pointer-events-auto flex justify-center items-center aspect-square`,onClick:S},[...u[4]||=[w(`div`,{class:`rotate-45 pointer-events-none`},[w(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.441029 0.000377595V1.24665L5.37752 1.25107L-0.000913076 6.6295L0.88297 7.51339L6.2614 2.13496L6.25698 7.07145H7.5121V0.000377595H0.441029Z`,fill:`white`})])],-1)]])])],512),[[N,t===_(n)]])]))),128))]),w(`button`,{ref_key:`pictoCtn`,ref:s,type:`button`,"aria-label":`What I'm listening to`,"aria-expanded":_(h),class:`w-[13.21svw] aspect-square flex items-center border cursor-pointer clickable custom-tab:w-[5.17svw] custom-desktop:w-[3svw]`,onClick:u[0]||=()=>v(),onMouseenter:u[1]||=()=>k(_(m),`end`),onMouseleave:u[2]||=()=>k(_(m),0)},[w(`span`,nx,[(o(),x(`svg`,rx,[w(`path`,{ref:e=>_(c)[0]=e,d:`M901,526.09c0,.12.17.21.37.21h1.28c.2,0,.36-.09.36-.21v-6.28c0-.11-.16-.21-.36-.21h-1.28c-.2,0-.37.1-.37.21`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[1]=e,d:`M904.19,529a.39.39,0,0,0,.37.41h1.28a.39.39,0,0,0,.37-.41V516.91a.39.39,0,0,0-.37-.41h-1.28a.39.39,0,0,0-.37.41`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[2]=e,d:`M907.42,526.09c0,.12.16.21.36.21h1.28c.2,0,.37-.09.37-.21v-6.28c0-.11-.17-.21-.37-.21h-1.28c-.2,0-.36.1-.36.21`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[3]=e,d:`M910.64,525.31c0,.08.16.16.37.16h1.27c.2,0,.37-.08.37-.16V520.6c0-.09-.17-.16-.37-.16H911c-.21,0-.37.07-.37.16`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[4]=e,d:`M913.86,529.7a.42.42,0,0,0,.37.46h1.27a.43.43,0,0,0,.37-.46V516.21a.42.42,0,0,0-.37-.46h-1.27a.41.41,0,0,0-.37.46`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[5]=e,d:`M917.08,533.93c0,.42.16.75.37.75h1.27c.2,0,.37-.33.37-.75V512c0-.41-.17-.75-.37-.75h-1.27c-.21,0-.37.33-.37.75`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[6]=e,d:`M920.3,531.58c0,.33.16.59.37.59h1.27c.21,0,.37-.26.37-.59V514.32c0-.32-.16-.58-.37-.58h-1.27c-.21,0-.37.26-.37.58`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[7]=e,d:`M923.52,529.23a.4.4,0,0,0,.37.42h1.27a.39.39,0,0,0,.37-.42V516.68a.4.4,0,0,0-.37-.43h-1.27a.4.4,0,0,0-.37.43`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[8]=e,d:`M926.74,527.27a.34.34,0,0,0,.37.29h1.27a.33.33,0,0,0,.37-.29v-8.63a.34.34,0,0,0-.37-.3h-1.27a.34.34,0,0,0-.37.3`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512),w(`path`,{ref:e=>_(c)[9]=e,d:`M930,530.8c0,.29.17.53.37.53h1.27c.21,0,.37-.24.37-.53V515.11c0-.3-.16-.54-.37-.54h-1.27c-.2,0-.37.24-.37.54`,transform:`translate(-900.97 -511.22)`,style:{fill:`#fff`,"fill-rule":`evenodd`}},null,512)]))])],40,tx)]))}}),{__name:`CommonAudioEasterEgg`}),ax={class:`flex overflow-hidden`},ox={class:`h-full w-[15.33em] flex items-center justify-center border border-r-0`},sx={class:`w-[12.33em]`},cx=[`aria-expanded`],lx=Object.assign(j({__name:`TextEasterEgg`,props:{text:{},elToMove:{}},setup(e){let n=e,r=b(),i=b(),a,s,c,l=b(!1),d=Ra(),f=-1,p;u(()=>{d.add(()=>{v(),y()}),g(),p=new ResizeObserver(g),p.observe(r.value)}),t(()=>{p?.disconnect()});function m(){l.value=!l.value,l.value?(a.tweenTo(`end`,{ease:`expo.out`}),s.tweenTo(`end`)):a.tweenTo(0,{ease:`expo.out`,onComplete:()=>{s.seek(0)}})}function h(){a=X.timeline({paused:!0,defaults:{ease:`none`,duration:1}}).fromTo(r.value,{x:f,clipPath:`inset(0% 100% 0% 0%)`},{x:0,clipPath:`inset(0% 0% 0% 0%)`}).from(n.elToMove,{x:f},`<`).addLabel(`end`)}function g(){let e=r.value?.clientWidth??0;e!==f&&(f=e,a&&(X.killTweensOf(a),a.revert()),d.add(h),a.progress(+!!l.value))}function v(){let e=r.value.children[0].children[0],t=e.textContent;s=X.timeline({paused:!0,defaults:{ease:`none`,duration:1}}).fromTo(e,{scrambleText:{text:``}},{scrambleText:{text:t,chars:$a,speed:.2},duration:.8,ease:`expo.out`},`<+=0.1`).addLabel(`end`)}function y(){let e=X.utils.toArray(`path`,i.value);c=X.timeline({paused:!0,repeat:-1,defaults:{duration:1,ease:`none`}}).to(i.value,{backgroundColor:`white`}).to(e,{fill:`black`},`<`).addLabel(`end`)}function S(e,t=`end`){Ja()||e.tweenTo(t,{ease:`expo.out`})}return(t,n)=>(o(),x(`div`,ax,[w(`div`,{ref_key:`textEasterEgg`,ref:r,class:`text-xxs w-[15.33em] pointer-events-none`},[w(`div`,ox,[w(`p`,sx,O(e.text),1)])],512),w(`button`,{ref_key:`pictoCtn`,ref:i,type:`button`,"aria-label":`Show hidden message`,"aria-expanded":_(l),class:`w-[13.21svw] aspect-square flex items-center border cursor-pointer clickable custom-tab:w-[5.17svw] custom-desktop:w-[3svw]`,onClick:n[0]||=()=>m(),onMouseenter:n[1]||=()=>S(_(c),`end`),onMouseleave:n[2]||=()=>S(_(c),0)},[...n[3]||=[w(`span`,{class:`block px-[15%] pointer-events-none`},[w(`svg`,{class:`w-full h-auto`,width:`48`,height:`34`,viewBox:`0 0 48 34`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M42.0331 10.7839V6.12518C42.0331 6.06662 42.0214 6.00863 41.9987 5.95459C41.9759 5.90055 41.9426 5.85153 41.9006 5.81038C41.8587 5.76923 41.8089 5.73678 41.7542 5.71488C41.6995 5.69298 41.641 5.68208 41.582 5.68282H18.597C18.516 5.68242 18.4366 5.66036 18.3672 5.61898C18.2977 5.5776 18.2408 5.51841 18.2023 5.44763L15.4786 0.508913C15.4389 0.439564 15.3816 0.381823 15.3123 0.341516C15.243 0.30121 15.1642 0.279761 15.0839 0.279332H0.732371C0.673396 0.278591 0.614843 0.289474 0.560142 0.311373C0.50544 0.333271 0.455658 0.365745 0.413692 0.406896C0.371725 0.448047 0.338408 0.497066 0.315668 0.551104C0.292929 0.605141 0.281245 0.663113 0.28125 0.721678V33.7138H9.64214`,stroke:`white`,"stroke-miterlimit":`10`}),w(`path`,{d:`M42.1636 33.2103L47.7012 11.6131C47.727 11.5131 47.7294 11.4087 47.7083 11.3076C47.6872 11.2066 47.6432 11.1117 47.5796 11.0301C47.5159 10.9486 47.4343 10.8825 47.3411 10.837C47.2478 10.7915 47.1454 10.7678 47.0414 10.7676H6.69371C6.54265 10.7688 6.39618 10.8194 6.27694 10.9115C6.15769 11.0036 6.07229 11.1321 6.03391 11.2771L0.501954 32.8911C0.476036 32.9908 0.473535 33.095 0.494623 33.1958C0.515712 33.2966 0.559833 33.3912 0.623589 33.4724C0.687345 33.5535 0.769042 33.6191 0.862349 33.6639C0.955655 33.7088 1.05809 33.7317 1.16175 33.731H41.5038C41.6567 33.7301 41.8047 33.6783 41.9244 33.5839C42.044 33.4895 42.1283 33.3579 42.1636 33.2103Z`,stroke:`white`,"stroke-miterlimit":`10`})])],-1)]],40,cx)]))}}),{__name:`CommonTextEasterEgg`}),ux={id:`hero`,class:`h-svh flex flex-col items-center justify-between p-(--grid-margin)`},dx={class:`flex flex-col justify-center items-center w-full relative custom-tab:text-center`},fx={class:`text-xxl mt-[1.71em] w-full [&_.font-ter]:inline-block [&_.font-ter]:leading-[0.3] [&_.font-ter]:mt-[0.45em] [&_.font-ter]:mb-[0.1em] custom-tab:[&_.font-ter]:my-[unset] custom-tab:[&_.font-ter]:leading-[0.85] custom-tab:mt-[0.44em]`},px={class:`sr-only`},mx={class:`flex justify-between text-xs leading-[0.9] mt-[1.42em] font-secondary flex-wrap pb-[2.5em] custom-tab:w-11/12 custom-tab:pb-[unset] custom-tab:mt-[1em] custom-tab:flex-row-reverse custom-desktop:w-8/12`},hx={class:`flex justify-between w-full items-start custom-tab:w-34/100`},gx={class:`font-[700] text-ms flex items-center`},_x={class:`relative`},vx={class:`text-left relative`},yx={class:`flex justify-between w-full flex-wrap custom-tab:w-4/10 custom-tab:flex-row-reverse`},bx={class:`mt-[1.42em] w-full custom-tab:mt-[unset] custom-tab:w-[unset]`},xx={class:`relative`},Sx={class:`flex items-center`},Cx={class:`relative`},wx={class:`relative mt-[1.42em] custom-tab:mt-[unset]`},Tx={class:`flex justify-between items-end font-secondary self-stretch text-xs`},Ex={class:`w-35/60 custom-tab:w-3/12 custom-desktop:flex custom-desktop:items-center`},Dx={class:`relative mt-[1.07em] custom-desktop:mt-[unset]`},Ox={class:`flex flex-col justify-between items-end`},kx={class:`items-end hidden custom-tab:flex`},Ax={class:`relative custom-tab:mt-[2.35em] custom-desktop:mt-[2.8em]`},jx={class:`relative custom-tab:hidden text-right mt-[1em]`},Mx={class:`absolute right-[0] top-[0] text-right min-w-full w-max`},Nx=Object.assign(j({__name:`Hero`,props:{block:{},audios:{},mobileLinks:{},pageIsReady:{type:Boolean}},emits:[`scrollTo`,`introReady`],setup(e,{emit:t}){let n=e,r=t,a=b(),s=b(),l=b(),d=b(``),p=b(),m=b(),h=b(),v=b(``),y=b(),S=b(),T=b(),D=b(),k=b(),A=b(),j=b(),M=b(),N=b(),P=b(),F=b(),I=b(),L=b(),R=b(),te=b([]),z=b([]),B,V,H,ne={heading1:{as:`span`,class:`block`},paragraph:{as:`span`,class:`block`}},re={value:0},U=Ra();c(()=>n.pageIsReady,e=>{e&&V?.play()}),u(ie);async function ie(){let e=n.block.right_text[0];e&&`spans`in e&&e.spans.forEach(e=>{let t=e.type===`hyperlink`?ee(e.data):null;t&&(d.value=t)}),v.value=Ob(),await i(),Va(U,()=>{ae(),r(`introReady`),n.pageIsReady&&V.play(),kb(s.value,()=>{A.value.textContent=Ob()})})}function ae(){V=X.timeline({paused:!0}),Gh.create(p.value.children,{type:`lines`,linesClass:`hero-line-++`,autoSplit:!0,aria:`none`,onSplit:e=>{U.add(()=>{H?.kill(),H=W(e.lines),H.progress(re.value)})}}),V.to(re,{value:1,duration:H.duration(),ease:`power1.out`,onUpdate:()=>{H?.progress(re.value)}});let e=[{from:y.value,to:S.value},{from:T.value,to:D.value},{from:k.value,to:A.value},{from:j.value,to:M.value},{from:N.value.children[0],to:P.value},{from:F.value.children[0],to:I.value},{from:L.value.children[0].children[0],to:R.value.children[0]},{from:L.value.children[0].children[1],to:R.value.children[1].children[0].children[0].children,delay:.15}];z.value.forEach((t,n)=>{e.push({from:te.value[n],to:t.$el.children[0].children[0].children,delay:.15})}),e.forEach(e=>{V.to(e.to,{scrambleText:{text:e.from.textContent,chars:$a,speed:.6},duration:1.2,ease:`expo.out`},.5+(e.delay?e.delay:0))}),V.from(`.header-scroll-bar`,{scaleX:0,transformOrigin:`left`,duration:1,ease:`expo.inOut`},.5),V.fromTo(`.scroll-bar-number`,{xPercent:50,clipPath:`inset(0% 50% 0% 50%)`},{xPercent:0,clipPath:`inset(0% 0% 0% 0%)`,duration:.6,ease:`expo.out`},1),V.from(l.value,{scale:0,transformOrigin:`left bottom`,duration:.7,ease:`expo.inOut`},.5),X.set(l.value.children[1],{y:0,yPercent:-175}),B=X.timeline({paused:!0}).from(l.value.children[0],{yPercent:-175,duration:.67,ease:`expo.inOut`},.8).addLabel(`in`).to(l.value.children[0],{yPercent:175,duration:.67,ease:`none`}).to(l.value.children[1],{yPercent:0,duration:.67,ease:`none`},`<`).addLabel(`hover`),V.add(B.tweenTo(`in`),0),X.utils.toArray(`.header-right-link .original-child`).forEach(e=>{let t=e.textContent;e.textContent=``,V.to(e,{scrambleText:{text:t,chars:$a,speed:.6},duration:1.2,ease:`expo.out`},.5)}),V.from(`.header-contact-link`,{scaleX:0,transformOrigin:`right`,duration:1,ease:`expo.inOut`},.5),V.mainTextIn(`.header-contact-link .cta-alt-text`,{duration:1,ease:`expo.out`},1.2),V.from([m.value.$el.children[1],h.value.$el.children[1],a.value,s.value],{scale:0,duration:1,ease:`expo.inOut`},.5),V.from(`#hero a svg, #main-header a svg, .hero-svg, .header-switch-mode`,{scale:0,ease:`expo.inOut`,duration:.6},.8)}function W(e){let t=X.timeline({paused:!0});return e.forEach((e,n)=>{t.mainTextIn(e,{duration:1.5,ease:`expo.out`},`${.1*n}`).set(e,{clearProps:`clipPath`},`>`)}),t}function oe(){r(`scrollTo`,window.innerHeight)}function se(e){Ja()||B?.tweenTo(e,{ease:`expo.out`})}return(t,n)=>{let r=je,i=ix,c=lx,u=Yh;return o(),x(`section`,ux,[w(`div`,dx,[w(`h1`,fx,[w(`span`,px,O(e.block.subtext_3)+`, `,1),w(`span`,{ref_key:`textCtn`,ref:p,class:`block`},[g(r,{field:e.block.text,components:ne},null,8,[`field`])],512)]),w(`div`,mx,[w(`div`,hx,[w(`div`,gx,[w(`div`,{ref_key:`nameBullet`,ref:a,class:`bg-white aspect-square w-[0.88em] mr-[0.5em]`},null,512),w(`div`,_x,[w(`div`,{ref_key:`text3`,ref:j,class:`opacity-0`},O(e.block.subtext_3),513),w(`div`,{ref_key:`text3Target`,ref:M,class:`absolute left-[0] top-[0] w-full glitch-text`},null,512)])]),w(`div`,vx,[w(`div`,{ref_key:`text4`,ref:N,class:`opacity-0`},[g(r,{field:e.block.subtext_4},null,8,[`field`])],512),w(`div`,{ref_key:`text4Target`,ref:P,class:`absolute left-[0] top-[0] w-full glitch-text`},null,512)])]),w(`div`,yx,[w(`div`,bx,[w(`div`,xx,[w(`div`,{ref_key:`text2`,ref:T,class:`opacity-0`},O(e.block.subtext_2),513),w(`div`,{ref_key:`text2Target`,ref:D,class:`absolute left-[0] top-[0] w-full glitch-text`},null,512)]),w(`div`,Sx,[w(`div`,{ref_key:`timeBullet`,ref:s,class:`w-[0.35em] mr-[0.57em] aspect-square rounded-full bg-white`},null,512),w(`div`,Cx,[w(`div`,{ref_key:`text2Bis`,ref:k,class:`opacity-0`},O(_(v)),513),w(`div`,{ref_key:`text2BisTarget`,ref:A,class:`absolute left-[0] top-[0] w-full glitch-text`},null,512)])])]),w(`div`,wx,[w(`div`,{ref_key:`text1`,ref:y,class:`opacity-0`},O(e.block.subtext_1),513),w(`div`,{ref_key:`text1Target`,ref:S,class:`absolute left-[0] top-[0] w-full glitch-text`},null,512)])])]),n[2]||=C(`<div class="flex justify-between w-full absolute bottom-[0] left-[0]"><div><svg class="hero-svg" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10V0H1.42857V8.57143H10V10H0Z" fill="white"></path></svg></div><div class="-rotate-90"><svg class="hero-svg" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10V0H1.42857V8.57143H10V10H0Z" fill="white"></path></svg></div></div>`,1)]),w(`div`,Tx,[w(`div`,Ex,[w(`button`,{ref_key:`scrollToCta`,ref:l,type:`button`,"aria-label":`Scroll to next section`,class:`hidden custom-tab:flex clickable relative w-[10.22svw] aspect-square border mr-[1em] justify-center items-center overflow-hidden cursor-pointer custom-tab:w-[4svw] custom-desktop:w-[2.37svw]`,onClick:oe,onMouseenter:n[0]||=()=>se(`hover`),onMouseleave:n[1]||=()=>se(`in`)},[...n[3]||=[w(`svg`,{class:`pointer-events-none w-5/10 h-auto rotate-135`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1),w(`svg`,{class:`pointer-events-none absolute w-5/10 h-auto rotate-135 -translate-y-[175%]`,width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M0.707031 0.707031V2.01376L5.88297 2.01839L0.243652 7.65771L1.17041 8.58447L6.80973 2.94515L6.8051 8.12109H8.12109V0.707031H0.707031Z`,fill:`white`})],-1)]],544),w(`div`,Dx,[w(`div`,{ref_key:`textLeft`,ref:F,class:`opacity-0`},[g(r,{field:e.block.left_text},null,8,[`field`])],512),w(`div`,{ref_key:`textLeftTarget`,ref:I,class:`absolute left-[0] bottom-[0] w-full glitch-text`},null,512)])]),w(`div`,Ox,[w(`div`,kx,[g(i,{ref_key:`audioEasterEggCtn`,ref:m,class:`hero-audio-easter`,audios:e.audios},null,8,[`audios`]),g(c,{ref_key:`textEasterEggCtn`,ref:h,text:e.block.hidden_text,"el-to-move":`.hero-audio-easter`},null,8,[`text`])]),w(`div`,Ax,[w(`div`,{ref_key:`textRight`,ref:L,class:`opacity-0 has-inner-link-s [&_.other]:hidden custom-tab:[&_.other]:inline`},[g(r,{field:e.block.right_text},null,8,[`field`])],512),w(`div`,{ref_key:`textRightTarget`,ref:R,class:`absolute right-[0] top-[0] text-right min-w-full w-max`},[n[4]||=w(`span`,{class:`glitch-text hidden custom-tab:inline-block`},null,-1),g(u,{link:{url:_(d),text:``},class:`ml-[0.8em] inline-block`},null,8,[`link`])],512),(o(!0),x(E,null,f(e.mobileLinks,e=>(o(),x(`div`,jx,[w(`div`,{ref_for:!0,ref_key:`textsMobile`,ref:te,class:`opacity-0`},O(e.text),513),w(`div`,Mx,[g(u,{link:{url:_(ee)(e),text:``},ref_for:!0,ref_key:`textsMobileTarget`,ref:z,class:`inline-block`},null,8,[`link`])])]))),256))])])])])}}}),{__name:`Hero`}),Px=/(?:^\s+|\s+$)/g,Fx=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Ix(e){var t=e.nodeType,n=``;if(t===1||t===9||t===11){if(typeof e.textContent==`string`)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=Ix(e)}else if(t===3||t===4)return e.nodeValue;return n}function Lx(e,t,n,r,i){if(e+=``,n&&(e=e.trim?e.trim():e.replace(Px,``)),t&&t!==``)return e.replace(/>/g,`&gt;`).replace(/</g,`&lt;`).split(t);for(var a=[],o=e.length,s=0,c,l;s<o;s++)l=e.charAt(s),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||e.charCodeAt(s+1)>=65024&&e.charCodeAt(s+1)<=65039)&&(c=((e.substr(s,12).split(Fx)||[])[1]||``).length||2,l=e.substr(s,c),a.emoji=1,s+=c-1),a.push(i?l:l===`>`?`&gt;`:l===`<`?`&lt;`:r&&l===` `&&(e.charAt(s-1)===` `||e.charAt(s+1)===` `)?`&nbsp;`:l);return a}var Rx=function(){function e(e){this.chars=Lx(e),this.sets=[],this.length=50;for(var t=0;t<20;t++)this.sets[t]=Wx(80,this.chars)}var t=e.prototype;return t.grow=function(e){for(var t=0;t<20;t++)this.sets[t]+=Wx(e-this.length,this.chars);this.length=e},e}(),zx,Bx,Vx=function(){return zx||typeof window<`u`&&(zx=window.gsap)&&zx.registerPlugin&&zx},Hx=1,Ux=/\s+/g,Wx=function(e,t){for(var n=t.length,r=``;--e>-1;)r+=t[~~(Math.random()*n)];return r},Gx=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,Kx=Gx.toLowerCase(),qx={upperCase:new Rx(Gx),lowerCase:new Rx(Kx),upperAndLowerCase:new Rx(Gx+Kx)},Jx=function(){Bx=zx=Vx()},Yx={version:`3.13.0`,name:`scrambleText`,register:function(e,t,n){zx=e,Jx()},init:function(e,t,n,r,i){if(Bx||Jx(),this.prop=`innerHTML`in e?`innerHTML`:`textContent`in e?`textContent`:0,this.prop){this.target=e,typeof t!=`object`&&(t={text:t});var a=t.text||t.value||``,o=t.trim!==!1,s=this,c,l,u,d;return s.delimiter=c=t.delimiter||``,s.original=Lx(Ix(e).replace(Ux,` `).split(`&nbsp;`).join(``),c,o),(a===`{original}`||a===!0||a==null)&&(a=s.original.join(c)),s.text=Lx((a||``).replace(Ux,` `),c,o),s.hasClass=!!(t.newClass||t.oldClass),s.newClass=t.newClass,s.oldClass=t.oldClass,d=c===``,s.textHasEmoji=d&&!!s.text.emoji,s.charsHaveEmoji=!!t.chars&&!!Lx(t.chars).emoji,s.length=d?s.original.length:s.original.join(c).length,s.lengthDif=(d?s.text.length:s.text.join(c).length)-s.length,s.fillChar=t.fillChar||t.chars&&~t.chars.indexOf(` `)?`&nbsp;`:``,s.charSet=u=qx[t.chars||`upperCase`]||new Rx(t.chars),s.speed=.05/(t.speed||1),s.prevScrambleTime=0,s.setIndex=Math.random()*20|0,l=s.length+Math.max(s.lengthDif,0),l>u.length&&u.grow(l),s.chars=u.sets[s.setIndex],s.revealDelay=t.revealDelay||0,s.tweenLength=t.tweenLength!==!1,s.tween=n,s.rightToLeft=!!t.rightToLeft,s._props.push(`scrambleText`,`text`),Hx}},render:function(e,t){var n=t.target,r=t.prop,i=t.text,a=t.delimiter,o=t.tween,s=t.prevScrambleTime,c=t.revealDelay,l=t.setIndex,u=t.chars,d=t.charSet,f=t.length,p=t.textHasEmoji,m=t.charsHaveEmoji,h=t.lengthDif,g=t.tweenLength,_=t.oldClass,v=t.newClass,y=t.rightToLeft,b=t.fillChar,x=t.speed,S=t.original,C=t.hasClass,w=i.length,T=o._time,E=T-s,D,O,k,A,j,M,N,P,F,I,L;c&&(o._from&&(T=o._dur-T),e=T===0?0:T<c?1e-6:T===o._dur?1:o._ease((T-c)/(o._dur-c))),e<0?e=0:e>1&&(e=1),y&&(e=1-e),D=~~(e*w+.5),e?((E>x||E<-x)&&(t.setIndex=l=(l+(Math.random()*19|0))%20,t.chars=d.sets[l],t.prevScrambleTime+=E),A=u):A=S.join(a),L=o._from?e:1-e,I=f+(g?o._from?L*L*L:1-L*L*L:1)*h,y?e===1&&(o._from||o.data===`isFromStart`)?(k=``,A=S.join(a)):(N=i.slice(D).join(a),k=m?Lx(A).slice(0,I-(p?Lx(N):N).length+.5|0).join(``):A.substr(0,I-(p?Lx(N):N).length+.5|0),A=N):(k=i.slice(0,D).join(a),O=(p?Lx(k):k).length,A=m?Lx(A).slice(O,I+.5|0).join(``):A.substr(O,I-O+.5|0)),C?(P=y?_:v,F=y?v:_,j=P&&D!==0,M=F&&D!==w,N=(j?`<span class='`+P+`'>`:``)+k+(j?`</span>`:``)+(M?`<span class='`+F+`'>`:``)+a+A+(M?`</span>`:``)):N=k+a+A,n[r]=b===`&nbsp;`&&~N.indexOf(`  `)?N.split(`  `).join(`&nbsp;&nbsp;`):N}};Yx.emojiSafeSplit=Lx,Yx.getText=Ix,Vx()&&zx.registerPlugin(Yx);var Xx=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Zx=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,Qx=Math.PI/180,$x=Math.sin,eS=Math.cos,tS=Math.abs,nS=Math.sqrt,rS=function(e){return typeof e==`number`},iS=1e5,aS=function(e){return Math.round(e*iS)/iS||0};function oS(e,t,n,r,i,a,o){for(var s=e.length,c,l,u,d,f;--s>-1;)for(c=e[s],l=c.length,u=0;u<l;u+=2)d=c[u],f=c[u+1],c[u]=d*t+f*r+a,c[u+1]=d*n+f*i+o;return e._dirty=1,e}function sS(e,t,n,r,i,a,o,s,c){if(e!==s||t!==c){n=tS(n),r=tS(r);var l=i%360*Qx,u=eS(l),d=$x(l),f=Math.PI,p=f*2,m=(e-s)/2,h=(t-c)/2,g=u*m+d*h,_=-d*m+u*h,v=g*g,y=_*_,b=v/(n*n)+y/(r*r);b>1&&(n=nS(b)*n,r=nS(b)*r);var x=n*n,S=r*r,C=(x*S-x*y-S*v)/(x*y+S*v);C<0&&(C=0);var w=(a===o?-1:1)*nS(C),T=w*(n*_/r),E=w*-(r*g/n),D=(e+s)/2,O=(t+c)/2,k=D+(u*T-d*E),A=O+(d*T+u*E),j=(g-T)/n,M=(_-E)/r,N=(-g-T)/n,P=(-_-E)/r,F=j*j+M*M,I=(M<0?-1:1)*Math.acos(j/nS(F)),L=(j*P-M*N<0?-1:1)*Math.acos((j*N+M*P)/nS(F*(N*N+P*P)));isNaN(L)&&(L=f),!o&&L>0?L-=p:o&&L<0&&(L+=p),I%=p,L%=p;for(var ee=Math.ceil(tS(L)/(p/4)),R=[],te=L/ee,z=4/3*$x(te/2)/(1+eS(te/2)),B=u*n,V=d*n,H=d*-r,ne=u*r,re=0;re<ee;re++)i=I+re*te,g=eS(i),_=$x(i),j=eS(i+=te),M=$x(i),R.push(g-z*_,_+z*g,j+z*M,M-z*j,j,M);for(re=0;re<R.length;re+=2)g=R[re],_=R[re+1],R[re]=g*B+_*H+k,R[re+1]=g*V+_*ne+A;return R[re-2]=s,R[re-1]=c,R}}function cS(e){var t=(e+``).replace(Zx,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(Xx)||[],n=[],r=0,i=0,a=2/3,o=t.length,s=0,c=`ERROR: malformed path: `+e,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=function(e,t,n,r){v=(n-e)/3,y=(r-t)/3,h.push(e+v,t+y,n-v,r-y,n,r)};if(!e||!isNaN(t[0])||isNaN(t[1]))return console.log(c),n;for(l=0;l<o;l++)if(x=p,isNaN(t[l])?(p=t[l].toUpperCase(),m=p!==t[l]):l--,d=+t[l+1],f=+t[l+2],m&&(d+=r,f+=i),l||(g=d,_=f),p===`M`)h&&(h.length<8?--n.length:s+=h.length),r=g=d,i=_=f,h=[d,f],n.push(h),l+=2,p=`L`;else if(p===`C`)h||=[0,0],m||(r=i=0),h.push(d,f,r+t[l+3]*1,i+t[l+4]*1,r+=t[l+5]*1,i+=t[l+6]*1),l+=6;else if(p===`S`)v=r,y=i,(x===`C`||x===`S`)&&(v+=r-h[h.length-4],y+=i-h[h.length-3]),m||(r=i=0),h.push(v,y,d,f,r+=t[l+3]*1,i+=t[l+4]*1),l+=4;else if(p===`Q`)v=r+(d-r)*a,y=i+(f-i)*a,m||(r=i=0),r+=t[l+3]*1,i+=t[l+4]*1,h.push(v,y,r+(d-r)*a,i+(f-i)*a,r,i),l+=4;else if(p===`T`)v=r-h[h.length-4],y=i-h[h.length-3],h.push(r+v,i+y,d+(r+v*1.5-d)*a,f+(i+y*1.5-f)*a,r=d,i=f),l+=2;else if(p===`H`)w(r,i,r=d,i),l+=1;else if(p===`V`)w(r,i,r,i=d+(m?i-r:0)),l+=1;else if(p===`L`||p===`Z`)p===`Z`&&(d=g,f=_,h.closed=!0),(p===`L`||tS(r-d)>.5||tS(i-f)>.5)&&(w(r,i,d,f),p===`L`&&(l+=2)),r=d,i=f;else if(p===`A`){if(S=t[l+4],C=t[l+5],v=t[l+6],y=t[l+7],u=7,S.length>1&&(S.length<3?(y=v,v=C,u--):(y=C,v=S.substr(2),u-=2),C=S.charAt(1),S=S.charAt(0)),b=sS(r,i,+t[l+1],+t[l+2],+t[l+3],+S,+C,(m?r:0)+v*1,(m?i:0)+y*1),l+=u,b)for(u=0;u<b.length;u++)h.push(b[u]);r=h[h.length-2],i=h[h.length-1]}else console.log(c);return l=h.length,l<6?(n.pop(),l=0):h[0]===h[l-2]&&h[1]===h[l-1]&&(h.closed=!0),n.totalPoints=s+l,n}function lS(e){rS(e[0])&&(e=[e]);for(var t=``,n=e.length,r,i=0,a,o;i<n;i++){for(o=e[i],t+=`M`+aS(o[0])+`,`+aS(o[1])+` C`,r=o.length,a=2;a<r;a++)t+=aS(o[a++])+`,`+aS(o[a++])+` `+aS(o[a++])+`,`+aS(o[a++])+` `+aS(o[a++])+`,`+aS(o[a])+` `;o.closed&&(t+=`z`)}return t}var uS,dS,fS=function(){return uS||typeof window<`u`&&(uS=window.gsap)&&uS.registerPlugin&&uS},pS=function(){uS=fS(),uS?(uS.registerEase(`_CE`,SS.create),dS=1):console.warn(`Please gsap.registerPlugin(CustomEase)`)},mS=0x56bc75e2d63100000,hS=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},gS=1,_S=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,vS=/[cLlsSaAhHvVtTqQ]/g,yS=function(e){for(var t=e.length,n=mS,r=1;r<t;r+=6)+e[r]<n&&(n=+e[r]);return n},bS=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var r=e[0]*-1,i=-n,a=e.length,o=1/(+e[a-2]+r),s=-t||(Math.abs(+e[a-1]-e[1])<.01*(+e[a-2]-e[0])?yS(e)+i:+e[a-1]+i),c;for(s=s?1/s:-o,c=0;c<a;c+=2)e[c]=(+e[c]+r)*o,e[c+1]=(+e[c+1]+i)*s},xS=function e(t,n,r,i,a,o,s,c,l,u,d){var f=(t+r)/2,p=(n+i)/2,m=(r+a)/2,h=(i+o)/2,g=(a+s)/2,_=(o+c)/2,v=(f+m)/2,y=(p+h)/2,b=(m+g)/2,x=(h+_)/2,S=(v+b)/2,C=(y+x)/2,w=s-t,T=c-n,E=Math.abs((r-s)*T-(i-c)*w),D=Math.abs((a-s)*T-(o-c)*w),O;return u||(u=[{x:t,y:n},{x:s,y:c}],d=1),u.splice(d||u.length-1,0,{x:S,y:C}),(E+D)*(E+D)>l*(w*w+T*T)&&(O=u.length,e(t,n,f,p,v,y,S,C,l,u,d),e(S,C,b,x,g,_,s,c,l,u,d+1+(u.length-O))),u},SS=function(){function e(e,t,n){dS||pS(),this.id=e,gS&&this.setData(t,n)}var t=e.prototype;return t.setData=function(e,t){t||={},e||=`0,0,1,1`;var n=e.match(_S),r=1,i=[],a=[],o=t.precision||1,s=o<=1,c,l,u,d,f,p,m,h,g;if(this.data=e,(vS.test(e)||~e.indexOf(`M`)&&e.indexOf(`C`)<0)&&(n=cS(e)[0]),c=n.length,c===4)n.unshift(0,0),n.push(1,1),c=8;else if((c-2)%6)throw`Invalid CustomEase`;for((+n[0]!=0||+n[c-2]!=1)&&bS(n,t.height,t.originY),this.segment=n,d=2;d<c;d+=6)l={x:+n[d-2],y:+n[d-1]},u={x:+n[d+4],y:+n[d+5]},i.push(l,u),xS(l.x,l.y,+n[d],+n[d+1],+n[d+2],+n[d+3],u.x,u.y,1/(o*2e5),i,i.length-1);for(c=i.length,d=0;d<c;d++)m=i[d],h=i[d-1]||m,(m.x>h.x||h.y!==m.y&&h.x===m.x||m===h)&&m.x<=1?(h.cx=m.x-h.x,h.cy=m.y-h.y,h.n=m,h.nx=m.x,s&&d>1&&Math.abs(h.cy/h.cx-i[d-2].cy/i[d-2].cx)>2&&(s=0),h.cx<r&&(h.cx?r=h.cx:(h.cx=.001,d===c-1&&(h.x-=.001,r=Math.min(r,.001),s=0)))):(i.splice(d--,1),c--);if(c=1/r+1|0,f=1/c,p=0,m=i[0],s){for(d=0;d<c;d++)g=d*f,m.nx<g&&(m=i[++p]),l=m.y+(g-m.x)/m.cx*m.cy,a[d]={x:g,cx:f,y:l,cy:0,nx:9},d&&(a[d-1].cy=l-a[d-1].y);p=i[i.length-1],a[c-1].cy=p.y-l,a[c-1].cx=p.x-a[a.length-1].x}else{for(d=0;d<c;d++)m.nx<d*f&&(m=i[++p]),a[d]=m;p<i.length-1&&(a[d-1]=i[i.length-2])}return this.ease=function(e){var t=a[e*c|0]||a[c-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&uS&&uS.registerEase(this.id,this.ease),this},t.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,n,r){return new e(t,n,r).ease},e.register=function(e){uS=e,pS()},e.get=function(e){return uS.parseEase(e)},e.getSVGData=function(t,n){n||={};var r=n.width||100,i=n.height||100,a=n.x||0,o=(n.y||0)+i,s=uS.utils.toArray(n.path)[0],c,l,u,d,f,p,m,h,g,_;if(n.invert&&(i=-i,o=0),typeof t==`string`&&(t=uS.parseEase(t)),t.custom&&(t=t.custom),t instanceof e)c=lS(oS([t.segment],r,0,0,-i,a,o));else{for(c=[a,o],m=Math.max(5,(n.precision||1)*200),d=1/m,m+=2,h=5/m,g=hS(a+d*r),_=hS(o+t(d)*-i),l=(_-o)/(g-a),u=2;u<m;u++)f=hS(a+u*d*r),p=hS(o+t(u*d)*-i),(Math.abs((p-_)/(f-g)-l)>h||u===m-1)&&(c.push(g,_),l=(p-_)/(f-g)),g=f,_=p;c=`M`+c.join(`,`)}return s&&s.setAttribute(`d`,c),c},e}();SS.version=`3.13.0`,SS.headless=!0,fS()&&uS.registerPlugin(SS);var CS=`1.3.26`;function wS(e,t,n){return Math.max(e,Math.min(t,n))}function TS(e,t,n){return(1-n)*e+n*t}function ES(e,t,n,r){return TS(e,t,1-Math.exp(-n*r))}function DS(e,t){return(e%t+t)%t}var OS=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=wS(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=ES(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function kS(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var AS=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=kS(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},jS=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},MS=100/6,NS={passive:!1};function PS(e,t){return e===1?MS:e===2?t:1}var FS=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new jS;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,NS),this.element.addEventListener(`touchstart`,this.onTouchStart,NS),this.element.addEventListener(`touchmove`,this.onTouchMove,NS),this.element.addEventListener(`touchend`,this.onTouchEnd,NS)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,NS),this.element.removeEventListener(`touchstart`,this.onTouchStart,NS),this.element.removeEventListener(`touchmove`,this.onTouchMove,NS),this.element.removeEventListener(`touchend`,this.onTouchEnd,NS)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=PS(r,this.window.width),a=PS(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},IS=e=>Math.min(1,1.001-2**(-10*e)),LS=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new OS;emitter=new jS;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=CS,window.lenis||(window.lenis={}),window.lenis.version=CS,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=IS:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new AS(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new FS(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty(`overflow`):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty(`overflow`,`clip`):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=wS(0,f,this.limit);f===this.targetScroll?(c?.(this),l?.(this)):(this.userData=d??{},n?(this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()})):(i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=IS:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})))}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?DS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},RS,zS,BS,VS,HS,US,WS,GS,KS=function(){return typeof window<`u`},qS=function(){return RS||KS()&&(RS=window.gsap)&&RS.registerPlugin&&RS},JS=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,YS={rect:[`width`,`height`],circle:[`r`,`r`],ellipse:[`rx`,`ry`],line:[`x2`,`y2`]},XS=function(e){return Math.round(e*1e4)/1e4},ZS=function(e){return parseFloat(e)||0},QS=function(e,t){var n=ZS(e);return~e.indexOf(`%`)?n/100*t:n},$S=function(e,t){return ZS(e.getAttribute(t))},eC=Math.sqrt,tC=function(e,t,n,r,i,a){return eC(((ZS(n)-ZS(e))*i)**2+((ZS(r)-ZS(t))*a)**2)},nC=function(e){return console.warn(e)},rC=function(e){return e.getAttribute(`vector-effect`)===`non-scaling-stroke`},iC=1,aC=function(e,t,n){var r=e.indexOf(` `),i,a;return r<0?(i=n===void 0?e:n+``,a=e):(i=e.substr(0,r),a=e.substr(r+1)),i=QS(i,t),a=QS(a,t),i>a?[a,i]:[i,a]},oC=function(e){if(e=zS(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),n=e.style,r=1,i=1,a,o,s,c,l,u,d;rC(e)&&(i=e.getScreenCTM(),r=eC(i.a*i.a+i.b*i.b),i=eC(i.d*i.d+i.c*i.c));try{o=e.getBBox()}catch{nC(`Some browsers won't measure invisible elements (like display:none or masks inside defs).`)}var f=o||{x:0,y:0,width:0,height:0},p=f.x,m=f.y,h=f.width,g=f.height;if((!o||!h&&!g)&&YS[t]&&(h=$S(e,YS[t][0]),g=$S(e,YS[t][1]),t!==`rect`&&t!==`line`&&(h*=2,g*=2),t===`line`&&(p=$S(e,`x1`),m=$S(e,`y1`),h=Math.abs(h-p),g=Math.abs(g-m))),t===`path`)c=n.strokeDasharray,n.strokeDasharray=`none`,a=e.getTotalLength()||0,XS(r)!==XS(i)&&!US&&(US=1)&&nC(`Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.`),a*=(r+i)/2,n.strokeDasharray=c;else if(t===`rect`)a=h*2*r+g*2*i;else if(t===`line`)a=tC(p,m,p+h,m+g,r,i);else if(t===`polyline`||t===`polygon`)for(s=e.getAttribute(`points`).match(JS)||[],t===`polygon`&&s.push(s[0],s[1]),a=0,l=2;l<s.length;l+=2)a+=tC(s[l-2],s[l-1],s[l],s[l+1],r,i)||0;else(t===`circle`||t===`ellipse`)&&(u=h/2*r,d=g/2*i,a=Math.PI*(3*(u+d)-eC((3*u+d)*(u+3*d))));return a||0},sC=function(e,t){if(e=zS(e)[0],!e)return[0,0];t||=oC(e)+1;var n=BS.getComputedStyle(e),r=n.strokeDasharray||``,i=ZS(n.strokeDashoffset),a=r.indexOf(`,`);return a<0&&(a=r.indexOf(` `)),r=a<0?t:ZS(r.substr(0,a)),r>t&&(r=t),[-i||0,r-i||0]},cC=function(){KS()&&(BS=window,HS=RS=qS(),zS=RS.utils.toArray,WS=RS.core.getStyleSaver,GS=RS.core.reverting||function(){},VS=((BS.navigator||{}).userAgent||``).indexOf(`Edge`)!==-1)},lC={version:`3.13.0`,name:`drawSVG`,register:function(e){RS=e,cC()},init:function(e,t,n,r,i){if(!e.getBBox)return!1;HS||cC();var a=oC(e),o,s,c;return this.styles=WS&&WS(e,`strokeDashoffset,strokeDasharray,strokeMiterlimit`),this.tween=n,this._style=e.style,this._target=e,t+``==`true`?t=`0 100%`:t?(t+``).indexOf(` `)===-1&&(t=`0 `+t):t=`0 0`,o=sC(e,a),s=aC(t,a,o[0]),this._length=XS(a),this._dash=XS(o[1]-o[0]),this._offset=XS(-o[0]),this._dashPT=this.add(this,`_dash`,this._dash,XS(s[1]-s[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,`_offset`,this._offset,XS(-s[0]),0,0,0,0,0,1),VS&&(c=BS.getComputedStyle(e),c.strokeLinecap!==c.strokeLinejoin&&(s=ZS(c.strokeMiterlimit),this.add(e.style,`strokeMiterlimit`,s,s+.01))),this._live=rC(e)||~(t+``).indexOf(`live`),this._nowrap=~(t+``).indexOf(`nowrap`),this._props.push(`drawSVG`),iC},render:function(e,t){if(t.tween._time||!GS()){var n=t._pt,r=t._style,i,a,o,s;if(n){for(t._live&&(i=oC(t._target),i!==t._length&&(a=i/t._length,t._length=i,t._offsetPT&&(t._offsetPT.s*=a,t._offsetPT.c*=a),t._dashPT?(t._dashPT.s*=a,t._dashPT.c*=a):t._dash*=a));n;)n.r(e,n.d),n=n._next;o=t._dash||e&&e!==1&&1e-4||0,i=t._length-o+.1,s=t._offset,o&&s&&o+Math.abs(s%t._length)>t._length-.05&&(s+=s<0?.005:-.005)&&(i+=.005),r.strokeDashoffset=o?s:s+.001,r.strokeDasharray=i<.1?`none`:o?o+`px,`+(t._nowrap?999999:i)+`px`:`0px, 999999px`}}else t.styles.revert()},getLength:oC,getPosition:sC};qS()&&RS.registerPlugin(lC);var uC={class:`flex justify-center min-h-[1em]`},dC={class:`flex justify-between`},fC={class:`flex justify-between min-h-[1em]`},pC={class:`flex justify-center`},mC=1,hC=`a, button, [role="button"], input, select, textarea, label, summary`,gC=Object.assign(j({__name:`HoldIndicator`,props:{mouse:{},active:{type:Boolean}},setup(e){let t=e,n=b(),r=b([]),i=!0,a=!1,s=!1,l,f;c(t.mouse,()=>{i=!0,a=!0,g(),p()}),c(()=>t.active,e=>{e?p():g()}),u(()=>{X.ticker.add(y),v()}),d(()=>{X.ticker.remove(y),l?.kill(),f?.kill(),X.killTweensOf(n.value)});function p(){f?.kill(),t.active&&a&&(f=X.delayedCall(mC,h))}function m(){let{x:e,y:n}=t.mouse.value;return!!document.elementFromPoint(e,n)?.closest(hC)}function h(){s||m()||(s=!0,l?.restart(),X.to(n.value,{autoAlpha:1,duration:.3,ease:`power1.out`,overwrite:!0}))}function g(){f?.kill(),s&&(s=!1,X.to(n.value,{autoAlpha:0,duration:.2,ease:`power1.out`,overwrite:!0,onComplete:()=>{l?.pause()}}))}function v(){let e=[{rvD:1.2,d:2.6,rpD:0},{rvD:1.2,d:1.2,rpD:.8},{rvD:1.8,d:2.6,rpD:.4}],t=[`hold`,`click`,`click`,`hold`,`hold`,`click`],n=[``,``,``,`{original}`],i=-1;l=X.timeline({paused:!0}),r.value.forEach((r,a)=>{let o=e[a%3];l.set(r,{opacity:1},a*.6).fromTo(r,{scrambleText:{text:()=>{let e=Math.round(Math.random()*3);return n[e]}}},{scrambleText:{text:()=>t[++i%t.length],chars:`01 0 1 */#`,speed:.01,revealDelay:o?.rvD},duration:o?.d,ease:`expo.out`,repeat:-1,repeatDelay:o?.rpD,repeatRefresh:!0},`>`)})}function y(){if(!i)return;i=!1;let e=t.mouse.value.x,r=t.mouse.value.y;X.set(n.value,{x:e,y:r})}return(e,t)=>(o(),x(`div`,{ref_key:`container`,ref:n,class:`flex flex-col justify-between fixed invisible opacity-0 text-xxs w-[9em] font-secondary text-center pointer-events-none top-[-1.5em] left-[-4.5em]`},[w(`div`,uC,[w(`div`,{class:`glitch-text`,ref:(e=>_(r)[0]=e)},null,512)]),w(`div`,dC,[w(`div`,{class:`glitch-text`,ref:(e=>_(r)[1]=e)},null,512),w(`div`,{class:`glitch-text`,ref:(e=>_(r)[2]=e)},null,512)]),w(`div`,fC,[w(`div`,{class:`glitch-text`,ref:(e=>_(r)[3]=e)},null,512),w(`div`,{class:`glitch-text`,ref:(e=>_(r)[4]=e)},null,512)]),w(`div`,pC,[w(`div`,{class:`glitch-text`,ref:(e=>_(r)[5]=e)},null,512)])],512))}}),{__name:`HoldIndicator`}),_C=j({__name:`index`,async setup(t){let n,i,a=L(),{data:s,error:c}=([n,i]=h(()=>F(`page`,()=>a.client.getSingle(`onepage`))),n=await n,i(),n);c.value&&console.error(`Prismic : impossible de charger la page`,c.value);let l=s.value?.data,f=qb(),p=b(),m=T(),S=b(!1),C=b(!1),E=b(!1),O=b(!1),k=b(!0),A=b(),j=b(0),M=v(()=>S.value&&!O.value&&!k.value),N=te().origin,P=l?.meta_image.url||`${N}/og-image.jpg`,I={"@context":`https://schema.org`,"@type":`Person`,name:l?.hero[0]?.subtext_3||`Adrien Quéchon`,jobTitle:`Creative Web Developer`,url:N,image:P,address:{"@type":`PostalAddress`,addressCountry:`FR`},worksFor:{"@type":`Organization`,name:`Okey Studio`,url:`https://okeystudio.com`},knowsAbout:[`Creative development`,`WebGL`,`GSAP`,`Nuxt`,`Three.js`,`Interactive design`],sameAs:(l?.header[0]?.socials??[]).map(e=>ee(e)).filter(Boolean)};e({title:l?.meta_title,link:[{rel:`canonical`,href:`${N}/`}],meta:[{name:`description`,content:l?.meta_description},{property:`og:title`,content:l?.meta_title},{property:`og:description`,content:l?.meta_description},{property:`og:type`,content:`website`},{property:`og:url`,content:`${N}/`},{property:`og:image`,content:P},{property:`og:image:width`,content:`1200`},{property:`og:image:height`,content:`630`},{property:`og:image:alt`,content:l?.meta_title},{name:`twitter:title`,content:l?.meta_title},{name:`twitter:description`,content:l?.meta_description},{name:`twitter:card`,content:`summary_large_image`},{name:`twitter:image`,content:P}],script:[{type:`application/ld+json`,innerHTML:JSON.stringify(I)}],htmlAttrs:{class:v(()=>[!S.value&&`is-loading`,!C.value&&`is-loader-dark`].filter(Boolean).join(` `))},style:[{key:`loader-critical`,innerHTML:`html.is-loading{overflow:hidden;overscroll-behavior:none}html.is-loader-dark{background:#000}.loader{position:fixed;inset:0;z-index:100000;background-color:#000}`}]}),R();function R(){X.registerPlugin(Gh,wy,Yx,lC,SS),X.registerEffect({name:`mainTextIn`,effect:(e,t)=>X.fromTo(e,{clipPath:`inset(-50% 0% 150% 0%)`,yPercent:110},{duration:t.duration,ease:t.ease,delay:t.delay,yPercent:0,clipPath:`inset(-50% 0% 0% 0%)`}),defaults:{duration:1,ease:`none`,delay:0},extendTimeline:!0}),SS.create(`custom-loader`,`M0,0 C0.104,0.204 0.711,0.986 1,1 `)}let z=new AbortController,B=e=>{m.value?.raf(e*1e3)},V=e=>e.preventDefault();u(()=>{k.value=Ja(),re(),window.scrollTo(0,0);let e=new LS({smoothWheel:!Qa()});e.on(`scroll`,H),m.value=e,S.value||(e.stop(),window.addEventListener(`touchmove`,V,{passive:!1})),X.ticker.add(B,!1,!0),X.ticker.lagSmoothing(0)}),d(()=>{X.ticker.remove(B),m.value?.destroy(),z.abort(),window.removeEventListener(`touchmove`,V)});function H(){wy.update(),U()}let ne=!1;function re(){Ja()||(X.utils.toArray(`.glsl-hover`).forEach(e=>{e.addEventListener(`mouseenter`,()=>ie(e),{signal:z.signal}),e.parentElement?.addEventListener(`mouseleave`,()=>ae(),{signal:z.signal})}),document.addEventListener(`mousemove`,()=>{ne=!0},{signal:z.signal}),document.documentElement.addEventListener(`mouseleave`,()=>{ne=!1},{signal:z.signal}))}function U(){if(!ne||k.value)return;let{x:e,y:t}=f.mouse.value,n=document.elementFromPoint(e,t),r=n?.closest(`.glsl-hover`);r?r!==p.value&&ie(r):p.value&&!p.value.parentElement?.contains(n)&&ae()}function ie(e){p.value=e}function ae(){p.value=null}function W(e,t=1.5){m.value?.scrollTo(e,{immediate:Qa(),duration:t,easing:e=>e===0?0:e===1?1:e<.5?2**(20*e-10)/2:(2-2**(-20*e+10))/2})}function oe(){S.value=!0,E.value=!0,window.removeEventListener(`touchmove`,V),m.value?.start()}function se(e){j.value=e,O.value=!0}function ce(){C.value=!0}return(e,t)=>{let n=qa,i=Th,a=sg,s=By,c=Qy,u=ub,d=Db,h=Kb;return o(),x(`div`,null,[g(gC,{mouse:_(f).mouse,active:_(M)},null,8,[`mouse`,`active`]),_(S)?y(``,!0):(o(),D(n,{key:0,onEndLoader:oe,onLoaderStartEnding:ce})),g(i,{ref_key:`webgl`,ref:A,lenis:_(m),"target-hover":_(p),mouse:_(f).mouse,win:_(f).dimensions.value,"page-is-ready":_(C),onModeChange:se},null,8,[`lenis`,`target-hover`,`mouse`,`win`,`page-is-ready`]),_(l)?(o(),x(`div`,{key:1,style:r(_(E)?void 0:`visibility: hidden`)},[g(a,{block:_(l).header[0],lenis:_(m),mode:_(j),onSwitchMode:t[0]||=e=>_(A)?.toggleMode()},null,8,[`block`,`lenis`,`mode`]),w(`main`,null,[g(Nx,{"page-is-ready":_(S),block:_(l).hero[0],audios:_(l).hero_embed_audios,"mobile-links":_(l).header[0]?.socials,onScrollTo:W,onIntroReady:t[1]||=e=>E.value=!0},null,8,[`page-is-ready`,`block`,`audios`,`mobile-links`]),g(s,{text:_(l).about_text},null,8,[`text`]),g(c,{block:_(l).confidential[0],"hidden-items":_(l).confidential_hidden},null,8,[`block`,`hidden-items`]),g(u,{mouse:_(f).mouse,block:_(l).about_secondary[0]},null,8,[`mouse`,`block`]),g(d,{projects:_(l).projects,title:_(l).title},null,8,[`projects`,`title`])]),g(h,{block:_(l).footer[0],onScrollTo:W},null,8,[`block`])],4)):y(``,!0)])}}});export{_C as default};