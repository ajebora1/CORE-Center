const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    donationamount: Number,
    donationtype: {
       type: String,
       enum: ['Full-Payment', 'Incremental-Payment']
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // }, 
    donor: {
        type: Schema.Types.ObjectId,
        ref: 'Donor',
    }, 
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'Recipient',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('Donation', donationSchema);