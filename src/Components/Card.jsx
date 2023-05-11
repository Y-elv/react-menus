
import './Css/Card.css'
const Card = ({ Img, title, newB, feature, position }) => {
    return (
        <div className="container">
            <div className="left">
                <div className="img">
                    <img src={Img} />
                </div>
                <div className="words">
                    <div className="upper">
                        <h4>{title}</h4>
                        <button>{newB}</button>
                        <button>{feature}</button>
                    </div>
                    <div className="middle">
                        <h3>{position}</h3>
                    </div>
                    <div className="lower">
                        <p>1day ago</p>
                        <p>. full time</p>
                        <p>. USA only</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>Fronted</h4>
                <h4>Senior</h4>
                <h4>HTMl</h4>
                <h4>CSS</h4>
                <h4>JAvascript</h4>
            </div>


        </div>
    )
}
export default Card