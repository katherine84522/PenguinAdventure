import React from "react";

function Cart({ cartItems }) {

    return (
        <div>
            {
                cartItems.map((item) => {
                    return (
                        <div>
                            <img src={item.image} style={{ width: '100px', height: 'auto' }} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;