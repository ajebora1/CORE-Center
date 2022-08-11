import * as donorsAPI from "../../utilities/donors-api";

import { useState } from 'react';

export default function DonorForm({ user }) {
    const [donordata, setDonordata] = useState({
        picture: '',
        mystory: '',

    })

    const [error, setError] = useState('');

    function handleChange(evt) {
        setDonordata({ ...donordata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setDonordata({
            picture: '',
            mystory: '',
        }
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        donorsAPI.createDonors(donordata);
         resetForm()
    }       

    return (
        <div className="container">
            <h1>Update Donor Info</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                   <input onChange={handleChange} name="picture" value={donordata.picture} type="string" autoComplete="off" className="form-control" placeholder="Upload your Image"></input>
            </div>
            <div className="form-group">
                <label className="col-sm-2 col-form-label">Your Story</label>
                    <textarea onChange={handleChange} name="mystory" value={donordata.mystory} autoComplete="off" className="form-control" placeholder="Tell Your Story"></textarea>
                </div>
            <button  className="btn btn-lg btn-info">Submit Update</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
