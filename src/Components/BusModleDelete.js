import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import BusDeleteForm from "./BusDeleteForm";

const ModleDelete = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          
             Delete Bus
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
          <BusDeleteForm bus={props.busdelete} />
        
        
      </ModalBody>
    </Modal>
  );
};

export default ModleDelete;