import React, {useState, useEffect} from 'react'
import "../styles/registration.css";
import * as Yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Registration() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const {push} = useHistory();
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: "",

    });

    const [error, setError] = useState({
        firstname: "",
        lastname: "",
        username:"",
        email: "",
        password: "",
        

    })

    const formSchema = Yup.object().shape({
        email: Yup.string().email("Must be a valid email address")
        .required("Must include an email address"),
        firstname: Yup.string().required("Please enter your First Name"),
        lastname: Yup.string().required("Please enter your Last Name"),
        username: Yup.string().required("Please enter a Username").min(3,"Please enter a miniumum of 3 characters"),
        password: Yup.string().required("Please enter in a password").min(6, "Please enter a password with a minimum of 6 characters"),
        terms: Yup.boolean().oneOf([true], "Please agree to terms")

    })

    const formChange = e =>{
        e.persist();


        const newFormData ={
            ...form,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e)
        setForm(newFormData)
    }
    

    const validateChange = e => {
        Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
        .then((value) => {
            console.log(value)
            setError({
                ...error,
                [e.target.name]: ""
            });
        })
        .catch((err) => {
            console.log(err)
            setError({
                ...error,
                [e.target.name]: err.errors[0]
            })
        })


    }

    useEffect(() => {
        formSchema.isValid(form).then(isValid => {
            setButtonDisabled(!isValid)
        })
    
    }, [form])

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/register', form)
            .then(res => {
                push('/login')
            })
            .catch(err => {
                console.log('Something went wrong: ', err.message);
            })
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
                            <input type="text" name="firstname" onChange={formChange} value={form.firstname}></input>
                            {error.firstname.length > 0 ? <p>{error.firstname}</p> :null}
                        </label>
                        <label>
                            Last Name
                            <input type="text" name="lastname"
                            onChange={formChange} value={form.lastname}/>
                            {error.lastname.length > 0 ? <p>{error.lastname}</p>:null}
                        </label>
                        <label htmlFor='email'>
                            Email
                            <input type="text" id="email" name="email"
                            onChange={formChange} value={form.email}></input>
                            {error.email.length > 0 ? <p>{error.email}</p> :null}
                        </label>
                        <label>
                            Username
                            <input type="text" name="username" 
                            onChange={formChange} value={form.username}/>
                            {error.username.length > 3 ? <p>{error.username}</p>:null}
                            
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" onChange={formChange} value={form.password}/>
                            {error.password.length > 6 ? <p>{error.password}</p>:null}
                        </label>
                        <label htmlFor="terms">Terms of Service
                            <input type="checkbox" id="terms"/>
                        </label>  
                        <button disabled={buttonDisabled}type="submit">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
