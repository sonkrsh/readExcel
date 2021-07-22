import {
    CHECK_PHONE_NO,
    CHECK_PHONE_NO_SUCCESS,
    BUTTON_LOADING,
} from "./constants";

export function checkPhoneNo(payload) {
    return {
        type: CHECK_PHONE_NO,
        payload,
    };
}

export function buttonLoading(payload) {
    return {
        type: BUTTON_LOADING,
        payload,
    };
}
