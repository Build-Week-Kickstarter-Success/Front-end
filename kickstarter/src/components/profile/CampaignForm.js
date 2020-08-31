import React, { useState } from "react";
import { connect } from "react-redux";
import { postCampaigns, updateCampaigns } from "../../actions/actions";
import { useHistory } from 'react-router-dom';
import { axiosAuth } from "../utils/axiosAuth";
import axios from "axios";

const CampaignsForm = (props) => {
    const {push} = useHistory();
    console.log(localStorage.getItem("token"))

  const [active, setActive] = useState(false);
  
    const [campaign, setCampaign] = useState ({
        name: '',
        video: '',
        desc: '',
        disable_communication: "false",
        keywords: '',
        country: 'US',
        currency: 'Dollar',
        goal: 1200,
        campaign_length: 60,
        user_id: localStorage.getItem("user_id") * 1,
    })

    const inputHandler = e => {
        if(e.target.type === 'checkbox' && active === false){
            setActive(true);
            setCampaign({
                ...campaign,
                disable_communication: 1,
            })
        }else if(e.target.type === 'checkbox' && active === true){
            setActive(false);
            setCampaign({
                ...campaign,
                disable_communication: 0
            })
        }else{
            setCampaign({
                ...campaign,
                [e.target.name]: e.target.value
            })
        }
    }
    console.log(campaign)
    const submitHandler = e => {
        e.preventDefault();
        
        axios
        .post('https://cors-anywhere.herokuapp.com/https://karen-kickstarter.herokuapp.com/campaign',campaign)
        .then(res =>{
            console.log('ds response', res.data)
            localStorage.setItem("success", res.data.output)
            })
        .catch(err => {
            console.log('failed to post to DS', err.message)
        })

        console.log('state being sent', campaign)
        axiosAuth()
            .post('campaign', campaign)
            
            .then(res => {
                
                console.log('response after posting campaign: ', res)
                push('/profile')
            })
            .catch(err => {
                console.log('failed to post campaign: ', err.message)
            })
    }
    return(
        <div>
            <form id = "campaignForm" onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    labe="name"
                    placeholder="Enter Name"
                    value = {props.name}
                    onChange = {inputHandler}
                    className="input"/>

                <label htmlFor="video">Video</label>
                <input
                    type="text"
                    name="video"
                    labe="video"
                    placeholder="campaign video"
                    value = {props.video}
                    onChange = {inputHandler}
                    className="input"/>

                <label htmlFor="description">description</label>
                <input
                    type="text"
                    name="desc"
                    labe="desc"
                    placeholder="Campaign description"
                    value = {props.desc}
                    onChange = {inputHandler}
                    className="input"/>

                {/* <label htmlFor="disable_communication">disable_communication</label>
                                <input
                                    type="checkbox"
                                    name="disable_communication"
                                    labe="disable_communication"
                                    placeholder="disable_communication"
                                    value = {props.disable_communication}
                                    onChange = {inputHandler}
                                    className="input"/> */}

                <label htmlFor="country">country</label>
                                <input
                                    type="dropdown"
                                    name="country"
                                    labe="country"
                                    placeholder="country"
                                    value = {props.country}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="currency">currency</label>
                                <input
                                    type="dropdown"
                                    name="currency"
                                    labe="currency"
                                    placeholder="currency"
                                    value = {props.currency}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="goal">goal</label>
                                <input
                                    type="text"
                                    name="goal"
                                    labe="goal"
                                    placeholder="goal"
                                    value = {props.goal}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="length">length</label>
                                <input
                                    type="text"
                                    name="campaign_length"
                                    labe="length"
                                    placeholder="Campaign length in months"
                                    value = {props.campaign_length}
                                    onChange = {inputHandler}
                                    className="input"/>
                

                    <button>Submit Campaign</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        campaigns: state.campaigns,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postCampaigns})(CampaignsForm)