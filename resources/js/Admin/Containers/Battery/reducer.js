import { MAKE_DATA_SUCCESS, MODEL_DATA_SUCCESS,FUEL_DATA_SUCCESS } from "./constants";

const initialState = {
    makeData: [],
    modelData: [],
    fuelData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_DATA_SUCCESS:
            return {
                ...state,
                makeData: action.payload,
            };
        case MODEL_DATA_SUCCESS:
            return {
                ...state,
                modelData: action.payload,
            };
        case FUEL_DATA_SUCCESS:
            return{
                ...state,
                fuelData:action.payload
            }
        default:
            return state;
    }
};

export default reducer;