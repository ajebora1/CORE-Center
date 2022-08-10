import * as recipientsAPI from '../../utilities/recipients-api'
import { useState, useEffect } from "react"

export default function Recipients({user}) {
    const [recipients, setRecipients] = useState([{
        programlength: '',
        programtype: '',
        amountneeded: '',
        picture: '',
        mystory: '',
    }])
     
    useEffect(function () {
        async function fetchRecipients(userId) {
          const userRecipient = await recipientsAPI.getAllUserRecipients(userId);
          setRecipients(userRecipient);
        }
        fetchRecipients(user._id);
      }, []);

    return (
            <div className="container">
                {recipients.map(recipient =>
                <div key={recipient.id}>
                    <h1>{recipient.programlength}</h1>
                    <p>{recipient.programtype}</p>
                    <p>{recipient.amountneeded}</p>
                    <h1>My Story</h1>
                    {/* <p>{recipient.picture}</p> */}
                    <p>{recipient.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }
