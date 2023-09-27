import React, { useState, useEffect } from "react";
import './CarSlider.css';

const CarSlider = () => {
  const carList = [
    {
      src: "https://platform.cstatic-images.com/medium/in/v2/stock_photos/ae781d68-814f-47e7-b461-82ddc40e8339/9d7f45b7-a7ee-4402-bb2f-9eb654e081e1.png",
      alt: "Toyota",
    },
    {
      src: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/142955/honda-2023-city-left-front-three-quarter5.jpeg?isig=0",
      alt: "Honda",
    },
    {
      src: "https://s.yimg.com/ny/api/res/1.2/rEabWT0r.XwoL42WcQnrLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMA--/https://media.zenfs.com/en/business_insider_articles_888/f7eb28d0073afe36ac4e56f87db36782",
      alt: "Tesla",
    },
    {
      src: "https://www.hyundaicanada.com/-/media/hyundai/showroom/2023/palisade/intro_content_block/intro_desktop.jpg",
      alt: "Hyundai",
    },
  ];
  
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const getIndicesToShow = () => {
    const numSlides = Math.min(slidesToShow, carList.length);

    // If there are fewer slides than the number to show, adjust the starting index accordingly
    const startIndex = (index + carList.length - Math.floor(numSlides / 2)) % carList.length;

    const indices = [];
    for (let i = 0; i < numSlides; i++) {
      const idx = (startIndex + i) % carList.length;
      indices.push(idx);
    }
    return indices;
  };


  const moveImg = (cmd) => {
    switch (cmd) {
      case 'add':
        setIndex((prevIndex) => (prevIndex + 1) % carList.length);
        break;
      case 'minus':
        setIndex((prevIndex) => (prevIndex - 1 + carList.length) % carList.length);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesToShow(1); // For smaller screens, show only 1 slide
      } else if (screenWidth <= 900) {
        setSlidesToShow(2); // For medium screens, show 2 slides
      }else if(screenWidth <= 1000){
        setSlidesToShow(3);
      } 
      else {
        setSlidesToShow(4); // For larger screens, show 3 slides (default)
      }
    };

    // Call the update function on initial load
    updateSlidesToShow();

    // Add event listener for window resize
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, [index, carList.length]); // Include 'index' and 'carList.length' as dependencies to update when the index changes

  return (
 <>
      <div className="choose-company-btn">
        <div>
          <h4 className="browse-head">Browse by make</h4>
        </div>
        <div>
          <button className="prev-but" onClick={() => moveImg('minus')}><i className="fa-solid fa-chevron-left"></i></button>
          <button className="next-but" onClick={() => moveImg('add')}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
      <div className="choose-company">
        {/* Use getIndicesToShow() to get the correct indices */}
        {getIndicesToShow().map((idx) => (
          <div key={idx}>
            <img className="choose-cmp-img" src={carList[idx].src} alt={carList[idx].alt} />
            <p>{carList[idx].alt}</p>
          </div>
        ))}
      </div>
    </>
  );
};
 
export default CarSlider;
