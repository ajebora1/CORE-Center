const express = require('express');
const router = express.Router();
const payforwardsCtrl = require('../../controllers/api/payforwards');

// router.post('/recipient/:id/payforward', payforwardsCtrl.create);
router.post('/', payforwardsCtrl.create);
router.get('/user/:userId', payforwardsCtrl.show);
router.get('/', payforwardsCtrl.index);

module.exports = router;