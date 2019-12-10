import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { PAYER_ACCOUNT, PAYER_BANK_BIC, PAYER_BANK_CORR_ACCOUNT } from './../initialState';
import { PAYER_BANK_NAME, PAYER_ID, PAYER_INN, PAYER_NAME } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function PayerInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

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
        {field("payerName", PAYER_NAME, event => store.dispatch(updateData({payerName: event.target.value})))}
        {field("payerAccount", PAYER_ACCOUNT, event => store.dispatch(updateData({payerAccount: event.target.value})))}
        {field("payerInn", PAYER_INN, event => store.dispatch(updateData({payerInn: event.target.value})))}
        {field("payerId", PAYER_ID, event => store.dispatch(updateData({payerId: event.target.value})))}
        {field("payerBankName", PAYER_BANK_NAME, event => store.dispatch(updateData({payerBankName: event.target.value})))}
        {field("payerBankBic", PAYER_BANK_BIC, event => store.dispatch(updateData({payerBankBic: event.target.value})))}
        {field("payerBankCorrAccount", PAYER_BANK_CORR_ACCOUNT, event => store.dispatch(updateData({payerBankCorrAccount: event.target.value})))}
      </div>
    </Paper>
  )
}

export default PayerInfo;
