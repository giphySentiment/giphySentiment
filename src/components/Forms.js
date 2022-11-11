import { useContext } from "react";
import { FormContext } from "./GiphyData";
import GiphyError from "./GiphyError";

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
        props.setIsSpace(false)
    };

    return (
        <section className="forms">
            <h3>Happy {`${today}`}!
                <span>How are you feeling?</span></h3>
            <form onSubmit={(e) => formSubmit(e, props.mood)}>
                <label htmlFor="moodSelector"
                    className="visuallyHidden">Type in an emotion </label>
                <input name="moodSelector" id="moodSelector" type="text"
                    onChange={(e) => handleMoodChange(e)}
                />
                <button disabled=
                    {
                        props.isSpace
                        ? true
                        : false
                    }
                    className="buttonContainer">GIF me my mood!</button>
                    {
                        props.noGifsAvailable
                        ? <p>There are no GIFs to express how you feel. Try something else!</p>
                        : null
                    }
                    {
                        props.isSpace
                        ? <p>You can't do that!</p>
                        : null
                    }
                    {
                        props.giphyError
                        ? <GiphyError />
                        : null
                    }
                    {
                        props.loading
                        ? <><LoadingPage/></>
                        : null
                    }
            </form>
        </section>
    );
};

export default Forms;