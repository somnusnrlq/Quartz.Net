---
title: '配置，资源使用情况和SchedulerFactory'
---

Quartz以模块化方式进行架构，因此要使其运行，需要将多个组件“绑定”在一起。  

在Quartz进行工作之前，需要配置的主要组件是：  

* ThreadPool
* JobStore
* DataSources (if necessary)
* The Scheduler itself

自从引入基于任务的作业以来，线程池已发生了很大变化。现在默认实现`DefaultThreadPool`使用[CLR's managed thread pool](https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool)将作业作为任务执行。 你
可以配置具有最大并发性的池，这有效地限制了可以调度到CLR线程池的并发任务数。 有关如何配置线程池实现的更多详细信息，请参见配置参考。  
Thread pooling has changed a lot since the Task-based jobs were introduced. 
Now the default implementation, `DefaultThreadPool` uses [CLR's managed thread pool](https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool) to execute jobs as tasks.
You can configure the pool that have max concurrency, which effectively limits how many concurrent tasks can be scheduled to the CLR's thread pool.
See configuration reference for more details on how to configure the thread pool implementation. 

在本教程的第9课中讨论了JobStores和DataSources。值得注意的是，所有的JobStores
实现“IJobStore”接口—如果其中一个绑定的jobstore不符合您的需要，那么您可以创建自己的jobstore。  
JobStores and DataSources were discussed in Lesson 9 of this tutorial. Worth noting here, is the fact that all JobStores 
implement the `IJobStore` interface - and that if one of the bundled JobStores does not fit your needs, then you can make your own.

最后，您需要创建Scheduler实例。 调度程序本身需要命名并交给它
JobStore和ThreadPool的实例。  
Finally, you need to create your Scheduler instance. The Scheduler itself needs to be given a name and handed 
instances of a JobStore and ThreadPool.

## StdSchedulerFactory 标准调度程序工厂

StdSchedulerFactory是ISchedulerFactory接口的实现。
它使用一组属性（“ NameValueCollection”）来创建和初始化Quartz Scheduler。
这些属性通常存储在文件中或从文件中加载，但是也可以由程序创建并直接交给工厂。
只需在工厂中调用`GetScheduler（）`，即可生成调度程序，对其进行初始化（及其ThreadPool，JobStore和DataSources），
并返回其公共接口的句柄。  
`StdSchedulerFactory` is an implementation of the `ISchedulerFactory` interface. 
It uses a set of properties (`NameValueCollection`) to create and initialize a Quartz Scheduler. 
The properties are generally stored in and loaded from a file, but can also be created by your program and handed directly to the factory. 
Simply calling `GetScheduler()` on the factory will produce the scheduler, initialize it (and its ThreadPool, JobStore and DataSources), 
and return a handle to its public interface.

您可以在Quartz文档的“配置参考”部分中找到完整的文档。  
You can find complete documentation in the "Configuration Reference" section of the Quartz documentation.

## DirectSchedulerFactory

DirectSchedulerFactory是另一个ISchedulerFactory实现。 这对于希望创建计划程序的人很有用
以更具编程性的方式实例化。 通常不建议使用它，原因如下：  
`DirectSchedulerFactory` is another `ISchedulerFactory` implementation. It is useful to those wishing to create their Scheduler 
instance in a more programmatic way. Its use is generally discouraged for the following reasons:

- 它要求用户对自己的工作有更深入的了解，并且
- 它不允许进行声明式配置-换句话说，您最终对所有调度程序的设置进行了硬编码。  
- It requires the user to have a greater understanding of what they're doing, and
- it does not allow for declarative configuration - or in other words, you end up hard-coding all of the scheduler's settings.

## Logging 日志

::: tip
从Quartz.NET 3.1开始，您可以配置使用[Microsoft.Extensions.Logging.Abstractions]（https://www.nuget.org/packages/Microsoft.Extensions.Logging.Abstractions/）代替LibLog。
As of Quartz.NET 3.1, you can configure [Microsoft.Extensions.Logging.Abstractions](https://www.nuget.org/packages/Microsoft.Extensions.Logging.Abstractions/) to be used instead of LibLog. 
:::

### LibLog 日志库

Quartz.NET使用<a href="https://github.com/damianh/LibLog"> LibLog库</a>满足其所有日志记录需求。
Quartz不会产生太多的日志记录信息-通常仅在初始化期间提供一些信息，并且
那么仅在作业执行时发送有关严重问题的消息。 为了“调整”日志记录设置
（例如输出的数量以及输出的位置），您实际上需要配置您选择的日志记录框架，因为LibLog主要将工作委托给
更完善的日志记录框架，例如log4net，serilog等。  
Quartz.NET uses <a href="https://github.com/damianh/LibLog">LibLog library</a> for all of its logging needs. 
Quartz does not produce much logging information - generally just some information during initialization, and 
then only messages about serious problems while Jobs are executing. In order to "tune" the logging settings 
(such as the amount of output, and where the output goes), you need to actually configure your logging framework of choice as LibLog mostly delegates the work to
more full-fledged logging framework like log4net, serilog etc.

有关更多信息，请参见<a href="https://github.com/damianh/LibLog/wiki"> LibLog Wiki </a>。  
Please see <a href="https://github.com/damianh/LibLog/wiki">LibLog Wiki</a> for more information.

### Microsoft.Extensions.Logging.Abstractions

您可以手动配置Microsoft.Extensions.Logging.Abstractions，也可以使用[Quartz.Extensions.DependencyInjection]（https://www.nuget.org/packages/Quartz.Extensions.DependencyInjection）中提供的服务进行配置。  

#### 手动配置代码
```csharp
// obtain your logger factory, for example from IServiceProvider
ILoggerFactory loggerFactory = ...;

// Quartz 3.1
Quartz.LogContext.SetCurrentLogProvider(loggerFactory);

// Quartz 3.2 onwards
Quartz.Logging.LogContext.SetCurrentLogProvider(loggerFactory);
```

#### 使用Microsoft DI集成进行配置
```csharp
services.AddQuartz(q =>
{
    // this automatically registers the Microsoft Logging
});
```
