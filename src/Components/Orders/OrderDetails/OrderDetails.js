import React from 'react';

const OrderDetails = (props) => {

    const { Name, price, date} = props.order;

    return (
        <tr>
            <td>{Name}</td>
            <td>1</td>
            <td>{price}</td>
            <td>{date}</td>
        </tr>
    );
};

export default OrderDetails;