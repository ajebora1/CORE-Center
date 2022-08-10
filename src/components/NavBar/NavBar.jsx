import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

      return (
        <nav className='navbar bg-dark container'>
           <h4><Link className='link' to="/profile">Profile</Link></h4>
            <h4><Link className='link' to="/donors">Donors List</Link></h4>
            <h4><Link className='link' to="/recipients">Recipients List</Link></h4>
            <h4><Link className='link' to="/payforward">PayForward List</Link></h4>
            <span className='link'>Welcome, {user.name}</span>
            <h4><Link className='link' to="" onClick={handleLogOut}>Log Out</Link></h4>
        </nav>
    )
}

//     return (
//         <nav className='navbar bg-dark container'>
//             <Link to="/profile">Profile</Link>
//             &nbsp;&nbsp; | &nbsp;
//             <Link to="/donors">Donors List</Link>
//             &nbsp;&nbsp; | &nbsp;
//             <Link to="/recipients">Recipients List</Link>
//             &nbsp;&nbsp; | &nbsp;
//             <Link to="/payforward">PayForward List</Link>
//             &nbsp; | &nbsp;
//             <span>Welcome, {user.name}</span>
//             &nbsp; | &nbsp;
//             &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
//         </nav>
//     )
// }