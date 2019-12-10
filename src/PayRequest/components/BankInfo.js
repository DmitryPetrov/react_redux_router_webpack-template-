import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import DateWithTimezoneInput from './../../components/DateWithTimezoneInput';
import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { BANK_MESSAGE, BANK_ACCEPT_DATE, BANK_MESSAGE_AUTHOR } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function BankInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  const field = (text, value, handle) => 
    <TextField
      label={text}
      className={style.textField}
      margin="dense"
      variant="outlined"
      onChange={handle}
      defaultValue={value}
    />;

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        <DateWithTimezoneInput 
          label="bankAcceptDate"
          handle={data => store.dispatch(updateData({bankAcceptDate: data}))}
          date={BANK_ACCEPT_DATE}
        />
        {field("bankMessage", BANK_MESSAGE, event => store.dispatch(updateData({bankMessage: event.target.value})))}
        {field("bankMessageAuthor", BANK_MESSAGE_AUTHOR, event => store.dispatch(updateData({bankMessageAuthor: event.target.value})))}
      </div>
    </Paper>
  )
}

export default BankInfo;
