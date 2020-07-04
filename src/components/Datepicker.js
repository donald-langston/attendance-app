import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { PropTypes } from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    console.log(startDate);
    
    
    return(
        <DatePicker selected={startDate} onChange={date => {
            setStartDate(date);
            dispatch({type: "CHANGE_DATE", payload: date});
        }} />
    )
}

export default Datepicker;