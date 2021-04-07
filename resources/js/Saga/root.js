import { takeLatest, all, takeEvery } from "redux-saga/effects";

import adminLoginPageDefaultSaga from "../Admin/Containers/AdminLoginPage/saga";
import makeModelFuelDefaultSaga from "../Admin/Containers/Make-Model-Fuel/saga";
import BatteryDefaultSaga from '../Admin/Containers/Battery/saga'
import AllocateBatteryDefaultSaga from '../Admin/Containers/AllocateBattery/saga'


export default function* root() {
    yield all([
        adminLoginPageDefaultSaga(),
        makeModelFuelDefaultSaga(),
        BatteryDefaultSaga(),
        AllocateBatteryDefaultSaga()
    ]);
}
