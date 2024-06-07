import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: #929292;
  border: 1px solid #929292;
  border-radius: 14px;
  padding: 8px 26px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 11px;
  font-family: 'Roboto-Medium', sans-serif;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
  
  &:hover {
    border-color: #3D8EDA;
    color: #3D8EDA;
  }
`;

const LoadMoreButton = ({ onClick }) => (
  <Button onClick={onClick}>Load more</Button>
);

export default LoadMoreButton;