import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const ManageOrder = () => {
    const [order, setOrders] = useState([])
    useEffect(() => {
        fetch('https://peaceful-fortress-22704.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    return (
        <div>
            <Header></Header>
            <h1>All orders : {order.length}</h1>
            <ul>
                {
                    order.map(user => <li key={user._id}> Name: {user.name}
                        <button>cancel order</button></li>)
                }
            </ul>

        </div>
    );
};

export default ManageOrder;