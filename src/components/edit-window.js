import React, { useState, useRef } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const EditWindow = () => {
  const [isOpen, setOpen] = useState(false);
  const notationRef = useRef();
  const translationRef = useRef();

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Display Modal</Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Edit word translation/notation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit>
                <Form.Group>
                    <Form.Label> New notation </Form.Label>
                    <Form.Control type="text" ref={notationRef}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label> New translation </Form.Label>
                    <Form.Control type="text" ref={translationRef}>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
          <Button type="submit"> Save changes </Button>
        </Modal.Footer>
      </Modal>
    </>
        )
    }


export default EditWindow