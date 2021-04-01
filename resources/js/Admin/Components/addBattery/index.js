import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Row, Col, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GetBatteryCompanyModel from "./getBatteryCompanyModel";
function index({
    onload,
    onsubmit,
    companyData,
    batteryModel,
    batteryCompanyModelData,
}) {
    const [fileList, setFileList] = useState([]);
    const Option = Select.Option;
    const [form] = Form.useForm();
    const onChange = ({ fileList: newFileList }) => {
        //console.log(newFileList[0].originFileObj);
        setFileList(newFileList);
    };

    useEffect(() => {
        onload();
    }, []);

    const onFinish = (value) => {
        onsubmit(value);
        form.resetFields();
    };

    const onFinishmodel = (values) => {
        const batteryCompany = values.batteryCompany;
        const batteryModels = values.batteryModel;
        console.log(values.batteryModel);
        const formData = new FormData();
        formData.append("file", fileList[0].originFileObj);
        //fd.append('PackageName',JSON.stringify(PackageName))
        formData.append("batteryCompany", JSON.stringify(batteryCompany));
        formData.append("batteryModel", batteryModels);
        batteryModel(formData);
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Add Battery Company"
                            name="battery"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your battery!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Button
                            type="primary"
                            shape="round"
                            htmlType="submit"
                            icon={<PlusOutlined />}
                            //size={size}
                        >
                            Add Battery
                        </Button>
                    </Form>
                </Col>

                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <Form
                            //form={form}
                            layout="vertical"
                            name="basic"
                            onFinish={onFinishmodel}
                        >
                    <Row gutter={[16, 16]}>
                        
                            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                                <Form.Item
                                    label="Select Battery Company"
                                    name="batteryCompany"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Company!",
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a Make First"
                                    >
                                        {companyData
                                            ? companyData.map((value, key) => (
                                                  <Option
                                                      key={key}
                                                      value={value.id}
                                                  >
                                                      {value.name}
                                                  </Option>
                                              ))
                                            : null}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Add Battery Model"
                                    name="batteryModel"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Model!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                                <Form.Item
                                    label="Select Battery Price"
                                    name="price"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Price!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Add Battery Model Description"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Description!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                <Upload
                                    beforeUpload={() => false}
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    //onPreview={onPreview}
                                >
                                    {fileList.length < 1 && "+ Upload"}
                                </Upload>
                            </Col>
                          
                    </Row>
                    <Button
                                type="primary"
                                shape="round"
                                htmlType="submit"
                                icon={<PlusOutlined />}
                                //size={size}
                            >
                                Add Battery
                            </Button>
                        </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <GetBatteryCompanyModel
                        batteryCompanyModelData={batteryCompanyModelData}
                    />
                </Col>
            </Row>
        </>
    );
}

export default index;
