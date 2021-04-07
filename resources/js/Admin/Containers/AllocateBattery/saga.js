import { ALLOCATEBATTERY_FORMSUBMIT,GET_PRODUCT_DATA } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import {
    getProductDataSuccess,
} from "./actions";

function* formSubmit({ payload }) {
    try {
        const options = {
            url: "/storeBatteryProduct",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put({ type: GET_PRODUCT_DATA });
        }
    } catch (error) {
        yield put(fetchingFormValueError());
    }
}

function* getProductData({ payload }) {
    try {
        const options = {
            url: "/getBatteryProduct",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(getProductDataSuccess(data))
        }
    } catch (error) {
        yield put(fetchingFormValueError());
    }
}


export default function* AllocateBatteryDefaultSaga() {
    yield takeLatest(ALLOCATEBATTERY_FORMSUBMIT, formSubmit);
    yield takeLatest(GET_PRODUCT_DATA, getProductData);
   
}
