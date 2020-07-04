import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Datepicker from './Datepicker';
import Table from 'react-bootstrap/Table';


function DisplayStudents() {
const students = useSelector(state => state.students);
const states = useSelector(state => state);
console.log(students);
console.log(states);
const dispatch = useDispatch();
let checkboxArr;
const checkHandler = (name, id) => {
    //checkboxes have same name which are stored in checkboxArr
    checkboxArr = document.getElementsByName(name);
    //if firstbox is checked disable second
    if(checkboxArr[0].checked) {
        checkboxArr[1].disabled = true;
        dispatch({type: "UPDATE_ATTENDANCE", payload: {attendance: "present", id}});
        console.log(students);
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
        </div>
    );
}

export default DisplayStudents;