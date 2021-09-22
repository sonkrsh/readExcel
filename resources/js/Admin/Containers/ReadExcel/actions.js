import {
    FETCH_EXCEL_DATA,
    FETCH_SHEET_NAME,
    FETCH_SHEET_NAME_SUCCESS,
} from "./constants";

export function fetchExcelData(payload) {
    return {
        type: FETCH_EXCEL_DATA,
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
