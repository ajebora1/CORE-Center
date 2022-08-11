import * as recipientsAPI from '../../utilities/recipients-api'

import { useState } from 'react';

export default function RecipientForm({ user }) {
    const [recipientdata, setRecipientdata] = useState({
        programlength: '',
        programtype: '',
        amountneeded: '',
        picture: '',
        mystory: '',
    })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setRecipientdata({ ...recipientdata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setRecipientdata({
            programlength: '',
            programtype: '',
            amountneeded: '',
            picture: '',
            mystory: '',
        }
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        recipientsAPI.createRecipients(recipientdata);
         resetForm()
    }       

    return (
        <div className="container">
            <h1>Update Recipient Info</h1>
            <form onSubmit={handleSubmit}>
                <label className="col-sm-2 col-form-label">Length of Program</label>
                <select className="form-select" id="inlineFormSelectPref" onChange={handleChange} name="programlength" value={recipientdata.programlength} type="string" autoComplete="off" placeholder="Chose Desired Length of Program">
                    <option value="4-Weeks">4-Weeks</option>
                    <option value="6-Weeks">6-Weeks</option>
                    <option value="8-Weeks">8-Weeks</option>
                    <option value="3-Months">3-Months</option>
                </select>
                <label className="col-sm-2 col-form-label">Type of Program</label>
                <select className="form-select" id="inlineFormSelectPref" onChange={handleChange} name="programtype" value={recipientdata.programtype} type="string" autoComplete="off" placeholder="Chose The type of Program You want">
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>

                </select>
                <div className="form-group">
                   <input onChange={handleChange} name="amountneeded" value={recipientdata.amountneeded} type="number" autoComplete="off" className="form-control" placeholder="Enter the Amount you need for your program"></input>
                </div>
                <div className="form-group">
                   <input onChange={handleChange} name="picture" value={recipientdata.picture} type="string" autoComplete="off" className="form-control" placeholder="Upload your Image"></input>
                </div>
                <div className="form-group">
                <label className="col-sm-2 col-form-label">Your Story</label>
                    <textarea onChange={handleChange} name="mystory" value={recipientdata.mystory} autoComplete="off" className="form-control" placeholder="Tell Your Story"></textarea>
                </div>
                <button  className="btn btn-lg btn-info">Submit Update</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
