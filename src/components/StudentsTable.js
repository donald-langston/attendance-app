import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import firebase from "../firebaseConfig";

let db = firebase.firestore();

function StudentsTable() {
const students = useSelector(state => state.students);
const [tableName, setTableName] = useState('');
let [tablesLength, setTablesLength] = useState(0);
// set tables length to amount of tables stored in database
db.collection("Tables").get().then(function(querySnapshot) {
    setTablesLength(querySnapshot.docs.length);
});
const dispatch = useDispatch();
let history = useHistory();

let studentsHeader =     
    <tr>
        <th>#</th>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
    </tr>;
                    
let studentsList = students.map((student, index) => {
    /* delete absent and present key from object when creating table
    and storing to database
    delete student.present;
    delete student.absent; */
    return (
        <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
        </tr>
        )
    });

    function saveTable() {
        //save to database with name Table-tablesLength + 1
        let docRef = db.collection("Tables").doc();
        docRef.set({
            name: tableName || "Table" + (tablesLength + 1),
            table: students
        })
        .then(() => {
            dispatch({type: "ADD_TABLE", payload: {name: "Table" + (tablesLength + 1), docRef: docRef.id}});
            dispatch({type: "UPDATE_TABLE_LENGTH"});
            dispatch({type: "CLEAR_STUDENTS_ARRAY"});
            history.push("/");
        })
    }

    return(
        <div>
            <Link to="/students">Students</Link>
            <div>
                <input placeholder={"Enter table name"} onChange={(e) => setTableName(e.target.value)} />
            </div>
            <Table striped bordered hover>
                <thead>
                    {studentsHeader}
                </thead>
                <tbody>
                    {studentsList}
                </tbody>
            </Table>
            {studentsList.length ? <button onClick={saveTable}>Save Student Table</button> : null}
        </div>
    )
}

export default StudentsTable;