import { useEffect, useState } from 'react';
import { getAll } from '../../utilities/donors-api';

export default function DonorCard({user}) {
    const [users, setUsers] = useState([{
        name: '',
        email: '',
        usertype: '',
        groupmembership: '',
    }])

    useEffect(() => {
        fetch("/donors").then(res => {
            if(res.ok) {
                return res.json()

            }
        }).then(jsonRes => getAll(jsonRes));
    })

    return (

        <div className="container">
            <h1>Donors</h1>
            {users.map(user =>
            <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.usertype}</p>
                <p>{user.groupmembership}</p>
            </div>    
            )}
        </div>

    )
}