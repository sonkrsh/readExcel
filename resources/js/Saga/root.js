import { takeLatest, all, takeEvery } from "redux-saga/effects";

import adminLoginPageDefaultSaga from "../Admin/Containers/AdminLoginPage/saga";
import makeModelFuelDefaultSaga from "../Admin/Containers/Make-Model-Fuel/saga";
import BatteryDefaultSaga from "../Admin/Containers/Battery/saga";
import AllocateBatteryDefaultSaga from "../Admin/Containers/AllocateBattery/saga";
import HomepageDefaultSaga from "../User/Containers/Homepage/saga";
import ProductsDefaultSaga from "../User/Containers/Products/saga";
import AddImagesDefaultSaga from "../Admin/Containers/AddImages/saga";
import GlassesDefaultSaga from "../Admin/Containers/Glasses/saga";
import CheckOutDefaultSaga from "../User/Containers/CheckOut/saga";

export default function* root() {
    yield all([
        adminLoginPageDefaultSaga(),
        makeModelFuelDefaultSaga(),
        BatteryDefaultSaga(),
        AllocateBatteryDefaultSaga(),
        HomepageDefaultSaga(),
        ProductsDefaultSaga(),
        AddImagesDefaultSaga(),
        CheckOutDefaultSaga(),
        GlassesDefaultSaga(),
    ]);
}
