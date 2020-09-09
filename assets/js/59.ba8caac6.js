(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{371:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("em",[t._v("This document outlines changes needed per version upgrade basis. You need to check the steps for each version you are jumping over. You should also check "),e("a",{attrs:{href:"https://raw.github.com/quartznet/quartznet/master/changelog.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("the complete change log"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you are a new user starting with the latest version, you don't need to follow this guide. Just jump right to "),e("RouterLink",{attrs:{to:"/documentation/quartz-3.x/tutorial/index.html"}},[t._v("the tutorial")])],1)]),t._v(" "),e("p",[t._v("Quartz jumped to async/await world and added support for .NET Core with 3.0 release so most significant changes\ncan be found on APIs and functionality available depending on whether you target full .NET Framework or the .NET Core.")]),t._v(" "),e("h2",{attrs:{id:"packaging-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#packaging-changes"}},[t._v("#")]),t._v(" Packaging changes")]),t._v(" "),e("p",[t._v("Quartz NuGet package was split to more specific packages.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Jobs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Jobs"),e("OutboundLink")],1),t._v(" is now a separate NuGet dependency you might need\n"),e("ul",[e("li",[t._v("DirectoryScanJob")]),t._v(" "),e("li",[t._v("FileScanJob")]),t._v(" "),e("li",[t._v("NativeJob")]),t._v(" "),e("li",[t._v("SendMailJob")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Plugins"),e("OutboundLink")],1),t._v(" is now a separate NuGet dependency you might need\n"),e("ul",[e("li",[t._v("XMLSchedulingDataProcessorPlugin")])])])]),t._v(" "),e("p",[t._v("Check that you reference the required NuGet packages and that your configuration references also the correct assembly.")]),t._v(" "),e("h3",{attrs:{id:"database-schema-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-schema-changes"}},[t._v("#")]),t._v(" Database schema changes")]),t._v(" "),e("p",[t._v("2.6 schema should work with 3.0 with no changes.")]),t._v(" "),e("h3",{attrs:{id:"migrating-holidaycalendar-binary-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-holidaycalendar-binary-format"}},[t._v("#")]),t._v(" Migrating HolidayCalendar binary format")]),t._v(" "),e("p",[t._v("If you have HolidayCalendars stored in database in binary format (just stored with AdoJobStore). You need to first load them with Quartz 2.4 or later 2.x version and then re-store them.\nThis will make the serialization use format that is not dependant on precense of C5 library.")]),t._v(" "),e("h3",{attrs:{id:"thread-pool-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thread-pool-changes"}},[t._v("#")]),t._v(" Thread pool changes")]),t._v(" "),e("ul",[e("li",[t._v("SimpleThreadPool was removed altogether and it's now a synonym for DefaultThreadPool")]),t._v(" "),e("li",[t._v("Jobs are now ran in CLR thread pool")]),t._v(" "),e("li",[t._v("ThreadCount parameter still limits how many items will be queued at most to CLR thread pool")]),t._v(" "),e("li",[t._v("Thread priority is no longer supported, you need to remove threadPriority parameter")])]),t._v(" "),e("h3",{attrs:{id:"api-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-changes"}},[t._v("#")]),t._v(" API Changes")]),t._v(" "),e("p",[t._v("Scheduler and job API methods now are based on Tasks. This reflects how you define your jobs and operate with scheduler.")]),t._v(" "),e("h4",{attrs:{id:"scheduler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[t._v("#")]),t._v(" Scheduler")]),t._v(" "),e("p",[t._v("You now need to make sure that you have proper awaits in place when you operate with the scheduler:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// operating with scheduler is now Task-based and requires appropriate awaits")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" scheduler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduleJob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" scheduler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" scheduler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Shutdown")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("waitForJobsToComplete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" Jobs")]),t._v(" "),e("p",[t._v("Job's Execute method now returns a Task and can easily contain async code:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Jobs now return tasks from their Execute methods")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyJob")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJob")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobExecutionContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dummy 1ms sleep")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Task"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Delay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If you don't have any async'ness in your job, you can just  return Task.CompletedTask at the end of Execute method (available from .NET 4.6 onwards).")]),t._v(" "),e("p",[t._v("IInterruptableJob interface has been removed. You need to check for IJobExecutionContext's CancellationToken.IsCancellationRequested to determine whether job interruption has been requested.")]),t._v(" "),e("p",[t._v("IStatefulJob interface that was obsoleted in 2.x has been removed, you should use DisallowConcurrentExecution and PersistJobDataAfterExecution attributes to achieve your goal.")]),t._v(" "),e("h4",{attrs:{id:"other-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-apis"}},[t._v("#")]),t._v(" Other APIs")]),t._v(" "),e("p",[t._v("If you have created custom implementations of services used by Quartz, you're going to need to adapt your code to be async-based.")]),t._v(" "),e("h3",{attrs:{id:"job-store-serialization-configuration-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job-store-serialization-configuration-changes"}},[t._v("#")]),t._v(" Job store serialization configuration changes")]),t._v(" "),e("p",[t._v("You need to now explicitly state whether you want to use binary or json serialization if you are using persistent job store (AdoJobStore) when you configure your scheduler.")]),t._v(" "),e("ul",[e("li",[t._v("For existing setups you should use the old binary serialization to ensure things work like before")]),t._v(" "),e("li",[t._v("For new projects the JSON serialization is recommended as it should be marginally faster and more robust as it's not dealing with binary versioning issues")]),t._v(" "),e("li",[t._v("JSON is more secure and generally the way to use moving forward")])]),t._v(" "),e("p",[t._v("If you choose to go with JSON serialization, remember to add NuGet package reference "),e("strong",[e("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Serialization.Json/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Serialization.Json"),e("OutboundLink")],1)]),t._v(" to your project.")]),t._v(" "),e("p",[t._v("Configuring binary serialization strategy:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" properties "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("NameValueCollection")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quartz.jobStore.type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Quartz.Impl.AdoJobStore.JobStoreTX, Quartz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "binary" is alias for "Quartz.Simpl.BinaryObjectSerializer, Quartz" ')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quartz.serializer.type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"binary"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISchedulerFactory")]),t._v(" sf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("StdSchedulerFactory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Configuring JSON serialization strategy (recommended):")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" properties "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("NameValueCollection")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quartz.jobStore.type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Quartz.Impl.AdoJobStore.JobStoreTX, Quartz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "json" is alias for "Quartz.Simpl.JsonObjectSerializer, Quartz.Serialization.Json" ')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quartz.serializer.type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISchedulerFactory")]),t._v(" sf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("StdSchedulerFactory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"simplified-job-store-provider-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplified-job-store-provider-names"}},[t._v("#")]),t._v(" Simplified job store provider names")]),t._v(" "),e("p",[t._v("ADO.NET provider names have been simplified, the provider names are without version, e.g. SqlServer-20 => SqlServer. They are now bound to whatever version that can be loaded.")]),t._v(" "),e("h3",{attrs:{id:"c5-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c5-collections"}},[t._v("#")]),t._v(" C5 Collections")]),t._v(" "),e("p",[t._v("C5 Collections are no longer ILMerged inside Quartz, .NET 4.5 offers the needed collections.")]),t._v(" "),e("h3",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),e("p",[t._v("Common.Logging has been replaced with "),e("a",{attrs:{href:"https://github.com/damianh/LibLog",target:"_blank",rel:"noopener noreferrer"}},[t._v("LibLog"),e("OutboundLink")],1),t._v(" to reduce dependencies to none. LibLog should automatically detect your logging framework of choice if it's supported.")]),t._v(" "),e("h3",{attrs:{id:"remoting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remoting"}},[t._v("#")]),t._v(" Remoting")]),t._v(" "),e("p",[t._v("Remoting is currently only supported when running on full framework version.")])])}),[],!1,null,null,null);a.default=n.exports}}]);