(function(_ds){var window=this;var RS=function(a){return(0,_ds.N)('<div class="devsite-popout" id="'+_ds.P(a.id)+'"><div class="devsite-popout-result devsite-suggest-results-container" devsite-hide></div></div>')},SS=function(a){let b='<button type="submit" class="button button-white devsite-search-project-scope">';a="All results in "+_ds.O(a);return(0,_ds.N)(b+a+"</button>")},TS=function(a,b,c){let d='<button type="submit" class="button button-white devsite-suggest-all-results">';b?(a="All results across "+_ds.O(c),d+=a):(a='All results for "'+
_ds.O(a)+'"',d+=a);return(0,_ds.N)(d+"</button>")},US=function(a,b,c,d,e,f,g,h){a=(c?"":'<devsite-analytics-scope action="'+_ds.P(_ds.S("Restricted "+d))+'">')+'<a class="devsite-result-item-link" href="'+_ds.P(_ds.S(a))+'"><span class="devsite-suggestion-fragment">'+_ds.O(b)+"</span>"+(h?'<span class="devsite-suggestion-fragment">'+_ds.O(h)+"</span>":"")+(e?'<span class="devsite-suggestion-fragment">'+_ds.O(e)+"</span>":"")+(_ds.Cw(f)&&!g?'<span class="devsite-suggestion-fragment">'+_ds.O(f)+"</span>":
"");c||(a+='<span class="devsite-result-item-confidential">Confidential</span>');return(0,_ds.N)(a+("</a>"+(c?"":"</devsite-analytics-scope>")))},VS=function(a){var b=a.projectName,c=a.Rj,d=a.query,e=a.Wj;a=a.zf;b='<div class="devsite-suggest-wrapper '+(e?"":"devsite-search-disabled")+'"><div class="devsite-suggest-section"><div class="devsite-result-label">There are no suggestions for your query</div></div>'+((e?'<div class="devsite-suggest-footer">'+(c?SS(b):"")+TS(d,c,a)+"</div>":"")+"</div>");
return(0,_ds.N)(b)},WS=function(a){var b=a.Jn,c=a.On,d=a.Vn,e=a.projectName,f=a.Rj,g=a.query,h=a.Zn,k=a.Wj;a=a.zf;let l='<div class="devsite-suggest-wrapper '+(k?"":"devsite-search-disabled")+'" tabindex="0" role="list"><div class="devsite-suggest-section">';if(0<d.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-partial-query" role="heading" aria-level="2">Suggested searches'+((f?'<span class="devsite-suggest-project">'+
_ds.O(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-partial-query" action="Query Suggestion Click">');var m=d.length;for(var p=0;p<m;p++){var t=d[p];l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-partial-query-'+_ds.P(p)+'" role="listitem" index=":'+_ds.P(p)+'">'+US(t.Ta(),t.Ha(),_ds.qe(t,14),"Query Suggestion Click")+"</div>"}l+="</devsite-analytics-scope></div>"}l+=0<d.length&&
0<b.length?'<hr role="none">':"";if(0<b.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-product" role="heading" aria-level="2">Pages'+((f?'<span class="devsite-suggest-project">'+_ds.O(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-product" action="Page Suggestion Click">');m=b.length;for(p=0;p<m;p++)t=b[p],l+=
'<div class="devsite-result-item devsite-nav-label" id="suggestion-product-'+_ds.P(p)+'" role="listitem" index=":'+_ds.P(p)+'">'+US(t.Ta(),t.Ha(),_ds.qe(t,14),"Page Suggestion Click",void 0,_ds.x(t,4),f)+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<h.length&&0<b.length+d.length?'<hr role="none">':"";if(0<h.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-reference" role="heading" aria-level="2">Reference'+((f?
'<span class="devsite-suggest-project">'+_ds.O(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-reference" action="Reference Suggestion Click">');m=h.length;for(p=0;p<m;p++)t=h[p],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-reference-'+_ds.P(p)+'" role="listitem" index=":'+_ds.P(p)+'">'+US(t.Ta(),t.Ha(),_ds.qe(t,14),"Reference Suggestion Click",_ds.x(t,3),_ds.x(t,4),f,_ds.oe(t,
10)[0])+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<c.length&&0<b.length+d.length+h.length?'<hr role="none">':"";if(0<c.length){l+='<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-other-products" role="heading" aria-level="2"><span role="columnheader">Products</span></div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-other-products" action="Product Suggestion Click">';
b=c.length;for(d=0;d<b;d++)h=c[d],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-other-products-'+_ds.P(d)+'" role="listitem" index=":'+_ds.P(d)+'">'+US(h.Ta(),h.Ha(),_ds.qe(h,14),"Product Suggestion Click")+"</div>";l+="</devsite-analytics-scope></div>"}l+="</div>"+(k?'<div class="devsite-suggest-footer">'+(f?SS(e):"")+TS(g,f,a)+"</div>":"")+"</div>";return(0,_ds.N)(l)};var XS=/[ .()<>{}\[\]\/:,]+/,YS=0,dT=function(a){a.h&&(a.j.listen(a.h,"suggest-service-search",b=>{a:{var c=a.C.querySelector(".highlight");if(c&&(c=c.querySelector(".devsite-result-item-link"))){c.click();break a}ZS(a,b.detail.originalEvent,!!a.F)}}),a.j.listen(a.h,"suggest-service-suggestions-received",b=>void $S(a,b)),a.j.listen(a.h,"suggest-service-focus",()=>{aT(a,"cloud-track-search-focus",null);a.L=!0;bT(a,!0)}),a.j.listen(a.h,"suggest-service-blur",()=>{bT(a,!1)}),a.j.listen(a.h,"suggest-service-input",
()=>{!a.H["Text Entered Into Search Bar"]&&a.h.query.trim()&&(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Text Entered Into Search Bar"},bubbles:!0})),a.H["Text Entered Into Search Bar"]=!0);a.L&&(aT(a,"cloud-track-search-input",null),a.L=!1)}),a.j.listen(a.h,"suggest-service-navigate",b=>void cT(a,b)),a.j.listen(document.body,"devsite-page-changed",()=>a.H={}),DevsiteApp.hasFlagAccess(168)&&a.C&&a.j.listen(a.C,
"click",b=>{b.target&&"A"===b.target.nodeName&&aT(a,"cloud-track-run-dlp",`Result: ${b.target.textContent}, Query: ${a.D.value}`)}),_ds.Rx(a.h));a.v&&a.j.listen(a.v,"submit",b=>{ZS(a,b)});a.C&&a.j.listen(a.C,"click",b=>{const c=b.target;var d=c.closest(".devsite-result-item-link");d&&(bT(a,!1),d=`suggestion: ${d.getAttribute("href")}`,aT(a,"cloud-track-search-submit",d));c.classList.contains("devsite-search-project-scope")&&ZS(a,b,!0)});a.R&&a.j.listen(a.R,"click",()=>void bT(a,!0));a.M&&a.j.listen(a.M,
"click",()=>void bT(a,!1))},$S=function(a,b){a.J=null;b=b.detail;var c=b.suggestions;const d=b.query;if(a.h.query.toLowerCase().startsWith(d.toLowerCase()))if(c){var e=c.wc();0<e.length&&(b=e.filter(t=>t.Ha().includes(d)),0<b.length&&(a.J=b[0].Ha()));b=e.filter(t=>2===t.md());c=e.filter(t=>3===t.md());var f=e.filter(t=>4===t.md()).slice(0,5),g=e.filter(t=>1===t.md());e=b.length+f.length+g.length;for(var h of f)h.ke(_ds.Qi(`${a.F||"/s/results"}/?q=${h.Ha()}`).toString());var k=d.split(XS);c.forEach(t=>
_ds.jw(t,_ds.oe(t,10).filter(v=>k.some(w=>v.includes(w)))));h=a.getAttribute("project-name")||"";var l=a.hasAttribute("project-scope"),m=a.hasAttribute("enable-search"),p=a.getAttribute("tenant-name")||"";b={Jn:b,projectName:h,Rj:l,On:g,Vn:f,query:d,Zn:c,Wj:m,zf:p};0===e?_ds.J(a.G,VS,b):(_ds.J(a.G,WS,b),eT(a,d));a.setAttribute("aria-expanded","true");a.G.removeAttribute("hidden")}else a.G.setAttribute("hidden",""),a.setAttribute("aria-expanded","false")},aT=function(a,b,c){a.dispatchEvent(new CustomEvent(b,
{detail:{type:"search",name:b,position:"nav",metadata:{eventDetail:c}},bubbles:!0}))},bT=function(a,b){if(a.N!==b){_ds.Nx(a.h,b);if(a.N=b)a.setAttribute("search-active","");else{let c=a.C.querySelector(".highlight");c&&c.classList.remove("highlight");a.removeAttribute("search-active");a.setAttribute("aria-expanded","false");_ds.Fh(a.G)}a.hasAttribute("capture")||a.dispatchEvent(new CustomEvent("devsite-search-toggle",{detail:{active:b},bubbles:!0}))}},cT=function(a,b){var c=b.detail;b=a.G.querySelector(".highlight");
let d;const e=Array.from(a.G.querySelectorAll(".devsite-result-item"));let f=[];let g,h=-1;if(b){var k=_ds.Xh(b,l=>l.classList.contains("devsite-suggest-section"));f=Array.from(k.querySelectorAll(".devsite-result-item"));k=_ds.Lh(b.parentNode.parentNode);g=_ds.Mh(b.parentNode.parentNode);h=e.indexOf(b)}switch(c.keyCode){case 37:if(!k&&!g)return;b&&(c=b.getAttribute("index"),g?(d=g.querySelector('[index="'+c+'"]'))||(d=_ds.ya(Array.from(g.querySelectorAll("[index]")))):k&&((d=k.querySelector('[index="'+
c+'"]'))||(d=_ds.ya(Array.from(k.querySelectorAll("[index]"))))));break;case 39:if(!k&&!g)return;b&&(c=b.getAttribute("index"),k?(d=k.querySelector('[index="'+c+'"]'))||(d=_ds.ya(Array.from(k.querySelectorAll("[index]")))):g&&((d=g.querySelector('[index="'+c+'"]'))||(d=_ds.ya(Array.from(g.querySelectorAll("[index]"))))));break;case 38:b?(d=e[h-1])||(d=_ds.ya(f)):d=_ds.ya(e);break;case 40:b?(d=e[h+1])||(d=f[0]):d=e[0]}b&&(b.classList.remove("highlight"),b.removeAttribute("aria-selected"));d&&(a.D.setAttribute("aria-activedescendant",
d.id),d.setAttribute("aria-selected","true"),d.classList.add("highlight"),d.scrollIntoViewIfNeeded&&d.scrollIntoViewIfNeeded()||d.scrollIntoView())},ZS=async function(a,b,c=!1){b.preventDefault();b.stopPropagation();a.hasAttribute("enable-search")&&(a.H["Full Site Search"]||(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Full Site Search"},bubbles:!0})),a.H["Full Site Search"]=!0),DevsiteApp.hasFlagAccess(168)&&aT(a,
"cloud-track-run-dlp",a.D.value),aT(a,"cloud-track-search-submit",a.J?`contains: ${a.J}`:"no match"),b=c&&a.F?_ds.Qi(a.F):_ds.Qi(a.v.getAttribute("action")),c=new _ds.ki(b.href),_ds.xi(c,"q",a.h.query),b.search=c.h.toString(),await DevsiteApp.fetchPage(b.href,!a.hasAttribute("disable-history")),bT(a,!1))},eT=function(a,b){b=new RegExp(`(${_ds.kh(b)})`,"ig");a=a.G.querySelectorAll(".devsite-suggestion-fragment");for(const c of a)a=c.innerHTML,a=a.replace(b,"<b>$1</b>"),_ds.wc(c,_ds.zg(a))},fT=class extends _ds.A{static get observedAttributes(){return["project-scope",
"url-scoped","disabled"]}constructor(){super();this.N=!1;this.H={};this.K="";this.F=null;this.j=new _ds.E;this.h=null;this.L=!1}disconnectedCallback(){_ds.F(this.j);this.h&&(this.h.dispose(),this.h=null)}attributeChangedCallback(a,b,c){switch(a){case "project-scope":this.K=c||"";this.h&&(this.h.M=this.K);break;case "url-scoped":this.F=c;break;case "disabled":this.D&&(this.D.disabled=null!==c)}}connectedCallback(){if(this.v=this.querySelector("form")){this.D=this.v.querySelector(".devsite-search-query");
this.R=this.v.querySelector(".devsite-search-button[search-open]");this.M=this.querySelector(".devsite-search-button[search-close]");var a=`devsite-search-popout-container-id-${++YS}`;this.D.setAttribute("aria-controls",a);this.C=_ds.L(RS,{id:a});this.G=this.C.querySelector(".devsite-suggest-results-container");this.v.appendChild(this.C);this.hasAttribute("project-scope")&&(this.K=this.getAttribute("project-scope"));this.hasAttribute("url-scoped")&&(this.F=this.getAttribute("url-scoped"));this.v&&
this.D&&(this.h=new _ds.Sx(this,this.v,this.D),this.h.o=!0,this.h.V=this.hasAttribute("enable-query-completion"),this.h.J=!0,this.h.T=!0,this.h.W=!0,this.h.M=this.K,this.h.o=this.hasAttribute("enable-suggestions"));dT(this)}}};fT.prototype.connectedCallback=fT.prototype.connectedCallback;fT.prototype.attributeChangedCallback=fT.prototype.attributeChangedCallback;fT.prototype.disconnectedCallback=fT.prototype.disconnectedCallback;try{window.customElements.define("devsite-search",fT)}catch(a){console.warn("devsite.app.customElement.DevsiteSearch",a)};})(_ds_www);
