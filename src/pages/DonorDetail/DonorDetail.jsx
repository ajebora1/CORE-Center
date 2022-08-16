import { useParams } from "react-router-dom";
import * as donorsAPI from '../../utilities/donors-api'
import * as donationsAPI from '../../utilities/donations-api'
import { useState, useEffect } from "react"
import DonationDetail  from "../DonationDetail/DonationDetail";

export default function DonorDetail() {
   const {donorID} = useParams()
   const [donations, setDonations] = useState([])
    const [donor1, setDonor1] = useState({})

     
    useEffect(function () {
        async function fetchDonor() {
          const userDonor = await donorsAPI.getOneDonor(donorID);
          setDonor1(userDonor);
        }
        fetchDonor(donorID);

        async function fetchDonations(id) {
          const userDonations = await donationsAPI.getDonationsByDonorId(id)
          console.log(userDonations)
          setDonations(userDonations)
          }
          fetchDonations(donorID)
      }, []);


    return (
      <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className="w-full rounded-full" src={donor1.picture} />
            </div>
             <div class="p-6 flex flex-col justify-start">
                    <h1 className="font-bold text-xl mb-2 text-purple-900">My Story</h1>
                    <p className="text-xl mb-2">{donor1.mystory}</p>
                    {/* <p>{donation.donor.donationamount}</p> */}
                    {/* <p>{donation.recipient.user.name}</p> */}
            </div>
            <DonationDetail donations={donations}/>
            </div>
            </div>
            
        )
    }
