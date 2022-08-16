import * as donorsAPI from '../../utilities/donors-api';
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Donors({user}) {
    const navigate = useNavigate();

    const navigateToDonorDetails = (donorID) => {
        navigate(`/donor/${donorID}`);
    }

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
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" key={donor.id}>
            <div className="rounded overflow-hidden shadow-lg">
             <img className="w-1/2 rounded-full"  src={donor.picture} alt="profile"/>
             </div>
             <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{donor.user.name}</p>
                 <p className="font-bold text-xl mb-2">{donor.user.email}</p>
                <h1 className="font-bold text-xl mb-2 text-purple-900">My Story</h1>
                <p className="text-base">{donor.mystory}</p>
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" 
                 onClick={() => {navigateToDonorDetails(donor._id)}}>See {donor.user.name} Details</button>
                </div>
         </div>    
        )}
    </div>
        
)
}
