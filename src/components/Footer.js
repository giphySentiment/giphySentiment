import MeetTheDevs from './MeetTheDevs';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Created by Daniel Butcher, Chris Taeyoung Kim, Kwame Appiah-Kubi & Brittany Freitas at Juno College</p>
            <Link to="/MeetTheDevs">Meet the devs</Link>
             {/* <MeetTheDevs/> */}
        </footer>
        
    )
}

export default Footer;