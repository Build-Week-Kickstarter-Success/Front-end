import React from 'react'
import "../styles/registration.css";
import * as Yup from "yup";

function Registration() {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: ""

    });

    const formSchema = Yup.object().shape({
        email: Yup.string().email("Must be a valid email address")
        .required("Must include an email address"),
        firstname: Yup.string().required("Please enter your First Name"),
        lastname: Yup.string().required("Please enter your Last Name"),
        username: Yup.string().min(3,"Please enter a miniumum of 3 characters").required("Please enter a Username"),
        password: Yup.string().min(6, "Please enter a password with a minimum of 6 characters").required("Please enter in a password")

    })

    return (
        <div>
            <div className="maincontainer">
                <h2>Register</h2>
                <em>Please fill out form to register</em>
            </div>
            <div className="container"> 
                <div className="formcontainer">
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
                        <button type="submit">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
