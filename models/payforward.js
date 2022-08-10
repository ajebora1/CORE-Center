const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payforwardSchema = new Schema({
    amountreceived: String,
    amountpaid: Number,
    paidto: String,
    picture: String,
    usertype: {
        type: String,
        default: 'PayForward'
    },
    groupmembership: {
        type: Boolean,
        default : true 
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, 
},{
    timestamps: true
})


module.exports = mongoose.model('PayForward', payforwardSchema);