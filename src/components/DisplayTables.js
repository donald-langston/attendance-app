import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';

function DisplayTables() {
    const state = useSelector(state => state);
    let history = useHistory();
    let { tables } = useParams();
    let tablesArray = tables.split(",");
    let tablesDisplay = tablesArray.map((table, index) => {
        return <div key={index}><Link to={`/students?table=${table}`}>{table}</Link></div>;
    })
    return(
        <>
        <h1>Display Tables</h1>
        {tablesDisplay}
        </>
    )
}

export default DisplayTables;