import ActivityCard from '../ActivityCard/ActivityCard'
import './ActivityList.css'
import { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://exornation-backend.vercel.app/',
});


const ActivityList = () => {
    
    const [mockData,setMockData] = useState([]);

    const fetchData = async () => {
        const res  = await client.get('/users/me/records');
        setMockData(res.data);
    }


    const removeItem = (uri) => {
        const deleteData = client.delete(uri)
        .then(()=>{
            console.log('delete success')
            fetchData();
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    const editItem = (uri,params) => {
        const editData = client.put(uri,params)
        .then(()=>{
            console.log('edit success')
            fetchData();
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        
        fetchData()
        .then(()=> {
            console.log("pulling data success")
        })
        .catch((error) => {
            console.log(error);
        })
        
    }, [])

    const TestArray = ({currentItems}) => {
        const test = currentItems.map((data) =>{
        return (
        <ActivityCard
            id={data._id}
            key={data._id}
            date={data.activityDate} 
            ActivityName={data.activityName}
            duration={data.activityDuration} 
            type={data.activityType}
            description={data.activityDescription}
            removeItem = {removeItem}
            editItem = {editItem}
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
            // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(mockData.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(mockData.length / itemsPerPage));
          }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % mockData.length;
            // console.log(
            //     `User requested page number ${event.selected}, which is offset ${newOffset}`
            //   );
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