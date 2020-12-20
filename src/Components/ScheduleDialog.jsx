import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function ScheduleDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Schedule Repair
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Schedule Repair</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="name"
            label="Customer Name"
            fullWidth
          />
          <TextField
            variant='outlined'
            margin="dense"
            id="bicycleType"
            label="Bicycle Type"
            fullWidth
          />
          <TextField
            variant='outlined'
            margin="dense"
            id="datetime"
            label="Date/Time"
            type="datetime-local"
            InputLabelProps={{shrink: true, required: true}}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ScheduleDialog;