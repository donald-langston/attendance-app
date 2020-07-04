import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from "../firebaseConfig";


let db = firebase.firestore();

function DisplayForm(props) {
    let firstName = "";
    let lastName = "";
    let firstNameTarget;
    let lastNameTarget;

    const dispatch = useDispatch();
    const anotherUser= useSelector(state => state.anotherUser);
    let history = useHistory();

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

    const addAnotherUser = () => {
        dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName } });
        firstNameTarget.value = "";
        lastNameTarget.value = "";
    }

    const submitForm = (event) => {
        event.preventDefault();
        /* dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName } });
        firstNameTarget.value = "";
        lastNameTarget.value = ""; */
        if(!anotherUser) {
            dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName, anotherUser: true } });
            firstNameTarget.value = "";
            lastNameTarget.value = "";
        } else {
            dispatch({type: "HIDE_MODAL"});
            history.push("/students");
        }
    };

    return(
        <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="input" placeholder="Enter first name" onChange={getFirstname}  />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="input" placeholder="Enter last name" onChange={getLastname}  />
            </Form.Group>
            <Button variant="primary" type="submit"  >
                {!anotherUser ? 'Add' : 'Finish'}
            </Button>
            {!anotherUser ? null : 
            <Button variant="secondary" onClick={addAnotherUser}>
                Add another student
            </Button> }
        </Form>
    ) 
}

export default DisplayForm;