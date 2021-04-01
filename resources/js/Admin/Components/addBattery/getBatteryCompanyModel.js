import React from 'react'
import { Table } from "antd";


function getBatteryCompanyModel({batteryCompanyModelData}) {
    console.log(batteryCompanyModelData);
    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => <p>{time}</p>,
            /*   render: text => <a>{text}</a>, */
        },
        {
            title: "Battery Company.",
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
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (value, key, time) => (
                <img style={{height:"3rem"}} src={"/storage/"+value} />
            ),
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
                dataSource={batteryCompanyModelData}
            />
        </div>
    );
}

export default getBatteryCompanyModel
