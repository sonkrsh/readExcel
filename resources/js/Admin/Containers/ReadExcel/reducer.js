import {
    FETCH_SHEET_NAME_SUCCESS,
    FETCH_EXCEL_DATA_SUCCESS,
    GET_SHEET_NAME,
} from "./constants";

const initialState = {
    sheetName: null,
    sheetData: null,
    sheetNames: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHEET_NAME_SUCCESS:
            return {
                sheetName: action.payload,
            };
        case FETCH_EXCEL_DATA_SUCCESS:
            return {
                ...state,
                sheetData: action.payload,
            };
        case GET_SHEET_NAME:
            return {
                ...state,
                sheetNames: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
