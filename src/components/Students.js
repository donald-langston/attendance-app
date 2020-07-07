import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Datepicker from './Datepicker';
import Table from 'react-bootstrap/Table';
import firebase from "../firebaseConfig";

let db = firebase.firestore();

let studentsAbsent;
let studentsPresent;
let totalStudents;

function DisplayStudents() {
//let location = useLocation();
const dispatch = useDispatch();
const students = useSelector(state => state.students);
const states = useSelector(state => state);
let checkboxArr;

let today = document.getElementById("table-datepicker");
//let params = new URLSearchParams(location.search.substring(1));
//let selectedTable = params.get("table");

/* let foundTable = states.tables.filter((table) => {
    return table.tableName === selectedTable;
})

let students = foundTable[0].students; */

/* if(table) {
    dispatch({type: "POPULATE_STUDENT_ARRAY", payload: table});
} */
const checkHandler = (name, id) => {
    //checkboxes have same name which are stored in checkboxArr
    checkboxArr = document.getElementsByName(name);
    //if firstbox is checked disable second
    if(checkboxArr[0].checked) {
        checkboxArr[1].disabled = true;
        dispatch({type: "UPDATE_ATTENDANCE", payload: {attendance: "present", id}});
        
    }
    //if secondbox is checked disable first
    else if(checkboxArr[1].checked) {
        checkboxArr[0].disabled = true;
        dispatch({type: "UPDATE_ATTENDANCE", payload: {attendance: "absent", id}});
        
    }
    //if either checkbox is unchecked reset both
    else {
        checkboxArr[0].disabled = false;
        checkboxArr[1].disabled = false;
        dispatch({type: "UPDATE_ATTENDANCE", payload: {id}});
    }
}



let studentsHeader = <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Present</th>
                        <th>Absent</th>
                      </tr>
                    
let studentsList = students.map((student, index) => {
    return ( 
        <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td><input type="checkbox" name={"chkbox" + student.id} onClick={() => checkHandler("chkbox" + student.id, student.id)}></input></td>
            <td><input type="checkbox" name={"chkbox" + student.id} onClick={() => checkHandler("chkbox" + student.id, student.id)}></input></td>
        </tr>
        )
    });

function submitTable() {
    let docRef = db.collection("StudentsTables").doc();
    console.log(docRef.id);
    docRef.set({
        date: today.value,
        table: states.students
    })
    .then(() => {
        dispatch({type: "ADD_DOC_REF", payload: docRef.id})
    })
}

function getTotalStudents() {
    // Create a reference to the cities collection
var citiesRef = db.collection("StudentsTables");

// Create a query against the collection.
var query = citiesRef.where("date", "==", today.value);

query.get()
.then(function(querySnapshot) {
    var absent = 0;
    var present = 0;
    var total;
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        total = (doc.data().table.length);
        for(var i = 0; i < doc.data().table.length; i ++) {
            if(doc.data().table[i].absent) {
                absent++;
            } else if(doc.data().table[i].present) {
                present++;
            }
        }
    });
    statistics(total, absent, present);
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
}

function statistics(total, absent, present) {
    totalStudents = total;
    studentsPresent = present;
    studentsAbsent = absent;
    console.log(totalStudents);
}

    return (
        <div>
            <Link to="/">Home</Link>
            <div>
                <Datepicker />
            </div>
            <Table striped bordered hover>
                <thead>
                    {studentsHeader}
                </thead>
                <tbody>
                    {studentsList}
                </tbody>
            </Table>
            {studentsList.length ? 
            <>
            <div>
                <button id="table-submit" onClick={submitTable}>Submit</button>
                <button onClick={getTotalStudents}>Total</button>
            </div>
            <div>Total students: {totalStudents} Present: {studentsPresent} Absent: {studentsAbsent}</div>
            </> 
            : null}
           
        </div>
    );
}

export default DisplayStudents;