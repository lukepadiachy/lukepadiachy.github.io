---
title: "From The CLI To The IDE: C# Introduction"
description: "An introduction to C# covering development from the command-line to the IDE and even running code directly in the browser."
date: 2025-03-09 13:41:00 +0200
categories: [C#, .NET]
tags: [csharp, .net, beginners, programming, development]
image: /assets/img/posts/2025-03/csharp-intro.png
---

## **Purpose**

You ever wondered what it's like to write your first line of code? Is it only for those dubbed as **'smart'** or the dude/dudette sitting in their room with a hoodie hacking the neighbors WiFi isolated from society? Maybe the latest & greatest tech? Perhaps spending a couple a bucks to get started? Well, let me say this, NO! All you need is passion, a passion for learning something new, I mean you could **'borrow'** someone's laptop or head to the nearest library to try this out if you're in a position where access to machines are pretty limited. I'll provide a in-browser section aswell.

This is literally for anyone, for those who are curious, those with goals and those with a vision. We'll start with the basics of C# taking it from our CLI to our IDE and Browser.

## **What exactly is C#?**
What does a musical note have to do with programming? Honestly speaking this is a different pitch. C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by **Microsoft**. It's designed to be simple, efficient and versatile, making it a popular choice for building a wide range of applications, such as desktop software to web services and games. C# is part of the .NET platform, which is possibly a developers best friend. It's like the Canva or Figma to Designers, Literally.

If you want to learn more about .NET as a whole, I did a blogpost about it too [.NET for Beginners: A Newbies Perspective](https://lukepadiachy.github.io/posts/dotnet-beginners).

## **C# in the Terminal**
Im not going to assume you read the blogpost about **.NET** right away. Just a heads up that you will need .NET to be installed for this and other two sections, Browser is also an option Ill add at the end. 

### **Open up the Terminal**
There's two ways you can do this:

- Windows + R , then type `cmd`
- Open it from the start menu.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-one.png)

- Make sure you have `.NET` installed 
- Type `dotnet` inside your terminal.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-two.png)

Once you get something like this , it should be installed.

Next I have a folder called `dotnetprojects` which I will run some commands inside like 

```bash
mkdir helloworld 
cd helloworld
dir
```

Basically we just created a folder called `helloworld` and we navigated into it, then checked what's inside it , which should be empty.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-three.png)

So let's type `dotnet new` which will allow us to see the options we have from our Command Line.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-four.png)

We'll use `dotnet new console`, which is a command used in `.NET` to create a new **console application**. 

### **Breaking it down:**
- **`dotnet new`** → This is the general command for creating new .NET projects.
- **`console`** → This tells .NET to create a **console application**, which is a simple program that runs in the terminal/command prompt.

### **What is a Console Application?**
A console application is a simple program that runs in a terminal or command prompt without a graphical user interface (GUI). It takes input from the keyboard and displays output as text.

#### **Key Features:**
- Runs in a command-line interface (CLI) like Command Prompt, Terminal, or PowerShell.
- Uses text-based input and output instead of buttons, forms or pictures.

### **What Happens When You Run It?**
If you run this in your terminal or command prompt:
```sh
dotnet new console
```
- It creates a new folder with some basic files.
- `obj` supporting files 
- It generates a `Program.cs` file, this is the **main entry point** of our application. Basically if you thinking of a house, `Program.cs` is the door .
- It sets up a `helloworld.csproj` file, which is our project file.
- Run the app using:

```sh
dotnet run
```

This will print:
```
Hello, World!
```

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-five.png)

Woohoo! We've basically ran our first line of C# code.


### **.NET does the following:**  

When you run:
```sh
dotnet run
```

- **Compiles** your C# code into an executable format that our `Program.cs` understands.  
- Stores the output files inside `bin/Debug/net9.0/` (or another version, depending on your .NET version).  
- Runs the compiled version of your program.  

But now if we head back to our terminal and type `dir`, you will find that an extra file has been added `bin`, which is our finished product. You should see 

```
bin
obj
helloworld.csproj
Program.cs
```
We can look at this in Notepad too (this is probably how things were done back in the days).

Let's run:
```sh
notepad .\Program.cs
```

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-six.png)

Coding from a notepad could drive you crazy for many reasons , It's like driving a bicycle without the training wheels, literally. Normally Developers would use something called an **IDE**

## **What is an IDE?**

An Integrated Development Environment (IDE) is like a digital toolbox, providing all the essential tools you need to write, test, and debug your code in one place. It's designed to streamline your coding process, making development more efficient and enjoyable.


### **Visual Studio Code**

Visual Studio Code (VS Code) is a free code editor developed by Microsoft. It's lightweight and versatile, but to work with C# and .NET, you'll need to add some extensions.

#### **Setting Up VS Code for C# Development:**

