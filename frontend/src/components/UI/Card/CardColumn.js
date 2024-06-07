import React from 'react';
import styled from 'styled-components';
import TextComponent from "../Text";
import {ReactComponent as LikeIcon} from '../../../assets/icons/likes-icon.svg';
import {ReactComponent as CommentIcon} from '../../../assets/icons/comments-icon.svg';

const CardColumnWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const Image = styled.img`
  width: 203px;
  height: 203px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 140px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 100px;
  }
`;

const InfoWrapper = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InfoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 768px) {
    gap: 2px;
    flex-direction: row;
  }
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const InfoItem = ({label, value1, value2}) => (
    <InfoBox>
        <TextComponent>{label}</TextComponent>
        <Box>
            <IconWithText>
                <LikeIcon/>
                <TextComponent>{value1}</TextComponent>
            </IconWithText>
            <IconWithText>
                <CommentIcon/>
                <TextComponent>{value2}</TextComponent>
            </IconWithText>
        </Box>
    </InfoBox>
);

const CardColumn = ({data}) => {
    return (
        <CardColumnWrapper>
            <Image src={data.imageUrl} alt="Card Image"/>
            <InfoWrapper>
                <InfoItemWrapper>
                    <InfoItem label="Today" value1={data.likes1} value2={data.comments1}/>
                    <InfoItem label="9-08-2016" value1={data.likes2} value2={data.comments2}/>
                </InfoItemWrapper>
                <InfoBox>
                    <InfoItemWrapper>
                        <TextComponent fontSize="14px">Image Upload</TextComponent>
                        <Box>
                            <TextComponent fontFamily="Roboto-Regular" fontSize="14px">{data.uploadDate}</TextComponent>
                        </Box>
                    </InfoItemWrapper>
                </InfoBox>
            </InfoWrapper>
        </CardColumnWrapper>
    );
};

export default CardColumn;
