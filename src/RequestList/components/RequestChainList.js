import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import grey from '@material-ui/core/colors/grey';

import { requestListRequest } from './../actionCreatorList';
import StatmentRequestChain from './StatmentRequestChain';
import PayRequestChain from './PayRequestChain';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  expansionPanel: {
    marginTop: theme.spacing(3),
    backgroundColor: grey[300],
  },
  textField: {
    width: theme.spacing(50),
  },
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  },
  refreshButton: {
    marginTop: theme.spacing(3),
    width:  theme.spacing(18),
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function RequestChainList(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  let chainList = [];
  if (props.requestList.isSuccessed === true) {
    chainList = props.requestList.response.requestChainList;
    for (let i = 0; i < chainList.length; i++) {
      chainList[i].status = props.requestList.response.status;
      chainList[i].message = props.requestList.response.message;
      chainList[i].soapMessageList = props.requestList.response.soapMessageList;
    }
  }


  if (props.nextStep.isSuccessed === true) {
    for (let i = 0; i < chainList.length; i++) {
      if (props.nextStep.response.requestChain.responseId === chainList[i].responseId) {
        chainList[i] = props.nextStep.response.requestChain;
        chainList[i].status = props.nextStep.response.status;
        chainList[i].message = props.nextStep.response.message;
        chainList[i].soapMessageList = props.nextStep.response.soapMessageList;
      }
    }
  }

  return(
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Request chain list
        </Typography>
        <Button
          variant="outlined"
          onClick={props.fetchData}
          className={classes.refreshButton}
        >
          Refresh
        </Button>
      </Container>
      {chainList.map((item, index) => (
        <ExpansionPanel className={classes.expansionPanel} defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Request chain id: {item.responseId}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {getRequestChain(item, index)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}

function getRequestChain(item, index) {
  if (item.type === "STATEMENT_REQUEST_CHAIN") {
    return <StatmentRequestChain item={item} index={index} key={index}/>
  }
  if (item.type === "PAY_REQUEST_CHAIN") {
    return <PayRequestChain item={item} index={index} key={index}/>
  }
  return null; 
}

function mapStateToProps(store) { 
  return {
    requestList: store.requestList,
    nextStep: store.nextStep,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(requestListRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestChainList);

