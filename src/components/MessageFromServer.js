import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    marginTop: theme.spacing(2),
  },
  typography_error: {
    marginTop: theme.spacing(7),
    color: theme.palette.error.dark,
  },
  typography_ok: {
    marginTop: theme.spacing(7),
  },
  bottomSpace: {
    marginBottom: theme.spacing(5),
  }
}));

function AuthorizationResponse(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  if (props.request.isFail === true) {
    return (
      <div className={clsx(globalStyle.paper, classes.bottomSpace)}>
        <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.typography_error}>
            Failed
          </Typography>
        </Container>
      </div>
    );
  }

  if (props.request.isLoading === true) {
    return (
      <div className={clsx(globalStyle.paper, classes.bottomSpace)}>
        <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
          <CircularProgress disableShrink />
          <Typography component="h1" variant="h5" className={classes.typography}>
            Loading
          </Typography>
        </Container>
      </div>
     );
  }

  if (props.request.isSucceed === true) {
    return (
      <div className={clsx(globalStyle.paper, classes.bottomSpace)}>
        <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.typography_ok}>
            {props.request.response.message}
          </Typography>
        </Container>
      </div>
    );
  }

  return (<div className={clsx(globalStyle.paper, classes.bottomSpace)}></div>);
}

export default AuthorizationResponse;