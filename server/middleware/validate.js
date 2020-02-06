const empSchema = require("../validation/joi/employees");

function validate(req, res, next) {
  const { body: employee } = req;

  const { error } = empSchema.validate(employee, { abortEarly: false });

  error ? res.status(400).send(error.message) : next();
}

module.exports = validate;
