import { ADD_IMAGE,GET_IMAGE,DELETE_IMAGE } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { message } from "antd";
import { addImageSuccess,getImagesSuccess,getImages } from "./actions";
import {isEmpty} from 'lodash'
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

function* getImage() {
    try {
        const options = {
            url: "/getImages",
            method: "get",
        };

        const response = yield call(request, options);
        const { data } = response;
        if (data) {
            yield put(getImagesSuccess(data));
        }
    } catch (error) {
        message.error(data.error, 2);
    }
}

function* deleteImage({payload}) {
    try {
        const options = {
            url: "/deleteLogo",
            method: "post",
            data:payload
        };

        const response = yield call(request, options);
        const {data} =response
        if(data){
            message.success(data?.message, 2);
            yield put(getImages())
        }
       /*  if(message){
           
        } */
    } catch (error) {
        message.error(data.error, 2);
    }
}

export default function* AddImagesDefaultSaga() {
    yield takeLatest(ADD_IMAGE, addImage);
    yield takeLatest(GET_IMAGE, getImage);
    yield takeLatest(DELETE_IMAGE, deleteImage);
}
