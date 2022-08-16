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
                  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" key={recipient.id}>
                    <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                     <img className="w-full rounded-full"  src={recipient.picture} />
                     </div>
                     <div class="p-6 flex flex-col justify-start">
                    <h5 className="font-bold text-xl mb-2">{recipient.user.name}</h5>
                    <p className="font-bold text-xl mb-2">{recipient.user.email}</p>
                    <h1 className="font-bold text-xl mb-2 text-purple-900">My Story</h1>
                    <p className="text-xl mb-2">{recipient.mystory}</p>
                    <button onClick={() => {navigateToRecipientDetails(recipient._id)}} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 ">Donate to {recipient.user.name}</button>
                    </div>
                </div>    
                )}
            </div>
   
        )
    }