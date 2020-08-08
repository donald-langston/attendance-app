import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import firebase from "../firebaseConfig";

let db = firebase.firestore();

function Search(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let history = useHistory();
    
    function searchTables() {
        let tableNames = [];
        let data = [];
        db.collection("Tables").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                tableNames.push(doc.data().name);
                data.push({tableName: doc.data().name, docRef: doc.id, students: doc.data().table});
            });
            // sort table names in order so they are displayed in order
            tableNames.sort();
            dispatch({type: "INITIALIZE_APP", payload: data})
            history.push("/displaytables/" + tableNames);
        });
    }
    
    return(
        <Button onClick={searchTables}>Search for Tables</Button>
    )
}

export default Search;