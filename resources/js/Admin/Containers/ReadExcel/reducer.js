import { FETCH_SHEET_NAME_SUCCESS } from "./constants";

const initialState = {
    sheetName: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHEET_NAME_SUCCESS:
            return {
                sheetName: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
