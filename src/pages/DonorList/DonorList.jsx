import Donors from '../../pages/Donors/Donors'

export default function DonorList({user}) {
    return (
        <div className="container">
            <h1>Donors List</h1>
            <Donors  user={user}/>
        </div>
 
    )
}