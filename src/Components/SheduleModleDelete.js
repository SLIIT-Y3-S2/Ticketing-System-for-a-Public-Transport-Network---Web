import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import SheduleDeleteForm from "./SheduleDeleteForm";

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
          
             Delete Shedule
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
          <SheduleDeleteForm bus={props.Sheduledelete} />
        
        
      </ModalBody>
    </Modal>
  );
};

export default ModleDelete;