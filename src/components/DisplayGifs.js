// import { useState } from "react";
import uuid from "react-uuid"

const DisplayGifs = (props) => {
    // const [selectedGif, setSelectedGif] = useState();
    
    // const select = (event) => {
    //     event.preventDefault()
    //     setSelectedGif(event.target.value)
    //     console.log("select handler has been clicked")
    //     console.log(event.target.value)
    // }
    return (
        <div>
                {props.gif.map((gifObj) => {
                    return (
                        // <button
                        //     onClick={props.select}
                        //     value={test.images.original.webp}
                        //     className="select"
                        // >
                            <img className='gif'
                                src={gifObj.images.original.webp}
                                alt={gifObj.title}
                                key={uuid()}
                        />
                        // </button>
                    )
                })}
                    {/* : null
                } */}
        </div>
    )
}

export default DisplayGifs;