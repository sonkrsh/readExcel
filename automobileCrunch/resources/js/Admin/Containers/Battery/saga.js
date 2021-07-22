import {
    BATTERY_FORM_SUBMIT,
    BATTERY_COMPANY_DATA,
    BATTERY_MODEL_FORM_SUBMIT,
    BATTERY_COMPANY_MODEL_DATA
} from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { batteryCompanyDataSuccess,companyModelDataSuccess } from "./action";



function* batteryFormSubmit({ payload }) {
    try {
        const options = {
            url: "/storeBatteryCompany",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put({ type: BATTERY_COMPANY_DATA });
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
    
    }
}


function* batteryCompanydata() {
    try {
        const options = {
            url: "/getBatteryCompany",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
           yield put(batteryCompanyDataSuccess(data))
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
        message.error(data.error, 2);
    }
}


function* batteryModeldata({payload}) {
    try {
        const options = {
            url: "/storeBatteryModel",
            method: "post",
            data:payload,
            headers: { "Content-Type": "multipart/form-data" },
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data.message) {
            message.success(data.message, 2);
            yield put({ type: BATTERY_COMPANY_MODEL_DATA });
        }
        if (data.error) {
            message.error(data.error, 2);
        }
    } catch (error) {
        message.error(data.error, 2);
    }
}

function* batteryCompnayModelData() {
    try {
        const options = {
            url: "/BatteryCompanyModel",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
           yield put(companyModelDataSuccess(data))
        }
      
    } catch (error) {
        message.error(data.error, 2);
    }
}


export default function* MakeModelFuelDefaultSaga() {
    yield takeLatest(BATTERY_FORM_SUBMIT, batteryFormSubmit);
    yield takeLatest(BATTERY_COMPANY_DATA, batteryCompanydata);
    yield takeLatest(BATTERY_MODEL_FORM_SUBMIT, batteryModeldata);
    yield takeLatest(BATTERY_COMPANY_MODEL_DATA, batteryCompnayModelData);
}
