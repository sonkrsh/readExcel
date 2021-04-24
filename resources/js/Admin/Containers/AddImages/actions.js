import {
    ADD_IMAGE,
    ADD_IMAGE_SUCCESS,
    GET_IMAGE,
    GET_IMAGE_SUCCESS,
    DELETE_IMAGE
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

export function getImages(payload) {
    return {
        type: GET_IMAGE,
        payload,
    };
}

export function getImagesSuccess(payload) {
    return {
        type: GET_IMAGE_SUCCESS,
        payload,
    };
}

export function deleteImage(payload) {
    return {
        type: DELETE_IMAGE,
        payload,
    };
}

