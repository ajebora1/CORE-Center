import PayForwardForm from "../../components/PayForwardForm/PayForwardForm";
import PayForwardCard from "../../pages/PayForwardCard/PayForwardCard";
import DonorForm from "../../components/DonorForm/DonorForm";

export default function PayForwardList({user}) {
    return (
        <div className="container">
        <h1 className="PayForwardList">This is PayForwardList</h1>
        <PayForwardForm user={user}/>
        <hr />
        <PayForwardCard user={user}/>
        <hr />
        <DonorForm user={user}/>
        </div>
    )
}