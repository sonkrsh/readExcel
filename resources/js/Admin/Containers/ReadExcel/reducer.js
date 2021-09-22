import { FETCH_SHEET_NAME_SUCCESS ,FETCH_EXCEL_DATA_SUCCESS} from "./constants";

const initialState = {
    sheetName: null,
    sheetData:null
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

        default:
            return state;
    }
};

export default reducer;
