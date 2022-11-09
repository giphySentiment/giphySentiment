import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="creatives">
                    <p>Created by <a href="https://github.com/dbutch25">Daniel Butcher</a>, <a href="https://github.com/chriskimty">Chris Taeyoung Kim</a>, <a href="https://github.com/kwametsunami">Kwame Appiah-Kubi</a> & <a href="https://github.com/BrittFreitas">Brittany Freitas</a> at <a href="https://junocollege.com">Juno College</a></p>
                </div>
                
            <Link to="/MeetTheDevs" className="button">Meet the Devs!</Link>
            </div>
        </footer>
    );
};

export default Footer;