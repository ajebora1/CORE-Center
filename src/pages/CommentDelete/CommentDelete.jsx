import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"

export default function CommentDelete({comment}) {
    const [comment1, setComment1] = useState([{
        title: '',
        comment: '',
    }])
     

      useEffect(function () {
        async function fetchComments(commentID) {
          const userCommentDelete = await commentsAPI.deleteOneComment(commentID);
          setComment1(userCommentDelete);
          console.log(userCommentDelete);
        }
        fetchComments(comment.id);
      }, []);

    return (
            <div className="container">
                <h1 font-bold text-xl mb-2 text-purple-900>My Updates</h1>
                {comment1.map(comment =>
                <div key={comment.id}>
                    <h1>{comment.title}</h1>
                    <p>{comment.comment}</p>
                    <button className="btn btn-lg btn-info" style = {{ marginRight:"0.4rem" }}>Update</button>
                    <button className="btn btn-lg btn-info">Delete</button>
                </div>    
                )}
            </div>
    
        )
    }
