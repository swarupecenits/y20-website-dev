import "./Nav_footer_events_sponsors_speakers.css";
import g20 from "./G20logo.png";
import y20 from "./y20.svg";
import Fb from "./icon-fb.svg";
import Twitter from "./icon-twitter.svg";
import Insta from "./icon-insta.svg";
import Linkedin from "./icon-linkedin.svg";
import { BrowserRouter, Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="part1">
        <div className="left">
          <img id="y20-img" src={y20} />
          <img id="g20-logo-footer" src={g20} />
        </div>
        <div className="right">
          <h1>FOLLOW US</h1>
          <div className="social-media-cont">
            <Link to="https://twitter.com/ThinkIndiaNITS" target="_blank">
              <img src={Twitter} />
            </Link>
            <Link
              to="https://instagram.com/thinkindianits?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src={Insta} />
            </Link>
            <Link
              to="https://www.linkedin.com/posts/thinkindianits_northeasty20conclave-thinkindianits-thinkindia-activity-7100425089673797632-A2Ru"
              target="_blank"
            >
              <img src={Linkedin} />
            </Link>
            <Link
              to="https://m.facebook.com/ThinkindiaNITS?eav=AfY3mZFbrEzwaEuZO0Bycy_-YPimImbkWE5kUMGkXu9-Oxfh5kWa1d99av5C1mk6acY&paipv=0"
              target="_blank"
            >
              <img src={Fb} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="part2"
        style={{ color: "#000000aa", textAlign: "center", marginTop: "2rem" }}
      >
        &#169; Copyright @Y20 Northeast Conclave
      </div>
    </footer>
  );
}
export default Footer;
