


const MushroomCard = ({ penguin, setPenguins, handleAbduct }) => {

    const eatMushroom = async () => {
        let req = await fetch(`http://localhost:3000/penguins/${penguin.id}`, {
            method: 'DELETE'
        })
        setPenguins((prevState) => {
            return [...prevState.filter(mushObject => mushObject.id !== penguin.id)]
        })
    }





    return (

        <div>
            <div className="cardMushroom" style={{ zIndex: 1 }}>
                <img src={penguin.bodyacc} style={{ width: "300px" }} />
            </div>
            <div className="cardMushroom" style={{ zIndex: 1 }}>
                <img src={penguin.headacc} style={{ width: "300px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={penguin.headColor} style={{ width: "300px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={penguin.bodyColor} style={{ width: "300px" }} />
            </div>
            <div className='cardMushroom'>
                <img src={penguin.mouthColor} style={{ width: "300px" }} />
            </div>
            <div style={{ marginTop: '420px', marginLeft: '-80px', marginBottom: '30px', zIndex: 2 }}>
                <button className="bodyPartButton" onClick={() => { eatMushroom(penguin) }}>Delete</button>
                <button className="bodyPartButton" style={{ marginLeft: '1em' }} onClick={() => { handleAbduct(penguin) }}>Abduct</button>
            </div>
        </div >

    )
}

export default MushroomCard