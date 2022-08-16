import * as donorsAPI from "../../utilities/donors-api";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

export default function DonorForm({ user }) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

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
            <h1 className="text-center text-purple-900">Update Donor Info</h1>
            <form onSubmit={(evt) => {
                handleSubmit(evt);
                navigateToProfile()
                }}>
            <div className="mt-6">
                   <input className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                   onChange={handleChange} name="picture" value={donordata.picture} type="string" autoComplete="off" placeholder="Upload your Image"></input>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-800 text-center">Your Story</label>
                    <textarea className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange} name="mystory" value={donordata.mystory} autoComplete="off" placeholder="Tell Your Story"></textarea>
                </div>
            <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Submit Update</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
