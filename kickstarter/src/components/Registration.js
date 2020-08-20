import React from 'react'

function Registration() {

    return (
        <div>
            <form>
                <h2>Register</h2>
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
