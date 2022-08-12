const express = require('express');
const router = express.Router();
const donorsCtrl = require('../../controllers/api/donors');


// router.post('/recipient/:id/comment', commentsCtrl.create);
router.post('/', donorsCtrl.create);
router.get('/user/:userId', donorsCtrl.show);
router.get('/', donorsCtrl.index);

module.exports = router;