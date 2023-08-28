import ModalBody from "../../modals/components/ModalBody";
import ModalFooter from "../../modals/components/ModalFooter";
import ModalHeader from "../../modals/components/ModalHeader";
import Modal from "../../modals/components/ModalBase";

export default function TestModal(props) {

    return (
        <Modal>
            <ModalHeader>
                <h3>Notification</h3>
            </ModalHeader>

            <ModalBody>
                <p>Are you sure to remove this item</p>
            </ModalBody>

            <ModalFooter>
                <button onClick={props.close} className="btn btn-outline-primary">Close</button>
                <button onClick={props.close} className="btn btn-outline-danger">Delete</button>
            </ModalFooter>
        </Modal>
    )
}