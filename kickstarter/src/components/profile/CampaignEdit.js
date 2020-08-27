import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { updateCampaigns } from '../../actions/actions';

const initialValue = {
        name: '',
        video: '',
        desc: '',
        disable_communication: false,
        country: 'US',
        currency: 'Dollar',
        goal: 1200,
        campaign_length: 60,
}
const CampaignEdit = props => {
    const [campaign, setCampaign] = useState(initialValue);
    const { id } = useParams();
    const { push } = useHistory();
    useEffect(() => {
        axiosWithAuth()
            .get(`campaign`)
            .then(res => {
                console.log(res)
                const filteredArray = res.data.filter(campaign => campaign.id == id)
                setCampaign(filteredArray[0]);
            })
            .catch(err => {
                console.log('There was an error retrieving campaign: ', err.message);
            })
    }, [id]) 

    const inputHandler = (ev) => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === "price") {
          value = parseInt(value, 10);
        }
        console.log(campaign)
        setCampaign({
          ...campaign,
          [ev.target.name]: value
        });
      };

      const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`campaign/${id}`, campaign)
            .then(res => {
                push('/campaign-list')
            })
            .catch(err => {
                console.log('Could not update campaign: ', err.message)
            })        
    }
    return(
        <div>
            <form id = "edit-campaign-form" onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id='name'
                    name="name"
                    placeholder="Enter Name"
                    value = {campaign.name}
                    onChange = {inputHandler}
                    className="input"/>

                <label htmlFor="video">Video</label>
                <input
                    type="text"
                    name="video"
                    labe="video"
                    placeholder="Campaign video"
                    value = {campaign.video}
                    onChange = {inputHandler}
                    className="input"/>
                <label htmlFor="description">description</label>
                <input
                    type="text"
                    name="desc"
                    label="desc"
                    placeholder="Campaign description"
                    value = {campaign.desc}
                    onChange = {inputHandler}
                    className="input"/>

                <label htmlFor="disable_communication">disable_communication</label>
                                <input
                                    type="checkbox"
                                    name="disable_communication"
                                    labe="disable_communication"
                                    placeholder="disable_communication"
                                    value = {campaign.disable_communication}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="country">country</label>
                                <input
                                    type="dropdown"
                                    name="country"
                                    labe="country"
                                    placeholder="country"
                                    value = {campaign.country}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="currency">currency</label>
                                <input
                                    type="dropdown"
                                    name="currency"
                                    labe="currency"
                                    placeholder="currency"
                                    value = {campaign.currency}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="goal">goal</label>
                                <input
                                    type="text"
                                    name="goal"
                                    labe="goal"
                                    placeholder="goal"
                                    value = {campaign.goal}
                                    onChange = {inputHandler}
                                    className="input"/>

                <label htmlFor="campaign_length">length</label>
                                <input
                                    type="text"
                                    name="campaign_length"
                                    labe="length"
                                    placeholder="Campaign length in months"
                                    value = {campaign.campaign_length}
                                    onChange = {inputHandler}
                                    className="input"/>

                    <button>Edit Campaign</button>
            </form>
        </div>

    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    {
        updateCampaigns
    }
)(CampaignEdit);