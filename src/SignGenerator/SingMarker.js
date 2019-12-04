import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  singSection: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const SingMarker = (props) => {
  const style = useStyles();

  if (props.sign.content !== undefined) {
    return <Typography component="h1" variant="body1" className={style.singSection}>Document is signed</Typography>;
  }

  if (props.signGenerating === true) {
    return <CircularProgress disableShrink className={style.singSection}/>;
  }

  return null;
}

export default SingMarker;
