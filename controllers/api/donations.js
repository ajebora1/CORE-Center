const Donation = require('../../models/donation');

module.exports = {
    create,
    show,
};


  async function create(req, res) {
  req.body.user = req.user._id;
  const newDonation = await Donation.create(req.body);
  res.json(newDonation);
};

async function show(req, res) {
  const donations = await Donation.find({user: req.params.userId})
  res.json(donations);
}