import { combineReducers } from "redux";
import AdminLoginPagereducer from "../Admin/Containers/AdminLoginPage/reducer";
import MakeModelFuelreducer from '../Admin/Containers/Make-Model-Fuel/reducer';
import Batteryreducer from '../Admin/Containers/Battery/reducer';
import AllocateBatteryreducer from '../Admin/Containers/AllocateBattery/reducer';
import Homepagereducer from '../User/Containers/Homepage/reducer'

export default combineReducers({
    AdminLoginPage: AdminLoginPagereducer,
    MakeModelFuelreducer:MakeModelFuelreducer,
    Battery:Batteryreducer,
    AllocateBattery:AllocateBatteryreducer,
    Homepage:Homepagereducer
});
