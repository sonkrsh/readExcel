import { GET_PRODUCTS, ADD_TO_CART, DELETE_ITEM_FROM_CART } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../../utils/request";
import { message } from "antd";
import {
    getProductsSuccess,
    addToCartSuccess,
    addToCart,
    localStorageItemGet,
} from "./action";
import toNumber from "lodash/toNumber";
import {
    localStorageKeyMapping,
    addSessionStorage,
    deleteFromSession,
} from "../../../utils/localStorageKeyMapping";
import find from "lodash/find";
import CryptoJS from "crypto-js";
import map from "lodash/map";

function* getProducts({ payload }) {
    try {
        const options = {
            url: "/getProducts",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        var total = 0;
        var recommentid = 0;
        if (data?.success) {
            data?.success.map((value, key) => {
                if (toNumber(value?.priceWithExchange) > total) {
                    total = toNumber(value?.priceWithExchange);
                    recommentid = value?.id;
                }
            });
            const concatData = [{ recommentId: recommentid }].concat(
                data?.success
            );
            yield put(getProductsSuccess(concatData));
        }
        if (data?.error) {
            message.error(data?.error, 3);
        }
    } catch (error) {}
}

function* addToCartFunction({ payload, battery }) {
    const response = addSessionStorage(
        payload,
        battery,
        "batterySessionId",
        "batterySessionId"
    );
    if (response) {
        yield put(localStorageItemGet(response.myobjArray, response.total));
    }
}

function* deleteItemFromCart({ payload, cart }) {
    deleteFromSession(payload, cart, "batterySessionId", "batterySessionId");
    yield put(addToCart("", cart));
}

export default function* ProductsDefaultSaga() {
    yield takeLatest(GET_PRODUCTS, getProducts);
    yield takeLatest(ADD_TO_CART, addToCartFunction);
    yield takeLatest(DELETE_ITEM_FROM_CART, deleteItemFromCart);
}
