import React from "react";

const columnName = () => {
    return [
        {
            title: "Product Category",
            dataIndex: "Product_Category",
            key: "Product_Category",
        },
        {
            title: "Inventory",
            dataIndex: "Inventory",
            key: "Inventory",
        },
        {
            title: "October Requirement",
            dataIndex: "Requirement",
            key: "Requirement",
        },
        {
            title: "Order Placed",
            dataIndex: "Order_Placed",
            key: "Order_Placed",
        },
        {
            title: "Dilivered",
            dataIndex: "Dilivered",
            key: "Dilivered",
        },
    ];
};

export default columnName;
