// import { EXPRESSIONS, ITEMS } from "./utils"


const Mushroom = ({ expression, rightItem, leftItem, capColor, stemColor, limbsColor }) => {
    return (
        <div className="mushroom" id="mushroom">
            <div className='expression'>
                <img src={expression} style={{ width: "150px" }} />
            </div>
            <div className='righthanditem' style={{ marginTop: '200px' }}>
                < img src={rightItem} style={{ width: "100px" }} />
            </div>
            <div className='lefthanditem' style={{ marginTop: '200px', marginLeft: '500px' }}>
                < img src={leftItem} style={{ width: "100px" }} />
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