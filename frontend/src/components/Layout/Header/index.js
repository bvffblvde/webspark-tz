import React from 'react';
import styled from "styled-components";
import Badge from "../../UI/Badge";
import TextComponent from "../../UI/Text";
import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";
import DatePickerComponent from "../../UI/DatePicker";

const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.67);
  padding: 20px 0 20px 0;
  box-shadow: inset 0 12px 24px 0 rgba(0, 0, 0, 0.12),
  0 12px 24px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  display: flex;
  justify-content: safe center;
  gap: 10%;
  z-index: 100;
    @media (max-width: 992px) {
        gap: 20px;
      align-items: center;
    }
  
    @media (max-width: 480px) {
        gap: 10px;
        padding: 10px 0 10px 0;
    }
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: calc(25% - 90px);
  top: 6px;
  @media (max-width: 1200px) {
    position: relative;
    left: 0;
    top: 0;
    }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 8px;
  
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.isDatePicker ? '10px' : '28px'};
  align-items: center;
  @media (max-width: 768px) {
    gap: ${props => props.isDatePicker ? '6px' : '10px'};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const LogoIcon = styled(Logo)`
    @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <LogoIcon />
            </LogoWrapper>
            <ContentWrapper>
                <BoxWrapper>
                    <TextComponent color="#000" variant="heading"
                                   fontFamily="Montserrat-Medium">monblanproject</TextComponent>
                    <Badge />
                </BoxWrapper>
                <BoxWrapper>
                    <InfoWrapper>
                        <TextComponent color="#000" variant="text">870</TextComponent>
                        <TextComponent color="#000" variant="text" fontFamily="Roboto-Regular">posts</TextComponent>
                    </InfoWrapper>
                    <InfoWrapper>
                        <TextComponent color="#000" variant="text">11,787</TextComponent>
                        <TextComponent color="#000" variant="text" fontFamily="Roboto-Regular">followers</TextComponent>
                    </InfoWrapper>
                    <InfoWrapper>
                        <TextComponent color="#000" variant="text">112</TextComponent>
                        <TextComponent color="#000" variant="text" fontFamily="Roboto-Regular">following</TextComponent>
                    </InfoWrapper>
                </BoxWrapper>
                <BoxWrapper isDatePicker>
                    <TextComponent color="#000" variant="text" fontFamily="Roboto-Regular">Date</TextComponent>
                    <DatePickerComponent/>
                </BoxWrapper>
            </ContentWrapper>
        </HeaderWrapper>
    );
};

export default Header;
