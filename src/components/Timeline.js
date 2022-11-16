import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, remove, push } from 'firebase/database';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import uuid from "react-uuid";
import { useRef } from 'react';
import navLogo2 from '../assets/moodyMemesLogoBannerHorizontal.png'

const Timeline = (props) => {
    //State to save user's gif and info object into the timeline
    const [timeline, setTimeline] = useState([]);
 
    useEffect(() => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);
        
        onValue(databaseRef, (response) => {
            const newState = [];
            const newLikes = [];
            const data = response.val();
            console.log(response.val())
            for (let key in data) {
                newState.push({ key: key, name: data[key] })
            }
            console.log(response.val())
            setTimeline(newState);
            console.log(timeline[1].name.likes)
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
                        <img className="navLogo" src={navLogo2} alt="" />
                    </Link>
                </nav>
            </div>
            <div className="wrapper roundScroll">
                <h2>Moody Timeline</h2>
                <div className="timelineContainer">
                    {timeline.reverse().map((result) => {
                        return (
                            <div className="timelineItems"
                                key={uuid()}>
                                <div className="dateContent">
                                    <h3>{result.name.date}</h3>
                                </div>
                                <div className="inner"></div>
                                <div className="moodCard">
                                    <i className="fa-solid fa-caret-down"></i>
                                    <h4>Today's moody meme: <span>{result.name.mood}</span></h4>
                                    <img
                                        src={result.name.image}
                                        alt={`user selected gif to show the mood of ${result.name.mood}`}
                                    />
                                    <div className="timelineButtons">
                                        <button onClick={() => { handleRemoveMeme(result.key) }}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="wrapper">
                <div className="scrollInst">Scroll for more</div>
            </div>
        </section>
    );
};

export default Timeline;