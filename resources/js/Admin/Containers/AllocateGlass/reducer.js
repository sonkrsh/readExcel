import { GET_GLASS_CATEGROY_SUCCESS } from "./constants";

const initialState = {
    glassCategory: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLASS_CATEGROY_SUCCESS:
            return {
                ...state,
                glassCategory: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
