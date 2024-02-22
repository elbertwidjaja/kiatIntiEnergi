// import React, { useRef } from "react";
// import "./Carousel.css"; // Add your CSS file for styling

// const images = [
//   "image1.jpg",
//   "image2.jpg",
//   "image3.jpg",
//   "image4.jpg",
//   "image5.jpg",
//   "image6.jpg",
//   "image7.jpg",
//   "image8.jpg",
// ];

// const Carousel = () => {
//   const carouselRef = useRef(null);
//   let currentIndex = 0;
//   const numItems = 4; // Number of items per display

//   const showNext = () => {
//     const itemWidth = carouselRef.current.clientWidth / numItems;
//     currentIndex = (currentIndex + 1) % (images.length - numItems + 1);
//     carouselRef.current.style.transform = `translateX(-${
//       currentIndex * itemWidth
//     }px)`;
//   };

//   setInterval(showNext, 3000); // Auto slide every 3 seconds

//   return (
//     <div className="carousel">
//       <div className="carousel-container" ref={carouselRef}>
//         {images.map((image, index) => (
//           <div key={index} className="carousel-item">
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
