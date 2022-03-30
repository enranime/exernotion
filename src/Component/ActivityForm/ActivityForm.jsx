import React,{ useState } from "react";

import './ActivityForm.css'
import ActivityImage from "../ActivityImage/ActivityImage";

const ActivityForm = () => {
    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] =  useState('');

    const onChangeActivityName = (e) => {
        const newValue = e.target.value;
        if(newValue.length > 10){
            return;
        }else{
        setActivityName(newValue);
        }
    };


    return (
        <section id="p-addactivity" className="p-activity">

            <h2>Add your Activity</h2>
            <ActivityImage/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 py-3 pe-5">
                        {/* form section */}
                        <form>
                            <div className="mb-4">
                                <label htmlFor="form-activity" className="form-label mb-3 fw-bold">Activity Name</label>

                                <input 
                                type="text" 
                                className="form-control" 
                                id="form-activity" 
                                placeholder="Your Activity Name"
                                value={activityName}
                                onChange={onChangeActivityName}
                                 required/>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="form-date" className="form-label mb-3 fw-bold">Date</label>
                                <input type="date" className="form-control" id="form-date" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="activity-type" className="form-label mb-3 fw-bold">Activity Type</label>

                                <select className="form-select" id="activity-type" required>
                                    <option value="" className="d-none">Choose Your Activity</option>
                                    <option value="1">running</option>
                                    <option value="2">swimming</option>
                                    <option value="3">basketball</option>
                                    <option value="4">biking</option>
                                    <option value="5">weight training</option>
                                    <option value="6">ping pong</option>
                                    <option value="7">boxing</option>
                                    <option value="8">tennis</option>
                                    <option value="9">yoga</option>
                                    <option value="10">soccer</option>
                                    <option value="11">golf</option>
                                    <option value="12">other</option>
                                </select>


                                </div>
                                <div className="mb-4">
                                    <label htmlFor="form-duration" className="form-label mb-3 fw-bold">Activity Duration</label>
                                    <input type="number" className="form-control" id="form-duration" placeholder="Hours" required/>
                                </div>
                                <div className="mt-5 mb-4">
                                    <label htmlFor="form-desc" className="form-label mb-3 fw-bold">Describe this journal</label>
                                    <textarea maxLength={120} type="text" className="form-control" id="form-desc" rows="3" placeholder="Max 120 Characters"></textarea>
                                </div>
                                <div className="add-activity-btn">
                                    <button type="submit" className="btn btn-dark fw-bold py-2 border" >ADD ACTIVITY</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img  className ="img-form img-fluid d-none d-md-block img-fluid" src="./image/icon-sport/running (1).png" width="520px"  alt="placeholder"/>
                        </div>
                    </div>
                    {/* end form section */}
                </div>

</section>
    );   
};


export default ActivityForm;