//import './App.css';
import "./styles/styles.scss";
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import LandingPage from "./components/LandingPage";
import MeetTheDevs from './components/MeetTheDevs';
import Timeline from "./components/Timeline";
import { Link, Route, Routes } from "react-router-dom"
import { useState } from "react";

function App() {

  // const [displayWelcome, setDisplayWelcome] = useState(true)

  // const handleGetStarted = (event) => {
  //   event.preventDefault();
  //   setDisplayWelcome(false)
  // }

  return (
    <div className="App">
      {/* {displayWelcome ?
        <Welcome />
        : null
      } */}
      
      <Routes>
        <Route path="/" element= { <Welcome /> } />
        <Route path="/LandingPage" element={ <LandingPage /> } /> 
        <Route path="/MeetTheDevs" element={<MeetTheDevs />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    

      <Footer/>
    </div>
  );
}

export default App;