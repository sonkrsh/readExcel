import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";
import get from "lodash/get";
function index() {
    const dispatch = useDispatch();
    const [sheetName, setsheetName] = useState(null);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);

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

    console.log("===>>>",reducerProps.sheetData)
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
