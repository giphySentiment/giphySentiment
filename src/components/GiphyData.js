import { useState, createContext } from "react";

// Import components
import Forms from "./Forms";
import Gif from "./Gif";

// Exporting context
export const ChoiceContext = createContext();
export const FormContext = createContext();

const GiphyData = (props) => {
  // State that listens for a change in user choice
  const [mood, setMood] = useState("");

  // State for error handling
  const [noGifsAvailable, setNoGifsAvailable] = useState(false);

  // State for 404 page
  const [giphyError, setGiphyError] = useState(false)

  // State for loading screen
  const [loading, setLoading] = useState(false);

  // Variable that saves the final mood the user chose
  const userChoice = `${mood}`;

      // State for disabling button from illegal characters
    const [isSpace, setIsSpace] = useState(false) 

  // Randomizer Function
  const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Function to handle submit in forms (in child component), which will display Gif.js
    // the API is saved within this function, as it runs on form submit
  const handleFormSubmit = (e) => {  
    e.preventDefault();
    const apiKey = "Ulwht5cPZ4vU4GOzd3G4kckrwM0g9SgI";
    const baseURL = "https://api.giphy.com/v1/gifs/search";
    const randomInt = randomizer(0, 35);

    if(userChoice.includes(' ')){
      setIsSpace(true)
    } else {
      setLoading(true)
      fetch(
        `${baseURL}?api_key=${apiKey}&q=${userChoice}&limit=3&offset=${randomInt}&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((info) => {
          if (info.data.length > 0){
            props.setGif(info.data);
            setLoading(false);
          } else {
            setNoGifsAvailable(!noGifsAvailable);
          }
        })
        .catch((error) => {
          if (`${baseURL}`.status != 404){
            setGiphyError(!giphyError)
          }
        });
    }

  };

  return (
    <FormContext.Provider value={handleFormSubmit}>
      <section className="giphyData">
        <Forms
          mood={mood}
          setMood={setMood}
          loading={loading}
          noGifsAvailable={noGifsAvailable}
          isSpace={isSpace}
          setIsSpace={setIsSpace}
          giphyError={giphyError}
        />
        <ChoiceContext.Provider value={userChoice}>
          <Gif
            mood={mood}
          />
        </ChoiceContext.Provider>
      </section>
    </FormContext.Provider>
  );
};

export default GiphyData;
