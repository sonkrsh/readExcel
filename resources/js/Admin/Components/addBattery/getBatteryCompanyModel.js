import React from "react";
import { Table } from "antd";

function getBatteryCompanyModel({ batteryCompanyModelData }) {
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
                <svg width="200" height="200">
                <image href={value} height="200" width="200"/>
              </svg>
            ),
            /*  responsive: ['lg'], */
        },
        {
            title: "Description",
            dataIndex: "desc",
            key: "desc",
            render: (value, key, time) => {
                var fun = null;
                try {
                    fun = JSON.parse(value);
                    return fun.map((value, key) => {
                        return <p key={key}>{value.desc}</p>;
                    });
                } catch (error) {}
            },
            /* console.log('value',value) */
            /*  <img style={{height:"3rem"}} src={"/storage/"+value} /> */

            /*  responsive: ['lg'], */
        },
    ];

    return (
        <div>
            <Table
                pagination={{ pageSize: 10 }}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={batteryCompanyModelData}
            />
        </div>
    );
}

export default getBatteryCompanyModel;
