import './Nav_footer_events_sponsors_speakers.css';
import Surround from './surround.svg';
function Sponsors() {
    const sponsors_info = [
      { logo: "logo1" },
      { logo: "logo2" },
      { logo: "logo3" },
      { logo: "logo4" },
      { logo: "logo5" },
      { logo: "logo6" },
      { logo: "logo7" },
    ];
    return (
      <div className="sponsors">
        <center>
          <div className="surrounder">
            <img src={Surround} />
            <h1>SPONSORS</h1>
            <img src={Surround} />
          </div>
        </center>
        <div className="sponsors-img">
          {sponsors_info.map((sponsor) => (
            <img src={sponsor.logo} />
          ))}
        </div>
      </div>
    );
  }
  export default Sponsors;