import React, {useState, useEffect} from 'react'
import "../styles/registration.css";
import * as Yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosAuth } from './utils/axiosAuth';

function Registration() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const {push} = useHistory();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username:"",
        email: "",
        password: "",
        avatar: "",
        role: 1,
        // terms: ""

    });

    const [error, setError] = useState({
        first_name: "",
        last_name: "",
        username:"",
        email: "",
        password: "",
        avatar: "",
        role: "",
        // terms: ""

    })

    const formSchema = Yup.object().shape({
        email: Yup.string().email("Must be a valid email address")
        .required("Must include an email address"),
        first_name: Yup.string().required("Please enter your First Name"),
        last_name: Yup.string().required("Please enter your Last Name"),
        username: Yup.string().required("Please enter a Username").min(3,"Please enter a miniumum of 3 characters"),
        password: Yup.string().required("Please enter in a password").min(6, "Please enter a password with a minimum of 6 characters"),
        avatar: Yup.string().required("Please enter an avatar").min(3,"Please enter a miniumum of 3 characters"),
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
        axiosAuth()
            .post('https://bw1kickstartersuccess.herokuapp.com/api/auth/register', form)
            .then(res => {
                console.log(res)
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
                            <input type="text" name="first_name" onChange={formChange} value={form.first_name}></input>
                            {error.first_name.length > 0 ? <p>{error.first_name}</p> :null}
                        </label>
                        <label>
                            Last Name
                            <input type="text" name="last_name"
                            onChange={formChange} value={form.last_name}/>
                            {error.last_name.length > 0 ? <p>{error.last_name}</p>:null}
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
                        <label>
                            Avatar
                            <input type="text" name="avatar" 
                            onChange={formChange} value={form.avatar}/>
                            {error.username.length > 3 ? <p>{error.username}</p>:null}
                            
                        </label>
                        {/* <label htmlFor="terms">Terms of Service
                            <input type="checkbox" id="terms" name='terms'
                            value={form.terms}  ></input>
                            {error.terms.length > 0 ? <p>{error.terms}</p> :null}
                        </label>   */}
                        <button disabled={buttonDisabled}type="submit">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
