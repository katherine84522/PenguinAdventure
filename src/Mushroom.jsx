// import { EXPRESSIONS, ITEMS } from "./utils"


const Mushroom = ({ bodyacc, headacc, headColor, bodyColor, mouthColor }) => {
    return (
        <div className="mushroom" id="mushroom">
            <div className='mushroomParts' style={{ zIndex: 200 }}>
                <img src={bodyacc} style={{ width: "500px" }} />
            </div>
            <div className='mushroomParts' style={{ zIndex: 200 }}>
                <img src={headacc} style={{ width: "500px" }} />
            </div>
            <div className='mushroomParts'>
                <img src={headColor} style={{ width: "500px" }} />
            </div>
            <div className='mushroomParts'>
                <img src={bodyColor} style={{ width: "500px" }} />
            </div>
            <div className='mushroomParts'>
                <img src={mouthColor} style={{ width: "500px" }} />
            </div>
        </div>
    )
}

export default Mushroom