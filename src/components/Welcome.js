import { Link } from "react-router-dom";

const Welcome = () => {
    return (
      <section className="welcome">
        <h1>Giphy Sentiments</h1>
        <h2>Express your sentiments into a gif</h2>
        <button> 
          <Link to="/landingPage">Get Started</Link>
        </button>
      </section>
    )
};

export default Welcome;