---
title: ".NET for Beginners: A Newbies Perspective"
description: "Confused about .NET vs .NET Framework? That was me too. Let's break it down, understand why Microsoft made the switch and help you get started with .NET development."
date: 2025-03-05 20:41:00 +0200
categories: [.NET]
tags: [.net, .net-framework, beginners, programming, development]
image: /assets/img/posts/2025-03/dotnet-intro.png
---

## Funny Story  
I wrote my first blog post about this topic last year. At the time, I had less than a year of experience with .NET and I was focused on .NET MAUI. To me, .NET was literally just .NET. I shared that blog all over social media. The cringe of that post didn’t hit me until I saw the comments from more experienced developers saying, **"DOTNET FRAMEWORK???."** At first, I argued, like, **"YEAH YEAH, what do you mean, question marks?"** It was one of those moments where I was commenting from the sidelines without actually adding anything to the post. Then I watched an awesome video by **Claudia Regio** on **"What is .NET?"** BAM! The cringe hit even harder because I realized how it came off... I was basically comparing bleach, which has a specific purpose, to Handy Andy, which is multi-purpose. I was in shambles because it’s not quite the same thing! I learnt something though! Developers dont play about their development platforms haha! The word framework just gives me *"Trauma"* ever since.


## What is .NET?

Alright, so what is .NET exactly? It’s a free, open-source toolkit created by Microsoft that lets you build all kinds of apps. Cool things like a web app , a mobile app, a desktop app or something that runs on the cloud. It's a platform that brings together everything you need: a runtime (like the engine that makes everything run), libraries (pre-built code you can use), and tools (for building, testing, and debugging your apps). You can use a bunch of programming languages, but C# is probably the most popular. So, basically, it’s the ultimate multitool for developers. You are able to create software across multiple platforms like Windows, Linux, macOS, iOS, Android and many more. 



### Key Features of .NET
- **Cross-platform support**: Write your code once, and it'll run on Windows, Linux and macOS. No need to worry about switching gears for different systems.
- **High performance**: Speed and efficiency are the name of the game, making sure your apps run as fast as possible with minimal resources.
- **Modern development**: Supports languages like C#, F#, and VB.NET—modern languages for modern apps.
- **Open-source**: A massive global community of developers actively contributes and improves .NET every day.
- **Unified development**: One Platform, endless possibilities.


## The Evolution: From .NET Framework to .NET

Here’s where it gets a little juicy with history.

### The Birth of .NET Framework
Back in the early 2000s, Microsoft dropped the .NET Framework, which was a huge deal for building Windows applications. Think of it as the older brother of .NET. It had a big, fancy library of code (called the Framework Class Library, or FCL) and made it easier for developers to build apps by handling the nitty-gritty stuff like memory management, security, and exceptions.

### The Shift to .NET Core
But over time, developers wanted more. They wanted something that worked not just on Windows, but also on other operating systems like Linux and macOS. Introducing **.NET Core**, released in 2014-2016. It was lightweight, open-source and designed for modern development like microservices. Developers could now build apps that worked everywhere, not just on Windows.

### The Unification: .NET 5 and Beyond
Then, in 2020, Microsoft decided to unite everything into one platform called **.NET 5** (no more “Core”). This was the game-changer: a single platform that combines all the features of .NET Framework and .NET Core into one place. Now, you can develop every type of application,from web apps to mobile apps, cloud services to gaming—all on .NET. and with each new version, it just keeps getting better.


## .NET vs. .NET Framework: What's the Difference?

Let’s clear this up once and for all. The confusion between **.NET Framework** and **.NET** (formerly .NET Core) is real, but don’t worry—here’s the 411:

| Feature            | .NET Framework           | .NET (formerly .NET Core)     |
|--------------------|--------------------------|------------------------------|
| **Platform**       | Windows-only             | Cross-platform (Windows, Linux, macOS) |
| **Open Source**    | Partially open           | Fully open-source            |
| **Performance**    | Less optimized           | Much faster and more efficient |
| **Future Development** | No new features         | Actively developed with new features |
| **Best Use Case**  | Legacy Windows apps      | Modern cloud, web, mobile, and desktop apps |

## The Components of .NET

We can think of .NET like a car, it’s not just the engine (the runtime) but also the wheels (libraries), the fuel (compiler) and the driver (us, as developers!) working together. Here's a breakdown of the key components:

### **Runtime**  
The runtime is like the engine of your car. It’s responsible for executing your application code. It makes sure everything runs smoothly once your app is launched, managing memory and resources while your app is running.

### **Libraries**  
Libraries in .NET are pre-written pieces of code that you can use in your own apps. It's like a toolbox where you can grab tools like JSON parsers, math functions, and much more, without having to create everything from scratch. Think of libraries as ready-made solutions that save you tons of time!

