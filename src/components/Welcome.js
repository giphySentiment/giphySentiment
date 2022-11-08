
import { Link } from "react-router-dom"

const Welcome = () => {
   
    return (
      <div>

        <h1>Giphy Sentiments</h1>
        <h2>Express your sentiments into a gif</h2>
        
        <button > 
          <Link to="/landingPage"> Get Started</Link>
       </button>

    
      </div>
    )
      

}
export default Welcome;