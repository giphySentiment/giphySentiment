const Forms = (props) => {
    // Variables to set date info
        // NB: We could pass down each of these as a variable into results so that it doesn't need to be repeated information on the results page
    const date = new Date();
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate();
    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    // Function to change setMood to user input value
    const handleMoodChange = (e) => {
        props.setMood(e.target.value);
    }

    return (
        <section className="forms">
            {/* N.B: We don't actually need to display the month and day, but it will be collected in the background */}
            <h2>It's {`${month} ${day}`}</h2>
            <h2>Happy {`${today}`}! How are you feeling?</h2>
            <form onSubmit={(e) => props.handleFormSubmit(e, props.mood)}>
                <label htmlFor="moodSelector"
                    // add visuallyHidden class in CSS
                    className="visuallyHidden">Type in an emotion</label>
                <input name="moodSelector" id="moodSelector" type="text"
                 onChange={(event) => handleMoodChange(event)}
                />
                <button className="buttonContainer">find gifs!</button>
            </form>
        </section>
    )
}

export default Forms;