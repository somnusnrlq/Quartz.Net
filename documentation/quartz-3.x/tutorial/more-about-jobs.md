---
title: '3. 更多关于 Jobs & JobDetails'
---

正如您在第2课中看到的那样，作业非常容易实现。 关于作业的性质，IJob接口的Execute（..）方法以及JobDetails，您还需要了解几件事。

(1).JobDetail实例是使用`JobBuilder` 类构建的。`JobBuilder`提供各种接口来实现任务的具体构建

接下来我们看看任务的'nature' 和任务的生命周期，  
首先让我们回顾一下我们在第1课中看到的一些代码片段：

__Using Quartz.NET__

```csharp
// define the job and tie it to our HelloJob class
IJobDetail job = JobBuilder.Create<HelloJob>()
	.WithIdentity("myJob", "group1")
	.Build();

// Trigger the job to run now, and then every 40 seconds
ITrigger trigger = TriggerBuilder.Create()
  .WithIdentity("myTrigger", "group1")
  .StartNow()
  .WithSimpleSchedule(x => x
	  .WithIntervalInSeconds(40)
	  .RepeatForever())
  .Build();
  
sched.ScheduleJob(job, trigger);
```
	
**HelloJob** 类的定义如下:

```csharp
public class HelloJob : IJob
{
	public async Task Execute(IJobExecutionContext context)
	{
		await Console.Out.WriteLineAsync("HelloJob is executing.");
	}
}
```

我们给scheduler传入了一个JobDetail实例，而且这个JobDetail实例只是简单提供了类名来引用被执行的Job。每次scheduler执行这个任务时，它就创建这个类的新实例，然后调用该实例的Execute(..)方法。对这种行为的一个推论就是Job类必须有一个无参数的构造函数。另外一个推论就是它使得Job类中定义的成员数据失去意义，因为这些成员数据值在每次执行的时候被“清空”了。  

你可能要问，如何才能为每个Job实例提供属性和配置呢？而且，在执行中如何跟踪Job的状态呢？这些问题的答案是相同的：关键就是JobDataMap，这是JobDetail对象的一部分。  

## JobDataMap

job不是孤立存在的，它需要执行的参数，这些参数如何传递进来呢?
Quartz.Net通过JobDataMap的方式传递参数  

JobDataMap被用来保存一系列的（序列化的）对象，这些对象在Job执行时可以得到。JobDataMap是IDictionary接口的一个实现，而且还增加了一些存储和读取主类型数据的便捷方法。

这里有一些在将job添加到调度程序之前将数据放入JobDataMap的快速片段

__在JobDataMap中赋值-UsingJobData__

```csharp
// define the job and tie it to our DumbJob class
IJobDetail job = JobBuilder.Create<DumbJob>()
	.WithIdentity("myJob", "group1") // name "myJob", group "group1"
	.UsingJobData("jobSays", "Hello World!")
	.UsingJobData("myFloatValue", 3.141f)
	.Build();
```

__从 JobDataMap获取值-dataMap.GetString__

```csharp
public class DumbJob : IJob
{
	public async Task Execute(IJobExecutionContext context)
	{
		JobKey key = context.JobDetail.Key;

		JobDataMap dataMap = context.JobDetail.JobDataMap;

		string jobSays = dataMap.GetString("jobSays");
		float myFloatValue = dataMap.GetFloat("myFloatValue");

		await Console.Error.WriteLineAsync("Instance " + key + " of DumbJob says: " + jobSays + ", and val is: " + myFloatValue);
	}
}
```
如果使用一个持久的JobStore（在本指南的JobStore章节中讨论），那么必须注意存放在JobDataMap中的内容。因为放入JobDataMap中的内容将被序列化，而且容易出现类型转换问题。很明显，标准.NET类型将是非常安全的，但除此之外的类型，任何时候，只要有人改变了你要序列化其实例的类的定义，就要注意是否打破了程序的兼容性。  

另外，你可以对JobStore和JobDataMap采用一种使用模式：就是只把主类型和String类型存放在Map中，这样就可以减少后面序列化的问题  


如果您在`Job类`中添加了具有set访问器的属性,并且这些属性与JobDataMap中的key名称相对应，
则Quartz的默认JobFactory实现会在实例化作业时自动调用这些setter，
这样就避免了在execute方法中显式地字段映射。  
 请注意，使用自定义JobFactory时，默认情况下不维护此功能。

