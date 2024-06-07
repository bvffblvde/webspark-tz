import React, {useState} from 'react';
import styled from 'styled-components';
import CardRow from "../Card/CardRow";
import CardColumn from "../Card/CardColumn";
import {ReactComponent as RowView} from '../../../assets/icons/view-variable-inline.svg';
import {ReactComponent as ColumnView} from '../../../assets/icons/view-variable-grid.svg';
import LoadMoreButton from "../Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 3;
  max-width: 836px;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 18px 0 23px;
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-end;
`;

const IconWrapper = styled.div`
  cursor: pointer;

  rect {
    transition: all 0.3s ease-in-out;
    fill: ${props => (props.selected ? '#3D8EDA' : '#c8c8c8')};
  }
;

  &:hover {
    rect {
      fill: #3D8EDA;
      opacity: 0.7;
    }
  }
`;

const CardsWrapper = styled.div`
  display: ${props => (props.view === 'column' ? 'grid' : 'flex')};
  grid-template-columns: ${props => (props.view === 'column' ? 'repeat(4, 1fr)' : 'none')};
  grid-gap: ${props => (props.view === 'column' ? '20px' : 'none')};
  flex-direction: ${props => (props.view === 'row' ? 'row' : 'column')};
  flex-wrap: ${props => (props.view === 'row' ? 'wrap' : 'nowrap')};
  justify-content: ${props => (props.view === 'row' ? 'center' : 'flex-start')};
  width: 100%;
  row-gap: ${props => (props.view === 'column' ? '16px' : '8px')};
  column-gap: 8px;
`;

const LoadMoreButtonSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const CardDisplay = ({data}) => {
    const [view, setView] = useState('row');
    const [rowSelected, setRowSelected] = useState(true);
    const [columnSelected, setColumnSelected] = useState(false);

    const handleRowClick = () => {
        setView('row');
        setRowSelected(true);
        setColumnSelected(false);
    };

    const handleColumnClick = () => {
        setView('column');
        setRowSelected(false);
        setColumnSelected(true);
    };

    return (
        <Container>
            <ButtonWrapper>
                <IconWrapper selected={columnSelected} onClick={handleColumnClick}>
                    <ColumnView/>
                </IconWrapper>
                <IconWrapper selected={rowSelected} onClick={handleRowClick}>
                    <RowView/>
                </IconWrapper>
            </ButtonWrapper>
            <CardsWrapper view={view}>
                {data.map((item, index) =>
                    view === 'row' ? (
                        <CardRow key={index} data={item}/>
                    ) : (
                        <CardColumn key={index} data={item}/>
                    )
                )}
            </CardsWrapper>
            <LoadMoreButtonSection>
                <LoadMoreButton onClick={() => console.log('Load more')}/>
            </LoadMoreButtonSection>
        </Container>
    );
};

export default CardDisplay;
