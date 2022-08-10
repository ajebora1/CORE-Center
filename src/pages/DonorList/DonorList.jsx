import Donors from '../../pages/Donors/Donors'
import DonorForm from '../../components/DonorForm/DonorForm'

export default function DonorList({user}) {
    return (
        <div className="container">
            <h1>Donors List</h1>
            <Donors  user={user}/>
            <hr />
            <DonorForm user={user}/>
        </div>
 
    )
}