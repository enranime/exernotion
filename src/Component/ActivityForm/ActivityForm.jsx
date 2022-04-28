import React from "react";
import { Controller, useForm } from "react-hook-form";
import ImageGallery from "../../assets/images/imageIndex";
import { joiResolver } from '@hookform/resolvers/joi';
import ActivitySchema from "./data/ActivitySchema";
import './ActivityForm.css'
import ActivityImage from "../ActivityImage/ActivityImage";
import Select from 'react-select'
import chroma from 'chroma-js';
import { Fade } from "react-awesome-reveal";
import { format } from "date-fns";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';


const axios = require('axios').default;

const Input = styled('input')({
    display: 'none',
  });

const PhotoCameraL = styled(PhotoCamera)`

    :hover{
        color:black;
    }
    width:5rem;
    height:5rem;

`;

const run = async (data) => {
    const client = axios.create({
        baseURL: 'https://exornation-backend.vercel.app/',
    });

    // const res = await client.get('/users/me/records');

    // console.log(res.status);
    // console.log(res.statusText);
    // console.log(res.data);

    // const postData = await client.post('/users/me/records',data);
    // const d2 = new Date(data.activityDate).toDateString;

    

    const d1 = format(data.activityDate, "MMMM do, yyyy")
    console.log(d1);

    const sendData = {
        activityName: data.activityName,
        activityDate: d1,
        activityDuration: data.activityDuration,
        activityType: data.activityType.label,
        activityDescription: data.activityDescription,
    }

    console.log(sendData);
    // console.log(`Post response status ${postData.status}`)


    const postResponse = await client.post('/users/me/records', sendData);
    if (postResponse.status === 201) {
        alert("Record submit successful!")
    } else {
        alert(`error code ${postResponse.statusText}`)
    }
    // console.log(`Post response status ${postResponse.status}`);
    // console.log(postResponse.data);

    // // GET /users/me/records?activityName=Walking

    // const getRes = await client.get('/users/me/records', { params: { activityName: 'Walking' } });

    // console.log(getRes.status);
};


const loadFile = (e) => {
    let image = document.getElementById('profile-image');
    console.log(e.target.files);
    image.src = URL.createObjectURL(e.target.files[0]);
}

const removeImage = (e) => {
    let image = document.getElementById('profile-image');
    image.src = "";
}

const onSubmitData = (run);

const ActivityForm = () => {



    // selected option
    const options = [
        { value: 'running', label: 'Running' },
        { value: 'swimming', label: 'Swimming' },
        { value: 'basketball', label: 'Basketball' },
        { value: 'biking', label: 'Biking' },
        { value: 'weight_training', label: 'Weight training' },
        { value: 'pingpong', label: 'Ping Pong' },
        { value: 'boxing', label: 'Boxing' },
        { value: 'tennis', label: 'Tennis' },
        { value: 'yoga', label: 'Yoga' },
        { value: 'soccer', label: 'Soccer' },
        { value: 'golf', label: 'Golf' },
        { value: 'other', label: 'Other' }
    ]

    // select style

    const colorSelectForm = '#06c258';

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(colorSelectForm);
            return {
                ...styles,
                backgroundColor: isDisabled ? undefined : isSelected ? colorSelectForm : isFocused ? color.alpha(0.1).css() : undefined,
                color: isDisabled ? '#ccc' : isSelected ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black' : 'black',
            };
        },
    };

    // react hook form

    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm({ mode: 'onChange', resolver: joiResolver(ActivitySchema) });
    const onError = (errors, e) => console.log({ errors }, e);

    // Label component 
    const LabelName = ({ name }) => {
        return (<label className="form-label mb-3 fw-bold">{name}</label>)
    }

    // set image to selected
    const handleClickImage = (event) => {
        const value = event.target.getAttribute('fvalue');
        const name = event.target.getAttribute('fname');
        console.log(value);
        console.log(name);
        setValue("activityType", { label: name, value: value });
    }

    return (
        <>
            <h2 className="mt-3">Add your Activity</h2>
            <ActivityImage onClick={handleClickImage} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 py-3 pe-5">
                        {/* form section */}
                        <form onSubmit={handleSubmit(onSubmitData, onError)}>

                            <LabelName id="form-activity" name="Activity Name" />
                            <input {...register("activityName")} className="form-control form-custom" placeholder="Your Activity Name" />
                            <Fade bottom collapse>
                                {errors?.activityName?.message && <p>{errors?.activityName?.message}</p>}
                            </Fade>

                            <LabelName name="Date" />
                            <input {...register("activityDate")} type="date" className="form-control form-custom" required />

                            <LabelName name="Activity Type" />
                            <Controller
                                name="activityType"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field}
                                        options={options}
                                        placeholder={"Select Activity Type"}
                                        styles={colourStyles}
                                        className="form-custom"
                                    />
                                )}
                            />

                            <LabelName name="Activity Duration" />
                            <input {...register("activityDuration")} className="form-control form-custom" placeholder="Hours" required />
                            <Fade>{errors?.activityDuration?.message && <p>{errors?.activityDuration?.message}</p>}</Fade>

                            <LabelName name="Describe this journal" />
                            <textarea {...register("activityDescription")}
                                className="form-control form-custom"
                                placeholder="Max 120 Characters"
                            />
                            <Fade>{errors?.activityDescription?.message && <p>{errors?.activityDescription?.message}</p>}</Fade>

                            <div className="add-activity-btn">
                                <button type="submit" className="btn btn-dark fw-bold py-2 border">ADD ACTIVITY</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center" >

                        {/* <img className="img-form img-fluid d-none d-md-block img-fluid" src={ImageGallery.running} width="520px" alt="placeholder" /> */}

                        <Box sx={{width:520,height:520}} className="img-form img-fluid d-none d-md-block img-fluid" alt="placeholder" >
                        <Button sx={{width:20,position:"absolute",right:30}} variant="contained" color="error" onClick={removeImage}>x</Button>
                        <label htmlFor="icon-button-file"  className="center" >
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={loadFile}/>
                            <IconButton aria-label="upload picture" component="span">
                                <PhotoCameraL id="photo-icon"/>
                            </IconButton>
                        </label>
                        <img id="profile-image"/>
                        </Box>
                        

                    </div>
                </div>
            </div>
        </>
    )
}




export default ActivityForm;
