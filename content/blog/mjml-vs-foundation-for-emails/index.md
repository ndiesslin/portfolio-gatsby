---
title: MJML vs Foundation for Emails(ink)
date: "2020-05-19"
description: An overview of MJML compared to Foundation for Emails and an example use of each.
---

## intro:

Two crucial aspects of marketing that we deal with on a daily basis here at Augeo Marketing are email creation and email campaigns. Email campaigns not only generate returns to your business, but give your company more visibility. 

### Problem:

The problem that everyone faces in email marketing is that each email client has varying support as well as quirks. The larger the client base, the more we have to factor in all the different types of email clients as well as making sure fixes are available for each. As a developer it can be very troublesome trying to deal with all of the issues that come with different email clients.

### Solution:

In this article we will discuss MJML and Foundation for Emails(formerly named ink) and what the benefits of each solution are. This article will touch on the syntax and variances to both MJML and Foundation for Emails. We will also conclude with our suggested solution. If you are interested in following along, we have created a repo [here](https://bitbucket.org/ndiesslin/mjml-vs-foundation-for-emails-2/overview) with an example email.

### Intro to MJML and Foundation for Emails:

[MJML](https://mjml.io/) is an email framework that was originally created by a team of developers at [mailjet](https://www.mailjet.com/). MJML features a templating language, that is geared to make email creation easier. MJML includes an IDE along with many different templates and code modules for different common email sections.

[Foundation for Emails](https://foundation.zurb.com/emails/docs/index.html) is an email framework created by the team at Foundation, a front-end framework very similar to Bootstrap. Foundation for Emails features a templating language called inky that has a simplified syntax. Foundation for Emails is used through a CLI (Command Line Interface), and also features different example templates and common email sections. 

## The Setup:

To install MJML there are a few different paths you can follow. MJML has a CLI , that can be installed and run from the command line. The other option is the [MJML app/IDE](https://mjmlio.github.io/mjml-app/). The CLI is great, but the app has some awesome features. The coolest part is that all the changes in the code are reflected visually, almost instantly. The final installation option is using the MJML api in your app. At the time of writing this article the api is still in a beta state. The api consumes the MJML markup and returns a JSON object with the rendered HTML.

To install Foundation for Emails, the only option currently is the CLI. Foundation for Emails can be installed with NPM or the Ruby gem. The Ruby gem can be bundled into a rails project and utilize the framework from there.

## The Syntax:

We have created a demo for showing off both MJML and Foundation for Emails, feel free to [checkout the repo here](https://bitbucket.org/ndiesslin/mjml-vs-foundation-for-emails-2/overview). In this example email we will compare the syntax needed from both MJML and Foundation for Emails. For the example email I want a simple hero image, a title, intro copy, a two column section, a CTA, and a footer. We typically get a variety of requests from clients, but this will give us a good base to test both with. This is the mockup of how we want our email to look, it’s pretty awesome:

![Placeholder Image](./salty_egg.jpg)

Below is a comparison of the syntax snippets from the two column image section in our email, in MJML and Foundation for Emails.

### MJML:
``` html
<mj-section background-color="#fff">
  <mj-column mj-class="image-block">
    <mj-image src="http://via.placeholder.com/240x100" align="center"></mj-image>
    <mj-text >
      <p color="#141414">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      </p>
    </mj-text>
  </mj-column>
  <mj-column mj-class="image-block">
    <mj-image src="http://via.placeholder.com/240x100" align="center"></mj-image>
    <mj-text>
      <p color="#141414">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      </p>
    </mj-text>
  </mj-column>
</mj-section>
```

### Foundation for Emails:
``` html
<row>
  <columns large="6">
    <center><img src="http://via.placeholder.com/240x100" align="center"></center><spacer size="20"></spacer>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
    </p>
  </columns>
  <columns large="6">
    <center><img src="http://via.placeholder.com/240x100" align="center"></center><spacer size="20"></spacer>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
    </p>
  </columns>
</row>
```

You will notice that both code blocks from our frameworks are relatively simple compared to a raw HTML email; that’s an immediate win! Our impression  with MJML is that the syntax is a little more complex, but this allows for more flexibility in your code. Foundation for Emails on the other hand has a more concise syntax, but it is not as flexible. You can see that there are different possible use cases for both - MJML being able to create a wider range of templates, Foundation for Emails being able to create more simple email templates (and it is possibly faster than MJML since the templating syntax is more concise). The nice thing about both email frameworks is that they both have example email templates that cover most general email use cases.

### Compiling Emails:
The steps for compiling your code with MJML and Foundation for Emails is fairly similar, depending on what type of method you use. The MJML app will be the most straightforward for building the MJML emails; we will examine this method, as well as CLI’s for both frameworks. 

The MJML app automatically compiles the email as you’re working on it in the app, there’s a button on the upper right to copy the compiled HTML email. This makes testing very easy, you can also connect the app to the Mailjet API for easy tests. The app for MJML also includes an option to export the html to a file or to take screenshots of the rendered code. MJML also has a CLI which can make the process of compiling an email slightly faster. To compile with MJML’s CLI you will simply need to run “mjml index.mjml” in your MJML directory.

``` bash
mjml index.mjml
```

Foundation For Emails can be compiled by running “npm start” in the initialized directory. This will compile and host your files in your browser. Browser sync will update your browser whenever you make changes to your email source files, which can be really handy.

``` bash
npm start
```

There is also an inlining option with Foundation for Emails which injects your CSS inline in your email to help rendering your emails more correctly, to run this you simply need to run “npm run build”.

``` bash
npm run build
```

## Conclusion
In conclusion, MJML and Foundation for Emails both provide an easier user experience for developers when creating HTML emails. MJML really proves to have the most flexibility and a larger feature set. MJML also has the IDE which is super beneficial to building emails fast. We would really recommend checking them both out to find which works best for you and your team. 

## Pro/Con List:

**MJML:**
- ***Pros***
  - Dedicated IDE, with visual feedback.
  - Multiple ways to use MJML, cli or app.
  - IDE works on Windows, Mac and Linux.
  - Great documentation.
  - Api for direct integration with MJML compiler.
  - More people actively developing the framework.
- ***Cons***
  - More complex syntax compared to Foundation for Emails.
  - Templates are flexible, but the code seems much less concise compared to Foundation for Emails.

**Foundation for Emails:**
- ***Pros***
  - Simple and compact syntax.
  - Option to use SASS.
  - Easy to install.
  - Api for litmus tests.
  - Compiled html passes litmus tests extremely well.
  - Instant browser preview changes with browsersync.
  - Automatic inlining.
- ***Cons***
  - Not nearly as customizable (This comes with the simplification on the syntax).
  - Doesn’t have an IDE specifically for Foundation for Emails