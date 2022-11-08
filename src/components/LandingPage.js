import { useState } from "react"
import { Link, Routes, Route } from 'react-router-dom'

import GiphyData from './GiphyData';

const LandingPage = () => {

// State to store API call from Giphy
    const [gif, setGif] = useState([]);
    
    return (
        <div className="landing">
            <GiphyData gif={gif} setGif={setGif} />

            <Link to="/history">history</Link>
        
        {/* <Routes>
            <Route path="/history" element={<History />} />
        </Routes> */}
        </div>

        
    )
}

export default LandingPage;