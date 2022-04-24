import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';


export default function ConfirmEdit(props) {


    const [open, setOpen] = React.useState(false);

    const [inputs, setInputs] = React.useState({
        ActivityName: props.properties.ActivityName,
        ActivityDate: props.properties.date,
        ActivityDuration: props.properties.duration,
        ActivityType: props.properties.type,
        ActivityDescription: props.properties.description,
    });

    const handleChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        setInputs((values) => {
            const name = event.target.name;
            const value = event.target.value;

            return ({ ...values, [name]: value })
        });



    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async () => {

        const activityId = props.properties.id;
        const uri = "/users/me/records/" + activityId;
        const params = {
            activityName: inputs.ActivityName,
            activityDate: inputs.ActivityDate,
            activityDuration: inputs.ActivityDuration,
            activityType: inputs.ActivityType,
            activityDescription: inputs.ActivityDescription,
        }
        console.log(params);

        const editItem = await props.properties.editItem(uri, params);
        setOpen(false)
    };



    return (
        <div>
            <button type="button" className="btn btn-info" onClick={handleClickOpen}>Edit</button>
            <Dialog
                open={open}
                onClose={handleClose}
                
            >
                <DialogTitle>Edit Record</DialogTitle>
                <DialogContent>

                    <DialogContentText>
                        To edit your record please enter section that you want to edit
                    </DialogContentText>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}

                    >
                        <FormControl>
                            <InputLabel>Activity Name</InputLabel>
                            <OutlinedInput label="Activity Name" name="ActivityName" value={inputs.ActivityName} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Activity Date</InputLabel>
                            <OutlinedInput label="Activity Date" name="ActivityDate" value={inputs.ActivityDate} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Activity Duration</InputLabel>
                            <OutlinedInput label="Activity Duration" name="ActivityDuration" value={inputs.ActivityDuration} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Activity Type</InputLabel>
                            <OutlinedInput label="Activity Type" name="ActivityType" value={inputs.ActivityType} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Activity Description</InputLabel>
                            <OutlinedInput label="Activity Description" name="ActivityDescription" value={inputs.ActivityDescription} onChange={handleChange} />
                        </FormControl>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
