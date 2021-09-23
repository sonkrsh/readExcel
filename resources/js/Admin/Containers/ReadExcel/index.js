import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName, sendEmail } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Table, Row, Col } from "antd";
import get from "lodash/get";
import trim from "lodash/trim";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import isNaN from "lodash/isNaN";
import floor from "lodash/floor";
import toNumber from "lodash/toNumber";
import columnName from "./columnName";

function index() {
    const dispatch = useDispatch();
    const [sheetName, setsheetName] = useState(null);
    const [sheetData, setsheetData] = useState(null);
    const [sheetUpdateData, setsheetUpdateData] = useState([]);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);
    const [dataSource, setdataSource] = useState([]);
    var updatedArray = [];

    useEffect(() => {
        dispatch(fetchSheetName());
    }, []);

    useEffect(() => {
        if (get(reducerProps, "sheetName.sheet_name")) {
            setsheetName(get(reducerProps, "sheetName.sheet_name"));
            setonLoadCall(true);
        }
    }, [reducerProps]);

    useEffect(() => {
        if (onLoadCall) {
            const sheetNameVariable = { sheetName: sheetName, ongetCall: true };
            dispatch(fetchExcelData(sheetNameVariable, true));
        }
    }, [onLoadCall]);

    useEffect(() => {
        setsheetData(reducerProps.sheetData);
    }, [reducerProps.sheetData]);

    useEffect(() => {
        for (let i = 0; i <= sheetData?.length - 1; i++) {
            for (let j = 0; j <= sheetData[0].length - 1; j++) {
                var lock = {
                    ...lock,
                    [trim(sheetData[0][j])]: trim(sheetData[i][j]),
                };
            }
            updatedArray.push(lock);
        }
        const groupData = groupBy(updatedArray, "Category");
        const result = map(groupData, function (items, name) {
            let requirement = 0;
            let orderPlaced = 0;
            let inventory = 0;
            let dilivered = 0;

            map(items, (data) => {
                inventory += isNaN(toNumber(get(data, "Inventory")))
                    ? 0
                    : toNumber(get(data, "Inventory"));
                requirement += isNaN(
                    toNumber(get(data, "Total Qty. to be Procured"))
                )
                    ? 0
                    : toNumber(get(data, "Total Qty. to be Procured"));
                orderPlaced += isNaN(toNumber(get(data, "Order Qty")))
                    ? 0
                    : toNumber(get(data, "Order Qty"));
                dilivered += isNaN(toNumber(get(data, "Qty Already Delivered")))
                    ? 0
                    : toNumber(get(data, "Qty Already Delivered"));
            });
            return {
                Product_Category: name,
                Inventory: inventory,
                Requirement: requirement,
                Order_Placed: orderPlaced,
                Dilivered: dilivered,
            };
        });
        setdataSource(result);
    }, [sheetData]);

    return (
        <div>
            <Row>
                <Col md={18} lg={18}>
                    <Input
                        value={sheetName}
                        onChange={(e) => setsheetName(e.target.value)}
                        placeholder="Basic usage"
                    />
                    <Button
                        onClick={() => {
                            const sheetNameVariable = { sheetName: sheetName };
                            dispatch(fetchExcelData(sheetNameVariable));
                        }}
                    >
                        Search
                    </Button>
                </Col>

                <Col offset={2} md={4} lg={4}>
                    <Button
                        style={{ backgroundColor: "yellow" }}
                        onClick={() => {
                            dispatch(sendEmail(dataSource));
                        }}
                    >
                        Send Email
                    </Button>
                </Col>
            </Row>

            <Table
                scroll={{ x: 1000 }}
                //loading={loading}
                columns={columnName()}
                dataSource={dataSource}
                bordered
            />
        </div>
    );
}

export default index;
