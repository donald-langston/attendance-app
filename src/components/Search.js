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
    console.log(state);
    function searchTables() {
        let tableNames = [];
        let data = [];
        db.collection("Tables").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                tableNames.push(doc.data().name);
                data.push({tableName: doc.data().name, docRef: doc.id, students: doc.data().table});
            });
            console.log(data);
            dispatch({type: "INITIALIZE_APP", payload: data})
            history.push("/displaytables/" + tableNames);
        });
    }
    
    return(
        <Button onClick={searchTables}>Search for Tables</Button>
    )
}

export default Search;