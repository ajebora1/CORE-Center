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
        <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
            <div>
                {payforwards.map(payforward =>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" key={payforward.id}>
                    <div className="rounded overflow-hidden shadow-lg">
                     <img className="w-1/2 rounded-full" alt="payforward" src={payforward.picture} />
                     </div>
                     <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">{payforward.user.name}</p>
                    <p className="font-bold text-xl mb-2">{payforward.user.email}</p>
                    <h1 className="font-bold text-xl mb-2 text-purple-900">My Story</h1>
                    <p className="text-xl mb-2">{payforward.mystory}</p>
                    </div>
                </div>    
                )}
            </div>
        </div>
    
        )
    }