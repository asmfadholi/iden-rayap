webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},HRs4:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("Dd8w"),n=l.n(a),s=l("Uneh"),i=l("7+uW"),o=l("e6fC"),c=l("RUzx"),r=l.n(c),u=l("NYxO"),_=l("Xxa5"),d=l.n(_),h=l("exGp"),b=l.n(h),p=l("mtWM"),m=l.n(p),v=function(){return m.a.create({baseURL:"https://api.exchangeratesapi.io/",params:{base:null!==x.state.currency_state.base_currency?x.state.currency_state.base_currency.currency:"USD"}})},f=function(){return v().get("latest").then(function(e){return e.data})},y={list_currencies:["USD","CAD","IDR","GBP","CHF","SGD","INR","MYR","JPY","KRW"],detail_currencies:{USD:"United States Dollar",CAD:"Canadian Dollar",IDR:"Indonesian Rupiah",GBP:"British Pound",CHF:"Swiss Franc",SGD:"Singapore Dollar",INR:"Indian Rupee",MYR:"Malaysian Ringgit",JPY:"Japanese Yen",KRW:"Korean Won"}},x={namespaced:!0,state:{currency_state:{currency_list:null,base_currency:null}},mutations:{setCurrencyList:function(e,t){e.currency_state.currency_list=t.rates},setCurrencyBase:function(e,t){e.currency_state.base_currency=t}},actions:{getCurrencyList:function(e){var t=this,l=e.commit;return b()(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:a=e.sent,l("setCurrencyList",a),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},getters:{currency_options:function(e){return null!==e.currency_state.currency_list?y.list_currencies.map(function(t,l){return{id:l,currency:t,value:Number(e.currency_state.currency_list[t]).toFixed(10)}}):[]}}};i.a.use(u.a);var g=new u.a.Store({modules:{StoreCurrency:x},strict:!1}),k=l("/ocq"),w={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h3",[e._v(" Microtermes ")]),e._v(" "),l("div",{staticClass:"step-1"},[l("b-row",[l("b-col",[l("b-form-group",{staticClass:"form-number"},[l("label",[e._v(" Left mandible tooth ")]),e._v(" "),l("vue-multiselect",{attrs:{options:e.options_mandible,placeholder:"Select one",label:"label","track-by":"label"},model:{value:e.class1.mandible_tooth,callback:function(t){e.$set(e.class1,"mandible_tooth",t)},expression:"class1.mandible_tooth"}})],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"step-2"},[e.class1.mandible_tooth?1===e.class1.mandible_tooth.id?l("b-row",[l("b-col",[l("label",[e._v(" Antenna articles ")]),e._v(" "),l("b-form-input",{attrs:{type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.article_antenna,callback:function(t){e.$set(e.class1,"article_antenna",e._n(t))},expression:"class1.article_antenna"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" Articles length ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_article_length},model:{value:e.class1.article_length,callback:function(t){e.$set(e.class1,"article_length",t)},expression:"class1.article_length"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" Labrum ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_labrum},model:{value:e.class1.labrum,callback:function(t){e.$set(e.class1,"labrum",t)},expression:"class1.labrum"}})],1)],1):2===e.class1.mandible_tooth.id?l("b-row",[l("b-col",{attrs:{cols:"12"}},[l("label",[e._v(" Head shape ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_head_shape},model:{value:e.class1.head_shape,callback:function(t){e.$set(e.class1,"head_shape",t)},expression:"class1.head_shape"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" Mandible hookness (1-10) ")]),e._v(" "),l("b-form-input",{attrs:{min:0,max:10,type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.mandible_hookness,callback:function(t){e.$set(e.class1,"mandible_hookness",e._n(t))},expression:"class1.mandible_hookness"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" Base outer margin concavity ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_concavity},model:{value:e.class1.concavity,callback:function(t){e.$set(e.class1,"concavity",t)},expression:"class1.concavity"}})],1)],1):e._e():l("div")],1),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"step-3"},[1===e.opsi_step2?l("b-row",[l("b-col",[l("label",[e._v(" Mandible's denticle  ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_denticle},model:{value:e.class1.denticle,callback:function(t){e.$set(e.class1,"denticle",t)},expression:"class1.denticle"}})],1)],1):e._e()],1),e._v(" "),l("div",{staticClass:"step-4"},[1===e.opsi_step3?l("b-row",[l("b-col",[l("label",[e._v(" antenna articles   ")]),e._v(" "),l("b-form-input",{attrs:{min:0,max:20,type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.antena_article3,callback:function(t){e.$set(e.class1,"antena_article3",e._n(t))},expression:"class1.antena_article3"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" articles length ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_antena_length3},model:{value:e.class1.antena_length3,callback:function(t){e.$set(e.class1,"antena_length3",t)},expression:"class1.antena_length3"}})],1),e._v(" "),l("b-col",[l("label",[e._v(" Labrum shape  ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_labrum_shape3},model:{value:e.class1.labrum_shape3,callback:function(t){e.$set(e.class1,"labrum_shape3",t)},expression:"class1.labrum_shape3"}})],1)],1):e._e(),e._v(" "),2===e.opsi_step3?l("b-row",[l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" Mandible hookness (2)  ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_mandible_hookness3},model:{value:e.class1.mandible_hookness3,callback:function(t){e.$set(e.class1,"mandible_hookness3",t)},expression:"class1.mandible_hookness3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" incurved tips ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_incurved_tips3},model:{value:e.class1.incurved_tips3,callback:function(t){e.$set(e.class1,"incurved_tips3",t)},expression:"class1.incurved_tips3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" Head's hair ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_head_hair3},model:{value:e.class1.head_hair3,callback:function(t){e.$set(e.class1,"head_hair3",t)},expression:"class1.head_hair3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" antenna articles ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_antenna_articles3},model:{value:e.class1.antenna_articles3,callback:function(t){e.$set(e.class1,"antenna_articles3",t)},expression:"class1.antenna_articles3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" Head length with mandible  ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_head_length_with_mandible3},model:{value:e.class1.head_length_with_mandible3,callback:function(t){e.$set(e.class1,"head_length_with_mandible3",t)},expression:"class1.head_length_with_mandible3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" articles length ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_articles_length3},model:{value:e.class1.articles_length3,callback:function(t){e.$set(e.class1,"articles_length3",t)},expression:"class1.articles_length3"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" labrum dimension  ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_labrum_dimension},model:{value:e.class1.labrum_dimension,callback:function(t){e.$set(e.class1,"labrum_dimension",t)},expression:"class1.labrum_dimension"}})],1),e._v(" "),l("b-col",{attrs:{cols:"6"}},[l("label",[e._v(" Labrums tip shape ")]),e._v(" "),l("b-form-select",{attrs:{options:e.options_labrums_tip_shape},model:{value:e.class1.labrums_tip_shape,callback:function(t){e.$set(e.class1,"labrums_tip_shape",t)},expression:"class1.labrums_tip_shape"}})],1)],1):e._e()],1)])},staticRenderFns:[]},$={name:"Home",components:{classificationv1:l("VU/8")({data:function(){return{result:null,class1:{mandible_tooth:null,article_antenna:null,article_length:null,labrum:null,head_shape:null,mandible_hookness:null,concavity:null,denticle:null,antena_article3:null,antena_length3:null,labrum_shape3:null,mandible_hookness3:null,incurved_tips3:null,head_hair3:null,antenna_articles3:null,head_length_with_mandible3:null,articles_length3:null,labrum_dimension:null,labrums_tip_shape:null},opsi_step2:null,opsi_step3:null,options_labrums_tip_shape:[{id:1,label:"broadly rounded",text:"broadly rounded",value:"broadly rounded"},{id:4,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_labrum_dimension:[{id:1,label:"L ~> W",text:"L ~> W",value:"L ~> W"},{id:3,label:"L < 0.75 (left mandible)",text:"L < 0.75 (left mandible)",value:"L < 0.75 (left mandible)"},{id:4,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_articles_length3:[{id:1,label:"(2) = (3+4)",text:"(2) = (3+4)",value:"(2) = (3+4)"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_antenna_articles3:[{id:1,label:"15",text:"15",value:"15"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_head_length_with_mandible3:[{id:1,label:"L : 1.4 - 1.5",text:"L : 1.4 - 1.5",value:"L : 1.4 - 1.5"},{id:2,label:"L : 1.3 - 1.4",text:"L : 1.3 - 1.4",value:"L : 1.3 - 1.4"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_head_hair3:[{id:1,label:"+",text:"+",value:"+"},{id:2,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_incurved_tips3:[{id:1,label:"antero laterally",text:"antero laterally",value:"antero laterally"},{id:2,label:"latero laterally",text:"latero laterally",value:"latero laterally"}],options_mandible_hookness3:[{id:1,label:"++++",text:"++++",value:"++++"},{id:2,label:"+++++++",text:"+++++++",value:"+++++++"}],options_labrum_shape3:[{id:1,label:"toungue shape",text:"toungue shape",value:"toungue shape"}],options_antena_length3:[{id:1,label:"(2) ~> (3)",text:"(2) ~> (3)",value:"(2) ~> (3)"}],options_article_length:[{id:1,label:"(2) = (3+4)",text:"(2) = (3+4)",value:"(2) = (3+4)"}],options_labrum:[{id:1,label:"triangle, pointed",text:"triangle, pointed",value:"triangle, pointed"}],options_head_shape:[{id:1,label:"rectangularly oval almost round",text:"rectangularly oval almost round",value:"rectangularly oval almost round"},{id:2,label:"relongated oval, narrowed anteriorly",text:"relongated oval, narrowed anteriorly",value:"elongated oval, narrowed anteriorly"}],options_mandible:[{id:1,label:"sharp pointed tooth near the tip",text:"sharp pointed tooth near the tip",value:"sharp pointed tooth near the tip"},{id:2,label:"no tooth or rudimentary tooth",text:"no tooth or rudimentary tooth",value:"no tooth or rudimentary tooth"}],options_concavity:[{id:1,label:"deep",text:"deep",value:"deep"},{id:2,label:"shallow",text:"shallow",value:"shallow"}],options_denticle:[{id:1,label:"+",text:"+",value:"+"},{id:2,label:"0",text:"0",value:"0"}]}},watch:{"class1.mandible_tooth":function(e){e?1===e.id?(this.class1.article_antenna=null,this.class1.article_length="(2) = (3+4)",this.class1.labrum="triangle, pointed",this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null):2===e.id&&(this.class1.article_antenna=null,this.class1.article_length=null,this.class1.labrum=null,this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null):(this.class1.article_antenna=null,this.class1.article_length=null,this.class1.labrum=null,this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null)},"class1.head_shape":function(e){this.opsi_step2=null,e&&this.class1.mandible_hookness&&this.class1.concavity&&this.checkStep2()},"class1.mandible_hookness":function(e){this.opsi_step2=null,e&&this.class1.head_shape&&this.class1.concavity&&this.checkStep2()},"class1.concavity":function(e){this.opsi_step2=null,e&&this.class1.mandible_hookness&&this.class1.head_shape&&this.checkStep2()},"class1.denticle":function(e){this.opsi_step3=null,this.opsi_step3="+"===e?1:2}},methods:{checkStep2:function(){var e=0;"deep"===this.class1.concavity&&(e+=1),this.class1.mandible_hookness>=4&&(e+=1),"rectangularly oval almost round"===this.class1.head_shape&&(e+=1),this.opsi_step2=e>=2?1:2},checkResult:function(){this.class1.mandible_tooth&&this.class1.article_antenna&&this.class1.article_length&&this.class1.labrum?(this.result="globicola",this.$emit("result",this.result)):"+"===this.class1.denticle?(this.result="insepratus",this.$emit("result",this.result)):"0"===this.class1.denticle?(this.result=this.checkOrder3Deep(),this.$emit("result",this.result)):this.$emit("result","not found")},checkOrder3Deep:function(){var e=this.class1,t=0,l=0,a=0;return"+"===e.head_hair3?t+=1:(l+=1,a+=1),15===e.antenna_articles3?(t+=1,l+=1):a+=1,"L : 1.4 - 1.5"===e.head_length_with_mandible3?l+=1:"L : 1.3 - 1.4"===e.head_length_with_mandible3?a+=1:t+=1,"(2) = (3+4)"===e.articles_length3?(l+=1,t+=1):a+=1,"L ~> W"===e.articles_length3?t+=1:"L < 0.75 (left mandible)"===e.articles_length3?l+=1:a+=1,"broadly rounded"===e.articles_length3?(t+=1,l+=1):a+=1,!0==t>=l?t>=a?"pakistanicus":"jacobsoni":l>=a?"pallidus":"jacobsoni"}}},w,!1,null,null,null).exports},data:function(){return{result:null}},watch:{},methods:{resultData:function(e){this.result=e},checkData:function(){this.$refs.classification1.checkResult()}}},L={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"Home"},[l("div",[l("b-container",{staticClass:"container-card",attrs:{fluid:""}},[l("b-row",[l("b-col"),e._v(" "),l("b-col",{staticClass:"content-currency",attrs:{cols:"12",sm:"8",md:"6",lg:"5"}},[l("classificationv1",{ref:"classification1",on:{result:e.resultData}}),e._v(" "),l("br"),e._v(" "),l("b-button",{on:{click:e.checkData}},[e._v("Submit")]),e._v(" "),l("br"),e._v(" "),l("br"),e._v("\n          Spesies: "+e._s(e.result)+"\n        ")],1),e._v(" "),l("b-col")],1)],1)],1)])},staticRenderFns:[]},R=[{path:"/",name:"Exchange Currency",component:l("VU/8")($,L,!1,null,null,null).exports,meta:{title:"Home"}}];i.a.use(k.a);var C=[R],D=[{path:"*",redirect:"/"}],S=D.concat.apply(D,C),H=new k.a({mode:"hash",routes:S});H.beforeEach(function(e,t,l){if(e.meta.middleware){var a=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],s={from:t,next:l,router:H,to:e},i=function e(t,l,a){var s=l[a];return s?function(){var i=e(t,l,a+1);s(n()({},t,{next:i}))}:t.next}(s,a,1);return a[0](n()({},s,{next:i}))}return l()});var M=H,E=l("ESwS"),U=l.n(E),W=l("QIxp"),N=l.n(W);l("HRs4"),l("Jmt5"),l("9M+g"),l("Ritz"),l("tLvy");window.axios=l("mtWM"),i.a.use(s.VueExtendLayout),i.a.use(o.a),i.a.use(U.a),i.a.component("vue-multiselect",r.a),i.a.component("tween-num",N.a),i.a.config.productionTip=!1,new i.a(n()({el:"#app",router:M,store:g},s.layout))},Ritz:function(e,t){},kDKJ:function(e,t,l){var a={"./default.vue":"lfHO"};function n(e){return l(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="kDKJ"},lfHO:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Headful",props:{title:{type:String,default:""}},watch:{title:function(){document.title=this.title}},created:function(){document.title=this.title}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},s={name:"default",components:{Headful:l("VU/8")(a,n,!1,null,null,null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Headful",{attrs:{title:this.$route.meta.title}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]},o=l("VU/8")(s,i,!1,null,null,null);t.default=o.exports},tLvy:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7b802807708701a5b618.js.map