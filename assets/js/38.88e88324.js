(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{430:function(e,t,o){"use strict";o.r(t);var r=o(42),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The wait is over, Quartz.NET 3.0 is here with .NET Core support and async/await!")]),e._v(" "),o("p",[e._v("A big thank you goes to "),o("a",{attrs:{href:"https://github.com/mjrousos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mike Rousos"),o("OutboundLink")],1),e._v(" who really made it possible to get Quartz.NET working on .NET Core.\n"),o("a",{attrs:{href:"https://github.com/danielmarbach",target:"_blank",rel:"noopener noreferrer"}},[e._v("Daniel Marbach"),o("OutboundLink")],1),e._v(" also contributed a lot with ideas and code to async side.\nAnd of course never forgetting the community members that have provided feedback and fixes.")]),e._v(" "),o("p",[e._v("Please see the "),o("RouterLink",{attrs:{to:"/documentation/quartz-3.x/migration-guide.html"}},[e._v("migration guide")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("NEW FEATURE")])]),e._v(" "),o("ul",[o("li",[e._v("Task based jobs with async/await support, internals work in async/await manner")]),e._v(" "),o("li",[e._v("Support .NET Core / netstandard 2.0 and .NET Framework 4.5.2 and later")]),e._v(" "),o("li",[e._v("Support for Microsoft.Data.Sqlite via provider name SQLite-Microsoft, the old provider SQLite also still works")]),e._v(" "),o("li",[e._v("Added preliminary support for SQL Server Memory-Optimized tables and Quartz.Impl.AdoJobStore.UpdateLockRowSemaphoreMOT")]),e._v(" "),o("li",[e._v("Common.Logging removed from dependencies")]),e._v(" "),o("li",[e._v("C5 Collections removed from ILMerge process, no longer needed")]),e._v(" "),o("li",[e._v("Add support for eager validation of job scheduling XML file on plugin start")]),e._v(" "),o("li",[e._v("Add support for extra custom time zone resolver function in TimeZoneUtil")])]),e._v(" "),o("p",[o("strong",[e._v("BREAKING CHANGES")])]),e._v(" "),o("ul",[o("li",[e._v("Jobs and plugins are now in a separate assemblies/NuGet packages Quartz.Jobs and Quartz.Plugins")]),e._v(" "),o("li",[e._v("ADO.NET provider names have been simplified, the provider names are without version, e.g. SqlServer-20 => SqlServer")]),e._v(" "),o("li",[e._v("API methods have been revisited to mainly use "),o("code",[e._v("IReadOnlyCollection<T>")]),e._v(", this hides both "),o("code",[e._v("HashSet<T>")]),e._v("s and "),o("code",[e._v("List<T>")]),e._v("s")]),e._v(" "),o("li",[e._v("LibLog has been hidden as internal (ILog etc), like it was originally intended to be")]),e._v(" "),o("li",[e._v("SimpleThreadPool is gone, old owned threads are gone")]),e._v(" "),o("li",[e._v("Scheduler methods have been changed to be Task based, remember to await them")]),e._v(" "),o("li",[e._v("IJob interface now returns a task")]),e._v(" "),o("li",[e._v("Some IList properties have been changed to IReadOnlyList to properly reflect intent")]),e._v(" "),o("li",[e._v("SQL Server CE support has been dropped")]),e._v(" "),o("li",[e._v("DailyCalendar uses now datetimes for excluded dates and has ISet interface to access them")]),e._v(" "),o("li",[e._v("IObjectSerializer has new method, void Initialize(), that has to be implemented")]),e._v(" "),o("li",[e._v("IInterruptableJob removed in favor of context's CancellationToken")])]),e._v(" "),o("p",[o("strong",[e._v("KNOWN ISSUES")])]),e._v(" "),o("ul",[o("li",[e._v("Issues with time zone ids between Windows and Linux, they use different ids for the same zone")]),e._v(" "),o("li",[e._v("No remoting support for .NET Core")])]),e._v(" "),o("Download")],1)}),[],!1,null,null,null);t.default=i.exports}}]);