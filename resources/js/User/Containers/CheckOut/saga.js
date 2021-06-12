import { CHECK_PHONE_NO } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../../utils/request";
import { message } from "antd";

function* checkPhoneNo({ payload }) {
    try {
        const options = {
            url: "/verifyUser",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        if (response.data.message) {
            message.success("Verified Success");
        }
    } catch (error) {}
}

export default function* CheckOutDefaultSaga() {
    yield takeLatest(CHECK_PHONE_NO, checkPhoneNo);
}
