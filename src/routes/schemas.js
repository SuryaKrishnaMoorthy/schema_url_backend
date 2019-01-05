const express = require('express');
const router = express.Router({ mergeParams: true });
const ctrl = require('../controllers/schemas');
console.log('HIIIIIII routes');

router.get('/', ctrl.getAllSchemas);
router.get('/:id', ctrl.getOneSchema)

module.exports = router;