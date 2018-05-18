# Example: Tasks Manager

Describing the architecture may be too abstract to grasp what is actually going on. So let's go through a concrete example of how this would be executed in a common application: a tasks manager. We will compare two basic operations: login a user and retrieving tasks.

## Login a user

### Traditional architecture

Login a user with the traditional architecture is straightforward. In the service provider's server we have user credentials obtained previously when the account was created. Once the user visits the application website, he's presented with a login form. After posting the form, credentials are validated in the server, and an authentication token is returned as a cookie. Consequent requests will be authenticated with this cookie.

Let's look at the exact sequence of the operations:

![Traditional Login](/autonomous-data/guide/traditional-login.png)

### Autonomous Data architecture

Logging with an Autonomous Data application is actually analogous to using the [OAuth](https://oauth.net/) protocol. In order to understand this example better, head to OAuth guides on [authorization](https://www.oauth.com/oauth2-servers/authorization/).

For this operation we are assuming a couple of things:

- Like in the previous example, the user has already created an account with the service provider. What's important to understand here is that instead of having login credentials (email, password), the service provider will have information about the user server (domain, client_id, etc.). This in particular is something the protocol defines that is not specified in OAuth, and what makes it possible for user servers to act as a resource server within the OAuth specification. You can learn more about the registration process on the [specification](/specification.html).

- The user is already logged in into his server.

This example reflects an implementation using OAuth's [Authorization Code Grant Type](https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type). When the user wants to login, he will be redirected to an authorization page on his server. Once the service provider has been authorized, a code will be returned and it can be exchanged for an access token. This access token can be used like we did on the traditional architecture, placing it inside of a session cookie.

![Autonomous Data Login](/autonomous-data/guide/autonomous-data-login.png)

## Retrieving tasks

### Traditional architecture

Retrieving data with the traditional architecture is straightforward, a request is send to the server and the server returns a page together with the appropiate data.

![Traditional Retrieval](/autonomous-data/guide/traditional-retrieval.png)

### Autonomous Data architecture

The same behavior can be achieved using the Autonomous Data architecture. The service provider server will handle communication with the user server and tasks can be included with the returned page.

![Autonomous Data Retrieval](/autonomous-data/guide/autonomous-data-retrieval.png)

However, that approach is not optimal, because requests will effectively be doubled (each request from before must be added the request to the user server). A better way of doing this would be to handle the requests in the browser and load content using ajax. This is a paradigm already being used regardless of the Autonomous Data protocol, when building SPAs.

![Autonomous Data Ajax Retrieval](/autonomous-data/guide/autonomous-data-ajax-retrieval.png)

## Other scenarios

In this example we have seen how we would addapt a web application to respect data ownership. The same concepts can be extrapolated for desktop and mobile applications. They can be even more appropiate because they are already implemented like SPAs and requests are mostly done to interact with the database.
