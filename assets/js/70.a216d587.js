(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{403:function(e,t,s){"use strict";s.r(t);var i=s(42),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"群集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#群集"}},[e._v("#")]),e._v(" 群集")]),e._v(" "),s("p",[e._v("群集仅适用于AdoJobstore（JobStoreTX）。 功能包括负载平衡和作业故障转移（如果JobDetail的“请求恢复”标志设置为true）")]),e._v(" "),s("p",[e._v("Clustering currently only works with the AdoJobstore ("),s("code",[e._v("JobStoreTX")]),e._v(').\nFeatures include load-balancing and job fail-over (if the JobDetail\'s "request recovery" flag is set to true).')]),e._v(" "),s("p",[e._v("通过将quartz.jobStore.clustered属性设置为“ true”来启用集群。 群集中的每个实例应使用相同的石英属性副本。 例外是使用相同的属性，但有以下允许的例外：不同的线程池大小，以及crystal.scheduler.instanceId属性的不同值。 集群中的每个节点必须具有唯一的instanceId，可以通过将AUTO用作此属性的值来轻松完成（无需其他属性文件）。")]),e._v(" "),s("p",[e._v("Enable clustering by setting the "),s("code",[e._v("quartz.jobStore.clustered")]),e._v(' property to "true".\nEach instance in the cluster should use the same copy of the quartz properties.\nExceptions of this would be to use properties that are identical, with the following allowable exceptions:\nDifferent thread pool size, and different value for the '),s("code",[e._v("quartz.scheduler.instanceId")]),e._v(" property.\nEach node in the cluster MUST have a unique instanceId, which is easily done (without needing different properties files) by placing "),s("code",[e._v("AUTO")]),e._v(" as the value of this property.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("切勿在单独的计算机上运行集群，除非使用非常定期运行的某种形式的时间同步服务（守护程序）同步它们的时钟（时钟之间的时间间隔必须在1秒钟之内）。\n参见[https://www.nist.gov/pml/time-and-frequency-division/services/internet-time-service-its](https://www.nist.gov/pml/time-and-frequency -division / services / internet-time-service-its）（如果您不熟悉此操作）")])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("切勿针对正在运行的任何其他实例（“ Start（）” ed）的同一组数据库表启动（“ scheduler.Start（）”）非集群实例。\n您可能会遇到严重的数据损坏，并且肯定会遇到不稳定的行为")])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("监视并确保你的服务器节点具有足够的CPU资源来完成作业。\n当某些节点处于100％CPU中时，它们可能无法更新作业存储，而其他节点可以认为这些作业丢失并通过重新运行来恢复它们")])])])}),[],!1,null,null,null);t.default=o.exports}}]);