import { GET_PRODUCTS } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../../utils/request";
import { message } from "antd";
import { getProductsSuccess } from "./action";
import toNumber from 'lodash/toNumber';

function* getProducts({ payload }) {
    try {
        const options = {
            url: "/getProducts",
            method: "post",
            data: payload,
        };

        const response = yield call(request, options);
        const { data } = response;
        var total =0;
        var recommentid=0;
        if (data?.success) {
            data?.success.map((value,key)=>{
                if(toNumber(value?.priceWithExchange)>total){
                    total=toNumber(value?.priceWithExchange);
                    recommentid=value?.id
                }
            })
            const concatData = [{recommentId:recommentid}].concat(data?.success);
            yield put(getProductsSuccess(concatData));
        }
        if (data?.error) {
            message.error(data?.error, 3);
        }
    } catch (error) {}
}

export default function* ProductsDefaultSaga() {
    yield takeLatest(GET_PRODUCTS, getProducts);
}
