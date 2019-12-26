import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import DocType from './DocType';
import { itemList } from './../../functions/itemList'

import { REQUEST_STYLE } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(3, 2),
    width: theme.spacing(54),
    backgroundColor: grey[300],
  },
  form: {
    width: theme.spacing(80),
  },
  textField: {
    width: theme.spacing(50),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

function IncomingFormView (props) {
  const classes = REQUEST_STYLE();
  const form = useStyles();

  return (
    <ExpansionPanel className={classes.expansionPanel} defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Incoming request</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <form method="post" id="IncomingForm" submit="IncomingForm" className={form.form}>
            <TextField
              label="Incoming id:"
              className={form.textField}
              margin="dense"
              variant="outlined"
              onChange={props.incomingIdHandle}
            />
            <TextField
              label="timestamp"
              variant="outlined"
              type="datetime-local"
              defaultValue="2010-01-01T00:00:00"
              className={form.textField}
              margin="dense"
              inputProps={{step: 1}} // 1 sec
              onChange={props.timestampHandle}
            />
          </form>
          {itemList(DocType, props.incoming.docTypes)}
          <Button 
            size="small"
            variant="outlined" 
            onClick={props.addDocTypeHandle}
            className={form.button}
          >
            Add DocType
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={props.submitHandle}
            className={form.button}
            form="IncomingForm"
          >
            Submit
          </Button>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default IncomingFormView;

