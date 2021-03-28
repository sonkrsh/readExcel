import {
    LOGIN_BUTTON_CLICK,
    LOGIN_BUTTON_CLICK_SUCCESS,
    LOGIN_BUTTON_CLICK_ERROR,
    OTP_CHECK,
    OTP_CHECK_SUCCESS,
    MASTER,
} from "./constants";

export function fetchingFormValue(payload) {
    return {
        type: LOGIN_BUTTON_CLICK,
        payload,
    };
}

export function fetchingFormValueSuccess(payload) {
    return {
        type: LOGIN_BUTTON_CLICK_SUCCESS,
        payload,
    };
}
export function fetchingFormValueError(payload) {
    return {
        type: LOGIN_BUTTON_CLICK_ERROR,
        payload,
    };
}

export function otpCheck(payload) {
    return {
        type: OTP_CHECK,
        payload,
    };
}

export function otpCheckSUCCESS(payload) {
    return {
        type: OTP_CHECK_SUCCESS,
        payload,
    };
}

export function masterSuccess() {
    return {
        type: MASTER,
    };
}
