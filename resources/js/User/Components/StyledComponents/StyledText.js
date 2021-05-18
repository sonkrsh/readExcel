import React from "react";
import styled from "styled-components";

const MyText = styled.span`
    font-size: ${({ size }) => (size ? size : "16px")};
    color: ${({ color }) => (color ? color : "black")};
    font-weight: ${({ weight }) => (weight ? weight : "normal")};
`;

function StyledText({ Text, Color, Size, Weight }) {
    return (
        <MyText size={Size} color={Color} weight={Weight}>
            {Text}
        </MyText>
    );
}

export default StyledText;
