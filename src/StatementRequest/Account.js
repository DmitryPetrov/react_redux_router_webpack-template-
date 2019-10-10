import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';

import store from './../store';
import { updateAccountData, removeAccount} from './actionCreatorList'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing(52),
  },
  emptyLine: {
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.light,
    width: theme.spacing(20),
    marginBottom: theme.spacing(1),
  },
}));

function Account(props) {
  const classes = useStyles();

  const textField = (text, handler) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handler}
                  />;

  return (
    <div className={classes.emptyLine}>
      <Box 
        border={1} 
        borderRadius={4}
        borderColor={grey[500]}
        className={classes.paper}
      >
        {textField("account", (event) => store.dispatch(updateAccountData({account: event.target.value}, props.index)))}
        {textField("bank BIC", (event) => store.dispatch(updateAccountData({bankBIC: event.target.value}, props.index)))}
        {textField("bank Name", (event) => store.dispatch(updateAccountData({bankName: event.target.value}, props.index)))}
        <Button 
          variant="outlined" 
          className={classes.button} 
          onClick={() => store.dispatch(removeAccount(props.index))}
        >
          Remove
        </Button>
      </Box>
    </div>
  )
}

export default Account;
