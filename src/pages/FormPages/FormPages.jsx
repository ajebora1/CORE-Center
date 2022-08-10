import PayForwardForm from "../../components/PayForwardForm/PayForwardForm";
import DonorForm from "../../components/DonorForm/DonorForm";
import RecipientForm from "../../components/RecipientForm/RecipientForm";
import CommentForm from "../../components/CommentForm/CommentForm";

export default function FormPages({user}) {
    return (
        <div className="container">
        <h1 className="Formpages">Update Forms</h1>
        <hr />
        <DonorForm user={user}/>
        <hr />
        <PayForwardForm user={user}/>
        <hr />
        <RecipientForm user={user}/>
        <hr />
        <CommentForm user={user}/>
        </div>
    )
}