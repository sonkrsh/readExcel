import { combineReducers } from "redux";
import AdminLoginPagereducer from "../Admin/Containers/AdminLoginPage/reducer";
import ReadExcelreducer from "../Admin/Containers/ReadExcel/reducer";

export default combineReducers({
    AdminLoginPage: AdminLoginPagereducer,
    ReadExcel: ReadExcelreducer,
});
