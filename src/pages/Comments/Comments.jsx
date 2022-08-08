import CommentForm from "../../components/CommentForm/CommentForm";
import { useState } from "react"

export default function Comments() {
    const [comments, setComments] = useState([{
        amount: '',
        comment: ''
    }])
    return (
            <div className="container">
                <h1>My Story and Amount Needed</h1>
                {comments.map(comment =>
                <div key={comment.id}>
                    <h1>{comment.amount}</h1>
                    <p>{comment.comment}</p>
                </div>    
                )}
            </div>
    
        )
    }
