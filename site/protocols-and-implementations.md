# Protocols and Implementations

Autonomous Data is only an architecture. In order to develop Autonomous Data applications, a protocol that supports this architecture must be used. There are basically two things that these protocols need to support: authentication/authorization and data formats.

These are the protocols that are suitable to develop Autonomous Data applications:

- [Solid](https://solidproject.org) is a protocol based on Semantic Web technologies. It's being defined as a W3C standard and its philosophy and message is very aligned with Autonomous Data.

- [Kinko](https://github.com/noeldemartin/kinko) is the implementation that I started working on with the incubation of Autonomous Data. Its development is currently paused, but it can serve as a good example of how to embrace the architecture with different technologies.

---

These are some protocols suggested by the community. Not all of them completely adhere to the Autonomous Data principles (some don't mention authentication, or the data format is lacking semantics). But they are still worth looking into if you're interested in data ownership:

- [Kinto](https://www.kinto-storage.org/) is the per-user storage protocol that was used by [Firefox OS](https://en.wikipedia.org/wiki/Firefox_OS) and is still used [for several Mozilla prducts](https://github.com/mozilla-services/servicedenuages.fr/blob/master/content/2017.12.kinto-at-mozilla.rst).

- [remoteStorage](https://remotestorage.io/) is the per-user storage protocol that came out of the [Unhosted project](https://unhosted.org).

If there is anything else you think should be added to this list, [let me know](https://github.com/noeldemartin/autonomous-data/issues/new).
