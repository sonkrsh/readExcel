import {
    FETCH_EXCEL_DATA,
    FETCH_SHEET_NAME,
    FETCH_SHEET_NAME_SUCCESS,
    FETCH_EXCEL_DATA_SUCCESS,
    SEND_EMAIL,
    GET_SHEET_NAME,
    ADD_EMAIL_NAME,
    GET_EMAIL_NAME,
} from "./constants";

export function fetchExcelData(payload) {
    return {
        type: FETCH_EXCEL_DATA,
        payload,
    };
}
export function fetchExcelDataSuccess(payload) {
    return {
        type: FETCH_EXCEL_DATA_SUCCESS,
        payload,
    };
}
export function fetchSheetName(payload) {
    return {
        type: FETCH_SHEET_NAME,
        payload,
    };
}

export function fetchSheetNameSuccess(payload) {
    return {
        type: FETCH_SHEET_NAME_SUCCESS,
        payload,
    };
}
export function sendEmail(payload) {
    return {
        type: SEND_EMAIL,
        payload,
    };
}
export function getSheetName(payload) {
    return {
        type: GET_SHEET_NAME,
        payload,
    };
}
export function addEmailName(payload) {
    return {
        type: ADD_EMAIL_NAME,
        payload,
    };
}
export function getEmailName(payload) {
    return {
        type: GET_EMAIL_NAME,
        payload,
    };
}
