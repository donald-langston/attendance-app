import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-bootstrap/Modal';

function App() {
  return (
    <Modal show={true}>
    <Modal.Header>Hi</Modal.Header>
    <Modal.Body>asdfasdf</Modal.Body>
    <Modal.Footer>This is the footer</Modal.Footer>
  </Modal>
  );
}

export default App;
