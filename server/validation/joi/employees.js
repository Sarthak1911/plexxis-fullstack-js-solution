const Joi = require("@hapi/joi");

const employeeSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
  profession: Joi.string().required(),
  color: Joi.string().required(),
  city: Joi.string().required(),
  branch: Joi.string().required(),
  assigned: Joi.boolean().required()
});

module.exports = employeeSchema;
