import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState(""); //everything inside UseState is the initial value
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [confirmError, setConfirmError] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstNameError && !lastNameError  && !emailError && !passwordError && !confirmError) {
            const newUser = { firstName, lastName, email, password, confirm };
            console.log(newUser);
            setHasBeenSubmitted(true);
        } else{
            alert("Error")
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be 2 or more characters.");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be 2 or more characters.");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters.")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be more than 8 characters.")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmError("Passwords must match.")
        } else {
            setConfirmError("");
        }
    }

    return (
        <div>
            {
                hasBeenSubmitted ?
                    <h1> Thank for you submitting your form!</h1> :
                    <h1> Please fill in the form.</h1>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label> First Name</label>
                    <input name="firstName" type="text" onChange={handleFirstName} value={firstName} />
                    {firstNameError && <p>{firstNameError}</p>}
                </div>
                <div>
                    <label> Last Name</label>
                    <input name="lastName" type="text" onChange={handleLastName} value={lastName} />
                    {lastNameError && <p>{lastNameError}</p>}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input name="email" type="text" onChange={handleEmail} value={email} />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" onChange={handlePassword} value={password} />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirm" type="password" onChange={handleConfirm} value={confirm} />
                    {confirmError && <p>{confirmError}</p>}
                </div>
                <button disabled={firstNameError || lastNameError || emailError || passwordError || confirmError}>Submit</button>
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