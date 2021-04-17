import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import {  Row, Col,Button } from "antd";

function index() {
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
        <Row gutter={[16, 16]}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={24} sm={24} md={21} lg={21} xl={21}>
                <Row gutter={[16, 16]}>
                    {allBattery.map((value, key) => {
                        console.log(value);
                        let descption = JSON.parse(value?.desc);
                        console.log(descption);
                        return (
                            <Col
                                style={{
                                    border: "solid 2px",
                                    borderRadius: "9px",
                                    padding: "1rem",
                                }}
                                offset={1}
                                xs={23}
                                sm={23}
                                md={7}
                                lg={7}
                                xl={7}
                            >
                                <Row>
                                    <div
                                        className="upperPart"
                                        style={{ display: "flex" }}
                                    >
                                        <Col span={13}>
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                                src={"/storage/" + value?.image}
                                            />
                                        </Col>
                                        <Col span={11}>
                                            <div className="batteryName">
                                                <p
                                                    style={{
                                                        fontSize: "18",
                                                        fontWeight: "bold",
                                                    }}
                                                >{`${value?.name} - ${value?.batteryModel_name}`}</p>
                                            </div>
                                            <div className="batteryDesc">
                                                {descption.map((value, key) => (
                                                    <p key={key}>
                                                        {value?.desc}
                                                    </p>
                                                ))}
                                            </div>
                                            <div className="installtionAtDoor">
                                                <p key={key}>
                                                    Door Step Installtion
                                                </p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="lowerPart" style={{width:'100%'}}>
                                        <p>{`Price : -${value.price}`}</p>
                                        <p>{`price With Exchange : -${value.priceWithExchange}`}</p>

                                        <p>{`Price Without Exchange : -${value.priceWithOutExchange}`}</p>
                                    </div>
                                    <div className="addToCart" style={{textAlign:'center',width:'100%'}}>
                                        <Button
                                            type="primary"
                                            shape="round"
                                            size={'large'}
                                        >
                                            Add To Cart
                                        </Button>
                                    </div>
                                </Row>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
        /*       <div style={{display:'flex'}}>
            {allBattery.map((value, key) => {
                let descption = JSON.parse(value?.desc);
                return (
                    <Card key={key} style={{ width: 300,margin:'3rem' }}>
                        <div className="batteryImage">
                            <img
                                style={{ width: "100%" }}
                                src={"/storage/" + value?.image}
                            />
                        </div>
                        <div className="batteryDescription">
                            {descption.map((value, key) => (
                                <p key={key}>{`Description : -${value.desc}`} {value?.desc}</p>
                            ))}
                        </div>
                        <div className="batteryPrice">
                            <p>{`Price : -${value.price}`}</p>
                            <p>{`
                            price With Exchange : -${value.priceWithExchange}`}</p>
                            <p>{`Price Without Exchange : -${value.priceWithOutExchange}`}</p>
                        </div>
                    </Card>
                );
            })}
        </div> */
    );
}

export default index;
