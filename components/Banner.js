/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner({banners}) {
     
  return (
      <div>
        <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} showArrows={false}>
            {banners.map((banner) => (
                <img
                    key={banner.data().id} 
                    src={banner.data().img} 
                    alt="" 
                />
            ))}
        </Carousel>
      </div>
  )
}

export default Banner