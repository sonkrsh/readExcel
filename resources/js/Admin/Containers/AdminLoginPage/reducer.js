import {
    LOGIN_BUTTON_CLICK,
    LOGIN_BUTTON_CLICK_SUCCESS,
    LOGIN_BUTTON_CLICK_ERROR,
    OTP_CHECK_SUCCESS,
    MASTER,
} from "./constants";

const initialState = {
    loading: false,
    loginSucced: false,
    otpVerified: false,
    master: false,
    entry: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_BUTTON_CLICK:
            return {
                loading: true,
            };
        case LOGIN_BUTTON_CLICK_SUCCESS:
            return {
                loginSucced: true,
                loading: false,
            };
        case LOGIN_BUTTON_CLICK_ERROR:
            return {
                loading: false,
            };
        case OTP_CHECK_SUCCESS:
            return {
                otpVerified: true,
            };
        case MASTER:
            return {
                master: "sourav",
            };

        default:
            return state;
    }
};

export default reducer;
