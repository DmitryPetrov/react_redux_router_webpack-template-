import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { withExpandButton } from './withExpandButton';
import { REQUEST_STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  width: {
    width: '100%',
  },
}));

function Operation(props)  {
  const globalStyle = REQUEST_STYLE();
  const classes = useStyles();

  let content;
  if (props.json === true) {
    content = <Box component="pre" overflow="auto">
          <pre>{JSON.stringify(props.item, undefined, 2)}</pre>
        </Box>;
  } else {
    content = <div className={globalStyle.content}>
          <Typography className={globalStyle.line}>Payer name: {props.item.payerName}</Typography>
          <Typography className={globalStyle.line}>Receiver name: {props.item.receiverName}</Typography>
          <Typography className={globalStyle.line}>Operation date: {props.item.operationDate}</Typography>
          <Typography className={globalStyle.line}>Document sum: {props.item.documentSum}</Typography>
          <Typography className={globalStyle.line}>Document number: {props.item.documentNumber}</Typography>
        </div>
  }

  return (
    <ExpansionPanel className={globalStyle.secondInnerExpansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={globalStyle.heading}>Operation - № {props.item.documentNumber}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.width}>
          <Button 
            size="small"
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

export default withExpandButton(Operation);

