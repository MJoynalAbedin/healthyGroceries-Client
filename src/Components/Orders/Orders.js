import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Nav from '../Nav/Nav';
import OrderDetails from './OrderDetails/OrderDetails';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://pumpkin-surprise-01105.herokuapp.com/orders?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [signedInUser.email])

    return (

        <div>
            <Nav />
            <div style={{height: '70vh'}} className="d-flex justify-content-center align-items-center container">
                <table class="table shadow table-class">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderDetails order={order} key={order.id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;