import { isEmpty, isEqual, get } from "lodash";
import { ADD_IMAGE, ADD_IMAGE_SUCCESS, GET_IMAGE_SUCCESS,EDIT_IMAGE } from "./constants";

const initialState = {
    loading: false,
    imageData: [],
    homePage: [],
    logo: [],
    editLoading:false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                loading: true,
            };
        case ADD_IMAGE_SUCCESS:
            return {
                loading: false,
            };
        case GET_IMAGE_SUCCESS:
            for (var i = 0; i < action.payload.length; i++) {
                if (
                    isEmpty(state.homePage) &&
                    isEqual(action?.payload[i]?.type, "homePage")
                ) {
                    state.homePage = action?.payload[i];
                }
                if (
                    isEmpty(state.logo) &&
                    isEqual(action?.payload[i]?.type, "logo")
                ) {
                    state.logo = action?.payload[i];
                }
            }
            const homePageData = state?.homePage;
            const logoData = state.logo;
            localStorage.setItem('logo', logoData?.url);
            localStorage.setItem('homePage', homePageData?.url);
            return {
                homePageData,
                logoData,
                editLoading:false
            };
            
        case EDIT_IMAGE:
            return {
                ...state,
                editLoading: true,
            };

        default:
            return state;
    }
};

export default reducer;
