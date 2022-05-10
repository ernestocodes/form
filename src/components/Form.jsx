import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState(""); //everything inside UseState is the initial value
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newUser ={firstName, lastName, email, password, confirm};
        console.log(newUser)
        setHasBeenSubmitted(true)
    }

    return (
        <div>
            {
                hasBeenSubmitted?
                <h1> Thank for you submitting your form!</h1> :
                <h1> Please fill in the form.</h1>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label> First Name</label>
                    <input name="firstName" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label> Last Name</label>
                    <input name="lastName" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirm" type="password" onChange={(e) => setConfirm(e.target.value)} value={confirm}/>
                </div>
                <button>Submit</button>
            </form>

            <div>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    )
}

export default Form