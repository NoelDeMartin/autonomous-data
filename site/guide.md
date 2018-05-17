---
sidebar: auto
pageClass: docs
---

# Guide

The **Autonomous Data Protocol** is an [open standard](https://opensource.org/osr) to build applications that respect data ownership. This means enabling data owners to modify, move or delete data at any moment without the involvement of a service provider.

## Introduction

The concept enforced by this protocol is that service providers should not be managing user data. Instead, data management should be in the hands of users, and service providers should be limited to providing a good user experience.

The traditional architecture enforced by service providers (SP) is the following:

![Traditional Architecture](/autonomous-data/traditional-architecture.png)

Because service providers store user data on their servers, any hope of users to work with their own data is limited to whatever service providers expose through their products and APIs. This makes operations such as deleting data or moving to a different provider difficult and often impossible.

Now let's take a look at how we propose to build applications:

![DataHouse Architecture](/autonomous-data/datahouse-architecture.png)

In this scenario, the only data found in service providers' servers is metadata and user sessions. Metadata refers to information necessary to work with user data, such as data formats and urls. This allows users to have total control over their data, and changing or abandoning service providers becomes as easy as revoking permissions, without losing any data.

In order for this to be feasible, there needs to be a standard way to communicate with user servers. And that is exactly what this protocol provides.

This may seem unusual and counterintuitive, but [OAuth](https://oauth.net/) is already set up to work like this. After obtaining authorization, service providers interact with user data residing in a "resource server". The problem is that resource servers are usually 3rd party service providers such as Facebook, Twitter or Google. The solution is to give users the possibility to control their own resource servers.

## A simple example

TODO

## FAQ

### What happens with users who can't host their own servers?

Most users are not able to host and maintain their own servers. That's why we believe a new role needs to appear: Data Keepers. Imagine a company who's business is to guard the user's data, instead of selling it. We can see the birth of a new kind of service: renting storage space for private data. If that sounds familiar that's because there is already services doing something similar, but they are on two opposite sides of the spectrum:

- In one side we have services like Dropbox or Google Drive, where users can store and manage files. But the interaction is limited and integrating other software is often difficult.

- On the other side, we have cloud servers such as AWS or Digital Ocean, where users can rent virtual computers. But those require too much manual configuration and knowledge.

We see the standard as a layer to place on top of cloud computing giving users better control. Like this, it would also be possible for anyone to manage their own servers.

### This architecture is incompatible with many business models, since most services are protected against piracy controlling data access.

At this stage it is uncertain to which domains this paradigm can be applied. At the very least, there are simple use cases such as managing contacts information or media that can be solved with open source software. If at worst this is only viable for open source, we're ok with that.

Interestingly enough, this architecture is posed to bring back software as a product instead of as a service.

### What about crossing information between users? I can't see something like a social network built like this.

We are aware of such limitations and challenges using this approach. After having studied the protocol in production, we'll be able to reduce the scope to situations where it makes sense. In any case, nothing prevents the traditional architecture to be implemented using this protocol to give users full control of their data, even if they are not storing it themselves for limitations specific to particular use cases.

Also, there are already distributed social networks like [Mastodon](https://joinmastodon.org/).

### What prevents service providers from storing a copy of users' data anyways?

Simply put: nothing. We hope that in the future laws appear to protect against it, but at the moment the only thing that would keep organizations from doing this is trust. However, that's the same situation we have today. How do you know your data is not being sold? When did you read some terms & conditions for the last time? Also keep in mind that the organizations more likely to adapt this standard are open source organizations, whose code is open for anyone to see what's going on under the hood.
