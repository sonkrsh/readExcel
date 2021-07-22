import {
    BATTERY_FORM_SUBMIT,
    BATTERY_COMPANY_DATA,
    BATTERY_COMPANY_DATA_SUCCESS,
    BATTERY_MODEL_FORM_SUBMIT,
    BATTERY_COMPANY_MODEL_DATA,
    BATTERY_COMPANY_MODEL_DATA_SUCCESS
} from "./constants";

export function batteryFormSubmit(payload) {
    return {
        type: BATTERY_FORM_SUBMIT,
        payload,
    };
}

export function batteryCompanyData(payload) {
    return {
        type: BATTERY_COMPANY_DATA,
        payload,
    };
}

export function batteryCompanyDataSuccess(payload) {
    return {
        type: BATTERY_COMPANY_DATA_SUCCESS,
        payload,
    };
}

export function batteryModelFormSubmit(payload) {
    return {
        type: BATTERY_MODEL_FORM_SUBMIT,
        payload,
    };
}

export function companyModelData(payload) {
    return {
        type: BATTERY_COMPANY_MODEL_DATA,
        payload,
    };
}

export function companyModelDataSuccess(payload) {
    return {
        type: BATTERY_COMPANY_MODEL_DATA_SUCCESS,
        payload,
    };
}
