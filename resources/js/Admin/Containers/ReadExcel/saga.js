import {
    FETCH_EXCEL_DATA,
    FETCH_SHEET_NAME,
    SEND_EMAIL,
    ADD_EMAIL_NAME,
    GET_EMAIL_NAME,
} from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import {
    fetchSheetNameSuccess,
    fetchExcelDataSuccess,
    getSheetName,
} from "./actions";
import get from "lodash/get";
import { message } from "antd";

function* fetchExcelData({ payload }) {
    try {
        if (get(payload, "sheetName")) {
            message.info("Please Wait While We Fetching The Data", 2);
        }

        const options = {
            url: "/readExcel",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);

        const { data } = response;

        if (data.sheets) {
            yield put(getSheetName(data.sheets));
        } else {
            yield put(fetchExcelDataSuccess(data));
        }
    } catch (error) {
        message.error(error, 2);
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
        message.error(error, 2);
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
        message.info("Action in Progress", 2);
        const response = yield call(request, options);
        const { data } = response;
        message.success(data.message, 2);
    } catch (error) {
        message.error(error, 2);
        /*  yield put(fetchingFormValueError()); */
    }
}

function* addEmailName({ payload }) {
    try {
        const options = {
            url: "/addEmail",
            method: "post",
            data: payload,
        };
        const response = yield call(request, options);
        const { data } = response;
        message.success(data.message, 2);
    } catch (error) {
        message.error(error, 2);
        /*  yield put(fetchingFormValueError()); */
    }
}
function* getEmailName({ payload }) {
    try {
        const options = {
            url: "/getEmail",
            method: "get",
        };
        const response = yield call(request, options);
        console.log("===>>", response);
    } catch (error) {
        message.error(error, 2);
        /*  yield put(fetchingFormValueError()); */
    }
}

export default function* readExcelDefaultSaga() {
    yield takeLatest(FETCH_EXCEL_DATA, fetchExcelData);
    yield takeLatest(FETCH_SHEET_NAME, fetchSheetName);
    yield takeLatest(SEND_EMAIL, sendEmail);
    yield takeLatest(ADD_EMAIL_NAME, addEmailName);
    yield takeLatest(GET_EMAIL_NAME, getEmailName);
}
