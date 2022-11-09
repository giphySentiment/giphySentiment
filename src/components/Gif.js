import { useState } from "react";
import uuid from "react-uuid";

// Import components
import Results from "./Results";

const Gif = (props) => {
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
            {props.gif.map((gifObj) => {
              return (
                <label
                  htmlFor="userChoice" className="visuallyHidden"
                  key={uuid()}>
                  {gifObj.title}
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
              onClick={props.handleFormSubmit}> gimmie new gifs
            </button>
            </fieldset>
        </form>
      </div>
        {
          selectedGif
          ? <Results
            selectedGif={selectedGif}
            userChoice={props.userChoice}/>
          : null
        }
    </section>
  );
};

export default Gif;