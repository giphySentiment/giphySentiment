import LandingPage from "./LandingPage";
import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

const Welcome = () => {
  const [begin, setBegin] = useState(false)

  const handleUserClick = (event) => {
    event.preventDefault()
    setBegin(!begin)
  }

    return (
      <div>
        <h1><Link to="/">Giphy Sentiments</Link></h1>
        <h2>Express your sentiments into a gif</h2>
        <button onClick={handleUserClick}>Get Started</button>
        {
          begin
          ? <LandingPage />
          : null
        }
        
      </div>
    )


}
export default Welcome;