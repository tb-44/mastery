import axios from 'axios';

//SET INITIAL STATE
const initialState = {
    user: {}
}

//ACTION TYPES
const GET_USER_INFO = "GET_USER_INFO";

//ACTION CREATORS
//AUTH0 
export function getUserInfo() {
    return {
        type: GET_USER_INFO,
        payload: axios.get('/auth/me').then( response => {
            return response.data
        })
    }
}

//THE REDUCER FUNCTIONS
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED': 
            return Object.assign({}, state, { user: action.payload })
        default: 
            return state;
    }
}