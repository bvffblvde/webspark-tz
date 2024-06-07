import React from 'react';
import styled from "styled-components";
import CardDisplay from "../../UI/CardWrapperComponent";

const cardData = [
    { imageUrl: 'https://via.placeholder.com/150', likes1: 10, likes2: 5, comments1: 2, comments2: 3, uploadDate: '2021-06-01' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 12, likes2: 6, comments1: 3, comments2: 4, uploadDate: '2021-06-02' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 14, likes2: 7, comments1: 4, comments2: 5, uploadDate: '2021-06-03' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 16, likes2: 8, comments1: 5, comments2: 6, uploadDate: '2021-06-04' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 18, likes2: 9, comments1: 6, comments2: 7, uploadDate: '2021-06-05' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 20, likes2: 10, comments1: 7, comments2: 8, uploadDate: '2021-06-06' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 22, likes2: 11, comments1: 8, comments2: 9, uploadDate: '2021-06-07' },
    { imageUrl: 'https://via.placeholder.com/150', likes1: 24, likes2: 12, comments1: 9, comments2: 10, uploadDate: '2021-06-08' }
];

const MainPageSection = styled.div`
  display: flex;
  justify-content: center;
  height: 115vh;
`;

const MainPage = () => {
    return (
        <MainPageSection>
            <CardDisplay data={cardData} />
        </MainPageSection>
    );
};

export default MainPage;