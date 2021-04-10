import React, { useEffect } from "react";
import HomepageDropdownSearch from "../../Components/homepageDropdownSearch";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    makeData,
    locationData,
    fuelData
} from "../../../Admin/Containers/Make-Model-Fuel/action";
import {getModel} from './action'


function index() {
    const dispatch = useDispatch();
    const reducerProps = useSelector((state) => state?.MakeModelFuelreducer);
    const originReducer = useSelector((state) => state?.Homepage);
    useEffect(() => {
        dispatch(makeData());
        dispatch(locationData());
        dispatch(fuelData());
    }, []);

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                <HomepageDropdownSearch
                    locationArray={reducerProps?.locationData}
                    makeArray={reducerProps?.makeData}
                    modelArray={originReducer?.modelData}
                    fuelArray={reducerProps?.fuelData}
                    makeId={(id)=>{dispatch(getModel(id))}}
                />
            </Col>
        </Row>
    );
}

export default index;
