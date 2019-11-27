import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import { nextStepRequest } from './actionCreatorList';
import Error from './Error';
import IncomingForm from './IncomingForm';
import StatmentRequest from './StatmentRequest';
import GetRequestStatus from './GetRequestStatus';
import Incoming from './Incoming';
import StatementDocument from './StatementDocument';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  expansionPanel: {
    marginTop: theme.spacing(3),
    backgroundColor: grey[200],
  },
  textField: {
    width: theme.spacing(50),
  },
  button: {

  },
  heading: {
    width: theme.spacing(50),
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//const START = 0;
//const FINNISH = 5;
const STATEMENT_REQUEST = 1;
const STATEMENT_REQUEST_STATUS = 2;
const INCOMING = 3;
const STATEMENT_DOCUMENT = 4;

function RequestChain(props) {
  const classes = useStyles();
  
  const [renderIncomingFormFlag, setRenderIncomingForm] = React.useState(false);

  const nextStepHandle = event => {
    if (props.item.phaseNum === STATEMENT_REQUEST) {
      setRenderIncomingForm(false);
      props.fetchData(props.item.responseId);
    }
    if (props.item.phaseNum === STATEMENT_REQUEST_STATUS) {
      setRenderIncomingForm(true);
    }
    if (props.item.phaseNum === INCOMING) {
      setRenderIncomingForm(false);
      props.fetchData(props.item.responseId);
    }
    if (props.item.phaseNum === STATEMENT_DOCUMENT) {
      //запросить документ отдельно
    }
  }
  return (
    <div className="RequestChain">
      <Grid container 
        spacing={3} 
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={4}>
          <Typography className={classes.heading}>Phase: {props.item.phase}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            size="small"
            onClick={nextStepHandle}
          >
            Next step
          </Button>
        </Grid>
      </Grid>    
      {renderIfNotNull(StatmentRequest, props.item.statementRequest)}
      {renderIfNotNull(GetRequestStatus, props.item.getRequestStatus)}
      {renderIfNotNull(Incoming, props.item.incoming)}
      {renderIfNotNull(StatementDocument, props.item.statementDocument)}
      {renderIncomingForm(props.item.incoming, renderIncomingFormFlag, props.item.responseId)}
      {renderError(props.item.status, props.item.soapMessageList, props.item.message)}
    </div>
    )
}

function renderIncomingForm(incomingResponse, renderIncomingFormFlag, responseId) {
  if ((incomingResponse === null) && (renderIncomingFormFlag === true)) {
      return <IncomingForm responseId={responseId}/>;
  }
  return null;
}

function renderIfNotNull(Component, props) {
  if (props !== null) {
    return <Component request={props} />;
  }
  return null;
}

function renderError(status, xmlList, message) {
  if (status === 'ERROR') {
      return <Error xmlList={xmlList} message={message}/>;
  }
  return null;
}

function mapStateToProps(store) { 
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(nextStepRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestChain);

