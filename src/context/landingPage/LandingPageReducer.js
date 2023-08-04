const LandingPageReducer = (state, action) => {
    switch(action.type) {
        case 'AUTHENTICATE':
            return {
                ...state,
                isFetching: true,
            };
        case 'AUTHENTICATE_FAIL':
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload.message,
            }
        case 'AUTHENTICATE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                errorMsg: '',
                user: action.payload.user,
            }
        case 'LOGOUT':
            return {
                ...action.payload,
                user: null,
            }
        case 'FETCHING_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCHING_SUCCESS':
            return {
                ...state,
                isFetching: false,
                ...action.payload,
            };
        case 'FETCHING_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload,
            };
        case 'HIDE_MESSAGE':
            return {
                ...state,
                errorMsg: '',
            };
        case 'OPEN_POPUP':
            return {
                ...state,
                isShown: true,
                popUpText: action.payload.text,
            }
        case 'CLOSE_POPUP':
            return {
                ...state,
                isShown: false,
                popUpText: '',
            }
        default:
            return {
                ...state
            };
    }
}

export default LandingPageReducer;