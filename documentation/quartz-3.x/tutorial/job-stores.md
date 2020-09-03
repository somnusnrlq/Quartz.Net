---
title: 'Job Stores'
---

JobStore负责跟踪您你提供给调度程序的所有“工作数据”：作业，触发器，日历等。为Quartz调度程序实例选择适当的IJobStore实现是重要的一步。 幸运的是，一旦您了解了两者之间的差异，那么选择就非常容易。 你在提供给用于生成调度程序实例的SchedulerFactory的属性文件（或对象）中声明调度程序应使用哪个JobStore（及其配置设置）。  
JobStore's are responsible for keeping track of all the "work data" that you give to the scheduler: 
jobs, triggers, calendars, etc. Selecting the appropriate `IJobStore` implementation for your Quartz scheduler instance is an important step. 
Luckily, the choice should be a very easy one once you understand the differences between them. 
You declare which JobStore your scheduler should use (and it's configuration settings) in the properties file (or object) that
you provide to the SchedulerFactory that you use to produce your scheduler instance.

::: warning
切勿在代码中直接使用JobStore实例。 由于某些原因，许多人试图这样做。
JobStore用于Quartz本身的幕后使用。 您必须（通过配置）告诉Quartz使用哪个JobStore，
但是您应该只在代码中使用Scheduler接口  
Never use a JobStore instance directly in your code. For some reason many people attempt to do this. 
The JobStore is for behind-the-scenes use of Quartz itself. You have to tell Quartz (through configuration) which JobStore to use,
but then you should only work with the Scheduler interface in your code.
:::


## RAMJobStore

`RAMJobStore` 是使用最简单的JobStore，也是性能最高的（就CPU时间而言）。
`RAMJobStore` 以明显的方式得名：它将所有数据保留在RAM中。 这就是为什么闪电般快
以及为何配置如此简单。  
缺点是当您的应用程序结束（或崩溃）时，所有调度信息丢失-这意味着RAMJobStore无法执行作业和触发器上的“非易失性”设置。
对于某些应用程序，这是可以接受的，甚至是所需的行为，但是对于其他应用程序，这可能是灾难性的。  
`RAMJobStore` is the simplest JobStore to use, it is also the most performant (in terms of CPU time). 
`RAMJobStore` gets its name in the obvious way: it keeps all of its data in RAM. This is why it's lightning-fast, 
and also why it's so simple to configure. The drawback is that when your application ends (or crashes) all of 
the scheduling information is lost - this means RAMJobStore cannot honor the setting of "non-volatility" on jobs and triggers. 
For some applications this is acceptable - or even the desired behavior, but for other applications, this may be disasterous.

**使用RAMJobStore配置Quartz**

    // this is actually the default, so you don't need to explicitly set this
	quartz.jobStore.type = Quartz.Simpl.RAMJobStore, Quartz

要使用`RAMJobStore` （并假设您正在使用`StdSchedulerFactory`），您无需执行任何特殊操作。 默认配置Quartz.NET使用`RAMJobStore` 作为作业存储实现。  
To use `RAMJobStore` (and assuming you're using `StdSchedulerFactory`) you don't need to do anything special. Default configuration
of Quartz.NET uses `RAMJobStore` as job store implementation.

## ADO.NET Job Store (AdoJobStore)

AdoJobStore也被恰当地命名-通过ADO.NET将其所有数据保存在数据库中。
因此，它的配置要比`RAMJobStore`复杂一些，而且速度也不如它快。
但是，性能下降并不是很糟糕，尤其是当您使用主键上的索引构建数据库表时。  
AdoJobStore is also aptly named - it keeps all of its data in a database via ADO.NET. 
Because of this it is a bit more complicated to configure than `RAMJobStore`, and it also is not as fast. 
However, the performance draw-back is not terribly bad, especially if you build the database tables with indexes on the primary keys. 

要使用AdoJobStore，必须首先创建一组数据库表供Quartz.NET使用。
您可以在Quartz.NET发行版的“ database / dbtables”目录中找到表创建SQL脚本。
如果没有针对您的数据库类型的脚本，只需查看现有脚本之一，然后以数据库所需的任何方式对其进行修改。
需要注意的一件事是，在这些脚本中，所有表均以前缀QRTZ_开头。
例如表“ QRTZ_TRIGGERS”和“ QRTZ_JOB_DETAIL”）。 只要您告知AdoJobStore，此前缀实际上就可以是您想要的任何内容
前缀是什么（在Quartz.NET属性中）。 使用不同的前缀对于创建多组表可能很有用，
同一数据库内的多个调度程序实例。  
To use AdoJobStore, you must first create a set of database tables for Quartz.NET to use. 
You can find table-creation SQL scripts in the "database/dbtables" directory of the Quartz.NET distribution. 
If there is not already a script for your database type, just look at one of the existing ones, and modify it in any way necessary for your DB. 
One thing to note is that in these scripts, all the the tables start with the prefix `QRTZ_` 
such as the tables `QRTZ_TRIGGERS`, and `QRTZ_JOB_DETAIL`). This prefix can actually be anything you'd like, as long as you inform AdoJobStore
what the prefix is (in your Quartz.NET properties). Using different prefixes may be useful for creating multiple sets of tables, 
for multiple scheduler instances, within the same database.

当前，内部实现作业存储的唯一选择是`JobStoreTX`，它自己创建事务。
这与Quartz的Java版本不同，在Java版本中，还可以选择使用J2EE容器的`JobStoreCMT`。
托管交易。
Currently the only option for the internal implementation of job store is `JobStoreTX `which creates transactions by itself.
This is different from Java version of Quartz where there is also option to choose `JobStoreCMT` which uses J2EE container
managed transactions.

最后一个难题是设置数据源，AdoJobStore可以从该数据源获得与数据库的连接。
数据源在Quartz.NET属性中定义。 数据源信息包含连接字符串
和ADO.NET委托信息。
The last piece of the puzzle is setting up a data source from which AdoJobStore can get connections to your database. 
Data sources are defined in your Quartz.NET properties. Data source information contains the connection string
and ADO.NET delegate information.

### 使用JobStoreTx配置Quartz

    quartz.jobStore.type = Quartz.Impl.AdoJobStore.JobStoreTX, Quartz

接下来，您需要选择IDriverDelegate实现供JobStore使用。 DriverDelegate负责完成特定数据库可能需要的任何ADO.NET工作。 StdAdoDelegate是使用“原始” ADO.NET代码（和SQL语句）完成其工作的委托。 如果没有专门针对您的数据库的其他委托，请尝试使用此委托-特殊委托通常对于特定于数据库的问题具有更好的性能或变通方法。 其他委托可以在Quartz.Impl.AdoJobStore命名空间或其子命名空间中找到。  
Next, you need to select a `IDriverDelegate` implementation for the JobStore to use. 
The DriverDelegate is responsible for doing any ADO.NET work that may be needed for your specific database. 
`StdAdoDelegate` is a delegate that uses "vanilla" ADO.NET code (and SQL statements) to do its work. 
If there isn't another delegate made specifically for your database, try using this delegate - 
special delegates usually have better performance or workarounds for database specific issues.
Other delegates can be found in the `Quartz.Impl.AdoJobStore` namespace, or in its sub-namespaces. 

::: tip
如果您使用默认的StdAdoDelegate，则Quartz.NET将发出警告，因为当您有很多触发器可供选择时，它的性能很差。 特定的委托人具有特殊的SQL来限制结果集的长度（SQLServerDelegate使用TOP n，PostgreSQLDelegate LIMIT n，OracleDelegate ROWCOUNT（）<= n等）。  
Quartz.NET will issue warning if you are using the default StdAdoDelegate as it has poor performance
when you have a lot of triggers to select from. Specific delegates have special SQL to limit result
set length (SQLServerDelegate uses `TOP n`, PostgreSQLDelegate `LIMIT n`, OracleDelegate `ROWCOUNT() <= n` etc.).
:::

选择委托后，将其类名称设置为AdoJobStore使用的委托。
Once you've selected your delegate, set its class name as the delegate for AdoJobStore to use.

**使用DriverDelegate配置AdoJobStore**

    quartz.jobStore.driverDelegateType = Quartz.Impl.AdoJobStore.StdAdoDelegate, Quartz

接下来，您需要通知JobStore您正在使用的表前缀（上面已讨论过）。  
Next, you need to inform the JobStore what table prefix (discussed above) you are using.

**使用表前缀配置AdoJobStore**

    quartz.jobStore.tablePrefix = QRTZ_

最后，您需要设置JobStore应该使用哪个数据源。 命名的数据源也必须在Quartz属性中定义。
在这种情况下，我们指定Quartz应该使用数据源名称“ myDS”（在配置属性的其他位置定义）。  
And finally, you need to set which data source should be used by the JobStore. The named data source must also be defined in your Quartz properties. 
In this case, we're specifying that Quartz should use the data source name "myDS" (that is defined elsewhere in the configuration properties).

**指定数据源来配置AdoJobStore**
    
    quartz.jobStore.dataSource = myDS

配置所需的最后一件事是设置数据源连接字符串信息和数据库提供程序。 连接
字符串是特定于驱动程序的标准ADO.NET连接。 数据库提供程序是要创建的数据库驱动程序的抽象
数据库驱动程序和Quartz之间的松散耦合。  
One last thing that is needed for the configuration is to set data source connection string information and database provider. Connection
string is the standard ADO.NET connection which is driver specific. Database provider is an abstraction of database drivers to create
loose coupling between database drivers and Quartz.

**设置数据源的连接字符串和数据库提供程序**

     quartz.dataSource.myDS.connectionString = Server=localhost;Database=quartz;Uid=quartznet;Pwd=quartznet
     quartz.dataSource.myDS.provider = MySql

当前支持以下9种数据库提供程序:

* `SqlServer` - SQL Server Provider
    * 对于完整框架，默认情况下为System.Data.SqlClient（Quartz 3.1中除外）
    * 从Quartz 3.2开始，针对.NET Core，默认情况下为Microsoft.Data.SqlClient
* `MicrosoftDataSqlClient` - 在完整框架上单独可用（.NET Core的默认设置）
* `OracleODP` - Oracle's Oracle Provider
* `OracleODPManaged` - 适用于Oracle 11g的Oracle托管驱动程序
* `MySql` - MySQL Connector/.NET
* `SQLite` - SQLite ADO.NET Provider
* `SQLite-Microsoft` - Microsoft SQLite ADO.NET Provider
* `Firebird` - Firebird ADO.NET Provider
* `Npgsql` - PostgreSQL Npgsql

::: tip
也有很多社区贡献的提供程序，例如NoSQL数据库。
 
但是，Quartz.NET项目不支持它们.
:::

**您可以并且应该使用最新版本的驱动程序（如果有更新的话），只需创建程序集绑定重定向**

如果你的Scheduler非常忙（即几乎总是执行与线程池大小相同数量的作业，那么您应该可能将数据源中的连接数设置为大约线程池的大小+1。这通常是配置的
int ADO.NET连接字符串-有关详细信息，请参见驱动程序实现。  
If your Scheduler is very busy (i.e. nearly always executing the same number of jobs as the size of the thread pool, then you should 
probably set the number of connections in the data source to be the about the size of the thread pool + 1.This is commonly configured
int the ADO.NET connection string - see your driver implementation for details.

可以将`quartz.jobStore.useProperties`配置参数设置为“ true”（默认为false），以指示AdoJobStore JobDataMaps中的所有值都是字符串，
因此可以将它们存储为名称-值对，而不是将更复杂的对象以其序列化形式存储在BLOB列中。 从长远来看，这更安全，
因为避免了将非String类序列化为BLOB时出现的类版本控制问题。  
The `quartz.jobStore.useProperties` config parameter can be set to "true" (defaults to false) in order to instruct AdoJobStore that all values in JobDataMaps will be strings, 
and therefore can be stored as name-value pairs, rather than storing more complex objects in their serialized form in the BLOB column. This is much safer in the long term, 
as you avoid the class versioning issues that there are with serializing your non-String classes into a BLOB.

### 配置AdoJobStore以将字符串用作JobDataMap值

::: tip
建议使用此配置，因为它可以大大减少类型序列化问题的可能性  
This is recommended configuration because it greatly decreases the possibility of type serialization issues.
:::

    quartz.jobStore.useProperties = true
    
 ### 选择一个序列化器
 
 Quartz.NET支持二进制和JSON序列化。  
 JSON序列化来自单独的[Quartz.Serialization.Json](../packages/json-serialization) NuGet 包.  

 Quartz.NET supports both binary and JSON serialization.
 JSON serialization comes from separate [Quartz.Serialization.Json](../packages/json-serialization) NuGet 包.
 
 ::: tip
 建议使用JSON持久格式将数据存储在未开发项目的数据库中。
您还应该强烈考虑将useProperties设置为true以将键值限制为字符串。  
 JSON is recommended persistent format to store data in database for greenfield projects.
 You should also strongly consider setting useProperties to true to restrict key-values to be strings.
 :::
 
    // “ json”是“ Quartz.Simpl.JsonObjectSerializer，Quartz.Serialization.Json”的别名crystal.serializer.type = json   
	// "json" is alias for "Quartz.Simpl.JsonObjectSerializer, Quartz.Serialization.Json" 
	quartz.serializer.type = json

