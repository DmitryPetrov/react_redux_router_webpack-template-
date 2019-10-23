import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import SoapMessageList from './../components/SoapMessageList';
import { REQUEST_STYLE } from './style';

function Error(props)  {
  const classes = REQUEST_STYLE();

  return (
    <ExpansionPanel className={classes.expansionPanelError}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>ERROR!!!</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
	      <div>
	      	<Typography className={classes.heading}>Server message: {props.message}</Typography>
	        <SoapMessageList list={props.xmlList}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Error;

