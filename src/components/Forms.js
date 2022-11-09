import { useContext } from "react";
import { FormContext } from "./GiphyData";

// Import components
import LoadingPage from "./LoadingPage";

const Forms = (props) => {
    // Set variable for 'handleFormSubmit' from GiphyData (useContext)
    const formSubmit = useContext(FormContext);
    
    // Variables to info for day of the week
    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    // Function to change setMood to user input value
    const handleMoodChange = (e) => {
        props.setMood(e.target.value);
    };

    return (
        <section className="forms">
            <h3>Happy {`${today}`}! How are you feeling?</h3>
            <form onSubmit={(e) => formSubmit(e, props.mood)}>
                <label htmlFor="moodSelector"
                    className="visuallyHidden">Type in an emotion </label>
                <input name="moodSelector" id="moodSelector" type="text"
                    onChange={(event) => handleMoodChange(event)}
                />
                {props.loading
                    ? <><LoadingPage /></>
                    : <button className="buttonContainer">find gifs!</button>
                }
            </form>
        </section>
    );
};

export default Forms;