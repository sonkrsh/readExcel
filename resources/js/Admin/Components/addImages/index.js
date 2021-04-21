import React, { useState } from "react";
import { Button, Upload } from "antd";

function index({ label, buttonSeen, onSubmit,type,loadingButton }) {

    console.log("===",loadingButton)
    const [fileList, setFileList] = useState([]);
    const formData = new FormData();

    const onChange = ({ fileList: newFileList }) => {
        if(!buttonSeen){
            setFileList(newFileList);
            formData.append("file", newFileList[0].originFileObj);
            if(type){
                formData.append("type", JSON.stringify(type));
            }
            onSubmit(formData);
        }
        else{
            setFileList(newFileList);
        }
    };

    const handleClick = () => {
        formData.append("file", fileList[0].originFileObj);
        if(type){
            formData.append("type", type);
        }
        onSubmit(formData);
    };

    return (
        <div>
            <Upload
                beforeUpload={() => false}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                loading={loadingButton}
                //onPreview={onPreview}
            >
                {fileList.length < 1 && "+ Upload"}
            </Upload>
            {buttonSeen ? (
                <Button loading={loadingButton} onClick={handleClick} type="primary">
                    {label}
                </Button>
            ) : (
                ""
            )}
        </div>
    );
}

export default index;
