import brittPhoto from "../assets/brittsPic.jpg";
import brittGif from "../assets/excitedGirlGif.webp";
import { Link } from "react-router-dom";
import chrisPhoto from "../assets/chrisPic.jpg";
import chrisGif from "../assets/chrisGif.gif";

const MeetTheDevs = () => {
  return (
    <section className="meetTheDevs">
      <div className="wrapper">
        <div className="linkBox">
        <Link className="backLink" to="/LandingPage"><i class="fa-solid fa-hand-point-left"></i>Back</Link>
        </div>
        <h2>Meet The Team</h2>
        <ul className="bioContainer">
          <li className="bio">
            <img src="" alt="" />
            <h3>Daniel Butcher (he/him)</h3>

            <div className="bioItem">
              <p>
                Phasellizzle yippiyo volutpat tellus. Uhuh ... yih! ass
                adipiscing lorem. Stuff non sheezy. Fo shizzle sapizzle massa,
                ultricizzle nec, accumsizzle ghetto, its fo rizzle quizzle,
                pede. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle nec
                yippiyo.
              </p>

              <div className="socials">
                <a href="https://www.linkedin.com/in/daniel-butcher25/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a class="link" href="https://github.com/dbutch25"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a class="link" href="http://www.danielbutcher.ca/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa-solid fa-laptop"></i>
                </a>
              </div>
            </div>
          </li>

          <div className="bio">
            <img src="" alt="" />
            <h3>Kwame Appiah-Kubi (he/him)</h3>

            <div className="bioItem">
              <p>
                Phasellizzle yippiyo volutpat tellus. Uhuh ... yih! ass
                adipiscing lorem. Stuff non sheezy. Fo shizzle sapizzle massa,
                ultricizzle nec, accumsizzle ghetto, its fo rizzle quizzle,
                pede. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle nec
                yippiyo.
              </p>

              <div className="socials">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/kwameappiahkubi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="link" href="https://github.com/kwametsunami">
                  <i className="fa-brands fa-github"
                    target="_blank"
                    rel="noopener noreferrer"></i>
                </a>
                <a className="link" href="https://heykwa.me/">
                  <i className="fa-solid fa-laptop"
                    target="_blank"
                    rel="noopener noreferrer"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bio">
            <img src={chrisPhoto} alt="" />
            <img clasName="overlay" src={chrisGif} alt="" />
            <h3>Chris Taeyoung Kim (she/her)</h3>

            <p>
              Phasellizzle yippiyo volutpat tellus. Uhuh ... yih! ass adipiscing
              lorem. Stuff non sheezy. Fo shizzle sapizzle massa, ultricizzle
              nec, accumsizzle ghetto, its fo rizzle quizzle, pede. Fo shizzle
              mah nizzle fo rizzle, mah home g-dizzle nec yippiyo.
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/chris-ty-kim/"   target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a class="link" href="https://github.com/chriskimty"   target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a class="link" href="https://chriskim.dev/"   target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-laptop"></i>
              </a>
            </div>
          </div>

          <div className="bio">
            <img src={brittPhoto} alt="brittany holding up a peace sign" />
            <img
              className="overlay"
              src={brittGif}
              alt="excited girl eating cotton candy gif"
            />
            <h3>Brittany Freitas (she/her)</h3>
            <p>
              Brittany is a web developer based out of Toronto, Canada with a
              love for bringing ideas to life through beutiful web design and
              clean code. She is a career switcher with a background in clinical
              social work and enjoys taking on projects that make a social
              impact. Outside of work, you can find her rock climbing, hiking,
              or binge watching interior design content on Youtube.{" "}
            </p>

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/brittany-freitas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a class="link" href="https://github.com/BrittFreitas"   target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a class="link" href="https://www.brittanyfreitas.com/"   target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-laptop"></i>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default MeetTheDevs;
