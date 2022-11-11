import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import uuid from "react-uuid";

// Import components
import Carousel from './Carousel';

const Timeline = (props) => {
    // State to save user's gif and info object into the timeline
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

    let currentItems = (0);
    console.log(timeline)
    const displayNextThree = () => {
        for (let i = 0; i > timeline.length; i + 3){
        timeline[i]
    }
        // setTimeline(timeline.slice(currentItems, currentItems + 3));
        // if (!(currentItems + 3 > timeline.length)) {
        //     currentItems += 3;
        // }
        console.log(timeline)
    }

    return (
        <section className="timeline">
             <div className="wrapper">
                <nav>
                    <Link to="/landingPage">
                        <h2>Giphy Sentiments</h2>
                    </Link>
                </nav>
            </div>
            <div className="carousel">
                {/* <Carousel setTimeline={setTimeline} timeline={timeline}> */}
                {/* <div className="slides"> */}
                    {timeline.slice(currentItems, currentItems + 3).map((result) => {
                        return (
                            <div
                                className="savedToTimeline"
                                key={uuid()}>
                                <h3>{`On ${result.name.date}, you felt: ${result.name.mood}`}</h3>
                                <img
                                    src={result.name.image}
                                    alt={`user selected gif to show the mood of ${result.name.mood}`}
                                />
                            </div>
                        )
                    })}
                    <button onClick={displayNextThree}>&#10095;</button>
                {/* </div> */}
                {/* </Carousel> */}
            </div>
        </section>
    );
};

export default Timeline;