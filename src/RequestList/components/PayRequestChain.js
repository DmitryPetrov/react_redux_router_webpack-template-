import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import { getRequestStatusRequest } from './../actionCreatorList';
import Error from './Error';
import IncomingForm from './IncomingForm';
import PayRequest from './PayRequest';
import GetRequestStatus from './GetRequestStatus';
import Incoming from './Incoming';
import Document from './Document';

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
const START_PHASE = 0; //нет успешно отправленных запросов
const PAY_REQUEST_PHASE = 1; //успешно отправленный запрос PayRequest, получен payRequestResponseId
const GET_REQUEST_STATUS_1_PHASE = 2; //успешно отправленный запрос GetRequestStatus, получен положительный ответ 'DELIVERED'
const INCOMING_PHASE = 3; //успешно отправленный запрос Incoming, получен payRequestResponseId
const GET_REQUEST_STATUS_2_PHASE = 4; //успешно отправленный запрос GetRequestStatus, получен запрашиваемый документ
const DOCUMENT_PHASE = 5; //цепочка запросов отработала;

function PayRequestChain(props) {
  const classes = useStyles();
  
  const [renderIncomingFormFlag, setRenderIncomingForm] = React.useState(false);

  const getRequestStatusHandle = event => {
    if (props.item.phaseNum === PAY_REQUEST_PHASE) {
      setRenderIncomingForm(false);
      props.fetchData(props.item.responseId);
    }
    if (props.item.phaseNum === GET_REQUEST_STATUS_1_PHASE) {
      setRenderIncomingForm(true);
    }
    if (props.item.phaseNum === INCOMING_PHASE) {
      setRenderIncomingForm(false);
      props.fetchData(props.item.responseId);
    }
    if (props.item.phaseNum === GET_REQUEST_STATUS_2_PHASE) {
      //запросить документ отдельно
    }
  }
  return (
    <div className="PayRequestChain">
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
            onClick={getRequestStatusHandle}
          >
            Next step
          </Button>
        </Grid>
      </Grid>    
      {renderIfNotNull(PayRequest, props.item.payRequest)}
      {renderIfNotNull(GetRequestStatus, props.item.getRequestStatus1)}
      {renderIfNotNull(Incoming, props.item.incoming)}
      {renderIfNotNull(Document, props.item.getRequestStatus2)}
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
    fetchData: (action) => dispatch(getRequestStatusRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRequestChain);

