import "./Profile.css";
import {useNavigate} from "react-router-dom";
import Comments from "../../pages/Comments/Comments"
import RecipientCard from "../../pages/RecipientCard/RecipientCard"
import Donors from "../Donors/Donors";
import PayForwardCard from "../../pages/PayForwardCard/PayForwardCard";

export default function Profile({user}) {
    const navigate = useNavigate();

    const navigateToCommentForm = () => {
        navigate('/formpages');
      };

    return (
        <div className="container">
        <h1 className="Profile">This is my Profile Page</h1>
        
        <div>
            <div>
                 <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }}
                    src="https://images.unsplash.com/photo-1617140610409-753b80274362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwZW1vdGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
              <h2>{user.name}</h2>
               <button className="btn btn-primary" onClick={navigateToCommentForm}>Update Profile</button>
              <hr />
              <RecipientCard user={user}/>
              <hr />
              <Comments user={user}/>
              <hr />
              <Donors user={user}/>
              <hr />
              <PayForwardCard user={user}/>
        </div>
        </div>
    )
}