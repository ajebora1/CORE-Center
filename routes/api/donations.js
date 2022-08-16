const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');

// router.post('/recipient/:id/donation', donationsCtrl.create);
router.post('/', donationsCtrl.create);
router.get('/user/:userId', donationsCtrl.show);
// router.get('/:donationID', donationsCtrl.detail);
router.get('/donor/:donorId', donationsCtrl.detail);

module.exports = router;