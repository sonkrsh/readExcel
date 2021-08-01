import { ADD_ADMIN } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { getProductDataSuccess, getGlassCategorySuccess } from "./actions";

function* addAdmin({ payload }) {
    try {
        const options = {
            url: "/register",
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

export default function* AddAdminDefaultSaga() {
    yield takeLatest(ADD_ADMIN, addAdmin);
}
