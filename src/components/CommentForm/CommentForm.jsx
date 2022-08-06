import './CommentForm.css';
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function CommentForm() {
    const [comment, setComment] = useState ('')

    function handleChange(evt) {
        setComment(evt.target.value)
      }

   const resetForm = () => {
        setComment('')
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
             <label>
                <span>Comment:</span>
                <input 
                    type='text' 
                    onChange={handleChange}
                    value={comment} 
                />
            </label>
            <button>Summit</button>
            <p>comment - {comment}</p>
            <p onClick={resetForm}>Reset the Form</p>
        </form>

    )
}