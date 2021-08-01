/* import {
    BATTERY_COMPANY_DATA_SUCCESS,
    BATTERY_COMPANY_MODEL_DATA_SUCCESS
} from "./constants";

const initialState = {
    batteryCompany: [],
    batteryCompanyModel:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTERY_COMPANY_DATA_SUCCESS:
            return {
                ...state,
                batteryCompany: action.payload,
            };
        case BATTERY_COMPANY_MODEL_DATA_SUCCESS:
            return{
                ...state,
                batteryCompanyModel: action.payload
            }

        default:
            return state;
    }
};

export default reducer;
 */
