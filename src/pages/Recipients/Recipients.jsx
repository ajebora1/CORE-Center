import * as recipientsAPI from '../../utilities/recipients-api'
import { useState, useEffect } from "react"

export default function Recipients({user}) {
    console.log('I see this section')
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
          console.log(userRecipient)
        }
            fetchAllRecipients();
      }, []);

    return (
            <div className="container">
                {recipients.map(recipient =>
                <div key={recipient.id}>
                    <h1>{recipient.programlength}</h1>
                    <p>{recipient.programtype}</p>
                    <p>{recipient.amountneeded}</p>
                    <div>
                     <img src={recipient.picture} />
                     </div>
                    <p>{recipient.user.name}</p>
                    <p>{recipient.user.email}</p>
                    <h1>My Story</h1>
                    <p>{recipient.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }