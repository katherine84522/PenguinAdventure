import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreatedMushroom from "./CreatedMushroom";
import html2canvas from "html2canvas";
import MushroomCard from './MushroomCard'


function Kingdom({ penguins, setPenguins, cartItems, setCartItems }) {

    const [backgroundImg, setBackgroundImg] = useState('./src/assets/kingdomImg.jpg')
    const [welcomeMsg, setWelcomeMsg] = useState("Fairytale Kingdom")





    const downloadImg = () => {
        const kingdom = document.getElementById('kingdom')
        html2canvas(kingdom).then((canvas) => {
            const kingdomImage = canvas.toDataURL("image/png")
            console.log(kingdomImage)
            var anchor = document.createElement('a')
            anchor.setAttribute('href', kingdomImage)
            anchor.setAttribute('download', 'PenguinPhoto.png')
            anchor.click()
            anchor.remove()
        })
    }

    useEffect(() => {
        const request = async () => {
            const req = await fetch("http://localhost:3000/penguins")
            const res = await req.json()

            setPenguins(res)
        }
        request()
    }, [])


    const navigate = useNavigate()

    const handleAbduct = async (penguin) => {

        const req = await fetch("http://localhost:3000/cartItems", {
            method: "POST",
            body: JSON.stringify({
                headacc: penguin.headacc,
                bodyacc: penguin.bodyacc,
                headColor: penguin.headColor,
                bodyColor: penguin.bodyColor,
                mouthColor: penguin.mouthColor,
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
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/kingdomImg.jpg'); setWelcomeMsg("Fairytale Kingdom") }} style={{ color: welcomeMsg === "Fairytale Kingdom" ? 'black' : 'white' }}>Fairytale Kingdom</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/northpole.jpg'); setWelcomeMsg("the North Pole") }} style={{ color: welcomeMsg === "the North Pole" ? 'black' : 'white' }}>North Pole</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/mountrushmore.jpg'); setWelcomeMsg("Mount Rushmore") }} style={{ color: welcomeMsg === "Mount Rushmore" ? 'black' : 'white' }}>Mount Rushmore</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/moon.jpg'); setWelcomeMsg("the Moon") }} style={{ color: welcomeMsg === "the Moon" ? 'black' : 'white' }}>The Moon</button>
                <button className="locationButton" onClick={() => { setBackgroundImg('./src/assets/hawaii.jpg'); setWelcomeMsg("Hawaii") }} style={{ color: welcomeMsg === "Hawaii" ? 'black' : 'white' }}>Hawaii</button>
            </div>
            <div id='kingdom' className='adventurePhoto'>
                <div style={{ display: 'flex', zIndex: 1 }}>
                    {
                        penguins.map((penguin) => {
                            return (
                                < CreatedMushroom penguin={penguin} />
                            )
                        })
                    }
                </div>
                <img src={backgroundImg} className='backgroundImg' />
            </div>
            <button className="locationButton" onClick={() => { downloadImg() }} style={{ marginLeft: '45%' }}> Take a Photo</button>
            <div style={{ display: 'flex', gap: '15em', justifyContent: 'center', marginTop: '-4vh' }}>
                {
                    penguins.map((penguin) => {
                        return (
                            <MushroomCard penguin={penguin} setPenguins={setPenguins} cartItems={cartItems} setCartItems={setCartItems} handleAbduct={handleAbduct} />
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Kingdom;