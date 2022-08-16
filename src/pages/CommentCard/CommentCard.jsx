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
         commentsAPI.deleteOneComment(commentID);
       }  
 
       function handleDelete(evt) {
          deleteComment(evt.target.id);
        }  
 
       function handleUpdate(evt) {
         commentsAPI.updateOneComment(evt.target.id, updateForm); 
       }
  
       function handleChange(evt) {
         setUpdateForm({ ...updateForm, [evt.target.name]: evt.target.value });
 
         }  
    return (
    <div className="px-6 py-4">
        <div key={comment.id}>
        <h1 className="font-bold text-xl mb-2 text-purple-900">{comment.title}</h1>
        <p className="text-xl mb-2">{comment.comment}</p>
        <button id={comment._id} onClick={handleUpdate} 
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Update</button>
        <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleChange} type="text" value={(updateForm.title)} name="title"/>
        <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleChange} type="text" value={(updateForm.comment)} name="comment"/>
{/* <button>Update Comment</button> */}
        <button id={comment._id} onClick={handleDelete} 
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Delete</button>
   </div>  
   </div>

    )
}

  