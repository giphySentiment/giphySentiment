import { useState, useEffect } from 'react'
import DataMuseData from './DataMuseData';

// import Backronym from './Backronym';

const Data = (props) => {
    // State that listens for a change in user choice
    const [mood, setMood] = useState("");
     // State to store API call Gif Data
     const [newGif, setNewGif] = useState(false);
     // State to display gifs
    const [displayGifs, setDisplayGifs] = useState(false);

    // Randomizer Function
    const randomizer = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // State for error handling
    const [giphyError, setGiphyError] = useState(false)

    // this function will store the user's mood in state, fill our gif array, and display the array
    const handleFormSubmit = (event) => {
        setMood(event.target.value);
        event.preventDefault();
        setDisplayGifs(true);
        setNewGif(!newGif)
    }

    
    // Regenerate Gifs
    const userClick = () => {
       // event.preventDefault()
        setNewGif(!newGif)
    }

    useEffect ( () => {
    
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

    }, [newGif])
    
    return (
        <section className="data">
           <DataMuseData 
           handleFormSubmit={handleFormSubmit}
           newGif={newGif}
           setNewGif={setNewGif}
           displayGifs={displayGifs}
           setDisplayGifs={setDisplayGifs}
           mood={mood}
           setMood={setMood}
           userClick={userClick}
           gif={props.gif}
           />
        </section >
    )

};

export default Data;