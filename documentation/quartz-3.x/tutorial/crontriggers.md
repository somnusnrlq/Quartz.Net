---
title: 'Cron触发器'
---

如果您需要一个基于类似日历的概念（而不是按照SimpleTrigger精确指定的间隔）递归的作业触发计划，crontrigger通常比SimpleTrigger更有用。  

使用CronTrigger，您可以指定触发计划，例如“每周五中午”，或“每个工作日和9:30 am”，甚至“每周一、周三和周五上午9:00到10:00之间每隔5分钟”。  

与SimpleTrigger一样，CronTrigger有一个startTime，它指定计划何时生效，以及一个（可选）endTime，用于指定何时停止计划。

### Cron表达式

_ron-Expressions_用于配置CronTrigger的实例。  
Cron表达式实际上是由七个子表达式组成的字符串，用于描述时间表的各个细节。这些子表达式用空格隔开，表示：

* 1. Seconds    --秒
* 2. Minutes    --分
* 3. Hours  --时
* 4. Day-of-Month   --天
* 5. Month  --月
* 6. Day-of-Week    --周
* 7. Year (optional field)  --年

完整的cron表达式的示例如： 
'0 0 12？ * WED`-意思是“每个星期三中午12:00”  

各个子表达式可以包含范围和/或列表。   
例如，上一个（显示为“ WED”）中的“星期几”字段  
例如可以替换为“ MON-FRI”，“ MON，WED，FRI”，甚至“ MON-WED，SAT”。  

通配符（'*' 字符）可用于表示此字段的“所有”可能值。 因此，
先前示例的"Month"字段仅表示“每个月”。 “Day-Of-Week”字段中的 '*'显然表示“一周中的每一天”。  

所有字段都有一组可以指定的有效值。 这些值应该相当明显-  
例如数字0至59表示秒和分钟，0到23表示小时。 每月的日期可以是0-31之间的任何值，但您需要注意
给定月份多少天！ 可以将月份指定为0到11之间的值，也可以使用字符串1月，2月，3月，4月，5月，6月，7月，8月，9月，10月，11月和12月。  
每周的天数可以指定为1到7之间的值（1 =星期日）
或使用字符串SUN，MON，TUE，WED，THU，FRI和SAT。  

“ /”字符可用于指定值的增量。   
例如，如果您在“分钟”字段中输入“ 0/15”，则表示“每15分钟，
从0分钟开始”。 如果您在“分钟”字段中使用“ 3/20”，则表示“每小时20分钟一次，
从第3分钟开始”-换句话说，与在“分钟”字段中指定“ 3,23,43”相同。

'?' 允许day-of-month和day-of-week字段使用字符。 用于指定“无特定值”。
当您需要在两个字段之一中指定某项而不是另一个字段时，这很有用。
请参阅下面的示例（和CronTrigger API文档）进说明。  

“天”和“周”字段中允许使用'L'字符。 此字符是“ last”的简写，
但是在两个领域中每个领域都有不同的含义。   
例如，“天”字段中的值“ L”表示“本月的最后一天”-非day年的1月31日，2月的28日。  
如果单独在星期几字段中使用，它只是表示“ 7”或“ SAT”。 但是，如果在星期几字段中使用另一个值，则表示“该月的最后xxx天”-
例如“ 6L”或“ FRIL”均表示“该月的最后一个星期五”。 使用“ L”选项时，请勿指定列表，或值的范围，因为您会得到令人困惑的结果。  

'W' 用于指定最接近给定日期的工作日（星期一至星期五）。 例如，如果您要指定“ 15W”作为“月日”字段的值，则含义是：“离月15日最近的工作日”。

'#'用于指定每月的“第n个” XXX工作日。 例如，“星期几”字段中的“ 6＃3”或“ FRI＃3”的值表示“该月的第三个星期五”。

##  Cron表达式示例

以下是一些表达式及其含义的更多示例-您可以在CronTrigger的API文档中找到更多内容  

**示例1-创建每5分钟触发一次的表达式**

    "0 0/5 * * * ?"
