const express = require("express");
const cors = require("cors");

const app = express();

//Links to local module
const { connectToDB } = require("./database/connection");

//Routes
const employeesRouter = require("./routes/employees");

//Only server client from the given origin address
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//To parse json in the body of the request
app.use(express.json());

//Make connection to the database
connectToDB();

//Pass the call to routes
app.use("/employees", employeesRouter);

app.listen(8080, error => {
  if (error) console.log(error);
  console.log("Listening on port 8080");
});
