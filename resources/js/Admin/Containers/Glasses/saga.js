import { ADD_GLASS_CATEGORY } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
//mport { batteryCompanyDataSuccess, companyModelDataSuccess } from "./action";

function* addGlassesCategory({ payload }) {
    try {
        const options = {
            url: "/storeGlassCategory",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        if (response.data.code == 200) {
            message.success("Added Succesfully");
        }
    } catch (error) {
        message.error(error);
    }
}

export default function* GlassesDefaultSaga() {
    yield takeLatest(ADD_GLASS_CATEGORY, addGlassesCategory);
}
