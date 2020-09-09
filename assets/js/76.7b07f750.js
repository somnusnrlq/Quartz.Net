(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{398:function(t,e,a){"use strict";a.r(e);var o=a(42),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"插件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件化"}},[t._v("#")]),t._v(" 插件化")]),t._v(" "),a("p",[t._v("Quartz提供了一个用于插入附加功能的接口（ISchedulerPlugin）")]),t._v(" "),a("p",[t._v("在Quartz.Plugins命名空间中可以找到Quartz附带的提供各种实用程序功能的插件。 它们提供了一些功能，例如在调度程序启动时自动调度作业，记录作业和触发事件的历史记录，并确保虚拟机退出时调度程序干净地关闭")]),t._v(" "),a("p",[t._v("#JobFactory\nQuartz提供了一个接口（"),a("code",[t._v("ISchedulerPlugin")]),t._v("）来插入附加功能"),a("br"),t._v("\nQuartz provides an interface ("),a("code",[t._v("ISchedulerPlugin")]),t._v(") for plugging-in additional functionality.")]),t._v(" "),a("p",[t._v("Quartz附带的提供各种实用程序功能的插件可以在Quartz.Plugins名称空间中找到。\n它们提供了一些功能，例如在调度程序启动时自动调度作业，记录作业历史和触发事件，\n并确保在虚拟机退出时调度程序完全关闭"),a("br"),t._v("\nPlugins that ship with Quartz to provide various utility capabilities can be found documented in the "),a("code",[t._v("Quartz.Plugins")]),t._v(" namespace.\nThey provide functionality such as auto-scheduling of jobs upon scheduler startup, logging a history of job and trigger events,\nand ensuring that the scheduler shuts down cleanly when the virtual machine exits.")]),t._v(" "),a("h2",{attrs:{id:"jobfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobfactory"}},[t._v("#")]),t._v(" JobFactory")]),t._v(" "),a("p",[t._v("触发触发器时，将通过在Scheduler上配置的JobFactory实例化与之关联的Job。\n默认的JobFactory仅激活作业类的新实例。 您可能要创建自己的实现\nJobFactory来完成诸如使应用程序的IoC或DI容器生成/初始化作业实例之类的事情"),a("br"),t._v("\nWhen a trigger fires, the Job it is associated to is instantiated via the JobFactory configured on the Scheduler.\nThe default JobFactory simply activates a new instance of the job class. You may want to create your own implementation\nof JobFactory to accomplish things such as having your application's IoC or DI container produce/initialize the job instance.")]),t._v(" "),a("p",[t._v("请参见 "),a("code",[t._v("IJobFactory")]),t._v(" 接口和关联的"),a("code",[t._v("IScheduler.JobFactory")]),t._v(" setter属性。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("从Quartz 3.1开始，[内置与Microsoft Dependency Injection集成的支持]（../ packages / microsoft-di-integration）在\n允许使用不同的IoC容器实现"),a("br"),t._v("\nSince Quartz 3.1, there's "),a("a",{attrs:{href:"../packages/microsoft-di-integration"}},[t._v("built-in support for integrating with Microsoft Dependency Injection")]),t._v(" which in\nturn allows to use different IoC container implementations.")])]),t._v(" "),a("h2",{attrs:{id:"factory-shipped-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factory-shipped-jobs"}},[t._v("#")]),t._v(" 'Factory-Shipped' Jobs")]),t._v(" "),a("p",[t._v("Quartz还提供了许多实用程序作业，您可以在应用程序中使用它们执行诸如发送之类的操作\n电子邮件和调用远程对象。 这些开箱即用的作业可以在Quartz.Jobs名称空间中找到，并且\n是[Quartz.Jobs NuGet软件包]（https://www.nuget.org/packages/Quartz.Jobs）的一部分"),a("br"),t._v("\nQuartz also provides a number of utility Jobs that you can use in your application for doing things like sending\ne-mails and invoking remote objects. These out-of-the-box Jobs can be found documented in the "),a("code",[t._v("Quartz.Jobs")]),t._v(" namespace and\nare part of the "),a("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Jobs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Jobs NuGet package"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);