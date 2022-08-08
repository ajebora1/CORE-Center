const express = require('express');
const router = express.Router();
const donorsCtrl = require('../../controllers/api/donors');

// GET /api/donors
router.get('/', donorsCtrl.index);
// GET /api/donors/:id
router.get('/:id', donorsCtrl.show);

module.exports = router;