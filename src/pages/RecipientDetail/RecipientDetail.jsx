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
      <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className="w-full rounded-full"  src={recipient1.picture} />
            </div>
            <div class="p-6 flex flex-col justify-start">
                 <h1 className="font-bold text-xl mb-2">{recipient1.coursename}</h1>
                    <p className="font-bold text-xl mb-2">{recipient1.programlength}</p>
                    <p className="font-bold text-xl mb-2">{recipient1.programtype}</p>
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" 
                    onClick={() => {paymentpage(recipient1._id)}}>Donate ${recipient1.amountneeded}</button>
            </div>
         </div>   
      </div>
        )
    }
