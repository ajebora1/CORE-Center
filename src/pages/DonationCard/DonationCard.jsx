import * as donationsAPI from '../../utilities/donations-api'
import { useState, useEffect } from "react"

export default function DonationCard({user}) {

    
    const [donations, setDonations] = useState([{
        donationamount: '',
        donationtype: '',
    }])
     
    // useEffect(function () {
    //     async function fetchDonations(userId) {
    //       const userDonation = await donationsAPI.getAllUserDonations(userId);
    //       setDonations(userDonation);
    //     }
    //     fetchDonations(user._id);
    //   }, []);

    return (
            <div className="container">
                <h1>Donation</h1>
                {donations.map(donation =>
                <div key={donation.id}>
                    <p>{donation.donationamount}</p>
                    <p>{donation.donationtype}</p>
                </div>    
                )}
            </div>
    
        )
    }
