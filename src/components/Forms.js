import { useEffect, useState } from "react";


const Forms = (props) => {

    const date = new Date()
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate()
    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    const [test, setTest] = useState([])


    const handleMoodChange = (e) => {
        props.setMood(e.target.value)
    }
    //     const [ track, setTrack ] = useState([]);
    //     useEffect(() => {

        
    //     const database = getDatabase(firebase);
    //     const dbRef = ref(database);

    //     onValue(dbRef, (response) => {
    //         const newState = [];
    //         const data = response.val

    //         for (let key in data) {
    //             newState.push({key: key, name: data[key]})
    //           }
    //           setTrack(newState)
    //     })
    // }, [])
    return (
        <section>
                <h2>It's {`${month} ${day}`}</h2>
                <h2>Happy {`${today}`}! How are you feeling?</h2>
            <form onSubmit={(e) => props.handleFormSubmit(e, props.mood)}>
               
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