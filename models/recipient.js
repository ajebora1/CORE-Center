const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    coursename: {
        type: String,
        enum: ['Software Development', 'Cyber Security', 'Database Administration', 'Network Administration']
    },
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
    mystory: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, 
    donor: {
        type: Schema.Types.ObjectId,
        ref: 'Donor',
    }, 
    payforward: {
        type: Schema.Types.ObjectId,
        ref: 'PayForward',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('Recipient', recipientSchema);