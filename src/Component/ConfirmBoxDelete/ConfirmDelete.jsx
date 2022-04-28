import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDelete(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleDelete = async (event) => {
        
  //     const activityId = event.target.id;
  //     const uri = "/users/me/records/" + activityId 
  //     const removeItem = await props.removeItem(uri);
    
  // }
  
  const handleDelete = async () => {
    const activityId = props.properties.id;
    const uri = "/users/me/records/" + activityId 
    await props.properties.removeItem(uri);
    setOpen(false);
  
  }
  

  return (
    <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Button variant='contained' color='error' startIcon={<DeleteIcon/>} onClick={handleClickOpen}>Delete</Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure to delete record?"}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
