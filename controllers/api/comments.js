const Comment = require('../../models/comment');

module.exports = {
    create,
    show,
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