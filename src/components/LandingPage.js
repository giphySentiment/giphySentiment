import { useState } from "react";
import { Link } from 'react-router-dom';
// ^ removed Routes and Route for now as it is not in use.

// Import components
import GiphyData from './GiphyData';

const LandingPage = () => {
// State to store data from Giphy API
    const [gif, setGif] = useState([]);
    
    return (
        <section className="landingPage">
            <GiphyData gif={gif} setGif={setGif} />
            <Link to="/timeline">Timeline</Link>
        </section>
    )
}

export default LandingPage;