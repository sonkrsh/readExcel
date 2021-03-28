import { LOGIN_BUTTON_CLICK, OTP_CHECK } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import {
    fetchingFormValueSuccess,
    fetchingFormValueError,
    otpCheckSUCCESS,
    masterSuccess,
} from "./actions";

function* loginUser({ payload }) {
    try {
        const options = {
            url: "/login",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message == "master") {
            yield put(masterSuccess());
        }
        if (data.message == "Success") {
            yield put(fetchingFormValueSuccess());
        }
    } catch (error) {
        yield put(fetchingFormValueError());
    }
}

function* checkOtp({ payload }) {
    try {
        const options = {
            url: "/adminUserVerify",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(otpCheckSUCCESS());
        }
    } catch (error) {
        yield put(fetchingFormValueError());
    }
}

export default function* adminLoginPageDefaultSaga() {
    yield takeLatest(LOGIN_BUTTON_CLICK, loginUser);
    yield takeLatest(OTP_CHECK, checkOtp);
}
