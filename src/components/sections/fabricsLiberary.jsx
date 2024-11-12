"use client";

import "./style.css";
import section3 from "@/assets/images/sectionImages/section3.webp";

const FabricsLiberary = () => {
  return (
    <div className="fabric-cutting-container py-[10px]">
      <div className="fabric-img">
        <div className="fabric-text-wrap">
          <h2>Fabric Library</h2>
          <p>
            Welcome to the Fiztees Library—an exclusive collection of our
            finest unstitched fabrics. We’ve curated this space to help you
            explore, touch, and experience the quality of our premium cotton and
            wash n wear materials.
          </p>
          <p>
            At Hannan Fabrics, we understand that selecting the right fabric is
            an art. Our library offers a seamless way to discover our diverse
            range, whether you’re looking for the soft feel of our Shan-e-Azwaan
            collection or the refined elegance of our Heritage collection.
          </p>
          <p>
            Explore with confidence and find the fabric that resonates with your
            unique style.
          </p>
        </div>
        <img
          src={section3.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default FabricsLiberary;
