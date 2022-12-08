import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <div style={{display:"flex", justifyContent: 'center', alignItems: 'center' }}>

            <Carousel
                style={{ width: '100vw' }}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./src/assets/mushroomMoon.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./src/assets/mushroomNorth.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src/assets/hawaii.png"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src/assets/mushroomKing.png"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
1
export default Home;