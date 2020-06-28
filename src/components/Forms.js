import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DisplayForm() {
    let firstName = "";
    let lastName = "";
    let firstNameTarget;
    let lastNameTarget;

    const dispatch = useDispatch();

    const getFirstname = (event) => {
        firstName = event.target.value;
        firstNameTarget = event.target;
        return firstName;
    }

    const getLastname = (event) => {
        lastName = event.target.value;
        lastNameTarget = event.target;
        return lastName;
    }

    const submitForm = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName } });
        firstNameTarget.value = "";
        lastNameTarget.value = "";
        return;
    };

    return(
        <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="input" placeholder="Enter first name" onChange={getFirstname} required />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="input" placeholder="Enter last name" onChange={getLastname} required />
            </Form.Group>
            <Button variant="primary" type="submit"  >
                Submit
            </Button>
        </Form>
    ) 
}

export default DisplayForm;