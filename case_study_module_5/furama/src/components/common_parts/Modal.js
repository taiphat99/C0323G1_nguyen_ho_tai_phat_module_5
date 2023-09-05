import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Modal({target,handleShow,handleHide ,onConfirm}) {

    return (
        <>
            <MDBModal show={handleShow} onHide={handleHide} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Notification</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={handleHide}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>Do you want to remove <b>{target}</b>?</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={handleHide}>
                                Cancel
                            </MDBBtn>
                            <MDBBtn onClick={onConfirm}>Yes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}