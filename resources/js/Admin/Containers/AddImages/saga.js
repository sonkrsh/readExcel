import { ADD_IMAGE } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { addImageSuccess } from "./actions";

function* addImage({ payload }) {
    try {
        const options = {
            url: "/storeImages",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);

        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put(addImageSuccess());
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
        message.error(data.error, 2);
    }
}

export default function* AddImagesDefaultSaga() {
    yield takeLatest(ADD_IMAGE, addImage);
}
