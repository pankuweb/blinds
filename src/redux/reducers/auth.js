import { LOGIN, REGISTER_AUTH } from "../actions/type";
const INITIAL_STATE = {
    auth: [{}],
    is_loading: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, auth: action.payload, is_loading: false };
        case REGISTER_AUTH:
            return { ...state, auth: action.payload };
        default:
            return state;
    }
}