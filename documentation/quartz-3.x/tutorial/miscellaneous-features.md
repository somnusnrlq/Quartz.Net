---
title:  '其他特性'
---

## 插件化

Quartz提供了一个用于插入附加功能的接口（ISchedulerPlugin）  

在Quartz.Plugins命名空间中可以找到Quartz附带的提供各种实用程序功能的插件。 它们提供了一些功能，例如在调度程序启动时自动调度作业，记录作业和触发事件的历史记录，并确保虚拟机退出时调度程序干净地关闭  

#JobFactory
Quartz提供了一个接口（`ISchedulerPlugin`）来插入附加功能  
Quartz provides an interface (`ISchedulerPlugin`) for plugging-in additional functionality.

Quartz附带的提供各种实用程序功能的插件可以在Quartz.Plugins名称空间中找到。
它们提供了一些功能，例如在调度程序启动时自动调度作业，记录作业历史和触发事件，
并确保在虚拟机退出时调度程序完全关闭  
Plugins that ship with Quartz to provide various utility capabilities can be found documented in the `Quartz.Plugins` namespace. 
They provide functionality such as auto-scheduling of jobs upon scheduler startup, logging a history of job and trigger events, 
and ensuring that the scheduler shuts down cleanly when the virtual machine exits.

## JobFactory

触发触发器时，将通过在Scheduler上配置的JobFactory实例化与之关联的Job。
默认的JobFactory仅激活作业类的新实例。 您可能要创建自己的实现
JobFactory来完成诸如使应用程序的IoC或DI容器生成/初始化作业实例之类的事情  
When a trigger fires, the Job it is associated to is instantiated via the JobFactory configured on the Scheduler. 
The default JobFactory simply activates a new instance of the job class. You may want to create your own implementation 
of JobFactory to accomplish things such as having your application's IoC or DI container produce/initialize the job instance.

请参见 `IJobFactory` 接口和关联的`IScheduler.JobFactory` setter属性。

::: tip
从Quartz 3.1开始，[内置与Microsoft Dependency Injection集成的支持]（../ packages / microsoft-di-integration）在
允许使用不同的IoC容器实现  
Since Quartz 3.1, there's [built-in support for integrating with Microsoft Dependency Injection](../packages/microsoft-di-integration) which in 
turn allows to use different IoC container implementations.
:::

## 'Factory-Shipped' Jobs

Quartz还提供了许多实用程序作业，您可以在应用程序中使用它们执行诸如发送之类的操作
电子邮件和调用远程对象。 这些开箱即用的作业可以在Quartz.Jobs名称空间中找到，并且
是[Quartz.Jobs NuGet软件包]（https://www.nuget.org/packages/Quartz.Jobs）的一部分  
Quartz also provides a number of utility Jobs that you can use in your application for doing things like sending
e-mails and invoking remote objects. These out-of-the-box Jobs can be found documented in the `Quartz.Jobs` namespace and 
are part of the [Quartz.Jobs NuGet package](https://www.nuget.org/packages/Quartz.Jobs).
