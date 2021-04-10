import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS
} from "./constants";

export function getProducts(payload) {
    return {
        type: GET_PRODUCTS,
        payload,
    };
}
export function getProductsSuccess(payload) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload,
    };
}


