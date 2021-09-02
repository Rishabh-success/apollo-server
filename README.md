#### Apollo GraphQL
### What is GraphQL?
- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- GraphQL provides a complete and understandable description of the data in your API.
- GraphQL gives clients the power to ask for exactly what they need and nothing more.
- GraphQL makes it easier to evolve APIs over time, and enables powerful developer tools.
### Describe your data
type Project {
name: String tagline: String contributors: [User] }

### Ask for what you want
{ project(name: "GraphQL") { tagline } }

### Get predictable results
{ "project": { "tagline": "A query language for APIs" } }

### Difference between GraphQL and Rest?
REST APIs

- A REST API is an architectural concept for network-based software.
- REST has been used to make new APIs.
- Synchronous communications through HTTP only.
- REST follows server-driven architechture.
- Over Fetching or under fetching data resources.


### GraphQL

- GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP.
- GraphQL has been to optimize for performance and flexibility.
- Synchronous/Asynchronous communication in multiple protocols such as HTTP,AMQP,MQTT.
- GraphQL follows server-driven architechture.
- We only get what we ask for by querying to get data for our exact needs.

### Write down about Schema and Resolvers?

## Resolvers

When using graphql-tools, you define your field resolvers separately from the schema. Since the schema already describes all of the fields, arguments, and result types, the only thing left is a collection of functions that are called to actually execute these fields. Keep in mind that GraphQL resolvers can return promises. In fact, most resolvers that do real work - for example fetching data from a database or a REST API - will return a promise.

## Schema

A schema is only useful if our data graph conforms to the schema's structure. Enforcing a schema's structure is one of the core features of Apollo Server, a production-ready, open-source library that helps you implement your data graph's API.