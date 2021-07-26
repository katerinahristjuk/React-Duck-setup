import constants from './constants';

const initialState = {
    users: [],
    message: undefined
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case constants.GET_USERS_REQUEST:
            return {
                ...state
            }

        case constants.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }

        case constants.GET_USERS_FAIL:
            return {
                ...state,
                message: action.payload
            }

        case constants.PUT_USERS_REQUEST:
            return {
                ...state
            }
        case constants.PUT_USERS_SUCCESS:
            //debugger;
            return {
                ...state,
                users: [...state.users.map(user=> user.id === action.payload.id ? action.payload : user)]
            }
        case constants.PUT_USERS_FAIL:
            return {
                ...state,
                message: action.payload
            }

        case constants.DELETE_USERS_REQUEST:
            return{...state}

        case constants.DELETE_USERS_SUCCESS:
            return{
                ...state,
                users: [...state.users.map(user=> user.id === action.payload.id? action.payload : user)]
            }

        case constants.DELETE_USERS_FAIL:
            return{
                ...state,
                message: action.payload
            }


        default: return state;
    }

}