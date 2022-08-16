const express = require('express');
const router = express.Router();
const donorsCtrl = require('../../controllers/api/donors');


router.post('/', donorsCtrl.create);
router.get('/user/:userId', donorsCtrl.show);
router.get('/', donorsCtrl.index);
router.get('/:donorId', donorsCtrl.detail);

module.exports = router;