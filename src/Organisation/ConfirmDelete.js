import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  style: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}));

function ConfirmDelete(props) {
  const classes = useStyles();

  const remove = () => {
    props.remove(props.index);
    props.close();
  }

  return (
    <Dialog open={props.open} onClose={props.close} maxWidth='xs' fullWidth>
      <DialogTitle className={classes.style}>Delete organisation?</DialogTitle>
      <DialogActions className={classes.style}>
        <Button onClick={() => remove()} color="secondary" size="large">Yes</Button>
        <Button onClick={() => props.close()} color="primary"  size="large">No</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDelete;

