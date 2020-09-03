---
title: '1. Quartz用法'
---
创建一个调度程序，首先要对`StdSchedulerFactory`实例化,获取一个IScheduler对象

一旦一个调度程序被实例化，它就可以被启动、置于备用模式并关闭。请注意，一旦调度程序被关闭，在不重新实例化的情况下就无法重新启动它。触发器不会触发（作业不会执行），除非调度程序已启动，也不会处于暂停状态。

示例代码如下：

__Using Quartz.NET__

```csharp
//  实例化一个调度工厂对象
StdSchedulerFactory factory = new StdSchedulerFactory();

// 获取一个调度器
IScheduler scheduler = await factory.GetScheduler();
await scheduler.Start();

// 定义job并将其绑定到我们的HelloJob类
IJobDetail job = JobBuilder.Create<HelloJob>()
    .WithIdentity("myJob", "group1")
    .Build();

// 现在触发作业，然后每隔40秒运行一次
ITrigger trigger = TriggerBuilder.Create()
    .WithIdentity("myTrigger", "group1")
    .StartNow()
    .WithSimpleSchedule(x => x
        .WithIntervalInSeconds(40)
        .RepeatForever())
.Build();
    
await scheduler.ScheduleJob(job, trigger);

// 你还可以为同一作业调度多个触发器
// await scheduler.ScheduleJob(job, new List<ITrigger>() { trigger1, trigger2 }, replace: true);
```

以上Quartz.NET的代码非常简单，接下来在[Lesson 2](jobs-and-triggers.md) 中说下job和trigger