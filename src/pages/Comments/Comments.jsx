import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"

export default function Comments({user, comment}) {
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

      // useEffect(function () {
      //   async function deleteComments(commentID) {
      //     const userCommentDelete = await commentsAPI.deleteOneComment(commentID);
      //     setComments(userCommentDelete);
      //     console.log(userCommentDelete);
      //   }
      //   deleteComments(comment._id);
      // }, []);

      // useEffect(function () {
      //   async function updateComments(commentID) {
      //     const userCommentUpdate = await commentsAPI.updateOneComment(commentID);
      //     setComments(userCommentUpdate);
      //     console.log(userCommentUpdate);
      //   }
      //   updateComments(comment._id);
      // }, []);


    function handleDelete(evt, commentID) {
        console.log("I am the delete")
        commentsAPI.deleteOneComment(commentID);
      }  

    function handleUpdate(evt, commentID) {
      commentsAPI.updateOneComment(commentID);
      console.log("I am the update")
    }  

    return (
            <div className="container">
                <h1>My Updates</h1>
                {comments.map(comment =>
                <div key={comment.id}>
                    <h1>{comment.title}</h1>
                    <p>{comment.comment}</p>
                    <button onClick={() => {handleUpdate(comment.id)}} className="btn btn-lg btn-info" style = {{ marginRight:"0.4rem" }}>Update</button>
                    <button onClick={() => {handleDelete(comment.id)}} className="btn btn-lg btn-info" >Delete</button>
                </div>    
                )}
            </div>
    
        )
    }
