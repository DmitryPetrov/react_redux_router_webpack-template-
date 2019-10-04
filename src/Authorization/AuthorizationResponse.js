import React from 'react';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SoapMessageList from './../components/SoapMessageList'
import ObjectFromServer from './../components/ObjectFromServer'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
  	marginTop: theme.spacing(2),
  }
}));


function AuthorizationResponse(props) {
  const classes = useStyles();

  if (props.request.isFail === true) {
    return (
    	<Container component="main" maxWidth="md" className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography}>
          Authorization failed
        </Typography>
      </Container>
    );
  }

  if (props.request.isLoading === true) {
    return (
    	<Container component="main" maxWidth="md" className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography}>
          Authorization in process
        </Typography>
      </Container>
     );
  }

  if (props.request.isSuccessed === true) {
    return (
    	<Container component="main" maxWidth="md">
      	<div className={classes.paper}>
	        <Typography component="h1" variant="h5" className={classes.typography}>
	          Authorization successed
	        </Typography>
	        <Typography component="h1" variant="h5" className={classes.typography}>
	          {props.request.response.message}
	        </Typography>
      	</div>
      </Container>
    );
  }

  return (
    <div className="AuthorizationResponse">
    </div>
  );
}

export default AuthorizationResponse;