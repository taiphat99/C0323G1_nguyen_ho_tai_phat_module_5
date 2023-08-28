import { Button,Modal } from "react-bootstrap";
const OriModal = ({ msg, onClose, onConfirm }) => {
    return (
        <div
            className="modal show"
            style={{ display: 'block' }}
        >
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{msg}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button variant="primary" onClick={onConfirm}>Yes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    );
};  
export default OriModal;

