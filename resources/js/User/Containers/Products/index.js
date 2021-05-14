import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import ProductBanner from "../../Components/productBanner";
import { Tabs } from "antd";
import BatteryProducts from "../../Components/BatteryProducts";
import "./style.css";

function index() {
    const { TabPane } = Tabs;
    const dispatch = useDispatch();
    let { makeName, modelName, locationName, fuelName } = useParams();

    const originReducer = useSelector((state) => state?.Products);
    const { allBattery } = originReducer;

    useEffect(() => {
        const combineData = {
            makeName: makeName,
            modelName: modelName,
            fuelName: fuelName,
            locationName: locationName,
        };
        dispatch(getProducts(combineData));
    }, []);

    return (
        <div>
            <Tabs /* onChange={callback}  */ type="card">
                <TabPane tab="Battery" key="1">
                    <ProductBanner />
                    <BatteryProducts allBattery={allBattery} />
                </TabPane>
                <TabPane tab="Glass" key="2">
                    <ProductBanner />
                </TabPane>
                <TabPane tab="Others" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
