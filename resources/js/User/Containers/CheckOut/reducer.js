import { BUTTON_LOADING } from "./constants";

const initialState = {
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
