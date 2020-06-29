import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DisplayStudents() {
const students = useSelector(state => state.students);
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
            <td><input type="checkbox"></input></td>
            <td><input type="checkbox"></input></td>
        </tr>
        )
    });
    return (
        <div>
            <Table striped border hover>
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