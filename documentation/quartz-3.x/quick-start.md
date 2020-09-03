---
layout: default
title: Quartz.NET Quick Start Guide
---

欢迎使用Quartz.NET快速入门指南。 阅读本指南可以完成以下信息:

* 下载 Quartz.NET
* 安装 Quartz.NET
* 根据自己的特殊需求配置Quartz
* 启动示例应用程序

## 一、下载安装

你既可以通过github下载zip源码文件也可以使用VisualStudio进行下载NuGet包


## 1.NuGet 包

启动 Visual Studio 打开NuGet程序包添加Quartz的引用

* 右键单击项目的“引用”，然后选择“管理NuGet包...”。
* 从左侧选择在线类别
* 在右上角输入Quartz，然后按Enter
* 从搜索结果中选择Quartz.NET并点击安装


或者从程序包管理器控制台中输入命令行安装:

	Install-Package Quartz

如果要添加JSON序列化，只需以相同的方式搜索添加 [Quartz.Serialization.Json](packages/json-serialization) 包即可。


### 2.Zip 文件

**获取方式**: GitHub搜索并下载 Quartz.NET,并解压, 从bin目录中获取`Quartz.dll`文件.

Quartz核心库没有任何依赖，如果想要使用JSON序列化等其他程序包那就单独引用它

## 二、配置说明

Quartz.NET提供了三种方式来进行参数信息的配置：


* 通过将NameValueCollection参数提供给调度程序工厂使用
* 通过配置文件 `YourApplication.exe.config` 来进行配置 (仅支持.NET framework )
* 通过`appsettings.json` (仅支持.NET Core)
* 通过应用程序的根目录下的`quartz.config` 文件 (.NET Core 和 .NET Framework都支持)

你可以在项目的压缩文件中找到所有相关示例

所有的相关配置说明在 [Quartz Configuration Reference](configuration/reference).

 文件 quartz.config中的配置类似下面这样:

	quartz.scheduler.instanceName = MyScheduler
	quartz.jobStore.type = Quartz.Simpl.RAMJobStore, Quartz
    quartz.threadPool.maxConcurrency = 3

需要注意的是将配置文件的属性设置为**始终复制** 
	
以上创建的配置调度程序属性说明：

* `quartz.scheduler.instanceName` -调度任务的名字为 "MyScheduler".
* `quartz.threadPool.maxConcurrency` - 最多可以同时运行3个作业.
* `quartz.jobStore.type` - Quartz的所有数据（例如作业和触发器的详细信息）都保存在内存中（而不是数据库中）. 

即使你有一个数据库，并想与Quartz一起使用它，我建议你先让Quartz与RamJobStore一起工作，然后再通过使用数据库打开一个全新的维度。

::: tip
这些属性都有默认值，如果不修改默认值则不需要重新定义这些属性
:::

## 启动示例应用程序

现在，您已经下载并安装了Quartz，是时候启动并运行示例应用程序了

**Program.cs**

```csharp
using System;
using System.Threading.Tasks;

using Quartz;
using Quartz.Impl;

namespace QuartzSampleApp
{
    public class Program
    {
        private static async Task Main(string[] args)
        {
            // 从工厂获取调度程序实例
            StdSchedulerFactory factory = new StdSchedulerFactory();
            IScheduler scheduler = await factory.GetScheduler();

            // 然后开始
            await scheduler.Start();

            // some sleep to show what's happening
            await Task.Delay(TimeSpan.FromSeconds(60));

            // and last shut down the scheduler when you are ready to close your program
            await scheduler.Shutdown();
        }
    }
}
```

在Quartz3.0中在你程序的代码结尾处需要添加 `scheduler.Shutdown()` 来终止没有任何活动的线程。  
如果您希望调度程序在运行之后也继续运行，则应手动阻止退出应用程序任务。延迟已处理关闭

现在运行该程序将不会显示任何内容。当程序通过60秒后，程序将终止。让我们添加一些登录到控制台。

## 添加日志

