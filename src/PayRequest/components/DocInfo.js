import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import DateWithTimezoneInput from './../../components/DateWithTimezoneInput';
import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { DOC_DATE, DOC_DISPATCH_DATE } from './../initialState';
import { DOC_ID, DOC_NUMBER, DOCUMENT_SUM } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function DocInfo(props) {
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
        <DateWithTimezoneInput 
          label={"docDate"}
          handle={data => store.dispatch(updateData({docDate: data}))}
          date={DOC_DATE}
        />
        <DateWithTimezoneInput
          label={"docDispatchDate"}
          handle={data => store.dispatch(updateData({docDispatchDate: data}))}
          date={DOC_DISPATCH_DATE}
        />
        {field("docId", DOC_ID, "string", event => store.dispatch(updateData({docId: event.target.value})))}
        {field("docNumber", DOC_NUMBER, "string", event => store.dispatch(updateData({docNumber: event.target.value})))}
        {field("documentSum", DOCUMENT_SUM, "number", event => store.dispatch(updateData({documentSum: event.target.value})))}
      </div>
    </Paper>
  )
}

export default DocInfo;
