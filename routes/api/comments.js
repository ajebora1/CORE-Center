const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

// router.post('/recipient/:id/comment', commentsCtrl.create);
router.post('/', commentsCtrl.create);
router.get('/user/:userId', commentsCtrl.show);

module.exports = router;

