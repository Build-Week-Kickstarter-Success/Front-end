import React from "react";
import { connect } from 'react-redux';
import { deleteCampaigns } from '../../actions/actions';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const CampaignsCard = (props) => {
    const { push } = useHistory();
    const deleteCampaign = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`campaign/${props.campaign.id}`)
            .then(res => {
                console.log('delete campaign res: ', res)
            })
            .catch(err => {
                console.log('failed to delete: ', err.message)
            })
        axiosWithAuth()
            .get('campaign')
            .then(res => {
                console.log(res.data)
                push('/profile')
            })
            .catch(err => {
                console.log('failed to get campaign after deleting campaign: ', err.message)
            })
    }
    return(
        <div>
            <h2>{props.campaign.name}</h2>
            <h3>{props.campaign.video}</h3>
            <h3>{props.campaign.description}</h3>
            <h3>{props.campaign.disable_communication}</h3>
            <h3>{props.campaign.country}</h3>
            <h3>{props.campaign.currency}</h3>
            <h3>{props.campaign.goal}</h3>
            <h3>{props.campaign.length}</h3>
            <h3>{props.output}</h3>
            <button onClick={() => {push(`/campaign/edit/${props.campaign.id}`)}}>Edit</button>
            <button onClick={deleteCampaign}>Delete</button>
        </div>
    )
}

const mapPropsToState = state => {
    return {
        campaigns: state.campaigns
    }
}
export default connect(
    mapPropsToState,
    {
        deleteCampaigns
    }
)(CampaignsCard);