import React, { useEffect, useState } from 'react';
import AddProduct from '../AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts'
import Nav from '../Nav/Nav';


const Admin = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pumpkin-surprise-01105.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const [addProduct, setAddProduct] = useState(false);

    return (
        <div>
            <Nav />
            <div style={{ height: '100%' }} className="d-flex justify-content-center align-items-center container">
                <div>
                    <button onClick={() => setAddProduct(!addProduct)} className="btn-success btn mt-3 mb-3">Add or Delete Products</button>
                    {
                        addProduct ?

                            <AddProduct />

                            :
                            <div>
                                <table className="table shadow table-class mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => <ManageProducts key={product.id} product={product} />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;