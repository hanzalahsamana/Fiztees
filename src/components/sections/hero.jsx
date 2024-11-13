"use client";

import banner1 from "@/assets/images/displayImages/banner1.jpg";
import banner2 from "@/assets/images/displayImages/banner2.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel pause="false" className="h-[calc(100vh_-_75px)] overflow-hidden">
      <Carousel.Item interval={2500} className="">
        <img
          className="d-block w-100 h-[calc(100vh_-_75px)] max-[700px]:object-center bg-cover object-cover object-[center_-60px]"
          src={banner1.src}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 h-[calc(100vh_-_75px)] max-[700px]:object-center bg-cover object-cover object-[center_-60px]"
          src={banner2.src}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
