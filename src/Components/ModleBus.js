import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import BusForm from './BusForm'

const ModleBus = (props) => {
    
    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton><br/>
          <Modal.Title>{props.BusDet != null ? ("Edit Bus") : ("Add Bus")}</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <BusForm det={props.BusDet} />
        </ModalBody>

        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    );
}

export default ModleBus