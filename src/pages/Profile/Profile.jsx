import {useNavigate} from "react-router-dom";
import Comments from "../../pages/Comments/Comments"
import RecipientCard from "../../pages/RecipientCard/RecipientCard"
import DonorCard from "../DonorCard/DonorCard";
import PayForwardCard from "../../pages/PayForwardCard/PayForwardCard";

export default function Profile({user}) {
    const navigate = useNavigate();

    const navigateToCommentForm = () => {
        navigate('/formpages');
      };

    return (
      <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <div className="container">
        <h1 className="font-bold text-center text-purple-900 text-xl">My Profile</h1>
        
        <div>
            <div>
                 <img style={{ width:"16rem", height:"16rem", borderRadius:"8rem" }}
                  src="https://i.imgur.com/2mniXa0.jpg"/> 
              <h2>{user.name}</h2>
               <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={navigateToCommentForm}>Update Profile</button>
               </div>
              <hr />
              <br />
              <RecipientCard user={user}/>
              <hr />
              <br />
              <Comments user={user}/>
              <hr />
              <br />
              <DonorCard user={user}/>
              <hr />
              <PayForwardCard user={user}/>
              <hr />
        </div>
        </div>
        </div>
    )
}