import LoadingPage from "./LoadingPage";

const Forms = (props) => {
    // Variables to set date info
    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    // Function to change setMood to user input value
    const handleMoodChange = (e) => {
        props.setMood(e.target.value);
    }

    return (
        <section className="forms">
            <h2>Happy {`${today}`}! How are you feeling?</h2>
            <form onSubmit={(e) => props.handleFormSubmit(e, props.mood)}>
                <label htmlFor="moodSelector"
                    // add visuallyHidden class in CSS
                    className="visuallyHidden">Type in an emotion</label>
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