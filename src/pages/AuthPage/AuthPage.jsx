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
        <h1 className="text-center">AuthPage</h1>
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleClick}>
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