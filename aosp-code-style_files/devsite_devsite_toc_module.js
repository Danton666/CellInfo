(function(_ds){var window=this;var fW=function(a){var b=a.Lo,c=a.Ub,d=a.mm;a=a.hn;let e;e='<ul class="devsite-nav-list"><li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle" role="heading" aria-level="2"><span class="devsite-nav-title"><span class="devsite-nav-text">On this page</span></span>';c&&(e=e+'<button type="button" title="'+_ds.Lw("Expand/collapse contents"),e+='" class="devsite-nav-show-all button-transparent material-icons"></button>');e+="</li>";const f=b.length;for(let h=0;h<f;h++){var g=b[h];e+='<li class="devsite-nav-item"'+
(c&&g.index<a?" visible":"")+'><a href="#'+_ds.P(g.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.P(h)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.P(h)+'" track-metadata-link-destination="#'+_ds.P(g.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.O(g.text)+"</span></a>";if(_ds.Aw(g.children).length){e+='<ul class="devsite-nav-list">';
g=g.children;const k=g.length;for(let l=0;l<k;l++){const m=g[l];e+='<li class="devsite-nav-item"'+(c&&m.index<a?" visible":"")+'><a href="#'+_ds.P(m.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.P(h)+"."+_ds.P(l)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.P(h)+"."+_ds.P(l)+'" track-metadata-link-destination="#'+
_ds.P(m.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.O(m.text)+"</span></a></li>"}e+="</ul>"}e+="</li>"}d&&(e=c?e+'<li class="devsite-nav-item devsite-apix-link"><a href="#try-it" class="devsite-nav-title"><span class="devsite-nav-text" tooltip>Try it</span></a></li>':e+'<button type="button" class="devsite-show-apix button-primary">Try it!</button>');c&&(e=e+'<li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" track-type="navigation" track-name="embeddedNavExpand" title="'+
_ds.Lw("Expand/collapse contents"),e+='"></button></li>');return(0,_ds.N)(e+"</ul>")};var hW=function(a){if(!a.hasAttribute("disabled")){var b=document.querySelector("devsite-content .devsite-article-body");b?(a.Ub?a.classList.add("devsite-toc-embedded"):a.classList.add("devsite-toc"),gW(a,b),a.F=!0):a.Ia()}},jW=async function(a){await iW(a);if(a.h){var b=`#${a.h.id}`,c=encodeURI(b);b=a.G.get(b)||a.G.get(c);a.v!==b&&(a.v&&a.v.classList.remove("devsite-nav-active"),b&&(b.classList.add("devsite-nav-active"),a.v=b))}},kW=function(a){a.Ub||a.eventHandler.listen(document.body,"devsite-content-updated devsite-element-hidden devsite-element-visible devsite-page-loaded devsite-sticky-resize devsite-sticky-scroll".split(" "),
()=>{a.L.h()});a.eventHandler.listen(document.body,"devsite-content-updated",()=>{hW(a)})},lW=async function(a){if("IntersectionObserver"in _ds.Ah()){a.C&&a.C.disconnect();var b=document.querySelector("devsite-header");let c=152;b&&(await window.customElements.whenDefined("devsite-header"),(b=Number(b.getAttribute("top-row--height"))+Number(b.getAttribute("bottom-row--height")))&&(c=b));a.C=new IntersectionObserver(d=>{for(const e of d)e.isIntersecting?a.D.add(e.target):a.D.delete(e.target);a.L.h()},
{rootMargin:`${c}px 0px 0px 0px`,threshold:[0,1]})}a.J.h()},iW=async function(a){let b=0;var c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),b=c.C());c=a.j.findIndex(e=>a.D.has(e)&&e.getBoundingClientRect().top>=b);const d=a.j[c];if(d){const e=await mW();d.getBoundingClientRect().top-b>e&&0<c?a.h=a.j[c-1]:a.h=d}else a.h&&a.h.getBoundingClientRect().top>window.innerHeight&&(c=a.j.indexOf(a.h),0<c&&(a.h=a.j[c-1]))},gW=function(a,b){const c=[];
let d=!1,e="";switch(a.getAttribute("depth")){case "1":e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents)";break;default:e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)"}a.j=[...b.querySelectorAll(e)].filter(f=>f.id&&f.dataset.text).filter(f=>nW(f));for(const [f,g]of a.j.entries())b=g,b={id:b.id,level:b.tagName.toLowerCase(),text:b.dataset.text,children:[],index:f},"h2"===b.level?(c.push(b),d=!0):d?c[c.length-
1].children.push(b):c.push(b);_ds.Ua(a.H,c,a.K.bind(a))&&a.F||(c.length?(oW(a,c),a.show(),a.Ub||pW(a)):a.Ia(),a.H=c)},nW=function(a){return _ds.hj.find(b=>!!_ds.Yh(a,null,b,6))||_ds.Yh(a,"devsite-selector",null,6)||_ds.Yh(a,null,"devsite-dialog",3)?!1:!0},oW=function(a,b){const c=_ds.L(fW,{Lo:b,Ub:a.Ub,mm:!!document.body.querySelector("devsite-apix, .devsite-apix"),hn:8>b.length?8:5});b=c.querySelectorAll("a.devsite-nav-title");for(const d of b){b=d;const e=b.hash,f=encodeURI(b.hash);a.G.set(e,b);
a.G.set(f,b)}_ds.Fh(a);a.Ub&&_ds.y(a,"hidden","",c);a.appendChild(c);if(a.Ub){if(8<a.getElementsByClassName("devsite-nav-item").length){for(const d of a.querySelectorAll(".devsite-nav-show-all, .devsite-nav-more-items"))a.eventHandler.listen(d,"click",()=>{a.hasAttribute("expanded")?a.removeAttribute("expanded"):_ds.y(a,"expanded","")});_ds.y(a,"expandable","")}else a.removeAttribute("expandable");setTimeout(()=>{c.removeAttribute("hidden")},0)}},pW=async function(a){await a.J.promise;if(a.C){a.C.disconnect();
a.D.clear();a.v&&a.v.classList.remove("devsite-nav-active");a.v=null;for(const b of a.j)a.C.observe(b)}},mW=async function(){let a=0,b=0;const c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),a=c.C(),b=c.J());return Math.max(b-a,Math.floor((window.innerHeight-a)/5))},qW=class extends _ds.A{constructor(){super();this.eventHandler=new _ds.E;this.J=new _ds.nk;this.D=new Set;this.G=new Map;this.N=new _ds.hk(()=>void hW(this),16);this.L=new _ds.hk(()=>
void jW(this),33);this.h=this.v=null;this.j=[];this.F=!1;this.C=null;this.Ub=!1;this.H=[];_ds.Gg(this,(0,_ds.r)`disabled`,(0,_ds.r)`has-sidebar`,(0,_ds.r)`hidden`,(0,_ds.r)`expandable`,(0,_ds.r)`expanded`,(0,_ds.r)`visible`)}static get observedAttributes(){return["max-height","offset"]}connectedCallback(){this.Ub=this.hasAttribute("devsite-toc-embedded");hW(this);kW(this)}disconnectedCallback(){this.Ia();this.F=!1;_ds.F(this.eventHandler)}sf(a){a=a&&"false"===a.toLowerCase();this.H=[];_ds.Fh(this);
a?(_ds.y(this,"disabled",""),this.Ia()):(this.removeAttribute("disabled"),this.show(),this.N.h())}Ia(){_ds.Fh(this);this.dispatchEvent(new CustomEvent("devsite-element-hidden",{bubbles:!0}));this.removeAttribute("visible");_ds.y(this,"hidden","");if(!this.Ub){const a=document.querySelector(".devsite-main-content");a&&a.removeAttribute("has-sidebar")}}show(){this.dispatchEvent(new CustomEvent("devsite-element-visible",{bubbles:!0}));this.removeAttribute("hidden");_ds.y(this,"visible","");if(!this.Ub){const a=
document.querySelector(".devsite-main-content");a&&_ds.y(this,"has-sidebar","",a);lW(this)}}K(a,b){let c=!0;if(a.children.length||b.children.length)c=_ds.Ua(a.children,b.children,this.K.bind(this));return c&&a.id===b.id&&a.text===b.text}};qW.prototype.renderUpdatedContent=qW.prototype.sf;qW.prototype.disconnectedCallback=qW.prototype.disconnectedCallback;qW.prototype.connectedCallback=qW.prototype.connectedCallback;try{window.customElements.define("devsite-toc",qW)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteToc",a)};})(_ds_www);
