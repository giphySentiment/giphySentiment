import { useState } from "react";
import { Link } from "react-router-dom";
// ^ removed Routes and Route for now as it is not in use.

// Import components
import LandingPage from "./LandingPage";

const Welcome = () => {
  // State to store state of user click
  const [isClicked, setIsClicked] = useState(false);
  // Function handle user click to go to landing page
  const handleUserClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  }
    return (
      <section className="welcome">
        <h1>Giphy Sentiments</h1>
        <h2>Express your sentiments into a gif</h2>
        <button
          onClick={handleUserClick}
          className="buttonContainer">
          Get Started
        </button>
        {
          isClicked
          ? <LandingPage />
          : null
        }
      </section>
    )
}
export default Welcome;