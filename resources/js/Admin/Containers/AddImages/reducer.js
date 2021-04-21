import {
    ADD_IMAGE,
    ADD_IMAGE_SUCCESS
} from "./constants";

const initialState = {
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                loading: true,
            };
        case ADD_IMAGE_SUCCESS:
            return {
                loading:false,
            }
        default:
            return state;
    }
};

export default reducer;
