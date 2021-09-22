import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input ,Table} from "antd";
import get from "lodash/get";
import trim from "lodash/trim";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import isNaN from 'lodash/isNaN';
import floor from 'lodash/floor';
import toNumber from 'lodash/toNumber';
import columnName from './columnName';

function index() {
    const dispatch = useDispatch();
    const [sheetName, setsheetName] = useState(null);
    const [sheetData, setsheetData] = useState(null);
    const [sheetUpdateData, setsheetUpdateData] = useState([]);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);
    const [dataSource, setdataSource] = useState([]);
    var updatedArray =[];

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
        setsheetData(reducerProps.sheetData)
    }, [reducerProps.sheetData]);

    useEffect(() => {
        for(let i=0;i<=sheetData?.length-1;i++){
            for(let j=0;j<=sheetData[0].length-1;j++){
            var lock={
                ...lock,
                [trim(sheetData[0][j])]:trim(sheetData[i][j])
            }
            }
            updatedArray.push(lock)

            }
            const groupData = groupBy(updatedArray, 'Category');
            const result = map(groupData, function(items, name) {
                let mtdProcured = 0;
                let mtdDilivered = 0;
                let mtdDiliveredPercent = 0;
                let mtdPending = 0;
                let mtdPendingPercent = 0;
                const inventory = 'Samaj Nhi Aya merko';
                const inventoryPercent = 'Samaj Nhi Aya merko';
                let newRequest = 0;
                map(items, data => {
                  mtdProcured += isNaN(toNumber(get(data, 'Total Qty. to be Procured')))
                    ? 0
                    : toNumber(get(data, 'Total Qty. to be Procured'));
                  mtdDilivered += isNaN(toNumber(get(data, 'Qty Already Delivered')))
                    ? 0
                    : toNumber(get(data, 'Qty Already Delivered'));
                  mtdDiliveredPercent = isNaN((mtdProcured / mtdDilivered) * 100)
                    ? 0
                    : floor((mtdProcured / mtdDilivered) * 100, 2);
                  mtdPending += isNaN(toNumber(get(data, 'Qty Pending Procured')))
                    ? 0
                    : toNumber(get(data, 'Qty Pending Procured'));
                  mtdPendingPercent = isNaN((mtdPending / mtdDilivered) * 100)
                    ? 0
                    : floor((mtdPending / mtdDilivered) * 100, 2);
                  newRequest += isNaN(toNumber(get(data, 'New Request')))
                    ? 0
                    : toNumber(get(data, 'New Request'));
                });
                return {
                  Product_Category: name,
                  MTD_Procured: mtdProcured,
                  MTD_Delivered: mtdDilivered,
                  MTD_Delivered_Percentage: mtdDiliveredPercent,
                  MTD_Pending: mtdPending,
                  MTD_Pending_Percentage: mtdPendingPercent,
                  Inventory: inventory,
                  Inventory_Percent: inventoryPercent,
                  New_Request: newRequest,
                };
              });
              setdataSource(result);
    }, [sheetData])



    return (
        <div>
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
          <Table
          scroll={{ x: 1300 }}
          //loading={loading}
          columns={columnName()}
          dataSource={dataSource}
          bordered
        />
        </div>
    );
}

export default index;
