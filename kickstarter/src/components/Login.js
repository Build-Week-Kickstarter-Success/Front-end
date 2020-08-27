import React, {useState} from 'react'
import "../styles/login.css";
import * as Yup from "yup";
import {useInput} from "./Customhooks/Logincustomhook"
import {motion} from 'framer-motion'
import { axiosAuth } from './utils/axiosAuth';
import { useHistory } from 'react-router-dom';

function Login() {
    // const [form, setForm] = useState({
    //     username:"",
    //     password: ""
    // });

    const [username, setUsername, handleUsername] = useInput("")
    const [password, setPassword, handlePassword] = useInput("")
    const {push} = useHistory();
    const credentials = {
        username: username,
        password: password
    }
    const [error, setError] = useState({
        username:"",
        password: "",

    })

    const formSchema = Yup.object().shape({
        username: Yup.string().required("Please enter a Username").min(3,"Please enter a miniumum of 3 characters"),
        password: Yup.string().required("Please enter in a password").min(6, "Please enter a password with a minimum of 6 characters")
    })

    const formChange = e =>{
        e.persist();


        // const newFormData ={
        //     ...form,
        //     [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        // }
        const newFormData ={
                ...username,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}
        validateChange(e)
        //setForm(newFormData)
        setUsername(newFormData)
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

    const formSubmit = event => {
        event.preventDefault();
        axiosAuth()
            .post('auth/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.id);
                push('profile')
                
            })
            .catch(err => {
                console.log('Failed Login: ', err.message)
            })
    }

    return (
        <div>
                <div className="container">
                    <form onSubmit={formSubmit}>
                    <motion.h2 animate={{color:"red",rotateZ:360}}>Login</motion.h2>
                        <br></br>
                        <label>
                            <input type="text" name="username" placeholder="Username" 
                            onChange={e => handleUsername(e.target.value)} value={username}/>
                            {error.username.length > 3 ? <p>{error.username}</p>:null}  
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Password" onChange={e => handlePassword(e.target.value)} value={password}/>
                            {error.password.length > 6 ? <p>{error.password}</p>:null}
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
        </div>
    )
}

export default Login