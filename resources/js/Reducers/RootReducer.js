import { combineReducers } from "redux";
import AdminLoginPagereducer from "../Admin/Containers/AdminLoginPage/reducer";

export default combineReducers({
    AdminLoginPage: AdminLoginPagereducer,
});
