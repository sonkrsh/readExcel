import { takeLatest, all, takeEvery } from "redux-saga/effects";

import adminLoginPageDefaultSaga from "../Containers/AdminLoginPage/saga";
import makeModelFuelDefaultSaga from "../Containers/Make-Model-Fuel/saga";
import BatteryDefaultSaga from '../Containers/Battery/saga'

export default function* root() {
    yield all([
        adminLoginPageDefaultSaga(),
        makeModelFuelDefaultSaga(),
        BatteryDefaultSaga()
    ]);
}
