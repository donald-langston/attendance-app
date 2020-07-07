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
import StudentsTable from './StudentsTable';
import Search from './Search';
import DisplayTables from './DisplayTables';


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
        <Button style={{marginRight: 10}} variant="primary" onClick={handleShow}>
          Create Students Table
        </Button>
        <Search />
      </Route>
      <Route path="/students">
          <DisplayStudents />
      </Route>
      <Route path="/students/:table">
        <DisplayStudents />
      </Route>
      <Route path="/studentstable">
        <StudentsTable />
      </Route>
      <Route path="/displaytables/:tables">
        <DisplayTables />
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