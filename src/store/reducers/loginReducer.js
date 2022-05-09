const LOGIN_USER = 'LOGIN_USER';
const LOG_OUT_USER = 'LOG_OUT_USER';

let initialState = {
    email: null,
    id: null,
    token: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.uid,
                token: action.payload.accessToken
            }
        }
        case LOG_OUT_USER: {
            return {
                ...state,
                email: null,
                id: null,
                token: null
            }
        }
        default:
            return state
    }
}


export default loginReducer;

export const loginUser = (user) => ({type: LOGIN_USER, payload: user});
export const logOutUser = () => ({type: LOG_OUT_USER})


