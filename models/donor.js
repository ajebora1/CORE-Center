const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    amountpaid: Number,
    paidto: String,
    usertype: {
        type: String,
        default: 'Donor'
    },
    groupmembership: {
        type: Boolean,
        default : true 
    },
    picture: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('Donor', donorSchema);