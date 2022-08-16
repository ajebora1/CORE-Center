// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
  <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
  <section className="h-screen">
    <div className="container px-2 py-1 h-fulll">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img src="https://i.imgur.com/zxsG12G.jpg" alt="home1"/> 
        <div class="underline decoration-wavy text-center font-bold text-xl mb-2 text-purple-900"> We Can Change One And Get A Ripple Effect</div>
        <img
          src="https://i.imgur.com/53HIvsQ.jpg" alt="home"
          className="rounded-full"
        />
      </div>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
       <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <form className="mt-6" autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">Email</label>
          <input className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
          <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">Password</label>
          <input className="block w-full px-12 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
    </div>
    </div>
   </section>
   </div>
  );
}

