import axiosService from "../../services/axiosService";

// initial values
const Initial_State = {
    subjects: [],
    loading: false,
    error: false,
    subject: {}
};

// Action types
const LOADING = "LOADING";
const ERROR = "ERROR";
const SUBJECTS = "SUBJECTS";
const SUBJECT = "SUBJECT";


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
        case SUBJECTS:
            return {
                ...state,
                loading: false,
                error: null,
                subjects: action.payload?.data
            };
        case SUBJECT:
            return {
                ...state,
                loading: false,
                error: null,
                subject: action.payload?.data
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

export function loadSubjectData(data) {
    return {
        type: SUBJECTS,
        payload: data,
    };
}

export function loadOneSubject(data) {
    return {
        type: SUBJECT,
        payload: data,
    };
}

export function loadSubject() {
    return (dispatch) => {
        dispatch(isRequestLoading(true));
        return axiosService.Subject.load().then(
            (response) => {
                //handle success
                dispatch(isRequestLoading(false));
                dispatch(loadSubjectData(response))

            },
            (error) => {
                console.log(error)
                dispatch(isRequestLoading(false));
            }
        );
    };
};

export function loadSingleSubject(id) {
    return (dispatch) => {
        dispatch(isRequestLoading(true));
        return axiosService.Subject.getOne(id).then(
            (response) => {
                //handle success
                dispatch(isRequestLoading(false));
                dispatch(loadOneSubject(response))
            },
            (error) => {
                console.log(error)
                dispatch(isRequestLoading(false));
            }
        );
    };
}
