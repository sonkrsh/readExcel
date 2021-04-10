import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";

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
        <div style={{display:'flex'}}>
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
        </div>
    );
}

export default index;
