const Comment = require('../../models/comment');

module.exports = {
    create,
    show,
    delete: deleteComment,
    update,

};

async function create(req, res) {
  req.body.user = req.user._id;
  const newComment = await Comment.create(req.body);
  res.json(newComment);
};

async function show(req, res) {
  const comments = await Comment.find({user: req.params.userId})
  res.json(comments);
}

async function deleteComment(req, res, next) {
  console.log("SHOW")
    Comment.findOneAndDelete(req.params.commentId)
   .then(res.status(200).json({ message: "Successful" }))
   .catch(err => next(err));
   console.log(req.params.commentId)
   }

async function update(req, res) {
 console.log(req.params.commentId, req.body.title) 
 Comment.findByIdAndUpdate(req.params.commentId, req.body)
 .then(commentedPost => {   
 res.json(commentedPost);
 })}