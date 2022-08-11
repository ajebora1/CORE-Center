import * as payforwardsAPI from "../../utilities/payforwards-api";

import { useState } from 'react';

export default function PayforwardForm({ user }) {
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
            <h1>Update Payforward's Info.</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                   <input onChange={handleChange} name="picture" value={payforwarddata.picture} type="string" autoComplete="off" className="form-control" placeholder="Upload your Image"></input>
            </div>
            <div className="form-group">
                <label className="col-sm-2 col-form-label">Your Story</label>
                    <textarea onChange={handleChange} name="mystory" value={payforwarddata.mystory} autoComplete="off" className="form-control" placeholder="Tell Your Story"></textarea>
                </div>
            <button  className="btn btn-lg btn-info">Submit Update</button>
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
