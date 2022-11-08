import { useState } from "react"
import { Link, Routes, Route } from 'react-router-dom'
import Footer from "./Footer";

import GiphyData from './GiphyData';

const LandingPage = () => {

// State to store API call from Giphy
    const [gif, setGif] = useState([]);
    
    return (
        <div className="landing">
            <Link to="/Timeline">Timeline</Link>

            <GiphyData gif={gif} setGif={setGif} />

        </div>

        
    )
}

export default LandingPage;