import React from "react";
import { useForm } from "react-hook-form";

import './ActivityForm.css'
import ActivityImage from "../ActivityImage/ActivityImage";

const ActivityForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitData = data => console.log(data);

    const LabelName =({id,name}) => {
        return( <label htmlFor={id} className="form-label mb-3 fw-bold">{name}</label>)
    }

    return (
        <section id="p-addactivity" className="p-activity">

            <h2>Add your Activity</h2>
            <ActivityImage/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 py-3 pe-5">

                        {/* form section */}
                        <form onSubmit={handleSubmit(onSubmitData)}>
                            <div className="mb-4">
                                <LabelName id="form-activity"  name="Activity Name"/>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="form-activity" 
                                placeholder="Your Activity Name"
                                 required/>

                            </div>
                            <div className="mb-4">
                                <LabelName id="form-date" name="Date"/>
                                <input type="date" className="form-control" id="form-date" required/>
                            </div>
                            <div className="mb-4">
                                <LabelName id="activity-type" name="Activity Type"/>
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
                                    <LabelName id="form-duration" name="Activity Duration"/>
                                    <input type="number" className="form-control" id="form-duration" placeholder="Hours" required/>
                                </div>
                                <div className="mt-5 mb-4">
                                    <LabelName id="form-desc" name="Describe this journal"/>
                                    <textarea maxLength={120}
                                    type="text" 
                                    className="form-control" 
                                    id="form-desc" 
                                    placeholder="Max 120 Characters"
                                    ></textarea>

                                </div>
                                <div className="add-activity-btn">
                                    <button type="submit" className="btn btn-dark fw-bold py-2 border" >ADD ACTIVITY</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img  className ="img-form img-fluid d-none d-md-block img-fluid" src="./image/icon-sport/running (1).png" width="520px"  alt="placeholder"/>
                        </div>
                        {/* end form section */}
                    </div>
                    
                </div>

        </section>
    );   
};


export default ActivityForm;