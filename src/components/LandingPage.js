import { useState, createContext } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/moodyMemesLogoHorizontal.png"
import logo2 from "../assets/moodyMemesLogoStacked.png"

// Import components
import GiphyData from "./GiphyData";

// Exporting context
export const GifContext = createContext();

const LandingPage = () => {
    //State to store data from Giphy API
    const [gif, setGif] = useState([]);
   
    return (
        <section className="landingPage">
            <div className="wrapper">
                <nav>
                    <Link to="/">
                        {/* <img className="navLogo" src={logo} alt="" /> */}
                        <img className="navLogo2" src={logo2} alt="" />
                    </Link>
                    <Link to="/Timeline">Timeline</Link>
                </nav>
                <GifContext.Provider value={gif}>
                    <GiphyData setGif={setGif} />
                </GifContext.Provider>     
            </div>
        </section>
    );
};

export default LandingPage;
