import { Component, useState } from "react";
import {signUp} from "../../utilities/users-service";


// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   })

//   function handleChange(evt) {
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value,
//       error: ''
//     })
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     alert(JSON.stringify(formData));
//   }

//   const disable = formData.password !== formData.confirm;

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           <label>Confirm</label>
//           <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//           <button type="submit" disabled={disable}>SIGN UP</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{formData.error}</p>
//     </div>
//   );
// }

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
    <div>
      <div>
        <form className="row g-3" autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="col-md-6">
          <label className="col-sm-2 col-form-label">Name</label>
          <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className="col-md-6">
          <label className="col-sm-2 col-form-label">Email</label>
          <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="col-md-6">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className="col-md-6">
          <label className="col-sm-2 col-form-label">Confirm</label>
          <input className="form-control"  type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          </div>
          <div className="col-md-6">
          {/* <label className="col-sm-2 col-form-label">User Type</label>
          <select className="form-select" id="inlineFormSelectPref" value={this.state.usertype} name="usertype" onChange={this.handleChange}>
          <option value="Donor">Donor</option>
          <option value="Recipient">Recipient</option>
          <option value="PayForward">PayForward</option>
          </select> */}
          </div>
           <button className="btn btn-primary" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}

}

