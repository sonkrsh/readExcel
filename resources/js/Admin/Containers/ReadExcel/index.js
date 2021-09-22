import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";
import get from "lodash/get";
function index() {
    const dispatch = useDispatch();
    const [sheetName, setsheetName] = useState(null);
    const reducerProps = useSelector((state) => state.ReadExcel);

    useEffect(() => {
        dispatch(fetchSheetName());
    }, []);

    useEffect(() => {
        setsheetName(get(reducerProps, "sheetName.sheet_name"));
    }, [reducerProps]);

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
