import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Profile from '../Profile/Profile';
import DonorList from '../DonorList/DonorList';
import DonorDetail from '../DonorDetail/DonorDetail';
import RecipientList from '../RecipientList/RecipientList';
import RecipientDetail from '../RecipientDetail/RecipientDetail'
import PayForwardList from '../PayForwardList/PayForwardList';
import PayForwardDetail from '../PayForwardDetail/PayForwardDetail';
import FormPages from '../FormPages/FormPages';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [ user, setUser ] = useState(getUser());
  return (
    <main className="App">
      {
      user ? 
    <>
      <NavBar  user={user} setUser={setUser}/>
       <Routes>
         <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
         <Route path="/donors/:donorName" element={<DonorDetail />} />
         <Route path="/recipient/:recipientName" element={<RecipientDetail />} />
         <Route path="/payforward/:payforwardName" element={<PayForwardDetail />} />
         <Route path="/donors" element={<DonorList user={user}/>} />
         <Route path="/recipients" element={<RecipientList user={user}/>} />
         <Route path="/payforward" element={<PayForwardList user={user}/>} />
         <Route path="/formpages" element={<FormPages user={user} setUser={setUser}/>} />
       </Routes>
    </>
        : 
        <AuthPage setUser={setUser} />
        }
    </main>
  );
}

