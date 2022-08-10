const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    amountneeded: Number,
    programlength: {
       type: String,
       enum: ['4-Weeks', ' 6-Weeks', '8-Weeks', '3-Months']
    },
    programtype: {
       type: String,
       enum: ['Part-Time', 'Full-Time']
    },
    picture: String,
    usertype: {
        type: String,
        default: 'Recipient'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('Recipient', recipientSchema);