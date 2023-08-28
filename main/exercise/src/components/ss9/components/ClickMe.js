import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ClickMe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickMe = () => {
        dispatch({ type: "FETCH_USER", payload: {} });
        navigate("/users");
    }

    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
        </div>
    );
};

export default ClickMe;