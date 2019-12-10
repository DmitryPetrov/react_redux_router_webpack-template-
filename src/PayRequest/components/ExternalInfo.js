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

const EXTERNAL_ID = "1";
const EXTERNAL_UPG_ID = "1";

function ExternalInfo(props) {
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
        {field("externalId", EXTERNAL_ID, event => store.dispatch(updateData({externalId: event.target.value})))}
        {field("externalUPGId", EXTERNAL_UPG_ID, event => store.dispatch(updateData({externalUPGId: event.target.value})))}
      </div>
    </Paper>
  )
}

export default ExternalInfo;
