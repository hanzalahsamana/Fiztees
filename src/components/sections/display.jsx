"use client";
import { useEffect, useRef } from 'react';
import './style.css';
import display1 from "@/assets/images/displayImages/display1.webp";
import display2 from "@/assets/images/displayImages/display2.webp";
import display3 from "@/assets/images/displayImages/display3.webp";
import display4 from "@/assets/images/displayImages/display4.webp";
import display5 from "@/assets/images/displayImages/display5.webp";


const Display = () => {
  const imgContRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const imgCont = imgContRef.current;
    const images = imagesRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          images.forEach((image) => {
            image.style.animationPlayState = "running";
          });
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (imgCont) {
      observer.observe(imgCont);
    }

    return () => {
      if (imgCont) {
        observer.unobserve(imgCont);
      }
    };
  }, []);

  return (
    <>
     <p className="normal-text">
        We design durable <span>"all day everyday wear"</span> with a conscience — <span>100% made in Pakistan.</span>
      </p>
      <div className="main">
        <div className="imgCont" ref={imgContRef}>
          {[display1, display2,display3,display4, display5].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt=""
              className={`img${index + 1}`}
              ref={el => (imagesRef.current[index] = el)}
            />
          ))}
        </div>
        <div className="textContainer">
          <p className="subheading">BRAND NEW</p>
          <h1 className="heading">Fiztees-Wear</h1>
          <p className="description">Explore our stylish and comfortable Printed t-shirt Collection.</p>
          <div className="buttons">
            <a href="https://fiztees.com/collections/refresh-your-look" className="btn">Refresh Your Look</a>
          </div>
        </div>
      </div>
     
    </>

  );
};

export default Display;
