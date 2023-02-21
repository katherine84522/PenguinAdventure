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



    const handleRemove = async (item) => {
        const req = await fetch(`http://localhost:3000/cartItems/${item.id}`, {
            method: "DELETE"
        })
        setCartItems((prevState) => {
            return [...prevState.filter(mushObject => mushObject.id !== item.id)]
        })
        setItemQuantity(itemQuantity - 1)

    }





    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='cartItemsContainer'>
                {
                    cartItems.map((item) => {
                        return (
                            <CartItem item={item} setItemQuantity={setItemQuantity} itemQuantity={itemQuantity} handleRemove={handleRemove} />
                        )
                    })
                }

            </div>
            <div className="checkOutContainer">
                <h3 className='checkOutText' >Subtotal</h3>
                <h4 className='checkOutText'>{itemQuantity} Penguin{itemQuantity > 1 ? "s" : null}</h4>
                <h3 className='checkOutText'>$ {itemQuantity * 17500} USD</h3>
                <button className="checkoutBtn" onClick={() => { alert('You just got scammed!') }}>Continue to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;