import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import Hamburger from "./bars-solid.svg";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Redirect } from "react-router-dom";
import NavLogo from "./NavLogo.svg";
function NavBar() {
  const ham = useRef(null);
  const navState = useRef(null);
  const hamClick = () => {
    navState.current.style.visibility === "hidden"
      ? (navState.current.style.visibility = "visible")
      : (navState.current.style.visibility = "hidden");
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Spekers_Y20__.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <nav>
        <div>
          <img alt="logo" src={NavLogo} id="nav-logo" />
        </div>

        <div className="links">
          <Link to="hero" duration={500} smooth={true}>
            HOME
          </Link>
          <Link to="events" duration={500} smooth={true}>
            EVENTS
          </Link>
          <Link to="sponsors" duration={500} smooth={true}>
            SPONSORS
          </Link>

          <button
            id="brochure"
            style={{ cursor: "pointer" }}
            onClick={onButtonClick}
          >
            BROCHURE
          </button>
        </div>
      </nav>
      <div id="mobile-nav">
        <button id="hamburger" onClick={hamClick}>
          <img src={Hamburger} />
        </button>
        <div className="links" id="mobile-links" ref={navState}>
          <Link to="hero" duration={500} smooth={true}>
            HOME
          </Link>
          <Link to="events" duration={500} smooth={true}>
            EVENTS
          </Link>
          <Link to="sponsors" duration={500} smooth={true}>
            SPONSORS
          </Link>
          <button id="brochure-mobile" style={{ cursor: "pointer" }}>
            BROCHURE
          </button>
        </div>
      </div>
    </>
  );
}
export default NavBar;
