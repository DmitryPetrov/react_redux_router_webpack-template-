import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { itemList } from './../../functions/itemList'
import { withExpandButton } from './withExpandButton';
import { REQUEST_STYLE } from './../style';

import StateResponse from './StateResponse'
import Statement from './Statement'

const BUTTON_NAME = 'Show response';

const useStyles = makeStyles(theme => ({
  width: {
    width: '100%',
  },
}));

function Document(props)  {
  const globalStyle = REQUEST_STYLE();
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const buttonHandle = event => {
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
    content = <Box component="pre" overflow="auto">
          <pre>{JSON.stringify(props.request, undefined, 2)}</pre>
        </Box>;
  } else {
    content = <div className={globalStyle.content}>
        {stateResponseData}
        {statementData}
      </div>
  }

  if (props.request.notProcessedYet === true) {
    content = <Typography className={globalStyle.heading}>State: NOT PROCESSED YET</Typography>
  }

  return (
    <ExpansionPanel className={globalStyle.expansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={globalStyle.heading}>Request name: {props.request.requestName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.width}>
          <Button 
            variant="outlined" 
            onClick={buttonHandle}
          >
            {BUTTON_NAME}
          </Button>
          <Button 
            variant="outlined" 
            onClick={props.buttonHandle}
          >
            {props.buttonName}
          </Button>
          {content}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withExpandButton(Document);

