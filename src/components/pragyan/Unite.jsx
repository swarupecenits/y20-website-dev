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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
        <div className="unite-secondary-container" id="container-2">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
        <div className="unite-secondary-container" id="container-3">
          <h1 className="unite-container-heading">
            Empowerment through knowledge
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam nam mollitia, voluptatum distinctio similique!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Unite;
