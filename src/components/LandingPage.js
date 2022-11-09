import { useState } from "react";
import { Link } from 'react-router-dom';
import GiphyData from './GiphyData';

const LandingPage = () => {
    //State to store data from Giphy API
    const [gif, setGif] = useState([]);
   
    return (
        <section className="landing">
            <Link to="/Timeline">Timeline</Link>
                <GiphyData gif={gif} setGif={setGif} />
        </section>
    );
};

export default LandingPage;