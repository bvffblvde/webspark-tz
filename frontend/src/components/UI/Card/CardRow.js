import React from 'react';
import styled from 'styled-components';
import TextComponent from "../Text";
import { ReactComponent as LikeIcon } from '../../../assets/icons/likes-icon.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/comments-icon.svg';

const CardRowWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 86px;
    @media (max-width: 768px) {
        height: 60px;
    }
`;

const Image = styled.img`
  width: 86px;
  height: 86px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const InfoWrapper = styled.div`
  padding: 16px 36px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 16px 10px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const IconWithText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const InfoItem = ({ label, value1, value2 }) => (
    <InfoBox>
        <TextComponent>{label}</TextComponent>
        <Box>
            <IconWithText>
                <LikeIcon />
                <TextComponent>{value1}</TextComponent>
            </IconWithText>
            <IconWithText>
                <CommentIcon />
                <TextComponent>{value2}</TextComponent>
            </IconWithText>
        </Box>
    </InfoBox>
);

const CardRow = ({ data }) => {
    return (
        <CardRowWrapper>
            <Image src={data.imageUrl} alt="Card Image" />
            <InfoWrapper>
                    <InfoItem label="Today" value1={data.likes1} value2={data.comments1} />
                    <InfoItem label="9-08-2016" value1={data.likes2} value2={data.comments2} />
                <InfoBox>
                    <TextComponent>Image Upload</TextComponent>
                    <Box>
                        <TextComponent fontFamily="Roboto-Regular">{data.uploadDate}</TextComponent>
                    </Box>
                </InfoBox>
            </InfoWrapper>
        </CardRowWrapper>
    );
};

export default CardRow;
