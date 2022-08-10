import CommentForm from "../../components/CommentForm/CommentForm";
import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"

export default function Comments({user}) {
    const [comments, setComments] = useState([{
        amount: '',
        comment: '',
    }])
     
    useEffect(function () {
        async function fetchComments(userId) {
          const userComment = await commentsAPI.getAllUserComments(userId);
          setComments(userComment);
        }
        fetchComments(user._id);
      }, []);

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
