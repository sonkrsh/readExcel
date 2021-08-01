import { GET_GLASS_CATEGROY, GET_GLASS_CATEGROY_SUCCESS } from "./constants";

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
