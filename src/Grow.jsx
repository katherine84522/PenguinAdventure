import { React, useState } from "react";
import { COLORS, EXPRESSIONS, ITEMS } from "./utils";
import { useNavigate } from "react-router-dom";
import Mushroom from './Mushroom'
import Item from './Item'


function Grow() {

    const [expression, setExpression] = useState("./src/assets/expressions/1.png")
    const [rightItem, setRightItem] = useState("")
    const [leftItem, setLeftItem] = useState("")
    const [bodyPart, setBodyPart] = useState("")
    const [capColor, setCapColor] = useState("")
    const [stemColor, setStemColor] = useState("")
    const [limbsColor, setLimbsColor] = useState("")


    const addToFace = (image) => {
        setExpression(image)
        console.log(expression)

    }

    const changeColor = (color) => {


        if (bodyPart === "Cap") {
            setCapColor(color)
            console.log(capColor)
        };
        if (bodyPart === "Stem") {
            setStemColor(color)
        };
        if (bodyPart === "Limbs") {
            setLimbsColor(color)
        };


    }

    const navigate = useNavigate()



    return (
        <div>
            <div style={{ display: "flex" }}>
                <div>
                    {
                        EXPRESSIONS.map((expression) => {
                            return (
                                <div>
                                    <img src={expression.image} style={{ height: '50px' }} onClick={() => { addToFace(expression.image) }} />
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    {
                        ITEMS.map((item) => {
                            return (
                                < Item item={item} rightItem={rightItem} setRightItem={setRightItem} setLeftItem={setLeftItem} leftItem={leftItem} />
                            )
                        })
                    }
                </div>
                < Mushroom expression={expression} rightItem={rightItem} leftItem={leftItem} capColor={capColor} stemColor={stemColor} limbsColor={limbsColor} />
                <div>
                    <button onClick={() => { setBodyPart("Cap") }}>Cap</button>
                    <button onClick={() => { setBodyPart("Stem") }}>Stem</button>
                    <button onClick={() => { setBodyPart("Limbs") }}>Limbs</button>
                </div>
                <div >
                    {
                        COLORS.map((color) => {
                            return (
                                <div onClick={() => { changeColor(color) }} style={{ border: '1 px solid black', height: '50px', width: '50px', background: color }}> </div>
                            )
                        })
                    }
                </div>
            </div >
            <button onClick={() => { navigate('/kingdom') }}> Send to Kingdom </button>
        </div>

    )
}

export default Grow;