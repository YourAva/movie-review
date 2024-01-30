import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % items.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "active" : "inactive"}
          >
            <img
              src={item.img}
              alt={item.imgAlt}
              className="carousel-items-image"
            />
          </div>
        ))}
      </div>
      <button onClick={goToPreviousSlide} className="carousel-button prev">
        <img
          src="./arrow-left.png"
          alt="arrow-left"
          className="carousel-button-left-arrow"
        />
      </button>
      <button onClick={goToNextSlide} className="carousel-button next">
        <img
          src="./arrow-right.png"
          alt="arrow-right"
          className="carousel-button-right-arrow"
        />
      </button>
    </div>
  );
};

export default Carousel;
