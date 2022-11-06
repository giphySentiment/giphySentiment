import { useState, useEffect } from 'react'
import Forms from './Forms';
import Gif from './Gif';
// import Backronym from './Backronym';

const Data = (props) => {
    // State that listens for a change in user choice
    const [mood, setMood] = useState("");

    // Randomizer Function
    const randomizer = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // State for error handling
    const [giphyError, setGiphyError] = useState(false)

    // function to handle user's emotion update in state
    const handleFormSubmit = (event) => {
        setMood(event.target.value);
        event.preventDefault();
        setDisplayGifs(true);

        const apiKey = "Ulwht5cPZ4vU4GOzd3G4kckrwM0g9SgI";
        const baseURL = "https://api.giphy.com/v1/gifs/search";
        const userChoice =`${mood}`
        const randomInt = randomizer(0, 35)
        
        fetch(`${baseURL}?api_key=${apiKey}&q=${userChoice}&limit=3&offset=${randomInt}&rating=g&lang=en`)
            .then(response => response.json())
            
            .then (info => {
                props.setGif(info.data)
                console.log(info.data)
            })
            .catch((error) => {
                setGiphyError(!giphyError)
        });
    }

    // State to store API call Gif Data
    const [newGif, setNewGif] = useState([]);

     // State to display gifs
    const [displayGifs, setDisplayGifs] = useState(false);
    
    // Regenerate Gifs
    const userClick = (event) => {
        event.preventDefault()
        setNewGif(!newGif)
    }

    // const [selectedGif, setSelectedGif] = useState()
    
    // const select = (event) => {
    //     event.preventDefault()
    //     setSelectedGif(event.target.value)
    //     console.log("select handler has been clicked")
    //     console.log(event.target.value)
    // }

    return (
        <section className="data">
            <Forms handleFormSubmit={handleFormSubmit}
                newGif={newGif}
                setNewGif={setNewGif}
                displayGifs={displayGifs}
                setDisplayGifs={setDisplayGifs}
                mood={mood}
                setMood={setMood}
            />
            
            <Gif newGif={newGif}
                setNewGif={setNewGif}
                displayGifs={displayGifs}
                setDisplayGifs={setDisplayGifs}
                userClick={userClick}
                gif={props.gif} />
        </section >
    )

};

export default Data;