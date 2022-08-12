import PayForwards from "../PayForwards/PayForwards";


export default function PayForwardList({user}) {
    return (
        <div className="container">
        <h1 className="PayForwardList">This is PayForwardList</h1>
        <PayForwards user={user}/>
        </div>
    )
}