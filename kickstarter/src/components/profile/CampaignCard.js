import React from "react";

const CampaignsCard = (props) => {
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
        </div>
    )
}
export default CampaignsCard