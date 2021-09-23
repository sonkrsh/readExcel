import { FETCH_EXCEL_DATA, FETCH_SHEET_NAME, SEND_EMAIL } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { fetchSheetNameSuccess, fetchExcelDataSuccess } from "./actions";

function* fetchExcelData({ payload }) {
    try {
        const options = {
            url: "/readExcel",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(fetchExcelDataSuccess(data));
        }
    } catch (error) {
        console.log("====>>>", error);
        /*  yield put(fetchingFormValueError()); */
    }
}

function* fetchSheetName() {
    try {
        const options = {
            url: "/fetchSheetName",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(fetchSheetNameSuccess(data));
        }
    } catch (error) {
        console.log("====>>>", error);
        /*  yield put(fetchingFormValueError()); */
    }
}

function* sendEmail({ payload }) {
    try {
        const options = {
            url: "/sendMail",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        console.log("=====data>>", data);
    } catch (error) {
        console.log("====>>>", error);
        /*  yield put(fetchingFormValueError()); */
    }
}

export default function* readExcelDefaultSaga() {
    yield takeLatest(FETCH_EXCEL_DATA, fetchExcelData);
    yield takeLatest(FETCH_SHEET_NAME, fetchSheetName);
    yield takeLatest(SEND_EMAIL, sendEmail);
}
