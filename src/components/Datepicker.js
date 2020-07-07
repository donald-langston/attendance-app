import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    
    
    
    return(
        <DatePicker id="table-datepicker" selected={startDate} onChange={date => {
            setStartDate(date);
            dispatch({type: "CHANGE_DATE", payload: date});
        }} />
    )
}

export default Datepicker;