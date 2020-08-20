import React from 'react'
import "../styles/registration.css";

function Registration() {

    return (
        <div className="container">
            <h2>Register</h2>
            <em>Please fill out form to register</em>
            <form>
                <br></br>
                <label>
                    First Name
                    <input type="text" name="firstname"/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastname"/>
                </label>
                <label>
                    Email
                    <input type="text" name="email"/>
                </label>
                <label>
                    Username
                    <input type="text" name="username" />
                </label>
                <label>
                    Password
                    <input type="password" name="password"/>
                </label>

            </form>
            
        </div>
    )
}

export default Registration
