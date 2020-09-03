---
title: 'Simple触发器'
---

如果您需要在特定的时间准时执行一次作业，SimpleTrigger应该可以满足您的计划需求，
或在特定的时间间隔，然后以特定的间隔重复。 比如，如果您想触发在2005年1月13日上午11:23:54触发，然后每十秒钟再触发五次  

通过此说明，您可能会发现发现SimpleTrigger的属性包括：
start-time 和 end-time，重复计数和重复间隔。 所有这些属性正是您所期望的
使用只有一些关于结束时间属性的特别说明。  


重复计数'repeat count'可以为零，正整数或常数 `SimpleTrigger.RepeatIndefinitely`。  
重复间隔属性必须为TimeSpan.Zero或正的TimeSpan值。  
请注意，重复间隔为零将导致触发器的'repeat count'触发同时发生
（或尽可能接近调度程序可以管理的范围）。  


如果您还不熟悉`DateTime`类，则可能会发现它对于计算触发器触发时间很有帮助，
取决于您要创建的startTimeUtc（或endTimeUtc）。

 `EndTimeUtc`属性（如果已指定）将覆盖重复计数属性。 如果您希望创建触发器，这将很有用  
例如，每10秒钟触发一次，直到到达给定的时间-而不用计算它会重复的次数  
在开始时间和结束时间之间重复，您可以简单地指定结束时间，然后使用RepeatIndefinitely的重复计数
（您甚至可以指定一定数量的重复计数，该计数肯定会大于触发器实际会重复的次数
在结束时间到来之前触发）。  

SimpleTrigger实例是使用 `TriggerBuilder`(用于触发器的主要属性）和`WithSimpleSchedule`扩展方法构建的
（针对SimpleTrigger特定的属性）。

__为特定时间点建立触发器，不重复:__

```csharp
// trigger builder creates simple trigger by default, actually an ITrigger is returned
ISimpleTrigger trigger = (ISimpleTrigger) TriggerBuilder.Create()
    .WithIdentity("trigger1", "group1")
    .StartAt(myStartTime) // some Date 
    .ForJob("job1", "group1") // identify job with name, group strings
    .Build();
```

__建立一个特定时刻的触发器，然后每10秒重复10次:__

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger3", "group1")
    .StartAt(myTimeToStartFiring) // if a start time is not given (if this line were omitted), "now" is implied
    .WithSimpleSchedule(x => x
        .WithIntervalInSeconds(10)
        .WithRepeatCount(10)) // note that 10 repeats will give a total of 11 firings
    .ForJob(myJob) // identify job with handle to its JobDetail itself                   
    .Build();

```

__制造一个触发器，在未来5分钟内可以发射一次:__

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger5", "group1")
    .StartAt(DateBuilder.FutureDate(5, IntervalUnit.Minute)) // use DateBuilder to create a date in the future
    .ForJob(myJobKey) // identify job with its JobKey
    .Build();
```

__制造一个触发器，现在就触发，然后每五分钟重复一次，直到22点:__

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger7", "group1")
    .WithSimpleSchedule(x => x
        .WithIntervalInMinutes(5)
        .RepeatForever())
    .EndAt(DateBuilder.DateOf(22, 0, 0))
    .Build();
```
__建立一个触发器，它将在下一个小时的开始触发，然后每2小时重复一次，直到永远:__

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger8") // because group is not specified, "trigger8" will be in the default group
    .StartAt(DateBuilder.EvenHourDate(null)) // get the next even-hour (minutes and seconds zero ("00:00"))
    .WithSimpleSchedule(x => x
        .WithIntervalInHours(2)
        .RepeatForever())
    // note that in this example, 'forJob(..)' is not called 
    //  - which is valid if the trigger is passed to the scheduler along with the job  
    .Build();

await scheduler.scheduleJob(trigger, job);
```
花一些时间查看由`TriggerBuilder` 和扩展方法 `WithSimpleSchedule` 定义的语言中的所有可用方法。
这样您就可以熟悉上面示例中的演示。

## SimpleTrigger  未触发指令

SimpleTrigger有几个指令，可用于通知Quartz.NET发生失败指令时应采取的措施。
（在本教程的“更多关于触发器”部分中介绍了未触发指令）。
这些指令在MisfirePolicy.SimpleTrigger上定义为常量（包括描述其行为的API文档）。
说明包括：

__未触发指令常量 for SimpleTrigger__

* `MisfireInstruction.IgnoreMisfirePolicy`
* `MisfirePolicy.SimpleTrigger.FireNow`
* `MisfirePolicy.SimpleTrigger.RescheduleNowWithExistingRepeatCount`
* `MisfirePolicy.SimpleTrigger.RescheduleNowWithRemainingRepeatCount`
* `MisfirePolicy.SimpleTrigger.RescheduleNextWithRemainingCount`
* `MisfirePolicy.SimpleTrigger.RescheduleNextWithExistingCount`

您应该从前面的课程中回想起，所有触发器都可以使用`MisfirePolicy.SmartPolicy`指令，
该指令也是所有触发器类型的默认指令。  

如果使用'smart policy'指令，SimpleTrigger将根据配置动态地在其各种MISFIRE指令之间进行选择
和给定SimpleTrigger实例的状态。 `SimpleTrigger.UpdateAfterMisfire（）`方法的文档详细说明了
这种动态行为。  

在构建SimpleTriggers时，您可以将 未触发指令指定为简单计划的一部分（通过SimpleSchedulerBuilder）：  

```csharp
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("trigger7", "group1")
    .WithSimpleSchedule(x => x
        .WithIntervalInMinutes(5)
        .RepeatForever()
        .WithMisfireHandlingInstructionNextWithExistingCount())
    .Build();
```