### **Compiler**  
The compiler is the machine that turns your C# (or other language) code into executable code that the computer can understand and run. It’s like translating a recipe into instructions for a robot to follow—without the compiler, your code is just a bunch of instructions that no one can understand!

### **SDK (Software Development Kit) & Tools**  
The SDK is your developer toolbox. It provides everything you need to build, test, and deploy your apps. It includes the runtime, libraries, compiler, and other essential tools. The .NET SDK makes sure you have a smooth and modern workflow when building your app.

### **App Stacks (e.g. ASP.NET Web API, .NET MAUI)** 
App stacks are like the types of vehicles you can build with the .NET engine. For example, ASP.NET Web API is an app stack used to build RESTful APIs that allow your applications to communicate with each other over HTTP. This is great for building backend services for web and mobile apps. On the other hand, .NET MAUI (Multi-platform App UI) allows you to build cross-platform apps for mobile, tablet, and desktop using a single codebase. These app stacks are built on top of the core .NET runtime and libraries to make creating certain types of apps easier.

### C# & Object-Oriented Programming (OOP)  
C# is the main language used in .NET, and it's an object-oriented language. This means you organize your code around objects that represent real-world things. For example, in a shopping app, you might have objects like “Product,” “Customer,” and “Order.” These objects have properties (like name or price) and actions (like adding to the cart or placing an order).

### **Garbage Collection**  
C# and .NET handle memory management for you, so you don’t have to worry about keeping track of memory used by objects. This process is called **garbage collection**, and it automatically frees up memory that is no longer needed. It’s like a housekeeper who cleans up after you—making sure your app doesn’t run out of memory and crash.

### **Asynchronous Programming (async/await)**  
One cool thing about .NET is that it lets you run many tasks at the same time without blocking each other. For example, you can download files in the background while keeping the app responsive. This is done using **asynchronous programming** with the `async` and `await` keywords. It’s a superpower that allows your app to handle many things at once without getting stuck!

### **Type System and Generics**  
In .NET, everything is based on types. A type is basically a blueprint for creating objects, like a mold for making a specific kind of toy. .NET allows you to use **generics**, which means you can create reusable blueprints that work with any data type—like a toy mold that can be used for making different kinds of toys.

### **Exceptions (Error Handling)**  
When something goes wrong in your app, you don’t want it to crash, right? **Exceptions** help handle errors gracefully by letting you catch and deal with them. For example, if your app can’t find a file, it can show a message instead of just crashing. Properly handling exceptions is important for keeping your app stable and reliable.

### NuGet: The Package Manager  
Just like how you might use an app store to download apps for your phone, **NuGet** is a package manager for .NET that allows you to download and use pre-built libraries and components in your app. There are thousands of packages available on NuGet, so you can quickly add functionality like authentication, file handling, and much more to your projects!

## Get Started with .NET

Microsoft has a lot of helpful resources to guide you through the process. Here are some links to get you started:

**Microsoft Learn: .NET Learning Paths** 
Microsoft offers free, interactive tutorials covering various aspects of .NET, including web, mobile, desktop, and more. These learning paths are designed to cater to beginners and provide hands-on experience.
[Microsoft Learn: .NET Learning Paths](https://dotnet.microsoft.com/en-us/learn)

**.NET Beginner Series GitHub Repository** 
This GitHub repository contains a series of beginner-friendly videos, code samples, and links covering various .NET topics, including C#, ASP.NET Core, and more. It's a valuable resource for structured learning.
[dotnet/beginner-series GitHub Repository](https://github.com/dotnet/beginner-series)

**.NET Documentation Overview**  
Check out the official .NET docs to get an understanding of the platform and its capabilities:  
[Explore .NET Documentation](https://learn.microsoft.com/en-us/dotnet/)

**Install .NET**  
Learn how to install the .NET SDK on your system, no matter your operating system:  
[Install .NET SDK](https://learn.microsoft.com/en-us/dotnet/core/install/)

**Getting Started with .NET**  
Follow step-by-step guides and tutorials to set up your environment and create your first application:  
[Get Started with .NET](https://learn.microsoft.com/en-us/dotnet/core/get-started)

**Learn C#**  
Start learning C#, the most popular language for .NET development:  
[C# for Beginners](https://learn.microsoft.com/en-us/dotnet/csharp/)

## .NET Visual

{% include embed/youtube.html id="6BcPIvVfVAw" %}

## Conclusion 
Basically .NET is really cool for those looking to get started on their developer journey , it how I started mine and its still interesting to this day. Still so much to learn. Loads of interesting solutions and challenges on this journey from my side. I started with .NET 8 , we already at .NET 9 , with the release of a Preview for 10. The growth is insaaane!