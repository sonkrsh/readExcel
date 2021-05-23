import {
    GET_PRODUCTS_SUCCESS,
    LOCAL_STORAGE_ITEM_GET
} from "./constants";

const initialState = {
    allBattery :[],
    cart:[]
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
           }
        default:
            return state;
    }
};

export default reducer;
