import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Test01() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: false,
    });
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    // Refresh AOS after the component is mounted and updated
    AOS.refresh();
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
        height: "20vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <p data-aos="fade-right">ffasfafa</p>
    </div>
  );
}

export default Test01;
