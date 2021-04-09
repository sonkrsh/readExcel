import React from "react";
import HomepageDropdownSearch from "../../Components/homepageDropdownSearch";
import { Row, Col } from 'antd';

function index() {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                <HomepageDropdownSearch />
            </Col>
        </Row>
    );
}

export default index;
