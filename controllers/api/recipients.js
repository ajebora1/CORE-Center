const Recipient = require('../../models/recipient');

module.exports = {
    create,
    show,
    index,
    detail,
};

  async function create(req, res) {
  req.body.user = req.user._id;
  const newRecipient = await Recipient.create(req.body);
  res.json(newRecipient);
};

async function detail(req, res) {
  const onerecipient = await Recipient.findById(req.params.recipientId)
  res.json(onerecipient);
}

async function show(req, res) {
  const recipients = await Recipient.find({user: req.params.userId})
  res.json(recipients);
}

async function index(req, res) {
  const indexrecipients = await Recipient.find({}).populate({path: 'user', select:[ 'name', 'email' ]});
  res.json(indexrecipients);
}
