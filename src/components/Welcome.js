import { Link } from "react-router-dom";

const Welcome = () => {
    return (
      <section className="welcome">
        <div className="wrapper">
          <h1>Giphy Sentiments</h1>
          <h2 style={{"color" : "red" }}>Express your sentiments with a gif✨</h2>
          <Link to="/landingPage" className="button">Get Started</Link>
        </div>
      </section>
    )
};

export default Welcome;