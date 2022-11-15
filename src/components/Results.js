import firebaseConfig from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { Link } from "react-router-dom";
import { useContext, useState, createContext } from "react";
import { ChoiceContext } from "./GiphyData";

export const LikesContext = createContext();

const Results = (props) => {
  // Set variable for 'userChoice' from GiphyData (useContext)
  const userChoice = useContext(ChoiceContext);

  // Variables to set date info
  const date = new Date();
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();

  const refreshPage = () => {
    window.location.reload();
  }
  
//   const [numOfLikes, setNumOfLikes] = useState(0);

//   const handleLikes = (event, likes) => {
//     setNumOfLikes(numOfLikes + 1);
//     console.log("num of likes being clicked");
//     const database = getDatabase(firebaseConfig);
//     const databaseRef = ref(database, `/${likes}`)
//     push(databaseRef)
// };
  // Object with user's gif, mood and date to be pushed to firebase
  const result = {
    mood: userChoice,
    image: props.finalGif,
    date: `${month} ${day}, ${year}`,
    // likes: {numOfLikes}
  };

  // Variables to set database and databaseRef for firebase; call the push function into firebase
  const database = getDatabase(firebaseConfig);
  const databaseRef = ref(database);
  push(databaseRef, result);

  return (
    <section className="results">
      <div className="resultsContent">
        <p ref={props.resultRef}>{userChoice}</p>
        <img
          src={props.finalGif}
          alt={`user's selected gif that represents the mood of ${userChoice}`}
        />
      </div>
        <Link className="button" to="/landingPage" onClick={refreshPage}>Try Again</Link>

        <Link className="button" to="/Timeline" state={{result: result}}>Save to Timeline</Link>
    </section>
  );
};

export default Results;
