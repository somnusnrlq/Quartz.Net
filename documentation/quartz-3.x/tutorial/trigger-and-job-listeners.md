---
title: 'Trigger 和 Job 侦听器'
---

Listeners 是你创建的用于根据调度程序中发生的事件执行的操作对象，
您可能会猜到，TriggerListener接收与触发器相关的事件，而JobListeners接收与作业相关的事件。  
Listeners are objects that you create to perform actions based on events occuring within the scheduler.
As you can probably guess, TriggerListeners receive events related to triggers, and JobListeners receive events related to jobs.

与触发器相关的事件包括：触发器触发，触发器误触发（在本文档的“触发器”部分中讨论）和完成触发器（触发器触发的作业已完成）  
Trigger-related events include: trigger firings, trigger mis-firings (discussed in the "Triggers" section of this document),
and trigger completions (the jobs fired off by the trigger is finished).

::: danger
确保触发器和作业侦听器不会引发异常（使用try-catch），并且它们可以处理内部问题。
当侦听器通知失败时，Quartz无法确定侦听器中所需的逻辑是否成功完成之后，作业可能会卡住  
Make sure your trigger and job listeners never throw an exception (use a try-catch) and that they can handle internal problems.
Jobs can get stuck after Quartz is unable to determine whether required logic in listener was completed successfully when listener notification failed.
:::

__ITriggerListener 接口__

```csharp
public interface ITriggerListener
{
	 string Name { get; }
	 
	 Task TriggerFired(ITrigger trigger, IJobExecutionContext context);
	 
	 Task<bool> VetoJobExecution(ITrigger trigger, IJobExecutionContext context);
	 
	 Task TriggerMisfired(ITrigger trigger);
	 
	 Task TriggerComplete(ITrigger trigger, IJobExecutionContext context, int triggerInstructionCode);
}
```
与作业相关的事件包括：即将执行作业的通知，以及作业完成执行时的通知  
Job-related events include: a notification that the job is about to be executed, and a notification when the job has completed execution.

__IJobListener 接口__

```csharp
public interface IJobListener
{
	string Name { get; }

	Task JobToBeExecuted(IJobExecutionContext context);

	Task JobExecutionVetoed(IJobExecutionContext context);

	Task JobWasExecuted(IJobExecutionContext context, JobExecutionException jobException);
} 
```

## 自己创建 Listeners

要创建一个侦听器，只需创建一个对象，该对象将实现`ITriggerListener` 和/或  `IJobListener` 接口。
然后，在运行时将侦听器注册到调度程序，通过其Name属性给其指定名称（或者，它们必须公告自己的名称）  
To create a listener, simply create an object the implements either the `ITriggerListener` and/or `IJobListener` interface. 
Listeners are then registered with the scheduler during run time, and must be given a name (or rather, they must advertise their own 
name via their Name property. 

为了方便起见，您的类也可以扩展类`JobListenerSupport`或`TriggerListenerSupport`，而不是实现这些接口。
并简单地覆盖您感兴趣的事件  
For your convenience, rather than implementing those interfaces, your class could also extend the class `JobListenerSupport` or `TriggerListenerSupport`
and simply override the events you're interested in.

侦听器与调度程序的`ListenerManager'一起注册，该Matcher描述了侦听器要为其接收事件的作业/触发器  
Listeners are registered with the scheduler's `ListenerManager` along with a Matcher that describes which Jobs/Triggers the listener wants to receive events for.

::: tip
侦听器在运行时会在调度程序中注册，并且不会与作业和触发器一起存储在JobStore中。
这是因为侦听器是你的应用程序的集成点。
因此，每次应用程序运行时，都需要在调度程序中重新注册侦听器  
Listeners are registered with the scheduler during run time, and are **NOT** stored in the JobStore along with the jobs and triggers. 
This is because listeners are typically an integration point with your application. 
Hence, each time your application runs, the listeners need to be re-registered with the scheduler.
:::


**对特定作业添加相关JobListener:**

```csharp
scheduler.ListenerManager.AddJobListener(myJobListener, KeyMatcher<JobKey>.KeyEquals(new JobKey("myJobName", "myJobGroup")));
```

**对特定组的所有作业添加相关JobListener:**

```csharp
scheduler.ListenerManager.AddJobListener(myJobListener, GroupMatcher<JobKey>.GroupEquals("myJobGroup"));
```

**对两个特定组的所有作业添加相关JobListener:**

```csharp
scheduler.ListenerManager.AddJobListener(myJobListener,
	OrMatcher<JobKey>.Or(GroupMatcher<JobKey>.GroupEquals("myJobGroup"), GroupMatcher<JobKey>.GroupEquals("yourGroup")));
```


**对所有作业添加相关JobListener：**

```csharp
scheduler.ListenerManager.AddJobListener(myJobListener, GroupMatcher<JobKey>.AnyGroup());
```

Quartz.NET的大多数用户并不使用侦听器，但是当应用程序需求引起需求时，侦听器非常方便
通知事件，而作业本身未明确通知应用程序。
