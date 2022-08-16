import { Component, useState } from "react";
import {signUp} from "../../utilities/users-service";

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        usertype: 'Recipient',
        error: ''
      };

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
    })
  }

   handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state}
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData)
      this.props.setUser(user)
      // console.log(user)
    } catch {
      this.setState({error: 'Sign Up Failed - Try Again'})
    }
}

render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
    <section className="h-screen">
    <div className="container px-2 py-1 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
       {/* <img  className="rounded-full" src="https://i.imgur.com/rdPS8TH.jpg" style={{ width:"8rem", height:"8rem", borderRadius:"8rem" }}/>  */}
       <img src="https://i.imgur.com/zxsG12G.jpg"/>
        <div class="underline decoration-wavy text-purple"> We Can Change One And Get A Ripple Effect</div>
        <img
          src="https://i.imgur.com/53HIvsQ.jpg"
          className="rounded-full"
        />
      </div>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
      {/* <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
      </h1> */}
        <form className="mt-6" autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">Name</label>
          <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">Email</label>
          <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="mb-2">
          <label className="form-label">Password</label>
          <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">Confirm</label>
          <input className="block w-full px-20 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"   type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          </div>
          <div className="mb-2">
          </div>
           <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit" disabled={disable}>SIGN UP</button>
        </form>     
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    </div>
    </div>
  </section>
  </div>
  );
}

}
