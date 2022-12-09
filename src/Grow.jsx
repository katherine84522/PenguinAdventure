import { React, useState, } from "react";
import { COLORS, EXPRESSIONS, ITEMS } from "./utils";
import { useNavigate } from "react-router-dom";
import Mushroom from './Mushroom'
import Item from './Item'
// import html2canvas from "html2canvas"


function Grow({ mushrooms, setMushrooms }) {

    const [expression, setExpression] = useState("./src/assets/expressions/1.png")
    const [rightItem, setRightItem] = useState("")
    const [leftItem, setLeftItem] = useState("")
    const [bodyPart, setBodyPart] = useState("")
    const [capColor, setCapColor] = useState("./src/assets/MushroomParts/Cap/fb310e.png")
    const [stemColor, setStemColor] = useState("./src/assets/MushroomParts/Body/d8e2dc.png")
    const [limbsColor, setLimbsColor] = useState("./src/assets/MushroomParts/Limbs/fb310e.png")



    const addToFace = (image) => {
        setExpression(image)
        console.log(expression)

    }

    const changeColor = (color) => {


        if (bodyPart === "Cap") {
            setCapColor(color.cap)
            console.log(capColor)
        };
        if (bodyPart === "Stem") {
            setStemColor(color.stem)
        };
        if (bodyPart === "Limbs") {
            setLimbsColor(color.limbs)
        };


    }

    const navigate = useNavigate()


    const sendToKingdom = () => {

        const request = async () => {
            const req = await fetch("http://localhost:3000/mushrooms", {
                method: 'POST',
                body: JSON.stringify({
                    expression,
                    capColor,
                    stemColor,
                    limbsColor,
                    rightItem,
                    leftItem
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const res = await req.json()
            setMushrooms([...mushrooms, res])
        }

        request()
        navigate('/adventure')
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className="grandpa">
                    <div>
                        <div className="parent">
                            {
                                EXPRESSIONS.map((expression) => {
                                    return (
                                        <div className="child" style={{ zIndex: '100' }} >
                                            <img src={expression.image} style={{ height: '60px' }} onClick={() => { addToFace(expression.image) }} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="parent" style={{ marginTop: '50px' }}>
                            {
                                ITEMS.map((item) => {
                                    return (
                                        <div className="child">
                                            <Item item={item} rightItem={rightItem} setRightItem={setRightItem} setLeftItem={setLeftItem} leftItem={leftItem} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="colorAndBody" >
                        <div className="bodyPartButtons">
                            <button className="bodyPartButton" style={{ color: bodyPart === "Cap" ? 'black' : 'white' }} onClick={() => { setBodyPart("Cap") }}>Cap</button>
                            <button className="bodyPartButton" style={{ color: bodyPart === "Stem" ? 'black' : 'white' }} onClick={() => { setBodyPart("Stem") }}>Stem</button>
                            <button className="bodyPartButton" style={{ color: bodyPart === "Limbs" ? 'black' : 'white' }} onClick={() => { setBodyPart("Limbs") }}>Limbs</button>
                        </div>
                        <div className="colorsButtons" >
                            {
                                COLORS.map((color) => {
                                    return (
                                        <div className="colorCircles" onClick={() => { changeColor(color) }} style={{ border: '1 px solid black', height: '50px', width: '50px', background: color.color, }}> </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Mushroom expression={expression} rightItem={rightItem} leftItem={leftItem} capColor={capColor} stemColor={stemColor} limbsColor={limbsColor} />
                </div>

            </div >
            <button className='sendToKingdomBtn' onClick={() => { sendToKingdom('/adventure') }}> Send to Kingdom </button>
        </div>

    )
}

export default Grow;