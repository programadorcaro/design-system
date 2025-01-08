import{j as R}from"./jsx-runtime-z8MfsBtr.js";var ue=Object.defineProperty,W=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&te(e,r,t[r]);if(W)for(var r of W(t))se.call(t,r)&&te(e,r,t[r]);return e},T=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&W)for(var n of W(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function ge(e,{insertAt:t}={}){if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}ge(`@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
*,
::before,
::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
.m-0 {
  margin: 0px;
}
.box-border {
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.h-10 {
  height: 2.5rem;
}
.h-12 {
  height: 3rem;
}
.h-14 {
  height: 3.5rem;
}
.h-16 {
  height: 4rem;
}
.w-full {
  width: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.gap-2 {
  gap: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
}
.p-4 {
  padding: 1rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.text-center {
  text-align: center;
}
.font-default {
  font-family: Poppins, sans-serif;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}
.text-8xl {
  font-size: 6rem;
  line-height: 1;
}
.text-9xl {
  font-size: 8rem;
  line-height: 1;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-medium {
  font-weight: 500;
}
.leading-tight {
  line-height: 1.25;
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.placeholder\\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.placeholder\\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:
    var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity, 1)) ;
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px ;
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}
`);function ae(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ae(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function be(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ae(e))&&(n&&(n+=" "),n+=t);return n}var J="-",fe=e=>{const t=he(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:l=>{const a=l.split(J);return a[0]===""&&a.length!==1&&a.shift(),ie(a,t)||me(l)},getConflictingClassGroupIds:(l,a)=>{const u=r[l]||[];return a&&n[l]?[...u,...n[l]]:u}}},ie=(e,t)=>{var r;if(e.length===0)return t.classGroupId;const n=e[0],s=t.nextPart.get(n),o=s?ie(e.slice(1),s):void 0;if(o)return o;if(t.validators.length===0)return;const l=e.join(J);return(r=t.validators.find(({validator:a})=>a(l)))==null?void 0:r.classGroupId},re=/^\[(.+)\]$/,me=e=>{if(re.test(e)){const t=re.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},he=e=>{const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return we(Object.entries(e.classGroups),r).forEach(([o,l])=>{q(l,n,o,t)}),n},q=(e,t,r,n)=>{e.forEach(s=>{if(typeof s=="string"){const o=s===""?t:ne(t,s);o.classGroupId=r;return}if(typeof s=="function"){if(xe(s)){q(s(n),t,r,n);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([o,l])=>{q(l,ne(t,o),r,n)})})},ne=(e,t)=>{let r=e;return t.split(J).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},xe=e=>e.isThemeGetter,we=(e,t)=>t?e.map(([r,n])=>{const s=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([l,a])=>[t+l,a])):o);return[r,s]}):e,ye=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const s=(o,l)=>{r.set(o,l),t++,t>e&&(t=0,n=r,r=new Map)};return{get(o){let l=r.get(o);if(l!==void 0)return l;if((l=n.get(o))!==void 0)return s(o,l),l},set(o,l){r.has(o)?r.set(o,l):s(o,l)}}},le="!",ve=e=>{const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,s=t[0],o=t.length,l=a=>{const u=[];let b=0,m=0,x;for(let p=0;p<a.length;p++){let f=a[p];if(b===0){if(f===s&&(n||a.slice(p,p+o)===t)){u.push(a.slice(m,p)),m=p+o;continue}if(f==="/"){x=p;continue}}f==="["?b++:f==="]"&&b--}const w=u.length===0?a:a.substring(m),v=w.startsWith(le),y=v?w.substring(1):w,g=x&&x>m?x-m:void 0;return{modifiers:u,hasImportantModifier:v,baseClassName:y,maybePostfixModifierPosition:g}};return r?a=>r({className:a,parseClassName:l}):l},ke=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t},ze=e=>P({cache:ye(e.cacheSize),parseClassName:ve(e)},fe(e)),Ce=/\s+/,Ne=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:s}=t,o=[],l=e.trim().split(Ce);let a="";for(let u=l.length-1;u>=0;u-=1){const b=l[u],{modifiers:m,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:v}=r(b);let y=!!v,g=n(y?w.substring(0,v):w);if(!g){if(!y){a=b+(a.length>0?" "+a:a);continue}if(g=n(w),!g){a=b+(a.length>0?" "+a:a);continue}y=!1}const p=ke(m).join(":"),f=x?p+le:p,h=f+g;if(o.includes(h))continue;o.push(h);const M=s(g,y);for(let S=0;S<M.length;++S){const O=M[S];o.push(f+O)}a=b+(a.length>0?" "+a:a)}return a};function Se(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ce(t))&&(n&&(n+=" "),n+=r);return n}var ce=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=ce(e[n]))&&(r&&(r+=" "),r+=t);return r};function Ae(e,...t){let r,n,s,o=l;function l(u){const b=t.reduce((m,x)=>x(m),e());return r=ze(b),n=r.cache.get,s=r.cache.set,o=a,a(u)}function a(u){const b=n(u);if(b)return b;const m=Ne(u,r);return s(u,m),m}return function(){return o(Se.apply(null,arguments))}}var c=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},de=/^\[(?:([a-z-]+):)?(.+)\]$/i,Pe=/^\d+\/\d+$/,je=new Set(["px","full","screen"]),Me=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_e=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ge=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ie=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Re=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>A(e)||je.has(e)||Pe.test(e),C=e=>j(e,"length",$e),A=e=>!!e&&!Number.isNaN(Number(e)),H=e=>j(e,"number",A),G=e=>!!e&&Number.isInteger(Number(e)),Te=e=>e.endsWith("%")&&A(e.slice(0,-1)),i=e=>de.test(e),N=e=>Me.test(e),Ee=new Set(["length","size","percentage"]),Oe=e=>j(e,Ee,pe),Be=e=>j(e,"position",pe),Le=new Set(["image","url"]),We=e=>j(e,Le,Fe),Ve=e=>j(e,"",Ue),I=()=>!0,j=(e,t,r)=>{const n=de.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1},$e=e=>_e.test(e)&&!Ge.test(e),pe=()=>!1,Ue=e=>Ie.test(e),Fe=e=>Re.test(e),He=()=>{const e=c("colors"),t=c("spacing"),r=c("blur"),n=c("brightness"),s=c("borderColor"),o=c("borderRadius"),l=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),b=c("grayscale"),m=c("hueRotate"),x=c("invert"),w=c("gap"),v=c("gradientColorStops"),y=c("gradientColorStopPositions"),g=c("inset"),p=c("margin"),f=c("opacity"),h=c("padding"),M=c("saturate"),S=c("scale"),O=c("sepia"),X=c("skew"),Z=c("space"),K=c("translate"),V=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",i,t],d=()=>[i,t],Q=()=>["",z,C],B=()=>["auto",A,i],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],_=()=>["","0",i],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[A,i];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[z,C],blur:["none","",N,i],brightness:k(),borderColor:[e],borderRadius:["none","","full",N,i],borderSpacing:d(),borderWidth:Q(),contrast:k(),grayscale:_(),hueRotate:k(),invert:_(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Te,C],inset:U(),margin:U(),opacity:k(),padding:d(),saturate:k(),scale:k(),sepia:_(),skew:k(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),i]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,i]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:_()}],shrink:[{shrink:_()}],order:[{order:["first","last","none",G,i]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",G,i]},i]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[G,i]},i]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,t]}],"min-w":[{"min-w":[i,t,"min","max","fit"]}],"max-w":[{"max-w":[i,t,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[i,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,t,"auto","min","max","fit"]}],"font-size":[{text:["base",N,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",H]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",A,H]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,C]}],"underline-offset":[{"underline-offset":["auto",z,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Be]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Oe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},We]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...L(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...L()]}],"outline-offset":[{"outline-offset":[z,i]}],"outline-w":[{outline:[z,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[z,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,Ve]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",N,i]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[x]}],saturate:[{saturate:[M]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[G,i]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,C,H]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},qe=Ae(He);function E(...e){return qe(be(e))}function Je(e){var t=e,{className:r}=t,n=T(t,["className"]);return R.jsx("div",P({className:E("p-4 rounded-md bg-black font-default",r)},n))}Je.displayName="Box";var Xe={sm:"px-4 py-2 h-10 text-sm",md:"px-5 py-3 h-12 text-md",lg:"px-6 py-4 h-14 text-lg",xl:"px-8 py-5 h-16 text-xl"};function Ze(e){var t=e,{size:r="sm",className:n}=t,s=T(t,["size","className"]);return R.jsx("button",P({className:E("font-default font-medium text-center box-border rounded-sm","flex items-center justify-center gap-2 cursor-pointer",Xe[r],n)},s))}Ze.displayName="Button";var Ke={sm:"text-xl",md:"text-2xl",lg:"text-4xl",xl:"text-5xl","2xl":"text-6xl","3xl":"text-7xl","4xl":"text-8xl","5xl":"text-9xl"};function Qe(e){var t=e,{size:r="md",className:n}=t,s=T(t,["size","className"]);return R.jsx("h2",P({className:E("font-default leading-tight m-0 text-gray-300",Ke[r],n)},s))}Qe.displayName="Heading";var Ye={sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-md",lg:"px-5 py-4 text-lg"};function De(e){var t=e,{inputSize:r="md",className:n}=t,s=T(t,["inputSize","className"]);return R.jsx("input",P({className:E("font-default box-border w-full rounded-sm","bg-gray-900 text-white","placeholder:text-gray-400","focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50",Ye[r],n)},s))}De.displayName="TextInput";var et={xxs:"text-xxs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"};function tt(e){var t=e,{size:r="md",className:n}=t,s=T(t,["size","className"]);return R.jsx("p",P({className:E("font-default leading-base m-0 text-gray-300",et[r],n)},s))}tt.displayName="Text";export{Je as B,Qe as H,tt as T,Ze as a,De as b};
//# sourceMappingURL=index-CH4_7Rdw.js.map
