import * as commentsAPI from '../../utilities/comments-api'

import { useState } from 'react';

export default function CommentForm({ user }) {
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
            <h1>Create Comment Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   <input onChange={handleChange} name="title" value={commentdata.title} type="text" autoComplete="off" className="form-control" placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="comment" value={commentdata.comment} autoComplete="off" className="form-control" placeholder="Comment"></textarea>
                </div>
                <button  className="btn btn-lg btn-info">Submit Comment</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
