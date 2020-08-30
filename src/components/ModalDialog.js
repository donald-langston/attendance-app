import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DisplayForm from './Forms';

function ModalDialog() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch({type: "HIDE_MODAL"});
  const handleShow = () => dispatch({type: "SHOW_MODAL"});
  const show = useSelector(state => state.show);

  return (
    <div>
      <Button style={{marginRight: 10}} variant="primary" onClick={handleShow}>
        Create Students Table
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Student's Name</Modal.Title>
        </Modal.Header>
          <Modal.Body><DisplayForm /></Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalDialog;