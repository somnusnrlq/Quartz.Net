---
title: '高级（企业）功能'
---

## 群集

群集仅适用于AdoJobstore（JobStoreTX）。 功能包括负载平衡和作业故障转移（如果JobDetail的“请求恢复”标志设置为true）  

Clustering currently only works with the AdoJobstore (`JobStoreTX`). 
Features include load-balancing and job fail-over (if the JobDetail's "request recovery" flag is set to true).

通过将quartz.jobStore.clustered属性设置为“ true”来启用集群。 群集中的每个实例应使用相同的石英属性副本。 例外是使用相同的属性，但有以下允许的例外：不同的线程池大小，以及crystal.scheduler.instanceId属性的不同值。 集群中的每个节点必须具有唯一的instanceId，可以通过将AUTO用作此属性的值来轻松完成（无需其他属性文件）。  

Enable clustering by setting the `quartz.jobStore.clustered` property to "true". 
Each instance in the cluster should use the same copy of the quartz properties. 
Exceptions of this would be to use properties that are identical, with the following allowable exceptions: 
Different thread pool size, and different value for the `quartz.scheduler.instanceId` property. 
Each node in the cluster MUST have a unique instanceId, which is easily done (without needing different properties files) by placing `AUTO` as the value of this property.

::: danger
切勿在单独的计算机上运行集群，除非使用非常定期运行的某种形式的时间同步服务（守护程序）同步它们的时钟（时钟之间的时间间隔必须在1秒钟之内）。
参见[https://www.nist.gov/pml/time-and-frequency-division/services/internet-time-service-its](https://www.nist.gov/pml/time-and-frequency -division / services / internet-time-service-its）（如果您不熟悉此操作）  
:::

::: danger
切勿针对正在运行的任何其他实例（“ Start（）” ed）的同一组数据库表启动（“ scheduler.Start（）”）非集群实例。
您可能会遇到严重的数据损坏，并且肯定会遇到不稳定的行为  
:::

::: danger
监视并确保你的服务器节点具有足够的CPU资源来完成作业。
当某些节点处于100％CPU中时，它们可能无法更新作业存储，而其他节点可以认为这些作业丢失并通过重新运行来恢复它们  
:::