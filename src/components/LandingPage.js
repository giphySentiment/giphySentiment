import { useState } from "react"
import GiphyData from './GiphyData';
import { Link } from 'react-router-dom'

const LandingPage = () => {

// State to store API call from Giphy
    const [gif, setGif] = useState([]);
    
    return (
        <div className="landing">
            <h1>Giphy Sentiments</h1>
            
            <GiphyData gif={gif} setGif={setGif} />
            <Link to="/History">history</Link>
        </div>
        
    )
}

export default LandingPage;