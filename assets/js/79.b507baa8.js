(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{395:function(s,t,e){"use strict";e.r(t);var a=e(42),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("SchedulerListener与ITriggerListeners和IJobListeners非常相似，除了它们在调度程序本身内接收事件的通知-不一定与特定触发器或作业有关的事件。"),e("br"),s._v("\nSchedulerListeners are much like "),e("code",[s._v("ITriggerListener")]),s._v("s and "),e("code",[s._v("IJobListener")]),s._v("s, except they receive notification of\nevents within the scheduler itself - not necessarily events related to a specific trigger or job.")]),s._v(" "),e("p",[s._v("与调度程序有关的事件包括：添加作业/触发器，移除作业/触发器，调度程序内严重错误，通知调度程序正在关闭等。"),e("br"),s._v("\nScheduler-related events include: the addition of a job/trigger, the removal of a job/trigger, a serious error\nwithin the scheduler, notification of the scheduler being shutdown, and others.")]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("确保您的调度程序侦听器永远不会引发异常（使用try-catch），并且它们可以处理内部问题。 当侦听器通知失败时，Quartz无法确定侦听器中所需的逻辑是否成功完成时，Quartz可能会进入不可预测的状态。"),e("br"),s._v("\nMake sure your scheduler listeners never throw an exception (use a try-catch) and that they can handle internal problems.\nQuartz can get in unpredictable state when it is unable to determine whether required logic in listener was completed successfully when listener notification failed.")])]),s._v(" "),e("p",[e("strong",[s._v("ISchedulerListener 接口")])]),s._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ISchedulerListener")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("JobScheduled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Trigger")]),s._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("JobUnscheduled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("TriggerFinalized")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Trigger")]),s._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("TriggersPaused")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("TriggersResumed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" triggerGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("JobsPaused")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" jobName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" jobGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("JobsResumed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" jobName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" jobGroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("SchedulerError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SchedulerException")]),s._v(" cause"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("SchedulerShutdown")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),e("p",[s._v("SchedulerListener已在调度程序的ListenerManager中注册。 SchedulerListeners实际上可以是实现ISchedulerListener接口的任何对象。"),e("br"),s._v("\nSchedulerListeners are registered with the scheduler's "),e("code",[s._v("ListenerManager")]),s._v(".\nSchedulerListeners can be virtually any object that implements the "),e("code",[s._v("ISchedulerListener")]),s._v(" interface.")]),s._v(" "),e("p",[e("strong",[s._v("添加一个SchedulerListener:")])]),s._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[s._v("scheduler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListenerManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddSchedulerListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mySchedListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[e("strong",[s._v("删除一个SchedulerListener:")])]),s._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[s._v("scheduler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListenerManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("RemoveSchedulerListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mySchedListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);