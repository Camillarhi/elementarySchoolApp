import axiosService from "../../services/axiosService";

// initial values
const Initial_State = {
    loading: false,
    error: false,
    user: {}
};

// Action types
const LOADING = "LOADING";
const ERROR = "ERROR";
const USER = "USER";


// Reducer
export default function reducer(state = Initial_State, action = {}) {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case LOADING:
            return {
                ...state,
                loading: action.payload,
                error: null,
            };
        case USER:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload?.data
            };
        default:
            return state;
    }
}

export function isRequestLoading(data) {
    return {
        type: LOADING,
        payload: data,
    };
}

export function isError(data) {
    return {
        type: ERROR,
        payload: data,
    };
}

export function loadUser(data) {
    return {
        type: USER,
        payload: data,
    };
}


export function loadUserData() {
    return (dispatch) => {
        dispatch(isRequestLoading(true));
        return axiosService.User.load().then(
            (response) => {
                //handle success
                dispatch(isRequestLoading(false));
                dispatch(loadUser(response))
            },
            (error) => {
                console.log(error)
                dispatch(isRequestLoading(false));
            }
        );
    };
};

