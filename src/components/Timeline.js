import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, remove, push } from 'firebase/database';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import uuid from "react-uuid";
// import { useRef } from 'react';


// Import components
//import Carousel from './Carousel';

const Timeline = (props) => {

    const [numOfLikes, setNumOfLikes] = useState(0);

    const handleLikes = () => {
      setNumOfLikes(numOfLikes + 1);
      console.log("num of likes being clicked");
    };
   
    // //declaring my useRef
    // const testRef = useRef(null);

    // // State to save user's gif and info object into the timeline
     const [timeline, setTimeline] = useState([]);

    // const [numOfLikes, setNumOfLikes] = useState(0);

    // const handleLikes = (likes) => {
    //     setNumOfLikes(numOfLikes + 1);
    //     console.log("num of likes being clicked");
    //     const database = getDatabase(firebaseConfig);
    //     const databaseRef = ref(database, `/${likes}`)

    //     push(databaseRef)
    // };

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

    const handleRemoveMeme = (memeKey) => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database, `/${memeKey}`)

        remove(databaseRef)
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
                <div  className="timelineContainer">
                    {timeline.map((result) => {
                        return (
                            <div  className="timelineTest">
                                <div
                                    className="timelineItems"
                                    key={uuid()}>
                                    <h3>{`On ${result.name.date}, you felt: ${result.name.mood}`}</h3>
                                    <img
                                        src={result.name.image}
                                        alt={`user selected gif to show the mood of ${result.name.mood}`}
                                    />
                                    <button onClick={() => {handleRemoveMeme(result.key)}}>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                    <button onClick={() => {handleLikes(result.key)}}><i className="fa-regular fa-heart"></i></button>
                                    <p>{numOfLikes}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    );
};

export default Timeline;