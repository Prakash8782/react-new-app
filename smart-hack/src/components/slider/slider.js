import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../images/offers1.jpg';
import img2 from '../images/offers2.jpg';
import img3 from '../images/offers3.jpg';
import img4 from '../images/offers4.jpg';
import img5 from '../images/offers5.jpg';
import img6 from '../images/offers6.jpg';
import img7 from '../images/offers7.jpg';
import img8 from '../images/offers8.jpg';
import img9 from '../images/offers9.jpg';
import img10 from '../images/offers10.jpg';
import img11 from '../images/offers11.jpg';
import img12 from '../images/offers12.jpg';
import banner1 from '../images/minimum.jpg';
import banner2 from '../images/sbicard.jpg';




const slideImages = [
    {
      of: img1
    },
    {
      of: img2
    },
    {
      of: img3
    },
    {
      of: img4
    },
    {
      of: img5
    },
    {
      of: img6
    },
    {
      of: img7
    },
    {
      of: img8
    },
    {
      of: img9
    },
    {
      of: img10
    },
    {
      of: img11
    },
    {
      of: img12
    } 
  ];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="slide" key={index}>
                <img src={slideImage.of} width={1365}/>
            </div>
          ))} 
        </Slide>
            <img src={banner1} width={1365}/>
            <img src={banner2} width={1365}/>
      </div>
    )
}

export default Slideshow;