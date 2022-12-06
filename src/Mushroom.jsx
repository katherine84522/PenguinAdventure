// import { EXPRESSIONS, ITEMS } from "./utils"

const Mushroom = ({ expression, rightItem, leftItem, capColor, stemColor, limbsColor }) => {
    return (
        <div className="mushroom" id="mushroom">
            <div className='righthanditem' style={{ marginTop: '200px' }}>
                < img src={rightItem} style={{ width: "100px" }} />
            </div>
            <div className='lefthanditem' style={{ marginTop: '200px', marginLeft: '500px' }}>
                < img src={leftItem} style={{ width: "100px" }} />
            </div>
            <div className='expression'>
                <img src={expression} style={{ width: "150px" }} />
            </div>
            <div className='cap' style={{ background: capColor }} ></div>
            <div className='stem' style={{ background: stemColor }}></div>
            <div className='limbs' style={{ background: limbsColor }}></div>
            <div style={{ textAlign: "center" }}>
                <img src="https://i.pinimg.com/564x/c2/08/d6/c208d68c482d1aa3ed7585d1c9566972.jpg" style={{ width: '700px' }} />
            </div>
        </div>
    )
}

export default Mushroom