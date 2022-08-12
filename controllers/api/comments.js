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


async function update(req, res) {
  Comment.findOneAndUpdate(
  { _id: req.comment._id },
  { $push: { title: req.body.userId } },
  { new: true })
  .then(comment => res.json({ title: comment.title, comment: comment.comment }))
  .catch(err => res.status(400).json(err));
  console.log(req.body.userId)
  }

async function deleteComment(req, res, next) {
  console.log("SHOW")
    Comment.findOneAndDelete(req.params.commentId)
   .then(res.status(200).json({ message: "Successful" }))
   .catch(err => next(err));
   console.log(req.params.commentId)
   }
// async function deleteComment(req, res, next) {
//     console.log(req.body)
//   const deletecomment = Comment.findOneAndDelete(req.params.commentId)
//    console.log('deletecomment')
//       res.json(deletecomment)
// };

// async function deleteComment(req, res, next) {
//   req.param.id = Comment._id
//   req.user._id = Comment.user 
//   const deletecoment = await Comment.findByIdAndDelete()
//      res.json(deletecoment)
// }


// async function deleteComment(req, res, next) {
//   const commentId = req.body.commentId;
//   console.log("commmentId", commentId) 
//   const deletecoment = await Comment.findByIdAndDelete(req.param.id)
//   res.json(deletecoment)

// }

// async function update(req, res) {
// const commentId = req.body.commentId;
//         console.log("commmentId", commentId) // undefined
//         Comment.findByIdAndUpdate(req.params.id, { $pull: {comments: commentId}})
//         .then(commentedPost => {   
//             res.json(commentedPost);
//         })}