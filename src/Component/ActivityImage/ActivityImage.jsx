import './ActivityImage.css'
import ImageGallery from '../../assets/images/imageIndex'

const ActivityImage = () => {
        
    return (
        <div className="container-fluid d-none d-md-block">
        <div className="row row-cols-4 row-cols-lg-6 px-3 py-3">
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.running}
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.swimming}
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.basketball}
                    alt="running"/></div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.bike}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.dumbbell}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.pingpong}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.boxing}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.tennis}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.yoga}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.soccer}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.golf}
                    alt="running"/> </div>
            <div className="col d-flex justify-content-center mb-3"><img className ="activity-img img-fluid" src={ImageGallery.other}
                    alt="running"/> </div>
        </div>
    </div>
    )
}

export default ActivityImage