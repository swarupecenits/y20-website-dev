import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import { useState, useEffect } from "react";
import "./carousel.css";
import chevronLeft from "./chevron-left-solid.svg";
import chevronRight from "./chevron-right-solid.svg";
import events_bg from "./sponsors-img/events_bg.png";
const Carousel = () => {
  const events_info = [
    {
      name: "EVENT 1",
      desc: "DESCRIPTION",
      time: "TIMINGS",
    },
    {
      name: "EVENT 2",
      desc: "DESCRIPTION",
      time: "TIMINGS",
    },
    {
      name: "EVENT 3",
      desc: "DESCRIPTION",
      time: "TIMINGS",
    },
    {
      name: "EVENT 4",
      desc: "DESCRIPTION",
      time: "TIMINGS",
    },
    {
      name: "EVENT 5",
      desc: "DESCRIPTION",
      time: "TIMINGS",
    },
  ];
  const [currIndex, setcurrIndex] = useState(0);
  const handleNext = () => {
    setcurrIndex((prevIndex) =>
      prevIndex + 1 >= events_info.length ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setcurrIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events_info.length - 1 : prevIndex - 1
    );
  };
  const handleBubble = (index) => {
    setcurrIndex(index);
  };
  return (
    <div className="carousel">
      <div className="part1">
        <button
          className="controller"
          id="left"
          style={{ zIndex: "2", cursor: "pointer" }}
          onClick={handlePrev}
        >
          <img src={chevronLeft} />
        </button>
        <div className="row">
          {events_info.map((item, index) => (
            <div
              className="slide"
              key={index}
              style={{
                transform: `translateX(${-currIndex * 100}%)`,
              }}
            >
              <div className="black-filter">
                <div className="green-filter">
                  <h3>EVENT: {item.name}</h3>
                  <p>{item.desc}</p>
                  <h4>TIMINGS: {item.time}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          style={{ cursor: "pointer" }}
          className="controller"
          id="right"
          onClick={handleNext}
        >
          <img src={chevronRight} />
        </button>
      </div>
      <div className="part2">
        {events_info.map((item, index) => (
          <button
            className={
              currIndex === index ? "bubble-active" : "bubble-inactive"
            }
          ></button>
        ))}
      </div>
    </div>
  );
};
function Events() {
  return (
    <div className="events" id="events">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>EVENTS</h1>
          <img src={Surround} />
        </div>
      </center>
      <Carousel />
    </div>
  );
}
export default Events;
