import {
    ADD_IMAGE,
    ADD_IMAGE_SUCCESS,
    GET_IMAGE_SUCCESS
} from "./constants";

const initialState = {
    loading: false,
    imageData:[]
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
        case GET_IMAGE_SUCCESS:
            return {
                imageData:action.payload
            }
        default:
            return state;
    }
};

export default reducer;
