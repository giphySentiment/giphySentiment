import lost from '../assets/johnLostTransparent.gif'
import background from '../assets/lostCode.png'

const NotFound = () => {
    return (
        <div className="notFound"
            style={{ backgroundImage: `url(${background})` }}>
            <div className="internal">
                <h2>404</h2>
                <p>Are you lost?</p>
                <p>Try going back to the previous page!</p>
            </div>
            <div className="lostImg">
                <img src={lost} alt="John Travolta lost gif"></img>
            </div>
        </div>
    )
}

export default NotFound;