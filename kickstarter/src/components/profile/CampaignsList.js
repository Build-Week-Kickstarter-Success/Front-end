import React, { useEffect } from "react";
import CampaignCard from "../profile/CampaignCard";
import { connect } from "react-redux";
import { fetchCampaigns } from "../../actions/actions";


const CampaignsList = (props) => {
    console.log(props)
    useEffect(() => {
        props.fetchCampaigns()
    }, [])
  return(
      <div>
          {console.log(props,"campaigns list")}
          {props.campaigns && props.campaigns.map(campaign => (<CampaignCard campaign={campaign}/>))}
      </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        campaigns: state.campaigns,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchCampaigns})(CampaignsList)