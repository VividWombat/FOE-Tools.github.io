(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{308:function(t,n,e){"use strict";var o=e(369),a=e.n(o),r=e(372),s=e.n(r),i=e(375),u=e.n(i),c={name:"Remark",props:{markdown:{type:String,required:!0}},data:function(){return{value:""}},watch:{markdown:function(){this.updateMarkdown()}},methods:{updateMarkdown:function(){var t=this,n=this;a()().use(u.a).use(s.a).process(this.$props.markdown,function(e,o){e?console.error(e):(n.$data.value=o.contents,t.$emit("md-update",o.contents))})}},mounted:function(){this.updateMarkdown()}},l=e(15),d=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.value)}})},[],!1,null,null,null);d.options.__file="Remark.vue";n.a=d.exports},314:function(t,n,e){"use strict";e.r(n);var o=e(308),a={head:function(){return{title:this.$t("routes.changelog.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","changelog"),this.$store.commit("RESTORE_HERO"),{url:"https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/dev/CHANGELOG.md",markdown:""}},mounted:function(){var t=new XMLHttpRequest,n=this;t.open("GET",this.$data.url,!0),t.onload=function(){4===t.readyState&&(200===t.status?n.$data.markdown=t.responseText:console.error(t.statusText))},t.onerror=function(){console.error(t.statusText)},t.send(null)},components:{Remark:o.a}},r=e(15),s=Object(r.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content",staticStyle:{"min-height":"100px"},attrs:{id:"changelog"}},[e("b-loading",{attrs:{"is-full-page":!1,active:0===t.markdown.length},on:{"update:active":function(n){t.$set(t.markdown,"length === 0",n)}}}),e("remark",{attrs:{markdown:t.markdown}})],1)},[],!1,null,null,null);s.options.__file="Changelog.vue";n.default=s.exports}}]);