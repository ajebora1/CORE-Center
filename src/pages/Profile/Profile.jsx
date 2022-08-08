import "./Profile.css";
import CommentForm from "../../components/CommentForm/CommentForm"; 
import Comments from "../../pages/Comments/Comments"

export default function Profile({user}) {
    return (
        <div className="container">
        <h1 className="Profile">This is my Profile Page</h1>
        
        <div>
            <div>
                 <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }}
                    src="https://images.unsplash.com/photo-1617140610409-753b80274362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwZW1vdGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
              <h2>{user.name}</h2>
              <hr />
              <Comments />
              <hr />
              <CommentForm />
        </div>
        </div>
    )
}