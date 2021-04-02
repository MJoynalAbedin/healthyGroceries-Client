import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = (props) => {

    const {_id, Name, img, price } = props.product;

    return (
        <div className="product-card">
            <img src={img} alt="" />
            <h4>{Name}</h4>
            <div className="d-flex justify-content-between mt-3">
                <h3 className="text-success">{price}</h3>
                <Link to={`/product/${_id}`}><button className="btn btn-success">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default ProductDetails;