import ImageGallery from '../../assets/images/imageIndex'
import './ActivityCard.css'
import ConfirmDelete from '../ConfirmBoxDelete/ConfirmDelete'
import ConfirmEdit from '../ConfirmEdit/ConfirmEdit';


const ActivityCard = (props) => {
    return(
        <div className="col">
            <div className="card my-3 card-history-bg">
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                    <img className="img-history" src={ImageGallery.running} alt="running"/>
                    </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Date: {props.date}</h5>
                        <h5 className="card-title">Activity Name: {props.ActivityName}</h5>
                        <h5 className="card-title">Duration: {props.duration} hours</h5>
                        <h5 className="card-title">Type: {props.type}</h5>
                        <h5 className="card-title d-none d-md-block">Description: {props.description}</h5>
                    </div>
                </div>
                <div className="col-md-2 p-3 d-flex flex-column justify-content-between">
                    <ConfirmEdit properties={props} />
                    <ConfirmDelete properties={props} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ActivityCard