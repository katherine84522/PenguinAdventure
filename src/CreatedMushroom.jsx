import { useState } from 'react'
import DragMove from "./DragMove";

const CreatedMushroom = ({ penguin }) => {


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
                <div className="createdMushroom" style={{ zIndex: 100 }}>
                    <img src={penguin.headacc} style={{ width: "300px" }} />
                </div>
                <div className="createdMushroom" style={{ zIndex: 100 }}>
                    <img src={penguin.bodyacc} style={{ width: "300px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={penguin.headColor} style={{ width: "300px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={penguin.bodyColor} style={{ width: "300px" }} />
                </div>
                <div className='createdMushroom'>
                    <img src={penguin.mouthColor} style={{ width: "300px" }} />
                </div>

            </div>
        </DragMove >
    )
}

export default CreatedMushroom