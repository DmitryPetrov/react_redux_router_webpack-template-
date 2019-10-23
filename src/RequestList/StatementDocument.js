import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';

import { itemList } from './../functions/itemList'
import { withExpandButton } from './withExpandButton';
import { REQUEST_STYLE } from './style';

import StateResponse from './StateResponse'
import Statement from './Statement'

const BUTTON_NAME = 'Show response';

function StatementDocument(props)  {
  const classes = REQUEST_STYLE();

  const [state, setState] = React.useState(false);

  const buttonHandler = event => {
    setState(!state);
  }

  let stateResponseData = null;
  let statementData = null;
  if (state) {
    stateResponseData = itemList(StateResponse, props.request.stateResponseList);
    statementData = itemList(Statement, props.request.statementList);
  }

  let content;
  if (props.json === true) {
    content = <pre>{JSON.stringify(props.request, undefined, 2)}</pre>;
  } else {
    content = <div className={classes.content}>
        {stateResponseData}
        {statementData}
      </div>
  }

  if (props.request.notProcessedYet === true) {
    content = <Typography className={classes.heading}>State: NOT PROCESSED YET</Typography>
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
            variant="outlined" 
            onClick={buttonHandler}
          >
            {BUTTON_NAME}
          </Button>
          <Button 
            variant="outlined" 
            onClick={props.buttonHandler}
          >
            {props.buttonName}
          </Button>
          {content}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withExpandButton(StatementDocument);

