import * as donationsAPI from '../../utilities/donations-api'

import { useState } from 'react';

export default function DonationForm(donor, recipient) {
    const [donationdata, setDonationdata] = useState({
        donationamount: '',
        donationtype: '',
        // donatedto: '',
        // donatedfrom: '',
    })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setDonationdata({ ...donationdata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setDonationdata({
            donationamount: '',
            donationtype: '',
        }
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        donationsAPI.createDonations(donationdata);
         resetForm()
    }       

    return (
        <div className="container">
            <h1>Update donation Info</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   <input onChange={handleChange} name="donationamount" value={donationdata.donationamount} type="number" autoComplete="off" className="form-control" placeholder="Enter the Amount You Wish to Donate"></input>
                </div>
                <label className="col-sm-2 col-form-label">Payment Plan</label>
                <select className="form-select" id="inlineFormSelectPref" onChange={handleChange} name="donationtype" value={donationdata.donationtype} type="string" autoComplete="off" placeholder="Chose Your payment Plan">
                    <option value="Full-Payment">Full Payment</option>
                    <option value="Incremental-Payment">Incremental Payment</option>
                </select>
                <button  className="btn btn-lg btn-info">Pay Now</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}