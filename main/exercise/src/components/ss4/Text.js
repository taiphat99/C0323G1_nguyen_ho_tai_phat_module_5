import React, { useEffect, useState } from 'react';

const Text = () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        console.log('Mounted')
    })

    return (
        <>
          
        </>
    );
};

export default Text;