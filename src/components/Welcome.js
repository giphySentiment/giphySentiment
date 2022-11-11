import { Link } from "react-router-dom";
import logo1 from "../assets/moodyMemesLogoStacked.png"
import logo2 from "../assets/moodyMemesLogoHorizontal.png"

const Welcome = () => {
    return (
      <section className="welcome">
        <div className="wrapper">
          <h1><span className="visuallyHidden">moody memes</span></h1>
          <img className="logo" src={logo2} alt="" />
          <h2>Express your sentiments with a gif✨</h2>
          <Link to="/landingPage" className="button">Get Started</Link>
        </div>
      </section>
    )
};

export default Welcome;