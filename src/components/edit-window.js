import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditWindow = (props) => {
  const { de, onEditWord, id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isGerman, setIsGerman] = useState(de);
  const [notation, setNotation] = useState(props.notation);
  const [translation, setTranslation] = useState(props.translation);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      notation: notation,
      translation: translation,
      de: de,
      id: id,
    };
    onEditWord(id, updatedData);
    handleClose();
  };
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
          {/*  */}
          <Form>
            <Form.Group>
              <Form.Label> New notation </Form.Label>
              <Form.Control
                type="text"
                value={notation}
                onChange={(e) => setNotation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="ma-3">
              <Form.Label> New translation </Form.Label>
              <Form.Control
                type="text"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="German"
                checked={isGerman ? true : false}
                onChange={() => setIsGerman(!isGerman)}
              />
              <Form.Check
                type="radio"
                label="English"
                checked={isGerman ? false : true}
                onChange={() => setIsGerman(!isGerman)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditWindow;
