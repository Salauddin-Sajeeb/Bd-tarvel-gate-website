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
    const handleDelete = id => {
        const url = `https://peaceful-fortress-22704.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'delete',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you sure to delte this?');
                    const remaining = order.filter(res => res._id !== id)
                    setOrders(remaining)
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <h1>All orders : {order.length}</h1>
            <ul>
                {
                    order.map(user => <li key={user._id}> Name: {user.name}
                        <button onClick={() => handleDelete(user._id)}>deleteOrder</button></li>)
                }
            </ul>

        </div>
    );
};

export default ManageOrder;