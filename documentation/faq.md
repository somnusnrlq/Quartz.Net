---
title: 常见问题
sidebarDepth: 0
---

::: tip
该常见问题解答改编自Quartz Java
:::

# 一般问题

## 什么是Quartz.NET

Quartz.NET是一个强大、开源、轻量的作业调度框架，是 OpenSymphony 的 Quartz API 的.NET移植，用C#改写，可用于winform和asp.net应用中。它灵活而不复杂。
你能够用它来为执行一个作业而创建简单的或复杂的作业调度。它有很多特征，如：数据库支持，集群，插件，支持cron-like表达式等等。

通俗说它的功能是：比如说我想每天晚上2点让程序或网站执行某些代码，或者每隔5秒种我想查看是否有新的任务要处理等。

# 为什么不使用System.Timers.Timer?

.NET Framework具有“内置”计时器功能，通过系统计时器计时执行class ，但是为什么有人会用Quartz而不是用这些
标准功能?  

原因如下:

* Timers 没有持久性机制.
* Timers 时间安排不灵活（只能设置开始时间和重复间隔，没有基于日期，一天中的时间等信息）  
* Timers 不使用线程池（每个计时器一个线程）
* Timers 没有真正的管理方案-您必须编写自己的机制，以便能够按名称记住，组织和检索任务等.

...当然，对于某些简单的应用程序，这些功能可能并不重要，
在这种情况下，不使用Quartz.NET可能是正确的决定。

# 其他 Questions

## Quartz可以运行多少个作业?

这是一个很难回答的问题……答案基本上是“取决于自身”.

首先，您使用的JobStore起着重要的作用。基于RAM的JobStore比基于ADO.NET的JobStore快了（1000倍）。  
AdoJobStore的速度几乎完全取决于与数据库的连接，使用的数据库系统以及什么运行数据库的硬件。
Quartz实际上很少处理自身，几乎所有时间都花在数据库中。当然RAMJobStore对可以存储的Jobs和Triggers有一个更有限的限制，
因为您肯定要比数据库的硬盘驱动器空间少RAM。
您还可以查看常见问题解答“如何改善AdoJobStore的性能?  

因此，Quartz的“Triggers”和“Jobs”数量的限制因素是 是JobStore可用的存储空间量可以“存储”和监视实际上是多少（RAM量或磁盘空间量）  

现在的问题变成了“我可以存储多少”?  

quartz本身可以减慢速度的一件事是使用大量的监听器
（TriggerListeners、JobListeners和SchedulerListeners）。
显然，在作业实际执行之外每个监听器都会增加“处理”作业的执行时间，这并不意味着你应该害怕使用监听器，这只是意味着你应该明智地使用它们 
-如果可以，不要创建一堆“全局”的侦听器。也不要在listeners处理耗时长的事情，除非你真的需要。也要注意
插件（比如“history”插件）实际上也是监听器  

线程池的大小也限制了运行的实际作业数。如果池中有五个线程，则一次只能运行五个作业。但是要小心制造大量线程，因为VM、操作系统和CPU都很难处理大量线程，
并且性能会因为所有的管理而降低。在大多数情况下，当你进入数百个线程时，性能开始下降。请注意，如果您在应用程序服务器中运行，它可能已经创建了至少几十个自己的线程！  

除了这些因素外，还得看你的job是什么。如果你的job需要很长时间才能完成工作，而且他们的工作是非常占用CPU的，那么你显然不能同时运行很多作业，也不能在给定的时间内运行很多作业  

最后，如果您不能从一个Quartz实例获得足够的功率，你可以始终对多个Quartz实例进行负载平衡（在不同的机器上）。每个都将以先到先得的方式从共享数据库中运行作业基础上，尽快触发触发器  

因此，这里您对“有多少”的答案还很遥远，但由于上面提到的所有变量，我仍然没有给你一个数字。我只能说。 有一些Quartz Java的安装版管理着成千上万的作业和触发器，并且在任何给定的时刻都在执行几十个作业，这不包括使用负载平衡。考虑到这一点，大多数人应该有信心  

# Questions About Jobs

## How can I control the instantiation of Jobs?

See Quartz.Spi.IJobFactory and the Quartz.IScheduler.JobFactory property.

## How do I keep a Job from being removed after it completes?

Set the property JobDetail.Durable = true - which instructs Quartz not to 
delete the Job when it becomes an "orphan" (when the Job not longer has a 
Trigger referencing it).

## How do I keep a Job from firing concurrently?

**Quartz.NET 2.x**

Implement **IJob** and also decorate your job class with `[DisallowConcurrentExecution]` attribute. Read the API 
documentation for `DisallowConcurrentExecutionAttribute` for more information.

**Quartz.NET 1.x**

Make the job class implement `IStatefulJob` rather than `IJob`. Read the API 
documentation for `IStatefulJob` for more information.

## How do I stop a Job that is currently executing?

Quartz 1.x and 2x: See the `Quartz.IInterruptableJob` interface, and the `IScheduler.Interrupt(string, string)` method.

Quartz 3.x: See `IJobExecutionContext`'s `CancellationToken.IsCancellationRequested`

# Questions About Triggers

## How do I chain Job execution? Or, how do I create a workflow?
			
There currently is no "direct" or "free" way to chain triggers with Quartz. 
However there are several ways you can accomplish it without much effort. 
Below is an outline of a couple approaches:
				
