import React, { useEffect, useState } from 'react';

const FunctionComp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    return (
        <>
            <input value={firstName} onChange={(event) => handleFirstNameChange(event)} placeholder='First Name'></input>
            <input value={lastName} onChange={(event) => handleLastNameChange(event)} placeholder='Last Name'></input>
            <h1>Hello {firstName} {lastName}</h1>
        </>
    );
};

export default FunctionComp;