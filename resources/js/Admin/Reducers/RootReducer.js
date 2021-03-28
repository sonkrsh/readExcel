import { combineReducers } from "redux";
import AdminLoginPagereducer from "../Containers/AdminLoginPage/reducer";
import MakeModelFuelreducer from '../Containers/Make-Model-Fuel/reducer'

export default combineReducers({
    AdminLoginPage: AdminLoginPagereducer,
    MakeModelFuelreducer:MakeModelFuelreducer
});
