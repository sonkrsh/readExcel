import React, { useState, useEffect } from "react";
import HomepageDropdownSearch from "../../Components/homepageDropdownSearch";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    makeData,
    locationData,
    fuelData,
} from "../../../Admin/Containers/Make-Model-Fuel/action";
import {getImages} from '../../../Admin/Containers/AddImages/actions'
import { getModel } from "./action";
import "./style.css";

function index(props) {

    const [imageUrl, setimageUrl] = useState('')

    const dispatch = useDispatch();
    const reducerProps = useSelector((state) => state?.MakeModelFuelreducer);
    const homePageimg = useSelector((state) => state?.AddImages?.homePageData);
    const originReducer = useSelector((state) => state?.Homepage);

    
    useEffect(() => {
        dispatch(makeData());
        dispatch(locationData());
        dispatch(fuelData());
        dispatch(getImages());
    }, []);

   
    return (
        <Row id="homepageSearchBox" style={{backgroundImage: `url(${homePageimg?.url})`,backgroundSize:'cover',height:'92vh'}}>
            <Col id="SearchCar" xs={24} sm={24} md={24} lg={9} xl={9}>
                <HomepageDropdownSearch
                    locationArray={reducerProps?.locationData}
                    makeArray={reducerProps?.makeData}
                    modelArray={originReducer?.modelData}
                    fuelArray={reducerProps?.fuelData}
                    makeId={(id) => {
                        dispatch(getModel(id));
                    }}
                    onSubmit={(data) => {
                        props?.history?.push(
                            `/${data?.makeName}/${data?.modelName}/${data?.fuelName}/${data?.locationName}`
                        );
                    }}
                />
            </Col>
            <Col id="homePageLeftImg" xs={0} sm={0} md={0} lg={14} xl={14}>
              {/*   <img src="/storage/images/banner.svg" height="200" width="200" alt="" srcSet="" /> */}
            </Col>
        </Row>
    );
}

export default index;
