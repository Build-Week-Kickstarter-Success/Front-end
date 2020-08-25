import React, { useState, useEffect } from "react";
import { axiosAuth } from "../utils/axiosAuth";
import {Link} from "react-router-dom";
import axios from "axios";

import CampaignCard from "./CampaignCard";


const ProfilePage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosAuth()
        .get("users")
        .then( res => {
            console.log(res)
        setUser(res.data)})
        .catch( err => console.log(err))
    
      }, [])

   return(
       <div>
           <h1>profile</h1>
           <Link to ="/form"><button>Add Campaign</button></Link>
       </div>
   )
}

export default ProfilePage;