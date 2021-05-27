import {
    GET_PRODUCTS_SUCCESS,
    LOCAL_STORAGE_ITEM_GET
} from "./constants";

const initialState = {
    allBattery :[],
    cart:[],
    total:0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                allBattery: action.payload,
            };
       case LOCAL_STORAGE_ITEM_GET:
           return {
            ...state,
            cart: action.payload,
            total:action.total
           }
        default:
            return state;
    }
};

export default reducer;
