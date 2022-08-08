import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react"

export default function AuthPage({setUser}) {
    const [toggleForm, setToggleForm] = useState(false)

    function handleClick(evt) {
        setToggleForm(!toggleForm)

    }

    return (
        <main>
        <h1>AuthPage</h1>
        <button className="btn btn-primary" onClick={handleClick}>
            { toggleForm ? "Log In Form" : "Sign Up Form" }
        </button>
         {   
            toggleForm ?
            < SignUpForm setUser={setUser} />
             :
            < LoginForm setUser={setUser} />
         }
        </main>
    )
}