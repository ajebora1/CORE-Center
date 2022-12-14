import PayForwards from "../PayForwards/PayForwards";


export default function PayForwardList({user}) {
    return (
        <div className="container">
        <h1 className="text-center font-bold text-xl mb-2 text-purple-900">Meet The PayForwarders</h1>
        <PayForwards user={user}/>
        </div>
    )
}