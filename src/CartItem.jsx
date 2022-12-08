

const CartItem = ({ item, handleCheck }) => {





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
                <input className='checkbox' type='checkbox' defaultChecked />
                <label className='checkBoxLabel' >Take me home</label>
            </form>
            <button className='removeBtn'>Release me</button>
        </div>
    )
}

export default CartItem