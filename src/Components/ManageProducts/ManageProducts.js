import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageProducts = (props) => {

    const { _id, Name, price} = props.product;

    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`https://pumpkin-surprise-01105.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(result => {
            console.log('Deleted!')
        })

        alert('Deleted Successfully!')
    }

    return (
        <tr>
            <td>{Name}</td>
            <td>1</td>
            <td>{price}</td>
            <td><button onClick={() => handleDeleteProduct(_id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
    );
};

export default ManageProducts;