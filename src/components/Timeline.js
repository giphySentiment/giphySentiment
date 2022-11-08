import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const Timeline = (props) => {

    // State to save user's gif+info object into the timeline
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);

        onValue(databaseRef, (response) => {
            const newState = [];
            const data = response.val();

            for (let key in data) {
                newState.push({ key: key, name: data[key] })
            }
            setTimeline(newState);
        })
    }, []);

    return (
        <div>
            <ul>
                {timeline.map((result) => {
                    return (
                        <div
                            className="savedToTimeline"
                            key={uuid()}>
                            <h2>{`On ${result.name.date}, you felt: ${result.name.mood}`}</h2>
                            <img
                                src={result.name.image}
                                alt={`user selected gif to show the mood of ${result.name.mood}`}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Timeline;