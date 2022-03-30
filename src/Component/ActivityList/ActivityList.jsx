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
                        <div className="card my-3 card-history-bg">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex">
                                    <img className="img-history" src="./image/icon-sport/running (1).png" alt="running"/>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Date: 00/00/0000</h5>
                                        <h5 className="card-title">Activity Name: Running</h5>
                                        <h5 className="card-title">Duration: 2 hours</h5>
                                        <h5 className="card-title">Type: Cardio</h5>
                                        <h5 className="card-title d-none d-md-block">Description: Lorem ipsum dolor sit amet.</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card my-3 card-history-bg">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex">
                                    <img className="img-history" src="./image/icon-sport/running (1).png" alt="running"/>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Date: 00/00/0000</h5>
                                        <h5 className="card-title">Activity Name: Running</h5>
                                        <h5 className="card-title">Duration: 2 hours</h5>
                                        <h5 className="card-title">Type: Cardio</h5>
                                        <h5 className="card-title d-none d-md-block">Description: Lorem ipsum dolor sit amet.</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card my-3 card-history-bg">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex">
                                    <img className="img-history" src="./image/icon-sport/running (1).png" alt="running"/>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Date: 00/00/0000</h5>
                                        <h5 className="card-title">Activity Name: Running</h5>
                                        <h5 className="card-title">Duration: 2 hours</h5>
                                        <h5 className="card-title">Type: Cardio</h5>
                                        <h5 className="card-title d-none d-md-block">Description: Lorem ipsum dolor sit amet.</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card my-3 card-history-bg">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex">
                                    <img className="img-history" src="./image/icon-sport/running (1).png" alt="running"/>
                                   </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Date: 00/00/0000</h5>
                                        <h5 className="card-title">Activity Name: Running</h5>
                                        <h5 className="card-title">Duration: 2 hours</h5>
                                        <h5 className="card-title">Type: Cardio</h5>
                                        <h5 className="card-title d-none d-md-block">Description: Lorem ipsum dolor sit amet.</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActivityList