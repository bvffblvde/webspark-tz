import React, {Component} from 'react';
import Header from "./components/Layout/Header";
import MainPage from "./components/Pages/MainPage";
import styled from "styled-components";
import { ReactComponent as Shape } from "./assets/shapes/shape.svg";
import { ReactComponent as ShapeBottom } from "./assets/shapes/shape-2.svg";

const MainWrapper = styled.div`
  position: relative;
`;

const StyledShapeTop = styled(Shape)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 45%;
  
  @media (max-width: 992px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledShapeBottom = styled(ShapeBottom)`
    position: absolute;
    bottom: 40px;
    right: 0;
    z-index: 1;
    width: 15%;
    @media (max-width: 768px) {
    width: 30%;
    }
`;


class App extends Component {
    render() {
        return (
            <MainWrapper>
                <StyledShapeTop/>
                <Header/>
                <MainPage/>
                <StyledShapeBottom/>
            </MainWrapper>
        );
    }
}

export default App;
