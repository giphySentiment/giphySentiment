import { useState } from "react";
import Results from "./Results";
import uuid from "react-uuid";

const Gif = (props) => {
  const [selectedGif, setSelectedGif] = useState("");

  const select = (event) => {
      event.preventDefault()
      setSelectedGif(event.target.value)
      console.log("select handler has been clicked")
      console.log(event.target.value)
  }


  return (
    <section>
      <div className="gifContainer"> 
      <form onClick={select} value={"kwame"} className="select" >   
        <fieldset>
        {props.gif.map((gifObj) => {
          return (
                <label htmlFor="">
                    {/* NOTE TO TEAM: we need to style our radios as the image & we also have to figure out why radio buttons are not filling in on click */}
                <input onChange={select} type="radio" value={gifObj.images.original.webp}/>
                <img
              className="gif"
              src={gifObj.images.original.webp}
              alt={gifObj.title}
              key={uuid()}
             
            />
            </label>

          );
        })}  
        </fieldset>
      </form>
        <button className="buttonContainers" onClick={props.handleFormSubmit}>
          gimmie a new one
        </button>

        <button>Get Backronym!</button>

        {selectedGif ? <p>you've selected a gif</p> : null}
       
        {/* NOTE: We need to figure out how to target the Gif he user selected and conditionally render Backronym when Gif is selected */}
        <Results/>
      </div>
    </section>
  );
};

export default Gif;