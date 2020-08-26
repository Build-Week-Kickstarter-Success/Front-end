import React, {useState, useEffect} from 'react'
import "../styles/registration.css";
import * as Yup from "yup";
import {motion} from 'framer-motion'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Registration() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const {push} = useHistory();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username:"",
        email: "",
        password: "",

    });

    const [error, setError] = useState({
        first_name: "",
        last_name: "",
        username:"",
        email: "",
        password: ""

    })

    const formSchema = Yup.object().shape({
        email: Yup.string().email("Must be a valid email address")
        .required("Must include an email address"),
        first_name: Yup.string().required("Please enter your First Name"),
        last_name: Yup.string().required("Please enter your Last Name"),
        username: Yup.string().required("Please enter a Username").min(3,"Please enter a miniumum of 3 characters"),
        password: Yup.string().required("Please enter in a password").min(6, "Please enter a password with a minimum of 6 characters"),

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
            <div className="container"> 
                    <form onSubmit={formSubmit}>
                    <motion.h2 animate={{color:"rgb(138, 43, 226)", rotateZ:360}}>Register</motion.h2>
                        <br></br>
                        <label>
                            
                            <input type="text" name="first_name" placeholder="First Name" onChange={formChange} value={form.first_name}></input>
                            {error.first_name.length > 0 ? <p>{error.first_name}</p> :null}
                        </label>
                        <label>
                           
                            <input type="text" placeholder="Last Name"name="last_name"
                            onChange={formChange} value={form.lastname}/>
                            {error.last_name.length > 0 ? <p>{error.last_name}</p>:null}
                        </label>
                        <label htmlFor='email'>
                            
                            <input type="text" id="email" name="email" placeholder="Email"
                            onChange={formChange} value={form.email}></input>
                            {error.email.length > 0 ? <p>{error.email}</p> :null}
                        </label>
                        <label>
                           
                            <input type="text" name="username"
                            placeholder="Username" 
                            onChange={formChange} value={form.username}/>
                            {error.username.length > 3 ? <p>{error.username}</p>:null}
                            
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Password" onChange={formChange} value={form.password}/>
                            {error.password.length > 6 ? <p>{error.password}</p>:null}
                        </label>
                        <button disabled={buttonDisabled}type="submit">Register</button>

                    </form>
            </div>
        </div>
    )
}

export default Registration
