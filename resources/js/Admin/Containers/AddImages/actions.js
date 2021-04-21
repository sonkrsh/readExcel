import {
    ADD_IMAGE,
    ADD_IMAGE_SUCCESS
} from "./constants";

export function addImage(payload) {
    return {
        type: ADD_IMAGE,
        payload,
    };
}

export function addImageSuccess(payload) {
    return {
        type: ADD_IMAGE_SUCCESS,
        payload,
    };
}

