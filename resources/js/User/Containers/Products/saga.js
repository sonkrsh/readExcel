import {
    GET_PRODUCTS,
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    DELETE_ITEM_FROM_CART,
} from "./constants";
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
import remove from "lodash/remove";
import localStorageKeyMapping from "../../../utils/localStorageKeyMapping";
import CryptoJS from "crypto-js";

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
    var batteryProducts = [];

    try {
        if (payload) {
            var bytes = CryptoJS.AES.decrypt(
                JSON.parse(localStorage.getItem("batterySessionId")),
                localStorageKeyMapping("batterySessionId")
            );
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            decryptedData?.map((value, key) => {
                batteryProducts.push(value);
            });
            batteryProducts.push(payload);
            var ciphertext = CryptoJS.AES.encrypt(
                JSON.stringify(batteryProducts),
                localStorageKeyMapping("batterySessionId")
            ).toString();
            localStorage.setItem(
                "batterySessionId",
                JSON.stringify(ciphertext)
            );
            message.success("Added To Cart SuccesFully", 1);
            yield put(addToCartSuccess(batteryProducts, battery));
        }
        yield put(addToCartSuccess(batteryProducts, battery));
    } catch (error) {
        batteryProducts.push(payload);
        var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(batteryProducts),
            localStorageKeyMapping("batterySessionId")
        ).toString();
        localStorage.setItem("batterySessionId", JSON.stringify(ciphertext));
        yield put(addToCartSuccess(batteryProducts, battery));
    }
}

function* addToCartSuccessSaga({ payload, battery }) {
    let myobjArray = [];
    let price = "";
    try {
        var bytes = CryptoJS.AES.decrypt(
            JSON.parse(localStorage.getItem("batterySessionId")),
            localStorageKeyMapping("batterySessionId")
        );
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        let total =0
        decryptedData?.map((value, key) => {
            battery?.map((valueOriginal, keyOriginal) => {
                if (valueOriginal?.id == value.productId) {
                    if (value.batteryType == "AC-B-WE") {
                        price = valueOriginal.priceWithExchange;
                    }
                    if (value.batteryType == "AC-B-WOE") {
                        price = valueOriginal.priceWithOutExchange;
                    }
                    total=total+toNumber(price)
                    const myobj = {
                        ...valueOriginal,
                        cartPrice: price,
                    };
                    myobjArray.push(myobj);
                }
            });
        });
        yield put(localStorageItemGet(myobjArray,total));
    } catch (error) {
        localStorage.removeItem("batterySessionId");
    }
}
function* deleteItemFromCart({ payload, cart }) {
    var batteryProducts = [];
    try {
        var bytes = CryptoJS.AES.decrypt(
            JSON.parse(localStorage.getItem("batterySessionId")),
            localStorageKeyMapping("batterySessionId")
        );
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        decryptedData?.map((value, key) => {
            if (value?.productId == payload) {
            } else {
                batteryProducts.push(value);
            }
        });
        var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(batteryProducts),
            localStorageKeyMapping("batterySessionId")
        ).toString();
        localStorage.setItem("batterySessionId", JSON.stringify(ciphertext));
        yield put(addToCart("", cart));
    } catch (error) {}
}

export default function* ProductsDefaultSaga() {
    yield takeLatest(GET_PRODUCTS, getProducts);
    yield takeLatest(ADD_TO_CART, addToCartFunction);
    yield takeLatest(ADD_TO_CART_SUCCESS, addToCartSuccessSaga);
    yield takeLatest(DELETE_ITEM_FROM_CART, deleteItemFromCart);
}
