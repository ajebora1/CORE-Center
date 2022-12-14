import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({user, setUser}) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

      return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
           <h4><Link className='link' to="/profile">Profile</Link></h4>
            <h4><Link className='link' to="/donors">Donors List</Link></h4>
            <h4><Link className='link' to="/recipients">Recipients List</Link></h4>
            <h4><Link className='link' to="/payforward">PayForward List</Link></h4> 
            <span className='link'>Welcome, {user.name}</span>
            <h4><Link className='link' to="" onClick={handleLogOut}>Log Out</Link></h4>
        </nav>
    )
}
