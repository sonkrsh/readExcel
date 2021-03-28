import {
    MAKE_FORM_SUBMIT,
    MAKE_DATA,
    MODEL_FORM_SUBMIT,
    MODEL_DATA,
} from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { makeDataSuccess, modelDataSuccess } from "./action";

function* makeFormSubmit({ payload }) {
    try {
        const options = {
            url: "/storeMake",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put({ type: MAKE_DATA });
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
        // yield put(fetchingFormValueError());
    }
}

function* makeData() {
    try {
        const options = {
            url: "/getMake",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(makeDataSuccess(data));
        }
    } catch (error) {
        message.error(error);
    }
}

function* modelFormSubmit({ payload }) {
    try {
        const options = {
            url: "/storeModel",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put({ type: MODEL_DATA });
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
        message.error(error);
    }
}

function* modelData() {
    try {
        console.log("hlo");
        const options = {
            url: "/getModel",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(modelDataSuccess(data));
        }
    } catch (error) {
        message.error(error);
    }
}

export default function* MakeModelFuelDefaultSaga() {
    yield takeLatest(MAKE_FORM_SUBMIT, makeFormSubmit);
    yield takeLatest(MAKE_DATA, makeData);
    yield takeLatest(MODEL_FORM_SUBMIT, modelFormSubmit);
    yield takeLatest(MODEL_DATA, modelData);
}
