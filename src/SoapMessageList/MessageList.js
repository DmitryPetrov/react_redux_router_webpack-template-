import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import { formatXml } from './../functions/formatXml';
import { soapMessagesRequest, lastRequestSoapMessagesRequest, deleteSoapMessagesRequest } from './actionCreatorList';
import { GLOBAL_STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  removeButton: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.light,
  },
  content: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  xml: {
    backgroundColor: grey[200],
    padding: theme.spacing(2),
  },
}));

function MessageList(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  let content = null;
  if (props.request.isSuccessed === true) {
    content = props.request.response.soapMessageList.map((item, index) => (
          <Paper 
            component="pre"
            overflow="auto"
            className={classes.xml}
          >
            <Box component="pre" overflow="auto">
              <pre key={index}>{formatXml(item)}</pre>
            </Box>
          </Paper>
        ));
  }

  return (
    <div className={globalStyle.paper}>
      <Container component="main" className={classes.paper}>
        <Typography component="h1" variant="h5">
          SOAP messages
        </Typography>
        <div>
          <Button
            variant="outlined" 
            onClick={event => props.fetchSoapMessages()}
            className={classes.button}
          >
            Get all message list
          </Button>
          <Button
            variant="outlined" 
            onClick={event => props.fetchLastRequestSoapMessages()}
            className={classes.button}
          >
            Get last request message list
          </Button>
          <Button
            variant="outlined" 
            onClick={event => props.deleteSoapMessages()}
            className={classes.removeButton}
          >
            Remove all
          </Button>
        </div>
      </Container>
      <Container component="main" className={classes.content}>
        {content}
      </Container>
    </div>
  );
}

function mapStateToProps(store) {
  return {
    request: store.soapMessageList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSoapMessages: (action) => dispatch(soapMessagesRequest(action)),
    fetchLastRequestSoapMessages: (action) => dispatch(lastRequestSoapMessagesRequest(action)),
    deleteSoapMessages: (action) => dispatch(deleteSoapMessagesRequest(action)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
