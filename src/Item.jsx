import { useState } from 'react'

const Item = ({ item, rightItem, setRightItem, leftItem, setLeftItem }) => {

    const [showOptions, setShowOptions] = useState(false)

    const addToRightHand = (item) => {
        setRightItem(item)
        console.log(rightItem)
    }

    const addToLeftHand = (item) => {
        setLeftItem(item)
        console.log(leftItem)
    }


    return (
        <div style={{ display: 'flex' }} onMouseEnter={() => { setShowOptions(true) }} onMouseLeave={() => { setShowOptions(false) }}>
            <img src={item.image} style={{ width: '50px' }} />
            {
                showOptions ?
                    (<div style={{ height: '10px', width: 'auto', position: 'absolute' }}>
                        <button onClick={() => { addToRightHand(item.image) }}>Right Hand</button>
                        <button onClick={() => { addToLeftHand(item.image) }}>Left Hand</button>
                    </div>)
                    : null
            }
        </div>
    )

}

export default Item


