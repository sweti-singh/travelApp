import React, { useState } from "react";
import "./destinations.css";
import desert from "../../assets/desert.jpg";
import eiffle from "../../assets/eiffle.jpg";
import ladakh from "../../assets/ladakh.jpg";
import food from "../../assets/prawn_curry.jpg";
import museum from "../../assets/museum.jpg";
import Bookings from "../Bookings/Bookings";

const Destinations = () => {
  const [showModal,setShowModal]=useState(false)

  return (
    <div className="destination-container">
      <h1>Popular Destinations</h1>
      <div className="grid-container" onClick={()=>setShowModal(!showModal)}>
        <div className="card">
          <img src={eiffle} alt="card" />
          <div className="text-1">
               <h1>Plan for a Parisian Holiday...</h1>
               <p>Get an itinery with exciting places on the list</p>
            </div>
          <div className="overlay"></div>
        </div>

        <div className="card">
          <img src={desert} alt="card" />
          <div className="text-1">
               <h1>Sahara</h1>
               <p>Dessert is calling.</p>
            </div>
          <div className="overlay"></div>
        </div>

        <div className="card">
          <img src={food} alt="card" />
          <div className="text-1">
               <h1>Carrebian Beaches with carrebian food</h1>
               <p>Book exciting hotels to stay for a perfect staycation..</p>
            </div>
          <div className="overlay"></div>
        </div>
        <div className="card">
          <img src={museum} alt="card" />
          <div className="overlay">
          <div className="text-1">
               <h1>British museums</h1>
               <p>Plan your trip now</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ladakh} alt="card" />
          <div className="overlay">
          <div className="text-1">
               <h1>Off you go</h1>
               <p>Ladakh is waiting for you</p>
            </div>
            </div>
        </div>
        <div className="card">
        <div className="overlay">
           <div className="text-1">
               <h1>Get exciting offers begining at 499/-</h1>
               {/* <p>Ladakh is waiting for you</p> */}
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundColor: "rgb(228, 34, 228)" }}
        >
          <div className="overlay">
            <div className="text-1">
            <h1>Wanna see China</h1>
              <p>Book your vacation now.</p>
            </div>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "rgb(238, 237, 237)" }}>
          <div className="box-1">
            <h1>BOOK</h1>
          </div>
          <div className="box-2">
            <h1>NOW</h1>
          </div>
        </div>
      </div>
      {showModal && <Bookings onClose={setShowModal}/>}
    </div>
  );
};

export default Destinations;
