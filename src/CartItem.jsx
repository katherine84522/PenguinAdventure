import { useEffect, useState } from 'react'

const CartItem = ({ item, handleRemove, setItemQuantity, itemQuantity }) => {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheck = async (e) => {
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

        setIsChecked(checked)
        setItemQuantity(itemQuantity + (checked ? 1 : -1))

    }



    useEffect(() => {
        const request = async () => {
            const req = await fetch(`http://localhost:3000/cartItems/${item.id}`)
            const res = await req.json()
            console.log(res.checked)
            setIsChecked(res.checked)
        }
        request()
    }, [])



    return (
        <div className="cartItem">
            <div className="cartRightItem">
                <img src={item.rightItem} style={{ height: "70px" }} />
            </div>
            <div className="cartLeftItem">
                <img src={item.leftItem} style={{ height: "70px" }} />
            </div>
            <div className='cartExpression'>
                <img src={item.expression} style={{ width: "50px" }} />
            </div>
            <div className='cartMushroom'>
                <img src={item.capColor} style={{ width: "300px" }} />
            </div>
            <div className='cartMushroom'>
                <img src={item.stemColor} style={{ width: "300px" }} />
            </div>
            <div className='cartMushroom'>
                <img src={item.limbsColor} style={{ width: "300px" }} />
            </div>
            <form onChange={(e) => { handleCheck(e, item) }}>
                <input className='checkbox' type='checkbox' checked={isChecked} />
                <label className='checkBoxLabel' >Take me home</label>
            </form>
            <button onClick={() => { handleRemove(item) }} className='removeBtn'>Release me</button>
        </div>
    )
}

export default CartItem