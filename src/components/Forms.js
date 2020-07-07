import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css';


function DisplayForm(props) {
    const dispatch = useDispatch();
    const anotherUser = useSelector(state => state.anotherUser);
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    const [firstNameTarget, setFirstNameTarget] = useState("");
    const [lastNameTarget, setLastNameTarget] = useState("");
    let history = useHistory();

    const getFirstname = (event) => {
        setFirstName(event.target.value);
        setFirstNameTarget(event.target);
    }

    const getLastname = (event) => {
        setLastName(event.target.value);
        setLastNameTarget(event.target);
    }

    const addAnotherUser = () => {
        dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName } });
        firstNameTarget.value = "";
        lastNameTarget.value = "";
    }

    const submitForm = (event) => {
        event.preventDefault();
        if(!anotherUser) {
            dispatch({ type: "ADD_STUDENT", payload: { firstName, lastName, anotherUser: true } });
            firstNameTarget.value = "";
            lastNameTarget.value = "";
        } else {
            dispatch({type: "HIDE_MODAL"});
            history.push("/studentstable");
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
            <div id="formBtns">
                <Button variant="primary" type="submit"  >
                    {!anotherUser ? 'Add' : 'Finish'}
                </Button>
                {!anotherUser ? null : 
                <Button variant="secondary" onClick={addAnotherUser}>
                    Add another student
                </Button> }
            </div>
        </Form>
    ) 
}

export default DisplayForm;