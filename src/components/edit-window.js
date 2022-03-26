import React, { ComponentElement, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function EditWindow() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <> 
    <Button onClick={this.toggleModal}>Display Modal</Button>

    <Modal
    isOpen={isOpen}
    fade={false}
    style={{ width: "200px", display: "block" }}
  >
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
  )
}

// class EditWindow extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggleModal = () => {
//     this.setState(({ isOpen }) => {
//       return {
//         isOpen: !isOpen,
//       };
//     });
//   };

//   hideModal = () => {
//     this.setState(({ isOpen }) => {
//       return {
//         isOpen: false,
//       };
//     });
//   };

//   render() {
//     const { isOpen } = this.state;

//     return (
//       <>
//         {!isOpen ? (
//           <Button onClick={this.toggleModal}>Display Modal</Button>
//         ) : (
//           <Modal
//             isOpen={isOpen}
//             fade={false}
//             style={{ width: "200px", display: "block" }}
//           >
//             <Modal.Header>
//               <Modal.Title>Edit </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit>
//                 <Form.Group>
//                   <Form.Label> New notation </Form.Label>
//                   <Form.Control type="text"></Form.Control>
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label> New translation </Form.Label>
//                   <Form.Control
//                     type="text" /*ref={translationRef}*/
//                   ></Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicCheckbox">
//                   <Form.Check
//                     type="checkbox"
//                     label="German" /*ref={germanRef}*/
//                   />
//                   <Form.Check
//                     type="checkbox"
//                     label="English" /*ref={englishRef}*/
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={this.hideModal}>Cancel</Button>
//               <Button type="submit"> Save changes </Button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

export default EditWindow;
