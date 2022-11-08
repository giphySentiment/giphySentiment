import "./styles/styles.scss";
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import LandingPage from "./components/LandingPage";
import MeetTheDevs from './components/MeetTheDevs';
import Timeline from "./components/Timeline";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
     
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