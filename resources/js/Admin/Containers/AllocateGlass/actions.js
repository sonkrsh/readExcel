import {
    GET_GLASS_CATEGROY,
    GET_GLASS_CATEGROY_SUCCESS,
    ADD_GLASS_PRICE,
} from "./constants";

export function getGlassCategory(payload) {
    return {
        type: GET_GLASS_CATEGROY,
        payload,
    };
}

export function getGlassCategorySuccess(payload) {
    return {
        type: GET_GLASS_CATEGROY_SUCCESS,
        payload,
    };
}
export function addGlassPrice(payload) {
    return {
        type: ADD_GLASS_PRICE,
        payload,
    };
}
