import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/bx_bx-calendar.svg';
import { ReactComponent as ClearIcon } from '../../../assets/icons/bx_bx-plus.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const IconButton = styled.div`
  cursor: pointer;
  border: 1px solid #dedede;
  background: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 2px);
  border-radius: ${({isCalendarIcon}) => (isCalendarIcon ? '0 4px 4px 0' : '0')};
  @media (max-width: 768px) {
    height: 31px;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  width: 100px;
  padding: 8px;
  border: 1px solid #dedede;
  border-radius: 4px 0 0 4px;
`;

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const openCalendar = (type) => {
        document.querySelector(`.react-datepicker__input-container input[name="${type}"]`).click();
    };

    return (
        <Container>
            <Box>
                <CustomDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="From"
                    name="from"
                />
                <IconButton>
                    <ClearIcon onClick={() => setStartDate(null)} />
                </IconButton>
                <IconButton isCalendarIcon onClick={() => openCalendar('from')}>
                    <CalendarIcon />
                </IconButton>
            </Box>
            <Box>
                <CustomDatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="To"
                    name="to"
                />
                <IconButton>
                    <ClearIcon onClick={() => setEndDate(null)} />
                </IconButton>
                <IconButton isCalendarIcon onClick={() => openCalendar('to')}>
                    <CalendarIcon />
                </IconButton>
            </Box>
        </Container>
    );
};

export default DatePickerComponent;





