import React,{useState} from "react";
import { useForm } from "react-hook-form";
import ImageGallery from "../../assets/images/imageIndex";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import './ActivityForm.css'
import ActivityImage from "../ActivityImage/ActivityImage";
import Select from 'react-select'
import chroma from 'chroma-js';





const ActivityForm = () => {
    
    // submit data
    const onSubmitData = (data) => alert(JSON.stringify(data));

    // schema
    const ActivitySchema = Joi.object({
        activityName: Joi.string().max(10).min(3).required(),
        description: Joi.string().required(),
        activityDate: Joi.date().required(),
       
    });
    

    // selected intial state
    const [selectedOption, setSelectedOption] = useState("Choose Activity");
    const handleTypeSelect = (e) => {setSelectedOption(e.value)};

    // selected option
    const options = [
        { value:'running' , label:'Running', color: '#06c258'},
        { value:'swimming' , label:'Swimming', color: '#06c258'},
        { value:'basketball' , label:'Basketball', color: '#06c258'},
        { value:'biking' , label:'Biking', color: '#06c258'},
        { value:'weight_training' , label:'Weight training', color: '#06c258'},
        { value:'pingpong' , label:'Ping Pong', color: '#06c258'},
        { value:'boxing' , label:'Boxing', color: '#06c258'},
        { value:'tennis' , label:'Tennis', color: '#06c258'},
        { value:'yoga' , label:'Yoga', color: '#06c258'},
        { value:'soccer' , label:'Soccer', color: '#06c258'},
        { value:'golf' , label:'Golf', color: '#06c258'},
        { value:'other' , label:'Other', color: '#06c258'}
    ]
    // select style

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = chroma(data.color);
          return {
            ...styles,
            backgroundColor: isDisabled? undefined: isSelected? data.color: isFocused? color.alpha(0.1).css(): undefined,
            color: isDisabled? '#ccc': isSelected? chroma.contrast(color, 'white') > 2? 'white': 'black': data.color,
          };
        },
    };

    // react hook form

     const { register, handleSubmit,formState: { errors } } = useForm( {mode:'onChange',resolver: joiResolver(ActivitySchema)});


    // Label component 
    const LabelName =({name}) => {
        return( <label className="form-label mb-3 fw-bold">{name}</label>)
    }
    // Input component

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
                                <input {...register("activityName")} className="form-control" placeholder="Your Activity Name" />
                                {errors?.activityName?.message && <p>{errors?.activityName?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <LabelName name="Date"/>
                                <input {...register("activityDate")} type="date" className="form-control" required/>
                            </div>
                            <div className="mb-4">
                                <LabelName name="Activity Type"/>
                                <Select 
                                onChange={handleTypeSelect}
                                value={options.filter(function(option) {
                                    return option.value === selectedOption;
                                  })}
                                options={options} 
                                required 
                                styles={colourStyles}/>

                             
                                </div>
                                <div className="mb-4">
                                    <LabelName id="form-duration" name="Activity Duration"/>
                                    <input type="number" className="form-control" id="form-duration" placeholder="Hours" required/>
                                </div>
                                <div className="mt-5 mb-4">
                                    <LabelName id="form-desc" name="Describe this journal"/>
                                    <textarea {...register("description")}
                                    maxLength={120}
                                    type="text" 
                                    className="form-control" 
                                    id="form-desc" 
                                    placeholder="Max 120 Characters"
                                    />
                                    {errors?.description?.message && <p>{errors?.description?.message}</p>}

                                </div>
                                <div className="add-activity-btn">
                                    <button type="submit" className="btn btn-dark fw-bold py-2 border" >ADD ACTIVITY</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img  className ="img-form img-fluid d-none d-md-block img-fluid" src={ImageGallery.running} width="520px"  alt="placeholder"/>
                        </div>
                        {/* end form section */}
                    </div>
                    
                </div>

        </section>
    );   

  
};




 export default ActivityForm;
