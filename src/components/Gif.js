import { useState, useContext, useEffect } from "react";
import uuid from "react-uuid";
import { GifContext } from "./LandingPage";
import { FormContext } from "./GiphyData";
import { ChoiceContext } from "./GiphyData";
import { useNavigate, Link } from "react-router-dom";
import firebaseConfig from "../firebase";
import { getDatabase, ref, push } from "firebase/database";


const Gif = (props) => {
  
  // Set variable for 'gif' from LandingPage (useContext)
  const gif = useContext(GifContext);

  // Set variable for 'handleFormSubmit' from GiphyData (useContext)
  const formSubmit = useContext(FormContext);

  // State to save selectedGif value
  const [selectedGif, setSelectedGif] = useState("");

  // State to save finalized gif
  const [finalGif, setFinalGif] = useState(selectedGif);

  // Function to save user's selected Gif
  const select = (e) => {
    setSelectedGif(e.target.value);
  };

  const navigate = useNavigate()

  //Function that sends the final results
  const sendToTimeline = (e) => {
    setFinalGif(selectedGif);
    console.log(finalGif)
    //conditionally rendering results section
    props.setShowForm(false);
    // setSelectedGif("");
  };

  const userChoice = useContext(ChoiceContext);

  // Variables to set date info
  const date = new Date();
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();

  // Object with user's gif, mood and date to be pushed to firebase
  const result = {
    mood: userChoice,
    image: finalGif,
    date: `${month} ${day}, ${year}`,
    likes: 0
  };

  // Variables to set database and databaseRef for firebase; call the push function into firebase
  useEffect (() => {
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);
    push(databaseRef, result);

  }, [sendToTimeline])

  return (
    <section className="gif">
      <div ref={props.gifRef} className="gifContainer wrapper">
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
                      style={{"backgroundImage" : `url(${gifObj.images.original.webp})`, "background-size" : '300px 300px'}}
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

          {/* state={{ finalGif: finalGif }} */}
          <Link to="/Timeline" state={{result: result}}>
            <button onClick={sendToTimeline}>select this gif </button>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default Gif;
