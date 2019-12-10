import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import DateWithTimezoneInput from './../../components/DateWithTimezoneInput';
import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { OPERATION_DATE, OPERATION_TYPE } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function OperationInfo(props) {
  const style = useStyles();
  const globalStyle = STYLE();

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        <DateWithTimezoneInput 
          label="operationDate"
          handle={data => store.dispatch(updateData({operationDate: data}))}
          date={OPERATION_DATE}
        />
        <TextField
          label="operationType"
          className={style.textField}
          margin="dense"
          variant="outlined"
          onChange={event => store.dispatch(updateData({operationType: event.target.value}))}
          defaultValue={OPERATION_TYPE}
        />
      </div>
    </Paper>
  )
}

export default OperationInfo;
