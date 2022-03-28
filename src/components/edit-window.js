import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditWindow = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { translation, notation, de } = props;

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Edit word
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Word editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* onSubmit */}
            <Form.Group>
              <Form.Label> New notation </Form.Label>
              <Form.Control type="text" value={notation}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label> New translation </Form.Label>
              <Form.Control type="text" value={translation}></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="radio"
                label="German"
                // checked={de ? true : false}
              />
              <Form.Check type="radio" label="English" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditWindow;
