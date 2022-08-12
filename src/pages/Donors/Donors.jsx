import './Donors.css';
import * as donorsAPI from '../../utilities/donors-api';
import { useState, useEffect } from "react";

export default function Donors({user}) {
    const [donors, setDonors] = useState([{
        picture: '',
        mystory: '',
        user: {name: '', email: '',}
    }])
     
    useEffect(function () {
        async function fetchAllDonors() {
          const userDonor = await donorsAPI.getAllDonors();
          setDonors(userDonor);
        }
            fetchAllDonors();
      }, []);

    return (
            <div>
                {donors.map(donor =>
                <div className="container-sm" key={donor.id}>
                    <div>
                     <img style = {{ width:"16rem", height:"16rem", borderRadius:"8rem" }} src={donor.picture} />
                     </div>
                    <p>{donor.user.name}</p>
                    <p>{donor.user.email}</p>
                    <h1>My Story</h1>
                    <p>{donor.mystory}</p>
                </div>    
                )}
            </div>
    
        )
    }