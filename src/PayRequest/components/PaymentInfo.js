import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { PAYMENT_CONDITION, PAYMENT_CONDITION_CODE, PAYMENT_KIND } from './../initialState';
import { PAYMENT_KIND_CODE, PAYMENT_PRIORITY, PAYMENT_PURPOSE } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function PaymentInfo(props) {
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
        {field("paymentKind", PAYMENT_KIND, event => store.dispatch(updateData({paymentKind: event.target.value})))}
        {field("paymentKindCode", PAYMENT_KIND_CODE, event => store.dispatch(updateData({paymentKindCode: event.target.value})))}
        {field("paymentCondition", PAYMENT_CONDITION, event => store.dispatch(updateData({paymentCondition: event.target.value})))}
        {field("paymentConditionCode", PAYMENT_CONDITION_CODE, event => store.dispatch(updateData({paymentConditionCode: event.target.value})))}
        {field("paymentPriority", PAYMENT_PRIORITY, event => store.dispatch(updateData({paymentPriority: event.target.value})))}
        {field("paymentPurpose", PAYMENT_PURPOSE, event => store.dispatch(updateData({paymentPurpose: event.target.value})))}
      </div>
    </Paper>
  )
}

export default PaymentInfo;
