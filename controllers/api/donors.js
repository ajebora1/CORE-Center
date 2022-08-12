const Donor = require('../../models/donor');

module.exports = {
    create,
    show,
    index,
};

  async function create(req, res) {
  req.body.user = req.user._id;
  const newDonor = await Donor.create(req.body);
  res.json(newDonor);
};

async function show(req, res) {
  const donors = await Donor.find({user: req.params.userId})
  res.json(donors);
}

async function index(req, res) {
  const indexdonors = await Donor.find({}).populate({path: 'user', select:[ 'name', 'email' ]});
  res.json(indexdonors);
}