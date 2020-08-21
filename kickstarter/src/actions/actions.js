import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchCampaigns = () => (dispatch) => {
    dispatch({type: FETCH_DATA})
    axios
        .get("")
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

export const postCampaigns = () => (dispatch) => {
    dispatch({type: POST_DATA})
    console.log(campaign)    
    axios
        .post("", campaign)
        .then( res => {
             console.log("Post success", res.data)
        dispatch ({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: POST_FAIL, payload: err})
    })
}

export const EDIT_DATA = "POST_DATA";
export const EDIT_SUCCESS = "POST_SUCCESS";
export const EDIT_FAIL = "POST_FAIL";

export const updateCampaigns = () => (dispatch) => {
    dispatch({type: EDIT_DATA})
    console.log(campaign)    
    axios
        .put("", campaignToEdit)
        .then( res => {
             console.log("Edit success", res.data)
        dispatch ({type: EDIT_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: EDIT_FAIL, payload: err})
    })
}

export const DELETE_DATA = "POST_DATA";
export const DELETE_SUCCESS = "POST_SUCCESS";
export const DELETE_FAIL = "POST_FAIL";

export const deleteCampaigns = () => (dispatch) => {
    dispatch({type: DELETE_DATA})
    console.log(campaign)    
    axios
        .delete("", campaign)
        .then( res => {
             console.log("Delete success", res.data),
             updateCampaigns(campaign.filter((item) => item.id !== campaignToEdit.id))
        dispatch ({type: DELETE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: DELETE_FAIL, payload: err})
    })
}