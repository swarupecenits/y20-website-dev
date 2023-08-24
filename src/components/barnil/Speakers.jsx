import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
import guestRajkumarRanjan from "./speakers-img/rajkumarRanjan.svg";
import guesttemjenImna from "./speakers-img/temjenImna.svg";
import guestashokPuranik from "./speakers-img/ashokPuranik.svg";
import guestrajdeepRoy from "./speakers-img/rajdeepRoy.svg";
import y20angshumandey from "./speakers-img/angshumanDey.svg";
import y20subhashisdey from "./speakers-img/subhashisDey.svg";
import y20deveshwalia from "./speakers-img/deveshWalia.svg";
import y20yashveerbhatnagar from "./speakers-img/yashveerBhatnagar.svg";
import y20swapneelpaul from "./speakers-img/swapneelPaul.svg";
import y20sharmilaoswal from "./speakers-img/sharmilaOswal.svg";
import y20gyanendradevtripathi from "./speakers-img/gyanendraDevTripathi.svg";
import y20arpitamondal from "./speakers-img/arpitaMondal.svg";
import y20deepankarchoudhury from "./speakers-img/deepankarChoudhury.svg";
import y20bhaswatimukherjee from "./speakers-img/bhaswatiMukherjee.svg";
import y20sumitpeer from "./speakers-img/sumitPeer.svg";
import y20ysapnadevi from "./speakers-img/ysapnaDevi.svg";
import y20mbimoljeet from "./speakers-img/mBimoljeet.svg";
import y20blverma from "./speakers-img/blVerma.svg";
import y20ronujpegu from "./speakers-img/ronujPegu.svg";
function Speakers() {
  const primary = [
    {
      name: "DR. RAJKUMAR RANJAN SINGH",
      desgn:
        "Minister of State for External Affairs and Education, Govt of India",
      photo: guestRajkumarRanjan,
    },
    {
      name: "SHRI TEMJEN IMNA ALONG",
      desgn: "Minister of Higher and Technical Education, Govt of Nagaland",
      photo: guesttemjenImna,
    },
    {
      name: "PROFF. ASHOK PURANIK",
      desgn: "Executive Director, AIIMS Guwahati",
      photo: guestashokPuranik,
    },
    {
      name: "DR. RAJDEEP ROY",
      desgn: "Hon'ble MP of Silchar",
      photo: guestrajdeepRoy,
    },
  ];
  // const secondary = [
  //   { name: "Speaker 1", desgn: "designation", photo: "photo1" },
  //   { name: "Speaker 2", desgn: "designation", photo: "photo2" },
  //   { name: "Speaker 3", desgn: "designation", photo: "photo3" },
  //   { name: "Speaker 4", desgn: "designation", photo: "photo4" },
  //   { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  // ];
  const tertiary = [
    {
      name: "SHRI ANGSHUMAN DEY",
      desgn: "Joint Secretary, DoNER",
      photo: y20angshumandey,
    },
    {
      name: "DR. SUBHASHIS DEY",
      desgn: "Distinguished Prof IIT Jodhpur",
      photo: y20subhashisdey,
    },
    {
      name: "DR. DEVESH WALIA",
      desgn: "Professor & Head, Dept. of Geology, NEHU Shillong",
      photo: y20deveshwalia,
    },
    {
      name: "SHRI YASH VEER BHATNAGAR",
      desgn: "Country Representative, IUCN India",
      photo: y20yashveerbhatnagar,
    },
    {
      name: "SHRI SWAPNEEL PAUL,IAS",
      desgn: "DC, Tinsukia District, Assam",
      photo: y20swapneelpaul,
    },
    {
      name: "DR. SHARMILA OSWAL",
      desgn: "Millet Woman of India",
      photo: y20sharmilaoswal,
    },
    {
      name: "SHRI GYANENDRA DEV TRIPATHI",
      desgn: "IAS (E.O, ASDMA)",
      photo: y20gyanendradevtripathi,
    },
    {
      name: "PROF. ARPITA MONDAL",
      desgn: "IIT BOMBAY",
      photo: y20arpitamondal,
    },
    {
      name: "PROF. DIPANKAR CHOUDHURY",
      desgn: "IIT BOMBAY",
      photo: y20deepankarchoudhury,
    },
    {
      name: "AMB. BHASWATI MUKHERJEE",
      desgn: "Retired Indian Diplomat & Commentator on International Affairs",
      photo: y20bhaswatimukherjee,
    },
    {
      name: "SHREE SUMIT PEER",
      desgn: "Geopolitical Analyst",
      photo: y20sumitpeer,
    },
    {
      name: "SMT. YUMLEMBAM SAPNA DEVI",
      desgn: "International Medalist Asian Games Player",
      photo: y20ysapnadevi,
    },
    {
      name: "SHRI MAYANGLAMBAM BIMOLJIT SINGH",
      desgn: "Arjuna Awardee in Wushu",
      photo: y20mbimoljeet,
    },
    {
      name: "SHRI B.L. VERMA",
      desgn: "Hon'ble MoS, DoNER Ministry, GOI",
      photo: y20blverma,
    },
    {
      name: "SHRI RANOJ PEGU",
      desgn: "Hon'ble Education Minister of Assam",
      photo: y20ronujpegu,
    },
  ];
  return (
    // <div className="speakers">
    //   <center>
    //     <div className="surrounder">
    //       <img src={Surround} />
    //       <h1>SPEAKERS</h1>
    //       <img src={Surround} />
    //     </div>
    //   </center>
    //   <h2>GUEST SPEAKERS</h2>
    //   <div className="primary">
    //     {primary.map((each) => (
    //       <div className="each-speaker">
    //         <img src={each.photo} />
    //         <label className="speaker-name">{each.name}</label>
    //         <label className="speaker-designation">{each.desgn}</label>
    //       </div>
    //     ))}
    //   </div>
    //   <h2>Y20 SPEAKERS</h2>
    //   <div className="tertiary">
    //     {tertiary.map((each) => (
    //       <div className="each-speaker">
    //         <img src={each.photo} />
    //         <label className="speaker-name">{each.name}</label>
    //         <label className="speaker-designation">{each.desgn}</label>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="speakers">
      <center>
        <div className="surrounder">
          <img src={Surround} alt="" />
          <h1>SPEAKERS</h1>
          <img src={Surround} alt="" />
        </div>
      </center>
      <h2>GUEST SPEAKERS</h2>
      <div className="primary">
        {primary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} alt="" />
            <div className="speaker-description-primary">
              <label className="speaker-name">{each.name}</label>
              <label className="speaker-designation">{each.desgn}</label>
            </div>
          </div>
        ))}
      </div>
      <h2>Y20 SPEAKERS</h2>
      <div className="tertiary">
        {tertiary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} alt="" />
            <div className="speaker-description-tertiary">
              <label className="speaker-name">{each.name}</label>
              <label className="speaker-designation">{each.desgn}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Speakers;
