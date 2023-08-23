import './theme.css';
import ThemeUnderline from './theme-underline.svg';
function Theme() {
  return (
    <div className="theme-container"> 
      <div className="theme-subcontainer-1">
        <img src={ThemeUnderline} alt="" />       
        <h1 className="theme-heading">THEME</h1>
        <img src={ThemeUnderline} alt="" id="theme-underline"/>
      <p className="theme-paragraph">"Beyond Horizons:Youth Powering Progress"</p>
      </div>
      
      <div className="theme-subcontainer-2">
        <p>
        In the heart of the mesmerizing North East, we converge to celebrate the spirit of unity, diversity, and progress. The theme "Beyond Horizons: Youth Powering Progress" encapsulates our collective vision to transcend boundaries, break barriers, and chart a course towards a prosperous future. Together, we embark on an inspirational journey, exploring the untapped potential of the North East and unleashing the force of youth to drive positive transformations across the region.
        </p>
      </div>
    </div>
  );
}
export default Theme;