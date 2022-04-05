import React,{useEffect, useRef, useState} from "react";
import { Controller, useController, useForm } from "react-hook-form";
import ImageGallery from "../../assets/images/imageIndex";
import { joiResolver } from '@hookform/resolvers/joi';
import ActivitySchema from "./data/ActivitySchema";
import './ActivityForm.css'
import ActivityImage from "../ActivityImage/ActivityImage";
import Select from 'react-select'
import chroma from 'chroma-js';




const ActivityForm = () => {
    
    // submit data
    const onSubmitData = (data) => alert(JSON.stringify(data));
    
    // selected option
    const options = [
        { value:'running' , label:'Running'},
        { value:'swimming' , label:'Swimming'},
        { value:'basketball' , label:'Basketball'},
        { value:'biking' , label:'Biking'},
        { value:'weight_training' , label:'Weight training'},
        { value:'pingpong' , label:'Ping Pong'},
        { value:'boxing' , label:'Boxing'},
        { value:'tennis' , label:'Tennis'},
        { value:'yoga' , label:'Yoga'},
        { value:'soccer' , label:'Soccer'},
        { value:'golf' , label:'Golf'},
        { value:'other' , label:'Other'}
      ]
      
    // select style
    
    const colorSelectForm = '#06c258';

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, {data, isDisabled, isFocused, isSelected }) => {
          const color = chroma(colorSelectForm);
          return {
            ...styles,
            backgroundColor: isDisabled? undefined: isSelected? colorSelectForm: isFocused? color.alpha(0.1).css(): undefined,
            color: isDisabled? '#ccc': isSelected? chroma.contrast(color, 'white') > 2? 'white': 'black': 'black',
          };
        },
    };

    // react hook form

     const { register, handleSubmit,formState: { errors }, control,setValue } = useForm( {mode:'onChange',resolver: joiResolver(ActivitySchema)});
    const onError = (errors, e) => console.log({errors}, e);

    // Label component 
    const LabelName =({name}) => {
        return( <label className="form-label mb-3 fw-bold">{name}</label>)
    }

    // set image to selected
    const handleClickImage = () => {
        setValue("activityType",{label:"Yoga", value:"yoga"});
    }

    

    return (
         <>
            <h2 className="mt-3">Add your Activity</h2>
            <ActivityImage onClick={handleClickImage}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 py-3 pe-5">
                        {/* form section */}
                        <form onSubmit={handleSubmit(onSubmitData,onError)}>
                                <LabelName id="form-activity"  name="Activity Name"/>
                                <input {...register("activityName")} className="form-control form-custom" placeholder="Your Activity Name" />
                                <LabelName name="Date"/>
                                <input {...register("activityDate")} type="date" className="form-control form-custom" required/>

                                <LabelName name="Activity Type"/>
                                <Controller
                                    name="activityType"
                                    control={control}
                                    defaultValue=""
                                    render={({field }) => (
                                        <Select {...field}
                                            options={options}
                                            placeholder={"Select Activity Type"}
                                            styles={colourStyles}
                                            className="form-custom"
                                        />
                                )}
                                />
                                    <LabelName name="Activity Duration"/>
                                    <input className="form-control form-custom" placeholder="Hours" required/>
                                    <LabelName name="Describe this journal"/>
                                    <textarea {...register("description")}
                                    maxLength={120}
                                    className="form-control form-custom" 
                                    placeholder="Max 120 Characters"
                                    />
                                    {errors?.description?.message && <p>{errors?.description?.message}</p>}
                                <div className="add-activity-btn">
                                    <button type="submit" className="btn btn-dark fw-bold py-2 border">ADD ACTIVITY</button>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img  className ="img-form img-fluid d-none d-md-block img-fluid" src={ImageGallery.running} width="520px"  alt="placeholder"/>
                        </div>
                    </div>
                </div>
        </>
    );   
                                    
 }




 export default ActivityForm;
