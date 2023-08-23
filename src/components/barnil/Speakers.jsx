import "./Nav_footer_events_sponsors_speakers.css";
import Surround from "./surround.svg";
function Speakers() {
  const primary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
  ];
  const secondary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  ];
  const tertiary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
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
