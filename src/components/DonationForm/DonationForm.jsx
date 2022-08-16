import * as donationsAPI from '../../utilities/donations-api'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DonationForm({user}) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    const {id} = useParams()
    const [donationdata, setDonationdata] = useState({
        donationamount: '',
        donationtype: '',
        donor: user._id,
        recipient: id
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
            donor: user._id,
            recipient: id
        }
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        donationsAPI.createDonations(donationdata);
         resetForm()
    }       

    return (
        <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <div className="container">
            <h1 className="text-center text-purple-900 text-xl">Update donation Info</h1>
            <br />
            <form onSubmit={(evt) => {
                handleSubmit(evt);
                navigateToProfile()
                }}>
                <div className="form-group">
                <label className="block text-sm font-semibold text-gray-800 text-center">Enter Amount</label>
                   <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                   onChange={handleChange} name="donationamount" value={donationdata.donationamount} type="number" autoComplete="off" placeholder="Enter the Amount You Wish to Donate"></input>
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-center">Payment Plan</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                 onChange={handleChange} name="donationtype" value={donationdata.donationtype} type="string" autoComplete="off" placeholder="Chose Your payment Plan">
                    <option value="Full-Payment">Full Payment</option>
                    <option value="Incremental-Payment">Incremental Payment</option>
                </select>
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Pay Now</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
        </div>
    )
}