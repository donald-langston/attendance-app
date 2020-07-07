import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import firebase from "../firebaseConfig";

let db = firebase.firestore();

function StudentsTable() {
const students = useSelector(state => state.students);
const tablesLength = useSelector(state => state.tableLength);
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
            name: "Table" + (tablesLength + 1),
            table: students
        })
        .then(() => {
            console.log(studentsList);
            dispatch({type: "ADD_TABLE", payload: {name: "Table" + (tablesLength + 1), docRef: docRef.id}});
            history.push("/");
        })
    }

    return(
        <>
        <Link to="/students">Students</Link>
        <Table striped bordered hover>
                <thead>
                    {studentsHeader}
                </thead>
                <tbody>
                    {studentsList}
                </tbody>
            </Table>
            {studentsList.length ? <button onClick={saveTable}>Save Student Table</button> : null}
            
        </>
    )
}

export default StudentsTable;