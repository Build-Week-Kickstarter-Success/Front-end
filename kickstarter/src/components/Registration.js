import React, {useState, useEffect} from 'react'
import "../styles/registration.css";
import * as Yup from "yup";

function Registration() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: ""

    });

    const [error, setError] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: ""

    })

    const formSchema = Yup.object().shape({
        email: Yup.string().email("Must be a valid email address")
        .required("Must include an email address"),
        firstname: Yup.string().required("Please enter your First Name"),
        lastname: Yup.string().required("Please enter your Last Name"),
        username: Yup.string().min(3,"Please enter a miniumum of 3 characters").required("Please enter a Username"),
        password: Yup.string().min(6, "Please enter a password with a minimum of 6 characters").required("Please enter in a password")

    })

    const formChange = event => {
        setForm({
            ...form, [event.target.name] : event.target.value
        })
    }

    const validateChange = event => {

    }

    useEffect(() => {
        formSchema.isValid(form).then(isValid => {
            setButtonDisabled(!isValid)
        })
    
    }, [form])

    const formSubmit = event => {
        event.preventDefault();

    }

    

    return (
        <div>
            <div className="maincontainer">
                <h2>Register</h2>
                <em>Please fill out form to register</em>
            </div>
            <div className="container"> 
                <div className="formcontainer">
                    <form onSubmit={formSubmit}>
                        <br></br>
                        <label>
                            First Name
                            <input type="text" name="firstname" onChange={formChange} value={form.firstname}/>
                        </label>
                        <label>
                            Last Name
                            <input type="text" name="lastname"
                            onChange={formChange} value={form.lastname}/>
                        </label>
                        <label>
                            Email
                            <input type="text" name="email"
                            onChange={formChange} value={form.email}/>
                        </label>
                        <label>
                            Username
                            <input type="text" name="username" 
                            onChange={formChange} value={form.username}/>
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" onChange={formChange} value={form.password}/>
                        </label>
                        <button disabled={buttonDisabled}type="submit">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
