const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    donationamount: Number,
    donationtype: {
       type: String,
       enum: ['Full-Payment', 'Incremental-Payment']
    },
    donatedto:  String,

    donatedfrom: String,

    donor: {
        type: Schema.Types.ObjectId,
        ref: 'Donors',
    }, 
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'Recipients',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('Donation', donationSchema);