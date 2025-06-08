---
title: "Get Started with Azure SQL Database for Free"
description: "Learn how to set up a free Azure SQL Database, connect/populate it with your ASP.NET Web API using Entity Framework Core and optimize for cloud deployment"
date: 2025-06-07 14:30:00 +0200
categories: [Azure, SQL Database ,ASP.NET]
tags: [azure, sql-database, csharp, entity-framework, cloud, asp.net]
image: /assets/img/posts/2025-06/azure-sql-database.png
---

## **What's the hype?**
Ever wanted to try Azure SQL Database but worried about the cost? Good news! Microsoft offers a free tier that's perfect for learning, development and small projects. In this post, we'll walk through setting up your free Azure SQL Database and connecting it to a .NET 9 application using Entity Framework Core.

## **Why Azure SQL Database?**
If you dont know.. you can think of Azure SQL Database as your personal database in the cloud that:
- **Scales automatically**: Handles more users without you doing anything
- **Stays updated**: Microsoft keeps it secure and up-to-date
- **Costs nothing to start**: Free tier gives you 32GB of storage
- **Works anywhere**: Access your data from any device, anywhere
- **Backs up automatically**: Your data is safe even if something goes wrong

## **Prerequisites**
Make sure you have the following:
- [Azure Account](https://portal.azure.com/) (free tier available)
- [Visual Studio](https://visualstudio.microsoft.com/) or Visual Studio Code
- Basic knowledge of Azure Portal
- Familiarity with .NET and Entity Framework

## **Setting Up Your Free Azure SQL Database**

### **Create Your Database**
The official Microsoft documentation makes this pretty straightforward if you prefer to follow along there: [Deploy for Free - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/free-offer?view=azuresql)

This was a pretty cool process, learnt some cool things from this video. I was looking at this playlist on Youtube called .NET Azure for beginners, the things you can do with cloud, its amazing. Normally Id experiment on my local so this was a pretty cool adjustment, same flow with minor changes to point to cloud. 

I wanted to paste a couple of screenshots for the walk-through of this process and thought.. nah there's literally a video that shows you the process. You may or may not hit the firewall exception inside here on Azure if you do, you should be good. Ive provided the timestamp as well for this process. At some point I was confused on where to find this query editor that's mentioned in the video, turns out I was in the wrong resource haha. Pay close attention to specific changes on this process aswell.

{% include embed/youtube.html id="KZK1DJfjNDA" %}
*Watch from **7:40 - 12:40** for the database setup*

## **Connecting to The Cloud**
Now comes the fun part, connecting to the Azure SQL Database you created via your ASP.NET Web API!

![Mission Completed](/assets/img/posts/2025-06/connect-the-dots.png)

Here's the official documentation [Tutorial: Create a minimal API with ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-9.0&tabs=visual-studio) 

**Sorted? Nice!**

Now that you have the project all setup , here's an awesome video by **KakashiDota** showing you how to make use of Entity Framework to populate a SQL database, this video was actually about Docker, the flow would be more or less the same when doing it for our database in the cloud too.

### **Official Documentation**
- [Microsoft SQL Server Database Provider - EF Core](https://learn.microsoft.com/en-us/ef/core/providers/sql-server/?tabs=dotnet-core-cli)
- [Entity Framework Documentation Hub](https://learn.microsoft.com/en-us/ef/)

### **Follow Along Video**
Something to note about this video , you will only need to do the basic setup of this or extend the functionality incase you already know how to use Entity Framework and would just like to connect, ASAP. I have also provided the timestamp for this , as this is quite long, so to stick to the topic you only need to follow the time stamp.

{% include embed/youtube.html id="ocMwNAt3-G0" %}
*Watch from **2:05 - 15:42***

As you follow along you will add the builder service to your `Program.cs` file, in the video KakashiDota uses `UseSqlServer` but you wont need to do that, you would use `UseAzureSql` as per the docs specified above:

```csharp
builder.Services.AddDbContext<ArtistContext>(options => 
    options.UseAzureSql(builder.Configuration.GetConnectionString("AzureSqlConnectionString")));
```

**`options => options.UseAzureSql(...)`**: 
- is the EF 9+ optimized method specifically for Azure SQL (instead of the older UseSqlServer)
- This tells EF Core how to connect to and communicate with your database


## **Did It Work?**
I hope it did.. Mine actually worked on the first try (very rare). Before running the migrations, the database you created at the start was empty.

![Empty Database](/assets/img/posts/2025-06/empty-azure-sql-database.png)

After running the migrations on Visual Studio in the terminal, it would look something like the image I added at the start of this section. Now when we look at our Azure SQL database. we should see:

![Populated Database](/assets/img/posts/2025-06/populated-database.png)

Success !! Congrats if this worked for you, if not.. hmm you could pop me a message on LinkedIn and we could debug it, but Im sure you got this!

## **My Repository**

Want to see the complete implementation? Check out my GitHub repository with all the code examples:

### **[Azure SQL Database Demo](https://github.com/lukepadiachy/AzureSqlDatabaseDemo)**

You can follow my commits to see exactly how I set this up, step by step.

## **Takeaway**
Free stuff is cool stuff, especially since I'm able to create and explore things in the cloud. I dont have a database server in my house.. If I did , I'd say goodbye. We pretty much letting someone else handle the "infrastructure" of the database for us in the cloud. Overall this was really cool to learn and I'll most likely be making extended versions of this , next step , deploy a webapp on cloud and connect the database to it on cloud too. 





