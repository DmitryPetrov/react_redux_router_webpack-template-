import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';

import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    color: theme.palette.secondary.light,
    width: "40%",
    marginBottom: theme.spacing(1),
  },
  collumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '48%',
  },
  component: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  mark: {
    background: 'linear-gradient(45deg, rgba(255,205,210,1) 50%, rgba(255,205,179,1) 99%)',
  }
}));

function Account(props) {
  const classes = useStyles();

  const textField = (text, handle, value) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handle}
                    defaultValue={value}
                  />;

  return (
    <Box 
      border={1} 
      borderRadius={4} 
      borderColor={grey[500]}
      className={clsx(classes.component, { [classes.mark]: props.selected === true, })}
    >
      <div className={classes.collumn}>
        {textField("account", (event) => props.updateAcc({"account": event.target.value}, props.index), props.item.account)}
        {textField("accountId", (event) => props.updateAcc({"accountId": event.target.value}, props.index),  props.item.accountId)}
        {textField("payerBankSettlementType", (event) => props.updateAcc({"payerBankSettlementType": event.target.value}, props.index),  props.item.payerBankSettlementType)}
        {textField("payerBankCity", (event) => props.updateAcc({"payerBankCity": event.target.value}, props.index),  props.item.payerBankCity)}
      </div>
      <div className={classes.collumn}>
        {textField("bankName", (event) => props.updateAcc({"bankName": event.target.value}, props.index), props.item.bankName)}
        {textField("bankBIC", (event) => props.updateAcc({"bankBIC": event.target.value}, props.index), props.item.bankBic)}
        {textField("bankCorrAccount", (event) => props.updateAcc({"bankCorrAccount": event.target.value}, props.index), props.item.bankCorrAccount)}
        <Button variant="outlined" className={classes.button} onClick={ () => props.buttonHandler(props.index)} >
          {props.buttonName}
        </Button>
      </div>
    </Box>
  )
}

export default Account;
