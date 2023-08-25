import Underline from "./surround.svg";
import "./unite.css";
function Unite() {
  return (
    <div className="unite">
      <h1 className="primary-unite-heading">UNITING YOUTH, IGNITING CHANGE!</h1>
      <img src={Underline} alt="" className="surrounder" />
      <h1 className="secondary-unite-heading">
        Why unite at Northeast Y20 Conclave?
      </h1>
      <div className="unite-container">
        <div className="unite-secondary-container">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Visionary leaders, thinkers, and professionals gather to share wisdom, empowering attendees with insights to address regional challenges.
          </p>
        </div>
        <div className="unite-secondary-container" id="container-2">
          <h1 className="unite-container-heading">
            Driving innovation and collaboration
          </h1>
          <p>
            Through stimulating discussions on entrepreneurship, technology, and
            sustainable development, we will inspire young minds to innovate and
            collaborate for a resilient North East.
          </p>
        </div>
        <div className="unite-secondary-container" id="container-3">
          <h1 className="unite-container-heading">Cultural Extravaganza</h1>
          <p>
            Amidst the serious discourse, participants will get an opportunity
            to revel in the vibrant cultural heritage of the North East,
            showcasing its art, dance, and culinary delights.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Unite;
