import {
    GET_PRODUCT_DATA_SUCCESS
} from "./constants";

const initialState = {
    productData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DATA_SUCCESS:
            return {
                productData: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
