(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{319:function(t,r,n){"use strict";var o=n(0),e=n(21),i=n(11),s=n(1),u=n(29),a=[],c=a.sort,l=s((function(){a.sort(void 0)})),p=s((function(){a.sort(null)})),f=u("sort");o({target:"Array",proto:!0,forced:l||!p||!f},{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),e(t))}})},362:function(t,r,n){"use strict";n.r(r);n(24),n(64),n(319);var o={computed:{posts:function(){return this.$site.pages.filter((function(t){return"post"===t.id&&!0!==t.frontmatter.hidden})).sort((function(t,r){return r.path.localeCompare(t.path)})).map((function(t){return t.dateString=t.path.substring(1,11),t}))}}},e=n(42),i=Object(e.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",t._l(t.posts,(function(r){return n("div",[n("h2",[n("router-link",{attrs:{to:r.path}},[t._v(t._s(r.dateString+" "+r.frontmatter.title))])],1),t._v(" "),n("p",[t._v(t._s(r.frontmatter.description))]),t._v(" "),n("p",[n("router-link",{attrs:{to:r.path}},[t._v("Read more")])],1)])})),0)}),[],!1,null,null,null);r.default=i.exports}}]);