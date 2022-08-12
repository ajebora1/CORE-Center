const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

// router.post('/recipient/:id/comment', commentsCtrl.create);
router.post('/', commentsCtrl.create);
router.get('/user/:userId', commentsCtrl.show);
router.delete('/:commentId', commentsCtrl.delete);
router.put('/:commentId', commentsCtrl.update);
// router.delete('/:userId/:commentId', commentsCtrl.delete);
// router.put('/:userId/:commentId', commentsCtrl.update);


module.exports = router;

