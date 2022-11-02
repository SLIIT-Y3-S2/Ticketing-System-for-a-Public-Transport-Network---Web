import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import SheduleForm from './SheduleForm'

const ModleLShedule = (props) => {
    
    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton><br/>
          <Modal.Title>{props.sheduleDet != null ? ("Edit Bus Shedule") : ("Add Bus Shedule")}</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <SheduleForm det={props.sheduleDet} />
        </ModalBody>

        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    );
}

export default ModleLShedule