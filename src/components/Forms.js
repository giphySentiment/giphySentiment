import { useState } from "react";

const Forms = (props) => {

    const [mood, setMood] = useState("");

    const date = new Date()
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate()
    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    // //tracking users input and setting it to a string
    // const [inputValue, setinputValue] = useState("")

    // //this function is setting state to the users input
    // const handleInputChange = (event) => {
    //     setinputValue(event.target.value)
    // }

    const handleMoodChange = (e) => {
        setMood(e.target.value)
    }

    return (
        <section>
                <h2>It's {`${month} ${day}`}</h2>
                <h2>Happy {`${today}`}! How are you feeling?</h2>
            <form onSubmit={(e) => props.handleFormSubmit(e, mood)}>
               
                <label htmlFor="moodSelector" className="visuallyHidden">Type in an emotion</label>
                <input name="moodSelector" id="moodSelector" type="text"
                 onChange={(event) => handleMoodChange(event)}
                />

                <button >find gifs!</button>
            </form>
        </section>
    )
}

export default Forms;