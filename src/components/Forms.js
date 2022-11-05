import { useState } from 'react'
import Data from './Data'

const Forms = () => {

    const [mood, setMood] = useState()
    const [displayGifs, setDisplayGifs] = useState(false)

    const handleUserChoice = (event) => {
        setMood(event.target.value)
        // setDisplayGifs(!displayGifs)
    }

    const date = new Date()
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate()


    const today = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );


    return (
        <section>
                <h2>It's {`${month} ${day}`}</h2>
                <h2>Happy {`${today}`}! How are you feeling?</h2>
            <form>
                <select name="moodSelector" id="moodSelector" onChange={handleUserChoice} value={mood} defaultValue={""}>
                    <option value="" disabled>choose ya mood</option>
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="cheerful">cheerful</option>
                    <option value="reflective">reflective</option>
                    <option value="gloomy">gloomy</option>
                    <option value="idyllic">idyllic</option>
                    <option value="silly">silly</option>
                </select>
            </form>
            {
                mood 
                ? <Data mood={mood} displayGifs={displayGifs}/>
                : null
            }
        </section>
    )
}

export default Forms;