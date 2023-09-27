import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect } from "react";
import ProductSlider from '../CarSlider.js';




const Heading= ()=>{
    return (
      <>
      <nav className="header-container">
      <div className="left-nav"><li><img src="./Turo-Symbol.png" alt="tLogo" className="logo"></img></li>
      <li><input className="search-box" placeholder="City, airport, address or hotel"></input></li></div>
      <div className="right-nav">
      <li><button className="host-button">Become a host</button></li>
      <li className="account"><i className="fa-solid fa-bars">&nbsp;&nbsp;<i className="fa-solid fa-user"></i></i></li>
      </div>   
      </nav>
      </>
    );
}

const Search=()=>{
  const [selectedDate, setSelectedDate]= useState(null)
  const [selectedDate2, setSelectedDate2]= useState(null)
  const placeholderText= "City, airport, address or hotel";
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const handleFromDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDate2(null); // Reset the "Until" date when "From" date changes
  };
  return(
<>
<div className="image-container-front">
<br />
<div className="date-container">
<div>
<p className="searchbar-label">where</p>
<input className="search-city" placeholder={placeholderText} size={placeholderText.length}></input>
</div>
<div>
        <p className="searchbar-label">From</p>
        <DatePicker
          showTimeInput
          className="date-from"
          selected={selectedDate} 
          onChange={handleFromDateChange}
          dateFormat="dd/MM/yyyy   HH:mm aa"
          minDate={today}
          placeholderText={today}
          size={placeholderText.length}
        />
      </div>
      <div>
        <p className="searchbar-label">Until</p>
        <DatePicker
          className="date-until"
          showTimeInput
          selected={selectedDate2} 
          onChange={date2 => setSelectedDate2(date2)}
          dateFormat="dd/MM/yyyy   HH:mm aa"
          minDate={selectedDate ? new Date(selectedDate.getTime() + 86400000) : new Date()}
          placeholderText={tomorrow}
          size={placeholderText.length}
          disabled={!selectedDate} // Disable "Until" date picker if "From" date is not selected
        />
      </div>
<div>
<i className="fa-solid fa-magnifying-glass"></i></div>
</div>
</div>
</>
  )
}


const Midhead= ()=>{
  return(
    <>
      <p className="mid-head"><h1>Find your drive</h1>
      <h3>Explore the world's largest car sharing marketplace</h3></p>
      <br/><br/>

    </>
  )
}
const DialogWPicture= ()=>{
  return(
    <>
  <div className="dialog-box">
      <div className="dialog-text">
        <h3>Turo is Carbon Neutral Certified</h3>
        <p>Drive and share cars knowing your carbon footprint is balanced out by greenhouse-gas-reduction projects. Carbon-neutral travel on Turo is now verified with a carbon neutral certification!</p>
        <button>Explore sustainability on Turo</button>
      </div>
      <div>
        <img className="dialog-img" width={"400px"} src="https://www.popsci.com/uploads/2019/04/22/RACMJSXXIK7BFWBEPV5KGO6TNA.jpg?auto=webp"></img>
      </div>
  </div>
  <div className="dialog-box">
    <div>
        <img className="dialog-img-second" width={"400px"} src="https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg"></img>
     </div>
     <div className="dialog-text-second">
     <h3>Find the perfect car <span className="purple-text">to conquer the great outdoors</span></h3>
        <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
        <button>Browse cars</button>
      </div>
  </div>
    </>
  );
}
const CitySlider = ()=>{
    const CitySliderImg = [
     {
       src:"./cities/calgary.png",
       alt:"Calgary"
     },
     {
       src:"./cities/halifax.png",
       alt:"Halifax"
     },
     {
      src:"./cities/jerseycity.png",
      alt:"Jersey"
     },
     {
      src:"./cities/montreal.png",
      alt:"Montreal"
     }
     ,
     {
      src:"./cities/quebec.png",
      alt:"Quebec"
     }
     ,
     {
      src:"./cities/vancouver.png",
      alt:"Vancouver"
     }
    ];

  
    const [index, setIndex] = useState(0);
  
    const moveImg = (cmd) => {
      switch (cmd) {
        case 'add':
          setIndex((prevIndex) => (prevIndex + 1) % CitySliderImg.length);
          break;
        case 'minus':
          setIndex((prevIndex) => (prevIndex - 1 + CitySliderImg.length) % CitySliderImg.length);
          break;
        default:
          break;
      }
    };
  
    return (
      <>
        
        <div className="choose-company-btn">
        <div><h4 className="browse-head">Browse by make</h4></div>
         <div><button className="prev-but" onClick={() => moveImg('minus')}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="next-but" onClick={() => moveImg('add')}><i className="fa-solid fa-chevron-right"></i></button></div>
        </div>
        <div className="choose-company">
          <div><img width="190px" src={CitySliderImg[index].src} alt={CitySliderImg[index].alt}></img><p>{CitySliderImg[index].alt} </p></div>
          <div><img width="190px" src={CitySliderImg[(index + 1) % CitySliderImg.length].src} alt={CitySliderImg[(index + 1) % CitySliderImg.length].alt}></img><p>{CitySliderImg[(index + 1) % CitySliderImg.length].alt}</p></div>
          <div><img width="190px" src={CitySliderImg[(index + 2) % CitySliderImg.length].src} alt={CitySliderImg[(index + 2) % CitySliderImg.length].alt}></img><p>{CitySliderImg[(index + 2) % CitySliderImg.length].alt}</p></div>
          <div><img width="190px" src={CitySliderImg[(index + 3) % CitySliderImg.length].src} alt={CitySliderImg[(index + 3) % CitySliderImg.length].alt}></img><p>{CitySliderImg[(index + 3) % CitySliderImg.length].alt}</p></div>
          <div><img width="190px" src={CitySliderImg[(index + 4) % CitySliderImg.length].src} alt={CitySliderImg[(index + 4) % CitySliderImg.length].alt}></img><p>{CitySliderImg[(index + 4) % CitySliderImg.length].alt}</p></div>
        </div>
      </>
    );
};
const ExploreTravel=()=>{
  return(
    <>
    <h1>Fuel your daydreams</h1>
    <p className="dialog-text-second">Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
    <button>Explore Travelogues</button>
    <img width="500px"></img>
  </>
  );
}

function Resized() {
  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    
}

    window.addEventListener('resize', handleResize)
  })
  return <div>w00t!</div>
}

function HomePage() {

  return (
    <>
      <Heading/>
      <Search/>
      <Midhead/>
      <ProductSlider/>
      <DialogWPicture/>
      <CitySlider/>
      <ExploreTravel/>
      <Resized/>
    </>

  );
}

export default HomePage;