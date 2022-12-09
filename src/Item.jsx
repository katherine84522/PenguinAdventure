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
                    (<div style={{ zIndex: '300', paddingBottom: '10px', display: 'flex' }}>
                        <button className='bodyPartButton' onClick={() => { addToRightHand(item) }}>Right Hand</button>
                        <button className='bodyPartButton' onClick={() => { addToLeftHand(item) }}>Left Hand</button>
                    </div>)
                    : null
            }

        </div>
    )

}

export default Item


