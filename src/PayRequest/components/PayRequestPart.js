import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import store from './../../store';
import DateWithTimezoneInput from './../../components/DateWithTimezoneInput';
import { updatePayRequestPartData, removePayRequestPart} from './../actionCreatorList'
import { STYLE } from './../style';
import { ORDER_DATE, ORDER_NUMBER, STR_NUM } from './../initialState';
import { PART_PAYMENT_SUM, PAYMENT_BALANCE } from './../initialState';

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
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  spacingBottom: {
    marginBottom: theme.spacing(2),
  }
}));

function PayRequestPart(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  const field = (lable, defaultValue, type, handle) => 
    <TextField
      label={lable}
      className={style.textField}
      margin="dense"
      variant="outlined"
      onChange={handle}
      defaultValue={defaultValue}
      type={type}
    />

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell, style.spacingBottom)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        <DateWithTimezoneInput
          label={"orderDate"}
          handle={date => store.dispatch(updatePayRequestPartData({orderDate: date}, props.index))}
          date={ORDER_DATE}
        />
        {field("orderNumber", ORDER_NUMBER, "string", event => store.dispatch(updatePayRequestPartData({orderNumber: event.target.value}, props.index)))}
        {field("partPaymentSum", PART_PAYMENT_SUM, "number", event => store.dispatch(updatePayRequestPartData({partPaymentSum: event.target.value}, props.index)))}
        {field("paymentBalance", PAYMENT_BALANCE, "number", event => store.dispatch(updatePayRequestPartData({paymentBalance: event.target.value}, props.index)))}
        {field("strNum", STR_NUM, "number", event => store.dispatch(updatePayRequestPartData({strNum: event.target.value}, props.index)))}
        <Button 
          variant="outlined" 
          className={style.button} 
          onClick={() => store.dispatch(removePayRequestPart(props.index))}
        >
          Remove
        </Button>
      </div>
    </Paper>
  )
}

export default PayRequestPart;
