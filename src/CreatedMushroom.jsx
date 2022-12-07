import { useState } from 'react'
import DragMove from "./DragMove";

const CreatedMushroom = ({ mushroom }) => {


    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });

    const handleDragMove = (e) => {
        setTranslate({
            x: translate.x + e.movementX,
            y: translate.y + e.movementY
        });
    };


    return (
        <DragMove onDragMove={handleDragMove}>
            <div style={{ marginLeft: "200px", transform: `translateX(${translate.x}px) translateY(${translate.y}px)` }}>
                <div className="mushroomRightItem">
                    <img src={mushroom.rightItem} style={{ height: "70px" }} />
                </div>
                <div className="mushroomLeftItem">
                    <img src={mushroom.leftItem} style={{ height: "70px" }} />
                </div>
                <div className='mushroomExpression'>
                    <img src={mushroom.expression} style={{ width: "50px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={mushroom.capColor} style={{ width: "300px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={mushroom.stemColor} style={{ width: "300px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={mushroom.limbsColor} style={{ width: "300px" }} />
                </div>

            </div>
        </DragMove >
    )
}

export default CreatedMushroom