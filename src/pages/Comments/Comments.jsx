import CommentCard from "../CommentCard/CommentCard"
import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
      //   async function handleUpdate(commentID) {
      //     const userCommentUpdate = await commentsAPI.updateOneComment(commentID);
      //     setComments(userCommentUpdate);
      //     console.log(userCommentUpdate);
      //   }
      //   handleUpdate(comment._id);
      // }, []);



    return (
            <div className="container">
                <h1>My Updates</h1>
                {comments.map(comment =>
                <CommentCard comment={comment}/>
                )}
            </div>
    
        )
    }
