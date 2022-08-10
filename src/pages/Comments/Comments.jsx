import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"

export default function Comments({user}) {
    const [comments, setComments] = useState([{
        title: '',
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
                <h1>My Updates</h1>
                {comments.map(comment =>
                <div key={comment.id}>
                    <h1>{comment.title}</h1>
                    <p>{comment.comment}</p>
                </div>    
                )}
            </div>
    
        )
    }
