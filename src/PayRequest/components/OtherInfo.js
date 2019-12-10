import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';

import DateWithTimezoneInput from './../../components/DateWithTimezoneInput';
import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { LAST_MODIFY_DATE, QUEUE_DATE, RECIEVE_D_PAYER_BANK } from './../initialState';
import { TEMPLATE, MESSAGE_ONLY_FOR_BANK, NEW_STATE } from './../initialState';
import { RESERV_23, UIP, ACCEPT_TERM, ACCOUNT_ID } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));
      
function OtherInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  const date = (lable, value, handle) => 
    <DateWithTimezoneInput
      label={lable}
      handle={handle}
      date={value}
    />

  const field = (lable, value, type, handle) => 
    <TextField
      label={lable}
      className={style.textField}
      margin="dense"
      variant="outlined"
      onChange={handle}
      defaultValue={value}
      type={type}
    />;

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        {date("lastModifyDate", LAST_MODIFY_DATE, data => store.dispatch(updateData({lastModifyDate: data})))}
        {date("queueDate", QUEUE_DATE, data => store.dispatch(updateData({queueDate: data})))}
        {date("recieveDPayerBank", RECIEVE_D_PAYER_BANK, data => store.dispatch(updateData({recieveDPayerBank: data})))}
        {field("messageOnlyForBank", MESSAGE_ONLY_FOR_BANK, "string", event => store.dispatch(updateData({messageOnlyForBank: event.target.value})))}
        {field("newState", NEW_STATE, "string", event => store.dispatch(updateData({newState: event.target.value})))}
        {field("reserv23", RESERV_23, "string", event => store.dispatch(updateData({reserv23: event.target.value})))}
        {field("uip", UIP, "string", event => store.dispatch(updateData({uip: event.target.value})))}
        {field("acceptTerm", ACCEPT_TERM, "number", event => store.dispatch(updateData({acceptTerm: event.target.value})))}
        {field("accountId", ACCOUNT_ID, "string", event => store.dispatch(updateData({accountId: event.target.value})))}
        <FormControlLabel
          control={<Checkbox defaultValue={TEMPLATE} onChange={event => store.dispatch(updateData({template: event.target.value}))} />}
          label="template"
        />
      </div>
    </Paper>
  )
}

export default OtherInfo;
