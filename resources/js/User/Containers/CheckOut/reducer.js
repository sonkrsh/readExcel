/* import {
    GET_MODEL_SUCCESS,
} from "./constants";

const initialState = {
    modelData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MODEL_SUCCESS:
            return {
                ...state,
                modelData: action.payload,
            };

        default:
            return state;
    }
};

export default reducer; */
