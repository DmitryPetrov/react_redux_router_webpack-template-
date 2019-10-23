import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';

import { withExpandButton } from './withExpandButton';
import { REQUEST_STYLE } from './style';

function StatmentRequest(props) {
  const classes = REQUEST_STYLE();

  let content;
  if (props.json === true) {
    content = <pre>{JSON.stringify(props.request, undefined, 2)}</pre>;
  } else {
    content = <div className={classes.content}>
          <Typography className={classes.line}>Request id: {props.request.requestId}</Typography>
          <Typography className={classes.line}>Response id: {props.request.responseId}</Typography>
          <Typography className={classes.line}>Org name: {props.request.orgName}</Typography>
          <Typography className={classes.line}>From date: {props.request.fromDate}</Typography>
          <Typography className={classes.line}>To date: {props.request.toDate}</Typography>
          {props.request.accounts.map((item, index) => (
            <Typography className={classes.line} key={index}>Bank name {index + 1}: {item.bankName}</Typography>
          ))}
        </div>
  }

  return (
    <ExpansionPanel className={classes.expansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Request name: {props.request.requestName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <Button
            size="small"
            variant="outlined" 
            onClick={props.buttonHandler}
          >
            {props.buttonName}
          </Button>
          {content}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    )
}

export default withExpandButton(StatmentRequest);

