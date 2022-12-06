import React from "react";
import CreatedMushroom from "./CreatedMushroom";

function Kingdom({ mushrooms }) {
    return (
        <>
            <h1>This is the Mushroom Kingdom!</h1>
            {
                mushrooms.map((mushroom) => {
                    return (
                        < CreatedMushroom mushroom={mushroom} />
                    )
                })
            }
        </>
    );
}

export default Kingdom;