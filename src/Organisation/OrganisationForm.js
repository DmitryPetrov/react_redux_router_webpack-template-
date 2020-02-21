import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import grey from '@material-ui/core/colors/grey';

import Account from './Account';

const useStyles = makeStyles(theme => ({
  inputField: {
    width: "96%",
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftCollumn: {
    width: '30%',
  },
  rightCollumn: {
    width: '60%',
  },
  content: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

function OrganisationForm(props) {
  const classes = useStyles();

  const inputField = (text, handle, value) => 
    <TextField
      label={text}
      className={classes.inputField}
      margin="dense"
      variant="outlined"
      onChange={handle}
      defaultValue={value}
    />;

  const accountList = props.item.accounts.map((item, index) => 
    <Account
      item={item}
      index={index}
      key={item.accountId}
      buttonName="Delete"
      buttonHandler={props.removeAcc}
      updateAcc={props.updateAcc}
    />)

  return (
    <Dialog open={props.open} onClose={props.close} maxWidth='lg' fullWidth>
      <DialogTitle className={classes.title}>Update organisation</DialogTitle>
      <DialogContent dividers>
        <Grid container justify="space-evenly" alignItems="flex-start">
          <Grid item className={classes.leftCollumn}>
            <Box border={1} borderRadius={4} borderColor={grey[500]} className={classes.content}>
              {inputField("orgName", (event) => props.updateOrg({"orgName": event.target.value}), props.item.orgName)}
              {inputField("orgId", (event) => props.updateOrg({"orgId": event.target.value}),  props.item.orgId)}
              {inputField("payerName", (event) => props.updateOrg({"payerName": event.target.value}),  props.item.payerName)}
              {inputField("payerInn", (event) => props.updateOrg({"payerInn": event.target.value}),  props.item.payerInn)}
              {inputField("payerId", (event) => props.updateOrg({"payerId": event.target.value}),  props.item.payerId)}
            </Box>
          </Grid>
          <Grid item className={classes.rightCollumn}>
            {accountList}
            <div className={classes.content}>
              <Button variant="outlined" onClick={props.addAcc}>Add account</Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.save} color="primary">
          Save
        </Button>
        <Button onClick={props.close} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default OrganisationForm;

