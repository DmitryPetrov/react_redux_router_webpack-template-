import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { VAT_CALCULATION_RULE, VAT_RATE, VAT_SUM } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function VatInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  const field = (text, value, type, handle) => <TextField
                    label={text}
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
        {field("vatCalculationRule", VAT_CALCULATION_RULE, "string", event => store.dispatch(updateData({vatCalculationRule: event.target.value})))}
        {field("vatRate", VAT_RATE, "number", event => store.dispatch(updateData({vatRate: event.target.value})))}
        {field("vatSum", VAT_SUM, "number", event => store.dispatch(updateData({vatSum: event.target.value})))}
      </div>
    </Paper>
  )
}

export default VatInfo;
