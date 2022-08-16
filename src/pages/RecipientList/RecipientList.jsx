

import Recipients from "../../pages/Recipients/Recipients"

export default function RecipientList() {
    return (
    <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <div className="container">
        <h1 className="text-center font-bold text-xl mb-2 text-purple-900">This is RecipientList</h1>
        <Recipients />
        <hr />     
        </div>
     </div>
    )
}