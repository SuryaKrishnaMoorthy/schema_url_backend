const express = require('express');
const router = express.Router({ mergeParams: true });
const ctrl = require('../controllers/schemas');

router.get('/', ctrl.getAllSchemas);
router.get('/:id', ctrl.getOneSchema)

module.exports = router;