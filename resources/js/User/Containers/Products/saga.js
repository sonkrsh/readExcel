import { GET_PRODUCTS } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../../utils/request";
import { message } from "antd";
import { getProductsSuccess } from "./action";

function* getProducts({ payload }) {
    try {
        const options = {
            url: "/getProducts",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;

        if (data?.success) {
            yield put(getProductsSuccess(data?.success));
        }
        if (data?.error) {
            message.error(data?.error, 3);
        }
    } catch (error) {}
}

export default function* ProductsDefaultSaga() {
    yield takeLatest(GET_PRODUCTS, getProducts);
}
