import { useState, createContext } from "react";
import { Link } from "react-router-dom";

// Import components
import GiphyData from "./GiphyData";

// Exporting context
export const GifContext = createContext();

const LandingPage = () => {
  //State to store data from Giphy API
  const [gif, setGif] = useState([]);

  return (
    <section className="landingPage">
      <div>
        <nav className="wrapper">
          <Link to="/">
            <h2>Giphy Sentiments</h2>
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
