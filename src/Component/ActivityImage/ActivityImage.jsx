import './ActivityImage.css'
import { Running } from '../../assets/images/imageIndex'

const ActivityImage = () => {
        
    return (
        <div className="container-fluid d-none d-md-block">
        <div className="row row-cols-4 row-cols-lg-6 px-3 py-3">
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={Running}
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/swimming (1).png"
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/basketball (1).png"
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/bike (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/dumbbell (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/ping-pong (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/boxing-gloves (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/tennis (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/yoga (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/soccer-ball (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/golf (1).png"
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src="./image/icon-sport/other.png"
                    alt="running"/> </div>
        </div>
    </div>
    )
}

export default ActivityImage