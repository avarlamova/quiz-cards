import React, { useRef, Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class EditWindow extends Component {
  state = {
    isOpen: false,
  };

  showModal = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: true,
      };
    });
  };

  hideModal = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: false,
      };
    });
  };

  render() {
    // const notationRef = useRef();
    // const translationRef = useRef();
    // const germanRef = useRef();
    // const englishRef = useRef();

    return (
      <>
        <Button onClick={this.showModal}>Display Modal</Button>
        <Modal show={this.isOpen} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title>Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit>
              <Form.Group>
                <Form.Label> New notation </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label> New translation </Form.Label>
                <Form.Control
                  type="text" /*ref={translationRef}*/
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="German" /*ref={germanRef}*/
                />
                <Form.Check
                  type="checkbox"
                  label="English" /*ref={englishRef}*/
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Cancel</Button>
            <Button type="submit"> Save changes </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditWindow;
