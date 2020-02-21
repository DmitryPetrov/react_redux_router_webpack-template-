import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Account from './Account';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

function AccountListForSelect(props) {
  const classes = useStyles();

  const accountList = () => props.item.accounts.map((item, index) => 
    <Account
      item={item}
      index={index}
      key={item.accountId}
      buttonName="Select"
      buttonHandler={props.selectAcc}
      selected={(props.selected.acc.accountId === item.accountId) ? true : false}
    />)

  return (
    <Dialog open={props.open} onClose={props.close} maxWidth='md' fullWidth>
      <DialogTitle className={classes.title}>Select account</DialogTitle>
      <DialogContent dividers>
        {accountList()}
      </DialogContent>
    </Dialog>
  )
}

export default AccountListForSelect;

