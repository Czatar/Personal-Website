import{A as b,B as d,D as c,E as a,F as k,G as O,H as P,I as v,J as l,K as m,Q as w,W as F,X as S,Y as L,Z as T,ca as j,ea as E,fa as B,g as C,h as f,ha as y,k as g,l as u,p as M,q as _,u as I,w as s,x as p}from"./chunk-NIS2VXUT.js";var h=(()=>{let t=class t{constructor(){this.posts=[{id:"post1",title:"Making This Website",content:"This is the content of post1."}]}getPostById(i){return this.posts.find(e=>e.id===i)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var R=o=>["/blogs",o];function V(o,t){if(o&1&&(c(0,"div",8)(1,"h3"),l(2),a()()),o&2){let r=t.$implicit;d("routerLink",w(2,R,r.id)),s(2),m(r.title)}}function W(o,t){if(o&1&&(c(0,"div",6),b(1,V,3,4,"div",7),a()),o&2){let r=v().$implicit;s(),d("ngForOf",r.posts)}}function A(o,t){if(o&1){let r=O();c(0,"div",4),P("click",function(){let e=M(r).$implicit,n=v();return _(n.toggleCategory(e))}),c(1,"h2"),l(2),a(),b(3,W,2,1,"div",5),a()}if(o&2){let r=t.$implicit;s(2),m(r.name),s(),d("ngIf",r.expanded)}}var D=(()=>{let t=class t{constructor(i,e){this.router=i,this.postService=e,this.categories=[{name:"Programming",expanded:!1,posts:[{id:"post1",title:"Making This Website"}]}]}ngOnInit(){}toggleCategory(i){i.expanded=!i.expanded}};t.\u0275fac=function(e){return new(e||t)(p(E),p(h))},t.\u0275cmp=g({type:t,selectors:[["app-blog-list"]],decls:5,vars:1,consts:[[1,"blog-list-container"],["appFadeOnScroll","",1,"contrast-1","bubble"],[1,"category-list"],["class","contrast-1 bubble category","appFadeOnScroll","",3,"click",4,"ngFor","ngForOf"],["appFadeOnScroll","",1,"contrast-1","bubble","category",3,"click"],["class","posts",4,"ngIf"],[1,"posts"],["class","post",3,"routerLink",4,"ngFor","ngForOf"],[1,"post",3,"routerLink"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h1",1),l(2,"My Blogs"),a(),c(3,"div",2),b(4,A,4,2,"div",3),a()()),e&2&&(s(4),d("ngForOf",n.categories))},dependencies:[F,S,B],styles:[".blog-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;animation:fadeIn 1.5s forwards}.bubble[_ngcontent-%COMP%]{transition:background-color .3s;background-color:#ffffff1a;box-shadow:5px 5px 15px #0000004d;border-radius:20px;padding:20px;margin:20px 0;box-sizing:border-box;text-align:center}.bubble[_ngcontent-%COMP%]:hover{background-color:#fff3}.category-list[_ngcontent-%COMP%]{width:75%;padding:0}.category[_ngcontent-%COMP%]{cursor:pointer}.posts[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:10px}.post[_ngcontent-%COMP%]{transition:background-color .3s;background-color:#ffffff1a;box-shadow:5px 5px 15px #0000004d;border-radius:20px;width:50%;padding:20px;margin:10px 0}.post[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}@media (max-width: 600px){.category-list[_ngcontent-%COMP%]{width:100%}.post[_ngcontent-%COMP%]{width:90%}}"]});let o=t;return o})();var $=(()=>{let t=class t{constructor(i,e,n){this.route=i,this.http=e,this.postService=n,this.content="Blog content not yet available. Check back later!"}ngOnInit(){this.route.paramMap.subscribe(i=>{let e=i.get("id");if(e){let n=this.postService.getPostById(e);n?(this.post=n,this.loadContent(e)):console.error("Post not found")}else console.error("Post ID not found")})}loadContent(i){this.http.get(`assets/blog-content/${i}.html`,{responseType:"text"}).subscribe(e=>this.content=e,e=>console.error("Error loading content:",e))}};t.\u0275fac=function(e){return new(e||t)(p(j),p(T),p(h))},t.\u0275cmp=g({type:t,selectors:[["app-post"]],decls:4,vars:2,consts:[[1,"contrast-1","bubble"],[1,"contrast-1","post-content",3,"innerHTML"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h1"),l(2),a()(),k(3,"div",1)),e&2&&(s(2),m(n.post.title),s(),d("innerHTML",n.content,I))},styles:[".bubble[_ngcontent-%COMP%]{transition:background-color .3s;background-color:#ffffff1a;box-shadow:5px 5px 15px #0000004d;border-radius:20px;padding:20px;margin:20px 0;box-sizing:border-box;text-align:center}"]});let o=t;return o})();var q=[{path:"",component:D},{path:":id",component:$}],H=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=f({imports:[y.forChild(q),y]});let o=t;return o})();var st=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=f({imports:[L,H]});let o=t;return o})();export{st as BlogModule};
