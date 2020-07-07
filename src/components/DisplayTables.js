import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DisplayTables() {
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