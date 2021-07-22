import {
    GET_MODEL,
} from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../../utils/request";
import {getModelSuccess} from './action'


function* makeDataId({payload}) {
    try {
        const makeid={
            makeid:payload
        }
        const options = {
            url: "/makeId",
            method: "post",
            data: makeid,
        };

        const response = yield call(request, options);
        const {data:{data}}= response
        if(data){
            yield put(getModelSuccess(data))
        }
    } catch (error) {
    }
}

export default function* HomepageDefaultSaga() {
    yield takeLatest(GET_MODEL, makeDataId);
    
}
