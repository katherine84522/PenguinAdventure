import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreatedMushroom from "./CreatedMushroom";
import html2canvas from "html2canvas";
import MushroomCard from './MushroomCard'


function Kingdom({ mushrooms, setMushrooms, cartItems, setCartItems }) {

    const [backgroundImg, setBackgroundImg] = useState('./src/assets/kingdomImg.jpg')
    const [welcomeMsg, setWelcomeMsg] = useState("Mushroom Kingdom")




    const downloadImg = () => {
        const kingdom = document.getElementById('kingdom')
        html2canvas(kingdom).then((canvas) => {
            const kingdomImage = canvas.toDataURL("image/png")
            console.log(kingdomImage)
            var anchor = document.createElement('a')
            anchor.setAttribute('href', kingdomImage)
            anchor.setAttribute('download', 'MushroomPhoto.png')
            anchor.click()
            anchor.remove()
        })
    }

    useEffect(() => {
        const request = async () => {
            const req = await fetch("http://localhost:3000/mushrooms")
            const res = await req.json()

            setMushrooms(res)
        }
        request()
    }, [])


    const navigate = useNavigate()

    const handleAbduct = async (mushroom) => {

        const req = await fetch("http://localhost:3000/cartItems", {
            method: "POST",
            body: JSON.stringify({
                expression: mushroom.expression,
                capColor: mushroom.capColor,
                stemColor: mushroom.stemColor,
                limbsColor: mushroom.limbsColor,
                rightItem: mushroom.rightItem,
                leftItem: mushroom.leftItem,
                checked: true,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        const res = await req.json()


        setCartItems([...cartItems, res])
        console.log(cartItems)
        navigate('/Cart')
    }


    return (
        <div>
            <h1 className="adventureHeader">Welcome to {welcomeMsg}!</h1>
            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/kingdomImg.jpg'); setWelcomeMsg("Mushroom Kingdom") }}>Mushroom Kingdom</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/northpole.jpg'); setWelcomeMsg("the North Pole") }}>North Pole</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/mountrushmore.jpg'); setWelcomeMsg("Mount Rushmore") }}>Mount Rushmore</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/moon.jpg'); setWelcomeMsg("the Moon") }}>The Moon</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/hawaii.jpg'); setWelcomeMsg("Hawaii") }}>Hawaii</button>
            </div>
            <div id='kingdom' className='adventurePhoto'>
                <div style={{ display: 'flex' }}>
                    {
                        mushrooms.map((mushroom) => {
                            return (
                                < CreatedMushroom mushroom={mushroom} />
                            )
                        })
                    }
                </div>
                <img src={backgroundImg} className='backgroundImg' />
            </div>
            <button className="locationButton" onClick={() => { downloadImg() }} style={{ marginLeft: '45%' }}> Take a Photo</button>
            <div style={{ display: 'flex', gap: '12em', justifyContent: 'center' }}>
                {
                    mushrooms.map((mushroom) => {
                        return (
                            <MushroomCard mushroom={mushroom} setMushrooms={setMushrooms} cartItems={cartItems} setCartItems={setCartItems} handleAbduct={handleAbduct} />
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Kingdom;