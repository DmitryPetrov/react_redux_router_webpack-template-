import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DateWithTimezoneInput from './../components/DateWithTimezoneInput';
import { itemList } from './../functions/itemList';
import Account from './Account';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  gridItem: {
    width: theme.spacing(50),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: theme.spacing(50),
  },
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  }
}));

function StatementRequestView(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  const textField = (text, handler) => <TextField
                    label={text}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    onChange={handler}
                  />;

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Statement request
        </Typography>

        <Grid container 
          spacing={3} 
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          <Grid item xs={4} className={classes.gridItem}>
            <form method="post" id="StatementRequestForm" submit="StatementRequestForm" className={classes.form}>
              <TextField
                label="docDate"
                variant="outlined"
                type="datetime-local"
                defaultValue="2010-01-01T00:00:00"
                className={classes.textField}
                margin="dense"
                inputProps={{step: 1}} // 1 sec
                onChange={props.docDateHandler}
              />
              {textField("doc Id", props.docIdHandler)}
              {textField("doc Number", props.docNumberHandler)}
              <DateWithTimezoneInput labelText={"fromDate"} dispatchFunc={props.fromDateHandler}/>
              {textField("org Id", props.orgIdHandler)}
              {textField("org Inn", props.orgInnHandler)}
              {textField("org Name", props.orgNameHandler)}
              <DateWithTimezoneInput labelText={"toDate"} dispatchFunc={props.toDateHandler}/>
            </form>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            {itemList(Account, props.accounts)}   
          </Grid>
        </Grid>

        <Button 
          color="primary" 
          variant="outlined" 
          onClick={props.addAccountHandler}
          className={classes.button}
        >
          Add account
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={props.submitHandler}
          className={classes.button}
          form="StatementRequestForm"
        >
          Submit
        </Button>
      </Container>
    </div>
    )
}

export default StatementRequestView;

