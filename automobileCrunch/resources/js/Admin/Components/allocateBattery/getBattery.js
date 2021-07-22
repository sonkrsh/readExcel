import React from "react";
import { Table } from "antd";

function getBattery({productData}) {

    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => <p>{time}</p>,
            /*   render: text => <a>{text}</a>, */
        },
        {
            title: "Make.",
            dataIndex: "makename",
            key: "makename",
            /*  responsive: ['md'], */
        },
        {
            title: "Model",
            dataIndex: "modelname",
            key: "modelname",
            /*  responsive: ['lg'], */
        },
        {
            title: "Battery Make.",
            dataIndex: "name",
            key: "name",
            /*  responsive: ['md'], */
        },
        {
            title: "Battery Model",
            dataIndex: "batteryModel_name",
            key: "batteryModel_name",
            /*  responsive: ['lg'], */
        },  
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            /*  responsive: ['md'], */
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (value, key, time) => (
                <img style={{height:"3rem"}} src={"/storage/"+value} />
            ),
        }, 
        {
            title: "Price With Exchange",
            dataIndex: "priceWithExchange",
            key: "priceWithExchange",
            /*  responsive: ['lg'], */
        },  
        {
            title: "Price WithOut Exchange",
            dataIndex: "priceWithOutExchange",
            key: "priceWithOutExchange",
            /*  responsive: ['md'], */
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            /*  responsive: ['lg'], */
        },  
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (value, key, time) => <p>{time}</p>,
            /* responsive: ['lg'], */
        },
    ];

    return (
        <div>
             <Table
                pagination={{ pageSize: 5 }}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={productData}
            />
        </div>
    )
}

export default getBattery
