import {
    ALLOCATEBATTERY_FORMSUBMIT,
    GET_PRODUCT_DATA,
    GET_PRODUCT_DATA_SUCCESS
} from "./constants";

export function formSubmit(payload) {
    return {
        type: ALLOCATEBATTERY_FORMSUBMIT,
        payload,
    };
}

export function getProductData(payload) {
    return {
        type: GET_PRODUCT_DATA,
        payload,
    };
}

export function getProductDataSuccess(payload) {
    return {
        type: GET_PRODUCT_DATA_SUCCESS,
        payload,
    };
}

