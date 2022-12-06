const CreatedMushroom = ({ mushroom }) => {
    return (
        <div>
            <img src={mushroom.rightItem} style={{ width: "200px" }} />
            <img src={mushroom.leftItem} />
            <img src={mushroom.expression} style={{ width: "50px" }} />
            <img src={mushroom.capColor} style={{ width: "50px" }} />
            <img src={mushroom.stemColor} style={{ width: "50px" }} />
            <img src={mushroom.limbsColor} style={{ width: "50px" }} />

        </div>
    )
}

export default CreatedMushroom