---
title: "API Documentation in .NET 9 with Scalar: A Modern, Interactive Approach"
description: "Learn how to modernize your API docs in .NET 9 with Scalar, featuring clean code organization, interactive testing, and a comprehensive repo breakdown."
date: 2025-03-16 13:41:00 +0200
categories: [.NET, ASP.NET]
tags: [csharp, .net, scalar, api-documentation, asp.net, web-api]
image: /assets/img/posts/2025-03/scalar.png
---

## **What's This All About?**

If you've been building ASP.NET Core Web APIs, you probably remember the days when Swagger UI (via Swashbuckle) was the default for API documentation. But with .NET 9, Microsoft has shifted gears by removing Swagger UI from the project templates and introducing native OpenAPI document generation. In this post, we'll explore how Scalar steps in as a fresh, interactive alternative that not only documents your APIs but also lets you test them—all with a modern look and customizable options.


## **What Changed in .NET 9?**

In previous versions, Swashbuckle was the go-to tool for generating interactive API docs. However, as community support dropped and maintenance challenges grew, Microsoft decided to drop it from the default Web API templates in .NET 9. Now, thanks to the built-in support in the `Microsoft.AspNetCore.OpenApi` package, your API automatically generates an OpenAPI (formerly Swagger) JSON document at runtime, accessible via `/openapi/v1.json`. This native integration provides a leaner, more reliable approach to keeping your API documentation in sync with your code.

## **API Docs: The Basics**

Think of API documentation like instructions for using a new gadget:
- **What buttons can I press?** (these are your API endpoints)
- **What happens when I press them?** (the responses you get back)
- **What info do I need to provide?** (the data you send)
- **What might go wrong?** (error messages)

Good documentation helps other developers use your API without having to ask you questions all the time.

## **Setting Up Scalar:**

Let's hook up Scalar to our project :

### **Step 1: Install the Package**

```bash
dotnet add package Scalar.AspNetCore --version 2.0.36
```

Or just search for "Scalar" in the NuGet package manager in Visual Studio.

### **Step 2: Add These Few Lines of Code**

```csharp
// At the top of your Program.cs file
using Scalar.AspNetCore;

// Then inside your app setup
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}
```

That's it! Now when you run your app and go to `/scalar/v1` in your browser, you'll see your API docs.

![scalar-view](/assets/img/posts/2025-16/scalar-two.png) | ![scalar-view](/assets/img/posts/2025-16/scalar-three.png)

## **Making Your Docs Look Good**

Did you know docs in Scalar has a pretty feature? by pretty I mean so much cool things you can customize giving you that personal feel to it.

### **Change the Title**

```csharp
app.MapScalarApiReference(options => 
{
    options.Title = "Luke's Scalar API";
});
```

![scalar-view](/assets/img/posts/2025-16/scalar-four.png) | ![scalar-view](/assets/img/posts/2025-16/scalar-five.png)

### **Switch to Dark Mode**

```csharp
app.MapScalarApiReference(options => 
{
    options.Title = "My Cool API";
    options.Theme = ScalarTheme.DeepSpace; // This is the cool theme
});
```
![scalar-view](/assets/img/posts/2025-16/scalar-six.png) 

### **Change the Layout Style**

```csharp
app.MapScalarApiReference(options => 
{
    options.Title = "My Cool API";
    options.Theme = ScalarTheme.DeepSpace;
    options.Layout = ScalarLayout.Classic; // Try this or use "Modern" Which is default
});
```

![scalar-view](/assets/img/posts/2025-16/scalar-seven.png) 

## **Keeping Your Code Tidy**

As your API grows, your Program.cs file can get lil messy or overcrowded. 

Here's how to keep things organized:

1. Create a folder called "Extensions"
2. Add a file called "OpenApiConfig.cs" with this code:

```csharp
using Scalar.AspNetCore;

namespace YourApi.Extensions
{
    public static class OpenApiConfig
    {
        public static void UseOpenApi(this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
                app.MapScalarApiReference(options =>
                {
                    options.Title = "My Cool API";
                    options.Theme = ScalarTheme.DeepSpace;
                });
            }
        }
    }
}
```

