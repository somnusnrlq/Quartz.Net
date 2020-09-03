---
title: '4. 更多关于Triggers'
---

同Job一样，trigger非常容易使用，但它有一些可选项需要注意和理解，同时，trigger有不同的类型，要按照需求进行选择。

## 通用触发器属性

除了所有触发器类型都有用于跟踪其身份的`TriggerKey` 属性之外，
还有许多其他属性是所有触发器类型通用的。这些公共属性是使用TriggerBuilder设置的
当您构建触发器定义时（下面将给出示例）。

以下是所有触发器类型通用的属性列表:

* 1. `JobKey`  触发器触发时应执行的job的标识
* 2. `StartTimeUtc` 指触发器的时间表何时首次生效
该值是DateTimeOffset对象，该对象定义给定日历日期的时间点。
对于某些触发器类型，触发器实际上将在开始时间触发，对于其他触发器，它仅标记应开始遵循时间表的时间。
这意味着您可以在1月期间存储带有时间表的触发器，例如“每月的第5天”，如果StartTimeUtc属性设置为4月1日，则代表离第一次触发还有好几个月  

* 3. `EndTimeUtc` 指示触发器的计划何时不再有效。
换句话说，一个时间表为“每月第五天”、结束时间为7月1日的触发器将在6月5日触发最后一次。  

其他属性，需要更多的解释，将在下面的小节中讨论。

## 优先权

有时候，当你有很多触发器（或Quartz.NET线程池中的工作线程很少）时，Quartz.NET可能没有足够的资源立即启动所有计划同时触发的触发器。在这种情况下，您可能需要控制哪些触发器在可用的的Quartz.NET工作线程中首先被调用。为此，可以在触发器上设置priority属性。如果要同时触发N个触发器，但当前只有Z个工作线程可用，那么将首先执行具有最高优先级的第一个Z触发器。如果您没有在触发器上设置优先级，那么它将使用默认优先级5。优先级允许任何整数值（正或负）。

::: tip
仅当触发器具有相同的触发时间时才比较优先级。 计划在10:59触发的触发器将始终在计划在11:00触发的触发器之前触发
:::

::: tip
当检测到触发器的作业需要恢复时，将使用与原始触发器相同的优先级计划其恢复  
:::

## 未触发指令

触发器另一个重要属性是 "misfire instruction". 如果由于调度程序关闭而导致持久性触发器“错过”其触发时间，则会发生不触发事件，
或因为Quartz.NET的线程池中没有可用的线程来执行作业。 
不同的触发器类型具有不同的未触发指令。
默认情况下，它们使用'smart policy'指令-该指令具有基于触发器类型和配置的动态行为。
调度程序启动时，它将搜索所有未触发的持久性触发器，然后根据它们各自的更新它们。
配置未触发指令。 当您开始在自己的项目中使用Quartz.NET时，应该使自己熟悉未触发指令。
它们是在给定的触发器类型上定义的，并在其API文档中进行了说明。 有关未触发指令的更多具体信息将在
针对每种触发器类型的教程课程。


## 日历

实现`ICalendar`接口的Quartz.NET Calendar对象可以在触发器存储在调度程序中时与触发器相关联。
日历对于从触发器的触发计划中排除时间段很有用。  
例如，您可以创建一个触发器，该触发器在每个工作日的上午9:30触发工作，然后添加一个排除所有企业假期的日历。  


日历可以是实现ICalendar接口的任何可序列化对象，如下所示：

```csharp
namespace Quartz
{
	public interface ICalendar
	{
		string Description { get; set; }

		ICalendar CalendarBase { set; get; }

		bool IsTimeIncluded(DateTimeOffset timeUtc);

		DateTime GetNextIncludedTimeUtc(DateTimeOffset timeUtc);

		ICalendar Clone();
	}
} 
```
即使日历可以'block out'最短毫秒的时间段，最有可能的是，您还是会对'block out'整天感兴趣。 为了方便起见，Quartz.NET包括了HolidayCalendar类，它就是这样做的。

必须实例化日历，并通过AddCalendar（..）方法向计划程序注册日历。 如果使用`HolidayCalendar`，则在实例化它之后，应使用其AddExcludedDate（DateTime date）方法，以使用希望从计划中排除的日期填充它。
同一日历实例可以与多个触发器一起使用，例如：  

__Calendar Example__

```csharp
    HolidayCalendar cal = new HolidayCalendar();
    cal.AddExcludedDate(someDate);
    
    await sched.AddCalendar("myHolidays", cal, false);
    
	ITrigger t = TriggerBuilder.Create()
		.WithIdentity("myTrigger")
		.ForJob("myJob")
		.WithSchedule(CronScheduleBuilder.DailyAtHourAndMinute(9, 30)) // execute job daily at 9:30
		.ModifiedByCalendar("myHolidays") // but not on holidays
		.Build();

	// .. schedule job with trigger

	ITrigger t2 = TriggerBuilder.Create()
		.WithIdentity("myTrigger2")
		.ForJob("myJob2")
		.WithSchedule(CronScheduleBuilder.DailyAtHourAndMinute(11, 30)) // execute job daily at 11:30
		.ModifiedByCalendar("myHolidays") // but not on holidays
		.Build();
    
    // .. schedule job with trigger2 
```

在接下来的两节课中将详细介绍触发器的构造/构建。   
现在，仅需相信上面的代码创建了两个触发器，每个触发器都计划每天触发。 但是，将跳过在日历排除的期间内发生的任何触发。

请参阅Quartz.Impl.Calendar命名空间，以获取许多可能满足您需求的ICalendar实现。
