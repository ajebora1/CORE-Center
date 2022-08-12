import './PayForwards.css';
import * as payforwardsAPI from '../../utilities/payforwards-api';
import { useState, useEffect } from "react";

export default function PayForwards({user}) {
    const [payforwards, setPayforwards] = useState([{
        picture: '',
        mystory: '',
        user: {name: '', email: '',}
    }])
     
    useEffect(function () {
        async function fetchAllPayforwards() {
          const userPayforward = await payforwardsAPI.getAllPayforwards();
          setPayforwards(userPayforward);
        }
            fetchAllPayforwards();
      }, []);

    return (
            <div>
                {payforwards.map(payforward =>
                <div className="container-sm" key={payforward.id}>
                    <div>
                     <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }} src={payforward.picture} />
                     </div>
                    <p>{payforward.user.name}</p>
                    <p>{payforward.user.email}</p>
                    <h1>My Story</h1>
                    <p>{payforward.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }