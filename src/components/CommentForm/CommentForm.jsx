import * as commentsAPI from '../../utilities/comments-api'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

export default function CommentForm({ user }) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    const [commentdata, setCommentdata] = useState({
        title: '',
        comment: ''

    })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCommentdata({ ...commentdata, [evt.target.name]: evt.target.value });
        setError('');
    }

    const resetForm = () => {
        setCommentdata({
            title: '',
            comment: ''}
            )
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        commentsAPI.createComments(commentdata);
         resetForm()
    }       

    return (
        <div className="container">
            <h1 className="text-center text-xl mb-2 font-bold text-purple-900">Create Comment Page</h1>
            <form className="mt-6" onSubmit={(evt) => {
                handleSubmit(evt);
                navigateToProfile()
                }}>
                <div className="mt-6">
                   <input className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                   onChange={handleChange} name="title" value={commentdata.title} type="text" autoComplete="off" placeholder="Title"></input>
                </div>
                <div className="mt-6">
                    <textarea className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange} name="comment" value={commentdata.comment} autoComplete="off" placeholder="Comment"></textarea>
                </div>
                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Submit Comment</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
