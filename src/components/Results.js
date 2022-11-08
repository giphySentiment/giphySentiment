import History from "./History";
import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';


const Results = (props) => {

     const result = {
        image: props.selectedGif,
        
        mood: "a mood"
    }
    const database = getDatabase(firebaseConfig)
    const databaseRef = ref(database)
    push(databaseRef, result )
    
    // onValue(dbref, (response) => {

    // const results = [];
    // const data = response.val();



    // })
   
    return (
        <section>
            <div><img src={props.selectedGif} alt="" /></div>
            <div>{props.mood}</div>
            <History/>
        </section>
        
    )
}

export default Results;