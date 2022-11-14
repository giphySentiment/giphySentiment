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

  // State to save finalized gif
  const [finalGif, setFinalGif] = useState("");

  // Function to save user's selected Gif
  const select = (e) => {
    setSelectedGif(e.target.value);
  };

  //Function that sends the final results
  const sendToResults = (e) => {
    setFinalGif(selectedGif);

    //conditionally rendering results section
    props.setShowForm(false);
    setSelectedGif("");

  };

  return (
    <section className="gif">
      <div  className="gifContainer wrapper">
        <form>
          <fieldset>
            <label className="select" htmlFor="userChoice" aria-label="gifs">
              {gif.map((gifObj) => {
                return (
                  <input gifRef={props.gifRef}
                    className="radio"
                    type="radio"
                    name="gif"
                    value={gifObj.images.original.webp}
                    onChange={select}
                    checked={selectedGif === gifObj.images.original.webp}
                    style={{
                      backgroundImage: `url(${gifObj.images.original.webp})`,
                      "background-size": "300px 300px",
                    }}
                    disabled={finalGif ? true : false}
                    key={uuid()}
                  />
                );
              })}
            </label>
          </fieldset>
        </form>
        <div className="buttonContainer">
          <button onClick={formSubmit} disabled={finalGif ? true : false}>
            gimmie new gifs
          </button>

          <button onClick={sendToResults}>select this gif</button>
        </div>
      </div>
      {finalGif ? <Results finalGif={finalGif} /> : null}
    </section>
  );
};

export default Gif;
