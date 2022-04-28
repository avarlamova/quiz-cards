import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditWindow = (word) => {
  // const { translation, notation, de } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isGerman, setIsGerman] = useState(word.de);
  const [notation, setNotation] = useState(word.notation);
  const [translation, setTranslation] = useState(word.translation);

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
              <Form.Control
                type="text"
                value={notation}
                onChange={(e) => setNotation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label> New translation </Form.Label>
              <Form.Control
                type="text"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              onChange={() => setIsGerman(!isGerman)}
            >
              <Form.Check
                type="radio"
                label="German"
                checked={isGerman ? true : false}
              />
              <Form.Check
                type="radio"
                label="English"
                checked={isGerman ? false : true}
              />
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
