import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import SignGenerator from './../../SignGenerator/SignGenerator';

import { DIGEST_SCHEME_INFO } from './../initialState';
import PartPayments from './PartPayments';
import PayerInfo from './PayerInfo';
import PaymentInfo from './PaymentInfo';
import ReceiverInfo from './ReceiverInfo';
import DocInfo from './DocInfo';
import VatInfo from './VatInfo';
import BankInfo from './BankInfo';
import OperationInfo from './OperationInfo';
import OrgInfo from './OrgInfo';
import ExternalInfo from './ExternalInfo';
import OtherInfo from './OtherInfo';
import { createDigest } from './../createDigest';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../../style';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    height: theme.spacing(5),
  },
  spacing: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  addPayRequestPart: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
    color: theme.palette.primary.main,
  }
}));

function PayRequestView(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Pay request
        </Typography>
        <Grid 
          container 
          spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          <Grid item xs={4} className={classes.gridItem}>
            <PayerInfo/>
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <ReceiverInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <PaymentInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <div className={classes.spacing}>
              <OrgInfo />
            </div>
            <div className={classes.spacing}>
              <OperationInfo />
            </div>
            <ExternalInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <DocInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <div className={classes.spacing}>
              <VatInfo />
            </div>
            <BankInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <OtherInfo />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <PartPayments partPayments={props.partPayments}/>
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <SignGenerator
              handle={props.signCollectionHandle}
              createDigest={createDigest}
              data={props.dataForSign}
              digestSchemeInfo={DIGEST_SCHEME_INFO}
            /> 
          </Grid>

        </Grid>    
        <Button
          variant="contained"
          onClick={props.submit}
          className={classes.button}
          form="StatementRequestForm"
        >
          Submit
        </Button>
      </Container>
    </div>
    )
}

export default PayRequestView;

