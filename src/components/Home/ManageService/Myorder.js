import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import Header from '../Header/Header';

const Myorder = () => {
    const [myorder, setOrder] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch('')
    }, [])

    return (
        <div>
            <Header></Header>
            <h1>my order list</h1>
        </div>
    );
};

export default Myorder;