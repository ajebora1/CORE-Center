const PayForward = require('../../models/payforward');

module.exports = {
    create,
    show,
    index,
};

  async function create(req, res) {
  req.body.user = req.user._id;
  const newPayForward = await PayForward.create(req.body);
  res.json(newPayForward);
};

async function show(req, res) {
  const payforwards = await PayForward.find({user: req.params.userId})
  res.json(payforwards);
}

async function index(req, res) {
  const indexpayforwards = await PayForward.find({}).populate({path: 'user', select:[ 'name', 'email' ]});
  res.json(indexpayforwards);
}