import * as donorsAPI from '../../utilities/donors-api'
import { useState, useEffect } from "react"

export default function DonorCard({user}) {
    const [donors, setDonors] = useState([{
        picture: '',
        mystory: '',
    }])
     
    useEffect(function () {
        async function fetchDonors(userId) {
          const userDonor = await donorsAPI.getAllUserDonors(userId);
          setDonors(userDonor);
        }
        fetchDonors(user._id);
      }, []);

    return (
            <div className="container">
                <h1 className="text-center text-purple-900 text-xl font-bold">Donor</h1>
                {donors.map(donor =>
                <div key={donor.id}>
                    {/* <p>{donor.picture}</p> */}
                    <p>{donor.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }
