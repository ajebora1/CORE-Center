import { useParams } from "react-router-dom";
import * as recipientsAPI from '../../utilities/recipients-api'
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom";

export default function RecipientDetail() {

  const navigate = useNavigate();

  const paymentpage = (recipientID) => {
      navigate(`/recipient/${recipientID}/donation`);
  }

    const {recipientID} = useParams()
    const [recipient1, setRecipient1] = useState({})

     
    useEffect(function () {
        async function fetchRecipients() {
          const userRecipient = await recipientsAPI.getOneRecipient(recipientID);
          setRecipient1(userRecipient);
        }
        fetchRecipients(recipientID);
      }, []);


    return (
            <div className="container">
                    <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }} src={recipient1.picture} />
                    <h1>{recipient1.programlength}</h1>
                    <p>{recipient1.programtype}</p>
                    <button className="btn btn-lg btn-info" onClick={() => {paymentpage(recipient1._id)}}>Donate ${recipient1.amountneeded}</button>
            </div>

            
    
        )
    }