[LibLog](https://github.com/damianh/LibLog/wiki)  在底层支持可以使用不同的日志记录框架；即Log4Net，NLog和Serilog

当LibLog没有检测到其他日志记录框架存在时，它将保持沉默。  
我们可以配置一个自定义记录器提供者，在控制台中显示输出

```csharp
LogProvider.SetCurrentLogProvider(new ConsoleLogProvider());

private class ConsoleLogProvider : ILogProvider
{
    public Logger GetLogger(string name)
    {
        return (level, func, exception, parameters) =>
        {
            if (level >= LogLevel.Info && func != null)
            {
                Console.WriteLine("[" + DateTime.Now.ToLongTimeString() + "] [" + level + "] " + func(), parameters);
            }
            return true;
        };
    }

    public IDisposable OpenNestedContext(string message)
    {
        throw new NotImplementedException();
    }

    public IDisposable OpenMappedContext(string key, string value)
    {
        throw new NotImplementedException();
    }
}
``` 

启动程序在控制台可以看到输入以下的信息

```
[12.51.10] [Info] Quartz.NET properties loaded from configuration file 'C:\QuartzSampleApp\quartz.config'
[12.51.10] [Info] Initialized Scheduler Signaller of type: Quartz.Core.SchedulerSignalerImpl
[12.51.10] [Info] Quartz Scheduler v.0.0.0.0 created.
[12.51.10] [Info] RAMJobStore initialized.
[12.51.10] [Info] Scheduler meta-data: Quartz Scheduler (v0.0.0.0) 'MyScheduler' with instanceId 'NON_CLUSTERED'
  Scheduler class: 'Quartz.Core.QuartzScheduler' - running locally.
  NOT STARTED.
  Currently in standby mode.
  Number of jobs executed: 0
  Using thread pool 'Quartz.Simpl.DefaultThreadPool' - with 3 threads.
  Using job-store 'Quartz.Simpl.RAMJobStore' - which does not support persistence. and is not clustered.

[12.51.10] [Info] Quartz scheduler 'MyScheduler' initialized
[12.51.10] [Info] Quartz scheduler version: 0.0.0.0
[12.51.10] [Info] Scheduler MyScheduler_$_NON_CLUSTERED started.
```

## 在应用程序中添加jobs


我们来实现一个简单的作业来测试功能：  
创建HelloJob，并查看控制台的日志输出。

1.创建HelloJob类并实现接口IJob

```csharp
public class HelloJob : IJob
{
	public async Task Execute(IJobExecutionContext context)
	{
		await Console.Out.WriteLineAsync("Greetings from HelloJob!");
	}
}
```
2.创建一个job 和一个触发器 并进行绑定  
这里代码需要写在Start() 和Task.Delay()之间

```csharp
// 定义一个job并将HelloJob 类绑定 
IJobDetail job = JobBuilder.Create<HelloJob>()
	.WithIdentity("job1", "group1")
	.Build();

// 触发作业立即运行，然后每10秒重复一次
ITrigger trigger = TriggerBuilder.Create()
	.WithIdentity("trigger1", "group1")
	.StartNow()
	.WithSimpleSchedule(x => x
		.WithIntervalInSeconds(10)
		.RepeatForever())
	.Build();

// 告诉quartz使用我们的触发器安排工作 
await scheduler.ScheduleJob(job, trigger);

//您还可以使用以下命令为同一作业安排多个触发器
// await scheduler.ScheduleJob(job, new List<ITrigger>() { trigger1, trigger2 }, replace: true);
```

完整代码如下：

```csharp
using System;
using System.Threading.Tasks;

using Quartz;
using Quartz.Impl;
using Quartz.Logging;

namespace QuartzSampleApp
{
    public class Program
    {
        private static async Task Main(string[] args)
        {
            LogProvider.SetCurrentLogProvider(new ConsoleLogProvider());

            // Grab the Scheduler instance from the Factory
            StdSchedulerFactory factory = new StdSchedulerFactory();
            IScheduler scheduler = await factory.GetScheduler();

            // and start it off
            await scheduler.Start();

            // 创建任务
            IJobDetail job = JobBuilder.Create<HelloJob>()
                .WithIdentity("job1", "group1")
                .Build();

            // 创建触发器
            ITrigger trigger = TriggerBuilder.Create()
                .WithIdentity("trigger1", "group1")
                .StartNow()
                .WithSimpleSchedule(x => x
                    .WithIntervalInSeconds(10)
                    .RepeatForever())
                .Build();

            // Tell quartz to schedule the job using our trigger
            await scheduler.ScheduleJob(job, trigger);

            // some sleep to show what's happening
            await Task.Delay(TimeSpan.FromSeconds(60));

            // and last shut down the scheduler when you are ready to close your program
            await scheduler.Shutdown();

            Console.WriteLine("Press any key to close the application");
            Console.ReadKey();
        }

        // simple log provider to get something to the console
        private class ConsoleLogProvider : ILogProvider
        {
            public Logger GetLogger(string name)
            {
                return (level, func, exception, parameters) =>
                {
                    if (level >= LogLevel.Info && func != null)
                    {
                        Console.WriteLine("[" + DateTime.Now.ToLongTimeString() + "] [" + level + "] " + func(), parameters);
                    }
                    return true;
                };
            }

            public IDisposable OpenNestedContext(string message)
            {
                throw new NotImplementedException();
            }

            public IDisposable OpenMappedContext(string key, string value)
            {
                throw new NotImplementedException();
            }
        }
    }

    public class HelloJob : IJob
    {
        public async Task Execute(IJobExecutionContext context)
        {
            await Console.Out.WriteLineAsync("Greetings from HelloJob!");
        }
    }
}
```

接下来点击[教程](tutorial/index.html). 了解更多Quartz.NET!
