import React from 'react';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    width: theme.spacing(60),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthorizationView = (props) => {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Authorization
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User name"
            autoFocus
            onChange={(event) => props.userNameHandler(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => props.passwordHandler(event)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => props.buttonHandler(event)}
          >
            Sign In
          </Button>
        </form>
      </Container>
    </div>
  )
}


export default AuthorizationView;
