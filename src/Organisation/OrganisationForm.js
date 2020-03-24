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
import shortid from 'shortid';

import Account from './Account';
import { EMPTY_ACC } from './initialState';

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

  const [orgName, setOrgName] = React.useState(props.item.orgName);
  const [orgId, setOrgId] = React.useState(props.item.orgId);
  const [orgInn, setOrgInn] = React.useState(props.item.orgInn);

  const [accounts, setAccounts] = React.useState(props.item.accounts);
  const updateAccount = (obj, index) => accounts[index] = Object.assign({}, accounts[index], obj);
  const addAccount = () => setAccounts(accounts.concat(Object.assign({}, EMPTY_ACC)));
  const removeAccount = indexAcc => {
    if (accounts.length === 1) {
      return;
    }
    setAccounts(accounts.filter((item, index) => (index === indexAcc) ? false : true ));
  }

  const saveOrg = () => {
    let updatedOrg = {
      orgName: orgName,
      orgId: orgId,
      orgInn: orgInn,
      accounts: accounts,
    }
    props.save(updatedOrg, props.index);
  }

  const inputField = (text, handle, value) => 
    <TextField
      label={text}
      className={classes.inputField}
      margin="dense"
      variant="outlined"
      onChange={handle}
      defaultValue={value}
    />;

  const accountList = accounts.map((item, index) => 
    <Account
      item={item}
      index={index}
      key={shortid.generate()}
      buttonName="Delete"
      buttonHandler={removeAccount}
      updateAcc={updateAccount}
    />
  )

  return (
    <Dialog open={props.open} onClose={props.close} maxWidth='lg' fullWidth>
      <DialogTitle className={classes.title}>{props.title}</DialogTitle>
      <DialogContent dividers>
        <Grid container justify="space-evenly" alignItems="flex-start">
          <Grid item className={classes.leftCollumn}>
            <Box border={1} borderRadius={4} borderColor={grey[500]} className={classes.content}>
              {inputField("orgName", event => setOrgName(event.target.value), orgName)}
              {inputField("orgId", event => setOrgId(event.target.value), orgId)}
              {inputField("orgInn", event => setOrgInn(event.target.value), orgInn)}
            </Box>
          </Grid>
          <Grid item className={classes.rightCollumn}>
            {accountList}
            <div className={classes.content}>
              <Button variant="outlined" onClick={addAccount}>Add account</Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={saveOrg} color="primary">
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

