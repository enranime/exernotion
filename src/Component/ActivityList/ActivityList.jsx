import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityList.css'

const ActivityList = () => {

    const mockData =[
        {   
            id:"1",
            date:"00/00/0000",
            activityName:"Running",
            duration:1,
            type:"Running",
            description:"description1"
        },
        {   
            id:"2",
            date:"01/00/0000",
            activityName:"Walking",
            duration:2,
            type:"Walking",
            description:"description2"
        },
         {
            id:"3",
            date:"02/00/0000",
            activityName:"Swmiming",
            duration:3,
            type:"Swmiming",
            description:"description3"
        },

        {
            id:"4",
            date:"03/00/0000",
            activityName:"Yoga",
            duration:4,
            type:"Yoga",
            description:"description4"
        },
        {   
            id:"5",
            date:"00/00/0000",
            activityName:"Running",
            duration:1,
            type:"Running",
            description:"description1"
        },
        {   
            id:"6",
            date:"01/00/0000",
            activityName:"Walking",
            duration:2,
            type:"Walking",
            description:"description2"
        },
         {
            id:"7",
            date:"02/00/0000",
            activityName:"Swmiming",
            duration:3,
            type:"Swmiming",
            description:"description3"
        },

        {
            id:"8",
            date:"03/00/0000",
            activityName:"Yoga",
            duration:4,
            type:"Yoga",
            description:"description4"
        }
    
    ];

    const TestArray = () => {

        const test = mockData.map((data) =>{
        return (
        <ActivityCard
            key={data.id}
            date={data.date} 
            ActivityName={data.activityName}
            duration={data.duration} 
            type={data.type}
            description={data.description}
        />
            )}
        );

        return test;
    };

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
                        <TestArray/>
                </div>
            </div>
        </section>
    )
}

export default ActivityList