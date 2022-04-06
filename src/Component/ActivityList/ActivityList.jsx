import { date } from 'joi'
import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityList.css'

const ActivityList = () => {

    const mockData =[
        {
            date:"00/00/0000",
            activityName:"Running",
            duration:1,
            type:"Running",
            description:"description1"
        },
        {
            date:"01/00/0000",
            activityName:"Walking",
            duration:2,
            type:"Walking",
            description:"description2"
        },
         {
            date:"02/00/0000",
            activityName:"Swmiming",
            duration:3,
            type:"Swmiming",
            description:"description3"
        },

        {
            date:"03/00/0000",
            activityName:"Yoga",
            duration:4,
            type:"Yoga",
            description:"description4"
        }
    
    ];

    const TestArray = mockData.map((data) => {
        return (
        //     <ActivityCard 
        //     // date={data.date} 
        //     // ActivityName={data.activityName}
        //     // duration={data.duration} 
        //     // type={data.type}
        //     // description={data.description}
        // />

        <ActivityCard 
                            date="00/00/0000" 
                            ActivityName="Walking Alone" 
                            duration={2} 
                            type="Walking" 
                            description="Walking alone is lonely"
                        />
        );
    });

    console.log(<TestArray/>)

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

                       <ActivityCard 
                            date="00/00/0000" 
                            ActivityName="Walking Alone" 
                            duration={2} 
                            type="Walking" 
                            description="Walking alone is lonely"
                        />
                        
                    
                        {/* <ActivityCard />
                        <ActivityCard />
                        <ActivityCard /> */}
                </div>
            </div>
        </section>
    )
}

export default ActivityList