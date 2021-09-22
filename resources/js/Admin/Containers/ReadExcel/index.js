import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";
import get from "lodash/get";
import trim from "lodash/trim";
import groupBy from "lodash/groupBy";

function index() {
    const dispatch = useDispatch();
    const [sheetName, setsheetName] = useState(null);
    const [sheetData, setsheetData] = useState(null);
    const [sheetUpdateData, setsheetUpdateData] = useState([]);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);
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

        console.log("----------------------------------------",groupData)
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
        </div>
    );
}

export default index;
