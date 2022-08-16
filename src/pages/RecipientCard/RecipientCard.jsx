import * as recipientsAPI from '../../utilities/recipients-api'
import { useState, useEffect } from "react"

export default function Recipients({user}) {
    const [recipients, setRecipients] = useState([{
        coursename: '',
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
                    <p className="font-bold text-xl mb-2">{recipient.coursename} Training</p>
                    <h1>{recipient.programlength} Program</h1>
                    <p>{recipient.programtype} Course</p>
                    <p>${recipient.amountneeded} Needed for the Program</p>
                    <h1 className="text-center text-purple-900 text-xl font-bold">My Story</h1>
                    {/* <p>{recipient.picture}</p> */}
                    <p className="text-base text-center">{recipient.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }
