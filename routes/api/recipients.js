const express = require('express');
const router = express.Router();
const recipientsCtrl = require('../../controllers/api/recipients');

// router.post('/recipient/:id/recipient', recipientsCtrl.create);
router.post('/', recipientsCtrl.create);
router.get('/user/:userId', recipientsCtrl.show);
router.get('/', recipientsCtrl.index);
router.get('/:recipientId', recipientsCtrl.detail);

module.exports = router;