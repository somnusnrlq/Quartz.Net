---
title: '2. Job和Trigger'
---

## The Quartz API

Quartz API的关键接口和类:

* `IScheduler` - 与调度器交互的主要api .
* `IJob` - 调度器执行所必须继承的接口 .
* `IJobDetail` - 定义Jobs实例的接口.
* `ITrigger` - 触发器组件的接口，它定义了执行给定作业的时间表，作业可以有多个相关联的触发器
* `JobBuilder` - 用于定义/生成JobDetail实例，它定义作业的实例
* `TriggerBuilder` - 用于定义/生成触发器实例
* `SchedulerBuilder` - 用于定义/生成调度程序实例，需要Quartz 3.1或更高版本。.

在本教程中，为了可读性起见，以下术语可以互换使用：: `IScheduler` and `Scheduler`, `IJob` and `Job`, `IJobDetail` and `JobDetail`, `ITrigger` and `Trigger`.

  `Scheduler`的生命周期受`SchedulerFactory`和`Shutdown()`方法的调用的影响 . 一旦创建了`IScheduler`接口，就可以对Job和Trigger进行添加、删除和列出操作，以及执行其他与调度相关的操作（例如暂停触发器）  
但是，调度器在使用Start())方法启动之前不会对任何触发器（执行作业）执行操作，如[Lesson 1](using-quartz.md) 所示

Quartz提供了"builder"类，这个定义了领域专用语言（也叫DSL，有时也称为“fluent interface”）。示例代码如下：

```csharp
// 定义job并将其绑定到我们的HelloJob类
IJobDetail job = JobBuilder.Create<HelloJob>()
    .WithIdentity("myJob", "group1") // name "myJob", group "group1"
    .Build();
    
// 触发job立即运行，然后每40秒运行一次
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("myTrigger", "group1")
    .StartNow()
    .WithSimpleSchedule(x => x
        .WithIntervalInSeconds(40)
        .RepeatForever())            
    .Build();
    
// 将任务与触发器添加到调度器中
await sched.scheduleJob(job, trigger);
```

这段代码构建Job使用`JobBuilder`对象的create方法返回一个`IJobDetail` 的job对象，  
同样构建触发器使用了`TriggerBuilder` 并通过create方法来获得Trigger 类型

schedule的扩展方法如下:

* `WithCalendarIntervalSchedule`
* `WithCronSchedule`
* `WithDailyTimeIntervalSchedule`
* `WithSimpleSchedule`

`DateBuilder` 类型包含各种方法，可以轻松地为特定时间点（例如表示下一个偶数小时的日期，或者换句话说，如果当前是9:43:27，则为10:00:00）构造DateTimeOffset实例。

## Jobs and Triggers

一个job 就是一个继承了`IJob`接口的class，它只有一个简单的方法

__IJob 接口__

```csharp
namespace Quartz
{
    public interface IJob
    {
        Task Execute(JobExecutionContext context);
    }
}
```

当Job触发器触发时（在某个时刻），Execute (..)就被scheduler所调用。JobExecutionContext对象被传递给这个方法，它为Job实例提供了它的“运行时”环境-一个指向执行这个IJob实例的Scheduler句柄，一个指向触发该次执行的触发器的句柄，IJob的JobDetail对象以及一些其他的条目  

JobDetail对象由Quartz客户端在Job被加入到scheduler时创建。它包含了Job的各种设置属性以及一个JobDataMap对象，这个对象被用来存储给定Job类实例的状态信息  
它本质上是job实例的定义

Trigger对象用于触发jobs的执行，当你想执行一个job时，可以实例化一个trigger并添加相应属性，如设置希望触发的日期时间，可以通过JobDataMap来给触发器传递参数  

Quartz附带了几种不同的触发器类型，但是最常用的类型是：SimpleTrigger (接口 `ISimpleTrigger`) 和 CronTrigger (接口 `ICronTrigger`).  

1. `SimpleTrigger`： 如果您需要“一次性”执行（只需在给定的时间一次执行一个作业），或者需要在给定的时间触发一个作业并重复执行N次（延迟一次），SimpleTrigger就会很方便.  
2. `CronTrigger` ： 按照日历触发，例如“每个星期五，中午”或“每月10日的10:15”，则CronTrigger很有用.


  
__为什么用Job和Trigger?__   
许多作业调度程序对作业和触发器没有单独的概念。 有些人将'job' 定义为简单的执行时间（或时间表）以及一些小的工作标识符。  
 其他的则很像Quartz的job和触发器trigger对象的结合。 在开发Quartz时，我们决定在进度表和按该进度表执行的工作之间创建一个分离是有意义的。 （我们认为）这有很多好处

例如，可以在独立于触发器的作业调度器中创建和存储作业，并且可以将许多触发器与同一作业关联。这种松耦合的另一个好处是能够配置在其关联触发器过期后仍留在调度程序中的作业，以便以后可以重新调度作业，而不必重新定义它。它还允许您修改或替换触发器，而无需重新定义其关联作业  

## 特性

当向Quartz scheduler中注册Jobs 和Triggers时，它们要给出标识它们的名字。Jobs 和Triggers也可以被放入“组”中。“组”对于后续维护过程中，分类管理Jobs和Triggers非常有用。Jobs和Triggers的名字在组中必须唯一，  
换句话说，Jobs和Triggers真实名字是它的名字+组。如果使Job或者Trigger的组为‘null’，这等价于将其放入缺省的Scheduler.DEFAULT_GROUP组中

现在你已经大致了解了什么是作业和触发器，您可以在 
[Lesson 3: 更多关于 Jobs & JobDetails](more-about-jobs.md) 和 [Lesson 4: 更多关于 Triggers](more-about-triggers.md) 中了解更多
