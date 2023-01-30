import React, { useState } from 'react';
import styles from "./reviews_content.component.styles.scss";
import review_bg from "../../assets/images/Reviews_background.webp";
import Carousel from 'react-bootstrap/Carousel';
import { color } from '@mui/system';

export default function Reviews_content() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="Reviews-section" >
            <div className="carousel-div">
            <Carousel  activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item >
                    <div className='Item'>
                    <p>Well if you want team of professional to make your flat a HOME then this is it.<br/>
                    A very well dedicated and creative workforce which not only understands client's needs but also give the client the best approach for the work.<br/>
                     <b>THANK YOU  TEAM VIVID DESIGN.</b></p>
                    </div>
                    <Carousel.Caption>
                    <div className='Item-caption'>
                    <h3>Mr Suraj Mundra</h3>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='Item'>
                    <p>Vivid Design was recommended to me by a friend and it turned out to be a great decision for me.The quality and dedication you get is something I never seen before. Even after the services are given they make sure that everything at its best.<br/>
                     So I would really recommend Vivid design, you won't be disappointed.</p>
                    </div>
                    <Carousel.Caption>
                    <div className='Item-caption'>
                    <h3>Ms Mansi Waghela</h3>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='Item'>
                    <p>
                        One of the professional and creative interior designer in city.<br/>
                        Services are tremendous and punctual.<br/>
                        Looking ahead with more work<br/>
                    </p>
                    </div>
                    <Carousel.Caption>
                    <div className='Item-caption'>
                    <h3>Mr Bhavesh Purohit</h3>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
}
    