import React from 'react';
import { 
  Link,
  Switch,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DisplayForm from './Forms';

function ModalDialog() {
  const dispatch = useDispatch();

  const handleClose = () => dispatch({type: "HIDE_MODAL"});
  const handleShow = () => dispatch({type: "SHOW_MODAL"});
  const show = useSelector(state => state.show);
  const firstName = useSelector(state => state.student.firstName);
  const lastName = useSelector(state => state.student.lastName);
  const students = useSelector(state => state.students);
  console.log(firstName);
  console.log(lastName);
  console.log(students);

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Button variant="primary" onClick={handleShow}>
          Add Students
        </Button>
      </Route>
    </Switch> 

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Student's Name</Modal.Title>
        </Modal.Header>
        <Modal.Body><DisplayForm /></Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDialog;