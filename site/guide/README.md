# Introduction

The **Autonomous Data Protocol** is an [open standard](https://opensource.org/osr) to build applications that respect data ownership. This means enabling data owners to modify, move or delete data at any moment without the involvement of a service provider.

## A new architecture

The concept proposed by this standard is that service providers should not be managing user data. Instead, data management should be in the hands of users, and service providers should be limited to providing a good user experience.

The traditional architecture enforced by service providers (SP) is the following:

![Traditional Architecture](/autonomous-data/guide/traditional-architecture.png)

Because service providers store user data on their servers, any hope of users to work with their own data is limited to whatever providers expose through their products and APIs. This makes operations such as deleting data or moving to a different provider difficult and often impossible.

Now let's take a look at how we propose to build applications:

![Autonomous Data Architecture](/autonomous-data/guide/autonomous-data-architecture.png)

In this scenario, the only data found in service providers' servers is metadata and user sessions. Metadata refers to information necessary to work with user data, such as data formats and urls. This allows users to have total control over their data, and changing or abandoning service providers becomes as easy as revoking permissions, without losing any data.

In order for this to be feasible, there needs to be a standard way to communicate with user servers. And that is exactly what this protocol provides.

This may seem unusual and counterintuitive, but [OAuth](https://oauth.net/) is already set up to work like this. After obtaining authorization, service providers interact with user data residing in a "resource server". The problem is that resource servers are usually 3rd party service providers such as Facebook, Twitter or Google. The solution is to give users the possibility to control their own resource servers.

## Practical implications

Embracing this architecture has some practical implications to keep in mind:

- The most evident advantage for end users would be the freedom to change providers. Imagine using a media management service like Google Photos and wanting to migrate to a different service. In this case, it would be a trivial operation of changing permissions to a new provider. Having a standarized methodology to interact with users' data also opens multiple possibilities to enhance existing services.

- The role of service providers is considerably reduced, and one consequence of this is to see more software as a product (instead of software as a service). This also means a new kind of service providers will be necessary, the ones dedicated to managing user's data (when users are not maintaining their own servers). We call this new role "Data Keepers".

- With this scenario where each user hosts their own data, the distributed landscape of the web will be increased further. This is a tendency we are already seeing with blockchain technology. But since blockchains need multiple participants to remain secure, we don't think they are a good solution to handle private data.

You can find further insight and implications in the [FAQ](/guide/faq.html).
