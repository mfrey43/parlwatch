"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4066],{4066:(z,u,l)=>{l.r(u),l.d(u,{BusinessListPage:()=>D});var e=l(2716),h=l(9360),c=l(4341),d=l(4517),r=l(8974),_=l(334),m=l(2704),g=l(5734),f=l(161),b=l(9525),p=l(5247),B=l(9553);function C(s,o){if(1&s){const t=e.RV6();e.j41(0,"ion-item")(1,"ion-checkbox",3),e.mxI("ngModelChange",function(i){const a=e.eBV(t).$implicit;return e.DH7(a.checked,i)||(a.checked=i),e.Njj(i)}),e.EFF(2),e.k0s()()}if(2&s){const t=o.$implicit;e.R7$(),e.Y8G("name",t.BusinessTypeName),e.R50("ngModel",t.checked),e.R7$(),e.JRh(t.BusinessTypeName)}}function F(s,o){if(1&s){const t=e.RV6();e.j41(0,"ion-item")(1,"ion-checkbox",3),e.mxI("ngModelChange",function(i){const a=e.eBV(t).$implicit;return e.DH7(a.checked,i)||(a.checked=i),e.Njj(i)}),e.EFF(2),e.k0s()()}if(2&s){const t=o.$implicit;e.R7$(),e.Y8G("name",t.BusinessStatusName),e.R50("ngModel",t.checked),e.R7$(),e.JRh(t.BusinessStatusName)}}let k=(()=>{var s;class o{constructor(){this.store=(0,e.WQX)(p.s),this.submitFilter=new e.bkB,this.businessTypeCheckboxes=(0,e.EWP)(()=>this.store.businessTypes().map(n=>({...n,checked:this.store.query().businessTypes.some(i=>i.ID===n.ID)}))),this.businessStatusCheckboxes=(0,e.EWP)(()=>this.store.businessStatuses().map(n=>({...n,checked:this.store.query().businessStatuses.some(i=>i.BusinessStatusId===n.BusinessStatusId)})))}onSubmit(){this.submitFilter.emit(),this.store.updateQuery({...this.store.query(),businessTypes:this.businessTypeCheckboxes().filter(n=>n.checked),businessStatuses:this.businessStatusCheckboxes().filter(n=>n.checked)})}}return(s=o).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.VBU({type:s,selectors:[["app-business-filter-form"]],outputs:{submitFilter:"submitFilter"},standalone:!0,features:[e.aNF],decls:14,vars:0,consts:[[3,"ngSubmit"],[1,"floating-button"],["expand","block","type","submit"],["labelPlacement","start",3,"ngModelChange","name","ngModel"]],template:function(n,i){1&n&&(e.j41(0,"form",0),e.bIt("ngSubmit",function(){return i.onSubmit()}),e.j41(1,"h3"),e.EFF(2,"Gesch\xe4ftstyp"),e.k0s(),e.j41(3,"ion-list"),e.Z7z(4,C,3,3,"ion-item",null,e.fX1),e.k0s(),e.j41(6,"h3"),e.EFF(7,"Gesch\xe4ftsstatus"),e.k0s(),e.j41(8,"ion-list"),e.Z7z(9,F,3,3,"ion-item",null,e.fX1),e.k0s(),e.j41(11,"div",1)(12,"ion-button",2),e.EFF(13,"Filter anwenden"),e.k0s()()()),2&n&&(e.R7$(4),e.Dyx(i.businessTypeCheckboxes()),e.R7$(5),e.Dyx(i.businessStatusCheckboxes()))},dependencies:[c.YN,c.qT,c.BC,c.cb,c.vS,c.cV,r.bv,r.Jm,r.eY,r.uz,r.nf,r.hB,c.X1],styles:[".floating-button[_ngcontent-%COMP%]{position:fixed;bottom:1rem;left:0;right:0;z-index:999}ion-list[_ngcontent-%COMP%]:last-child{padding-bottom:4rem}"]}),o})();const y=["Internationale Politik","Verkehr","Finanzwesen","Soziale Fragen","Umwelt","Bildung","Wirtschaft","Staatspolitik","Migration","Gesundheit","Parlament","Strafrecht","Steuer","Europapolitik","Sicherheitspolitik","Raumplanung"],S=["searchBar"];function j(s,o){if(1&s&&(e.j41(0,"ion-chip")(1,"ion-label"),e.EFF(2),e.k0s()()),2&s){const t=o.$implicit;e.R7$(2),e.JRh(t.BusinessTypeName)}}function T(s,o){if(1&s&&(e.j41(0,"ion-chip")(1,"ion-label"),e.EFF(2),e.k0s()()),2&s){const t=o.$implicit;e.R7$(2),e.JRh(t.BusinessStatusName)}}function P(s,o){if(1&s&&(e.j41(0,"div",3),e.Z7z(1,j,3,1,"ion-chip",null,e.fX1),e.Z7z(3,T,3,1,"ion-chip",null,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Dyx(t.store.query().businessTypes),e.R7$(2),e.Dyx(t.store.query().businessStatuses)}}function v(s,o){if(1&s){const t=e.RV6();e.j41(0,"ion-chip",7),e.bIt("click",function(){const i=e.eBV(t).$implicit,a=e.XpG(2);return e.Njj(a.onSuggestedSearchTopic(i))}),e.EFF(1),e.k0s()}if(2&s){const t=o.$implicit;e.R7$(),e.JRh(t)}}function x(s,o){if(1&s&&(e.j41(0,"div",4)(1,"p")(2,"small"),e.EFF(3,"Nach Thema suchen"),e.k0s()(),e.Z7z(4,v,2,1,"ion-chip",null,e.fX1),e.k0s()),2&s){const t=e.XpG();e.R7$(4),e.Dyx(t.suggestedSearchTerms)}}function R(s,o){if(1&s){const t=e.RV6();e.j41(0,"app-business-card",11),e.bIt("click",function(){const i=e.eBV(t).$implicit,a=e.XpG(4);return e.Njj(a.onClickBusiness(i.ID))}),e.k0s()}2&s&&e.Y8G("business",o.$implicit)}function E(s,o){if(1&s){const t=e.RV6();e.j41(0,"ion-refresher",8),e.bIt("ionRefresh",function(i){e.eBV(t);const a=e.XpG(3);return e.Njj(a.handleRefresh(i))}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.Z7z(2,R,1,1,"app-business-card",9,e.fX1),e.j41(4,"ion-infinite-scroll",10),e.bIt("ionInfinite",function(i){e.eBV(t);const a=e.XpG(3);return e.Njj(a.distanceReached(i))}),e.nrm(5,"ion-infinite-scroll-content"),e.k0s()}if(2&s){const t=e.XpG(3);e.R7$(2),e.Dyx(t.store.businesses())}}function L(s,o){if(1&s){const t=e.RV6();e.j41(0,"app-no-content-screen",12),e.bIt("resetFilter",function(){e.eBV(t);const i=e.XpG(3);return e.Njj(i.resetFilter())}),e.k0s()}}function M(s,o){if(1&s&&e.DNE(0,E,6,0)(1,L,1,0,"app-no-content-screen"),2&s){const t=e.XpG(2);e.vxM(t.store.hasNoContent()?1:0)}}function N(s,o){if(1&s){const t=e.RV6();e.j41(0,"app-error-screen",13),e.bIt("retry",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.retrySearch())}),e.k0s()}}function V(s,o){if(1&s&&e.DNE(0,M,2,1)(1,N,1,0,"app-error-screen"),2&s){const t=e.XpG();e.vxM(t.store.hasError()?1:0)}}function G(s,o){1&s&&e.nrm(0,"app-loading-screen")}function X(s,o){if(1&s){const t=e.RV6();e.j41(0,"app-business-filter-form",16),e.bIt("submitFilter",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.toggleFilterModal())}),e.k0s()}}function I(s,o){if(1&s){const t=e.RV6();e.j41(0,"app-error-screen",13),e.bIt("retry",function(){e.eBV(t);const i=e.XpG(2);return e.Njj(i.retrySearch())}),e.k0s()}}function O(s,o){if(1&s){const t=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Gesch\xe4fte filtern"),e.k0s(),e.j41(4,"ion-buttons",14)(5,"ion-button",7),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.toggleFilterModal())}),e.EFF(6,"schliessen"),e.k0s()()()(),e.j41(7,"ion-content",15),e.DNE(8,X,1,0,"app-business-filter-form")(9,I,1,0,"app-error-screen"),e.k0s()}if(2&s){const t=e.XpG();e.R7$(8),e.vxM(t.store.hasFilterError()?9:8)}}let D=(()=>{var s;class o{constructor(){this.store=(0,e.WQX)(p.s),this.router=(0,e.WQX)(h.Ix),this.platform=(0,e.WQX)(d.OD),this.isModalOpen=!1,this.presentingElement=null,this.showSuggestedSearches=!1,this.suggestedSearchTerms=y,(0,e.QZP)(()=>{var n;this.store.isLoadingMore()||this.store.isRefreshing()||null===(n=this.refreshOrLoadMoreEvent)||void 0===n||null===(n=n.target)||void 0===n||n.complete().catch(()=>{console.error("Error completing refresh or load more event")})})}ngOnInit(){this.addKeyBoardListener(),this.store.loadBusinesses(this.store.query),this.presentingElement=document.querySelector("ion-router-outlet")}addKeyBoardListener(){this.platform.is("capacitor")&&(_.s3.addListener("keyboardWillHide",()=>{this.showSuggestedSearches=!1}),_.s3.addListener("keyboardWillShow",()=>{this.showSuggestedSearches=!0}))}toggleFilterModal(){this.isModalOpen=!this.isModalOpen}onSearch(n){this.showSuggestedSearches=!1,this.store.updateQuery({...this.store.query(),searchTerm:n.target.value})}onSuggestedSearchTopic(n){this.showSuggestedSearches=!1,this.searchBar.value=n,this.store.updateQuery({...this.store.query(),searchTerm:n})}retrySearch(){this.store.loadBusinesses(this.store.query())}resetFilter(){this.searchBar.value="",this.store.resetQuery()}distanceReached(n){this.refreshOrLoadMoreEvent=n,this.store.loadMore()}handleRefresh(n){this.refreshOrLoadMoreEvent=n,this.store.refresh()}onClickBusiness(n){this.router.navigate(["business","detail",n])}}return(s=o).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.VBU({type:s,selectors:[["app-business-list"]],viewQuery:function(n,i){if(1&n&&e.GBs(S,5),2&n){let a;e.mGM(a=e.lsd())&&(i.searchBar=a.first)}},standalone:!0,features:[e.aNF],decls:15,vars:5,consts:[["searchBar",""],["appHideKeyboardOnEnter","","color","light","enterkeyhint","search","placeholder","Suche",3,"ionChange"],["slot","end","size","large","name","filter-outline",3,"click"],[1,"active-filter-wrapper"],[1,"search-suggestions"],["role","feed",1,"ion-padding"],["handle","true",3,"isOpen","presentingElement"],[3,"click"],["slot","fixed",3,"ionRefresh"],[3,"business"],["threshold","100px",3,"ionInfinite"],[3,"click","business"],[3,"resetFilter"],[3,"retry"],["slot","end"],[1,"ion-padding"],[3,"submitFilter"]],template:function(n,i){if(1&n){const a=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Gesch\xe4fte "),e.k0s()(),e.j41(4,"ion-toolbar")(5,"ion-searchbar",1,0),e.bIt("ionChange",function(Q){return e.eBV(a),e.Njj(i.onSearch(Q))}),e.k0s(),e.j41(7,"ion-icon",2),e.bIt("click",function(){return e.eBV(a),e.Njj(i.toggleFilterModal())}),e.k0s()(),e.DNE(8,P,5,0,"div",3)(9,x,6,0,"div",4),e.k0s(),e.j41(10,"ion-content",5),e.DNE(11,V,2,1)(12,G,1,0,"app-loading-screen"),e.k0s(),e.j41(13,"ion-modal",6),e.DNE(14,O,10,1,"ng-template"),e.k0s()}2&n&&(e.R7$(8),e.vxM(i.store.query().businessTypes.length>0||i.store.query().businessStatuses.length>0?8:-1),e.R7$(),e.vxM(i.showSuggestedSearches?9:-1),e.R7$(2),e.vxM(i.store.isLoading()?12:11),e.R7$(2),e.Y8G("isOpen",i.isModalOpen)("presentingElement",i.presentingElement))},dependencies:[r.bv,r.Jm,r.QW,r.ZB,r.W9,r.eU,r.iq,r.Ax,r.Hp,r.he,r.To,r.Ki,r.S1,r.BC,r.ai,r.Sb,r.Gw,c.X1,m.o,g.K,f._,b._,B.q,k],styles:["ion-toolbar[_ngcontent-%COMP%]{--padding-end: 1rem}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-step-150);--color: var(--ion-color-secondary-contrast)}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){color:var(--ion-color-primary)}ion-chip[_ngcontent-%COMP%]{margin:0 .5rem .5rem 0}.search-suggestions[_ngcontent-%COMP%]{padding:.5rem 1rem 0;color:#666;background-color:var(--ion-color-primary-contrast);height:100vh}.search-suggestions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.5rem}.active-filter-wrapper[_ngcontent-%COMP%]{padding:.5rem 1rem 0;background-color:var(--ion-color-primary-contrast)}"],changeDetection:0}),o})()}}]);