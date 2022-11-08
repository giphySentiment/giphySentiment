import { useState } from "react";

// Import components
import Forms from "./Forms";
import Gif from "./Gif";

const Data = (props) => {
  // State that listens for a change in user choice
  const [mood, setMood] = useState("");

  // State for displaying gifs
  const [displayGifs, setDisplayGifs] = useState(false);

  // State for error handling
  const [giphyError, setGiphyError] = useState(false);

  // Variable that saves the final mood the user chose
  const userChoice = `${mood}`;

  // Randomizer Function
  const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Function to handle submit in forms (in child component), which will display Gif.js
    // the API is saved within this function, as it runs on form submit
  const handleFormSubmit = (e, mood) => {  
    e.preventDefault();
    setDisplayGifs(true);
    const apiKey = "Ulwht5cPZ4vU4GOzd3G4kckrwM0g9SgI";
    const baseURL = "https://api.giphy.com/v1/gifs/search";
    const randomInt = randomizer(0, 35);

    fetch(
      `${baseURL}?api_key=${apiKey}&q=${userChoice}&limit=3&offset=${randomInt}&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((info) => {
        props.setGif(info.data);
      })
      .catch(() => {
        setGiphyError(!giphyError);
      });
  };

  return (
    <section className="giphyData">
      <Forms
        handleFormSubmit={handleFormSubmit}
        displayGifs={displayGifs}
        setDisplayGifs={setDisplayGifs}
        gif={props.gif}
        mood={mood}
        setMood={setMood}
      />

      <Gif
        handleFormSubmit={handleFormSubmit}
        displayGifs={displayGifs}
        setDisplayGifs={setDisplayGifs}
        gif={props.gif}
        mood={mood}
        setMood={setMood}
        userChoice={userChoice}
      />
    </section>
  );
};

export default Data;