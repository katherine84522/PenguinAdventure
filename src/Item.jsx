import { useState } from 'react'

const Item = ({ item, leftItem, rightItem, setRightItem, setLeftItem }) => {

    const [showOptions, setShowOptions] = useState(false)

    const addToRightHand = (item) => {
        setRightItem(item.image)
        console.log(rightItem)
        setShowOptions(false)
    }

    const addToLeftHand = (item) => {
        setLeftItem(item.image)
        console.log(leftItem)
        setShowOptions(false)
    }


    return (
        <div style={{ display: 'flex', marginLeft: '10px' }}>
            <img src={item.image} style={{ width: '40px', height: '40px', zIndex: '220' }} onClick={() => { setShowOptions(!showOptions) }} />

            {
                showOptions ?
                    (<div style={{ height: '10px', width: 'auto', position: 'absolute', zIndex: '300' }}>
                        <button onClick={() => { addToRightHand(item) }}>Right Hand</button>
                        <button onClick={() => { addToLeftHand(item) }}>Left Hand</button>
                    </div>)
                    : null
            }

        </div>
    )

}

export default Item


