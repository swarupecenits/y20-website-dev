import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import { useState, useEffect } from "react";
import "./carousel.css";
import chevronLeft from "./chevron-left-solid.svg";
import chevronRight from "./chevron-right-solid.svg";
import Quiz from "./events-bg/quiz.jpg";
import Hackathon from "./events-bg/hackathon.jpg";
import Debate from "./events-bg/debate.jpg";
import Cultural from "./events-bg/cultural.png";
const Carousel = () => {
  const events_info = [Quiz, Hackathon, Debate, Cultural];
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
          {/* {events_info.map((item, index) => (
            <div
              className="slide"
              key={index}
              style={{
                transform: `translateX(${-currIndex * 100}%)`,
              }}
            >
              <img src={item} alt="event" />
            </div>
          ))} */}
          <img
            className="slide"
            src={Quiz}
            key={0}
            style={{
              transform: `translateX(${-currIndex * 100}%)`,
            }}
          />
          <img
            className="slide"
            key={1}
            src={Hackathon}
            style={{
              transform: `translateX(${-currIndex * 100}%)`,
            }}
          />
          <img
            className="slide"
            key={2}
            src={Debate}
            style={{
              transform: `translateX(${-currIndex * 100}%)`,
            }}
          />
          <img
            className="slide"
            key={3}
            src={Cultural}
            style={{
              transform: `translateX(${-currIndex * 100}%)`,
            }}
          />
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
            style={{margin:"0.5rem",zIndex:"5",cursor:"pointer"}}
            onClick={() => handleBubble(index)}
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
