(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{454:function(e,n,r){"use strict";r.r(n);var i=r(42),o=Object(i.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("To welcome year 2013 we are releasing new and improved version of Quart.NET!\nThis release contains important bug fixes, new functionality and minor breaking changes.")]),e._v(" "),r("ul",[r("li",[e._v("C5 depedency is now internalized and allows you to use whatever version you want outside of Quartz.")]),e._v(" "),r("li",[e._v("Custom IJobFactory implementations now need to implement new method void ReturnJob(IJob job) for container managed cleanup.")]),e._v(" "),r("li",[e._v("NthIncludedDayTrigger was removed as it was accidentally left behind even though being legacy and replaced by DailyTimeIntervalTrigger.")])]),e._v(" "),r("p",[r("strong",[e._v("NEW FEATURES")])]),e._v(" "),r("ul",[r("li",[e._v("TimeZone support for calendars / Andrew Smith")]),e._v(" "),r("li",[e._v("Allow scheduling relative to replaced trigger with XML configuration")]),e._v(" "),r("li",[e._v("Add method to IJobFactory to destroy a job instance created by the factory breaking / minor breaking, added new required method")]),e._v(" "),r("li",[e._v("Internalize C5 dependency")]),e._v(" "),r("li",[e._v("Support for Oracle ODP 11.2 Release 4")]),e._v(" "),r("li",[e._v("Upgrade SQLite dependency to version 1.0.83")]),e._v(" "),r("li",[e._v("Upgrade to Common.Logging 2.1.2")])]),e._v(" "),r("p",[r("strong",[e._v("FIXES")])]),e._v(" "),r("ul",[r("li",[e._v("Scheduled Shutdown blocked even if waitForJobsToComplete is false")]),e._v(" "),r("li",[e._v("DailyTimeIntervalTriggerImpl should be serializable")]),e._v(" "),r("li",[e._v('InstanceID = "AUTO" may cause "String or binary data would be truncated" error on qrtz_fired_triggers.entry_id')]),e._v(" "),r("li",[e._v("PlugInExample doesn't execute any jobs")]),e._v(" "),r("li",[e._v("Recovering triggers have empty/incorrect JobDataMap")]),e._v(" "),r("li",[e._v("Make Quartz.NET work under medium trust when running .NET 3.5")]),e._v(" "),r("li",[e._v("tables_oracle.sql uses deprecated VARCHAR type")]),e._v(" "),r("li",[e._v("Improve error reporting for database connection failure")]),e._v(" "),r("li",[e._v("Scheduler Shutdown Freezes when There are Jobs Still Running")]),e._v(" "),r("li",[e._v("Use System.Version instead of FileVersionInfo to retive current Quartz version")]),e._v(" "),r("li",[e._v("DailyTimeIntervalTriggerImpl Validate broken")])]),e._v(" "),r("p",[r("strong",[e._v("BREAKING CHANGES")])]),e._v(" "),r("ul",[r("li",[e._v("Remove NthIncludedDayTrigger that was supposed to be removed in 2.0")]),e._v(" "),r("li",[e._v("Remove Visual Studio 2008 solutions and projects")]),e._v(" "),r("li",[e._v("Add support for DateTimeOffset and TimeSpan to JobDataMap / minor breaking - cleanup of API")])]),e._v(" "),r("p",[e._v("Special thanks to Andrew Smith for working hard on TimeZone support. Credits go also to our vibrant community actively helping on mailing list and reporting issues and creating pull requests.")]),e._v(" "),r("Download")],1)}),[],!1,null,null,null);n.default=o.exports}}]);