import * as recipientsAPI from '../../utilities/recipients-api'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

export default function RecipientForm({ user }) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    const [recipientdata, setRecipientdata] = useState({
        coursename: '',
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
            coursename: '',
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
            <h1 className="text-center text-xl mb-2 font-bold text-purple-900">Update Recipient's Info</h1>
            <form className="mt-6" onSubmit={(evt) => {
                handleSubmit(evt);
                navigateToProfile()
                }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-center">Course Name</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                onChange={handleChange} name="coursename" value={recipientdata.coursename} type="string" autoComplete="off" placeholder="Chose Your Desired Course">
                    <option value="Software Development">Software Development</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Database Administration">Database Administration</option>
                    <option value="Network Administration">Network Administration</option>
                </select>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-center">Length of Program</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                onChange={handleChange} name="programlength" value={recipientdata.programlength} type="string" autoComplete="off" placeholder="Chose Desired Length of Program">
                    <option value="4-Weeks">4-Weeks</option>
                    <option value="6-Weeks">6-Weeks</option>
                    <option value="8-Weeks">8-Weeks</option>
                    <option value="3-Months">3-Months</option>
                </select>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-center">Type of Program</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                onChange={handleChange} name="programtype" value={recipientdata.programtype} type="string" autoComplete="off" placeholder="Chose The type of Program You want">
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>
                </select>
                <div className="form-group">
                   <input onChange={handleChange} name="amountneeded" value={recipientdata.amountneeded} type="number" autoComplete="off" className="block w-full px-12 py-2 mt-2  dark:placeholder-black-400 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter the Amount you need for your program"></input>
                </div>
                <div className="form-group">
                   <input onChange={handleChange} name="picture" value={recipientdata.picture} type="string" autoComplete="off" className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Upload your Image"></input>
                </div>
                <div className="form-group">
                <label className="block text-sm font-semibold text-gray-800 text-center">Your Story</label>
                    <textarea onChange={handleChange} name="mystory" value={recipientdata.mystory} autoComplete="off" className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Tell Your Story"></textarea>
                </div>
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Submit Recipient's Update</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