One way is to use a listener (i.e. a TriggerListener, JobListener or 
SchedulerListener) that can notice the completion of a job/trigger and then 
immediately schedule a new trigger to fire. This approach can get a bit 
involved, since you'll have to inform the listener which job follows which 
- and you may need to worry about persistence of this information.
				
Another way is to build a Job that contains within its JobDataMap the name 
of the next job to fire, and as the job completes (the last step in its 
`Execute()` method) have the job schedule the next job. Several people are 
doing this and have had good luck. Most have made a base (abstract) class 
that is a Job that knows how to get the job name and group out of the 
JobDataMap using special keys (constants) and contains code to schedule the 
identified job. Then they simply make extensions of this class that included 
the additional work the job should do.
				
In the future, Quartz will provide a much cleaner way to do this, but until 
then, you'll have to use one of the above approaches, or think of yet another 
that works better for you.
				

## Why isn't my trigger firing?

The most common reason for this is not having called `Scheduler.Start()`, 
which tells the scheduler to start firing triggers.
			
The second most common reason is that the trigger or trigger group 
has been paused.
				
## Daylight Saving Time and Triggers

				
CronTrigger and SimpleTrigger each handle daylight savings time in their own 
way - each in the way that is intuitive to the trigger type.
				

				
First, as a review of what daylight savings time is, please read this resource: 
http://webexhibits.org/daylightsaving/g.html . Some readers may be unaware 
that the rules are different for different nations/contents. For example, 
the 2005 daylight savings time starts in the United States on April 3, but 
in Egypt on April 29. It is also important to know that not only the dates 
are different for different locals, but the time of the shift is different 
as well. Many places shift at 2:00 am, but others shift time at 1:00 am, 
others at 3:00 am, and still others right at midnight.
				

				
SimpleTrigger allows you to schedule jobs to fire every N milliseconds. 
As such, it has to do nothing in particular with respect to daylight 
savings time in order to "stay on schedule" - it simply keeps firing every 
N milliseconds. Regardless your SimpleTrigger is firing every 10 seconds, 
or every 15 minutes, or every hour or every 24 hours it will continue to do 
so. However the implication of this which confuses some users is that if 
your SimpleTrigger is firing say every 12 hours, before daylight savings 
switches it may be firing at what appears to be 3:00 am and 3:00 pm, 
but after daylight savings 4:00 am and 4:00 pm. This is not a bug 
- the trigger has kept firing exacly every N milliseconds, it just that the 
"name" of that time that humans impose on that moment has changed.
				

				
CronTrigger allows you to schedule jobs to fire at certain moments with 
respect to a "gregorian calendar". Hence, if you create a trigger to fire 
every day at 10:00 am, before and after daylight savings time switches it 
will continue to do so. However, depending on whether it was the Spring or 
Autumn daylight savings event, for that particular Sunday, the actual time 
interval between the firing of the trigger on Sundary morning at 10:00 am 
since its firing on Saturday morning at 10:00 am will not be 24 hours, 
but will instead be 23 or 25 hours respectively.
				

				
There is one additional point users must understand about CronTrigger with 
respect to daylight savings. This is that you should take careful thought 
about creating schedules that fire between midnight and 3:00 am (the critical 
window of time depends on your trigger's locale, as explained above). 
The reason is that depending on your trigger's schedule, and the particular 
daylight event, the trigger may be skipped or may appear to not fire for an 
hour or two. As examples, say you are in the United States, where daylight 
savings events occur at 2:00 am. If you have a CronTrrigger that fires every 
day at 2:15 am, then on the day of the beginning of daylight savings time 
the trigger will be skipped, since, 2:15 am never occurs that day. If you 
have a CronTrigger that fires every 15 minutes of every hour of every day, 
then on the day daylight savings time ends you will have an hour of time 
for which no triggerings occur, because when 2:00 am arrives, it will become 
1:00 am again, however all of the firings during the one o'clock hour have 
already occurred, and the trigger's next fire time was set to 2:00 am 
- hence for the next hour no triggerings will occur.
				
					
				
In summary, all of this makes perfect sense, and should be easy to remember 
if you keep these two rules in mind:
				
* SimpleTrigger ALWAYS fires exacly every N seconds,  with no relation to the time of day.
* CronTrigger ALWAYS fires at a given time of day and then computes its  next time to fire. If that time does not occur on a given day, the  trigger will be skipped. If the time occurs twice in a given day, it only fires once, because after firing on that time the first time, it computes the next time of day to fire on.

# Questions About AdoJobStore

## How do I improve the performance of AdoJobStore?

There are a few known ways to speed up AdoJobStore, only one of which is 
very practical.
					
First, the obvious, but not-so-practical:
					
* Buy a better (faster) network between the machine that runs Quartz, and the machine that runs your RDBMS.
* Buy a better (more powerful) machine to run your database on.
* Buy a better RDBMS.

Sencondly, use driver delegate implementation that is specific to your database, like `SQLServerDelegate`, for best performance.

::: tip
You should also always prefer the latest version of the library. Quartz.NET 2.0 is much more efficient than 1.x series and 2.2.x line again has AdoJobStore related performance improvements over earlier 2.x releases.
:::
					
# Quartz in web environment

## Scheduler keeps stopping when application pool gets recycled

By default IIS recycles and stops app pools from time to time. This means that even if you have Application_Start event to start Quartz when web app is being first accessed, the scheduler might get disposed later on due to site inactivity.

If you have a IIS 8 available, you can configure your site to be preloaded and kept running. See [this blog post](https://blogs.msdn.microsoft.com/vijaysk/2012/10/11/iis-8-whats-new-website-settings/) for details.
