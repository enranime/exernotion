import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityList.css'
import { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';

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
            duration:8,
            type:"Yoga",
            description:"description4"
        }
    
    ];

    const TestArray = ({currentItems}) => {
        const test = currentItems.map((data) =>{
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

 

    const PaginatedItems = ({itemsPerPage}) =>{

        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(()=> {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(mockData.slice(itemOffset, endOffset));
            let currentArray = currentItems;
            setPageCount(Math.ceil(mockData.length / itemsPerPage));
          }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % mockData.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
              );
            setItemOffset(newOffset);
        }

        
        return (
            <>
             <TestArray  currentItems={currentItems}/>
            <ReactPaginate
               nextLabel="next >"
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               marginPagesDisplayed={2}
               pageCount={pageCount}
               previousLabel="< previous"
               pageClassName="page-item"
               pageLinkClassName="page-link"
               previousClassName="page-item"
               previousLinkClassName="page-link"
               nextClassName="page-item"
               nextLinkClassName="page-link"
               breakLabel="..."
               breakClassName="page-item"
               breakLinkClassName="page-link"
               containerClassName="pagination"
               activeClassName="active"
               renderOnZeroPageCount={null}
            />
            </>
        )
    }


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
                <PaginatedItems  itemsPerPage={4}/>   
                </div>
            </div>
           
        </section>
    )
}

export default ActivityList