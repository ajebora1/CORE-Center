const User = require('../../models/user');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const donors = await User.find({ 'usertype': 'Donor'});
  res.json(donors);
}

async function show(req, res) {
  const donorDetail = await User.findById(req.params.id);
  res.json(donorDetail);
}