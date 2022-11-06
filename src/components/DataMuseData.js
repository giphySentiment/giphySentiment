import { useState, useEffect } from "react";
import Forms from './Forms';
import Gif from './Gif';

const DataMuseData = (props) => {

    //this state is to store the initial word from our first dataMuse API fetch
    const [initialWord, setInitialWord] = useState("");
    //this state is to store an array of letters of the user's selected emotion
    const [seperatedWord, setSeperatedWord] = useState([]);
    //this state hold API data, an array of backronym words
    const [backronym, setBackronym] = useState([]);

    useEffect(() => {
        const baseURL = "https://api.datamuse.com/words"
        const mood = `${props.mood}`
        const wordArray = (Array.from(`${props.mood}`))

        setSeperatedWord(wordArray);

        // console.log(wordArray)

        fetch(`${baseURL}?ml=${mood}&sp=${wordArray[0]}*`)
        .then(response => response.json())
        .then (data => {
            const firstWord = data
            // console.log(firstWord)
            const randomFirstWord = Math.floor(Math.random() * firstWord.length)
    
            console.log(firstWord[randomFirstWord].word)
            setInitialWord(firstWord[randomFirstWord].word)

        })

        
        const storeWords = []

        const grabWords = async () => {
            for (let i = 1; i < wordArray.length; i++) {
                await fetch(`${baseURL}?ml=${initialWord}&sp=${wordArray[i]}*`)
                    .then(response => response.json())
                    .then(data => {
                        if (data) {
                            const wordReturn = data
                            const nextWord = Math.floor(Math.random() * wordReturn.length)
                            storeWords.push(wordReturn[nextWord].word)
                            console.log(wordReturn[nextWord].word)
                        } else {
                            alert("nope")
                        }}).catch((error) => {
                            fetch(`https://api.datamuse.com/words?sp=${wordArray[i]}*`)
                            .then(response => response.json())
                            .then(data => {
                                const wordReturn = data
                                const nextWord = Math.floor(Math.random() * wordReturn.length)
                                storeWords.push(wordReturn[nextWord].word)
                                console.log(wordReturn[nextWord].word)
                                console.log("this has been caught")
                            })
                        // Only network error comes here
                    });

                    }
            }

        grabWords()
        

        console.log(storeWords)
        setBackronym(storeWords);

    }, [])


    return (
    <div>

        <Forms handleFormSubmit={props.handleFormSubmit}
        newGif={props.newGif}
        setNewGif={props.setNewGif}
        displayGifs={props.displayGifs}
        setDisplayGifs={props.setDisplayGifs}
        mood={props.mood}
        setMood={props.setMood}
        />
    
    
       <Gif newGif={props.newGif}
        setNewGif={props.setNewGif}
        displayGifs={props.displayGifs}
        setDisplayGifs={props.setDisplayGifs}
        userClick={props.userClick}
        gif={props.gif}
        setBackronym={setBackronym}
        setInitialWord={setInitialWord}
        setSeperatedWord={setSeperatedWord}
        seperatedWord={seperatedWord}
        backronym={backronym}
         /> 
        
    
        
    </div>

    )
}

export default DataMuseData;