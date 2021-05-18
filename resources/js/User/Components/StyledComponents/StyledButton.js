import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const MyButton = styled(Button)`
    background: ${({ buttoncolor }) => (buttoncolor ? buttoncolor : "black")};
    border: 1px solid black;
    color: ${({ color }) => (color ? color : "white")};
    width: 100%;
    height: auto;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    margin-top: ${({ margintop }) => (margintop ? margintop : "0")};
    &:hover {
        color: black;
        border: 1px solid black;
    }
    &:focus {
        color: black;
        border: 1px solid black;
    }
`;

function StyledButton({ text, buttonColor, color, size, onClick, marginTop }) {
    return (
        <MyButton
            buttoncolor={buttonColor}
            margintop={marginTop}
            fontSize={size}
            color={color}
            onClick={() => onClick()}
        >
            {text}
        </MyButton>
    );
}

export default StyledButton;
