import {
    MAKE_FORM_SUBMIT,
    MAKE_DATA,
    MAKE_DATA_SUCCESS,
    MODEL_FORM_SUBMIT,
    MODEL_DATA,
    MODEL_DATA_SUCCESS,
    FUEL_FORM_SUBMIT,
    FUEL_DATA,
    FUEL_DATA_SUCCESS
} from "./constants";

export function makeFormSubmit(payload) {
    return {
        type: MAKE_FORM_SUBMIT,
        payload,
    };
}

export function makeData(payload) {
    return {
        type: MAKE_DATA,
        payload,
    };
}

export function makeDataSuccess(payload) {
    return {
        type: MAKE_DATA_SUCCESS,
        payload,
    };
}

export function modelFormSubmit(payload) {
    return {
        type: MODEL_FORM_SUBMIT,
        payload,
    };
}

export function modelData(payload) {
    return {
        type: MODEL_DATA,
        payload,
    };
}

export function modelDataSuccess(payload) {
    return {
        type: MODEL_DATA_SUCCESS,
        payload,
    };
}

export function fuelFormSubmit(payload) {
    return {
        type: FUEL_FORM_SUBMIT,
        payload,
    };
}

export function fuelData(payload) {
    return {
        type: FUEL_DATA,
        payload,
    };
}

export function fuelDataSuccess(payload) {
    return {
        type: FUEL_DATA_SUCCESS,
        payload,
    };
}