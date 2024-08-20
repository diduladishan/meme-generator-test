import React, { useState, useRef } from "react";

// Import your images
import image1 from "../../assets/image01.png";
import image2 from "../../assets/image02.png";
import image3 from "../../assets/image03.png";
import image4 from "../../assets/image04.png";
import image5 from "../../assets/image05.png";
import image6 from "../../assets/image06.png";
import image7 from "../../assets/image07.png";
import image8 from "../../assets/5.png"; // Add more images as needed

const images = [image1, image2, image3, image4, image5, image6, image7, image8]; // Add all your imported images here

const ImageSelector = ({ onImageSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    const totalImages = images.length;
    const imagesToShow = 5; // Number of images to show at once
    const newIndex = Math.min(currentIndex + 1, totalImages - imagesToShow);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth", // Smooth scroll behavior
      });
    }
  };

  const handleSelect = (image) => {
    onImageSelect(image);
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "#333", // Background color of the button
          color: "#fff", // Color of the arrows
          border: "none",
          borderRadius: "50%",
          width: "50px", // Size of the button
          height: "50px", // Size of the button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px", // Size of the arrow icon
          cursor: "pointer",
        }}
      >
        ←
      </button>
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          width: "100%",
          scrollBehavior: "smooth",
        }}
      >
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Meme ${index}`}
            style={{
              width: "20%", // Adjust based on the number of images to show at once
              height: "auto",
              flexShrink: 0,
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            onClick={() => handleSelect(image)}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "#333", // Background color of the button
          color: "#fff", // Color of the arrows
          border: "none",
          borderRadius: "50%",
          width: "50px", // Size of the button
          height: "50px", // Size of the button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px", // Size of the arrow icon
          cursor: "pointer",
        }}
      >
        →
      </button>
    </div>
  );
};

export default ImageSelector;
