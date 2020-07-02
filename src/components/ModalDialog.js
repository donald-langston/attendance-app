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
import InputGroup from 'react-bootstrap/InputGroup';
import DisplayForm from './Forms';
import DisplayStudents from './Students';
import Home from './Home';


function ModalDialog() {
  const dispatch = useDispatch();

  const handleClose = () => dispatch({type: "HIDE_MODAL"});
  const handleShow = () => dispatch({type: "SHOW_MODAL"});
  const show = useSelector(state => state.show);
  const firstName = useSelector(state => state.student.firstName);
  const lastName = useSelector(state => state.student.lastName);

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
        <Button variant="primary" onClick={handleShow}>
          Add Students
        </Button>
      </Route>
      <Route path="/students">
          <DisplayStudents />
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