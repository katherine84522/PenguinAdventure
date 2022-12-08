// import { EXPRESSIONS, ITEMS } from "./utils"


const Mushroom = ({ expression, rightItem, leftItem, capColor, stemColor, limbsColor }) => {
    return (
        <div className="mushroom" id="mushroom">
            <div className='expression'>
                <img src={expression} style={{ width: "150px" }} />
            </div>
            <div className='righthanditem'>
                < img src={rightItem} style={{ height: '150px' }} />
            </div>
            <div className='lefthanditem'>
                < img src={leftItem} style={{ height: '150px' }} />
            </div>
            <div className='mushroomParts'>
                <img src={capColor} style={{ width: "800px" }} />
            </div>
            <div className='mushroomParts'>
                <img src={limbsColor} style={{ width: "800px" }} />
            </div>
            <div className='mushroomParts'>
                <img src={stemColor} style={{ width: "800px" }} />
            </div>
        </div>
    )
}

export default Mushroom