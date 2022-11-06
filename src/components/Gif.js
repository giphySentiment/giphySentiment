// import { useState } from "react";
import DisplayGifs from "./DisplayGifs";

const Gif = (props) => {
    return (
        <div className="gifContainer">
            <DisplayGifs gif={props.gif} />
            <button className="buttonContainers" onClick={props.userClick}>gimmie a new one</button>
            {/* {
                selectedGif
                ? <p>you've selected a gif</p>
                : null
            } */}
            {/* <div>
                {seperatedWord.map((letter) => {
                    return(
                        <div>
                        <h3 value={letter}>{letter}</h3>
                        </div>
                    )
                })}
            </div> */}
            </div>
    )
}

export default Gif;