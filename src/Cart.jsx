import React, { useEffect, useState } from "react";
import CartItem from './CartItem'

function Cart({ cartItems, setCartItems }) {


    const [itemQuantity, setItemQuantity] = useState(0)

    useEffect(() => {
        const request = async () => {
            const req = await fetch("http://localhost:3000/cartItems")
            const res = await req.json()

            setCartItems(res)

            const checkedItems = res.filter((item) => item.checked !== false)
            setItemQuantity(checkedItems.length)
            console.log(checkedItems.length)

        }
        request()
    }, [])

    const handleCheck = async (e, item) => {


        const checked = e.target.checked


        const req = await fetch(`http://localhost:3000/cartItems/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                checked
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })


        setItemQuantity(itemQuantity + (checked ? 1 : -1))


        console.log(e.target.checked)
    }




    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='cartItemsContainer'>
                {
                    cartItems.map((item) => {
                        return (
                            <CartItem item={item} setItemQuantity={setItemQuantity} itemQuantity={itemQuantity} handleCheck={handleCheck} />
                        )
                    })
                }

            </div>
            <div className="checkOutContainer">
                <h3>Subtotal</h3>
                <h4>{itemQuantity} Mushroom{itemQuantity > 1 ? "s" : null}</h4>
                <h3>$ {itemQuantity * 17500} USD</h3>
                <button className="checkoutBtn" onClick={() => { alert('You just got scammed!') }}>Continue to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;