import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SoapMessageList from './SoapMessageList'
import ObjectFromServer from './ObjectFromServer'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    marginTop: theme.spacing(2),
  },
  typography_error: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.dark,
  }
}));

function MessageFromServer(props) {
  const classes = useStyles();

  if (props.request.isFail === true) {
    return (
      <div className={classes.paper}>
        <h2>Request status: {props.request.message}</h2>
      </div>
      );
  }

  if (props.request.isLoading === true) {
    return (
      <div className={classes.paper}>
        <h2>Request status: {props.request.message}</h2>
      </div>
      );
  }

  if (props.request.isSuccessed === true) {
    return (
      <div className={classes.paper}>
        <h2>Request status: {props.request.message}</h2>
        <h2>Server response status: {props.request.response.status}</h2>
        <h2>Message from server: {props.request.response.message}</h2>
        <SoapMessageList list={props.request.response.soapMessageList}/>
        <ObjectFromServer object={props.request.response.requestChain}/>
      </div>
      );
  }

  return <div></div>;
}

export default MessageFromServer;