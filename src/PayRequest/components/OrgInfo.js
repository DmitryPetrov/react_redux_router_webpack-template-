import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import { updateData } from './../actionCreatorList';
import store from './../../store';
import { STYLE } from './../style';
import { ORG_ID, ORG_NAME } from './../initialState';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function OrgInfo(props) {
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
        {field("orgId", ORG_ID, event => store.dispatch(updateData({orgId: event.target.value})))}
        {field("orgName", ORG_NAME, event => store.dispatch(updateData({orgName: event.target.value})))}
      </div>
    </Paper>
  )
}

export default OrgInfo;
