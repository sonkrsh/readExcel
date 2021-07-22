import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

const MyRecommended = styled.div`
    position: absolute;
    top: 0;
    background-color: green;
    left: 0;
    clip-path: polygon(45% 0%, 80% 0%, 61% 17%, 0% 68%, 0% 38%);
    height: 19%;
    left: -1px;
`;
const MyRecommendedText = styled.div`
    transform: rotate(328deg);
    color: wheat;
    padding-right: 3rem;
    font-size: 12px;
`;

function Recommended() {
    return (
        <MyRecommended>
            <MyRecommendedText>Recommended</MyRecommendedText>
        </MyRecommended>
    );
}

export default Recommended;
