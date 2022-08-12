import * as commentsAPI from '../../utilities/comments-api'
import { useState, useEffect } from "react"

export default function CommentCard({comment}) {

    const [updateForm, setUpdateForm] = useState({
        title: comment.title,
        comment: comment.comment,
    }) 
     
    useEffect(() => {
        setUpdateForm({
            title: comment.title,
            comment: comment.comment,
        })
    }, [comment])

    function deleteComment(commentID) {
        console.log(commentID)
         console.log("I am the delete")
         commentsAPI.deleteOneComment(commentID);
       }  
 
       function handleDelete(evt) {
          deleteComment(evt.target.id);
        }  
 
       // function updateComment(commentID) {
       //   commentsAPI.updateOneComment(commentID);
       //  }  
 
       function handleUpdate(evt) {
         commentsAPI.updateOneComment(evt.target.id, updateForm); 
       }
  
       function handleChange(evt) {
         setUpdateForm({ ...updateForm, [evt.target.name]: evt.target.value });
 
         }  
    return (
        <div key={comment.id}>
        <h1>{comment.title}</h1>
        <p>{comment.comment}</p>
        <button id={comment._id} onClick={handleUpdate} className="btn btn-lg btn-info" style = {{ marginRight:"0.4rem" }}>Update</button>
        <input onChange={handleChange} type="text" value={(updateForm.title)} name="title"/>
        <input onChange={handleChange} type="text" value={(updateForm.comment)} name="comment"/>
{/* <button>Update Comment</button> */}
        <button id={comment._id} onClick={handleDelete} className="btn btn-lg btn-info" >Delete</button>
</div>  

    )
}

  