import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_SUCCESS, POST_DATA, POST_FAIL, EDIT_DATA, EDIT_FAIL, EDIT_SUCCESS } from "../actions/actions";

const initialState = {
    campaigns:[],
    user_id: "",
    isFetching: false,
    isPosting: false,
    error: ""
}

const kickstartReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true
            }

        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                campaigns: action.payload
            }

        case FETCH_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

            case POST_DATA:
            return{
                ...state,
                isPosting: true,
                campaigns: [...state.campaigns]
            }

        case POST_SUCCESS:
            return{
                ...state,
                isPosting: false,
                smurfs: action.payload
            }

        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                error: action.payload
            }

            case EDIT_DATA:
            return{
                ...state,
                isEditing: true,
                campaigns: [...state.campaigns]
            }

        case EDIT_SUCCESS:
            return{
                ...state,
                isEditing: false,
                campaigns: action.payload
            }

        case EDIT_FAIL:
            return{
                ...state,
                isPosting: false,
                error: action.payload
            }
        
            default: 
            return state
    }
   
}
export default kickstartReducer;