import './Recipients.css';
import * as recipientsAPI from '../../utilities/recipients-api';
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

export default function Recipients({user}) {

    const navigate = useNavigate();

    const navigateToRecipientDetails = (recipientID) => {
        navigate(`/recipient/${recipientID}`);
    }

    const [recipients, setRecipients] = useState([{
        programlength: '',
        programtype: '',
        amountneeded: '',
        picture: '',
        mystory: '',
        user: {name: '', email: '',}
    }])
     
    useEffect(function () {
        async function fetchAllRecipients() {
          const userRecipient = await recipientsAPI.getAllRecipients();
          setRecipients(userRecipient);
        }
            fetchAllRecipients();
      }, []);

    return (

            <div>
                {recipients.map(recipient =>
                  <div className="container-sm" key={recipient.id}>
                    {/* <h1>{recipient.programlength}</h1>
                    <p>{recipient.programtype}</p>
                    <p>${recipient.amountneeded}</p> */}
                    <div>
                     <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }} src={recipient.picture} />
                     </div>
                    <p>{recipient.user.name}</p>
                    <p>{recipient.user.email}</p>
                    <h1>My Story</h1>
                    <p>{recipient.mystory}</p>
                    <button className="btn btn-lg btn-info" onClick={() => {navigateToRecipientDetails(recipient._id)}}>Donate to {recipient.user.name}</button>
                </div>    
                )}
            </div>
   
        )
    }