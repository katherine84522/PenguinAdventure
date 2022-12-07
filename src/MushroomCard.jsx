// import { useState } from 'react'


const MushroomCard = ({ mushroom }) => {


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
                <button >Eat</button>
                <button style={{ marginLeft: '1em' }}>Abduct</button>
            </div>
        </div>

    )
}

export default MushroomCard