import {
    CHECK_PHONE_NO,
    CHECK_PHONE_NO_SUCCESS
} from "./constants";

export function checkPhoneNo(payload) {
    return {
        type: CHECK_PHONE_NO,
        payload,
    };
}


