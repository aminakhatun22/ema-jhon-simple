import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>
                Order Summary</h1>
            <p>Selected Items: {Cart.length}</p>
        </div>
    );
};

export default Cart;