(()=>{"use strict";const e=class{constructor(e,t,s){this.element=document.createElement(t),this.element.className=s,e.append(this.element)}destroy(){this.node.remove()}};class t extends e{constructor(t){super(t,"div","header"),this.titlle=new e(this.element,"h1","titlle"),this.titlle.element.textContent="Virtual Keyboard",this.subtitlle=new e(this.element,"h2","subtitlle"),this.subtitlle.element.textContent="Windows",this.subtitlle_second=new e(this.element,"h2","subtitlle_second"),this.subtitlle_second.element.textContent="Change launguages"}}class s extends e{constructor(e){super(e,"textarea","textarea__content")}}window.onload=()=>{new t(document.body),new s(document.body)}})();