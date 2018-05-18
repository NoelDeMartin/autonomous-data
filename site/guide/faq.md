# FAQ

## What happens with users who can't host their own servers?

Most users are not able to host and maintain their own servers. That's why we believe a new role needs to appear: Data Keepers. Imagine a company who's business is to guard the user's data, instead of selling it. We can see the birth of a new kind of service: renting storage space for private data. If that sounds familiar that's because there is already services doing something similar, but they are on two opposite sides of the spectrum:

- In one side we have services like Dropbox or Google Drive, where users can store and manage files. But the interaction is limited and integrating other software is often difficult.

- On the other side, we have cloud servers such as AWS or Digital Ocean, where users can rent virtual computers. But those require too much manual configuration and knowledge.

We see the standard as a layer to place on top of cloud computing giving users better control. Like this, it would also be possible for anyone to manage their own servers.

## This architecture is incompatible with many business models, since most services protect against piracy by controlling data access.

At this stage it is uncertain to which domains this paradigm can be applied. At the very least, there are simple use cases such as managing contacts information or media that can be solved with open source software. If at worst this is only viable for open source, we're ok with that.

Interestingly enough, this architecture is posed to bring back software as a product instead of as a service.

## What about crossing information between users? I can't see something like a social network built like this.

We are aware of such limitations and challenges using this approach. After having studied the protocol in production, we'll be able to reduce the scope to situations where it makes sense. In any case, nothing prevents the traditional architecture to be implemented using this protocol to give users full control of their data, even if they are not storing it themselves for limitations specific to particular use cases.

Also, there are already distributed social networks like [Mastodon](https://joinmastodon.org/).

## What prevents service providers from storing a copy of users' data anyways?

Simply put: nothing. We hope that in the future laws appear to protect against it, but at the moment the only thing that would keep organizations from doing this is trust. However, that's the same situation we have today. How do you know your data is not being sold? When did you read some terms & conditions for the last time? Also keep in mind that the organizations more likely to adapt this standard are open source organizations, whose code is open for anyone to see what's going on under the hood.

## Users may have all their data in the same physical location, aggregated from all the services they use. Isn't this a security risk?

Yes it is, and that's why we mentioned the necessity of a new kind of service providers, Data Keepers, who make sure that servers are secure and in case of a breach data is properly encrypted. Other than that it should also be noted that nothing prevents users from having multiple servers and use dedicated services for sensitive information. Potentially, they could go as far as using only one server for each service and keep the same level of fragmentation as now.
