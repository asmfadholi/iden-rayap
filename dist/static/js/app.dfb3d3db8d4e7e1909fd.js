webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},HRs4:function(e,t){},Id91:function(e,t){},JZBy:function(e,t,a){e.exports=a.p+"static/img/mic_005.b649e2a.png"},Jmt5:function(e,t){},Kqh0:function(e,t,a){e.exports=a.p+"static/img/mic_003.41a5f7c.png"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),n=a.n(l),s=a("Uneh"),i=a("7+uW"),o=a("e6fC"),r=a("RUzx"),c=a.n(r),u=a("NYxO"),h=a("Xxa5"),_=a.n(h),d=a("exGp"),p=a.n(d),b=a("mtWM"),m=a.n(b),v=function(){return m.a.create({baseURL:"https://api.exchangeratesapi.io/",params:{base:null!==x.state.currency_state.base_currency?x.state.currency_state.base_currency.currency:"USD"}})},f=function(){return v().get("latest").then(function(e){return e.data})},g={list_currencies:["USD","CAD","IDR","GBP","CHF","SGD","INR","MYR","JPY","KRW"],detail_currencies:{USD:"United States Dollar",CAD:"Canadian Dollar",IDR:"Indonesian Rupiah",GBP:"British Pound",CHF:"Swiss Franc",SGD:"Singapore Dollar",INR:"Indian Rupee",MYR:"Malaysian Ringgit",JPY:"Japanese Yen",KRW:"Korean Won"}},x={namespaced:!0,state:{currency_state:{currency_list:null,base_currency:null}},mutations:{setCurrencyList:function(e,t){e.currency_state.currency_list=t.rates},setCurrencyBase:function(e,t){e.currency_state.base_currency=t}},actions:{getCurrencyList:function(e){var t=this,a=e.commit;return p()(_.a.mark(function e(){var l;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:l=e.sent,a("setCurrencyList",l),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},getters:{currency_options:function(e){return null!==e.currency_state.currency_list?g.list_currencies.map(function(t,a){return{id:a,currency:t,value:Number(e.currency_state.currency_list[t]).toFixed(10)}}):[]}}};i.a.use(u.a);var y=new u.a.Store({modules:{StoreCurrency:x},strict:!1}),k=a("/ocq"),w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v(" Microtermes ")]),e._v(" "),a("div",{staticClass:"step-1"},[a("b-row",[a("b-col",[a("b-form-group",{staticClass:"form-number"},[a("label",[e._v(" Left mandible tooth ")]),e._v(" "),a("vue-multiselect",{attrs:{options:e.options_mandible,placeholder:"Select one",label:"label","track-by":"label"},model:{value:e.class1.mandible_tooth,callback:function(t){e.$set(e.class1,"mandible_tooth",t)},expression:"class1.mandible_tooth"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"step-2"},[e.class1.mandible_tooth?1===e.class1.mandible_tooth.id?a("b-row",[a("b-col",[a("label",[e._v(" Antenna articles ")]),e._v(" "),a("b-form-input",{attrs:{type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.article_antenna,callback:function(t){e.$set(e.class1,"article_antenna",e._n(t))},expression:"class1.article_antenna"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Articles length ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_article_length},model:{value:e.class1.article_length,callback:function(t){e.$set(e.class1,"article_length",t)},expression:"class1.article_length"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Labrum ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum},model:{value:e.class1.labrum,callback:function(t){e.$set(e.class1,"labrum",t)},expression:"class1.labrum"}})],1)],1):2===e.class1.mandible_tooth.id?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("label",[e._v(" Head shape ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_head_shape},model:{value:e.class1.head_shape,callback:function(t){e.$set(e.class1,"head_shape",t)},expression:"class1.head_shape"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Mandible hookness (1-10) ")]),e._v(" "),a("b-form-input",{attrs:{min:0,max:10,type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.mandible_hookness,callback:function(t){e.$set(e.class1,"mandible_hookness",e._n(t))},expression:"class1.mandible_hookness"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Base outer margin concavity ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_concavity},model:{value:e.class1.concavity,callback:function(t){e.$set(e.class1,"concavity",t)},expression:"class1.concavity"}})],1)],1):e._e():a("div")],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"step-3"},[1===e.opsi_step2?a("b-row",[a("b-col",[a("label",[e._v(" Mandible's denticle  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_denticle},model:{value:e.class1.denticle,callback:function(t){e.$set(e.class1,"denticle",t)},expression:"class1.denticle"}})],1)],1):e._e()],1),e._v(" "),a("div",{staticClass:"step-4"},[1===e.opsi_step3?a("b-row",[a("b-col",[a("label",[e._v(" antenna articles   ")]),e._v(" "),a("b-form-input",{attrs:{min:0,max:20,type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.antena_article3,callback:function(t){e.$set(e.class1,"antena_article3",e._n(t))},expression:"class1.antena_article3"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" articles length ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_antena_length3},model:{value:e.class1.antena_length3,callback:function(t){e.$set(e.class1,"antena_length3",t)},expression:"class1.antena_length3"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Labrum shape  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum_shape3},model:{value:e.class1.labrum_shape3,callback:function(t){e.$set(e.class1,"labrum_shape3",t)},expression:"class1.labrum_shape3"}})],1)],1):e._e(),e._v(" "),2===e.opsi_step3?a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" Mandible hookness (2)  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_mandible_hookness3},model:{value:e.class1.mandible_hookness3,callback:function(t){e.$set(e.class1,"mandible_hookness3",t)},expression:"class1.mandible_hookness3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" incurved tips ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_incurved_tips3},model:{value:e.class1.incurved_tips3,callback:function(t){e.$set(e.class1,"incurved_tips3",t)},expression:"class1.incurved_tips3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" Head's hair ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_head_hair3},model:{value:e.class1.head_hair3,callback:function(t){e.$set(e.class1,"head_hair3",t)},expression:"class1.head_hair3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" antenna articles ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_antenna_articles3},model:{value:e.class1.antenna_articles3,callback:function(t){e.$set(e.class1,"antenna_articles3",t)},expression:"class1.antenna_articles3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" Head length with mandible  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_head_length_with_mandible3},model:{value:e.class1.head_length_with_mandible3,callback:function(t){e.$set(e.class1,"head_length_with_mandible3",t)},expression:"class1.head_length_with_mandible3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" articles length ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_articles_length3},model:{value:e.class1.articles_length3,callback:function(t){e.$set(e.class1,"articles_length3",t)},expression:"class1.articles_length3"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" labrum dimension  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum_dimension},model:{value:e.class1.labrum_dimension,callback:function(t){e.$set(e.class1,"labrum_dimension",t)},expression:"class1.labrum_dimension"}})],1),e._v(" "),a("b-col",{attrs:{cols:"6"}},[a("label",[e._v(" Labrums tip shape ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrums_tip_shape},model:{value:e.class1.labrums_tip_shape,callback:function(t){e.$set(e.class1,"labrums_tip_shape",t)},expression:"class1.labrums_tip_shape"}})],1)],1):e._e()],1)])},staticRenderFns:[]},$=a("VU/8")({data:function(){return{result:null,class1:{mandible_tooth:null,article_antenna:null,article_length:null,labrum:null,head_shape:null,mandible_hookness:null,concavity:null,denticle:null,antena_article3:null,antena_length3:null,labrum_shape3:null,mandible_hookness3:null,incurved_tips3:null,head_hair3:null,antenna_articles3:null,head_length_with_mandible3:null,articles_length3:null,labrum_dimension:null,labrums_tip_shape:null},opsi_step2:null,opsi_step3:null,options_labrums_tip_shape:[{id:1,label:"broadly rounded",text:"broadly rounded",value:"broadly rounded"},{id:4,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_labrum_dimension:[{id:1,label:"L ~> W",text:"L ~> W",value:"L ~> W"},{id:3,label:"L < 0.75 (left mandible)",text:"L < 0.75 (left mandible)",value:"L < 0.75 (left mandible)"},{id:4,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_articles_length3:[{id:1,label:"(2) = (3+4)",text:"(2) = (3+4)",value:"(2) = (3+4)"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_antenna_articles3:[{id:1,label:"15",text:"15",value:"15"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_head_length_with_mandible3:[{id:1,label:"L : 1.4 - 1.5",text:"L : 1.4 - 1.5",value:"L : 1.4 - 1.5"},{id:2,label:"L : 1.3 - 1.4",text:"L : 1.3 - 1.4",value:"L : 1.3 - 1.4"},{id:3,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_head_hair3:[{id:1,label:"+",text:"+",value:"+"},{id:2,label:"not mentioned",text:"not mentioned",value:"not mentioned"}],options_incurved_tips3:[{id:1,label:"antero laterally",text:"antero laterally",value:"antero laterally"},{id:2,label:"latero laterally",text:"latero laterally",value:"latero laterally"}],options_mandible_hookness3:[{id:1,label:"++++",text:"++++",value:"++++"},{id:2,label:"+++++++",text:"+++++++",value:"+++++++"}],options_labrum_shape3:[{id:1,label:"toungue shape",text:"toungue shape",value:"toungue shape"}],options_antena_length3:[{id:1,label:"(2) ~> (3)",text:"(2) ~> (3)",value:"(2) ~> (3)"}],options_article_length:[{id:1,label:"(2) = (3+4)",text:"(2) = (3+4)",value:"(2) = (3+4)"}],options_labrum:[{id:1,label:"triangle, pointed",text:"triangle, pointed",value:"triangle, pointed"}],options_head_shape:[{id:1,label:"rectangularly oval almost round",text:"rectangularly oval almost round",value:"rectangularly oval almost round"},{id:2,label:"relongated oval, narrowed anteriorly",text:"relongated oval, narrowed anteriorly",value:"elongated oval, narrowed anteriorly"}],options_mandible:[{id:1,label:"sharp pointed tooth near the tip",text:"sharp pointed tooth near the tip",value:"sharp pointed tooth near the tip"},{id:2,label:"no tooth or rudimentary tooth",text:"no tooth or rudimentary tooth",value:"no tooth or rudimentary tooth"}],options_concavity:[{id:1,label:"deep",text:"deep",value:"deep"},{id:2,label:"shallow",text:"shallow",value:"shallow"}],options_denticle:[{id:1,label:"+",text:"+",value:"+"},{id:2,label:"0",text:"0",value:"0"}]}},watch:{"class1.mandible_tooth":function(e){e?1===e.id?(this.class1.article_antenna=null,this.class1.article_length="(2) = (3+4)",this.class1.labrum="triangle, pointed",this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null):2===e.id&&(this.class1.article_antenna=null,this.class1.article_length=null,this.class1.labrum=null,this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null):(this.class1.article_antenna=null,this.class1.article_length=null,this.class1.labrum=null,this.class1.head_shape=null,this.class1.mandible_hookness=null,this.class1.concavity=null)},"class1.head_shape":function(e){this.opsi_step2=null,e&&this.class1.mandible_hookness&&this.class1.concavity&&this.checkStep2()},"class1.mandible_hookness":function(e){this.opsi_step2=null,e&&this.class1.head_shape&&this.class1.concavity&&this.checkStep2()},"class1.concavity":function(e){this.opsi_step2=null,e&&this.class1.mandible_hookness&&this.class1.head_shape&&this.checkStep2()},"class1.denticle":function(e){this.opsi_step3=null,this.opsi_step3="+"===e?1:2}},methods:{reset:function(){this.class1={mandible_tooth:null,article_antenna:null,article_length:null,labrum:null,head_shape:null,mandible_hookness:null,concavity:null,denticle:null,antena_article3:null,antena_length3:null,labrum_shape3:null,mandible_hookness3:null,incurved_tips3:null,head_hair3:null,antenna_articles3:null,head_length_with_mandible3:null,articles_length3:null,labrum_dimension:null,labrums_tip_shape:null}},checkStep2:function(){var e=0;"deep"===this.class1.concavity&&(e+=1),this.class1.mandible_hookness>=4&&(e+=1),"rectangularly oval almost round"===this.class1.head_shape&&(e+=1),this.opsi_step2=e>=2?1:2},checkResult:function(){this.class1.mandible_tooth&&this.class1.article_antenna&&this.class1.article_length&&this.class1.labrum?(this.result="globicola",this.$emit("result",this.result)):"+"===this.class1.denticle?(this.result="insepratus",this.$emit("result",this.result)):"0"===this.class1.denticle?(this.result=this.checkOrder3Deep(),this.$emit("result",this.result)):this.$emit("result","not found")},checkOrder3Deep:function(){var e=this.class1,t=0,a=0,l=0;return"+"===e.head_hair3?t+=1:(a+=1,l+=1),15===e.antenna_articles3?(t+=1,a+=1):l+=1,"L : 1.4 - 1.5"===e.head_length_with_mandible3?a+=1:"L : 1.3 - 1.4"===e.head_length_with_mandible3?l+=1:t+=1,"(2) = (3+4)"===e.articles_length3?(a+=1,t+=1):l+=1,"L ~> W"===e.articles_length3?t+=1:"L < 0.75 (left mandible)"===e.articles_length3?a+=1:l+=1,"broadly rounded"===e.articles_length3?(t+=1,a+=1):l+=1,!0==t>=a?t>=l?"pakistanicus":"jacobsoni":a>=l?"pallidus":"jacobsoni"}}},w,!1,null,null,null).exports,F={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{class1:{mandible_tooth:null,is_next:!0},options_mandible:[{id:1,label:"sharp pointed tooth near the tip",text:"sharp pointed tooth near the tip",value:"sharp pointed tooth near the tip"},{id:2,label:"no tooth or rudimentary tooth",text:"no tooth or rudimentary tooth",value:"no tooth or rudimentary tooth"}]}},watch:{"class1.mandible_tooth":function(e){e?this.$emit("phaseOne",this.class1):this.$emit("phaseOne",null)}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",[a("b-form-group",{staticClass:"form-number"},[a("label",[e._v(" Left mandible tooth ")]),e._v(" "),a("vue-multiselect",{attrs:{options:e.options_mandible,placeholder:"Select one",label:"label","track-by":"label"},model:{value:e.class1.mandible_tooth,callback:function(t){e.$set(e.class1,"mandible_tooth",t)},expression:"class1.mandible_tooth"}})],1)],1)],1)],1)},staticRenderFns:[]},R=a("VU/8")(F,T,!1,null,null,null).exports,C={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{class1:{article_antenna:null,article_length:null,labrum:null,head_shape:null,mandible_hookness:null,concavity:null,is_next:!1,result:null},options_article_length:[{id:1,label:"(2) = (3+4)",text:"(2) = (3+4)",value:"(2) = (3+4)"}],options_concavity:[{id:1,label:"deep",text:"deep",value:1},{id:2,label:"shallow",text:"shallow",value:2}],options_labrum:[{id:1,label:"triangle, pointed",text:"triangle, pointed",value:"triangle, pointed"}],options_head_shape:[{id:1,label:"rectangularly oval almost round",text:"rectangularly oval almost round",value:1},{id:2,label:"relongated oval, narrowed anteriorly",text:"relongated oval, narrowed anteriorly",value:2}],options_mandible_hookness:[{id:1,label:"strongly hooked (++++ --\x3e +++++++)",text:"strongly hooked (++++ --\x3e +++++++)",value:1},{id:2,label:"strongly hooked (++++ --\x3e +++++++)",text:"strongly hooked (++++ --\x3e +++++++)",value:2}]}},watch:{data:function(){this.class1={article_antenna:null,article_length:null,labrum:null,head_shape:null,mandible_hookness:null,concavity:null,next_step:null,result:null}},class1:{handler:function(e){1===this.data.mandible_tooth.id?this.checkOne(e):this.checkTwo(e)},deep:!0}},methods:{checkOne:function(e){e.article_antenna&&e.article_length&&e.labrum?(e.result="globicola",this.$emit("phaseTwo",e)):this.$emit("phaseTwo",null)},checkTwo:function(e){if(e.head_shape&&e.mandible_hookness&&e.concavity){var t=(1===e.head_shape?1:0)+(1===e.mandible_hookness?1:0)+(1===e.concavity?1:0);e.next_step=t>=2?1:2,e.result=null,this.$emit("phaseTwo",e)}else this.$emit("phaseTwo",null)}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"step-2"},[1===e.data.mandible_tooth.id?a("b-row",[a("b-col",[a("label",[e._v(" Antenna articles ")]),e._v(" "),a("b-form-input",{attrs:{type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.article_antenna,callback:function(t){e.$set(e.class1,"article_antenna",e._n(t))},expression:"class1.article_antenna"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Articles length ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_article_length},model:{value:e.class1.article_length,callback:function(t){e.$set(e.class1,"article_length",t)},expression:"class1.article_length"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Labrum ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum},model:{value:e.class1.labrum,callback:function(t){e.$set(e.class1,"labrum",t)},expression:"class1.labrum"}})],1)],1):a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("label",[e._v(" Head shape ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_head_shape},model:{value:e.class1.head_shape,callback:function(t){e.$set(e.class1,"head_shape",t)},expression:"class1.head_shape"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Mandible hookness (1-10) ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_mandible_hookness},model:{value:e.class1.mandible_hookness,callback:function(t){e.$set(e.class1,"mandible_hookness",t)},expression:"class1.mandible_hookness"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Base outer margin concavity ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_concavity},model:{value:e.class1.concavity,callback:function(t){e.$set(e.class1,"concavity",t)},expression:"class1.concavity"}})],1)],1)],1)])},staticRenderFns:[]},O=a("VU/8")(C,S,!1,null,null,null).exports,L={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{data_container:{result:null,next_step:null},class1:{denticle:null,labrum_shape:null,result:null,next_step:null},options_denticle:[{id:1,label:"+",text:"+",value:1},{id:2,label:"0",text:"0",value:2}],options_labrum_shape:[{id:1,label:"lancet shape",text:"lancet shape",value:"lancet shape"},{id:2,label:"lancet shape",text:"lancet shape",value:"lancet shape"},{id:3,label:"elongated thin tounge shape",text:"elongated thin tounge shape ",value:"elongated thin tounge shape "}]}},watch:{data:{handler:function(e){this.data_container=e,this.class1={denticle:null,labrum_shape:null,result:null,next_step:null}},deep:!0},class1:{handler:function(e){1===this.data_container.next_step?this.checkOne(e):this.checkTwo(e)},deep:!0}},created:function(){this.data_container=this.data},methods:{checkOne:function(e){e.denticle?(e.next_step=e.denticle,this.$emit("phaseThree",e)):this.$emit("phaseThree",null)},checkTwo:function(e){e.labrum_shape?(e.next_step=e.labrum_shape,this.$emit("phaseThree",e)):this.$emit("phaseThree",null)}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.data_container.result?e._e():a("div",[a("div",{staticClass:"step-3"},[1===e.data_container.next_step?a("b-row",[a("b-col",[a("label",[e._v(" Mandible's denticle  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_denticle},model:{value:e.class1.denticle,callback:function(t){e.$set(e.class1,"denticle",t)},expression:"class1.denticle"}})],1)],1):a("b-row",[a("b-col",[a("label",[e._v(" Labrum's shape  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum_shape},model:{value:e.class1.labrum_shape,callback:function(t){e.$set(e.class1,"labrum_shape",t)},expression:"class1.labrum_shape"}})],1)],1)],1)])},staticRenderFns:[]},M=a("VU/8")(L,D,!1,null,null,null).exports,E={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{class1:{antena_article3:null,antena_length3:null,labrum_shape3:null,result:null,next_step:null},options_antena_length3:[{id:1,label:"(2) ~> (3)",text:"(2) ~> (3)",value:"(2) ~> (3)"}],options_labrum_shape3:[{id:1,label:"toungue shape",text:"toungue shape",value:"toungue shape"}]}},watch:{data:{handler:function(e){this.data_container=e,this.class1={antena_article3:null,antena_length3:null,labrum_shape3:null,result:null,next_step:null}},deep:!0},class1:{handler:function(e){1===this.data_container.next_step?this.checkOne(e):this.checkTwo(e)},deep:!0}},created:function(){this.data_container=this.data},methods:{checkOne:function(e){e.antena_article3&&e.antena_length3&&e.labrum_shape3?(e.next_step=null,e.result="insepratus",this.$emit("phaseFour",e)):this.$emit("phaseFour",null)},checkTwo:function(e){e.labrum_shape?(e.next_step=e.labrum_shape,this.$emit("phaseFour",e)):this.$emit("phaseFour",null)}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.data_container.result?e._e():a("div",[a("div",{staticClass:"step-4"},[1===e.data_container.next_step?a("b-row",[a("b-col",[a("label",[e._v(" antenna articles   ")]),e._v(" "),a("b-form-input",{attrs:{min:0,max:20,type:"number",required:"",placeholder:"Enter Number"},model:{value:e.class1.antena_article3,callback:function(t){e.$set(e.class1,"antena_article3",e._n(t))},expression:"class1.antena_article3"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" articles length ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_antena_length3},model:{value:e.class1.antena_length3,callback:function(t){e.$set(e.class1,"antena_length3",t)},expression:"class1.antena_length3"}})],1),e._v(" "),a("b-col",[a("label",[e._v(" Labrum shape  ")]),e._v(" "),a("b-form-select",{attrs:{options:e.options_labrum_shape3},model:{value:e.class1.labrum_shape3,callback:function(t){e.$set(e.class1,"labrum_shape3",t)},expression:"class1.labrum_shape3"}})],1)],1):e._e()],1)])},staticRenderFns:[]},U={components:{phaseOne:R,phaseTwo:O,phaseThree:M,phaseFour:a("VU/8")(E,N,!1,null,null,null).exports},data:function(){return{phase_1:null,phase_2:null,phase_3:null,phase_4:null}},methods:{phase:function(e,t){this["phase_"+t]=e},checkResult:function(){for(var e=4;e>=1;e-=1)if(this["phase_"+e]&&this["phase_"+e].result)return this.$emit("result",this["phase_"+e].result);return this.$emit("result","not found")}}},H={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v(" Microtermes ")]),e._v(" "),a("div",{staticClass:"step-1"},[a("phaseOne",{on:{phaseOne:function(t){e.phase(t,"1")}}}),e._v(" "),e.phase_1?a("div",[a("phaseTwo",{attrs:{data:e.phase_1},on:{phaseTwo:function(t){e.phase(t,"2")}}})],1):e._e(),e._v(" "),e.phase_2?a("div",[a("phaseThree",{attrs:{data:e.phase_2},on:{phaseThree:function(t){e.phase(t,"3")}}})],1):e._e(),e._v(" "),e.phase_3?a("div",[a("phaseFour",{attrs:{data:e.phase_3},on:{phaseFour:function(t){e.phase(t,"4")}}})],1):e._e()],1)])},staticRenderFns:[]},B={name:"Home",components:{classificationv1:$,classificationOne:a("VU/8")(U,H,!1,null,null,null).exports},data:function(){return{result:null}},watch:{},methods:{resultData:function(e){this.result=e},resetData:function(){this.$refs.classification1.reset(),this.result=null},checkData:function(){this.$refs.classification1.checkResult()}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Home"},[a("div",[a("b-button",{attrs:{variant:"danger"},on:{click:e.resetData}},[e._v("Reset")]),e._v(" "),a("b-container",{staticClass:"container-card",attrs:{fluid:""}},[a("b-row",[a("b-col"),e._v(" "),a("b-col",{staticClass:"content-currency",attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[a("classificationOne",{ref:"classification1",on:{result:e.resultData}}),e._v(" "),a("br"),e._v(" "),a("b-button",{attrs:{variant:"success"},on:{click:e.checkData}},[e._v("Submit")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v("\n          Spesies: "+e._s(e.result)+"\n        ")],1),e._v(" "),a("b-col")],1)],1)],1)])},staticRenderFns:[]},j=a("VU/8")(B,A,!1,null,null,null).exports,V=a("pFYg"),P=a.n(V),q={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{selected:""}},watch:{selected:function(e){e?this.isFinished(e):this.$emit("phaseOne",null)}},methods:{change:function(e){this.selected=e},isFinished:function(e){"1"===e?this.$emit("phaseOne",{value:this.selected,result:"Microtermes globicola "}):this.$emit("phaseOne",this.selected)}}},J={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),e._v(" "),a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Defining tooth near the tip of the left Mandible"}},[a("b-form-radio",{attrs:{name:"some-radios",value:"1"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("Presence\n        ")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),e._t("1"),e._v(" "),a("br"),e._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"2"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("Not Presence, only denticle\n        ")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),e._t("2"),e._v(" "),a("br")],2)],1)],1),e._v(" "),a("hr")],1)},staticRenderFns:[]},W=a("VU/8")(q,J,!1,null,null,null).exports,I={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{selected:""}},watch:{selected:function(e){e?this.isFinished(e):this.$emit("phaseTwo",null)},data:function(e){"1"===e&&this.$emit("phaseTwo",null)}},methods:{change:function(e){this.selected=e},isFinished:function(e){"1"===e?this.$emit("phaseTwo",{value:this.selected,result:"Microtermes pakistanicus*"}):this.$emit("phaseTwo",this.selected)}}},K={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["2"===e.data?l("div",[l("hr"),e._v(" "),l("b-form-group",{attrs:{label:"The head's and left mandible shape"}},[l("b-form-radio",{attrs:{name:"some-radios",value:"1"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("qCCK"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Almost round with rectangular base (P=L=Diag) + S-invS form mandible\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("1"),e._v(" "),l("br"),e._v(" "),l("b-form-radio",{attrs:{name:"some-radios",value:"2"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("n2+x"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Tear drop with rounded side in the posterior + /-\\ form Mandible\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("2"),e._v(" "),l("br")],2),e._v(" "),l("hr")],1):e._e()])},staticRenderFns:[]},Y=a("VU/8")(I,K,!1,null,null,null).exports,G={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{selected:""}},watch:{selected:function(e){e?this.isFinished(e):this.$emit("phaseThree",null)},data:function(e){"1"===e&&this.$emit("phaseThree",null)}},methods:{change:function(e){this.selected=e},isFinished:function(e){"1"===e||"2"===e?this.$emit("phaseThree",{value:this.selected,result:"1"===e?"Microtermes mycophagus":"Microtermes incertoides"}):this.$emit("phaseThree",this.selected)}}},z={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["2"===e.data?l("div",[l("hr"),e._v(" "),l("b-form-group",{attrs:{label:"The labrum's shape "}},[l("b-form-radio",{attrs:{name:"some-radios",value:"1"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("Kqh0"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Tongue\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("1"),e._v(" "),l("br"),e._v(" "),l("b-form-radio",{attrs:{name:"some-radios",value:"2"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("pSC+"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Lancet\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("2"),e._v(" "),l("br"),e._v(" "),l("b-form-radio",{attrs:{name:"some-radios",value:"3"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("JZBy"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Longer and narrow tongue\n\n\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("3"),e._v(" "),l("br")],2),e._v(" "),l("hr")],1):e._e()])},staticRenderFns:[]},X=a("VU/8")(G,z,!1,null,null,null).exports,Q={props:{data:{type:[String,Array,Object,Number,Boolean],default:null}},data:function(){return{selected:""}},watch:{selected:function(e){e?this.isFinished(e):this.$emit("phaseThree",null)},data:function(e){"1"===e&&this.$emit("phaseThree",null)}},methods:{change:function(e){this.selected=e},isFinished:function(e){"1"===e||"2"===e?this.$emit("phaseFour",{value:this.selected,result:"1"===e?"Microtermes unicolor":"Microtermes obesi"}):this.$emit("phaseFour",this.selected)}}},Z={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["3"===e.data?l("div",[l("hr"),e._v(" "),l("b-form-group",{attrs:{label:"The Pronotum's anterior shape"}},[l("b-form-radio",{attrs:{name:"some-radios",value:"1"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("NXqB"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Incised\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("1"),e._v(" "),l("br"),e._v(" "),l("b-form-radio",{attrs:{name:"some-radios",value:"2"},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[l("b-img",{attrs:{height:150,src:a("PSbi"),alt:"Fluid image"}}),e._v(" "),l("br"),e._v("\n        Notched\n      ")],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),e._t("2"),e._v(" "),l("br")],2),e._v(" "),l("hr")],1):e._e()])},staticRenderFns:[]},ee={components:{phaseOne:W,phaseTwo:Y,phaseThree:X,phaseFour:a("VU/8")(Q,Z,!1,null,null,null).exports},data:function(){return{phase_1:null,phase_2:null,phase_3:null,phase_4:null,result:null}},methods:{phase:function(e,t){this["phase_"+t]=e},checkResult:function(){for(var e=null,t=1;t<=4;t+=1)this["phase_"+t]&&"object"===P()(this["phase_"+t])&&null===e&&(e=t);for(var a=4;a>=1;a-=1)if(this["phase_"+a]&&"object"===P()(this["phase_"+a])){if(!(a>e))return void(this.result=this["phase_"+a].result);this["phase_"+a]=null}this.result="not found"}}},te={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h3",[e._v(" Microtermes ")]),e._v(" "),a("div",[a("phaseOne",{on:{phaseOne:function(t){e.phase(t,1)}}},[a("div",{attrs:{slot:e.phase_1},slot:e.phase_1},[a("phaseTwo",{staticClass:"m__l--25",attrs:{data:e.phase_1},on:{phaseTwo:function(t){e.phase(t,2)}}},[a("div",{attrs:{slot:e.phase_2},slot:e.phase_2},[a("phaseThree",{staticClass:"m__l--25",attrs:{data:e.phase_2},on:{phaseThree:function(t){e.phase(t,3)}}},[a("div",{attrs:{slot:e.phase_3},slot:e.phase_3},[a("phaseFour",{staticClass:"m__l--25",attrs:{data:e.phase_3},on:{phaseFour:function(t){e.phase(t,4)}}})],1)])],1)])],1)])],1),e._v(" "),a("br"),e._v(" "),a("b-button",{attrs:{variant:"success"},on:{click:e.checkResult}},[e._v("Check\n  ")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v("\n  Result: "),a("i",[e._v(e._s(e.result))])],1)},staticRenderFns:[]},ae=[{path:"/",name:"Exchange Currency",component:j,meta:{title:"Home"}},{path:"/new",name:"Serangga",component:a("VU/8")(ee,te,!1,null,null,null).exports,meta:{title:"Home"}}];i.a.use(k.a);var le=[ae],ne=[{path:"*",redirect:"/"}],se=ne.concat.apply(ne,le),ie=new k.a({mode:"hash",routes:se});ie.beforeEach(function(e,t,a){if(e.meta.middleware){var l=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],s={from:t,next:a,router:ie,to:e},i=function e(t,a,l){var s=a[l];return s?function(){var i=e(t,a,l+1);s(n()({},t,{next:i}))}:t.next}(s,l,1);return l[0](n()({},s,{next:i}))}return a()});var oe=ie,re=a("ESwS"),ce=a.n(re),ue=a("QIxp"),he=a.n(ue);a("HRs4"),a("Jmt5"),a("9M+g"),a("Ritz"),a("tLvy");window.axios=a("mtWM"),i.a.use(s.VueExtendLayout),i.a.use(o.a),i.a.use(ce.a),i.a.component("vue-multiselect",c.a),i.a.component("tween-num",he.a),i.a.config.productionTip=!1,new i.a(n()({el:"#app",router:oe,store:y},s.layout))},NXqB:function(e,t,a){e.exports=a.p+"static/img/mic_006.911af25.png"},PSbi:function(e,t,a){e.exports=a.p+"static/img/mic_007.4172f24.png"},Ritz:function(e,t){},kDKJ:function(e,t,a){var l={"./default.vue":"lfHO"};function n(e){return a(s(e))}function s(e){var t=l[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(l)},n.resolve=s,e.exports=n,n.id="kDKJ"},lfHO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"Headful",props:{title:{type:String,default:""}},watch:{title:function(){document.title=this.title}},created:function(){document.title=this.title}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},s={name:"default",components:{Headful:a("VU/8")(l,n,!1,null,null,null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Headful",{attrs:{title:this.$route.meta.title}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]},o=a("VU/8")(s,i,!1,null,null,null);t.default=o.exports},"n2+x":function(e,t,a){e.exports=a.p+"static/img/mic_002.8367958.png"},"pSC+":function(e,t,a){e.exports=a.p+"static/img/mic_004.da0ecf0.png"},qCCK:function(e,t,a){e.exports=a.p+"static/img/mic_001.216ed3a.png"},tLvy:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dfb3d3db8d4e7e1909fd.js.map