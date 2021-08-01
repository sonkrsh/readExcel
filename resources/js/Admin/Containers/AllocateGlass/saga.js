import { GET_GLASS_CATEGROY, ADD_GLASS_PRICE } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { getProductDataSuccess, getGlassCategorySuccess } from "./actions";

function* getGlassCategory({ payload }) {
    try {
        const options = {
            url: "/getGlassCategory",
            method: "get",
        };

        const response = yield call(request, options);
        if (response.data.code == 200) {
            yield put(getGlassCategorySuccess(response.data.glassCategoryData));
        }
    } catch (error) {
        message.error(error);
    }
}

function* addGlassPrice({ payload }) {
    try {
        const options = {
            url: "/addGlassPrice",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        if (response.data.code == 200) {
            message.success("Added SuccessFully");
        }
    } catch (error) {
        message.error(error);
    }
}

export default function* AllocateGlassDefaultSaga() {
    yield takeLatest(GET_GLASS_CATEGROY, getGlassCategory);
    yield takeLatest(ADD_GLASS_PRICE, addGlassPrice);
}
