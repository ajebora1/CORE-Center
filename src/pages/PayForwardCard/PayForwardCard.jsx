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
                <h1>Payforward</h1>
                {payforwards.map(payforward =>
                <div key={payforward.id}>
                    {/* <p>{payforward.picture}</p> */}
                    <p>{payforward.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }