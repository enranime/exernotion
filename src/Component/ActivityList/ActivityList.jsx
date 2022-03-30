import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityList.css'

const ActivityList = () => {
    return (
        <section id="p-history">
            <div className="subheader">
                <span className="fw-bold">Activity History</span>
                <div>
                    <span>
                        <a href="#" className="fw-bold" target="_blank">All
                            <i className="fa fa-chevron-right"></i>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card-activity container-fluid">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <ActivityCard />
                    </div>
                    <div className="col">
                        <ActivityCard />
                    </div>
                    <div className="col">
                        <ActivityCard />
                    </div>
                    <div className="col">
                        <ActivityCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActivityList