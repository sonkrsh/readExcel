import {
    GET_PRODUCTS_SUCCESS,
} from "./constants";

const initialState = {
    allBattery :[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                allBattery: action.payload,
            };
       
        default:
            return state;
    }
};

export default reducer;
