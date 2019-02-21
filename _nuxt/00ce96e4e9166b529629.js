(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{310:function(t,e,a){"use strict";var r={name:"YesNo",props:{value:{type:Boolean,required:!0},label:String},data:function(){return{newValue:this.value}},watch:{value:function(t){this.newValue=t},newValue:function(t){this.$emit("input",t)}}},s=a(15),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v(t._s(t.label))]),a("div",{staticClass:"control"},[a("div",{staticClass:"buttons has-addons"},[a("span",{ref:"button-yes",staticClass:"button button-yes",class:{"is-success is-selected":t.newValue},on:{click:function(e){t.newValue=!0}}},[t._m(0),a("span",[t._v(t._s(t.$t("utils.Yes")))])]),a("span",{ref:"button-no",staticClass:"button button-no",class:{"is-danger is-selected":!t.newValue},on:{click:function(e){t.newValue=!1}}},[t._m(1),a("span",[t._v(t._s(t.$t("utils.No")))])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-check"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-times"})])}],!1,null,null,null);i.options.__file="YesNo.vue";e.a=i.exports},324:function(t,e,a){"use strict";a(61),a(26);var r=a(1),s=a(4),i=a(362),o=a(379),n=a(344),u=a.n(n),l=a(310),p={name:"SimpleTrade",props:{tradeArray:{type:Object,required:!0}},data:function(){var t={i18nPrefix:"components.simple_trade.",agesGoods:o.agesGoods,value:0,values:{},currentAge:null,results:{},split:!1,splitValueId:"splitValue"+this._uid,splitValue:1e3,maxSplitValue:1e3,showRatio:!1,errors:{splitValue:!1}};for(var e in o.agesGoods)t.values[e]=0,t.results[e]={show:!1,value:0,ratio:0,split:""};return t},watch:{split:function(){this.$data.splitValue=1e3,this.compute()},splitValue:function(t){s.a.inRange(t,0,1e3)?(this.$data.errors.splitValue=!1,this.compute()):this.$data.errors.splitValue=!0}},methods:{resetForm:function(t){for(var e in o.agesGoods)t!==e&&r.default.set(this.$data.values,e,0),this.$data.results[e]={show:!1,value:0,ratio:0,split:""}},resetFormIfAllZero:function(t){for(var e in o.agesGoods)if(this.$data.values[e]>0)return;this.resetForm(t)},haveError:function(t){return t in u.a?this.$data.values[t]>1e3?"is-warning":void 0:this.$data.errors[t]?"is-danger":""},compute:function(){var t=this.$data.currentAge;for(var e in this.$props.tradeArray[t])if(s.a.inRange(this.$props.tradeArray[t][e],.5,2)){var a=Math.round(this.$props.tradeArray[t][e]*this.$data.values[t]),o=a;this.$data.split&&(o=Object(i.e)(this.$data.values[t],this.$data.splitValue,this.$props.tradeArray[t][e],this.$props.tradeArray[e][t]))instanceof Array&&(o=0===o[1].from?this.$t("components.trade.split_message.common",{count:this.$formatNumber(o[0].count),valueFrom:this.$formatNumber(o[0].from),ageFrom:this.$t("foe_data.age_short."+t),valueTo:this.$formatNumber(o[0].to),ageTo:this.$t("foe_data.age_short."+e)}):this.$t("components.trade.split_message.multi",{count:this.$formatNumber(o[0].count),valueFrom:this.$formatNumber(o[0].from),ageFrom:this.$t("foe_data.age_short."+t),valueTo:this.$formatNumber(o[0].to),ageTo:this.$t("foe_data.age_short."+e),valueFromSingle:this.$formatNumber(o[1].from),valueToSingle:this.$formatNumber(o[1].to)})),r.default.set(this.$data.results[e],"show",!0),this.$data.results[e].value=this.$formatNumber(a),this.$data.results[e].split=o,this.$data.results[e].ratio=s.a.roundTo(this.$props.tradeArray[t][e],2)}},getBestRates:function(t){this.resetForm(t),this.$data.currentAge=t,this.compute()}},components:{YesNo:l.a}},h=a(15),f=Object(h.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title is-4 margin-top-one-em"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("yes-no",{attrs:{label:t.$t(t.i18nPrefix+"slpit")},model:{value:t.split,callback:function(e){t.split=e},expression:"split"}}),a("yes-no",{attrs:{label:t.$t(t.i18nPrefix+"show_ratio")},model:{value:t.showRatio,callback:function(e){t.showRatio=e},expression:"showRatio"}})],1),a("div",{staticClass:"column is-half"},[a("b-field",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}],attrs:{label:t.$t("components.trade.split_value",{count:t.maxSplitValue}),"label-for":t.splitValueId,type:t.haveError("splitValue")}},[a("b-input",{attrs:{id:t.splitValueId,type:"number",min:"0",max:t.maxSplitValue,name:"splitValue",autocomplete:"off"},model:{value:t.splitValue,callback:function(e){t.splitValue=t._n(e)},expression:"splitValue"}})],1)],1)]),a("div",{staticClass:"table-wrapper"},[a("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th1")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th2")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th3")))]),a("th",[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.th4")))]),a("th",{directives:[{name:"show",rawName:"v-show",value:t.showRatio,expression:"showRatio"}]},[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.ratio")))]),a("th",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}]},[t._v(t._s(t.$t(t.i18nPrefix+"table.thead.split")))])])]),a("tbody",t._l(t.agesGoods,function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(t.$t("foe_data.age."+r)))]),a("td",t._l(e.goods,function(e){return a("figure",{staticClass:"image-inherit image is-24x24"},[a("img",{attrs:{src:"/img/foe/goods/"+e.key+".png",alt:t.$t("foe_data.goods."+e.key),title:t.$t("foe_data.goods."+e.key)}})])})),a("td",[a("b-field",{attrs:{type:t.haveError(r)}},[a("b-input",{attrs:{type:"number",min:"0",name:r+"_value",autocomplete:"off"},on:{input:function(e){e>0?t.getBestRates(r):t.resetFormIfAllZero(r)}},model:{value:t.values[r],callback:function(e){t.$set(t.values,r,t._n(e))},expression:"values[key]"}})],1)],1),a("td",[t.$data.results[r].show?a("p",[t._v(t._s(t.$data.results[r].value))]):t._e()]),a("td",{directives:[{name:"show",rawName:"v-show",value:t.showRatio,expression:"showRatio"}]},[a("p",[t._v(t._s(t.$data.results[r].ratio))])]),a("td",{directives:[{name:"show",rawName:"v-show",value:t.split,expression:"split"}]},[t.$data.results[r].show?a("p",[t._v(t._s(t.$data.results[r].split))]):t._e()])])}))])])])},[],!1,null,null,null);f.options.__file="SimpleTrade.vue";e.a=f.exports},325:function(t,e,a){"use strict";a(26),a(60);var r=a(1),s=a(362),i=a(4),o={name:"trade",props:{tradeInput:{type:Object,required:!0}},data:function(){var t=Object.keys(this.$props.tradeInput.value)[0];return{i18nPrefix:"components.trade.",iHave:t,iWant:t,iHaveId:"iHave"+this._uid,iWantId:"iWant"+this._uid,splitValueId:"splitValue"+this._uid,splitValue:1e3,maxSplitValue:1e3,valueId:"iWantValue"+this._uid,value:0,result:[],errors:{iHave:!1,iWant:!1,splitValue:!1,value:!1},warnings:{iHave:!1,iWant:!1,splitValue:!1,value:!1}}},watch:{iHave:function(t){Object.keys(this.$props.tradeInput.value).indexOf(t)>=0?(this.$data.errors.iHave=!1,this.compute()):this.$data.errors.iHave=!0},iWant:function(t){Object.keys(this.$props.tradeInput.value).indexOf(t)>=0?(this.$data.errors.iWant=!1,this.compute()):this.$data.errors.iWant=!0},splitValue:function(t){i.a.inRange(t,1,1e3)?(this.$data.errors.splitValue=!1,this.compute()):this.$data.errors.splitValue=!0},value:function(t){t>=0?(t<=1e3?(this.$data.errors.value=!1,this.$data.warnings.value=!1):(this.$data.errors.value=!1,this.$data.warnings.value=!0),this.compute()):this.$data.errors.value=!0}},methods:{haveError:function(t){return this.$data.errors[t]?"is-danger":this.$data.warnings[t]?"is-warning":""},compute:function(){0===this.$data.value?r.default.set(this.$data,"result",[]):r.default.set(this.$data,"result",Object(s.c)(this.$props.tradeInput.type,this.$data.iHave,this.$data.iWant,this.$data.value,this.$data.splitValue))}}},n=a(15),u=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title is-4"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.i_have"),"label-for":t.iHaveId}},[a("b-select",{attrs:{id:t.iHaveId,expanded:""},model:{value:t.iHave,callback:function(e){t.iHave=e},expression:"iHave"}},t._l(t.tradeInput.value,function(e,r){return a("option",{key:r,domProps:{value:r}},[t._v(t._s(t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+r)))])}))],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"split_value",{count:t.maxSplitValue}),"label-for":t.splitValueId,type:t.haveError("splitValue")}},[a("b-input",{attrs:{id:t.splitValueId,type:"number",min:"0",max:t.maxSplitValue,name:"splitValue",autocomplete:"off"},model:{value:t.splitValue,callback:function(e){t.splitValue=t._n(e)},expression:"splitValue"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.i_want"),"label-for":t.iWantId}},[a("b-select",{attrs:{id:t.iWantId,expanded:""},model:{value:t.iWant,callback:function(e){t.iWant=e},expression:"iWant"}},t._l(t.tradeInput.value,function(e,r){return a("option",{key:r,domProps:{value:r}},[t._v(t._s(t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+r)))])}))],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"label.amount"),type:t.haveError("value"),"label-for":t.valueId}},[a("b-input",{attrs:{id:t.valueId,type:"number",min:"0",name:t.valueId,autocomplete:"off"},model:{value:t.value,callback:function(e){t.value=t._n(e)},expression:"value"}})],1)],1)]),t.result.length>0?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"message.result",{from:t.$formatNumber(t.result[0].amount),to:t.$formatNumber(t.value),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+t.iHave),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age":"goods")+"."+t.iWant),count:t.splitValue})))]):t._e(),t.result.length>1?a("ul",t._l(t.result,function(e,r){return r<t.result.length-1?a("li",{key:r},[e.split[1].from>0?a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.multi",{count:t.$formatNumber(e.split[0].count),valueFrom:t.$formatNumber(e.split[0].from),valueTo:t.$formatNumber(e.split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[r+1].key),valueFromSingle:t.$formatNumber(e.split[1].from),valueToSingle:t.$formatNumber(e.split[1].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[r+1].key)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(e.amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key)})))]):a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.common",{count:t.$formatNumber(e.split[0].count),valueFrom:t.$formatNumber(e.split[0].from),valueTo:t.$formatNumber(e.split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[r+1].key),valueFromSingle:t.$formatNumber(e.split[1].from),valueToSingle:t.$formatNumber(e.split[1].to)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(e.amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+e.key)})))])]):t._e()})):t._e(),1===t.result.length?a("ul",[a("li",[t.result[0].split[1].from>0?a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.multi",{count:t.$formatNumber(t.result[0].split[0].count),valueFrom:t.$formatNumber(t.result[0].split[0].from),valueTo:t.$formatNumber(t.result[0].split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),valueFromSingle:t.$formatNumber(t.result[0].split[1].from),valueToSingle:t.$formatNumber(t.result[0].split[1].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(t.result[0].amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)})))]):a("span",[t._v(t._s(t.$t(t.i18nPrefix+"split_message.common",{count:t.$formatNumber(t.result[0].split[0].count),valueFrom:t.$formatNumber(t.result[0].split[0].from),valueTo:t.$formatNumber(t.result[0].split[0].to),ageFrom:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),ageTo:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key),valueFromSingle:t.$formatNumber(t.result[0].split[1].from),valueToSingle:t.$formatNumber(t.result[0].split[1].to)}))+" "+t._s(t.$t(t.i18nPrefix+"message.total",{amount:t.$formatNumber(t.result[0].amount),key:t.$t("foe_data."+(t.tradeInput.age?"age_short":"goods")+"."+t.result[0].key)})))])])]):t._e()])},[],!1,null,null,null);u.options.__file="Trade.vue";e.a=u.exports},362:function(t,e,a){"use strict";a.d(e,"e",function(){return I}),a.d(e,"c",function(){return N}),a.d(e,"b",function(){return S}),a.d(e,"d",function(){return P}),a.d(e,"a",function(){return T});a(61);var r=a(3),s=a.n(r),i=(a(41),a(42),a(30),a(26),a(60),a(5)),o=a.n(i),n=a(12),u=a.n(n),l=a(13),p=a.n(l),h=a(14),f=a.n(h),c=a(54).Enum,d=a(797),m=a(344),v=a(379),g=a(7),_=function(t){function e(){return o()(this,e),u()(this,p()(e).apply(this,arguments))}return f()(e,t),e}(c);function y(t){var e,a=0;do{a+=(e=0===a?t:v.agesCost[e.unrefined][0]).coins+e.supplies}while(null!==e.unrefined);return a}_.initEnum(["SIMPLE","FAIR"]);var b={SIMPLE:function(){var t={};for(var e in v.agesCost){t[e]={};var a=Object.keys(v.agesCost).indexOf(e);for(var r in v.agesCost){var s=Object.keys(v.agesCost).indexOf(r);t[e][r]=s===a-1?2:s===a+1?.5:s===a?1:0}}return t}(),FAIR:function(){var t={};for(var e in v.agesCost)for(var a in t[e]={},v.agesCost)t[e][a]=y(v.agesCost[e][0])/y(v.agesCost[a][0]);return t}()};function $(t,e){var a=[];for(var r in t[e])t[e][r]>=.5&&t[e][r]<=2&&a.push({key:r,cost:t[e][r]});return a}function w(t,e,a){var r=[],s=a;do{r.push(t[s].key),s=t[s].parent}while(s!==e);return e!==a&&r.push(e),r}function k(t,e,a,r){for(var s=function(t,e,a){var r=Object.keys(b[t.name]),s=r.indexOf(e),i=r.indexOf(a),o=new d({comparator:function(t,e){return s<i?t.cost<e.cost?-1:t.cost>e.cost?1:0:t.cost>e.cost?-1:1}});o.queue({key:e,cost:0});var n,u={};if(s===i)return u[a]={key:a,cost:1,parent:a},w(u,e,a);do{if((n=o.dequeue()).key===a)return w(u,e,a);var l=!0,p=!1,h=void 0;try{for(var f,c=$(b[t.name],n.key)[Symbol.iterator]();!(l=(f=c.next()).done);l=!0){var m=f.value;Object.keys(u).indexOf(m.key)<0&&(o.queue({key:m.key,cost:m.cost+n.cost}),u[m.key]={key:m.key,cost:m.cost+n.cost,parent:n.key})}}catch(t){p=!0,h=t}finally{try{l||null==c.return||c.return()}finally{if(p)throw h}}}while(0!==o.length)}(t,e,a),i=[{key:s[0],amount:r}],o=1;o<s.length;o++)i.push({key:s[o],amount:Math.ceil(i[o-1].amount*b[t.name][s[o-1]][s[o]])});return i.reverse()}function x(t,e,a){if("number"!=typeof a)throw g.InvalidTypeError("number",s()(a),'for parameter "'.concat(t,'" of ').concat(e));if(a<=0)throw g.BoundExceededError(g.AvailableBoundTypes["<="],a,0,'for parameter "'.concat(t,'" of ').concat(e))}function V(t,e,a){var r=Object.keys(m).slice(1);if(r.indexOf(a)<0)throw g.InvalidTypeError(r,a,'for parameter "'.concat(t,'" of ').concat(e))}function I(t,e,a,r){var s="splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom)";x("toValue",s,t),x("splitValue",s,e),x("ratioFromTo",s,a),x("ratioToFrom",s,r);var i=Math.ceil(t*r),o=a<1?i:t,n=[];o<=e?n.push({from:i,to:t,count:1}):n.push({from:i===o?e:Math.round(e*r),to:t===o?e:Math.ceil(e*a),count:Math.floor(o/e)});var u=t-n[0].to*n[0].count;return u<=0?n.push({from:0,to:0}):n.push({from:Math.round(u*r),to:u}),n}function N(t,e,a,r,i){var o="getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue)";if(!(t instanceof _))throw g.InvalidTypeError("TradeArray",s()(t),'for parameter "tradeInput" of '.concat(o));V("iHave",o,e),V("iWant",o,a),x("amount",o,r),x("splitValue",o,i);var n=k(t,e,a,r);if(1===n.length)return n[0].split=I(1e3,i,1,1),n;for(var u=n.length-2;u>=0;u--)if(n[u].split=I(n[u+1].amount,i,b[t.name][n[u].key][n[u+1].key],b[t.name][n[u+1].key][n[u].key]),n[u].split instanceof Array){var l=0;n[u].split.map(function(t){return{value:t.from,count:t.count?t.count:1}}).reduce(function(t,e){void 0!==t&&(l+=t.value*t.count),l+=e.value*e.count}),n[u].amount=l}return n}var S=b.FAIR,P=b.SIMPLE,T=_},797:function(t,e,a){var r;t.exports=function t(e,a,s){function i(n,u){if(!a[n]){if(!e[n]){var l="function"==typeof r&&r;if(!u&&l)return r(n,!0);if(o)return o(n,!0);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}var h=a[n]={exports:{}};e[n][0].call(h.exports,function(t){var a=e[n][1][t];return i(a||t)},h,h.exports,t,e,a,s)}return a[n].exports}for(var o="function"==typeof r&&r,n=0;n<s.length;n++)i(s[n]);return i}({1:[function(t,e,a){var r,s,i,o,n,u={}.hasOwnProperty;r=t("./PriorityQueue/AbstractPriorityQueue"),s=t("./PriorityQueue/ArrayStrategy"),o=t("./PriorityQueue/BinaryHeapStrategy"),i=t("./PriorityQueue/BHeapStrategy"),(n=function(t){function e(t){t||(t={}),t.strategy||(t.strategy=o),t.comparator||(t.comparator=function(t,e){return(t||0)-(e||0)}),e.__super__.constructor.call(this,t)}return function(t,e){for(var a in e)u.call(e,a)&&(t[a]=e[a]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(e,t),e}(r)).ArrayStrategy=s,n.BinaryHeapStrategy=o,n.BHeapStrategy=i,e.exports=n},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,e,a){e.exports=function(){function t(t){var e;if(null==(null!=t?t.strategy:void 0))throw"Must pass options.strategy, a strategy";if(null==(null!=t?t.comparator:void 0))throw"Must pass options.comparator, a comparator";this.priv=new t.strategy(t),this.length=(null!=t&&null!=(e=t.initialValues)?e.length:void 0)||0}return t.prototype.queue=function(t){this.length++,this.priv.queue(t)},t.prototype.dequeue=function(t){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},t.prototype.peek=function(t){if(!this.length)throw"Empty queue";return this.priv.peek()},t.prototype.clear=function(){return this.length=0,this.priv.clear()},t}()},{}],3:[function(t,e,a){var r;r=function(t,e,a){var r,s,i;for(s=0,r=t.length;s<r;)a(t[i=s+r>>>1],e)>=0?s=i+1:r=i;return s},e.exports=function(){function t(t){var e;this.options=t,this.comparator=this.options.comparator,this.data=(null!=(e=this.options.initialValues)?e.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return t.prototype.queue=function(t){var e;e=r(this.data,t,this.comparator),this.data.splice(e,0,t)},t.prototype.dequeue=function(){return this.data.pop()},t.prototype.peek=function(){return this.data[this.data.length-1]},t.prototype.clear=function(){this.data.length=0},t}()},{}],4:[function(t,e,a){e.exports=function(){function t(t){var e,a,r,s,i,o,n,u;for(this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.pageSize=(null!=t?t.pageSize:void 0)||512,this.length=0,n=0;1<<n<this.pageSize;)n+=1;if(1<<n!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=n,this._emptyMemoryPageTemplate=e=[],a=0,i=this.pageSize;0<=i?a<i:a>i;0<=i?++a:--a)e.push(null);if(this._memory=[],this._mask=this.pageSize-1,t.initialValues)for(o=t.initialValues,r=0,s=o.length;r<s;r++)u=o[r],this.queue(u)}return t.prototype.queue=function(t){this.length+=1,this._write(this.length,t),this._bubbleUp(this.length,t)},t.prototype.dequeue=function(){var t,e;return t=this._read(1),e=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,e),this._bubbleDown(1,e)),t},t.prototype.peek=function(){return this._read(1)},t.prototype.clear=function(){this.length=0,this._memory.length=0},t.prototype._write=function(t,e){var a;for(a=t>>this._shift;a>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[a][t&this._mask]=e},t.prototype._read=function(t){return this._memory[t>>this._shift][t&this._mask]},t.prototype._bubbleUp=function(t,e){var a,r,s,i;for(a=this.comparator;t>1&&(r=t&this._mask,t<this.pageSize||r>3?s=t&~this._mask|r>>1:r<2?(s=t-this.pageSize>>this._shift,s+=s&~(this._mask>>1),s|=this.pageSize>>1):s=t-2,i=this._read(s),!(a(i,e)<0));)this._write(s,e),this._write(t,i),t=s},t.prototype._bubbleDown=function(t,e){var a,r,s,i,o;for(o=this.comparator;t<this.length;)if(t>this._mask&&!(t&this._mask-1)?a=r=t+2:t&this.pageSize>>1?(a=(t&~this._mask)>>1,a=1+(a|=t&this._mask>>1)<<this._shift,r=a+1):(a=t+(t&this._mask),r=a+1),a!==r&&r<=this.length)if(s=this._read(a),i=this._read(r),o(s,e)<0&&o(s,i)<=0)this._write(a,e),this._write(t,s),t=a;else{if(!(o(i,e)<0))break;this._write(r,e),this._write(t,i),t=r}else{if(!(a<=this.length))break;if(s=this._read(a),!(o(s,e)<0))break;this._write(a,e),this._write(t,s),t=a}},t}()},{}],5:[function(t,e,a){e.exports=function(){function t(t){var e;this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.length=0,this.data=(null!=(e=t.initialValues)?e.slice(0):void 0)||[],this._heapify()}return t.prototype._heapify=function(){var t,e,a;if(this.data.length>0)for(t=e=1,a=this.data.length;1<=a?e<a:e>a;t=1<=a?++e:--e)this._bubbleUp(t)},t.prototype.queue=function(t){this.data.push(t),this._bubbleUp(this.data.length-1)},t.prototype.dequeue=function(){var t,e;return e=this.data[0],t=this.data.pop(),this.data.length>0&&(this.data[0]=t,this._bubbleDown(0)),e},t.prototype.peek=function(){return this.data[0]},t.prototype.clear=function(){this.length=0,this.data.length=0},t.prototype._bubbleUp=function(t){for(var e,a;t>0&&(e=t-1>>>1,this.comparator(this.data[t],this.data[e])<0);)a=this.data[e],this.data[e]=this.data[t],this.data[t]=a,t=e},t.prototype._bubbleDown=function(t){var e,a,r,s,i;for(e=this.data.length-1;s=1+(a=1+(t<<1)),r=t,a<=e&&this.comparator(this.data[a],this.data[r])<0&&(r=a),s<=e&&this.comparator(this.data[s],this.data[r])<0&&(r=s),r!==t;)i=this.data[r],this.data[r]=this.data[t],this.data[t]=i,t=r},t}()},{}]},{},[1])(1)}}]);