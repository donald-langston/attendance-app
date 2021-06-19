import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useLocation } from 'react-router-dom';
import AppNavBar from './NavBar';

function DisplayTables() {
    let { tables } = useParams();
    let tablesArray = tables.split(",");
    let tablesDisplay = tablesArray.map((table, index) => {
        return <div key={index}><Link to={`/students?table=${table}`}>{table}</Link></div>;
    });
    let location = useLocation();
    if(location.pathname.indexOf("/displaytables") !== -1) {
        console.log(location.pathname.indexOf("/displaytables"));
    }
    
    return(
        <div>
        <AppNavBar />
        <h1>Display Tables</h1>
        {tablesDisplay}
        </div>
    )
}

export default DisplayTables;