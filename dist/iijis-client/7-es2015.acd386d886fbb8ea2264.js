(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{xdH6:function(i,n,s){"use strict";s.r(n),s.d(n,"ArchivesModule",function(){return T});var o=s("ofXK"),e=s("fXoL"),t=s("RZXS"),c=s("am9W"),b=s("jhN1"),r=s("tyNb");function l(i,n){if(1&i){const i=e.Vb();e.Ub(0,"li"),e.Dc(1),e.Ub(2,"i",23),e.Ub(3,"a",24),e.bc("click",function(){e.vc(i);const s=n.$implicit;return e.fc(3).download(s)}),e.Dc(4,"Download"),e.Tb(),e.Tb(),e.Tb()}if(2&i){const i=n.$implicit;e.Cb(1),e.Gc("",null==i?null:i.title," by ",null==i?null:i.author," ")}}function a(i,n){if(1&i&&(e.Ub(0,"div",13),e.Ub(1,"div",14),e.Ub(2,"div",15),e.Ub(3,"figure",16),e.Ub(4,"div",17),e.Ub(5,"div",18),e.Pb(6,"img",19),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Ub(7,"div",14),e.Ub(8,"div",20),e.Ub(9,"h1"),e.Dc(10),e.Tb(),e.Ub(11,"div",21),e.Ub(12,"p"),e.Dc(13),e.Tb(),e.Tb(),e.Tb(),e.Ub(14,"ul"),e.Cc(15,l,5,2,"li",22),e.Tb(),e.Tb(),e.Tb()),2&i){const i=n.$implicit,s=e.fc(2);e.Cb(6),e.lc("src",s.getimage(i),e.xc),e.Cb(4),e.Ec(null==i?null:i.title),e.Cb(3),e.Ec(null==i?null:i.description),e.Cb(2),e.lc("ngForOf",null==i?null:i.submissions)}}function u(i,n){if(1&i&&(e.Ub(0,"div",11),e.Ub(1,"div",1),e.Cc(2,a,16,4,"div",12),e.Tb(),e.Tb()),2&i){const i=e.fc();e.Cb(2),e.lc("ngForOf",i.issues)}}function d(i,n){1&i&&(e.Ub(0,"h3",25),e.Dc(1,"No Releases Found :("),e.Tb())}const m=function(){return[""]},f=function(){return["archives"]};let h=(()=>{class i{constructor(i,n,s){this.submissionService=i,this.config=n,this.sanitizer=s,this.issues=[],this.imagesToShow=[]}ngOnInit(){this.submissionService.releases().subscribe(i=>{null===i.body.data?this.issues=null:(this.issues=i.body.data,this.issues.forEach(i=>{this.loadimage(i.id)}))})}loadimage(i){this.submissionService.getImage(i).subscribe(n=>{let s=URL.createObjectURL(n),o=this.sanitizer.bypassSecurityTrustUrl(s);this.imagesToShow.push({id:i,image:o})},i=>{console.log(i)})}download(i){window.open(this.config.apiPath+"submission/file/"+i.id,"_blank")}getimage(i){return this.imagesToShow.find(n=>n.id===i.id).image}}return i.\u0275fac=function(n){return new(n||i)(e.Ob(t.a),e.Ob(c.a),e.Ob(b.b))},i.\u0275cmp=e.Ib({type:i,selectors:[["app-archives"]],decls:19,vars:6,consts:[[1,"sj-innerbanner"],[1,"container"],[1,"row"],[1,"col-12","col-sm-12","col-md-12","col-lg-12"],[1,"sj-innerbannercontent"],[1,"sj-breadcrumb"],[3,"routerLink"],["id","sj-main",1,"sj-main","sj-haslayout","sj-sectionspace"],["id","sj-twocolumns",1,"sj-twocolumns"],["id","sj-homebanner","class","sj-homebanner",4,"ngIf"],["class","text-center",4,"ngIf"],["id","sj-homebanner",1,"sj-homebanner"],["class","row","style","margin-bottom:30px !important;overflow: hidden;",4,"ngFor","ngForOf"],[1,"row",2,"margin-bottom","30px !important","overflow","hidden"],[1,"col-12","col-sm-12","col-md-6","col-lg-6"],[1,"sj-postbook"],[1,"sj-featureimg"],[1,"sj-bookimg"],[1,"sj-frontcover"],[3,"src"],[1,"sj-bannercontent"],[1,"sj-description"],[4,"ngFor","ngForOf"],[1,"fa","fa-download"],["href","javascript:void(0);",3,"click"],[1,"text-center"]],template:function(i,n){1&i&&(e.Ub(0,"div",0),e.Ub(1,"div",1),e.Ub(2,"div",2),e.Ub(3,"div",3),e.Ub(4,"div",4),e.Ub(5,"h1"),e.Dc(6,"Archives"),e.Tb(),e.Ub(7,"ol",5),e.Ub(8,"li"),e.Ub(9,"a",6),e.Dc(10,"Home"),e.Tb(),e.Tb(),e.Ub(11,"li"),e.Ub(12,"a",6),e.Dc(13,"Archives"),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Tb(),e.Ub(14,"main",7),e.Ub(15,"div",8),e.Ub(16,"div",1),e.Cc(17,u,3,1,"div",9),e.Cc(18,d,2,0,"h3",10),e.Tb(),e.Tb(),e.Tb()),2&i&&(e.Cb(9),e.lc("routerLink",e.oc(4,m)),e.Cb(3),e.lc("routerLink",e.oc(5,f)),e.Cb(5),e.lc("ngIf",n.issues.length>0),e.Cb(1),e.lc("ngIf",0==n.issues.length))},directives:[r.f,o.l,o.k],styles:["img[_ngcontent-%COMP%]{max-width:418px}"]}),i})();var g=s("PCNd");const v=[{path:"",component:h}];let T=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.Mb({type:i}),i.\u0275inj=e.Lb({imports:[[o.c,g.a,r.g.forChild(v)]]}),i})()}}]);