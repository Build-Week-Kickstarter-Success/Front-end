import axios from "axios";
import { useHistory } from 'react-router-dom';
import { axiosAuth } from "../components/utils/axiosAuth";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";



export const fetchCampaigns = () => (dispatch) => {
    dispatch({type: FETCH_DATA})
    axios
        .get("https://bw1kickstartersuccess.herokuapp.com/api/campaign")
        .then( res => {
             console.log("Fetch success", res.data);
        dispatch ({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_FAIL, payload: err})
    })
}

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postCampaigns = (campaign) => (dispatch) => {
    
    dispatch({type: POST_DATA})
    console.log(campaign)    
    axiosAuth()
        .post("campaign", campaign)
        .then(  res => {
             console.log("Post success", res.data) 
                useHistory('/profile')
        dispatch ({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: POST_FAIL, payload: err})
    })
}

export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

export const updateCampaigns = (campaign, campaignToEdit) => (dispatch) => {
    dispatch({type: EDIT_DATA})
    console.log(campaign)    
    axios
        .put("https://bw1kickstartersuccess.herokuapp.com/api/campaign", campaignToEdit)
        .then( res => {
             console.log("Edit success", res.data)
        dispatch ({type: EDIT_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: EDIT_FAIL, payload: err})
    })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

export const deleteCampaigns = (campaign, campaignToEdit) => (dispatch) => {
    dispatch({type: DELETE_DATA})
    console.log(campaign)    
    axios
        .delete("https://bw1kickstartersuccess.herokuapp.com/api/campaign", campaign)
        .then( res => {
            //  console.log("Delete success", res.data),
             updateCampaigns(campaign.filter((item) => item.id !== campaignToEdit.id))
        dispatch ({type: DELETE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: DELETE_FAIL, payload: err})
    })
}