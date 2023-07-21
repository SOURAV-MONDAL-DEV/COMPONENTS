"use client";
import React, { useState, useEffect } from "react";
import "./RoundCarousel.css";

import Image from "next/image";
import pinkBag from "./image/pinkBag.png"
import shoe from "./image/shoe.png"
import ring from "./image/ring.png"
import sunglass from "./image/sunglass.png"
import Lshoe from "./image/Lshoe.png"
import sw from "./image/sw.png"

const RoundCarousel = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction) => {
    let newDeg = currdeg;
    if (direction === "n") {
      newDeg -= 60;
    }
    if (direction === "p") {
      newDeg += 60;
    }
    setCurrdeg(newDeg);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotate("n");
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [currdeg]); // Add currdeg to the dependency array to avoid issues with state updates

  return (
    <div>
      <div className="container">
        <div
          className="carousel"
          style={{
            transform: `rotateY(${currdeg}deg)`,
            WebkitTransform: `rotateY(${currdeg}deg)`,
            MozTransform: `rotateY(${currdeg}deg)`,
            OTransform: `rotateY(${currdeg}deg)`,
          }}
        >
          <div className="item a">
            <Image className="cardImg" alt="pink" src={pinkBag}></Image>
          </div>
          <div className="item b">
            <Image className="cardImg" alt="pink" src={shoe}></Image>
          </div>
          <div className="item c">
            <Image className="cardImg" alt="pink" src={ring}></Image>
          </div>
          <div className="item d">
            <Image className="cardImg" alt="pink" src={sunglass}></Image>
          </div>
          <div className="item e">
            <Image className="cardImg" alt="pink" src={Lshoe}></Image>
          </div>
          <div className="item f">
            <Image className="cardImg" alt="pink" src={sw}></Image>
          </div>
        </div>
      </div>
      {/* <div className="next" onClick={() => rotate("n")}>
        Next
      </div>
      <div className="prev" onClick={() => rotate("p")}>
        Prev
      </div> */}
    </div>
  );
};

export default RoundCarousel;
