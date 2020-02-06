## Plexxis Interview Excercise - Solution

### Server Side

Let's start by the structure of the server. So navigate under `./server` folder

**Structure**

```
server
      | config
            - default.json
      | data
            - employees.json
      | database
            - connection.js
            - employeesHelpers.js
      | middleware
            - validate.js
      | routes
            - employees.js
      | scripts
            - script.sql
      | validation
            | joi
                  - employees.js
      - index.js

```

To start with, I have tried to structure my modules properly. The names of the folder will convey the use of modules under it.

#### Database

I have used PostgresDB in order to store employee information.

Under the `./database` folder, I have two files i.e. connection.js and employeesHelpers.js.

connection.js: -

- This file has a function called `connectToDB()`, it is used on order to connect to the instance of PostgresDB.
- There is a constant called `pool` which is used as in order to query the database.

employeesHelpers.js: -

- This file consist of a class called `EmployeesHelpers`.
- It consists of methods that are used in order to perform CRUD operations on the database.

#### Middleware

Whenever a post request is made to the database in oredr to update or create an employee, it is important to check of the data sent by the user is valid or not.

So I have used a library called `@hapi/joi`, it provides easy validation of objects against custom user created schemas.

So everytime user posts data on the server, this middleware function check for its validity and returns appropriate response.

#### Routes

This folder consists of all the routes accessible by the client (i.e. just employees.js for now). Instead of declaring routes in `index.js`, I choose to put them in a seperate module, so that I don't pollute the `index.js` file.

#### Validation

This folder consists of all the validation schemas. I have made a seperate folder for `Joi` schemas.

#### index.js

It's the starting or entering point of the server.

### Client side
