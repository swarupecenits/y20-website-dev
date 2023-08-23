import { useRef } from "react";
import "./index.css";
import "./components/swarup/organising.css";
//
import Surround from "./surround.svg";
import nitlogo from "./nitlogo.png";
import assamlogo from "./assamlogo.png";
import Events from "./components/barnil/Events";
import Footer from "./components/barnil/Footer";
import NavBar from "./components/barnil/Navbar";
import Speakers from "./components/barnil/Speakers";
import Sponsors from "./components/barnil/Sponsors";
//
import Unite from "./components/pragyan/Unite";
import Hero from "./components/swarup/Hero";

import Theme from "./components/sahin/Theme";

function OrganisingInstitutes() {
  const inst = [
    { name: "National Institute of Technology, Silchar", logo: "nitslogo" },
    { name: "Assam University, Silchar", logo: "aulogo" },
  ];
  return (
    <div className="Organising">
      <center>
        <div className="surrounder">
          <img src={Surround} alt="line" />
          <h1>Organising Institutes</h1>
          <img src={Surround} alt="line" />
        </div>
      </center>
      <div className="Organise">
        <div className="left-logo">
          <img src={nitlogo} alt="nitlogo" />
        </div>
        <div className="right-logo">
          <img src={assamlogo} alt="aulogo" />
        </div>
      </div>
    </div>
  );
}
function App() {
  const heroCont = useRef(null);
  const eventsCont = useRef(null);
  const sponsorsCont = useRef(null);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <NavBar />
      <Hero />
      <Unite />
      <Events />
      <Theme />
      <Speakers />
      <Sponsors />
      <OrganisingInstitutes />
      <Footer />
    </div>
  );
}

export default App;
