import { useEffect, useState } from 'react';
import { getAll } from '../../utilities/donors-api';

export default function DonorCard({user}) {
    const [users, setUsers] = useState([{
        name: '',
        email: '',
        usertype: '',
        groupmembership: '',
    }])

    useEffect(function () {
        async function fetchComments() {
          const userComment = await commentsAPI.getAllDonors();
          setComments(userComment);
        }
        fetchComments();
      }, []);
    getAllDonors

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