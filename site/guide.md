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

This may seem unusual and counterintuitive at first, but [OAuth](https://oauth.net/) is already set up to work like this. After obtaining authorization, service providers interact with user data residing in a "resource server". The problem is that resource servers are usually 3rd party service providers such as Facebook, Twitter or Google. The solution is to give users the possibility to control their own resource servers.
