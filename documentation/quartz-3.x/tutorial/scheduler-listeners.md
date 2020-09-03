---
title: 'Scheduler 侦听器'
---

SchedulerListener与ITriggerListeners和IJobListeners非常相似，除了它们在调度程序本身内接收事件的通知-不一定与特定触发器或作业有关的事件。  
SchedulerListeners are much like `ITriggerListener`s and `IJobListener`s, except they receive notification of 
events within the scheduler itself - not necessarily events related to a specific trigger or job.

与调度程序有关的事件包括：添加作业/触发器，移除作业/触发器，调度程序内严重错误，通知调度程序正在关闭等。  
Scheduler-related events include: the addition of a job/trigger, the removal of a job/trigger, a serious error 
within the scheduler, notification of the scheduler being shutdown, and others.

::: danger
确保您的调度程序侦听器永远不会引发异常（使用try-catch），并且它们可以处理内部问题。 当侦听器通知失败时，Quartz无法确定侦听器中所需的逻辑是否成功完成时，Quartz可能会进入不可预测的状态。  
Make sure your scheduler listeners never throw an exception (use a try-catch) and that they can handle internal problems.
Quartz can get in unpredictable state when it is unable to determine whether required logic in listener was completed successfully when listener notification failed.
:::

__ISchedulerListener 接口__

```csharp
public interface ISchedulerListener
{
	Task JobScheduled(Trigger trigger);

	Task JobUnscheduled(string triggerName, string triggerGroup);

	Task TriggerFinalized(Trigger trigger);

	Task TriggersPaused(string triggerName, string triggerGroup);

	Task TriggersResumed(string triggerName, string triggerGroup);

	Task JobsPaused(string jobName, string jobGroup);

	Task JobsResumed(string jobName, string jobGroup);

	Task SchedulerError(string msg, SchedulerException cause);

	Task SchedulerShutdown();
} 
```

SchedulerListener已在调度程序的ListenerManager中注册。 SchedulerListeners实际上可以是实现ISchedulerListener接口的任何对象。  
SchedulerListeners are registered with the scheduler's `ListenerManager`.
SchedulerListeners can be virtually any object that implements the `ISchedulerListener` interface.

**添加一个SchedulerListener:**

```csharp
scheduler.ListenerManager.AddSchedulerListener(mySchedListener);
```

**删除一个SchedulerListener:**

```csharp
scheduler.ListenerManager.RemoveSchedulerListener(mySchedListener);
```
