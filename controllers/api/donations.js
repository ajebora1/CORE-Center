const Donation = require('../../models/donation');
const Donor = require('../../models/donor');

module.exports = {
    create,
    show,
    // index,
    detail,
};


  async function create(req, res) {
    console.log(req.body)
  req.body.user = req.user._id;
  const newDonation = await Donation.create(req.body);
  res.json(newDonation);
};

async function show(req, res) {
  const donations = await Donation.find({user: req.params.userId})
  res.json(donations);
  // console.log("THIS IS INDEX PAGE")
  console.log(donations);
}

async function detail(req, res) {
  console.log(req.params.donorId)
  const user = await Donor.findById(req.params.donorId)
  console.log(user)
  const donations = await Donation.find({donor: user.user})
  console.log(donations)
  res.json(donations);
}

// async function index(req, res) {
//   const donations = await Donation.find({})
//   .populate({path: 'donor'})
//   .populate({path: 'recipient'});
//   res.json(donations);
//   console.log(donations);
// }

// async function detail(req, res) {
//   const onedonation = await Donation.find({})
//   .populate({path: 'donor'})
//   .populate({path: 'recipient'});
//   res.json(onedonation);
//   console.log("THIS IS DETAIL PAGE")
//   console.log(onedonation);
// }

// async function detail(req, res) {
//   const donations = await Donation.findOne({_id:req.params.donationId})
//   .populate({
//     path: 'donors',
//     populate: {
//       path: 'recipients'
//     }})
//     res.json(donations)
//    console.log(donations)
// }

