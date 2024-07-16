import{s as et,c as xt,e as ht,u as Ct,g as bt,d as jt,n as L}from"../chunks/scheduler.DjT35H2x.js";import{S as st,i as nt,g as f,s as g,h,j as R,c as x,f as p,k as a,l as tt,a as M,y as n,d as E,t as A,m as U,n as J,r as V,u as O,v as q,w as G,x as w,z as It}from"../chunks/index.DUMvvLKj.js";import{b as wt}from"../chunks/paths.Cb3YCwQ4.js";const Tt=u=>({}),St=u=>({}),Mt=u=>({}),kt=u=>({});function Pt(u){let t;return{c(){t=U("Title Slot")},l(s){t=J(s,"Title Slot")},m(s,e){M(s,t,e)},d(s){s&&p(t)}}}function Et(u){let t;return{c(){t=U("More Info")},l(s){t=J(s,"More Info")},m(s,e){M(s,t,e)},d(s){s&&p(t)}}}function At(u){let t,s,e,l,r,o,i,T,_,z,$;const H=u[3].title,I=xt(H,u,u[2],kt),S=I||Pt(),C=u[3].info,P=xt(C,u,u[2],St),v=P||Et();return{c(){t=f("div"),s=f("a"),e=f("img"),r=g(),o=f("div"),i=f("h3"),S&&S.c(),T=g(),_=f("p"),v&&v.c(),this.h()},l(m){t=h(m,"DIV",{class:!0,style:!0});var b=R(t);s=h(b,"A",{href:!0,class:!0});var j=R(s);e=h(j,"IMG",{src:!0,alt:!0,style:!0,class:!0}),r=x(j),o=h(j,"DIV",{class:!0});var D=R(o);i=h(D,"H3",{class:!0});var N=R(i);S&&S.l(N),N.forEach(p),T=x(D),_=h(D,"P",{class:!0});var d=R(_);v&&v.l(d),d.forEach(p),D.forEach(p),j.forEach(p),b.forEach(p),this.h()},h(){ht(e.src,l=u[0])||a(e,"src",l),a(e,"alt","alt"),tt(e,"--radius",yt),a(e,"class","svelte-7pzoy6"),a(i,"class","svelte-7pzoy6"),a(_,"class","svelte-7pzoy6"),a(o,"class","inner svelte-7pzoy6"),a(s,"href",z=wt+"/"+u[1]),a(s,"class","svelte-7pzoy6"),a(t,"class","outer svelte-7pzoy6"),tt(t,"--radius",yt),tt(t,"--width",Lt),tt(t,"--transition-time",zt)},m(m,b){M(m,t,b),n(t,s),n(s,e),n(s,r),n(s,o),n(o,i),S&&S.m(i,null),n(o,T),n(o,_),v&&v.m(_,null),$=!0},p(m,[b]){(!$||b&1&&!ht(e.src,l=m[0]))&&a(e,"src",l),I&&I.p&&(!$||b&4)&&Ct(I,H,m,m[2],$?jt(H,m[2],b,Mt):bt(m[2]),kt),P&&P.p&&(!$||b&4)&&Ct(P,C,m,m[2],$?jt(C,m[2],b,Tt):bt(m[2]),St),(!$||b&2&&z!==(z=wt+"/"+m[1]))&&a(s,"href",z)},i(m){$||(E(S,m),E(v,m),$=!0)},o(m){A(S,m),A(v,m),$=!1},d(m){m&&p(t),S&&S.d(m),v&&v.d(m)}}}let yt="1em",Lt="15em",zt="0.25s";function Nt(u,t,s){let{$$slots:e={},$$scope:l}=t,{src:r}=t,{link:o}=t;return u.$$set=i=>{"src"in i&&s(0,r=i.src),"link"in i&&s(1,o=i.link),"$$scope"in i&&s(2,l=i.$$scope)},[r,o,l,e]}class Ht extends st{constructor(t){super(),nt(this,t,Nt,At,et,{src:0,link:1})}}const Bt=""+new URL("../assets/softbody.BkdSN88u.gif",import.meta.url).href,Dt=""+new URL("../assets/hilbert_curve.C5mdtMEf.gif",import.meta.url).href;function Rt(u){let t,s="Simulating Softbodies";return{c(){t=f("span"),t.textContent=s,this.h()},l(e){t=h(e,"SPAN",{slot:!0,"data-svelte-h":!0}),w(t)!=="svelte-1t6q8ia"&&(t.textContent=s),this.h()},h(){a(t,"slot","title")},m(e,l){M(e,t,l)},p:L,d(e){e&&p(t)}}}function Vt(u){let t,s="in Samarium";return{c(){t=f("span"),t.textContent=s,this.h()},l(e){t=h(e,"SPAN",{slot:!0,"data-svelte-h":!0}),w(t)!=="svelte-kodzrz"&&(t.textContent=s),this.h()},h(){a(t,"slot","info")},m(e,l){M(e,t,l)},p:L,d(e){e&&p(t)}}}function Ot(u){let t,s="Animating the Hilbert Curve";return{c(){t=f("span"),t.textContent=s,this.h()},l(e){t=h(e,"SPAN",{slot:!0,"data-svelte-h":!0}),w(t)!=="svelte-1z7517"&&(t.textContent=s),this.h()},h(){a(t,"slot","title")},m(e,l){M(e,t,l)},p:L,d(e){e&&p(t)}}}function qt(u){let t,s="in Samarium";return{c(){t=f("span"),t.textContent=s,this.h()},l(e){t=h(e,"SPAN",{slot:!0,"data-svelte-h":!0}),w(t)!=="svelte-kodzrz"&&(t.textContent=s),this.h()},h(){a(t,"slot","info")},m(e,l){M(e,t,l)},p:L,d(e){e&&p(t)}}}function Gt(u){let t,s,e,l,r;return s=new Ht({props:{src:Bt,link:"softbody",$$slots:{info:[Vt],title:[Rt]},$$scope:{ctx:u}}}),l=new Ht({props:{src:Dt,link:"hilbert_curve",$$slots:{info:[qt],title:[Ot]},$$scope:{ctx:u}}}),{c(){t=f("p"),V(s.$$.fragment),e=g(),V(l.$$.fragment),this.h()},l(o){t=h(o,"P",{class:!0});var i=R(t);O(s.$$.fragment,i),e=x(i),O(l.$$.fragment,i),i.forEach(p),this.h()},h(){a(t,"class","svelte-1w7sg0e")},m(o,i){M(o,t,i),q(s,t,null),n(t,e),q(l,t,null),r=!0},p(o,[i]){const T={};i&1&&(T.$$scope={dirty:i,ctx:o}),s.$set(T);const _={};i&1&&(_.$$scope={dirty:i,ctx:o}),l.$set(_)},i(o){r||(E(s.$$.fragment,o),E(l.$$.fragment,o),r=!0)},o(o){A(s.$$.fragment,o),A(l.$$.fragment,o),r=!1},d(o){o&&p(t),G(s),G(l)}}}class Ut extends st{constructor(t){super(),nt(this,t,null,Gt,et,{})}}function Jt(u){let t,s='<span id="text" class="svelte-1eo0mho">DOWNLOAD ⬇️</span>',e,l;return{c(){t=f("button"),t.innerHTML=s,this.h()},l(r){t=h(r,"BUTTON",{class:!0,"data-svelte-h":!0}),w(t)!=="svelte-hcr57x"&&(t.innerHTML=s),this.h()},h(){a(t,"class","svelte-1eo0mho")},m(r,o){M(r,t,o),e||(l=It(t,"click",Wt),e=!0)},p:L,i:L,o:L,d(r){r&&p(t),e=!1,l()}}}function Wt(){console.log("Printing document."),window.print()}class Yt extends st{constructor(t){super(),nt(this,t,null,Jt,et,{})}}const Kt=""+new URL("../assets/jai_photo.Dzt_AN3c.jpg",import.meta.url).href;function Ft(u){let t;return{c(){t=f("span"),this.h()},l(s){t=h(s,"SPAN",{style:!0}),R(t).forEach(p),this.h()},h(){tt(t,"display","none")},m(s,e){M(s,t,e)},p:L,i:L,o:L,d(s){s&&p(t)}}}class lt extends st{constructor(t){super(),nt(this,t,null,Ft,et,{})}}function Qt(u){let t,s,e,l,r,o,i,T,_,z,$,H,I,S,C,P,v,m,b,j,D='<a class="active" href="#home">Home</a> <br/> <a href="#projects">Projects</a> <br/> <a href="#skills">Skills</a> <br/> <a href="#edu">Education</a> <br/> <a href="#about">About</a>',N;return _=new lt({}),$=new lt({}),I=new lt({}),C=new lt({}),v=new lt({}),{c(){t=f("div"),s=f("img"),l=g(),r=f("div"),o=U(`📍 Mumbai, Maharashtra, India
        `),i=f("br"),T=U(`
        ✉️ jai`),V(_.$$.fragment),z=U("bellare"),V($.$$.fragment),H=U("[at]"),V(I.$$.fragment),S=U("gmail"),V(C.$$.fragment),P=U("[dot]"),V(v.$$.fragment),m=U("com"),b=g(),j=f("nav"),j.innerHTML=D,this.h()},l(d){t=h(d,"DIV",{class:!0});var B=R(t);s=h(B,"IMG",{src:!0,alt:!0,style:!0}),l=x(B),r=h(B,"DIV",{id:!0});var k=R(r);o=J(k,`📍 Mumbai, Maharashtra, India
        `),i=h(k,"BR",{}),T=J(k,`
        ✉️ jai`),O(_.$$.fragment,k),z=J(k,"bellare"),O($.$$.fragment,k),H=J(k,"[at]"),O(I.$$.fragment,k),S=J(k,"gmail"),O(C.$$.fragment,k),P=J(k,"[dot]"),O(v.$$.fragment,k),m=J(k,"com"),k.forEach(p),b=x(B),j=h(B,"NAV",{"data-svelte-h":!0}),w(j)!=="svelte-1oy7r35"&&(j.innerHTML=D),B.forEach(p),this.h()},h(){ht(s.src,e=Kt)||a(s,"src",e),a(s,"alt","Jai"),tt(s,"width","9vw"),tt(s,"height","9vw"),a(r,"id","info"),a(t,"class","sidebar svelte-1s2fyo6")},m(d,B){M(d,t,B),n(t,s),n(t,l),n(t,r),n(r,o),n(r,i),n(r,T),q(_,r,null),n(r,z),q($,r,null),n(r,H),q(I,r,null),n(r,S),q(C,r,null),n(r,P),q(v,r,null),n(r,m),n(t,b),n(t,j),N=!0},p:L,i(d){N||(E(_.$$.fragment,d),E($.$$.fragment,d),E(I.$$.fragment,d),E(C.$$.fragment,d),E(v.$$.fragment,d),N=!0)},o(d){A(_.$$.fragment,d),A($.$$.fragment,d),A(I.$$.fragment,d),A(C.$$.fragment,d),A(v.$$.fragment,d),N=!1},d(d){d&&p(t),G(_),G($),G(I),G(C),G(v)}}}class Xt extends st{constructor(t){super(),nt(this,t,null,Qt,et,{})}}function Zt(u){let t,s,e,l,r="Jai Bellare - Résumé",o,i,T,_,z="🎓 Excited to join BTech in Electrical Engineering at IIT-Bombay in July 2024 !",$,H,I="Projects",S,C,P,v,m="Skills",b,j,D="Click on each link to show I project I did.",N,d,B="Engineering Software",k,K,mt=`ANSYS
        <br class="svelte-jux52e"/>
        MATLAB/Scilab
        <br class="svelte-jux52e"/>
        LTSPICE
        <br class="svelte-jux52e"/>
        SOLIDWORKS`,rt,W,dt="Education",it,F,vt="IIT Bombay",ot,Q,_t="IITian's PACE",ct,X,pt="Bombay Scottish School, Mahim",ut,Y,$t="About this webpage",ft,Z,gt=`This site is made using <a href="https://svelte.dev/" class="svelte-jux52e">Svelte</a>, a javascript framework
        which prerenders pages for fast viewing, plus HTML and CSS of course.
        <br class="svelte-jux52e"/>
        The page is hosted on <a href="https://pages.github.com/" class="svelte-jux52e">Github Pages</a>.
        <br class="svelte-jux52e"/>
        You can find the source code at
        <a href="https://github.com/jjbel/resume/" class="svelte-jux52e">my Github</a>.`,at;return t=new Xt({}),i=new Yt({}),C=new Ut({}),{c(){V(t.$$.fragment),s=g(),e=f("div"),l=f("h1"),l.textContent=r,o=g(),V(i.$$.fragment),T=g(),_=f("p"),_.textContent=z,$=g(),H=f("h2"),H.textContent=I,S=g(),V(C.$$.fragment),P=g(),v=f("h2"),v.textContent=m,b=g(),j=f("p"),j.textContent=D,N=g(),d=f("h3"),d.textContent=B,k=g(),K=f("p"),K.innerHTML=mt,rt=g(),W=f("h2"),W.textContent=dt,it=g(),F=f("h3"),F.textContent=vt,ot=g(),Q=f("h3"),Q.textContent=_t,ct=g(),X=f("h3"),X.textContent=pt,ut=g(),Y=f("h2"),Y.textContent=$t,ft=g(),Z=f("p"),Z.innerHTML=gt,this.h()},l(y){O(t.$$.fragment,y),s=x(y),e=h(y,"DIV",{class:!0});var c=R(e);l=h(c,"H1",{id:!0,class:!0,"data-svelte-h":!0}),w(l)!=="svelte-1a7y8py"&&(l.textContent=r),o=x(c),O(i.$$.fragment,c),T=x(c),_=h(c,"P",{class:!0,"data-svelte-h":!0}),w(_)!=="svelte-3q9wlc"&&(_.textContent=z),$=x(c),H=h(c,"H2",{id:!0,class:!0,"data-svelte-h":!0}),w(H)!=="svelte-1f5zpim"&&(H.textContent=I),S=x(c),O(C.$$.fragment,c),P=x(c),v=h(c,"H2",{id:!0,class:!0,"data-svelte-h":!0}),w(v)!=="svelte-1xxkn6e"&&(v.textContent=m),b=x(c),j=h(c,"P",{class:!0,"data-svelte-h":!0}),w(j)!=="svelte-2sf2h6"&&(j.textContent=D),N=x(c),d=h(c,"H3",{class:!0,"data-svelte-h":!0}),w(d)!=="svelte-por1ts"&&(d.textContent=B),k=x(c),K=h(c,"P",{class:!0,"data-svelte-h":!0}),w(K)!=="svelte-re7v0u"&&(K.innerHTML=mt),rt=x(c),W=h(c,"H2",{id:!0,class:!0,"data-svelte-h":!0}),w(W)!=="svelte-10nt1tg"&&(W.textContent=dt),it=x(c),F=h(c,"H3",{class:!0,"data-svelte-h":!0}),w(F)!=="svelte-1x2n2h4"&&(F.textContent=vt),ot=x(c),Q=h(c,"H3",{class:!0,"data-svelte-h":!0}),w(Q)!=="svelte-209spn"&&(Q.textContent=_t),ct=x(c),X=h(c,"H3",{class:!0,"data-svelte-h":!0}),w(X)!=="svelte-1mtykf7"&&(X.textContent=pt),ut=x(c),Y=h(c,"H2",{id:!0,class:!0,"data-svelte-h":!0}),w(Y)!=="svelte-1ag2pdn"&&(Y.textContent=$t),ft=x(c),Z=h(c,"P",{class:!0,"data-svelte-h":!0}),w(Z)!=="svelte-1jknc1y"&&(Z.innerHTML=gt),c.forEach(p),this.h()},h(){a(l,"id","home"),a(l,"class","svelte-jux52e"),a(_,"class","svelte-jux52e"),a(H,"id","projects"),a(H,"class","svelte-jux52e"),a(v,"id","skills"),a(v,"class","svelte-jux52e"),a(j,"class","svelte-jux52e"),a(d,"class","svelte-jux52e"),a(K,"class","svelte-jux52e"),a(W,"id","edu"),a(W,"class","svelte-jux52e"),a(F,"class","svelte-jux52e"),a(Q,"class","svelte-jux52e"),a(X,"class","svelte-jux52e"),a(Y,"id","about"),a(Y,"class","svelte-jux52e"),a(Z,"class","svelte-jux52e"),a(e,"class","content svelte-jux52e")},m(y,c){q(t,y,c),M(y,s,c),M(y,e,c),n(e,l),n(e,o),q(i,e,null),n(e,T),n(e,_),n(e,$),n(e,H),n(e,S),q(C,e,null),n(e,P),n(e,v),n(e,b),n(e,j),n(e,N),n(e,d),n(e,k),n(e,K),n(e,rt),n(e,W),n(e,it),n(e,F),n(e,ot),n(e,Q),n(e,ct),n(e,X),n(e,ut),n(e,Y),n(e,ft),n(e,Z),at=!0},p:L,i(y){at||(E(t.$$.fragment,y),E(i.$$.fragment,y),E(C.$$.fragment,y),at=!0)},o(y){A(t.$$.fragment,y),A(i.$$.fragment,y),A(C.$$.fragment,y),at=!1},d(y){y&&(p(s),p(e)),G(t,y),G(i),G(C)}}}class ne extends st{constructor(t){super(),nt(this,t,null,Zt,et,{})}}export{ne as component};