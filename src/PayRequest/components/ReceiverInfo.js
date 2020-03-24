import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function ReceiverInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  const RECEIVER_NAME = props.defaultValue.org.orgName;
  const RECEIVER_ACCOUNT = props.defaultValue.acc.account;
  const RECEIVER_INN = props.defaultValue.org.orgInn;
  const RECEIVER_BANK_NAME = props.defaultValue.acc.bankName;
  const RECEIVER_BANK_BIC = props.defaultValue.acc.bankBic;
  const RECEIVER_BANK_CORR_ACCOUNT = props.defaultValue.acc.bankCorrAccount;

  const field = (text, value, handle) => <TextField
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
        {field("receiverName", RECEIVER_NAME, event => store.dispatch(updateData({receiverName: event.target.value})))}
        {field("receiverAccount", RECEIVER_ACCOUNT, event => store.dispatch(updateData({receiverAccount: event.target.value})))}
        {field("receiverInn", RECEIVER_INN, event => store.dispatch(updateData({receiverInn: event.target.value})))}
        {field("receiverBankName", RECEIVER_BANK_NAME, event => store.dispatch(updateData({receiverBankName: event.target.value})))}
        {field("receiverBankBic", RECEIVER_BANK_BIC, event => store.dispatch(updateData({receiverBankBic: event.target.value})))}
        {field("receiverBankCorrAccount", RECEIVER_BANK_CORR_ACCOUNT, event => store.dispatch(updateData({receiverBankCorrAccount: event.target.value})))}
      </div>
    </Paper>
  )
}

export default ReceiverInfo;
