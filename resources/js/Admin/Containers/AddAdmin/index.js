import React, { useEffect } from "react";
import AllocateBattery from "../../Components/allocateBattery";
import { modelData, fuelData, locationData } from "../Make-Model-Fuel/action";
import { companyModelData } from "../Battery/action";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin } from "./actions";
import AddAdmin from "../../Components/AddAdmin";
import { Tabs } from "antd";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.AddAdmin);
    useEffect(() => {}, []);

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <AddAdmin
                    onSubmit={(data) => dispatch(addAdmin(data))}
                    tab={"Add Admin"}
                    key={1}
                ></AddAdmin>
            </Tabs>
        </div>
    );
}

export default index;
