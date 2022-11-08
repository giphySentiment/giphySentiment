import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { Link } from 'react-router-dom';

const Results = (props) => {
    // Variables to set date info
    const date = new Date();
    const month = date.toLocaleString('en-US', {
        month: 'long',
    });
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Object with user's gif, mood and date to be pushed to firebase
    const result = {
        image: props.selectedGif,
        mood: props.userChoice,
        date: `${month} ${day}, ${year}`
    };

    // Variables to set database and databaseRef for firebase; call the push function into firebase
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);
    push(databaseRef, result);

    return (
        <section className="results">
            <div>
                <img
                    src={props.selectedGif}
                    alt={`user's selected gif that represents the mood of ${props.userChoice}`} />
                <p>{props.userChoice}</p>
            </div>
            <button>
                <Link to="/Timeline">Show Timeline</Link>
            </button>
        </section>
    );
};

export default Results;