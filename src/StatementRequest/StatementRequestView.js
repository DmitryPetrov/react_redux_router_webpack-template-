import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { itemList } from './../functions/itemList';
import { createDigest } from './createDigest';
import Account from './Account';
import SignGenerator from './../SignGenerator/SignGenerator';
import StatementRequestForm from './StatementRequestForm';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  gridItem: {
    width: theme.spacing(47),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  },
  addAccountButton: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
    color: theme.palette.primary.main,
  }
}));

function StatementRequestView(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Statement request
        </Typography>

        <Grid container 
          spacing={1} 
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          <Grid item xs={4} className={classes.gridItem}>
            <StatementRequestForm
              docDateHandle={props.docDateHandle}
              docIdHandle={props.docIdHandle}
              docNumberHandle={props.docNumberHandle}
              fromDateHandle={props.fromDateHandle}
              orgIdHandle={props.orgIdHandle}
              orgInnHandle={props.orgInnHandle}
              orgNameHandle={props.orgNameHandle}
              toDateHandle={props.toDateHandle}
              submitHandle={props.submitHandle}
            />
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            {itemList(Account, props.accounts)}
            <Button 
              variant="outlined"
              onClick={props.addAccountHandle}
              className={classes.addAccountButton}
            >
              Add account
            </Button>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <SignGenerator handle={props.signCollectionHandle} createDigest={createDigest}/> 
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={props.submitHandle}
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

