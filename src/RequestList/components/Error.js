import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';

import SoapMessageList from './../../components/SoapMessageList';
import { REQUEST_STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  width: {
    width: '100%',
  },
}));

function Error(props)  {
  const globalStyle = REQUEST_STYLE();
  const classes = useStyles();

  return (
    <ExpansionPanel className={globalStyle.expansionPanelError}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={globalStyle.heading}>ERROR!!!</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
	      <div className={classes.width}>
	      	<Typography className={globalStyle.heading}>Server message: {props.message}</Typography>
	        <SoapMessageList list={props.xmlList}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Error;

