import History from "./History";
import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';

const Results = (props) => {


    const date = new Date()
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate()
    const year = date.getFullYear()
    
    const result = {
        image: props.selectedGif,
        mood: props.userChoice,
        date: `${month} ${day} ${year}`
    }

    const [isShown, setIsShown] = useState(false)

    const database = getDatabase(firebaseConfig)
    const databaseRef = ref(database)
    push(databaseRef, result)

    // COME BACK TO THIS: pushing data twice to history
    const handleUserClick = (event) => {
        event.preventDefault()
        setIsShown(!isShown)
    }

    return (
        <section>
            <div>
                <img src={props.selectedGif} alt="aaaaa" />
                <p>{props.userChoice}</p>
            </div>
            {/* <button onClick={handleUserClick}>show history</button>
            {
            isShown */}
            {/* ? <History userChoice={props.userChoice} /> */}
            {/* : null
            } */}

            <button><Link to="/history">Show History</Link></button>
            <Routes>
                <Route path="/history" element={<History />} />
            </Routes>
            
        </section>
        
    )
}

export default Results;