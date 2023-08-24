import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import sbi from "./sponsors-img/sbi.svg";
import mutual from "./sponsors-img/mutual-fund.svg";
import indianOil from "./sponsors-img/indian-oil.svg";
import assamTribune from "./sponsors-img/assam-tribune.svg";
function Sponsors() {
  const sponsors_info = [
    { logo: "./sponsors-img/sbi.svg" },
    { logo: "./sponsors-img/mutual-fund.svg" },
    { logo: "./sponsors-img/indian-oil.svg" },
    { logo: "./sponsors-img/assam-tribune.svg" },
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
        <img src={sbi} />
        <img src={mutual} />
        <img src={indianOil} />
        <img src={assamTribune} />
      </div>
    </div>
  );
}
export default Sponsors;
