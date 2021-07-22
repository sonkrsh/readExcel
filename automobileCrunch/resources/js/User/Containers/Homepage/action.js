import {
    GET_MODEL,
    GET_MODEL_SUCCESS
} from "./constants";

export function getModel(payload) {
    return {
        type: GET_MODEL,
        payload,
    };
}
export function getModelSuccess(payload) {
    return {
        type: GET_MODEL_SUCCESS,
        payload,
    };
}


