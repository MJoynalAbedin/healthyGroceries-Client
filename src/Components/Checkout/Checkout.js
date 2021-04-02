import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Nav from '../Nav/Nav';
import './Checkout.css'

const Checkout = () => {

    const [product, setProduct] = useState([]);
    const { _id } = useParams();

    // console.log(product)

    useEffect(() => {
        fetch('https://pumpkin-surprise-01105.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);

    const checkedProduct = product.find(product => product?._id === _id);

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const handleAddOrder = () => {

        const date = new Date();
        const newOrder = {...signedInUser, ...checkedProduct, date};

        console.log(newOrder);

        fetch('https://pumpkin-surprise-01105.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        alert('Order Placed Successfullly!')

    }

    return (
        <div className="container">
            <Nav />
            <div style={{ height: '80vh' }} className="d-flex align-items-center justify-content-center">
                <div>
                    <h3 className='name-site'>Checkout</h3>
                    <table class="table shadow table-class">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                            <td>{checkedProduct?.Name}</td>
                            <td>1</td>
                            <td>{checkedProduct?.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleAddOrder} className="btn btn-success float-right">Place Order!</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;