**Install VS Code:** Download and install it from the [official website](https://code.visualstudio.com/).

**Getting Started with C# in VS Code:** Open VS Code, click on the Extensions icon (square icon on the sidebar), search for "C#", and install the extension provided by Microsoft.[C# Dev Kit Docs](https://code.visualstudio.com/docs/csharp/get-started).

**Open Your Console App:** Since Im still inside my terminal , I have closed the notepad and typed in `code .` which will open **VS Code**

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-eight.png) | ![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-seven.png)

#### **Benefits of Using VS Code:**

- **IntelliSense:** This feature provides smart code suggestions as you type, helping you write code more efficiently and with fewer errors.

- **Lightweight and Fast:** It's quick to open and doesn't consume much system resources, making it ideal for smaller projects or quick edits.

- **Customizable:** With a wide range of extensions, you can add features that suit your development needs.

- **Cross-Platform:** VS Code works on Windows, macOS, and Linux, so you can use it on different operating systems.

### **Visual Studio**

Visual Studio is a comprehensive IDE from Microsoft, specifically designed for .NET and C# development. It comes with built-in support for these technologies, offering a seamless experience.

#### **Key Features of Visual Studio:**

- **IntelliSense:** This feature provides smart code suggestions as you type, helping you write code more efficiently and with fewer errors.

- **Integrated Debugging:** Visual Studio allows you to run your code step-by-step to identify and fix issues easily.

- **User Interface Designers:** For developing user interfaces, Visual Studio offers designers for Windows Forms and other frameworks, enabling you to design visually without writing code manually.

- **Project Templates:** It includes a variety of templates to help you start new projects quickly with the right setup.

#### **Getting Started with Visual Studio:**

**Install Visual Studio:** Download the installer from the [official website](https://visualstudio.microsoft.com/) and choose the **".NET desktop development"** workload during installation to get all the necessary tools for C# development.

**Open Your Console App:** There's not really a command that im aware of that we can open up Visual Studio, but its okay lets go the file explorer route. Assuming you have installed **Visual Studio**. Open the solution file which by default will open up **Visual Studio**.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-nine.png) | ![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-ten.png)


**Explore the Features:** Using IntelliSense, the integrated debugger, and other tools to enhance your development experience.

**Benefits of Using Visual Studio:**

- **All-in-One Solution:** It provides everything you need for C# development out of the box.

- **Advanced Debugging:** The IDE offers powerful debugging tools to help you find and fix issues quickly.

- **Suitable for Large Projects:** Visual Studio is well-suited for large-scale applications with features like code analysis and testing tools.

Both Visual Studio Code and Visual Studio are amazing tools for C# development. VS Code offers flexibility and speed, especially when enhanced with extensions. On the other hand, Visual Studio provides a comprehensive, integrated environment specfically made for .NET development, with awesome features like IntelliSense and advanced debugging. Your choice between the two depends on your project requirements and personal preferences. 

## **Writing Your First Line of C# Code in the Browser**
For those who may not have the space or permissions to install .NET or other development tools on their computers, online C# compilers provide a awesome substitute.

### **Using Online C# Compilers**
Several platforms allow you to write, compile, and run C# code directly from your browser. For now I'll provide two that would be useful to beginners but there are many.

#### **Try .NET**
[Try .NET](https://dotnet.microsoft.com/en-us/platform/try-dotnet) is an interactive platform that lets you run C# code directly in your browser without any installations. It's particularly useful for learning and experimenting with C# code snippets.

#### **Getting Started with Try .NET:**

Open your browser and navigate to [Try .NET](https://dotnet.microsoft.com/en-us/platform/try-dotnet).

**Create Your Own Code Snippets:**
You can write your own C# code snippets and execute them in the browser. This feature is a great way to test small code sections or learn new concepts without setting up a development environment.

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-eleven.png)

#### **.NET In-Browser Tutorial:**
The .NET in-browser tutorial is an interactive way to get hands-on experience with C# directly in your browser, no setup needed. It takes you step-by-step through key concepts like strings, variables, methods, and collections. 

By following the tutorial, you'll create small code snippets and see the results immediately. This is a great way to practice C# basics while familiarizing yourself with how the language works.

You can start the tutorial [here](https://dotnet.microsoft.com/en-us/learn/dotnet/in-browser-tutorial/1).

![Terminal](/assets/img/posts/2025-03/c-sharp-images/csharp-twelve.png)

## **Youtube Video**
Here's an amazing video by **Scott Hanselman** &  **David Fowler** from their **C# for Beginners Series**, which is where I learnt the small terminal tips and tricks.

{% include embed/youtube.html id="HFLALzkcjLM" %}


## **Conclusion**

And there you have it, from the CLI to the IDE and a random sprinkle of Browser in terms of getting started with C#. So there's quite a few ways you can get started with this. Pretty much it's all there for you to take advantage of since its free.
This journey we've begun is just the tip of the iceberg. With persistence, passion and curiosity, you’ll soon be writing complex programs, contributing to open-source projects or even building your own tech solutions.

So, take what you've learned, experiment and build something amazing!