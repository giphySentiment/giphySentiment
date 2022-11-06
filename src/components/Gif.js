import { useState } from "react";
import Backronym from "./Backronym";
import uuid from "react-uuid";

const Gif = (props) => {
  const [selectedGif, setSelectedGif] = useState();

  // const select = (event) => {
  //     event.preventDefault()
  //     setSelectedGif(event.target.value)
  //     console.log("select handler has been clicked")
  //     console.log(event.target.value)
  // }

 

  return (
    <section>
      <div className="gifContainer">
        {props.gif.map((gifObj) => {
          return (
            // <button
            //     onClick={props.select}
            //     value={test.images.original.webp}
            //     className="select"
            // >
            <img
              className="gif"
              src={gifObj.images.original.webp}
              alt={gifObj.title}
              key={uuid()}
            />
            // </button>
          );
        })}
        {/* : null
                } */}

        <button className="buttonContainers" onClick={props.userClick}>
          gimmie a new one
        </button>

        {selectedGif ? <p>you've selected a gif</p> : null}
        <div></div>
        {/* NOTE: We need to figure out how to target the Gif he user selected and conditionally render Backronym when Gif is selected */}
        {<Backronym />}
      </div>
    </section>
  );
};

export default Gif;
