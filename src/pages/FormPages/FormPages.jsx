import PayForwardForm from "../../components/PayForwardForm/PayForwardForm";
import DonorForm from "../../components/DonorForm/DonorForm";
import RecipientForm from "../../components/RecipientForm/RecipientForm";
import CommentForm from "../../components/CommentForm/CommentForm";
import DonationCard from "../../pages/DonationCard/DonationCard"
import DonationDetail from "../../pages/DonationDetail/DonationDetail";

export default function FormPages({user, donor, payforward}) {
    return (
        <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <div className="container">
        <h1 className="text-center text-purple-900">Update Forms</h1>
        <hr />
        <DonorForm user={user}/>
        <hr />
        <PayForwardForm user={user}/>
        <hr />
        <RecipientForm user={user} donor={donor} payforward={payforward}/>
        <hr />
        <CommentForm user={user}/>
        <hr />
        </div>
        </div>
    )
}