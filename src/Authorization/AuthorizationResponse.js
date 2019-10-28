import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
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
  }
}));

function AuthorizationResponse(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  if (props.request.isFail === true) {
    return (
      <div className={globalStyle.paper}>
      	<Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.typography_error}>
            Authorization failed
          </Typography>
        </Container>
      </div>
    );
  }

  if (props.request.isLoading === true) {
    return (
      <div className={globalStyle.paper}>
      	<Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
          <CircularProgress disableShrink />
          <Typography component="h1" variant="h5" className={classes.typography}>
            Authorization in process
          </Typography>
        </Container>
      </div>
     );
  }

  if (props.request.isSuccessed === true) {
    return (
      <div className={globalStyle.paper}>
      	<Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
	        <Typography component="h1" variant="h5" className={classes.typography}>
	          Authorization successed
	        </Typography>
	        <Typography component="h1" variant="h5" className={classes.typography}>
	          {props.request.response.message}
	        </Typography>
        </Container>
      </div>
    );
  }

  return (<div className="AuthorizationResponse"></div>);
}

export default AuthorizationResponse;