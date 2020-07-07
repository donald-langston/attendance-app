import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    
    
    return(
        <DatePicker id="table-datepicker" selected={startDate} onChange={date => {
            setStartDate(date);
            dispatch({type: "CHANGE_DATE", payload: date});
            console.log(state)
        }} />
    )
}

export default Datepicker;