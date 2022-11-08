import { useState } from "react";
import Forms from "./Forms";
import Gif from "./Gif";


const Data = (props) => {
  // State that listens for a change in user choice
  // const [mood, setMood] = useState("");
  // State to store API call Gif Data
  const [newGif, setNewGif] = useState(false);
  // State to display gifs
  const [displayGifs, setDisplayGifs] = useState(false);
  const [mood, setMood] = useState("");

  const [saveMood, setSaveMood] = useState('')

  // Randomizer Function
  const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // State for error handling
  const [giphyError, setGiphyError] = useState(false);

  const userChoice = `${mood}`;

  // this function will store the user's mood in state, fill our gif array, and display the array
  const handleFormSubmit = (event, mood) => {  

  
    
    //setMood(event.target.value);
    event.preventDefault();
    setDisplayGifs(true);
    setNewGif(!newGif);

    const apiKey = "Ulwht5cPZ4vU4GOzd3G4kckrwM0g9SgI";
    const baseURL = "https://api.giphy.com/v1/gifs/search";

    const randomInt = randomizer(0, 35);

    fetch(
      `${baseURL}?api_key=${apiKey}&q=${userChoice}&limit=3&offset=${randomInt}&rating=g&lang=en`
    )
      .then((response) => response.json())

      .then((info) => {
        props.setGif(info.data);
        console.log(info.data);
      })
      .catch(() => {
        setGiphyError(!giphyError);
      });
  };

  // Regenerate Gifs
  const userClick = (event) => {
    // event.preventDefault()
    setNewGif(!newGif);
    console.log("generate is being clicked")
    
  };

  return (
    <section className="data">
      <Forms
        handleFormSubmit={handleFormSubmit}
        newGif={newGif}
        setNewGif={setNewGif}
        displayGifs={displayGifs}
        setDisplayGifs={setDisplayGifs}
        userClick={userClick}
        gif={props.gif}
      />

      <Gif
        handleFormSubmit={handleFormSubmit}
        newGif={newGif}
        setNewGif={setNewGif}
        displayGifs={displayGifs}
        setDisplayGifs={setDisplayGifs}
        userClick={userClick}
        gif={props.gif}
      />
    </section>
  );
};

export default Data;
