# Architecture

The core concept for Autonomous Data applications is that users decide where to store their data.

To understand what this means and how it affects the existing ecosystem, it is necessary to start by looking at what we call the "traditional architecture".

## Traditional architecture

This is how most applications work today. A user creates an account, and their data is stored in a server owned by service providers. Users can then manipulate their data using client applications. Those can be web apps, mobile apps or anything else.

Sometimes, users can also interact with their data using APIs, or use authorization mechanisms like OAuth to allow others to do it on their behalf.

In some rare occasions, users can also export and import their data. But even then, the data format will be obscure enough for non-technical users to make it unusuable. And for technical users, the data won't be compatible with other applications. So they'll have to migrate it by hand.

Rinse and repeat.

## Autonomous Data architecture

So then, what does Autonomous Data mean?

It means data that can live without depending on service providers.

The only possible way for this to happen is if users are given direct access to their data and this data has a standarized format.

That is why Autonomous Data applications ask the user where to store its data. This gives users complete control, and by necessity the data needs to have a standarized format because the application does not know where the data is being sent.

## The Autonomous Data manifesto

This simple requirement of letting users choose where to store data can be twisted. In order to adhere with the Autonomous Data ideology, the following points must be fulfilled:

- Users must be able to choose where data is sent.
- Service providers mustn't keep a copy of the user's data.
- The data format and structure must be documented and accessible for users.