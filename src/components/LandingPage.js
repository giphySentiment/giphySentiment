import { useState, createContext } from "react";
import { Link } from 'react-router-dom';

// Import components
import GiphyData from './GiphyData';

// Exporting context
export const GifContext = createContext();

const LandingPage = () => {
    //State to store data from Giphy API
    const [gif, setGif] = useState([]);
   
    return (
        <section className="landing">
            <Link to="/Timeline">Timeline</Link>
            <GifContext.Provider value={gif}>
                <GiphyData setGif={setGif} />
            </GifContext.Provider>  
        </section>
    );
};

export default LandingPage;