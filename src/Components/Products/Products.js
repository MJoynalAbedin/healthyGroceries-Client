import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://pumpkin-surprise-01105.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            })

    }, [])
    return (
        <div className="products-container mt-5 mb-5">
            {
                spinner ?

                    <div className="d-flex justify-content-center">
                        <div id='new-spinners' class="d-flex justify-content-center d-none">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div>
                    </div>

                    :

                    products.map(product => <ProductDetails key={product.id} product={product} />)

            }
        </div>
    );
};

export default Products;