const db = require('../db');

function getAllSchemas () {
    return db('schemas');
  }

function getOneSchema (schema_id) {
  return db('schemas')
    .where({ id: schema_id });
}

module.exports = { getAllSchemas, getOneSchema };