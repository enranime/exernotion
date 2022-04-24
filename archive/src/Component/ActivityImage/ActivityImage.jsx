import './ActivityImage.css'
import ImageGallery from '../../assets/images/imageIndex'

const ActivityImage = (props) => {


        const ActivityImageComponent = (props) => {

                const pName = props.name;
                const pValue = props.value;
                const imgPath = ImageGallery[pValue];

                return (
                        <div className="col d-flex justify-content-center mb-3">
                                <img
                                        fname={pName}
                                        fvalue={pValue}
                                        onClick={props.onClick}
                                        className="activity-img img-fluid"
                                        src={imgPath}
                                        alt={pName} />
                        </div>
                )
        }

        return (
                <div className="container-fluid d-none d-md-block">
                        <div className="row row-cols-4 row-cols-lg-6 px-3 py-3">
                                <ActivityImageComponent name="Running" value="running" onClick={props.onClick} />
                                <ActivityImageComponent name="Swimming" value="swimming" onClick={props.onClick} />
                                <ActivityImageComponent name="Basketball" value="basketball" onClick={props.onClick} />
                                <ActivityImageComponent name="Bike" value="bike" onClick={props.onClick} />
                                <ActivityImageComponent name="Dumbbell" value="dumbbell" onClick={props.onClick} />
                                <ActivityImageComponent name="Pingpong" value="pingpong" onClick={props.onClick} />
                                <ActivityImageComponent name="Boxing" value="boxing" onClick={props.onClick} />
                                <ActivityImageComponent name="Tennis" value="tennis" onClick={props.onClick} />
                                <ActivityImageComponent name="Yoga" value="yoga" onClick={props.onClick} />
                                <ActivityImageComponent name="Soccer" value="soccer" onClick={props.onClick} />
                                <ActivityImageComponent name="Golf" value="golf" onClick={props.onClick} />
                                <ActivityImageComponent name="Other" value="other" onClick={props.onClick} />
                        </div>
                </div>

        )
}

export default ActivityImage