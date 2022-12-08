


const MushroomCard = ({ mushroom, setMushrooms, cartItems, setCartItems, handleAbduct }) => {

    const eatMushroom = async () => {
        let req = await fetch(`http://localhost:3000/mushrooms/${mushroom.id}`, {
            method: 'DELETE'
        })
        setMushrooms((prevState) => {
            return [...prevState.filter(mushObject => mushObject.id !== mushroom.id)]
        })
    }





    return (

        <div>
            <div className="cardRightItem">
                <img src={mushroom.rightItem} style={{ height: "70px" }} />
            </div>
            <div className="cardLeftItem">
                <img src={mushroom.leftItem} style={{ height: "70px" }} />
            </div>
            <div className='cardExpression'>
                <img src={mushroom.expression} style={{ width: "50px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={mushroom.capColor} style={{ width: "300px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={mushroom.stemColor} style={{ width: "300px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={mushroom.limbsColor} style={{ width: "300px" }} />
            </div>
            <div style={{ marginTop: '250px', marginLeft: '-50px' }}>
                <button className="bodyPartButton" onClick={() => { eatMushroom(mushroom) }} >Eat</button>
                <button className="bodyPartButton" onClick={() => { handleAbduct(mushroom) }} style={{ marginLeft: '1em' }}>Abduct</button>
            </div>
        </div >

    )
}

export default MushroomCard