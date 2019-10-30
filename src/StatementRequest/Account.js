import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';

import store from './../store';
import { updateAccountData, removeAccount} from './actionCreatorList'
import { ACCOUT_DATA } from './initialState';
import { gridCellStyle } from './style';

const ACCOUNT = ACCOUT_DATA.account;
const BANK_BIC = ACCOUT_DATA.bankBIC;
const BANK_NAME = ACCOUT_DATA.bankName;

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    color: theme.palette.secondary.light,
    width: "40%",
    marginBottom: theme.spacing(1),
  },
}));

function Account(props) {
  const classes = useStyles();
  const gridCell = gridCellStyle();

  const textField = (text, handler, value) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handler}
                    defaultValue={value}
                  />;

  return (
    <div className={gridCell.component}>
      <Box 
        border={1} 
        borderRadius={4}
        borderColor={grey[500]}
        className={gridCell.componentBorder}
      >
        <div className={gridCell.content}>
          {textField("account", (event) => store.dispatch(updateAccountData({account: event.target.value}, props.index)), ACCOUNT)}
          {textField("bank BIC", (event) => store.dispatch(updateAccountData({bankBIC: event.target.value}, props.index)), BANK_BIC)}
          {textField("bank Name", (event) => store.dispatch(updateAccountData({bankName: event.target.value}, props.index)), BANK_NAME)}
          <Button 
            variant="outlined" 
            className={classes.button} 
            onClick={() => store.dispatch(removeAccount(props.index))}
          >
            Remove
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Account;
