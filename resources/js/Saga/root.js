import { takeLatest, all, takeEvery } from "redux-saga/effects";

import adminLoginPageDefaultSaga from "../Admin/Containers/AdminLoginPage/saga";

export default function* root() {
    yield all([adminLoginPageDefaultSaga()]);
}