**示例2-创建一个触发器每5分钟并且在每5分钟后的10秒后触发一次，（即10:00:10 am，10：05：10 am等）。**

    "10 0/5 * * * ?"

**示例3-创建一个触发器在每个星期三和星期五的10：30、11：30、12：30和13:30触发。**

    "0 30 10-13 ? * WED,FRI"

**示例4-创建一个触发器在每月的5号和20号的上午8点到10点之间每半小时触发一次。
请注意，触发器不会在上午10:00，仅在8：00、8：30、9：00和9:30触发**

    "0 0/30 8-9 5,20 * ?"

请注意，某些计划要求太过复杂而无法用单个触发器来表示-例如“上午9:00至上午10:00之间的每5分钟，
以及从1:00 pm到10:00 pm之间的每20分钟”。这种情况下的解决方案是简单地创建两个触发器，并注册这两个触发器以运行相同的作业。

## 构建 CronTriggers

CronTrigger实例是使用 `TriggerBuilder` （用于触发器的主要属性）和`WithCronSchedule`构建的
扩展方法（用于特定于CronTrigger的属性）  

您还可以使用`CronScheduleBuilder` 的静态方法来创建。

**建立一个触发器，该触发器每天在上午8点至下午5点之间每隔一分钟触发：**

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithCronSchedule("0 0/2 8-17 * * ?")
    .ForJob("myJob", "group1")
    .Build();
```

**建立触发器，每天10:42 am触发:**

```csharp
// we use CronScheduleBuilder's static helper methods here
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithSchedule(CronScheduleBuilder.DailyAtHourAndMinute(10, 42))
    .ForJob(myJobKey)
    .Build();
```

或者 -

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithCronSchedule("0 42 10 * * ?")
    .ForJob("myJob", "group1")
    .Build();
```
	
**建立一个触发器，该触发器将在星期三上午10:42，使用系统默认值以外的TimeZone触发:**

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithSchedule(CronScheduleBuilder
        .WeeklyOnDayAndHourAndMinute(DayOfWeek.Wednesday, 10, 42)
        .InTimeZone(TimeZoneInfo.FindSystemTimeZoneById("Central America Standard Time")))
    .ForJob(myJobKey)
    .Build();
```
或者 -

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithCronSchedule("0 42 10 ? * WED", x => x
        .InTimeZone(TimeZoneInfo.FindSystemTimeZoneById("Central America Standard Time")))
    .ForJob(myJobKey)
    .Build();
```

## CronTrigger Misfire Instructions

以下说明可用于通知Quartz当CronTrigger无效时应采取的措施。
（在本教程的“更多关于触发器”部分中介绍失败指令情况）。 这些指令定义为
常量（API文档中有其行为的描述）。 包含以下几种:

* `MisfireInstruction.IgnoreMisfirePolicy`
* `MisfireInstruction.CronTrigger.DoNothing`
* `MisfireInstruction.CronTrigger.FireOnceNow`

所有触发器都有 `MisfireInstrution.SmartPolicy`指令可供使用，该指令也是所有触发器类型的默认指令。
CronTrigger将'smart policy'指令解释为MisfireInstruction.CronTrigger.FireOnceNow。 
API文档中的CronTrigger.UpdateAfterMisfire（）方法解释了此行为的确切细节。 

All triggers have the `MisfireInstrution.SmartPolicy` instruction available for use, and this instruction is also the default for all trigger types. 
The 'smart policy' instruction is interpreted by CronTrigger as MisfireInstruction.CronTrigger.FireOnceNow. The API documentation for the 
`CronTrigger.UpdateAfterMisfire()` method explains the exact details of this behavior.

在构建CronTriggers时，您可以将未触发指令指定为cron计划的一部分（通过`WithCronSchedule`扩展方法）：  
When building CronTriggers, you specify the misfire instruction as part of the cron schedule (via `WithCronSchedule` extension method):

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .WithCronSchedule("0 0/2 8-17 * * ?", x => x
        .WithMisfireHandlingInstructionFireAndProceed())
    .ForJob("myJob", "group1")
    .Build();
```
