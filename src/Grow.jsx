import { React, useState, } from "react";
import { COLORS, HEADACC, BODYACC } from "./utils";
import { useNavigate } from "react-router-dom";
import Mushroom from './Mushroom'
// import html2canvas from "html2canvas"


function Grow({ penguins, setPenguins }) {

    const [headacc, setHeadAcc] = useState("")
    const [bodyacc, setBodyAcc] = useState("")
    const [bodyPart, setBodyPart] = useState("")
    const [headColor, setHeadColor] = useState("./src/assets/penguins/head-color/orange-h.png")
    const [bodyColor, setBodyColor] = useState("./src/assets/penguins/body-color/blue-b.png")
    const [mouthColor, setMouthColor] = useState("./src/assets/penguins/mouth-and-feet/yellow-m.png")



    const addToFace = (image) => {
        setHeadAcc(image)
        console.log(headacc)

    }

    const addToBody = (image) => {
        setBodyAcc(image)
        console.log(bodyacc)

    }

    const changeColor = (color) => {


        if (bodyPart === "Head") {
            setHeadColor(color.head)
            console.log(headColor)
        };
        if (bodyPart === "Body") {
            setBodyColor(color.body)
        };
        if (bodyPart === "Mouth") {
            setMouthColor(color.mouth)
        };


    }

    const navigate = useNavigate()


    const sendToKingdom = () => {

        const request = async () => {
            const req = await fetch("http://localhost:3000/penguins", {
                method: 'POST',
                body: JSON.stringify({
                    headacc,
                    bodyacc,
                    headColor,
                    bodyColor,
                    mouthColor
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const res = await req.json()
            setPenguins([...penguins, res])
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
                                HEADACC.map((acc) => {
                                    return (
                                        <div className="child" style={{ zIndex: '100' }} >
                                            <img src={acc.icon} style={{ height: '60px' }} onClick={() => { addToFace(acc.image) }} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="parent" style={{ marginTop: '50px' }}>
                            {
                                BODYACC.map((acc) => {
                                    return (
                                        <div className="child">
                                            <div style={{ display: 'flex', marginLeft: '10px' }}>
                                                <img src={acc.icon} style={{ width: '40px', height: '40px', zIndex: '220' }} onClick={() => { addToBody(acc.image) }} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="colorAndBody" >
                        <div className="bodyPartButtons">
                            <button className="bodyPartButton" style={{ color: bodyPart === "Head" ? 'black' : 'white' }} onClick={() => { setBodyPart("Head") }}>Head</button>
                            <button className="bodyPartButton" style={{ color: bodyPart === "Body" ? 'black' : 'white' }} onClick={() => { setBodyPart("Body") }}>Body</button>
                            <button className="bodyPartButton" style={{ color: bodyPart === "Mouth" ? 'black' : 'white' }} onClick={() => { setBodyPart("Mouth") }}>Mouth</button>
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
                </div>
                <div style={{ marginTop: '-10vh', marginLeft: '10vw' }}>
                    <Mushroom bodyacc={bodyacc} headacc={headacc} headColor={headColor} bodyColor={bodyColor} mouthColor={mouthColor} />
                </div>
                <div style={{ marginTop: '70vh', marginLeft: '30vw' }}>
                    <button className='sendToKingdomBtn' onClick={() => { sendToKingdom('/adventure') }}> Send to Kingdom </button>
                </div>
            </div >

        </div>

    )
}

export default Grow;