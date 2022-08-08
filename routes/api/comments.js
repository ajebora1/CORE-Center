const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

// router.post('/recipient/:id/comment', commentsCtrl.create);
router.post('/', commentsCtrl.create);

module.exports = router;

