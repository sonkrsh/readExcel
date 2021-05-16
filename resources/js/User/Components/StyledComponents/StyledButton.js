import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const MyButton = styled(Button)`
    background: ${({ buttoncolor }) =>
        buttoncolor ? buttoncolor : "rgba(68, 86, 123, 0.39)"};
    border: 1px solid black;
    color: white;
    width: 100%;
    height: auto;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    &:hover {
        color: black;
        border: 1px solid black;
    }
`;

function StyledButton({ text, buttonColor, size, onClick }) {
    return (
        <MyButton
            buttoncolor={buttonColor}
            fontSize={size}
            onClick={() => onClick()}
        >
            {text}
        </MyButton>
    );
}

export default StyledButton;
