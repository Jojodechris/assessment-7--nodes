### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
 A JSON Web Token (JWT) is like a digital ID card for users in web applications. It's a way to securely transmit information between parties. This information often includes details about the user, like their ID or role. The JWT is made up of three parts: a header describing how it's encoded, a payload with the actual data, and a signature to verify that the information hasn't been tampered with. It's commonly used for tasks like user authentication, where a user logs in and receives a JWT, which they then use to access certain parts of a website or app.

- What is the signature portion of the JWT?  What does it do? 
The signature is created by taking the encoded header, the encoded payload, the secret key, and the specified algorithm. The process involves hashing and/or encrypting this information. The resulting signature is appended to the JWT.

The signature serves two primary purposes:

Verification of Integrity: The signature allows the recipient of the JWT to verify that the sender is legitimate and that the content of the JWT (header and payload) has not been tampered with during transit.

Authentication: The possession of the secret key used to create the signature is a form of authentication. If someone presents a JWT with a valid signature, it suggests that they know the secret key and are likely authorized.


- If a JWT is intercepted, can the attacker see what's inside the payload?
yes 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
i can implement authentification with a JWT through a function that creates a token through the data provided by the user  with jwt.sign and a function that verifies that token with jwt.verify.if the token is valid, the server processes the request and responds with the requested resource or performs the requested action.

- Compare and contrast unit, integration and end-to-end tests.
Unit Tests:

Scope: Focuses on testing the smallest units of code, such as individual functions or methods.
Isolation: Tests are typically isolated, meaning they focus on a single unit of code without involving external dependencies.
Purpose: Ensures that each part of the codebase functions as intended in isolation. It helps catch bugs early in the development process and facilitates easier debugging.
Speed: Generally fast to execute since they are isolated and don't involve external systems or databases.
Mocking: Often involves using mocks or stubs to isolate the unit being tested from the rest of the system.
Integration Tests:

Scope: Focuses on the interactions between different units or components of a system.
Isolation: Involves testing how different units work together. It may include interactions with databases, external services, or other components.
Purpose: Verifies that the integrated components interact correctly and produce the expected result. Helps identify issues that arise when combining different parts of the system.
Speed: Slower than unit tests because they may involve multiple components and possibly external dependencies.
Setup: May require more complex setup and teardown processes to simulate a realistic environment.
End-to-End Tests:

Scope: Focuses on testing the entire application or system from the user's perspective.
Isolation: Involves testing the entire system, including its interactions with databases, external services, and any other components.
Purpose: Ensures that the entire application functions correctly and meets user requirements. Helps identify issues related to user interactions, data flow, and system behavior as a whole.
Speed: Generally slower than both unit and integration tests because they involve the entire system.
Realism: Provides a more realistic simulation of how the application behaves in a production-like environment.
Key Differences:

Scope: Unit tests focus on small, isolated units of code, integration tests focus on the interactions between components, and end-to-end tests cover the entire application.
Isolation: Unit tests are highly isolated, integration tests involve multiple components, and end-to-end tests encompass the entire system.
Purpose: Unit tests catch bugs in isolated units, integration tests identify issues in the interaction between components, and end-to-end tests ensure the entire system works as expected from the user's perspective.
Speed: Unit tests are generally faster, integration tests are slower, and end-to-end tests are the slowest.


- What is a mock? What are some things you would mock?
a mock is a simulated object or component that mimics the behavior of a real object or component. Mocks are used to isolate and test individual units of code, especially during unit testing.

- What is continuous integration?
Continuous Integration (CI) is a software development practice that involves regularly integrating code changes from multiple contributors into a shared repository. The primary goal of CI is to detect and address integration issues early in the development process, promoting collaboration and ensuring that the software is always in a working and deployable state.


- What is an environment variable and what are they used for?

An environment variable is a variable external to the software application or process that stores configuration settings, system paths, or other information needed by the operating system or applications during runtime

- What is TDD? What are some benefits and drawbacks?
TDD stands for test driven development which is the process of writting test before code. 
--->pros:
it helps the developer thinks about their code so that it can be testable.
It helps for the archictecture.
Things are easier to refactor or maintain.
it helps find issues quickly.

--->cons:
it takes a long time to build the app

- What is the value of using JSONSchema for validation?

JSONSchema is valuable for validation as it ensures the consistency and integrity of JSON data by providing a standardized way to describe its structure. Serving as both documentation and a contract, JSONSchema enhances interoperability between systems, catches errors early in development, and supports automatic code generation. Its use in API design helps define clear data contracts, and its integration with tools and IDEs facilitates input validation and error prevention, making it an essential tool for maintaining robust, well-structured, and secure JSON-based data systems.


- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
'Returning' provide the data that we want from the database. We use it to return some data that comes from a sql command(update,delete,insert)

- What are some differences between Web Sockets and HTTP?
HTTP and Web Sockets are distinct communication protocols in web development. HTTP follows a request-response model and is stateless, making it suitable for traditional web applications. It involves connection overhead with repeated handshakes for each request. Web Sockets, on the other hand, use a full-duplex model, enabling bidirectional communication with lower overhead. They maintain a persistent connection, ideal for real-time applications requiring low-latency interactions, such as chat or gaming. While HTTP is firewall-friendly and works well with proxies, Web Sockets may face challenges with certain intermediaries. The choice depends on the application's needs, with HTTP being standard for static requests and Web Sockets providing efficiency for dynamic, real-time scenarios.

- Did you prefer using Flask over Express? Why or why not (there is no 
i prefer flask over Express.
Reasons:
-using python is more simple
-Importing a class or file is more simple
-error handling with flask is more simple

  answer here --- we want to see how you think about technology)?
 