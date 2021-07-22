import React from "react";
import { Table } from "antd";

function getMake({ modelData }) {
   
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
            dataIndex: "name",
            key: "name",
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
                dataSource={modelData}
            />
        </div>
    );
}

export default getMake;
