(function(_ds){var window=this;var cQ,dQ=function(){return"devsite-notification"},eQ=function(a){a.dispatchEvent(new CustomEvent("devsite-hide-notification-snackbar-msg",{bubbles:!0}))},fQ=class extends _ds.A{constructor(){super(["devsite-snackbar"])}async connectedCallback(){await window.customElements.whenDefined("devsite-snackbar");const a=this.getAttribute("link"),b=this.getAttribute("link-text"),c=this.getAttribute("message");a!==cQ&&(!a&&cQ?(cQ="",eQ(this)):a&&c&&(cQ&&eQ(this),cQ=a,this.dispatchEvent(new CustomEvent("devsite-show-notification-snackbar-msg",
{detail:{href:a,linkText:b,msg:c,hidePrevious:"true"},bubbles:!0}))))}};fQ.prototype.connectedCallback=fQ.prototype.connectedCallback;fQ.getTagName=dQ;try{window.customElements.define(dQ(),fQ)}catch(a){console.warn("devsite.app.customElement.DevsiteNotification",a)};})(_ds_www);