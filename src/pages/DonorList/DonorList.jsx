import Donors from '../../pages/Donors/Donors'
import DonationCard from '../DonationCard/DonationCard'

export default function DonorList({user}) {
    return (
    <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <div className="container">
            <h1 className="text-center font-bold text-xl mb-2 text-purple-900">Donors List</h1>
            <Donors  user={user}/>
        </div>
    </div>
 
    )
}