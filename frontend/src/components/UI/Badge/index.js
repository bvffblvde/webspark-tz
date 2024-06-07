import React from 'react';
import styled from "styled-components";
import TextComponent from "../Text";

const BadgeWrapper = styled.div`
    background-color: transparent;
    padding: 6px 12px;
    border-radius: 2px;
    border: 1px solid #3D8EDA;
   `;

const Badge = () => {
    return (
        <BadgeWrapper>
            <TextComponent color="#3D8EDA" variant="text" fontFamily="Roboto-Regular">Start on 17-02-2016</TextComponent>
        </BadgeWrapper>
    );
};

export default Badge;