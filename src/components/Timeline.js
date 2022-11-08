import Results from "./Results";
import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useEffect, useState } from "react";

const Timeline = (props) => {

    const [history, setHistory] = useState([])

    
    useEffect(() => {
        const database = getDatabase(firebaseConfig)
        const databaseRef = ref(database)

        onValue(databaseRef, (response) => {
            const newState = []
            const data = response.val()
            console.log(data)

            for (let key in data) {
                newState.push({ key: key, name: data[key] })
            }
            console.log(newState)
            setHistory(newState)
        })
    }, [])

    // console.log(data)

    return (
        <div>
            <ul>
                    {history.map((result, index) => {
                        return (
                            <img src={result.name.image} alt="sdfsdfs" />
                        )
                    })}
            </ul>
        </div>
    )
}

export default Timeline;