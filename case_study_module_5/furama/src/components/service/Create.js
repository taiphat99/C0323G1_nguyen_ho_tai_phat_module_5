
import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import House from "./create/House";
import Villa from "./create/Villa";
import Room from "./create/Room";

function ServiceCreate() {

    const [villaIsActive, setVillaIsActive] = useState(true);
    const [houseIsActive, setHouseIsActive] = useState(false);
    const [roomIsActive, setRoomIsActive] = useState(false);

    const handleVillaButton = () => {
        setVillaIsActive(true);
        setHouseIsActive(false);
        setRoomIsActive(false);
    }
    const handleHouseButton = () => {
        setVillaIsActive(false);
        setHouseIsActive(true);
        setRoomIsActive(false);
    }
    const handleRoomButton = () => {
        setVillaIsActive(false);
        setHouseIsActive(false);
        setRoomIsActive(true);
    }



    return (
        <>
            <div className="cus-container">
                <div className="mb-3">
                    <MDBBtn className={villaIsActive ? 'btn btn-dark mx-2' : 'mx-2 btn btn-outline-dark'} color='dark' onClick={handleVillaButton}>
                        Villa
                    </MDBBtn>
                    <MDBBtn className={houseIsActive ? 'btn btn-dark mx-2' : 'mx-2 btn btn-outline-dark'} color='dark' id="house-button" onClick={handleHouseButton}>
                        House
                    </MDBBtn>
                    <MDBBtn className={roomIsActive ? 'btn btn-dark mx-2' : 'mx-2 btn btn-outline-dark'} color='dark' id="room-button" onClick={handleRoomButton}>
                        Room
                    </MDBBtn>
                </div>
                {villaIsActive && <Villa />}
                {houseIsActive && <House />}
                {roomIsActive && <Room />}
            </div >

        </>
    )
}
export default ServiceCreate;