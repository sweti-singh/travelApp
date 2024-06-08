import React, { useEffect, useState } from "react";
import seaBackgroundVideo from "../../assets/sea.mp4";
import mountainBgVideo from "../../assets/mountains.mp4";
import forestBgVideo from "../../assets/forest.mp4";
import "./homepage.css";
import Navbar from "../Navbar/Navbar";
import Destinations from "../Destinations/Destinations";
import Bookings from "../Bookings/Bookings";
import Footer from "../Footer/Footer";
import sea from '../../assets/sea.jpg'
import mountain from '../../assets/mountain.jpg'
import forest from '../../assets/forest.jpg'

const HomePage = () => {

//   const forest= React.lazy(()=>{import('../../assets/forest.jpg')})
// const mountain= React.lazy(()=>{import('../../assets/mountain.jpg')})
// const sea= React.lazy(()=>{import('../../assets/sea.jpg')})

  const [showModal,setShowModal]=useState(false)
  const [active, setActive] = useState(1);
  const arr=[seaBackgroundVideo,mountainBgVideo,forestBgVideo]

  const handleBgChangeClick = (e) => {
    console.log(e)
    if(e.target.innerText==1){
      setActive(1)
    }
    else if(e.target.innerText==2){
      setActive(2)
    }
    else{
      setActive(3)
    }
  }

  useEffect(()=>{
    const timer=setInterval(()=>{
       if(active<3){
        setActive(active+1)
       }
       else{
        setActive(1)
       }
    },[5000])
    if(showModal){
      clearInterval(timer)
    }
    return()=>clearInterval(timer)
  },[active,showModal])

  return (
    <>
    <Navbar />
    <section className="home-container">
      <img loading="lazy" src={sea} className={`video-slider ${active === 1 ? 'active' : ''}`}/>
      <img loading="lazy" src={mountain} className={`video-slider ${active === 2 ? 'active' : ''}`}/>
      <img loading="lazy" src={forest} className={`video-slider ${active === 3 ? 'active' : ''}`}/>
      {/* <video src={seaBackgroundVideo} className={`video-slider ${active === 1 ? 'active' : ''}`} preload="auto" autoPlay muted loop />
      <video src={mountainBgVideo} className={`video-slider ${active === 2 ? 'active' : ''}`} preload="auto" autoPlay muted loop />
      <video src={forestBgVideo} className={`video-slider ${active === 3 ? 'active' : ''}`} preload="auto" autoPlay muted loop /> */}
      <div className="overlay"></div>

      <div className={`content ${active === 1 ? 'active' : ''}`}>
        <h1>Sea vacation</h1>
        <p>The serene landscape stretched endlessly before her, a canvas of rolling hills and lush green valleys. The sunlight danced playfully on the surface of the tranquil lake, casting shimmering reflections across the water. As she walked along the winding path, the gentle breeze whispered secrets through the rustling leaves of the towering trees. In this moment of quietude, she found solace, a fleeting respite from the chaos of the world. Each step forward carried her deeper into the embrace of nature, filling her heart with a sense of peace and belonging.</p>
        </div>

        <div className={`content ${active === 2 ? 'active' : ''}`}>
        <h1>Mountain vacation</h1>
        <p>
        Snow-capped peaks in the crisp mountain air,
        Pine forests whisper secrets everywhere.
        A cabin retreat with a fireplace glow,
        Nature's embrace in a world of snow.
        </p>
        </div>

        <div className={`content ${active === 3 ? 'active' : ''}`}>
        <h1>Forest Vacation</h1>
        <p>
        Tall trees sway in a sun-dappled glade,
        Birdsong and rustling leaves serenade.
        A cozy campfire beneath a starry dome,
        In the heart of the forest, you feel at home.
        </p>
        </div>

        <button className="button-style" onClick={()=>setShowModal(true)}>Book Now</button>

        <div className="slider-navigation" onClick={handleBgChangeClick}>
          <div className={`slider-buttons ${active === 1 ? 'active' : ''}`}>1</div>
          <div className={`slider-buttons ${active === 2 ? 'active' : ''}`}>2</div>
          <div className={`slider-buttons ${active === 3 ? 'active' : ''}`}>3</div>
        </div>
      </section>
      <Destinations/>
      <Footer/>
      {showModal && <Bookings onClose={setShowModal}/>}
    </>
  );
};

export default HomePage;