3. Then in your Program.cs, just add:

```csharp
using YourApi.Extensions;

// ...other code...
app.UseOpenApi();
// ...other code...
```

Much cleaner!

## **Why Scalar is a good alternative**

- **Looks nice**: Modern design that's easier on the eyes
- **Faster**: Loads quicker and runs smoother
- **Customizable**: Change colors and layouts to match your style
- **Works offline**: Test your API even without internet
- **Up-to-date**: Actively maintained and improved

## **The Scalar Experience**

When you open Scalar at `/scalar/v1`, you'll see:
- A list of all your API endpoints grouped by type
- Forms where you can fill in data and test API calls right in your browser
- Nicely formatted results that are easy to read
- Clear information about what data to send and what you'll get back

## **Real-World Example: A Simple Music API**

Let's see Scalar in action with a real example. 

In my GitHub repo, I created a basic music API that lets you manage rap songs:

```csharp
public static class RapEndpoints
{
    // Just some example songs stored in memory
    private static List<RapSong> _songs = new List<RapSong>
    {
        new RapSong { Id = 1, Title = "Flowin' Shadows", Artist = "Night Rhyme", Year = 2023 },
        new RapSong { Id = 2, Title = "Mystic Beats", Artist = "Dream Cipher", Year = 2021 },
        new RapSong { Id = 3, Title = "Urban Legends", Artist = "Rhythm Rebel", Year = 2022 }
    };

    public static void AddRapEndpoints(this WebApplication app)
    {
        // Get all songs
        app.MapGet("/rap", () => Results.Ok(_songs))
            .WithName("GetRapSongs")
            .WithTags("Rap");

        // Get one song by ID
        app.MapGet("/rap/{id:int}", (int id) =>
        {
            var song = _songs.FirstOrDefault(s => s.Id == id);
            return song is not null ? Results.Ok(song) : Results.NotFound();
        })
        .WithName("GetRapSongById")
        .WithTags("Rap");
        
        // Other endpoints not shown to keep it simple
    }
}
```

When you open this in Scalar, it looks really nice and organized:

![Rap API Endpoint in Scalar](/assets/img/posts/2025-16/scalar-nine.png)

The cool part is using `.WithTags("Rap")` - this puts all your rap-related endpoints in one group in Scalar, making it easy to find them. As your API grows with more endpoints, using tags helps keep everything organized.

![Rap API Endpoint in Scalar](/assets/img/posts/2025-16/scalar-ten.png)

### **Models in Scalar**

#### **What is the Models Section?**

The Models section in Scalar shows you the structure of data used by your API. For our Rap API, it displays the `RapSong` model that forms the backbone of all our endpoints.

![Rap API Endpoint in Scalar](/assets/img/posts/2025-16/scalar-twelve.png)

#### **What You'll See**

In this section, you'll find:

- Each property name (id, title, artist, year)
- The data type for each property
- Simple descriptions of those types

#### **Why It's Useful**

The Models section helps you understand:

- What data your API expects when creating or updating songs
- What information you'll get back in responses
- The format of each piece of information


My full example in GitHub has more endpoints for adding, updating, deleting songs and Scalar automatically creates docs for all of them!



## **My Repository**
A guide for implementing Scalar API documentation in ASP.NET Core Web APIs, featuring practical examples, customization options and best practices as an alternative to Swagger UI in .NET 9

![scalar-view](/assets/img/posts/2025-16/scalar-eight.png) 

### **[API Documentation in .NET 9 with Scalar](https://github.com/lukepadiachy/scalar-with-dotnet)**


## **Helpful Resources**

- [Scalar's website](https://scalar.com) - The official site with more info


## **Youtube Video**
Here's an amazing video by the legend **Tim Correy** which inspired this blogpost and the repository I created documenting the process after watching his tutorial.

{% include embed/youtube.html id="5ZhlBJr95-4" %}

# **Conclusion**
With just a few lines of code, you can use Scalar's modern, easy-to-use interface. It not only looks good but also makes it easier for people to understand and test your API.

So if you're creating a new API or updating an old one, Scalar is a simple way to make your API documentation shine in .NET 9.
