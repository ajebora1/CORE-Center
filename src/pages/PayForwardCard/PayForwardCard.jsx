import * as payforwardsAPI from '../../utilities/payforwards-api'
import { useState, useEffect } from "react"

export default function Payforwards({user}) {
    const [payforwards, setPayforwards] = useState([{
        picture: '',
        mystory: '',
    }])
     
    useEffect(function () {
        async function fetchPayforwards(userId) {
          const userPayforward = await payforwardsAPI.getAllUserPayforwards(userId);
          setPayforwards(userPayforward);
        }
        fetchPayforwards(user._id);
      }, []);

    return (
            <div className="container">
                <h1 className="text-center text-purple-900 text-xl font-bold">Payforward</h1>
                {payforwards.map(payforward =>
                <div key={payforward.id}>
                    <p>{payforward.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }
