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
  
  const ORG_ID = props.defaultValue.org.orgId;
  const ORG_NAME = props.defaultValue.org.orgName;
  const ACCOUNT_ID = props.defaultValue.acc.accountId;

  return (
    <Paper component="div" className={clsx(globalStyle.backgroundLight, globalStyle.gridCell)}>
      <div className={clsx(globalStyle.gridCellContent, style.spacing)}>
        {field("orgId", ORG_ID, event => store.dispatch(updateData({orgId: event.target.value})))}
        {field("orgName", ORG_NAME, event => store.dispatch(updateData({orgName: event.target.value})))}
        {field("accountId", ACCOUNT_ID, "string", event => store.dispatch(updateData({accountId: event.target.value})))}
      </div>
    </Paper>
  )
}

export default OrgInfo;
