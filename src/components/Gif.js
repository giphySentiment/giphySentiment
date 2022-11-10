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
  const [selectedGif, setSelectedGif] = useState(null);

  // Function to save user's selected Gif
  const select = (e) => {
    setSelectedGif(e.target.value);
  };

  return (
    <section className="gif">
      <div className="gifContainer">
        <form>   
          <fieldset>
            <label className="select" htmlFor="userChoice" aria-label="gifs">
            {gif.map((gifObj) => {
              return (
                    <input
                      className="radio"
                      type="radio"
                      name="gif"
                      value={gifObj.images.original.webp}
                      onChange={select}
                      checked={selectedGif === gifObj.images.original.webp}
                      style={{"backgroundImage" : `url(${gifObj.images.original.webp})`}}
                      key={uuid()}
                    />
                    );
                  })}
            </label>
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