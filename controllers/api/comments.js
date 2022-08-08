const Comment = require('../../models/comment');

module.exports = {
    create,
};


  async function create(req, res) {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
};

