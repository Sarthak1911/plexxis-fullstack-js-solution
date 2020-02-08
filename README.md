## Plexxis Interview Excercise - Solution

### Server Side

Let's start by the structure of the server. So navigate under `./server` folder

**Structure**

```
server
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

- This file has a function called `connectToDB()`, it is used in order to connect to the instance of PostgresDB.
- There is a constant called `pool` which is used in order to query the database.

employeesHelpers.js: -

- This file consist of a class called `EmployeesHelpers`.
- It consists of methods that are used in order to perform CRUD operations on the database.

#### Middleware

Whenever a post request is made to the database in oredr to update or create an employee, it is important to check the data sent by the user is valid or not.

So I have used a library called `@hapi/joi`, it provides easy validation of objects against custom user created schemas.

So everytime user posts data on the server, this middleware function check for its validity and returns appropriate response.

#### Routes

This folder consists of all the routes accessible by the client (i.e. just employees.js for now). Instead of declaring routes in `index.js`, I choose to put them in a seperate module, so that I don't pollute the `index.js` file.

#### Validation

This folder consists of all the validation schemas. I have made a seperate folder for `Joi` schemas.

#### Important Third Party Libraries

- Express: Used to create rest API.
- @hapi/joi: Used for data validation.
- node-postgres: Client to connect and query PostgresDB.

### Client side

I have used React in the front-end, also I have used a bunch of third party libraries to make life a bit easy.

**Component Tree**

![React-Tree](https://i.imgur.com/zcmCD7p.jpg)

#### Routing

I have used a package called `react-router-dom` for routing in the application. All the necessary routes are present in the `App.jsx` file. All the routes are placed from the most specific to the most generic. If no route is found, the router redirects the user to `not-found` page.

#### Container

This is the component that is responsible to hold the list of employees in the state, also all methods updating the employees list are present here in this component i.e. update, delete and get.

#### Card

Instead of going for a table, I went with something much more aesthetic i.e. bootstrap's `.card` class.

One special thing about `Card` component is that it holds its own state called `showDetails`. And as the name suggests, I use it to toggle the employee details.

This component also holds the delete button, which further raises an event to delete an employee from the list present with `Container` component.

#### Form class

This is an interesting class, I wrote it myself. It constists of validation methods for all your input fields (FYI it uses joi-browser for validation).

It really has a simple interface. It expects `data` and `errors` in the state. So basically, based on the form fields I can populate `data`. All the validation errors are stored in `errors`. And whenever an input field has invalid data, the erros will start showing under it.

#### Important Third Party Libraries

- react-router-dom: Used for routing.
- axios: Used for making http request.
- joi-browser: Same as the one used on the server. Provides me with easy way to validate input fields.

### Direction of my efforts

I tried my level best to keep things short and sweet, I have used comments in appropriate places. I believe my code is modularized appropriately.

### Screenshots from the application

#### Employees Page

Users can click the `Show more` link to get employee details. To hide the details the user must click `Show less` link.

![Employees Page](https://i.imgur.com/yrBtmsP.png)
![Employees Page](https://i.imgur.com/mWHAA1l.png)

#### Creating an Employee

**Before Creating**
![Employee Creation](https://i.imgur.com/G91Nx8J.png)
**After Creating**
![Employee Creation](https://i.imgur.com/cxcCWiG.png)
**Employee Form**
![Employee Creation](https://i.imgur.com/Fv1GRga.png)

#### Updating an employee

**Before Update**
![Employee Update](https://i.imgur.com/mWHAA1l.png)

**After Update**
![Employee Update](https://i.imgur.com/kNb06P0.png)

**Employee Form**
![Employee Update](https://i.imgur.com/xdYyf4L.png)

**Empty List**
![Empty List](https://i.imgur.com/NQbmyvA.png)
