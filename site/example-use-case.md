# Example use case

Describing the architecture can be too abstract to grasp what is actually going on. So let's go through a concrete example of how this would apply to a Task Manager.

We'll get into three operations: logging in, creating a new task and obtaining pending tasks.

We'll refer to the actors as "John" for the user and "Acme" for the company providing the service.

## Logging in

We can assume that John has previously created an account. His account's information is currently stored in a server.

- **Traditional architecture**: The server is owned by Acme.

- **Autonomous Data**: The server is chosen by John upon registration. This could be his own personal server, a server managed by a different company or a server provided by Acme.

In both scenarios the client application (let's assume a web app) is provided by Acme.

In this situation, in order to login John needs to prove his identity.

- **Traditional architecture**: The web app displays a login form. This form asks for credentials, for example email and password.

  Upon completing the form, the data is sent to the server where the credentials are validated against the database. If successful, John will be authenticated. This authentication can be in the form of information attached to a cookie, data being stored on the session or generating a token that will be attached to subsequent requests.

- **Autonomous Data**: The web app displays a login form. This form asks John where he would like to store his data, providing a URL. The only requirement is that the endpoint indicated by John supports a protocol compatible with the application. You can read about Autonomous Data protocols [here](/protocols-and-implementations.html).

  Upon submitting the form, the application will communicate with the server that John provided and direct him to additional steps that may be required for him to prove his identity. For example he could be redirected to another domain to authenticate. Once the authentication has been completed, a token is returned that can be used in behalf of John to interact with the server. Notice how this can happen entirely on the client, without the need for Acme to have a server on their own. One good example on how this authentication can be implemented is using [OAuth](https://oauth.net).

## Creating a new task

John has successfully logged into the application for the first time, and he's presented with an empty list of tasks. The logical next step is to create a new task!

So he goes ahead, fills the input field with the task name and hits enter. His first task is added to the list.

On the surface, John's experience is the same for both architectures. The only thing that needs to be different is the logging mechanism we saw previously.

But let's see what happened under the hood.

- **Traditional architecture**: When John submits the form to create his new task, this data is sent to Acme's server. After validating his identity with the mechanism provided before (cookies, session, token, etc.), the data is inserted into the database and a response OK is returned. The new task will be displayed on the app.

- **Autonomous Data**: When John submits the form to create his task, the data is sent to the server he authenticated with. Again, using a data format compatible with the [Autonomous Data protocol](/protocols-and-implementations.html) supported by the server. Together with this request, the token that was obtained before is attached. The server will respond OK and the new task will be displayed on the app.

Even if both scenarios seem very similar, there is a key distinction between both architectures. And that is that John will be able to manage his information outside of Acme's application using Autonomous Data.

Imagine that he chose to authenticate with his own server. He will be capable of accessing the database and change the name of the task, even if renaming tasks is not a feature supported by Acme's application.

## Obtaining pending tasks

One week later, John comes back to the application. The home page is loaded, and he can see a list of the tasks that are not completed yet.

Again, same user experience, but let's look under the hood:

- **Traditional architecture**: When the home page is loaded, a request is sent to Acme's servers to obtain the list of pending tasks. Depending how the application is implemented, this could all be included in the same initial request.

- **Autonomous Data**: When the home page is loaded, a request is sent to the server that John authenticated with to obtain pending tasks.

  But something interesting happens. He hasn't visited the web application since he created the first task a week ago, but the application is displaying 3 tasks now.

  What happened is that he's been using another application, provided by IndieCorp (Acme's competitors). Because he authenticated using the same server for both applications, the data has been persisted on the same database. Both of them used the same standard format to persist data. And both applications are automatically synchronized without them even knowing it.

-----

With this simple use case you can imagine how more complex operations would work.

As you can see, using the Autonomous Data architecture it'd be trivial for users to migrate to other applications and not be tied to any service provider. Even if the application is discontinued, the open source community could implement tools for users to interact with their data.
