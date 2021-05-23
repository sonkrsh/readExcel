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
    localStorageItemGet,
} from "./action";
import toNumber from "lodash/toNumber";
import remove from "lodash/remove";

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

function* addToCart({ payload, battery }) {
    try {
        if (payload) {
            var batteryProducts = [];
            if (JSON.parse(localStorage.getItem("batterySessionId"))) {
                JSON.parse(localStorage.getItem("batterySessionId"))?.map(
                    (value, key) => {
                        batteryProducts.push(value);
                    }
                );
            }

            batteryProducts.push(payload);
            localStorage.setItem(
                "batterySessionId",
                JSON.stringify(batteryProducts)
            );

            if (batteryProducts) {
                message.success("Added To Cart SuccesFully", 1);
                /* yield put(addToCartSuccess(batteryProducts)) */
            }
        }
        if (battery) {
            yield put(addToCartSuccess(batteryProducts, battery));
        }
    } catch (error) {}
}

function* addToCartSuccessSaga({ payload, battery }) {
    let myobjArray = [];
    let price = "";
    JSON.parse(localStorage.getItem("batterySessionId"))?.map((value, key) => {
        battery?.map((valueOriginal, keyOriginal) => {
            if (valueOriginal?.id == value.productId) {
                if (value.batteryType == "AC-B-WE") {
                    price = valueOriginal.priceWithExchange;
                }
                if (value.batteryType == "AC-B-WOE") {
                    price = valueOriginal.priceWithOutExchange;
                }
                const myobj = {
                    ...valueOriginal,
                    cartPrice: price,
                };
                myobjArray.push(myobj);
            }
        });
    });
    yield put(localStorageItemGet(myobjArray));
}
function* deleteItemFromCart({ payload, cart }) {


    if (JSON.parse(localStorage.getItem("batterySessionId"))) {
        var batteryProducts = [];
        JSON.parse(localStorage.getItem("batterySessionId"))?.map(
            (value, key) => {
                if(value?.productId==payload){

                }else{
                    batteryProducts.push(value); 
                }
             
            }
        );
        localStorage.setItem(
            "batterySessionId",
            JSON.stringify(batteryProducts)
        );
        remove(cart, { id: payload })
        yield put(localStorageItemGet(cart));

    }












   /*  if(remove(cart, { id: payload })){
      
        yield put(localStorageItemGet(cart));

    }; */
    
}

export default function* ProductsDefaultSaga() {
    yield takeLatest(GET_PRODUCTS, getProducts);
    yield takeLatest(ADD_TO_CART, addToCart);
    yield takeLatest(ADD_TO_CART_SUCCESS, addToCartSuccessSaga);
    yield takeLatest(DELETE_ITEM_FROM_CART, deleteItemFromCart);
}
