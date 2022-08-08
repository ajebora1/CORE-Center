import { useState } from 'react';

export default function CommentForm() {
    const [commentdata, setCommentdata] = useState({
        amount: '',
        comment: ''

    })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCommentdata({ ...commentdata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setCommentdata({
            amount: '',
            comment: ''}
            )
    }


    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          } catch {
            setError('Log In Failed - Try Again');
          }
          resetForm();
        }
        

    return (
        <div className="container">
            <h1>Create Comment Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   <input onChange={handleChange} name="amount" value={commentdata.amount} type="number" autoComplete="off" className="form-control" placeholder="Amount"></input>
                </div>

                <div className="form-group">
                    <textarea onChange={handleChange} name="comment" value={commentdata.comment} autoComplete="off" className="form-control" placeholder="Comment"></textarea>
                </div>
                <button className="btn btn-lg btn-info">Submit Comment</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}






// import { useState } from 'react';

// export default function CommentForm() {
//     const [input, setInput] = useState({
//         amount: '',
//         comment: ''

//     })

//     function handleChange(evt) {
//         const {name, value} = evt.target;

//         setInput(prevInput => {
//             return {
//                 ...prevInput,
//                 [name]: value
//             }
//         })
//     }

//     const resetForm = () => {
//         setInput({
//             amount: '',
//             comment: ''}
//             )
//     }


//     function handleSubmit(evt) {
//         evt.preventDefault();
//         resetForm()
//     }       
        

//     return (
//         <div className="container">
//             <h1>Create Comment Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                    <input onChange={handleChange} name="amount" value={input.amount} type="number" autoComplete="off" className="form-control" placeholder="Amount"></input>
//                 </div>

//                 <div className="form-group">
//                     <textarea onChange={handleChange} name="comment" value={input.comment} autoComplete="off" className="form-control" placeholder="Comment"></textarea>
//                 </div>

//                 <button className="btn btn-lg btn-info">Submit Comment</button>
//             </form>
//         </div>
//     )
// }










// import { useState } from 'react';

// export default function CommentForm() {
//     const [input, setInput] = useState({
//         amount: '',
//         comment: ''

//     })

//     function handleChange(evt) {
//         const {name, value} = evt.target;

//         setInput(prevInput => {
//             return {
//                 ...prevInput,
//                 [name]: value
//             }
//         })
//     }

//        const resetForm = () => {
//         setInput('')
//     }


//     function handleSubmit(evt) {
//         evt.preventDefault();
//         resetForm()
//     }       
        

//     return (
//         <div className="container">
//             <h1>Create Comment Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                    <input onChange={handleChange} name="amount" value={input.amount} type="number" autoComplete="off" className="form-control" placeholder="Amount"></input>
//                 </div>

//                 <div className="form-group">
//                     <textarea onChange={handleChange} name="comment" value={input.comment} autoComplete="off" className="form-control" placeholder="Comment"></textarea>
//                 </div>

//                 <button className="btn btn-lg btn-info">Submit Comment</button>
//             </form>
//         </div>
//     )
// }


// import './CommentForm.css';
// import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

// export default function CommentForm() {
//     const [comment, setComment] = useState ('')
//     const [amount, setAmount] = useState ('')

//    const resetForm = () => {
//         setComment('')
//         setAmount('')
//     }

//     const handleSubmit = (evt) => {
//         evt.preventDefault()
//         resetForm()
//     }
    
//     return (
//       <div className="container">
//         <h1>Create Comment Page</h1>
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <input type="number" 
//                 onChange={(evt) => setAmount(evt.target.value)}
//                 name="amount"
//                 autoComplete="off" 
//                 className="form-control" 
//                 value={amount}
//                 placeholder="Amount"></input>              
//             </div>
//             <div>
//             <textarea onChange={(evt) => setComment(evt.target.value)}
//              name="comment" 
//              autoComplete="off" 
//              className="form-control" 
//              value={comment} 
//              placeholder="Comment"></textarea>
//             </div>
//             <button>Summit</button>
//         </form>
//         </div>

//     )
// }