(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{400:function(t,s,n){"use strict";n.r(s);var a=n(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("如果您需要一个基于类似日历的概念（而不是按照SimpleTrigger精确指定的间隔）递归的作业触发计划，crontrigger通常比SimpleTrigger更有用。")]),t._v(" "),n("p",[t._v("使用CronTrigger，您可以指定触发计划，例如“每周五中午”，或“每个工作日和9:30 am”，甚至“每周一、周三和周五上午9:00到10:00之间每隔5分钟”。")]),t._v(" "),n("p",[t._v("与SimpleTrigger一样，CronTrigger有一个startTime，它指定计划何时生效，以及一个（可选）endTime，用于指定何时停止计划。")]),t._v(" "),n("h3",{attrs:{id:"cron表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cron表达式"}},[t._v("#")]),t._v(" Cron表达式")]),t._v(" "),n("p",[t._v("_ron-Expressions_用于配置CronTrigger的实例。"),n("br"),t._v("\nCron表达式实际上是由七个子表达式组成的字符串，用于描述时间表的各个细节。这些子表达式用空格隔开，表示：")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("Seconds    --秒")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("Minutes    --分")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("Hours  --时")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[t._v("Day-of-Month   --天")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"5"}},[n("li",[t._v("Month  --月")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"6"}},[n("li",[t._v("Day-of-Week    --周")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"7"}},[n("li",[t._v("Year (optional field)  --年")])])])]),t._v(" "),n("p",[t._v("完整的cron表达式的示例如：\n'0 0 12？ * WED`-意思是“每个星期三中午12:00”")]),t._v(" "),n("p",[t._v("各个子表达式可以包含范围和/或列表。"),n("br"),t._v("\n例如，上一个（显示为“ WED”）中的“星期几”字段"),n("br"),t._v("\n例如可以替换为“ MON-FRI”，“ MON，WED，FRI”，甚至“ MON-WED，SAT”。")]),t._v(" "),n("p",[t._v("通配符（'"),n("em",[t._v("' 字符）可用于表示此字段的“所有”可能值。 因此，\n先前示例的\"Month\"字段仅表示“每个月”。 “Day-Of-Week”字段中的 '")]),t._v("'显然表示“一周中的每一天”。")]),t._v(" "),n("p",[t._v("所有字段都有一组可以指定的有效值。 这些值应该相当明显-"),n("br"),t._v("\n例如数字0至59表示秒和分钟，0到23表示小时。 每月的日期可以是0-31之间的任何值，但您需要注意\n给定月份多少天！ 可以将月份指定为0到11之间的值，也可以使用字符串1月，2月，3月，4月，5月，6月，7月，8月，9月，10月，11月和12月。"),n("br"),t._v("\n每周的天数可以指定为1到7之间的值（1 =星期日）\n或使用字符串SUN，MON，TUE，WED，THU，FRI和SAT。")]),t._v(" "),n("p",[t._v("“ /”字符可用于指定值的增量。"),n("br"),t._v("\n例如，如果您在“分钟”字段中输入“ 0/15”，则表示“每15分钟，\n从0分钟开始”。 如果您在“分钟”字段中使用“ 3/20”，则表示“每小时20分钟一次，\n从第3分钟开始”-换句话说，与在“分钟”字段中指定“ 3,23,43”相同。")]),t._v(" "),n("p",[t._v("'?' 允许day-of-month和day-of-week字段使用字符。 用于指定“无特定值”。\n当您需要在两个字段之一中指定某项而不是另一个字段时，这很有用。\n请参阅下面的示例（和CronTrigger API文档）进说明。")]),t._v(" "),n("p",[t._v("“天”和“周”字段中允许使用'L'字符。 此字符是“ last”的简写，\n但是在两个领域中每个领域都有不同的含义。"),n("br"),t._v("\n例如，“天”字段中的值“ L”表示“本月的最后一天”-非day年的1月31日，2月的28日。"),n("br"),t._v("\n如果单独在星期几字段中使用，它只是表示“ 7”或“ SAT”。 但是，如果在星期几字段中使用另一个值，则表示“该月的最后xxx天”-\n例如“ 6L”或“ FRIL”均表示“该月的最后一个星期五”。 使用“ L”选项时，请勿指定列表，或值的范围，因为您会得到令人困惑的结果。")]),t._v(" "),n("p",[t._v("'W' 用于指定最接近给定日期的工作日（星期一至星期五）。 例如，如果您要指定“ 15W”作为“月日”字段的值，则含义是：“离月15日最近的工作日”。")]),t._v(" "),n("p",[t._v("'#'用于指定每月的“第n个” XXX工作日。 例如，“星期几”字段中的“ 6＃3”或“ FRI＃3”的值表示“该月的第三个星期五”。")]),t._v(" "),n("h2",{attrs:{id:"cron表达式示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cron表达式示例"}},[t._v("#")]),t._v(" Cron表达式示例")]),t._v(" "),n("p",[t._v("以下是一些表达式及其含义的更多示例-您可以在CronTrigger的API文档中找到更多内容")]),t._v(" "),n("p",[n("strong",[t._v("示例1-创建每5分钟触发一次的表达式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 0/5 * * * ?"\n')])])]),n("p",[n("strong",[t._v("示例2-创建一个触发器每5分钟并且在每5分钟后的10秒后触发一次，（即10:00:10 am，10：05：10 am等）。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"10 0/5 * * * ?"\n')])])]),n("p",[n("strong",[t._v("示例3-创建一个触发器在每个星期三和星期五的10：30、11：30、12：30和13:30触发。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 30 10-13 ? * WED,FRI"\n')])])]),n("p",[n("strong",[t._v("示例4-创建一个触发器在每月的5号和20号的上午8点到10点之间每半小时触发一次。\n请注意，触发器不会在上午10:00，仅在8：00、8：30、9：00和9:30触发")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 0/30 8-9 5,20 * ?"\n')])])]),n("p",[t._v("请注意，某些计划要求太过复杂而无法用单个触发器来表示-例如“上午9:00至上午10:00之间的每5分钟，\n以及从1:00 pm到10:00 pm之间的每20分钟”。这种情况下的解决方案是简单地创建两个触发器，并注册这两个触发器以运行相同的作业。")]),t._v(" "),n("h2",{attrs:{id:"构建-crontriggers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建-crontriggers"}},[t._v("#")]),t._v(" 构建 CronTriggers")]),t._v(" "),n("p",[t._v("CronTrigger实例是使用 "),n("code",[t._v("TriggerBuilder")]),t._v(" （用于触发器的主要属性）和"),n("code",[t._v("WithCronSchedule")]),t._v("构建的\n扩展方法（用于特定于CronTrigger的属性）")]),t._v(" "),n("p",[t._v("您还可以使用"),n("code",[t._v("CronScheduleBuilder")]),t._v(" 的静态方法来创建。")]),t._v(" "),n("p",[n("strong",[t._v("建立一个触发器，该触发器每天在上午8点至下午5点之间每隔一分钟触发：")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0/2 8-17 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("建立触发器，每天10:42 am触发:")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we use CronScheduleBuilder's static helper methods here")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CronScheduleBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DailyAtHourAndMinute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("或者 -")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 42 10 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("建立一个触发器，该触发器将在星期三上午10:42，使用系统默认值以外的TimeZone触发:")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CronScheduleBuilder\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WeeklyOnDayAndHourAndMinute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DayOfWeek"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wednesday"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InTimeZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZoneInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindSystemTimeZoneById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Central America Standard Time"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("或者 -")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 42 10 ? * WED"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InTimeZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZoneInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindSystemTimeZoneById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Central America Standard Time"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"crontrigger-misfire-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontrigger-misfire-instructions"}},[t._v("#")]),t._v(" CronTrigger Misfire Instructions")]),t._v(" "),n("p",[t._v("以下说明可用于通知Quartz当CronTrigger无效时应采取的措施。\n（在本教程的“更多关于触发器”部分中介绍失败指令情况）。 这些指令定义为\n常量（API文档中有其行为的描述）。 包含以下几种:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("MisfireInstruction.IgnoreMisfirePolicy")])]),t._v(" "),n("li",[n("code",[t._v("MisfireInstruction.CronTrigger.DoNothing")])]),t._v(" "),n("li",[n("code",[t._v("MisfireInstruction.CronTrigger.FireOnceNow")])])]),t._v(" "),n("p",[t._v("所有触发器都有 "),n("code",[t._v("MisfireInstrution.SmartPolicy")]),t._v("指令可供使用，该指令也是所有触发器类型的默认指令。\nCronTrigger将'smart policy'指令解释为MisfireInstruction.CronTrigger.FireOnceNow。\nAPI文档中的CronTrigger.UpdateAfterMisfire（）方法解释了此行为的确切细节。")]),t._v(" "),n("p",[t._v("All triggers have the "),n("code",[t._v("MisfireInstrution.SmartPolicy")]),t._v(" instruction available for use, and this instruction is also the default for all trigger types.\nThe 'smart policy' instruction is interpreted by CronTrigger as MisfireInstruction.CronTrigger.FireOnceNow. The API documentation for the\n"),n("code",[t._v("CronTrigger.UpdateAfterMisfire()")]),t._v(" method explains the exact details of this behavior.")]),t._v(" "),n("p",[t._v("在构建CronTriggers时，您可以将未触发指令指定为cron计划的一部分（通过"),n("code",[t._v("WithCronSchedule")]),t._v("扩展方法）："),n("br"),t._v("\nWhen building CronTriggers, you specify the misfire instruction as part of the cron schedule (via "),n("code",[t._v("WithCronSchedule")]),t._v(" extension method):")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0/2 8-17 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithMisfireHandlingInstructionFireAndProceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);