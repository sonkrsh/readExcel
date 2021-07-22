import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    LOCAL_STORAGE_ITEM_GET,
    DELETE_ITEM_FROM_CART,
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

export function addToCart(payload, battery) {
    return {
        type: ADD_TO_CART,
        payload,
        battery,
    };
}

export function addToCartSuccess(payload, battery) {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload,
        battery,
    };
}

export function localStorageItemGet(payload, total) {
    return {
        type: LOCAL_STORAGE_ITEM_GET,
        payload,
        total,
    };
}

export function deleteItemFromCart(payload, cart) {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload,
        cart,
    };
}
