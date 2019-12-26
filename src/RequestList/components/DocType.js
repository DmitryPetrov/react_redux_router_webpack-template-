import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import store from './../../store';
import {setDocType, removeDocType} from './../actionCreatorList'

const useStyles = makeStyles(theme => ({
  textField: {
    width: theme.spacing(34),
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    minWidth: theme.spacing(15),
    height: theme.spacing(5),
  }
}));

function DocType(props) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        label="Doc type:"
        className={classes.textField}
        margin="dense"
        variant="outlined"
        onChange={(event) => store.dispatch(setDocType(event.target.value, props.index))}
      />
      <Button 
        variant="outlined" 
        onClick={(event) => store.dispatch(removeDocType(props.index))}
        className={classes.button}
      >
        Remove
      </Button>
    </div>
    )
}

export default DocType;
