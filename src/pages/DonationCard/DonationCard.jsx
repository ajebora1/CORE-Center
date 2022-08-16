import * as donationsAPI from '../../utilities/donations-api'
import { useState, useEffect } from "react"

export default function DonationCard({user}) {
    const [donations, setDonations] = useState([{
        donationamount: '',
        // donor: '',
        // recipient: '',
        createdAt: '',
    }])
     
    useEffect(function () {
        async function fetchDonations(userId) {
          const userDonation = await donationsAPI.getAllUserDonations(userId);
          setDonations(userDonation);
        }
        fetchDonations(user._id);
      }, []);

    return (
            <div className="container">
                {donations.map(donation =>
                <div key={donation.id}>
                <p>{donation.donationamount}</p>
                    {/* <h1>{donation.donor}</h1>
                    <p>{donation.recipient}</p> */}
                    <p>${donation.createdAt}</p>
                </div>    
                )}
            </div>
    
        )
    }
