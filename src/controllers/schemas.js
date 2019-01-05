const model = require('../models/schemas');
const resourceName = 'schema';

async function getAllSchemas (req, res, next) {
  const response = await model.getAllSchemas();
  res.json({"snacks": response });
};

async function getOneSchema (req, res, next) {
  const response = await model.getOneSchema(req.params.id);
  res.json({ resourceName: response });
};

module.exports = { getAllSchemas, getOneSchema };
