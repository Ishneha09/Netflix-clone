import React from 'react';
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../pictures/ph1.jpeg";
import img2 from "../pictures/ph2.jpeg";

const Services = () => {
  return (
    <div>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows= {false}
        showThumbs= {false}
        interval= {1000}
        >
            <div>
                <img src ={img1} alt = "item1"/>
                <p className = "legend">Full stack</p>
                </div>
                <div>

                    <img src = {img2} alt = "item3"/>
                    <p className = "legend"> peer-to-peer Support</p>
                    </div>
                </Carousel>
        </div>
  )
}

export default Services;