import "./Nav_footer_events_sponsors_speakers.css";
import g20 from "./G20logo.png";
import y20 from "./y20.svg";
import Fb from "./icon-fb.svg";
import Twitter from "./icon-twitter.svg";
import Insta from "./icon-insta.svg";
import YouTube from "./icon-youtube.svg";
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
            <a>
              <img src={Twitter} />
            </a>
            <a>
              <img src={Insta} />
            </a>
            <a>
              <img src={YouTube} />
            </a>
            <a>
              <img src={Fb} />
            </a>
          </div>
          <h1>CONTACT US</h1>
          <p>
            <h3>PHONE:91XXXXXXXX</h3>
            <h3>EMAIL: y20@gmail.com</h3>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
