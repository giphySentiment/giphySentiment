import { useState, useContext } from "react";
import uuid from "react-uuid";
import { GifContext } from "./LandingPage";
import { FormContext } from "./GiphyData";

// Import components
import Results from "./Results";

const Gif = (props) => {
  // Set variable for 'gif' from LandingPage (useContext)
  const gif = useContext(GifContext);

  // Set variable for 'handleFormSubmit' from GiphyData (useContext)
  const formSubmit = useContext(FormContext);

  // State to save selectedGif value
  const [selectedGif, setSelectedGif] = useState("");

  // Function to save user's selected Gif
  const select = (event) => {
    event.preventDefault();
    setSelectedGif(event.target.value);
  };

  return (
    <section className="gif">
      <div className="gifContainer">
        <form onClick={select} className="select">   
          <fieldset>
            {gif.map((gifObj) => {
              return (
                <label
                  htmlFor="userChoice" aria-label={gifObj.title}
                  key={uuid()}>
                    <input
                      onChange={select}
                      type="radio"
                      name="gif"
                      value={gifObj.images.original.webp}
                    />
                      <img
                      className="gif"
                      src={gifObj.images.original.webp}
                      alt={gifObj.title}
                      />
              </label>
              );
            })}
            <button
              className="buttonContainer"
              onClick={formSubmit}> gimmie new gifs
            </button>
            </fieldset>
        </form>
      </div>
        {
          selectedGif
          ? <Results
            selectedGif={selectedGif}/>
          : null
        }
    </section>
  );
};

export default Gif;