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

function Statement(props)  {
  const globalStyle = REQUEST_STYLE();
  const classes = useStyles();

  let content;
  if (props.json === true) {
    content = <Box component="pre" overflow="auto">
          <pre>{JSON.stringify(props.item, undefined, 2)}</pre>
        </Box>;
  } else {
    content = <div className={globalStyle.content}>
          <Typography className={globalStyle.line}>Org name: {props.item.orgName}</Typography>
          <Typography className={globalStyle.line}>From date: {props.item.fromDate}</Typography>
          <Typography className={globalStyle.line}>To date: {props.item.toDate}</Typography>
        </div>
  }

  return (
    <ExpansionPanel className={globalStyle.innerExpansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={globalStyle.heading}>Doc type: Statement</Typography>
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

export default withExpandButton(Statement);

