import { useState, useEffect } from 'react'
import axios from 'axios'

const Data = (props) => {

    const [gif, setGif] = useState()
    const [newGif, setNewGif] = useState(false)
    const [giphyError, setGiphyError] = useState(false)
    const [seperatedWord, setSeperatedWord] = useState([])
    const [initialWord, setInitialWord] = useState('')

    const [nextWords, setNextWords] = useState()
    
    const userClick = (event) => {
        event.preventDefault()
        setNewGif(!newGif)
    }
    
    // useEffect(() => {
    //     const apiKey = "Ulwht5cPZ4vU4GOzd3G4kckrwM0g9SgI";
    //     const baseURL = "https://api.giphy.com/v1/gifs/search";
    //     const userChoice =`${props.mood}`
        
    //     const randomNum = (min, max) => {
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //     }
    //     const randomInt = randomNum(0, 35)
        
    //     fetch(`${baseURL}?api_key=${apiKey}&q=${userChoice}&limit=3&offset=${randomInt}&rating=g&lang=en`)
    //     .then(response => response.json())
    //     .then (info => {
    //         setGif(info.data)
    //         console.log(info.data)
    //     })
    //     .catch((error) => {
    //         setGiphyError(!giphyError)
    //     });
        
    // }, [props.mood, giphyError, newGif])

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

        for (let i = 1; i < wordArray.length; i++) {
            fetch(`${baseURL}?lc=${initialWord}&sp=${wordArray[i]}*`)
                .then(response => response.json())
                .then(data => {
                    const wordReturn = data
                    const nextWord = Math.floor(Math.random() * wordReturn.length)
                    storeWords.push(wordReturn[nextWord].word)
                    console.log(wordReturn[nextWord].word)
                })
        }

        console.log(storeWords)


        // wordArray.forEach((item) => {
        //     fetch(`${baseURL}?lc=${initialWord}&sp=${wordArray[item]}*`)
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        // })

    }, [props.mood])

    const [selectedGif, setSelectedGif] = useState()
    
    const select = (event) => {
        event.preventDefault()
        setSelectedGif(event.target.value)
        console.log("select handler has been clicked")
        console.log(event.target.value)
    }


    return (
        <section className="results">
            {/* <div className="gifContainer">
            {gif.map((test) => {
                return (
                        <button 
                            onClick={select} 
                        value={test.images.original.webp} 
                            className="select"
                            >
                            <img className='gif'
                                src={test.images.original.webp} 
                                alt={test.title} />
                        </button>
                )
            })}
            </div>
            <button className="buttonContainers" onClick={userClick}>gimmie a new one</button>
            {
                selectedGif
                ? <p>you've selected a gif</p>
                : null
            }
            <div>
                {seperatedWord.map((letter) => {
                    return(
                        <div>
                        <h3 value={letter}>{letter}</h3>
                        </div>
                    )
                })}
            </div> */}
        </section>
    )

};

export default Data;