触发器还可以具有与之关联的JobDataMaps。 如果您有一个作业存储在调度程序中以供多个触发器定期/重复使用，但是对于每个独立的触发器，您都希望为该作业提供不同的数据输入，则这很有用。

JobDataMap中的key对应值的获取示例如下：

```csharp
public class DumbJob : IJob
{
	public async Task Execute(IJobExecutionContext context)
	{
		JobKey key = context.JobDetail.Key;

		JobDataMap dataMap = context.MergedJobDataMap;  // Note the difference from the previous example

		string jobSays = dataMap.GetString("jobSays");
		float myFloatValue = dataMap.GetFloat("myFloatValue");
		IList<DateTimeOffset> state = (IList<DateTimeOffset>)dataMap["myStateData"];
		state.Add(DateTimeOffset.UtcNow);

		await Console.Error.WriteLineAsync("Instance " + key + " of DumbJob says: " + jobSays + ", and val is: " + myFloatValue);
	}
}
```
或者，如果您希望依靠JobFactory将数据映射值“注入”到你的类中，则如下所示：

```csharp
public class DumbJob : IJob
{
	public string JobSays { private get; set; }
	public float FloatValue { private get; set; }

	public async Task Execute(IJobExecutionContext context)
	{
		JobKey key = context.JobDetail.Key;

		JobDataMap dataMap = context.MergedJobDataMap;  // Note the difference from the previous example

		IList<DateTimeOffset> state = (IList<DateTimeOffset>)dataMap["myStateData"];
		state.Add(DateTimeOffset.UtcNow);

		await Console.Error.WriteLineAsync("Instance " + key + " of DumbJob says: " + JobSays + ", and val is: " + FloatValue);
	}
}
```


## Job "Instances" 任务“实例”

这个课程的最终观点或许已经很明确，可以创建一个单独的Job类，并且通过创建多个JobDetails实例来将它的多个实例存储在scheduler中，这样每个JobDetails对象都有它自己的一套属性和JobDataMap，而且将它们都加入到scheduler中。

当触发器被触发的时候，通过Scheduler中配置的JobFactory来实例化与之关联的Job类。缺省的JobFactory只是简单地对Job类调用GetScheduler ()方法。创建自己JobFactory可以利用应用中诸如Ioc或者DI容器所产生或者初始化的Job实例。

## Job的状态State和并发 Concurrency

现在，有关作业状态数据（又称JobDataMap）和并发性的一些附加说明。
可以将下面这些属性添加到Job类中。

1. `[DisallowConcurrentExecution]` 它告诉Quartz不要执行多个实例，同时执行给定作业定义（引用给定作业类）的.  

在上一节的示例中，如果“ SalesReportJob”具有此属性，
这样一来，“ SalesReportForJoe”的一个实例就只能在给定时间执行，但是它可以与“ SalesReportForMike”的一个实例并发执行。
约束基于实例定义（JobDetail），而不基于作业类的实例。
但是，（在Quartz的设计过程中）决定将属性保留在类本身上，因为它经常会影响类的编码方式。  

2. `[PersistJobDataAfterExecution]` 它告诉Quartz执行Execute（）方法成功完成后.JobDetail的JobDataMap，这样下一个
执行同一作业（JobDetail）会接收更新的值，而不是原始存储的值。与`[DisallowConcurrentExecution]`属性类似，它适用于作业定义实例，而不是作业类实例，
尽管决定让工作类别携带该属性，因为它常常会影响该类别的编码方式  
（例如，execute方法中的代码需要显式地““理解”“状态”）

##  Jobs 其他属性

JobDetail 的其他属性 :

* `Durability（持久性）` -如果一个Job是不持久的， 一旦没有触发器与之关联，它就会被从scheduler 中自动删除.
* `RequestsRecovery（请求恢复能力）` -如果一个Job具备“请求恢复”能力，当它在执行时遇到scheduler “硬性的关闭”（例如：执行的过程崩溃，或者计算机被关机），那么当scheduler重新启动时，这个任务会被重新执行。这种情况下，JobExecutionContext.Recovering 属性将是true。  

## JobExecutionException 异常处理

最后，需要告诉你一些关于Job.Execute(..)方法的细节。在Execute方法被执行时，仅允许抛出一个JobExecutionException类型异常。因此需要将整个要执行的内容包括在一个'try-catch'块中。应花费一些时间仔细阅读JobExecutionException文档，因为Job能够使用它向scheduler提供各种指示，你也可以知道怎么处理异常。
