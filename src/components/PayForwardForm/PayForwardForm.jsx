import * as payforwardsAPI from "../../utilities/payforwards-api";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

export default function PayforwardForm({ user }) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    const [payforwarddata, setPayforwarddata] = useState({
        picture: '',
        mystory: '',
    })

    const [error, setError] = useState('');

    function handleChange(evt) {
        setPayforwarddata({ ...payforwarddata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setPayforwarddata({
            picture: '',
            mystory: '',
        }
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        payforwardsAPI.createPayforwards(payforwarddata);
         resetForm()
    }       

    return (
        <div className="container">
            <h1 className="text-center text-purple-900">Update Payforward's Info.</h1>
            <form onSubmit={(evt) => {
                handleSubmit(evt);
                navigateToProfile()
                }}>
            <div className="form-group">
                   <input className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                   onChange={handleChange} name="picture" value={payforwarddata.picture} type="string" autoComplete="off" placeholder="Upload your Image"></input>
            </div>
            <div className="form-group">
                <label className="block text-sm font-semibold text-gray-800 text-center">Your Story</label>
                    <textarea className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange} name="mystory" value={payforwarddata.mystory} autoComplete="off" placeholder="Tell Your Story"></textarea>
                </div>
            <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Submit Update</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}



// import * as payforwardsAPI from '../../utilities/payforwards-api'

// import { useState } from 'react';

// export default function PayForwardForm({ user }) {
//     const [payforwarddata, setPayForwarddata] = useState({
//         picture: '',
//     })
//     const [error, setError] = useState('');

//     function handleChange(evt) {
//         setPayForwarddata({ ...payforwarddata, [evt.target.name]: evt.target.value });
//         setError('');
//     }

//     const resetForm = () => {
//         setPayForwarddata({
//             picture: '',
//         }
//             )
//     }

//     function handleSubmit(evt) {
//         evt.preventDefault();
//         payforwardsAPI.createPayforwards(payforwarddata);
//          resetForm()
//     }       

//     return (
//         <div className="container">
//             <h1>Create PayForward Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                    <input onChange={handleChange} name="picture" value={payforwarddata.picture} type="string" autoComplete="off" className="form-control" placeholder="Upload your Image"></input>
//                 </div>
//                 <button  className="btn btn-lg btn-info">Submit Update</button>
//             </form>
//             <p className="error-message">&nbsp;{error}</p>
//         </div>
//     )
// }
