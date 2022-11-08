import { useState } from "react"
import GiphyData from './GiphyData';


const LandingPage = () => {

// State to store API call from Giphy
    const [gif, setGif] = useState([]);
   

    return (
        <div className="landing">
            <h1>Giphy Sentiments</h1>
            
            <GiphyData gif={gif} setGif={setGif} />
        </div>
        
    )
}

export default LandingPage;