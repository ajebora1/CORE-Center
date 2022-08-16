import * as donationsAPI from '../../utilities/donations-api'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export default function DonationDetail({donations}) {

     
    return (
        <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]">
            <div className="container">
                <h1 className="text-center font-bold text-purple-900 text-xl">Donations</h1>
                    {/* <p>You Donated ${donations1.donationamount} On {donations1.createdAt}</p> */}
                    {donations.map(donation =>
                    <div>
                    <p>You donated ${donation.donationamount} on {donation.createdAt}</p>
                    </div>
                    )}
                </div>    
            </div>
        )
    }

